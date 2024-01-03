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
  return { notes, noteTitles, addNote };
});
