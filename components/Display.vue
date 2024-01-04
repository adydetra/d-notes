<script setup lang="ts">
const props = defineProps({
  date: String,
  title: String,
  content: String,
  delete: Function,
});
</script>

<template>
  <section>
    <p>{{ props.date }}</p>
    <p>{{ props.title }}</p>
    <p>{{ props.content }}</p>
    <button deleteButton @click="props.delete?.(props.date)">
      Delete
    </button>
  </section>
</template>
