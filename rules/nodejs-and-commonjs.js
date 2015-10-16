var config = require('./config');
var ERROR = config.ERROR;
var WARNING = config.WARNING;
var IGNORE = config.IGNORE;

/**
 * ### Ruleset: Node.js and CommonJS
 *
 * These rules are specific to JavaScript running on Node.js or using CommonJS in the browser.
 *
 * @see http://eslint.org/docs/rules/#nodejs-and-commonjs
 */
module.exports = {
  rules: {
    // enforce return after a callback
    /**
     * @differ - Another footgun for new JS developers
     * is the double callback problem.  At least w/ a WARNING
     * we can give them some code smell to follow!
     */
    'callback-return': WARNING,
    // enforces error handling in callbacks (node environment)
    /**
     * @differ - This is the #1 cause of all pain for developers of all
     * levels, particularly those new to javascript. Rather
     * than find out months later about a bug being caused by this
     * or spending a few frustrating hours trying to figure out
     * "WHY DOESN"T MY DANG SCRIPT WORK!  IT JUST EXITS OUT OF NOWHERE!!!"
     * fail the build.
     */
    'handle-callback-err': [ERROR, '^(err|.+Err|error|.+Error)$'],
    // disallow mixing regular variable and require declarations
    /**
     * @differ - The `require()` statements at the top of a module
     * are the first thing anyone sees.  Keep it clean as a testament
     * that you care about your code and that the reader can trust
     * your judgement for the actual hard stuff.
     */
    'no-mixed-requires': [WARNING, {
      grouping: true
    }],
    // disallow use of new operator with the require function
    /**
     * @differ - That means you're not following our recommended
     * `module.exports = function(){}` pattern and we desparately
     * want you to follow that.
     */
    'no-new-require': ERROR,
    // disallow string concatenation with __dirname and __filename
    /**
     * @differ - Just ask @kangas how much fun debugging Windows
     * errors are. Again, trying to point out to you practices
     * which have a high probability of extreme, future pain.
     */
    'no-path-concat': ERROR,
    // disallow process.exit()
    'no-process-exit': IGNORE,
    // restrict usage of specified node modules
    /**
     * @todo (imlucas): way to get a list of bad modules in here from
     * node security project or requiresafe?
     */
    'no-restricted-modules': IGNORE,
    // disallow use of synchronous methods (off by default)
    /**
     * @differ - It's bad practice so at least call it out so you're
     * aware what you're doing is probably a bad idea.
     */
    'no-sync': WARNING
  }
};
