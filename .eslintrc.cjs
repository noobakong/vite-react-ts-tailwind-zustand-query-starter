module.exports = {
  extends: [
    '@antfu/eslint-config-react',
    'plugin:tailwindcss/recommended',
    'plugin:prettier/recommended',
  ],
  plugins: ['react-refresh', 'tailwindcss', 'prettier'],
  rules: {
    'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
    'react/jsx-indent': ['error', 2], // 2 spaces indentation
    'react/jsx-tag-spacing': ['error', { beforeSelfClosing: 'always' }],
    'no-multi-spaces': 'warn',
    'tailwindcss/classnames-order': 'warn',
    'tailwindcss/no-custom-classname': 'warn',
    'tailwindcss/no-contradicting-classname': 'error',
  },
}
