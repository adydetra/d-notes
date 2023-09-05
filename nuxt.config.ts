export default defineNuxtConfig({
  modules: ["@pinia/nuxt"],

  devtools: { enabled: true },

  hooks: {
    async nuxtServerInit({ dispatch }) {
      await dispatch('useNotesStore/fetchNotesFromLocalStorage');
    }
  },

  pinia: {
    autoImports: ["defineStore"],
  },

  css: ["~/assets/css/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
});
