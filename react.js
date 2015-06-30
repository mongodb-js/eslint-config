var base = require('./browser');
var merge = require('lodash.merge');

/**
 * react.js projects
 */
module.exports = merge({}, base, {
  env: {
    es6: true
  },
  ecmaFeatures: {
    modules: true,
    jsx: true
  },
  plugins: [
    'react'
  ],
  rules: {
    'no-extra-parens': 0,
    'react/jsx-quotes': [2, 'double'],
    'react/jsx-uses-react': [2, { pragma: 'dom' }],
    'react/self-closing-comp': 2,
    'react/wrap-multilines': 2
  }
});
