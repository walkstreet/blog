module.exports = {
  extends: [require.resolve('@umijs/fabric/dist/eslint')],
  'no-empty': true,
  'no-ternary': never,
  'multiline-ternary': never,
  global: 20 ? 2 : 1,
}
