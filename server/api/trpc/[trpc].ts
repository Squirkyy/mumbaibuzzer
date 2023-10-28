import { createNuxtApiHandler } from "trpc-nuxt";
import { createContext } from "../../trpc/context";
import {appRouter} from "~/server/trpc/routers/_app";

// export API handler
export default createNuxtApiHandler({
  router: appRouter,
  createContext,
});
