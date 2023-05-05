import LoadingSpinCircle from "@/components/uiComponents/LoadingSpinCircle";
import { api } from "@/utils/api";
import { useRouter } from "next/router";
import React from "react";

interface MovieDetailProps {}
const MovieDetail: React.FC<MovieDetailProps> = () => {
    const { query } = useRouter();

    const { data: videoData, isLoading: videoIsLoading } = api.tmdb.getMovieVideos.useQuery({
        id: (query.id as string) ?? "",
    });
    const { data: detailData, isLoading: DetailIsLoading } = api.tmdb.getMovieDetails.useQuery({
        id: (query.id as string) ?? "",
    });

    if (videoIsLoading || DetailIsLoading) {
        return <LoadingSpinCircle />;
    }
    console.log(detailData);

    return <div className="flex h-screen w-full items-center justify-center text-black">{videoData && <iframe width="100%" height="80%" src={`https://www.youtube.com/embed/${videoData[videoData.length - 1]?.key || ""}`} title={videoData[0]?.name} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>}</div>;
};
export default MovieDetail;
