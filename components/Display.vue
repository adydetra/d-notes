<script setup lang="ts">
const props = defineProps({
  date: String,
  title: String,
  content: String,
  delete: Function,
});
</script>

<template>
  <section mb-6 rounded-xl bg-yellow-50 p-4 text-gray-600>
    <h3 mt-0>
      {{ props.title }}
    </h3>
    <p>{{ props.content }}</p>
    <div betweenCenter>
      <span text-xs>{{ props.date }}</span>
      <button deleteButton @click="props.delete?.(props.date)">
        Delete
      </button>
    </div>
  </section>
</template>
