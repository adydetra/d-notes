export const useNotesStore = defineStore('note', () => {
  const notes = ref([
    { date: '', title: '', content: '' },
  ]);
  const noteTitles = computed (() => notes.value.map(() => notes.title));
  function addNote(title, content) {
    const currentDate = new Date();
    const format = currentDate.toLocaleDateString('en-US', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
    });
    notes.value.unshift({
      date: format,
      title,
      content,
    });
  }
  function deleteNote(date) {
    const index = notes.value.findIndex(note => note.date === date);

    if (index !== -1)
      notes.value.splice(index, 1);
  }
  return { notes, noteTitles, addNote, deleteNote };
}, {
  persist: true,
});
