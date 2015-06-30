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
  globals: {
    print: true,
    load: true,
    gc: true,
    MinKey: true,
    MaxKey: true,
    Mongo: true,
    NumberInt: true,
    NumberLong: true,
    ObjectId: true,
    DBPointer: true,
    UUID: true,
    BinData: true,
    HexData: true,
    MD5: true,
    Map: true,
    Timestamp: true,
    JSON: true
  }
});
