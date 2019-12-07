# babel-plugin-logger
[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url] [![Coverage percentage][coveralls-image]][coveralls-url]
> babel-plugin-logger

## Transform

```js
/* BEFORE */

function multiply(n) {
    try { } catch (e) {
    
    }

    return n * n
}

class A {
    division(a, b) {
        return a / b
    }
}

/* AFTER (insert automatically by babel-plugin-logger) */

function multiply(n) {
    console.log('[/path/file.js:1]', '[fn] multiply() called with', 'n = [ ' + n + ' ]');
    
    try {} catch (e) {
        console.error('[/path/file.js:3]', '[fn] multiply() catch with', 'e = [ ' + e + ' ]');
    }
    
    return n * n;
}

class A {
    division(a, b) {
        console.log('[/path/file.js:10]', '[A] division() called with', 'a = [ ' + a + ' ],', 'b = [ ' + b + ' ]');
        return a / b;
    }
}
```

## Installation

```bash
npm i -D babel-plugin-logger
# or
yarn add -D babel-plugin-logger
```

## Setup

```js
// babel.config.js
module.exports = function (api) {
    return {
        "plugins": [ 'logger' ]
    }
}
```

## License

[MIT © Ryan Yang](./LICENSE)


[npm-image]: https://badge.fury.io/js/babel-plugin-logger.svg
[npm-url]: https://npmjs.org/package/babel-plugin-logger
[travis-image]: https://travis-ci.org/wickedev/babel-plugin-logger.svg?branch=master
[travis-url]: https://travis-ci.org/wickedev/babel-plugin-logger
[daviddm-image]: https://david-dm.org/wickedev/babel-plugin-logger.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/wickedev/babel-plugin-logger
[coveralls-image]: https://coveralls.io/repos/wickedev/babel-plugin-logger/badge.svg
[coveralls-url]: https://coveralls.io/r/wickedev/babel-plugin-logger
