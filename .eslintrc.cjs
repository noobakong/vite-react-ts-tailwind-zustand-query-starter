module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    '@antfu/eslint-config-react',
  ],
  ignorePatterns: ['dist'],
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    'react/jsx-indent': ['error', 2], // 2 spaces indentation
    'react/jsx-tag-spacing': ['error', { beforeSelfClosing: 'always' }],
  },
}
