/**
 * Adds a predicate function
 *
 * @api public
 * @param {String} name
 * @param {Function} fn
 */

module.exports = predicate;
predicate.predicate = predicate;
function predicate (name, fn) {
  if (typeof name !== 'string') throw new TypeErrpr("expecting `string` as first argument");
  else if (typeof fn !== 'function') throw new TypeErrpr("expecting `function` as first argument");
  // construct name
  name = [
    'is', name.substr(0, 1).toUpperCase(), name.substr(1)
  ].join('');

  predicate[name] = fn.bind(predicate);
  predicate[name.toLowerCase()] = fn.bind(predicate);
  return predicate[name];
}


/**
 * `String` predicate
 *
 * @api public
 * @param {Mixed} a
 */

var isString = predicate('string',
function isString (a) {
  return typeof a === 'string';
});


/**
 * `Number` predicate
 *
 * @api public
 * @param {Mixed} a
 */

var isNumber = predicate('number',
function isNumber (a) {
  return typeof a === 'number';
});


/**
 * `Boolean` predicate
 *
 * @api public
 * @param {Mixed} a
 */

var isBoolean = predicate('boolean',
function isBoolean (a) {
  return typeof a === 'boolean';
});


/**
 * `Function` predicate
 *
 * @api public
 * @param {Mixed} a
 */

var isFunction = predicate('function',
function isFunction (a) {
  return typeof a === 'function';
});


/**
 * `Object` predicate
 *
 * @api public
 * @param {Mixed} a
 */

var isObject = predicate('object',
function isObject (a) {
  return typeof a === 'object' && a !== null;
});

/**
 * `Array` predicate
 *
 * @api public
 * @param {Mixed} a
 */

var isArray = predicate('array',
function isArray (a) {
  return a instanceof Array;
});


/**
 * `Date` predicate
 *
 * @api public
 * @param {Mixed} a
 */

var isDate = predicate('date',
function isDate (a) {
  return a instanceof Date;
});


/**
 * `NaN` predicate
 *
 * @api public
 * @param {Mixed} a
 */

var isNaN = predicate('NaN',
function isNaN (a) {
  return isNumber(a) && a !== a;
});


/**
 * `undefined` predicate
 *
 * @api public
 * @param {Mixed} a
 */

var isUndefined = predicate('undefined',
function isUndefined (a) {
  return a === undefined;
});


/**
 * `null` predicate
 *
 * @api public
 * @param {Mixed} a
 */

var isNull = predicate('null',
function isNull (a) {
  return a === null;
});


/**
 * Empty value predicate
 *
 * @api public
 * @param {Mixed} a
 */

var isEmpty = predicate('empty',
function isEmpty (a) {
  return ((isString(a) || isArray(a)) && !a.length)
    || (isNumber(a) && !Number(a))
    || (isString(a) && !Number(a))
    || (isNull(a))
    || (isUndefined(a))
    || (isBoolean(a) && a === false);
});