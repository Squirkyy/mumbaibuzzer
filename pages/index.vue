<template>
  <main class="flex min-h-screen flex-col items-center justify-between p-24">
    <h1 class="font-bold">Hey {{user?.user?.value?.firstName}}</h1>
    <div class="flex w-full">
      <NuxtLink to="/game/play" class="grid h-20 flex-grow card bg-base-300 rounded-box place-items-center">PLAY</NuxtLink>
      <div class="divider divider-horizontal">OR</div>
      <NuxtLink to="/create" class="grid h-20 flex-grow card bg-base-300 rounded-box place-items-center">CREATE</NuxtLink>
    </div>
    <div>
      <UserButton afterSignOutUrl="/" />
    </div>
  </main>
</template>


<script setup lang="ts">
import {UserButton, useUser} from "vue-clerk";
const user = useUser();

</script>
