var config = require('./config');
var ERROR = config.ERROR;
var WARNING = config.WARNING;
var IGNORE = config.IGNORE;

/**
 * ## Stylistic Issues
 *
 * These rules are purely matters of style and are quite subjective.
 *
 * @see http://eslint.org/docs/rules/#stylistic-issues
 */
module.exports = {
  rules: {
    // enforce spacing inside array brackets
    'array-bracket-spacing': IGNORE,
    // enforce one true brace style
    'brace-style': [ERROR, '1tbs', {
      allowSingleLine: true
    }],
    // require camel case names
    camelcase: [ERROR, {
      properties: 'never'
    }],
    // enforce spacing before and after comma
    'comma-spacing': [ERROR, {
      before: false,
      after: true
    }],
    // enforce one true comma style
    'comma-style': [ERROR, 'last'],
    // require or disallow padding inside computed properties
    'computed-property-spacing': IGNORE,
    // enforces consistent naming when capturing the current execution context
    'consistent-this': IGNORE,
    // enforce newline at the end of file, with no multiple empty lines
    'eol-last': ERROR,
    // require function expressions to have a name
    /**
     * @differ - This is for advanced debugging.
     */
    'func-names': IGNORE,
    // enforces use of function declarations or expressions
    'func-style': IGNORE,
    // this option enforces minimum and maximum identifier lengths (variable names, property names etc.)
    'id-length': [ERROR, {
      min: 0,
      properties: 'never'
    }],
    // this option sets a specific tab width for your code
    indent: [ERROR, 2, {
      SwitchCase: 1
    }],
    // specify whether double or single quotes should be used in JSX attributes
    'jsx-quotes': ERROR,
    // enforces spacing between keys and values in object literal properties
    'key-spacing': [ERROR, {
      beforeColon: false,
      afterColon: true
    }],
    // enforces empty lines around comments
    'lines-around-comment': IGNORE,
    // disallow mixed 'LF' and 'CRLF' as linebreaks
    'linebreak-style': IGNORE,
    // specify the maximum depth callbacks can be nested
    'max-nested-callbacks': IGNORE,
    // require a capital letter for constructors
    'new-cap': [ERROR, {
      newIsCap: true
    }],
    // disallow the omission of parentheses when invoking a constructor with no arguments
    'new-parens': IGNORE,
    // allow/disallow an empty newline after var statement
    'newline-after-var': IGNORE,
    // disallow use of the Array constructor
    'no-array-constructor': IGNORE,
    // disallow use of the continue statement
    'no-continue': IGNORE,
    // disallow comments inline after code
    'no-inline-comments': IGNORE,
    // disallow if as the only statement in an else block
    'no-lonely-if': WARNING,
    // disallow mixed spaces and tabs for indentation
    // @differ - Not ignored as your environment is most likely not properly configured!
    'no-mixed-spaces-and-tabs': ERROR,
    // disallow multiple empty lines
    'no-multiple-empty-lines': [ERROR, {
      max: 2
    }],
    // disallow nested ternary expressions
    // @differ - Yes, this may be brittle but sometimes brevity is preferable.
    'no-nested-ternary': WARNING,
    // disallow use of the Object constructor
    'no-new-object': ERROR,
    // disallow space between function identifier and application
    'no-spaced-func': ERROR,
    // disallow the use of ternary operators
    'no-ternary': IGNORE,
    // disallow trailing whitespace at the end of lines
    'no-trailing-spaces': ERROR,
    // disallow dangling underscores in identifiers
    'no-underscore-dangle': IGNORE,
    // disallow the use of Boolean literals in conditional expressions
    'no-unneeded-ternary': IGNORE,
    // require or disallow padding inside curly braces
    'object-curly-spacing': IGNORE,
    // allow just one var statement per function
    'one-var': [ERROR, 'never'],
    // require assignment operator shorthand where possible or prohibit it entirely
    'operator-assignment': IGNORE,
    // enforce operators to be placed before or after line breaks
    'operator-linebreak': IGNORE,
    // enforce padding within blocks
    'padded-blocks': [ERROR, 'never'],
    // require quotes around object literal property names
    'quote-props': IGNORE,
    // specify whether double or single quotes should be used
    quotes: [ERROR, 'single', 'avoid-escape'],
    // require identifiers to match the provided regular expression
    'id-match': IGNORE,
    // enforce spacing before and after semicolons
    'semi-spacing': [ERROR, {
      before: false,
      after: true
    }],
    // require or disallow use of semicolons instead of ASI
    semi: [ERROR, 'always'],
    // sort variables within the same declaration block
    'sort-vars': IGNORE,
    // require a space after certain keywords
    'space-after-keywords': ERROR,
    // require or disallow space before blocks
    'space-before-blocks': ERROR,
    // require or disallow space before function opening parenthesis
    'space-before-function-paren': [ERROR, 'never'],
    // require or disallow spaces inside parentheses
    'space-in-parens': IGNORE,
    // require spaces around operators
    'space-infix-ops': ERROR,
    // require a space after return, throw, and case
    'space-return-throw-case': ERROR,
    // Require or disallow spaces before/after unary operators
    'space-unary-ops': IGNORE,
    // require or disallow a space immediately following the // or /* in a comment
    // @differ - Don't mark `/*eslint #{rule_name}:#{rule_args}*/` as an error.
    'spaced-comment': [ERROR, 'always', {
      line: {
        markers: ['/'],
        exceptions: ['-', '+']
      },
      block: {
        markers: ['!'],
        exceptions: ['*']
      }
    }],
    // require regex literals to be wrapped in parentheses
    'wrap-regex': 0
  }
};
