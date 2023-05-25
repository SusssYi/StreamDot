import Image from "next/image";
import Link from "next/link";
import React from "react";
import { type IPopular } from "src/types/movies";
import { postImageBaseUrl } from "src/utils/TMDBApiHelper";

interface ContinueWatchProps {
    data: IPopular["results"];
}
const ContinueWatch: React.FC<ContinueWatchProps> = ({ data }) => {
    const currentMovie = data.slice(0, 5);

    return (
        <div className="absolute -bottom-[70px] left-0 z-30 flex h-auto w-full flex-col space-y-8 px-8">
            {/* <div className=" text-2xl font-bold">Continue Watching</div> */}

            <div className="grid w-full grid-cols-5 gap-4">
                {currentMovie.map((movie) => (
                    <Link href={`/movies/${movie.id}`} key={movie.id}>
                        <div
                            key={movie.id}
                            className="group col-span-1 flex h-[150px] cursor-pointer items-center space-x-6 rounded-md bg-primary p-4 shadow-md shadow-secondary"
                        >
                            <div className="h-[100px] w-[150px] overflow-hidden">
                                <Image
                                    src={`${postImageBaseUrl}${
                                        movie.poster_path ?? ""
                                    } `}
                                    alt={movie.title}
                                    width={80}
                                    height={80}
                                    className="h-full w-full rounded-md object-cover transition-all duration-500 ease-in-out group-hover:scale-110"
                                />
                            </div>
                            <div className="font-Oswald text-lg font-bold">
                                {movie.title}
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};
export default ContinueWatch;
