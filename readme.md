# phantom-ownpropertynames [![Build Status](https://travis-ci.org/bendrucker/phantom-ownpropertynames.svg?branch=master)](https://travis-ci.org/bendrucker/phantom-ownpropertynames)

> Fix `Object.getOwnPropertyNames` behavior for functions in PhantomJS 1.9


## Install

```
$ npm install --save phantom-ownpropertynames
```

## Usage

Detect whether `Object.getOwnPropertyNames` is broken and shim if it is:

```js
require('phantom-ownpropertynames/implement')
```

Or just get the patched function directly:

```js
var getOwnPropertyNames = require('phantom-ownpropertynames')
getOwnPropertyNames({foo: 'bar'})
// => ['foo']
```

## API

#### `getOwnPropertyNames(obj)` -> `array`

##### obj

*Required*  
Type: `object`

## License

MIT © [Ben Drucker](http://bendrucker.me)
