module.exports = {
  ignorePatterns: [
    '!.storybook'
  ],

  overrides: [{
    files: '**/*.mdx',
    parser: 'eslint-mdx',
    globals: {
      Alert: true,
      Badge: true
    },
    extends: [
      'plugin:mdx/recommended'
    ],
    rules: {
      indent: 'off',
      'spaced-comment': 'off',
      'react/jsx-indent': 'off',
      semi: 'off',
      'max-statements-per-line': 'off'
    }
  }]
};
