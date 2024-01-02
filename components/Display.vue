<script setup lang="ts">
const props = defineProps({
  date: String,
  title: String,
  content: String,
});
</script>

<template>
  <section>
    <p>{{ props.date }}</p>
    <p>{{ props.title }}</p>
    <p>{{ props.content }}</p>
  </section>
</template>
