var config = require('./config');
var ERROR = config.ERROR;

/**
 * ### Ruleset: Strict Mode
 *
 * These rules relate to using strict mode.
 *
 * @see http://eslint.org/docs/rules/#strict-mode
 */
module.exports = {
  rules: {
    // `'use strict';` is a job for transform tools
    // and using it explictly will break them.
    strict: [ERROR, 'never']
  }
};
