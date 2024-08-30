<script setup>
// import components
import AppHeader from '../../components/layouts/AppHeader.vue';
import AppFooter from '../../components/layouts/AppFooter.vue';
// import vueRouter
import { RouterLink, RouterView } from 'vue-router';
// import vueuse
import { useDark } from '@vueuse/core';




const isDark = useDark();

</script>

<template>
  <div class="flex flex-col min-h-screen">
    <RouterView name="Header" />
    <RouterView />
    <RouterView name="Footer" />
  </div>
</template>

<style scoped></style>
