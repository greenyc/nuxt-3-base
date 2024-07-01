import globals from 'globals'
import pluginJs from '@eslint/js'
import tseslint from 'typescript-eslint'
import pluginVue from 'eslint-plugin-vue'
import eslintConfigPrettier from 'eslint-config-prettier'

export default [
  { languageOptions: { globals: { ...globals.browser, ...globals.node } } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  ...pluginVue.configs['flat/essential'],
  {
    files: ['**/*.vue'],
    plugins: {
      'typescript-eslint': tseslint.plugin
    },
    languageOptions: {
      parserOptions: {
        project: './tsconfig.json',
        extraFileExtensions: ['.vue'],
        sourceType: 'module',
        parser: '@typescript-eslint/parser'
      }
    }
  },
  {
    ignores: ['node_modules', 'dist', 'public', '.nuxt']
  },
  eslintConfigPrettier
]
