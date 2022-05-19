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

  rules: {
    'array-element-newline': 'off',
    'arrow-body-style': 'off',
    camelcase: ['error', { properties: 'never' }],
    'capitalized-comments': 'off',
    'comma-dangle': ['error', 'never'],
    curly: ['error', 'multi-line'],
    'func-names': ['error', 'as-needed'],
    'object-curly-spacing': ['error', 'always'],
    'operator-linebreak': ['error', 'after'],
    'no-multiple-empty-lines': ['error', { max: 2, maxEOF: 1, maxBOF: 0 }],
    'no-negated-condition': 'off',
    'no-implicit-coercion': 'off',
    'keyword-spacing': ['error', {
      overrides: {
        if: { after: false },
        for: { after: false },
        while: { after: false },
        catch: { after: false }
      }
    }]
  }
};
