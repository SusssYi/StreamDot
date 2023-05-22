import { motion } from "framer-motion";
import { NextSeo } from "next-seo";
import React from "react";
import {
    ContentPreview,
    FQA,
    HeroLanding,
    HorizontalSlider,
    MainPoster,
    SliderSection,
} from "../components/homePage";
interface indexProps {}
const Home: React.FC<indexProps> = () => {
    return (
        <motion.main
            className=" h-auto w-full  space-y-[10vh] overflow-x-hidden bg-primary md:space-y-[20vh] "
            // Moving variants to independent file
            initial={{
                opacity: 0,
                x: -100,
            }}
            animate={{
                opacity: 1,
                x: 0,
            }}
            exit={{
                opacity: 0,
                x: 100,
            }}
            transition={{
                duration: 1.5,
                ease: "easeInOut",
            }}
        >
            {/* Seo  */}
            <NextSeo
                title="StreamDot"
                additionalLinkTags={[
                    {
                        rel: "icon",
                        href: "/favicon.ico",
                    },
                ]}
                description="StreamDot is a cutting-edge video streaming platform that offers a seamless viewing experience for users worldwide. With our extensive library of high-quality videos, you can explore a wide range of content across various genres, including movies, TV shows, documentaries, and more. Our advanced streaming technology ensures smooth playback and exceptional video quality on any device. Discover and enjoy your favorite videos with StreamDot, the ultimate destination for immersive entertainment. Sign up today and unlock a world of captivating visual content at your fingertips."
                canonical="https://stream.suyis.me"
                openGraph={{
                    url: "https://stream.suyis.me",
                    title: "StreamDot",
                    description:
                        "StreamDot is a cutting-edge video streaming platform that offers a seamless viewing experience for users worldwide. With our extensive library of high-quality videos, you can explore a wide range of content across various genres, including movies, TV shows, documentaries, and more. Our advanced streaming technology ensures smooth playback and exceptional video quality on any device. Discover and enjoy your favorite videos with StreamDot, the ultimate destination for immersive entertainment. Sign up today and unlock a world of captivating visual content at your fingertips.",
                    images: [
                        {
                            url: "https://image.tmdb.org/t/p/w500/vVpEOvdxVBP2aV166j5Xlvb5Cdc.jpg",
                            width: 800,
                            height: 600,
                            alt: "Og Image Alt",
                            type: "image/jpeg",
                        },
                    ],
                    siteName: "StreamDot",
                }}
            />
            <HeroLanding />
            <SliderSection />
            <ContentPreview />
            <MainPoster />
            <HorizontalSlider />
            <FQA />
            <div className=" flex justify-center pb-12 text-4xl">
                Idea From @Danish Iqbal
            </div>
        </motion.main>
    );
};
export default Home;
