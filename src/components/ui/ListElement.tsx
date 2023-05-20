import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";
import { postImageBaseUrl } from "src/utils/TMDBApiHelper";
import { api } from "src/utils/api";
import LoadingSpinCircle from "./LoadingSpinCircle";

// ListElement for Nav Links
const ListElement = ({
    text,
    onClick,
}: {
    text: string;
    onClick?: () => void;
}) => {
    const [showBox, setShowBox] = useState(false);
    const router = useRouter();
    if (text === "watchList") {
        const { data, isLoading } = api.watchList.getWatchList.useQuery();
        return (
            <div
                className="relative z-[99]   uppercase   "
                onMouseEnter={() => {
                    setShowBox(true);
                }}
                onMouseLeave={() => {
                    setShowBox(false);
                }}
            >
                <div className="cursor-pointer">{text}</div>
                <AnimatePresence>
                    {showBox && (
                        <motion.div
                            initial={{
                                opacity: 0,
                            }}
                            animate={{
                                opacity: 1,
                            }}
                            exit={{
                                opacity: 0,
                            }}
                            className=" absolute -left-[200px]  top-[30px] h-[200px] w-[400px]  space-y-8 overflow-y-auto rounded-md   bg-primary px-4 py-2 shadow-md shadow-secondary"
                        >
                            {isLoading ? (
                                <div>
                                    <LoadingSpinCircle />
                                </div>
                            ) : (
                                <div className="">
                                    {data?.map((movie) => (
                                        <div
                                            key={movie.title}
                                            className="mt-4  flex cursor-pointer flex-row items-center justify-between space-x-4 rounded-md transition-all duration-150 hover:bg-secondary/50 "
                                            onClick={() => {
                                                // eslint-disable-next-line @typescript-eslint/no-floating-promises
                                                router.push(
                                                    `/movies/${movie.movieId}`
                                                );
                                            }}
                                        >
                                            <div className=" flex flex-1">
                                                <Image
                                                    src={`${postImageBaseUrl}/${
                                                        movie.backdropPath ?? ""
                                                    }`}
                                                    alt={movie.title}
                                                    width={500}
                                                    height={500}
                                                    priority
                                                    className="h-[50px] w-[150px] rounded-md object-cover "
                                                />
                                            </div>
                                            <div className="flex flex-[2] flex-col items-center justify-center">
                                                <div className="text-sm">
                                                    {movie.title}
                                                </div>
                                                <div>rating:{movie.rating}</div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        );
    }
    return (
        <div
            onClick={onClick}
            className=" cursor-pointer uppercase drop-shadow-lg  transition-all  duration-200 hover:-translate-y-2 hover:scale-110 hover:drop-shadow-2xl"
        >
            {text}
        </div>
    );
};

export default ListElement;
