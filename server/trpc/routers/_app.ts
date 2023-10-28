import {router} from "~/server/trpc/trpc";
import {indexRouter} from "~/server/trpc/routers/index";
import {gameRouter} from "~/server/trpc/routers/game";


export const appRouter= router({
    index: indexRouter,
    game: gameRouter
});

export type AppRouter = typeof appRouter;
