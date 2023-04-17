import { createTRPCRouter, publicProcedure } from "../trpc";

export const testRouter = createTRPCRouter({
  hello: publicProcedure.query(({ ctx }) => {
    return "Hello World";
  }),
});
