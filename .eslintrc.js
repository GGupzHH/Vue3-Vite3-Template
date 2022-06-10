module.exports = {
  root: true,
  env: {
    node: true,
    es6: true,
    browser: true,
    jest: true
  },
  globals: {
    defineProps: 'readonly',
    defineEmits: 'readonly',
    defineExpose: 'readonly',
    withDefaults: 'readonly'
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/base',
    'plugin:vue/vue3-essential',
    'plugin:vue/vue3-strongly-recommended',
    'plugin:vue/vue3-recommended'
  ],
  parserOptions: {
    ecmaFeatures: {
      legacyDecorators: true
    },
    parser: '@babel/eslint-parser'
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-unused-vars': 1,
    'no-undef': 1,
    'no-var': 'error',
    'no-trailing-spaces': 2, // 禁用行尾空白
    'comma-style': ['error', 'last'],
    'comma-dangle': ['error', 'never'],
    'no-irregular-whitespace': 2,
    'no-multi-spaces': 1,
    'object-property-newline': ['error'],
    'key-spacing': 'error',
    'object-curly-spacing': ['error','always'],
    'block-spacing': ['error', 'always'],
    'computed-property-spacing': ['error', 'never'],
    'func-call-spacing': ['error', 'never'],
    'keyword-spacing': [
      'error',
      {
        'before': true,
        'after': true
      }
    ],
    'space-infix-ops': [
      'error',
      {
        'int32Hint':
        false
      }
    ],
    'spaced-comment': [
      'error',
      'always',
      {
        'exceptions': ['-', '+']
      }
    ],
    'arrow-spacing': [
      'error',
      {
        'before': true,
        'after': true
      }
    ],
    'template-curly-spacing': ['error', 'always'],
    'no-multiple-empty-lines': [
      2,
      {
        max: 1
      }
    ],
    'quotes': [
      'error',
      'single',
      {
        'avoidEscape': true,
        'allowTemplateLiterals': true
      }
    ],
    'camelcase': ['error', { 'properties': 'never' }],
    'indent': ['error', 2, { 'SwitchCase': 1 }],
    'semi': ['error', 'never'],
    // vue
    'vue/multi-word-component-names': 0,
    'vue/no-unused-components': 1,
    'vue/no-mutating-props': 0,
    'vue/script-setup-uses-vars': 'error',
    'vue/v-on-event-hyphenation': ['warn', 'always', {
      autofix: true
    }],
    'vue/html-self-closing': ['error', {
      html: {
        void: 'never',
        normal: 'never',
        component: 'always'
      },
      svg: 'always',
      math: 'always'
    }],

    // https://cn.eslint.org/docs/rules/eol-last
    'eol-last': 2,

    // https://eslint.org/docs/rules/prefer-const
    'prefer-const': 2,

    'space-before-function-paren': [
      'error',
      'never'
    ]
  }
}
