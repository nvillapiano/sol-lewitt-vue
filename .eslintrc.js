module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    '@vue/airbnb',
  ],
  rules: {
    'arrow-parens': 0,
    'generator-star-spacing': 0,
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    'vue/no-unused-components': 1,
    semi: 0,
    'space-before-function-paren': 0,
    'max-len': 0,
    'no-plusplus': 1,
    'no-inner-declarations': 1,
    'no-shadow': 1,
    'no-empty': 1,
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
};
