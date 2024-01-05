export default defineNuxtConfig({
  modules: ['@unocss/nuxt', '@pinia/nuxt', '@pinia-plugin-persistedstate/nuxt', '@nuxtjs/color-mode'],

  pinia: {
    storesDirs: ['./stores/**'],
  },
  colorMode: {
    classSuffix: '',
  },
  devtools: { enabled: false },
});
