import { postImageBaseUrl } from "@/utils/TMDBApiHelper";
import { api } from "@/utils/api";
import framerMotionVariants from "@/utils/framerMotionVariants";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";
import { BsFillPlayFill, BsPlus } from "react-icons/bs";

export const SinglePosterBoxSmall = ({
    title,
    releaseDate,
    posterImage,
    overview,
    index,
    movieId,
}: {
    title: string;
    releaseDate: string;
    posterImage: string;
    overview: string;
    index: number;
    movieId: number;
}) => {
    const router = useRouter();
    const [showDetail, setShowDetail] = useState(false);
    // const { mutate, data } = api.watchList.addToWatchList.useMutation();
    const { data } = api.watchList.getWatchList.useQuery();

    console.log(data);

    return (
        <motion.div
            className="z-10 flex h-auto w-auto  rounded-md shadow-md shadow-secondary"
            onMouseEnter={() => {
                setShowDetail(true);
            }}
            onMouseLeave={() => {
                setShowDetail(false);
            }}
        >
            {/* postImage */}
            <div className=" h-[35rem]  w-[20rem] cursor-pointer   ">
                <Image
                    width={500}
                    height={500}
                    alt=""
                    src={`${postImageBaseUrl}${posterImage ?? ""}`}
                    className="h-full w-full rounded-md object-cover"
                />
            </div>
            {/* DetailInformation */}
            <AnimatePresence>
                {showDetail && (
                    <motion.div
                        className={`hiddenBox-${index}  w-0 `}
                        variants={framerMotionVariants.detailBox}
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                    >
                        <motion.div
                            className={`hiddenBox-content-${index} flex h-full w-[500px]  flex-col items-start justify-center space-y-8 bg-primary px-6  `}
                            variants={framerMotionVariants.detailBoxContent}
                            initial="hidden"
                            animate="visible"
                            exit="hidden"
                        >
                            <div className="px-1 py-2 ring-1 ring-secondary">
                                {releaseDate}
                            </div>
                            <div className="font-Oswald text-3xl font-bold">
                                {title}
                            </div>
                            <div className=" flex items-center space-x-2">
                                <span>Adventure |</span>
                                <span>Fantasy |</span>
                                <span>Comedy |</span>
                                <span className="border border-white px-2 py-0">
                                    12+
                                </span>
                            </div>
                            <div>{overview.slice(0, 150)}...</div>
                            <div className="flex items-center space-x-4">
                                <div
                                    className="cursor-pointer rounded-lg bg-secondary px-2 py-1"
                                    onClick={() => {
                                        // eslint-disable-next-line @typescript-eslint/no-floating-promises
                                        router.push(`/movies/${movieId}`);
                                    }}
                                >
                                    <BsFillPlayFill />
                                </div>
                                {/* TODO: add Movie to watchList */}
                                <div
                                    className="cursor-pointer  p-1 text-lg text-white shadow-md  shadow-secondary ring-1 ring-secondary"
                                    onClick={() => {
                                        mutate({
                                            movieId: `${movieId}`,
                                            title: `${title}`,
                                            posterPath: `${posterImage}`,
                                            backdropPath: `${posterImage}`,
                                            rating: 5,
                                            releaseDate: `${releaseDate}`,
                                        });
                                    }}
                                >
                                    <BsPlus />
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
};
