import { motion } from "framer-motion";
import Head from "next/head";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { BsCaretLeftFill, BsCaretRightFill } from "react-icons/bs";
import Navbar from "src/components/common/Navbar";
import MovieSliderBox from "src/components/mainPage/listCategories/MovieSliderBox";
import { LoadingSpinCircle } from "src/components/ui";
import CastList from "src/components/videoDetailPage/CastList";
import MovieDetailInfo from "src/components/videoDetailPage/MovieDetailInfo";
import MovieReviews from "src/components/videoDetailPage/MovieReviews";
import { movieApis } from "src/utils/TMDBApiHelper";
import { api } from "src/utils/api";
interface MovieDetailProps {}
// MovieDetail page
const MovieDetail: React.FC<MovieDetailProps> = () => {
    const { query } = useRouter();
    const [x, setX] = useState(0);
    const { data: videoData, isLoading: videoIsLoading } =
        api.tmdb.getMovieVideos.useQuery({
            id: (query.id as string) ?? "",
        });

    if (videoIsLoading) {
        return <LoadingSpinCircle />;
    }
    return (
        <div className="flex h-auto min-h-screen  flex-col items-center  bg-primary text-black">
            <Head>
                <title>{videoData && videoData[0]?.name}</title>
            </Head>
            {/*  Nav */}
            <Navbar />
            {/* videoPlayer */}
            <div className="mb-[10vh] h-[80vh] w-full shadow-md shadow-secondary">
                {videoData && (
                    <iframe
                        width="100%"
                        height="100%"
                        src={`https://www.youtube.com/embed/${
                            videoData[videoData.length - 1]?.key || ""
                        }`}
                        title={videoData[videoData.length - 1]?.name}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                    ></iframe>
                )}
            </div>
            {/* MovieDetailInfoBox */}
            <MovieDetailInfo movieId={(query.id as string) ?? ""} />
            {/* Extras */}
            <div className="relative mt-[50px]  flex w-full flex-col items-start space-y-4 px-12 py-10">
                <div className=" text-2xl font-bold">Extras</div>
                <motion.div
                    animate={{
                        x: x,
                    }}
                    className="  flex space-x-4"
                >
                    {videoData &&
                        videoData.map((data) => (
                            <iframe
                                key={data.id}
                                width="400"
                                height="200"
                                src={`https://www.youtube.com/embed/${data.key}`}
                                title={data.name}
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen
                                className="rounded-md shadow-md shadow-secondary"
                            ></iframe>
                        ))}
                </motion.div>
                {/*  ButtonControl */}
                <div className="contents">
                    <div
                        className="absolute left-0 top-[50%] z-[99] flex min-w-[5rem] cursor-pointer items-center justify-center bg-gradient-to-r from-transparent to-transparent text-2xl transition-all duration-300 hover:from-black hover:text-4xl"
                        onClick={() => {
                            if (x < 0) {
                                setX((pre) => {
                                    return pre + 200;
                                });
                            } else {
                            }
                        }}
                    >
                        <BsCaretLeftFill />
                    </div>
                    <div
                        className="absolute right-0 top-[50%] z-[99] flex min-w-[5rem] cursor-pointer items-center justify-center bg-gradient-to-l from-transparent to-transparent  text-2xl transition-all duration-200 hover:from-black hover:text-4xl "
                        onClick={() => {
                            if (x > -(200 * 10)) {
                                setX((pre) => {
                                    return pre - 200;
                                });
                            } else {
                            }
                        }}
                    >
                        <BsCaretRightFill />
                    </div>
                </div>
            </div>
            {/* Cast & Crew */}
            <CastList movieId={(query.id as string) ?? ""} />
            {/* MovieReviews */}
            <MovieReviews movieId={(query.id as string) ?? ""} />
            <div className=" flex h-auto min-h-[30vh] w-full flex-col space-y-[10vh] px-10 py-20">
                <MovieSliderBox
                    movieUrl={movieApis.getMovieRecommendations(
                        query.id as string
                    )}
                    title="Recommendations"
                />
            </div>
        </div>
    );
};
export default MovieDetail;
