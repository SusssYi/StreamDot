import MainHeroBanner from "@/components/main/MainHeroBanner";
import React from "react";

interface moviesProps {}
const movies: React.FC<moviesProps> = () => {
  return (
    <div className=" h-auto min-h-[100vh]  w-full space-y-[10vh] overflow-x-hidden bg-primary md:space-y-[20vh]">
      <MainHeroBanner />
    </div>
  );
};
export default movies;
