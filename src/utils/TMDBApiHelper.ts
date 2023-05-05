import axios from "axios";

const baseUrl = "https://api.themoviedb.org/3";
const imageBaseUrl = "https://image.tmdb.org/t/p/original/";
const postImageBaseUrl = "https://image.tmdb.org/t/p/w500/";
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
};

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

export { baseUrl, imageBaseUrl, movieApis, tmdbBaseEndPoint, postImageBaseUrl };
