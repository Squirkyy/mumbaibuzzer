<template>
  <SignIn />
</template>

<script setup lang="ts">
import { SignIn } from "vue-clerk";
import { definePageMeta } from "#imports";
definePageMeta({
  middleware: ['public'],
  layout: "auth",
});
</script>
