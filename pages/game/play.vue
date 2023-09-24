<script setup lang="ts">
import { UserButton } from 'vue-clerk';

definePageMeta({
  middleware: ['auth'],
});
</script>

<template>
  <main class="flex min-h-screen flex-col items-center justify-evenly p-24">
    <div class="text-xl font-bold">Enter the game code!</div>
    <div class="join">
      <UserButton/>
    </div>
  </main>
</template>
