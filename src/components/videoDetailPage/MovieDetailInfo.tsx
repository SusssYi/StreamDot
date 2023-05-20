import React from "react";
import { api } from "src/utils/api";
import { LoadingSpinCircle } from "../ui";
import AddButton from "../ui/AddButton";

interface MovieDetailInfoProps {
    movieId: string;
}
const MovieDetailInfo: React.FC<MovieDetailInfoProps> = ({ movieId }) => {
    const { data, isLoading } = api.tmdb.getMovieDetails.useQuery({
        id: movieId,
    });

    if (isLoading) {
        return <LoadingSpinCircle />;
    }

    if (!data) {
        return <div>error</div>;
    }

    return (
        <div className="flex h-auto w-full flex-col items-start justify-start space-y-4 px-12 py-10 ">
            <div className="flex w-auto items-center space-x-2 px-2 py-1 text-base ring-1 ring-secondary md:text-lg">
                <span>{data?.release_date.split("-")[0] ?? "N/A"}</span>
                <span>|</span>
                <span>{(data?.runtime / 60).toFixed(2)}h</span>
            </div>
            <div className="font-Oswald text-5xl font-bold">{data?.title}</div>
            <div className=" space-x-2">
                {data?.genres.map((genre) => (
                    <span key={genre.id}>{genre.name}|</span>
                ))}
                <span className="p-1 ring-1 ring-white">
                    R{data?.adult ? "18+" : "13+"}
                </span>
            </div>
            <div className="text-base md:text-lg">{data?.overview}</div>
            <AddButton
                movieId={data?.id}
                posterImage={data.backdrop_path}
                releaseDate={data.release_date}
                title={data.title}
                size={40}
            />
        </div>
    );
};
export default MovieDetailInfo;
