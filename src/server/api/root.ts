import { createTRPCRouter } from "@/server/api/trpc";
import { historyRouter } from "./routers/historyApi";
import { tmdbRouter } from "./routers/tmdbApi";
import { watchListRouter } from "./routers/watchListApi";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
    tmdb: tmdbRouter,
    history: historyRouter,
    watchList: watchListRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
