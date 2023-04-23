import React from "react";
import SecondaryTitle from "./ui/SecondaryTitle";

interface MainPosterProps {}
const MainPoster: React.FC<MainPosterProps> = () => {
  return (
    <div
      className=" flex h-auto min-h-[100vh] w-full flex-col items-center"
      data-aos="fade-up"
    >
      <SecondaryTitle text="CONTENT FOR EVERY ONE" />

      {/* content box */}
      <div className=" z-50 grid h-auto min-h-[50vh] grid-cols-3 gap-4 bg-gradient-to-r from-primary to-secondary px-8 py-4 shadow-md shadow-secondary">
        <div className="col-span-1 shadow-md shadow-secondary ">
          <img
            src="/images/content/1.webp"
            alt=""
            className="h-full w-full rounded-md object-cover"
          />
        </div>
        <div className="col-span-1 shadow-md shadow-secondary ">
          <img
            src="/images/content/2.webp"
            alt=""
            className="h-full w-full rounded-md object-cover"
          />
        </div>
        <div className="col-span-1 shadow-md shadow-secondary ">
          <img
            src="/images/content/3.webp"
            alt=""
            className="h-full w-full rounded-md object-cover"
          />
        </div>
      </div>
    </div>
  );
};
export default MainPoster;
