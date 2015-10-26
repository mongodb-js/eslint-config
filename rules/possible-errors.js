var config = require('./config');
var ERROR = config.ERROR;
var WARNING = config.WARNING;
var IGNORE = config.IGNORE;

/**
 * ### Ruleset: Possible Errors
 *
 * The following rules point out areas where you might have made mistakes.
 *
 * @see http://eslint.org/docs/rules/#possible-errors
 */
module.exports = {
  rules: {
    // disallow trailing commas in object literals
    /**
     * @differ - This is what transform tools are for.
     */
    'comma-dangle': [ERROR, 'never'],
    // disallow assignment in conditional expressions
    'no-cond-assign': [ERROR, 'always'],
    // disallow use of console
    'no-console': WARNING,
    // disallow use of constant expressions in conditions
    'no-constant-condition': WARNING,
    // disallow control characters in regular expressions
    'no-control-regex': ERROR,
    // disallow use of debugger
    'no-debugger': WARNING,
    // disallow duplicate arguments in functions
    'no-dupe-args': ERROR,
    // disallow duplicate keys when creating object literals
    'no-dupe-keys': ERROR,
    // disallow a duplicate case label.
    'no-duplicate-case': ERROR,
    // disallow the use of empty character classes in regular expressions
    'no-empty-character-class': ERROR,
    // disallow empty statements
    'no-empty': ERROR,
    // disallow assigning to the exception in a catch block
    'no-ex-assign': ERROR,
    // disallow double-negation boolean casts in a boolean context
    'no-extra-boolean-cast': IGNORE,
    // disallow unnecessary parentheses
    'no-extra-parens': [ERROR, 'functions'],
    // disallow unnecessary semicolons
    'no-extra-semi': ERROR,
    // disallow overwriting functions written as function declarations
    'no-func-assign': ERROR,
    // disallow function or variable declarations in nested blocks
    'no-inner-declarations': ERROR,
    // disallow invalid regular expression strings in the RegExp constructor
    'no-invalid-regexp': ERROR,
    // disallow irregular whitespace outside of strings and comments
    'no-irregular-whitespace': ERROR,
    // disallow negation of the left operand of an in expression
    'no-negated-in-lhs': ERROR,
    // disallow the use of object properties of the global object (Math and JSON) as functions
    'no-obj-calls': ERROR,
    // disallow multiple spaces in a regular expression literal
    'no-regex-spaces': ERROR,
    // disallow sparse arrays
    'no-sparse-arrays': ERROR,
    // disallow unreachable statements after a return, throw, continue, or break statement
    'no-unreachable': ERROR,
    // disallow comparisons with the value NaN
    'use-isnan': ERROR,
    // ensure JSDoc comments are valid
    /**
     * @differ - No sense in requiring useless strings that need to be maintained
     * manually that should be maintained by a default in tooling, e.g.
     * no @return supplied and it takes a {Function}? then its always
     * @return {Void}.  Also, requiring descriptions leads to nothing but
     * rushed, copy+paste crap we don't want in there anyway. 
     */
    'valid-jsdoc': [WARNING, {
      requireReturn: false,
      requireParamDescription: false,
      requireReturnDescription: false
    }],
    // ensure that the results of typeof are compared against a valid string
    'valid-typeof': ERROR,
    // Avoid code that looks like two expressions but is actually one
    'no-unexpected-multiline': WARNING
  }
};
