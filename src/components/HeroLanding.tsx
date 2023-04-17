import { gsap } from "gsap";
import React, { useEffect } from "react";

interface HeroLandingProps {}
// HeroLanding component
const HeroLanding: React.FC<HeroLandingProps> = () => {
  const timeline = gsap.timeline({ defaults: { duration: 1 } });
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
    timeline.clear();
    timeline
      .to(".box-warper .box", {
        stagger: 0.1,
        ease: "power2.out",
        opacity: 1,
        duration: 0.1,
      })
      .to(
        ".box-warper .box",
        {
          scale: 0.5,
          ease: "elastic.out(1, 0.5)",
        },
        "-=0.8"
      )
      .to(".box-warper .box", {
        y: (index) => (index % 2 === 0 ? "110px" : "60px"),
        stagger: 0.1,
        ease: "elastic.out(1, 0.5)",
      })

      .to(".box-warper .box", {
        scale: 1,
        ease: "elastic.out(1, 0.5)",
      })
      .fromTo(
        ".text-animation",
        {
          y: 100,
          opacity: 0,
          stagger: 0.2,
          ease: "back.out(1.7)",
        },
        {
          y: 0,
          opacity: 1,
          stagger: 0.2,
          ease: "back.out(1.7)",
        }
      )
      .to(".hidden-button", {
        opacity: 1,
        duration: 0.5,
        ease: "power2.out",
      });
  });
  return (
    <div className=" relative h-screen w-full overflow-y-hidden bg-[#000002] px-12 py-4">
      {/* Nav */}
      <nav className=" flex items-center justify-between">
        <div className=" text-2xl font-bold uppercase text-white ">Stream</div>
        <div className=" flex h-auto w-auto items-center space-x-2">
          {/* sign in */}
          <div className="z-40 cursor-pointer px-8 py-4 text-xl font-bold text-white">
            SIGN IN
          </div>
          {/* sign up */}
          <div className=" z-40 cursor-pointer rounded-md bg-secondary px-8 py-4 text-xl  font-bold  text-white">
            SIGN UP
          </div>
        </div>
      </nav>
      {/* Text mask */}
      <section className=" md:space-y- absolute inset-0 z-[30] flex h-screen w-full flex-col items-center justify-center space-y-4 bg-gradient-to-b from-transparent to-primary">
        <div className="space-x-8 font-Oswald text-4xl font-bold tracking-tight text-white md:text-6xl xl:text-8xl">
          <span className="text-animation">WELCOME</span>
          <span className="text-animation">TO</span>
          <span className="text-animation">STREAMDOT</span>
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
        <div className=" hidden-button z-40 cursor-pointer rounded-md bg-secondary  px-8 py-4 text-3xl font-bold  text-white  opacity-0">
          SIGN UP NOW
        </div>
      </section>
      {/* Images */}
      <div className="box-warper   grid  h-screen w-full grid-cols-6 gap-4   ">
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
