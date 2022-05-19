const path = require('path');
const rules = require('./baseRules');

module.exports = {
  extends: [
    path.join(__dirname, 'index.js'),
    'xo-space/browser'
  ],

  rules
};
