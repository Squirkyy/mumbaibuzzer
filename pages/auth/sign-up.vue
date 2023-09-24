<template>
  <SignUp/>
</template>

<script setup lang="ts">
import { SignUp } from 'vue-clerk'
import {definePageMeta} from "#imports";
definePageMeta({
  layout: 'auth',
})
</script>
