const path = require('path');

module.exports = {
  extends: [
    path.join(__dirname, 'browser.js'),
    'xo-react/space',
    'plugin:jsx-a11y/recommended'
  ],

  plugins: [
    'jsx-a11y'
  ],

  rules: {
    'jsx-quotes': ['error', 'prefer-double'],
    'react/jsx-tag-spacing': ['error', {
      closingSlash: 'never',
      beforeSelfClosing: 'always',
      afterOpening: 'never',
      beforeClosing: 'never'
    }],
    'react/boolean-prop-naming': 'off',
    'react/display-name': ['error'],
    'react/no-array-index-key': 'off',
    'react/jsx-fragments': 'off',
    'react/no-unescaped-entities': ['error', { forbid: ['>', '}'] }],
    'react/state-in-constructor': ['error', 'always'],
    'react/static-property-placement': ['error', 'property assignment'],
    'react/prop-types': ['error', { ignore: ['className', 'children'] }],
    'react/jsx-curly-brace-presence': ['error', {
      props: 'never',
      children: 'ignore',
      propElementValues: 'always'
    }],
    'react/jsx-no-useless-fragment': ['error', { allowExpressions: true }],
    'react/function-component-definition': ['error', {
      namedComponents: 'arrow-function',
      unnamedComponents: 'arrow-function'
    }],
    'jsx-a11y/no-onchange': 'off',
    'jsx-a11y/alt-text': ['warn', {
      elements: ['img'],
      img: ['Image', 'Picture']
    }]
  }
};
