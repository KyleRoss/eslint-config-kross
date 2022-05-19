const path = require('path');

module.exports = {
  extends: [
    path.join(__dirname, 'react.js'),
    'plugin:@next/next/recommended',
    'plugin:css-modules/recommended'
  ],

  ignorePatterns: [
    '.next'
  ],

  env: {
    browser: true,
    node: true,
    jest: true
  },

  plugins: [
    'css-modules'
  ],

  rules: {
    'css-modules/no-unused-class': ['warn']
  }
};
