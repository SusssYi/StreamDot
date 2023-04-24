import { gsap } from "gsap";

const GsapAnimation = {
  heroSectionAnimation: () => {
    const timeline = gsap.timeline({ defaults: { duration: 1 } });
    // prevent animation play twice
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
  },
  SliderSectionAnimation: () => {
    const timeline = gsap.timeline();
    timeline
      .from(
        ".logo",
        {
          duration: 1.2,
          scale: 0,
          opacity: 0,
          ease: "power4.out",
          transformOrigin: "50% 50%",
        },
        "same"
      )
      .from(
        ".image-warper",
        {
          duration: 1.2,
          // width: 0
          scale: 0,
          opacity: 0,
          ease: "power4.out",
          transformOrigin: "50% 50%",
        },
        "same"
      );
  },
  HorizontalSliderAnimation: (
    el: React.MutableRefObject<HTMLDivElement>,
    duration: number
  ) => {
    const tl = gsap.timeline({ repeat: -1 });

    tl.to(el.current, {
      x: "-200%",
      duration: duration,
      ease: "none",
    });
    tl.to(el.current, { x: 0, duration: duration, ease: "none" });
  },
};

export default GsapAnimation;
