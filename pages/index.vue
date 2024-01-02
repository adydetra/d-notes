<script setup lang="ts">
const NotesStore = useNotesStore();
</script>

<template>
  <h1 class="text-4xl">
    D-Notes
  </h1>
  <Form />
  <Display v-for="(note, index) in NotesStore.notes" :key="index" :date="note.date" :title="note.title" :content="note.content" />
</template>
