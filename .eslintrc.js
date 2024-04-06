const { error } = require('console')
const { EndOfLineState } = require('typescript')

module.exports = {
  root: true,
  extends: ['plugin:@next/next/recommended', '@payloadcms'],
  ignorePatterns: ['**/payload-types.ts'],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': ['error', { EndOfLine: 'auto' }],
  },
}
