import { defineConfig, presetAttributify, presetUno } from 'unocss';

export default defineConfig({
  presets: [
    presetUno(),
    presetAttributify(),
  ],
  shortcuts: {
    input: 'w-80 rounded border border-gray-500 p-1.5',
    button: 'w-40 rounded border-none bg-gray-200 p-1.5',
  },
});
