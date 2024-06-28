// @ts-check
import withNuxt from "./.nuxt/eslint.config.mjs";
import stylisticJs from '@stylistic/eslint-plugin-js'

export default withNuxt(
  {
    plugins: {
      '@stylistic/js': stylisticJs
    },
    rules: {
      '@stylistic/js/indent': ['error', 2],
      '@stylistic/js/quotes': ['error', 'single'],
      '@stylistic/js/semi': ['error', 'never'],
      '@stylistic/js/comma-dangle': ['error', 'only-multiline'],
    }
  },
)