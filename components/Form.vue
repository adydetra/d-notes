<script setup lang="ts">
const NotesStore = useNotesStore();
const title = ref('');
const content = ref('');
</script>

<template>
  <input v-model="title" placeholder="title">
  <input v-model="content" placeholder="content">
  <button @click="NotesStore.addNote(title, content)">
    Post
  </button>
</template>
