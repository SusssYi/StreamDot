import Image from "next/image";
import React from "react";
import SecondaryTitle from "../ui/SecondaryTitle";

interface MainPosterProps {}
const MainPoster: React.FC<MainPosterProps> = () => {
    return (
        <section
            title="MainPoster"
            className=" flex h-auto  w-full flex-col items-center"
            data-aos="fade-up"
        >
            <SecondaryTitle text="CONTENT FOR EVERY ONE" />

            {/* content box */}
            <div className=" z-50 grid h-auto min-h-[50vh] grid-cols-1 gap-4 bg-gradient-to-r from-primary to-secondary px-8 py-4 shadow-md shadow-secondary md:grid-cols-3">
                <div className="col-span-1 shadow-md shadow-secondary ">
                    {/* FIXME:use Next Image to instead */}
                    <Image
                        width={300}
                        priority
                        height={300}
                        src="/images/content/1.webp"
                        alt=""
                        className="h-full w-full rounded-md object-cover"
                    />
                </div>
                <div className="col-span-1 shadow-md shadow-secondary ">
                    <Image
                        width={300}
                        priority
                        height={300}
                        src="/images/content/2.webp"
                        alt=""
                        className="h-full w-full rounded-md object-cover"
                    />
                </div>
                <div className="col-span-1 shadow-md shadow-secondary ">
                    <Image
                        width={300}
                        priority
                        height={300}
                        src="/images/content/3.webp"
                        alt=""
                        className="h-full w-full rounded-md object-cover"
                    />
                </div>
            </div>
        </section>
    );
};
export default MainPoster;
