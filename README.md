# babel-plugin-logger
[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url] [![Coverage percentage][coveralls-image]][coveralls-url]
> babel-plugin-logger

## Using

## Installation

```bash
npm i -D babel-plugin-logger
# or
yarn add -D babel-plugin-logger
```

## Setup

```js
// babel.config.js

const {
    defaultFileFormat,
    defaultCallFormat,
    defaultArgsFormat
} = require('babel-plugin-logger/format')

module.exports = function (api) {
    return {
        "plugins": [
            ['logger', {
                printFile: {
                    path: true,
                    line: true,
                },
                group: false,
                loggerTemplate: 'console.log',
                customTemplate: (file, func) =>
                    defaultFileFormat(file) +
                    defaultCallFormat(func) +
                    defaultArgsFormat(func.args),
            }]]
    }
}
```

## License

MIT © Ryan Yang


[npm-image]: https://badge.fury.io/js/babel-plugin-logger.svg
[npm-url]: https://npmjs.org/package/babel-plugin-logger
[travis-image]: https://travis-ci.org/wickedev/babel-plugin-logger.svg?branch=master
[travis-url]: https://travis-ci.org/wickedev/babel-plugin-logger
[daviddm-image]: https://david-dm.org/wickedev/babel-plugin-logger.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/wickedev/babel-plugin-logger
[coveralls-image]: https://coveralls.io/repos/wickedev/babel-plugin-logger/badge.svg
[coveralls-url]: https://coveralls.io/r/wickedev/babel-plugin-logger
