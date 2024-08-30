<script setup>
import { RouterView } from 'vue-router';

</script>

<template>
  <div class="flex flex-col min-h-screen">
    <RouterView name="Header" />
    <RouterView />
    <RouterView name="Footer" />
  </div>
</template>

<style scoped></style>
