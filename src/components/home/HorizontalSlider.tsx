import GsapAnimation from "@/utils/Animations";
import SliderMocks from "@/utils/SliderMocks";
import { gsap } from "gsap";
import React, { useEffect, useRef } from "react";
import SecondaryTitle from "../ui/SecondaryTitle";
interface HorizontalSliderProps {}
const HorizontalSlider: React.FC<HorizontalSliderProps> = () => {
  const topSlider = SliderMocks[0];
  const bottomSlider = SliderMocks[1];

  return (
    <div
      className=" flex h-auto min-h-[100vh] w-full flex-col items-center py-24"
      data-aos="fade-up"
    >
      <div>
        <SecondaryTitle
          text="BIGGEST COLLECTION OF BLOCKBUSTER MOVIES"
          LineLength={10}
        />
      </div>
      {/* TopSlider */}
      <div className=" flex h-auto w-full flex-col space-y-12">
        <SliderBox sliderData={topSlider || []} duration={20} />
        <SliderBox sliderData={bottomSlider || []} duration={40} />
      </div>

      <div></div>
    </div>
  );
};
export default HorizontalSlider;

const SliderBox = ({
  sliderData,
  duration = 20,
}: {
  sliderData: string[];
  duration?: number;
}) => {
  const sliderRef = useRef<HTMLDivElement>(null!);
  useEffect(() => {
    const ctx = gsap.context(() => {
      GsapAnimation.HorizontalSliderAnimation(sliderRef, duration);
    });
    return () => {
      ctx.revert();
    };
  }, []);
  return (
    <div
      ref={sliderRef}
      className="slider-box z-99 flex h-[25vh] w-auto min-w-[100vw] space-x-12 bg-primary lg:h-[h-40vh]   xl:h-[50vh]"
    >
      {sliderData?.map((images, index) => (
        <div
          key={index}
          className="h-full w-auto min-w-[18vw] rounded-md p-1 shadow-md shadow-secondary"
        >
          <img
            src={images}
            alt="topSlider"
            className=" h-full w-full  rounded-md object-cover "
          />
        </div>
      ))}
    </div>
  );
};