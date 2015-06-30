function isObject (obj) {
  return typeof obj === 'object' && obj !== null;
}

var assert = require('assert');

describe('eslint-config-mongodb-js', function () {
  it('should have a base set of rules', function(){
    var config = require('../');
    assert(isObject(config.rules));
    assert.equal(config.env, undefined);
  });
  it('should a config for node', function(){
    var config = require('../node');
    assert(isObject(config.rules));
    assert(isObject(config.env));
  });
  it('should a config for the browser', function(){
    var config = require('../browser');
    assert(isObject(config.rules));
    assert(isObject(config.env));
  });
  it('should a config for react', function(){
    var config = require('../react');
    assert(isObject(config.rules));
    assert(isObject(config.env));
    assert(isObject(config.ecmaFeatures));
    assert.equal(config.plugins[0], 'react');
  });
  it('should a config for the mongo shell', function(){
    var config = require('../shell');
    assert(config.env.mongodb);
  });
});
