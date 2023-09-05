<template>
  <div class="flex flex-col min-w-[80%] lg:min-w-[50%] h-screen bg-gray-100/50 px-8 lg:px-20 gap-6">
    <h1 class="py-12 text-4xl font-semibold">D-Notes 📝</h1>
    <Form />
    <div v-for="(note, index) in notes" :key="index">
      <div>
        <h2>{{ note.title }}</h2>
        <p>{{ note.content }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useNotesStore } from "~/stores/notes";

const notes = useNotesStore().notes;
</script>
