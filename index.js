/**
 * Base
 *
 * This contains settings shared across all environments.
 */
module.exports = {
  env: {
    mocha: true
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
  rules: {}
};
