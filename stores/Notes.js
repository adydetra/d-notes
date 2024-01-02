export const useNotesStore = defineStore('note', () => {
  const notes = ref([
    { date: '', title: '', content: '' },
  ]);
  const noteTitles = computed (() => notes.value.map(() => notes.title));
  function addNote(title, content) {
    notes.value.unshift({
      date: Date(),
      title,
      content,
    });
  }
  return { notes, noteTitles, addNote };
});
