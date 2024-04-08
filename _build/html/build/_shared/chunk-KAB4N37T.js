import {
  __esm
} from "/build/_shared/chunk-D5NAPBYJ.js";

// ../../node_modules/@lumino/algorithm/dist/index.es6.js
function iter(object) {
  var it;
  if (typeof object.iter === "function") {
    it = object.iter();
  } else {
    it = new ArrayIterator(object);
  }
  return it;
}
function each(object, fn) {
  var index = 0;
  var it = iter(object);
  var value;
  while ((value = it.next()) !== void 0) {
    if (fn(value, index++) === false) {
      return;
    }
  }
}
function every(object, fn) {
  var index = 0;
  var it = iter(object);
  var value;
  while ((value = it.next()) !== void 0) {
    if (!fn(value, index++)) {
      return false;
    }
  }
  return true;
}
function some(object, fn) {
  var index = 0;
  var it = iter(object);
  var value;
  while ((value = it.next()) !== void 0) {
    if (fn(value, index++)) {
      return true;
    }
  }
  return false;
}
function toArray(object) {
  var index = 0;
  var result = [];
  var it = iter(object);
  var value;
  while ((value = it.next()) !== void 0) {
    result[index++] = value;
  }
  return result;
}
function chain() {
  var objects = [];
  for (var _i = 0; _i < arguments.length; _i++) {
    objects[_i] = arguments[_i];
  }
  return new ChainIterator(iter(objects.map(iter)));
}
function empty() {
  return new EmptyIterator();
}
function filter(object, fn) {
  return new FilterIterator(iter(object), fn);
}
function find(object, fn) {
  var index = 0;
  var it = iter(object);
  var value;
  while ((value = it.next()) !== void 0) {
    if (fn(value, index++)) {
      return value;
    }
  }
  return void 0;
}
function max(object, fn) {
  var it = iter(object);
  var value = it.next();
  if (value === void 0) {
    return void 0;
  }
  var result = value;
  while ((value = it.next()) !== void 0) {
    if (fn(value, result) > 0) {
      result = value;
    }
  }
  return result;
}
function map(object, fn) {
  return new MapIterator(iter(object), fn);
}
function reduce(object, fn, initial) {
  var index = 0;
  var it = iter(object);
  var first = it.next();
  if (first === void 0 && initial === void 0) {
    throw new TypeError("Reduce of empty iterable with no initial value.");
  }
  if (first === void 0) {
    return initial;
  }
  var second = it.next();
  if (second === void 0 && initial === void 0) {
    return first;
  }
  if (second === void 0) {
    return fn(initial, first, index++);
  }
  var accumulator;
  if (initial === void 0) {
    accumulator = fn(first, second, index++);
  } else {
    accumulator = fn(fn(initial, first, index++), second, index++);
  }
  var next;
  while ((next = it.next()) !== void 0) {
    accumulator = fn(accumulator, next, index++);
  }
  return accumulator;
}
function once(value) {
  return new RepeatIterator(value, 1);
}
function retro(object) {
  var it;
  if (typeof object.retro === "function") {
    it = object.retro();
  } else {
    it = new RetroArrayIterator(object);
  }
  return it;
}
var ArrayExt, ArrayIterator, KeyIterator, ValueIterator, ItemIterator, FnIterator, ChainIterator, EmptyIterator, EnumerateIterator, FilterIterator, MapIterator, RangeIterator, Private, RepeatIterator, RetroArrayIterator, StrideIterator, StringExt, TakeIterator, ZipIterator;
var init_index_es6 = __esm({
  "../../node_modules/@lumino/algorithm/dist/index.es6.js"() {
    (function(ArrayExt2) {
      function firstIndexOf(array, value, start, stop) {
        if (start === void 0) {
          start = 0;
        }
        if (stop === void 0) {
          stop = -1;
        }
        var n = array.length;
        if (n === 0) {
          return -1;
        }
        if (start < 0) {
          start = Math.max(0, start + n);
        } else {
          start = Math.min(start, n - 1);
        }
        if (stop < 0) {
          stop = Math.max(0, stop + n);
        } else {
          stop = Math.min(stop, n - 1);
        }
        var span;
        if (stop < start) {
          span = stop + 1 + (n - start);
        } else {
          span = stop - start + 1;
        }
        for (var i = 0; i < span; ++i) {
          var j = (start + i) % n;
          if (array[j] === value) {
            return j;
          }
        }
        return -1;
      }
      ArrayExt2.firstIndexOf = firstIndexOf;
      function lastIndexOf(array, value, start, stop) {
        if (start === void 0) {
          start = -1;
        }
        if (stop === void 0) {
          stop = 0;
        }
        var n = array.length;
        if (n === 0) {
          return -1;
        }
        if (start < 0) {
          start = Math.max(0, start + n);
        } else {
          start = Math.min(start, n - 1);
        }
        if (stop < 0) {
          stop = Math.max(0, stop + n);
        } else {
          stop = Math.min(stop, n - 1);
        }
        var span;
        if (start < stop) {
          span = start + 1 + (n - stop);
        } else {
          span = start - stop + 1;
        }
        for (var i = 0; i < span; ++i) {
          var j = (start - i + n) % n;
          if (array[j] === value) {
            return j;
          }
        }
        return -1;
      }
      ArrayExt2.lastIndexOf = lastIndexOf;
      function findFirstIndex(array, fn, start, stop) {
        if (start === void 0) {
          start = 0;
        }
        if (stop === void 0) {
          stop = -1;
        }
        var n = array.length;
        if (n === 0) {
          return -1;
        }
        if (start < 0) {
          start = Math.max(0, start + n);
        } else {
          start = Math.min(start, n - 1);
        }
        if (stop < 0) {
          stop = Math.max(0, stop + n);
        } else {
          stop = Math.min(stop, n - 1);
        }
        var span;
        if (stop < start) {
          span = stop + 1 + (n - start);
        } else {
          span = stop - start + 1;
        }
        for (var i = 0; i < span; ++i) {
          var j = (start + i) % n;
          if (fn(array[j], j)) {
            return j;
          }
        }
        return -1;
      }
      ArrayExt2.findFirstIndex = findFirstIndex;
      function findLastIndex(array, fn, start, stop) {
        if (start === void 0) {
          start = -1;
        }
        if (stop === void 0) {
          stop = 0;
        }
        var n = array.length;
        if (n === 0) {
          return -1;
        }
        if (start < 0) {
          start = Math.max(0, start + n);
        } else {
          start = Math.min(start, n - 1);
        }
        if (stop < 0) {
          stop = Math.max(0, stop + n);
        } else {
          stop = Math.min(stop, n - 1);
        }
        var d;
        if (start < stop) {
          d = start + 1 + (n - stop);
        } else {
          d = start - stop + 1;
        }
        for (var i = 0; i < d; ++i) {
          var j = (start - i + n) % n;
          if (fn(array[j], j)) {
            return j;
          }
        }
        return -1;
      }
      ArrayExt2.findLastIndex = findLastIndex;
      function findFirstValue(array, fn, start, stop) {
        if (start === void 0) {
          start = 0;
        }
        if (stop === void 0) {
          stop = -1;
        }
        var index = findFirstIndex(array, fn, start, stop);
        return index !== -1 ? array[index] : void 0;
      }
      ArrayExt2.findFirstValue = findFirstValue;
      function findLastValue(array, fn, start, stop) {
        if (start === void 0) {
          start = -1;
        }
        if (stop === void 0) {
          stop = 0;
        }
        var index = findLastIndex(array, fn, start, stop);
        return index !== -1 ? array[index] : void 0;
      }
      ArrayExt2.findLastValue = findLastValue;
      function lowerBound(array, value, fn, start, stop) {
        if (start === void 0) {
          start = 0;
        }
        if (stop === void 0) {
          stop = -1;
        }
        var n = array.length;
        if (n === 0) {
          return 0;
        }
        if (start < 0) {
          start = Math.max(0, start + n);
        } else {
          start = Math.min(start, n - 1);
        }
        if (stop < 0) {
          stop = Math.max(0, stop + n);
        } else {
          stop = Math.min(stop, n - 1);
        }
        var begin = start;
        var span = stop - start + 1;
        while (span > 0) {
          var half = span >> 1;
          var middle = begin + half;
          if (fn(array[middle], value) < 0) {
            begin = middle + 1;
            span -= half + 1;
          } else {
            span = half;
          }
        }
        return begin;
      }
      ArrayExt2.lowerBound = lowerBound;
      function upperBound(array, value, fn, start, stop) {
        if (start === void 0) {
          start = 0;
        }
        if (stop === void 0) {
          stop = -1;
        }
        var n = array.length;
        if (n === 0) {
          return 0;
        }
        if (start < 0) {
          start = Math.max(0, start + n);
        } else {
          start = Math.min(start, n - 1);
        }
        if (stop < 0) {
          stop = Math.max(0, stop + n);
        } else {
          stop = Math.min(stop, n - 1);
        }
        var begin = start;
        var span = stop - start + 1;
        while (span > 0) {
          var half = span >> 1;
          var middle = begin + half;
          if (fn(array[middle], value) > 0) {
            span = half;
          } else {
            begin = middle + 1;
            span -= half + 1;
          }
        }
        return begin;
      }
      ArrayExt2.upperBound = upperBound;
      function shallowEqual(a, b, fn) {
        if (a === b) {
          return true;
        }
        if (a.length !== b.length) {
          return false;
        }
        for (var i = 0, n = a.length; i < n; ++i) {
          if (fn ? !fn(a[i], b[i]) : a[i] !== b[i]) {
            return false;
          }
        }
        return true;
      }
      ArrayExt2.shallowEqual = shallowEqual;
      function slice(array, options) {
        if (options === void 0) {
          options = {};
        }
        var start = options.start, stop = options.stop, step = options.step;
        if (step === void 0) {
          step = 1;
        }
        if (step === 0) {
          throw new Error("Slice `step` cannot be zero.");
        }
        var n = array.length;
        if (start === void 0) {
          start = step < 0 ? n - 1 : 0;
        } else if (start < 0) {
          start = Math.max(start + n, step < 0 ? -1 : 0);
        } else if (start >= n) {
          start = step < 0 ? n - 1 : n;
        }
        if (stop === void 0) {
          stop = step < 0 ? -1 : n;
        } else if (stop < 0) {
          stop = Math.max(stop + n, step < 0 ? -1 : 0);
        } else if (stop >= n) {
          stop = step < 0 ? n - 1 : n;
        }
        var length;
        if (step < 0 && stop >= start || step > 0 && start >= stop) {
          length = 0;
        } else if (step < 0) {
          length = Math.floor((stop - start + 1) / step + 1);
        } else {
          length = Math.floor((stop - start - 1) / step + 1);
        }
        var result = [];
        for (var i = 0; i < length; ++i) {
          result[i] = array[start + i * step];
        }
        return result;
      }
      ArrayExt2.slice = slice;
      function move(array, fromIndex, toIndex) {
        var n = array.length;
        if (n <= 1) {
          return;
        }
        if (fromIndex < 0) {
          fromIndex = Math.max(0, fromIndex + n);
        } else {
          fromIndex = Math.min(fromIndex, n - 1);
        }
        if (toIndex < 0) {
          toIndex = Math.max(0, toIndex + n);
        } else {
          toIndex = Math.min(toIndex, n - 1);
        }
        if (fromIndex === toIndex) {
          return;
        }
        var value = array[fromIndex];
        var d = fromIndex < toIndex ? 1 : -1;
        for (var i = fromIndex; i !== toIndex; i += d) {
          array[i] = array[i + d];
        }
        array[toIndex] = value;
      }
      ArrayExt2.move = move;
      function reverse(array, start, stop) {
        if (start === void 0) {
          start = 0;
        }
        if (stop === void 0) {
          stop = -1;
        }
        var n = array.length;
        if (n <= 1) {
          return;
        }
        if (start < 0) {
          start = Math.max(0, start + n);
        } else {
          start = Math.min(start, n - 1);
        }
        if (stop < 0) {
          stop = Math.max(0, stop + n);
        } else {
          stop = Math.min(stop, n - 1);
        }
        while (start < stop) {
          var a = array[start];
          var b = array[stop];
          array[start++] = b;
          array[stop--] = a;
        }
      }
      ArrayExt2.reverse = reverse;
      function rotate(array, delta, start, stop) {
        if (start === void 0) {
          start = 0;
        }
        if (stop === void 0) {
          stop = -1;
        }
        var n = array.length;
        if (n <= 1) {
          return;
        }
        if (start < 0) {
          start = Math.max(0, start + n);
        } else {
          start = Math.min(start, n - 1);
        }
        if (stop < 0) {
          stop = Math.max(0, stop + n);
        } else {
          stop = Math.min(stop, n - 1);
        }
        if (start >= stop) {
          return;
        }
        var length = stop - start + 1;
        if (delta > 0) {
          delta = delta % length;
        } else if (delta < 0) {
          delta = (delta % length + length) % length;
        }
        if (delta === 0) {
          return;
        }
        var pivot = start + delta;
        reverse(array, start, pivot - 1);
        reverse(array, pivot, stop);
        reverse(array, start, stop);
      }
      ArrayExt2.rotate = rotate;
      function fill(array, value, start, stop) {
        if (start === void 0) {
          start = 0;
        }
        if (stop === void 0) {
          stop = -1;
        }
        var n = array.length;
        if (n === 0) {
          return;
        }
        if (start < 0) {
          start = Math.max(0, start + n);
        } else {
          start = Math.min(start, n - 1);
        }
        if (stop < 0) {
          stop = Math.max(0, stop + n);
        } else {
          stop = Math.min(stop, n - 1);
        }
        var span;
        if (stop < start) {
          span = stop + 1 + (n - start);
        } else {
          span = stop - start + 1;
        }
        for (var i = 0; i < span; ++i) {
          array[(start + i) % n] = value;
        }
      }
      ArrayExt2.fill = fill;
      function insert(array, index, value) {
        var n = array.length;
        if (index < 0) {
          index = Math.max(0, index + n);
        } else {
          index = Math.min(index, n);
        }
        for (var i = n; i > index; --i) {
          array[i] = array[i - 1];
        }
        array[index] = value;
      }
      ArrayExt2.insert = insert;
      function removeAt(array, index) {
        var n = array.length;
        if (index < 0) {
          index += n;
        }
        if (index < 0 || index >= n) {
          return void 0;
        }
        var value = array[index];
        for (var i = index + 1; i < n; ++i) {
          array[i - 1] = array[i];
        }
        array.length = n - 1;
        return value;
      }
      ArrayExt2.removeAt = removeAt;
      function removeFirstOf(array, value, start, stop) {
        if (start === void 0) {
          start = 0;
        }
        if (stop === void 0) {
          stop = -1;
        }
        var index = firstIndexOf(array, value, start, stop);
        if (index !== -1) {
          removeAt(array, index);
        }
        return index;
      }
      ArrayExt2.removeFirstOf = removeFirstOf;
      function removeLastOf(array, value, start, stop) {
        if (start === void 0) {
          start = -1;
        }
        if (stop === void 0) {
          stop = 0;
        }
        var index = lastIndexOf(array, value, start, stop);
        if (index !== -1) {
          removeAt(array, index);
        }
        return index;
      }
      ArrayExt2.removeLastOf = removeLastOf;
      function removeAllOf(array, value, start, stop) {
        if (start === void 0) {
          start = 0;
        }
        if (stop === void 0) {
          stop = -1;
        }
        var n = array.length;
        if (n === 0) {
          return 0;
        }
        if (start < 0) {
          start = Math.max(0, start + n);
        } else {
          start = Math.min(start, n - 1);
        }
        if (stop < 0) {
          stop = Math.max(0, stop + n);
        } else {
          stop = Math.min(stop, n - 1);
        }
        var count = 0;
        for (var i = 0; i < n; ++i) {
          if (start <= stop && i >= start && i <= stop && array[i] === value) {
            count++;
          } else if (stop < start && (i <= stop || i >= start) && array[i] === value) {
            count++;
          } else if (count > 0) {
            array[i - count] = array[i];
          }
        }
        if (count > 0) {
          array.length = n - count;
        }
        return count;
      }
      ArrayExt2.removeAllOf = removeAllOf;
      function removeFirstWhere(array, fn, start, stop) {
        if (start === void 0) {
          start = 0;
        }
        if (stop === void 0) {
          stop = -1;
        }
        var value;
        var index = findFirstIndex(array, fn, start, stop);
        if (index !== -1) {
          value = removeAt(array, index);
        }
        return { index, value };
      }
      ArrayExt2.removeFirstWhere = removeFirstWhere;
      function removeLastWhere(array, fn, start, stop) {
        if (start === void 0) {
          start = -1;
        }
        if (stop === void 0) {
          stop = 0;
        }
        var value;
        var index = findLastIndex(array, fn, start, stop);
        if (index !== -1) {
          value = removeAt(array, index);
        }
        return { index, value };
      }
      ArrayExt2.removeLastWhere = removeLastWhere;
      function removeAllWhere(array, fn, start, stop) {
        if (start === void 0) {
          start = 0;
        }
        if (stop === void 0) {
          stop = -1;
        }
        var n = array.length;
        if (n === 0) {
          return 0;
        }
        if (start < 0) {
          start = Math.max(0, start + n);
        } else {
          start = Math.min(start, n - 1);
        }
        if (stop < 0) {
          stop = Math.max(0, stop + n);
        } else {
          stop = Math.min(stop, n - 1);
        }
        var count = 0;
        for (var i = 0; i < n; ++i) {
          if (start <= stop && i >= start && i <= stop && fn(array[i], i)) {
            count++;
          } else if (stop < start && (i <= stop || i >= start) && fn(array[i], i)) {
            count++;
          } else if (count > 0) {
            array[i - count] = array[i];
          }
        }
        if (count > 0) {
          array.length = n - count;
        }
        return count;
      }
      ArrayExt2.removeAllWhere = removeAllWhere;
    })(ArrayExt || (ArrayExt = {}));
    ArrayIterator = /** @class */
    function() {
      function ArrayIterator2(source) {
        this._index = 0;
        this._source = source;
      }
      ArrayIterator2.prototype.iter = function() {
        return this;
      };
      ArrayIterator2.prototype.clone = function() {
        var result = new ArrayIterator2(this._source);
        result._index = this._index;
        return result;
      };
      ArrayIterator2.prototype.next = function() {
        if (this._index >= this._source.length) {
          return void 0;
        }
        return this._source[this._index++];
      };
      return ArrayIterator2;
    }();
    KeyIterator = /** @class */
    function() {
      function KeyIterator2(source, keys) {
        if (keys === void 0) {
          keys = Object.keys(source);
        }
        this._index = 0;
        this._source = source;
        this._keys = keys;
      }
      KeyIterator2.prototype.iter = function() {
        return this;
      };
      KeyIterator2.prototype.clone = function() {
        var result = new KeyIterator2(this._source, this._keys);
        result._index = this._index;
        return result;
      };
      KeyIterator2.prototype.next = function() {
        if (this._index >= this._keys.length) {
          return void 0;
        }
        var key = this._keys[this._index++];
        if (key in this._source) {
          return key;
        }
        return this.next();
      };
      return KeyIterator2;
    }();
    ValueIterator = /** @class */
    function() {
      function ValueIterator2(source, keys) {
        if (keys === void 0) {
          keys = Object.keys(source);
        }
        this._index = 0;
        this._source = source;
        this._keys = keys;
      }
      ValueIterator2.prototype.iter = function() {
        return this;
      };
      ValueIterator2.prototype.clone = function() {
        var result = new ValueIterator2(this._source, this._keys);
        result._index = this._index;
        return result;
      };
      ValueIterator2.prototype.next = function() {
        if (this._index >= this._keys.length) {
          return void 0;
        }
        var key = this._keys[this._index++];
        if (key in this._source) {
          return this._source[key];
        }
        return this.next();
      };
      return ValueIterator2;
    }();
    ItemIterator = /** @class */
    function() {
      function ItemIterator2(source, keys) {
        if (keys === void 0) {
          keys = Object.keys(source);
        }
        this._index = 0;
        this._source = source;
        this._keys = keys;
      }
      ItemIterator2.prototype.iter = function() {
        return this;
      };
      ItemIterator2.prototype.clone = function() {
        var result = new ItemIterator2(this._source, this._keys);
        result._index = this._index;
        return result;
      };
      ItemIterator2.prototype.next = function() {
        if (this._index >= this._keys.length) {
          return void 0;
        }
        var key = this._keys[this._index++];
        if (key in this._source) {
          return [key, this._source[key]];
        }
        return this.next();
      };
      return ItemIterator2;
    }();
    FnIterator = /** @class */
    function() {
      function FnIterator2(fn) {
        this._fn = fn;
      }
      FnIterator2.prototype.iter = function() {
        return this;
      };
      FnIterator2.prototype.clone = function() {
        throw new Error("An `FnIterator` cannot be cloned.");
      };
      FnIterator2.prototype.next = function() {
        return this._fn.call(void 0);
      };
      return FnIterator2;
    }();
    ChainIterator = /** @class */
    function() {
      function ChainIterator2(source) {
        this._cloned = false;
        this._source = source;
        this._active = void 0;
      }
      ChainIterator2.prototype.iter = function() {
        return this;
      };
      ChainIterator2.prototype.clone = function() {
        var result = new ChainIterator2(this._source.clone());
        result._active = this._active && this._active.clone();
        result._cloned = true;
        this._cloned = true;
        return result;
      };
      ChainIterator2.prototype.next = function() {
        if (this._active === void 0) {
          var active = this._source.next();
          if (active === void 0) {
            return void 0;
          }
          this._active = this._cloned ? active.clone() : active;
        }
        var value = this._active.next();
        if (value !== void 0) {
          return value;
        }
        this._active = void 0;
        return this.next();
      };
      return ChainIterator2;
    }();
    EmptyIterator = /** @class */
    function() {
      function EmptyIterator2() {
      }
      EmptyIterator2.prototype.iter = function() {
        return this;
      };
      EmptyIterator2.prototype.clone = function() {
        return new EmptyIterator2();
      };
      EmptyIterator2.prototype.next = function() {
        return void 0;
      };
      return EmptyIterator2;
    }();
    EnumerateIterator = /** @class */
    function() {
      function EnumerateIterator2(source, start) {
        this._source = source;
        this._index = start;
      }
      EnumerateIterator2.prototype.iter = function() {
        return this;
      };
      EnumerateIterator2.prototype.clone = function() {
        return new EnumerateIterator2(this._source.clone(), this._index);
      };
      EnumerateIterator2.prototype.next = function() {
        var value = this._source.next();
        if (value === void 0) {
          return void 0;
        }
        return [this._index++, value];
      };
      return EnumerateIterator2;
    }();
    FilterIterator = /** @class */
    function() {
      function FilterIterator2(source, fn) {
        this._index = 0;
        this._source = source;
        this._fn = fn;
      }
      FilterIterator2.prototype.iter = function() {
        return this;
      };
      FilterIterator2.prototype.clone = function() {
        var result = new FilterIterator2(this._source.clone(), this._fn);
        result._index = this._index;
        return result;
      };
      FilterIterator2.prototype.next = function() {
        var fn = this._fn;
        var it = this._source;
        var value;
        while ((value = it.next()) !== void 0) {
          if (fn(value, this._index++)) {
            return value;
          }
        }
        return void 0;
      };
      return FilterIterator2;
    }();
    MapIterator = /** @class */
    function() {
      function MapIterator2(source, fn) {
        this._index = 0;
        this._source = source;
        this._fn = fn;
      }
      MapIterator2.prototype.iter = function() {
        return this;
      };
      MapIterator2.prototype.clone = function() {
        var result = new MapIterator2(this._source.clone(), this._fn);
        result._index = this._index;
        return result;
      };
      MapIterator2.prototype.next = function() {
        var value = this._source.next();
        if (value === void 0) {
          return void 0;
        }
        return this._fn.call(void 0, value, this._index++);
      };
      return MapIterator2;
    }();
    RangeIterator = /** @class */
    function() {
      function RangeIterator2(start, stop, step) {
        this._index = 0;
        this._start = start;
        this._stop = stop;
        this._step = step;
        this._length = Private.rangeLength(start, stop, step);
      }
      RangeIterator2.prototype.iter = function() {
        return this;
      };
      RangeIterator2.prototype.clone = function() {
        var result = new RangeIterator2(this._start, this._stop, this._step);
        result._index = this._index;
        return result;
      };
      RangeIterator2.prototype.next = function() {
        if (this._index >= this._length) {
          return void 0;
        }
        return this._start + this._step * this._index++;
      };
      return RangeIterator2;
    }();
    (function(Private4) {
      function rangeLength(start, stop, step) {
        if (step === 0) {
          return Infinity;
        }
        if (start > stop && step > 0) {
          return 0;
        }
        if (start < stop && step < 0) {
          return 0;
        }
        return Math.ceil((stop - start) / step);
      }
      Private4.rangeLength = rangeLength;
    })(Private || (Private = {}));
    RepeatIterator = /** @class */
    function() {
      function RepeatIterator2(value, count) {
        this._value = value;
        this._count = count;
      }
      RepeatIterator2.prototype.iter = function() {
        return this;
      };
      RepeatIterator2.prototype.clone = function() {
        return new RepeatIterator2(this._value, this._count);
      };
      RepeatIterator2.prototype.next = function() {
        if (this._count <= 0) {
          return void 0;
        }
        this._count--;
        return this._value;
      };
      return RepeatIterator2;
    }();
    RetroArrayIterator = /** @class */
    function() {
      function RetroArrayIterator2(source) {
        this._source = source;
        this._index = source.length - 1;
      }
      RetroArrayIterator2.prototype.iter = function() {
        return this;
      };
      RetroArrayIterator2.prototype.clone = function() {
        var result = new RetroArrayIterator2(this._source);
        result._index = this._index;
        return result;
      };
      RetroArrayIterator2.prototype.next = function() {
        if (this._index < 0 || this._index >= this._source.length) {
          return void 0;
        }
        return this._source[this._index--];
      };
      return RetroArrayIterator2;
    }();
    StrideIterator = /** @class */
    function() {
      function StrideIterator2(source, step) {
        this._source = source;
        this._step = step;
      }
      StrideIterator2.prototype.iter = function() {
        return this;
      };
      StrideIterator2.prototype.clone = function() {
        return new StrideIterator2(this._source.clone(), this._step);
      };
      StrideIterator2.prototype.next = function() {
        var value = this._source.next();
        for (var n = this._step - 1; n > 0; --n) {
          this._source.next();
        }
        return value;
      };
      return StrideIterator2;
    }();
    (function(StringExt2) {
      function findIndices(source, query, start) {
        if (start === void 0) {
          start = 0;
        }
        var indices = new Array(query.length);
        for (var i = 0, j = start, n = query.length; i < n; ++i, ++j) {
          j = source.indexOf(query[i], j);
          if (j === -1) {
            return null;
          }
          indices[i] = j;
        }
        return indices;
      }
      StringExt2.findIndices = findIndices;
      function matchSumOfSquares(source, query, start) {
        if (start === void 0) {
          start = 0;
        }
        var indices = findIndices(source, query, start);
        if (!indices) {
          return null;
        }
        var score = 0;
        for (var i = 0, n = indices.length; i < n; ++i) {
          var j = indices[i] - start;
          score += j * j;
        }
        return { score, indices };
      }
      StringExt2.matchSumOfSquares = matchSumOfSquares;
      function matchSumOfDeltas(source, query, start) {
        if (start === void 0) {
          start = 0;
        }
        var indices = findIndices(source, query, start);
        if (!indices) {
          return null;
        }
        var score = 0;
        var last = start - 1;
        for (var i = 0, n = indices.length; i < n; ++i) {
          var j = indices[i];
          score += j - last - 1;
          last = j;
        }
        return { score, indices };
      }
      StringExt2.matchSumOfDeltas = matchSumOfDeltas;
      function highlight(source, indices, fn) {
        var result = [];
        var k = 0;
        var last = 0;
        var n = indices.length;
        while (k < n) {
          var i = indices[k];
          var j = indices[k];
          while (++k < n && indices[k] === j + 1) {
            j++;
          }
          if (last < i) {
            result.push(source.slice(last, i));
          }
          if (i < j + 1) {
            result.push(fn(source.slice(i, j + 1)));
          }
          last = j + 1;
        }
        if (last < source.length) {
          result.push(source.slice(last));
        }
        return result;
      }
      StringExt2.highlight = highlight;
      function cmp(a, b) {
        return a < b ? -1 : a > b ? 1 : 0;
      }
      StringExt2.cmp = cmp;
    })(StringExt || (StringExt = {}));
    TakeIterator = /** @class */
    function() {
      function TakeIterator2(source, count) {
        this._source = source;
        this._count = count;
      }
      TakeIterator2.prototype.iter = function() {
        return this;
      };
      TakeIterator2.prototype.clone = function() {
        return new TakeIterator2(this._source.clone(), this._count);
      };
      TakeIterator2.prototype.next = function() {
        if (this._count <= 0) {
          return void 0;
        }
        var value = this._source.next();
        if (value === void 0) {
          return void 0;
        }
        this._count--;
        return value;
      };
      return TakeIterator2;
    }();
    ZipIterator = /** @class */
    function() {
      function ZipIterator2(source) {
        this._source = source;
      }
      ZipIterator2.prototype.iter = function() {
        return this;
      };
      ZipIterator2.prototype.clone = function() {
        return new ZipIterator2(this._source.map(function(it) {
          return it.clone();
        }));
      };
      ZipIterator2.prototype.next = function() {
        var result = new Array(this._source.length);
        for (var i = 0, n = this._source.length; i < n; ++i) {
          var value = this._source[i].next();
          if (value === void 0) {
            return void 0;
          }
          result[i] = value;
        }
        return result;
      };
      return ZipIterator2;
    }();
  }
});

