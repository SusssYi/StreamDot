import ContentPreview from "@/components/ContentPreview";
import HeroLanding from "@/components/HeroLanding";
import MainPoster from "@/components/MainPoster";
import SliderSection from "@/components/SliderSection";
import React from "react";

interface indexProps {}
const Home: React.FC<indexProps> = () => {
  return (
    <div className=" h-auto w-full  space-y-[10vh] bg-primary md:space-y-[20vh]">
      <HeroLanding />
      <SliderSection />
      <ContentPreview />
      <MainPoster />
    </div>
  );
};
export default Home;
