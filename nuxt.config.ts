export default defineNuxtConfig({
  modules: ['@unocss/nuxt', '@pinia/nuxt', '@pinia-plugin-persistedstate/nuxt'],

  pinia: {
    storesDirs: ['./stores/**'],
  },
  devtools: { enabled: false },
});
