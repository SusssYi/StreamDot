import { MainHeroBanner, MovieCategories } from "@/components/mainPage/";
import Genres from "@/components/mainPage/Genres";
import TvCategories from "@/components/mainPage/TvCategories";
import { motion } from "framer-motion";
import Head from "next/head";
import React from "react";
interface moviesProps {}
const movies: React.FC<moviesProps> = () => {
    return (
        <motion.main
            className=" h-auto min-h-[100vh]  w-full space-y-[10vh] overflow-x-hidden bg-primary md:space-y-[10vh]"
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
            <Head>
                <title>StreamDot</title>
            </Head>
            <MainHeroBanner />
            {/* TODO: Finish ContinueWatch */}
            <MovieCategories />
            <TvCategories />
            {/* Genres */}
            <Genres />
        </motion.main>
    );
};
export default movies;
