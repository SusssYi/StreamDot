import GsapAnimation from "@/utils/Animations";
import postMock from "@/utils/postMock";
import { gsap } from "gsap";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import SecondaryTitle from "../ui/SecondaryTitle";
interface SliderSectionProps {}
const SliderSection: React.FC<SliderSectionProps> = () => {
  const [currentNumber, setcurrentNumber] = useState(0);
  const [currentData, setCurrentData] = useState<
    (typeof postMock)[0] | undefined
  >(postMock[currentNumber]);

  // Animations
  useEffect(() => {
    const ctx = gsap.context(() => {
      GsapAnimation.SliderSectionAnimation();
    });

    return () => ctx.revert();
  }, [currentData]);

  // Change current data each 5 seconds
  useEffect(() => {
    if (!currentData) return;
    const dataLength = postMock.length;
    const interval = setInterval(() => {
      setcurrentNumber((prev) => {
        const next = prev === dataLength - 1 ? 0 : prev + 1;
        setCurrentData(postMock[next]);
        return next;
      });
    }, 5000);

    return () => clearInterval(interval);
  }, [currentNumber]);
  return (
    <div
      className=" flex h-auto min-h-[100vh] w-full flex-col items-center "
      data-aos="fade-up"
    >
      {/* Title */}
      <SecondaryTitle text="ALL YOUR ORIGINALS IN ONE PLACE" />

      {/* MainSlider */}
      <div className="  z-30  flex h-auto min-h-[100vh] w-full  flex-col md:flex-row">
        {/* left */}
        <div className="h-auto w-full flex-[2] bg-primary ">
          <div className="   md:min-h-[100vh]:  flex h-full w-full items-center justify-center shadow-md shadow-secondary">
            <Image
              src={currentData?.logo || ""}
              alt=""
              width={400}
              height={600}
              className=" logo  h-[600px] w-[400px] object-contain"
            />
          </div>
        </div>
        {/* right */}
        <div className=" grid h-auto min-h-[100vh] w-full  flex-[4]  grid-cols-2 gap-x-10 gap-y-5 bg-gradient-to-r from-[#130a40] to-secondary p-12  lg:grid-cols-4">
          {currentData?.images.map((image, index) => (
            <div
              key={index}
              className="  col-span-1 min-h-[200px] w-full origin-center"
            >
              <img
                src={image}
                className="image-warper h-full w-full rounded-lg object-cover shadow-lg  shadow-secondary"
                alt=""
              />{" "}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default SliderSection;
