import {
    type IMovieDetail,
    type IMovieReviews,
    type IMovieVideos,
    type INowPlaying,
    type IPopular,
    type IUpcomingMovies,
} from "@/types/movies";
import { type IMovieCredits } from "@/types/movies/movieCredits";
import { OriginalLanguage } from "@/types/movies/popular";
import { type IPopularTv } from "@/types/tv";
import { baseUrl, movieApis, tmdbBaseEndPoint } from "@/utils/TMDBApiHelper";
import axios from "axios";
import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "../trpc";

const johnWickMock = {
    adult: false,
    backdrop_path: "/vVpEOvdxVBP2aV166j5Xlvb5Cdc.jpg",
    genre_ids: [28, 53, 80],
    id: 458156,
    original_language: OriginalLanguage.En,
    original_title: "John Wick: Chapter 3 - Parabellum",
    overview:
        "Super-assassin John Wick returns with a $14 million price tag on his head and an army of bounty-hunting killers on his trail. After killing a member of the shadowy international assassin’s guild, the High Table, John Wick is excommunicado, but the world’s most ruthless hit men and women await his every turn.",
    popularity: 384.587,
    poster_path: "/ziEuG1essDuWuC5lpWUaw1uXY2O.jpg",
    release_date: "2019-05-15",
    title: "John Wick: Chapter 3 - Parabellum",
    video: false,
    vote_average: 7.448,
    vote_count: 9126,
};

export const tmdbRouter = createTRPCRouter({
    //  -------Movies-------
    // getNowPlayingMovies
    nowPlaying: publicProcedure.query(async ({}) => {
        const { data } = await tmdbBaseEndPoint.get<INowPlaying>(
            movieApis.nowPlaying
        );

        return data.results;
    }),
    // getPopularMovies
    popular: publicProcedure.query(async ({}) => {
        const { data } = await tmdbBaseEndPoint.get<IPopular>(
            movieApis.popular
        );
        if (data) {
            data.results.unshift(johnWickMock);
        }

        return data.results;
    }),
    // getMovieVideos by movieId
    getMovieVideos: publicProcedure
        .input(z.object({ id: z.string() }))
        .query(async ({ input }) => {
            if (input.id === "") return;
            const { data } = await axios.get<IMovieVideos>(
                movieApis.getMovieVideos(input.id),
                {
                    params: {
                        api_key: process.env.TMDB_API_KEY,
                    },
                }
            );
            return data.results.filter((video) => video.site === "YouTube");
        }),
    // getMovieDetails by movieId
    getMovieDetails: publicProcedure
        .input(
            z.object({
                id: z.string(),
            })
        )
        .query(async ({ input }) => {
            if (input.id === "") return;
            const { data } = await axios.get<IMovieDetail>(
                `${baseUrl}/movie/${input.id}`,
                {
                    params: {
                        api_key: process.env.TMDB_API_KEY,
                    },
                }
            );

            return data;
        }),
    // get latest movie
    getUpcomingMovies: publicProcedure.query(async ({}) => {
        const { data } = await tmdbBaseEndPoint.get<IUpcomingMovies>(
            movieApis.upcoming
        );
        return data.results;
    }),
    // get movie credits
    getCredits: publicProcedure
        .input(
            z.object({
                id: z.string(),
            })
        )
        .query(async ({ input }) => {
            if (input.id === "") return;
            const { data } = await axios.get<IMovieCredits>(
                movieApis.getCredits(input.id),
                {
                    params: {
                        api_key: process.env.TMDB_API_KEY,
                    },
                }
            );
            return data.cast.slice(0, 6);
        }),
    // get movie reviews
    getMovieReviews: publicProcedure
        .input(
            z.object({
                id: z.string(),
            })
        )
        .query(async ({ input }) => {
            if (input.id === "") return;
            const { data } = await axios.get<IMovieReviews>(
                movieApis.getMovieReviews(input.id),
                {
                    params: {
                        api_key: process.env.TMDB_API_KEY,
                    },
                }
            );
            return data.results;
        }),
    //  get movie by url
    getMovieByUrl: publicProcedure
        .input(
            z.object({
                url: z.string(),
            })
        )
        .query(async ({ input }) => {
            const { data } = await axios.get<IPopular>(input.url, {
                params: {
                    api_key: process.env.TMDB_API_KEY,
                },
            });

            return data.results;
        }),

    //  get Tv by url
    getTvShowByUrl: publicProcedure
        .input(
            z.object({
                url: z.string(),
            })
        )
        .query(async ({ input }) => {
            const { data } = await axios.get<IPopularTv>(input.url, {
                params: {
                    api_key: process.env.TMDB_API_KEY,
                },
            });

            return data.results;
        }),

    // -------TV Shows-------

    // get popular tv shows
    // getPopularTvShows: publicProcedure.query(async ({}) => {}),
    getTvShowVideos: publicProcedure
        .input(z.object({ id: z.string() }))
        .query(async ({ input }) => {
            if (input.id === "") return;
            const { data } = await axios.get<IMovieVideos>(
                movieApis.getMovieVideos(input.id),
                {
                    params: {
                        api_key: process.env.TMDB_API_KEY,
                    },
                }
            );
            return data.results.filter((video) => video.site === "YouTube");
        }),
});
