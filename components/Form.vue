<script setup lang="ts">
const NotesStore = useNotesStore();
const title = ref('');
const content = ref('');
</script>

<template>
  <div mx-auto max-w-2xl flex flex-col items-center gap-4>
    <input v-model="title" placeholder="Title..." input>
    <input v-model="content" placeholder="Content..." input>
    <button button @click="NotesStore.addNote(title, content)">
      Post
    </button>
  </div>
</template>
