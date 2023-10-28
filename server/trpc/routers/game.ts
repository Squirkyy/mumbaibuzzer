import { z } from "zod";
import { publicProcedure, router } from "../trpc";

export const gameRouter = router({
  getGames: publicProcedure.query(async () => {
    const data = await prisma?.game.findMany();
    return {
      games: data,
    };
  }),
  getGamesByCreator: publicProcedure
    .input(z.object({ author: z.string() }))
    .query(async ({ input }) => {
      const data = await prisma?.game.findMany({
        where: {
          creatorID: input.author,
        },
      });
      return {
        games: data,
      };
    }),
});
