import antfu from '@antfu/eslint-config';

export default antfu({
  unocss: true,
  vue: true,
  typescript: true,
  formatters: {
    css: true,
    html: true,
    markdown: 'prettier',
  },
  stylistic: {
    semi: true,
  },
});
