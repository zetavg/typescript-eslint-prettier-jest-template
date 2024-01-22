// eslint-disable-next-line no-undef
module.exports = {
  root: true,
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['jest', 'simple-import-sort'],
  rules: {
    curly: 'off',
    'no-spaced-func': 'off',
    '@typescript-eslint/no-unused-vars': [
      'warn',
      {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
        caughtErrorsIgnorePattern: '^_',
      },
    ],
    'simple-import-sort/imports': 'warn',
    'simple-import-sort/exports': 'warn',
  },
  parserOptions: {
    requireConfigFile: false,
  },
};
