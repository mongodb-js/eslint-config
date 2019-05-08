/**
 * Compass Plugin
 */
module.exports = {
  env: {
    node: true
  },
  extends: ['eslint-config-mongodb-js/react'],
  rules: {
    camelcase: 1,
    'new-cap': 0,
    'no-use-before-define': 0
  }
};
