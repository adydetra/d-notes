<script lang="ts" setup>
const colorMode = useColorMode();

function toggleMode() {
  colorMode.preference = colorMode.value === 'light' ? 'dark' : 'light';
}
</script>

<template>
  <button cursor-pointer rounded border-none p-2 transition ease-in-out aria-label="Color Mode" @click="toggleMode">
    <div i-ph-sun-dim-duotone dark:i-ph-moon-stars-duotone text-2xl />
  </button>
</template>
