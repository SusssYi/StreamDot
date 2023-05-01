import { MainHeroBannerMock } from "@/utils/MainHeroBannerMock";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import { BsSearch } from "react-icons/bs";

interface MainHeroBannerProps {}
const MainHeroBanner: React.FC<MainHeroBannerProps> = () => {
  const router = useRouter();
  const data = MainHeroBannerMock[0];
  return (
    <div className="relative flex h-[100vh] w-full flex-col">
      <nav className=" z-[40] flex flex-col items-center justify-between   md:flex-row">
        {/* left */}
        <div className="flex items-center">
          <div className=" hover:scale-70  z-[40] cursor-pointer  text-2xl font-bold uppercase text-white transition-all duration-300  ">
            <div className=" contents">
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
          </div>
          <div className=" flex space-x-16 text-xl font-bold text-white ">
            <div className=" cursor-pointer drop-shadow-lg transition-all  duration-200 hover:-translate-y-2 hover:scale-110 hover:drop-shadow-2xl">
              HOME
            </div>
            <div className=" cursor-pointer drop-shadow-lg transition-all  duration-200 hover:-translate-y-2 hover:scale-110 hover:drop-shadow-2xl">
              MOVIE
            </div>
            <div className=" hover:scale-110drop-shadow-lg cursor-pointer transition-all  duration-200 hover:-translate-y-2 hover:drop-shadow-2xl ">
              SERIES
            </div>
          </div>
        </div>
        {/* right */}
        <div className=" flex">
          <div>
            <BsSearch />
          </div>
          <div></div>
          <div></div>
        </div>
      </nav>
      <div className=" absolute left-0 top-0 h-full w-full">
        <Image
          width={2000}
          height={2000}
          src={data?.image ?? ""}
          alt=""
          className="h-full w-full object-cover"
        />
      </div>
    </div>
  );
};
export default MainHeroBanner;
