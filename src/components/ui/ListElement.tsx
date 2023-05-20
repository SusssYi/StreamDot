import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { AiFillStar } from "react-icons/ai";
import { BsFillTrashFill } from "react-icons/bs";
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
    const utils = api.useContext();
    if (text === "watchList") {
        const { data, isLoading } = api.watchList.getWatchList.useQuery();
        const { mutate } = api.watchList.deleteFromWatchList.useMutation({
            onSuccess: async () => {
                toast.success("movie was  success deleted from watchList! ", {
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
                await utils.watchList.getWatchList.refetch();
            },
            onError: (error) => {
                toast.error(error.message, {
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
                                            className="relative mt-4  flex cursor-pointer flex-row items-center justify-between space-x-4 rounded-md transition-all duration-150 hover:bg-secondary/50 "
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
                                                    className="h-[100px] w-[150px] rounded-md object-cover "
                                                />
                                            </div>
                                            <Link
                                                href={`/movies/${movie.movieId}`}
                                                className="flex flex-[2] flex-col items-start justify-center space-y-6"
                                            >
                                                <div className="text-lg font-bold">
                                                    {movie.title}
                                                </div>
                                                <div className="flex items-center space-x-2">
                                                    <span>
                                                        <AiFillStar />
                                                    </span>
                                                    <span>{movie.rating}</span>
                                                </div>
                                            </Link>
                                            <div
                                                onClick={() => {
                                                    mutate({
                                                        movieId: movie.movieId,
                                                    });
                                                }}
                                                className="absolute -bottom-[3.5rem] right-0  z-20 h-full w-auto cursor-pointer text-4xl text-red-400 transition-all duration-700 hover:scale-125"
                                            >
                                                <BsFillTrashFill />
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
