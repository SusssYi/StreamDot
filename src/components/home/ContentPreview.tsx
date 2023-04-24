import React from "react";
import { useMediaQuery } from "react-responsive";
import MainButton from "../ui/MainButton";
import SecondaryTitle from "../ui/SecondaryTitle";

interface ContentPreviewProps {}
const ContentPreview: React.FC<ContentPreviewProps> = () => {
  const isMobile = useMediaQuery({ query: "(min-width: 840px)" });
  return (
    <div
      className=" flex h-auto min-h-[100vh] w-full flex-col items-center space-y-16 py-10 xl:space-y-0"
      data-aos="fade-up"
    >
      {/* title */}
      {isMobile ? (
        <SecondaryTitle LineLength={105} text="STREAM ANYWHERE ANYTIME" />
      ) : (
        <SecondaryTitle LineLength={20} text="STREAM ANYWHERE ANYTIME" />
      )}
      {/* Main banner  */}
      <div className="relative flex h-auto w-full justify-center">
        <div className="contents">
          <img
            src="/images/preview/img1.png"
            alt=""
            className="  w-[90%] md:w-[70%]"
          />
        </div>

        <div className="absolute -bottom-20 left-0  ">
          <img
            src="/images/preview/img2.png"
            alt=""
            className="mt-40 w-[40vw]"
          />
        </div>
      </div>
      {/* Devices*/}
      <div className=" mt-4 flex h-auto w-full  flex-col xl:flex-row">
        <div className="  flex h-[20vh] w-full flex-1  items-center justify-center space-x-8">
          <div>
            <ComputerSvg isComputer={true} size={300} />
          </div>
          <div className=" flex flex-col space-y-4 text-2xl font-bold">
            <div>Mac os</div>
            <div>Linux os</div>
            <div>Windows os</div>
          </div>
        </div>
        <div className="flex  flex-1 items-center justify-center space-x-8">
          <div>
            <ComputerSvg isComputer={false} size={300} />
          </div>
          <div className=" flex flex-col space-y-4 text-2xl font-bold">
            <div>Android Phone & Tablet</div>
            <div>iPhone & iPad</div>
          </div>
        </div>
      </div>
      {/* Button */}
      <div className="mt-20 md:mt-0">
        <MainButton shadow={true} style="light" text="SIGN UP NOW" />
      </div>
    </div>
  );
};
export default ContentPreview;

const ComputerSvg = ({
  isComputer,
  size,
}: {
  isComputer: boolean;
  size: number;
}) => {
  return isComputer ? (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 354.331 215.672"
    >
      <g transform="translate(-492.254 -3688.394)">
        <g transform="translate(-352 -3)">
          <path
            d="M376.675,461.547V307.035a8.367,8.367,0,0,0-8.5-8.5h-248.4a8.367,8.367,0,0,0-8.5,8.5V461.917H83.911v9.98c3.7,5.913,23.289,9.241,30.681,9.241H372.976c7.763,0,27.354-3.7,30.681-9.241v-9.98H376.675v-.37ZM116.92,307.035H371.18V461.917l-254.26-.37Z"
            transform="translate(760.343 3392.863)"
            fill="#411fd1"
          ></path>
          <rect
            width="252"
            height="154"
            transform="translate(878 3700)"
            fill="#050314"
          ></rect>
        </g>
        <g transform="translate(-265 60)">
          <path
            d="M328.683,434.824V305.641a7,7,0,0,0-7.109-7.11H113.89a7,7,0,0,0-7.109,7.11V435.133H83.911v8.344c3.092,4.944,19.471,7.726,25.652,7.726H325.591c6.49,0,22.87-3.091,25.652-7.726v-8.344H328.683v-.309ZM111.509,305.641h212.58V435.133l-212.58-.309Z"
            transform="translate(760.343 3392.863)"
            fill="#411fd1"
          ></path>
          <rect
            width="211"
            height="128"
            transform="translate(872 3699)"
            fill="#050314"
          ></rect>
        </g>
      </g>
    </svg>
  ) : (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 195 240"
    >
      <g transform="translate(-1603 -3706.837)">
        <g
          transform="translate(1629 3706.837)"
          fill="none"
          stroke="#411fd1"
          strokeWidth={6}
        >
          <rect width="169" height="222" rx="12" stroke="none"></rect>
          <rect x="3" y="3" width="163" height="216" rx="9" fill="none"></rect>
        </g>
        <g
          transform="translate(1606 3804.837)"
          fill="#050314"
          stroke="#707070"
          strokeWidth="1"
        >
          <rect width="70" height="138" rx="8" stroke="none"></rect>
          <rect
            x="0.5"
            y="0.5"
            width="69"
            height="137"
            rx="7.5"
            fill="none"
          ></rect>
        </g>
        <g transform="translate(1603 3801.57)">
          <g transform="translate(0 0)">
            <path
              d="M64.445,0H10.627A10.638,10.638,0,0,0,0,10.626V134.64a10.638,10.638,0,0,0,10.626,10.627H64.444a10.638,10.638,0,0,0,10.627-10.626V10.627A10.638,10.638,0,0,0,64.445,0ZM70.2,134.641a5.752,5.752,0,0,1-5.752,5.752H10.627a5.752,5.752,0,0,1-5.752-5.752V10.627a5.752,5.752,0,0,1,5.752-5.752h8.5a2.292,2.292,0,0,1,2.242,1.82l.475,2.257A3.461,3.461,0,0,0,25.233,11.7H50.326A3.461,3.461,0,0,0,53.713,8.95l.475-2.256a2.292,2.292,0,0,1,2.243-1.819h8.014A5.752,5.752,0,0,1,70.2,10.626Z"
              fill="#411fd1"
            ></path>
          </g>
        </g>
      </g>
    </svg>
  );
};
