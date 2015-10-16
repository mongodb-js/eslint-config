var config = require('./config');
var ERROR = config.ERROR;
var IGNORE = config.IGNORE;

/**
 * ## Variables
 *
 * These rules have to do with variable declarations.
 *
 * @see http://eslint.org/docs/rules/#variables
 */
module.exports = {
  rules: {
    // enforce or disallow variable initializations at definition
    'init-declarations': IGNORE,
    // disallow the catch clause parameter name being the same as a variable in the outer scope
    'no-catch-shadow': IGNORE,
    // disallow deletion of variables
    'no-delete-var': ERROR,
    // disallow labels that share a name with a variable
    'no-label-var': IGNORE,
    // disallow shadowing of names such as arguments
    'no-shadow-restricted-names': ERROR,
    // disallow declaration of variables already declared in the outer scope
    'no-shadow': ERROR,
    // disallow use of undefined when initializing variables
    'no-undef-init': IGNORE,
    // disallow use of undeclared variables unless mentioned in a /*global */ block
    'no-undef': ERROR,
    // disallow use of undefined variable
    'no-undefined': IGNORE,
    // disallow declaration of variables that are not used in the code
    'no-unused-vars': [ERROR, {
      vars: 'local',
      args: 'after-used'
    }],
    // disallow use of variables before they are defined
    'no-use-before-define': ERROR
  }
};
