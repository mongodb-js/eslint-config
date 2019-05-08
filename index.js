/**
 * Base
 *
 * This contains settings shared across all environments.
 */
module.exports = {
  env: {
    mocha: true,
    expect: true,
    sinon: true,
    es6: true
  },
  parserOptions: {
    ecmaVersion: 6
  },
  extends: [
    'eslint-config-mongodb-js/rules/best-practices',
    /**
     * @todo (imlucas): Someday....
     * 'eslint-config-mongodb-js/rules/ecmascript-6',
     */
    'eslint-config-mongodb-js/rules/nodejs-and-commonjs',
    'eslint-config-mongodb-js/rules/possible-errors',
    'eslint-config-mongodb-js/rules/strict-mode',
    'eslint-config-mongodb-js/rules/stylistic-issues',
    'eslint-config-mongodb-js/rules/variables'
  ],
  rules: {
    'no-unused-expressions': 0,
    'chai-friendly/no-unused-expressions': 2
  },
  plugins: [
    'chai-friendly'
  ]
};
