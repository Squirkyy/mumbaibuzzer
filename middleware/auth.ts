import { useClerk } from "vue-clerk";

export default defineNuxtRouteMiddleware(() => {
  const nuxtApp = useNuxtApp();
  const clerk = useClerk();

  if (process.server && !nuxtApp.ssrContext?.event.context.auth?.userId) {
    return navigateTo("/auth/sign-in");
  }

  if (process.client && clerk.loaded && !clerk.user?.id) {
      return navigateTo('/auth/sign-in');
  }
});
