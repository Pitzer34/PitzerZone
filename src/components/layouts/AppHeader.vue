<script setup>
import { Icon } from '@iconify/vue';

</script>

<template>
  <header class="sticky top-0 left-0 z-20">
    <div class="shadow-sm shadow-gray-200 backdrop-blur-md dark:shadow-gray-600">
      <div class="flex items-center justify-between h-16 px-4 py-2 md:px-8">
        <div class="flex items-center h-12">
          <div class="pr-4">
            <Icon icon="mdi:application-cog-outline" width="2rem" heigth="2rem" />
          </div>
          <h1 class="text-2xl font-bold">{{ "Header" }}</h1>
        </div>
        <div class="flex items-center gap-8">
          <ul class="flex gap-2">
            <li>
              <Icon icon="mdi:github" width="2rem" heigth="2rem" />
            </li>
            <li>
              <Icon icon="mdi:linkedin" width="2rem" heigth="2rem" />
            </li>
            <li>
              <Icon icon="mdi:email-outline" width="2rem" heigth="2rem" />
            </li>
          </ul>
          <div>
            <Icon icon="mdi:theme-light-dark" width="2rem" height="2rem" />
          </div>
          <!-- <ul class="flex">
            <li>1</li>
            <li>2</li>
            <li>3</li>
          </ul> -->
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped></style>