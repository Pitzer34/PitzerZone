<script setup>
import Home from './pages/public/Home.vue';
import { RouterLink, RouterView } from 'vue-router';

</script>

<template>
  <!-- <Home /> -->
  <RouterLink to="/">home</RouterLink>
  <RouterView></RouterView>
</template>

<style scoped></style>
