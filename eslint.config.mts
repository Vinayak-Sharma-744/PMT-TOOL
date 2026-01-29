import js from '@eslint/js';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import { defineConfig } from 'eslint/config';
import prettier from 'eslint-config-prettier';
import prettierPlugin from 'eslint-plugin-prettier';

export default defineConfig([
  {
    files: ['**/*.{js,mjs,cjs,ts,mts,cts}'],
    plugins: { js, prettier: prettierPlugin },
    extends: ['js/recommended'],
    languageOptions: { globals: globals.browser },
    rules: {
      // ✅ Ensures indentation/formatting follows Prettier
      'prettier/prettier': 'warn',
    },
  },
  tseslint.configs.recommended,

  {
    files: ['src/**/*.{ts,mts,cts}'], // or narrow to models/schemas folders
    rules: {
      'object-curly-newline': [
        'error',
        {
          ObjectExpression: { multiline: true, minProperties: 2, consistent: true },
          ObjectPattern: { multiline: true, minProperties: 2, consistent: true },
          ImportDeclaration: 'never',
          ExportDeclaration: 'never',
        },
      ],
      'object-property-newline': ['error', { allowAllPropertiesOnSameLine: false }],
    },
  },

  // ✅ Disable conflicting formatting rules from ESLint/TS rulesets
  prettier,
]);
