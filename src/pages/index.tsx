import {
    ContentPreview,
    FQA,
    HeroLanding,
    HorizontalSlider,
    MainPoster,
    SliderSection,
} from "@/components/homePage";
import { motion } from "framer-motion";
import React from "react";
interface indexProps {}
const Home: React.FC<indexProps> = () => {
    return (
        <motion.div
            className=" h-auto w-full  space-y-[10vh] overflow-x-hidden bg-primary md:space-y-[20vh]"
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
            <HeroLanding />
            <SliderSection />
            <ContentPreview />
            <MainPoster />
            <HorizontalSlider />
            <FQA />
            <div className=" flex justify-center pb-12 text-4xl">
                Idea From @Danish Iqbal
            </div>
        </motion.div>
    );
};
export default Home;
