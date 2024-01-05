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
      <button cursor-pointer rounded-md border-none bg-red-200 px-2 py-1 transition ease-in-out hover:bg-red-300 dark:text-black @click="props.delete?.(props.date)">
        Delete
      </button>
    </div>
  </section>
</template>
