predicates
===

Common predicates for Node.js and the browser

[![Build Status](https://travis-ci.org/jwerle/predicates.png)](https://travis-ci.org/jwerle/predicates)

[![browser support](https://ci.testling.com/jwerle/predicates.png)](https://ci.testling.com/jwerle/predicates)

## install

***npm***

```sh
$ npm install predicates --save
```

***component***

```sh
$ component install jwerle/predicates --save
```

***bower***

```sh
$ bower install predicates
```

## usage

```js
var isString = require('predicates').isString
  , isBoolean = require('predicates').isBoolean
  , isNull = require('predicates').isNull

assert(isString('123'));
assert(isBoolean(true));
assert(isNull(null));
```

## api

All predicates return a `boolean`

### predicate(name fn)

Creates a new predicate

* `name` - The name of the predicate
* `fn` - The predicate function

***example***

```js
var isNode = predicate('node', function (a) {
  return a instanceof Node;
});

assert(isNode(document.getElementById('#node')));
```

### Common predicates

* `isString(a)` - asserts input is a string
* `isNumber(a)` - asserts input is a number
* `isBoolean(a)` - asserts input is a boolean
* `isFunction(a)`- asserts input is a function
* `isObject(a)` - asserts input is an object
* `isArray(a)` - asserts input is an array
* `isDate(a)` - asserts input is a date instance
* `isNaN(a)` - asserts input is NaN
* `isUndefined(a)` - asserts input is undefined
* `isNull(a)` - asserts input is null
* `isEmpty(a)` - asserts input is empty (empty array, empty string, or falsy)

## license

MIT