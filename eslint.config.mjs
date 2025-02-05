import { FlatCompat } from '@eslint/eslintrc';
import js from '@eslint/js';
// import tailwindcss from 'eslint-plugin-tailwindcss';

const __dirname = import.meta.dirname;
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

const configs = [
  {
    ignores: [
      'dist/*',
      '**/.cache',
      '**/public',
      '**/node_modules',
      '**/*.esm.js',
    ],
  },
  ...compat.extends(
    'next/core-web-vitals',
    'prettier',
    // 'plugin:tailwindcss/recommended'
  ),
  {
    // plugins: {
    //   tailwindcss,
    // },

    // settings: {
    //   tailwindcss: {
    //     callees: ['cn'],
    //   },
    // },

    rules: {
      '@next/next/no-html-link-for-pages': 'off',
      'react/jsx-key': 'off',
      // 'tailwindcss/no-custom-classname': 'off',
    },
  },
];

export default configs;
