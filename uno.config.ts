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
    betweenCenter: 'flex justify-between items-center',
    input: 'rounded border-none ring ring-gray-100 bg-gray-50/50 p-4',
    postButton: 'w-60 rounded-lg border-none bg-yellow-200 p-3 cursor-pointer mb-8 transition ease-in-out hover:bg-yellow-300',
    deleteButton: 'rounded-md border-none bg-red-200 py-1 px-2 cursor-pointer transition ease-in-out hover:bg-red-300',
    sidebar: 'relative px-12 bg-gray-50/50',
  },
  transformers: [
    transformerDirectives(),
  ],
});
