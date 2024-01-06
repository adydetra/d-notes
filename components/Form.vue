<script setup lang="ts">
const NotesStore = useNotesStore();
const title = ref('');
const content = ref('');

function postNote() {
  if (title.value.trim() !== '' && content.value.trim() !== '') {
    NotesStore.addNote(title.value, content.value);
    title.value = '';
    content.value = '';
    NotesStore.validationError = '';
  }
  else if (content.value.trim() !== '') {
    NotesStore.validationError = 'Title required!';
    setTimeout(() => {
      NotesStore.validationError = '';
    }, 3000);
  }
  else if (title.value.trim() !== '') {
    NotesStore.validationError = 'Content required!';
    setTimeout(() => {
      NotesStore.validationError = '';
    }, 3000);
  }
  else {
    NotesStore.validationError = 'Title and Content required!';
    setTimeout(() => {
      NotesStore.validationError = '';
    }, 3000);
  }
}
</script>

<template>
  <div top-0 h-screen flex flex-col justify-between md:sticky>
    <div h-full flex flex-col gap-6 pb-8>
      <div betweenCenter>
        <p text-2xl>
          Write
        </p>
        <ColorMode />
      </div>
      <input v-model="title" placeholder="Title (max 40 length)" maxlength="40" autofocus input>
      <textarea v-model="content" placeholder="Content" h-full resize-none input />
    </div>
    <button mb-8 w-60 flex cursor-pointer items-center justify-center gap-2 rounded-lg border-none bg-yellow-200 p-3 transition ease-in-out hover:bg-yellow-300 dark:text-black @click="postNote">
      Post <div i-lets-icons:send-duotone text-xl />
    </button>
  </div>
</template>
