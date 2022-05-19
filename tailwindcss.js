module.exports = {
  extends: [
    'plugin:tailwindcss/recommended'
  ],

  plugins: [
    'tailwindcss'
  ],

  settings: {
    tailwindcss: {
      whitelist: [
        'text-(.*)-r'
      ]
    }
  },

  rules: {
    'tailwindcss/no-contradicting-classname': ['error'],
    'tailwindcss/classnames-order': 'off',
    'tailwindcss/no-custom-classname': 'off'
  }
};
