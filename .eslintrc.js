module.exports = {
  root: true,
  plugins: ['node', 'prettier'],
  extends: [
    'eslint:recommended',
    'plugin:node/recommended',
    'plugin:prettier/recommended',
  ],
  rules: {
    'prettier/prettier': 'warn',
    'node/no-missing-import': 'off',
    'node/no-empty-function': 'off',
    'node/no-unsupported-features/es-syntax': 'off',
    'node/no-missing-require': 'off',
    'node/shebang': 'off',
    quotes: ['warn', 'single', { avoidEscape: true }],
    'node/no-unpublished-import': 'off',
  }
}
