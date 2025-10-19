import github from 'eslint-plugin-github'

export default [
  github.getFlatConfigs().browser,
  github.getFlatConfigs().recommended,
  ...github.getFlatConfigs().typescript,
  {
    languageOptions: {
      globals: {
        ExampleElement: 'readonly',
      },
    },
    files: ['**/*.js', '**/*.ts'],
    rules: {
      'github/unescaped-html-literal': 'off',
      'github/no-inner-html': 'off',
      'i18n-text/no-en': 'off',
    },
  },
]
