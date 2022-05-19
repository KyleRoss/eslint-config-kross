const rules = require('./baseRules');

module.exports = {
  ignorePatterns: [
    'node_modules/**/*',
    '!.github'
  ],

  env: {
    jest: true
  },

  extends: [
    'xo-space'
  ],

  rules
};
