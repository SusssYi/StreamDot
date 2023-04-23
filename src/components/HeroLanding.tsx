import GsapAnimation from "@/utils/Animations";
import { gsap } from "gsap";
import Image from "next/image";
import React, { useEffect } from "react";
import MainButton from "./ui/MainButton";

interface HeroLandingProps {}
// HeroLanding component
const HeroLanding: React.FC<HeroLandingProps> = () => {
  const images = [
    "/images/heroLanding/slide1.webp",
    "/images/heroLanding/slide2.webp",
    "/images/heroLanding/slide3.webp",
    "/images/heroLanding/slide4.webp",
    "/images/heroLanding/slide5.webp",
    "/images/heroLanding/slide6.webp",
  ];
  // Animations
  useEffect(() => {
    const ctx = gsap.context(() => {
      GsapAnimation.heroSectionAnimation();
    });

    return () => ctx.revert();
  });
  return (
    <div className=" relative h-screen w-full overflow-y-hidden bg-[#000002] px-12 py-4">
      {/* Nav */}
      <nav className=" flex flex-col items-center justify-between md:flex-row">
        <div className=" hover:scale-70  z-[40] cursor-pointer  text-2xl font-bold uppercase text-white transition-all duration-300  ">
          <Image
            src="/images/logo2.png"
            alt=""
            sizes="1000px"
            width={200}
            height={100}
          />
        </div>
        <div className=" flex h-auto w-auto items-center space-x-2">
          {/* sign in */}
          <MainButton style="dark" text="SIGN IN" />

          {/* sign up */}
          <MainButton style="light" text="SIGN UP" />
        </div>
      </nav>
      {/* Text mask */}
      <section className=" md:space-y- absolute inset-0 z-[30] flex h-screen w-full flex-col items-center justify-center space-y-4 bg-gradient-to-b from-transparent to-primary">
        <div className="space-x-8 font-Oswald text-4xl font-bold tracking-tight text-white md:text-6xl xl:text-8xl">
          <span className="text-animation font-Oswald">WELCOME</span>
          <span className="text-animation font-Oswald">TO</span>
          <span className="text-animation font-Oswald">STREAMDOT</span>
        </div>
        <div className=" text-center  text-base text-white md:text-xl ">
          <span className="text-animation">
            Join StreamDot to watch the latest movies, TV shows and Originals
            from different
          </span>
        </div>
        <div className="text-animation text-center text-base text-white md:text-xl ">
          streaming platforms all in one place
        </div>
        <div
          className={`hidden-button z-40  cursor-pointer rounded-md bg-secondary px-8 py-4 text-xl font-bold  text-white  opacity-0 `}
        >
          SIGN UP NOW
        </div>
      </section>
      {/* Images */}
      <div className="box-warper   grid  h-screen w-full grid-cols-6 gap-4 ">
        {images.map((image, index) => (
          <div
            key={index}
            className={`box  opacity-1  z-0 h-[80%] w-full   grid-cols-1 shadow-lg  shadow-secondary ${
              // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
              index % 2 === 0 && "translate-y-[60px]"
            }`}
          >
            <img src={image} alt="" className="h-full w-full  object-cover" />
          </div>
        ))}
      </div>
    </div>
  );
};
export default HeroLanding;
