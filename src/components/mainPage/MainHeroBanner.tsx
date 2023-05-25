import { gsap } from "gsap";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { BiPlus } from "react-icons/bi";
import { useMediaQuery } from "react-responsive";
import { type IPopular } from "src/types/movies";
import { OriginalLanguage } from "src/types/movies/popular";
import { imageBaseUrl } from "src/utils/TMDBApiHelper";
import { api } from "src/utils/api";
import GsapAnimation from "src/utils/gsapAnimations";
import Navbar from "../common/Navbar";
import LoadingSpinCircle from "../ui/LoadingSpinCircle";
import MainButton from "../ui/MainButton";
import ContinueWatch from "./ContinueWatch";

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
    const { data: sessionData } = useSession();
    const { data, isLoading, error } = api.tmdb.popular.useQuery();
    const isMobile = useMediaQuery({ query: "(max-width: 1280px)" });

    const { mutate } = api.watchList.addToWatchList.useMutation({
        onSuccess: async () => {
            toast.success("movie  success add to watchList! ", {
                style: {
                    border: "1px solid #411fd1",
                    padding: "16px",
                    color: "#411fd1",
                },
                iconTheme: {
                    primary: "#411fd1",
                    secondary: "#FFFAEE",
                },
            });
            await utils.watchList.getWatchList.invalidate();
        },
        onError: () => {
            toast.error("movie  failed add to watchList!", {
                style: {
                    border: "1px solid #e3342f",
                    padding: "16px",
                    color: "#e3342f",
                },
                iconTheme: {
                    primary: "#e3342f",
                    secondary: "#FFFAEE",
                },
            });
        },
    });

    const [currentMovie, setCurrentMovie] =
        useState<IPopular["results"][0]>(johnWickMock);

    const utils = api.useContext();

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
            const randomIndex = Math.floor(Math.random() * data?.length);
            setCurrentMovie(
                (data[randomIndex] as IPopular["results"][0]) ?? johnWickMock
            );
        }, 19000);

        return () => {
            clearInterval(timer);
        };
    }, [data]);

    if (error) {
        return (
            <div className="flex items-center justify-center font-Oswald text-2xl font-bold text-red-500">
                {error.message}
            </div>
        );
    }

    if (isLoading) {
        return <LoadingSpinCircle />;
    }

    if (!data) {
        return <div>no data</div>;
    }

    return (
        <section
            title="MainHeroBanner"
            className="relative flex h-[100vh] w-full flex-col"
        >
            {/* nav */}
            <Navbar />
            {/* backgroundImage */}
            <div className="   absolute left-0 top-0 h-full w-full">
                {data && (
                    <Image
                        fill
                        quality={30}
                        priority
                        src={`${imageBaseUrl}${
                            currentMovie?.backdrop_path ??
                            johnWickMock.backdrop_path
                        }`}
                        placeholder="blur"
                        blurDataURL="/images/login/img3.webp"
                        alt={currentMovie?.title ?? johnWickMock.title}
                        className="main-hero-bg h-full w-full  object-cover"
                    />
                )}
            </div>
            {/* ShadowMarker */}
            <div className="clip-path-box absolute left-0 top-0 z-10 h-full w-full "></div>
            {/* TODO:switchableBox */}
            <div className="main-hero-center-box z-20 flex h-auto w-full flex-1  flex-col justify-center space-y-8 px-8 text-white">
                {/* Top Box */}
                <div className="main-hero-child flex space-x-6">
                    <div className="rounded-md px-2 py-1 text-xl ring-1 ring-secondary">
                        Movie
                    </div>
                    <div className="rounded-md px-2 py-1 text-xl ring-1 ring-secondary">
                        {currentMovie?.release_date}
                    </div>
                </div>
                <div className=" flex max-w-[50%] flex-wrap justify-start space-x-1 text-start  font-bold uppercase text-white md:space-x-4">
                    {currentMovie?.title.split(" ").map((text, index) => (
                        <span
                            key={index}
                            className="main-hero-child font-Oswald  text-2xl md:text-5xl xl:text-8xl"
                        >
                            {text}
                        </span>
                    ))}
                </div>
                {/* Line */}
                <div className="main-hero-child-line hero-line relative h-[2px] w-[15%] bg-gray-600">
                    <div className="hero-line-sub   absolute h-[2px] w-0 bg-secondary"></div>
                </div>
                <div className=" main-hero-child flex items-center space-x-4 text-sm md:text-lg">
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
                    <div
                        className=" main-hero-child flex cursor-pointer items-center justify-center p-5 text-3xl ring-2  ring-secondary"
                        onClick={() => {
                            if (sessionData?.user) {
                                mutate({
                                    movieId: `${currentMovie.id}`,
                                    backdropPath: currentMovie.backdrop_path,
                                    title: currentMovie.title,
                                    posterPath: currentMovie.poster_path,
                                    releaseDate: currentMovie.release_date,
                                    rating: currentMovie.vote_average,
                                });
                            } else {
                                toast.error("please login first!");
                            }
                        }}
                    >
                        <BiPlus />
                    </div>
                </div>
            </div>
            {/* continue Watching  */}
            {data.length !== 0 && !isMobile && <ContinueWatch data={data} />}
        </section>
    );
};
export default MainHeroBanner;
