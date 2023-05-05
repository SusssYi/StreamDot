import Image from "next/image";
import React from "react";
import { useMediaQuery } from "react-responsive";
import IntegratedSVG from "../uiComponents/IntegratedSVG";
import MainButton from "../uiComponents/MainButton";
import SecondaryTitle from "../uiComponents/SecondaryTitle";

interface ContentPreviewProps {}
const ContentPreview: React.FC<ContentPreviewProps> = () => {
    const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
    return (
        <div className=" flex h-auto min-h-[100vh] w-full flex-col items-center space-y-16 py-10 xl:space-y-0" data-aos="fade-up">
            {/* title */}
            {!isMobile ? <SecondaryTitle LineLength={110} text="STREAM ANYWHERE ANYTIME" /> : <SecondaryTitle LineLength={20} text="STREAM ANYWHERE ANYTIME" />}
            {/* Main banner  */}
            <div className="relative flex h-auto w-full justify-center">
                <div className="contents">
                    <Image height={1300} width={1080} priority quality={50} src="/images/preview/img1.png" alt="" className="  w-[90%] md:w-[70%]" />
                </div>

                <div className="absolute -bottom-20 left-0  ">
                    <Image height={600} width={600} priority src="/images/preview/img2.png" alt="" className="mt-40 w-[40vw]" />
                </div>
            </div>
            {/* Devices*/}
            <div className=" mt-4 flex h-auto w-full  flex-col xl:flex-row">
                <div className="  flex h-[20vh] w-full flex-1  items-center justify-center space-x-8">
                    <div>
                        <IntegratedSVG size={300} category="computer" />
                    </div>
                    <div className=" flex flex-col space-y-4 text-2xl font-bold">
                        <div>Mac os</div>
                        <div>Linux os</div>
                        <div>Windows os</div>
                    </div>
                </div>
                <div className="flex  flex-1 items-center justify-center space-x-8">
                    <div>
                        <IntegratedSVG size={300} category="mobile" />
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
