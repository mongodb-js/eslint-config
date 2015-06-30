var base = require('./');
var merge = require('lodash.merge');

/**
 * MongoDB shell language.
 *
 * @todo (imlucas) plugin for custom shell stuff the kernel team wants:
 * http://eslint.org/docs/developer-guide/working-with-plugins
 */
module.exports = merge({}, base, {
  /**
   * @todo (imlucas) Track down more globals from http://github.com/mongodb-js/shell
   */
  env: {
    mongodb: true
  }
});
