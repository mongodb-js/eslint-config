# eslint-config-mongodb-js [![travis][travis_img]][travis_url] [![npm][npm_img]][npm_url]

> [eslint shareable configs][shareable-configs] for [mongodb-js][mongodb-js].

## Usage

Shareable configs are designed to work with the `extends` feature
of `.eslintrc` files. This allows us to easily extend from a base
configuration to provide the right rules for all of the extensive
range of environments we build modules for:

- `mongodb-js/compass-plugin`
- `mongodb-js/react`
- `mongodb-js/node`
- `mongodb-js/browser`
- `mongodb-js/shell`


You can learn more about [Shareable Configs][shareable-configs] on the official ESLint website.

## Conventions

Our eslint-config is based on [eslint-config-airbnb][eslint-config-airbnb].
We make a best effort to explicitly call out any rules we differ from
[eslint-config-airbnb][eslint-config-airbnb] will include a JSDoc
comment of `@differ #{dang good reason}`.

## Usage

To use the mongodb-js shareable config, first run:

```bash
npm install --save-dev eslint-config-mongodb-js
```

> *NOTE* You do not need to add multiple `extends: []` in your `.eslintrc`! The inheritance of the `mongodb-js/*` configs inherits bottom up. For example, `mongodb-js/compass-plugin` already includes `mongodb-js/react`.

### `compass-plugin`

If you're building a [MongoDB Compass Plugin](https://docs.mongodb.com/compass/master/plugins/creating-compass-plugins/), your `./.eslintrc` should be:

```json
{"extends": "mongodb-js/compass-plugin"}
```

### `react`

For react modules, your `./.eslintrc` should be:

```json
{"extends": "mongodb-js/react"}
```

### `node`

For vanilla node.js projects, your `./.eslintrc` should be:

```json
{"extends": "mongodb-js/node"}
```

### `node`

If you're working on a UI project that uses browserify, your `./.eslintrc` should be:

```json
{"extends": "mongodb-js/browser"}
```

## Related

- [mongodb-js-precommit][mongodb-js-precommit] The first line of defense to fighting
  bugs is not letting bad code into your project in the first place.
- [eslint-plugin-mongodb][eslint-plugin-mongodb] Syntax guidance and best practices
  reinforcement when using MongoDB node.js driver.

## License

Apache 2.0

[shareable-configs]: http://eslint.org/docs/developer-guide/shareable-configs
[travis_img]: https://img.shields.io/travis/mongodb-js/eslint-config.svg
[travis_url]: https://travis-ci.org/mongodb-js/eslint-config
[npm_img]: https://img.shields.io/npm/v/eslint-config-mongodb-js.svg
[npm_url]: https://npmjs.org/package/eslint-config-mongodb-js
[mongodb-js]: http://mongodb-js.github.io/
[eslint-config-airbnb]: https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb
[eslint-plugin-mongodb]: https://github.com/nfroidure/eslint-plugin-mongodb
[mongodb-js-precommit]: https://github.com/mongodb-js/precommit
