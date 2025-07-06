module.exports = {
  root: true,
  extends: [
    '@react-native',
    'plugin:@typescript-eslint/recommended',
    'prettier',
  ],
  plugins: ['@typescript-eslint'],
  parser: '@typescript-eslint/parser',
  rules: {
    'no-unused-vars': 'warn',
    'react/react-in-jsx-scope': 'off',
    'prettier/prettier': ['error'],
  },
};
