var base = require('./');
var merge = require('lodash.merge');
module.exports = merge({}, base, {
  env: {
    node: true
  },
  rules: {
    'handle-callback-err': [1, '^(err|.+Err|error|.+Error)$'],
    'no-path-concat': 2,
    'no-sync': 1,
    'no-process-exit': 0
  }
});
