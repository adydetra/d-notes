interface Note {
  title: string;
  content: string;
}

export const useNotesStore = defineStore("notes", {
  state: () => ({
    notes: [] as Note[],
  }),
  actions: {
    addNote(note: Note) {
      this.notes.push(note);
      this.saveNotesToLocalStorage();
    },
    saveNotesToLocalStorage() {
      localStorage.setItem("notes", JSON.stringify(this.notes));
    },
    fetchNotesFromLocalStorage() {
      const savedNotes = localStorage.getItem("notes");
      if (savedNotes) {
        this.notes = JSON.parse(savedNotes);
      }
    },
  },
});
