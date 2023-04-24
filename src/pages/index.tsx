import ContentPreview from "@/components/home/ContentPreview";
import FQA from "@/components/home/FQA";
import HeroLanding from "@/components/home/HeroLanding";
import HorizontalSlider from "@/components/home/HorizontalSlider";
import MainPoster from "@/components/home/MainPoster";
import SliderSection from "@/components/home/SliderSection";
import React from "react";

interface indexProps {}
const Home: React.FC<indexProps> = () => {
  return (
    <div className=" h-auto w-full  space-y-[10vh] overflow-x-hidden bg-primary md:space-y-[20vh]">
      <HeroLanding />
      <SliderSection />
      <ContentPreview />
      <MainPoster />
      <HorizontalSlider />
      <FQA />
      <div className=" flex justify-center pb-12 text-4xl">
        Idea From @Danish Iqbal
      </div>
    </div>
  );
};
export default Home;
