/**
 * @constant {Number} ERROR - A rule violation should break the build.
 */
module.exports.ERROR = 2;

/**
 * @constant {Number} WARNING - A rule violation should
 *  print a warning message but not fail a build.
 */
module.exports.WARNING = 1;

/**
 * @constant {Number} IGNORE - A rule should be explicitly ignored.
 */
module.exports.IGNORE = 0;
