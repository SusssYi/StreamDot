/* eslint-disable @typescript-eslint/no-floating-promises */
import IntegratedSVG from "@/components/ui/IntegratedSVG";
import { gsap } from "gsap";
import { signIn, useSession } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect } from "react";

interface loginProps {}
const Login: React.FC<loginProps> = () => {
  const router = useRouter();

  const { data } = useSession();
  useEffect(() => {
    if (data?.user) {
      router.replace("/movies");
    }
  }, [data]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const timeline = gsap.timeline();
      timeline
        .from(".login-image", {
          duration: 0.7,
          opacity: 0,
          stagger: 0.6,
          x: -100,
          ease: "elastic.out(1, 0.5)",
        })
        .from(".login-bg-warper", {
          duration: 1.5,
          opacity: 0,
          ease: "power4.out",
        });
    });

    return () => ctx.revert();
  }, []);
  return (
    <div className=" relative  flex  h-auto w-full flex-col-reverse overflow-x-hidden overflow-y-hidden bg-[#000002]   lg:h-screen  lg:flex-row">
      {/* Right */}
      <div className="flex flex-1  flex-col px-12 py-4">
        <nav className="flex  w-full  flex-1 flex-col items-center justify-between md:flex-row">
          <div className=" hover:scale-70  z-[40] cursor-pointer  text-2xl font-bold uppercase text-white transition-all duration-300  ">
            <Image
              src="/images/logo2.png"
              alt=""
              sizes="1000px"
              width={200}
              height={100}
              onClick={() => {
                // eslint-disable-next-line @typescript-eslint/no-floating-promises
                router.push("/");
              }}
            />
          </div>
        </nav>
        <div className="flex flex-[5] flex-col items-center space-y-24   py-24  ">
          <div className="font-Oswald text-6xl font-bold">LOG IN</div>
          <div className="w-auto space-y-24 lg:w-full">
            {/* TODO: google login button */}
            <div
              className="group flex   cursor-pointer items-center justify-center  space-x-8 rounded-2xl px-24 py-8 text-2xl shadow-lg shadow-secondary "
              onClick={() => {
                signIn("google");
              }}
            >
              <div className="transition-all duration-200 group-hover:animate-bounce  ">
                <IntegratedSVG category="google" size={40} />
              </div>
              <div>Login With Google</div>
            </div>
            <div className=" flex w-full justify-center font-Oswald text-4xl font-bold">
              OR
            </div>
            {/* TODO: discord login button */}
            <div
              className="group flex cursor-pointer items-center justify-center space-x-8  rounded-2xl px-24 py-8 text-2xl shadow-lg shadow-secondary "
              onClick={() => {
                signIn("discord", {
                  callbackUrl: "http://localhost:3000/movies",
                });
              }}
            >
              <div className="transition-all duration-200 group-hover:animate-bounce ">
                <IntegratedSVG category="discord" size={40} />
              </div>
              <div>Login With Discord</div>
            </div>
          </div>
        </div>
      </div>
      {/* Left */}
      <div className="relative grid  w-full flex-1 grid-rows-4 shadow-lg shadow-secondary lg:h-full lg:grid-cols-4 lg:grid-rows-1">
        <div className="login-bg-warper absolute left-0 top-0 z-50 h-full w-full bg-secondary/20"></div>
        <div className="login-image  row-span-1 lg:col-span-1 ">
          <Image
            src="/images/login/img1.webp"
            alt=""
            className="h-full w-full object-cover"
            width={1000}
            height={1000}
          />
        </div>
        <div className="login-image row-span-2 lg:col-span-2">
          <Image
            src="/images/login/img2.webp"
            alt=""
            className="h-full w-full object-cover shadow-md shadow-black"
            width={1000}
            height={1000}
          />
        </div>
        <div className="login-image row-span-1 lg:col-span-1">
          <Image
            src="/images/login/img3.webp"
            alt=""
            className="h-full w-full object-cover"
            width={1000}
            height={1000}
          />
        </div>
      </div>
    </div>
  );
};
export default Login;