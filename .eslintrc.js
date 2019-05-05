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
    'semi': 0,
    'space-before-function-paren': 0
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
};
