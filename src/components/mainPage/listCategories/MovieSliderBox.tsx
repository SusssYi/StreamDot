import { motion } from "framer-motion";
import React, { useState } from "react";
import { BsCaretLeftFill, BsCaretRightFill } from "react-icons/bs";
import { api } from "src/utils/api";
import { LoadingSpinCircle, SinglePosterBoxSmall } from "../../ui";
interface IMovieSliderProps {
    movieUrl: string;
    title: string;
}
const MovieSliderBox: React.FC<IMovieSliderProps> = ({ movieUrl, title }) => {
    // get movie by url
    const { data, isLoading } = api.tmdb.getMovieByUrl.useQuery({
        url: movieUrl,
    });
    const [x, setX] = useState(0);

    if (isLoading) {
        return <LoadingSpinCircle />;
    }

    if (!data) {
        return <div>no data</div>;
    }

    return (
        <div className="relative flex h-auto w-auto flex-col space-y-8">
            {/* title */}
            <div>
                <h1 className="text-2xl  font-bold">{title}</h1>
            </div>
            {/* sliderBox */}
            <motion.div
                animate={{ x: x }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className=" z-20 flex h-auto w-auto min-w-full space-x-8"
            >
                {/* SinglePosterBox */}

                {data.map((movie, index) => (
                    <SinglePosterBoxSmall
                        index={index}
                        key={movie.id}
                        title={movie.title}
                        releaseDate={movie.release_date}
                        posterImage={movie.poster_path}
                        overview={movie.overview}
                        movieId={movie.id}
                        category="movie"
                    />
                ))}
            </motion.div>
            {/* TextBtn */}
            <div className="contents">
                <div
                    className="absolute -left-[2.5rem] z-[99] flex h-full min-w-[5rem] cursor-pointer items-center justify-center bg-gradient-to-r from-transparent to-transparent text-2xl transition-all duration-300 hover:from-black hover:text-4xl"
                    onClick={() => {
                        if (x < 0) {
                            setX((pre) => {
                                return pre + 500;
                            });
                        } else {
                        }
                    }}
                >
                    <BsCaretLeftFill />
                </div>
                <div
                    className="absolute -right-[2.5rem] z-[99] flex h-full min-w-[5rem] cursor-pointer items-center justify-center bg-gradient-to-l from-transparent to-transparent  text-2xl transition-all duration-200 hover:from-black hover:text-4xl "
                    onClick={() => {
                        if (x > -(500 * 10)) {
                            setX((pre) => {
                                return pre - 500;
                            });
                        } else {
                        }
                    }}
                >
                    <BsCaretRightFill />
                </div>
            </div>
        </div>
    );
};
export default MovieSliderBox;
