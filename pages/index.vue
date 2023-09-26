<template>
  <main class="flex min-h-screen flex-col items-center justify-between p-24">
    <h1 class="font-bold">{{greeting}}</h1>
    <div class="flex w-full">
      <NuxtLink
        to="/game/play"
        class="grid h-20 flex-grow card bg-base-300 rounded-box place-items-center"
        >PLAY</NuxtLink
      >
      <div class="divider divider-horizontal">OR</div>
      <NuxtLink
        to="/create"
        class="grid h-20 flex-grow card bg-base-300 rounded-box place-items-center"
        >CREATE</NuxtLink
      >
    </div>
    <div>
      <UserButton afterSignOutUrl="/" />
    </div>
  </main>
</template>

<script setup lang="ts">
import { UserButton, useUser } from "vue-clerk";
const { $client } = useNuxtApp();
const user = useUser();
const hello = await $client.hello.useQuery({ text: (user?.user?.value?.firstName)});
const greeting = useState('greeting', () => (hello.data?.value?.greeting));
</script>
