export default defineNuxtConfig({
  modules: ['@unocss/nuxt', '@pinia/nuxt'],

  pinia: {
    storesDirs: ['./stores/**'],
  },
  devtools: { enabled: false },
});
