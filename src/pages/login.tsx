/* eslint-disable @typescript-eslint/no-floating-promises */
import { gsap } from "gsap";
import { signIn, useSession } from "next-auth/react";
import { NextSeo } from "next-seo";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import { IntegratedSVG } from "src/components/ui";
import GsapAnimation from "src/utils/gsapAnimations";

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
            GsapAnimation.LoginAnimation();
        });
        return () => ctx.revert();
    }, []);
    return (
        <main className=" relative  flex  h-auto w-full flex-col-reverse  bg-[#000002]   lg:h-screen  lg:flex-row ">
            <NextSeo title="login" />
            {/* Right */}
            <section
                title="login-right-box"
                className="flex h-[140vh] flex-1   flex-col  px-12 py-4 md:h-auto"
            >
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
                <div className="flex  h-auto w-full flex-[5] flex-col items-center    space-y-[4rem] ">
                    <div className="bg-gradient-to-r  from-primary to-secondary  bg-clip-text font-Oswald text-4xl font-bold text-transparent shadow-secondary drop-shadow-lg xl:text-6xl">
                        LOG IN
                    </div>
                    <div className="flex  h-auto flex-col space-y-12 lg:w-full">
                        {/* TODO: google login button  */}
                        <SingleLoginButton provider="google" />
                        <div className=" flex w-full justify-center font-Oswald text-4xl font-bold ">
                            OR
                        </div>
                        <SingleLoginButton provider="discord" />
                        <div className=" flex w-full justify-center font-Oswald text-4xl font-bold text-secondary">
                            OR
                        </div>
                        <SingleLoginButton provider="guest" />
                    </div>
                </div>
            </section>
            {/* Left */}
            <section
                title="login-left-box"
                className="relative grid  w-full flex-1 grid-rows-4 shadow-lg shadow-secondary lg:h-full lg:grid-cols-4 lg:grid-rows-1"
            >
                <div className="login-bg-warper absolute left-0 top-0 z-50 h-full w-full bg-secondary/20"></div>
                <div className="login-image  row-span-1 lg:col-span-1 ">
                    <Image
                        priority={true}
                        src="/images/login/img1.webp"
                        alt=""
                        className="h-full w-full object-cover"
                        width={500}
                        height={500}
                    />
                </div>
                <div className="login-image row-span-2 lg:col-span-2">
                    <Image
                        priority={true}
                        src="/images/login/img2.webp"
                        alt=""
                        className="h-full w-full object-cover shadow-md shadow-black"
                        width={500}
                        height={500}
                    />
                </div>
                <div className="login-image row-span-1 lg:col-span-1">
                    <Image
                        priority={true}
                        src="/images/login/img3.webp"
                        alt=""
                        className="h-full w-full object-cover"
                        width={500}
                        height={500}
                    />
                </div>
            </section>
        </main>
    );
};
export default Login;

const SingleLoginButton = ({
    provider,
}: {
    provider: "google" | "discord" | "guest";
}) => {
    const router = useRouter();
    const isMobile = useMediaQuery({ query: "(max-width: 640px)" });
    return (
        <div
            className="group flex  flex-1 cursor-pointer items-center justify-center space-x-8  rounded-2xl px-24 py-4 text-2xl shadow-lg shadow-secondary md:min-h-[10vh] "
            onClick={() => {
                if (provider === "guest") {
                    router.push("/category");
                } else {
                    signIn(provider, {
                        callbackUrl: "http://localhost:3000/category",
                    });
                }
            }}
        >
            <div className="transition-all duration-500 ease-in-out group-hover:scale-125  ">
                <IntegratedSVG category={provider} size={40} />
            </div>
            {!isMobile && (
                <div className="font-Oswald text-xs font-bold uppercase tracking-wider md:text-xl">
                    Login With {provider}
                </div>
            )}
        </div>
    );
};
