import { z } from "zod";
import { publicProcedure, router } from "../trpc";

export const indexRouter = router({
  hello: publicProcedure
    .input(
      z.object({
        text: z.string().nullish(),
      })
    )
    .query(({ input }) => {
      return {
        greeting: `hello ${input?.text}`,
      };
    }),
  products: publicProcedure.query(async () => {
    return {
      title: "TRPC Nuxt",
      price: 12.0,
      description: "Check out the trpc-nuxt repo",
    };
  }),
});
