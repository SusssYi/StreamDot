import { gsap } from "gsap";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import SliderMocks from "src/utils/SliderMocks";
import GsapAnimation from "src/utils/gsapAnimations";
import SecondaryTitle from "../ui/SecondaryTitle";
interface HorizontalSliderProps {}
const HorizontalSlider: React.FC<HorizontalSliderProps> = () => {
    const topSlider = SliderMocks[0];
    const bottomSlider = SliderMocks[1];

    return (
        <section
            title="HorizontalSlider"
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
        </section>
    );
};
export default HorizontalSlider;

// `SliderBox` component for the  `HorizontalSlider` component
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
                    {/* FIXME:use Next Image to instead */}
                    <Image
                        width={400}
                        height={400}
                        src={images}
                        alt="topSlider"
                        className=" h-full w-full  rounded-md object-cover "
                    />
                </div>
            ))}
        </div>
    );
};
