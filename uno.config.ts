import { defineConfig, presetAttributify, presetIcons, presetUno, presetWebFonts } from 'unocss';
import transformerDirectives from '@unocss/transformer-directives';

export default defineConfig({
  presets: [
    presetUno(),
    presetIcons(),
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
    input: 'rounded border-none ring ring-gray-100 dark:ring-gray-900 bg-gray-50/50 dark:bg-gray-900/50 p-4 focus:outline-none',
    sidebar: 'relative px-12 bg-gray-50/50 dark:bg-gray-950',
  },
  transformers: [
    transformerDirectives(),
  ],
});
