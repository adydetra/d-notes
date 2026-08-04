<script setup lang="ts">
const NotesStore = useNotesStore();
</script>

<template>
  <section sidebar>
    <p text-2xl dark:text-black>
      Note
    </p>
    <ClientOnly>
      <Display v-for="(note, index) in NotesStore.notes" :id="note.id" :key="note.id || index" :date="note.date" :title="note.title" :content="note.content" :delete="NotesStore.deleteNote" />
    </ClientOnly>
  </section>
</template>
