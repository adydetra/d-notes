<script setup lang="ts">
const NotesStore = useNotesStore();
</script>

<template>
  <main class="max-w-4xl mx-auto text-center">
    <h1 class="text-4xl">
      D-Notes
    </h1>
    <Form />
    <Display v-for="(note, index) in NotesStore.notes" :key="index" :date="note.date" :title="note.title" :content="note.content" />
  </main>
</template>
