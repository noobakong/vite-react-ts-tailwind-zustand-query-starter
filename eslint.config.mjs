// eslint.config.mjs
import antfu from '@antfu/eslint-config'
import { FlatCompat } from '@eslint/eslintrc'

const compat = new FlatCompat()

export default antfu(
  {
    ignores: [],
    rules: {
      'style/indent': ['error', 2, { ignoredNodes: ['ConditionalExpression'] }],
    },
  },

  // Legacy config
  ...compat.config({
    extends: ['plugin:tailwindcss/recommended'],
    rules: {
      'tailwindcss/classnames-order': 'warn',
      'tailwindcss/no-custom-classname': 'warn',
      'tailwindcss/no-contradicting-classname': 'error',
    },
  }),
)
