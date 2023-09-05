<template>
  <input v-model="title" placeholder="Title" :class="style" />
  <textarea v-model="content" placeholder="Description" :class="style" class="min-h-[300px]"></textarea>
  <button @click="saveNote" :class="style">💾</button>
</template>

<script setup lang="ts">
import { useNotesStore } from "~/stores/notes";

const title = ref("");
const content = ref("");
const style = "border px-3 py-2"

const saveNote = () => {
  const notesStore = useNotesStore();
  notesStore.addNote({
    title: title.value,
    content: content.value,
  });
  title.value = "";
  content.value = "";
};
</script>
