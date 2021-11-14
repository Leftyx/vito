module.exports = {
   root: true,
   env: {
      node: true,
   },
   extends: [
      'plugin:vue/vue3-recommended',
      'eslint:recommended',
      '@vue/typescript/recommended'
   ],
   parserOptions: {
      ecmaVersion: 2020,
   },
   rules: {
      semi: ['error', 'always'],
      quotes: [2, 'single'],
      'vue/max-attributes-per-line': ['warn', {
         'singleline': {
            'max': 3,
            'allowFirstLine': true
         },
         'multiline': {
            'max': 4,
            'allowFirstLine': true
         }
      }],
      'vue/html-closing-bracket-newline': ['error', {
         'singleline': 'never',
         'multiline': 'never'
      }],
      'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
      'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
   },
};
