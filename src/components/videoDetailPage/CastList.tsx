import Image from "next/image";
import React from "react";
import { postImageBaseUrl } from "src/utils/TMDBApiHelper";
import { api } from "src/utils/api";
import { LoadingSpinCircle } from "../ui";

interface CastListProps {
    movieId: string;
}
const CastList: React.FC<CastListProps> = ({ movieId }) => {
    const { data, isLoading } = api.tmdb.getCredits.useQuery({ id: movieId });

    if (isLoading) {
        return <LoadingSpinCircle />;
    }

    return (
        <div className="relative mt-[50px]  flex w-full flex-col items-start space-y-4 px-12 py-10">
            <div className=" text-2xl font-bold">Cast & Crew</div>
            <div className=" flex space-x-8">
                {data &&
                    data.map((cast) => (
                        <div
                            key={cast.cast_id}
                            className="flex items-center space-x-2"
                        >
                            <div className="">
                                <Image
                                    width={150}
                                    height={150}
                                    src={`${postImageBaseUrl}${
                                        cast.profile_path ?? ""
                                    }`}
                                    alt={cast.name}
                                    className="h-[120px] w-[120px] rounded-full object-cover shadow-md shadow-secondary"
                                />
                            </div>
                            <div>
                                <div className="font-Oswald text-2xl font-bold">
                                    {cast.character}
                                </div>
                                <div>{cast.name}</div>
                            </div>
                        </div>
                    ))}
            </div>
        </div>
    );
};
export default CastList;
