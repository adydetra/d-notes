import { defineStore } from 'pinia';
import { computed, ref } from 'vue';

export const useNotesStore = defineStore('note', () => {
  const notes = ref<{ id?: number; date: string; title: string; content: string }[]>([]);
  const validationError = ref('');
  const noteTitles = computed (() => notes.value.map(note => note.title));

  // Function to check if the notes array is empty
  function isFirstVisit() {
    return notes.value.length === 0;
  }

  // Function to add a new note
  function addNote(title: string, content: string) {
    const currentDate = new Date();
    const format = currentDate.toLocaleDateString('en-US', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
    });
    notes.value.unshift({
      id: Date.now(),
      date: format,
      title,
      content,
    });
  }

  // Function to delete a note
  function deleteNote(identifier: number | string) {
    const index = notes.value.findIndex(note => note.id === identifier || note.date === identifier);
    if (index !== -1)
      notes.value.splice(index, 1);
  }

  // If it's the first visit, add a default note
  if (isFirstVisit())
    addNote('Title is here', 'Content is here');

  return { notes, noteTitles, addNote, deleteNote, validationError };
}, {
  persist: {
    storage: piniaPluginPersistedstate.localStorage(),
  },
});
