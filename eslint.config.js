import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import pluginReact from 'eslint-plugin-react';

export default [
  {
    extends: [
      'airbnb',
      'airbnb-typescript',
      'airbnb/hooks',
      'plugin:prettier/recommended',
    ],
  },
  { files: ['**/*.{ts,tsx}'] },
  { languageOptions: { globals: globals.browser } },
  { plugins: ['prettier'] },
  {
    rules: {
      'prettier/prettier': 'error',
    },
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
];
