<script setup>
// import components
import SysHeader from '../../components/layouts/SysHeader.vue';
import HomeContent from '../../components/layouts/HomeContent.vue';
import SysFooter from '../../components/layouts/SysFooter.vue';
// import vueuse
import { useDark } from '@vueuse/core';




const isDark = useDark();

</script>

<template>
  <div class="layout">
    <!-- <SysHeader />
    <HomeContent />
    <SysFooter /> -->
  </div>
</template>

<style scoped>
.layout {
  @apply flex flex-col min-h-screen
}
</style>
