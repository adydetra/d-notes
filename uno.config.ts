import { defineConfig, presetAttributify, presetUno, presetWebFonts } from 'unocss';
import transformerDirectives from '@unocss/transformer-directives';

export default defineConfig({
  presets: [
    presetUno(),
    presetAttributify(),
    presetWebFonts({
      provider: 'bunny',
      fonts: {
        mono: 'DM Mono',
      },
    }),
  ],
  shortcuts: {
    input: 'rounded border-none ring ring-gray-100/70 bg-gray-50/50 p-3',
    saveButton: 'w-40 rounded border-none bg-yellow-200 p-2.5 cursor-pointer',
    deleteButton: 'w-40 rounded border-none bg-red-200 p-1 cursor-pointer',
    sidebar: 'px-12 bg-gray-50/50',
  },
  transformers: [
    transformerDirectives(),
  ],
});
