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
      'vue/max-attributes-per-line': ['error', {
         'singleline': {
            'max': 3
         },
         'multiline': {
            'max': 4
         }
      }],
      'vue/html-closing-bracket-newline': ['error', {
         'singleline': 'never',
         'multiline': 'never'
      }],
      'vue/html-self-closing': ['error', {
         'html': {
            'void': 'always',
            'normal': 'always',
            'component': 'always',
          },
          'svg': 'always',
          'math': 'always',
      }],
      'vue/singleline-html-element-content-newline': ['error', {
         'ignoreWhenNoAttributes': true,
         'ignoreWhenEmpty': true,
       }],
      'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
      'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
   },
};
