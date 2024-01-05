<script setup lang="ts">
const NotesStore = useNotesStore();
</script>

<template>
  <section sidebar bg-white>
    <p text-2xl>
      Note
    </p>
    <Display v-for="(note, index) in NotesStore.notes" :key="index" :date="note.date" :title="note.title" :content="note.content" :delete="NotesStore.deleteNote" />
  </section>
</template>
