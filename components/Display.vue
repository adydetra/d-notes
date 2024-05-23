<script setup lang="ts">
const props = defineProps<{
  date: string;
  title: string;
  content: string;
  delete: Function;
}>();

const tooltipVisible = ref();

function toggleTooltip() {
  tooltipVisible.value = !tooltipVisible.value;
}
</script>

<template>
  <section mb-6 rounded-xl bg-yellow-50 p-4 text-gray-600>
    <Toast />
    <h3 mt-0 leading-loose>
      {{ props.title }}
    </h3>
    <p text-sm leading-loose md:text-base>
      {{ props.content }}
    </p>
    <div betweenCenter>
      <span betweenCenter gap-1.5 text-xs><div i-ph:calendar-blank-duotone />{{ props.date }}</span>
      <div relative>
        <button aria-label="Remove" cursor-pointer rounded-md border-none bg-transparent p-0 transition ease-in-out dark:text-black @click="props.delete?.(props.date)" @mouseenter="toggleTooltip" @mouseleave="toggleTooltip">
          <div i-lets-icons:trash-duotone text-2xl text-red-400 hover:text-red-600 />
        </button>
        <div v-show="tooltipVisible" class="-left-4 -top-7" absolute z-10 rounded bg-gray-700 px-2 py-1 text-xs text-white>
          Remove
        </div>
      </div>
    </div>
  </section>
</template>
