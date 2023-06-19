import axios from "axios";
// tmdb base url
const baseUrl = "https://api.themoviedb.org/3";
// imageBaseUrl example: https://image.tmdb.org/t/p/original/2CAL2433ZeIihfX1Hb2139CX0pW.jpg
const imageBaseUrl = "https://image.tmdb.org/t/p/original/";
// postImageBaseUrl example: https://image.tmdb.org/t/p/w500/2CAL2433ZeIihfX1Hb2139CX0pW.jpg
const postImageBaseUrl = "https://image.tmdb.org/t/p/w500/";

// tmdb movie api endpoints
const movieApis = {
    nowPlaying: `${baseUrl}/movie/now_playing`,
    popular: `${baseUrl}/movie/popular`,
    topRated: `${baseUrl}/movie/top_rated`,
    upcoming: `${baseUrl}/movie/upcoming`,
    getMovieVideos: (movieId: number | string) => {
        return `${baseUrl}/movie/${movieId}/videos`;
    },
    search: `${baseUrl}/search/movie`,
    movieVideos: (movie_id: string) => `${baseUrl}/movie/${movie_id}/videos`,
    getMovieDetails: (movie_id: string) => `${baseUrl}/movie/${movie_id}`,
    latest: `${baseUrl}/movie/latest`,
    getCredits: (movie_id: string) => `${baseUrl}/movie/${movie_id}/credits`,
    getMovieReviews: (movie_id: string) =>
        `${baseUrl}/movie/${movie_id}/reviews`,
    getMovieRecommendations: (movie_id: string) => `
    ${baseUrl}/movie/${movie_id}/recommendations`,
    getMovieSimilar: (movie_id: string) =>
        `${baseUrl}/movie/${movie_id}/similar`,
    getAnimeGenres: (genre_id: number) =>
        `${baseUrl}/discover/movie?with_genres=${genre_id}&sort_by=popularity.desc`,
};

// tmdb tv show api endpoints
const tvShowApis = {
    getPoplarTvShows: `${baseUrl}/tv/popular`,
    getTopRatedTvShows: `${baseUrl}/tv/top_rated`,
    getTvShowDetails: (tv_id: string) => `${baseUrl}/tv/${tv_id}`,
    getTvShowVideos: (tv_id: string) => `${baseUrl}/tv/${tv_id}/videos`,
};
// create axios endpoint for tmdb
const tmdbBaseEndPoint = axios.create({
    baseURL: baseUrl,
    params: {
        api_key: process.env.TMDB_API_KEY,
        language: "en-US",
        Headers: {
            "Content-Type": "application/json;charset=utf-8",
        },
    },
});

export {
    baseUrl,
    imageBaseUrl,
    movieApis,
    postImageBaseUrl,
    tmdbBaseEndPoint,
    tvShowApis,
};
