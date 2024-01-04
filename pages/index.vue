<script setup lang="ts">
const NotesStore = useNotesStore();
</script>

<template>
  <NuxtLayout>
    <Display v-for="(note, index) in NotesStore.notes" :key="index" :date="note.date" :title="note.title" :content="note.content" />
  </NuxtLayout>
</template>
