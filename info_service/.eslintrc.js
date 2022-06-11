module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
      'airbnb-base',
      'airbnb-typescript/base',
      "plugin:@typescript-eslint/eslint-recommended",
      "plugin:@typescript-eslint/recommended"
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    project: './tsconfig.json',
  },
  plugins: ['@typescript-eslint', 'prettier'],
  rules: {
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-shadow': 'off',
    '@typescript-eslint/comma-dangle': 'off',
    '@typescript-eslint/indent': 'off',
    'prettier/prettier': ['error', { singleQuote: true }],
    'no-console': 'off',
    'comma-dangle': 'off',
    'import/extensions': 'off',
    'import/no-unresolved': 'off',
    'import/no-extraneous-dependencies': 'off',
    'import/no-named-as-default-member': 'off',
    'import/prefer-default-export': 'off',
    'no-shadow': 'off',
    'no-else-return': 'off',
    'class-methods-use-this': 'off',
    'operator-linebreak': 'off',
  },
};
