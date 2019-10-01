module.exports = {
  env: {
    browser: true,
    es6: true
  },
  extends: ['plugin:vue/recommended'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  plugins: ['vue', 'html'],
  rules: {
    'max-len': 'off',
    indent: ['error', 2],
    quotes: ['error', 'single']
  }
}
