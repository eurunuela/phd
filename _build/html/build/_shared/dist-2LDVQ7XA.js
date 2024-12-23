import {
  renderEquation
} from "/build/_shared/chunk-3OWGAEU3.js";
import "/build/_shared/chunk-DMKKPIN6.js";
import "/build/_shared/chunk-ZFADRSFR.js";
import "/build/_shared/chunk-3WPAJQ6A.js";
import {
  CREDIT_URL,
  SourceFileKind,
  buildUrl,
  normalize,
  orcid,
  validate
} from "/build/_shared/chunk-TDUKKLNI.js";
import {
  doi
} from "/build/_shared/chunk-XIVVYPNM.js";
import "/build/_shared/chunk-XJ2I6HXP.js";
import {
  VFile
} from "/build/_shared/chunk-44FAGZWP.js";
import {
  NotebookCell,
  RuleId,
  copyNode,
  extractPart,
  fileError,
  liftChildren,
  normalizeLabel,
  remove,
  select,
  selectAll,
  selectBlockParts
} from "/build/_shared/chunk-DXW3BAL6.js";
import "/build/_shared/chunk-63RQRREX.js";
import "/build/_shared/chunk-6RGX3KNX.js";
import {
  __commonJS,
  __esm,
  __export,
  __toCommonJS,
  __toESM
} from "/build/_shared/chunk-D5NAPBYJ.js";

// ../../node_modules/@jspm/core/nodelibs/browser/chunk-4bd36a8f.js
function o() {
  o.init.call(this);
}
function u(e5) {
  if ("function" != typeof e5)
    throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof e5);
}
function f(e5) {
  return void 0 === e5._maxListeners ? o.defaultMaxListeners : e5._maxListeners;
}
function v(e5, t5, n5, r5) {
  var i5, o5, s5, v4;
  if (u(n5), void 0 === (o5 = e5._events) ? (o5 = e5._events = /* @__PURE__ */ Object.create(null), e5._eventsCount = 0) : (void 0 !== o5.newListener && (e5.emit("newListener", t5, n5.listener ? n5.listener : n5), o5 = e5._events), s5 = o5[t5]), void 0 === s5)
    s5 = o5[t5] = n5, ++e5._eventsCount;
  else if ("function" == typeof s5 ? s5 = o5[t5] = r5 ? [n5, s5] : [s5, n5] : r5 ? s5.unshift(n5) : s5.push(n5), (i5 = f(e5)) > 0 && s5.length > i5 && !s5.warned) {
    s5.warned = true;
    var a5 = new Error("Possible EventEmitter memory leak detected. " + s5.length + " " + String(t5) + " listeners added. Use emitter.setMaxListeners() to increase limit");
    a5.name = "MaxListenersExceededWarning", a5.emitter = e5, a5.type = t5, a5.count = s5.length, v4 = a5, console && console.warn && console.warn(v4);
  }
  return e5;
}
function a() {
  if (!this.fired)
    return this.target.removeListener(this.type, this.wrapFn), this.fired = true, 0 === arguments.length ? this.listener.call(this.target) : this.listener.apply(this.target, arguments);
}
function l(e5, t5, n5) {
  var r5 = { fired: false, wrapFn: void 0, target: e5, type: t5, listener: n5 }, i5 = a.bind(r5);
  return i5.listener = n5, r5.wrapFn = i5, i5;
}
function h(e5, t5, n5) {
  var r5 = e5._events;
  if (void 0 === r5)
    return [];
  var i5 = r5[t5];
  return void 0 === i5 ? [] : "function" == typeof i5 ? n5 ? [i5.listener || i5] : [i5] : n5 ? function(e6) {
    for (var t6 = new Array(e6.length), n6 = 0; n6 < t6.length; ++n6)
      t6[n6] = e6[n6].listener || e6[n6];
    return t6;
  }(i5) : c(i5, i5.length);
}
function p(e5) {
  var t5 = this._events;
  if (void 0 !== t5) {
    var n5 = t5[e5];
    if ("function" == typeof n5)
      return 1;
    if (void 0 !== n5)
      return n5.length;
  }
  return 0;
}
function c(e5, t5) {
  for (var n5 = new Array(t5), r5 = 0; r5 < t5; ++r5)
    n5[r5] = e5[r5];
  return n5;
}
var e, t, n, r, i, s, y;
var init_chunk_4bd36a8f = __esm({
  "../../node_modules/@jspm/core/nodelibs/browser/chunk-4bd36a8f.js"() {
    n = "object" == typeof Reflect ? Reflect : null;
    r = n && "function" == typeof n.apply ? n.apply : function(e5, t5, n5) {
      return Function.prototype.apply.call(e5, t5, n5);
    };
    t = n && "function" == typeof n.ownKeys ? n.ownKeys : Object.getOwnPropertySymbols ? function(e5) {
      return Object.getOwnPropertyNames(e5).concat(Object.getOwnPropertySymbols(e5));
    } : function(e5) {
      return Object.getOwnPropertyNames(e5);
    };
    i = Number.isNaN || function(e5) {
      return e5 != e5;
    };
    e = o, o.EventEmitter = o, o.prototype._events = void 0, o.prototype._eventsCount = 0, o.prototype._maxListeners = void 0;
    s = 10;
    Object.defineProperty(o, "defaultMaxListeners", { enumerable: true, get: function() {
      return s;
    }, set: function(e5) {
      if ("number" != typeof e5 || e5 < 0 || i(e5))
        throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + e5 + ".");
      s = e5;
    } }), o.init = function() {
      void 0 !== this._events && this._events !== Object.getPrototypeOf(this)._events || (this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0), this._maxListeners = this._maxListeners || void 0;
    }, o.prototype.setMaxListeners = function(e5) {
      if ("number" != typeof e5 || e5 < 0 || i(e5))
        throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + e5 + ".");
      return this._maxListeners = e5, this;
    }, o.prototype.getMaxListeners = function() {
      return f(this);
    }, o.prototype.emit = function(e5) {
      for (var t5 = [], n5 = 1; n5 < arguments.length; n5++)
        t5.push(arguments[n5]);
      var i5 = "error" === e5, o5 = this._events;
      if (void 0 !== o5)
        i5 = i5 && void 0 === o5.error;
      else if (!i5)
        return false;
      if (i5) {
        var s5;
        if (t5.length > 0 && (s5 = t5[0]), s5 instanceof Error)
          throw s5;
        var u5 = new Error("Unhandled error." + (s5 ? " (" + s5.message + ")" : ""));
        throw u5.context = s5, u5;
      }
      var f5 = o5[e5];
      if (void 0 === f5)
        return false;
      if ("function" == typeof f5)
        r(f5, this, t5);
      else {
        var v4 = f5.length, a5 = c(f5, v4);
        for (n5 = 0; n5 < v4; ++n5)
          r(a5[n5], this, t5);
      }
      return true;
    }, o.prototype.addListener = function(e5, t5) {
      return v(this, e5, t5, false);
    }, o.prototype.on = o.prototype.addListener, o.prototype.prependListener = function(e5, t5) {
      return v(this, e5, t5, true);
    }, o.prototype.once = function(e5, t5) {
      return u(t5), this.on(e5, l(this, e5, t5)), this;
    }, o.prototype.prependOnceListener = function(e5, t5) {
      return u(t5), this.prependListener(e5, l(this, e5, t5)), this;
    }, o.prototype.removeListener = function(e5, t5) {
      var n5, r5, i5, o5, s5;
      if (u(t5), void 0 === (r5 = this._events))
        return this;
      if (void 0 === (n5 = r5[e5]))
        return this;
      if (n5 === t5 || n5.listener === t5)
        0 == --this._eventsCount ? this._events = /* @__PURE__ */ Object.create(null) : (delete r5[e5], r5.removeListener && this.emit("removeListener", e5, n5.listener || t5));
      else if ("function" != typeof n5) {
        for (i5 = -1, o5 = n5.length - 1; o5 >= 0; o5--)
          if (n5[o5] === t5 || n5[o5].listener === t5) {
            s5 = n5[o5].listener, i5 = o5;
            break;
          }
        if (i5 < 0)
          return this;
        0 === i5 ? n5.shift() : !function(e6, t6) {
          for (; t6 + 1 < e6.length; t6++)
            e6[t6] = e6[t6 + 1];
          e6.pop();
        }(n5, i5), 1 === n5.length && (r5[e5] = n5[0]), void 0 !== r5.removeListener && this.emit("removeListener", e5, s5 || t5);
      }
      return this;
    }, o.prototype.off = o.prototype.removeListener, o.prototype.removeAllListeners = function(e5) {
      var t5, n5, r5;
      if (void 0 === (n5 = this._events))
        return this;
      if (void 0 === n5.removeListener)
        return 0 === arguments.length ? (this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0) : void 0 !== n5[e5] && (0 == --this._eventsCount ? this._events = /* @__PURE__ */ Object.create(null) : delete n5[e5]), this;
      if (0 === arguments.length) {
        var i5, o5 = Object.keys(n5);
        for (r5 = 0; r5 < o5.length; ++r5)
          "removeListener" !== (i5 = o5[r5]) && this.removeAllListeners(i5);
        return this.removeAllListeners("removeListener"), this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0, this;
      }
      if ("function" == typeof (t5 = n5[e5]))
        this.removeListener(e5, t5);
      else if (void 0 !== t5)
        for (r5 = t5.length - 1; r5 >= 0; r5--)
          this.removeListener(e5, t5[r5]);
      return this;
    }, o.prototype.listeners = function(e5) {
      return h(this, e5, true);
    }, o.prototype.rawListeners = function(e5) {
      return h(this, e5, false);
    }, o.listenerCount = function(e5, t5) {
      return "function" == typeof e5.listenerCount ? e5.listenerCount(t5) : p.call(e5, t5);
    }, o.prototype.listenerCount = p, o.prototype.eventNames = function() {
      return this._eventsCount > 0 ? t(this._events) : [];
    };
    y = e;
    y.EventEmitter;
    y.defaultMaxListeners;
    y.init;
    y.listenerCount;
    y.EventEmitter;
    y.defaultMaxListeners;
    y.init;
    y.listenerCount;
  }
});

// ../../node_modules/@jspm/core/nodelibs/browser/events.js
var EventEmitter, defaultMaxListeners, init, listenerCount, on, once;
var init_events = __esm({
  "../../node_modules/@jspm/core/nodelibs/browser/events.js"() {
    init_chunk_4bd36a8f();
    init_chunk_4bd36a8f();
    y.once = function(emitter, event) {
      return new Promise((resolve, reject) => {
        function eventListener(...args) {
          if (errorListener !== void 0) {
            emitter.removeListener("error", errorListener);
          }
          resolve(args);
        }
        let errorListener;
        if (event !== "error") {
          errorListener = (err) => {
            emitter.removeListener(name, eventListener);
            reject(err);
          };
          emitter.once("error", errorListener);
        }
        emitter.once(event, eventListener);
      });
    };
    y.on = function(emitter, event) {
      const unconsumedEventValues = [];
      const unconsumedPromises = [];
      let error = null;
      let finished2 = false;
      const iterator = {
        async next() {
          const value = unconsumedEventValues.shift();
          if (value) {
            return createIterResult(value, false);
          }
          if (error) {
            const p5 = Promise.reject(error);
            error = null;
            return p5;
          }
          if (finished2) {
            return createIterResult(void 0, true);
          }
          return new Promise((resolve, reject) => unconsumedPromises.push({ resolve, reject }));
        },
        async return() {
          emitter.removeListener(event, eventHandler);
          emitter.removeListener("error", errorHandler);
          finished2 = true;
          for (const promise of unconsumedPromises) {
            promise.resolve(createIterResult(void 0, true));
          }
          return createIterResult(void 0, true);
        },
        throw(err) {
          error = err;
          emitter.removeListener(event, eventHandler);
          emitter.removeListener("error", errorHandler);
        },
        [Symbol.asyncIterator]() {
          return this;
        }
      };
      emitter.on(event, eventHandler);
      emitter.on("error", errorHandler);
      return iterator;
      function eventHandler(...args) {
        const promise = unconsumedPromises.shift();
        if (promise) {
          promise.resolve(createIterResult(args, false));
        } else {
          unconsumedEventValues.push(args);
        }
      }
      function errorHandler(err) {
        finished2 = true;
        const toError = unconsumedPromises.shift();
        if (toError) {
          toError.reject(err);
        } else {
          error = err;
        }
        iterator.return();
      }
    };
    ({
      EventEmitter,
      defaultMaxListeners,
      init,
      listenerCount,
      on,
      once
    } = y);
  }
});

// ../../node_modules/@jspm/core/nodelibs/browser/chunk-5decc758.js
function i2() {
  throw new Error("setTimeout has not been defined");
}
function u2() {
  throw new Error("clearTimeout has not been defined");
}
function c2(e5) {
  if (t2 === setTimeout)
    return setTimeout(e5, 0);
  if ((t2 === i2 || !t2) && setTimeout)
    return t2 = setTimeout, setTimeout(e5, 0);
  try {
    return t2(e5, 0);
  } catch (n5) {
    try {
      return t2.call(null, e5, 0);
    } catch (n6) {
      return t2.call(this || r2, e5, 0);
    }
  }
}
function h2() {
  f2 && l2 && (f2 = false, l2.length ? s2 = l2.concat(s2) : a2 = -1, s2.length && d());
}
function d() {
  if (!f2) {
    var e5 = c2(h2);
    f2 = true;
    for (var t5 = s2.length; t5; ) {
      for (l2 = s2, s2 = []; ++a2 < t5; )
        l2 && l2[a2].run();
      a2 = -1, t5 = s2.length;
    }
    l2 = null, f2 = false, function(e6) {
      if (n2 === clearTimeout)
        return clearTimeout(e6);
      if ((n2 === u2 || !n2) && clearTimeout)
        return n2 = clearTimeout, clearTimeout(e6);
      try {
        n2(e6);
      } catch (t6) {
        try {
          return n2.call(null, e6);
        } catch (t7) {
          return n2.call(this || r2, e6);
        }
      }
    }(e5);
  }
}
function m(e5, t5) {
  (this || r2).fun = e5, (this || r2).array = t5;
}
function p2() {
}
var e2, t2, n2, r2, o2, l2, s2, f2, a2, T;
var init_chunk_5decc758 = __esm({
  "../../node_modules/@jspm/core/nodelibs/browser/chunk-5decc758.js"() {
    r2 = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : globalThis;
    o2 = e2 = {};
    !function() {
      try {
        t2 = "function" == typeof setTimeout ? setTimeout : i2;
      } catch (e5) {
        t2 = i2;
      }
      try {
        n2 = "function" == typeof clearTimeout ? clearTimeout : u2;
      } catch (e5) {
        n2 = u2;
      }
    }();
    s2 = [];
    f2 = false;
    a2 = -1;
    o2.nextTick = function(e5) {
      var t5 = new Array(arguments.length - 1);
      if (arguments.length > 1)
        for (var n5 = 1; n5 < arguments.length; n5++)
          t5[n5 - 1] = arguments[n5];
      s2.push(new m(e5, t5)), 1 !== s2.length || f2 || c2(d);
    }, m.prototype.run = function() {
      (this || r2).fun.apply(null, (this || r2).array);
    }, o2.title = "browser", o2.browser = true, o2.env = {}, o2.argv = [], o2.version = "", o2.versions = {}, o2.on = p2, o2.addListener = p2, o2.once = p2, o2.off = p2, o2.removeListener = p2, o2.removeAllListeners = p2, o2.emit = p2, o2.prependListener = p2, o2.prependOnceListener = p2, o2.listeners = function(e5) {
      return [];
    }, o2.binding = function(e5) {
      throw new Error("process.binding is not supported");
    }, o2.cwd = function() {
      return "/";
    }, o2.chdir = function(e5) {
      throw new Error("process.chdir is not supported");
    }, o2.umask = function() {
      return 0;
    };
    T = e2;
    T.addListener;
    T.argv;
    T.binding;
    T.browser;
    T.chdir;
    T.cwd;
    T.emit;
    T.env;
    T.listeners;
    T.nextTick;
    T.off;
    T.on;
    T.once;
    T.prependListener;
    T.prependOnceListener;
    T.removeAllListeners;
    T.removeListener;
    T.title;
    T.umask;
    T.version;
    T.versions;
  }
});

// ../../node_modules/@jspm/core/nodelibs/browser/chunk-b4205b57.js
function c$1(e5) {
  return e5.call.bind(e5);
}
function O(e5, t5) {
  if ("object" != typeof e5)
    return false;
  try {
    return t5(e5), true;
  } catch (e6) {
    return false;
  }
}
function S(e5) {
  return l$1 && y2 ? void 0 !== b(e5) : B(e5) || k(e5) || E(e5) || D(e5) || U(e5) || P(e5) || x(e5) || I(e5) || M(e5) || z(e5) || F(e5);
}
function B(e5) {
  return l$1 && y2 ? "Uint8Array" === b(e5) : "[object Uint8Array]" === m2(e5) || u$1(e5) && void 0 !== e5.buffer;
}
function k(e5) {
  return l$1 && y2 ? "Uint8ClampedArray" === b(e5) : "[object Uint8ClampedArray]" === m2(e5);
}
function E(e5) {
  return l$1 && y2 ? "Uint16Array" === b(e5) : "[object Uint16Array]" === m2(e5);
}
function D(e5) {
  return l$1 && y2 ? "Uint32Array" === b(e5) : "[object Uint32Array]" === m2(e5);
}
function U(e5) {
  return l$1 && y2 ? "Int8Array" === b(e5) : "[object Int8Array]" === m2(e5);
}
function P(e5) {
  return l$1 && y2 ? "Int16Array" === b(e5) : "[object Int16Array]" === m2(e5);
}
function x(e5) {
  return l$1 && y2 ? "Int32Array" === b(e5) : "[object Int32Array]" === m2(e5);
}
function I(e5) {
  return l$1 && y2 ? "Float32Array" === b(e5) : "[object Float32Array]" === m2(e5);
}
function M(e5) {
  return l$1 && y2 ? "Float64Array" === b(e5) : "[object Float64Array]" === m2(e5);
}
function z(e5) {
  return l$1 && y2 ? "BigInt64Array" === b(e5) : "[object BigInt64Array]" === m2(e5);
}
function F(e5) {
  return l$1 && y2 ? "BigUint64Array" === b(e5) : "[object BigUint64Array]" === m2(e5);
}
function T2(e5) {
  return "[object Map]" === m2(e5);
}
function N(e5) {
  return "[object Set]" === m2(e5);
}
function W(e5) {
  return "[object WeakMap]" === m2(e5);
}
function $(e5) {
  return "[object WeakSet]" === m2(e5);
}
function C(e5) {
  return "[object ArrayBuffer]" === m2(e5);
}
function V(e5) {
  return "undefined" != typeof ArrayBuffer && (C.working ? C(e5) : e5 instanceof ArrayBuffer);
}
function G(e5) {
  return "[object DataView]" === m2(e5);
}
function R(e5) {
  return "undefined" != typeof DataView && (G.working ? G(e5) : e5 instanceof DataView);
}
function J(e5) {
  return "[object SharedArrayBuffer]" === m2(e5);
}
function _(e5) {
  return "undefined" != typeof SharedArrayBuffer && (J.working ? J(e5) : e5 instanceof SharedArrayBuffer);
}
function H(e5) {
  return O(e5, h3);
}
function Z(e5) {
  return O(e5, j);
}
function q(e5) {
  return O(e5, A);
}
function K(e5) {
  return s3 && O(e5, w);
}
function L(e5) {
  return p3 && O(e5, v2);
}
function oe(e5, t5) {
  var r5 = { seen: [], stylize: fe };
  return arguments.length >= 3 && (r5.depth = arguments[2]), arguments.length >= 4 && (r5.colors = arguments[3]), ye(t5) ? r5.showHidden = t5 : t5 && X._extend(r5, t5), be(r5.showHidden) && (r5.showHidden = false), be(r5.depth) && (r5.depth = 2), be(r5.colors) && (r5.colors = false), be(r5.customInspect) && (r5.customInspect = true), r5.colors && (r5.stylize = ue), ae(r5, e5, r5.depth);
}
function ue(e5, t5) {
  var r5 = oe.styles[t5];
  return r5 ? "\x1B[" + oe.colors[r5][0] + "m" + e5 + "\x1B[" + oe.colors[r5][1] + "m" : e5;
}
function fe(e5, t5) {
  return e5;
}
function ae(e5, t5, r5) {
  if (e5.customInspect && t5 && we(t5.inspect) && t5.inspect !== X.inspect && (!t5.constructor || t5.constructor.prototype !== t5)) {
    var n5 = t5.inspect(r5, e5);
    return ge(n5) || (n5 = ae(e5, n5, r5)), n5;
  }
  var i5 = function(e6, t6) {
    if (be(t6))
      return e6.stylize("undefined", "undefined");
    if (ge(t6)) {
      var r6 = "'" + JSON.stringify(t6).replace(/^"|"$/g, "").replace(/'/g, "\\'").replace(/\\"/g, '"') + "'";
      return e6.stylize(r6, "string");
    }
    if (de(t6))
      return e6.stylize("" + t6, "number");
    if (ye(t6))
      return e6.stylize("" + t6, "boolean");
    if (le(t6))
      return e6.stylize("null", "null");
  }(e5, t5);
  if (i5)
    return i5;
  var o5 = Object.keys(t5), u5 = function(e6) {
    var t6 = {};
    return e6.forEach(function(e7, r6) {
      t6[e7] = true;
    }), t6;
  }(o5);
  if (e5.showHidden && (o5 = Object.getOwnPropertyNames(t5)), Ae(t5) && (o5.indexOf("message") >= 0 || o5.indexOf("description") >= 0))
    return ce(t5);
  if (0 === o5.length) {
    if (we(t5)) {
      var f5 = t5.name ? ": " + t5.name : "";
      return e5.stylize("[Function" + f5 + "]", "special");
    }
    if (me(t5))
      return e5.stylize(RegExp.prototype.toString.call(t5), "regexp");
    if (je(t5))
      return e5.stylize(Date.prototype.toString.call(t5), "date");
    if (Ae(t5))
      return ce(t5);
  }
  var a5, c5 = "", s5 = false, p5 = ["{", "}"];
  (pe(t5) && (s5 = true, p5 = ["[", "]"]), we(t5)) && (c5 = " [Function" + (t5.name ? ": " + t5.name : "") + "]");
  return me(t5) && (c5 = " " + RegExp.prototype.toString.call(t5)), je(t5) && (c5 = " " + Date.prototype.toUTCString.call(t5)), Ae(t5) && (c5 = " " + ce(t5)), 0 !== o5.length || s5 && 0 != t5.length ? r5 < 0 ? me(t5) ? e5.stylize(RegExp.prototype.toString.call(t5), "regexp") : e5.stylize("[Object]", "special") : (e5.seen.push(t5), a5 = s5 ? function(e6, t6, r6, n6, i6) {
    for (var o6 = [], u6 = 0, f6 = t6.length; u6 < f6; ++u6)
      ke(t6, String(u6)) ? o6.push(se(e6, t6, r6, n6, String(u6), true)) : o6.push("");
    return i6.forEach(function(i7) {
      i7.match(/^\d+$/) || o6.push(se(e6, t6, r6, n6, i7, true));
    }), o6;
  }(e5, t5, r5, u5, o5) : o5.map(function(n6) {
    return se(e5, t5, r5, u5, n6, s5);
  }), e5.seen.pop(), function(e6, t6, r6) {
    var n6 = 0;
    if (e6.reduce(function(e7, t7) {
      return n6++, t7.indexOf("\n") >= 0 && n6++, e7 + t7.replace(/\u001b\[\d\d?m/g, "").length + 1;
    }, 0) > 60)
      return r6[0] + ("" === t6 ? "" : t6 + "\n ") + " " + e6.join(",\n  ") + " " + r6[1];
    return r6[0] + t6 + " " + e6.join(", ") + " " + r6[1];
  }(a5, c5, p5)) : p5[0] + c5 + p5[1];
}
function ce(e5) {
  return "[" + Error.prototype.toString.call(e5) + "]";
}
function se(e5, t5, r5, n5, i5, o5) {
  var u5, f5, a5;
  if ((a5 = Object.getOwnPropertyDescriptor(t5, i5) || { value: t5[i5] }).get ? f5 = a5.set ? e5.stylize("[Getter/Setter]", "special") : e5.stylize("[Getter]", "special") : a5.set && (f5 = e5.stylize("[Setter]", "special")), ke(n5, i5) || (u5 = "[" + i5 + "]"), f5 || (e5.seen.indexOf(a5.value) < 0 ? (f5 = le(r5) ? ae(e5, a5.value, null) : ae(e5, a5.value, r5 - 1)).indexOf("\n") > -1 && (f5 = o5 ? f5.split("\n").map(function(e6) {
    return "  " + e6;
  }).join("\n").substr(2) : "\n" + f5.split("\n").map(function(e6) {
    return "   " + e6;
  }).join("\n")) : f5 = e5.stylize("[Circular]", "special")), be(u5)) {
    if (o5 && i5.match(/^\d+$/))
      return f5;
    (u5 = JSON.stringify("" + i5)).match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/) ? (u5 = u5.substr(1, u5.length - 2), u5 = e5.stylize(u5, "name")) : (u5 = u5.replace(/'/g, "\\'").replace(/\\"/g, '"').replace(/(^"|"$)/g, "'"), u5 = e5.stylize(u5, "string"));
  }
  return u5 + ": " + f5;
}
function pe(e5) {
  return Array.isArray(e5);
}
function ye(e5) {
  return "boolean" == typeof e5;
}
function le(e5) {
  return null === e5;
}
function de(e5) {
  return "number" == typeof e5;
}
function ge(e5) {
  return "string" == typeof e5;
}
function be(e5) {
  return void 0 === e5;
}
function me(e5) {
  return he(e5) && "[object RegExp]" === ve(e5);
}
function he(e5) {
  return "object" == typeof e5 && null !== e5;
}
function je(e5) {
  return he(e5) && "[object Date]" === ve(e5);
}
function Ae(e5) {
  return he(e5) && ("[object Error]" === ve(e5) || e5 instanceof Error);
}
function we(e5) {
  return "function" == typeof e5;
}
function ve(e5) {
  return Object.prototype.toString.call(e5);
}
function Oe(e5) {
  return e5 < 10 ? "0" + e5.toString(10) : e5.toString(10);
}
function Be() {
  var e5 = /* @__PURE__ */ new Date(), t5 = [Oe(e5.getHours()), Oe(e5.getMinutes()), Oe(e5.getSeconds())].join(":");
  return [e5.getDate(), Se[e5.getMonth()], t5].join(" ");
}
function ke(e5, t5) {
  return Object.prototype.hasOwnProperty.call(e5, t5);
}
function De(e5, t5) {
  if (!e5) {
    var r5 = new Error("Promise was rejected with a falsy value");
    r5.reason = e5, e5 = r5;
  }
  return t5(e5);
}
var t3, e3, o3, n3, r3, l3, t$1, o$1, n$1, e$1, r$1, c3, u3, i3, t$2, i$1, o$2, u$1, f3, a3, s3, p3, y2, l$1, d2, m2, h3, j, A, Q, X, Y, ee, te, re, ne, ie, Se, Ee;
var init_chunk_b4205b57 = __esm({
  "../../node_modules/@jspm/core/nodelibs/browser/chunk-b4205b57.js"() {
    init_chunk_5decc758();
    t3 = "function" == typeof Symbol && "symbol" == typeof Symbol.toStringTag;
    e3 = Object.prototype.toString;
    o3 = function(o5) {
      return !(t3 && o5 && "object" == typeof o5 && Symbol.toStringTag in o5) && "[object Arguments]" === e3.call(o5);
    };
    n3 = function(t5) {
      return !!o3(t5) || null !== t5 && "object" == typeof t5 && "number" == typeof t5.length && t5.length >= 0 && "[object Array]" !== e3.call(t5) && "[object Function]" === e3.call(t5.callee);
    };
    r3 = function() {
      return o3(arguments);
    }();
    o3.isLegacyArguments = n3;
    l3 = r3 ? o3 : n3;
    t$1 = Object.prototype.toString;
    o$1 = Function.prototype.toString;
    n$1 = /^\s*(?:function)?\*/;
    e$1 = "function" == typeof Symbol && "symbol" == typeof Symbol.toStringTag;
    r$1 = Object.getPrototypeOf;
    c3 = function() {
      if (!e$1)
        return false;
      try {
        return Function("return function*() {}")();
      } catch (t5) {
      }
    }();
    u3 = c3 ? r$1(c3) : {};
    i3 = function(c5) {
      return "function" == typeof c5 && (!!n$1.test(o$1.call(c5)) || (e$1 ? r$1(c5) === u3 : "[object GeneratorFunction]" === t$1.call(c5)));
    };
    t$2 = "function" == typeof Object.create ? function(t5, e5) {
      e5 && (t5.super_ = e5, t5.prototype = Object.create(e5.prototype, { constructor: { value: t5, enumerable: false, writable: true, configurable: true } }));
    } : function(t5, e5) {
      if (e5) {
        t5.super_ = e5;
        var o5 = function() {
        };
        o5.prototype = e5.prototype, t5.prototype = new o5(), t5.prototype.constructor = t5;
      }
    };
    i$1 = function(e5) {
      return e5 && "object" == typeof e5 && "function" == typeof e5.copy && "function" == typeof e5.fill && "function" == typeof e5.readUInt8;
    };
    o$2 = {};
    u$1 = i$1;
    f3 = l3;
    a3 = i3;
    s3 = "undefined" != typeof BigInt;
    p3 = "undefined" != typeof Symbol;
    y2 = p3 && void 0 !== Symbol.toStringTag;
    l$1 = "undefined" != typeof Uint8Array;
    d2 = "undefined" != typeof ArrayBuffer;
    if (l$1 && y2)
      var g = Object.getPrototypeOf(Uint8Array.prototype), b = c$1(Object.getOwnPropertyDescriptor(g, Symbol.toStringTag).get);
    m2 = c$1(Object.prototype.toString);
    h3 = c$1(Number.prototype.valueOf);
    j = c$1(String.prototype.valueOf);
    A = c$1(Boolean.prototype.valueOf);
    if (s3)
      var w = c$1(BigInt.prototype.valueOf);
    if (p3)
      var v2 = c$1(Symbol.prototype.valueOf);
    o$2.isArgumentsObject = f3, o$2.isGeneratorFunction = a3, o$2.isPromise = function(e5) {
      return "undefined" != typeof Promise && e5 instanceof Promise || null !== e5 && "object" == typeof e5 && "function" == typeof e5.then && "function" == typeof e5.catch;
    }, o$2.isArrayBufferView = function(e5) {
      return d2 && ArrayBuffer.isView ? ArrayBuffer.isView(e5) : S(e5) || R(e5);
    }, o$2.isTypedArray = S, o$2.isUint8Array = B, o$2.isUint8ClampedArray = k, o$2.isUint16Array = E, o$2.isUint32Array = D, o$2.isInt8Array = U, o$2.isInt16Array = P, o$2.isInt32Array = x, o$2.isFloat32Array = I, o$2.isFloat64Array = M, o$2.isBigInt64Array = z, o$2.isBigUint64Array = F, T2.working = "undefined" != typeof Map && T2(/* @__PURE__ */ new Map()), o$2.isMap = function(e5) {
      return "undefined" != typeof Map && (T2.working ? T2(e5) : e5 instanceof Map);
    }, N.working = "undefined" != typeof Set && N(/* @__PURE__ */ new Set()), o$2.isSet = function(e5) {
      return "undefined" != typeof Set && (N.working ? N(e5) : e5 instanceof Set);
    }, W.working = "undefined" != typeof WeakMap && W(/* @__PURE__ */ new WeakMap()), o$2.isWeakMap = function(e5) {
      return "undefined" != typeof WeakMap && (W.working ? W(e5) : e5 instanceof WeakMap);
    }, $.working = "undefined" != typeof WeakSet && $(/* @__PURE__ */ new WeakSet()), o$2.isWeakSet = function(e5) {
      return $(e5);
    }, C.working = "undefined" != typeof ArrayBuffer && C(new ArrayBuffer()), o$2.isArrayBuffer = V, G.working = "undefined" != typeof ArrayBuffer && "undefined" != typeof DataView && G(new DataView(new ArrayBuffer(1), 0, 1)), o$2.isDataView = R, J.working = "undefined" != typeof SharedArrayBuffer && J(new SharedArrayBuffer()), o$2.isSharedArrayBuffer = _, o$2.isAsyncFunction = function(e5) {
      return "[object AsyncFunction]" === m2(e5);
    }, o$2.isMapIterator = function(e5) {
      return "[object Map Iterator]" === m2(e5);
    }, o$2.isSetIterator = function(e5) {
      return "[object Set Iterator]" === m2(e5);
    }, o$2.isGeneratorObject = function(e5) {
      return "[object Generator]" === m2(e5);
    }, o$2.isWebAssemblyCompiledModule = function(e5) {
      return "[object WebAssembly.Module]" === m2(e5);
    }, o$2.isNumberObject = H, o$2.isStringObject = Z, o$2.isBooleanObject = q, o$2.isBigIntObject = K, o$2.isSymbolObject = L, o$2.isBoxedPrimitive = function(e5) {
      return H(e5) || Z(e5) || q(e5) || K(e5) || L(e5);
    }, o$2.isAnyArrayBuffer = function(e5) {
      return l$1 && (V(e5) || _(e5));
    }, ["isProxy", "isExternal", "isModuleNamespaceObject"].forEach(function(e5) {
      Object.defineProperty(o$2, e5, { enumerable: false, value: function() {
        throw new Error(e5 + " is not supported in userland");
      } });
    });
    Q = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : globalThis;
    X = {};
    Y = T;
    ee = Object.getOwnPropertyDescriptors || function(e5) {
      for (var t5 = Object.keys(e5), r5 = {}, n5 = 0; n5 < t5.length; n5++)
        r5[t5[n5]] = Object.getOwnPropertyDescriptor(e5, t5[n5]);
      return r5;
    };
    te = /%[sdj%]/g;
    X.format = function(e5) {
      if (!ge(e5)) {
        for (var t5 = [], r5 = 0; r5 < arguments.length; r5++)
          t5.push(oe(arguments[r5]));
        return t5.join(" ");
      }
      r5 = 1;
      for (var n5 = arguments, i5 = n5.length, o5 = String(e5).replace(te, function(e6) {
        if ("%%" === e6)
          return "%";
        if (r5 >= i5)
          return e6;
        switch (e6) {
          case "%s":
            return String(n5[r5++]);
          case "%d":
            return Number(n5[r5++]);
          case "%j":
            try {
              return JSON.stringify(n5[r5++]);
            } catch (e7) {
              return "[Circular]";
            }
          default:
            return e6;
        }
      }), u5 = n5[r5]; r5 < i5; u5 = n5[++r5])
        le(u5) || !he(u5) ? o5 += " " + u5 : o5 += " " + oe(u5);
      return o5;
    }, X.deprecate = function(e5, t5) {
      if (void 0 !== Y && true === Y.noDeprecation)
        return e5;
      if (void 0 === Y)
        return function() {
          return X.deprecate(e5, t5).apply(this || Q, arguments);
        };
      var r5 = false;
      return function() {
        if (!r5) {
          if (Y.throwDeprecation)
            throw new Error(t5);
          Y.traceDeprecation ? console.trace(t5) : console.error(t5), r5 = true;
        }
        return e5.apply(this || Q, arguments);
      };
    };
    re = {};
    ne = /^$/;
    if (Y.env.NODE_DEBUG) {
      ie = Y.env.NODE_DEBUG;
      ie = ie.replace(/[|\\{}()[\]^$+?.]/g, "\\$&").replace(/\*/g, ".*").replace(/,/g, "$|^").toUpperCase(), ne = new RegExp("^" + ie + "$", "i");
    }
    X.debuglog = function(e5) {
      if (e5 = e5.toUpperCase(), !re[e5])
        if (ne.test(e5)) {
          var t5 = Y.pid;
          re[e5] = function() {
            var r5 = X.format.apply(X, arguments);
            console.error("%s %d: %s", e5, t5, r5);
          };
        } else
          re[e5] = function() {
          };
      return re[e5];
    }, X.inspect = oe, oe.colors = { bold: [1, 22], italic: [3, 23], underline: [4, 24], inverse: [7, 27], white: [37, 39], grey: [90, 39], black: [30, 39], blue: [34, 39], cyan: [36, 39], green: [32, 39], magenta: [35, 39], red: [31, 39], yellow: [33, 39] }, oe.styles = { special: "cyan", number: "yellow", boolean: "yellow", undefined: "grey", null: "bold", string: "green", date: "magenta", regexp: "red" }, X.types = o$2, X.isArray = pe, X.isBoolean = ye, X.isNull = le, X.isNullOrUndefined = function(e5) {
      return null == e5;
    }, X.isNumber = de, X.isString = ge, X.isSymbol = function(e5) {
      return "symbol" == typeof e5;
    }, X.isUndefined = be, X.isRegExp = me, X.types.isRegExp = me, X.isObject = he, X.isDate = je, X.types.isDate = je, X.isError = Ae, X.types.isNativeError = Ae, X.isFunction = we, X.isPrimitive = function(e5) {
      return null === e5 || "boolean" == typeof e5 || "number" == typeof e5 || "string" == typeof e5 || "symbol" == typeof e5 || void 0 === e5;
    }, X.isBuffer = i$1;
    Se = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    X.log = function() {
      console.log("%s - %s", Be(), X.format.apply(X, arguments));
    }, X.inherits = t$2, X._extend = function(e5, t5) {
      if (!t5 || !he(t5))
        return e5;
      for (var r5 = Object.keys(t5), n5 = r5.length; n5--; )
        e5[r5[n5]] = t5[r5[n5]];
      return e5;
    };
    Ee = "undefined" != typeof Symbol ? Symbol("util.promisify.custom") : void 0;
    X.promisify = function(e5) {
      if ("function" != typeof e5)
        throw new TypeError('The "original" argument must be of type Function');
      if (Ee && e5[Ee]) {
        var t5;
        if ("function" != typeof (t5 = e5[Ee]))
          throw new TypeError('The "util.promisify.custom" argument must be of type Function');
        return Object.defineProperty(t5, Ee, { value: t5, enumerable: false, writable: false, configurable: true }), t5;
      }
      function t5() {
        for (var t6, r5, n5 = new Promise(function(e6, n6) {
          t6 = e6, r5 = n6;
        }), i5 = [], o5 = 0; o5 < arguments.length; o5++)
          i5.push(arguments[o5]);
        i5.push(function(e6, n6) {
          e6 ? r5(e6) : t6(n6);
        });
        try {
          e5.apply(this || Q, i5);
        } catch (e6) {
          r5(e6);
        }
        return n5;
      }
      return Object.setPrototypeOf(t5, Object.getPrototypeOf(e5)), Ee && Object.defineProperty(t5, Ee, { value: t5, enumerable: false, writable: false, configurable: true }), Object.defineProperties(t5, ee(e5));
    }, X.promisify.custom = Ee, X.callbackify = function(e5) {
      if ("function" != typeof e5)
        throw new TypeError('The "original" argument must be of type Function');
      function t5() {
        for (var t6 = [], r5 = 0; r5 < arguments.length; r5++)
          t6.push(arguments[r5]);
        var n5 = t6.pop();
        if ("function" != typeof n5)
          throw new TypeError("The last argument must be of type Function");
        var i5 = this || Q, o5 = function() {
          return n5.apply(i5, arguments);
        };
        e5.apply(this || Q, t6).then(function(e6) {
          Y.nextTick(o5.bind(null, null, e6));
        }, function(e6) {
          Y.nextTick(De.bind(null, e6, o5));
        });
      }
      return Object.setPrototypeOf(t5, Object.getPrototypeOf(e5)), Object.defineProperties(t5, ee(e5)), t5;
    };
  }
});

// ../../node_modules/@jspm/core/nodelibs/browser/chunk-ce0fbc82.js
var _extend, callbackify, debuglog, deprecate, format, inherits, inspect, isArray, isBoolean, isBuffer, isDate, isError, isFunction, isNull, isNullOrUndefined, isNumber, isObject, isPrimitive, isRegExp, isString, isSymbol, isUndefined, log, promisify, types, TextEncoder, TextDecoder;
var init_chunk_ce0fbc82 = __esm({
  "../../node_modules/@jspm/core/nodelibs/browser/chunk-ce0fbc82.js"() {
    init_chunk_b4205b57();
    init_chunk_5decc758();
    X._extend;
    X.callbackify;
    X.debuglog;
    X.deprecate;
    X.format;
    X.inherits;
    X.inspect;
    X.isArray;
    X.isBoolean;
    X.isBuffer;
    X.isDate;
    X.isError;
    X.isFunction;
    X.isNull;
    X.isNullOrUndefined;
    X.isNumber;
    X.isObject;
    X.isPrimitive;
    X.isRegExp;
    X.isString;
    X.isSymbol;
    X.isUndefined;
    X.log;
    X.promisify;
    _extend = X._extend;
    callbackify = X.callbackify;
    debuglog = X.debuglog;
    deprecate = X.deprecate;
    format = X.format;
    inherits = X.inherits;
    inspect = X.inspect;
    isArray = X.isArray;
    isBoolean = X.isBoolean;
    isBuffer = X.isBuffer;
    isDate = X.isDate;
    isError = X.isError;
    isFunction = X.isFunction;
    isNull = X.isNull;
    isNullOrUndefined = X.isNullOrUndefined;
    isNumber = X.isNumber;
    isObject = X.isObject;
    isPrimitive = X.isPrimitive;
    isRegExp = X.isRegExp;
    isString = X.isString;
    isSymbol = X.isSymbol;
    isUndefined = X.isUndefined;
    log = X.log;
    promisify = X.promisify;
    types = X.types;
    TextEncoder = self.TextEncoder;
    TextDecoder = self.TextDecoder;
  }
});

// ../../node_modules/@jspm/core/nodelibs/browser/chunk-2eac56ff.js
function dew() {
  if (_dewExec)
    return exports;
  _dewExec = true;
  var process2 = exports = {};
  var cachedSetTimeout;
  var cachedClearTimeout;
  function defaultSetTimout() {
    throw new Error("setTimeout has not been defined");
  }
  function defaultClearTimeout() {
    throw new Error("clearTimeout has not been defined");
  }
  (function() {
    try {
      if (typeof setTimeout === "function") {
        cachedSetTimeout = setTimeout;
      } else {
        cachedSetTimeout = defaultSetTimout;
      }
    } catch (e5) {
      cachedSetTimeout = defaultSetTimout;
    }
    try {
      if (typeof clearTimeout === "function") {
        cachedClearTimeout = clearTimeout;
      } else {
        cachedClearTimeout = defaultClearTimeout;
      }
    } catch (e5) {
      cachedClearTimeout = defaultClearTimeout;
    }
  })();
  function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
      return setTimeout(fun, 0);
    }
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
      cachedSetTimeout = setTimeout;
      return setTimeout(fun, 0);
    }
    try {
      return cachedSetTimeout(fun, 0);
    } catch (e5) {
      try {
        return cachedSetTimeout.call(null, fun, 0);
      } catch (e6) {
        return cachedSetTimeout.call(this || _global, fun, 0);
      }
    }
  }
  function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
      return clearTimeout(marker);
    }
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
      cachedClearTimeout = clearTimeout;
      return clearTimeout(marker);
    }
    try {
      return cachedClearTimeout(marker);
    } catch (e5) {
      try {
        return cachedClearTimeout.call(null, marker);
      } catch (e6) {
        return cachedClearTimeout.call(this || _global, marker);
      }
    }
  }
  var queue = [];
  var draining = false;
  var currentQueue;
  var queueIndex = -1;
  function cleanUpNextTick() {
    if (!draining || !currentQueue) {
      return;
    }
    draining = false;
    if (currentQueue.length) {
      queue = currentQueue.concat(queue);
    } else {
      queueIndex = -1;
    }
    if (queue.length) {
      drainQueue();
    }
  }
  function drainQueue() {
    if (draining) {
      return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;
    var len = queue.length;
    while (len) {
      currentQueue = queue;
      queue = [];
      while (++queueIndex < len) {
        if (currentQueue) {
          currentQueue[queueIndex].run();
        }
      }
      queueIndex = -1;
      len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
  }
  process2.nextTick = function(fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
      for (var i5 = 1; i5 < arguments.length; i5++) {
        args[i5 - 1] = arguments[i5];
      }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
      runTimeout(drainQueue);
    }
  };
  function Item(fun, array) {
    (this || _global).fun = fun;
    (this || _global).array = array;
  }
  Item.prototype.run = function() {
    (this || _global).fun.apply(null, (this || _global).array);
  };
  process2.title = "browser";
  process2.browser = true;
  process2.env = {};
  process2.argv = [];
  process2.version = "";
  process2.versions = {};
  function noop() {
  }
  process2.on = noop;
  process2.addListener = noop;
  process2.once = noop;
  process2.off = noop;
  process2.removeListener = noop;
  process2.removeAllListeners = noop;
  process2.emit = noop;
  process2.prependListener = noop;
  process2.prependOnceListener = noop;
  process2.listeners = function(name2) {
    return [];
  };
  process2.binding = function(name2) {
    throw new Error("process.binding is not supported");
  };
  process2.cwd = function() {
    return "/";
  };
  process2.chdir = function(dir) {
    throw new Error("process.chdir is not supported");
  };
  process2.umask = function() {
    return 0;
  };
  return exports;
}
var exports, _dewExec, _global, process;
var init_chunk_2eac56ff = __esm({
  "../../node_modules/@jspm/core/nodelibs/browser/chunk-2eac56ff.js"() {
    exports = {};
    _dewExec = false;
    _global = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : globalThis;
    process = dew();
    process.platform = "browser";
    process.addListener;
    process.argv;
    process.binding;
    process.browser;
    process.chdir;
    process.cwd;
    process.emit;
    process.env;
    process.listeners;
    process.nextTick;
    process.off;
    process.on;
    process.once;
    process.prependListener;
    process.prependOnceListener;
    process.removeAllListeners;
    process.removeListener;
    process.title;
    process.umask;
    process.version;
    process.versions;
  }
});

// ../../node_modules/@jspm/core/nodelibs/browser/chunk-4ccc3a29.js
function u$2(r5) {
  var t5 = r5.length;
  if (t5 % 4 > 0)
    throw new Error("Invalid string. Length must be a multiple of 4");
  var e5 = r5.indexOf("=");
  return -1 === e5 && (e5 = t5), [e5, e5 === t5 ? 0 : 4 - e5 % 4];
}
function c$12(r5, e5, n5) {
  for (var o5, a5, h5 = [], u5 = e5; u5 < n5; u5 += 3)
    o5 = (r5[u5] << 16 & 16711680) + (r5[u5 + 1] << 8 & 65280) + (255 & r5[u5 + 2]), h5.push(t$12[(a5 = o5) >> 18 & 63] + t$12[a5 >> 12 & 63] + t$12[a5 >> 6 & 63] + t$12[63 & a5]);
  return h5.join("");
}
function f$2(t5) {
  if (t5 > 2147483647)
    throw new RangeError('The value "' + t5 + '" is invalid for option "size"');
  var r5 = new Uint8Array(t5);
  return Object.setPrototypeOf(r5, u$1$1.prototype), r5;
}
function u$1$1(t5, r5, e5) {
  if ("number" == typeof t5) {
    if ("string" == typeof r5)
      throw new TypeError('The "string" argument must be of type string. Received type number');
    return a$2(t5);
  }
  return s$1(t5, r5, e5);
}
function s$1(t5, r5, e5) {
  if ("string" == typeof t5)
    return function(t6, r6) {
      "string" == typeof r6 && "" !== r6 || (r6 = "utf8");
      if (!u$1$1.isEncoding(r6))
        throw new TypeError("Unknown encoding: " + r6);
      var e6 = 0 | y3(t6, r6), n6 = f$2(e6), i6 = n6.write(t6, r6);
      i6 !== e6 && (n6 = n6.slice(0, i6));
      return n6;
    }(t5, r5);
  if (ArrayBuffer.isView(t5))
    return p4(t5);
  if (null == t5)
    throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof t5);
  if (F2(t5, ArrayBuffer) || t5 && F2(t5.buffer, ArrayBuffer))
    return c$1$1(t5, r5, e5);
  if ("undefined" != typeof SharedArrayBuffer && (F2(t5, SharedArrayBuffer) || t5 && F2(t5.buffer, SharedArrayBuffer)))
    return c$1$1(t5, r5, e5);
  if ("number" == typeof t5)
    throw new TypeError('The "value" argument must not be of type number. Received type number');
  var n5 = t5.valueOf && t5.valueOf();
  if (null != n5 && n5 !== t5)
    return u$1$1.from(n5, r5, e5);
  var i5 = function(t6) {
    if (u$1$1.isBuffer(t6)) {
      var r6 = 0 | l$12(t6.length), e6 = f$2(r6);
      return 0 === e6.length || t6.copy(e6, 0, 0, r6), e6;
    }
    if (void 0 !== t6.length)
      return "number" != typeof t6.length || N2(t6.length) ? f$2(0) : p4(t6);
    if ("Buffer" === t6.type && Array.isArray(t6.data))
      return p4(t6.data);
  }(t5);
  if (i5)
    return i5;
  if ("undefined" != typeof Symbol && null != Symbol.toPrimitive && "function" == typeof t5[Symbol.toPrimitive])
    return u$1$1.from(t5[Symbol.toPrimitive]("string"), r5, e5);
  throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof t5);
}
function h$1$1(t5) {
  if ("number" != typeof t5)
    throw new TypeError('"size" argument must be of type number');
  if (t5 < 0)
    throw new RangeError('The value "' + t5 + '" is invalid for option "size"');
}
function a$2(t5) {
  return h$1$1(t5), f$2(t5 < 0 ? 0 : 0 | l$12(t5));
}
function p4(t5) {
  for (var r5 = t5.length < 0 ? 0 : 0 | l$12(t5.length), e5 = f$2(r5), n5 = 0; n5 < r5; n5 += 1)
    e5[n5] = 255 & t5[n5];
  return e5;
}
function c$1$1(t5, r5, e5) {
  if (r5 < 0 || t5.byteLength < r5)
    throw new RangeError('"offset" is outside of buffer bounds');
  if (t5.byteLength < r5 + (e5 || 0))
    throw new RangeError('"length" is outside of buffer bounds');
  var n5;
  return n5 = void 0 === r5 && void 0 === e5 ? new Uint8Array(t5) : void 0 === e5 ? new Uint8Array(t5, r5) : new Uint8Array(t5, r5, e5), Object.setPrototypeOf(n5, u$1$1.prototype), n5;
}
function l$12(t5) {
  if (t5 >= 2147483647)
    throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + 2147483647 .toString(16) + " bytes");
  return 0 | t5;
}
function y3(t5, r5) {
  if (u$1$1.isBuffer(t5))
    return t5.length;
  if (ArrayBuffer.isView(t5) || F2(t5, ArrayBuffer))
    return t5.byteLength;
  if ("string" != typeof t5)
    throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof t5);
  var e5 = t5.length, n5 = arguments.length > 2 && true === arguments[2];
  if (!n5 && 0 === e5)
    return 0;
  for (var i5 = false; ; )
    switch (r5) {
      case "ascii":
      case "latin1":
      case "binary":
        return e5;
      case "utf8":
      case "utf-8":
        return _2(t5).length;
      case "ucs2":
      case "ucs-2":
      case "utf16le":
      case "utf-16le":
        return 2 * e5;
      case "hex":
        return e5 >>> 1;
      case "base64":
        return z2(t5).length;
      default:
        if (i5)
          return n5 ? -1 : _2(t5).length;
        r5 = ("" + r5).toLowerCase(), i5 = true;
    }
}
function g2(t5, r5, e5) {
  var n5 = false;
  if ((void 0 === r5 || r5 < 0) && (r5 = 0), r5 > this.length)
    return "";
  if ((void 0 === e5 || e5 > this.length) && (e5 = this.length), e5 <= 0)
    return "";
  if ((e5 >>>= 0) <= (r5 >>>= 0))
    return "";
  for (t5 || (t5 = "utf8"); ; )
    switch (t5) {
      case "hex":
        return O2(this, r5, e5);
      case "utf8":
      case "utf-8":
        return I2(this, r5, e5);
      case "ascii":
        return S2(this, r5, e5);
      case "latin1":
      case "binary":
        return R2(this, r5, e5);
      case "base64":
        return T3(this, r5, e5);
      case "ucs2":
      case "ucs-2":
      case "utf16le":
      case "utf-16le":
        return L2(this, r5, e5);
      default:
        if (n5)
          throw new TypeError("Unknown encoding: " + t5);
        t5 = (t5 + "").toLowerCase(), n5 = true;
    }
}
function w2(t5, r5, e5) {
  var n5 = t5[r5];
  t5[r5] = t5[e5], t5[e5] = n5;
}
function d3(t5, r5, e5, n5, i5) {
  if (0 === t5.length)
    return -1;
  if ("string" == typeof e5 ? (n5 = e5, e5 = 0) : e5 > 2147483647 ? e5 = 2147483647 : e5 < -2147483648 && (e5 = -2147483648), N2(e5 = +e5) && (e5 = i5 ? 0 : t5.length - 1), e5 < 0 && (e5 = t5.length + e5), e5 >= t5.length) {
    if (i5)
      return -1;
    e5 = t5.length - 1;
  } else if (e5 < 0) {
    if (!i5)
      return -1;
    e5 = 0;
  }
  if ("string" == typeof r5 && (r5 = u$1$1.from(r5, n5)), u$1$1.isBuffer(r5))
    return 0 === r5.length ? -1 : v3(t5, r5, e5, n5, i5);
  if ("number" == typeof r5)
    return r5 &= 255, "function" == typeof Uint8Array.prototype.indexOf ? i5 ? Uint8Array.prototype.indexOf.call(t5, r5, e5) : Uint8Array.prototype.lastIndexOf.call(t5, r5, e5) : v3(t5, [r5], e5, n5, i5);
  throw new TypeError("val must be string, number or Buffer");
}
function v3(t5, r5, e5, n5, i5) {
  var o5, f5 = 1, u5 = t5.length, s5 = r5.length;
  if (void 0 !== n5 && ("ucs2" === (n5 = String(n5).toLowerCase()) || "ucs-2" === n5 || "utf16le" === n5 || "utf-16le" === n5)) {
    if (t5.length < 2 || r5.length < 2)
      return -1;
    f5 = 2, u5 /= 2, s5 /= 2, e5 /= 2;
  }
  function h5(t6, r6) {
    return 1 === f5 ? t6[r6] : t6.readUInt16BE(r6 * f5);
  }
  if (i5) {
    var a5 = -1;
    for (o5 = e5; o5 < u5; o5++)
      if (h5(t5, o5) === h5(r5, -1 === a5 ? 0 : o5 - a5)) {
        if (-1 === a5 && (a5 = o5), o5 - a5 + 1 === s5)
          return a5 * f5;
      } else
        -1 !== a5 && (o5 -= o5 - a5), a5 = -1;
  } else
    for (e5 + s5 > u5 && (e5 = u5 - s5), o5 = e5; o5 >= 0; o5--) {
      for (var p5 = true, c5 = 0; c5 < s5; c5++)
        if (h5(t5, o5 + c5) !== h5(r5, c5)) {
          p5 = false;
          break;
        }
      if (p5)
        return o5;
    }
  return -1;
}
function b2(t5, r5, e5, n5) {
  e5 = Number(e5) || 0;
  var i5 = t5.length - e5;
  n5 ? (n5 = Number(n5)) > i5 && (n5 = i5) : n5 = i5;
  var o5 = r5.length;
  n5 > o5 / 2 && (n5 = o5 / 2);
  for (var f5 = 0; f5 < n5; ++f5) {
    var u5 = parseInt(r5.substr(2 * f5, 2), 16);
    if (N2(u5))
      return f5;
    t5[e5 + f5] = u5;
  }
  return f5;
}
function m3(t5, r5, e5, n5) {
  return D2(_2(r5, t5.length - e5), t5, e5, n5);
}
function E2(t5, r5, e5, n5) {
  return D2(function(t6) {
    for (var r6 = [], e6 = 0; e6 < t6.length; ++e6)
      r6.push(255 & t6.charCodeAt(e6));
    return r6;
  }(r5), t5, e5, n5);
}
function B2(t5, r5, e5, n5) {
  return E2(t5, r5, e5, n5);
}
function A2(t5, r5, e5, n5) {
  return D2(z2(r5), t5, e5, n5);
}
function U2(t5, r5, e5, n5) {
  return D2(function(t6, r6) {
    for (var e6, n6, i5, o5 = [], f5 = 0; f5 < t6.length && !((r6 -= 2) < 0); ++f5)
      e6 = t6.charCodeAt(f5), n6 = e6 >> 8, i5 = e6 % 256, o5.push(i5), o5.push(n6);
    return o5;
  }(r5, t5.length - e5), t5, e5, n5);
}
function T3(t5, r5, e5) {
  return 0 === r5 && e5 === t5.length ? n$1$1.fromByteArray(t5) : n$1$1.fromByteArray(t5.slice(r5, e5));
}
function I2(t5, r5, e5) {
  e5 = Math.min(t5.length, e5);
  for (var n5 = [], i5 = r5; i5 < e5; ) {
    var o5, f5, u5, s5, h5 = t5[i5], a5 = null, p5 = h5 > 239 ? 4 : h5 > 223 ? 3 : h5 > 191 ? 2 : 1;
    if (i5 + p5 <= e5)
      switch (p5) {
        case 1:
          h5 < 128 && (a5 = h5);
          break;
        case 2:
          128 == (192 & (o5 = t5[i5 + 1])) && (s5 = (31 & h5) << 6 | 63 & o5) > 127 && (a5 = s5);
          break;
        case 3:
          o5 = t5[i5 + 1], f5 = t5[i5 + 2], 128 == (192 & o5) && 128 == (192 & f5) && (s5 = (15 & h5) << 12 | (63 & o5) << 6 | 63 & f5) > 2047 && (s5 < 55296 || s5 > 57343) && (a5 = s5);
          break;
        case 4:
          o5 = t5[i5 + 1], f5 = t5[i5 + 2], u5 = t5[i5 + 3], 128 == (192 & o5) && 128 == (192 & f5) && 128 == (192 & u5) && (s5 = (15 & h5) << 18 | (63 & o5) << 12 | (63 & f5) << 6 | 63 & u5) > 65535 && s5 < 1114112 && (a5 = s5);
      }
    null === a5 ? (a5 = 65533, p5 = 1) : a5 > 65535 && (a5 -= 65536, n5.push(a5 >>> 10 & 1023 | 55296), a5 = 56320 | 1023 & a5), n5.push(a5), i5 += p5;
  }
  return function(t6) {
    var r6 = t6.length;
    if (r6 <= 4096)
      return String.fromCharCode.apply(String, t6);
    var e6 = "", n6 = 0;
    for (; n6 < r6; )
      e6 += String.fromCharCode.apply(String, t6.slice(n6, n6 += 4096));
    return e6;
  }(n5);
}
function S2(t5, r5, e5) {
  var n5 = "";
  e5 = Math.min(t5.length, e5);
  for (var i5 = r5; i5 < e5; ++i5)
    n5 += String.fromCharCode(127 & t5[i5]);
  return n5;
}
function R2(t5, r5, e5) {
  var n5 = "";
  e5 = Math.min(t5.length, e5);
  for (var i5 = r5; i5 < e5; ++i5)
    n5 += String.fromCharCode(t5[i5]);
  return n5;
}
function O2(t5, r5, e5) {
  var n5 = t5.length;
  (!r5 || r5 < 0) && (r5 = 0), (!e5 || e5 < 0 || e5 > n5) && (e5 = n5);
  for (var i5 = "", o5 = r5; o5 < e5; ++o5)
    i5 += Y2[t5[o5]];
  return i5;
}
function L2(t5, r5, e5) {
  for (var n5 = t5.slice(r5, e5), i5 = "", o5 = 0; o5 < n5.length; o5 += 2)
    i5 += String.fromCharCode(n5[o5] + 256 * n5[o5 + 1]);
  return i5;
}
function x2(t5, r5, e5) {
  if (t5 % 1 != 0 || t5 < 0)
    throw new RangeError("offset is not uint");
  if (t5 + r5 > e5)
    throw new RangeError("Trying to access beyond buffer length");
}
function C2(t5, r5, e5, n5, i5, o5) {
  if (!u$1$1.isBuffer(t5))
    throw new TypeError('"buffer" argument must be a Buffer instance');
  if (r5 > i5 || r5 < o5)
    throw new RangeError('"value" argument is out of bounds');
  if (e5 + n5 > t5.length)
    throw new RangeError("Index out of range");
}
function P2(t5, r5, e5, n5, i5, o5) {
  if (e5 + n5 > t5.length)
    throw new RangeError("Index out of range");
  if (e5 < 0)
    throw new RangeError("Index out of range");
}
function k2(t5, r5, e5, n5, o5) {
  return r5 = +r5, e5 >>>= 0, o5 || P2(t5, 0, e5, 4), i$12.write(t5, r5, e5, n5, 23, 4), e5 + 4;
}
function M2(t5, r5, e5, n5, o5) {
  return r5 = +r5, e5 >>>= 0, o5 || P2(t5, 0, e5, 8), i$12.write(t5, r5, e5, n5, 52, 8), e5 + 8;
}
function _2(t5, r5) {
  var e5;
  r5 = r5 || 1 / 0;
  for (var n5 = t5.length, i5 = null, o5 = [], f5 = 0; f5 < n5; ++f5) {
    if ((e5 = t5.charCodeAt(f5)) > 55295 && e5 < 57344) {
      if (!i5) {
        if (e5 > 56319) {
          (r5 -= 3) > -1 && o5.push(239, 191, 189);
          continue;
        }
        if (f5 + 1 === n5) {
          (r5 -= 3) > -1 && o5.push(239, 191, 189);
          continue;
        }
        i5 = e5;
        continue;
      }
      if (e5 < 56320) {
        (r5 -= 3) > -1 && o5.push(239, 191, 189), i5 = e5;
        continue;
      }
      e5 = 65536 + (i5 - 55296 << 10 | e5 - 56320);
    } else
      i5 && (r5 -= 3) > -1 && o5.push(239, 191, 189);
    if (i5 = null, e5 < 128) {
      if ((r5 -= 1) < 0)
        break;
      o5.push(e5);
    } else if (e5 < 2048) {
      if ((r5 -= 2) < 0)
        break;
      o5.push(e5 >> 6 | 192, 63 & e5 | 128);
    } else if (e5 < 65536) {
      if ((r5 -= 3) < 0)
        break;
      o5.push(e5 >> 12 | 224, e5 >> 6 & 63 | 128, 63 & e5 | 128);
    } else {
      if (!(e5 < 1114112))
        throw new Error("Invalid code point");
      if ((r5 -= 4) < 0)
        break;
      o5.push(e5 >> 18 | 240, e5 >> 12 & 63 | 128, e5 >> 6 & 63 | 128, 63 & e5 | 128);
    }
  }
  return o5;
}
function z2(t5) {
  return n$1$1.toByteArray(function(t6) {
    if ((t6 = (t6 = t6.split("=")[0]).trim().replace(j2, "")).length < 2)
      return "";
    for (; t6.length % 4 != 0; )
      t6 += "=";
    return t6;
  }(t5));
}
function D2(t5, r5, e5, n5) {
  for (var i5 = 0; i5 < n5 && !(i5 + e5 >= r5.length || i5 >= t5.length); ++i5)
    r5[i5 + e5] = t5[i5];
  return i5;
}
function F2(t5, r5) {
  return t5 instanceof r5 || null != t5 && null != t5.constructor && null != t5.constructor.name && t5.constructor.name === r5.name;
}
function N2(t5) {
  return t5 != t5;
}
function t4(r5, e5) {
  for (var n5 in r5)
    e5[n5] = r5[n5];
}
function f4(r5, e5, n5) {
  return o4(r5, e5, n5);
}
function a4(t5) {
  var e5;
  switch (this.encoding = function(t6) {
    var e6 = function(t7) {
      if (!t7)
        return "utf8";
      for (var e7; ; )
        switch (t7) {
          case "utf8":
          case "utf-8":
            return "utf8";
          case "ucs2":
          case "ucs-2":
          case "utf16le":
          case "utf-16le":
            return "utf16le";
          case "latin1":
          case "binary":
            return "latin1";
          case "base64":
          case "ascii":
          case "hex":
            return t7;
          default:
            if (e7)
              return;
            t7 = ("" + t7).toLowerCase(), e7 = true;
        }
    }(t6);
    if ("string" != typeof e6 && (s4.isEncoding === i4 || !i4(t6)))
      throw new Error("Unknown encoding: " + t6);
    return e6 || t6;
  }(t5), this.encoding) {
    case "utf16le":
      this.text = h4, this.end = l4, e5 = 4;
      break;
    case "utf8":
      this.fillLast = n$12, e5 = 4;
      break;
    case "base64":
      this.text = u$12, this.end = o$12, e5 = 3;
      break;
    default:
      return this.write = f$1, this.end = c4, void 0;
  }
  this.lastNeed = 0, this.lastTotal = 0, this.lastChar = s4.allocUnsafe(e5);
}
function r4(t5) {
  return t5 <= 127 ? 0 : t5 >> 5 == 6 ? 2 : t5 >> 4 == 14 ? 3 : t5 >> 3 == 30 ? 4 : t5 >> 6 == 2 ? -1 : -2;
}
function n$12(t5) {
  var e5 = this.lastTotal - this.lastNeed, s5 = function(t6, e6, s6) {
    if (128 != (192 & e6[0]))
      return t6.lastNeed = 0, "\uFFFD";
    if (t6.lastNeed > 1 && e6.length > 1) {
      if (128 != (192 & e6[1]))
        return t6.lastNeed = 1, "\uFFFD";
      if (t6.lastNeed > 2 && e6.length > 2 && 128 != (192 & e6[2]))
        return t6.lastNeed = 2, "\uFFFD";
    }
  }(this, t5);
  return void 0 !== s5 ? s5 : this.lastNeed <= t5.length ? (t5.copy(this.lastChar, e5, 0, this.lastNeed), this.lastChar.toString(this.encoding, 0, this.lastTotal)) : (t5.copy(this.lastChar, e5, 0, t5.length), this.lastNeed -= t5.length, void 0);
}
function h4(t5, e5) {
  if ((t5.length - e5) % 2 == 0) {
    var s5 = t5.toString("utf16le", e5);
    if (s5) {
      var i5 = s5.charCodeAt(s5.length - 1);
      if (i5 >= 55296 && i5 <= 56319)
        return this.lastNeed = 2, this.lastTotal = 4, this.lastChar[0] = t5[t5.length - 2], this.lastChar[1] = t5[t5.length - 1], s5.slice(0, -1);
    }
    return s5;
  }
  return this.lastNeed = 1, this.lastTotal = 2, this.lastChar[0] = t5[t5.length - 1], t5.toString("utf16le", e5, t5.length - 1);
}
function l4(t5) {
  var e5 = t5 && t5.length ? this.write(t5) : "";
  if (this.lastNeed) {
    var s5 = this.lastTotal - this.lastNeed;
    return e5 + this.lastChar.toString("utf16le", 0, s5);
  }
  return e5;
}
function u$12(t5, e5) {
  var s5 = (t5.length - e5) % 3;
  return 0 === s5 ? t5.toString("base64", e5) : (this.lastNeed = 3 - s5, this.lastTotal = 3, 1 === s5 ? this.lastChar[0] = t5[t5.length - 1] : (this.lastChar[0] = t5[t5.length - 2], this.lastChar[1] = t5[t5.length - 1]), t5.toString("base64", e5, t5.length - s5));
}
function o$12(t5) {
  var e5 = t5 && t5.length ? this.write(t5) : "";
  return this.lastNeed ? e5 + this.lastChar.toString("base64", 0, 3 - this.lastNeed) : e5;
}
function f$1(t5) {
  return t5.toString(this.encoding);
}
function c4(t5) {
  return t5 && t5.length ? this.write(t5) : "";
}
var r$12, t$12, e$2, n$2, o$22, a$1, h$1, a$1$1, e$1$1, n$1$1, i$12, o$1$1, j2, Y2, e4, n4, o4, u4, e$12, s4, i4;
var init_chunk_4ccc3a29 = __esm({
  "../../node_modules/@jspm/core/nodelibs/browser/chunk-4ccc3a29.js"() {
    for (r$12 = { byteLength: function(r5) {
      var t5 = u$2(r5), e5 = t5[0], n5 = t5[1];
      return 3 * (e5 + n5) / 4 - n5;
    }, toByteArray: function(r5) {
      var t5, o5, a5 = u$2(r5), h5 = a5[0], c5 = a5[1], d4 = new n$2(function(r6, t6, e5) {
        return 3 * (t6 + e5) / 4 - e5;
      }(0, h5, c5)), f5 = 0, A3 = c5 > 0 ? h5 - 4 : h5;
      for (o5 = 0; o5 < A3; o5 += 4)
        t5 = e$2[r5.charCodeAt(o5)] << 18 | e$2[r5.charCodeAt(o5 + 1)] << 12 | e$2[r5.charCodeAt(o5 + 2)] << 6 | e$2[r5.charCodeAt(o5 + 3)], d4[f5++] = t5 >> 16 & 255, d4[f5++] = t5 >> 8 & 255, d4[f5++] = 255 & t5;
      2 === c5 && (t5 = e$2[r5.charCodeAt(o5)] << 2 | e$2[r5.charCodeAt(o5 + 1)] >> 4, d4[f5++] = 255 & t5);
      1 === c5 && (t5 = e$2[r5.charCodeAt(o5)] << 10 | e$2[r5.charCodeAt(o5 + 1)] << 4 | e$2[r5.charCodeAt(o5 + 2)] >> 2, d4[f5++] = t5 >> 8 & 255, d4[f5++] = 255 & t5);
      return d4;
    }, fromByteArray: function(r5) {
      for (var e5, n5 = r5.length, o5 = n5 % 3, a5 = [], h5 = 0, u5 = n5 - o5; h5 < u5; h5 += 16383)
        a5.push(c$12(r5, h5, h5 + 16383 > u5 ? u5 : h5 + 16383));
      1 === o5 ? (e5 = r5[n5 - 1], a5.push(t$12[e5 >> 2] + t$12[e5 << 4 & 63] + "==")) : 2 === o5 && (e5 = (r5[n5 - 2] << 8) + r5[n5 - 1], a5.push(t$12[e5 >> 10] + t$12[e5 >> 4 & 63] + t$12[e5 << 2 & 63] + "="));
      return a5.join("");
    } }, t$12 = [], e$2 = [], n$2 = "undefined" != typeof Uint8Array ? Uint8Array : Array, o$22 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", a$1 = 0, h$1 = o$22.length; a$1 < h$1; ++a$1)
      t$12[a$1] = o$22[a$1], e$2[o$22.charCodeAt(a$1)] = a$1;
    e$2["-".charCodeAt(0)] = 62, e$2["_".charCodeAt(0)] = 63;
    a$1$1 = { read: function(a5, t5, o5, r5, h5) {
      var M3, f5, p5 = 8 * h5 - r5 - 1, w3 = (1 << p5) - 1, e5 = w3 >> 1, i5 = -7, N3 = o5 ? h5 - 1 : 0, n5 = o5 ? -1 : 1, u5 = a5[t5 + N3];
      for (N3 += n5, M3 = u5 & (1 << -i5) - 1, u5 >>= -i5, i5 += p5; i5 > 0; M3 = 256 * M3 + a5[t5 + N3], N3 += n5, i5 -= 8)
        ;
      for (f5 = M3 & (1 << -i5) - 1, M3 >>= -i5, i5 += r5; i5 > 0; f5 = 256 * f5 + a5[t5 + N3], N3 += n5, i5 -= 8)
        ;
      if (0 === M3)
        M3 = 1 - e5;
      else {
        if (M3 === w3)
          return f5 ? NaN : 1 / 0 * (u5 ? -1 : 1);
        f5 += Math.pow(2, r5), M3 -= e5;
      }
      return (u5 ? -1 : 1) * f5 * Math.pow(2, M3 - r5);
    }, write: function(a5, t5, o5, r5, h5, M3) {
      var f5, p5, w3, e5 = 8 * M3 - h5 - 1, i5 = (1 << e5) - 1, N3 = i5 >> 1, n5 = 23 === h5 ? Math.pow(2, -24) - Math.pow(2, -77) : 0, u5 = r5 ? 0 : M3 - 1, l5 = r5 ? 1 : -1, s5 = t5 < 0 || 0 === t5 && 1 / t5 < 0 ? 1 : 0;
      for (t5 = Math.abs(t5), isNaN(t5) || t5 === 1 / 0 ? (p5 = isNaN(t5) ? 1 : 0, f5 = i5) : (f5 = Math.floor(Math.log(t5) / Math.LN2), t5 * (w3 = Math.pow(2, -f5)) < 1 && (f5--, w3 *= 2), (t5 += f5 + N3 >= 1 ? n5 / w3 : n5 * Math.pow(2, 1 - N3)) * w3 >= 2 && (f5++, w3 /= 2), f5 + N3 >= i5 ? (p5 = 0, f5 = i5) : f5 + N3 >= 1 ? (p5 = (t5 * w3 - 1) * Math.pow(2, h5), f5 += N3) : (p5 = t5 * Math.pow(2, N3 - 1) * Math.pow(2, h5), f5 = 0)); h5 >= 8; a5[o5 + u5] = 255 & p5, u5 += l5, p5 /= 256, h5 -= 8)
        ;
      for (f5 = f5 << h5 | p5, e5 += h5; e5 > 0; a5[o5 + u5] = 255 & f5, u5 += l5, f5 /= 256, e5 -= 8)
        ;
      a5[o5 + u5 - l5] |= 128 * s5;
    } };
    e$1$1 = {};
    n$1$1 = r$12;
    i$12 = a$1$1;
    o$1$1 = "function" == typeof Symbol && "function" == typeof Symbol.for ? Symbol.for("nodejs.util.inspect.custom") : null;
    e$1$1.Buffer = u$1$1, e$1$1.SlowBuffer = function(t5) {
      +t5 != t5 && (t5 = 0);
      return u$1$1.alloc(+t5);
    }, e$1$1.INSPECT_MAX_BYTES = 50;
    e$1$1.kMaxLength = 2147483647, u$1$1.TYPED_ARRAY_SUPPORT = function() {
      try {
        var t5 = new Uint8Array(1), r5 = { foo: function() {
          return 42;
        } };
        return Object.setPrototypeOf(r5, Uint8Array.prototype), Object.setPrototypeOf(t5, r5), 42 === t5.foo();
      } catch (t6) {
        return false;
      }
    }(), u$1$1.TYPED_ARRAY_SUPPORT || "undefined" == typeof console || "function" != typeof console.error || console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."), Object.defineProperty(u$1$1.prototype, "parent", { enumerable: true, get: function() {
      if (u$1$1.isBuffer(this))
        return this.buffer;
    } }), Object.defineProperty(u$1$1.prototype, "offset", { enumerable: true, get: function() {
      if (u$1$1.isBuffer(this))
        return this.byteOffset;
    } }), u$1$1.poolSize = 8192, u$1$1.from = function(t5, r5, e5) {
      return s$1(t5, r5, e5);
    }, Object.setPrototypeOf(u$1$1.prototype, Uint8Array.prototype), Object.setPrototypeOf(u$1$1, Uint8Array), u$1$1.alloc = function(t5, r5, e5) {
      return function(t6, r6, e6) {
        return h$1$1(t6), t6 <= 0 ? f$2(t6) : void 0 !== r6 ? "string" == typeof e6 ? f$2(t6).fill(r6, e6) : f$2(t6).fill(r6) : f$2(t6);
      }(t5, r5, e5);
    }, u$1$1.allocUnsafe = function(t5) {
      return a$2(t5);
    }, u$1$1.allocUnsafeSlow = function(t5) {
      return a$2(t5);
    }, u$1$1.isBuffer = function(t5) {
      return null != t5 && true === t5._isBuffer && t5 !== u$1$1.prototype;
    }, u$1$1.compare = function(t5, r5) {
      if (F2(t5, Uint8Array) && (t5 = u$1$1.from(t5, t5.offset, t5.byteLength)), F2(r5, Uint8Array) && (r5 = u$1$1.from(r5, r5.offset, r5.byteLength)), !u$1$1.isBuffer(t5) || !u$1$1.isBuffer(r5))
        throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');
      if (t5 === r5)
        return 0;
      for (var e5 = t5.length, n5 = r5.length, i5 = 0, o5 = Math.min(e5, n5); i5 < o5; ++i5)
        if (t5[i5] !== r5[i5]) {
          e5 = t5[i5], n5 = r5[i5];
          break;
        }
      return e5 < n5 ? -1 : n5 < e5 ? 1 : 0;
    }, u$1$1.isEncoding = function(t5) {
      switch (String(t5).toLowerCase()) {
        case "hex":
        case "utf8":
        case "utf-8":
        case "ascii":
        case "latin1":
        case "binary":
        case "base64":
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return true;
        default:
          return false;
      }
    }, u$1$1.concat = function(t5, r5) {
      if (!Array.isArray(t5))
        throw new TypeError('"list" argument must be an Array of Buffers');
      if (0 === t5.length)
        return u$1$1.alloc(0);
      var e5;
      if (void 0 === r5)
        for (r5 = 0, e5 = 0; e5 < t5.length; ++e5)
          r5 += t5[e5].length;
      var n5 = u$1$1.allocUnsafe(r5), i5 = 0;
      for (e5 = 0; e5 < t5.length; ++e5) {
        var o5 = t5[e5];
        if (F2(o5, Uint8Array) && (o5 = u$1$1.from(o5)), !u$1$1.isBuffer(o5))
          throw new TypeError('"list" argument must be an Array of Buffers');
        o5.copy(n5, i5), i5 += o5.length;
      }
      return n5;
    }, u$1$1.byteLength = y3, u$1$1.prototype._isBuffer = true, u$1$1.prototype.swap16 = function() {
      var t5 = this.length;
      if (t5 % 2 != 0)
        throw new RangeError("Buffer size must be a multiple of 16-bits");
      for (var r5 = 0; r5 < t5; r5 += 2)
        w2(this, r5, r5 + 1);
      return this;
    }, u$1$1.prototype.swap32 = function() {
      var t5 = this.length;
      if (t5 % 4 != 0)
        throw new RangeError("Buffer size must be a multiple of 32-bits");
      for (var r5 = 0; r5 < t5; r5 += 4)
        w2(this, r5, r5 + 3), w2(this, r5 + 1, r5 + 2);
      return this;
    }, u$1$1.prototype.swap64 = function() {
      var t5 = this.length;
      if (t5 % 8 != 0)
        throw new RangeError("Buffer size must be a multiple of 64-bits");
      for (var r5 = 0; r5 < t5; r5 += 8)
        w2(this, r5, r5 + 7), w2(this, r5 + 1, r5 + 6), w2(this, r5 + 2, r5 + 5), w2(this, r5 + 3, r5 + 4);
      return this;
    }, u$1$1.prototype.toString = function() {
      var t5 = this.length;
      return 0 === t5 ? "" : 0 === arguments.length ? I2(this, 0, t5) : g2.apply(this, arguments);
    }, u$1$1.prototype.toLocaleString = u$1$1.prototype.toString, u$1$1.prototype.equals = function(t5) {
      if (!u$1$1.isBuffer(t5))
        throw new TypeError("Argument must be a Buffer");
      return this === t5 || 0 === u$1$1.compare(this, t5);
    }, u$1$1.prototype.inspect = function() {
      var t5 = "", r5 = e$1$1.INSPECT_MAX_BYTES;
      return t5 = this.toString("hex", 0, r5).replace(/(.{2})/g, "$1 ").trim(), this.length > r5 && (t5 += " ... "), "<Buffer " + t5 + ">";
    }, o$1$1 && (u$1$1.prototype[o$1$1] = u$1$1.prototype.inspect), u$1$1.prototype.compare = function(t5, r5, e5, n5, i5) {
      if (F2(t5, Uint8Array) && (t5 = u$1$1.from(t5, t5.offset, t5.byteLength)), !u$1$1.isBuffer(t5))
        throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof t5);
      if (void 0 === r5 && (r5 = 0), void 0 === e5 && (e5 = t5 ? t5.length : 0), void 0 === n5 && (n5 = 0), void 0 === i5 && (i5 = this.length), r5 < 0 || e5 > t5.length || n5 < 0 || i5 > this.length)
        throw new RangeError("out of range index");
      if (n5 >= i5 && r5 >= e5)
        return 0;
      if (n5 >= i5)
        return -1;
      if (r5 >= e5)
        return 1;
      if (this === t5)
        return 0;
      for (var o5 = (i5 >>>= 0) - (n5 >>>= 0), f5 = (e5 >>>= 0) - (r5 >>>= 0), s5 = Math.min(o5, f5), h5 = this.slice(n5, i5), a5 = t5.slice(r5, e5), p5 = 0; p5 < s5; ++p5)
        if (h5[p5] !== a5[p5]) {
          o5 = h5[p5], f5 = a5[p5];
          break;
        }
      return o5 < f5 ? -1 : f5 < o5 ? 1 : 0;
    }, u$1$1.prototype.includes = function(t5, r5, e5) {
      return -1 !== this.indexOf(t5, r5, e5);
    }, u$1$1.prototype.indexOf = function(t5, r5, e5) {
      return d3(this, t5, r5, e5, true);
    }, u$1$1.prototype.lastIndexOf = function(t5, r5, e5) {
      return d3(this, t5, r5, e5, false);
    }, u$1$1.prototype.write = function(t5, r5, e5, n5) {
      if (void 0 === r5)
        n5 = "utf8", e5 = this.length, r5 = 0;
      else if (void 0 === e5 && "string" == typeof r5)
        n5 = r5, e5 = this.length, r5 = 0;
      else {
        if (!isFinite(r5))
          throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
        r5 >>>= 0, isFinite(e5) ? (e5 >>>= 0, void 0 === n5 && (n5 = "utf8")) : (n5 = e5, e5 = void 0);
      }
      var i5 = this.length - r5;
      if ((void 0 === e5 || e5 > i5) && (e5 = i5), t5.length > 0 && (e5 < 0 || r5 < 0) || r5 > this.length)
        throw new RangeError("Attempt to write outside buffer bounds");
      n5 || (n5 = "utf8");
      for (var o5 = false; ; )
        switch (n5) {
          case "hex":
            return b2(this, t5, r5, e5);
          case "utf8":
          case "utf-8":
            return m3(this, t5, r5, e5);
          case "ascii":
            return E2(this, t5, r5, e5);
          case "latin1":
          case "binary":
            return B2(this, t5, r5, e5);
          case "base64":
            return A2(this, t5, r5, e5);
          case "ucs2":
          case "ucs-2":
          case "utf16le":
          case "utf-16le":
            return U2(this, t5, r5, e5);
          default:
            if (o5)
              throw new TypeError("Unknown encoding: " + n5);
            n5 = ("" + n5).toLowerCase(), o5 = true;
        }
    }, u$1$1.prototype.toJSON = function() {
      return { type: "Buffer", data: Array.prototype.slice.call(this._arr || this, 0) };
    };
    u$1$1.prototype.slice = function(t5, r5) {
      var e5 = this.length;
      (t5 = ~~t5) < 0 ? (t5 += e5) < 0 && (t5 = 0) : t5 > e5 && (t5 = e5), (r5 = void 0 === r5 ? e5 : ~~r5) < 0 ? (r5 += e5) < 0 && (r5 = 0) : r5 > e5 && (r5 = e5), r5 < t5 && (r5 = t5);
      var n5 = this.subarray(t5, r5);
      return Object.setPrototypeOf(n5, u$1$1.prototype), n5;
    }, u$1$1.prototype.readUIntLE = function(t5, r5, e5) {
      t5 >>>= 0, r5 >>>= 0, e5 || x2(t5, r5, this.length);
      for (var n5 = this[t5], i5 = 1, o5 = 0; ++o5 < r5 && (i5 *= 256); )
        n5 += this[t5 + o5] * i5;
      return n5;
    }, u$1$1.prototype.readUIntBE = function(t5, r5, e5) {
      t5 >>>= 0, r5 >>>= 0, e5 || x2(t5, r5, this.length);
      for (var n5 = this[t5 + --r5], i5 = 1; r5 > 0 && (i5 *= 256); )
        n5 += this[t5 + --r5] * i5;
      return n5;
    }, u$1$1.prototype.readUInt8 = function(t5, r5) {
      return t5 >>>= 0, r5 || x2(t5, 1, this.length), this[t5];
    }, u$1$1.prototype.readUInt16LE = function(t5, r5) {
      return t5 >>>= 0, r5 || x2(t5, 2, this.length), this[t5] | this[t5 + 1] << 8;
    }, u$1$1.prototype.readUInt16BE = function(t5, r5) {
      return t5 >>>= 0, r5 || x2(t5, 2, this.length), this[t5] << 8 | this[t5 + 1];
    }, u$1$1.prototype.readUInt32LE = function(t5, r5) {
      return t5 >>>= 0, r5 || x2(t5, 4, this.length), (this[t5] | this[t5 + 1] << 8 | this[t5 + 2] << 16) + 16777216 * this[t5 + 3];
    }, u$1$1.prototype.readUInt32BE = function(t5, r5) {
      return t5 >>>= 0, r5 || x2(t5, 4, this.length), 16777216 * this[t5] + (this[t5 + 1] << 16 | this[t5 + 2] << 8 | this[t5 + 3]);
    }, u$1$1.prototype.readIntLE = function(t5, r5, e5) {
      t5 >>>= 0, r5 >>>= 0, e5 || x2(t5, r5, this.length);
      for (var n5 = this[t5], i5 = 1, o5 = 0; ++o5 < r5 && (i5 *= 256); )
        n5 += this[t5 + o5] * i5;
      return n5 >= (i5 *= 128) && (n5 -= Math.pow(2, 8 * r5)), n5;
    }, u$1$1.prototype.readIntBE = function(t5, r5, e5) {
      t5 >>>= 0, r5 >>>= 0, e5 || x2(t5, r5, this.length);
      for (var n5 = r5, i5 = 1, o5 = this[t5 + --n5]; n5 > 0 && (i5 *= 256); )
        o5 += this[t5 + --n5] * i5;
      return o5 >= (i5 *= 128) && (o5 -= Math.pow(2, 8 * r5)), o5;
    }, u$1$1.prototype.readInt8 = function(t5, r5) {
      return t5 >>>= 0, r5 || x2(t5, 1, this.length), 128 & this[t5] ? -1 * (255 - this[t5] + 1) : this[t5];
    }, u$1$1.prototype.readInt16LE = function(t5, r5) {
      t5 >>>= 0, r5 || x2(t5, 2, this.length);
      var e5 = this[t5] | this[t5 + 1] << 8;
      return 32768 & e5 ? 4294901760 | e5 : e5;
    }, u$1$1.prototype.readInt16BE = function(t5, r5) {
      t5 >>>= 0, r5 || x2(t5, 2, this.length);
      var e5 = this[t5 + 1] | this[t5] << 8;
      return 32768 & e5 ? 4294901760 | e5 : e5;
    }, u$1$1.prototype.readInt32LE = function(t5, r5) {
      return t5 >>>= 0, r5 || x2(t5, 4, this.length), this[t5] | this[t5 + 1] << 8 | this[t5 + 2] << 16 | this[t5 + 3] << 24;
    }, u$1$1.prototype.readInt32BE = function(t5, r5) {
      return t5 >>>= 0, r5 || x2(t5, 4, this.length), this[t5] << 24 | this[t5 + 1] << 16 | this[t5 + 2] << 8 | this[t5 + 3];
    }, u$1$1.prototype.readFloatLE = function(t5, r5) {
      return t5 >>>= 0, r5 || x2(t5, 4, this.length), i$12.read(this, t5, true, 23, 4);
    }, u$1$1.prototype.readFloatBE = function(t5, r5) {
      return t5 >>>= 0, r5 || x2(t5, 4, this.length), i$12.read(this, t5, false, 23, 4);
    }, u$1$1.prototype.readDoubleLE = function(t5, r5) {
      return t5 >>>= 0, r5 || x2(t5, 8, this.length), i$12.read(this, t5, true, 52, 8);
    }, u$1$1.prototype.readDoubleBE = function(t5, r5) {
      return t5 >>>= 0, r5 || x2(t5, 8, this.length), i$12.read(this, t5, false, 52, 8);
    }, u$1$1.prototype.writeUIntLE = function(t5, r5, e5, n5) {
      (t5 = +t5, r5 >>>= 0, e5 >>>= 0, n5) || C2(this, t5, r5, e5, Math.pow(2, 8 * e5) - 1, 0);
      var i5 = 1, o5 = 0;
      for (this[r5] = 255 & t5; ++o5 < e5 && (i5 *= 256); )
        this[r5 + o5] = t5 / i5 & 255;
      return r5 + e5;
    }, u$1$1.prototype.writeUIntBE = function(t5, r5, e5, n5) {
      (t5 = +t5, r5 >>>= 0, e5 >>>= 0, n5) || C2(this, t5, r5, e5, Math.pow(2, 8 * e5) - 1, 0);
      var i5 = e5 - 1, o5 = 1;
      for (this[r5 + i5] = 255 & t5; --i5 >= 0 && (o5 *= 256); )
        this[r5 + i5] = t5 / o5 & 255;
      return r5 + e5;
    }, u$1$1.prototype.writeUInt8 = function(t5, r5, e5) {
      return t5 = +t5, r5 >>>= 0, e5 || C2(this, t5, r5, 1, 255, 0), this[r5] = 255 & t5, r5 + 1;
    }, u$1$1.prototype.writeUInt16LE = function(t5, r5, e5) {
      return t5 = +t5, r5 >>>= 0, e5 || C2(this, t5, r5, 2, 65535, 0), this[r5] = 255 & t5, this[r5 + 1] = t5 >>> 8, r5 + 2;
    }, u$1$1.prototype.writeUInt16BE = function(t5, r5, e5) {
      return t5 = +t5, r5 >>>= 0, e5 || C2(this, t5, r5, 2, 65535, 0), this[r5] = t5 >>> 8, this[r5 + 1] = 255 & t5, r5 + 2;
    }, u$1$1.prototype.writeUInt32LE = function(t5, r5, e5) {
      return t5 = +t5, r5 >>>= 0, e5 || C2(this, t5, r5, 4, 4294967295, 0), this[r5 + 3] = t5 >>> 24, this[r5 + 2] = t5 >>> 16, this[r5 + 1] = t5 >>> 8, this[r5] = 255 & t5, r5 + 4;
    }, u$1$1.prototype.writeUInt32BE = function(t5, r5, e5) {
      return t5 = +t5, r5 >>>= 0, e5 || C2(this, t5, r5, 4, 4294967295, 0), this[r5] = t5 >>> 24, this[r5 + 1] = t5 >>> 16, this[r5 + 2] = t5 >>> 8, this[r5 + 3] = 255 & t5, r5 + 4;
    }, u$1$1.prototype.writeIntLE = function(t5, r5, e5, n5) {
      if (t5 = +t5, r5 >>>= 0, !n5) {
        var i5 = Math.pow(2, 8 * e5 - 1);
        C2(this, t5, r5, e5, i5 - 1, -i5);
      }
      var o5 = 0, f5 = 1, u5 = 0;
      for (this[r5] = 255 & t5; ++o5 < e5 && (f5 *= 256); )
        t5 < 0 && 0 === u5 && 0 !== this[r5 + o5 - 1] && (u5 = 1), this[r5 + o5] = (t5 / f5 >> 0) - u5 & 255;
      return r5 + e5;
    }, u$1$1.prototype.writeIntBE = function(t5, r5, e5, n5) {
      if (t5 = +t5, r5 >>>= 0, !n5) {
        var i5 = Math.pow(2, 8 * e5 - 1);
        C2(this, t5, r5, e5, i5 - 1, -i5);
      }
      var o5 = e5 - 1, f5 = 1, u5 = 0;
      for (this[r5 + o5] = 255 & t5; --o5 >= 0 && (f5 *= 256); )
        t5 < 0 && 0 === u5 && 0 !== this[r5 + o5 + 1] && (u5 = 1), this[r5 + o5] = (t5 / f5 >> 0) - u5 & 255;
      return r5 + e5;
    }, u$1$1.prototype.writeInt8 = function(t5, r5, e5) {
      return t5 = +t5, r5 >>>= 0, e5 || C2(this, t5, r5, 1, 127, -128), t5 < 0 && (t5 = 255 + t5 + 1), this[r5] = 255 & t5, r5 + 1;
    }, u$1$1.prototype.writeInt16LE = function(t5, r5, e5) {
      return t5 = +t5, r5 >>>= 0, e5 || C2(this, t5, r5, 2, 32767, -32768), this[r5] = 255 & t5, this[r5 + 1] = t5 >>> 8, r5 + 2;
    }, u$1$1.prototype.writeInt16BE = function(t5, r5, e5) {
      return t5 = +t5, r5 >>>= 0, e5 || C2(this, t5, r5, 2, 32767, -32768), this[r5] = t5 >>> 8, this[r5 + 1] = 255 & t5, r5 + 2;
    }, u$1$1.prototype.writeInt32LE = function(t5, r5, e5) {
      return t5 = +t5, r5 >>>= 0, e5 || C2(this, t5, r5, 4, 2147483647, -2147483648), this[r5] = 255 & t5, this[r5 + 1] = t5 >>> 8, this[r5 + 2] = t5 >>> 16, this[r5 + 3] = t5 >>> 24, r5 + 4;
    }, u$1$1.prototype.writeInt32BE = function(t5, r5, e5) {
      return t5 = +t5, r5 >>>= 0, e5 || C2(this, t5, r5, 4, 2147483647, -2147483648), t5 < 0 && (t5 = 4294967295 + t5 + 1), this[r5] = t5 >>> 24, this[r5 + 1] = t5 >>> 16, this[r5 + 2] = t5 >>> 8, this[r5 + 3] = 255 & t5, r5 + 4;
    }, u$1$1.prototype.writeFloatLE = function(t5, r5, e5) {
      return k2(this, t5, r5, true, e5);
    }, u$1$1.prototype.writeFloatBE = function(t5, r5, e5) {
      return k2(this, t5, r5, false, e5);
    }, u$1$1.prototype.writeDoubleLE = function(t5, r5, e5) {
      return M2(this, t5, r5, true, e5);
    }, u$1$1.prototype.writeDoubleBE = function(t5, r5, e5) {
      return M2(this, t5, r5, false, e5);
    }, u$1$1.prototype.copy = function(t5, r5, e5, n5) {
      if (!u$1$1.isBuffer(t5))
        throw new TypeError("argument should be a Buffer");
      if (e5 || (e5 = 0), n5 || 0 === n5 || (n5 = this.length), r5 >= t5.length && (r5 = t5.length), r5 || (r5 = 0), n5 > 0 && n5 < e5 && (n5 = e5), n5 === e5)
        return 0;
      if (0 === t5.length || 0 === this.length)
        return 0;
      if (r5 < 0)
        throw new RangeError("targetStart out of bounds");
      if (e5 < 0 || e5 >= this.length)
        throw new RangeError("Index out of range");
      if (n5 < 0)
        throw new RangeError("sourceEnd out of bounds");
      n5 > this.length && (n5 = this.length), t5.length - r5 < n5 - e5 && (n5 = t5.length - r5 + e5);
      var i5 = n5 - e5;
      if (this === t5 && "function" == typeof Uint8Array.prototype.copyWithin)
        this.copyWithin(r5, e5, n5);
      else if (this === t5 && e5 < r5 && r5 < n5)
        for (var o5 = i5 - 1; o5 >= 0; --o5)
          t5[o5 + r5] = this[o5 + e5];
      else
        Uint8Array.prototype.set.call(t5, this.subarray(e5, n5), r5);
      return i5;
    }, u$1$1.prototype.fill = function(t5, r5, e5, n5) {
      if ("string" == typeof t5) {
        if ("string" == typeof r5 ? (n5 = r5, r5 = 0, e5 = this.length) : "string" == typeof e5 && (n5 = e5, e5 = this.length), void 0 !== n5 && "string" != typeof n5)
          throw new TypeError("encoding must be a string");
        if ("string" == typeof n5 && !u$1$1.isEncoding(n5))
          throw new TypeError("Unknown encoding: " + n5);
        if (1 === t5.length) {
          var i5 = t5.charCodeAt(0);
          ("utf8" === n5 && i5 < 128 || "latin1" === n5) && (t5 = i5);
        }
      } else
        "number" == typeof t5 ? t5 &= 255 : "boolean" == typeof t5 && (t5 = Number(t5));
      if (r5 < 0 || this.length < r5 || this.length < e5)
        throw new RangeError("Out of range index");
      if (e5 <= r5)
        return this;
      var o5;
      if (r5 >>>= 0, e5 = void 0 === e5 ? this.length : e5 >>> 0, t5 || (t5 = 0), "number" == typeof t5)
        for (o5 = r5; o5 < e5; ++o5)
          this[o5] = t5;
      else {
        var f5 = u$1$1.isBuffer(t5) ? t5 : u$1$1.from(t5, n5), s5 = f5.length;
        if (0 === s5)
          throw new TypeError('The value "' + t5 + '" is invalid for argument "value"');
        for (o5 = 0; o5 < e5 - r5; ++o5)
          this[o5 + r5] = f5[o5 % s5];
      }
      return this;
    };
    j2 = /[^+/0-9A-Za-z-_]/g;
    Y2 = function() {
      for (var t5 = new Array(256), r5 = 0; r5 < 16; ++r5)
        for (var e5 = 16 * r5, n5 = 0; n5 < 16; ++n5)
          t5[e5 + n5] = "0123456789abcdef"[r5] + "0123456789abcdef"[n5];
      return t5;
    }();
    e$1$1.Buffer;
    e$1$1.INSPECT_MAX_BYTES;
    e$1$1.kMaxLength;
    e4 = {};
    n4 = e$1$1;
    o4 = n4.Buffer;
    o4.from && o4.alloc && o4.allocUnsafe && o4.allocUnsafeSlow ? e4 = n4 : (t4(n4, e4), e4.Buffer = f4), f4.prototype = Object.create(o4.prototype), t4(o4, f4), f4.from = function(r5, e5, n5) {
      if ("number" == typeof r5)
        throw new TypeError("Argument must not be a number");
      return o4(r5, e5, n5);
    }, f4.alloc = function(r5, e5, n5) {
      if ("number" != typeof r5)
        throw new TypeError("Argument must be a number");
      var t5 = o4(r5);
      return void 0 !== e5 ? "string" == typeof n5 ? t5.fill(e5, n5) : t5.fill(e5) : t5.fill(0), t5;
    }, f4.allocUnsafe = function(r5) {
      if ("number" != typeof r5)
        throw new TypeError("Argument must be a number");
      return o4(r5);
    }, f4.allocUnsafeSlow = function(r5) {
      if ("number" != typeof r5)
        throw new TypeError("Argument must be a number");
      return n4.SlowBuffer(r5);
    };
    u4 = e4;
    e$12 = {};
    s4 = u4.Buffer;
    i4 = s4.isEncoding || function(t5) {
      switch ((t5 = "" + t5) && t5.toLowerCase()) {
        case "hex":
        case "utf8":
        case "utf-8":
        case "ascii":
        case "binary":
        case "base64":
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
        case "raw":
          return true;
        default:
          return false;
      }
    };
    e$12.StringDecoder = a4, a4.prototype.write = function(t5) {
      if (0 === t5.length)
        return "";
      var e5, s5;
      if (this.lastNeed) {
        if (void 0 === (e5 = this.fillLast(t5)))
          return "";
        s5 = this.lastNeed, this.lastNeed = 0;
      } else
        s5 = 0;
      return s5 < t5.length ? e5 ? e5 + this.text(t5, s5) : this.text(t5, s5) : e5 || "";
    }, a4.prototype.end = function(t5) {
      var e5 = t5 && t5.length ? this.write(t5) : "";
      return this.lastNeed ? e5 + "\uFFFD" : e5;
    }, a4.prototype.text = function(t5, e5) {
      var s5 = function(t6, e6, s6) {
        var i6 = e6.length - 1;
        if (i6 < s6)
          return 0;
        var a5 = r4(e6[i6]);
        if (a5 >= 0)
          return a5 > 0 && (t6.lastNeed = a5 - 1), a5;
        if (--i6 < s6 || -2 === a5)
          return 0;
        if ((a5 = r4(e6[i6])) >= 0)
          return a5 > 0 && (t6.lastNeed = a5 - 2), a5;
        if (--i6 < s6 || -2 === a5)
          return 0;
        if ((a5 = r4(e6[i6])) >= 0)
          return a5 > 0 && (2 === a5 ? a5 = 0 : t6.lastNeed = a5 - 3), a5;
        return 0;
      }(this, t5, e5);
      if (!this.lastNeed)
        return t5.toString("utf8", e5);
      this.lastTotal = s5;
      var i5 = t5.length - (s5 - this.lastNeed);
      return t5.copy(this.lastChar, 0, i5), t5.toString("utf8", e5, i5);
    }, a4.prototype.fillLast = function(t5) {
      if (this.lastNeed <= t5.length)
        return t5.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, this.lastNeed), this.lastChar.toString(this.encoding, 0, this.lastTotal);
      t5.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, t5.length), this.lastNeed -= t5.length;
    };
    e$12.StringDecoder;
    e$12.StringDecoder;
  }
});

// ../../node_modules/@jspm/core/nodelibs/browser/chunk-44e51b61.js
function dew$2$1() {
  if (_dewExec$2$1)
    return exports$2$1;
  _dewExec$2$1 = true;
  exports$2$1.byteLength = byteLength;
  exports$2$1.toByteArray = toByteArray;
  exports$2$1.fromByteArray = fromByteArray;
  var lookup = [];
  var revLookup = [];
  var Arr = typeof Uint8Array !== "undefined" ? Uint8Array : Array;
  var code = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
  for (var i5 = 0, len = code.length; i5 < len; ++i5) {
    lookup[i5] = code[i5];
    revLookup[code.charCodeAt(i5)] = i5;
  }
  revLookup["-".charCodeAt(0)] = 62;
  revLookup["_".charCodeAt(0)] = 63;
  function getLens(b64) {
    var len2 = b64.length;
    if (len2 % 4 > 0) {
      throw new Error("Invalid string. Length must be a multiple of 4");
    }
    var validLen = b64.indexOf("=");
    if (validLen === -1)
      validLen = len2;
    var placeHoldersLen = validLen === len2 ? 0 : 4 - validLen % 4;
    return [validLen, placeHoldersLen];
  }
  function byteLength(b64) {
    var lens = getLens(b64);
    var validLen = lens[0];
    var placeHoldersLen = lens[1];
    return (validLen + placeHoldersLen) * 3 / 4 - placeHoldersLen;
  }
  function _byteLength(b64, validLen, placeHoldersLen) {
    return (validLen + placeHoldersLen) * 3 / 4 - placeHoldersLen;
  }
  function toByteArray(b64) {
    var tmp;
    var lens = getLens(b64);
    var validLen = lens[0];
    var placeHoldersLen = lens[1];
    var arr = new Arr(_byteLength(b64, validLen, placeHoldersLen));
    var curByte = 0;
    var len2 = placeHoldersLen > 0 ? validLen - 4 : validLen;
    var i6;
    for (i6 = 0; i6 < len2; i6 += 4) {
      tmp = revLookup[b64.charCodeAt(i6)] << 18 | revLookup[b64.charCodeAt(i6 + 1)] << 12 | revLookup[b64.charCodeAt(i6 + 2)] << 6 | revLookup[b64.charCodeAt(i6 + 3)];
      arr[curByte++] = tmp >> 16 & 255;
      arr[curByte++] = tmp >> 8 & 255;
      arr[curByte++] = tmp & 255;
    }
    if (placeHoldersLen === 2) {
      tmp = revLookup[b64.charCodeAt(i6)] << 2 | revLookup[b64.charCodeAt(i6 + 1)] >> 4;
      arr[curByte++] = tmp & 255;
    }
    if (placeHoldersLen === 1) {
      tmp = revLookup[b64.charCodeAt(i6)] << 10 | revLookup[b64.charCodeAt(i6 + 1)] << 4 | revLookup[b64.charCodeAt(i6 + 2)] >> 2;
      arr[curByte++] = tmp >> 8 & 255;
      arr[curByte++] = tmp & 255;
    }
    return arr;
  }
  function tripletToBase64(num) {
    return lookup[num >> 18 & 63] + lookup[num >> 12 & 63] + lookup[num >> 6 & 63] + lookup[num & 63];
  }
  function encodeChunk(uint8, start, end) {
    var tmp;
    var output = [];
    for (var i6 = start; i6 < end; i6 += 3) {
      tmp = (uint8[i6] << 16 & 16711680) + (uint8[i6 + 1] << 8 & 65280) + (uint8[i6 + 2] & 255);
      output.push(tripletToBase64(tmp));
    }
    return output.join("");
  }
  function fromByteArray(uint8) {
    var tmp;
    var len2 = uint8.length;
    var extraBytes = len2 % 3;
    var parts = [];
    var maxChunkLength = 16383;
    for (var i6 = 0, len22 = len2 - extraBytes; i6 < len22; i6 += maxChunkLength) {
      parts.push(encodeChunk(uint8, i6, i6 + maxChunkLength > len22 ? len22 : i6 + maxChunkLength));
    }
    if (extraBytes === 1) {
      tmp = uint8[len2 - 1];
      parts.push(lookup[tmp >> 2] + lookup[tmp << 4 & 63] + "==");
    } else if (extraBytes === 2) {
      tmp = (uint8[len2 - 2] << 8) + uint8[len2 - 1];
      parts.push(lookup[tmp >> 10] + lookup[tmp >> 4 & 63] + lookup[tmp << 2 & 63] + "=");
    }
    return parts.join("");
  }
  return exports$2$1;
}
function dew$1$1() {
  if (_dewExec$1$1)
    return exports$1$1;
  _dewExec$1$1 = true;
  exports$1$1.read = function(buffer2, offset, isLE, mLen, nBytes) {
    var e5, m4;
    var eLen = nBytes * 8 - mLen - 1;
    var eMax = (1 << eLen) - 1;
    var eBias = eMax >> 1;
    var nBits = -7;
    var i5 = isLE ? nBytes - 1 : 0;
    var d4 = isLE ? -1 : 1;
    var s5 = buffer2[offset + i5];
    i5 += d4;
    e5 = s5 & (1 << -nBits) - 1;
    s5 >>= -nBits;
    nBits += eLen;
    for (; nBits > 0; e5 = e5 * 256 + buffer2[offset + i5], i5 += d4, nBits -= 8) {
    }
    m4 = e5 & (1 << -nBits) - 1;
    e5 >>= -nBits;
    nBits += mLen;
    for (; nBits > 0; m4 = m4 * 256 + buffer2[offset + i5], i5 += d4, nBits -= 8) {
    }
    if (e5 === 0) {
      e5 = 1 - eBias;
    } else if (e5 === eMax) {
      return m4 ? NaN : (s5 ? -1 : 1) * Infinity;
    } else {
      m4 = m4 + Math.pow(2, mLen);
      e5 = e5 - eBias;
    }
    return (s5 ? -1 : 1) * m4 * Math.pow(2, e5 - mLen);
  };
  exports$1$1.write = function(buffer2, value, offset, isLE, mLen, nBytes) {
    var e5, m4, c5;
    var eLen = nBytes * 8 - mLen - 1;
    var eMax = (1 << eLen) - 1;
    var eBias = eMax >> 1;
    var rt = mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0;
    var i5 = isLE ? 0 : nBytes - 1;
    var d4 = isLE ? 1 : -1;
    var s5 = value < 0 || value === 0 && 1 / value < 0 ? 1 : 0;
    value = Math.abs(value);
    if (isNaN(value) || value === Infinity) {
      m4 = isNaN(value) ? 1 : 0;
      e5 = eMax;
    } else {
      e5 = Math.floor(Math.log(value) / Math.LN2);
      if (value * (c5 = Math.pow(2, -e5)) < 1) {
        e5--;
        c5 *= 2;
      }
      if (e5 + eBias >= 1) {
        value += rt / c5;
      } else {
        value += rt * Math.pow(2, 1 - eBias);
      }
      if (value * c5 >= 2) {
        e5++;
        c5 /= 2;
      }
      if (e5 + eBias >= eMax) {
        m4 = 0;
        e5 = eMax;
      } else if (e5 + eBias >= 1) {
        m4 = (value * c5 - 1) * Math.pow(2, mLen);
        e5 = e5 + eBias;
      } else {
        m4 = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen);
        e5 = 0;
      }
    }
    for (; mLen >= 8; buffer2[offset + i5] = m4 & 255, i5 += d4, m4 /= 256, mLen -= 8) {
    }
    e5 = e5 << mLen | m4;
    eLen += mLen;
    for (; eLen > 0; buffer2[offset + i5] = e5 & 255, i5 += d4, e5 /= 256, eLen -= 8) {
    }
    buffer2[offset + i5 - d4] |= s5 * 128;
  };
  return exports$1$1;
}
function dew$g() {
  if (_dewExec$g)
    return exports$g;
  _dewExec$g = true;
  const base64 = dew$2$1();
  const ieee754 = dew$1$1();
  const customInspectSymbol = typeof Symbol === "function" && typeof Symbol["for"] === "function" ? Symbol["for"]("nodejs.util.inspect.custom") : null;
  exports$g.Buffer = Buffer2;
  exports$g.SlowBuffer = SlowBuffer;
  exports$g.INSPECT_MAX_BYTES = 50;
  const K_MAX_LENGTH = 2147483647;
  exports$g.kMaxLength = K_MAX_LENGTH;
  Buffer2.TYPED_ARRAY_SUPPORT = typedArraySupport();
  if (!Buffer2.TYPED_ARRAY_SUPPORT && typeof console !== "undefined" && typeof console.error === "function") {
    console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");
  }
  function typedArraySupport() {
    try {
      const arr = new Uint8Array(1);
      const proto = {
        foo: function() {
          return 42;
        }
      };
      Object.setPrototypeOf(proto, Uint8Array.prototype);
      Object.setPrototypeOf(arr, proto);
      return arr.foo() === 42;
    } catch (e5) {
      return false;
    }
  }
  Object.defineProperty(Buffer2.prototype, "parent", {
    enumerable: true,
    get: function() {
      if (!Buffer2.isBuffer(this))
        return void 0;
      return this.buffer;
    }
  });
  Object.defineProperty(Buffer2.prototype, "offset", {
    enumerable: true,
    get: function() {
      if (!Buffer2.isBuffer(this))
        return void 0;
      return this.byteOffset;
    }
  });
  function createBuffer(length) {
    if (length > K_MAX_LENGTH) {
      throw new RangeError('The value "' + length + '" is invalid for option "size"');
    }
    const buf = new Uint8Array(length);
    Object.setPrototypeOf(buf, Buffer2.prototype);
    return buf;
  }
  function Buffer2(arg, encodingOrOffset, length) {
    if (typeof arg === "number") {
      if (typeof encodingOrOffset === "string") {
        throw new TypeError('The "string" argument must be of type string. Received type number');
      }
      return allocUnsafe(arg);
    }
    return from(arg, encodingOrOffset, length);
  }
  Buffer2.poolSize = 8192;
  function from(value, encodingOrOffset, length) {
    if (typeof value === "string") {
      return fromString(value, encodingOrOffset);
    }
    if (ArrayBuffer.isView(value)) {
      return fromArrayView(value);
    }
    if (value == null) {
      throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof value);
    }
    if (isInstance(value, ArrayBuffer) || value && isInstance(value.buffer, ArrayBuffer)) {
      return fromArrayBuffer(value, encodingOrOffset, length);
    }
    if (typeof SharedArrayBuffer !== "undefined" && (isInstance(value, SharedArrayBuffer) || value && isInstance(value.buffer, SharedArrayBuffer))) {
      return fromArrayBuffer(value, encodingOrOffset, length);
    }
    if (typeof value === "number") {
      throw new TypeError('The "value" argument must not be of type number. Received type number');
    }
    const valueOf = value.valueOf && value.valueOf();
    if (valueOf != null && valueOf !== value) {
      return Buffer2.from(valueOf, encodingOrOffset, length);
    }
    const b3 = fromObject(value);
    if (b3)
      return b3;
    if (typeof Symbol !== "undefined" && Symbol.toPrimitive != null && typeof value[Symbol.toPrimitive] === "function") {
      return Buffer2.from(value[Symbol.toPrimitive]("string"), encodingOrOffset, length);
    }
    throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof value);
  }
  Buffer2.from = function(value, encodingOrOffset, length) {
    return from(value, encodingOrOffset, length);
  };
  Object.setPrototypeOf(Buffer2.prototype, Uint8Array.prototype);
  Object.setPrototypeOf(Buffer2, Uint8Array);
  function assertSize(size) {
    if (typeof size !== "number") {
      throw new TypeError('"size" argument must be of type number');
    } else if (size < 0) {
      throw new RangeError('The value "' + size + '" is invalid for option "size"');
    }
  }
  function alloc(size, fill, encoding) {
    assertSize(size);
    if (size <= 0) {
      return createBuffer(size);
    }
    if (fill !== void 0) {
      return typeof encoding === "string" ? createBuffer(size).fill(fill, encoding) : createBuffer(size).fill(fill);
    }
    return createBuffer(size);
  }
  Buffer2.alloc = function(size, fill, encoding) {
    return alloc(size, fill, encoding);
  };
  function allocUnsafe(size) {
    assertSize(size);
    return createBuffer(size < 0 ? 0 : checked(size) | 0);
  }
  Buffer2.allocUnsafe = function(size) {
    return allocUnsafe(size);
  };
  Buffer2.allocUnsafeSlow = function(size) {
    return allocUnsafe(size);
  };
  function fromString(string, encoding) {
    if (typeof encoding !== "string" || encoding === "") {
      encoding = "utf8";
    }
    if (!Buffer2.isEncoding(encoding)) {
      throw new TypeError("Unknown encoding: " + encoding);
    }
    const length = byteLength(string, encoding) | 0;
    let buf = createBuffer(length);
    const actual = buf.write(string, encoding);
    if (actual !== length) {
      buf = buf.slice(0, actual);
    }
    return buf;
  }
  function fromArrayLike(array) {
    const length = array.length < 0 ? 0 : checked(array.length) | 0;
    const buf = createBuffer(length);
    for (let i5 = 0; i5 < length; i5 += 1) {
      buf[i5] = array[i5] & 255;
    }
    return buf;
  }
  function fromArrayView(arrayView) {
    if (isInstance(arrayView, Uint8Array)) {
      const copy = new Uint8Array(arrayView);
      return fromArrayBuffer(copy.buffer, copy.byteOffset, copy.byteLength);
    }
    return fromArrayLike(arrayView);
  }
  function fromArrayBuffer(array, byteOffset, length) {
    if (byteOffset < 0 || array.byteLength < byteOffset) {
      throw new RangeError('"offset" is outside of buffer bounds');
    }
    if (array.byteLength < byteOffset + (length || 0)) {
      throw new RangeError('"length" is outside of buffer bounds');
    }
    let buf;
    if (byteOffset === void 0 && length === void 0) {
      buf = new Uint8Array(array);
    } else if (length === void 0) {
      buf = new Uint8Array(array, byteOffset);
    } else {
      buf = new Uint8Array(array, byteOffset, length);
    }
    Object.setPrototypeOf(buf, Buffer2.prototype);
    return buf;
  }
  function fromObject(obj) {
    if (Buffer2.isBuffer(obj)) {
      const len = checked(obj.length) | 0;
      const buf = createBuffer(len);
      if (buf.length === 0) {
        return buf;
      }
      obj.copy(buf, 0, 0, len);
      return buf;
    }
    if (obj.length !== void 0) {
      if (typeof obj.length !== "number" || numberIsNaN(obj.length)) {
        return createBuffer(0);
      }
      return fromArrayLike(obj);
    }
    if (obj.type === "Buffer" && Array.isArray(obj.data)) {
      return fromArrayLike(obj.data);
    }
  }
  function checked(length) {
    if (length >= K_MAX_LENGTH) {
      throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + K_MAX_LENGTH.toString(16) + " bytes");
    }
    return length | 0;
  }
  function SlowBuffer(length) {
    if (+length != length) {
      length = 0;
    }
    return Buffer2.alloc(+length);
  }
  Buffer2.isBuffer = function isBuffer3(b3) {
    return b3 != null && b3._isBuffer === true && b3 !== Buffer2.prototype;
  };
  Buffer2.compare = function compare(a5, b3) {
    if (isInstance(a5, Uint8Array))
      a5 = Buffer2.from(a5, a5.offset, a5.byteLength);
    if (isInstance(b3, Uint8Array))
      b3 = Buffer2.from(b3, b3.offset, b3.byteLength);
    if (!Buffer2.isBuffer(a5) || !Buffer2.isBuffer(b3)) {
      throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');
    }
    if (a5 === b3)
      return 0;
    let x3 = a5.length;
    let y4 = b3.length;
    for (let i5 = 0, len = Math.min(x3, y4); i5 < len; ++i5) {
      if (a5[i5] !== b3[i5]) {
        x3 = a5[i5];
        y4 = b3[i5];
        break;
      }
    }
    if (x3 < y4)
      return -1;
    if (y4 < x3)
      return 1;
    return 0;
  };
  Buffer2.isEncoding = function isEncoding(encoding) {
    switch (String(encoding).toLowerCase()) {
      case "hex":
      case "utf8":
      case "utf-8":
      case "ascii":
      case "latin1":
      case "binary":
      case "base64":
      case "ucs2":
      case "ucs-2":
      case "utf16le":
      case "utf-16le":
        return true;
      default:
        return false;
    }
  };
  Buffer2.concat = function concat(list, length) {
    if (!Array.isArray(list)) {
      throw new TypeError('"list" argument must be an Array of Buffers');
    }
    if (list.length === 0) {
      return Buffer2.alloc(0);
    }
    let i5;
    if (length === void 0) {
      length = 0;
      for (i5 = 0; i5 < list.length; ++i5) {
        length += list[i5].length;
      }
    }
    const buffer2 = Buffer2.allocUnsafe(length);
    let pos = 0;
    for (i5 = 0; i5 < list.length; ++i5) {
      let buf = list[i5];
      if (isInstance(buf, Uint8Array)) {
        if (pos + buf.length > buffer2.length) {
          if (!Buffer2.isBuffer(buf))
            buf = Buffer2.from(buf);
          buf.copy(buffer2, pos);
        } else {
          Uint8Array.prototype.set.call(buffer2, buf, pos);
        }
      } else if (!Buffer2.isBuffer(buf)) {
        throw new TypeError('"list" argument must be an Array of Buffers');
      } else {
        buf.copy(buffer2, pos);
      }
      pos += buf.length;
    }
    return buffer2;
  };
  function byteLength(string, encoding) {
    if (Buffer2.isBuffer(string)) {
      return string.length;
    }
    if (ArrayBuffer.isView(string) || isInstance(string, ArrayBuffer)) {
      return string.byteLength;
    }
    if (typeof string !== "string") {
      throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof string);
    }
    const len = string.length;
    const mustMatch = arguments.length > 2 && arguments[2] === true;
    if (!mustMatch && len === 0)
      return 0;
    let loweredCase = false;
    for (; ; ) {
      switch (encoding) {
        case "ascii":
        case "latin1":
        case "binary":
          return len;
        case "utf8":
        case "utf-8":
          return utf8ToBytes(string).length;
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return len * 2;
        case "hex":
          return len >>> 1;
        case "base64":
          return base64ToBytes(string).length;
        default:
          if (loweredCase) {
            return mustMatch ? -1 : utf8ToBytes(string).length;
          }
          encoding = ("" + encoding).toLowerCase();
          loweredCase = true;
      }
    }
  }
  Buffer2.byteLength = byteLength;
  function slowToString(encoding, start, end) {
    let loweredCase = false;
    if (start === void 0 || start < 0) {
      start = 0;
    }
    if (start > this.length) {
      return "";
    }
    if (end === void 0 || end > this.length) {
      end = this.length;
    }
    if (end <= 0) {
      return "";
    }
    end >>>= 0;
    start >>>= 0;
    if (end <= start) {
      return "";
    }
    if (!encoding)
      encoding = "utf8";
    while (true) {
      switch (encoding) {
        case "hex":
          return hexSlice(this, start, end);
        case "utf8":
        case "utf-8":
          return utf8Slice(this, start, end);
        case "ascii":
          return asciiSlice(this, start, end);
        case "latin1":
        case "binary":
          return latin1Slice(this, start, end);
        case "base64":
          return base64Slice(this, start, end);
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return utf16leSlice(this, start, end);
        default:
          if (loweredCase)
            throw new TypeError("Unknown encoding: " + encoding);
          encoding = (encoding + "").toLowerCase();
          loweredCase = true;
      }
    }
  }
  Buffer2.prototype._isBuffer = true;
  function swap(b3, n5, m4) {
    const i5 = b3[n5];
    b3[n5] = b3[m4];
    b3[m4] = i5;
  }
  Buffer2.prototype.swap16 = function swap16() {
    const len = this.length;
    if (len % 2 !== 0) {
      throw new RangeError("Buffer size must be a multiple of 16-bits");
    }
    for (let i5 = 0; i5 < len; i5 += 2) {
      swap(this, i5, i5 + 1);
    }
    return this;
  };
  Buffer2.prototype.swap32 = function swap32() {
    const len = this.length;
    if (len % 4 !== 0) {
      throw new RangeError("Buffer size must be a multiple of 32-bits");
    }
    for (let i5 = 0; i5 < len; i5 += 4) {
      swap(this, i5, i5 + 3);
      swap(this, i5 + 1, i5 + 2);
    }
    return this;
  };
  Buffer2.prototype.swap64 = function swap64() {
    const len = this.length;
    if (len % 8 !== 0) {
      throw new RangeError("Buffer size must be a multiple of 64-bits");
    }
    for (let i5 = 0; i5 < len; i5 += 8) {
      swap(this, i5, i5 + 7);
      swap(this, i5 + 1, i5 + 6);
      swap(this, i5 + 2, i5 + 5);
      swap(this, i5 + 3, i5 + 4);
    }
    return this;
  };
  Buffer2.prototype.toString = function toString() {
    const length = this.length;
    if (length === 0)
      return "";
    if (arguments.length === 0)
      return utf8Slice(this, 0, length);
    return slowToString.apply(this, arguments);
  };
  Buffer2.prototype.toLocaleString = Buffer2.prototype.toString;
  Buffer2.prototype.equals = function equals(b3) {
    if (!Buffer2.isBuffer(b3))
      throw new TypeError("Argument must be a Buffer");
    if (this === b3)
      return true;
    return Buffer2.compare(this, b3) === 0;
  };
  Buffer2.prototype.inspect = function inspect3() {
    let str = "";
    const max = exports$g.INSPECT_MAX_BYTES;
    str = this.toString("hex", 0, max).replace(/(.{2})/g, "$1 ").trim();
    if (this.length > max)
      str += " ... ";
    return "<Buffer " + str + ">";
  };
  if (customInspectSymbol) {
    Buffer2.prototype[customInspectSymbol] = Buffer2.prototype.inspect;
  }
  Buffer2.prototype.compare = function compare(target, start, end, thisStart, thisEnd) {
    if (isInstance(target, Uint8Array)) {
      target = Buffer2.from(target, target.offset, target.byteLength);
    }
    if (!Buffer2.isBuffer(target)) {
      throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof target);
    }
    if (start === void 0) {
      start = 0;
    }
    if (end === void 0) {
      end = target ? target.length : 0;
    }
    if (thisStart === void 0) {
      thisStart = 0;
    }
    if (thisEnd === void 0) {
      thisEnd = this.length;
    }
    if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
      throw new RangeError("out of range index");
    }
    if (thisStart >= thisEnd && start >= end) {
      return 0;
    }
    if (thisStart >= thisEnd) {
      return -1;
    }
    if (start >= end) {
      return 1;
    }
    start >>>= 0;
    end >>>= 0;
    thisStart >>>= 0;
    thisEnd >>>= 0;
    if (this === target)
      return 0;
    let x3 = thisEnd - thisStart;
    let y4 = end - start;
    const len = Math.min(x3, y4);
    const thisCopy = this.slice(thisStart, thisEnd);
    const targetCopy = target.slice(start, end);
    for (let i5 = 0; i5 < len; ++i5) {
      if (thisCopy[i5] !== targetCopy[i5]) {
        x3 = thisCopy[i5];
        y4 = targetCopy[i5];
        break;
      }
    }
    if (x3 < y4)
      return -1;
    if (y4 < x3)
      return 1;
    return 0;
  };
  function bidirectionalIndexOf(buffer2, val, byteOffset, encoding, dir) {
    if (buffer2.length === 0)
      return -1;
    if (typeof byteOffset === "string") {
      encoding = byteOffset;
      byteOffset = 0;
    } else if (byteOffset > 2147483647) {
      byteOffset = 2147483647;
    } else if (byteOffset < -2147483648) {
      byteOffset = -2147483648;
    }
    byteOffset = +byteOffset;
    if (numberIsNaN(byteOffset)) {
      byteOffset = dir ? 0 : buffer2.length - 1;
    }
    if (byteOffset < 0)
      byteOffset = buffer2.length + byteOffset;
    if (byteOffset >= buffer2.length) {
      if (dir)
        return -1;
      else
        byteOffset = buffer2.length - 1;
    } else if (byteOffset < 0) {
      if (dir)
        byteOffset = 0;
      else
        return -1;
    }
    if (typeof val === "string") {
      val = Buffer2.from(val, encoding);
    }
    if (Buffer2.isBuffer(val)) {
      if (val.length === 0) {
        return -1;
      }
      return arrayIndexOf(buffer2, val, byteOffset, encoding, dir);
    } else if (typeof val === "number") {
      val = val & 255;
      if (typeof Uint8Array.prototype.indexOf === "function") {
        if (dir) {
          return Uint8Array.prototype.indexOf.call(buffer2, val, byteOffset);
        } else {
          return Uint8Array.prototype.lastIndexOf.call(buffer2, val, byteOffset);
        }
      }
      return arrayIndexOf(buffer2, [val], byteOffset, encoding, dir);
    }
    throw new TypeError("val must be string, number or Buffer");
  }
  function arrayIndexOf(arr, val, byteOffset, encoding, dir) {
    let indexSize = 1;
    let arrLength = arr.length;
    let valLength = val.length;
    if (encoding !== void 0) {
      encoding = String(encoding).toLowerCase();
      if (encoding === "ucs2" || encoding === "ucs-2" || encoding === "utf16le" || encoding === "utf-16le") {
        if (arr.length < 2 || val.length < 2) {
          return -1;
        }
        indexSize = 2;
        arrLength /= 2;
        valLength /= 2;
        byteOffset /= 2;
      }
    }
    function read(buf, i6) {
      if (indexSize === 1) {
        return buf[i6];
      } else {
        return buf.readUInt16BE(i6 * indexSize);
      }
    }
    let i5;
    if (dir) {
      let foundIndex = -1;
      for (i5 = byteOffset; i5 < arrLength; i5++) {
        if (read(arr, i5) === read(val, foundIndex === -1 ? 0 : i5 - foundIndex)) {
          if (foundIndex === -1)
            foundIndex = i5;
          if (i5 - foundIndex + 1 === valLength)
            return foundIndex * indexSize;
        } else {
          if (foundIndex !== -1)
            i5 -= i5 - foundIndex;
          foundIndex = -1;
        }
      }
    } else {
      if (byteOffset + valLength > arrLength)
        byteOffset = arrLength - valLength;
      for (i5 = byteOffset; i5 >= 0; i5--) {
        let found = true;
        for (let j3 = 0; j3 < valLength; j3++) {
          if (read(arr, i5 + j3) !== read(val, j3)) {
            found = false;
            break;
          }
        }
        if (found)
          return i5;
      }
    }
    return -1;
  }
  Buffer2.prototype.includes = function includes(val, byteOffset, encoding) {
    return this.indexOf(val, byteOffset, encoding) !== -1;
  };
  Buffer2.prototype.indexOf = function indexOf(val, byteOffset, encoding) {
    return bidirectionalIndexOf(this, val, byteOffset, encoding, true);
  };
  Buffer2.prototype.lastIndexOf = function lastIndexOf(val, byteOffset, encoding) {
    return bidirectionalIndexOf(this, val, byteOffset, encoding, false);
  };
  function hexWrite(buf, string, offset, length) {
    offset = Number(offset) || 0;
    const remaining = buf.length - offset;
    if (!length) {
      length = remaining;
    } else {
      length = Number(length);
      if (length > remaining) {
        length = remaining;
      }
    }
    const strLen = string.length;
    if (length > strLen / 2) {
      length = strLen / 2;
    }
    let i5;
    for (i5 = 0; i5 < length; ++i5) {
      const parsed = parseInt(string.substr(i5 * 2, 2), 16);
      if (numberIsNaN(parsed))
        return i5;
      buf[offset + i5] = parsed;
    }
    return i5;
  }
  function utf8Write(buf, string, offset, length) {
    return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length);
  }
  function asciiWrite(buf, string, offset, length) {
    return blitBuffer(asciiToBytes(string), buf, offset, length);
  }
  function base64Write(buf, string, offset, length) {
    return blitBuffer(base64ToBytes(string), buf, offset, length);
  }
  function ucs2Write(buf, string, offset, length) {
    return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length);
  }
  Buffer2.prototype.write = function write(string, offset, length, encoding) {
    if (offset === void 0) {
      encoding = "utf8";
      length = this.length;
      offset = 0;
    } else if (length === void 0 && typeof offset === "string") {
      encoding = offset;
      length = this.length;
      offset = 0;
    } else if (isFinite(offset)) {
      offset = offset >>> 0;
      if (isFinite(length)) {
        length = length >>> 0;
        if (encoding === void 0)
          encoding = "utf8";
      } else {
        encoding = length;
        length = void 0;
      }
    } else {
      throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
    }
    const remaining = this.length - offset;
    if (length === void 0 || length > remaining)
      length = remaining;
    if (string.length > 0 && (length < 0 || offset < 0) || offset > this.length) {
      throw new RangeError("Attempt to write outside buffer bounds");
    }
    if (!encoding)
      encoding = "utf8";
    let loweredCase = false;
    for (; ; ) {
      switch (encoding) {
        case "hex":
          return hexWrite(this, string, offset, length);
        case "utf8":
        case "utf-8":
          return utf8Write(this, string, offset, length);
        case "ascii":
        case "latin1":
        case "binary":
          return asciiWrite(this, string, offset, length);
        case "base64":
          return base64Write(this, string, offset, length);
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return ucs2Write(this, string, offset, length);
        default:
          if (loweredCase)
            throw new TypeError("Unknown encoding: " + encoding);
          encoding = ("" + encoding).toLowerCase();
          loweredCase = true;
      }
    }
  };
  Buffer2.prototype.toJSON = function toJSON() {
    return {
      type: "Buffer",
      data: Array.prototype.slice.call(this._arr || this, 0)
    };
  };
  function base64Slice(buf, start, end) {
    if (start === 0 && end === buf.length) {
      return base64.fromByteArray(buf);
    } else {
      return base64.fromByteArray(buf.slice(start, end));
    }
  }
  function utf8Slice(buf, start, end) {
    end = Math.min(buf.length, end);
    const res = [];
    let i5 = start;
    while (i5 < end) {
      const firstByte = buf[i5];
      let codePoint = null;
      let bytesPerSequence = firstByte > 239 ? 4 : firstByte > 223 ? 3 : firstByte > 191 ? 2 : 1;
      if (i5 + bytesPerSequence <= end) {
        let secondByte, thirdByte, fourthByte, tempCodePoint;
        switch (bytesPerSequence) {
          case 1:
            if (firstByte < 128) {
              codePoint = firstByte;
            }
            break;
          case 2:
            secondByte = buf[i5 + 1];
            if ((secondByte & 192) === 128) {
              tempCodePoint = (firstByte & 31) << 6 | secondByte & 63;
              if (tempCodePoint > 127) {
                codePoint = tempCodePoint;
              }
            }
            break;
          case 3:
            secondByte = buf[i5 + 1];
            thirdByte = buf[i5 + 2];
            if ((secondByte & 192) === 128 && (thirdByte & 192) === 128) {
              tempCodePoint = (firstByte & 15) << 12 | (secondByte & 63) << 6 | thirdByte & 63;
              if (tempCodePoint > 2047 && (tempCodePoint < 55296 || tempCodePoint > 57343)) {
                codePoint = tempCodePoint;
              }
            }
            break;
          case 4:
            secondByte = buf[i5 + 1];
            thirdByte = buf[i5 + 2];
            fourthByte = buf[i5 + 3];
            if ((secondByte & 192) === 128 && (thirdByte & 192) === 128 && (fourthByte & 192) === 128) {
              tempCodePoint = (firstByte & 15) << 18 | (secondByte & 63) << 12 | (thirdByte & 63) << 6 | fourthByte & 63;
              if (tempCodePoint > 65535 && tempCodePoint < 1114112) {
                codePoint = tempCodePoint;
              }
            }
        }
      }
      if (codePoint === null) {
        codePoint = 65533;
        bytesPerSequence = 1;
      } else if (codePoint > 65535) {
        codePoint -= 65536;
        res.push(codePoint >>> 10 & 1023 | 55296);
        codePoint = 56320 | codePoint & 1023;
      }
      res.push(codePoint);
      i5 += bytesPerSequence;
    }
    return decodeCodePointsArray(res);
  }
  const MAX_ARGUMENTS_LENGTH = 4096;
  function decodeCodePointsArray(codePoints) {
    const len = codePoints.length;
    if (len <= MAX_ARGUMENTS_LENGTH) {
      return String.fromCharCode.apply(String, codePoints);
    }
    let res = "";
    let i5 = 0;
    while (i5 < len) {
      res += String.fromCharCode.apply(String, codePoints.slice(i5, i5 += MAX_ARGUMENTS_LENGTH));
    }
    return res;
  }
  function asciiSlice(buf, start, end) {
    let ret = "";
    end = Math.min(buf.length, end);
    for (let i5 = start; i5 < end; ++i5) {
      ret += String.fromCharCode(buf[i5] & 127);
    }
    return ret;
  }
  function latin1Slice(buf, start, end) {
    let ret = "";
    end = Math.min(buf.length, end);
    for (let i5 = start; i5 < end; ++i5) {
      ret += String.fromCharCode(buf[i5]);
    }
    return ret;
  }
  function hexSlice(buf, start, end) {
    const len = buf.length;
    if (!start || start < 0)
      start = 0;
    if (!end || end < 0 || end > len)
      end = len;
    let out = "";
    for (let i5 = start; i5 < end; ++i5) {
      out += hexSliceLookupTable[buf[i5]];
    }
    return out;
  }
  function utf16leSlice(buf, start, end) {
    const bytes = buf.slice(start, end);
    let res = "";
    for (let i5 = 0; i5 < bytes.length - 1; i5 += 2) {
      res += String.fromCharCode(bytes[i5] + bytes[i5 + 1] * 256);
    }
    return res;
  }
  Buffer2.prototype.slice = function slice(start, end) {
    const len = this.length;
    start = ~~start;
    end = end === void 0 ? len : ~~end;
    if (start < 0) {
      start += len;
      if (start < 0)
        start = 0;
    } else if (start > len) {
      start = len;
    }
    if (end < 0) {
      end += len;
      if (end < 0)
        end = 0;
    } else if (end > len) {
      end = len;
    }
    if (end < start)
      end = start;
    const newBuf = this.subarray(start, end);
    Object.setPrototypeOf(newBuf, Buffer2.prototype);
    return newBuf;
  };
  function checkOffset(offset, ext, length) {
    if (offset % 1 !== 0 || offset < 0)
      throw new RangeError("offset is not uint");
    if (offset + ext > length)
      throw new RangeError("Trying to access beyond buffer length");
  }
  Buffer2.prototype.readUintLE = Buffer2.prototype.readUIntLE = function readUIntLE(offset, byteLength2, noAssert) {
    offset = offset >>> 0;
    byteLength2 = byteLength2 >>> 0;
    if (!noAssert)
      checkOffset(offset, byteLength2, this.length);
    let val = this[offset];
    let mul = 1;
    let i5 = 0;
    while (++i5 < byteLength2 && (mul *= 256)) {
      val += this[offset + i5] * mul;
    }
    return val;
  };
  Buffer2.prototype.readUintBE = Buffer2.prototype.readUIntBE = function readUIntBE(offset, byteLength2, noAssert) {
    offset = offset >>> 0;
    byteLength2 = byteLength2 >>> 0;
    if (!noAssert) {
      checkOffset(offset, byteLength2, this.length);
    }
    let val = this[offset + --byteLength2];
    let mul = 1;
    while (byteLength2 > 0 && (mul *= 256)) {
      val += this[offset + --byteLength2] * mul;
    }
    return val;
  };
  Buffer2.prototype.readUint8 = Buffer2.prototype.readUInt8 = function readUInt8(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert)
      checkOffset(offset, 1, this.length);
    return this[offset];
  };
  Buffer2.prototype.readUint16LE = Buffer2.prototype.readUInt16LE = function readUInt16LE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert)
      checkOffset(offset, 2, this.length);
    return this[offset] | this[offset + 1] << 8;
  };
  Buffer2.prototype.readUint16BE = Buffer2.prototype.readUInt16BE = function readUInt16BE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert)
      checkOffset(offset, 2, this.length);
    return this[offset] << 8 | this[offset + 1];
  };
  Buffer2.prototype.readUint32LE = Buffer2.prototype.readUInt32LE = function readUInt32LE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert)
      checkOffset(offset, 4, this.length);
    return (this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16) + this[offset + 3] * 16777216;
  };
  Buffer2.prototype.readUint32BE = Buffer2.prototype.readUInt32BE = function readUInt32BE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert)
      checkOffset(offset, 4, this.length);
    return this[offset] * 16777216 + (this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3]);
  };
  Buffer2.prototype.readBigUInt64LE = defineBigIntMethod(function readBigUInt64LE(offset) {
    offset = offset >>> 0;
    validateNumber(offset, "offset");
    const first2 = this[offset];
    const last = this[offset + 7];
    if (first2 === void 0 || last === void 0) {
      boundsError(offset, this.length - 8);
    }
    const lo = first2 + this[++offset] * 2 ** 8 + this[++offset] * 2 ** 16 + this[++offset] * 2 ** 24;
    const hi = this[++offset] + this[++offset] * 2 ** 8 + this[++offset] * 2 ** 16 + last * 2 ** 24;
    return BigInt(lo) + (BigInt(hi) << BigInt(32));
  });
  Buffer2.prototype.readBigUInt64BE = defineBigIntMethod(function readBigUInt64BE(offset) {
    offset = offset >>> 0;
    validateNumber(offset, "offset");
    const first2 = this[offset];
    const last = this[offset + 7];
    if (first2 === void 0 || last === void 0) {
      boundsError(offset, this.length - 8);
    }
    const hi = first2 * 2 ** 24 + this[++offset] * 2 ** 16 + this[++offset] * 2 ** 8 + this[++offset];
    const lo = this[++offset] * 2 ** 24 + this[++offset] * 2 ** 16 + this[++offset] * 2 ** 8 + last;
    return (BigInt(hi) << BigInt(32)) + BigInt(lo);
  });
  Buffer2.prototype.readIntLE = function readIntLE(offset, byteLength2, noAssert) {
    offset = offset >>> 0;
    byteLength2 = byteLength2 >>> 0;
    if (!noAssert)
      checkOffset(offset, byteLength2, this.length);
    let val = this[offset];
    let mul = 1;
    let i5 = 0;
    while (++i5 < byteLength2 && (mul *= 256)) {
      val += this[offset + i5] * mul;
    }
    mul *= 128;
    if (val >= mul)
      val -= Math.pow(2, 8 * byteLength2);
    return val;
  };
  Buffer2.prototype.readIntBE = function readIntBE(offset, byteLength2, noAssert) {
    offset = offset >>> 0;
    byteLength2 = byteLength2 >>> 0;
    if (!noAssert)
      checkOffset(offset, byteLength2, this.length);
    let i5 = byteLength2;
    let mul = 1;
    let val = this[offset + --i5];
    while (i5 > 0 && (mul *= 256)) {
      val += this[offset + --i5] * mul;
    }
    mul *= 128;
    if (val >= mul)
      val -= Math.pow(2, 8 * byteLength2);
    return val;
  };
  Buffer2.prototype.readInt8 = function readInt8(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert)
      checkOffset(offset, 1, this.length);
    if (!(this[offset] & 128))
      return this[offset];
    return (255 - this[offset] + 1) * -1;
  };
  Buffer2.prototype.readInt16LE = function readInt16LE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert)
      checkOffset(offset, 2, this.length);
    const val = this[offset] | this[offset + 1] << 8;
    return val & 32768 ? val | 4294901760 : val;
  };
  Buffer2.prototype.readInt16BE = function readInt16BE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert)
      checkOffset(offset, 2, this.length);
    const val = this[offset + 1] | this[offset] << 8;
    return val & 32768 ? val | 4294901760 : val;
  };
  Buffer2.prototype.readInt32LE = function readInt32LE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert)
      checkOffset(offset, 4, this.length);
    return this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16 | this[offset + 3] << 24;
  };
  Buffer2.prototype.readInt32BE = function readInt32BE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert)
      checkOffset(offset, 4, this.length);
    return this[offset] << 24 | this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3];
  };
  Buffer2.prototype.readBigInt64LE = defineBigIntMethod(function readBigInt64LE(offset) {
    offset = offset >>> 0;
    validateNumber(offset, "offset");
    const first2 = this[offset];
    const last = this[offset + 7];
    if (first2 === void 0 || last === void 0) {
      boundsError(offset, this.length - 8);
    }
    const val = this[offset + 4] + this[offset + 5] * 2 ** 8 + this[offset + 6] * 2 ** 16 + (last << 24);
    return (BigInt(val) << BigInt(32)) + BigInt(first2 + this[++offset] * 2 ** 8 + this[++offset] * 2 ** 16 + this[++offset] * 2 ** 24);
  });
  Buffer2.prototype.readBigInt64BE = defineBigIntMethod(function readBigInt64BE(offset) {
    offset = offset >>> 0;
    validateNumber(offset, "offset");
    const first2 = this[offset];
    const last = this[offset + 7];
    if (first2 === void 0 || last === void 0) {
      boundsError(offset, this.length - 8);
    }
    const val = (first2 << 24) + // Overflow
    this[++offset] * 2 ** 16 + this[++offset] * 2 ** 8 + this[++offset];
    return (BigInt(val) << BigInt(32)) + BigInt(this[++offset] * 2 ** 24 + this[++offset] * 2 ** 16 + this[++offset] * 2 ** 8 + last);
  });
  Buffer2.prototype.readFloatLE = function readFloatLE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert)
      checkOffset(offset, 4, this.length);
    return ieee754.read(this, offset, true, 23, 4);
  };
  Buffer2.prototype.readFloatBE = function readFloatBE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert)
      checkOffset(offset, 4, this.length);
    return ieee754.read(this, offset, false, 23, 4);
  };
  Buffer2.prototype.readDoubleLE = function readDoubleLE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert)
      checkOffset(offset, 8, this.length);
    return ieee754.read(this, offset, true, 52, 8);
  };
  Buffer2.prototype.readDoubleBE = function readDoubleBE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert)
      checkOffset(offset, 8, this.length);
    return ieee754.read(this, offset, false, 52, 8);
  };
  function checkInt(buf, value, offset, ext, max, min) {
    if (!Buffer2.isBuffer(buf))
      throw new TypeError('"buffer" argument must be a Buffer instance');
    if (value > max || value < min)
      throw new RangeError('"value" argument is out of bounds');
    if (offset + ext > buf.length)
      throw new RangeError("Index out of range");
  }
  Buffer2.prototype.writeUintLE = Buffer2.prototype.writeUIntLE = function writeUIntLE(value, offset, byteLength2, noAssert) {
    value = +value;
    offset = offset >>> 0;
    byteLength2 = byteLength2 >>> 0;
    if (!noAssert) {
      const maxBytes = Math.pow(2, 8 * byteLength2) - 1;
      checkInt(this, value, offset, byteLength2, maxBytes, 0);
    }
    let mul = 1;
    let i5 = 0;
    this[offset] = value & 255;
    while (++i5 < byteLength2 && (mul *= 256)) {
      this[offset + i5] = value / mul & 255;
    }
    return offset + byteLength2;
  };
  Buffer2.prototype.writeUintBE = Buffer2.prototype.writeUIntBE = function writeUIntBE(value, offset, byteLength2, noAssert) {
    value = +value;
    offset = offset >>> 0;
    byteLength2 = byteLength2 >>> 0;
    if (!noAssert) {
      const maxBytes = Math.pow(2, 8 * byteLength2) - 1;
      checkInt(this, value, offset, byteLength2, maxBytes, 0);
    }
    let i5 = byteLength2 - 1;
    let mul = 1;
    this[offset + i5] = value & 255;
    while (--i5 >= 0 && (mul *= 256)) {
      this[offset + i5] = value / mul & 255;
    }
    return offset + byteLength2;
  };
  Buffer2.prototype.writeUint8 = Buffer2.prototype.writeUInt8 = function writeUInt8(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert)
      checkInt(this, value, offset, 1, 255, 0);
    this[offset] = value & 255;
    return offset + 1;
  };
  Buffer2.prototype.writeUint16LE = Buffer2.prototype.writeUInt16LE = function writeUInt16LE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert)
      checkInt(this, value, offset, 2, 65535, 0);
    this[offset] = value & 255;
    this[offset + 1] = value >>> 8;
    return offset + 2;
  };
  Buffer2.prototype.writeUint16BE = Buffer2.prototype.writeUInt16BE = function writeUInt16BE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert)
      checkInt(this, value, offset, 2, 65535, 0);
    this[offset] = value >>> 8;
    this[offset + 1] = value & 255;
    return offset + 2;
  };
  Buffer2.prototype.writeUint32LE = Buffer2.prototype.writeUInt32LE = function writeUInt32LE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert)
      checkInt(this, value, offset, 4, 4294967295, 0);
    this[offset + 3] = value >>> 24;
    this[offset + 2] = value >>> 16;
    this[offset + 1] = value >>> 8;
    this[offset] = value & 255;
    return offset + 4;
  };
  Buffer2.prototype.writeUint32BE = Buffer2.prototype.writeUInt32BE = function writeUInt32BE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert)
      checkInt(this, value, offset, 4, 4294967295, 0);
    this[offset] = value >>> 24;
    this[offset + 1] = value >>> 16;
    this[offset + 2] = value >>> 8;
    this[offset + 3] = value & 255;
    return offset + 4;
  };
  function wrtBigUInt64LE(buf, value, offset, min, max) {
    checkIntBI(value, min, max, buf, offset, 7);
    let lo = Number(value & BigInt(4294967295));
    buf[offset++] = lo;
    lo = lo >> 8;
    buf[offset++] = lo;
    lo = lo >> 8;
    buf[offset++] = lo;
    lo = lo >> 8;
    buf[offset++] = lo;
    let hi = Number(value >> BigInt(32) & BigInt(4294967295));
    buf[offset++] = hi;
    hi = hi >> 8;
    buf[offset++] = hi;
    hi = hi >> 8;
    buf[offset++] = hi;
    hi = hi >> 8;
    buf[offset++] = hi;
    return offset;
  }
  function wrtBigUInt64BE(buf, value, offset, min, max) {
    checkIntBI(value, min, max, buf, offset, 7);
    let lo = Number(value & BigInt(4294967295));
    buf[offset + 7] = lo;
    lo = lo >> 8;
    buf[offset + 6] = lo;
    lo = lo >> 8;
    buf[offset + 5] = lo;
    lo = lo >> 8;
    buf[offset + 4] = lo;
    let hi = Number(value >> BigInt(32) & BigInt(4294967295));
    buf[offset + 3] = hi;
    hi = hi >> 8;
    buf[offset + 2] = hi;
    hi = hi >> 8;
    buf[offset + 1] = hi;
    hi = hi >> 8;
    buf[offset] = hi;
    return offset + 8;
  }
  Buffer2.prototype.writeBigUInt64LE = defineBigIntMethod(function writeBigUInt64LE(value, offset = 0) {
    return wrtBigUInt64LE(this, value, offset, BigInt(0), BigInt("0xffffffffffffffff"));
  });
  Buffer2.prototype.writeBigUInt64BE = defineBigIntMethod(function writeBigUInt64BE(value, offset = 0) {
    return wrtBigUInt64BE(this, value, offset, BigInt(0), BigInt("0xffffffffffffffff"));
  });
  Buffer2.prototype.writeIntLE = function writeIntLE(value, offset, byteLength2, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) {
      const limit = Math.pow(2, 8 * byteLength2 - 1);
      checkInt(this, value, offset, byteLength2, limit - 1, -limit);
    }
    let i5 = 0;
    let mul = 1;
    let sub = 0;
    this[offset] = value & 255;
    while (++i5 < byteLength2 && (mul *= 256)) {
      if (value < 0 && sub === 0 && this[offset + i5 - 1] !== 0) {
        sub = 1;
      }
      this[offset + i5] = (value / mul >> 0) - sub & 255;
    }
    return offset + byteLength2;
  };
  Buffer2.prototype.writeIntBE = function writeIntBE(value, offset, byteLength2, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) {
      const limit = Math.pow(2, 8 * byteLength2 - 1);
      checkInt(this, value, offset, byteLength2, limit - 1, -limit);
    }
    let i5 = byteLength2 - 1;
    let mul = 1;
    let sub = 0;
    this[offset + i5] = value & 255;
    while (--i5 >= 0 && (mul *= 256)) {
      if (value < 0 && sub === 0 && this[offset + i5 + 1] !== 0) {
        sub = 1;
      }
      this[offset + i5] = (value / mul >> 0) - sub & 255;
    }
    return offset + byteLength2;
  };
  Buffer2.prototype.writeInt8 = function writeInt8(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert)
      checkInt(this, value, offset, 1, 127, -128);
    if (value < 0)
      value = 255 + value + 1;
    this[offset] = value & 255;
    return offset + 1;
  };
  Buffer2.prototype.writeInt16LE = function writeInt16LE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert)
      checkInt(this, value, offset, 2, 32767, -32768);
    this[offset] = value & 255;
    this[offset + 1] = value >>> 8;
    return offset + 2;
  };
  Buffer2.prototype.writeInt16BE = function writeInt16BE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert)
      checkInt(this, value, offset, 2, 32767, -32768);
    this[offset] = value >>> 8;
    this[offset + 1] = value & 255;
    return offset + 2;
  };
  Buffer2.prototype.writeInt32LE = function writeInt32LE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert)
      checkInt(this, value, offset, 4, 2147483647, -2147483648);
    this[offset] = value & 255;
    this[offset + 1] = value >>> 8;
    this[offset + 2] = value >>> 16;
    this[offset + 3] = value >>> 24;
    return offset + 4;
  };
  Buffer2.prototype.writeInt32BE = function writeInt32BE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert)
      checkInt(this, value, offset, 4, 2147483647, -2147483648);
    if (value < 0)
      value = 4294967295 + value + 1;
    this[offset] = value >>> 24;
    this[offset + 1] = value >>> 16;
    this[offset + 2] = value >>> 8;
    this[offset + 3] = value & 255;
    return offset + 4;
  };
  Buffer2.prototype.writeBigInt64LE = defineBigIntMethod(function writeBigInt64LE(value, offset = 0) {
    return wrtBigUInt64LE(this, value, offset, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
  });
  Buffer2.prototype.writeBigInt64BE = defineBigIntMethod(function writeBigInt64BE(value, offset = 0) {
    return wrtBigUInt64BE(this, value, offset, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
  });
  function checkIEEE754(buf, value, offset, ext, max, min) {
    if (offset + ext > buf.length)
      throw new RangeError("Index out of range");
    if (offset < 0)
      throw new RangeError("Index out of range");
  }
  function writeFloat(buf, value, offset, littleEndian, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) {
      checkIEEE754(buf, value, offset, 4);
    }
    ieee754.write(buf, value, offset, littleEndian, 23, 4);
    return offset + 4;
  }
  Buffer2.prototype.writeFloatLE = function writeFloatLE(value, offset, noAssert) {
    return writeFloat(this, value, offset, true, noAssert);
  };
  Buffer2.prototype.writeFloatBE = function writeFloatBE(value, offset, noAssert) {
    return writeFloat(this, value, offset, false, noAssert);
  };
  function writeDouble(buf, value, offset, littleEndian, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) {
      checkIEEE754(buf, value, offset, 8);
    }
    ieee754.write(buf, value, offset, littleEndian, 52, 8);
    return offset + 8;
  }
  Buffer2.prototype.writeDoubleLE = function writeDoubleLE(value, offset, noAssert) {
    return writeDouble(this, value, offset, true, noAssert);
  };
  Buffer2.prototype.writeDoubleBE = function writeDoubleBE(value, offset, noAssert) {
    return writeDouble(this, value, offset, false, noAssert);
  };
  Buffer2.prototype.copy = function copy(target, targetStart, start, end) {
    if (!Buffer2.isBuffer(target))
      throw new TypeError("argument should be a Buffer");
    if (!start)
      start = 0;
    if (!end && end !== 0)
      end = this.length;
    if (targetStart >= target.length)
      targetStart = target.length;
    if (!targetStart)
      targetStart = 0;
    if (end > 0 && end < start)
      end = start;
    if (end === start)
      return 0;
    if (target.length === 0 || this.length === 0)
      return 0;
    if (targetStart < 0) {
      throw new RangeError("targetStart out of bounds");
    }
    if (start < 0 || start >= this.length)
      throw new RangeError("Index out of range");
    if (end < 0)
      throw new RangeError("sourceEnd out of bounds");
    if (end > this.length)
      end = this.length;
    if (target.length - targetStart < end - start) {
      end = target.length - targetStart + start;
    }
    const len = end - start;
    if (this === target && typeof Uint8Array.prototype.copyWithin === "function") {
      this.copyWithin(targetStart, start, end);
    } else {
      Uint8Array.prototype.set.call(target, this.subarray(start, end), targetStart);
    }
    return len;
  };
  Buffer2.prototype.fill = function fill(val, start, end, encoding) {
    if (typeof val === "string") {
      if (typeof start === "string") {
        encoding = start;
        start = 0;
        end = this.length;
      } else if (typeof end === "string") {
        encoding = end;
        end = this.length;
      }
      if (encoding !== void 0 && typeof encoding !== "string") {
        throw new TypeError("encoding must be a string");
      }
      if (typeof encoding === "string" && !Buffer2.isEncoding(encoding)) {
        throw new TypeError("Unknown encoding: " + encoding);
      }
      if (val.length === 1) {
        const code = val.charCodeAt(0);
        if (encoding === "utf8" && code < 128 || encoding === "latin1") {
          val = code;
        }
      }
    } else if (typeof val === "number") {
      val = val & 255;
    } else if (typeof val === "boolean") {
      val = Number(val);
    }
    if (start < 0 || this.length < start || this.length < end) {
      throw new RangeError("Out of range index");
    }
    if (end <= start) {
      return this;
    }
    start = start >>> 0;
    end = end === void 0 ? this.length : end >>> 0;
    if (!val)
      val = 0;
    let i5;
    if (typeof val === "number") {
      for (i5 = start; i5 < end; ++i5) {
        this[i5] = val;
      }
    } else {
      const bytes = Buffer2.isBuffer(val) ? val : Buffer2.from(val, encoding);
      const len = bytes.length;
      if (len === 0) {
        throw new TypeError('The value "' + val + '" is invalid for argument "value"');
      }
      for (i5 = 0; i5 < end - start; ++i5) {
        this[i5 + start] = bytes[i5 % len];
      }
    }
    return this;
  };
  const errors = {};
  function E3(sym, getMessage, Base) {
    errors[sym] = class NodeError extends Base {
      constructor() {
        super();
        Object.defineProperty(this, "message", {
          value: getMessage.apply(this, arguments),
          writable: true,
          configurable: true
        });
        this.name = `${this.name} [${sym}]`;
        this.stack;
        delete this.name;
      }
      get code() {
        return sym;
      }
      set code(value) {
        Object.defineProperty(this, "code", {
          configurable: true,
          enumerable: true,
          value,
          writable: true
        });
      }
      toString() {
        return `${this.name} [${sym}]: ${this.message}`;
      }
    };
  }
  E3("ERR_BUFFER_OUT_OF_BOUNDS", function(name2) {
    if (name2) {
      return `${name2} is outside of buffer bounds`;
    }
    return "Attempt to access memory outside buffer bounds";
  }, RangeError);
  E3("ERR_INVALID_ARG_TYPE", function(name2, actual) {
    return `The "${name2}" argument must be of type number. Received type ${typeof actual}`;
  }, TypeError);
  E3("ERR_OUT_OF_RANGE", function(str, range, input) {
    let msg = `The value of "${str}" is out of range.`;
    let received = input;
    if (Number.isInteger(input) && Math.abs(input) > 2 ** 32) {
      received = addNumericalSeparator(String(input));
    } else if (typeof input === "bigint") {
      received = String(input);
      if (input > BigInt(2) ** BigInt(32) || input < -(BigInt(2) ** BigInt(32))) {
        received = addNumericalSeparator(received);
      }
      received += "n";
    }
    msg += ` It must be ${range}. Received ${received}`;
    return msg;
  }, RangeError);
  function addNumericalSeparator(val) {
    let res = "";
    let i5 = val.length;
    const start = val[0] === "-" ? 1 : 0;
    for (; i5 >= start + 4; i5 -= 3) {
      res = `_${val.slice(i5 - 3, i5)}${res}`;
    }
    return `${val.slice(0, i5)}${res}`;
  }
  function checkBounds(buf, offset, byteLength2) {
    validateNumber(offset, "offset");
    if (buf[offset] === void 0 || buf[offset + byteLength2] === void 0) {
      boundsError(offset, buf.length - (byteLength2 + 1));
    }
  }
  function checkIntBI(value, min, max, buf, offset, byteLength2) {
    if (value > max || value < min) {
      const n5 = typeof min === "bigint" ? "n" : "";
      let range;
      if (byteLength2 > 3) {
        if (min === 0 || min === BigInt(0)) {
          range = `>= 0${n5} and < 2${n5} ** ${(byteLength2 + 1) * 8}${n5}`;
        } else {
          range = `>= -(2${n5} ** ${(byteLength2 + 1) * 8 - 1}${n5}) and < 2 ** ${(byteLength2 + 1) * 8 - 1}${n5}`;
        }
      } else {
        range = `>= ${min}${n5} and <= ${max}${n5}`;
      }
      throw new errors.ERR_OUT_OF_RANGE("value", range, value);
    }
    checkBounds(buf, offset, byteLength2);
  }
  function validateNumber(value, name2) {
    if (typeof value !== "number") {
      throw new errors.ERR_INVALID_ARG_TYPE(name2, "number", value);
    }
  }
  function boundsError(value, length, type) {
    if (Math.floor(value) !== value) {
      validateNumber(value, type);
      throw new errors.ERR_OUT_OF_RANGE(type || "offset", "an integer", value);
    }
    if (length < 0) {
      throw new errors.ERR_BUFFER_OUT_OF_BOUNDS();
    }
    throw new errors.ERR_OUT_OF_RANGE(type || "offset", `>= ${type ? 1 : 0} and <= ${length}`, value);
  }
  const INVALID_BASE64_RE = /[^+/0-9A-Za-z-_]/g;
  function base64clean(str) {
    str = str.split("=")[0];
    str = str.trim().replace(INVALID_BASE64_RE, "");
    if (str.length < 2)
      return "";
    while (str.length % 4 !== 0) {
      str = str + "=";
    }
    return str;
  }
  function utf8ToBytes(string, units) {
    units = units || Infinity;
    let codePoint;
    const length = string.length;
    let leadSurrogate = null;
    const bytes = [];
    for (let i5 = 0; i5 < length; ++i5) {
      codePoint = string.charCodeAt(i5);
      if (codePoint > 55295 && codePoint < 57344) {
        if (!leadSurrogate) {
          if (codePoint > 56319) {
            if ((units -= 3) > -1)
              bytes.push(239, 191, 189);
            continue;
          } else if (i5 + 1 === length) {
            if ((units -= 3) > -1)
              bytes.push(239, 191, 189);
            continue;
          }
          leadSurrogate = codePoint;
          continue;
        }
        if (codePoint < 56320) {
          if ((units -= 3) > -1)
            bytes.push(239, 191, 189);
          leadSurrogate = codePoint;
          continue;
        }
        codePoint = (leadSurrogate - 55296 << 10 | codePoint - 56320) + 65536;
      } else if (leadSurrogate) {
        if ((units -= 3) > -1)
          bytes.push(239, 191, 189);
      }
      leadSurrogate = null;
      if (codePoint < 128) {
        if ((units -= 1) < 0)
          break;
        bytes.push(codePoint);
      } else if (codePoint < 2048) {
        if ((units -= 2) < 0)
          break;
        bytes.push(codePoint >> 6 | 192, codePoint & 63 | 128);
      } else if (codePoint < 65536) {
        if ((units -= 3) < 0)
          break;
        bytes.push(codePoint >> 12 | 224, codePoint >> 6 & 63 | 128, codePoint & 63 | 128);
      } else if (codePoint < 1114112) {
        if ((units -= 4) < 0)
          break;
        bytes.push(codePoint >> 18 | 240, codePoint >> 12 & 63 | 128, codePoint >> 6 & 63 | 128, codePoint & 63 | 128);
      } else {
        throw new Error("Invalid code point");
      }
    }
    return bytes;
  }
  function asciiToBytes(str) {
    const byteArray = [];
    for (let i5 = 0; i5 < str.length; ++i5) {
      byteArray.push(str.charCodeAt(i5) & 255);
    }
    return byteArray;
  }
  function utf16leToBytes(str, units) {
    let c5, hi, lo;
    const byteArray = [];
    for (let i5 = 0; i5 < str.length; ++i5) {
      if ((units -= 2) < 0)
        break;
      c5 = str.charCodeAt(i5);
      hi = c5 >> 8;
      lo = c5 % 256;
      byteArray.push(lo);
      byteArray.push(hi);
    }
    return byteArray;
  }
  function base64ToBytes(str) {
    return base64.toByteArray(base64clean(str));
  }
  function blitBuffer(src, dst, offset, length) {
    let i5;
    for (i5 = 0; i5 < length; ++i5) {
      if (i5 + offset >= dst.length || i5 >= src.length)
        break;
      dst[i5 + offset] = src[i5];
    }
    return i5;
  }
  function isInstance(obj, type) {
    return obj instanceof type || obj != null && obj.constructor != null && obj.constructor.name != null && obj.constructor.name === type.name;
  }
  function numberIsNaN(obj) {
    return obj !== obj;
  }
  const hexSliceLookupTable = function() {
    const alphabet = "0123456789abcdef";
    const table = new Array(256);
    for (let i5 = 0; i5 < 16; ++i5) {
      const i16 = i5 * 16;
      for (let j3 = 0; j3 < 16; ++j3) {
        table[i16 + j3] = alphabet[i5] + alphabet[j3];
      }
    }
    return table;
  }();
  function defineBigIntMethod(fn) {
    return typeof BigInt === "undefined" ? BufferBigIntNotDefined : fn;
  }
  function BufferBigIntNotDefined() {
    throw new Error("BigInt not supported");
  }
  return exports$g;
}
function dew$f() {
  if (_dewExec$f)
    return exports$f;
  _dewExec$f = true;
  if (typeof Object.create === "function") {
    exports$f = function inherits3(ctor, superCtor) {
      if (superCtor) {
        ctor.super_ = superCtor;
        ctor.prototype = Object.create(superCtor.prototype, {
          constructor: {
            value: ctor,
            enumerable: false,
            writable: true,
            configurable: true
          }
        });
      }
    };
  } else {
    exports$f = function inherits3(ctor, superCtor) {
      if (superCtor) {
        ctor.super_ = superCtor;
        var TempCtor = function() {
        };
        TempCtor.prototype = superCtor.prototype;
        ctor.prototype = new TempCtor();
        ctor.prototype.constructor = ctor;
      }
    };
  }
  return exports$f;
}
function dew$e() {
  if (_dewExec$e)
    return exports$e;
  _dewExec$e = true;
  exports$e = y.EventEmitter;
  return exports$e;
}
function dew$d() {
  if (_dewExec$d)
    return exports$d;
  _dewExec$d = true;
  function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      if (enumerableOnly)
        symbols = symbols.filter(function(sym) {
          return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        });
      keys.push.apply(keys, symbols);
    }
    return keys;
  }
  function _objectSpread(target) {
    for (var i5 = 1; i5 < arguments.length; i5++) {
      var source = arguments[i5] != null ? arguments[i5] : {};
      if (i5 % 2) {
        ownKeys(Object(source), true).forEach(function(key) {
          _defineProperty(target, key, source[key]);
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
      } else {
        ownKeys(Object(source)).forEach(function(key) {
          Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
      }
    }
    return target;
  }
  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }
    return obj;
  }
  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  function _defineProperties(target, props) {
    for (var i5 = 0; i5 < props.length; i5++) {
      var descriptor = props[i5];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor)
        descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps)
      _defineProperties(Constructor.prototype, protoProps);
    if (staticProps)
      _defineProperties(Constructor, staticProps);
    return Constructor;
  }
  var _require = buffer, Buffer2 = _require.Buffer;
  var _require2 = X, inspect3 = _require2.inspect;
  var custom = inspect3 && inspect3.custom || "inspect";
  function copyBuffer(src, target, offset) {
    Buffer2.prototype.copy.call(src, target, offset);
  }
  exports$d = /* @__PURE__ */ function() {
    function BufferList() {
      _classCallCheck(this, BufferList);
      this.head = null;
      this.tail = null;
      this.length = 0;
    }
    _createClass(BufferList, [{
      key: "push",
      value: function push(v4) {
        var entry = {
          data: v4,
          next: null
        };
        if (this.length > 0)
          this.tail.next = entry;
        else
          this.head = entry;
        this.tail = entry;
        ++this.length;
      }
    }, {
      key: "unshift",
      value: function unshift(v4) {
        var entry = {
          data: v4,
          next: this.head
        };
        if (this.length === 0)
          this.tail = entry;
        this.head = entry;
        ++this.length;
      }
    }, {
      key: "shift",
      value: function shift() {
        if (this.length === 0)
          return;
        var ret = this.head.data;
        if (this.length === 1)
          this.head = this.tail = null;
        else
          this.head = this.head.next;
        --this.length;
        return ret;
      }
    }, {
      key: "clear",
      value: function clear() {
        this.head = this.tail = null;
        this.length = 0;
      }
    }, {
      key: "join",
      value: function join(s5) {
        if (this.length === 0)
          return "";
        var p5 = this.head;
        var ret = "" + p5.data;
        while (p5 = p5.next) {
          ret += s5 + p5.data;
        }
        return ret;
      }
    }, {
      key: "concat",
      value: function concat(n5) {
        if (this.length === 0)
          return Buffer2.alloc(0);
        var ret = Buffer2.allocUnsafe(n5 >>> 0);
        var p5 = this.head;
        var i5 = 0;
        while (p5) {
          copyBuffer(p5.data, ret, i5);
          i5 += p5.data.length;
          p5 = p5.next;
        }
        return ret;
      }
      // Consumes a specified amount of bytes or characters from the buffered data.
    }, {
      key: "consume",
      value: function consume(n5, hasStrings) {
        var ret;
        if (n5 < this.head.data.length) {
          ret = this.head.data.slice(0, n5);
          this.head.data = this.head.data.slice(n5);
        } else if (n5 === this.head.data.length) {
          ret = this.shift();
        } else {
          ret = hasStrings ? this._getString(n5) : this._getBuffer(n5);
        }
        return ret;
      }
    }, {
      key: "first",
      value: function first2() {
        return this.head.data;
      }
      // Consumes a specified amount of characters from the buffered data.
    }, {
      key: "_getString",
      value: function _getString(n5) {
        var p5 = this.head;
        var c5 = 1;
        var ret = p5.data;
        n5 -= ret.length;
        while (p5 = p5.next) {
          var str = p5.data;
          var nb = n5 > str.length ? str.length : n5;
          if (nb === str.length)
            ret += str;
          else
            ret += str.slice(0, n5);
          n5 -= nb;
          if (n5 === 0) {
            if (nb === str.length) {
              ++c5;
              if (p5.next)
                this.head = p5.next;
              else
                this.head = this.tail = null;
            } else {
              this.head = p5;
              p5.data = str.slice(nb);
            }
            break;
          }
          ++c5;
        }
        this.length -= c5;
        return ret;
      }
      // Consumes a specified amount of bytes from the buffered data.
    }, {
      key: "_getBuffer",
      value: function _getBuffer(n5) {
        var ret = Buffer2.allocUnsafe(n5);
        var p5 = this.head;
        var c5 = 1;
        p5.data.copy(ret);
        n5 -= p5.data.length;
        while (p5 = p5.next) {
          var buf = p5.data;
          var nb = n5 > buf.length ? buf.length : n5;
          buf.copy(ret, ret.length - n5, 0, nb);
          n5 -= nb;
          if (n5 === 0) {
            if (nb === buf.length) {
              ++c5;
              if (p5.next)
                this.head = p5.next;
              else
                this.head = this.tail = null;
            } else {
              this.head = p5;
              p5.data = buf.slice(nb);
            }
            break;
          }
          ++c5;
        }
        this.length -= c5;
        return ret;
      }
      // Make sure the linked list only shows the minimal necessary information.
    }, {
      key: custom,
      value: function value(_3, options) {
        return inspect3(this, _objectSpread({}, options, {
          // Only inspect one level.
          depth: 0,
          // It should not recurse.
          customInspect: false
        }));
      }
    }]);
    return BufferList;
  }();
  return exports$d;
}
function dew$c() {
  if (_dewExec$c)
    return exports$c;
  _dewExec$c = true;
  var process$1 = process;
  function destroy(err, cb) {
    var _this = this;
    var readableDestroyed = this._readableState && this._readableState.destroyed;
    var writableDestroyed = this._writableState && this._writableState.destroyed;
    if (readableDestroyed || writableDestroyed) {
      if (cb) {
        cb(err);
      } else if (err) {
        if (!this._writableState) {
          process$1.nextTick(emitErrorNT, this, err);
        } else if (!this._writableState.errorEmitted) {
          this._writableState.errorEmitted = true;
          process$1.nextTick(emitErrorNT, this, err);
        }
      }
      return this;
    }
    if (this._readableState) {
      this._readableState.destroyed = true;
    }
    if (this._writableState) {
      this._writableState.destroyed = true;
    }
    this._destroy(err || null, function(err2) {
      if (!cb && err2) {
        if (!_this._writableState) {
          process$1.nextTick(emitErrorAndCloseNT, _this, err2);
        } else if (!_this._writableState.errorEmitted) {
          _this._writableState.errorEmitted = true;
          process$1.nextTick(emitErrorAndCloseNT, _this, err2);
        } else {
          process$1.nextTick(emitCloseNT, _this);
        }
      } else if (cb) {
        process$1.nextTick(emitCloseNT, _this);
        cb(err2);
      } else {
        process$1.nextTick(emitCloseNT, _this);
      }
    });
    return this;
  }
  function emitErrorAndCloseNT(self2, err) {
    emitErrorNT(self2, err);
    emitCloseNT(self2);
  }
  function emitCloseNT(self2) {
    if (self2._writableState && !self2._writableState.emitClose)
      return;
    if (self2._readableState && !self2._readableState.emitClose)
      return;
    self2.emit("close");
  }
  function undestroy() {
    if (this._readableState) {
      this._readableState.destroyed = false;
      this._readableState.reading = false;
      this._readableState.ended = false;
      this._readableState.endEmitted = false;
    }
    if (this._writableState) {
      this._writableState.destroyed = false;
      this._writableState.ended = false;
      this._writableState.ending = false;
      this._writableState.finalCalled = false;
      this._writableState.prefinished = false;
      this._writableState.finished = false;
      this._writableState.errorEmitted = false;
    }
  }
  function emitErrorNT(self2, err) {
    self2.emit("error", err);
  }
  function errorOrDestroy(stream, err) {
    var rState = stream._readableState;
    var wState = stream._writableState;
    if (rState && rState.autoDestroy || wState && wState.autoDestroy)
      stream.destroy(err);
    else
      stream.emit("error", err);
  }
  exports$c = {
    destroy,
    undestroy,
    errorOrDestroy
  };
  return exports$c;
}
function dew$b() {
  if (_dewExec$b)
    return exports$b;
  _dewExec$b = true;
  const codes = {};
  function createErrorType(code, message, Base) {
    if (!Base) {
      Base = Error;
    }
    function getMessage(arg1, arg2, arg3) {
      if (typeof message === "string") {
        return message;
      } else {
        return message(arg1, arg2, arg3);
      }
    }
    class NodeError extends Base {
      constructor(arg1, arg2, arg3) {
        super(getMessage(arg1, arg2, arg3));
      }
    }
    NodeError.prototype.name = Base.name;
    NodeError.prototype.code = code;
    codes[code] = NodeError;
  }
  function oneOf(expected, thing) {
    if (Array.isArray(expected)) {
      const len = expected.length;
      expected = expected.map((i5) => String(i5));
      if (len > 2) {
        return `one of ${thing} ${expected.slice(0, len - 1).join(", ")}, or ` + expected[len - 1];
      } else if (len === 2) {
        return `one of ${thing} ${expected[0]} or ${expected[1]}`;
      } else {
        return `of ${thing} ${expected[0]}`;
      }
    } else {
      return `of ${thing} ${String(expected)}`;
    }
  }
  function startsWith(str, search, pos) {
    return str.substr(!pos || pos < 0 ? 0 : +pos, search.length) === search;
  }
  function endsWith(str, search, this_len) {
    if (this_len === void 0 || this_len > str.length) {
      this_len = str.length;
    }
    return str.substring(this_len - search.length, this_len) === search;
  }
  function includes(str, search, start) {
    if (typeof start !== "number") {
      start = 0;
    }
    if (start + search.length > str.length) {
      return false;
    } else {
      return str.indexOf(search, start) !== -1;
    }
  }
  createErrorType("ERR_INVALID_OPT_VALUE", function(name2, value) {
    return 'The value "' + value + '" is invalid for option "' + name2 + '"';
  }, TypeError);
  createErrorType("ERR_INVALID_ARG_TYPE", function(name2, expected, actual) {
    let determiner;
    if (typeof expected === "string" && startsWith(expected, "not ")) {
      determiner = "must not be";
      expected = expected.replace(/^not /, "");
    } else {
      determiner = "must be";
    }
    let msg;
    if (endsWith(name2, " argument")) {
      msg = `The ${name2} ${determiner} ${oneOf(expected, "type")}`;
    } else {
      const type = includes(name2, ".") ? "property" : "argument";
      msg = `The "${name2}" ${type} ${determiner} ${oneOf(expected, "type")}`;
    }
    msg += `. Received type ${typeof actual}`;
    return msg;
  }, TypeError);
  createErrorType("ERR_STREAM_PUSH_AFTER_EOF", "stream.push() after EOF");
  createErrorType("ERR_METHOD_NOT_IMPLEMENTED", function(name2) {
    return "The " + name2 + " method is not implemented";
  });
  createErrorType("ERR_STREAM_PREMATURE_CLOSE", "Premature close");
  createErrorType("ERR_STREAM_DESTROYED", function(name2) {
    return "Cannot call " + name2 + " after a stream was destroyed";
  });
  createErrorType("ERR_MULTIPLE_CALLBACK", "Callback called multiple times");
  createErrorType("ERR_STREAM_CANNOT_PIPE", "Cannot pipe, not readable");
  createErrorType("ERR_STREAM_WRITE_AFTER_END", "write after end");
  createErrorType("ERR_STREAM_NULL_VALUES", "May not write null values to stream", TypeError);
  createErrorType("ERR_UNKNOWN_ENCODING", function(arg) {
    return "Unknown encoding: " + arg;
  }, TypeError);
  createErrorType("ERR_STREAM_UNSHIFT_AFTER_END_EVENT", "stream.unshift() after end event");
  exports$b.codes = codes;
  return exports$b;
}
function dew$a() {
  if (_dewExec$a)
    return exports$a;
  _dewExec$a = true;
  var ERR_INVALID_OPT_VALUE = dew$b().codes.ERR_INVALID_OPT_VALUE;
  function highWaterMarkFrom(options, isDuplex, duplexKey) {
    return options.highWaterMark != null ? options.highWaterMark : isDuplex ? options[duplexKey] : null;
  }
  function getHighWaterMark(state, options, duplexKey, isDuplex) {
    var hwm = highWaterMarkFrom(options, isDuplex, duplexKey);
    if (hwm != null) {
      if (!(isFinite(hwm) && Math.floor(hwm) === hwm) || hwm < 0) {
        var name2 = isDuplex ? duplexKey : "highWaterMark";
        throw new ERR_INVALID_OPT_VALUE(name2, hwm);
      }
      return Math.floor(hwm);
    }
    return state.objectMode ? 16 : 16 * 1024;
  }
  exports$a = {
    getHighWaterMark
  };
  return exports$a;
}
function dew$9() {
  if (_dewExec$9)
    return exports$9;
  _dewExec$9 = true;
  exports$9 = deprecate3;
  function deprecate3(fn, msg) {
    if (config("noDeprecation")) {
      return fn;
    }
    var warned = false;
    function deprecated() {
      if (!warned) {
        if (config("throwDeprecation")) {
          throw new Error(msg);
        } else if (config("traceDeprecation")) {
          console.trace(msg);
        } else {
          console.warn(msg);
        }
        warned = true;
      }
      return fn.apply(this || _global$2, arguments);
    }
    return deprecated;
  }
  function config(name2) {
    try {
      if (!_global$2.localStorage)
        return false;
    } catch (_3) {
      return false;
    }
    var val = _global$2.localStorage[name2];
    if (null == val)
      return false;
    return String(val).toLowerCase() === "true";
  }
  return exports$9;
}
function dew$8() {
  if (_dewExec$8)
    return exports$8;
  _dewExec$8 = true;
  var process$1 = process;
  exports$8 = Writable2;
  function CorkedRequest(state) {
    var _this = this;
    this.next = null;
    this.entry = null;
    this.finish = function() {
      onCorkedFinish(_this, state);
    };
  }
  var Duplex2;
  Writable2.WritableState = WritableState;
  var internalUtil = {
    deprecate: dew$9()
  };
  var Stream2 = dew$e();
  var Buffer2 = buffer.Buffer;
  var OurUint8Array = _global$1.Uint8Array || function() {
  };
  function _uint8ArrayToBuffer(chunk) {
    return Buffer2.from(chunk);
  }
  function _isUint8Array(obj) {
    return Buffer2.isBuffer(obj) || obj instanceof OurUint8Array;
  }
  var destroyImpl = dew$c();
  var _require = dew$a(), getHighWaterMark = _require.getHighWaterMark;
  var _require$codes = dew$b().codes, ERR_INVALID_ARG_TYPE = _require$codes.ERR_INVALID_ARG_TYPE, ERR_METHOD_NOT_IMPLEMENTED = _require$codes.ERR_METHOD_NOT_IMPLEMENTED, ERR_MULTIPLE_CALLBACK = _require$codes.ERR_MULTIPLE_CALLBACK, ERR_STREAM_CANNOT_PIPE = _require$codes.ERR_STREAM_CANNOT_PIPE, ERR_STREAM_DESTROYED = _require$codes.ERR_STREAM_DESTROYED, ERR_STREAM_NULL_VALUES = _require$codes.ERR_STREAM_NULL_VALUES, ERR_STREAM_WRITE_AFTER_END = _require$codes.ERR_STREAM_WRITE_AFTER_END, ERR_UNKNOWN_ENCODING = _require$codes.ERR_UNKNOWN_ENCODING;
  var errorOrDestroy = destroyImpl.errorOrDestroy;
  dew$f()(Writable2, Stream2);
  function nop() {
  }
  function WritableState(options, stream, isDuplex) {
    Duplex2 = Duplex2 || dew$7();
    options = options || {};
    if (typeof isDuplex !== "boolean")
      isDuplex = stream instanceof Duplex2;
    this.objectMode = !!options.objectMode;
    if (isDuplex)
      this.objectMode = this.objectMode || !!options.writableObjectMode;
    this.highWaterMark = getHighWaterMark(this, options, "writableHighWaterMark", isDuplex);
    this.finalCalled = false;
    this.needDrain = false;
    this.ending = false;
    this.ended = false;
    this.finished = false;
    this.destroyed = false;
    var noDecode = options.decodeStrings === false;
    this.decodeStrings = !noDecode;
    this.defaultEncoding = options.defaultEncoding || "utf8";
    this.length = 0;
    this.writing = false;
    this.corked = 0;
    this.sync = true;
    this.bufferProcessing = false;
    this.onwrite = function(er) {
      onwrite(stream, er);
    };
    this.writecb = null;
    this.writelen = 0;
    this.bufferedRequest = null;
    this.lastBufferedRequest = null;
    this.pendingcb = 0;
    this.prefinished = false;
    this.errorEmitted = false;
    this.emitClose = options.emitClose !== false;
    this.autoDestroy = !!options.autoDestroy;
    this.bufferedRequestCount = 0;
    this.corkedRequestsFree = new CorkedRequest(this);
  }
  WritableState.prototype.getBuffer = function getBuffer() {
    var current = this.bufferedRequest;
    var out = [];
    while (current) {
      out.push(current);
      current = current.next;
    }
    return out;
  };
  (function() {
    try {
      Object.defineProperty(WritableState.prototype, "buffer", {
        get: internalUtil.deprecate(function writableStateBufferGetter() {
          return this.getBuffer();
        }, "_writableState.buffer is deprecated. Use _writableState.getBuffer instead.", "DEP0003")
      });
    } catch (_3) {
    }
  })();
  var realHasInstance;
  if (typeof Symbol === "function" && Symbol.hasInstance && typeof Function.prototype[Symbol.hasInstance] === "function") {
    realHasInstance = Function.prototype[Symbol.hasInstance];
    Object.defineProperty(Writable2, Symbol.hasInstance, {
      value: function value(object) {
        if (realHasInstance.call(this, object))
          return true;
        if (this !== Writable2)
          return false;
        return object && object._writableState instanceof WritableState;
      }
    });
  } else {
    realHasInstance = function realHasInstance2(object) {
      return object instanceof this;
    };
  }
  function Writable2(options) {
    Duplex2 = Duplex2 || dew$7();
    var isDuplex = this instanceof Duplex2;
    if (!isDuplex && !realHasInstance.call(Writable2, this))
      return new Writable2(options);
    this._writableState = new WritableState(options, this, isDuplex);
    this.writable = true;
    if (options) {
      if (typeof options.write === "function")
        this._write = options.write;
      if (typeof options.writev === "function")
        this._writev = options.writev;
      if (typeof options.destroy === "function")
        this._destroy = options.destroy;
      if (typeof options.final === "function")
        this._final = options.final;
    }
    Stream2.call(this);
  }
  Writable2.prototype.pipe = function() {
    errorOrDestroy(this, new ERR_STREAM_CANNOT_PIPE());
  };
  function writeAfterEnd(stream, cb) {
    var er = new ERR_STREAM_WRITE_AFTER_END();
    errorOrDestroy(stream, er);
    process$1.nextTick(cb, er);
  }
  function validChunk(stream, state, chunk, cb) {
    var er;
    if (chunk === null) {
      er = new ERR_STREAM_NULL_VALUES();
    } else if (typeof chunk !== "string" && !state.objectMode) {
      er = new ERR_INVALID_ARG_TYPE("chunk", ["string", "Buffer"], chunk);
    }
    if (er) {
      errorOrDestroy(stream, er);
      process$1.nextTick(cb, er);
      return false;
    }
    return true;
  }
  Writable2.prototype.write = function(chunk, encoding, cb) {
    var state = this._writableState;
    var ret = false;
    var isBuf = !state.objectMode && _isUint8Array(chunk);
    if (isBuf && !Buffer2.isBuffer(chunk)) {
      chunk = _uint8ArrayToBuffer(chunk);
    }
    if (typeof encoding === "function") {
      cb = encoding;
      encoding = null;
    }
    if (isBuf)
      encoding = "buffer";
    else if (!encoding)
      encoding = state.defaultEncoding;
    if (typeof cb !== "function")
      cb = nop;
    if (state.ending)
      writeAfterEnd(this, cb);
    else if (isBuf || validChunk(this, state, chunk, cb)) {
      state.pendingcb++;
      ret = writeOrBuffer(this, state, isBuf, chunk, encoding, cb);
    }
    return ret;
  };
  Writable2.prototype.cork = function() {
    this._writableState.corked++;
  };
  Writable2.prototype.uncork = function() {
    var state = this._writableState;
    if (state.corked) {
      state.corked--;
      if (!state.writing && !state.corked && !state.bufferProcessing && state.bufferedRequest)
        clearBuffer(this, state);
    }
  };
  Writable2.prototype.setDefaultEncoding = function setDefaultEncoding(encoding) {
    if (typeof encoding === "string")
      encoding = encoding.toLowerCase();
    if (!(["hex", "utf8", "utf-8", "ascii", "binary", "base64", "ucs2", "ucs-2", "utf16le", "utf-16le", "raw"].indexOf((encoding + "").toLowerCase()) > -1))
      throw new ERR_UNKNOWN_ENCODING(encoding);
    this._writableState.defaultEncoding = encoding;
    return this;
  };
  Object.defineProperty(Writable2.prototype, "writableBuffer", {
    // making it explicit this property is not enumerable
    // because otherwise some prototype manipulation in
    // userland will fail
    enumerable: false,
    get: function get() {
      return this._writableState && this._writableState.getBuffer();
    }
  });
  function decodeChunk(state, chunk, encoding) {
    if (!state.objectMode && state.decodeStrings !== false && typeof chunk === "string") {
      chunk = Buffer2.from(chunk, encoding);
    }
    return chunk;
  }
  Object.defineProperty(Writable2.prototype, "writableHighWaterMark", {
    // making it explicit this property is not enumerable
    // because otherwise some prototype manipulation in
    // userland will fail
    enumerable: false,
    get: function get() {
      return this._writableState.highWaterMark;
    }
  });
  function writeOrBuffer(stream, state, isBuf, chunk, encoding, cb) {
    if (!isBuf) {
      var newChunk = decodeChunk(state, chunk, encoding);
      if (chunk !== newChunk) {
        isBuf = true;
        encoding = "buffer";
        chunk = newChunk;
      }
    }
    var len = state.objectMode ? 1 : chunk.length;
    state.length += len;
    var ret = state.length < state.highWaterMark;
    if (!ret)
      state.needDrain = true;
    if (state.writing || state.corked) {
      var last = state.lastBufferedRequest;
      state.lastBufferedRequest = {
        chunk,
        encoding,
        isBuf,
        callback: cb,
        next: null
      };
      if (last) {
        last.next = state.lastBufferedRequest;
      } else {
        state.bufferedRequest = state.lastBufferedRequest;
      }
      state.bufferedRequestCount += 1;
    } else {
      doWrite(stream, state, false, len, chunk, encoding, cb);
    }
    return ret;
  }
  function doWrite(stream, state, writev, len, chunk, encoding, cb) {
    state.writelen = len;
    state.writecb = cb;
    state.writing = true;
    state.sync = true;
    if (state.destroyed)
      state.onwrite(new ERR_STREAM_DESTROYED("write"));
    else if (writev)
      stream._writev(chunk, state.onwrite);
    else
      stream._write(chunk, encoding, state.onwrite);
    state.sync = false;
  }
  function onwriteError(stream, state, sync, er, cb) {
    --state.pendingcb;
    if (sync) {
      process$1.nextTick(cb, er);
      process$1.nextTick(finishMaybe, stream, state);
      stream._writableState.errorEmitted = true;
      errorOrDestroy(stream, er);
    } else {
      cb(er);
      stream._writableState.errorEmitted = true;
      errorOrDestroy(stream, er);
      finishMaybe(stream, state);
    }
  }
  function onwriteStateUpdate(state) {
    state.writing = false;
    state.writecb = null;
    state.length -= state.writelen;
    state.writelen = 0;
  }
  function onwrite(stream, er) {
    var state = stream._writableState;
    var sync = state.sync;
    var cb = state.writecb;
    if (typeof cb !== "function")
      throw new ERR_MULTIPLE_CALLBACK();
    onwriteStateUpdate(state);
    if (er)
      onwriteError(stream, state, sync, er, cb);
    else {
      var finished2 = needFinish(state) || stream.destroyed;
      if (!finished2 && !state.corked && !state.bufferProcessing && state.bufferedRequest) {
        clearBuffer(stream, state);
      }
      if (sync) {
        process$1.nextTick(afterWrite, stream, state, finished2, cb);
      } else {
        afterWrite(stream, state, finished2, cb);
      }
    }
  }
  function afterWrite(stream, state, finished2, cb) {
    if (!finished2)
      onwriteDrain(stream, state);
    state.pendingcb--;
    cb();
    finishMaybe(stream, state);
  }
  function onwriteDrain(stream, state) {
    if (state.length === 0 && state.needDrain) {
      state.needDrain = false;
      stream.emit("drain");
    }
  }
  function clearBuffer(stream, state) {
    state.bufferProcessing = true;
    var entry = state.bufferedRequest;
    if (stream._writev && entry && entry.next) {
      var l5 = state.bufferedRequestCount;
      var buffer2 = new Array(l5);
      var holder = state.corkedRequestsFree;
      holder.entry = entry;
      var count = 0;
      var allBuffers = true;
      while (entry) {
        buffer2[count] = entry;
        if (!entry.isBuf)
          allBuffers = false;
        entry = entry.next;
        count += 1;
      }
      buffer2.allBuffers = allBuffers;
      doWrite(stream, state, true, state.length, buffer2, "", holder.finish);
      state.pendingcb++;
      state.lastBufferedRequest = null;
      if (holder.next) {
        state.corkedRequestsFree = holder.next;
        holder.next = null;
      } else {
        state.corkedRequestsFree = new CorkedRequest(state);
      }
      state.bufferedRequestCount = 0;
    } else {
      while (entry) {
        var chunk = entry.chunk;
        var encoding = entry.encoding;
        var cb = entry.callback;
        var len = state.objectMode ? 1 : chunk.length;
        doWrite(stream, state, false, len, chunk, encoding, cb);
        entry = entry.next;
        state.bufferedRequestCount--;
        if (state.writing) {
          break;
        }
      }
      if (entry === null)
        state.lastBufferedRequest = null;
    }
    state.bufferedRequest = entry;
    state.bufferProcessing = false;
  }
  Writable2.prototype._write = function(chunk, encoding, cb) {
    cb(new ERR_METHOD_NOT_IMPLEMENTED("_write()"));
  };
  Writable2.prototype._writev = null;
  Writable2.prototype.end = function(chunk, encoding, cb) {
    var state = this._writableState;
    if (typeof chunk === "function") {
      cb = chunk;
      chunk = null;
      encoding = null;
    } else if (typeof encoding === "function") {
      cb = encoding;
      encoding = null;
    }
    if (chunk !== null && chunk !== void 0)
      this.write(chunk, encoding);
    if (state.corked) {
      state.corked = 1;
      this.uncork();
    }
    if (!state.ending)
      endWritable(this, state, cb);
    return this;
  };
  Object.defineProperty(Writable2.prototype, "writableLength", {
    // making it explicit this property is not enumerable
    // because otherwise some prototype manipulation in
    // userland will fail
    enumerable: false,
    get: function get() {
      return this._writableState.length;
    }
  });
  function needFinish(state) {
    return state.ending && state.length === 0 && state.bufferedRequest === null && !state.finished && !state.writing;
  }
  function callFinal(stream, state) {
    stream._final(function(err) {
      state.pendingcb--;
      if (err) {
        errorOrDestroy(stream, err);
      }
      state.prefinished = true;
      stream.emit("prefinish");
      finishMaybe(stream, state);
    });
  }
  function prefinish(stream, state) {
    if (!state.prefinished && !state.finalCalled) {
      if (typeof stream._final === "function" && !state.destroyed) {
        state.pendingcb++;
        state.finalCalled = true;
        process$1.nextTick(callFinal, stream, state);
      } else {
        state.prefinished = true;
        stream.emit("prefinish");
      }
    }
  }
  function finishMaybe(stream, state) {
    var need = needFinish(state);
    if (need) {
      prefinish(stream, state);
      if (state.pendingcb === 0) {
        state.finished = true;
        stream.emit("finish");
        if (state.autoDestroy) {
          var rState = stream._readableState;
          if (!rState || rState.autoDestroy && rState.endEmitted) {
            stream.destroy();
          }
        }
      }
    }
    return need;
  }
  function endWritable(stream, state, cb) {
    state.ending = true;
    finishMaybe(stream, state);
    if (cb) {
      if (state.finished)
        process$1.nextTick(cb);
      else
        stream.once("finish", cb);
    }
    state.ended = true;
    stream.writable = false;
  }
  function onCorkedFinish(corkReq, state, err) {
    var entry = corkReq.entry;
    corkReq.entry = null;
    while (entry) {
      var cb = entry.callback;
      state.pendingcb--;
      cb(err);
      entry = entry.next;
    }
    state.corkedRequestsFree.next = corkReq;
  }
  Object.defineProperty(Writable2.prototype, "destroyed", {
    // making it explicit this property is not enumerable
    // because otherwise some prototype manipulation in
    // userland will fail
    enumerable: false,
    get: function get() {
      if (this._writableState === void 0) {
        return false;
      }
      return this._writableState.destroyed;
    },
    set: function set(value) {
      if (!this._writableState) {
        return;
      }
      this._writableState.destroyed = value;
    }
  });
  Writable2.prototype.destroy = destroyImpl.destroy;
  Writable2.prototype._undestroy = destroyImpl.undestroy;
  Writable2.prototype._destroy = function(err, cb) {
    cb(err);
  };
  return exports$8;
}
function dew$7() {
  if (_dewExec$7)
    return exports$7;
  _dewExec$7 = true;
  var process$1 = process;
  var objectKeys = Object.keys || function(obj) {
    var keys2 = [];
    for (var key in obj) {
      keys2.push(key);
    }
    return keys2;
  };
  exports$7 = Duplex2;
  var Readable2 = dew$3();
  var Writable2 = dew$8();
  dew$f()(Duplex2, Readable2);
  {
    var keys = objectKeys(Writable2.prototype);
    for (var v4 = 0; v4 < keys.length; v4++) {
      var method = keys[v4];
      if (!Duplex2.prototype[method])
        Duplex2.prototype[method] = Writable2.prototype[method];
    }
  }
  function Duplex2(options) {
    if (!(this instanceof Duplex2))
      return new Duplex2(options);
    Readable2.call(this, options);
    Writable2.call(this, options);
    this.allowHalfOpen = true;
    if (options) {
      if (options.readable === false)
        this.readable = false;
      if (options.writable === false)
        this.writable = false;
      if (options.allowHalfOpen === false) {
        this.allowHalfOpen = false;
        this.once("end", onend);
      }
    }
  }
  Object.defineProperty(Duplex2.prototype, "writableHighWaterMark", {
    // making it explicit this property is not enumerable
    // because otherwise some prototype manipulation in
    // userland will fail
    enumerable: false,
    get: function get() {
      return this._writableState.highWaterMark;
    }
  });
  Object.defineProperty(Duplex2.prototype, "writableBuffer", {
    // making it explicit this property is not enumerable
    // because otherwise some prototype manipulation in
    // userland will fail
    enumerable: false,
    get: function get() {
      return this._writableState && this._writableState.getBuffer();
    }
  });
  Object.defineProperty(Duplex2.prototype, "writableLength", {
    // making it explicit this property is not enumerable
    // because otherwise some prototype manipulation in
    // userland will fail
    enumerable: false,
    get: function get() {
      return this._writableState.length;
    }
  });
  function onend() {
    if (this._writableState.ended)
      return;
    process$1.nextTick(onEndNT, this);
  }
  function onEndNT(self2) {
    self2.end();
  }
  Object.defineProperty(Duplex2.prototype, "destroyed", {
    // making it explicit this property is not enumerable
    // because otherwise some prototype manipulation in
    // userland will fail
    enumerable: false,
    get: function get() {
      if (this._readableState === void 0 || this._writableState === void 0) {
        return false;
      }
      return this._readableState.destroyed && this._writableState.destroyed;
    },
    set: function set(value) {
      if (this._readableState === void 0 || this._writableState === void 0) {
        return;
      }
      this._readableState.destroyed = value;
      this._writableState.destroyed = value;
    }
  });
  return exports$7;
}
function dew$6() {
  if (_dewExec$6)
    return exports$6;
  _dewExec$6 = true;
  var ERR_STREAM_PREMATURE_CLOSE = dew$b().codes.ERR_STREAM_PREMATURE_CLOSE;
  function once2(callback) {
    var called = false;
    return function() {
      if (called)
        return;
      called = true;
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      callback.apply(this, args);
    };
  }
  function noop() {
  }
  function isRequest(stream) {
    return stream.setHeader && typeof stream.abort === "function";
  }
  function eos(stream, opts, callback) {
    if (typeof opts === "function")
      return eos(stream, null, opts);
    if (!opts)
      opts = {};
    callback = once2(callback || noop);
    var readable = opts.readable || opts.readable !== false && stream.readable;
    var writable = opts.writable || opts.writable !== false && stream.writable;
    var onlegacyfinish = function onlegacyfinish2() {
      if (!stream.writable)
        onfinish();
    };
    var writableEnded = stream._writableState && stream._writableState.finished;
    var onfinish = function onfinish2() {
      writable = false;
      writableEnded = true;
      if (!readable)
        callback.call(stream);
    };
    var readableEnded = stream._readableState && stream._readableState.endEmitted;
    var onend = function onend2() {
      readable = false;
      readableEnded = true;
      if (!writable)
        callback.call(stream);
    };
    var onerror = function onerror2(err) {
      callback.call(stream, err);
    };
    var onclose = function onclose2() {
      var err;
      if (readable && !readableEnded) {
        if (!stream._readableState || !stream._readableState.ended)
          err = new ERR_STREAM_PREMATURE_CLOSE();
        return callback.call(stream, err);
      }
      if (writable && !writableEnded) {
        if (!stream._writableState || !stream._writableState.ended)
          err = new ERR_STREAM_PREMATURE_CLOSE();
        return callback.call(stream, err);
      }
    };
    var onrequest = function onrequest2() {
      stream.req.on("finish", onfinish);
    };
    if (isRequest(stream)) {
      stream.on("complete", onfinish);
      stream.on("abort", onclose);
      if (stream.req)
        onrequest();
      else
        stream.on("request", onrequest);
    } else if (writable && !stream._writableState) {
      stream.on("end", onlegacyfinish);
      stream.on("close", onlegacyfinish);
    }
    stream.on("end", onend);
    stream.on("finish", onfinish);
    if (opts.error !== false)
      stream.on("error", onerror);
    stream.on("close", onclose);
    return function() {
      stream.removeListener("complete", onfinish);
      stream.removeListener("abort", onclose);
      stream.removeListener("request", onrequest);
      if (stream.req)
        stream.req.removeListener("finish", onfinish);
      stream.removeListener("end", onlegacyfinish);
      stream.removeListener("close", onlegacyfinish);
      stream.removeListener("finish", onfinish);
      stream.removeListener("end", onend);
      stream.removeListener("error", onerror);
      stream.removeListener("close", onclose);
    };
  }
  exports$6 = eos;
  return exports$6;
}
function dew$5() {
  if (_dewExec$5)
    return exports$5;
  _dewExec$5 = true;
  var process$1 = process;
  var _Object$setPrototypeO;
  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }
    return obj;
  }
  var finished2 = dew$6();
  var kLastResolve = Symbol("lastResolve");
  var kLastReject = Symbol("lastReject");
  var kError = Symbol("error");
  var kEnded = Symbol("ended");
  var kLastPromise = Symbol("lastPromise");
  var kHandlePromise = Symbol("handlePromise");
  var kStream = Symbol("stream");
  function createIterResult2(value, done) {
    return {
      value,
      done
    };
  }
  function readAndResolve(iter) {
    var resolve = iter[kLastResolve];
    if (resolve !== null) {
      var data = iter[kStream].read();
      if (data !== null) {
        iter[kLastPromise] = null;
        iter[kLastResolve] = null;
        iter[kLastReject] = null;
        resolve(createIterResult2(data, false));
      }
    }
  }
  function onReadable(iter) {
    process$1.nextTick(readAndResolve, iter);
  }
  function wrapForNext(lastPromise, iter) {
    return function(resolve, reject) {
      lastPromise.then(function() {
        if (iter[kEnded]) {
          resolve(createIterResult2(void 0, true));
          return;
        }
        iter[kHandlePromise](resolve, reject);
      }, reject);
    };
  }
  var AsyncIteratorPrototype = Object.getPrototypeOf(function() {
  });
  var ReadableStreamAsyncIteratorPrototype = Object.setPrototypeOf((_Object$setPrototypeO = {
    get stream() {
      return this[kStream];
    },
    next: function next() {
      var _this = this;
      var error = this[kError];
      if (error !== null) {
        return Promise.reject(error);
      }
      if (this[kEnded]) {
        return Promise.resolve(createIterResult2(void 0, true));
      }
      if (this[kStream].destroyed) {
        return new Promise(function(resolve, reject) {
          process$1.nextTick(function() {
            if (_this[kError]) {
              reject(_this[kError]);
            } else {
              resolve(createIterResult2(void 0, true));
            }
          });
        });
      }
      var lastPromise = this[kLastPromise];
      var promise;
      if (lastPromise) {
        promise = new Promise(wrapForNext(lastPromise, this));
      } else {
        var data = this[kStream].read();
        if (data !== null) {
          return Promise.resolve(createIterResult2(data, false));
        }
        promise = new Promise(this[kHandlePromise]);
      }
      this[kLastPromise] = promise;
      return promise;
    }
  }, _defineProperty(_Object$setPrototypeO, Symbol.asyncIterator, function() {
    return this;
  }), _defineProperty(_Object$setPrototypeO, "return", function _return() {
    var _this2 = this;
    return new Promise(function(resolve, reject) {
      _this2[kStream].destroy(null, function(err) {
        if (err) {
          reject(err);
          return;
        }
        resolve(createIterResult2(void 0, true));
      });
    });
  }), _Object$setPrototypeO), AsyncIteratorPrototype);
  var createReadableStreamAsyncIterator = function createReadableStreamAsyncIterator2(stream) {
    var _Object$create;
    var iterator = Object.create(ReadableStreamAsyncIteratorPrototype, (_Object$create = {}, _defineProperty(_Object$create, kStream, {
      value: stream,
      writable: true
    }), _defineProperty(_Object$create, kLastResolve, {
      value: null,
      writable: true
    }), _defineProperty(_Object$create, kLastReject, {
      value: null,
      writable: true
    }), _defineProperty(_Object$create, kError, {
      value: null,
      writable: true
    }), _defineProperty(_Object$create, kEnded, {
      value: stream._readableState.endEmitted,
      writable: true
    }), _defineProperty(_Object$create, kHandlePromise, {
      value: function value(resolve, reject) {
        var data = iterator[kStream].read();
        if (data) {
          iterator[kLastPromise] = null;
          iterator[kLastResolve] = null;
          iterator[kLastReject] = null;
          resolve(createIterResult2(data, false));
        } else {
          iterator[kLastResolve] = resolve;
          iterator[kLastReject] = reject;
        }
      },
      writable: true
    }), _Object$create));
    iterator[kLastPromise] = null;
    finished2(stream, function(err) {
      if (err && err.code !== "ERR_STREAM_PREMATURE_CLOSE") {
        var reject = iterator[kLastReject];
        if (reject !== null) {
          iterator[kLastPromise] = null;
          iterator[kLastResolve] = null;
          iterator[kLastReject] = null;
          reject(err);
        }
        iterator[kError] = err;
        return;
      }
      var resolve = iterator[kLastResolve];
      if (resolve !== null) {
        iterator[kLastPromise] = null;
        iterator[kLastResolve] = null;
        iterator[kLastReject] = null;
        resolve(createIterResult2(void 0, true));
      }
      iterator[kEnded] = true;
    });
    stream.on("readable", onReadable.bind(null, iterator));
    return iterator;
  };
  exports$5 = createReadableStreamAsyncIterator;
  return exports$5;
}
function dew$4() {
  if (_dewExec$4)
    return exports$4;
  _dewExec$4 = true;
  exports$4 = function() {
    throw new Error("Readable.from is not available in the browser");
  };
  return exports$4;
}
function dew$3() {
  if (_dewExec$3)
    return exports$3;
  _dewExec$3 = true;
  var process$1 = process;
  exports$3 = Readable2;
  var Duplex2;
  Readable2.ReadableState = ReadableState;
  y.EventEmitter;
  var EElistenerCount = function EElistenerCount2(emitter, type) {
    return emitter.listeners(type).length;
  };
  var Stream2 = dew$e();
  var Buffer2 = buffer.Buffer;
  var OurUint8Array = _global2.Uint8Array || function() {
  };
  function _uint8ArrayToBuffer(chunk) {
    return Buffer2.from(chunk);
  }
  function _isUint8Array(obj) {
    return Buffer2.isBuffer(obj) || obj instanceof OurUint8Array;
  }
  var debugUtil = X;
  var debug;
  if (debugUtil && debugUtil.debuglog) {
    debug = debugUtil.debuglog("stream");
  } else {
    debug = function debug2() {
    };
  }
  var BufferList = dew$d();
  var destroyImpl = dew$c();
  var _require = dew$a(), getHighWaterMark = _require.getHighWaterMark;
  var _require$codes = dew$b().codes, ERR_INVALID_ARG_TYPE = _require$codes.ERR_INVALID_ARG_TYPE, ERR_STREAM_PUSH_AFTER_EOF = _require$codes.ERR_STREAM_PUSH_AFTER_EOF, ERR_METHOD_NOT_IMPLEMENTED = _require$codes.ERR_METHOD_NOT_IMPLEMENTED, ERR_STREAM_UNSHIFT_AFTER_END_EVENT = _require$codes.ERR_STREAM_UNSHIFT_AFTER_END_EVENT;
  var StringDecoder2;
  var createReadableStreamAsyncIterator;
  var from;
  dew$f()(Readable2, Stream2);
  var errorOrDestroy = destroyImpl.errorOrDestroy;
  var kProxyEvents = ["error", "close", "destroy", "pause", "resume"];
  function prependListener(emitter, event, fn) {
    if (typeof emitter.prependListener === "function")
      return emitter.prependListener(event, fn);
    if (!emitter._events || !emitter._events[event])
      emitter.on(event, fn);
    else if (Array.isArray(emitter._events[event]))
      emitter._events[event].unshift(fn);
    else
      emitter._events[event] = [fn, emitter._events[event]];
  }
  function ReadableState(options, stream, isDuplex) {
    Duplex2 = Duplex2 || dew$7();
    options = options || {};
    if (typeof isDuplex !== "boolean")
      isDuplex = stream instanceof Duplex2;
    this.objectMode = !!options.objectMode;
    if (isDuplex)
      this.objectMode = this.objectMode || !!options.readableObjectMode;
    this.highWaterMark = getHighWaterMark(this, options, "readableHighWaterMark", isDuplex);
    this.buffer = new BufferList();
    this.length = 0;
    this.pipes = null;
    this.pipesCount = 0;
    this.flowing = null;
    this.ended = false;
    this.endEmitted = false;
    this.reading = false;
    this.sync = true;
    this.needReadable = false;
    this.emittedReadable = false;
    this.readableListening = false;
    this.resumeScheduled = false;
    this.paused = true;
    this.emitClose = options.emitClose !== false;
    this.autoDestroy = !!options.autoDestroy;
    this.destroyed = false;
    this.defaultEncoding = options.defaultEncoding || "utf8";
    this.awaitDrain = 0;
    this.readingMore = false;
    this.decoder = null;
    this.encoding = null;
    if (options.encoding) {
      if (!StringDecoder2)
        StringDecoder2 = e$12.StringDecoder;
      this.decoder = new StringDecoder2(options.encoding);
      this.encoding = options.encoding;
    }
  }
  function Readable2(options) {
    Duplex2 = Duplex2 || dew$7();
    if (!(this instanceof Readable2))
      return new Readable2(options);
    var isDuplex = this instanceof Duplex2;
    this._readableState = new ReadableState(options, this, isDuplex);
    this.readable = true;
    if (options) {
      if (typeof options.read === "function")
        this._read = options.read;
      if (typeof options.destroy === "function")
        this._destroy = options.destroy;
    }
    Stream2.call(this);
  }
  Object.defineProperty(Readable2.prototype, "destroyed", {
    // making it explicit this property is not enumerable
    // because otherwise some prototype manipulation in
    // userland will fail
    enumerable: false,
    get: function get() {
      if (this._readableState === void 0) {
        return false;
      }
      return this._readableState.destroyed;
    },
    set: function set(value) {
      if (!this._readableState) {
        return;
      }
      this._readableState.destroyed = value;
    }
  });
  Readable2.prototype.destroy = destroyImpl.destroy;
  Readable2.prototype._undestroy = destroyImpl.undestroy;
  Readable2.prototype._destroy = function(err, cb) {
    cb(err);
  };
  Readable2.prototype.push = function(chunk, encoding) {
    var state = this._readableState;
    var skipChunkCheck;
    if (!state.objectMode) {
      if (typeof chunk === "string") {
        encoding = encoding || state.defaultEncoding;
        if (encoding !== state.encoding) {
          chunk = Buffer2.from(chunk, encoding);
          encoding = "";
        }
        skipChunkCheck = true;
      }
    } else {
      skipChunkCheck = true;
    }
    return readableAddChunk(this, chunk, encoding, false, skipChunkCheck);
  };
  Readable2.prototype.unshift = function(chunk) {
    return readableAddChunk(this, chunk, null, true, false);
  };
  function readableAddChunk(stream, chunk, encoding, addToFront, skipChunkCheck) {
    debug("readableAddChunk", chunk);
    var state = stream._readableState;
    if (chunk === null) {
      state.reading = false;
      onEofChunk(stream, state);
    } else {
      var er;
      if (!skipChunkCheck)
        er = chunkInvalid(state, chunk);
      if (er) {
        errorOrDestroy(stream, er);
      } else if (state.objectMode || chunk && chunk.length > 0) {
        if (typeof chunk !== "string" && !state.objectMode && Object.getPrototypeOf(chunk) !== Buffer2.prototype) {
          chunk = _uint8ArrayToBuffer(chunk);
        }
        if (addToFront) {
          if (state.endEmitted)
            errorOrDestroy(stream, new ERR_STREAM_UNSHIFT_AFTER_END_EVENT());
          else
            addChunk(stream, state, chunk, true);
        } else if (state.ended) {
          errorOrDestroy(stream, new ERR_STREAM_PUSH_AFTER_EOF());
        } else if (state.destroyed) {
          return false;
        } else {
          state.reading = false;
          if (state.decoder && !encoding) {
            chunk = state.decoder.write(chunk);
            if (state.objectMode || chunk.length !== 0)
              addChunk(stream, state, chunk, false);
            else
              maybeReadMore(stream, state);
          } else {
            addChunk(stream, state, chunk, false);
          }
        }
      } else if (!addToFront) {
        state.reading = false;
        maybeReadMore(stream, state);
      }
    }
    return !state.ended && (state.length < state.highWaterMark || state.length === 0);
  }
  function addChunk(stream, state, chunk, addToFront) {
    if (state.flowing && state.length === 0 && !state.sync) {
      state.awaitDrain = 0;
      stream.emit("data", chunk);
    } else {
      state.length += state.objectMode ? 1 : chunk.length;
      if (addToFront)
        state.buffer.unshift(chunk);
      else
        state.buffer.push(chunk);
      if (state.needReadable)
        emitReadable(stream);
    }
    maybeReadMore(stream, state);
  }
  function chunkInvalid(state, chunk) {
    var er;
    if (!_isUint8Array(chunk) && typeof chunk !== "string" && chunk !== void 0 && !state.objectMode) {
      er = new ERR_INVALID_ARG_TYPE("chunk", ["string", "Buffer", "Uint8Array"], chunk);
    }
    return er;
  }
  Readable2.prototype.isPaused = function() {
    return this._readableState.flowing === false;
  };
  Readable2.prototype.setEncoding = function(enc) {
    if (!StringDecoder2)
      StringDecoder2 = e$12.StringDecoder;
    var decoder = new StringDecoder2(enc);
    this._readableState.decoder = decoder;
    this._readableState.encoding = this._readableState.decoder.encoding;
    var p5 = this._readableState.buffer.head;
    var content = "";
    while (p5 !== null) {
      content += decoder.write(p5.data);
      p5 = p5.next;
    }
    this._readableState.buffer.clear();
    if (content !== "")
      this._readableState.buffer.push(content);
    this._readableState.length = content.length;
    return this;
  };
  var MAX_HWM = 1073741824;
  function computeNewHighWaterMark(n5) {
    if (n5 >= MAX_HWM) {
      n5 = MAX_HWM;
    } else {
      n5--;
      n5 |= n5 >>> 1;
      n5 |= n5 >>> 2;
      n5 |= n5 >>> 4;
      n5 |= n5 >>> 8;
      n5 |= n5 >>> 16;
      n5++;
    }
    return n5;
  }
  function howMuchToRead(n5, state) {
    if (n5 <= 0 || state.length === 0 && state.ended)
      return 0;
    if (state.objectMode)
      return 1;
    if (n5 !== n5) {
      if (state.flowing && state.length)
        return state.buffer.head.data.length;
      else
        return state.length;
    }
    if (n5 > state.highWaterMark)
      state.highWaterMark = computeNewHighWaterMark(n5);
    if (n5 <= state.length)
      return n5;
    if (!state.ended) {
      state.needReadable = true;
      return 0;
    }
    return state.length;
  }
  Readable2.prototype.read = function(n5) {
    debug("read", n5);
    n5 = parseInt(n5, 10);
    var state = this._readableState;
    var nOrig = n5;
    if (n5 !== 0)
      state.emittedReadable = false;
    if (n5 === 0 && state.needReadable && ((state.highWaterMark !== 0 ? state.length >= state.highWaterMark : state.length > 0) || state.ended)) {
      debug("read: emitReadable", state.length, state.ended);
      if (state.length === 0 && state.ended)
        endReadable(this);
      else
        emitReadable(this);
      return null;
    }
    n5 = howMuchToRead(n5, state);
    if (n5 === 0 && state.ended) {
      if (state.length === 0)
        endReadable(this);
      return null;
    }
    var doRead = state.needReadable;
    debug("need readable", doRead);
    if (state.length === 0 || state.length - n5 < state.highWaterMark) {
      doRead = true;
      debug("length less than watermark", doRead);
    }
    if (state.ended || state.reading) {
      doRead = false;
      debug("reading or ended", doRead);
    } else if (doRead) {
      debug("do read");
      state.reading = true;
      state.sync = true;
      if (state.length === 0)
        state.needReadable = true;
      this._read(state.highWaterMark);
      state.sync = false;
      if (!state.reading)
        n5 = howMuchToRead(nOrig, state);
    }
    var ret;
    if (n5 > 0)
      ret = fromList(n5, state);
    else
      ret = null;
    if (ret === null) {
      state.needReadable = state.length <= state.highWaterMark;
      n5 = 0;
    } else {
      state.length -= n5;
      state.awaitDrain = 0;
    }
    if (state.length === 0) {
      if (!state.ended)
        state.needReadable = true;
      if (nOrig !== n5 && state.ended)
        endReadable(this);
    }
    if (ret !== null)
      this.emit("data", ret);
    return ret;
  };
  function onEofChunk(stream, state) {
    debug("onEofChunk");
    if (state.ended)
      return;
    if (state.decoder) {
      var chunk = state.decoder.end();
      if (chunk && chunk.length) {
        state.buffer.push(chunk);
        state.length += state.objectMode ? 1 : chunk.length;
      }
    }
    state.ended = true;
    if (state.sync) {
      emitReadable(stream);
    } else {
      state.needReadable = false;
      if (!state.emittedReadable) {
        state.emittedReadable = true;
        emitReadable_(stream);
      }
    }
  }
  function emitReadable(stream) {
    var state = stream._readableState;
    debug("emitReadable", state.needReadable, state.emittedReadable);
    state.needReadable = false;
    if (!state.emittedReadable) {
      debug("emitReadable", state.flowing);
      state.emittedReadable = true;
      process$1.nextTick(emitReadable_, stream);
    }
  }
  function emitReadable_(stream) {
    var state = stream._readableState;
    debug("emitReadable_", state.destroyed, state.length, state.ended);
    if (!state.destroyed && (state.length || state.ended)) {
      stream.emit("readable");
      state.emittedReadable = false;
    }
    state.needReadable = !state.flowing && !state.ended && state.length <= state.highWaterMark;
    flow(stream);
  }
  function maybeReadMore(stream, state) {
    if (!state.readingMore) {
      state.readingMore = true;
      process$1.nextTick(maybeReadMore_, stream, state);
    }
  }
  function maybeReadMore_(stream, state) {
    while (!state.reading && !state.ended && (state.length < state.highWaterMark || state.flowing && state.length === 0)) {
      var len = state.length;
      debug("maybeReadMore read 0");
      stream.read(0);
      if (len === state.length)
        break;
    }
    state.readingMore = false;
  }
  Readable2.prototype._read = function(n5) {
    errorOrDestroy(this, new ERR_METHOD_NOT_IMPLEMENTED("_read()"));
  };
  Readable2.prototype.pipe = function(dest, pipeOpts) {
    var src = this;
    var state = this._readableState;
    switch (state.pipesCount) {
      case 0:
        state.pipes = dest;
        break;
      case 1:
        state.pipes = [state.pipes, dest];
        break;
      default:
        state.pipes.push(dest);
        break;
    }
    state.pipesCount += 1;
    debug("pipe count=%d opts=%j", state.pipesCount, pipeOpts);
    var doEnd = (!pipeOpts || pipeOpts.end !== false) && dest !== process$1.stdout && dest !== process$1.stderr;
    var endFn = doEnd ? onend : unpipe;
    if (state.endEmitted)
      process$1.nextTick(endFn);
    else
      src.once("end", endFn);
    dest.on("unpipe", onunpipe);
    function onunpipe(readable, unpipeInfo) {
      debug("onunpipe");
      if (readable === src) {
        if (unpipeInfo && unpipeInfo.hasUnpiped === false) {
          unpipeInfo.hasUnpiped = true;
          cleanup();
        }
      }
    }
    function onend() {
      debug("onend");
      dest.end();
    }
    var ondrain = pipeOnDrain(src);
    dest.on("drain", ondrain);
    var cleanedUp = false;
    function cleanup() {
      debug("cleanup");
      dest.removeListener("close", onclose);
      dest.removeListener("finish", onfinish);
      dest.removeListener("drain", ondrain);
      dest.removeListener("error", onerror);
      dest.removeListener("unpipe", onunpipe);
      src.removeListener("end", onend);
      src.removeListener("end", unpipe);
      src.removeListener("data", ondata);
      cleanedUp = true;
      if (state.awaitDrain && (!dest._writableState || dest._writableState.needDrain))
        ondrain();
    }
    src.on("data", ondata);
    function ondata(chunk) {
      debug("ondata");
      var ret = dest.write(chunk);
      debug("dest.write", ret);
      if (ret === false) {
        if ((state.pipesCount === 1 && state.pipes === dest || state.pipesCount > 1 && indexOf(state.pipes, dest) !== -1) && !cleanedUp) {
          debug("false write response, pause", state.awaitDrain);
          state.awaitDrain++;
        }
        src.pause();
      }
    }
    function onerror(er) {
      debug("onerror", er);
      unpipe();
      dest.removeListener("error", onerror);
      if (EElistenerCount(dest, "error") === 0)
        errorOrDestroy(dest, er);
    }
    prependListener(dest, "error", onerror);
    function onclose() {
      dest.removeListener("finish", onfinish);
      unpipe();
    }
    dest.once("close", onclose);
    function onfinish() {
      debug("onfinish");
      dest.removeListener("close", onclose);
      unpipe();
    }
    dest.once("finish", onfinish);
    function unpipe() {
      debug("unpipe");
      src.unpipe(dest);
    }
    dest.emit("pipe", src);
    if (!state.flowing) {
      debug("pipe resume");
      src.resume();
    }
    return dest;
  };
  function pipeOnDrain(src) {
    return function pipeOnDrainFunctionResult() {
      var state = src._readableState;
      debug("pipeOnDrain", state.awaitDrain);
      if (state.awaitDrain)
        state.awaitDrain--;
      if (state.awaitDrain === 0 && EElistenerCount(src, "data")) {
        state.flowing = true;
        flow(src);
      }
    };
  }
  Readable2.prototype.unpipe = function(dest) {
    var state = this._readableState;
    var unpipeInfo = {
      hasUnpiped: false
    };
    if (state.pipesCount === 0)
      return this;
    if (state.pipesCount === 1) {
      if (dest && dest !== state.pipes)
        return this;
      if (!dest)
        dest = state.pipes;
      state.pipes = null;
      state.pipesCount = 0;
      state.flowing = false;
      if (dest)
        dest.emit("unpipe", this, unpipeInfo);
      return this;
    }
    if (!dest) {
      var dests = state.pipes;
      var len = state.pipesCount;
      state.pipes = null;
      state.pipesCount = 0;
      state.flowing = false;
      for (var i5 = 0; i5 < len; i5++) {
        dests[i5].emit("unpipe", this, {
          hasUnpiped: false
        });
      }
      return this;
    }
    var index = indexOf(state.pipes, dest);
    if (index === -1)
      return this;
    state.pipes.splice(index, 1);
    state.pipesCount -= 1;
    if (state.pipesCount === 1)
      state.pipes = state.pipes[0];
    dest.emit("unpipe", this, unpipeInfo);
    return this;
  };
  Readable2.prototype.on = function(ev, fn) {
    var res = Stream2.prototype.on.call(this, ev, fn);
    var state = this._readableState;
    if (ev === "data") {
      state.readableListening = this.listenerCount("readable") > 0;
      if (state.flowing !== false)
        this.resume();
    } else if (ev === "readable") {
      if (!state.endEmitted && !state.readableListening) {
        state.readableListening = state.needReadable = true;
        state.flowing = false;
        state.emittedReadable = false;
        debug("on readable", state.length, state.reading);
        if (state.length) {
          emitReadable(this);
        } else if (!state.reading) {
          process$1.nextTick(nReadingNextTick, this);
        }
      }
    }
    return res;
  };
  Readable2.prototype.addListener = Readable2.prototype.on;
  Readable2.prototype.removeListener = function(ev, fn) {
    var res = Stream2.prototype.removeListener.call(this, ev, fn);
    if (ev === "readable") {
      process$1.nextTick(updateReadableListening, this);
    }
    return res;
  };
  Readable2.prototype.removeAllListeners = function(ev) {
    var res = Stream2.prototype.removeAllListeners.apply(this, arguments);
    if (ev === "readable" || ev === void 0) {
      process$1.nextTick(updateReadableListening, this);
    }
    return res;
  };
  function updateReadableListening(self2) {
    var state = self2._readableState;
    state.readableListening = self2.listenerCount("readable") > 0;
    if (state.resumeScheduled && !state.paused) {
      state.flowing = true;
    } else if (self2.listenerCount("data") > 0) {
      self2.resume();
    }
  }
  function nReadingNextTick(self2) {
    debug("readable nexttick read 0");
    self2.read(0);
  }
  Readable2.prototype.resume = function() {
    var state = this._readableState;
    if (!state.flowing) {
      debug("resume");
      state.flowing = !state.readableListening;
      resume(this, state);
    }
    state.paused = false;
    return this;
  };
  function resume(stream, state) {
    if (!state.resumeScheduled) {
      state.resumeScheduled = true;
      process$1.nextTick(resume_, stream, state);
    }
  }
  function resume_(stream, state) {
    debug("resume", state.reading);
    if (!state.reading) {
      stream.read(0);
    }
    state.resumeScheduled = false;
    stream.emit("resume");
    flow(stream);
    if (state.flowing && !state.reading)
      stream.read(0);
  }
  Readable2.prototype.pause = function() {
    debug("call pause flowing=%j", this._readableState.flowing);
    if (this._readableState.flowing !== false) {
      debug("pause");
      this._readableState.flowing = false;
      this.emit("pause");
    }
    this._readableState.paused = true;
    return this;
  };
  function flow(stream) {
    var state = stream._readableState;
    debug("flow", state.flowing);
    while (state.flowing && stream.read() !== null) {
    }
  }
  Readable2.prototype.wrap = function(stream) {
    var _this = this;
    var state = this._readableState;
    var paused = false;
    stream.on("end", function() {
      debug("wrapped end");
      if (state.decoder && !state.ended) {
        var chunk = state.decoder.end();
        if (chunk && chunk.length)
          _this.push(chunk);
      }
      _this.push(null);
    });
    stream.on("data", function(chunk) {
      debug("wrapped data");
      if (state.decoder)
        chunk = state.decoder.write(chunk);
      if (state.objectMode && (chunk === null || chunk === void 0))
        return;
      else if (!state.objectMode && (!chunk || !chunk.length))
        return;
      var ret = _this.push(chunk);
      if (!ret) {
        paused = true;
        stream.pause();
      }
    });
    for (var i5 in stream) {
      if (this[i5] === void 0 && typeof stream[i5] === "function") {
        this[i5] = function methodWrap(method) {
          return function methodWrapReturnFunction() {
            return stream[method].apply(stream, arguments);
          };
        }(i5);
      }
    }
    for (var n5 = 0; n5 < kProxyEvents.length; n5++) {
      stream.on(kProxyEvents[n5], this.emit.bind(this, kProxyEvents[n5]));
    }
    this._read = function(n6) {
      debug("wrapped _read", n6);
      if (paused) {
        paused = false;
        stream.resume();
      }
    };
    return this;
  };
  if (typeof Symbol === "function") {
    Readable2.prototype[Symbol.asyncIterator] = function() {
      if (createReadableStreamAsyncIterator === void 0) {
        createReadableStreamAsyncIterator = dew$5();
      }
      return createReadableStreamAsyncIterator(this);
    };
  }
  Object.defineProperty(Readable2.prototype, "readableHighWaterMark", {
    // making it explicit this property is not enumerable
    // because otherwise some prototype manipulation in
    // userland will fail
    enumerable: false,
    get: function get() {
      return this._readableState.highWaterMark;
    }
  });
  Object.defineProperty(Readable2.prototype, "readableBuffer", {
    // making it explicit this property is not enumerable
    // because otherwise some prototype manipulation in
    // userland will fail
    enumerable: false,
    get: function get() {
      return this._readableState && this._readableState.buffer;
    }
  });
  Object.defineProperty(Readable2.prototype, "readableFlowing", {
    // making it explicit this property is not enumerable
    // because otherwise some prototype manipulation in
    // userland will fail
    enumerable: false,
    get: function get() {
      return this._readableState.flowing;
    },
    set: function set(state) {
      if (this._readableState) {
        this._readableState.flowing = state;
      }
    }
  });
  Readable2._fromList = fromList;
  Object.defineProperty(Readable2.prototype, "readableLength", {
    // making it explicit this property is not enumerable
    // because otherwise some prototype manipulation in
    // userland will fail
    enumerable: false,
    get: function get() {
      return this._readableState.length;
    }
  });
  function fromList(n5, state) {
    if (state.length === 0)
      return null;
    var ret;
    if (state.objectMode)
      ret = state.buffer.shift();
    else if (!n5 || n5 >= state.length) {
      if (state.decoder)
        ret = state.buffer.join("");
      else if (state.buffer.length === 1)
        ret = state.buffer.first();
      else
        ret = state.buffer.concat(state.length);
      state.buffer.clear();
    } else {
      ret = state.buffer.consume(n5, state.decoder);
    }
    return ret;
  }
  function endReadable(stream) {
    var state = stream._readableState;
    debug("endReadable", state.endEmitted);
    if (!state.endEmitted) {
      state.ended = true;
      process$1.nextTick(endReadableNT, state, stream);
    }
  }
  function endReadableNT(state, stream) {
    debug("endReadableNT", state.endEmitted, state.length);
    if (!state.endEmitted && state.length === 0) {
      state.endEmitted = true;
      stream.readable = false;
      stream.emit("end");
      if (state.autoDestroy) {
        var wState = stream._writableState;
        if (!wState || wState.autoDestroy && wState.finished) {
          stream.destroy();
        }
      }
    }
  }
  if (typeof Symbol === "function") {
    Readable2.from = function(iterable, opts) {
      if (from === void 0) {
        from = dew$4();
      }
      return from(Readable2, iterable, opts);
    };
  }
  function indexOf(xs, x3) {
    for (var i5 = 0, l5 = xs.length; i5 < l5; i5++) {
      if (xs[i5] === x3)
        return i5;
    }
    return -1;
  }
  return exports$3;
}
function dew$2() {
  if (_dewExec$2)
    return exports$2;
  _dewExec$2 = true;
  exports$2 = Transform2;
  var _require$codes = dew$b().codes, ERR_METHOD_NOT_IMPLEMENTED = _require$codes.ERR_METHOD_NOT_IMPLEMENTED, ERR_MULTIPLE_CALLBACK = _require$codes.ERR_MULTIPLE_CALLBACK, ERR_TRANSFORM_ALREADY_TRANSFORMING = _require$codes.ERR_TRANSFORM_ALREADY_TRANSFORMING, ERR_TRANSFORM_WITH_LENGTH_0 = _require$codes.ERR_TRANSFORM_WITH_LENGTH_0;
  var Duplex2 = dew$7();
  dew$f()(Transform2, Duplex2);
  function afterTransform(er, data) {
    var ts = this._transformState;
    ts.transforming = false;
    var cb = ts.writecb;
    if (cb === null) {
      return this.emit("error", new ERR_MULTIPLE_CALLBACK());
    }
    ts.writechunk = null;
    ts.writecb = null;
    if (data != null)
      this.push(data);
    cb(er);
    var rs = this._readableState;
    rs.reading = false;
    if (rs.needReadable || rs.length < rs.highWaterMark) {
      this._read(rs.highWaterMark);
    }
  }
  function Transform2(options) {
    if (!(this instanceof Transform2))
      return new Transform2(options);
    Duplex2.call(this, options);
    this._transformState = {
      afterTransform: afterTransform.bind(this),
      needTransform: false,
      transforming: false,
      writecb: null,
      writechunk: null,
      writeencoding: null
    };
    this._readableState.needReadable = true;
    this._readableState.sync = false;
    if (options) {
      if (typeof options.transform === "function")
        this._transform = options.transform;
      if (typeof options.flush === "function")
        this._flush = options.flush;
    }
    this.on("prefinish", prefinish);
  }
  function prefinish() {
    var _this = this;
    if (typeof this._flush === "function" && !this._readableState.destroyed) {
      this._flush(function(er, data) {
        done(_this, er, data);
      });
    } else {
      done(this, null, null);
    }
  }
  Transform2.prototype.push = function(chunk, encoding) {
    this._transformState.needTransform = false;
    return Duplex2.prototype.push.call(this, chunk, encoding);
  };
  Transform2.prototype._transform = function(chunk, encoding, cb) {
    cb(new ERR_METHOD_NOT_IMPLEMENTED("_transform()"));
  };
  Transform2.prototype._write = function(chunk, encoding, cb) {
    var ts = this._transformState;
    ts.writecb = cb;
    ts.writechunk = chunk;
    ts.writeencoding = encoding;
    if (!ts.transforming) {
      var rs = this._readableState;
      if (ts.needTransform || rs.needReadable || rs.length < rs.highWaterMark)
        this._read(rs.highWaterMark);
    }
  };
  Transform2.prototype._read = function(n5) {
    var ts = this._transformState;
    if (ts.writechunk !== null && !ts.transforming) {
      ts.transforming = true;
      this._transform(ts.writechunk, ts.writeencoding, ts.afterTransform);
    } else {
      ts.needTransform = true;
    }
  };
  Transform2.prototype._destroy = function(err, cb) {
    Duplex2.prototype._destroy.call(this, err, function(err2) {
      cb(err2);
    });
  };
  function done(stream, er, data) {
    if (er)
      return stream.emit("error", er);
    if (data != null)
      stream.push(data);
    if (stream._writableState.length)
      throw new ERR_TRANSFORM_WITH_LENGTH_0();
    if (stream._transformState.transforming)
      throw new ERR_TRANSFORM_ALREADY_TRANSFORMING();
    return stream.push(null);
  }
  return exports$2;
}
function dew$1() {
  if (_dewExec$1)
    return exports$1;
  _dewExec$1 = true;
  exports$1 = PassThrough2;
  var Transform2 = dew$2();
  dew$f()(PassThrough2, Transform2);
  function PassThrough2(options) {
    if (!(this instanceof PassThrough2))
      return new PassThrough2(options);
    Transform2.call(this, options);
  }
  PassThrough2.prototype._transform = function(chunk, encoding, cb) {
    cb(null, chunk);
  };
  return exports$1;
}
function dew2() {
  if (_dewExec2)
    return exports2;
  _dewExec2 = true;
  var eos;
  function once2(callback) {
    var called = false;
    return function() {
      if (called)
        return;
      called = true;
      callback.apply(void 0, arguments);
    };
  }
  var _require$codes = dew$b().codes, ERR_MISSING_ARGS = _require$codes.ERR_MISSING_ARGS, ERR_STREAM_DESTROYED = _require$codes.ERR_STREAM_DESTROYED;
  function noop(err) {
    if (err)
      throw err;
  }
  function isRequest(stream) {
    return stream.setHeader && typeof stream.abort === "function";
  }
  function destroyer(stream, reading, writing, callback) {
    callback = once2(callback);
    var closed = false;
    stream.on("close", function() {
      closed = true;
    });
    if (eos === void 0)
      eos = dew$6();
    eos(stream, {
      readable: reading,
      writable: writing
    }, function(err) {
      if (err)
        return callback(err);
      closed = true;
      callback();
    });
    var destroyed = false;
    return function(err) {
      if (closed)
        return;
      if (destroyed)
        return;
      destroyed = true;
      if (isRequest(stream))
        return stream.abort();
      if (typeof stream.destroy === "function")
        return stream.destroy();
      callback(err || new ERR_STREAM_DESTROYED("pipe"));
    };
  }
  function call(fn) {
    fn();
  }
  function pipe(from, to) {
    return from.pipe(to);
  }
  function popCallback(streams) {
    if (!streams.length)
      return noop;
    if (typeof streams[streams.length - 1] !== "function")
      return noop;
    return streams.pop();
  }
  function pipeline2() {
    for (var _len = arguments.length, streams = new Array(_len), _key = 0; _key < _len; _key++) {
      streams[_key] = arguments[_key];
    }
    var callback = popCallback(streams);
    if (Array.isArray(streams[0]))
      streams = streams[0];
    if (streams.length < 2) {
      throw new ERR_MISSING_ARGS("streams");
    }
    var error;
    var destroys = streams.map(function(stream, i5) {
      var reading = i5 < streams.length - 1;
      var writing = i5 > 0;
      return destroyer(stream, reading, writing, function(err) {
        if (!error)
          error = err;
        if (err)
          destroys.forEach(call);
        if (reading)
          return;
        destroys.forEach(call);
        callback(error);
      });
    });
    return streams.reduce(pipe);
  }
  exports2 = pipeline2;
  return exports2;
}
var exports$2$1, _dewExec$2$1, exports$1$1, _dewExec$1$1, exports$g, _dewExec$g, buffer, exports$f, _dewExec$f, exports$e, _dewExec$e, exports$d, _dewExec$d, exports$c, _dewExec$c, exports$b, _dewExec$b, exports$a, _dewExec$a, exports$9, _dewExec$9, _global$2, exports$8, _dewExec$8, _global$1, exports$7, _dewExec$7, exports$6, _dewExec$6, exports$5, _dewExec$5, exports$4, _dewExec$4, exports$3, _dewExec$3, _global2, exports$2, _dewExec$2, exports$1, _dewExec$1, exports2, _dewExec2;
var init_chunk_44e51b61 = __esm({
  "../../node_modules/@jspm/core/nodelibs/browser/chunk-44e51b61.js"() {
    init_chunk_4bd36a8f();
    init_chunk_ce0fbc82();
    init_chunk_b4205b57();
    init_chunk_2eac56ff();
    init_chunk_4ccc3a29();
    exports$2$1 = {};
    _dewExec$2$1 = false;
    exports$1$1 = {};
    _dewExec$1$1 = false;
    exports$g = {};
    _dewExec$g = false;
    buffer = dew$g();
    buffer.Buffer;
    buffer.INSPECT_MAX_BYTES;
    buffer.kMaxLength;
    exports$f = {};
    _dewExec$f = false;
    exports$e = {};
    _dewExec$e = false;
    exports$d = {};
    _dewExec$d = false;
    exports$c = {};
    _dewExec$c = false;
    exports$b = {};
    _dewExec$b = false;
    exports$a = {};
    _dewExec$a = false;
    exports$9 = {};
    _dewExec$9 = false;
    _global$2 = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : globalThis;
    exports$8 = {};
    _dewExec$8 = false;
    _global$1 = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : globalThis;
    exports$7 = {};
    _dewExec$7 = false;
    exports$6 = {};
    _dewExec$6 = false;
    exports$5 = {};
    _dewExec$5 = false;
    exports$4 = {};
    _dewExec$4 = false;
    exports$3 = {};
    _dewExec$3 = false;
    _global2 = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : globalThis;
    exports$2 = {};
    _dewExec$2 = false;
    exports$1 = {};
    _dewExec$1 = false;
    exports2 = {};
    _dewExec2 = false;
  }
});

// ../../node_modules/@jspm/core/nodelibs/browser/chunk-6c718bbe.js
function dew3() {
  if (_dewExec3)
    return exports$12;
  _dewExec3 = true;
  exports$12 = Stream2;
  var EE = y.EventEmitter;
  var inherits3 = dew$f();
  inherits3(Stream2, EE);
  Stream2.Readable = dew$3();
  Stream2.Writable = dew$8();
  Stream2.Duplex = dew$7();
  Stream2.Transform = dew$2();
  Stream2.PassThrough = dew$1();
  Stream2.finished = dew$6();
  Stream2.pipeline = dew2();
  Stream2.Stream = Stream2;
  function Stream2() {
    EE.call(this || _global3);
  }
  Stream2.prototype.pipe = function(dest, options) {
    var source = this || _global3;
    function ondata(chunk) {
      if (dest.writable) {
        if (false === dest.write(chunk) && source.pause) {
          source.pause();
        }
      }
    }
    source.on("data", ondata);
    function ondrain() {
      if (source.readable && source.resume) {
        source.resume();
      }
    }
    dest.on("drain", ondrain);
    if (!dest._isStdio && (!options || options.end !== false)) {
      source.on("end", onend);
      source.on("close", onclose);
    }
    var didOnEnd = false;
    function onend() {
      if (didOnEnd)
        return;
      didOnEnd = true;
      dest.end();
    }
    function onclose() {
      if (didOnEnd)
        return;
      didOnEnd = true;
      if (typeof dest.destroy === "function")
        dest.destroy();
    }
    function onerror(er) {
      cleanup();
      if (EE.listenerCount(this || _global3, "error") === 0) {
        throw er;
      }
    }
    source.on("error", onerror);
    dest.on("error", onerror);
    function cleanup() {
      source.removeListener("data", ondata);
      dest.removeListener("drain", ondrain);
      source.removeListener("end", onend);
      source.removeListener("close", onclose);
      source.removeListener("error", onerror);
      dest.removeListener("error", onerror);
      source.removeListener("end", cleanup);
      source.removeListener("close", cleanup);
      dest.removeListener("close", cleanup);
    }
    source.on("end", cleanup);
    source.on("close", cleanup);
    dest.on("close", cleanup);
    dest.emit("pipe", source);
    return dest;
  };
  return exports$12;
}
var exports$12, _dewExec3, _global3, exports3;
var init_chunk_6c718bbe = __esm({
  "../../node_modules/@jspm/core/nodelibs/browser/chunk-6c718bbe.js"() {
    init_events();
    init_chunk_44e51b61();
    init_chunk_4bd36a8f();
    exports$12 = {};
    _dewExec3 = false;
    _global3 = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : globalThis;
    exports3 = dew3();
  }
});

// ../../node_modules/@jspm/core/nodelibs/browser/util.js
var _extend2, callbackify2, debuglog2, deprecate2, format2, inherits2, inspect2, isArray2, isBoolean2, isBuffer2, isDate2, isError2, isFunction2, isNull2, isNullOrUndefined2, isNumber2, isObject2, isPrimitive2, isRegExp2, isString2, isSymbol2, isUndefined2, log2, promisify2, types2, TextEncoder2, TextDecoder2;
var init_util = __esm({
  "../../node_modules/@jspm/core/nodelibs/browser/util.js"() {
    init_chunk_ce0fbc82();
    init_chunk_b4205b57();
    init_chunk_b4205b57();
    init_chunk_5decc758();
    _extend2 = X._extend;
    callbackify2 = X.callbackify;
    debuglog2 = X.debuglog;
    deprecate2 = X.deprecate;
    format2 = X.format;
    inherits2 = X.inherits;
    inspect2 = X.inspect;
    isArray2 = X.isArray;
    isBoolean2 = X.isBoolean;
    isBuffer2 = X.isBuffer;
    isDate2 = X.isDate;
    isError2 = X.isError;
    isFunction2 = X.isFunction;
    isNull2 = X.isNull;
    isNullOrUndefined2 = X.isNullOrUndefined;
    isNumber2 = X.isNumber;
    isObject2 = X.isObject;
    isPrimitive2 = X.isPrimitive;
    isRegExp2 = X.isRegExp;
    isString2 = X.isString;
    isSymbol2 = X.isSymbol;
    isUndefined2 = X.isUndefined;
    log2 = X.log;
    promisify2 = X.promisify;
    types2 = X.types;
    TextEncoder2 = X.TextEncoder = globalThis.TextEncoder;
    TextDecoder2 = X.TextDecoder = globalThis.TextDecoder;
  }
});

// node-modules-polyfills:stream
var Readable, Writable, Duplex, Transform, PassThrough, finished, pipeline, Stream, promises;
var init_stream = __esm({
  "node-modules-polyfills:stream"() {
    init_chunk_6c718bbe();
    init_chunk_6c718bbe();
    init_util();
    init_events();
    init_chunk_4bd36a8f();
    init_chunk_44e51b61();
    init_chunk_ce0fbc82();
    init_chunk_b4205b57();
    init_chunk_5decc758();
    init_chunk_2eac56ff();
    init_chunk_4ccc3a29();
    Readable = exports3.Readable;
    Readable.wrap = function(src, options) {
      options = Object.assign({ objectMode: src.readableObjectMode != null || src.objectMode != null || true }, options);
      options.destroy = function(err, callback) {
        src.destroy(err);
        callback(err);
      };
      return new Readable(options).wrap(src);
    };
    Writable = exports3.Writable;
    Duplex = exports3.Duplex;
    Transform = exports3.Transform;
    PassThrough = exports3.PassThrough;
    finished = exports3.finished;
    pipeline = exports3.pipeline;
    Stream = exports3.Stream;
    promises = {
      finished: promisify2(exports3.finished),
      pipeline: promisify2(exports3.pipeline)
    };
  }
});

// node-modules-polyfills-commonjs:stream
var stream_exports = {};
__export(stream_exports, {
  Duplex: () => Duplex,
  PassThrough: () => PassThrough,
  Readable: () => Readable,
  Stream: () => Stream,
  Transform: () => Transform,
  Writable: () => Writable,
  finished: () => finished,
  pipeline: () => pipeline,
  promises: () => promises
});
var init_stream2 = __esm({
  "node-modules-polyfills-commonjs:stream"() {
    init_stream();
  }
});

// node-modules-polyfills:string_decoder
var StringDecoder;
var init_string_decoder = __esm({
  "node-modules-polyfills:string_decoder"() {
    init_chunk_4ccc3a29();
    init_chunk_4ccc3a29();
    StringDecoder = e$12.StringDecoder;
  }
});

// node-modules-polyfills-commonjs:string_decoder
var string_decoder_exports = {};
__export(string_decoder_exports, {
  StringDecoder: () => StringDecoder
});
var init_string_decoder2 = __esm({
  "node-modules-polyfills-commonjs:string_decoder"() {
    init_string_decoder();
  }
});

// ../../node_modules/sax/lib/sax.js
var require_sax = __commonJS({
  "../../node_modules/sax/lib/sax.js"(exports4) {
    (function(sax) {
      sax.parser = function(strict, opt) {
        return new SAXParser(strict, opt);
      };
      sax.SAXParser = SAXParser;
      sax.SAXStream = SAXStream;
      sax.createStream = createStream;
      sax.MAX_BUFFER_LENGTH = 64 * 1024;
      var buffers = [
        "comment",
        "sgmlDecl",
        "textNode",
        "tagName",
        "doctype",
        "procInstName",
        "procInstBody",
        "entity",
        "attribName",
        "attribValue",
        "cdata",
        "script"
      ];
      sax.EVENTS = [
        "text",
        "processinginstruction",
        "sgmldeclaration",
        "doctype",
        "comment",
        "opentagstart",
        "attribute",
        "opentag",
        "closetag",
        "opencdata",
        "cdata",
        "closecdata",
        "error",
        "end",
        "ready",
        "script",
        "opennamespace",
        "closenamespace"
      ];
      function SAXParser(strict, opt) {
        if (!(this instanceof SAXParser)) {
          return new SAXParser(strict, opt);
        }
        var parser = this;
        clearBuffers(parser);
        parser.q = parser.c = "";
        parser.bufferCheckPosition = sax.MAX_BUFFER_LENGTH;
        parser.opt = opt || {};
        parser.opt.lowercase = parser.opt.lowercase || parser.opt.lowercasetags;
        parser.looseCase = parser.opt.lowercase ? "toLowerCase" : "toUpperCase";
        parser.tags = [];
        parser.closed = parser.closedRoot = parser.sawRoot = false;
        parser.tag = parser.error = null;
        parser.strict = !!strict;
        parser.noscript = !!(strict || parser.opt.noscript);
        parser.state = S3.BEGIN;
        parser.strictEntities = parser.opt.strictEntities;
        parser.ENTITIES = parser.strictEntities ? Object.create(sax.XML_ENTITIES) : Object.create(sax.ENTITIES);
        parser.attribList = [];
        if (parser.opt.xmlns) {
          parser.ns = Object.create(rootNS);
        }
        parser.trackPosition = parser.opt.position !== false;
        if (parser.trackPosition) {
          parser.position = parser.line = parser.column = 0;
        }
        emit(parser, "onready");
      }
      if (!Object.create) {
        Object.create = function(o5) {
          function F3() {
          }
          F3.prototype = o5;
          var newf = new F3();
          return newf;
        };
      }
      if (!Object.keys) {
        Object.keys = function(o5) {
          var a5 = [];
          for (var i5 in o5)
            if (o5.hasOwnProperty(i5))
              a5.push(i5);
          return a5;
        };
      }
      function checkBufferLength(parser) {
        var maxAllowed = Math.max(sax.MAX_BUFFER_LENGTH, 10);
        var maxActual = 0;
        for (var i5 = 0, l5 = buffers.length; i5 < l5; i5++) {
          var len = parser[buffers[i5]].length;
          if (len > maxAllowed) {
            switch (buffers[i5]) {
              case "textNode":
                closeText(parser);
                break;
              case "cdata":
                emitNode(parser, "oncdata", parser.cdata);
                parser.cdata = "";
                break;
              case "script":
                emitNode(parser, "onscript", parser.script);
                parser.script = "";
                break;
              default:
                error(parser, "Max buffer length exceeded: " + buffers[i5]);
            }
          }
          maxActual = Math.max(maxActual, len);
        }
        var m4 = sax.MAX_BUFFER_LENGTH - maxActual;
        parser.bufferCheckPosition = m4 + parser.position;
      }
      function clearBuffers(parser) {
        for (var i5 = 0, l5 = buffers.length; i5 < l5; i5++) {
          parser[buffers[i5]] = "";
        }
      }
      function flushBuffers(parser) {
        closeText(parser);
        if (parser.cdata !== "") {
          emitNode(parser, "oncdata", parser.cdata);
          parser.cdata = "";
        }
        if (parser.script !== "") {
          emitNode(parser, "onscript", parser.script);
          parser.script = "";
        }
      }
      SAXParser.prototype = {
        end: function() {
          end(this);
        },
        write,
        resume: function() {
          this.error = null;
          return this;
        },
        close: function() {
          return this.write(null);
        },
        flush: function() {
          flushBuffers(this);
        }
      };
      var Stream2;
      try {
        Stream2 = (init_stream2(), __toCommonJS(stream_exports)).Stream;
      } catch (ex) {
        Stream2 = function() {
        };
      }
      if (!Stream2)
        Stream2 = function() {
        };
      var streamWraps = sax.EVENTS.filter(function(ev) {
        return ev !== "error" && ev !== "end";
      });
      function createStream(strict, opt) {
        return new SAXStream(strict, opt);
      }
      function SAXStream(strict, opt) {
        if (!(this instanceof SAXStream)) {
          return new SAXStream(strict, opt);
        }
        Stream2.apply(this);
        this._parser = new SAXParser(strict, opt);
        this.writable = true;
        this.readable = true;
        var me2 = this;
        this._parser.onend = function() {
          me2.emit("end");
        };
        this._parser.onerror = function(er) {
          me2.emit("error", er);
          me2._parser.error = null;
        };
        this._decoder = null;
        streamWraps.forEach(function(ev) {
          Object.defineProperty(me2, "on" + ev, {
            get: function() {
              return me2._parser["on" + ev];
            },
            set: function(h5) {
              if (!h5) {
                me2.removeAllListeners(ev);
                me2._parser["on" + ev] = h5;
                return h5;
              }
              me2.on(ev, h5);
            },
            enumerable: true,
            configurable: false
          });
        });
      }
      SAXStream.prototype = Object.create(Stream2.prototype, {
        constructor: {
          value: SAXStream
        }
      });
      SAXStream.prototype.write = function(data) {
        if (typeof Buffer === "function" && typeof Buffer.isBuffer === "function" && Buffer.isBuffer(data)) {
          if (!this._decoder) {
            var SD = (init_string_decoder2(), __toCommonJS(string_decoder_exports)).StringDecoder;
            this._decoder = new SD("utf8");
          }
          data = this._decoder.write(data);
        }
        this._parser.write(data.toString());
        this.emit("data", data);
        return true;
      };
      SAXStream.prototype.end = function(chunk) {
        if (chunk && chunk.length) {
          this.write(chunk);
        }
        this._parser.end();
        return true;
      };
      SAXStream.prototype.on = function(ev, handler) {
        var me2 = this;
        if (!me2._parser["on" + ev] && streamWraps.indexOf(ev) !== -1) {
          me2._parser["on" + ev] = function() {
            var args = arguments.length === 1 ? [arguments[0]] : Array.apply(null, arguments);
            args.splice(0, 0, ev);
            me2.emit.apply(me2, args);
          };
        }
        return Stream2.prototype.on.call(me2, ev, handler);
      };
      var CDATA = "[CDATA[";
      var DOCTYPE = "DOCTYPE";
      var XML_NAMESPACE = "http://www.w3.org/XML/1998/namespace";
      var XMLNS_NAMESPACE = "http://www.w3.org/2000/xmlns/";
      var rootNS = { xml: XML_NAMESPACE, xmlns: XMLNS_NAMESPACE };
      var nameStart = /[:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/;
      var nameBody = /[:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\u00B7\u0300-\u036F\u203F-\u2040.\d-]/;
      var entityStart = /[#:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/;
      var entityBody = /[#:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\u00B7\u0300-\u036F\u203F-\u2040.\d-]/;
      function isWhitespace(c5) {
        return c5 === " " || c5 === "\n" || c5 === "\r" || c5 === "	";
      }
      function isQuote(c5) {
        return c5 === '"' || c5 === "'";
      }
      function isAttribEnd(c5) {
        return c5 === ">" || isWhitespace(c5);
      }
      function isMatch(regex, c5) {
        return regex.test(c5);
      }
      function notMatch(regex, c5) {
        return !isMatch(regex, c5);
      }
      var S3 = 0;
      sax.STATE = {
        BEGIN: S3++,
        // leading byte order mark or whitespace
        BEGIN_WHITESPACE: S3++,
        // leading whitespace
        TEXT: S3++,
        // general stuff
        TEXT_ENTITY: S3++,
        // &amp and such.
        OPEN_WAKA: S3++,
        // <
        SGML_DECL: S3++,
        // <!BLARG
        SGML_DECL_QUOTED: S3++,
        // <!BLARG foo "bar
        DOCTYPE: S3++,
        // <!DOCTYPE
        DOCTYPE_QUOTED: S3++,
        // <!DOCTYPE "//blah
        DOCTYPE_DTD: S3++,
        // <!DOCTYPE "//blah" [ ...
        DOCTYPE_DTD_QUOTED: S3++,
        // <!DOCTYPE "//blah" [ "foo
        COMMENT_STARTING: S3++,
        // <!-
        COMMENT: S3++,
        // <!--
        COMMENT_ENDING: S3++,
        // <!-- blah -
        COMMENT_ENDED: S3++,
        // <!-- blah --
        CDATA: S3++,
        // <![CDATA[ something
        CDATA_ENDING: S3++,
        // ]
        CDATA_ENDING_2: S3++,
        // ]]
        PROC_INST: S3++,
        // <?hi
        PROC_INST_BODY: S3++,
        // <?hi there
        PROC_INST_ENDING: S3++,
        // <?hi "there" ?
        OPEN_TAG: S3++,
        // <strong
        OPEN_TAG_SLASH: S3++,
        // <strong /
        ATTRIB: S3++,
        // <a
        ATTRIB_NAME: S3++,
        // <a foo
        ATTRIB_NAME_SAW_WHITE: S3++,
        // <a foo _
        ATTRIB_VALUE: S3++,
        // <a foo=
        ATTRIB_VALUE_QUOTED: S3++,
        // <a foo="bar
        ATTRIB_VALUE_CLOSED: S3++,
        // <a foo="bar"
        ATTRIB_VALUE_UNQUOTED: S3++,
        // <a foo=bar
        ATTRIB_VALUE_ENTITY_Q: S3++,
        // <foo bar="&quot;"
        ATTRIB_VALUE_ENTITY_U: S3++,
        // <foo bar=&quot
        CLOSE_TAG: S3++,
        // </a
        CLOSE_TAG_SAW_WHITE: S3++,
        // </a   >
        SCRIPT: S3++,
        // <script> ...
        SCRIPT_ENDING: S3++
        // <script> ... <
      };
      sax.XML_ENTITIES = {
        "amp": "&",
        "gt": ">",
        "lt": "<",
        "quot": '"',
        "apos": "'"
      };
      sax.ENTITIES = {
        "amp": "&",
        "gt": ">",
        "lt": "<",
        "quot": '"',
        "apos": "'",
        "AElig": 198,
        "Aacute": 193,
        "Acirc": 194,
        "Agrave": 192,
        "Aring": 197,
        "Atilde": 195,
        "Auml": 196,
        "Ccedil": 199,
        "ETH": 208,
        "Eacute": 201,
        "Ecirc": 202,
        "Egrave": 200,
        "Euml": 203,
        "Iacute": 205,
        "Icirc": 206,
        "Igrave": 204,
        "Iuml": 207,
        "Ntilde": 209,
        "Oacute": 211,
        "Ocirc": 212,
        "Ograve": 210,
        "Oslash": 216,
        "Otilde": 213,
        "Ouml": 214,
        "THORN": 222,
        "Uacute": 218,
        "Ucirc": 219,
        "Ugrave": 217,
        "Uuml": 220,
        "Yacute": 221,
        "aacute": 225,
        "acirc": 226,
        "aelig": 230,
        "agrave": 224,
        "aring": 229,
        "atilde": 227,
        "auml": 228,
        "ccedil": 231,
        "eacute": 233,
        "ecirc": 234,
        "egrave": 232,
        "eth": 240,
        "euml": 235,
        "iacute": 237,
        "icirc": 238,
        "igrave": 236,
        "iuml": 239,
        "ntilde": 241,
        "oacute": 243,
        "ocirc": 244,
        "ograve": 242,
        "oslash": 248,
        "otilde": 245,
        "ouml": 246,
        "szlig": 223,
        "thorn": 254,
        "uacute": 250,
        "ucirc": 251,
        "ugrave": 249,
        "uuml": 252,
        "yacute": 253,
        "yuml": 255,
        "copy": 169,
        "reg": 174,
        "nbsp": 160,
        "iexcl": 161,
        "cent": 162,
        "pound": 163,
        "curren": 164,
        "yen": 165,
        "brvbar": 166,
        "sect": 167,
        "uml": 168,
        "ordf": 170,
        "laquo": 171,
        "not": 172,
        "shy": 173,
        "macr": 175,
        "deg": 176,
        "plusmn": 177,
        "sup1": 185,
        "sup2": 178,
        "sup3": 179,
        "acute": 180,
        "micro": 181,
        "para": 182,
        "middot": 183,
        "cedil": 184,
        "ordm": 186,
        "raquo": 187,
        "frac14": 188,
        "frac12": 189,
        "frac34": 190,
        "iquest": 191,
        "times": 215,
        "divide": 247,
        "OElig": 338,
        "oelig": 339,
        "Scaron": 352,
        "scaron": 353,
        "Yuml": 376,
        "fnof": 402,
        "circ": 710,
        "tilde": 732,
        "Alpha": 913,
        "Beta": 914,
        "Gamma": 915,
        "Delta": 916,
        "Epsilon": 917,
        "Zeta": 918,
        "Eta": 919,
        "Theta": 920,
        "Iota": 921,
        "Kappa": 922,
        "Lambda": 923,
        "Mu": 924,
        "Nu": 925,
        "Xi": 926,
        "Omicron": 927,
        "Pi": 928,
        "Rho": 929,
        "Sigma": 931,
        "Tau": 932,
        "Upsilon": 933,
        "Phi": 934,
        "Chi": 935,
        "Psi": 936,
        "Omega": 937,
        "alpha": 945,
        "beta": 946,
        "gamma": 947,
        "delta": 948,
        "epsilon": 949,
        "zeta": 950,
        "eta": 951,
        "theta": 952,
        "iota": 953,
        "kappa": 954,
        "lambda": 955,
        "mu": 956,
        "nu": 957,
        "xi": 958,
        "omicron": 959,
        "pi": 960,
        "rho": 961,
        "sigmaf": 962,
        "sigma": 963,
        "tau": 964,
        "upsilon": 965,
        "phi": 966,
        "chi": 967,
        "psi": 968,
        "omega": 969,
        "thetasym": 977,
        "upsih": 978,
        "piv": 982,
        "ensp": 8194,
        "emsp": 8195,
        "thinsp": 8201,
        "zwnj": 8204,
        "zwj": 8205,
        "lrm": 8206,
        "rlm": 8207,
        "ndash": 8211,
        "mdash": 8212,
        "lsquo": 8216,
        "rsquo": 8217,
        "sbquo": 8218,
        "ldquo": 8220,
        "rdquo": 8221,
        "bdquo": 8222,
        "dagger": 8224,
        "Dagger": 8225,
        "bull": 8226,
        "hellip": 8230,
        "permil": 8240,
        "prime": 8242,
        "Prime": 8243,
        "lsaquo": 8249,
        "rsaquo": 8250,
        "oline": 8254,
        "frasl": 8260,
        "euro": 8364,
        "image": 8465,
        "weierp": 8472,
        "real": 8476,
        "trade": 8482,
        "alefsym": 8501,
        "larr": 8592,
        "uarr": 8593,
        "rarr": 8594,
        "darr": 8595,
        "harr": 8596,
        "crarr": 8629,
        "lArr": 8656,
        "uArr": 8657,
        "rArr": 8658,
        "dArr": 8659,
        "hArr": 8660,
        "forall": 8704,
        "part": 8706,
        "exist": 8707,
        "empty": 8709,
        "nabla": 8711,
        "isin": 8712,
        "notin": 8713,
        "ni": 8715,
        "prod": 8719,
        "sum": 8721,
        "minus": 8722,
        "lowast": 8727,
        "radic": 8730,
        "prop": 8733,
        "infin": 8734,
        "ang": 8736,
        "and": 8743,
        "or": 8744,
        "cap": 8745,
        "cup": 8746,
        "int": 8747,
        "there4": 8756,
        "sim": 8764,
        "cong": 8773,
        "asymp": 8776,
        "ne": 8800,
        "equiv": 8801,
        "le": 8804,
        "ge": 8805,
        "sub": 8834,
        "sup": 8835,
        "nsub": 8836,
        "sube": 8838,
        "supe": 8839,
        "oplus": 8853,
        "otimes": 8855,
        "perp": 8869,
        "sdot": 8901,
        "lceil": 8968,
        "rceil": 8969,
        "lfloor": 8970,
        "rfloor": 8971,
        "lang": 9001,
        "rang": 9002,
        "loz": 9674,
        "spades": 9824,
        "clubs": 9827,
        "hearts": 9829,
        "diams": 9830
      };
      Object.keys(sax.ENTITIES).forEach(function(key) {
        var e5 = sax.ENTITIES[key];
        var s6 = typeof e5 === "number" ? String.fromCharCode(e5) : e5;
        sax.ENTITIES[key] = s6;
      });
      for (var s5 in sax.STATE) {
        sax.STATE[sax.STATE[s5]] = s5;
      }
      S3 = sax.STATE;
      function emit(parser, event, data) {
        parser[event] && parser[event](data);
      }
      function emitNode(parser, nodeType, data) {
        if (parser.textNode)
          closeText(parser);
        emit(parser, nodeType, data);
      }
      function closeText(parser) {
        parser.textNode = textopts(parser.opt, parser.textNode);
        if (parser.textNode)
          emit(parser, "ontext", parser.textNode);
        parser.textNode = "";
      }
      function textopts(opt, text) {
        if (opt.trim)
          text = text.trim();
        if (opt.normalize)
          text = text.replace(/\s+/g, " ");
        return text;
      }
      function error(parser, er) {
        closeText(parser);
        if (parser.trackPosition) {
          er += "\nLine: " + parser.line + "\nColumn: " + parser.column + "\nChar: " + parser.c;
        }
        er = new Error(er);
        parser.error = er;
        emit(parser, "onerror", er);
        return parser;
      }
      function end(parser) {
        if (parser.sawRoot && !parser.closedRoot)
          strictFail(parser, "Unclosed root tag");
        if (parser.state !== S3.BEGIN && parser.state !== S3.BEGIN_WHITESPACE && parser.state !== S3.TEXT) {
          error(parser, "Unexpected end");
        }
        closeText(parser);
        parser.c = "";
        parser.closed = true;
        emit(parser, "onend");
        SAXParser.call(parser, parser.strict, parser.opt);
        return parser;
      }
      function strictFail(parser, message) {
        if (typeof parser !== "object" || !(parser instanceof SAXParser)) {
          throw new Error("bad call to strictFail");
        }
        if (parser.strict) {
          error(parser, message);
        }
      }
      function newTag(parser) {
        if (!parser.strict)
          parser.tagName = parser.tagName[parser.looseCase]();
        var parent = parser.tags[parser.tags.length - 1] || parser;
        var tag = parser.tag = { name: parser.tagName, attributes: {} };
        if (parser.opt.xmlns) {
          tag.ns = parent.ns;
        }
        parser.attribList.length = 0;
        emitNode(parser, "onopentagstart", tag);
      }
      function qname(name2, attribute) {
        var i5 = name2.indexOf(":");
        var qualName = i5 < 0 ? ["", name2] : name2.split(":");
        var prefix = qualName[0];
        var local = qualName[1];
        if (attribute && name2 === "xmlns") {
          prefix = "xmlns";
          local = "";
        }
        return { prefix, local };
      }
      function attrib(parser) {
        if (!parser.strict) {
          parser.attribName = parser.attribName[parser.looseCase]();
        }
        if (parser.attribList.indexOf(parser.attribName) !== -1 || parser.tag.attributes.hasOwnProperty(parser.attribName)) {
          parser.attribName = parser.attribValue = "";
          return;
        }
        if (parser.opt.xmlns) {
          var qn = qname(parser.attribName, true);
          var prefix = qn.prefix;
          var local = qn.local;
          if (prefix === "xmlns") {
            if (local === "xml" && parser.attribValue !== XML_NAMESPACE) {
              strictFail(
                parser,
                "xml: prefix must be bound to " + XML_NAMESPACE + "\nActual: " + parser.attribValue
              );
            } else if (local === "xmlns" && parser.attribValue !== XMLNS_NAMESPACE) {
              strictFail(
                parser,
                "xmlns: prefix must be bound to " + XMLNS_NAMESPACE + "\nActual: " + parser.attribValue
              );
            } else {
              var tag = parser.tag;
              var parent = parser.tags[parser.tags.length - 1] || parser;
              if (tag.ns === parent.ns) {
                tag.ns = Object.create(parent.ns);
              }
              tag.ns[local] = parser.attribValue;
            }
          }
          parser.attribList.push([parser.attribName, parser.attribValue]);
        } else {
          parser.tag.attributes[parser.attribName] = parser.attribValue;
          emitNode(parser, "onattribute", {
            name: parser.attribName,
            value: parser.attribValue
          });
        }
        parser.attribName = parser.attribValue = "";
      }
      function openTag(parser, selfClosing) {
        if (parser.opt.xmlns) {
          var tag = parser.tag;
          var qn = qname(parser.tagName);
          tag.prefix = qn.prefix;
          tag.local = qn.local;
          tag.uri = tag.ns[qn.prefix] || "";
          if (tag.prefix && !tag.uri) {
            strictFail(parser, "Unbound namespace prefix: " + JSON.stringify(parser.tagName));
            tag.uri = qn.prefix;
          }
          var parent = parser.tags[parser.tags.length - 1] || parser;
          if (tag.ns && parent.ns !== tag.ns) {
            Object.keys(tag.ns).forEach(function(p5) {
              emitNode(parser, "onopennamespace", {
                prefix: p5,
                uri: tag.ns[p5]
              });
            });
          }
          for (var i5 = 0, l5 = parser.attribList.length; i5 < l5; i5++) {
            var nv = parser.attribList[i5];
            var name2 = nv[0];
            var value = nv[1];
            var qualName = qname(name2, true);
            var prefix = qualName.prefix;
            var local = qualName.local;
            var uri = prefix === "" ? "" : tag.ns[prefix] || "";
            var a5 = {
              name: name2,
              value,
              prefix,
              local,
              uri
            };
            if (prefix && prefix !== "xmlns" && !uri) {
              strictFail(parser, "Unbound namespace prefix: " + JSON.stringify(prefix));
              a5.uri = prefix;
            }
            parser.tag.attributes[name2] = a5;
            emitNode(parser, "onattribute", a5);
          }
          parser.attribList.length = 0;
        }
        parser.tag.isSelfClosing = !!selfClosing;
        parser.sawRoot = true;
        parser.tags.push(parser.tag);
        emitNode(parser, "onopentag", parser.tag);
        if (!selfClosing) {
          if (!parser.noscript && parser.tagName.toLowerCase() === "script") {
            parser.state = S3.SCRIPT;
          } else {
            parser.state = S3.TEXT;
          }
          parser.tag = null;
          parser.tagName = "";
        }
        parser.attribName = parser.attribValue = "";
        parser.attribList.length = 0;
      }
      function closeTag(parser) {
        if (!parser.tagName) {
          strictFail(parser, "Weird empty close tag.");
          parser.textNode += "</>";
          parser.state = S3.TEXT;
          return;
        }
        if (parser.script) {
          if (parser.tagName !== "script") {
            parser.script += "</" + parser.tagName + ">";
            parser.tagName = "";
            parser.state = S3.SCRIPT;
            return;
          }
          emitNode(parser, "onscript", parser.script);
          parser.script = "";
        }
        var t5 = parser.tags.length;
        var tagName = parser.tagName;
        if (!parser.strict) {
          tagName = tagName[parser.looseCase]();
        }
        var closeTo = tagName;
        while (t5--) {
          var close = parser.tags[t5];
          if (close.name !== closeTo) {
            strictFail(parser, "Unexpected close tag");
          } else {
            break;
          }
        }
        if (t5 < 0) {
          strictFail(parser, "Unmatched closing tag: " + parser.tagName);
          parser.textNode += "</" + parser.tagName + ">";
          parser.state = S3.TEXT;
          return;
        }
        parser.tagName = tagName;
        var s6 = parser.tags.length;
        while (s6-- > t5) {
          var tag = parser.tag = parser.tags.pop();
          parser.tagName = parser.tag.name;
          emitNode(parser, "onclosetag", parser.tagName);
          var x3 = {};
          for (var i5 in tag.ns) {
            x3[i5] = tag.ns[i5];
          }
          var parent = parser.tags[parser.tags.length - 1] || parser;
          if (parser.opt.xmlns && tag.ns !== parent.ns) {
            Object.keys(tag.ns).forEach(function(p5) {
              var n5 = tag.ns[p5];
              emitNode(parser, "onclosenamespace", { prefix: p5, uri: n5 });
            });
          }
        }
        if (t5 === 0)
          parser.closedRoot = true;
        parser.tagName = parser.attribValue = parser.attribName = "";
        parser.attribList.length = 0;
        parser.state = S3.TEXT;
      }
      function parseEntity(parser) {
        var entity = parser.entity;
        var entityLC = entity.toLowerCase();
        var num;
        var numStr = "";
        if (parser.ENTITIES[entity]) {
          return parser.ENTITIES[entity];
        }
        if (parser.ENTITIES[entityLC]) {
          return parser.ENTITIES[entityLC];
        }
        entity = entityLC;
        if (entity.charAt(0) === "#") {
          if (entity.charAt(1) === "x") {
            entity = entity.slice(2);
            num = parseInt(entity, 16);
            numStr = num.toString(16);
          } else {
            entity = entity.slice(1);
            num = parseInt(entity, 10);
            numStr = num.toString(10);
          }
        }
        entity = entity.replace(/^0+/, "");
        if (isNaN(num) || numStr.toLowerCase() !== entity) {
          strictFail(parser, "Invalid character entity");
          return "&" + parser.entity + ";";
        }
        return String.fromCodePoint(num);
      }
      function beginWhiteSpace(parser, c5) {
        if (c5 === "<") {
          parser.state = S3.OPEN_WAKA;
          parser.startTagPosition = parser.position;
        } else if (!isWhitespace(c5)) {
          strictFail(parser, "Non-whitespace before first tag.");
          parser.textNode = c5;
          parser.state = S3.TEXT;
        }
      }
      function charAt(chunk, i5) {
        var result = "";
        if (i5 < chunk.length) {
          result = chunk.charAt(i5);
        }
        return result;
      }
      function write(chunk) {
        var parser = this;
        if (this.error) {
          throw this.error;
        }
        if (parser.closed) {
          return error(
            parser,
            "Cannot write after close. Assign an onready handler."
          );
        }
        if (chunk === null) {
          return end(parser);
        }
        if (typeof chunk === "object") {
          chunk = chunk.toString();
        }
        var i5 = 0;
        var c5 = "";
        while (true) {
          c5 = charAt(chunk, i5++);
          parser.c = c5;
          if (!c5) {
            break;
          }
          if (parser.trackPosition) {
            parser.position++;
            if (c5 === "\n") {
              parser.line++;
              parser.column = 0;
            } else {
              parser.column++;
            }
          }
          switch (parser.state) {
            case S3.BEGIN:
              parser.state = S3.BEGIN_WHITESPACE;
              if (c5 === "\uFEFF") {
                continue;
              }
              beginWhiteSpace(parser, c5);
              continue;
            case S3.BEGIN_WHITESPACE:
              beginWhiteSpace(parser, c5);
              continue;
            case S3.TEXT:
              if (parser.sawRoot && !parser.closedRoot) {
                var starti = i5 - 1;
                while (c5 && c5 !== "<" && c5 !== "&") {
                  c5 = charAt(chunk, i5++);
                  if (c5 && parser.trackPosition) {
                    parser.position++;
                    if (c5 === "\n") {
                      parser.line++;
                      parser.column = 0;
                    } else {
                      parser.column++;
                    }
                  }
                }
                parser.textNode += chunk.substring(starti, i5 - 1);
              }
              if (c5 === "<" && !(parser.sawRoot && parser.closedRoot && !parser.strict)) {
                parser.state = S3.OPEN_WAKA;
                parser.startTagPosition = parser.position;
              } else {
                if (!isWhitespace(c5) && (!parser.sawRoot || parser.closedRoot)) {
                  strictFail(parser, "Text data outside of root node.");
                }
                if (c5 === "&") {
                  parser.state = S3.TEXT_ENTITY;
                } else {
                  parser.textNode += c5;
                }
              }
              continue;
            case S3.SCRIPT:
              if (c5 === "<") {
                parser.state = S3.SCRIPT_ENDING;
              } else {
                parser.script += c5;
              }
              continue;
            case S3.SCRIPT_ENDING:
              if (c5 === "/") {
                parser.state = S3.CLOSE_TAG;
              } else {
                parser.script += "<" + c5;
                parser.state = S3.SCRIPT;
              }
              continue;
            case S3.OPEN_WAKA:
              if (c5 === "!") {
                parser.state = S3.SGML_DECL;
                parser.sgmlDecl = "";
              } else if (isWhitespace(c5)) {
              } else if (isMatch(nameStart, c5)) {
                parser.state = S3.OPEN_TAG;
                parser.tagName = c5;
              } else if (c5 === "/") {
                parser.state = S3.CLOSE_TAG;
                parser.tagName = "";
              } else if (c5 === "?") {
                parser.state = S3.PROC_INST;
                parser.procInstName = parser.procInstBody = "";
              } else {
                strictFail(parser, "Unencoded <");
                if (parser.startTagPosition + 1 < parser.position) {
                  var pad = parser.position - parser.startTagPosition;
                  c5 = new Array(pad).join(" ") + c5;
                }
                parser.textNode += "<" + c5;
                parser.state = S3.TEXT;
              }
              continue;
            case S3.SGML_DECL:
              if ((parser.sgmlDecl + c5).toUpperCase() === CDATA) {
                emitNode(parser, "onopencdata");
                parser.state = S3.CDATA;
                parser.sgmlDecl = "";
                parser.cdata = "";
              } else if (parser.sgmlDecl + c5 === "--") {
                parser.state = S3.COMMENT;
                parser.comment = "";
                parser.sgmlDecl = "";
              } else if ((parser.sgmlDecl + c5).toUpperCase() === DOCTYPE) {
                parser.state = S3.DOCTYPE;
                if (parser.doctype || parser.sawRoot) {
                  strictFail(
                    parser,
                    "Inappropriately located doctype declaration"
                  );
                }
                parser.doctype = "";
                parser.sgmlDecl = "";
              } else if (c5 === ">") {
                emitNode(parser, "onsgmldeclaration", parser.sgmlDecl);
                parser.sgmlDecl = "";
                parser.state = S3.TEXT;
              } else if (isQuote(c5)) {
                parser.state = S3.SGML_DECL_QUOTED;
                parser.sgmlDecl += c5;
              } else {
                parser.sgmlDecl += c5;
              }
              continue;
            case S3.SGML_DECL_QUOTED:
              if (c5 === parser.q) {
                parser.state = S3.SGML_DECL;
                parser.q = "";
              }
              parser.sgmlDecl += c5;
              continue;
            case S3.DOCTYPE:
              if (c5 === ">") {
                parser.state = S3.TEXT;
                emitNode(parser, "ondoctype", parser.doctype);
                parser.doctype = true;
              } else {
                parser.doctype += c5;
                if (c5 === "[") {
                  parser.state = S3.DOCTYPE_DTD;
                } else if (isQuote(c5)) {
                  parser.state = S3.DOCTYPE_QUOTED;
                  parser.q = c5;
                }
              }
              continue;
            case S3.DOCTYPE_QUOTED:
              parser.doctype += c5;
              if (c5 === parser.q) {
                parser.q = "";
                parser.state = S3.DOCTYPE;
              }
              continue;
            case S3.DOCTYPE_DTD:
              parser.doctype += c5;
              if (c5 === "]") {
                parser.state = S3.DOCTYPE;
              } else if (isQuote(c5)) {
                parser.state = S3.DOCTYPE_DTD_QUOTED;
                parser.q = c5;
              }
              continue;
            case S3.DOCTYPE_DTD_QUOTED:
              parser.doctype += c5;
              if (c5 === parser.q) {
                parser.state = S3.DOCTYPE_DTD;
                parser.q = "";
              }
              continue;
            case S3.COMMENT:
              if (c5 === "-") {
                parser.state = S3.COMMENT_ENDING;
              } else {
                parser.comment += c5;
              }
              continue;
            case S3.COMMENT_ENDING:
              if (c5 === "-") {
                parser.state = S3.COMMENT_ENDED;
                parser.comment = textopts(parser.opt, parser.comment);
                if (parser.comment) {
                  emitNode(parser, "oncomment", parser.comment);
                }
                parser.comment = "";
              } else {
                parser.comment += "-" + c5;
                parser.state = S3.COMMENT;
              }
              continue;
            case S3.COMMENT_ENDED:
              if (c5 !== ">") {
                strictFail(parser, "Malformed comment");
                parser.comment += "--" + c5;
                parser.state = S3.COMMENT;
              } else {
                parser.state = S3.TEXT;
              }
              continue;
            case S3.CDATA:
              if (c5 === "]") {
                parser.state = S3.CDATA_ENDING;
              } else {
                parser.cdata += c5;
              }
              continue;
            case S3.CDATA_ENDING:
              if (c5 === "]") {
                parser.state = S3.CDATA_ENDING_2;
              } else {
                parser.cdata += "]" + c5;
                parser.state = S3.CDATA;
              }
              continue;
            case S3.CDATA_ENDING_2:
              if (c5 === ">") {
                if (parser.cdata) {
                  emitNode(parser, "oncdata", parser.cdata);
                }
                emitNode(parser, "onclosecdata");
                parser.cdata = "";
                parser.state = S3.TEXT;
              } else if (c5 === "]") {
                parser.cdata += "]";
              } else {
                parser.cdata += "]]" + c5;
                parser.state = S3.CDATA;
              }
              continue;
            case S3.PROC_INST:
              if (c5 === "?") {
                parser.state = S3.PROC_INST_ENDING;
              } else if (isWhitespace(c5)) {
                parser.state = S3.PROC_INST_BODY;
              } else {
                parser.procInstName += c5;
              }
              continue;
            case S3.PROC_INST_BODY:
              if (!parser.procInstBody && isWhitespace(c5)) {
                continue;
              } else if (c5 === "?") {
                parser.state = S3.PROC_INST_ENDING;
              } else {
                parser.procInstBody += c5;
              }
              continue;
            case S3.PROC_INST_ENDING:
              if (c5 === ">") {
                emitNode(parser, "onprocessinginstruction", {
                  name: parser.procInstName,
                  body: parser.procInstBody
                });
                parser.procInstName = parser.procInstBody = "";
                parser.state = S3.TEXT;
              } else {
                parser.procInstBody += "?" + c5;
                parser.state = S3.PROC_INST_BODY;
              }
              continue;
            case S3.OPEN_TAG:
              if (isMatch(nameBody, c5)) {
                parser.tagName += c5;
              } else {
                newTag(parser);
                if (c5 === ">") {
                  openTag(parser);
                } else if (c5 === "/") {
                  parser.state = S3.OPEN_TAG_SLASH;
                } else {
                  if (!isWhitespace(c5)) {
                    strictFail(parser, "Invalid character in tag name");
                  }
                  parser.state = S3.ATTRIB;
                }
              }
              continue;
            case S3.OPEN_TAG_SLASH:
              if (c5 === ">") {
                openTag(parser, true);
                closeTag(parser);
              } else {
                strictFail(parser, "Forward-slash in opening tag not followed by >");
                parser.state = S3.ATTRIB;
              }
              continue;
            case S3.ATTRIB:
              if (isWhitespace(c5)) {
                continue;
              } else if (c5 === ">") {
                openTag(parser);
              } else if (c5 === "/") {
                parser.state = S3.OPEN_TAG_SLASH;
              } else if (isMatch(nameStart, c5)) {
                parser.attribName = c5;
                parser.attribValue = "";
                parser.state = S3.ATTRIB_NAME;
              } else {
                strictFail(parser, "Invalid attribute name");
              }
              continue;
            case S3.ATTRIB_NAME:
              if (c5 === "=") {
                parser.state = S3.ATTRIB_VALUE;
              } else if (c5 === ">") {
                strictFail(parser, "Attribute without value");
                parser.attribValue = parser.attribName;
                attrib(parser);
                openTag(parser);
              } else if (isWhitespace(c5)) {
                parser.state = S3.ATTRIB_NAME_SAW_WHITE;
              } else if (isMatch(nameBody, c5)) {
                parser.attribName += c5;
              } else {
                strictFail(parser, "Invalid attribute name");
              }
              continue;
            case S3.ATTRIB_NAME_SAW_WHITE:
              if (c5 === "=") {
                parser.state = S3.ATTRIB_VALUE;
              } else if (isWhitespace(c5)) {
                continue;
              } else {
                strictFail(parser, "Attribute without value");
                parser.tag.attributes[parser.attribName] = "";
                parser.attribValue = "";
                emitNode(parser, "onattribute", {
                  name: parser.attribName,
                  value: ""
                });
                parser.attribName = "";
                if (c5 === ">") {
                  openTag(parser);
                } else if (isMatch(nameStart, c5)) {
                  parser.attribName = c5;
                  parser.state = S3.ATTRIB_NAME;
                } else {
                  strictFail(parser, "Invalid attribute name");
                  parser.state = S3.ATTRIB;
                }
              }
              continue;
            case S3.ATTRIB_VALUE:
              if (isWhitespace(c5)) {
                continue;
              } else if (isQuote(c5)) {
                parser.q = c5;
                parser.state = S3.ATTRIB_VALUE_QUOTED;
              } else {
                strictFail(parser, "Unquoted attribute value");
                parser.state = S3.ATTRIB_VALUE_UNQUOTED;
                parser.attribValue = c5;
              }
              continue;
            case S3.ATTRIB_VALUE_QUOTED:
              if (c5 !== parser.q) {
                if (c5 === "&") {
                  parser.state = S3.ATTRIB_VALUE_ENTITY_Q;
                } else {
                  parser.attribValue += c5;
                }
                continue;
              }
              attrib(parser);
              parser.q = "";
              parser.state = S3.ATTRIB_VALUE_CLOSED;
              continue;
            case S3.ATTRIB_VALUE_CLOSED:
              if (isWhitespace(c5)) {
                parser.state = S3.ATTRIB;
              } else if (c5 === ">") {
                openTag(parser);
              } else if (c5 === "/") {
                parser.state = S3.OPEN_TAG_SLASH;
              } else if (isMatch(nameStart, c5)) {
                strictFail(parser, "No whitespace between attributes");
                parser.attribName = c5;
                parser.attribValue = "";
                parser.state = S3.ATTRIB_NAME;
              } else {
                strictFail(parser, "Invalid attribute name");
              }
              continue;
            case S3.ATTRIB_VALUE_UNQUOTED:
              if (!isAttribEnd(c5)) {
                if (c5 === "&") {
                  parser.state = S3.ATTRIB_VALUE_ENTITY_U;
                } else {
                  parser.attribValue += c5;
                }
                continue;
              }
              attrib(parser);
              if (c5 === ">") {
                openTag(parser);
              } else {
                parser.state = S3.ATTRIB;
              }
              continue;
            case S3.CLOSE_TAG:
              if (!parser.tagName) {
                if (isWhitespace(c5)) {
                  continue;
                } else if (notMatch(nameStart, c5)) {
                  if (parser.script) {
                    parser.script += "</" + c5;
                    parser.state = S3.SCRIPT;
                  } else {
                    strictFail(parser, "Invalid tagname in closing tag.");
                  }
                } else {
                  parser.tagName = c5;
                }
              } else if (c5 === ">") {
                closeTag(parser);
              } else if (isMatch(nameBody, c5)) {
                parser.tagName += c5;
              } else if (parser.script) {
                parser.script += "</" + parser.tagName;
                parser.tagName = "";
                parser.state = S3.SCRIPT;
              } else {
                if (!isWhitespace(c5)) {
                  strictFail(parser, "Invalid tagname in closing tag");
                }
                parser.state = S3.CLOSE_TAG_SAW_WHITE;
              }
              continue;
            case S3.CLOSE_TAG_SAW_WHITE:
              if (isWhitespace(c5)) {
                continue;
              }
              if (c5 === ">") {
                closeTag(parser);
              } else {
                strictFail(parser, "Invalid characters in closing tag");
              }
              continue;
            case S3.TEXT_ENTITY:
            case S3.ATTRIB_VALUE_ENTITY_Q:
            case S3.ATTRIB_VALUE_ENTITY_U:
              var returnState;
              var buffer2;
              switch (parser.state) {
                case S3.TEXT_ENTITY:
                  returnState = S3.TEXT;
                  buffer2 = "textNode";
                  break;
                case S3.ATTRIB_VALUE_ENTITY_Q:
                  returnState = S3.ATTRIB_VALUE_QUOTED;
                  buffer2 = "attribValue";
                  break;
                case S3.ATTRIB_VALUE_ENTITY_U:
                  returnState = S3.ATTRIB_VALUE_UNQUOTED;
                  buffer2 = "attribValue";
                  break;
              }
              if (c5 === ";") {
                if (parser.opt.unparsedEntities) {
                  var parsedEntity = parseEntity(parser);
                  parser.entity = "";
                  parser.state = returnState;
                  parser.write(parsedEntity);
                } else {
                  parser[buffer2] += parseEntity(parser);
                  parser.entity = "";
                  parser.state = returnState;
                }
              } else if (isMatch(parser.entity.length ? entityBody : entityStart, c5)) {
                parser.entity += c5;
              } else {
                strictFail(parser, "Invalid character in entity name");
                parser[buffer2] += "&" + parser.entity + c5;
                parser.entity = "";
                parser.state = returnState;
              }
              continue;
            default: {
              throw new Error(parser, "Unknown state: " + parser.state);
            }
          }
        }
        if (parser.position >= parser.bufferCheckPosition) {
          checkBufferLength(parser);
        }
        return parser;
      }
      if (!String.fromCodePoint) {
        (function() {
          var stringFromCharCode = String.fromCharCode;
          var floor = Math.floor;
          var fromCodePoint = function() {
            var MAX_SIZE = 16384;
            var codeUnits = [];
            var highSurrogate;
            var lowSurrogate;
            var index = -1;
            var length = arguments.length;
            if (!length) {
              return "";
            }
            var result = "";
            while (++index < length) {
              var codePoint = Number(arguments[index]);
              if (!isFinite(codePoint) || // `NaN`, `+Infinity`, or `-Infinity`
              codePoint < 0 || // not a valid Unicode code point
              codePoint > 1114111 || // not a valid Unicode code point
              floor(codePoint) !== codePoint) {
                throw RangeError("Invalid code point: " + codePoint);
              }
              if (codePoint <= 65535) {
                codeUnits.push(codePoint);
              } else {
                codePoint -= 65536;
                highSurrogate = (codePoint >> 10) + 55296;
                lowSurrogate = codePoint % 1024 + 56320;
                codeUnits.push(highSurrogate, lowSurrogate);
              }
              if (index + 1 === length || codeUnits.length > MAX_SIZE) {
                result += stringFromCharCode.apply(null, codeUnits);
                codeUnits.length = 0;
              }
            }
            return result;
          };
          if (Object.defineProperty) {
            Object.defineProperty(String, "fromCodePoint", {
              value: fromCodePoint,
              configurable: true,
              writable: true
            });
          } else {
            String.fromCodePoint = fromCodePoint;
          }
        })();
      }
    })(typeof exports4 === "undefined" ? exports4.sax = {} : exports4);
  }
});

// ../../node_modules/xml-js/lib/array-helper.js
var require_array_helper = __commonJS({
  "../../node_modules/xml-js/lib/array-helper.js"(exports4, module) {
    module.exports = {
      isArray: function(value) {
        if (Array.isArray) {
          return Array.isArray(value);
        }
        return Object.prototype.toString.call(value) === "[object Array]";
      }
    };
  }
});

// ../../node_modules/xml-js/lib/options-helper.js
var require_options_helper = __commonJS({
  "../../node_modules/xml-js/lib/options-helper.js"(exports4, module) {
    var isArray3 = require_array_helper().isArray;
    module.exports = {
      copyOptions: function(options) {
        var key, copy = {};
        for (key in options) {
          if (options.hasOwnProperty(key)) {
            copy[key] = options[key];
          }
        }
        return copy;
      },
      ensureFlagExists: function(item, options) {
        if (!(item in options) || typeof options[item] !== "boolean") {
          options[item] = false;
        }
      },
      ensureSpacesExists: function(options) {
        if (!("spaces" in options) || typeof options.spaces !== "number" && typeof options.spaces !== "string") {
          options.spaces = 0;
        }
      },
      ensureAlwaysArrayExists: function(options) {
        if (!("alwaysArray" in options) || typeof options.alwaysArray !== "boolean" && !isArray3(options.alwaysArray)) {
          options.alwaysArray = false;
        }
      },
      ensureKeyExists: function(key, options) {
        if (!(key + "Key" in options) || typeof options[key + "Key"] !== "string") {
          options[key + "Key"] = options.compact ? "_" + key : key;
        }
      },
      checkFnExists: function(key, options) {
        return key + "Fn" in options;
      }
    };
  }
});

// ../../node_modules/xml-js/lib/xml2js.js
var require_xml2js = __commonJS({
  "../../node_modules/xml-js/lib/xml2js.js"(exports4, module) {
    var sax = require_sax();
    var expat = { on: function() {
    }, parse: function() {
    } };
    var helper = require_options_helper();
    var isArray3 = require_array_helper().isArray;
    var options;
    var pureJsParser = true;
    var currentElement;
    function validateOptions(userOptions) {
      options = helper.copyOptions(userOptions);
      helper.ensureFlagExists("ignoreDeclaration", options);
      helper.ensureFlagExists("ignoreInstruction", options);
      helper.ensureFlagExists("ignoreAttributes", options);
      helper.ensureFlagExists("ignoreText", options);
      helper.ensureFlagExists("ignoreComment", options);
      helper.ensureFlagExists("ignoreCdata", options);
      helper.ensureFlagExists("ignoreDoctype", options);
      helper.ensureFlagExists("compact", options);
      helper.ensureFlagExists("alwaysChildren", options);
      helper.ensureFlagExists("addParent", options);
      helper.ensureFlagExists("trim", options);
      helper.ensureFlagExists("nativeType", options);
      helper.ensureFlagExists("nativeTypeAttributes", options);
      helper.ensureFlagExists("sanitize", options);
      helper.ensureFlagExists("instructionHasAttributes", options);
      helper.ensureFlagExists("captureSpacesBetweenElements", options);
      helper.ensureAlwaysArrayExists(options);
      helper.ensureKeyExists("declaration", options);
      helper.ensureKeyExists("instruction", options);
      helper.ensureKeyExists("attributes", options);
      helper.ensureKeyExists("text", options);
      helper.ensureKeyExists("comment", options);
      helper.ensureKeyExists("cdata", options);
      helper.ensureKeyExists("doctype", options);
      helper.ensureKeyExists("type", options);
      helper.ensureKeyExists("name", options);
      helper.ensureKeyExists("elements", options);
      helper.ensureKeyExists("parent", options);
      helper.checkFnExists("doctype", options);
      helper.checkFnExists("instruction", options);
      helper.checkFnExists("cdata", options);
      helper.checkFnExists("comment", options);
      helper.checkFnExists("text", options);
      helper.checkFnExists("instructionName", options);
      helper.checkFnExists("elementName", options);
      helper.checkFnExists("attributeName", options);
      helper.checkFnExists("attributeValue", options);
      helper.checkFnExists("attributes", options);
      return options;
    }
    function nativeType(value) {
      var nValue = Number(value);
      if (!isNaN(nValue)) {
        return nValue;
      }
      var bValue = value.toLowerCase();
      if (bValue === "true") {
        return true;
      } else if (bValue === "false") {
        return false;
      }
      return value;
    }
    function addField(type, value) {
      var key;
      if (options.compact) {
        if (!currentElement[options[type + "Key"]] && (isArray3(options.alwaysArray) ? options.alwaysArray.indexOf(options[type + "Key"]) !== -1 : options.alwaysArray)) {
          currentElement[options[type + "Key"]] = [];
        }
        if (currentElement[options[type + "Key"]] && !isArray3(currentElement[options[type + "Key"]])) {
          currentElement[options[type + "Key"]] = [currentElement[options[type + "Key"]]];
        }
        if (type + "Fn" in options && typeof value === "string") {
          value = options[type + "Fn"](value, currentElement);
        }
        if (type === "instruction" && ("instructionFn" in options || "instructionNameFn" in options)) {
          for (key in value) {
            if (value.hasOwnProperty(key)) {
              if ("instructionFn" in options) {
                value[key] = options.instructionFn(value[key], key, currentElement);
              } else {
                var temp = value[key];
                delete value[key];
                value[options.instructionNameFn(key, temp, currentElement)] = temp;
              }
            }
          }
        }
        if (isArray3(currentElement[options[type + "Key"]])) {
          currentElement[options[type + "Key"]].push(value);
        } else {
          currentElement[options[type + "Key"]] = value;
        }
      } else {
        if (!currentElement[options.elementsKey]) {
          currentElement[options.elementsKey] = [];
        }
        var element = {};
        element[options.typeKey] = type;
        if (type === "instruction") {
          for (key in value) {
            if (value.hasOwnProperty(key)) {
              break;
            }
          }
          element[options.nameKey] = "instructionNameFn" in options ? options.instructionNameFn(key, value, currentElement) : key;
          if (options.instructionHasAttributes) {
            element[options.attributesKey] = value[key][options.attributesKey];
            if ("instructionFn" in options) {
              element[options.attributesKey] = options.instructionFn(element[options.attributesKey], key, currentElement);
            }
          } else {
            if ("instructionFn" in options) {
              value[key] = options.instructionFn(value[key], key, currentElement);
            }
            element[options.instructionKey] = value[key];
          }
        } else {
          if (type + "Fn" in options) {
            value = options[type + "Fn"](value, currentElement);
          }
          element[options[type + "Key"]] = value;
        }
        if (options.addParent) {
          element[options.parentKey] = currentElement;
        }
        currentElement[options.elementsKey].push(element);
      }
    }
    function manipulateAttributes(attributes) {
      if ("attributesFn" in options && attributes) {
        attributes = options.attributesFn(attributes, currentElement);
      }
      if ((options.trim || "attributeValueFn" in options || "attributeNameFn" in options || options.nativeTypeAttributes) && attributes) {
        var key;
        for (key in attributes) {
          if (attributes.hasOwnProperty(key)) {
            if (options.trim)
              attributes[key] = attributes[key].trim();
            if (options.nativeTypeAttributes) {
              attributes[key] = nativeType(attributes[key]);
            }
            if ("attributeValueFn" in options)
              attributes[key] = options.attributeValueFn(attributes[key], key, currentElement);
            if ("attributeNameFn" in options) {
              var temp = attributes[key];
              delete attributes[key];
              attributes[options.attributeNameFn(key, attributes[key], currentElement)] = temp;
            }
          }
        }
      }
      return attributes;
    }
    function onInstruction(instruction) {
      var attributes = {};
      if (instruction.body && (instruction.name.toLowerCase() === "xml" || options.instructionHasAttributes)) {
        var attrsRegExp = /([\w:-]+)\s*=\s*(?:"([^"]*)"|'([^']*)'|(\w+))\s*/g;
        var match;
        while ((match = attrsRegExp.exec(instruction.body)) !== null) {
          attributes[match[1]] = match[2] || match[3] || match[4];
        }
        attributes = manipulateAttributes(attributes);
      }
      if (instruction.name.toLowerCase() === "xml") {
        if (options.ignoreDeclaration) {
          return;
        }
        currentElement[options.declarationKey] = {};
        if (Object.keys(attributes).length) {
          currentElement[options.declarationKey][options.attributesKey] = attributes;
        }
        if (options.addParent) {
          currentElement[options.declarationKey][options.parentKey] = currentElement;
        }
      } else {
        if (options.ignoreInstruction) {
          return;
        }
        if (options.trim) {
          instruction.body = instruction.body.trim();
        }
        var value = {};
        if (options.instructionHasAttributes && Object.keys(attributes).length) {
          value[instruction.name] = {};
          value[instruction.name][options.attributesKey] = attributes;
        } else {
          value[instruction.name] = instruction.body;
        }
        addField("instruction", value);
      }
    }
    function onStartElement(name2, attributes) {
      var element;
      if (typeof name2 === "object") {
        attributes = name2.attributes;
        name2 = name2.name;
      }
      attributes = manipulateAttributes(attributes);
      if ("elementNameFn" in options) {
        name2 = options.elementNameFn(name2, currentElement);
      }
      if (options.compact) {
        element = {};
        if (!options.ignoreAttributes && attributes && Object.keys(attributes).length) {
          element[options.attributesKey] = {};
          var key;
          for (key in attributes) {
            if (attributes.hasOwnProperty(key)) {
              element[options.attributesKey][key] = attributes[key];
            }
          }
        }
        if (!(name2 in currentElement) && (isArray3(options.alwaysArray) ? options.alwaysArray.indexOf(name2) !== -1 : options.alwaysArray)) {
          currentElement[name2] = [];
        }
        if (currentElement[name2] && !isArray3(currentElement[name2])) {
          currentElement[name2] = [currentElement[name2]];
        }
        if (isArray3(currentElement[name2])) {
          currentElement[name2].push(element);
        } else {
          currentElement[name2] = element;
        }
      } else {
        if (!currentElement[options.elementsKey]) {
          currentElement[options.elementsKey] = [];
        }
        element = {};
        element[options.typeKey] = "element";
        element[options.nameKey] = name2;
        if (!options.ignoreAttributes && attributes && Object.keys(attributes).length) {
          element[options.attributesKey] = attributes;
        }
        if (options.alwaysChildren) {
          element[options.elementsKey] = [];
        }
        currentElement[options.elementsKey].push(element);
      }
      element[options.parentKey] = currentElement;
      currentElement = element;
    }
    function onText(text) {
      if (options.ignoreText) {
        return;
      }
      if (!text.trim() && !options.captureSpacesBetweenElements) {
        return;
      }
      if (options.trim) {
        text = text.trim();
      }
      if (options.nativeType) {
        text = nativeType(text);
      }
      if (options.sanitize) {
        text = text.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
      }
      addField("text", text);
    }
    function onComment(comment) {
      if (options.ignoreComment) {
        return;
      }
      if (options.trim) {
        comment = comment.trim();
      }
      addField("comment", comment);
    }
    function onEndElement(name2) {
      var parentElement = currentElement[options.parentKey];
      if (!options.addParent) {
        delete currentElement[options.parentKey];
      }
      currentElement = parentElement;
    }
    function onCdata(cdata) {
      if (options.ignoreCdata) {
        return;
      }
      if (options.trim) {
        cdata = cdata.trim();
      }
      addField("cdata", cdata);
    }
    function onDoctype(doctype) {
      if (options.ignoreDoctype) {
        return;
      }
      doctype = doctype.replace(/^ /, "");
      if (options.trim) {
        doctype = doctype.trim();
      }
      addField("doctype", doctype);
    }
    function onError(error) {
      error.note = error;
    }
    module.exports = function(xml, userOptions) {
      var parser = pureJsParser ? sax.parser(true, {}) : parser = new expat.Parser("UTF-8");
      var result = {};
      currentElement = result;
      options = validateOptions(userOptions);
      if (pureJsParser) {
        parser.opt = { strictEntities: true };
        parser.onopentag = onStartElement;
        parser.ontext = onText;
        parser.oncomment = onComment;
        parser.onclosetag = onEndElement;
        parser.onerror = onError;
        parser.oncdata = onCdata;
        parser.ondoctype = onDoctype;
        parser.onprocessinginstruction = onInstruction;
      } else {
        parser.on("startElement", onStartElement);
        parser.on("text", onText);
        parser.on("comment", onComment);
        parser.on("endElement", onEndElement);
        parser.on("error", onError);
      }
      if (pureJsParser) {
        parser.write(xml).close();
      } else {
        if (!parser.parse(xml)) {
          throw new Error("XML parsing error: " + parser.getError());
        }
      }
      if (result[options.elementsKey]) {
        var temp = result[options.elementsKey];
        delete result[options.elementsKey];
        result[options.elementsKey] = temp;
        delete result.text;
      }
      return result;
    };
  }
});

// ../../node_modules/xml-js/lib/xml2json.js
var require_xml2json = __commonJS({
  "../../node_modules/xml-js/lib/xml2json.js"(exports4, module) {
    var helper = require_options_helper();
    var xml2js2 = require_xml2js();
    function validateOptions(userOptions) {
      var options = helper.copyOptions(userOptions);
      helper.ensureSpacesExists(options);
      return options;
    }
    module.exports = function(xml, userOptions) {
      var options, js, json, parentKey;
      options = validateOptions(userOptions);
      js = xml2js2(xml, options);
      parentKey = "compact" in options && options.compact ? "_parent" : "parent";
      if ("addParent" in options && options.addParent) {
        json = JSON.stringify(js, function(k3, v4) {
          return k3 === parentKey ? "_" : v4;
        }, options.spaces);
      } else {
        json = JSON.stringify(js, null, options.spaces);
      }
      return json.replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029");
    };
  }
});

// ../../node_modules/xml-js/lib/js2xml.js
var require_js2xml = __commonJS({
  "../../node_modules/xml-js/lib/js2xml.js"(exports4, module) {
    var helper = require_options_helper();
    var isArray3 = require_array_helper().isArray;
    var currentElement;
    var currentElementName;
    function validateOptions(userOptions) {
      var options = helper.copyOptions(userOptions);
      helper.ensureFlagExists("ignoreDeclaration", options);
      helper.ensureFlagExists("ignoreInstruction", options);
      helper.ensureFlagExists("ignoreAttributes", options);
      helper.ensureFlagExists("ignoreText", options);
      helper.ensureFlagExists("ignoreComment", options);
      helper.ensureFlagExists("ignoreCdata", options);
      helper.ensureFlagExists("ignoreDoctype", options);
      helper.ensureFlagExists("compact", options);
      helper.ensureFlagExists("indentText", options);
      helper.ensureFlagExists("indentCdata", options);
      helper.ensureFlagExists("indentAttributes", options);
      helper.ensureFlagExists("indentInstruction", options);
      helper.ensureFlagExists("fullTagEmptyElement", options);
      helper.ensureFlagExists("noQuotesForNativeAttributes", options);
      helper.ensureSpacesExists(options);
      if (typeof options.spaces === "number") {
        options.spaces = Array(options.spaces + 1).join(" ");
      }
      helper.ensureKeyExists("declaration", options);
      helper.ensureKeyExists("instruction", options);
      helper.ensureKeyExists("attributes", options);
      helper.ensureKeyExists("text", options);
      helper.ensureKeyExists("comment", options);
      helper.ensureKeyExists("cdata", options);
      helper.ensureKeyExists("doctype", options);
      helper.ensureKeyExists("type", options);
      helper.ensureKeyExists("name", options);
      helper.ensureKeyExists("elements", options);
      helper.checkFnExists("doctype", options);
      helper.checkFnExists("instruction", options);
      helper.checkFnExists("cdata", options);
      helper.checkFnExists("comment", options);
      helper.checkFnExists("text", options);
      helper.checkFnExists("instructionName", options);
      helper.checkFnExists("elementName", options);
      helper.checkFnExists("attributeName", options);
      helper.checkFnExists("attributeValue", options);
      helper.checkFnExists("attributes", options);
      helper.checkFnExists("fullTagEmptyElement", options);
      return options;
    }
    function writeIndentation(options, depth, firstLine) {
      return (!firstLine && options.spaces ? "\n" : "") + Array(depth + 1).join(options.spaces);
    }
    function writeAttributes(attributes, options, depth) {
      if (options.ignoreAttributes) {
        return "";
      }
      if ("attributesFn" in options) {
        attributes = options.attributesFn(attributes, currentElementName, currentElement);
      }
      var key, attr, attrName, quote, result = [];
      for (key in attributes) {
        if (attributes.hasOwnProperty(key) && attributes[key] !== null && attributes[key] !== void 0) {
          quote = options.noQuotesForNativeAttributes && typeof attributes[key] !== "string" ? "" : '"';
          attr = "" + attributes[key];
          attr = attr.replace(/"/g, "&quot;");
          attrName = "attributeNameFn" in options ? options.attributeNameFn(key, attr, currentElementName, currentElement) : key;
          result.push(options.spaces && options.indentAttributes ? writeIndentation(options, depth + 1, false) : " ");
          result.push(attrName + "=" + quote + ("attributeValueFn" in options ? options.attributeValueFn(attr, key, currentElementName, currentElement) : attr) + quote);
        }
      }
      if (attributes && Object.keys(attributes).length && options.spaces && options.indentAttributes) {
        result.push(writeIndentation(options, depth, false));
      }
      return result.join("");
    }
    function writeDeclaration(declaration, options, depth) {
      currentElement = declaration;
      currentElementName = "xml";
      return options.ignoreDeclaration ? "" : "<?xml" + writeAttributes(declaration[options.attributesKey], options, depth) + "?>";
    }
    function writeInstruction(instruction, options, depth) {
      if (options.ignoreInstruction) {
        return "";
      }
      var key;
      for (key in instruction) {
        if (instruction.hasOwnProperty(key)) {
          break;
        }
      }
      var instructionName = "instructionNameFn" in options ? options.instructionNameFn(key, instruction[key], currentElementName, currentElement) : key;
      if (typeof instruction[key] === "object") {
        currentElement = instruction;
        currentElementName = instructionName;
        return "<?" + instructionName + writeAttributes(instruction[key][options.attributesKey], options, depth) + "?>";
      } else {
        var instructionValue = instruction[key] ? instruction[key] : "";
        if ("instructionFn" in options)
          instructionValue = options.instructionFn(instructionValue, key, currentElementName, currentElement);
        return "<?" + instructionName + (instructionValue ? " " + instructionValue : "") + "?>";
      }
    }
    function writeComment(comment, options) {
      return options.ignoreComment ? "" : "<!--" + ("commentFn" in options ? options.commentFn(comment, currentElementName, currentElement) : comment) + "-->";
    }
    function writeCdata(cdata, options) {
      return options.ignoreCdata ? "" : "<![CDATA[" + ("cdataFn" in options ? options.cdataFn(cdata, currentElementName, currentElement) : cdata.replace("]]>", "]]]]><![CDATA[>")) + "]]>";
    }
    function writeDoctype(doctype, options) {
      return options.ignoreDoctype ? "" : "<!DOCTYPE " + ("doctypeFn" in options ? options.doctypeFn(doctype, currentElementName, currentElement) : doctype) + ">";
    }
    function writeText(text, options) {
      if (options.ignoreText)
        return "";
      text = "" + text;
      text = text.replace(/&amp;/g, "&");
      text = text.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
      return "textFn" in options ? options.textFn(text, currentElementName, currentElement) : text;
    }
    function hasContent(element, options) {
      var i5;
      if (element.elements && element.elements.length) {
        for (i5 = 0; i5 < element.elements.length; ++i5) {
          switch (element.elements[i5][options.typeKey]) {
            case "text":
              if (options.indentText) {
                return true;
              }
              break;
            case "cdata":
              if (options.indentCdata) {
                return true;
              }
              break;
            case "instruction":
              if (options.indentInstruction) {
                return true;
              }
              break;
            case "doctype":
            case "comment":
            case "element":
              return true;
            default:
              return true;
          }
        }
      }
      return false;
    }
    function writeElement(element, options, depth) {
      currentElement = element;
      currentElementName = element.name;
      var xml = [], elementName = "elementNameFn" in options ? options.elementNameFn(element.name, element) : element.name;
      xml.push("<" + elementName);
      if (element[options.attributesKey]) {
        xml.push(writeAttributes(element[options.attributesKey], options, depth));
      }
      var withClosingTag = element[options.elementsKey] && element[options.elementsKey].length || element[options.attributesKey] && element[options.attributesKey]["xml:space"] === "preserve";
      if (!withClosingTag) {
        if ("fullTagEmptyElementFn" in options) {
          withClosingTag = options.fullTagEmptyElementFn(element.name, element);
        } else {
          withClosingTag = options.fullTagEmptyElement;
        }
      }
      if (withClosingTag) {
        xml.push(">");
        if (element[options.elementsKey] && element[options.elementsKey].length) {
          xml.push(writeElements(element[options.elementsKey], options, depth + 1));
          currentElement = element;
          currentElementName = element.name;
        }
        xml.push(options.spaces && hasContent(element, options) ? "\n" + Array(depth + 1).join(options.spaces) : "");
        xml.push("</" + elementName + ">");
      } else {
        xml.push("/>");
      }
      return xml.join("");
    }
    function writeElements(elements, options, depth, firstLine) {
      return elements.reduce(function(xml, element) {
        var indent = writeIndentation(options, depth, firstLine && !xml);
        switch (element.type) {
          case "element":
            return xml + indent + writeElement(element, options, depth);
          case "comment":
            return xml + indent + writeComment(element[options.commentKey], options);
          case "doctype":
            return xml + indent + writeDoctype(element[options.doctypeKey], options);
          case "cdata":
            return xml + (options.indentCdata ? indent : "") + writeCdata(element[options.cdataKey], options);
          case "text":
            return xml + (options.indentText ? indent : "") + writeText(element[options.textKey], options);
          case "instruction":
            var instruction = {};
            instruction[element[options.nameKey]] = element[options.attributesKey] ? element : element[options.instructionKey];
            return xml + (options.indentInstruction ? indent : "") + writeInstruction(instruction, options, depth);
        }
      }, "");
    }
    function hasContentCompact(element, options, anyContent) {
      var key;
      for (key in element) {
        if (element.hasOwnProperty(key)) {
          switch (key) {
            case options.parentKey:
            case options.attributesKey:
              break;
            case options.textKey:
              if (options.indentText || anyContent) {
                return true;
              }
              break;
            case options.cdataKey:
              if (options.indentCdata || anyContent) {
                return true;
              }
              break;
            case options.instructionKey:
              if (options.indentInstruction || anyContent) {
                return true;
              }
              break;
            case options.doctypeKey:
            case options.commentKey:
              return true;
            default:
              return true;
          }
        }
      }
      return false;
    }
    function writeElementCompact(element, name2, options, depth, indent) {
      currentElement = element;
      currentElementName = name2;
      var elementName = "elementNameFn" in options ? options.elementNameFn(name2, element) : name2;
      if (typeof element === "undefined" || element === null || element === "") {
        return "fullTagEmptyElementFn" in options && options.fullTagEmptyElementFn(name2, element) || options.fullTagEmptyElement ? "<" + elementName + "></" + elementName + ">" : "<" + elementName + "/>";
      }
      var xml = [];
      if (name2) {
        xml.push("<" + elementName);
        if (typeof element !== "object") {
          xml.push(">" + writeText(element, options) + "</" + elementName + ">");
          return xml.join("");
        }
        if (element[options.attributesKey]) {
          xml.push(writeAttributes(element[options.attributesKey], options, depth));
        }
        var withClosingTag = hasContentCompact(element, options, true) || element[options.attributesKey] && element[options.attributesKey]["xml:space"] === "preserve";
        if (!withClosingTag) {
          if ("fullTagEmptyElementFn" in options) {
            withClosingTag = options.fullTagEmptyElementFn(name2, element);
          } else {
            withClosingTag = options.fullTagEmptyElement;
          }
        }
        if (withClosingTag) {
          xml.push(">");
        } else {
          xml.push("/>");
          return xml.join("");
        }
      }
      xml.push(writeElementsCompact(element, options, depth + 1, false));
      currentElement = element;
      currentElementName = name2;
      if (name2) {
        xml.push((indent ? writeIndentation(options, depth, false) : "") + "</" + elementName + ">");
      }
      return xml.join("");
    }
    function writeElementsCompact(element, options, depth, firstLine) {
      var i5, key, nodes, xml = [];
      for (key in element) {
        if (element.hasOwnProperty(key)) {
          nodes = isArray3(element[key]) ? element[key] : [element[key]];
          for (i5 = 0; i5 < nodes.length; ++i5) {
            switch (key) {
              case options.declarationKey:
                xml.push(writeDeclaration(nodes[i5], options, depth));
                break;
              case options.instructionKey:
                xml.push((options.indentInstruction ? writeIndentation(options, depth, firstLine) : "") + writeInstruction(nodes[i5], options, depth));
                break;
              case options.attributesKey:
              case options.parentKey:
                break;
              case options.textKey:
                xml.push((options.indentText ? writeIndentation(options, depth, firstLine) : "") + writeText(nodes[i5], options));
                break;
              case options.cdataKey:
                xml.push((options.indentCdata ? writeIndentation(options, depth, firstLine) : "") + writeCdata(nodes[i5], options));
                break;
              case options.doctypeKey:
                xml.push(writeIndentation(options, depth, firstLine) + writeDoctype(nodes[i5], options));
                break;
              case options.commentKey:
                xml.push(writeIndentation(options, depth, firstLine) + writeComment(nodes[i5], options));
                break;
              default:
                xml.push(writeIndentation(options, depth, firstLine) + writeElementCompact(nodes[i5], key, options, depth, hasContentCompact(nodes[i5], options)));
            }
            firstLine = firstLine && !xml.length;
          }
        }
      }
      return xml.join("");
    }
    module.exports = function(js, options) {
      options = validateOptions(options);
      var xml = [];
      currentElement = js;
      currentElementName = "_root_";
      if (options.compact) {
        xml.push(writeElementsCompact(js, options, 0, true));
      } else {
        if (js[options.declarationKey]) {
          xml.push(writeDeclaration(js[options.declarationKey], options, 0));
        }
        if (js[options.elementsKey] && js[options.elementsKey].length) {
          xml.push(writeElements(js[options.elementsKey], options, 0, !xml.length));
        }
      }
      return xml.join("");
    };
  }
});

// ../../node_modules/xml-js/lib/json2xml.js
var require_json2xml = __commonJS({
  "../../node_modules/xml-js/lib/json2xml.js"(exports4, module) {
    var js2xml2 = require_js2xml();
    module.exports = function(json, options) {
      if (json instanceof Buffer) {
        json = json.toString();
      }
      var js = null;
      if (typeof json === "string") {
        try {
          js = JSON.parse(json);
        } catch (e5) {
          throw new Error("The JSON structure is invalid");
        }
      } else {
        js = json;
      }
      return js2xml2(js, options);
    };
  }
});

// ../../node_modules/xml-js/lib/index.js
var require_lib = __commonJS({
  "../../node_modules/xml-js/lib/index.js"(exports4, module) {
    var xml2js2 = require_xml2js();
    var xml2json = require_xml2json();
    var js2xml2 = require_js2xml();
    var json2xml = require_json2xml();
    module.exports = {
      xml2js: xml2js2,
      xml2json,
      js2xml: js2xml2,
      json2xml
    };
  }
});

// ../../node_modules/myst-to-jats/dist/index.js
var import_xml_js2 = __toESM(require_lib(), 1);

// ../../node_modules/jats-tags/dist/elementTags.js
var Tags;
(function(Tags2) {
  Tags2["abbrev"] = "abbrev";
  Tags2["abstract"] = "abstract";
  Tags2["accessDate"] = "access-date";
  Tags2["ack"] = "ack";
  Tags2["addrLine"] = "addr-line";
  Tags2["address"] = "address";
  Tags2["aff"] = "aff";
  Tags2["affAlternatives"] = "aff-alternatives";
  Tags2["ali:free_to_read"] = "ali:free_to_read";
  Tags2["ali:license_ref"] = "ali:license_ref";
  Tags2["altText"] = "alt-text";
  Tags2["altTitle"] = "alt-title";
  Tags2["alternatives"] = "alternatives";
  Tags2["annotation"] = "annotation";
  Tags2["anonymous"] = "anonymous";
  Tags2["answer"] = "answer";
  Tags2["answerSet"] = "answer-set";
  Tags2["app"] = "app";
  Tags2["appGroup"] = "app-group";
  Tags2["array"] = "array";
  Tags2["article"] = "article";
  Tags2["articleMeta"] = "article-meta";
  Tags2["articleTitle"] = "article-title";
  Tags2["articleVersion"] = "article-version";
  Tags2["attrib"] = "attrib";
  Tags2["authorComment"] = "author-comment";
  Tags2["awardDesc"] = "award-desc";
  Tags2["awardGroup"] = "award-group";
  Tags2["awardId"] = "award-id";
  Tags2["awardName"] = "award-name";
  Tags2["back"] = "back";
  Tags2["bio"] = "bio";
  Tags2["body"] = "body";
  Tags2["bold"] = "bold";
  Tags2["boxedText"] = "boxed-text";
  Tags2["break"] = "break";
  Tags2["caption"] = "caption";
  Tags2["chapterTitle"] = "chapter-title";
  Tags2["chemStruct"] = "chem-struct";
  Tags2["chemStructWrap"] = "chem-struct-wrap";
  Tags2["citationAlternatives"] = "citation-alternatives";
  Tags2["city"] = "city";
  Tags2["code"] = "code";
  Tags2["col"] = "col";
  Tags2["colgroup"] = "colgroup";
  Tags2["collab"] = "collab";
  Tags2["collabAlternatives"] = "collab-alternatives";
  Tags2["comment"] = "comment";
  Tags2["compoundKwd"] = "compound-kwd";
  Tags2["compoundKwdPart"] = "compound-kwd-part";
  Tags2["compoundSubject"] = "compound-subject";
  Tags2["compoundSubjectPart"] = "compound-subject-part";
  Tags2["confAcronym"] = "conf-acronym";
  Tags2["confDate"] = "conf-date";
  Tags2["confLoc"] = "conf-loc";
  Tags2["confName"] = "conf-name";
  Tags2["confNum"] = "conf-num";
  Tags2["confSponsor"] = "conf-sponsor";
  Tags2["confTheme"] = "conf-theme";
  Tags2["conference"] = "conference";
  Tags2["contrib"] = "contrib";
  Tags2["contribGroup"] = "contrib-group";
  Tags2["contribId"] = "contrib-id";
  Tags2["contributedResourceGroup"] = "contributed-resource-group";
  Tags2["copyrightHolder"] = "copyright-holder";
  Tags2["copyrightStatement"] = "copyright-statement";
  Tags2["copyrightYear"] = "copyright-year";
  Tags2["country"] = "country";
  Tags2["customMeta"] = "custom-meta";
  Tags2["customMetaGroup"] = "custom-meta-group";
  Tags2["dataTitle"] = "data-title";
  Tags2["date"] = "date";
  Tags2["dateInCitation"] = "date-in-citation";
  Tags2["day"] = "day";
  Tags2["def"] = "def";
  Tags2["defHead"] = "def-head";
  Tags2["defItem"] = "def-item";
  Tags2["defList"] = "def-list";
  Tags2["degrees"] = "degrees";
  Tags2["dispFormula"] = "disp-formula";
  Tags2["dispFormulaGroup"] = "disp-formula-group";
  Tags2["dispQuote"] = "disp-quote";
  Tags2["edition"] = "edition";
  Tags2["elementCitation"] = "element-citation";
  Tags2["elocationId"] = "elocation-id";
  Tags2["email"] = "email";
  Tags2["era"] = "era";
  Tags2["etal"] = "etal";
  Tags2["explanation"] = "explanation";
  Tags2["extLink"] = "ext-link";
  Tags2["extendedBy"] = "extended-by";
  Tags2["fax"] = "fax";
  Tags2["fig"] = "fig";
  Tags2["fixedCase"] = "fixed-case";
  Tags2["fn"] = "fn";
  Tags2["fnGroup"] = "fn-group";
  Tags2["fpage"] = "fpage";
  Tags2["front"] = "front";
  Tags2["fundingGroup"] = "funding-group";
  Tags2["fundingSource"] = "funding-source";
  Tags2["fundingStatement"] = "funding-statement";
  Tags2["givenNames"] = "given-names";
  Tags2["glossary"] = "glossary";
  Tags2["glyphData"] = "glyph-data";
  Tags2["glyphRef"] = "glyph-ref";
  Tags2["gov"] = "gov";
  Tags2["graphic"] = "graphic";
  Tags2["hr"] = "hr";
  Tags2["indexTerm"] = "index-term";
  Tags2["indexTermRangeEnd"] = "index-term-range-end";
  Tags2["inlineFormula"] = "inline-formula";
  Tags2["inlineGraphic"] = "inline-graphic";
  Tags2["inlineMedia"] = "inline-media";
  Tags2["inlineSupplementaryMaterial"] = "inline-supplementary-material";
  Tags2["institution"] = "institution";
  Tags2["institutionId"] = "institution-id";
  Tags2["institutionWrap"] = "institution-wrap";
  Tags2["isbn"] = "isbn";
  Tags2["issn"] = "issn";
  Tags2["issn-l"] = "issn-l";
  Tags2["issue"] = "issue";
  Tags2["issueId"] = "issue-id";
  Tags2["issuePart"] = "issue-part";
  Tags2["issueTitle"] = "issue-title";
  Tags2["italic"] = "italic";
  Tags2["journalId"] = "journal-id";
  Tags2["kwd"] = "kwd";
  Tags2["kwdGroup"] = "kwd-group";
  Tags2["label"] = "label";
  Tags2["license"] = "license";
  Tags2["license-p"] = "license-p";
  Tags2["list"] = "list";
  Tags2["listItem"] = "list-item";
  Tags2["longDesc"] = "long-desc";
  Tags2["lpage"] = "lpage";
  Tags2["media"] = "media";
  Tags2["metaName"] = "meta-name";
  Tags2["metaValue"] = "meta-value";
  Tags2["mixedCitation"] = "mixed-citation";
  Tags2["mml:math"] = "mml:math";
  Tags2["monospace"] = "monospace";
  Tags2["month"] = "month";
  Tags2["name"] = "name";
  Tags2["nameAlternatives"] = "name-alternatives";
  Tags2["namedContent"] = "named-content";
  Tags2["nestedKwd"] = "nested-kwd";
  Tags2["nlmCitation"] = "nlm-citation";
  Tags2["objectId"] = "object-id";
  Tags2["onBehalfOf"] = "on-behalf-of";
  Tags2["openAccess"] = "open-access";
  Tags2["option"] = "option";
  Tags2["overline"] = "overline";
  Tags2["p"] = "p";
  Tags2["pageCount"] = "page-count";
  Tags2["pageRange"] = "page-range";
  Tags2["partTitle"] = "part-title";
  Tags2["patent"] = "patent";
  Tags2["permissions"] = "permissions";
  Tags2["personGroup"] = "person-group";
  Tags2["phone"] = "phone";
  Tags2["postalCode"] = "postal-code";
  Tags2["prefix"] = "prefix";
  Tags2["preformat"] = "preformat";
  Tags2["price"] = "price";
  Tags2["principalAwardRecipient"] = "principal-award-recipient";
  Tags2["principalInvestigator"] = "principal-investigator";
  Tags2["privateChar"] = "private-char";
  Tags2["processingMeta"] = "processing-meta";
  Tags2["product"] = "product";
  Tags2["pubId"] = "pub-id";
  Tags2["publisherLoc"] = "publisher-loc";
  Tags2["publisherName"] = "publisher-name";
  Tags2["question"] = "question";
  Tags2["questionPreamble"] = "question-preamble";
  Tags2["questionWrap"] = "question-wrap";
  Tags2["questionWrapGroup"] = "question-wrap-group";
  Tags2["rb"] = "rb";
  Tags2["ref"] = "ref";
  Tags2["refList"] = "ref-list";
  Tags2["relatedArticle"] = "related-article";
  Tags2["relatedObject"] = "related-object";
  Tags2["resourceGroup"] = "resource-group";
  Tags2["resourceId"] = "resource-id";
  Tags2["resourceName"] = "resource-name";
  Tags2["resourceWrap"] = "resource-wrap";
  Tags2["restrictedBy"] = "restricted-by";
  Tags2["role"] = "role";
  Tags2["roman"] = "roman";
  Tags2["rt"] = "rt";
  Tags2["ruby"] = "ruby";
  Tags2["sansSerif"] = "sans-serif";
  Tags2["sc"] = "sc";
  Tags2["season"] = "season";
  Tags2["sec"] = "sec";
  Tags2["secMeta"] = "sec-meta";
  Tags2["see"] = "see";
  Tags2["seeAlso"] = "see-also";
  Tags2["selfUri"] = "self-uri";
  Tags2["series"] = "series";
  Tags2["size"] = "size";
  Tags2["source"] = "source";
  Tags2["speaker"] = "speaker";
  Tags2["speech"] = "speech";
  Tags2["state"] = "state";
  Tags2["statement"] = "statement";
  Tags2["std"] = "std";
  Tags2["stdOrganization"] = "std-organization";
  Tags2["strike"] = "strike";
  Tags2["stringDate"] = "string-date";
  Tags2["stringName"] = "string-name";
  Tags2["styledContent"] = "styled-content";
  Tags2["sub"] = "sub";
  Tags2["subjGroup"] = "subj-group";
  Tags2["subject"] = "subject";
  Tags2["subtitle"] = "subtitle";
  Tags2["suffix"] = "suffix";
  Tags2["sup"] = "sup";
  Tags2["supplement"] = "supplement";
  Tags2["supplementaryMaterial"] = "supplementary-material";
  Tags2["supportDescription"] = "support-description";
  Tags2["supportGroup"] = "support-group";
  Tags2["supportSource"] = "support-source";
  Tags2["surname"] = "surname";
  Tags2["table"] = "table";
  Tags2["tableWrap"] = "table-wrap";
  Tags2["tableWrapFoot"] = "table-wrap-foot";
  Tags2["target"] = "target";
  Tags2["tbody"] = "tbody";
  Tags2["td"] = "td";
  Tags2["term"] = "term";
  Tags2["termHead"] = "term-head";
  Tags2["textualForm"] = "textual-form";
  Tags2["tfoot"] = "tfoot";
  Tags2["th"] = "th";
  Tags2["thead"] = "thead";
  Tags2["timeStamp"] = "time-stamp";
  Tags2["title"] = "title";
  Tags2["titleGroup"] = "title-group";
  Tags2["tr"] = "tr";
  Tags2["transSource"] = "trans-source";
  Tags2["transTitle"] = "trans-title";
  Tags2["underline"] = "underline";
  Tags2["uri"] = "uri";
  Tags2["verseGroup"] = "verse-group";
  Tags2["verseLine"] = "verse-line";
  Tags2["version"] = "version";
  Tags2["volume"] = "volume";
  Tags2["volumeId"] = "volume-id";
  Tags2["volumeSeries"] = "volume-series";
  Tags2["xref"] = "xref";
  Tags2["year"] = "year";
  Tags2["subArticle"] = "sub-article";
  Tags2["articleId"] = "article-id";
  Tags2["pubDate"] = "pub-date";
  Tags2["articleCategories"] = "article-categories";
  Tags2["journalTitle"] = "journal-title";
})(Tags || (Tags = {}));

// ../../node_modules/jats-tags/dist/refType.js
var RefType;
(function(RefType2) {
  RefType2["aff"] = "aff";
  RefType2["app"] = "app";
  RefType2["authorNote"] = "author-note";
  RefType2["award"] = "award";
  RefType2["bibr"] = "bibr";
  RefType2["bio"] = "bio";
  RefType2["boxedText"] = "boxed-text";
  RefType2["chem"] = "chem";
  RefType2["collab"] = "collab";
  RefType2["contrib"] = "contrib";
  RefType2["corresp"] = "corresp";
  RefType2["custom"] = "custom";
  RefType2["dispFormula"] = "disp-formula";
  RefType2["fig"] = "fig";
  RefType2["fn"] = "fn";
  RefType2["kwd"] = "kwd";
  RefType2["list"] = "list";
  RefType2["plate"] = "plate";
  RefType2["scheme"] = "scheme";
  RefType2["sec"] = "sec";
  RefType2["statement"] = "statement";
  RefType2["supplementaryMaterial"] = "supplementary-material";
  RefType2["table"] = "table";
  RefType2["tableFn"] = "table-fn";
})(RefType || (RefType = {}));

// ../../node_modules/jats-utils/dist/utils.js
function escapeForXML(text) {
  return text.replace(/&(?!amp;)/g, "&amp;").replace(/</g, "&lt;");
}

// ../../node_modules/jats-utils/dist/serialize.js
var import_xml_js = __toESM(require_lib(), 1);
var both = [
  "\\?xml",
  "article",
  "sub-article",
  "front",
  "front-stub",
  "journal-meta",
  "journal-title-group",
  "publisher",
  "article-meta",
  "article-categories",
  "title-group",
  "contrib-group",
  "contrib",
  "institution-wrap",
  "aff",
  "permissions",
  "license",
  "kwd-group",
  "history",
  "self-uri",
  "funding-group",
  "award-group",
  "principal-award-recipient",
  "custom-meta-group",
  "date",
  "pub-date",
  "abstract",
  "counts",
  "body",
  "sec",
  "fig",
  "statement",
  "list",
  "disp-formula",
  "disp-formula-group",
  "table-wrap",
  "caption",
  "table",
  "thead",
  "ref-list",
  "ref",
  "back"
];
var first = [
  "journal-id",
  "journal-title",
  "issn",
  "publisher-name",
  "publisher-loc",
  "article-id",
  "article-title",
  "alt-title",
  "subtitle",
  "kwd",
  "name",
  "email",
  "contrib-id",
  "role",
  "institution",
  "institution-id",
  "award-id",
  "meta-name",
  "meta-value",
  "title",
  "p",
  "license-p",
  "tr",
  "label",
  "graphic",
  "mixed-citation"
];
function indentXML(xml) {
  return xml.replace(RegExp(`<(\\/)?(${both.join("|")})( [^>]*)?>`, "g"), "<$1$2$3>\n").replace(RegExp(`([^
])<(\\/)?(${both.join("|")})( [^>]*)?>`, "g"), "$1\n<$2$3$4>").replace(RegExp(`([^
])<(${first.join("|")})( [^>]*)?>`, "g"), "$1\n<$2$3>").replace(RegExp(`<\\/(${first.join("|")})(\\s*)>([^
])`, "g"), "</$1>\n$3");
}
function serializeJatsXml(element, opts) {
  const { format: format3 } = { format: "pretty", ...opts };
  const xml = (0, import_xml_js.js2xml)(element, {
    compact: false,
    //  No way to write XML with new lines, but no indentation with js2xml.
    // If you use 0 or '', you get a single line.
    spaces: format3 === "flat" || format3 === "pretty" ? 0 : format3 || 1,
    attributeValueFn: escapeForXML
  });
  if (format3 === 0) {
    return xml.replace(/\n(\s*)</g, "\n<");
  } else if (format3 === "pretty") {
    return indentXML(xml);
  }
  return xml;
}

// ../../node_modules/myst-to-jats/dist/backmatter.js
function citeToJatsRef(state, key, data) {
  var _a, _b, _c, _d;
  const publicationType = !data.type || data.type === "article-journal" ? "journal" : data.type;
  const elements = [];
  const authors = (_a = data.author) === null || _a === void 0 ? void 0 : _a.map((author) => {
    if (!author.given && !author.family)
      return void 0;
    const authorChildren = [];
    if (author.family) {
      authorChildren.push({
        type: "element",
        name: "surname",
        elements: [{ type: "text", text: author.family }]
      });
    }
    if (author.given) {
      authorChildren.push({
        type: "element",
        name: "given-names",
        elements: [{ type: "text", text: author.given }]
      });
    }
    const authorElem = {
      type: "element",
      name: "name",
      elements: authorChildren
    };
    return authorElem;
  }).filter((author) => !!author);
  if (authors && authors.length) {
    elements.push({
      type: "element",
      name: "person-group",
      attributes: { "person-group-type": "author" },
      elements: authors
    });
  }
  if (data["container-title"]) {
    elements.push({
      type: "element",
      name: "source",
      elements: [{ type: "text", text: data["container-title"] }]
    });
  }
  const year = (_d = (_c = (_b = data.issued) === null || _b === void 0 ? void 0 : _b["date-parts"]) === null || _c === void 0 ? void 0 : _c[0]) === null || _d === void 0 ? void 0 : _d[0];
  if (year) {
    elements.push({
      type: "element",
      name: "year",
      attributes: { "iso-8601-date": String(year) },
      elements: [{ type: "text", text: String(year) }]
    });
  }
  if (data.DOI) {
    elements.push({
      type: "element",
      name: "pub-id",
      attributes: { "pub-id-type": "doi" },
      elements: [{ type: "text", text: data.DOI }]
    });
  }
  if (data.volume) {
    elements.push({
      type: "element",
      name: "volume",
      elements: [{ type: "text", text: data.volume }]
    });
  }
  if (data.issue) {
    elements.push({
      type: "element",
      name: "issue",
      elements: [{ type: "text", text: data.issue }]
    });
  }
  if (data.page) {
    const [firstPage, lastPage] = data.page.split("-");
    if (firstPage) {
      elements.push({
        type: "element",
        name: "fpage",
        elements: [{ type: "text", text: firstPage }]
      });
    }
    if (lastPage) {
      elements.push({
        type: "element",
        name: "lpage",
        elements: [{ type: "text", text: lastPage }]
      });
    }
  }
  if (data.ISSN) {
    elements.push({
      type: "element",
      name: "issn",
      elements: [{ type: "text", text: data.ISSN }]
    });
  }
  if (data.title || elements.length === 0) {
    elements.unshift({
      type: "element",
      name: "article-title",
      elements: data.title ? [{ type: "text", text: data.title }] : []
    });
  }
  return {
    type: "element",
    name: "ref",
    attributes: { id: key },
    elements: [
      {
        type: "element",
        name: "element-citation",
        attributes: { "publication-type": publicationType },
        elements
      }
    ]
  };
}
function getRefList(state, order, citations) {
  const elements = order === null || order === void 0 ? void 0 : order.map((key) => {
    if (!(citations === null || citations === void 0 ? void 0 : citations[key])) {
      state.warn(`unknown citation ${key}`);
      return void 0;
    }
    return citeToJatsRef(state, key, citations[key].cite);
  }).filter((e5) => !!e5);
  if (!(elements === null || elements === void 0 ? void 0 : elements.length))
    return [];
  return [{ type: "element", name: "ref-list", elements }];
}
function getFootnotes(footnotes) {
  if (!(footnotes === null || footnotes === void 0 ? void 0 : footnotes.length))
    return [];
  return [{ type: "element", name: "fn-group", elements: footnotes }];
}
function getExpressions(expressions) {
  if (!(expressions === null || expressions === void 0 ? void 0 : expressions.length))
    return [];
  return [
    {
      type: "element",
      name: "notes",
      attributes: { "notes-type": "expressions" },
      elements: expressions
    }
  ];
}
function getBack(state, { citations, footnotes, expressions, referenceOrder }) {
  var _a;
  const elements = [
    ...(_a = state.data.backSections) !== null && _a !== void 0 ? _a : [],
    ...getRefList(state, referenceOrder, citations),
    ...getFootnotes(footnotes),
    ...getExpressions(expressions),
    ...state.data.acknowledgments ? [state.data.acknowledgments] : []
    // app-group
    // bio
    // glossary
    // notes
  ];
  if (!elements.length)
    return [];
  return [{ type: "element", name: "back", elements }];
}

// ../../node_modules/myst-to-jats/dist/frontmatter.js
function getJournalIds() {
  return [];
}
function getJournalTitleGroup() {
  const elements = [];
  return elements.length ? [{ type: "element", name: "journal-title-group", elements }] : [];
}
function getJournalAffiliations() {
  return [];
}
function getJournalISNs() {
  return [];
}
function getJournalPublisher() {
  return [];
}
function getJournalMeta() {
  const elements = [
    ...getJournalIds(),
    ...getJournalTitleGroup(),
    ...getJournalAffiliations(),
    ...getJournalISNs(),
    ...getJournalPublisher()
    // notes
    // self-url
  ];
  return elements.length ? { type: "element", name: "journal-meta", elements } : null;
}
function getArticleTitle(frontmatter) {
  const title = frontmatter === null || frontmatter === void 0 ? void 0 : frontmatter.title;
  const subtitle = frontmatter === null || frontmatter === void 0 ? void 0 : frontmatter.subtitle;
  const short_title = frontmatter === null || frontmatter === void 0 ? void 0 : frontmatter.short_title;
  if (!title && !subtitle && !short_title)
    return [];
  const articleTitle = [
    {
      type: "element",
      name: "article-title",
      elements: title ? [{ type: "text", text: title }] : []
    }
  ];
  const articleSubtitle = subtitle ? [
    {
      type: "element",
      name: "subtitle",
      elements: [{ type: "text", text: subtitle }]
    }
  ] : [];
  const articleShortTitle = short_title ? [
    {
      type: "element",
      name: "alt-title",
      attributes: { "alt-title-type": "running-head" },
      elements: [{ type: "text", text: short_title }]
    }
  ] : [];
  return [
    {
      type: "element",
      name: "title-group",
      elements: [...articleTitle, ...articleSubtitle, ...articleShortTitle]
    }
  ];
}
function nameElementFromContributor(contrib) {
  var _a, _b;
  if (contrib.nameParsed && (((_a = contrib.nameParsed) === null || _a === void 0 ? void 0 : _a.given) || ((_b = contrib.nameParsed) === null || _b === void 0 ? void 0 : _b.family))) {
    const { given, family, dropping_particle, non_dropping_particle, suffix } = contrib.nameParsed;
    const nameElements = [];
    if (family) {
      nameElements.push({
        type: "element",
        name: "surname",
        elements: [
          {
            type: "text",
            text: non_dropping_particle ? `${non_dropping_particle} ${family}` : family
          }
        ]
      });
    }
    if (given) {
      nameElements.push({
        type: "element",
        name: "given-names",
        elements: [
          {
            type: "text",
            text: dropping_particle ? `${given} ${dropping_particle}` : given
          }
        ]
      });
    }
    if (suffix) {
      nameElements.push({
        type: "element",
        name: "suffix",
        elements: [{ type: "text", text: suffix }]
      });
    }
    return {
      type: "element",
      name: "name",
      attributes: { "name-style": "western" },
      elements: nameElements
    };
  } else if (contrib.name) {
    return {
      type: "element",
      name: "string-name",
      attributes: { "name-style": "western" },
      elements: [{ type: "text", text: contrib.name }]
    };
  }
}
function getArticleAuthors(frontmatter) {
  var _a;
  const generateContrib = (author, type) => {
    const attributes = {};
    const elements = [];
    if (type)
      attributes["contrib-type"] = type;
    if (author.corresponding)
      attributes.corresp = "yes";
    if (author.deceased)
      attributes["deceased"] = "yes";
    if (author.equal_contributor != null) {
      attributes["equal-contrib"] = author.equal_contributor ? "yes" : "no";
    }
    if (orcid.validate(author.orcid)) {
      elements.push({
        type: "element",
        name: "contrib-id",
        attributes: { "contrib-id-type": "orcid" },
        elements: [{ type: "text", text: orcid.buildUrl(author.orcid) }]
      });
    }
    const name2 = nameElementFromContributor(author);
    if (name2)
      elements.push(name2);
    if (author.roles) {
      elements.push(...author.roles.map((role) => {
        const attrs = {};
        if (validate(role)) {
          attrs.vocab = "credit";
          attrs["vocab-identifier"] = CREDIT_URL;
          attrs["vocab-term"] = normalize(role);
          attrs["vocab-term-identifier"] = buildUrl(role);
        }
        return {
          type: "element",
          name: "role",
          attributes: attrs,
          elements: [{ type: "text", text: role }]
        };
      }));
    }
    if (author.affiliations) {
      elements.push(...author.affiliations.map((aff) => {
        return {
          type: "element",
          name: "xref",
          attributes: { "ref-type": "aff", rid: aff }
        };
      }));
    }
    if (author.email) {
      elements.push({
        type: "element",
        name: "email",
        elements: [{ type: "text", text: author.email }]
      });
    }
    if (author.url) {
      elements.push({
        type: "element",
        name: "ext-link",
        attributes: { "ext-link-type": "uri", "xlink:href": author.url },
        elements: [{ type: "text", text: author.url }]
      });
    }
    return { type: "element", name: "contrib", attributes, elements };
  };
  const authorContribs = ((_a = frontmatter.authors) !== null && _a !== void 0 ? _a : []).map((author) => {
    return generateContrib(author, "author");
  });
  const contribGroups = [];
  if (authorContribs.length) {
    contribGroups.push({ type: "element", name: "contrib-group", elements: authorContribs });
  }
  return contribGroups;
}
function instWrapElementsFromAffiliation(affiliation, includeDept = true) {
  const elements = [];
  const instWrapElements = [];
  if (affiliation.name) {
    instWrapElements.push({
      type: "element",
      name: "institution",
      elements: [{ type: "text", text: affiliation.name }]
    });
  }
  if (affiliation.isni) {
    instWrapElements.push({
      type: "element",
      name: "institution-id",
      attributes: { "institution-id-type": "isni" },
      elements: [{ type: "text", text: affiliation.isni }]
    });
  }
  if (affiliation.ringgold) {
    instWrapElements.push({
      type: "element",
      name: "institution-id",
      attributes: { "institution-id-type": "ringgold" },
      elements: [{ type: "text", text: `${affiliation.ringgold}` }]
    });
  }
  if (affiliation.ror) {
    instWrapElements.push({
      type: "element",
      name: "institution-id",
      attributes: { "institution-id-type": "ror" },
      elements: [{ type: "text", text: affiliation.ror }]
    });
  }
  if (affiliation.doi) {
    const doiAttrs = { "institution-id-type": "doi" };
    const funder = doi.isOpenFunderRegistry(affiliation.doi);
    if (funder) {
      doiAttrs.vocab = "open-funder-registry";
    }
    instWrapElements.push({
      type: "element",
      name: "institution-id",
      attributes: doiAttrs,
      elements: [{ type: "text", text: doi.normalize(affiliation.doi) }]
    });
  }
  if (instWrapElements.length) {
    elements.push({ type: "element", name: "institution-wrap", elements: instWrapElements });
  }
  if (includeDept && affiliation.department) {
    elements.push({
      type: "element",
      name: "institution-wrap",
      elements: [
        {
          type: "element",
          name: "institution",
          attributes: { "content-type": "dept" },
          elements: [{ type: "text", text: affiliation.department }]
        }
      ]
    });
  }
  return elements;
}
function getArticleAffiliations(frontmatter) {
  var _a, _b, _c;
  if (!((_a = frontmatter.affiliations) === null || _a === void 0 ? void 0 : _a.length))
    return [];
  const affIds = [
    ...new Set((_c = (_b = frontmatter.authors) === null || _b === void 0 ? void 0 : _b.map((auth) => {
      var _a2;
      return (_a2 = auth.affiliations) !== null && _a2 !== void 0 ? _a2 : [];
    }).flat()) !== null && _c !== void 0 ? _c : [])
  ];
  if (!(affIds === null || affIds === void 0 ? void 0 : affIds.length))
    return [];
  const affs = affIds.map((id) => {
    var _a2;
    return (_a2 = frontmatter.affiliations) === null || _a2 === void 0 ? void 0 : _a2.find((aff) => aff.id === id);
  }).filter((aff) => !!aff).map((affiliation) => {
    const elements = [];
    const attributes = {};
    if (affiliation.id) {
      attributes.id = affiliation.id;
    }
    elements.push(...instWrapElementsFromAffiliation(affiliation));
    if (affiliation.address) {
      elements.push({
        type: "element",
        name: "addr-line",
        elements: [{ type: "text", text: affiliation.address }]
      });
    }
    if (affiliation.city) {
      elements.push({
        type: "element",
        name: "city",
        elements: [{ type: "text", text: affiliation.city }]
      });
    }
    if (affiliation.state) {
      elements.push({
        type: "element",
        name: "state",
        elements: [{ type: "text", text: affiliation.state }]
      });
    }
    if (affiliation.postal_code) {
      elements.push({
        type: "element",
        name: "postal-code",
        elements: [{ type: "text", text: affiliation.postal_code }]
      });
    }
    if (affiliation.country) {
      elements.push({
        type: "element",
        name: "country",
        elements: [{ type: "text", text: affiliation.country }]
      });
    }
    if (affiliation.phone) {
      elements.push({
        type: "element",
        name: "phone",
        elements: [{ type: "text", text: affiliation.phone }]
      });
    }
    if (affiliation.fax) {
      elements.push({
        type: "element",
        name: "fax",
        elements: [{ type: "text", text: affiliation.fax }]
      });
    }
    if (affiliation.email) {
      elements.push({
        type: "element",
        name: "email",
        elements: [{ type: "text", text: affiliation.email }]
      });
    }
    if (affiliation.url) {
      elements.push({
        type: "element",
        name: "ext-link",
        attributes: { "ext-link-type": "uri", "xlink:href": affiliation.url },
        elements: [{ type: "text", text: affiliation.url }]
      });
    }
    return {
      type: "element",
      name: "aff",
      attributes,
      elements
    };
  });
  return affs ? affs : [];
}
function getArticlePermissions(frontmatter) {
  var _a, _b, _c, _d, _e, _f, _g;
  const isCCBY = ((_b = (_a = frontmatter.license) === null || _a === void 0 ? void 0 : _a.content) === null || _b === void 0 ? void 0 : _b.id) === "CC-BY-4.0";
  const licenseUrl = (_e = (_d = (_c = frontmatter.license) === null || _c === void 0 ? void 0 : _c.content) === null || _d === void 0 ? void 0 : _d.url) !== null && _e !== void 0 ? _e : (_g = (_f = frontmatter.license) === null || _f === void 0 ? void 0 : _f.code) === null || _g === void 0 ? void 0 : _g.url;
  const freeToRead = frontmatter.open_access ? [{ type: "element", name: "ali:free_to_read" }] : [];
  const licenseP = isCCBY ? [
    {
      type: "element",
      name: "license-p",
      elements: [
        {
          type: "text",
          text: `This ${frontmatter.open_access ? "is an open access article" : "article is"} distributed under the terms of the `
        },
        {
          type: "element",
          name: "ext-link",
          attributes: {
            "ext-link-type": "uri",
            "xlink:href": "http://creativecommons.org/licenses/by/4.0/"
          },
          elements: [{ type: "text", text: "Creative Commons Attribution License" }]
        },
        {
          type: "text",
          text: ", which permits unrestricted use, distribution, and reproduction in any medium, provided the original author and source are credited."
        }
      ]
    }
  ] : [];
  return licenseUrl ? [
    {
      type: "element",
      name: "permissions",
      elements: [
        ...freeToRead,
        {
          type: "element",
          name: "license",
          attributes: { "xlink:href": licenseUrl },
          elements: [
            {
              type: "element",
              name: "ali:license_ref",
              elements: [{ type: "text", text: licenseUrl }]
            },
            ...licenseP
          ]
        }
      ]
    }
  ] : [];
}
function getKwdGroup(frontmatter) {
  var _a;
  const kwds = (_a = frontmatter.keywords) === null || _a === void 0 ? void 0 : _a.map((keyword) => {
    return { type: "element", name: "kwd", elements: [{ type: "text", text: keyword }] };
  });
  return (kwds === null || kwds === void 0 ? void 0 : kwds.length) ? [{ type: "element", name: "kwd-group", elements: kwds }] : [];
}
function getFundingGroup(frontmatter) {
  var _a;
  const fundingGroups = (_a = frontmatter.funding) === null || _a === void 0 ? void 0 : _a.map((fund) => {
    var _a2;
    const elements = [];
    if ((_a2 = fund.awards) === null || _a2 === void 0 ? void 0 : _a2.length) {
      elements.push(...fund.awards.map((award) => {
        var _a3, _b, _c;
        const awardElements = [];
        const resolvedSources = (_a3 = award.sources) === null || _a3 === void 0 ? void 0 : _a3.map((source) => {
          var _a4;
          return (_a4 = frontmatter.affiliations) === null || _a4 === void 0 ? void 0 : _a4.find((aff) => aff.id === source);
        }).filter((source) => !!source);
        if (resolvedSources === null || resolvedSources === void 0 ? void 0 : resolvedSources.length) {
          awardElements.push(...resolvedSources.map((source) => {
            return {
              type: "element",
              name: "funding-source",
              elements: instWrapElementsFromAffiliation(source, false)
            };
          }));
        }
        if (award.id) {
          awardElements.push({
            type: "element",
            name: "award-id",
            elements: [{ type: "text", text: award.id }]
          });
        }
        if (award.name) {
          awardElements.push({
            type: "element",
            name: "award-name",
            elements: [{ type: "text", text: award.name }]
          });
        }
        if (award.description) {
          awardElements.push({
            type: "element",
            name: "award-desc",
            elements: [{ type: "text", text: award.description }]
          });
        }
        if ((_b = award.recipients) === null || _b === void 0 ? void 0 : _b.length) {
          awardElements.push(...award.recipients.map((recipient) => {
            var _a4, _b2, _c2;
            const recipientElements = [];
            const author = (_c2 = [
              ...(_a4 = frontmatter.authors) !== null && _a4 !== void 0 ? _a4 : [],
              ...(_b2 = frontmatter.contributors) !== null && _b2 !== void 0 ? _b2 : []
            ].find((auth) => auth.id === recipient)) !== null && _c2 !== void 0 ? _c2 : { name: recipient };
            if (orcid.validate(author.orcid)) {
              recipientElements.push({
                type: "element",
                name: "contrib-id",
                attributes: { "contrib-id-type": "orcid" },
                elements: [{ type: "text", text: orcid.buildUrl(author.orcid) }]
              });
            }
            const name2 = nameElementFromContributor(author);
            if (name2)
              recipientElements.push(name2);
            return {
              type: "element",
              name: "principal-award-recipient",
              elements: recipientElements
            };
          }));
        }
        if ((_c = award.investigators) === null || _c === void 0 ? void 0 : _c.length) {
          awardElements.push(...award.investigators.map((investigator) => {
            var _a4, _b2, _c2;
            const investigatorElements = [];
            const author = (_c2 = [
              ...(_a4 = frontmatter.authors) !== null && _a4 !== void 0 ? _a4 : [],
              ...(_b2 = frontmatter.contributors) !== null && _b2 !== void 0 ? _b2 : []
            ].find((auth) => auth.id === investigator)) !== null && _c2 !== void 0 ? _c2 : { name: investigator };
            if (orcid.validate(author.orcid)) {
              investigatorElements.push({
                type: "element",
                name: "contrib-id",
                attributes: { "contrib-id-type": "orcid" },
                elements: [{ type: "text", text: orcid.buildUrl(author.orcid) }]
              });
            }
            const name2 = nameElementFromContributor(author);
            if (name2)
              investigatorElements.push(name2);
            return {
              type: "element",
              name: "principal-investigator",
              elements: investigatorElements
            };
          }));
        }
        return { type: "element", name: "award-group", elements: awardElements };
      }));
    }
    if (fund.statement) {
      elements.push({
        type: "element",
        name: "funding-statement",
        elements: [{ type: "text", text: fund.statement }]
      });
    }
    if (fund.open_access) {
      elements.push({
        type: "element",
        name: "open-access",
        elements: [
          { type: "element", name: "p", elements: [{ type: "text", text: fund.open_access }] }
        ]
      });
    }
    return { type: "element", name: "funding-group", elements };
  });
  return fundingGroups ? fundingGroups : [];
}
function getArticleVolume(frontmatter) {
  var _a;
  const text = (_a = frontmatter.biblio) === null || _a === void 0 ? void 0 : _a.volume;
  return text ? [{ type: "element", name: "volume", elements: [{ type: "text", text: `${text}` }] }] : [];
}
function getArticleIssue(frontmatter) {
  var _a;
  const text = (_a = frontmatter.biblio) === null || _a === void 0 ? void 0 : _a.issue;
  return text ? [{ type: "element", name: "issue", elements: [{ type: "text", text: `${text}` }] }] : [];
}
function getArticlePages(frontmatter) {
  var _a;
  const { first_page, last_page } = (_a = frontmatter.biblio) !== null && _a !== void 0 ? _a : {};
  const pages = [];
  if (first_page) {
    pages.push({
      type: "element",
      name: "fpage",
      elements: [{ type: "text", text: `${first_page}` }]
    });
  }
  if (last_page) {
    pages.push({
      type: "element",
      name: "lpage",
      elements: [{ type: "text", text: `${last_page}` }]
    });
  }
  return pages;
}
function getArticleIds(frontmatter) {
  const ids = [];
  if (doi.validate(frontmatter.doi)) {
    ids.push({
      type: "element",
      name: "article-id",
      attributes: { "pub-id-type": "doi" },
      elements: [{ type: "text", text: doi.normalize(frontmatter.doi) }]
    });
  }
  return ids;
}
function getArticleMeta(frontmatter, state) {
  const elements = [];
  if (frontmatter) {
    elements.push(
      ...getArticleIds(frontmatter),
      ...getArticleTitle(frontmatter),
      ...getArticleAuthors(frontmatter),
      ...getArticleAffiliations(frontmatter),
      ...getArticleVolume(frontmatter),
      ...getArticleIssue(frontmatter),
      ...getArticlePages(frontmatter),
      ...getArticlePermissions(frontmatter)
    );
  }
  if ((state === null || state === void 0 ? void 0 : state.data.abstracts) && state.data.abstracts.length > 0) {
    elements.push(...state.data.abstracts);
  }
  if (frontmatter) {
    elements.push(
      ...getKwdGroup(frontmatter),
      ...getFundingGroup(frontmatter)
    );
  }
  return { type: "element", name: "article-meta", elements };
}
function getFront(frontmatter, state) {
  const elements = [];
  const journalMeta = getJournalMeta();
  if (journalMeta)
    elements.push(journalMeta);
  const articleMeta = getArticleMeta(frontmatter, state);
  elements.push(articleMeta);
  return [{ type: "element", name: "front", elements }];
}

// ../../node_modules/myst-to-jats/dist/types.js
var ACKNOWLEDGMENT_PARTS = ["acknowledgments", "acknowledgements"];
var ABSTRACT_PARTS = ["abstract"];

// ../../node_modules/myst-to-jats/dist/transforms/definitions.js
function definitionTransform(mdast) {
  const defList = selectAll("definitionList", mdast);
  defList.forEach((node) => {
    const children = [];
    let current = void 0;
    function pushItem() {
      if (current && current.children.length > 0) {
        children.push(current);
      }
      current = { type: "definitionItem", children: [] };
    }
    node.children.forEach((child) => {
      if (child.type === "definitionTerm" || !current) {
        pushItem();
      }
      current === null || current === void 0 ? void 0 : current.children.push(child);
    });
    pushItem();
    node.children = children;
  });
  const defDescriptions = selectAll("definitionDescription", mdast);
  defDescriptions.forEach((node) => {
    const allParagraphs = node.children.reduce((b3, n5) => b3 && n5.type === "paragraph", true);
    const oneParagraph = !!node.children.find((n5) => n5.type === "paragraph");
    if (allParagraphs || !oneParagraph)
      return;
    node.children = node.children.map((child) => {
      if (child.type === "paragraph")
        return child;
      return { type: "paragraph", children: [child] };
    });
  });
}

// ../../node_modules/myst-to-jats/dist/transforms/containers.js
function liftCaptionNumber(container) {
  const caption = select("caption", container);
  const captionNumber = select("captionNumber", container);
  if (caption)
    remove(caption, "captionNumber");
  if (captionNumber)
    container.children.splice(0, 0, captionNumber);
}
function containerTransform(mdast) {
  const figures = selectAll("container", mdast);
  figures.forEach((container) => {
    var _a, _b, _c, _d;
    liftCaptionNumber(container);
    if (container.kind === "quote") {
      const caption2 = select("caption > paragraph", container);
      const blockquote = select("blockquote", container);
      if (blockquote && caption2) {
        const newContainer = container;
        newContainer.type = "blockquote";
        newContainer.children = blockquote.children;
        caption2.type = "attrib";
        newContainer.children.push(caption2);
      }
    }
    const caption = (_a = select("caption", container)) !== null && _a !== void 0 ? _a : { type: "caption", children: [] };
    const legends = selectAll("legend", container);
    if (legends.length) {
      const legendChildren = legends.map((leg) => leg.children).flat();
      caption.children.push(...legendChildren);
      remove(container, "legend");
    }
    const { identifier } = (_c = normalizeLabel((_b = container.source) === null || _b === void 0 ? void 0 : _b.label)) !== null && _c !== void 0 ? _c : {};
    if (identifier && container.source) {
      caption.children.push({
        type: "supplementaryMaterial",
        enumerator: container.enumerator,
        figIdentifier: container.identifier,
        sourceUrl: container.source.url,
        sourceSlug: container.source.slug,
        embedIdentifier: identifier
      });
    }
    if (((_d = caption.children) === null || _d === void 0 ? void 0 : _d.length) && !select("caption", container)) {
      container.children.push(caption);
    }
    if (container.kind === "figure") {
      container.children = [
        ...container.children.filter((child) => child.type.startsWith("caption")),
        ...container.children.filter((child) => !child.type.startsWith("caption"))
      ];
    }
  });
}

// ../../node_modules/myst-to-jats/dist/transforms/tables.js
function tableTransform(mdast) {
  const tables = selectAll("table", mdast);
  tables.forEach((table) => {
    const head = { type: "tableHead", children: [] };
    const body = { type: "tableBody", children: [] };
    table.children.forEach((tr) => {
      const isHeaderRow = tr.children.reduce((h5, v4) => h5 && !!v4.header, true);
      if (isHeaderRow && body.children.length === 0) {
        head.children.push(tr);
      } else {
        body.children.push(tr);
      }
    });
    table.children = head.children.length > 0 ? [head, body] : [body];
  });
}

// ../../node_modules/myst-to-jats/dist/transforms/sections.js
function sectionAttrsFromBlock(node) {
  const output = {};
  if (node.data) {
    const blockType = node.data.type;
    if (Object.values(NotebookCell).includes(blockType)) {
      output["sec-type"] = blockType;
    }
  }
  if (node.identifier)
    output.id = node.identifier;
  return output;
}
function blockIsNotebookCode(node) {
  return sectionAttrsFromBlock(node)["sec-type"] === NotebookCell.code;
}
function blockIsNotebookFigure(node) {
  var _a;
  return !!((_a = node.data) === null || _a === void 0 ? void 0 : _a["fig-cap"]);
}
function headingsToSections(tree) {
  var _a;
  const stack = [];
  const children = [];
  function push(child) {
    const top = stack[stack.length - 1];
    if (top) {
      top.children.push(child);
    } else {
      children.push(child);
    }
  }
  function newSection(heading) {
    const { enumerator, enumerated, ...filtered } = heading;
    const next = { ...filtered, type: "section", children: [] };
    while (stack[stack.length - 1] && stack[stack.length - 1].depth >= heading.depth)
      stack.pop();
    push(next);
    stack.push(next);
    return { enumerator, enumerated };
  }
  (_a = tree.children) === null || _a === void 0 ? void 0 : _a.forEach((child) => {
    if (child.type === "heading") {
      const { enumerator, enumerated } = newSection(child);
      push({ type: "heading", enumerator, enumerated, children: child.children });
    } else {
      push(child);
    }
  });
  tree.children = children;
}
function sectionTransform(tree, opts) {
  if (opts === null || opts === void 0 ? void 0 : opts.isSubArticle) {
    selectAll("block", tree).forEach((node) => {
      node.type = "section";
      node.depth = 0;
      headingsToSections(node);
    });
    return;
  }
  selectAll("block", tree).forEach((node) => {
    if (blockIsNotebookFigure(node)) {
      node.type = "section";
    } else if (blockIsNotebookCode(node)) {
      node.type = "__delete__";
    }
  });
  const removed = remove(tree, "__delete__");
  if (removed === null) {
    tree.children = [];
  }
  liftChildren(tree, "block");
  headingsToSections(tree);
}

// ../../node_modules/myst-to-jats/dist/transforms/blocks.js
function blocksToKeep(tree, opts) {
  var _a, _b;
  const keepParts = [...ACKNOWLEDGMENT_PARTS];
  if (opts.extractAbstract) {
    keepParts.push(...(_b = (_a = opts.abstractParts) === null || _a === void 0 ? void 0 : _a.map(({ part }) => part).flat()) !== null && _b !== void 0 ? _b : ABSTRACT_PARTS);
  }
  if (opts.backSections) {
    keepParts.push(...opts.backSections.map(({ part }) => part).flat());
  }
  return selectBlockParts(tree, keepParts);
}
function blockTransform(tree, opts) {
  const doNotDelete = blocksToKeep(tree, opts);
  selectAll("[visibility=remove],[visibility=hide]", tree).forEach((node) => {
    if (node.visibility === "remove" || node.visibility === "hide") {
      node.type = "__delete__";
    }
  });
  doNotDelete.forEach((node) => {
    node.type = "block-part";
  });
  const removed = remove(tree, "__delete__");
  if (removed === null) {
    tree.children = [];
  }
}
function restoreBlockPartTypeTransform(tree) {
  selectAll("block-part", tree).forEach((node) => {
    node.type = "block";
  });
}

// ../../node_modules/myst-to-jats/dist/transforms/citations.js
function citeGroupTransform(mdast) {
  const citeGroups = selectAll("citeGroup", mdast);
  citeGroups.forEach((node) => {
    if (!node.children.length || node.children.filter((child) => child.type !== "cite").length) {
      return;
    }
    const { kind } = node;
    node.children.forEach((child) => {
      child.kind = kind;
    });
    const newChildren = [];
    if (kind === "parenthetical") {
      newChildren.push({
        type: "text",
        value: "("
      });
    }
    newChildren.push(node.children[0]);
    const sep = kind === "parenthetical" ? ";" : ",";
    node.children.slice(1).forEach((child) => {
      newChildren.push({
        type: "text",
        value: `${sep} `
      }, child);
    });
    if (kind === "parenthetical") {
      newChildren.push({
        type: "text",
        value: ")"
      });
    }
    node.children = newChildren;
  });
}

// ../../node_modules/myst-to-jats/dist/transforms/references.js
var CONTAINER_KINDS = ["figure", "table", "code", "quote"];
function updateInventory(node, key, idPrefix, inventory) {
  var _a;
  const keyInv = (_a = inventory[key]) !== null && _a !== void 0 ? _a : { count: 0, lookup: {} };
  keyInv.count += 1;
  const newId = typeof idPrefix === "function" ? idPrefix(keyInv.count) : `${idPrefix}-${keyInv.count}`;
  if (node.identifier) {
    keyInv.lookup[node.identifier] = newId;
  }
  node.identifier = newId;
  inventory[key] = keyInv;
}
function referenceTargetTransform(mdast, inventory, citations) {
  const sections = selectAll("section", mdast);
  sections.forEach((sec) => {
    updateInventory(sec, "section", "sec", inventory);
  });
  const expressions = selectAll("inlineExpression", mdast);
  expressions.forEach((expr) => {
    updateInventory(expr, "expression", "expr", inventory);
  });
  const equations = selectAll("math", mdast);
  equations.forEach((eq) => {
    updateInventory(eq, "equation", "eq", inventory);
  });
  const footnotes = selectAll("footnoteDefinition", mdast);
  footnotes.forEach((fn) => {
    updateInventory(fn, "footnote", "fn", inventory);
  });
  const proofs = selectAll("proof", mdast);
  proofs.forEach((fn) => {
    updateInventory(fn, "proof", "stm", inventory);
  });
  const containers = selectAll("container", mdast);
  containers.forEach((container) => {
    if (!container.kind || !CONTAINER_KINDS.includes(container.kind)) {
      return;
    }
    updateInventory(container, container.kind, container.kind, inventory);
  });
  if (!citations)
    return;
  const citationIds = Object.keys(citations);
  citationIds.forEach((citationId) => {
    var _a;
    (_a = inventory.cite) !== null && _a !== void 0 ? _a : inventory.cite = { count: 0, lookup: {} };
    if (!inventory.cite.lookup[citationId]) {
      inventory.cite.count += 1;
      const newId = `ref-${inventory.cite.count}`;
      inventory.cite.lookup[citationId] = newId;
      citations[newId] = citations[citationId];
    }
    delete citations[citationId];
  });
}
function referenceResolutionTransform(mdast, inventory) {
  var _a, _b, _c, _d, _e, _f, _g, _h;
  const xrefs = selectAll("crossReference", mdast);
  const lookup = {
    ...(_a = inventory.section) === null || _a === void 0 ? void 0 : _a.lookup,
    ...(_b = inventory.expression) === null || _b === void 0 ? void 0 : _b.lookup,
    ...(_c = inventory.equation) === null || _c === void 0 ? void 0 : _c.lookup,
    ...(_d = inventory.figure) === null || _d === void 0 ? void 0 : _d.lookup,
    ...(_e = inventory.table) === null || _e === void 0 ? void 0 : _e.lookup,
    ...(_f = inventory.code) === null || _f === void 0 ? void 0 : _f.lookup,
    ...(_g = inventory.quote) === null || _g === void 0 ? void 0 : _g.lookup,
    ...(_h = inventory.proof) === null || _h === void 0 ? void 0 : _h.lookup
  };
  xrefs.forEach((xref) => {
    if (xref.identifier && lookup[xref.identifier]) {
      xref.identifier = lookup[xref.identifier];
    }
  });
  const supplements = selectAll("supplementaryMaterial", mdast);
  supplements.forEach((supp) => {
    if (supp.figIdentifier && lookup[supp.figIdentifier]) {
      supp.figIdentifier = lookup[supp.figIdentifier];
    }
    if (supp.embedIdentifier && lookup[supp.embedIdentifier]) {
      supp.embedIdentifier = lookup[supp.embedIdentifier];
    }
  });
  const footnotes = selectAll("footnoteReference", mdast);
  footnotes.forEach((fn) => {
    var _a2;
    if (fn.identifier && ((_a2 = inventory.footnote) === null || _a2 === void 0 ? void 0 : _a2.lookup[fn.identifier])) {
      fn.identifier = inventory.footnote.lookup[fn.identifier];
    }
  });
  const citations = selectAll("cite", mdast);
  citations.forEach((cite) => {
    var _a2;
    if (cite.label && ((_a2 = inventory.cite) === null || _a2 === void 0 ? void 0 : _a2.lookup[cite.label])) {
      cite.label = inventory.cite.lookup[cite.label];
    }
  });
}

// ../../node_modules/myst-to-jats/dist/transforms/index.js
function basicTransformations(tree, opts) {
  blockTransform(tree, opts);
  definitionTransform(tree);
  containerTransform(tree);
  tableTransform(tree);
  sectionTransform(tree, opts);
  citeGroupTransform(tree);
  restoreBlockPartTypeTransform(tree);
}

// ../../node_modules/myst-to-jats/dist/transforms/frontmatter.js
function affiliationIdTransform(frontmatters, idPrefix) {
  let affCount = 0;
  frontmatters.forEach((frontmatter) => {
    var _a, _b, _c;
    const idLookup = {};
    (_a = frontmatter.authors) === null || _a === void 0 ? void 0 : _a.forEach((auth) => {
      var _a2;
      if (!((_a2 = auth.affiliations) === null || _a2 === void 0 ? void 0 : _a2.length))
        return;
      auth.affiliations = auth.affiliations.map((aff) => {
        if (idLookup[aff]) {
          return idLookup[aff];
        } else {
          affCount += 1;
          const id = typeof idPrefix === "function" ? idPrefix(affCount) : `${idPrefix}-${affCount}`;
          idLookup[aff] = id;
          return id;
        }
      });
    });
    (_b = frontmatter.funding) === null || _b === void 0 ? void 0 : _b.forEach((funding) => {
      var _a2;
      (_a2 = funding.awards) === null || _a2 === void 0 ? void 0 : _a2.forEach((award) => {
        if (!award.sources)
          return;
        award.sources = award.sources.map((source) => {
          if (idLookup[source])
            return idLookup[source];
          return source;
        });
      });
    });
    (_c = frontmatter.affiliations) === null || _c === void 0 ? void 0 : _c.forEach((aff) => {
      if (aff.id && idLookup[aff.id]) {
        aff.id = idLookup[aff.id];
      }
    });
  });
}

// ../../node_modules/myst-to-jats/dist/inlineExpression.js
var inlineExpression = (node, state) => {
  const { identifier, value } = node;
  state.renderInline(node, "xref", {
    "ref-type": "custom",
    "custom-type": "expression",
    rid: identifier
  });
  const element = {
    type: "element",
    name: "sec",
    attributes: { id: identifier, "sec-type": "expression" },
    elements: [
      {
        type: "element",
        name: "code",
        attributes: { executable: "yes" },
        elements: [{ type: "text", text: value }]
      },
      {
        type: "element",
        name: "sec",
        attributes: { "sec-type": "notebook-output" },
        elements: [{ type: "element", name: "p", elements: [{ type: "text", text: value }] }]
      }
    ]
  };
  state.warn("JATS representations of inline expressions is not complete", node);
  if (element)
    state.expressions.push(element);
};

// ../../node_modules/myst-to-jats/dist/index.js
function escapeForXML2(text) {
  return text.replace(/&(?!amp;)/g, "&amp;").replace(/</g, "&lt;").replace(/​/g, "");
}
function referenceKindToRefType(kind) {
  switch (kind === null || kind === void 0 ? void 0 : kind.split(":")[0]) {
    case "heading":
      return RefType.sec;
    case "figure":
      return RefType.fig;
    case "subequation":
    case "equation":
      return RefType.dispFormula;
    case "table":
      return RefType.table;
    case "proof":
      return RefType.statement;
    default:
      return RefType.custom;
  }
}
function renderLabel(node, state, template = (s5) => s5) {
  const { enumerated, enumerator } = node;
  if (enumerated !== false && enumerator) {
    state.openNode("label");
    state.text(template(enumerator));
    state.closeNode();
  }
}
function alternativesFromMinifiedOutput(output, state) {
  var _a;
  state.openNode("alternatives");
  if (output.output_type === "error") {
    state.openNode("media", {
      "specific-use": "error",
      mimetype: "text",
      "mime-subtype": "plain",
      "xlink:href": output.path
    });
    state.openNode("caption");
    state.openNode("title");
    state.text(output.ename);
    state.closeNode();
    state.openNode("p");
    state.text(output.evalue);
    state.closeNode();
    state.closeNode();
    state.closeNode();
  } else if (output.output_type === "stream") {
    state.addLeaf("media", {
      "specific-use": "stream",
      mimetype: "text",
      "mime-subtype": "plain",
      "xlink:href": output.path
    });
  } else if (["display_data", "execute_result", "update_display_data"].includes(output.output_type)) {
    Object.entries((_a = output.data) !== null && _a !== void 0 ? _a : {}).forEach(([mimeType, value]) => {
      let leafType;
      let specificUse;
      if (mimeType.startsWith("image/")) {
        leafType = "graphic";
        specificUse = "print";
      } else if (mimeType === "text/html") {
        leafType = "media";
        specificUse = "web";
      } else if (mimeType === "text/plain") {
        leafType = "media";
        specificUse = "text";
      } else {
        leafType = "media";
        specificUse = "original-format";
      }
      state.addLeaf(leafType, {
        "specific-use": specificUse,
        mimetype: mimeType.split("/")[0],
        "mime-subtype": mimeType.split("/").slice(1).join("/"),
        "xlink:href": value.path
      });
    });
  }
  state.closeNode();
}
function addMmlAndRemoveAnnotation(el) {
  if (el === null || el === void 0 ? void 0 : el.name)
    el.name = `mml:${el.name}`;
  if (!(el === null || el === void 0 ? void 0 : el.elements))
    return;
  el.elements = el.elements.filter((child) => child.name !== "annotation");
  el.elements.forEach((child) => {
    addMmlAndRemoveAnnotation(child);
  });
}
function mathToMml(node) {
  var _a, _b, _c, _d, _e;
  const math = copyNode(node);
  renderEquation(new VFile(), math, { mathML: true });
  const katexJs = math.html ? (0, import_xml_js2.xml2js)(math.html, { compact: false }) : void 0;
  const spanElement = (_a = katexJs === null || katexJs === void 0 ? void 0 : katexJs.elements) === null || _a === void 0 ? void 0 : _a[0];
  const mathElement = (_b = spanElement === null || spanElement === void 0 ? void 0 : spanElement.elements) === null || _b === void 0 ? void 0 : _b[0];
  if (!mathElement)
    return;
  const inline = node.type === "inlineMath";
  if (inline)
    mathElement.attributes = { ...mathElement.attributes, display: "inline" };
  (_c = mathElement.attributes) === null || _c === void 0 ? true : delete _c.xmlns;
  addMmlAndRemoveAnnotation(mathElement);
  if (((_d = mathElement === null || mathElement === void 0 ? void 0 : mathElement.elements) === null || _d === void 0 ? void 0 : _d.length) === 1 && mathElement.elements[0].name === "mml:semantics") {
    mathElement.elements = mathElement.elements[0].elements;
  }
  if (((_e = mathElement === null || mathElement === void 0 ? void 0 : mathElement.elements) === null || _e === void 0 ? void 0 : _e.length) === 1 && mathElement.elements[0].name === "mml:mrow") {
    mathElement.elements = mathElement.elements[0].elements;
  }
  return mathElement;
}
function cleanLatex(value) {
  if (!value)
    return;
  return value.split("\n").map((s5) => s5.replace(/%(.*)/, "").trim()).join(" ").trim();
}
function capitalize(kind) {
  if (!kind)
    return "";
  return kind.slice(0, 1).toUpperCase() + kind.slice(1);
}
var handlers = {
  text(node, state) {
    state.text(node.value);
  },
  paragraph(node, state) {
    state.renderInline(node, "p");
  },
  section(node, state) {
    state.renderInline(node, "sec", sectionAttrsFromBlock(node));
  },
  heading(node, state) {
    renderLabel(node, state);
    state.renderInline(node, "title");
  },
  block(node, state) {
    if (node.visibility === "remove")
      return;
    state.renderChildren(node);
  },
  blockquote(node, state) {
    state.renderInline(node, "disp-quote");
  },
  definitionList(node, state) {
    state.renderInline(node, "def-list");
  },
  definitionItem(node, state) {
    state.renderInline(node, "def-item");
  },
  definitionTerm(node, state) {
    state.renderInline(node, "term");
  },
  definitionDescription(node, state) {
    var _a;
    state.openNode("def");
    if (((_a = node.children) === null || _a === void 0 ? void 0 : _a[0].type) === "paragraph") {
      state.renderChildren(node);
    } else {
      state.renderInline(node, "p");
    }
    state.closeNode();
  },
  code(node, state) {
    const { lang, executable, identifier } = node;
    const attrs = { language: lang };
    if (executable)
      attrs.executable = "yes";
    if (identifier)
      attrs.id = identifier;
    state.renderInline(node, "code", attrs);
  },
  list(node, state) {
    state.renderInline(node, "list", { "list-type": node.ordered ? "order" : "bullet" });
  },
  listItem(node, state) {
    var _a;
    state.openNode("list-item");
    if (((_a = node.children) === null || _a === void 0 ? void 0 : _a[0].type) === "paragraph") {
      state.renderChildren(node);
    } else {
      state.renderInline(node, "p");
    }
    state.closeNode();
  },
  thematicBreak(node, state) {
    state.warn("The use of thematic breaks should be restricted to use inside table cells.", node, "thematicBreak", {
      url: "https://jats.nlm.nih.gov/archiving/tag-library/1.3/element/hr.html"
    });
  },
  inlineMath(node, state) {
    const inlineFormulaAttrs = {};
    if (node.identifier) {
      inlineFormulaAttrs.id = node.identifier;
    }
    state.openNode("inline-formula", inlineFormulaAttrs);
    state.openNode("alternatives");
    state.pushNode(mathToMml(node));
    state.openNode("tex-math");
    state.addLeaf("cdata", { cdata: cleanLatex(node.value) });
    state.closeNode();
    state.closeNode();
    state.closeNode();
  },
  math(node, state) {
    const dispFormulaAttrs = {};
    if (node.identifier) {
      dispFormulaAttrs.id = node.identifier;
    }
    state.openNode("disp-formula", dispFormulaAttrs);
    state.openNode("alternatives");
    state.pushNode(mathToMml(node));
    state.openNode("tex-math");
    state.addLeaf("cdata", { cdata: cleanLatex(node.value) });
    state.closeNode();
    state.closeNode();
    renderLabel(node, state, (enumerator) => `(${enumerator})`);
    state.closeNode();
  },
  mathGroup(node, state) {
    const attrs = {};
    if (node.identifier) {
      attrs.id = node.identifier;
    }
    state.openNode("disp-formula-group", attrs);
    renderLabel(node, state, (enumerator) => `(${enumerator})`);
    state.renderChildren(node);
    state.closeNode();
  },
  mystRole(node, state) {
    state.renderChildren(node);
  },
  mystDirective(node, state) {
    state.renderChildren(node);
  },
  comment() {
  },
  strong(node, state) {
    state.renderInline(node, "bold");
  },
  emphasis(node, state) {
    state.renderInline(node, "italic");
  },
  underline(node, state) {
    state.renderInline(node, "underline");
  },
  inlineCode(node, state) {
    state.renderInline(node, "monospace");
  },
  subscript(node, state) {
    state.renderInline(node, "sub");
  },
  superscript(node, state) {
    state.renderInline(node, "sup");
  },
  delete(node, state) {
    state.renderInline(node, "strike");
  },
  smallcaps(node, state) {
    state.renderInline(node, "sc");
  },
  span(node, state) {
    state.renderChildren(node);
  },
  break(node, state, parent) {
    if (parent.type === "paragraph" || parent.type === "listItem") {
      state.warn(`There are no breaks allowed in ${parent.type}s.`, node, "break", {
        url: "https://jats.nlm.nih.gov/archiving/tag-library/1.3/element/break.html"
      });
      return;
    }
    state.addLeaf("break");
  },
  abbreviation(node, state) {
    state.renderInline(node, "abbrev", { alt: node.title });
  },
  link(node, state) {
    state.renderInline(node, "ext-link", {
      "ext-link-type": "uri",
      "xlink:href": node.url
    });
  },
  admonition(node, state) {
    state.renderInline(node, "boxed-text", { "content-type": node.kind });
  },
  admonitionTitle(node, state) {
    state.openNode("caption");
    state.renderInline(node, "title");
    state.closeNode();
  },
  attrib(node, state) {
    state.renderInline(node, "attrib");
  },
  table(node, state) {
    state.renderInline(node, "table");
  },
  tableHead(node, state) {
    state.renderInline(node, "thead");
  },
  tableBody(node, state) {
    state.renderInline(node, "tbody");
  },
  tableFooter(node, state) {
    state.renderInline(node, "tfoot");
  },
  tableRow(node, state) {
    state.renderInline(node, "tr");
  },
  tableCell(node, state) {
    const { align, colspan, rowspan } = node;
    state.renderInline(node, node.header ? "th" : "td", {
      align,
      colspan: colspan ? String(colspan) : void 0,
      rowspan: rowspan ? String(rowspan) : void 0
    });
  },
  image(node, state) {
    var _a, _b, _c;
    if ((_a = node.url) === null || _a === void 0 ? void 0 : _a.startsWith("http")) {
      state.warn(`Image URL is remote (${node.url})`, node, "image");
    }
    if (state.data.isInContainer && node.alt && !((_b = node.data) === null || _b === void 0 ? void 0 : _b.altTextIsAutoGenerated)) {
      state.openNode("alt-text");
      state.text(node.alt);
      state.closeNode();
    }
    const attrs = { mimetype: "image" };
    const ext = node.url ? (_c = node.url.split(".").slice(-1)) === null || _c === void 0 ? void 0 : _c[0] : "";
    if (ext)
      attrs["mime-subtype"] = ext;
    attrs["xlink:href"] = node.url;
    if (node.placeholder)
      state.openNode("alternatives");
    state.addLeaf("graphic", attrs);
    if (node.placeholder)
      state.closeNode();
  },
  container(node, state) {
    state.data.isInContainer = true;
    switch (node.kind) {
      case "figure": {
        state.renderInline(node, "fig");
        break;
      }
      case "table": {
        state.renderInline(node, "table-wrap");
        break;
      }
      case "quote": {
        state.renderChildren(node);
        break;
      }
      case "code": {
        state.renderInline(node, "boxed-text", { "content-type": node.kind });
        break;
      }
      default: {
        state.error(`Unhandled container kind of ${node.kind}`, node, "container");
        state.renderChildren(node);
      }
    }
    delete state.data.isInContainer;
  },
  caption(node, state) {
    state.renderInline(node, "caption");
  },
  captionNumber(node, state) {
    delete node.identifier;
    state.renderInline(node, "label");
  },
  crossReference(node, state) {
    const { identifier, kind } = node;
    const attrs = { "ref-type": referenceKindToRefType(kind), rid: identifier };
    if (attrs["ref-type"] === RefType.custom && kind) {
      attrs["custom-type"] = kind;
    }
    state.renderInline(node, "xref", attrs);
  },
  citeGroup(node, state) {
    state.renderChildren(node);
  },
  cite(node, state) {
    const { label } = node;
    const attrs = {
      "ref-type": "bibr",
      rid: label
    };
    if (!state.referenceOrder.includes(label)) {
      state.referenceOrder.push(label);
    }
    state.renderInline(node, "xref", attrs);
  },
  footnoteReference(node, state) {
    const { identifier, enumerator } = node;
    const attrs = {
      "ref-type": "fn",
      rid: identifier
    };
    state.openNode("xref", attrs);
    state.text(enumerator);
    state.closeNode();
  },
  footnoteDefinition(node, state) {
    const { identifier, enumerator } = node;
    state.openNode("fn", { id: identifier });
    state.openNode("label");
    state.text(enumerator);
    state.closeNode();
    state.renderChildren(node);
    const element = state.stack.pop();
    if (element)
      state.footnotes.push(element);
  },
  si(node, state) {
    const hasNumber = node.number != null;
    if (hasNumber) {
      state.openNode("named-content", { "content-type": "quantity" });
      state.text(`${node.number} `);
    }
    state.openNode("abbrev", { "content-type": "unit", alt: node.alt });
    state.text(node.unit);
    state.closeNode();
    if (hasNumber)
      state.closeNode();
  },
  proof(node, state) {
    var _a;
    state.openNode("statement", { "specific-use": node.kind, id: node.identifier });
    const [title, ...rest] = (_a = node.children) !== null && _a !== void 0 ? _a : [];
    const useTitle = title && title.type === "admonitionTitle";
    if (node.enumerated) {
      state.openNode("label");
      state.text(`${capitalize(node.kind)} ${node.enumerator}`);
      state.closeNode();
    }
    if (useTitle) {
      state.openNode("title");
      state.renderChildren(title);
      state.closeNode();
    }
    state.renderChildren(useTitle ? rest : node.children);
    state.closeNode();
  },
  algorithmLine(node, state) {
    state.openNode("p", { "specific-use": "line" });
    if (node.enumerator) {
      state.openNode("x");
      state.text(`${node.enumerator}: `);
      state.closeNode();
    }
    state.text(Array(node.indent).fill("\u2003").join(""));
    state.renderChildren(node);
    state.closeNode();
  },
  output(node, state) {
    var _a, _b;
    if (state.data.isInContainer) {
      if (!((_a = node.data) === null || _a === void 0 ? void 0 : _a[0]))
        return;
      alternativesFromMinifiedOutput(node.data[0], state);
      return;
    }
    const { identifier } = node;
    const attrs = { "sec-type": "notebook-output" };
    (_b = node.data) === null || _b === void 0 ? void 0 : _b.forEach((output, index) => {
      state.openNode("sec", {
        ...attrs,
        id: identifier && !state.data.isNotebookArticleRep ? `${identifier}-${index}` : void 0
      });
      alternativesFromMinifiedOutput(output, state);
      state.closeNode();
    });
  },
  embed(node, state) {
    if (state.data.isInContainer) {
      return;
    }
    state.renderChildren(node);
  },
  supplementaryMaterial(node, state) {
    const smNode = node;
    state.openNode("p");
    const smAttrs = {};
    if (smNode.figIdentifier) {
      smAttrs.id = `${smNode.figIdentifier}-source`;
    }
    smAttrs["specific-use"] = "notebook";
    state.openNode("supplementary-material", smAttrs);
    renderLabel(node, state, (s5) => `Figure ${s5} - Notebook.`);
    state.openNode("caption");
    state.openNode("title");
    state.text("Analysis for ");
    if (smNode.figIdentifier) {
      state.openNode("xref", { "ref-type": "fig", rid: smNode.figIdentifier });
    }
    state.text("Figure" + (smNode.enumerator ? ` ${smNode.enumerator}` : ""));
    if (smNode.figIdentifier) {
      state.closeNode();
    }
    state.text(".");
    state.closeNode();
    state.openNode("p");
    state.text("See methods");
    if (smNode.sourceSlug) {
      state.text(" in ");
      state.openNode("xref", {
        "ref-type": "custom",
        "custom-type": "notebook",
        rid: smNode.sourceSlug
      });
      state.text("notebook");
      state.closeNode();
    }
    if (smNode.embedIdentifier) {
      state.text(" from ");
      state.openNode("xref", {
        "ref-type": "custom",
        "custom-type": "notebook-code",
        rid: smNode.embedIdentifier
      });
      state.text("cell");
      state.closeNode();
    }
    state.text(".");
    state.closeNode();
    state.closeNode();
    state.closeNode();
    state.closeNode();
  },
  inlineExpression
};
function createText(text) {
  return { type: "text", text: escapeForXML2(text) };
}
function renderPart(vfile, mdast, part, opts) {
  const partMdast = extractPart(mdast, part, {
    removePartData: true
  });
  if (!partMdast)
    return void 0;
  const serializer = new JatsSerializer(vfile, partMdast, opts);
  return serializer.render(true).elements();
}
function renderAbstract(vfile, mdast, def, opts) {
  const elements = renderPart(vfile, mdast, def.part, opts);
  if (!elements)
    return void 0;
  const abstract = { type: "element", name: "abstract", elements };
  if (def.title)
    abstract.elements = [
      { type: "element", name: "title", elements: [{ type: "text", text: def.title }] },
      ...abstract.elements
    ];
  if (def.type)
    abstract.attributes = { "abstract-type": def.type };
  return abstract;
}
function renderAcknowledgments(vfile, mdast, opts) {
  const elements = renderPart(vfile, mdast, ACKNOWLEDGMENT_PARTS, opts);
  if (!elements)
    return void 0;
  const acknowledgments = { type: "element", name: "ack", elements };
  return acknowledgments;
}
function renderBackSection(vfile, mdast, def, opts) {
  const elements = renderPart(vfile, mdast, def.part, opts);
  if (!elements)
    return void 0;
  const sec = { type: "element", name: "sec", elements };
  if (def.title)
    sec.elements = [
      { type: "element", name: "title", elements: [{ type: "text", text: def.title }] },
      ...sec.elements
    ];
  if (def.type)
    sec.attributes = { "sec-type": def.type };
  return sec;
}
var JatsSerializer = class {
  constructor(file, mdast, opts) {
    var _a;
    this.file = file;
    this.data = {
      isNotebookArticleRep: opts === null || opts === void 0 ? void 0 : opts.isNotebookArticleRep,
      slug: opts === null || opts === void 0 ? void 0 : opts.slug
    };
    this.stack = [{ type: "element", elements: [] }];
    this.footnotes = [];
    this.expressions = [];
    this.referenceOrder = [];
    this.handlers = (_a = opts === null || opts === void 0 ? void 0 : opts.handlers) !== null && _a !== void 0 ? _a : handlers;
    this.mdast = copyNode(mdast);
    this.opts = opts !== null && opts !== void 0 ? opts : {};
    basicTransformations(this.mdast, opts !== null && opts !== void 0 ? opts : {});
  }
  render(ignoreParts) {
    var _a, _b, _c, _d;
    if (!ignoreParts) {
      if ((_a = this.opts) === null || _a === void 0 ? void 0 : _a.extractAbstract) {
        const abstractParts = (_b = this.opts.abstractParts) !== null && _b !== void 0 ? _b : ABSTRACT_PARTS.map((part) => {
          return { part };
        });
        this.data.abstracts = abstractParts.map((def) => renderAbstract(this.file, this.mdast, def, this.opts)).filter((e5) => !!e5);
      }
      this.data.acknowledgments = renderAcknowledgments(this.file, this.mdast, this.opts);
      const backSections = (_d = (_c = this.opts) === null || _c === void 0 ? void 0 : _c.backSections) !== null && _d !== void 0 ? _d : [];
      this.data.backSections = backSections.map((def) => renderBackSection(this.file, this.mdast, def, this.opts)).filter((e5) => !!e5);
    }
    this.renderChildren(this.mdast);
    while (this.stack.length > 1)
      this.closeNode();
    return this;
  }
  top() {
    return this.stack[this.stack.length - 1];
  }
  warn(message, node, source, opts) {
    fileError(this.file, message, {
      ...opts,
      node,
      source: source ? `myst-to-jats:${source}` : "myst-to-jats",
      ruleId: RuleId.jatsRenders
    });
  }
  error(message, node, source, opts) {
    fileError(this.file, message, {
      ...opts,
      node,
      source: source ? `myst-to-jats:${source}` : "myst-to-jats",
      ruleId: RuleId.jatsRenders
    });
  }
  pushNode(el) {
    var _a;
    const top = this.top();
    if (this.stack.length && el && "elements" in top)
      (_a = top.elements) === null || _a === void 0 ? void 0 : _a.push(el);
    return el;
  }
  text(text) {
    var _a, _b;
    const top = this.top();
    const value = text;
    if (!value || !this.stack.length || !("elements" in top))
      return;
    const last = (_a = top.elements) === null || _a === void 0 ? void 0 : _a[top.elements.length - 1];
    if ((last === null || last === void 0 ? void 0 : last.type) === "text") {
      last.text += `${escapeForXML2(value)}`;
      return last;
    }
    const node = createText(value);
    (_b = top.elements) === null || _b === void 0 ? void 0 : _b.push(node);
    return node;
  }
  renderChildren(node) {
    const parent = Array.isArray(node) ? { children: node } : node;
    const children = Array.isArray(node) ? node : node.children;
    children === null || children === void 0 ? void 0 : children.forEach((child) => {
      const handler = this.handlers[child.type];
      if (handler) {
        handler(child, this, parent);
      } else {
        fileError(this.file, `Unhandled JATS conversion for node of "${child.type}"`, {
          node: child,
          source: "myst-to-jats"
        });
      }
    });
  }
  renderInline(node, name2, attributes) {
    this.openNode(name2, {
      id: name2 !== "xref" && node.identifier ? node.identifier : void 0,
      ...attributes
    });
    if ("children" in node) {
      this.renderChildren(node);
    } else if ("value" in node && node.value) {
      this.text(node.value);
    }
    this.closeNode();
  }
  addLeaf(name2, attributes) {
    this.openNode(name2, attributes, true);
    this.closeNode();
  }
  openNode(name2, attributes, isLeaf = false) {
    const node = name2 === "cdata" ? { type: "cdata", cdata: attributes === null || attributes === void 0 ? void 0 : attributes.cdata } : { type: "element", name: name2, attributes };
    if (!isLeaf)
      node.elements = [];
    this.stack.push(node);
  }
  closeNode() {
    const node = this.stack.pop();
    return this.pushNode(node);
  }
  elements() {
    var _a;
    return (_a = this.stack[0].elements) !== null && _a !== void 0 ? _a : [];
  }
};
var JatsDocument = class {
  constructor(file, content, opts) {
    this.file = file;
    this.options = opts !== null && opts !== void 0 ? opts : {};
    this.content = content;
  }
  article(articleType, specificUse) {
    var _a;
    const attributes = {
      "xmlns:mml": "http://www.w3.org/1998/Math/MathML",
      "xmlns:xlink": "http://www.w3.org/1999/xlink",
      "xmlns:xsi": "http://www.w3.org/2001/XMLSchema-instance",
      "xmlns:ali": "http://www.niso.org/schemas/ali/1.0/",
      "dtd-version": "1.3",
      "xml:lang": "en"
    };
    if (articleType)
      attributes["article-type"] = articleType;
    if (specificUse)
      attributes["specific-use"] = specificUse;
    const isNotebookArticleRep = this.content.kind === SourceFileKind.Notebook;
    if (this.content.slug) {
      attributes.id = `${this.content.slug}${isNotebookArticleRep ? "-article" : ""}`;
    }
    const articleState = new JatsSerializer(this.file, this.content.mdast, {
      ...this.options,
      isNotebookArticleRep,
      extractAbstract: true
    });
    const inventory = {};
    referenceTargetTransform(articleState.mdast, inventory, this.content.citations);
    const subArticles = (_a = this.options.subArticles) !== null && _a !== void 0 ? _a : [];
    if (isNotebookArticleRep) {
      subArticles.unshift({
        mdast: copyNode(this.content.mdast),
        kind: this.content.kind,
        frontmatter: this.content.frontmatter,
        slug: this.content.slug
        // No citations here - don't want duplicates in the jats
      });
    }
    affiliationIdTransform([this.content.frontmatter, ...subArticles.map((a5) => a5.frontmatter)].filter((fm) => !!fm), "aff");
    const subArticleStates = subArticles.map((subArticle, ind) => {
      const subArticleState = this.subArticleState(subArticle, ind === 0 && isNotebookArticleRep);
      referenceTargetTransform(subArticleState.mdast, inventory, subArticle.citations);
      return subArticleState;
    });
    [articleState, ...subArticleStates].forEach((state) => {
      referenceResolutionTransform(state.mdast, inventory);
      state.render();
    });
    const elements = [
      ...getFront(this.content.frontmatter, articleState),
      this.body(articleState),
      ...getBack(articleState, {
        citations: this.content.citations,
        footnotes: articleState.footnotes,
        expressions: articleState.expressions,
        referenceOrder: articleState.referenceOrder
      }),
      ...subArticleStates.map((state, ind) => {
        return this.subArticle(state, subArticles[ind], ind === 0 && isNotebookArticleRep);
      })
    ];
    const article = {
      type: "element",
      name: Tags.article,
      attributes,
      elements
    };
    return article;
  }
  frontStub(frontmatter, state, notebookRep) {
    var _a, _b;
    const stubFrontmatter = {};
    if (frontmatter) {
      Object.entries(frontmatter).forEach(([key, val]) => {
        var _a2;
        const articleVal = (_a2 = this.content.frontmatter) === null || _a2 === void 0 ? void 0 : _a2[key];
        if (articleVal == null || JSON.stringify(val) !== JSON.stringify(articleVal)) {
          stubFrontmatter[key] = val;
        }
      });
    }
    const articleMeta = getArticleMeta(stubFrontmatter, state);
    let elements = (_a = articleMeta === null || articleMeta === void 0 ? void 0 : articleMeta.elements) !== null && _a !== void 0 ? _a : [];
    if (notebookRep) {
      const articleVersion = {
        type: "element",
        name: "article-version",
        attributes: { "article-version-type": "alt representation" },
        elements: [{ type: "text", text: "notebook" }]
      };
      if (((_b = elements[0]) === null || _b === void 0 ? void 0 : _b.name) === "article-id") {
        elements = [elements[0], articleVersion, ...elements.slice(1)];
      } else {
        elements.unshift(articleVersion);
      }
    }
    return [{ type: "element", name: "front-stub", elements }];
  }
  subArticleState(content, notebookRep) {
    return new JatsSerializer(this.file, content.mdast, {
      ...this.options,
      isNotebookArticleRep: false,
      isSubArticle: true,
      slug: content.slug,
      extractAbstract: !notebookRep
    });
  }
  subArticle(subArticleState, content, notebookRep) {
    const elements = [
      ...this.frontStub(content.frontmatter, subArticleState, notebookRep),
      { type: "element", name: "body", elements: subArticleState.elements() },
      ...getBack(subArticleState, {
        citations: content.citations,
        footnotes: subArticleState.footnotes,
        expressions: subArticleState.expressions,
        referenceOrder: subArticleState.referenceOrder
      })
    ];
    const attributes = {};
    if (content.slug)
      attributes.id = content.slug;
    return { type: "element", name: "sub-article", elements, attributes };
  }
  body(state) {
    if (!state) {
      state = new JatsSerializer(this.file, this.content.mdast, this.options);
      state.render();
    }
    return { type: "element", name: "body", elements: state.elements() };
  }
};
function writeJats(file, content, opts) {
  const doc = new JatsDocument(file, content, opts);
  const element = (opts === null || opts === void 0 ? void 0 : opts.writeFullArticle) ? {
    type: "element",
    elements: [
      {
        type: "doctype",
        doctype: 'article PUBLIC "-//NLM//DTD JATS (Z39.96) Journal Archiving and Interchange DTD with MathML3 v1.3 20210610//EN" "http://jats.nlm.nih.gov/publishing/1.3/JATS-archivearticle1-3-mathml3.dtd"'
      },
      doc.article()
    ],
    declaration: { attributes: { version: "1.0", encoding: "UTF-8" } }
  } : doc.body();
  const xml = serializeJatsXml(element, opts);
  file.result = xml;
  return file;
}
var plugin = function(kind, frontmatter, citations, slug, opts) {
  this.Compiler = (node, file) => {
    return writeJats(file, { mdast: node, kind, frontmatter, citations, slug }, opts);
  };
  return (node) => {
    return node;
  };
};
var dist_default = plugin;
export {
  JatsDocument,
  JatsSerializer,
  dist_default as default,
  writeJats
};
/*! Bundled license information:

@jspm/core/nodelibs/browser/chunk-44e51b61.js:
  (*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> *)

sax/lib/sax.js:
  (*! http://mths.be/fromcodepoint v0.1.0 by @mathias *)
*/
//# sourceMappingURL=/build/_shared/dist-2LDVQ7XA.js.map
