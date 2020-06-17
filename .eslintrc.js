module.exports = {
  extends: ['airbnb-typescript-prettier'],
  plugins: ['jest'],
  rules: {},
  env: {
    'jest/globals': true,
  },
  parserOptions: {
    project: './tsconfig.eslint.json',
  },
};
