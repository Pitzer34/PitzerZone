<script setup>
import { RouterView } from 'vue-router';
import AppHeader from './components/layouts/AppHeader.vue';
import AppFooter from './components/layouts/AppFooter.vue';

</script>

<template>
  <div class="">
    <AppHeader />
    <RouterView />
    <AppFooter />
  </div>
</template>

<style scoped></style>
