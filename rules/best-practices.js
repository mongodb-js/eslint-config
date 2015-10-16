var config = require('./config');
var ERROR = config.ERROR;
var WARNING = config.WARNING;
var IGNORE = config.IGNORE;

/**
 * ### Ruleset: Best Practices
 *
 * These are rules designed to prevent you from making mistakes.
 * They either prescribe a better way of doing something or
 * help you avoid footguns.
 *
 * @see http://eslint.org/docs/rules/#best-practices
 */
module.exports = {
  rules: {
    // Enforces getter/setter pairs in objects
    'accessor-pairs': IGNORE,
    // treat var statements as if they were block scoped
    'block-scoped-var': ERROR,
    // specify the maximum cyclomatic complexity allowed in a program
    complexity: [ERROR, 11],
    // require return statements to either always or never specify values
    'consistent-return': ERROR,
    // specify curly brace conventions for all control statements
    curly: [ERROR, 'multi-line'],
    // require default case in switch statements
    'default-case': ERROR,
    // encourages use of dot notation whenever possible
    'dot-notation': [ERROR, {
      allowKeywords: true
    }],
    // enforces consistent newlines before or after dots
    'dot-location': IGNORE,
    // require the use of === and !==
    eqeqeq: ERROR,
    // make sure for-in loops have an if statement
    'guard-for-in': ERROR,
    // disallow the use of alert, confirm, and prompt
    'no-alert': WARNING,
    // disallow use of arguments.caller or arguments.callee
    'no-caller': ERROR,
    // disallow division operators explicitly at beginning of regular expression
    'no-div-regex': IGNORE,
    // disallow else after a return in an if
    'no-else-return': ERROR,
    // disallow use of labels for anything other then loops and switches
    'no-empty-label': ERROR,
    // disallow comparisons to null without a type-checking operator
    'no-eq-null': IGNORE,
    // disallow use of eval()
    'no-eval': ERROR,
    // disallow adding to native types
    'no-extend-native': ERROR,
    // disallow unnecessary function binding
    'no-extra-bind': ERROR,
    // disallow fallthrough of case statements
    'no-fallthrough': ERROR,
    // disallow the use of leading or trailing decimal points in numeric literals
    'no-floating-decimal': ERROR,
    // disallow the type conversions with shorter notations
    'no-implicit-coercion': IGNORE,
    // disallow use of eval()-like methods
    'no-implied-eval': ERROR,
    // disallow this keywords outside of classes or class-like objects
    'no-invalid-this': 0,
    // disallow usage of __iterator__ property
    'no-iterator': ERROR,
    // disallow use of labeled statements
    'no-labels': ERROR,
    // disallow unnecessary nested blocks
    'no-lone-blocks': ERROR,
    // disallow creation of functions within loops
    'no-loop-func': ERROR,
    // disallow use of multiple spaces
    'no-multi-spaces': ERROR,
    // disallow use of multiline strings
    'no-multi-str': ERROR,
    // disallow reassignments of native objects
    'no-native-reassign': ERROR,
    // disallow use of new operator when not part of the assignment or comparison
    'no-new': ERROR,
    // disallow use of new operator for Function object
    'no-new-func': ERROR,
    // disallows creating new instances of String,Number, and Boolean
    'no-new-wrappers': ERROR,
    // disallow use of (old style) octal literals
    'no-octal': ERROR,
    // disallow use of octal escape sequences in string literals, such as
    // var foo = 'Copyright \251';
    'no-octal-escape': ERROR,
    // disallow reassignment of function parameters
    /**
     * @differ - Breaks `module.exports = function(opts, fn){}` convention.
     */
    'no-param-reassign': IGNORE,
    // disallow use of process.env
    'no-process-env': IGNORE,
    // disallow usage of __proto__ property
    'no-proto': ERROR,
    // disallow declaring the same variable more then once
    'no-redeclare': ERROR,
    // disallow use of assignment in return statement
    'no-return-assign': ERROR,
    // disallow use of `javascript:` urls.
    'no-script-url': ERROR,
    // disallow comparisons where both sides are exactly the same
    'no-self-compare': ERROR,
    // disallow use of comma operator
    'no-sequences': ERROR,
    // restrict what can be thrown as an exception
    'no-throw-literal': ERROR,
    // disallow usage of expressions in statement position
    'no-unused-expressions': ERROR,
    // disallow unnecessary .call() and .apply()
    'no-useless-call': IGNORE,
    // disallow use of void operator
    'no-void': IGNORE,
    // disallow usage of configurable warning terms in comments: e.g. todo
    'no-warning-comments': [IGNORE, {
      terms: ['todo', 'note'],
      location: 'start'
    }],
    // disallow use of the with statement
    'no-with': ERROR,
    // require use of the second argument for parseInt()
    radix: ERROR,
    // requires to declare all vars on top of their containing scope
    /**
     * @differ - YOU BE YOU, DEVELOPER.
     */
    'vars-on-top': IGNORE,
    // require immediate function invocation to be wrapped in parentheses
    'wrap-iife': [ERROR, 'any'],
    // require or disallow Yoda conditions
    yoda: ERROR
  }
};
