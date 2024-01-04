<script setup lang="ts">
const NotesStore = useNotesStore();
const title = ref('');
const content = ref('');
</script>

<template>
  <div mx-auto flex flex-col gap-4>
    <p text-2xl>
      Write
    </p>
    <input v-model="title" placeholder="Title" input>
    <input v-model="content" placeholder="Content" input>
    <button saveButton @click="NotesStore.addNote(title, content)">
      Save
    </button>
  </div>
</template>
