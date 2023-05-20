import React from "react";

import { movieApis } from "src/utils/TMDBApiHelper";
import MovieSliderBox from "./listCategories/MovieSliderBox";

interface MovieCategoriesProps {}
const MovieCategories: React.FC<MovieCategoriesProps> = () => {
    return (
        <section
            title="MovieCategories"
            className=" flex h-auto min-h-[100vh] w-full flex-col space-y-[10vh] px-10 py-20"
        >
            <div className="font-Oswald text-5xl font-bold">Movies</div>
            <MovieSliderBox movieUrl={movieApis.popular} title="Popular" />
            <MovieSliderBox movieUrl={movieApis.topRated} title="TopRated" />

            <MovieSliderBox movieUrl={movieApis.upcoming} title="Upcoming" />
            <MovieSliderBox
                movieUrl={movieApis.getAnimeGenres(16)}
                title="For Kids"
            />
            <MovieSliderBox
                movieUrl={movieApis.getAnimeGenres(28)}
                title="Action"
            />
            <MovieSliderBox
                movieUrl={movieApis.getAnimeGenres(27)}
                title="Horror"
            />
            <MovieSliderBox
                movieUrl={movieApis.getAnimeGenres(10749)}
                title="Romance "
            />
            <MovieSliderBox
                movieUrl={movieApis.getAnimeGenres(80)}
                title="Crime "
            />
            <MovieSliderBox
                movieUrl={movieApis.getAnimeGenres(10752)}
                title="War  "
            />
            <MovieSliderBox
                movieUrl={movieApis.getAnimeGenres(53)}
                title="Thriller  "
            />
        </section>
    );
};
export default MovieCategories;
