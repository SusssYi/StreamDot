import React from "react";
import { api } from "src/utils/api";
import { LoadingSpinCircle } from "../ui";

interface MovieReviewsProps {
    movieId: string;
}
const MovieReviews: React.FC<MovieReviewsProps> = ({ movieId }) => {
    const { data, isLoading } = api.tmdb.getMovieReviews.useQuery({
        id: movieId,
    });

    console.log(data);

    if (isLoading) {
        return <LoadingSpinCircle />;
    }

    if (!data) {
        return <div>error</div>;
    }
    return (
        <div className="relative mt-[50px]  flex w-full flex-col items-start space-y-4 px-12 py-10">
            <div className=" text-2xl font-bold">Reviews</div>
            <div className="flex h-auto min-h-[300px] w-full flex-col  justify-center space-y-4 rounded-md px-12  ring-1 ring-secondary">
                <div className="flex items-center space-x-4">
                    <div className="font-Oswald text-2xl font-bold text-white">
                        {data[0]?.author}
                    </div>
                    <div className="h-auto w-auto rounded-md bg-secondary px-4 py-2 text-xl font-bold">
                        {data[0]?.author_details.rating ?? 0}/10
                    </div>
                </div>
                <div className="text-xl leading-normal tracking-wide">
                    {data[0]?.content}
                </div>
            </div>
        </div>
    );
};
export default MovieReviews;
