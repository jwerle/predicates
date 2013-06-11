var predicate = require('./')
  , assert = require('assert')

describe('predicates', function () {

  describe('predicate(name, fn)', function () {
    it("should create a new predicate prefixed with `is`", function () {
      predicate('global', function (a) {
        var g;
        if (!this.isObject(a)) return false;
        
        if (typeof global === 'object') g = global;
        else if (typeof window === 'object') g = window;
        
        if (a === g) return true;
        else return false;
      });

      assert(predicate.isFunction(predicate.isGlobal));
      assert(predicate.isFunction(predicate.isglobal));
    });
  });
  
  describe('.isString(a)', function () {
    it("should validate a `string` and invalidate non-strings", function () {
      assert(predicate.isString('abc'));
      assert(!predicate.isString(123));
    });
  });

  describe('.isNumber(a)', function () {
    it("should validate a `number` and invalidate non-numbers", function () {
      assert(predicate.isNumber(123));
      assert(!predicate.isNumber('abc'));
    });
  });

  describe('.isBoolean(a)', function () {
    it("should validate a `boolean` and invalidate non-booleans", function () {
      assert(predicate.isBoolean(true));
      assert(!predicate.isBoolean('false'));
    });
  });

  describe('.isFunction(a)', function () {
    it("should validate a `function` and invalidate non-functions", function () {
      assert(predicate.isFunction(Function()));
      assert(!predicate.isFunction('function() {}'));
    });
  });

  describe('.isObject(a)', function () {
    it("should validate a `object` and invalidate non-objects", function () {
      assert(predicate.isObject({}));
      assert(!predicate.isObject(null));
    });
  });

  describe('.isArray(a)', function () {
    it("should validate a `array` and invalidate non-arrays", function () {
      assert(predicate.isArray([]));
      assert(!predicate.isArray({}));
    });
  });

  describe('.isDate(a)', function () {
    it("should validate a `Date` and invalidate non-date objects", function () {
      assert(predicate.isDate(new Date()));
      assert(!predicate.isDate({}));
    });
  });

  describe('.isNaN(a)', function () {
    it("should validate a `NaN` and invalidate non-NaNs", function () {
      assert(predicate.isNaN(NaN));
      assert(!predicate.isNaN(123));
    });
  });

  describe('.isUndefined(a)', function () {
    it("should validate a `undefined` and invalidate defined values", function () {
      assert(predicate.isUndefined(undefined));
      assert(!predicate.isUndefined(null));
    });
  });

  describe('.isNull(a)', function () {
    it("should validate a `null` and invalidate non-null values", function () {
      assert(predicate.isNull(null));
      assert(!predicate.isNull(NaN));
      assert(!predicate.isNull(undefined));
    });
  });

  describe('.isEmpty(a)', function () {
    it("should validate an empty and invalidate non-empty value", function () {
      assert(predicate.isEmpty(''));
      assert(predicate.isEmpty([]));
      assert(predicate.isEmpty('0'));
      assert(predicate.isEmpty(0));
      assert(predicate.isEmpty(0.0));
      assert(predicate.isEmpty(null));
      assert(predicate.isEmpty(undefined));
      assert(predicate.isEmpty(false));
      
      assert(!predicate.isEmpty({}));
      assert(!predicate.isEmpty(true));
      assert(!predicate.isEmpty(function(){}));2
      
    });
  });
});