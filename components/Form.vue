<script setup lang="ts">
const NotesStore = useNotesStore();
const title = ref('');
const content = ref('');
</script>

<template>
  <div top-0 h-screen flex flex-col justify-between md:sticky>
    <div h-full flex flex-col gap-6 pb-8>
      <p text-2xl>
        Write
      </p>
      <input v-model="title" placeholder="Title (max 40 length)" maxlength="40" input>
      <textarea v-model="content" placeholder="Content" h-full resize-none input />
    </div>
    <button postButton @click="NotesStore.addNote(title, content)">
      Post
    </button>
  </div>
</template>
