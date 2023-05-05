import { z } from "zod";
import { createTRPCRouter, protectedProcedure } from "../trpc";

// History API
export const watchListRouter = createTRPCRouter({
    addToWatchList: protectedProcedure
        .input(
            z.object({
                movieId: z.string(),
                title: z.string(),
                posterPath: z.string(),
                rating: z.number(),
                releaseDate: z.string(),
                backdropPath: z.string(),
            })
        )
        .mutation(async ({ ctx, input }) => {
            const {
                user: { id },
            } = ctx.session;
            const movie = await ctx.prisma.movie.create({
                data: {
                    movieId: input.movieId,
                    title: input.title,
                    posterPath: input.posterPath,
                    rating: input.rating,
                    releaseDate: input.releaseDate,
                    backdropPath: input.backdropPath,
                    user: {
                        connect: {
                            id: id,
                        },
                    },
                },
                include: {
                    user: true,
                },
            });
            return movie;
        }),
    getWatchList: protectedProcedure.query(async ({ ctx }) => {
        const {
            user: { id },
        } = ctx.session;
        const movies = await ctx.prisma.movie.findMany({
            where: {
                userId: id,
            },
        });
        return movies;
    }),
});
