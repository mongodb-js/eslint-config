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

// module.exports = {
//   env: {
//     mocha: true
//   },
//   rules: {
//     'brace-style': [ERROR, '1tbs', {
//       allowSingleLine: true
//     }],
//     camelcase: IGNORE,
//     'comma-style': [ERROR, 'last'],
//     'consistent-this': [IGNORE, 'self'],
//     curly: [ERROR, 'multi-line'],
//     'default-case': ERROR,
//     'dot-location': [ERROR, 'property'],
//     'dot-notation': [ERROR, {
//       allowKeywords: true
//     }],
//     'generator-star-spacing': [ERROR, 'after'],
//     'guard-for-in': ERROR,
//     indent: [ERROR, 2],
//     'max-depth': [WARN, 6],
//     'max-len': [WARN, 100, 2],
//     'max-nested-callbacks': [WARN, 6],
//     'max-params': [WARN, 5],
//     'no-bitwise': ERROR,
//     'no-else-return': ERROR,
//     'no-extra-parens': ERROR,
//     'no-floating-decimal': ERROR,
//     'no-inline-comments': IGNORE,
//     'no-lonely-if': ERROR,
//     'no-multiple-empty-lines': [ERROR, {
//       max: 2
//     }],
//     'no-nested-ternary': ERROR,
//     'no-new-require': ERROR,
//     'no-self-compare': ERROR,
//     'no-shadow': IGNORE,
//     'no-throw-literal': ERROR,
//     'no-underscore-dangle': IGNORE,
//     'no-unneeded-ternary': ERROR,
//     'no-use-before-define': [ERROR, 'nofunc'],
//     'no-void': ERROR,
//     'one-var': [ERROR, 'never'],
//     'object-curly-spacing': [1, 'always'],
//     'operator-linebreak': [ERROR, 'before'],
//     'padded-blocks': [ERROR, 'never'],
//     'quote-props': [ERROR, 'as-needed'],
//     quotes: [ERROR, 'single'],
//     radix: ERROR,
//     'space-after-keywords': [ERROR, 'always'],
//     'space-before-blocks': [1, 'always'],
//     'space-before-function-paren': [ERROR, 'never'],
//     'space-in-parens': [ERROR, 'never'],
//     'spaced-comment': [ERROR, 'always'],
//     strict: [WARN, 'never'],
//     'valid-jsdoc': [WARN, {
//       prefer: {
//         returns: 'return'
//       },
//       requireReturn: false,
//       requireReturnDescription: false,
//       requireParamDescription: false
//     }],
//     'wrap-iife': [ERROR, 'outside'],
//     'wrap-regex': ERROR,
//     yoda: [WARN, 'never']
//   },
//   globals: {
//     require: true,
//     module: true,
//     exports: true
//   }
// };
