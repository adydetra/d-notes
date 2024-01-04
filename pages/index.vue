<script setup lang="ts">
const NotesStore = useNotesStore();
</script>

<template>
  <main mx-auto max-w-4xl text-center>
    <h1 text-4xl>
      D-Notes
    </h1>
    <Form />
    <Display v-for="(note, index) in NotesStore.notes" :key="index" :date="note.date" :title="note.title" :content="note.content" />
  </main>
</template>
