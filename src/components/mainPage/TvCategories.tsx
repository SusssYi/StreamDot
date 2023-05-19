import { tvShowApis } from "@/utils/TMDBApiHelper";
import React from "react";
import TvShowSliderBox from "./listCategories/TvSliderBox";

interface TvCategoriesProps {}
const TvCategories: React.FC<TvCategoriesProps> = () => {
    return (
        <section
            title="TvCategories"
            className=" flex h-auto min-h-[100vh] w-full flex-col space-y-[10vh] px-10 py-20"
        >
            <div className="font-Oswald text-5xl font-bold">TvShow</div>
            <TvShowSliderBox
                movieUrl={tvShowApis.getTopRatedTvShows}
                title="TopRated"
            />
            <TvShowSliderBox
                movieUrl={tvShowApis.getPoplarTvShows}
                title="Popular"
            />
        </section>
    );
};
export default TvCategories;
