<script setup lang="ts">
useHead({
  title: 'D-Notes',
  meta: [
    {
      name: 'msapplication-TileColor',
      content: '#da532c',
    },
    {
      name: 'theme-color',
      content: '#ffffff',
    },
  ],
});

useSeoMeta({
  description: 'Innovative note-taking app developed using Nuxt and the Pinia module. Created by Adityawarman Dewa Putra.',
  twitterCard: 'summary_large_image',
});
</script>

<template>
  <NuxtPage />
</template>

<style lang="postcss">
* {
  @apply font-mono;
}
:root {
  scrollbar-width: thin;
  scrollbar-color: #d4d4d4 #ffffff;
}
html,
body {
  @apply min-h-dvh scroll-smooth m-0 p-0;
}
::-webkit-scrollbar {
  width: 8px;
}
::-webkit-scrollbar-thumb {
  background-color: #d4d4d4;
}
::-webkit-scrollbar-thumb:active {
  background-color: #ffffff;
}
html.dark ::-webkit-scrollbar-thumb {
  background-color: #1b1b1b;
}
html.dark ::-webkit-scrollbar-thumb:active {
  background-color: rgb(41, 41, 41);
}
html.dark ::-webkit-scrollbar {
  background-color: #050505;
}
.dark {
  color-scheme: dark;
}
</style>
