<script setup lang="ts">
const NotesStore = useNotesStore();
</script>

<template>
  <div v-if="NotesStore.validationError" fixed bottom-6 right-4 z-50 rounded-md bg-red-500 p-4 text-white md:right-6>
    {{ NotesStore.validationError }}
  </div>
</template>
