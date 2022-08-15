export default {
  semi: false,
  tabWidth: 2,
  singleQuote: true,
  printWidth: 80,
  trailingComma: 'none',
  overrides: [
    {
      files: ['*.{yml,yaml}'],
      options: {
        singleQuote: false
      }
    }
  ]
}
