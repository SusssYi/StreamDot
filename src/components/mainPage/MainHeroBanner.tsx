import { OriginalLanguage, type IPopular } from "@/types/popular";
import { imageBaseUrl } from "@/utils/TMDBApiHelper";
import { api } from "@/utils/api";
import GsapAnimation from "@/utils/gsapAnimations";
import { gsap } from "gsap";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { BiPlus, BiSearch } from "react-icons/bi";
import LoadingSpinCircle from "../uiComponents/LoadingSpinCircle";
import MainButton from "../uiComponents/MainButton";

interface MainHeroBannerProps {}

const johnWickMock: IPopular["results"][0] = {
    adult: false,
    backdrop_path: "/vVpEOvdxVBP2aV166j5Xlvb5Cdc.jpg",
    genre_ids: [28, 53, 80],
    id: 458156,
    original_language: OriginalLanguage.En,
    original_title: "John Wick: Chapter 3 - Parabellum",
    overview:
        "Super-assassin John Wick returns with a $14 million price tag on his head and an army of bounty-hunting killers on his trail. After killing a member of the shadowy international assassin’s guild, the High Table, John Wick is excommunicado, but the world’s most ruthless hit men and women await his every turn.",
    popularity: 384.587,
    poster_path: "/ziEuG1essDuWuC5lpWUaw1uXY2O.jpg",
    release_date: "2019-05-15",
    title: "John Wick: Chapter 3 - Parabellum",
    video: false,
    vote_average: 7.448,
    vote_count: 9126,
};
const MainHeroBanner: React.FC<MainHeroBannerProps> = () => {
    const { data, isLoading } = api.tmdb.popular.useQuery();

    const [currentMovie, setCurrentMovie] =
        useState<IPopular["results"][0]>(johnWickMock);

    const router = useRouter();

    // HeroSection Animation
    useEffect(() => {
        if (isLoading) return;

        const ctx = gsap.context(() => {
            GsapAnimation.MainHeroBannerAnimation();
        });

        return () => {
            ctx.revert();
        };
    }, [currentMovie, isLoading]);

    // Random Movie for HeroSection every 20s
    useEffect(() => {
        if (!data) return;
        const timer = setInterval(() => {
            const randomIndex = Math.floor(Math.random() * data.length);
            setCurrentMovie(data[randomIndex] ?? johnWickMock);
        }, 19000);

        return () => {
            clearInterval(timer);
        };
    }, [data]);

    if (isLoading) {
        return <LoadingSpinCircle />;
    }

    if (!data) {
        return <div>no data</div>;
    }

    return (
        <div className="relative flex h-[100vh] w-full flex-col">
            {/*  Nav */}
            <nav className=" z-[40] flex flex-col items-center justify-between   md:flex-row">
                {/* left */}
                <div className="flex items-center">
                    <div className=" hover:scale-70  z-[40] cursor-pointer  text-2xl font-bold uppercase text-white transition-all duration-300  ">
                        <div className=" contents">
                            <Image
                                className=" h-auto w-auto "
                                src="/images/logo2.png"
                                alt=""
                                priority
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
                        <ListElement text="HOME" />
                        <ListElement text="movies" />
                        <ListElement text="series" />
                    </div>
                </div>
                {/* right */}
                <div className=" flex space-x-8 px-12">
                    {/* TODO:Add Search feature */}
                    <div className="text-2xl font-bold">
                        <BiSearch />
                    </div>
                    <ListElement text="watchList" />
                    {/* TODO:Add Avatar PIcks */}
                    <ListElement text="Avatar" />
                </div>
            </nav>
            {/* backgroundImage */}
            <div className="   absolute left-0 top-0 h-full w-full">
                {data && (
                    <Image
                        width={1500}
                        height={1080}
                        quality={30}
                        priority
                        src={`${imageBaseUrl}${
                            currentMovie?.backdrop_path ??
                            johnWickMock.backdrop_path
                        }`}
                        alt={currentMovie?.title ?? johnWickMock.title}
                        className="main-hero-bg h-full w-full  object-cover"
                    />
                )}
            </div>
            {/* ShadowMarker */}
            <div className="clip-path-box absolute left-0 top-0 z-10 h-full w-full "></div>
            {/* TODO:switchableBox */}
            <div className="main-hero-center-box z-40 flex h-auto w-full flex-1  flex-col justify-center space-y-8 px-8 text-white">
                {/* Top Box */}
                <div className="main-hero-child flex space-x-6">
                    <div className="rounded-md px-2 py-1 text-xl ring-1 ring-secondary">
                        Movie
                    </div>
                    <div className="rounded-md px-2 py-1 text-xl ring-1 ring-secondary">
                        {currentMovie?.release_date}
                    </div>
                </div>
                <div className=" flex max-w-[50%] flex-wrap justify-start space-x-4  text-start font-bold uppercase text-white">
                    {currentMovie?.title.split(" ").map((text, index) => (
                        <span
                            key={index}
                            className="main-hero-child font-Oswald text-8xl"
                        >
                            {text}
                        </span>
                    ))}
                </div>
                {/* Line */}
                <div className="main-hero-child-line hero-line relative h-[2px] w-[15%] bg-gray-600">
                    <div className="hero-line-sub   absolute h-[2px] w-0 bg-secondary"></div>
                </div>
                <div className=" main-hero-child flex items-center space-x-4 text-lg">
                    <div>Crime |</div>
                    <div>Mystery |</div>
                    <div>Thriller |</div>
                    <div className=" px-2 py-1 ring-1 ring-white">
                        {johnWickMock.adult ? "PG-18" : "PG-13"}
                    </div>
                </div>
                <div className="main-hero-child max-w-[40%] text-gray-400">
                    {currentMovie?.overview}
                </div>
                {/* TODO:router to movie detail page */}
                <div className=" main-hero-child flex items-center space-x-8">
                    <MainButton
                        style="light"
                        text="Watch Now"
                        onClick={() => {
                            // eslint-disable-next-line @typescript-eslint/no-floating-promises
                            router.push(`/movies/${currentMovie.id}`);
                        }}
                    />
                    <div className=" main-hero-child flex items-center justify-center p-5 text-3xl ring-2  ring-secondary">
                        <BiPlus />
                    </div>
                </div>
            </div>
        </div>
    );
};
export default MainHeroBanner;

// ListElement for Nav Links
const ListElement = ({ text }: { text: string }) => {
    return (
        <div className=" cursor-pointer uppercase drop-shadow-lg  transition-all  duration-200 hover:-translate-y-2 hover:scale-110 hover:drop-shadow-2xl">
            {text}
        </div>
    );
};