// ../../node_modules/@lumino/collections/dist/index.es6.js
var BPlusTree, Private$1, LinkedList, Private2;
var init_index_es62 = __esm({
  "../../node_modules/@lumino/collections/dist/index.es6.js"() {
    init_index_es6();
    BPlusTree = /** @class */
    function() {
      function BPlusTree2(cmp) {
        this._root = new Private$1.LeafNode();
        this.cmp = cmp;
      }
      Object.defineProperty(BPlusTree2.prototype, "isEmpty", {
        /**
         * Whether the tree is empty.
         *
         * #### Complexity
         * `O(1)`
         */
        get: function() {
          return this._root.size === 0;
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(BPlusTree2.prototype, "size", {
        /**
         * The size of the tree.
         *
         * #### Complexity
         * `O(1)`
         */
        get: function() {
          return this._root.size;
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(BPlusTree2.prototype, "first", {
        /**
         * The first item in the tree.
         *
         * This is `undefined` if the tree is empty.
         *
         * #### Complexity
         * `O(log32 n)`
         */
        get: function() {
          var node = Private$1.firstLeaf(this._root);
          return node.size > 0 ? node.items[0] : void 0;
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(BPlusTree2.prototype, "last", {
        /**
         * The last item in the tree.
         *
         * This is `undefined` if the tree is empty.
         *
         * #### Complexity
         * `O(log32 n)`
         */
        get: function() {
          var node = Private$1.lastLeaf(this._root);
          return node.size > 0 ? node.items[node.size - 1] : void 0;
        },
        enumerable: true,
        configurable: true
      });
      BPlusTree2.prototype.iter = function() {
        return Private$1.iterItems(this._root);
      };
      BPlusTree2.prototype.retro = function() {
        return Private$1.retroItems(this._root);
      };
      BPlusTree2.prototype.slice = function(start, stop) {
        return Private$1.sliceItems(this._root, start, stop);
      };
      BPlusTree2.prototype.retroSlice = function(start, stop) {
        return Private$1.retroSliceItems(this._root, start, stop);
      };
      BPlusTree2.prototype.at = function(index) {
        return Private$1.itemAt(this._root, index);
      };
      BPlusTree2.prototype.has = function(key, cmp) {
        return Private$1.hasItem(this._root, key, cmp);
      };
      BPlusTree2.prototype.indexOf = function(key, cmp) {
        return Private$1.indexOf(this._root, key, cmp);
      };
      BPlusTree2.prototype.get = function(key, cmp) {
        return Private$1.getItem(this._root, key, cmp);
      };
      BPlusTree2.prototype.assign = function(items) {
        this.clear();
        this.update(items);
      };
      BPlusTree2.prototype.insert = function(item) {
        var existing = Private$1.insertItem(this._root, item, this.cmp);
        this._root = Private$1.maybeSplitRoot(this._root);
        return existing;
      };
      BPlusTree2.prototype.update = function(items) {
        var _this = this;
        each(items, function(item) {
          _this.insert(item);
        });
      };
      BPlusTree2.prototype.delete = function(key, cmp) {
        var item = Private$1.deleteItem(this._root, key, cmp);
        this._root = Private$1.maybeExtractRoot(this._root);
        return item;
      };
      BPlusTree2.prototype.remove = function(index) {
        var item = Private$1.removeItem(this._root, index);
        this._root = Private$1.maybeExtractRoot(this._root);
        return item;
      };
      BPlusTree2.prototype.clear = function() {
        Private$1.clear(this._root);
        this._root = new Private$1.LeafNode();
      };
      return BPlusTree2;
    }();
    (function(BPlusTree2) {
      function from(items, cmp) {
        var tree = new BPlusTree2(cmp);
        tree.assign(items);
        return tree;
      }
      BPlusTree2.from = from;
    })(BPlusTree || (BPlusTree = {}));
    (function(Private4) {
      var BranchNode = (
        /** @class */
        function() {
          function BranchNode2() {
            this.items = [];
            this.sizes = [];
            this.children = [];
          }
          Object.defineProperty(BranchNode2.prototype, "type", {
            /**
             * The discriminated type of the node.
             */
            get: function() {
              return 0;
            },
            enumerable: true,
            configurable: true
          });
          Object.defineProperty(BranchNode2.prototype, "size", {
            /**
             * The total number of items in the subtree.
             */
            get: function() {
              return this.sizes[this.sizes.length - 1];
            },
            enumerable: true,
            configurable: true
          });
          Object.defineProperty(BranchNode2.prototype, "width", {
            /**
             * The tree width of the node.
             */
            get: function() {
              return this.children.length;
            },
            enumerable: true,
            configurable: true
          });
          return BranchNode2;
        }()
      );
      Private4.BranchNode = BranchNode;
      var LeafNode = (
        /** @class */
        function() {
          function LeafNode2() {
            this.next = null;
            this.prev = null;
            this.items = [];
          }
          Object.defineProperty(LeafNode2.prototype, "type", {
            /**
             * The discriminated type of the node.
             */
            get: function() {
              return 1;
            },
            enumerable: true,
            configurable: true
          });
          Object.defineProperty(LeafNode2.prototype, "size", {
            /**
             * The total number of items in the leaf.
             */
            get: function() {
              return this.items.length;
            },
            enumerable: true,
            configurable: true
          });
          Object.defineProperty(LeafNode2.prototype, "width", {
            /**
             * The tree width of the node.
             */
            get: function() {
              return this.items.length;
            },
            enumerable: true,
            configurable: true
          });
          return LeafNode2;
        }()
      );
      Private4.LeafNode = LeafNode;
      function firstLeaf(node) {
        while (node.type === 0) {
          node = node.children[0];
        }
        return node;
      }
      Private4.firstLeaf = firstLeaf;
      function lastLeaf(node) {
        while (node.type === 0) {
          node = node.children[node.children.length - 1];
        }
        return node;
      }
      Private4.lastLeaf = lastLeaf;
      function iterItems(node) {
        var leaf = firstLeaf(node);
        return new ForwardIterator(leaf, 0, -1);
      }
      Private4.iterItems = iterItems;
      function retroItems(node) {
        var leaf = lastLeaf(node);
        return new RetroIterator(leaf, leaf.size - 1, -1);
      }
      Private4.retroItems = retroItems;
      function sliceItems(node, start, stop) {
        if (start === void 0) {
          start = 0;
        } else if (start < 0) {
          start = Math.max(0, start + node.size);
        } else {
          start = Math.min(start, node.size);
        }
        if (stop === void 0) {
          stop = node.size;
        } else if (stop < 0) {
          stop = Math.max(0, stop + node.size);
        } else {
          stop = Math.min(stop, node.size);
        }
        var count = Math.max(0, stop - start);
        if (count === 0) {
          return empty();
        }
        while (node.type === 0) {
          var i = findPivotIndexByIndex(node.sizes, start);
          if (i > 0)
            start -= node.sizes[i - 1];
          node = node.children[i];
        }
        return new ForwardIterator(node, start, count);
      }
      Private4.sliceItems = sliceItems;
      function retroSliceItems(node, start, stop) {
        if (start === void 0) {
          start = node.size - 1;
        } else if (start < 0) {
          start = Math.max(-1, start + node.size);
        } else {
          start = Math.min(start, node.size - 1);
        }
        if (stop === void 0) {
          stop = -1;
        } else if (stop < 0) {
          stop = Math.max(-1, stop + node.size);
        } else {
          stop = Math.min(stop, node.size - 1);
        }
        var count = Math.max(0, start - stop);
        if (count === 0) {
          return empty();
        }
        while (node.type === 0) {
          var i = findPivotIndexByIndex(node.sizes, start);
          if (i > 0)
            start -= node.sizes[i - 1];
          node = node.children[i];
        }
        return new RetroIterator(node, start, count);
      }
      Private4.retroSliceItems = retroSliceItems;
      function itemAt(node, index) {
        if (index < 0) {
          index += node.size;
        }
        if (index < 0 || index >= node.size) {
          return void 0;
        }
        while (node.type === 0) {
          var i = findPivotIndexByIndex(node.sizes, index);
          if (i > 0)
            index -= node.sizes[i - 1];
          node = node.children[i];
        }
        return node.items[index];
      }
      Private4.itemAt = itemAt;
      function hasItem(node, key, cmp) {
        while (node.type === 0) {
          var i_1 = findPivotIndexByKey(node.items, key, cmp);
          node = node.children[i_1];
        }
        var i = findKeyIndex(node.items, key, cmp);
        return i >= 0;
      }
      Private4.hasItem = hasItem;
      function indexOf(node, key, cmp) {
        var index = 0;
        while (node.type === 0) {
          var i_2 = findPivotIndexByKey(node.items, key, cmp);
          if (i_2 > 0)
            index += node.sizes[i_2 - 1];
          node = node.children[i_2];
        }
        var i = findKeyIndex(node.items, key, cmp);
        return i >= 0 ? index + i : -index + i;
      }
      Private4.indexOf = indexOf;
      function getItem(node, key, cmp) {
        while (node.type === 0) {
          var i_3 = findPivotIndexByKey(node.items, key, cmp);
          node = node.children[i_3];
        }
        var i = findKeyIndex(node.items, key, cmp);
        return i >= 0 ? node.items[i] : void 0;
      }
      Private4.getItem = getItem;
      function insertItem(node, item, cmp) {
        if (node.type === 1) {
          var i_4 = findKeyIndex(node.items, item, cmp);
          var existing_1;
          if (i_4 >= 0) {
            existing_1 = node.items[i_4];
            node.items[i_4] = item;
          } else {
            existing_1 = void 0;
            ArrayExt.insert(node.items, -i_4 - 1, item);
          }
          return existing_1;
        }
        var i = findPivotIndexByKey(node.items, item, cmp);
        var child = node.children[i];
        var prevSize = child.size;
        var existing = insertItem(child, item, cmp);
        var currSize = child.size;
        node.items[i] = child.items[0];
        if (prevSize === currSize) {
          return existing;
        }
        if (child.width > MAX_NODE_WIDTH) {
          var next = splitNode(child);
          ArrayExt.insert(node.children, i + 1, next);
          ArrayExt.insert(node.items, i + 1, next.items[0]);
        }
        updateSizes(node, i);
        return existing;
      }
      Private4.insertItem = insertItem;
      function deleteItem(node, key, cmp) {
        if (node.type === 1) {
          var i_5 = findKeyIndex(node.items, key, cmp);
          if (i_5 < 0) {
            return void 0;
          }
          return ArrayExt.removeAt(node.items, i_5);
        }
        var i = findPivotIndexByKey(node.items, key, cmp);
        var child = node.children[i];
        var prevSize = child.size;
        var item = deleteItem(child, key, cmp);
        var currSize = child.size;
        if (prevSize === currSize) {
          return item;
        }
        node.items[i] = child.items[0];
        if (child.width < MIN_NODE_WIDTH) {
          i = joinChild(node, i);
        }
        updateSizes(node, i);
        return item;
      }
      Private4.deleteItem = deleteItem;
      function removeItem(node, index) {
        if (index < 0) {
          index += node.size;
        }
        if (index < 0 || index >= node.size) {
          return void 0;
        }
        if (node.type === 1) {
          return ArrayExt.removeAt(node.items, index);
        }
        var i = findPivotIndexByIndex(node.sizes, index);
        if (i > 0)
          index -= node.sizes[i];
        var child = node.children[i];
        var item = removeItem(child, index);
        node.items[i] = child.items[0];
        if (child.width < MIN_NODE_WIDTH) {
          i = joinChild(node, i);
        }
        updateSizes(node, i);
        return item;
      }
      Private4.removeItem = removeItem;
      function clear(node) {
        if (node.type === 0) {
          each(node.children, clear);
          node.children.length = 0;
          node.sizes.length = 0;
          node.items.length = 0;
        } else {
          node.items.length = 0;
          node.next = null;
          node.prev = null;
        }
      }
      Private4.clear = clear;
      function maybeSplitRoot(node) {
        if (node.width <= MAX_NODE_WIDTH) {
          return node;
        }
        var root = new BranchNode();
        var next = splitNode(node);
        root.sizes[0] = node.size;
        root.sizes[1] = node.size + next.size;
        root.children[0] = node;
        root.children[1] = next;
        root.items[0] = node.items[0];
        root.items[1] = next.items[0];
        return root;
      }
      Private4.maybeSplitRoot = maybeSplitRoot;
      function maybeExtractRoot(node) {
        if (node.type === 1) {
          return node;
        }
        if (node.children.length > 1) {
          return node;
        }
        var root = node.children.pop();
        clear(node);
        return root;
      }
      Private4.maybeExtractRoot = maybeExtractRoot;
      var MAX_NODE_WIDTH = 32;
      var MIN_NODE_WIDTH = MAX_NODE_WIDTH >> 1;
      var ForwardIterator = (
        /** @class */
        function() {
          function ForwardIterator2(node, index, count) {
            this._node = node;
            this._index = index;
            this._count = count;
          }
          ForwardIterator2.prototype.iter = function() {
            return this;
          };
          ForwardIterator2.prototype.clone = function() {
            return new ForwardIterator2(this._node, this._index, this._count);
          };
          ForwardIterator2.prototype.next = function() {
            if (this._node === null || this._count === 0) {
              return void 0;
            }
            if (this._index >= this._node.size) {
              this._node = this._node.next;
              this._index = 0;
              return this.next();
            }
            if (this._count > 0) {
              this._count--;
            }
            return this._node.items[this._index++];
          };
          return ForwardIterator2;
        }()
      );
      var RetroIterator = (
        /** @class */
        function() {
          function RetroIterator2(node, index, count) {
            this._node = node;
            this._index = index;
            this._count = count;
          }
          RetroIterator2.prototype.iter = function() {
            return this;
          };
          RetroIterator2.prototype.clone = function() {
            return new RetroIterator2(this._node, this._index, this._count);
          };
          RetroIterator2.prototype.next = function() {
            if (this._node === null || this._count === 0) {
              return void 0;
            }
            if (this._index >= this._node.size) {
              this._index = this._node.size - 1;
            }
            if (this._index < 0) {
              this._node = this._node.prev;
              this._index = this._node ? this._node.size - 1 : -1;
              return this.next();
            }
            if (this._count > 0) {
              this._count--;
            }
            return this._node.items[this._index--];
          };
          return RetroIterator2;
        }()
      );
      function findPivotIndexByIndex(sizes, index) {
        var n = sizes.length;
        for (var i = 0; i < n; ++i) {
          if (sizes[i] > index) {
            return i;
          }
        }
        return n - 1;
      }
      function findPivotIndexByKey(items, key, cmp) {
        var n = items.length;
        for (var i = 1; i < n; ++i) {
          if (cmp(items[i], key) > 0) {
            return i - 1;
          }
        }
        return n - 1;
      }
      function findKeyIndex(items, key, cmp) {
        var n = items.length;
        for (var i = 0; i < n; ++i) {
          var c = cmp(items[i], key);
          if (c === 0) {
            return i;
          }
          if (c > 0) {
            return -i - 1;
          }
        }
        return -n - 1;
      }
      function updateSizes(node, i) {
        var sizes = node.sizes, children = node.children;
        var last = i > 0 ? sizes[i - 1] : 0;
        for (var n = children.length; i < n; ++i) {
          last = sizes[i] = last + children[i].size;
        }
        sizes.length = children.length;
      }
      function splitNode(node) {
        if (node.type === 1) {
          var next_1 = new LeafNode();
          var v1_1 = node.items;
          var v2_1 = next_1.items;
          for (var i = MIN_NODE_WIDTH, n = v1_1.length; i < n; ++i) {
            v2_1.push(v1_1[i]);
          }
          v1_1.length = MIN_NODE_WIDTH;
          if (node.next)
            node.next.prev = next_1;
          next_1.next = node.next;
          next_1.prev = node;
          node.next = next_1;
          return next_1;
        }
        var next = new BranchNode();
        var c1 = node.children;
        var c2 = next.children;
        for (var i = MIN_NODE_WIDTH, n = c1.length; i < n; ++i) {
          c2.push(c1[i]);
        }
        c1.length = MIN_NODE_WIDTH;
        var v1 = node.items;
        var v2 = next.items;
        for (var i = MIN_NODE_WIDTH, n = v1.length; i < n; ++i) {
          v2.push(v1[i]);
        }
        v1.length = MIN_NODE_WIDTH;
        updateSizes(node, MIN_NODE_WIDTH);
        updateSizes(next, 0);
        return next;
      }
      function joinChild(node, i) {
        var _a, _b, _c, _d, _e, _f;
        var child = node.children[i];
        var sibling = i === 0 ? node.children[i + 1] : node.children[i - 1];
        var hasNext = i === 0;
        var isLeaf = child.type === 1;
        var hasExtra = sibling.width > MIN_NODE_WIDTH;
        if (isLeaf && hasExtra && hasNext) {
          var c = child;
          var s = sibling;
          c.items.push(s.items.shift());
          node.items[i + 1] = s.items[0];
          return i;
        }
        if (isLeaf && hasExtra && !hasNext) {
          var c = child;
          var s = sibling;
          c.items.unshift(s.items.pop());
          node.items[i] = c.items[0];
          return i - 1;
        }
        if (isLeaf && !hasExtra && hasNext) {
          var c = child;
          var s = sibling;
          (_a = s.items).unshift.apply(_a, c.items);
          ArrayExt.removeAt(node.children, i);
          ArrayExt.removeAt(node.items, i + 1);
          if (c.prev)
            c.prev.next = s;
          s.prev = c.prev;
          clear(c);
          return i;
        }
        if (isLeaf && !hasExtra && !hasNext) {
          var c = child;
          var s = sibling;
          (_b = s.items).push.apply(_b, c.items);
          ArrayExt.removeAt(node.children, i);
          ArrayExt.removeAt(node.items, i);
          if (c.next)
            c.next.prev = s;
          s.next = c.next;
          clear(c);
          return i - 1;
        }
        if (!isLeaf && hasExtra && hasNext) {
          var c = child;
          var s = sibling;
          c.children.push(s.children.shift());
          c.items.push(s.items.shift());
          node.items[i + 1] = s.items[0];
          updateSizes(c, c.width - 1);
          updateSizes(s, 0);
          return i;
        }
        if (!isLeaf && hasExtra && !hasNext) {
          var c = child;
          var s = sibling;
          c.children.unshift(s.children.pop());
          c.items.unshift(s.items.pop());
          node.items[i] = c.items[0];
          updateSizes(c, 0);
          updateSizes(s, s.width - 1);
          return i - 1;
        }
        if (!isLeaf && !hasExtra && hasNext) {
          var c = child;
          var s = sibling;
          (_c = s.children).unshift.apply(_c, c.children);
          (_d = s.items).unshift.apply(_d, c.items);
          ArrayExt.removeAt(node.children, i);
          ArrayExt.removeAt(node.items, i + 1);
          updateSizes(s, 0);
          c.children.length = 0;
          clear(c);
          return i;
        }
        if (!isLeaf && !hasExtra && !hasNext) {
          var c = child;
          var s = sibling;
          (_e = s.children).push.apply(_e, c.children);
          (_f = s.items).push.apply(_f, c.items);
          ArrayExt.removeAt(node.children, i);
          ArrayExt.removeAt(node.items, i);
          updateSizes(s, 0);
          c.children.length = 0;
          clear(c);
          return i - 1;
        }
        throw "unreachable";
      }
    })(Private$1 || (Private$1 = {}));
    LinkedList = /** @class */
    function() {
      function LinkedList2() {
        this._first = null;
        this._last = null;
        this._size = 0;
      }
      Object.defineProperty(LinkedList2.prototype, "isEmpty", {
        /**
         * Whether the list is empty.
         *
         * #### Complexity
         * Constant.
         */
        get: function() {
          return this._size === 0;
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(LinkedList2.prototype, "size", {
        /**
         * The size of the list.
         *
         * #### Complexity
         * `O(1)`
         *
         * #### Notes
         * This is equivalent to `length`.
         */
        get: function() {
          return this._size;
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(LinkedList2.prototype, "length", {
        /**
         * The length of the list.
         *
         * #### Complexity
         * Constant.
         *
         * #### Notes
         * This is equivalent to `size`.
         *
         * This property is deprecated.
         */
        get: function() {
          return this._size;
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(LinkedList2.prototype, "first", {
        /**
         * The first value in the list.
         *
         * This is `undefined` if the list is empty.
         *
         * #### Complexity
         * Constant.
         */
        get: function() {
          return this._first ? this._first.value : void 0;
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(LinkedList2.prototype, "last", {
        /**
         * The last value in the list.
         *
         * This is `undefined` if the list is empty.
         *
         * #### Complexity
         * Constant.
         */
        get: function() {
          return this._last ? this._last.value : void 0;
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(LinkedList2.prototype, "firstNode", {
        /**
         * The first node in the list.
         *
         * This is `null` if the list is empty.
         *
         * #### Complexity
         * Constant.
         */
        get: function() {
          return this._first;
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(LinkedList2.prototype, "lastNode", {
        /**
         * The last node in the list.
         *
         * This is `null` if the list is empty.
         *
         * #### Complexity
         * Constant.
         */
        get: function() {
          return this._last;
        },
        enumerable: true,
        configurable: true
      });
      LinkedList2.prototype.iter = function() {
        return new LinkedList2.ForwardValueIterator(this._first);
      };
      LinkedList2.prototype.retro = function() {
        return new LinkedList2.RetroValueIterator(this._last);
      };
      LinkedList2.prototype.nodes = function() {
        return new LinkedList2.ForwardNodeIterator(this._first);
      };
      LinkedList2.prototype.retroNodes = function() {
        return new LinkedList2.RetroNodeIterator(this._last);
      };
      LinkedList2.prototype.assign = function(values) {
        var _this = this;
        this.clear();
        each(values, function(value) {
          _this.addLast(value);
        });
      };
      LinkedList2.prototype.push = function(value) {
        this.addLast(value);
      };
      LinkedList2.prototype.pop = function() {
        return this.removeLast();
      };
      LinkedList2.prototype.shift = function(value) {
        this.addFirst(value);
      };
      LinkedList2.prototype.unshift = function() {
        return this.removeFirst();
      };
      LinkedList2.prototype.addFirst = function(value) {
        var node = new Private2.LinkedListNode(this, value);
        if (!this._first) {
          this._first = node;
          this._last = node;
        } else {
          node.next = this._first;
          this._first.prev = node;
          this._first = node;
        }
        this._size++;
        return node;
      };
      LinkedList2.prototype.addLast = function(value) {
        var node = new Private2.LinkedListNode(this, value);
        if (!this._last) {
          this._first = node;
          this._last = node;
        } else {
          node.prev = this._last;
          this._last.next = node;
          this._last = node;
        }
        this._size++;
        return node;
      };
      LinkedList2.prototype.insertBefore = function(value, ref) {
        if (!ref || ref === this._first) {
          return this.addFirst(value);
        }
        if (!(ref instanceof Private2.LinkedListNode) || ref.list !== this) {
          throw new Error("Reference node is not owned by the list.");
        }
        var node = new Private2.LinkedListNode(this, value);
        var _ref = ref;
        var prev = _ref.prev;
        node.next = _ref;
        node.prev = prev;
        _ref.prev = node;
        prev.next = node;
        this._size++;
        return node;
      };
      LinkedList2.prototype.insertAfter = function(value, ref) {
        if (!ref || ref === this._last) {
          return this.addLast(value);
        }
        if (!(ref instanceof Private2.LinkedListNode) || ref.list !== this) {
          throw new Error("Reference node is not owned by the list.");
        }
        var node = new Private2.LinkedListNode(this, value);
        var _ref = ref;
        var next = _ref.next;
        node.next = next;
        node.prev = _ref;
        _ref.next = node;
        next.prev = node;
        this._size++;
        return node;
      };
      LinkedList2.prototype.removeFirst = function() {
        var node = this._first;
        if (!node) {
          return void 0;
        }
        if (node === this._last) {
          this._first = null;
          this._last = null;
        } else {
          this._first = node.next;
          this._first.prev = null;
        }
        node.list = null;
        node.next = null;
        node.prev = null;
        this._size--;
        return node.value;
      };
      LinkedList2.prototype.removeLast = function() {
        var node = this._last;
        if (!node) {
          return void 0;
        }
        if (node === this._first) {
          this._first = null;
          this._last = null;
        } else {
          this._last = node.prev;
          this._last.next = null;
        }
        node.list = null;
        node.next = null;
        node.prev = null;
        this._size--;
        return node.value;
      };
      LinkedList2.prototype.removeNode = function(node) {
        if (!(node instanceof Private2.LinkedListNode) || node.list !== this) {
          throw new Error("Node is not owned by the list.");
        }
        var _node = node;
        if (_node === this._first && _node === this._last) {
          this._first = null;
          this._last = null;
        } else if (_node === this._first) {
          this._first = _node.next;
          this._first.prev = null;
        } else if (_node === this._last) {
          this._last = _node.prev;
          this._last.next = null;
        } else {
          _node.next.prev = _node.prev;
          _node.prev.next = _node.next;
        }
        _node.list = null;
        _node.next = null;
        _node.prev = null;
        this._size--;
      };
      LinkedList2.prototype.clear = function() {
        var node = this._first;
        while (node) {
          var next = node.next;
          node.list = null;
          node.prev = null;
          node.next = null;
          node = next;
        }
        this._first = null;
        this._last = null;
        this._size = 0;
      };
      return LinkedList2;
    }();
    (function(LinkedList2) {
      function from(values) {
        var list = new LinkedList2();
        list.assign(values);
        return list;
      }
      LinkedList2.from = from;
      var ForwardValueIterator = (
        /** @class */
        function() {
          function ForwardValueIterator2(node) {
            this._node = node;
          }
          ForwardValueIterator2.prototype.iter = function() {
            return this;
          };
          ForwardValueIterator2.prototype.clone = function() {
            return new ForwardValueIterator2(this._node);
          };
          ForwardValueIterator2.prototype.next = function() {
            if (!this._node) {
              return void 0;
            }
            var node = this._node;
            this._node = node.next;
            return node.value;
          };
          return ForwardValueIterator2;
        }()
      );
      LinkedList2.ForwardValueIterator = ForwardValueIterator;
      var RetroValueIterator = (
        /** @class */
        function() {
          function RetroValueIterator2(node) {
            this._node = node;
          }
          RetroValueIterator2.prototype.iter = function() {
            return this;
          };
          RetroValueIterator2.prototype.clone = function() {
            return new RetroValueIterator2(this._node);
          };
          RetroValueIterator2.prototype.next = function() {
            if (!this._node) {
              return void 0;
            }
            var node = this._node;
            this._node = node.prev;
            return node.value;
          };
          return RetroValueIterator2;
        }()
      );
      LinkedList2.RetroValueIterator = RetroValueIterator;
      var ForwardNodeIterator = (
        /** @class */
        function() {
          function ForwardNodeIterator2(node) {
            this._node = node;
          }
          ForwardNodeIterator2.prototype.iter = function() {
            return this;
          };
          ForwardNodeIterator2.prototype.clone = function() {
            return new ForwardNodeIterator2(this._node);
          };
          ForwardNodeIterator2.prototype.next = function() {
            if (!this._node) {
              return void 0;
            }
            var node = this._node;
            this._node = node.next;
            return node;
          };
          return ForwardNodeIterator2;
        }()
      );
      LinkedList2.ForwardNodeIterator = ForwardNodeIterator;
      var RetroNodeIterator = (
        /** @class */
        function() {
          function RetroNodeIterator2(node) {
            this._node = node;
          }
          RetroNodeIterator2.prototype.iter = function() {
            return this;
          };
          RetroNodeIterator2.prototype.clone = function() {
            return new RetroNodeIterator2(this._node);
          };
          RetroNodeIterator2.prototype.next = function() {
            if (!this._node) {
              return void 0;
            }
            var node = this._node;
            this._node = node.prev;
            return node;
          };
          return RetroNodeIterator2;
        }()
      );
      LinkedList2.RetroNodeIterator = RetroNodeIterator;
    })(LinkedList || (LinkedList = {}));
    (function(Private4) {
      var LinkedListNode = (
        /** @class */
        function() {
          function LinkedListNode2(list, value) {
            this.list = null;
            this.next = null;
            this.prev = null;
            this.list = list;
            this.value = value;
          }
          return LinkedListNode2;
        }()
      );
      Private4.LinkedListNode = LinkedListNode;
    })(Private2 || (Private2 = {}));
  }
});

// ../../node_modules/@lumino/messaging/dist/index.es6.js
function __extends(d, b) {
  if (typeof b !== "function" && b !== null)
    throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
  extendStatics(d, b);
  function __() {
    this.constructor = d;
  }
  d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}
var extendStatics, Message, ConflatableMessage, MessageLoop;
var init_index_es63 = __esm({
  "../../node_modules/@lumino/messaging/dist/index.es6.js"() {
    init_index_es6();
    init_index_es62();
    extendStatics = function(d, b) {
      extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
        d2.__proto__ = b2;
      } || function(d2, b2) {
        for (var p in b2)
          if (Object.prototype.hasOwnProperty.call(b2, p))
            d2[p] = b2[p];
      };
      return extendStatics(d, b);
    };
    Message = /** @class */
    function() {
      function Message2(type) {
        this.type = type;
      }
      Object.defineProperty(Message2.prototype, "isConflatable", {
        /**
         * Test whether the message is conflatable.
         *
         * #### Notes
         * Message conflation is an advanced topic. Most message types will
         * not make use of this feature.
         *
         * If a conflatable message is posted to a handler while another
         * conflatable message of the same `type` has already been posted
         * to the handler, the `conflate()` method of the existing message
         * will be invoked. If that method returns `true`, the new message
         * will not be enqueued. This allows messages to be compressed, so
         * that only a single instance of the message type is processed per
         * cycle, no matter how many times messages of that type are posted.
         *
         * Custom message types may reimplement this property.
         *
         * The default implementation is always `false`.
         */
        get: function() {
          return false;
        },
        enumerable: true,
        configurable: true
      });
      Message2.prototype.conflate = function(other) {
        return false;
      };
      return Message2;
    }();
    ConflatableMessage = /** @class */
    function(_super) {
      __extends(ConflatableMessage2, _super);
      function ConflatableMessage2() {
        return _super !== null && _super.apply(this, arguments) || this;
      }
      Object.defineProperty(ConflatableMessage2.prototype, "isConflatable", {
        /**
         * Test whether the message is conflatable.
         *
         * #### Notes
         * This property is always `true`.
         */
        get: function() {
          return true;
        },
        enumerable: true,
        configurable: true
      });
      ConflatableMessage2.prototype.conflate = function(other) {
        return true;
      };
      return ConflatableMessage2;
    }(Message);
    (function(MessageLoop2) {
      function sendMessage(handler, msg) {
        var hooks = messageHooks.get(handler);
        if (!hooks || hooks.length === 0) {
          invokeHandler(handler, msg);
          return;
        }
        var passed = every(retro(hooks), function(hook) {
          return hook ? invokeHook(hook, handler, msg) : true;
        });
        if (passed) {
          invokeHandler(handler, msg);
        }
      }
      MessageLoop2.sendMessage = sendMessage;
      function postMessage(handler, msg) {
        if (!msg.isConflatable) {
          enqueueMessage(handler, msg);
          return;
        }
        var conflated = some(messageQueue, function(posted) {
          if (posted.handler !== handler) {
            return false;
          }
          if (!posted.msg) {
            return false;
          }
          if (posted.msg.type !== msg.type) {
            return false;
          }
          if (!posted.msg.isConflatable) {
            return false;
          }
          return posted.msg.conflate(msg);
        });
        if (!conflated) {
          enqueueMessage(handler, msg);
        }
      }
      MessageLoop2.postMessage = postMessage;
      function installMessageHook(handler, hook) {
        var hooks = messageHooks.get(handler);
        if (hooks && hooks.indexOf(hook) !== -1) {
          return;
        }
        if (!hooks) {
          messageHooks.set(handler, [hook]);
        } else {
          hooks.push(hook);
        }
      }
      MessageLoop2.installMessageHook = installMessageHook;
      function removeMessageHook(handler, hook) {
        var hooks = messageHooks.get(handler);
        if (!hooks) {
          return;
        }
        var i = hooks.indexOf(hook);
        if (i === -1) {
          return;
        }
        hooks[i] = null;
        scheduleCleanup(hooks);
      }
      MessageLoop2.removeMessageHook = removeMessageHook;
      function clearData(handler) {
        var hooks = messageHooks.get(handler);
        if (hooks && hooks.length > 0) {
          ArrayExt.fill(hooks, null);
          scheduleCleanup(hooks);
        }
        each(messageQueue, function(posted) {
          if (posted.handler === handler) {
            posted.handler = null;
            posted.msg = null;
          }
        });
      }
      MessageLoop2.clearData = clearData;
      function flush() {
        if (flushGuard || loopTaskID === 0) {
          return;
        }
        unschedule(loopTaskID);
        flushGuard = true;
        runMessageLoop();
        flushGuard = false;
      }
      MessageLoop2.flush = flush;
      function getExceptionHandler() {
        return exceptionHandler;
      }
      MessageLoop2.getExceptionHandler = getExceptionHandler;
      function setExceptionHandler(handler) {
        var old = exceptionHandler;
        exceptionHandler = handler;
        return old;
      }
      MessageLoop2.setExceptionHandler = setExceptionHandler;
      var messageQueue = new LinkedList();
      var messageHooks = /* @__PURE__ */ new WeakMap();
      var dirtySet = /* @__PURE__ */ new Set();
      var exceptionHandler = function(err) {
        console.error(err);
      };
      var loopTaskID = 0;
      var flushGuard = false;
      var schedule = function() {
        var ok = typeof requestAnimationFrame === "function";
        return ok ? requestAnimationFrame : setImmediate;
      }();
      var unschedule = function() {
        var ok = typeof cancelAnimationFrame === "function";
        return ok ? cancelAnimationFrame : clearImmediate;
      }();
      function invokeHook(hook, handler, msg) {
        var result = true;
        try {
          if (typeof hook === "function") {
            result = hook(handler, msg);
          } else {
            result = hook.messageHook(handler, msg);
          }
        } catch (err) {
          exceptionHandler(err);
        }
        return result;
      }
      function invokeHandler(handler, msg) {
        try {
          handler.processMessage(msg);
        } catch (err) {
          exceptionHandler(err);
        }
      }
      function enqueueMessage(handler, msg) {
        messageQueue.addLast({ handler, msg });
        if (loopTaskID !== 0) {
          return;
        }
        loopTaskID = schedule(runMessageLoop);
      }
      function runMessageLoop() {
        loopTaskID = 0;
        if (messageQueue.isEmpty) {
          return;
        }
        var sentinel = { handler: null, msg: null };
        messageQueue.addLast(sentinel);
        while (true) {
          var posted = messageQueue.removeFirst();
          if (posted === sentinel) {
            return;
          }
          if (posted.handler && posted.msg) {
            sendMessage(posted.handler, posted.msg);
          }
        }
      }
      function scheduleCleanup(hooks) {
        if (dirtySet.size === 0) {
          schedule(cleanupDirtySet);
        }
        dirtySet.add(hooks);
      }
      function cleanupDirtySet() {
        dirtySet.forEach(cleanupHooks);
        dirtySet.clear();
      }
      function cleanupHooks(hooks) {
        ArrayExt.removeAllWhere(hooks, isNull);
      }
      function isNull(value) {
        return value === null;
      }
    })(MessageLoop || (MessageLoop = {}));
  }
});

// ../../node_modules/@lumino/domutils/dist/index.es6.js
var ClipboardExt, ElementExt, Platform, Selector, Private3;
var init_index_es64 = __esm({
  "../../node_modules/@lumino/domutils/dist/index.es6.js"() {
    (function(ClipboardExt2) {
      function copyText(text) {
        var body = document.body;
        var handler = function(event) {
          event.preventDefault();
          event.stopPropagation();
          event.clipboardData.setData("text", text);
          body.removeEventListener("copy", handler, true);
        };
        body.addEventListener("copy", handler, true);
        document.execCommand("copy");
      }
      ClipboardExt2.copyText = copyText;
    })(ClipboardExt || (ClipboardExt = {}));
    (function(ElementExt2) {
      function boxSizing(element) {
        var style = window.getComputedStyle(element);
        var bt = parseFloat(style.borderTopWidth) || 0;
        var bl = parseFloat(style.borderLeftWidth) || 0;
        var br = parseFloat(style.borderRightWidth) || 0;
        var bb = parseFloat(style.borderBottomWidth) || 0;
        var pt = parseFloat(style.paddingTop) || 0;
        var pl = parseFloat(style.paddingLeft) || 0;
        var pr = parseFloat(style.paddingRight) || 0;
        var pb = parseFloat(style.paddingBottom) || 0;
        var hs = bl + pl + pr + br;
        var vs = bt + pt + pb + bb;
        return {
          borderTop: bt,
          borderLeft: bl,
          borderRight: br,
          borderBottom: bb,
          paddingTop: pt,
          paddingLeft: pl,
          paddingRight: pr,
          paddingBottom: pb,
          horizontalSum: hs,
          verticalSum: vs
        };
      }
      ElementExt2.boxSizing = boxSizing;
      function sizeLimits(element) {
        var style = window.getComputedStyle(element);
        var minWidth = parseFloat(style.minWidth) || 0;
        var minHeight = parseFloat(style.minHeight) || 0;
        var maxWidth = parseFloat(style.maxWidth) || Infinity;
        var maxHeight = parseFloat(style.maxHeight) || Infinity;
        maxWidth = Math.max(minWidth, maxWidth);
        maxHeight = Math.max(minHeight, maxHeight);
        return { minWidth, minHeight, maxWidth, maxHeight };
      }
      ElementExt2.sizeLimits = sizeLimits;
      function hitTest(element, clientX, clientY) {
        var rect = element.getBoundingClientRect();
        return clientX >= rect.left && clientX < rect.right && clientY >= rect.top && clientY < rect.bottom;
      }
      ElementExt2.hitTest = hitTest;
      function scrollIntoViewIfNeeded(area, element) {
        var ar = area.getBoundingClientRect();
        var er = element.getBoundingClientRect();
        if (er.top <= ar.top && er.bottom >= ar.bottom) {
          return;
        }
        if (er.top < ar.top && er.height <= ar.height) {
          area.scrollTop -= ar.top - er.top;
          return;
        }
        if (er.bottom > ar.bottom && er.height >= ar.height) {
          area.scrollTop -= ar.top - er.top;
          return;
        }
        if (er.top < ar.top && er.height > ar.height) {
          area.scrollTop -= ar.bottom - er.bottom;
          return;
        }
        if (er.bottom > ar.bottom && er.height < ar.height) {
          area.scrollTop -= ar.bottom - er.bottom;
          return;
        }
      }
      ElementExt2.scrollIntoViewIfNeeded = scrollIntoViewIfNeeded;
    })(ElementExt || (ElementExt = {}));
    (function(Platform2) {
      Platform2.IS_MAC = !!navigator.platform.match(/Mac/i);
      Platform2.IS_WIN = !!navigator.platform.match(/Win/i);
      Platform2.IS_IE = /Trident/.test(navigator.userAgent);
      Platform2.IS_EDGE = /Edge/.test(navigator.userAgent);
      function accelKey(event) {
        return Platform2.IS_MAC ? event.metaKey : event.ctrlKey;
      }
      Platform2.accelKey = accelKey;
    })(Platform || (Platform = {}));
    (function(Selector2) {
      function calculateSpecificity(selector) {
        if (selector in Private3.specificityCache) {
          return Private3.specificityCache[selector];
        }
        var result = Private3.calculateSingle(selector);
        return Private3.specificityCache[selector] = result;
      }
      Selector2.calculateSpecificity = calculateSpecificity;
      function isValid(selector) {
        if (selector in Private3.validityCache) {
          return Private3.validityCache[selector];
        }
        var result = true;
        try {
          Private3.testElem.querySelector(selector);
        } catch (err) {
          result = false;
        }
        return Private3.validityCache[selector] = result;
      }
      Selector2.isValid = isValid;
      function matches(element, selector) {
        return Private3.protoMatchFunc.call(element, selector);
      }
      Selector2.matches = matches;
    })(Selector || (Selector = {}));
    (function(Private4) {
      Private4.specificityCache = /* @__PURE__ */ Object.create(null);
      Private4.validityCache = /* @__PURE__ */ Object.create(null);
      Private4.testElem = document.createElement("div");
      Private4.protoMatchFunc = function() {
        var proto = Element.prototype;
        return proto.matches || proto.matchesSelector || proto.mozMatchesSelector || proto.msMatchesSelector || proto.oMatchesSelector || proto.webkitMatchesSelector || function(selector) {
          var elem = this;
          var matches = elem.ownerDocument ? elem.ownerDocument.querySelectorAll(selector) : [];
          return Array.prototype.indexOf.call(matches, elem) !== -1;
        };
      }();
      function calculateSingle(selector) {
        selector = selector.split(",", 1)[0];
        var a = 0;
        var b = 0;
        var c = 0;
        function match(re) {
          var match2 = selector.match(re);
          if (match2 === null) {
            return false;
          }
          selector = selector.slice(match2[0].length);
          return true;
        }
        selector = selector.replace(NEGATION_RE, " $1 ");
        while (selector.length > 0) {
          if (match(ID_RE)) {
            a++;
            continue;
          }
          if (match(CLASS_RE)) {
            b++;
            continue;
          }
          if (match(ATTR_RE)) {
            b++;
            continue;
          }
          if (match(PSEUDO_ELEM_RE)) {
            c++;
            continue;
          }
          if (match(PSEDUO_CLASS_RE)) {
            b++;
            continue;
          }
          if (match(TYPE_RE)) {
            c++;
            continue;
          }
          if (match(IGNORE_RE)) {
            continue;
          }
          return 0;
        }
        a = Math.min(a, 255);
        b = Math.min(b, 255);
        c = Math.min(c, 255);
        return a << 16 | b << 8 | c;
      }
      Private4.calculateSingle = calculateSingle;
      var ID_RE = /^#[^\s\+>~#\.\[:]+/;
      var CLASS_RE = /^\.[^\s\+>~#\.\[:]+/;
      var ATTR_RE = /^\[[^\]]+\]/;
      var TYPE_RE = /^[^\s\+>~#\.\[:]+/;
      var PSEUDO_ELEM_RE = /^(::[^\s\+>~#\.\[:]+|:first-line|:first-letter|:before|:after)/;
      var PSEDUO_CLASS_RE = /^:[^\s\+>~#\.\[:]+/;
      var IGNORE_RE = /^[\s\+>~\*]+/;
      var NEGATION_RE = /:not\(([^\)]+)\)/g;
    })(Private3 || (Private3 = {}));
  }
});

export {
  ArrayExt,
  iter,
  each,
  toArray,
  chain,
  ChainIterator,
  empty,
  filter,
  find,
  max,
  map,
  reduce,
  once,
  StringExt,
  init_index_es6,
  Message,
  ConflatableMessage,
  MessageLoop,
  init_index_es63 as init_index_es62,
  ElementExt,
  Platform,
  Selector,
  init_index_es64 as init_index_es63
};
/*! Bundled license information:

@lumino/messaging/dist/index.es6.js:
  (*! *****************************************************************************
  Copyright (c) Microsoft Corporation.
  
  Permission to use, copy, modify, and/or distribute this software for any
  purpose with or without fee is hereby granted.
  
  THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
  REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
  AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
  INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
  LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
  OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
  PERFORMANCE OF THIS SOFTWARE.
  ***************************************************************************** *)
*/
//# sourceMappingURL=/build/_shared/chunk-KAB4N37T.js.map
