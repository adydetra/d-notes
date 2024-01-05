<script setup lang="ts">
const NotesStore = useNotesStore();
</script>

<template>
  <section sidebar>
    <p text-2xl dark:text-black>
      Note
    </p>
    <Display v-for="(note, index) in NotesStore.notes" :key="index" :date="note.date" :title="note.title" :content="note.content" :delete="NotesStore.deleteNote" />
  </section>
</template>
