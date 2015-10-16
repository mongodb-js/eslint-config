var config = require('./config');
var ERROR = config.ERROR;
var IGNORE = config.IGNORE;

/**
 * ### Ruleset: ECMAScript 6
 *
 * These rules are only relevant to ES6 environments.
 *
 * @see http://eslint.org/docs/rules/#ecmascript-6
 */
module.exports = {
  env: {
    es6: false
  },
  ecmaFeatures: {
    arrowFunctions: true,
    blockBindings: true,
    classes: true,
    defaultParams: true,
    destructuring: true,
    forOf: true,
    generators: false,
    modules: true,
    objectLiteralComputedProperties: true,
    objectLiteralDuplicateProperties: false,
    objectLiteralShorthandMethods: true,
    objectLiteralShorthandProperties: true,
    spread: true,
    superInFunctions: true,
    templateStrings: true,
    jsx: true
  },
  rules: {
    // require parens in arrow function arguments
    'arrow-parens': IGNORE,
    // require space before/after arrow function's arrow
    'arrow-spacing': IGNORE,
    // verify super() callings in constructors
    'constructor-super': IGNORE,
    // enforce the spacing around the * in generator functions
    'generator-star-spacing': IGNORE,
    // disallow modifying variables of class declarations
    'no-class-assign': IGNORE,
    // disallow modifying variables that are declared using const
    'no-const-assign': IGNORE,
    // disallow to use this/super before super() calling in constructors.
    'no-this-before-super': IGNORE,
    // require let or const instead of var
    'no-var': ERROR,
    // require method and property shorthand syntax for object literals
    'object-shorthand': IGNORE,
    // suggest using of const declaration for variables that are never modified after declared
    'prefer-const': ERROR,
    // suggest using the spread operator instead of .apply()
    'prefer-spread': IGNORE,
    // suggest using Reflect methods where applicable
    'prefer-reflect': IGNORE,
    // disallow generator functions that do not have yield
    'require-yield': IGNORE
  }
};
