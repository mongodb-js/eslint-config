/**
 * MongoDB shell language.
 *
 * @todo (imlucas) plugin for custom shell stuff the kernel team wants:
 * http://eslint.org/docs/developer-guide/working-with-plugins
 */
module.exports = {
  /**
   * @todo (imlucas) Track down more globals from http://github.com/mongodb-js/shell
   * and send a PR to http://npm.im/globals.
   */
  env: {
    mongodb: true
  }
};
