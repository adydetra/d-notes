<script setup lang="ts">
const NotesStore = useNotesStore();
const title = ref('');
const content = ref('');
</script>

<template>
  <div class="max-w-2xl flex flex-col items-center mx-auto gap-4">
    <input v-model="title" placeholder="Title..." class="input">
    <input v-model="content" placeholder="Content..." class="input">
    <button class="button" @click="NotesStore.addNote(title, content)">
      Post
    </button>
  </div>
</template>
