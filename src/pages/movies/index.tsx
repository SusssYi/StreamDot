import { MainHeroBanner, MovieCategories } from "@/components/mainPage/";
import { motion } from "framer-motion";
import React from "react";
interface moviesProps {}
const movies: React.FC<moviesProps> = () => {
    return (
        <motion.div
            className=" h-auto min-h-[100vh]  w-full space-y-[10vh] overflow-x-hidden bg-primary md:space-y-[20vh]"
            initial={{
                opacity: 0,
                x: 100,
            }}
            animate={{
                opacity: 1,
                x: 0,
            }}
            exit={{
                opacity: 0,
                x: -100,
            }}
            transition={{
                duration: 1,
                ease: "easeInOut",
            }}
        >
            <MainHeroBanner />
            {/* TODO: Finish ContinueWatch */}
            {/* <ContinueWatch /> */}
            <MovieCategories />
        </motion.div>
    );
};
export default movies;
