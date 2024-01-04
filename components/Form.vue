<script setup lang="ts">
const NotesStore = useNotesStore();
const title = ref('');
const content = ref('');
</script>

<template>
  <div mx-auto h-screen flex flex-col justify-between>
    <div flex flex-col gap-4>
      <p text-2xl>
        Write
      </p>

      <input v-model="title" placeholder="Title" input>
      <textarea v-model="content" placeholder="Content" input />
    </div>
    <button saveButton @click="NotesStore.addNote(title, content)">
      Save
    </button>
  </div>
</template>
