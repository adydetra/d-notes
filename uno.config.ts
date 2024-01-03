import { defineConfig, presetUno } from 'unocss';

export default defineConfig({
  presets: [
    presetUno(),
  ],
  shortcuts: {
    input: 'w-80 rounded border border-gray-500 p-1.5',
    button: 'w-40 rounded border-none bg-gray-200 p-1.5',
  },
});
