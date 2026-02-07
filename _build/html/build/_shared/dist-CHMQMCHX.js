import {
  katex
} from "/build/_shared/chunk-AHJ3V3J5.js";
import {
  SourceFileKind
} from "/build/_shared/chunk-3IWYRLZL.js";
import {
  NotebookCell,
  copyNode,
  fileError,
  liftChildren,
  normalizeLabel,
  remove,
  select,
  selectAll
} from "/build/_shared/chunk-OKIPWGJP.js";
import "/build/_shared/chunk-6RGX3KNX.js";
import {
  __commonJS,
  __esm,
  __export,
  __toCommonJS,
  __toESM
} from "/build/_shared/chunk-K3U4UPJ2.js";

// node-modules-polyfills:stream
function o() {
  o.init.call(this);
}
function u(e52) {
  if ("function" != typeof e52)
    throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof e52);
}
function f(e52) {
  return void 0 === e52._maxListeners ? o.defaultMaxListeners : e52._maxListeners;
}
function v(e52, t52, n52, r52) {
  var i52, o52, s52, v42;
  if (u(n52), void 0 === (o52 = e52._events) ? (o52 = e52._events = /* @__PURE__ */ Object.create(null), e52._eventsCount = 0) : (void 0 !== o52.newListener && (e52.emit("newListener", t52, n52.listener ? n52.listener : n52), o52 = e52._events), s52 = o52[t52]), void 0 === s52)
    s52 = o52[t52] = n52, ++e52._eventsCount;
  else if ("function" == typeof s52 ? s52 = o52[t52] = r52 ? [n52, s52] : [s52, n52] : r52 ? s52.unshift(n52) : s52.push(n52), (i52 = f(e52)) > 0 && s52.length > i52 && !s52.warned) {
    s52.warned = true;
    var a52 = new Error("Possible EventEmitter memory leak detected. " + s52.length + " " + String(t52) + " listeners added. Use emitter.setMaxListeners() to increase limit");
    a52.name = "MaxListenersExceededWarning", a52.emitter = e52, a52.type = t52, a52.count = s52.length, v42 = a52, console && console.warn && console.warn(v42);
  }
  return e52;
}
function a() {
  if (!this.fired)
    return this.target.removeListener(this.type, this.wrapFn), this.fired = true, 0 === arguments.length ? this.listener.call(this.target) : this.listener.apply(this.target, arguments);
}
function l(e52, t52, n52) {
  var r52 = { fired: false, wrapFn: void 0, target: e52, type: t52, listener: n52 }, i52 = a.bind(r52);
  return i52.listener = n52, r52.wrapFn = i52, i52;
}
function h(e52, t52, n52) {
  var r52 = e52._events;
  if (void 0 === r52)
    return [];
  var i52 = r52[t52];
  return void 0 === i52 ? [] : "function" == typeof i52 ? n52 ? [i52.listener || i52] : [i52] : n52 ? function(e6) {
    for (var t6 = new Array(e6.length), n6 = 0; n6 < t6.length; ++n6)
      t6[n6] = e6[n6].listener || e6[n6];
    return t6;
  }(i52) : c(i52, i52.length);
}
function p(e52) {
  var t52 = this._events;
  if (void 0 !== t52) {
    var n52 = t52[e52];
    if ("function" == typeof n52)
      return 1;
    if (void 0 !== n52)
      return n52.length;
  }
  return 0;
}
function c(e52, t52) {
  for (var n52 = new Array(t52), r52 = 0; r52 < t52; ++r52)
    n52[r52] = e52[r52];
  return n52;
}
function i2() {
  throw new Error("setTimeout has not been defined");
}
function u2() {
  throw new Error("clearTimeout has not been defined");
}
function c2(e52) {
  if (t2 === setTimeout)
    return setTimeout(e52, 0);
  if ((t2 === i2 || !t2) && setTimeout)
    return t2 = setTimeout, setTimeout(e52, 0);
  try {
    return t2(e52, 0);
  } catch (n52) {
    try {
      return t2.call(null, e52, 0);
    } catch (n6) {
      return t2.call(this || r2, e52, 0);
    }
  }
}
function h2() {
  f2 && l2 && (f2 = false, l2.length ? s2 = l2.concat(s2) : a2 = -1, s2.length && d());
}
function d() {
  if (!f2) {
    var e52 = c2(h2);
    f2 = true;
    for (var t52 = s2.length; t52; ) {
      for (l2 = s2, s2 = []; ++a2 < t52; )
        l2 && l2[a2].run();
      a2 = -1, t52 = s2.length;
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
    }(e52);
  }
}
function m(e52, t52) {
  (this || r2).fun = e52, (this || r2).array = t52;
}
function p2() {
}
function c$1(e52) {
  return e52.call.bind(e52);
}
function O(e52, t52) {
  if ("object" != typeof e52)
    return false;
  try {
    return t52(e52), true;
  } catch (e6) {
    return false;
  }
}
function S(e52) {
  return l$1 && y2 ? void 0 !== b(e52) : B(e52) || k(e52) || E(e52) || D(e52) || U(e52) || P(e52) || x(e52) || I(e52) || M(e52) || z(e52) || F(e52);
}
function B(e52) {
  return l$1 && y2 ? "Uint8Array" === b(e52) : "[object Uint8Array]" === m2(e52) || u$1(e52) && void 0 !== e52.buffer;
}
function k(e52) {
  return l$1 && y2 ? "Uint8ClampedArray" === b(e52) : "[object Uint8ClampedArray]" === m2(e52);
}
function E(e52) {
  return l$1 && y2 ? "Uint16Array" === b(e52) : "[object Uint16Array]" === m2(e52);
}
function D(e52) {
  return l$1 && y2 ? "Uint32Array" === b(e52) : "[object Uint32Array]" === m2(e52);
}
function U(e52) {
  return l$1 && y2 ? "Int8Array" === b(e52) : "[object Int8Array]" === m2(e52);
}
function P(e52) {
  return l$1 && y2 ? "Int16Array" === b(e52) : "[object Int16Array]" === m2(e52);
}
function x(e52) {
  return l$1 && y2 ? "Int32Array" === b(e52) : "[object Int32Array]" === m2(e52);
}
function I(e52) {
  return l$1 && y2 ? "Float32Array" === b(e52) : "[object Float32Array]" === m2(e52);
}
function M(e52) {
  return l$1 && y2 ? "Float64Array" === b(e52) : "[object Float64Array]" === m2(e52);
}
function z(e52) {
  return l$1 && y2 ? "BigInt64Array" === b(e52) : "[object BigInt64Array]" === m2(e52);
}
function F(e52) {
  return l$1 && y2 ? "BigUint64Array" === b(e52) : "[object BigUint64Array]" === m2(e52);
}
function T2(e52) {
  return "[object Map]" === m2(e52);
}
function N(e52) {
  return "[object Set]" === m2(e52);
}
function W(e52) {
  return "[object WeakMap]" === m2(e52);
}
function $(e52) {
  return "[object WeakSet]" === m2(e52);
}
function C(e52) {
  return "[object ArrayBuffer]" === m2(e52);
}
function V(e52) {
  return "undefined" != typeof ArrayBuffer && (C.working ? C(e52) : e52 instanceof ArrayBuffer);
}
function G(e52) {
  return "[object DataView]" === m2(e52);
}
function R(e52) {
  return "undefined" != typeof DataView && (G.working ? G(e52) : e52 instanceof DataView);
}
function J(e52) {
  return "[object SharedArrayBuffer]" === m2(e52);
}
function _(e52) {
  return "undefined" != typeof SharedArrayBuffer && (J.working ? J(e52) : e52 instanceof SharedArrayBuffer);
}
function H(e52) {
  return O(e52, h3);
}
function Z(e52) {
  return O(e52, j);
}
function q(e52) {
  return O(e52, A);
}
function K(e52) {
  return s3 && O(e52, w);
}
function L(e52) {
  return p3 && O(e52, v2);
}
function oe(e52, t52) {
  var r52 = { seen: [], stylize: fe };
  return arguments.length >= 3 && (r52.depth = arguments[2]), arguments.length >= 4 && (r52.colors = arguments[3]), ye(t52) ? r52.showHidden = t52 : t52 && X._extend(r52, t52), be(r52.showHidden) && (r52.showHidden = false), be(r52.depth) && (r52.depth = 2), be(r52.colors) && (r52.colors = false), be(r52.customInspect) && (r52.customInspect = true), r52.colors && (r52.stylize = ue), ae(r52, e52, r52.depth);
}
function ue(e52, t52) {
  var r52 = oe.styles[t52];
  return r52 ? "\x1B[" + oe.colors[r52][0] + "m" + e52 + "\x1B[" + oe.colors[r52][1] + "m" : e52;
}
function fe(e52, t52) {
  return e52;
}
function ae(e52, t52, r52) {
  if (e52.customInspect && t52 && we(t52.inspect) && t52.inspect !== X.inspect && (!t52.constructor || t52.constructor.prototype !== t52)) {
    var n52 = t52.inspect(r52, e52);
    return ge(n52) || (n52 = ae(e52, n52, r52)), n52;
  }
  var i52 = function(e6, t6) {
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
  }(e52, t52);
  if (i52)
    return i52;
  var o52 = Object.keys(t52), u52 = function(e6) {
    var t6 = {};
    return e6.forEach(function(e7, r6) {
      t6[e7] = true;
    }), t6;
  }(o52);
  if (e52.showHidden && (o52 = Object.getOwnPropertyNames(t52)), Ae(t52) && (o52.indexOf("message") >= 0 || o52.indexOf("description") >= 0))
    return ce(t52);
  if (0 === o52.length) {
    if (we(t52)) {
      var f52 = t52.name ? ": " + t52.name : "";
      return e52.stylize("[Function" + f52 + "]", "special");
    }
    if (me(t52))
      return e52.stylize(RegExp.prototype.toString.call(t52), "regexp");
    if (je(t52))
      return e52.stylize(Date.prototype.toString.call(t52), "date");
    if (Ae(t52))
      return ce(t52);
  }
  var a52, c52 = "", s52 = false, p52 = ["{", "}"];
  (pe(t52) && (s52 = true, p52 = ["[", "]"]), we(t52)) && (c52 = " [Function" + (t52.name ? ": " + t52.name : "") + "]");
  return me(t52) && (c52 = " " + RegExp.prototype.toString.call(t52)), je(t52) && (c52 = " " + Date.prototype.toUTCString.call(t52)), Ae(t52) && (c52 = " " + ce(t52)), 0 !== o52.length || s52 && 0 != t52.length ? r52 < 0 ? me(t52) ? e52.stylize(RegExp.prototype.toString.call(t52), "regexp") : e52.stylize("[Object]", "special") : (e52.seen.push(t52), a52 = s52 ? function(e6, t6, r6, n6, i6) {
    for (var o6 = [], u6 = 0, f6 = t6.length; u6 < f6; ++u6)
      ke(t6, String(u6)) ? o6.push(se(e6, t6, r6, n6, String(u6), true)) : o6.push("");
    return i6.forEach(function(i7) {
      i7.match(/^\d+$/) || o6.push(se(e6, t6, r6, n6, i7, true));
    }), o6;
  }(e52, t52, r52, u52, o52) : o52.map(function(n6) {
    return se(e52, t52, r52, u52, n6, s52);
  }), e52.seen.pop(), function(e6, t6, r6) {
    var n6 = 0;
    if (e6.reduce(function(e7, t7) {
      return n6++, t7.indexOf("\n") >= 0 && n6++, e7 + t7.replace(/\u001b\[\d\d?m/g, "").length + 1;
    }, 0) > 60)
      return r6[0] + ("" === t6 ? "" : t6 + "\n ") + " " + e6.join(",\n  ") + " " + r6[1];
    return r6[0] + t6 + " " + e6.join(", ") + " " + r6[1];
  }(a52, c52, p52)) : p52[0] + c52 + p52[1];
}
function ce(e52) {
  return "[" + Error.prototype.toString.call(e52) + "]";
}
function se(e52, t52, r52, n52, i52, o52) {
  var u52, f52, a52;
  if ((a52 = Object.getOwnPropertyDescriptor(t52, i52) || { value: t52[i52] }).get ? f52 = a52.set ? e52.stylize("[Getter/Setter]", "special") : e52.stylize("[Getter]", "special") : a52.set && (f52 = e52.stylize("[Setter]", "special")), ke(n52, i52) || (u52 = "[" + i52 + "]"), f52 || (e52.seen.indexOf(a52.value) < 0 ? (f52 = le(r52) ? ae(e52, a52.value, null) : ae(e52, a52.value, r52 - 1)).indexOf("\n") > -1 && (f52 = o52 ? f52.split("\n").map(function(e6) {
    return "  " + e6;
  }).join("\n").substr(2) : "\n" + f52.split("\n").map(function(e6) {
    return "   " + e6;
  }).join("\n")) : f52 = e52.stylize("[Circular]", "special")), be(u52)) {
    if (o52 && i52.match(/^\d+$/))
      return f52;
    (u52 = JSON.stringify("" + i52)).match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/) ? (u52 = u52.substr(1, u52.length - 2), u52 = e52.stylize(u52, "name")) : (u52 = u52.replace(/'/g, "\\'").replace(/\\"/g, '"').replace(/(^"|"$)/g, "'"), u52 = e52.stylize(u52, "string"));
  }
  return u52 + ": " + f52;
}
function pe(e52) {
  return Array.isArray(e52);
}
function ye(e52) {
  return "boolean" == typeof e52;
}
function le(e52) {
  return null === e52;
}
function de(e52) {
  return "number" == typeof e52;
}
function ge(e52) {
  return "string" == typeof e52;
}
function be(e52) {
  return void 0 === e52;
}
function me(e52) {
  return he(e52) && "[object RegExp]" === ve(e52);
}
function he(e52) {
  return "object" == typeof e52 && null !== e52;
}
function je(e52) {
  return he(e52) && "[object Date]" === ve(e52);
}
function Ae(e52) {
  return he(e52) && ("[object Error]" === ve(e52) || e52 instanceof Error);
}
function we(e52) {
  return "function" == typeof e52;
}
function ve(e52) {
  return Object.prototype.toString.call(e52);
}
function Oe(e52) {
  return e52 < 10 ? "0" + e52.toString(10) : e52.toString(10);
}
function Be() {
  var e52 = /* @__PURE__ */ new Date(), t52 = [Oe(e52.getHours()), Oe(e52.getMinutes()), Oe(e52.getSeconds())].join(":");
  return [e52.getDate(), Se[e52.getMonth()], t52].join(" ");
}
function ke(e52, t52) {
  return Object.prototype.hasOwnProperty.call(e52, t52);
}
function De(e52, t52) {
  if (!e52) {
    var r52 = new Error("Promise was rejected with a falsy value");
    r52.reason = e52, e52 = r52;
  }
  return t52(e52);
}
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
    } catch (e52) {
      cachedSetTimeout = defaultSetTimout;
    }
    try {
      if (typeof clearTimeout === "function") {
        cachedClearTimeout = clearTimeout;
      } else {
        cachedClearTimeout = defaultClearTimeout;
      }
    } catch (e52) {
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
    } catch (e52) {
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
    } catch (e52) {
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
      for (var i52 = 1; i52 < arguments.length; i52++) {
        args[i52 - 1] = arguments[i52];
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
function u$2(r52) {
  var t52 = r52.length;
  if (t52 % 4 > 0)
    throw new Error("Invalid string. Length must be a multiple of 4");
  var e52 = r52.indexOf("=");
  return -1 === e52 && (e52 = t52), [e52, e52 === t52 ? 0 : 4 - e52 % 4];
}
function c$12(r52, e52, n52) {
  for (var o52, a52, h52 = [], u52 = e52; u52 < n52; u52 += 3)
    o52 = (r52[u52] << 16 & 16711680) + (r52[u52 + 1] << 8 & 65280) + (255 & r52[u52 + 2]), h52.push(t$12[(a52 = o52) >> 18 & 63] + t$12[a52 >> 12 & 63] + t$12[a52 >> 6 & 63] + t$12[63 & a52]);
  return h52.join("");
}
function f$2(t52) {
  if (t52 > 2147483647)
    throw new RangeError('The value "' + t52 + '" is invalid for option "size"');
  var r52 = new Uint8Array(t52);
  return Object.setPrototypeOf(r52, u$1$1.prototype), r52;
}
function u$1$1(t52, r52, e52) {
  if ("number" == typeof t52) {
    if ("string" == typeof r52)
      throw new TypeError('The "string" argument must be of type string. Received type number');
    return a$2(t52);
  }
  return s$1(t52, r52, e52);
}
function s$1(t52, r52, e52) {
  if ("string" == typeof t52)
    return function(t6, r6) {
      "string" == typeof r6 && "" !== r6 || (r6 = "utf8");
      if (!u$1$1.isEncoding(r6))
        throw new TypeError("Unknown encoding: " + r6);
      var e6 = 0 | y3(t6, r6), n6 = f$2(e6), i6 = n6.write(t6, r6);
      i6 !== e6 && (n6 = n6.slice(0, i6));
      return n6;
    }(t52, r52);
  if (ArrayBuffer.isView(t52))
    return p4(t52);
  if (null == t52)
    throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof t52);
  if (F2(t52, ArrayBuffer) || t52 && F2(t52.buffer, ArrayBuffer))
    return c$1$1(t52, r52, e52);
  if ("undefined" != typeof SharedArrayBuffer && (F2(t52, SharedArrayBuffer) || t52 && F2(t52.buffer, SharedArrayBuffer)))
    return c$1$1(t52, r52, e52);
  if ("number" == typeof t52)
    throw new TypeError('The "value" argument must not be of type number. Received type number');
  var n52 = t52.valueOf && t52.valueOf();
  if (null != n52 && n52 !== t52)
    return u$1$1.from(n52, r52, e52);
  var i52 = function(t6) {
    if (u$1$1.isBuffer(t6)) {
      var r6 = 0 | l$12(t6.length), e6 = f$2(r6);
      return 0 === e6.length || t6.copy(e6, 0, 0, r6), e6;
    }
    if (void 0 !== t6.length)
      return "number" != typeof t6.length || N2(t6.length) ? f$2(0) : p4(t6);
    if ("Buffer" === t6.type && Array.isArray(t6.data))
      return p4(t6.data);
  }(t52);
  if (i52)
    return i52;
  if ("undefined" != typeof Symbol && null != Symbol.toPrimitive && "function" == typeof t52[Symbol.toPrimitive])
    return u$1$1.from(t52[Symbol.toPrimitive]("string"), r52, e52);
  throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof t52);
}
function h$1$1(t52) {
  if ("number" != typeof t52)
    throw new TypeError('"size" argument must be of type number');
  if (t52 < 0)
    throw new RangeError('The value "' + t52 + '" is invalid for option "size"');
}
function a$2(t52) {
  return h$1$1(t52), f$2(t52 < 0 ? 0 : 0 | l$12(t52));
}
function p4(t52) {
  for (var r52 = t52.length < 0 ? 0 : 0 | l$12(t52.length), e52 = f$2(r52), n52 = 0; n52 < r52; n52 += 1)
    e52[n52] = 255 & t52[n52];
  return e52;
}
function c$1$1(t52, r52, e52) {
  if (r52 < 0 || t52.byteLength < r52)
    throw new RangeError('"offset" is outside of buffer bounds');
  if (t52.byteLength < r52 + (e52 || 0))
    throw new RangeError('"length" is outside of buffer bounds');
  var n52;
  return n52 = void 0 === r52 && void 0 === e52 ? new Uint8Array(t52) : void 0 === e52 ? new Uint8Array(t52, r52) : new Uint8Array(t52, r52, e52), Object.setPrototypeOf(n52, u$1$1.prototype), n52;
}
function l$12(t52) {
  if (t52 >= 2147483647)
    throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + 2147483647 .toString(16) + " bytes");
  return 0 | t52;
}
function y3(t52, r52) {
  if (u$1$1.isBuffer(t52))
    return t52.length;
  if (ArrayBuffer.isView(t52) || F2(t52, ArrayBuffer))
    return t52.byteLength;
  if ("string" != typeof t52)
    throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof t52);
  var e52 = t52.length, n52 = arguments.length > 2 && true === arguments[2];
  if (!n52 && 0 === e52)
    return 0;
  for (var i52 = false; ; )
    switch (r52) {
      case "ascii":
      case "latin1":
      case "binary":
        return e52;
      case "utf8":
      case "utf-8":
        return _2(t52).length;
      case "ucs2":
      case "ucs-2":
      case "utf16le":
      case "utf-16le":
        return 2 * e52;
      case "hex":
        return e52 >>> 1;
      case "base64":
        return z2(t52).length;
      default:
        if (i52)
          return n52 ? -1 : _2(t52).length;
        r52 = ("" + r52).toLowerCase(), i52 = true;
    }
}
function g2(t52, r52, e52) {
  var n52 = false;
  if ((void 0 === r52 || r52 < 0) && (r52 = 0), r52 > this.length)
    return "";
  if ((void 0 === e52 || e52 > this.length) && (e52 = this.length), e52 <= 0)
    return "";
  if ((e52 >>>= 0) <= (r52 >>>= 0))
    return "";
  for (t52 || (t52 = "utf8"); ; )
    switch (t52) {
      case "hex":
        return O2(this, r52, e52);
      case "utf8":
      case "utf-8":
        return I2(this, r52, e52);
      case "ascii":
        return S2(this, r52, e52);
      case "latin1":
      case "binary":
        return R2(this, r52, e52);
      case "base64":
        return T3(this, r52, e52);
      case "ucs2":
      case "ucs-2":
      case "utf16le":
      case "utf-16le":
        return L2(this, r52, e52);
      default:
        if (n52)
          throw new TypeError("Unknown encoding: " + t52);
        t52 = (t52 + "").toLowerCase(), n52 = true;
    }
}
function w2(t52, r52, e52) {
  var n52 = t52[r52];
  t52[r52] = t52[e52], t52[e52] = n52;
}
function d3(t52, r52, e52, n52, i52) {
  if (0 === t52.length)
    return -1;
  if ("string" == typeof e52 ? (n52 = e52, e52 = 0) : e52 > 2147483647 ? e52 = 2147483647 : e52 < -2147483648 && (e52 = -2147483648), N2(e52 = +e52) && (e52 = i52 ? 0 : t52.length - 1), e52 < 0 && (e52 = t52.length + e52), e52 >= t52.length) {
    if (i52)
      return -1;
    e52 = t52.length - 1;
  } else if (e52 < 0) {
    if (!i52)
      return -1;
    e52 = 0;
  }
  if ("string" == typeof r52 && (r52 = u$1$1.from(r52, n52)), u$1$1.isBuffer(r52))
    return 0 === r52.length ? -1 : v3(t52, r52, e52, n52, i52);
  if ("number" == typeof r52)
    return r52 &= 255, "function" == typeof Uint8Array.prototype.indexOf ? i52 ? Uint8Array.prototype.indexOf.call(t52, r52, e52) : Uint8Array.prototype.lastIndexOf.call(t52, r52, e52) : v3(t52, [r52], e52, n52, i52);
  throw new TypeError("val must be string, number or Buffer");
}
function v3(t52, r52, e52, n52, i52) {
  var o52, f52 = 1, u52 = t52.length, s52 = r52.length;
  if (void 0 !== n52 && ("ucs2" === (n52 = String(n52).toLowerCase()) || "ucs-2" === n52 || "utf16le" === n52 || "utf-16le" === n52)) {
    if (t52.length < 2 || r52.length < 2)
      return -1;
    f52 = 2, u52 /= 2, s52 /= 2, e52 /= 2;
  }
  function h52(t6, r6) {
    return 1 === f52 ? t6[r6] : t6.readUInt16BE(r6 * f52);
  }
  if (i52) {
    var a52 = -1;
    for (o52 = e52; o52 < u52; o52++)
      if (h52(t52, o52) === h52(r52, -1 === a52 ? 0 : o52 - a52)) {
        if (-1 === a52 && (a52 = o52), o52 - a52 + 1 === s52)
          return a52 * f52;
      } else
        -1 !== a52 && (o52 -= o52 - a52), a52 = -1;
  } else
    for (e52 + s52 > u52 && (e52 = u52 - s52), o52 = e52; o52 >= 0; o52--) {
      for (var p52 = true, c52 = 0; c52 < s52; c52++)
        if (h52(t52, o52 + c52) !== h52(r52, c52)) {
          p52 = false;
          break;
        }
      if (p52)
        return o52;
    }
  return -1;
}
function b2(t52, r52, e52, n52) {
  e52 = Number(e52) || 0;
  var i52 = t52.length - e52;
  n52 ? (n52 = Number(n52)) > i52 && (n52 = i52) : n52 = i52;
  var o52 = r52.length;
  n52 > o52 / 2 && (n52 = o52 / 2);
  for (var f52 = 0; f52 < n52; ++f52) {
    var u52 = parseInt(r52.substr(2 * f52, 2), 16);
    if (N2(u52))
      return f52;
    t52[e52 + f52] = u52;
  }
  return f52;
}
function m3(t52, r52, e52, n52) {
  return D2(_2(r52, t52.length - e52), t52, e52, n52);
}
function E2(t52, r52, e52, n52) {
  return D2(function(t6) {
    for (var r6 = [], e6 = 0; e6 < t6.length; ++e6)
      r6.push(255 & t6.charCodeAt(e6));
    return r6;
  }(r52), t52, e52, n52);
}
function B2(t52, r52, e52, n52) {
  return E2(t52, r52, e52, n52);
}
function A2(t52, r52, e52, n52) {
  return D2(z2(r52), t52, e52, n52);
}
function U2(t52, r52, e52, n52) {
  return D2(function(t6, r6) {
    for (var e6, n6, i52, o52 = [], f52 = 0; f52 < t6.length && !((r6 -= 2) < 0); ++f52)
      e6 = t6.charCodeAt(f52), n6 = e6 >> 8, i52 = e6 % 256, o52.push(i52), o52.push(n6);
    return o52;
  }(r52, t52.length - e52), t52, e52, n52);
}
function T3(t52, r52, e52) {
  return 0 === r52 && e52 === t52.length ? n$1$1.fromByteArray(t52) : n$1$1.fromByteArray(t52.slice(r52, e52));
}
function I2(t52, r52, e52) {
  e52 = Math.min(t52.length, e52);
  for (var n52 = [], i52 = r52; i52 < e52; ) {
    var o52, f52, u52, s52, h52 = t52[i52], a52 = null, p52 = h52 > 239 ? 4 : h52 > 223 ? 3 : h52 > 191 ? 2 : 1;
    if (i52 + p52 <= e52)
      switch (p52) {
        case 1:
          h52 < 128 && (a52 = h52);
          break;
        case 2:
          128 == (192 & (o52 = t52[i52 + 1])) && (s52 = (31 & h52) << 6 | 63 & o52) > 127 && (a52 = s52);
          break;
        case 3:
          o52 = t52[i52 + 1], f52 = t52[i52 + 2], 128 == (192 & o52) && 128 == (192 & f52) && (s52 = (15 & h52) << 12 | (63 & o52) << 6 | 63 & f52) > 2047 && (s52 < 55296 || s52 > 57343) && (a52 = s52);
          break;
        case 4:
          o52 = t52[i52 + 1], f52 = t52[i52 + 2], u52 = t52[i52 + 3], 128 == (192 & o52) && 128 == (192 & f52) && 128 == (192 & u52) && (s52 = (15 & h52) << 18 | (63 & o52) << 12 | (63 & f52) << 6 | 63 & u52) > 65535 && s52 < 1114112 && (a52 = s52);
      }
    null === a52 ? (a52 = 65533, p52 = 1) : a52 > 65535 && (a52 -= 65536, n52.push(a52 >>> 10 & 1023 | 55296), a52 = 56320 | 1023 & a52), n52.push(a52), i52 += p52;
  }
  return function(t6) {
    var r6 = t6.length;
    if (r6 <= 4096)
      return String.fromCharCode.apply(String, t6);
    var e6 = "", n6 = 0;
    for (; n6 < r6; )
      e6 += String.fromCharCode.apply(String, t6.slice(n6, n6 += 4096));
    return e6;
  }(n52);
}
function S2(t52, r52, e52) {
  var n52 = "";
  e52 = Math.min(t52.length, e52);
  for (var i52 = r52; i52 < e52; ++i52)
    n52 += String.fromCharCode(127 & t52[i52]);
  return n52;
}
function R2(t52, r52, e52) {
  var n52 = "";
  e52 = Math.min(t52.length, e52);
  for (var i52 = r52; i52 < e52; ++i52)
    n52 += String.fromCharCode(t52[i52]);
  return n52;
}
function O2(t52, r52, e52) {
  var n52 = t52.length;
  (!r52 || r52 < 0) && (r52 = 0), (!e52 || e52 < 0 || e52 > n52) && (e52 = n52);
  for (var i52 = "", o52 = r52; o52 < e52; ++o52)
    i52 += Y2[t52[o52]];
  return i52;
}
function L2(t52, r52, e52) {
  for (var n52 = t52.slice(r52, e52), i52 = "", o52 = 0; o52 < n52.length; o52 += 2)
    i52 += String.fromCharCode(n52[o52] + 256 * n52[o52 + 1]);
  return i52;
}
function x2(t52, r52, e52) {
  if (t52 % 1 != 0 || t52 < 0)
    throw new RangeError("offset is not uint");
  if (t52 + r52 > e52)
    throw new RangeError("Trying to access beyond buffer length");
}
function C2(t52, r52, e52, n52, i52, o52) {
  if (!u$1$1.isBuffer(t52))
    throw new TypeError('"buffer" argument must be a Buffer instance');
  if (r52 > i52 || r52 < o52)
    throw new RangeError('"value" argument is out of bounds');
  if (e52 + n52 > t52.length)
    throw new RangeError("Index out of range");
}
function P2(t52, r52, e52, n52, i52, o52) {
  if (e52 + n52 > t52.length)
    throw new RangeError("Index out of range");
  if (e52 < 0)
    throw new RangeError("Index out of range");
}
function k2(t52, r52, e52, n52, o52) {
  return r52 = +r52, e52 >>>= 0, o52 || P2(t52, 0, e52, 4), i$12.write(t52, r52, e52, n52, 23, 4), e52 + 4;
}
function M2(t52, r52, e52, n52, o52) {
  return r52 = +r52, e52 >>>= 0, o52 || P2(t52, 0, e52, 8), i$12.write(t52, r52, e52, n52, 52, 8), e52 + 8;
}
function _2(t52, r52) {
  var e52;
  r52 = r52 || 1 / 0;
  for (var n52 = t52.length, i52 = null, o52 = [], f52 = 0; f52 < n52; ++f52) {
    if ((e52 = t52.charCodeAt(f52)) > 55295 && e52 < 57344) {
      if (!i52) {
        if (e52 > 56319) {
          (r52 -= 3) > -1 && o52.push(239, 191, 189);
          continue;
        }
        if (f52 + 1 === n52) {
          (r52 -= 3) > -1 && o52.push(239, 191, 189);
          continue;
        }
        i52 = e52;
        continue;
      }
      if (e52 < 56320) {
        (r52 -= 3) > -1 && o52.push(239, 191, 189), i52 = e52;
        continue;
      }
      e52 = 65536 + (i52 - 55296 << 10 | e52 - 56320);
    } else
      i52 && (r52 -= 3) > -1 && o52.push(239, 191, 189);
    if (i52 = null, e52 < 128) {
      if ((r52 -= 1) < 0)
        break;
      o52.push(e52);
    } else if (e52 < 2048) {
      if ((r52 -= 2) < 0)
        break;
      o52.push(e52 >> 6 | 192, 63 & e52 | 128);
    } else if (e52 < 65536) {
      if ((r52 -= 3) < 0)
        break;
      o52.push(e52 >> 12 | 224, e52 >> 6 & 63 | 128, 63 & e52 | 128);
    } else {
      if (!(e52 < 1114112))
        throw new Error("Invalid code point");
      if ((r52 -= 4) < 0)
        break;
      o52.push(e52 >> 18 | 240, e52 >> 12 & 63 | 128, e52 >> 6 & 63 | 128, 63 & e52 | 128);
    }
  }
  return o52;
}
function z2(t52) {
  return n$1$1.toByteArray(function(t6) {
    if ((t6 = (t6 = t6.split("=")[0]).trim().replace(j2, "")).length < 2)
      return "";
    for (; t6.length % 4 != 0; )
      t6 += "=";
    return t6;
  }(t52));
}
function D2(t52, r52, e52, n52) {
  for (var i52 = 0; i52 < n52 && !(i52 + e52 >= r52.length || i52 >= t52.length); ++i52)
    r52[i52 + e52] = t52[i52];
  return i52;
}
function F2(t52, r52) {
  return t52 instanceof r52 || null != t52 && null != t52.constructor && null != t52.constructor.name && t52.constructor.name === r52.name;
}
function N2(t52) {
  return t52 != t52;
}
function t4(r52, e52) {
  for (var n52 in r52)
    e52[n52] = r52[n52];
}
function f4(r52, e52, n52) {
  return o4(r52, e52, n52);
}
function a4(t52) {
  var e52;
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
  }(t52), this.encoding) {
    case "utf16le":
      this.text = h4, this.end = l4, e52 = 4;
      break;
    case "utf8":
      this.fillLast = n$12, e52 = 4;
      break;
    case "base64":
      this.text = u$12, this.end = o$12, e52 = 3;
      break;
    default:
      return this.write = f$1, this.end = c4, void 0;
  }
  this.lastNeed = 0, this.lastTotal = 0, this.lastChar = s4.allocUnsafe(e52);
}
function r4(t52) {
  return t52 <= 127 ? 0 : t52 >> 5 == 6 ? 2 : t52 >> 4 == 14 ? 3 : t52 >> 3 == 30 ? 4 : t52 >> 6 == 2 ? -1 : -2;
}
function n$12(t52) {
  var e52 = this.lastTotal - this.lastNeed, s52 = function(t6, e6, s6) {
    if (128 != (192 & e6[0]))
      return t6.lastNeed = 0, "\uFFFD";
    if (t6.lastNeed > 1 && e6.length > 1) {
      if (128 != (192 & e6[1]))
        return t6.lastNeed = 1, "\uFFFD";
      if (t6.lastNeed > 2 && e6.length > 2 && 128 != (192 & e6[2]))
        return t6.lastNeed = 2, "\uFFFD";
    }
  }(this, t52);
  return void 0 !== s52 ? s52 : this.lastNeed <= t52.length ? (t52.copy(this.lastChar, e52, 0, this.lastNeed), this.lastChar.toString(this.encoding, 0, this.lastTotal)) : (t52.copy(this.lastChar, e52, 0, t52.length), this.lastNeed -= t52.length, void 0);
}
function h4(t52, e52) {
  if ((t52.length - e52) % 2 == 0) {
    var s52 = t52.toString("utf16le", e52);
    if (s52) {
      var i52 = s52.charCodeAt(s52.length - 1);
      if (i52 >= 55296 && i52 <= 56319)
        return this.lastNeed = 2, this.lastTotal = 4, this.lastChar[0] = t52[t52.length - 2], this.lastChar[1] = t52[t52.length - 1], s52.slice(0, -1);
    }
    return s52;
  }
  return this.lastNeed = 1, this.lastTotal = 2, this.lastChar[0] = t52[t52.length - 1], t52.toString("utf16le", e52, t52.length - 1);
}
function l4(t52) {
  var e52 = t52 && t52.length ? this.write(t52) : "";
  if (this.lastNeed) {
    var s52 = this.lastTotal - this.lastNeed;
    return e52 + this.lastChar.toString("utf16le", 0, s52);
  }
  return e52;
}
function u$12(t52, e52) {
  var s52 = (t52.length - e52) % 3;
  return 0 === s52 ? t52.toString("base64", e52) : (this.lastNeed = 3 - s52, this.lastTotal = 3, 1 === s52 ? this.lastChar[0] = t52[t52.length - 1] : (this.lastChar[0] = t52[t52.length - 2], this.lastChar[1] = t52[t52.length - 1]), t52.toString("base64", e52, t52.length - s52));
}
function o$12(t52) {
  var e52 = t52 && t52.length ? this.write(t52) : "";
  return this.lastNeed ? e52 + this.lastChar.toString("base64", 0, 3 - this.lastNeed) : e52;
}
function f$1(t52) {
  return t52.toString(this.encoding);
}
function c4(t52) {
  return t52 && t52.length ? this.write(t52) : "";
}
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
  for (var i52 = 0, len = code.length; i52 < len; ++i52) {
    lookup[i52] = code[i52];
    revLookup[code.charCodeAt(i52)] = i52;
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
    var e52, m42;
    var eLen = nBytes * 8 - mLen - 1;
    var eMax = (1 << eLen) - 1;
    var eBias = eMax >> 1;
    var nBits = -7;
    var i52 = isLE ? nBytes - 1 : 0;
    var d42 = isLE ? -1 : 1;
    var s52 = buffer2[offset + i52];
    i52 += d42;
    e52 = s52 & (1 << -nBits) - 1;
    s52 >>= -nBits;
    nBits += eLen;
    for (; nBits > 0; e52 = e52 * 256 + buffer2[offset + i52], i52 += d42, nBits -= 8) {
    }
    m42 = e52 & (1 << -nBits) - 1;
    e52 >>= -nBits;
    nBits += mLen;
    for (; nBits > 0; m42 = m42 * 256 + buffer2[offset + i52], i52 += d42, nBits -= 8) {
    }
    if (e52 === 0) {
      e52 = 1 - eBias;
    } else if (e52 === eMax) {
      return m42 ? NaN : (s52 ? -1 : 1) * Infinity;
    } else {
      m42 = m42 + Math.pow(2, mLen);
      e52 = e52 - eBias;
    }
    return (s52 ? -1 : 1) * m42 * Math.pow(2, e52 - mLen);
  };
  exports$1$1.write = function(buffer2, value, offset, isLE, mLen, nBytes) {
    var e52, m42, c52;
    var eLen = nBytes * 8 - mLen - 1;
    var eMax = (1 << eLen) - 1;
    var eBias = eMax >> 1;
    var rt = mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0;
    var i52 = isLE ? 0 : nBytes - 1;
    var d42 = isLE ? 1 : -1;
    var s52 = value < 0 || value === 0 && 1 / value < 0 ? 1 : 0;
    value = Math.abs(value);
    if (isNaN(value) || value === Infinity) {
      m42 = isNaN(value) ? 1 : 0;
      e52 = eMax;
    } else {
      e52 = Math.floor(Math.log(value) / Math.LN2);
      if (value * (c52 = Math.pow(2, -e52)) < 1) {
        e52--;
        c52 *= 2;
      }
      if (e52 + eBias >= 1) {
        value += rt / c52;
      } else {
        value += rt * Math.pow(2, 1 - eBias);
      }
      if (value * c52 >= 2) {
        e52++;
        c52 /= 2;
      }
      if (e52 + eBias >= eMax) {
        m42 = 0;
        e52 = eMax;
      } else if (e52 + eBias >= 1) {
        m42 = (value * c52 - 1) * Math.pow(2, mLen);
        e52 = e52 + eBias;
      } else {
        m42 = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen);
        e52 = 0;
      }
    }
    for (; mLen >= 8; buffer2[offset + i52] = m42 & 255, i52 += d42, m42 /= 256, mLen -= 8) {
    }
    e52 = e52 << mLen | m42;
    eLen += mLen;
    for (; eLen > 0; buffer2[offset + i52] = e52 & 255, i52 += d42, e52 /= 256, eLen -= 8) {
    }
    buffer2[offset + i52 - d42] |= s52 * 128;
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
    } catch (e52) {
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
    const b32 = fromObject(value);
    if (b32)
      return b32;
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
    for (let i52 = 0; i52 < length; i52 += 1) {
      buf[i52] = array[i52] & 255;
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
  Buffer2.isBuffer = function isBuffer3(b32) {
    return b32 != null && b32._isBuffer === true && b32 !== Buffer2.prototype;
  };
  Buffer2.compare = function compare(a52, b32) {
    if (isInstance(a52, Uint8Array))
      a52 = Buffer2.from(a52, a52.offset, a52.byteLength);
    if (isInstance(b32, Uint8Array))
      b32 = Buffer2.from(b32, b32.offset, b32.byteLength);
    if (!Buffer2.isBuffer(a52) || !Buffer2.isBuffer(b32)) {
      throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');
    }
    if (a52 === b32)
      return 0;
    let x32 = a52.length;
    let y42 = b32.length;
    for (let i52 = 0, len = Math.min(x32, y42); i52 < len; ++i52) {
      if (a52[i52] !== b32[i52]) {
        x32 = a52[i52];
        y42 = b32[i52];
        break;
      }
    }
    if (x32 < y42)
      return -1;
    if (y42 < x32)
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
    let i52;
    if (length === void 0) {
      length = 0;
      for (i52 = 0; i52 < list.length; ++i52) {
        length += list[i52].length;
      }
    }
    const buffer2 = Buffer2.allocUnsafe(length);
    let pos = 0;
    for (i52 = 0; i52 < list.length; ++i52) {
      let buf = list[i52];
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
  function swap(b32, n52, m42) {
    const i52 = b32[n52];
    b32[n52] = b32[m42];
    b32[m42] = i52;
  }
  Buffer2.prototype.swap16 = function swap16() {
    const len = this.length;
    if (len % 2 !== 0) {
      throw new RangeError("Buffer size must be a multiple of 16-bits");
    }
    for (let i52 = 0; i52 < len; i52 += 2) {
      swap(this, i52, i52 + 1);
    }
    return this;
  };
  Buffer2.prototype.swap32 = function swap32() {
    const len = this.length;
    if (len % 4 !== 0) {
      throw new RangeError("Buffer size must be a multiple of 32-bits");
    }
    for (let i52 = 0; i52 < len; i52 += 4) {
      swap(this, i52, i52 + 3);
      swap(this, i52 + 1, i52 + 2);
    }
    return this;
  };
  Buffer2.prototype.swap64 = function swap64() {
    const len = this.length;
    if (len % 8 !== 0) {
      throw new RangeError("Buffer size must be a multiple of 64-bits");
    }
    for (let i52 = 0; i52 < len; i52 += 8) {
      swap(this, i52, i52 + 7);
      swap(this, i52 + 1, i52 + 6);
      swap(this, i52 + 2, i52 + 5);
      swap(this, i52 + 3, i52 + 4);
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
  Buffer2.prototype.equals = function equals(b32) {
    if (!Buffer2.isBuffer(b32))
      throw new TypeError("Argument must be a Buffer");
    if (this === b32)
      return true;
    return Buffer2.compare(this, b32) === 0;
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
    let x32 = thisEnd - thisStart;
    let y42 = end - start;
    const len = Math.min(x32, y42);
    const thisCopy = this.slice(thisStart, thisEnd);
    const targetCopy = target.slice(start, end);
    for (let i52 = 0; i52 < len; ++i52) {
      if (thisCopy[i52] !== targetCopy[i52]) {
        x32 = thisCopy[i52];
        y42 = targetCopy[i52];
        break;
      }
    }
    if (x32 < y42)
      return -1;
    if (y42 < x32)
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
    let i52;
    if (dir) {
      let foundIndex = -1;
      for (i52 = byteOffset; i52 < arrLength; i52++) {
        if (read(arr, i52) === read(val, foundIndex === -1 ? 0 : i52 - foundIndex)) {
          if (foundIndex === -1)
            foundIndex = i52;
          if (i52 - foundIndex + 1 === valLength)
            return foundIndex * indexSize;
        } else {
          if (foundIndex !== -1)
            i52 -= i52 - foundIndex;
          foundIndex = -1;
        }
      }
    } else {
      if (byteOffset + valLength > arrLength)
        byteOffset = arrLength - valLength;
      for (i52 = byteOffset; i52 >= 0; i52--) {
        let found = true;
        for (let j32 = 0; j32 < valLength; j32++) {
          if (read(arr, i52 + j32) !== read(val, j32)) {
            found = false;
            break;
          }
        }
        if (found)
          return i52;
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
    let i52;
    for (i52 = 0; i52 < length; ++i52) {
      const parsed = parseInt(string.substr(i52 * 2, 2), 16);
      if (numberIsNaN(parsed))
        return i52;
      buf[offset + i52] = parsed;
    }
    return i52;
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
    let i52 = start;
    while (i52 < end) {
      const firstByte = buf[i52];
      let codePoint = null;
      let bytesPerSequence = firstByte > 239 ? 4 : firstByte > 223 ? 3 : firstByte > 191 ? 2 : 1;
      if (i52 + bytesPerSequence <= end) {
        let secondByte, thirdByte, fourthByte, tempCodePoint;
        switch (bytesPerSequence) {
          case 1:
            if (firstByte < 128) {
              codePoint = firstByte;
            }
            break;
          case 2:
            secondByte = buf[i52 + 1];
            if ((secondByte & 192) === 128) {
              tempCodePoint = (firstByte & 31) << 6 | secondByte & 63;
              if (tempCodePoint > 127) {
                codePoint = tempCodePoint;
              }
            }
            break;
          case 3:
            secondByte = buf[i52 + 1];
            thirdByte = buf[i52 + 2];
            if ((secondByte & 192) === 128 && (thirdByte & 192) === 128) {
              tempCodePoint = (firstByte & 15) << 12 | (secondByte & 63) << 6 | thirdByte & 63;
              if (tempCodePoint > 2047 && (tempCodePoint < 55296 || tempCodePoint > 57343)) {
                codePoint = tempCodePoint;
              }
            }
            break;
          case 4:
            secondByte = buf[i52 + 1];
            thirdByte = buf[i52 + 2];
            fourthByte = buf[i52 + 3];
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
      i52 += bytesPerSequence;
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
    let i52 = 0;
    while (i52 < len) {
      res += String.fromCharCode.apply(String, codePoints.slice(i52, i52 += MAX_ARGUMENTS_LENGTH));
    }
    return res;
  }
  function asciiSlice(buf, start, end) {
    let ret = "";
    end = Math.min(buf.length, end);
    for (let i52 = start; i52 < end; ++i52) {
      ret += String.fromCharCode(buf[i52] & 127);
    }
    return ret;
  }
  function latin1Slice(buf, start, end) {
    let ret = "";
    end = Math.min(buf.length, end);
    for (let i52 = start; i52 < end; ++i52) {
      ret += String.fromCharCode(buf[i52]);
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
    for (let i52 = start; i52 < end; ++i52) {
      out += hexSliceLookupTable[buf[i52]];
    }
    return out;
  }
  function utf16leSlice(buf, start, end) {
    const bytes = buf.slice(start, end);
    let res = "";
    for (let i52 = 0; i52 < bytes.length - 1; i52 += 2) {
      res += String.fromCharCode(bytes[i52] + bytes[i52 + 1] * 256);
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
    let i52 = 0;
    while (++i52 < byteLength2 && (mul *= 256)) {
      val += this[offset + i52] * mul;
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
    const first = this[offset];
    const last = this[offset + 7];
    if (first === void 0 || last === void 0) {
      boundsError(offset, this.length - 8);
    }
    const lo = first + this[++offset] * 2 ** 8 + this[++offset] * 2 ** 16 + this[++offset] * 2 ** 24;
    const hi = this[++offset] + this[++offset] * 2 ** 8 + this[++offset] * 2 ** 16 + last * 2 ** 24;
    return BigInt(lo) + (BigInt(hi) << BigInt(32));
  });
  Buffer2.prototype.readBigUInt64BE = defineBigIntMethod(function readBigUInt64BE(offset) {
    offset = offset >>> 0;
    validateNumber(offset, "offset");
    const first = this[offset];
    const last = this[offset + 7];
    if (first === void 0 || last === void 0) {
      boundsError(offset, this.length - 8);
    }
    const hi = first * 2 ** 24 + this[++offset] * 2 ** 16 + this[++offset] * 2 ** 8 + this[++offset];
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
    let i52 = 0;
    while (++i52 < byteLength2 && (mul *= 256)) {
      val += this[offset + i52] * mul;
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
    let i52 = byteLength2;
    let mul = 1;
    let val = this[offset + --i52];
    while (i52 > 0 && (mul *= 256)) {
      val += this[offset + --i52] * mul;
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
    const first = this[offset];
    const last = this[offset + 7];
    if (first === void 0 || last === void 0) {
      boundsError(offset, this.length - 8);
    }
    const val = this[offset + 4] + this[offset + 5] * 2 ** 8 + this[offset + 6] * 2 ** 16 + (last << 24);
    return (BigInt(val) << BigInt(32)) + BigInt(first + this[++offset] * 2 ** 8 + this[++offset] * 2 ** 16 + this[++offset] * 2 ** 24);
  });
  Buffer2.prototype.readBigInt64BE = defineBigIntMethod(function readBigInt64BE(offset) {
    offset = offset >>> 0;
    validateNumber(offset, "offset");
    const first = this[offset];
    const last = this[offset + 7];
    if (first === void 0 || last === void 0) {
      boundsError(offset, this.length - 8);
    }
    const val = (first << 24) + // Overflow
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
    let i52 = 0;
    this[offset] = value & 255;
    while (++i52 < byteLength2 && (mul *= 256)) {
      this[offset + i52] = value / mul & 255;
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
    let i52 = byteLength2 - 1;
    let mul = 1;
    this[offset + i52] = value & 255;
    while (--i52 >= 0 && (mul *= 256)) {
      this[offset + i52] = value / mul & 255;
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
    let i52 = 0;
    let mul = 1;
    let sub = 0;
    this[offset] = value & 255;
    while (++i52 < byteLength2 && (mul *= 256)) {
      if (value < 0 && sub === 0 && this[offset + i52 - 1] !== 0) {
        sub = 1;
      }
      this[offset + i52] = (value / mul >> 0) - sub & 255;
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
    let i52 = byteLength2 - 1;
    let mul = 1;
    let sub = 0;
    this[offset + i52] = value & 255;
    while (--i52 >= 0 && (mul *= 256)) {
      if (value < 0 && sub === 0 && this[offset + i52 + 1] !== 0) {
        sub = 1;
      }
      this[offset + i52] = (value / mul >> 0) - sub & 255;
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
    let i52;
    if (typeof val === "number") {
      for (i52 = start; i52 < end; ++i52) {
        this[i52] = val;
      }
    } else {
      const bytes = Buffer2.isBuffer(val) ? val : Buffer2.from(val, encoding);
      const len = bytes.length;
      if (len === 0) {
        throw new TypeError('The value "' + val + '" is invalid for argument "value"');
      }
      for (i52 = 0; i52 < end - start; ++i52) {
        this[i52 + start] = bytes[i52 % len];
      }
    }
    return this;
  };
  const errors = {};
  function E32(sym, getMessage, Base) {
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
  E32("ERR_BUFFER_OUT_OF_BOUNDS", function(name2) {
    if (name2) {
      return `${name2} is outside of buffer bounds`;
    }
    return "Attempt to access memory outside buffer bounds";
  }, RangeError);
  E32("ERR_INVALID_ARG_TYPE", function(name2, actual) {
    return `The "${name2}" argument must be of type number. Received type ${typeof actual}`;
  }, TypeError);
  E32("ERR_OUT_OF_RANGE", function(str, range, input) {
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
    let i52 = val.length;
    const start = val[0] === "-" ? 1 : 0;
    for (; i52 >= start + 4; i52 -= 3) {
      res = `_${val.slice(i52 - 3, i52)}${res}`;
    }
    return `${val.slice(0, i52)}${res}`;
  }
  function checkBounds(buf, offset, byteLength2) {
    validateNumber(offset, "offset");
    if (buf[offset] === void 0 || buf[offset + byteLength2] === void 0) {
      boundsError(offset, buf.length - (byteLength2 + 1));
    }
  }
  function checkIntBI(value, min, max, buf, offset, byteLength2) {
    if (value > max || value < min) {
      const n52 = typeof min === "bigint" ? "n" : "";
      let range;
      if (byteLength2 > 3) {
        if (min === 0 || min === BigInt(0)) {
          range = `>= 0${n52} and < 2${n52} ** ${(byteLength2 + 1) * 8}${n52}`;
        } else {
          range = `>= -(2${n52} ** ${(byteLength2 + 1) * 8 - 1}${n52}) and < 2 ** ${(byteLength2 + 1) * 8 - 1}${n52}`;
        }
      } else {
        range = `>= ${min}${n52} and <= ${max}${n52}`;
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
    for (let i52 = 0; i52 < length; ++i52) {
      codePoint = string.charCodeAt(i52);
      if (codePoint > 55295 && codePoint < 57344) {
        if (!leadSurrogate) {
          if (codePoint > 56319) {
            if ((units -= 3) > -1)
              bytes.push(239, 191, 189);
            continue;
          } else if (i52 + 1 === length) {
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
    for (let i52 = 0; i52 < str.length; ++i52) {
      byteArray.push(str.charCodeAt(i52) & 255);
    }
    return byteArray;
  }
  function utf16leToBytes(str, units) {
    let c52, hi, lo;
    const byteArray = [];
    for (let i52 = 0; i52 < str.length; ++i52) {
      if ((units -= 2) < 0)
        break;
      c52 = str.charCodeAt(i52);
      hi = c52 >> 8;
      lo = c52 % 256;
      byteArray.push(lo);
      byteArray.push(hi);
    }
    return byteArray;
  }
  function base64ToBytes(str) {
    return base64.toByteArray(base64clean(str));
  }
  function blitBuffer(src, dst, offset, length) {
    let i52;
    for (i52 = 0; i52 < length; ++i52) {
      if (i52 + offset >= dst.length || i52 >= src.length)
        break;
      dst[i52 + offset] = src[i52];
    }
    return i52;
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
    for (let i52 = 0; i52 < 16; ++i52) {
      const i16 = i52 * 16;
      for (let j32 = 0; j32 < 16; ++j32) {
        table[i16 + j32] = alphabet[i52] + alphabet[j32];
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
    for (var i52 = 1; i52 < arguments.length; i52++) {
      var source = arguments[i52] != null ? arguments[i52] : {};
      if (i52 % 2) {
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
    for (var i52 = 0; i52 < props.length; i52++) {
      var descriptor = props[i52];
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
      value: function push(v42) {
        var entry = {
          data: v42,
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
      value: function unshift(v42) {
        var entry = {
          data: v42,
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
      value: function join(s52) {
        if (this.length === 0)
          return "";
        var p52 = this.head;
        var ret = "" + p52.data;
        while (p52 = p52.next) {
          ret += s52 + p52.data;
        }
        return ret;
      }
    }, {
      key: "concat",
      value: function concat(n52) {
        if (this.length === 0)
          return Buffer2.alloc(0);
        var ret = Buffer2.allocUnsafe(n52 >>> 0);
        var p52 = this.head;
        var i52 = 0;
        while (p52) {
          copyBuffer(p52.data, ret, i52);
          i52 += p52.data.length;
          p52 = p52.next;
        }
        return ret;
      }
      // Consumes a specified amount of bytes or characters from the buffered data.
    }, {
      key: "consume",
      value: function consume(n52, hasStrings) {
        var ret;
        if (n52 < this.head.data.length) {
          ret = this.head.data.slice(0, n52);
          this.head.data = this.head.data.slice(n52);
        } else if (n52 === this.head.data.length) {
          ret = this.shift();
        } else {
          ret = hasStrings ? this._getString(n52) : this._getBuffer(n52);
        }
        return ret;
      }
    }, {
      key: "first",
      value: function first() {
        return this.head.data;
      }
      // Consumes a specified amount of characters from the buffered data.
    }, {
      key: "_getString",
      value: function _getString(n52) {
        var p52 = this.head;
        var c52 = 1;
        var ret = p52.data;
        n52 -= ret.length;
        while (p52 = p52.next) {
          var str = p52.data;
          var nb = n52 > str.length ? str.length : n52;
          if (nb === str.length)
            ret += str;
          else
            ret += str.slice(0, n52);
          n52 -= nb;
          if (n52 === 0) {
            if (nb === str.length) {
              ++c52;
              if (p52.next)
                this.head = p52.next;
              else
                this.head = this.tail = null;
            } else {
              this.head = p52;
              p52.data = str.slice(nb);
            }
            break;
          }
          ++c52;
        }
        this.length -= c52;
        return ret;
      }
      // Consumes a specified amount of bytes from the buffered data.
    }, {
      key: "_getBuffer",
      value: function _getBuffer(n52) {
        var ret = Buffer2.allocUnsafe(n52);
        var p52 = this.head;
        var c52 = 1;
        p52.data.copy(ret);
        n52 -= p52.data.length;
        while (p52 = p52.next) {
          var buf = p52.data;
          var nb = n52 > buf.length ? buf.length : n52;
          buf.copy(ret, ret.length - n52, 0, nb);
          n52 -= nb;
          if (n52 === 0) {
            if (nb === buf.length) {
              ++c52;
              if (p52.next)
                this.head = p52.next;
              else
                this.head = this.tail = null;
            } else {
              this.head = p52;
              p52.data = buf.slice(nb);
            }
            break;
          }
          ++c52;
        }
        this.length -= c52;
        return ret;
      }
      // Make sure the linked list only shows the minimal necessary information.
    }, {
      key: custom,
      value: function value(_32, options) {
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
      expected = expected.map((i52) => String(i52));
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
    } catch (_32) {
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
    } catch (_32) {
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
      var l52 = state.bufferedRequestCount;
      var buffer2 = new Array(l52);
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
    for (var v42 = 0; v42 < keys.length; v42++) {
      var method = keys[v42];
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
    var p52 = this._readableState.buffer.head;
    var content = "";
    while (p52 !== null) {
      content += decoder.write(p52.data);
      p52 = p52.next;
    }
    this._readableState.buffer.clear();
    if (content !== "")
      this._readableState.buffer.push(content);
    this._readableState.length = content.length;
    return this;
  };
  var MAX_HWM = 1073741824;
  function computeNewHighWaterMark(n52) {
    if (n52 >= MAX_HWM) {
      n52 = MAX_HWM;
    } else {
      n52--;
      n52 |= n52 >>> 1;
      n52 |= n52 >>> 2;
      n52 |= n52 >>> 4;
      n52 |= n52 >>> 8;
      n52 |= n52 >>> 16;
      n52++;
    }
    return n52;
  }
  function howMuchToRead(n52, state) {
    if (n52 <= 0 || state.length === 0 && state.ended)
      return 0;
    if (state.objectMode)
      return 1;
    if (n52 !== n52) {
      if (state.flowing && state.length)
        return state.buffer.head.data.length;
      else
        return state.length;
    }
    if (n52 > state.highWaterMark)
      state.highWaterMark = computeNewHighWaterMark(n52);
    if (n52 <= state.length)
      return n52;
    if (!state.ended) {
      state.needReadable = true;
      return 0;
    }
    return state.length;
  }
  Readable2.prototype.read = function(n52) {
    debug("read", n52);
    n52 = parseInt(n52, 10);
    var state = this._readableState;
    var nOrig = n52;
    if (n52 !== 0)
      state.emittedReadable = false;
    if (n52 === 0 && state.needReadable && ((state.highWaterMark !== 0 ? state.length >= state.highWaterMark : state.length > 0) || state.ended)) {
      debug("read: emitReadable", state.length, state.ended);
      if (state.length === 0 && state.ended)
        endReadable(this);
      else
        emitReadable(this);
      return null;
    }
    n52 = howMuchToRead(n52, state);
    if (n52 === 0 && state.ended) {
      if (state.length === 0)
        endReadable(this);
      return null;
    }
    var doRead = state.needReadable;
    debug("need readable", doRead);
    if (state.length === 0 || state.length - n52 < state.highWaterMark) {
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
        n52 = howMuchToRead(nOrig, state);
    }
    var ret;
    if (n52 > 0)
      ret = fromList(n52, state);
    else
      ret = null;
    if (ret === null) {
      state.needReadable = state.length <= state.highWaterMark;
      n52 = 0;
    } else {
      state.length -= n52;
      state.awaitDrain = 0;
    }
    if (state.length === 0) {
      if (!state.ended)
        state.needReadable = true;
      if (nOrig !== n52 && state.ended)
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
  Readable2.prototype._read = function(n52) {
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
      for (var i52 = 0; i52 < len; i52++) {
        dests[i52].emit("unpipe", this, {
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
    for (var i52 in stream) {
      if (this[i52] === void 0 && typeof stream[i52] === "function") {
        this[i52] = function methodWrap(method) {
          return function methodWrapReturnFunction() {
            return stream[method].apply(stream, arguments);
          };
        }(i52);
      }
    }
    for (var n52 = 0; n52 < kProxyEvents.length; n52++) {
      stream.on(kProxyEvents[n52], this.emit.bind(this, kProxyEvents[n52]));
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
  function fromList(n52, state) {
    if (state.length === 0)
      return null;
    var ret;
    if (state.objectMode)
      ret = state.buffer.shift();
    else if (!n52 || n52 >= state.length) {
      if (state.decoder)
        ret = state.buffer.join("");
      else if (state.buffer.length === 1)
        ret = state.buffer.first();
      else
        ret = state.buffer.concat(state.length);
      state.buffer.clear();
    } else {
      ret = state.buffer.consume(n52, state.decoder);
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
  function indexOf(xs, x32) {
    for (var i52 = 0, l52 = xs.length; i52 < l52; i52++) {
      if (xs[i52] === x32)
        return i52;
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
  Transform2.prototype._read = function(n52) {
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
    var destroys = streams.map(function(stream, i52) {
      var reading = i52 < streams.length - 1;
      var writing = i52 > 0;
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
var e, t, n, r, i, s, y, EventEmitter, defaultMaxListeners, init, listenerCount, on, once, e2, t2, n2, r2, o2, l2, s2, f2, a2, T, t3, e3, o3, n3, r3, l3, t$1, o$1, n$1, e$1, r$1, c3, u3, i3, t$2, i$1, o$2, u$1, f3, a3, s3, p3, y2, l$1, d2, m2, h3, j, A, Q, X, Y, ee, te, re, ne, ie, Se, Ee, _extend, callbackify, debuglog, deprecate, format, inherits, inspect, isArray, isBoolean, isBuffer, isDate, isError, isFunction, isNull, isNullOrUndefined, isNumber, isObject, isPrimitive, isRegExp, isString, isSymbol, isUndefined, log, promisify, types, TextEncoder, TextDecoder, exports, _dewExec, _global, process, r$12, t$12, e$2, n$2, o$22, a$1, h$1, a$1$1, e$1$1, n$1$1, i$12, o$1$1, j2, Y2, e4, n4, o4, u4, e$12, s4, i4, exports$2$1, _dewExec$2$1, exports$1$1, _dewExec$1$1, exports$g, _dewExec$g, buffer, exports$f, _dewExec$f, exports$e, _dewExec$e, exports$d, _dewExec$d, exports$c, _dewExec$c, exports$b, _dewExec$b, exports$a, _dewExec$a, exports$9, _dewExec$9, _global$2, exports$8, _dewExec$8, _global$1, exports$7, _dewExec$7, exports$6, _dewExec$6, exports$5, _dewExec$5, exports$4, _dewExec$4, exports$3, _dewExec$3, _global2, exports$2, _dewExec$2, exports$1, _dewExec$1, exports2, _dewExec2, exports$12, _dewExec3, _global3, exports3, _extend2, callbackify2, debuglog2, deprecate2, format2, inherits2, inspect2, isArray2, isBoolean2, isBuffer2, isDate2, isError2, isFunction2, isNull2, isNullOrUndefined2, isNumber2, isObject2, isPrimitive2, isRegExp2, isString2, isSymbol2, isUndefined2, log2, promisify2, types2, TextEncoder2, TextDecoder2, Readable, Writable, Duplex, Transform, PassThrough, finished, pipeline, Stream, promises;
var init_stream = __esm({
  "node-modules-polyfills:stream"() {
    n = "object" == typeof Reflect ? Reflect : null;
    r = n && "function" == typeof n.apply ? n.apply : function(e52, t52, n52) {
      return Function.prototype.apply.call(e52, t52, n52);
    };
    t = n && "function" == typeof n.ownKeys ? n.ownKeys : Object.getOwnPropertySymbols ? function(e52) {
      return Object.getOwnPropertyNames(e52).concat(Object.getOwnPropertySymbols(e52));
    } : function(e52) {
      return Object.getOwnPropertyNames(e52);
    };
    i = Number.isNaN || function(e52) {
      return e52 != e52;
    };
    e = o, o.EventEmitter = o, o.prototype._events = void 0, o.prototype._eventsCount = 0, o.prototype._maxListeners = void 0;
    s = 10;
    Object.defineProperty(o, "defaultMaxListeners", { enumerable: true, get: function() {
      return s;
    }, set: function(e52) {
      if ("number" != typeof e52 || e52 < 0 || i(e52))
        throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + e52 + ".");
      s = e52;
    } }), o.init = function() {
      void 0 !== this._events && this._events !== Object.getPrototypeOf(this)._events || (this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0), this._maxListeners = this._maxListeners || void 0;
    }, o.prototype.setMaxListeners = function(e52) {
      if ("number" != typeof e52 || e52 < 0 || i(e52))
        throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + e52 + ".");
      return this._maxListeners = e52, this;
    }, o.prototype.getMaxListeners = function() {
      return f(this);
    }, o.prototype.emit = function(e52) {
      for (var t52 = [], n52 = 1; n52 < arguments.length; n52++)
        t52.push(arguments[n52]);
      var i52 = "error" === e52, o52 = this._events;
      if (void 0 !== o52)
        i52 = i52 && void 0 === o52.error;
      else if (!i52)
        return false;
      if (i52) {
        var s52;
        if (t52.length > 0 && (s52 = t52[0]), s52 instanceof Error)
          throw s52;
        var u52 = new Error("Unhandled error." + (s52 ? " (" + s52.message + ")" : ""));
        throw u52.context = s52, u52;
      }
      var f52 = o52[e52];
      if (void 0 === f52)
        return false;
      if ("function" == typeof f52)
        r(f52, this, t52);
      else {
        var v42 = f52.length, a52 = c(f52, v42);
        for (n52 = 0; n52 < v42; ++n52)
          r(a52[n52], this, t52);
      }
      return true;
    }, o.prototype.addListener = function(e52, t52) {
      return v(this, e52, t52, false);
    }, o.prototype.on = o.prototype.addListener, o.prototype.prependListener = function(e52, t52) {
      return v(this, e52, t52, true);
    }, o.prototype.once = function(e52, t52) {
      return u(t52), this.on(e52, l(this, e52, t52)), this;
    }, o.prototype.prependOnceListener = function(e52, t52) {
      return u(t52), this.prependListener(e52, l(this, e52, t52)), this;
    }, o.prototype.removeListener = function(e52, t52) {
      var n52, r52, i52, o52, s52;
      if (u(t52), void 0 === (r52 = this._events))
        return this;
      if (void 0 === (n52 = r52[e52]))
        return this;
      if (n52 === t52 || n52.listener === t52)
        0 == --this._eventsCount ? this._events = /* @__PURE__ */ Object.create(null) : (delete r52[e52], r52.removeListener && this.emit("removeListener", e52, n52.listener || t52));
      else if ("function" != typeof n52) {
        for (i52 = -1, o52 = n52.length - 1; o52 >= 0; o52--)
          if (n52[o52] === t52 || n52[o52].listener === t52) {
            s52 = n52[o52].listener, i52 = o52;
            break;
          }
        if (i52 < 0)
          return this;
        0 === i52 ? n52.shift() : !function(e6, t6) {
          for (; t6 + 1 < e6.length; t6++)
            e6[t6] = e6[t6 + 1];
          e6.pop();
        }(n52, i52), 1 === n52.length && (r52[e52] = n52[0]), void 0 !== r52.removeListener && this.emit("removeListener", e52, s52 || t52);
      }
      return this;
    }, o.prototype.off = o.prototype.removeListener, o.prototype.removeAllListeners = function(e52) {
      var t52, n52, r52;
      if (void 0 === (n52 = this._events))
        return this;
      if (void 0 === n52.removeListener)
        return 0 === arguments.length ? (this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0) : void 0 !== n52[e52] && (0 == --this._eventsCount ? this._events = /* @__PURE__ */ Object.create(null) : delete n52[e52]), this;
      if (0 === arguments.length) {
        var i52, o52 = Object.keys(n52);
        for (r52 = 0; r52 < o52.length; ++r52)
          "removeListener" !== (i52 = o52[r52]) && this.removeAllListeners(i52);
        return this.removeAllListeners("removeListener"), this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0, this;
      }
      if ("function" == typeof (t52 = n52[e52]))
        this.removeListener(e52, t52);
      else if (void 0 !== t52)
        for (r52 = t52.length - 1; r52 >= 0; r52--)
          this.removeListener(e52, t52[r52]);
      return this;
    }, o.prototype.listeners = function(e52) {
      return h(this, e52, true);
    }, o.prototype.rawListeners = function(e52) {
      return h(this, e52, false);
    }, o.listenerCount = function(e52, t52) {
      return "function" == typeof e52.listenerCount ? e52.listenerCount(t52) : p.call(e52, t52);
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
            const p52 = Promise.reject(error);
            error = null;
            return p52;
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
    r2 = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : globalThis;
    o2 = e2 = {};
    !function() {
      try {
        t2 = "function" == typeof setTimeout ? setTimeout : i2;
      } catch (e52) {
        t2 = i2;
      }
      try {
        n2 = "function" == typeof clearTimeout ? clearTimeout : u2;
      } catch (e52) {
        n2 = u2;
      }
    }();
    s2 = [];
    f2 = false;
    a2 = -1;
    o2.nextTick = function(e52) {
      var t52 = new Array(arguments.length - 1);
      if (arguments.length > 1)
        for (var n52 = 1; n52 < arguments.length; n52++)
          t52[n52 - 1] = arguments[n52];
      s2.push(new m(e52, t52)), 1 !== s2.length || f2 || c2(d);
    }, m.prototype.run = function() {
      (this || r2).fun.apply(null, (this || r2).array);
    }, o2.title = "browser", o2.browser = true, o2.env = {}, o2.argv = [], o2.version = "", o2.versions = {}, o2.on = p2, o2.addListener = p2, o2.once = p2, o2.off = p2, o2.removeListener = p2, o2.removeAllListeners = p2, o2.emit = p2, o2.prependListener = p2, o2.prependOnceListener = p2, o2.listeners = function(e52) {
      return [];
    }, o2.binding = function(e52) {
      throw new Error("process.binding is not supported");
    }, o2.cwd = function() {
      return "/";
    }, o2.chdir = function(e52) {
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
    t3 = "function" == typeof Symbol && "symbol" == typeof Symbol.toStringTag;
    e3 = Object.prototype.toString;
    o3 = function(o52) {
      return !(t3 && o52 && "object" == typeof o52 && Symbol.toStringTag in o52) && "[object Arguments]" === e3.call(o52);
    };
    n3 = function(t52) {
      return !!o3(t52) || null !== t52 && "object" == typeof t52 && "number" == typeof t52.length && t52.length >= 0 && "[object Array]" !== e3.call(t52) && "[object Function]" === e3.call(t52.callee);
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
      } catch (t52) {
      }
    }();
    u3 = c3 ? r$1(c3) : {};
    i3 = function(c52) {
      return "function" == typeof c52 && (!!n$1.test(o$1.call(c52)) || (e$1 ? r$1(c52) === u3 : "[object GeneratorFunction]" === t$1.call(c52)));
    };
    t$2 = "function" == typeof Object.create ? function(t52, e52) {
      e52 && (t52.super_ = e52, t52.prototype = Object.create(e52.prototype, { constructor: { value: t52, enumerable: false, writable: true, configurable: true } }));
    } : function(t52, e52) {
      if (e52) {
        t52.super_ = e52;
        var o52 = function() {
        };
        o52.prototype = e52.prototype, t52.prototype = new o52(), t52.prototype.constructor = t52;
      }
    };
    i$1 = function(e52) {
      return e52 && "object" == typeof e52 && "function" == typeof e52.copy && "function" == typeof e52.fill && "function" == typeof e52.readUInt8;
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
    o$2.isArgumentsObject = f3, o$2.isGeneratorFunction = a3, o$2.isPromise = function(e52) {
      return "undefined" != typeof Promise && e52 instanceof Promise || null !== e52 && "object" == typeof e52 && "function" == typeof e52.then && "function" == typeof e52.catch;
    }, o$2.isArrayBufferView = function(e52) {
      return d2 && ArrayBuffer.isView ? ArrayBuffer.isView(e52) : S(e52) || R(e52);
    }, o$2.isTypedArray = S, o$2.isUint8Array = B, o$2.isUint8ClampedArray = k, o$2.isUint16Array = E, o$2.isUint32Array = D, o$2.isInt8Array = U, o$2.isInt16Array = P, o$2.isInt32Array = x, o$2.isFloat32Array = I, o$2.isFloat64Array = M, o$2.isBigInt64Array = z, o$2.isBigUint64Array = F, T2.working = "undefined" != typeof Map && T2(/* @__PURE__ */ new Map()), o$2.isMap = function(e52) {
      return "undefined" != typeof Map && (T2.working ? T2(e52) : e52 instanceof Map);
    }, N.working = "undefined" != typeof Set && N(/* @__PURE__ */ new Set()), o$2.isSet = function(e52) {
      return "undefined" != typeof Set && (N.working ? N(e52) : e52 instanceof Set);
    }, W.working = "undefined" != typeof WeakMap && W(/* @__PURE__ */ new WeakMap()), o$2.isWeakMap = function(e52) {
      return "undefined" != typeof WeakMap && (W.working ? W(e52) : e52 instanceof WeakMap);
    }, $.working = "undefined" != typeof WeakSet && $(/* @__PURE__ */ new WeakSet()), o$2.isWeakSet = function(e52) {
      return $(e52);
    }, C.working = "undefined" != typeof ArrayBuffer && C(new ArrayBuffer()), o$2.isArrayBuffer = V, G.working = "undefined" != typeof ArrayBuffer && "undefined" != typeof DataView && G(new DataView(new ArrayBuffer(1), 0, 1)), o$2.isDataView = R, J.working = "undefined" != typeof SharedArrayBuffer && J(new SharedArrayBuffer()), o$2.isSharedArrayBuffer = _, o$2.isAsyncFunction = function(e52) {
      return "[object AsyncFunction]" === m2(e52);
    }, o$2.isMapIterator = function(e52) {
      return "[object Map Iterator]" === m2(e52);
    }, o$2.isSetIterator = function(e52) {
      return "[object Set Iterator]" === m2(e52);
    }, o$2.isGeneratorObject = function(e52) {
      return "[object Generator]" === m2(e52);
    }, o$2.isWebAssemblyCompiledModule = function(e52) {
      return "[object WebAssembly.Module]" === m2(e52);
    }, o$2.isNumberObject = H, o$2.isStringObject = Z, o$2.isBooleanObject = q, o$2.isBigIntObject = K, o$2.isSymbolObject = L, o$2.isBoxedPrimitive = function(e52) {
      return H(e52) || Z(e52) || q(e52) || K(e52) || L(e52);
    }, o$2.isAnyArrayBuffer = function(e52) {
      return l$1 && (V(e52) || _(e52));
    }, ["isProxy", "isExternal", "isModuleNamespaceObject"].forEach(function(e52) {
      Object.defineProperty(o$2, e52, { enumerable: false, value: function() {
        throw new Error(e52 + " is not supported in userland");
      } });
    });
    Q = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : globalThis;
    X = {};
    Y = T;
    ee = Object.getOwnPropertyDescriptors || function(e52) {
      for (var t52 = Object.keys(e52), r52 = {}, n52 = 0; n52 < t52.length; n52++)
        r52[t52[n52]] = Object.getOwnPropertyDescriptor(e52, t52[n52]);
      return r52;
    };
    te = /%[sdj%]/g;
    X.format = function(e52) {
      if (!ge(e52)) {
        for (var t52 = [], r52 = 0; r52 < arguments.length; r52++)
          t52.push(oe(arguments[r52]));
        return t52.join(" ");
      }
      r52 = 1;
      for (var n52 = arguments, i52 = n52.length, o52 = String(e52).replace(te, function(e6) {
        if ("%%" === e6)
          return "%";
        if (r52 >= i52)
          return e6;
        switch (e6) {
          case "%s":
            return String(n52[r52++]);
          case "%d":
            return Number(n52[r52++]);
          case "%j":
            try {
              return JSON.stringify(n52[r52++]);
            } catch (e7) {
              return "[Circular]";
            }
          default:
            return e6;
        }
      }), u52 = n52[r52]; r52 < i52; u52 = n52[++r52])
        le(u52) || !he(u52) ? o52 += " " + u52 : o52 += " " + oe(u52);
      return o52;
    }, X.deprecate = function(e52, t52) {
      if (void 0 !== Y && true === Y.noDeprecation)
        return e52;
      if (void 0 === Y)
        return function() {
          return X.deprecate(e52, t52).apply(this || Q, arguments);
        };
      var r52 = false;
      return function() {
        if (!r52) {
          if (Y.throwDeprecation)
            throw new Error(t52);
          Y.traceDeprecation ? console.trace(t52) : console.error(t52), r52 = true;
        }
        return e52.apply(this || Q, arguments);
      };
    };
    re = {};
    ne = /^$/;
    if (Y.env.NODE_DEBUG) {
      ie = Y.env.NODE_DEBUG;
      ie = ie.replace(/[|\\{}()[\]^$+?.]/g, "\\$&").replace(/\*/g, ".*").replace(/,/g, "$|^").toUpperCase(), ne = new RegExp("^" + ie + "$", "i");
    }
    X.debuglog = function(e52) {
      if (e52 = e52.toUpperCase(), !re[e52])
        if (ne.test(e52)) {
          var t52 = Y.pid;
          re[e52] = function() {
            var r52 = X.format.apply(X, arguments);
            console.error("%s %d: %s", e52, t52, r52);
          };
        } else
          re[e52] = function() {
          };
      return re[e52];
    }, X.inspect = oe, oe.colors = { bold: [1, 22], italic: [3, 23], underline: [4, 24], inverse: [7, 27], white: [37, 39], grey: [90, 39], black: [30, 39], blue: [34, 39], cyan: [36, 39], green: [32, 39], magenta: [35, 39], red: [31, 39], yellow: [33, 39] }, oe.styles = { special: "cyan", number: "yellow", boolean: "yellow", undefined: "grey", null: "bold", string: "green", date: "magenta", regexp: "red" }, X.types = o$2, X.isArray = pe, X.isBoolean = ye, X.isNull = le, X.isNullOrUndefined = function(e52) {
      return null == e52;
    }, X.isNumber = de, X.isString = ge, X.isSymbol = function(e52) {
      return "symbol" == typeof e52;
    }, X.isUndefined = be, X.isRegExp = me, X.types.isRegExp = me, X.isObject = he, X.isDate = je, X.types.isDate = je, X.isError = Ae, X.types.isNativeError = Ae, X.isFunction = we, X.isPrimitive = function(e52) {
      return null === e52 || "boolean" == typeof e52 || "number" == typeof e52 || "string" == typeof e52 || "symbol" == typeof e52 || void 0 === e52;
    }, X.isBuffer = i$1;
    Se = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    X.log = function() {
      console.log("%s - %s", Be(), X.format.apply(X, arguments));
    }, X.inherits = t$2, X._extend = function(e52, t52) {
      if (!t52 || !he(t52))
        return e52;
      for (var r52 = Object.keys(t52), n52 = r52.length; n52--; )
        e52[r52[n52]] = t52[r52[n52]];
      return e52;
    };
    Ee = "undefined" != typeof Symbol ? Symbol("util.promisify.custom") : void 0;
    X.promisify = function(e52) {
      if ("function" != typeof e52)
        throw new TypeError('The "original" argument must be of type Function');
      if (Ee && e52[Ee]) {
        var t52;
        if ("function" != typeof (t52 = e52[Ee]))
          throw new TypeError('The "util.promisify.custom" argument must be of type Function');
        return Object.defineProperty(t52, Ee, { value: t52, enumerable: false, writable: false, configurable: true }), t52;
      }
      function t52() {
        for (var t6, r52, n52 = new Promise(function(e6, n6) {
          t6 = e6, r52 = n6;
        }), i52 = [], o52 = 0; o52 < arguments.length; o52++)
          i52.push(arguments[o52]);
        i52.push(function(e6, n6) {
          e6 ? r52(e6) : t6(n6);
        });
        try {
          e52.apply(this || Q, i52);
        } catch (e6) {
          r52(e6);
        }
        return n52;
      }
      return Object.setPrototypeOf(t52, Object.getPrototypeOf(e52)), Ee && Object.defineProperty(t52, Ee, { value: t52, enumerable: false, writable: false, configurable: true }), Object.defineProperties(t52, ee(e52));
    }, X.promisify.custom = Ee, X.callbackify = function(e52) {
      if ("function" != typeof e52)
        throw new TypeError('The "original" argument must be of type Function');
      function t52() {
        for (var t6 = [], r52 = 0; r52 < arguments.length; r52++)
          t6.push(arguments[r52]);
        var n52 = t6.pop();
        if ("function" != typeof n52)
          throw new TypeError("The last argument must be of type Function");
        var i52 = this || Q, o52 = function() {
          return n52.apply(i52, arguments);
        };
        e52.apply(this || Q, t6).then(function(e6) {
          Y.nextTick(o52.bind(null, null, e6));
        }, function(e6) {
          Y.nextTick(De.bind(null, e6, o52));
        });
      }
      return Object.setPrototypeOf(t52, Object.getPrototypeOf(e52)), Object.defineProperties(t52, ee(e52)), t52;
    };
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
    for (r$12 = { byteLength: function(r52) {
      var t52 = u$2(r52), e52 = t52[0], n52 = t52[1];
      return 3 * (e52 + n52) / 4 - n52;
    }, toByteArray: function(r52) {
      var t52, o52, a52 = u$2(r52), h52 = a52[0], c52 = a52[1], d42 = new n$2(function(r6, t6, e52) {
        return 3 * (t6 + e52) / 4 - e52;
      }(0, h52, c52)), f52 = 0, A32 = c52 > 0 ? h52 - 4 : h52;
      for (o52 = 0; o52 < A32; o52 += 4)
        t52 = e$2[r52.charCodeAt(o52)] << 18 | e$2[r52.charCodeAt(o52 + 1)] << 12 | e$2[r52.charCodeAt(o52 + 2)] << 6 | e$2[r52.charCodeAt(o52 + 3)], d42[f52++] = t52 >> 16 & 255, d42[f52++] = t52 >> 8 & 255, d42[f52++] = 255 & t52;
      2 === c52 && (t52 = e$2[r52.charCodeAt(o52)] << 2 | e$2[r52.charCodeAt(o52 + 1)] >> 4, d42[f52++] = 255 & t52);
      1 === c52 && (t52 = e$2[r52.charCodeAt(o52)] << 10 | e$2[r52.charCodeAt(o52 + 1)] << 4 | e$2[r52.charCodeAt(o52 + 2)] >> 2, d42[f52++] = t52 >> 8 & 255, d42[f52++] = 255 & t52);
      return d42;
    }, fromByteArray: function(r52) {
      for (var e52, n52 = r52.length, o52 = n52 % 3, a52 = [], h52 = 0, u52 = n52 - o52; h52 < u52; h52 += 16383)
        a52.push(c$12(r52, h52, h52 + 16383 > u52 ? u52 : h52 + 16383));
      1 === o52 ? (e52 = r52[n52 - 1], a52.push(t$12[e52 >> 2] + t$12[e52 << 4 & 63] + "==")) : 2 === o52 && (e52 = (r52[n52 - 2] << 8) + r52[n52 - 1], a52.push(t$12[e52 >> 10] + t$12[e52 >> 4 & 63] + t$12[e52 << 2 & 63] + "="));
      return a52.join("");
    } }, t$12 = [], e$2 = [], n$2 = "undefined" != typeof Uint8Array ? Uint8Array : Array, o$22 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", a$1 = 0, h$1 = o$22.length; a$1 < h$1; ++a$1)
      t$12[a$1] = o$22[a$1], e$2[o$22.charCodeAt(a$1)] = a$1;
    e$2["-".charCodeAt(0)] = 62, e$2["_".charCodeAt(0)] = 63;
    a$1$1 = { read: function(a52, t52, o52, r52, h52) {
      var M32, f52, p52 = 8 * h52 - r52 - 1, w32 = (1 << p52) - 1, e52 = w32 >> 1, i52 = -7, N32 = o52 ? h52 - 1 : 0, n52 = o52 ? -1 : 1, u52 = a52[t52 + N32];
      for (N32 += n52, M32 = u52 & (1 << -i52) - 1, u52 >>= -i52, i52 += p52; i52 > 0; M32 = 256 * M32 + a52[t52 + N32], N32 += n52, i52 -= 8)
        ;
      for (f52 = M32 & (1 << -i52) - 1, M32 >>= -i52, i52 += r52; i52 > 0; f52 = 256 * f52 + a52[t52 + N32], N32 += n52, i52 -= 8)
        ;
      if (0 === M32)
        M32 = 1 - e52;
      else {
        if (M32 === w32)
          return f52 ? NaN : 1 / 0 * (u52 ? -1 : 1);
        f52 += Math.pow(2, r52), M32 -= e52;
      }
      return (u52 ? -1 : 1) * f52 * Math.pow(2, M32 - r52);
    }, write: function(a52, t52, o52, r52, h52, M32) {
      var f52, p52, w32, e52 = 8 * M32 - h52 - 1, i52 = (1 << e52) - 1, N32 = i52 >> 1, n52 = 23 === h52 ? Math.pow(2, -24) - Math.pow(2, -77) : 0, u52 = r52 ? 0 : M32 - 1, l52 = r52 ? 1 : -1, s52 = t52 < 0 || 0 === t52 && 1 / t52 < 0 ? 1 : 0;
      for (t52 = Math.abs(t52), isNaN(t52) || t52 === 1 / 0 ? (p52 = isNaN(t52) ? 1 : 0, f52 = i52) : (f52 = Math.floor(Math.log(t52) / Math.LN2), t52 * (w32 = Math.pow(2, -f52)) < 1 && (f52--, w32 *= 2), (t52 += f52 + N32 >= 1 ? n52 / w32 : n52 * Math.pow(2, 1 - N32)) * w32 >= 2 && (f52++, w32 /= 2), f52 + N32 >= i52 ? (p52 = 0, f52 = i52) : f52 + N32 >= 1 ? (p52 = (t52 * w32 - 1) * Math.pow(2, h52), f52 += N32) : (p52 = t52 * Math.pow(2, N32 - 1) * Math.pow(2, h52), f52 = 0)); h52 >= 8; a52[o52 + u52] = 255 & p52, u52 += l52, p52 /= 256, h52 -= 8)
        ;
      for (f52 = f52 << h52 | p52, e52 += h52; e52 > 0; a52[o52 + u52] = 255 & f52, u52 += l52, f52 /= 256, e52 -= 8)
        ;
      a52[o52 + u52 - l52] |= 128 * s52;
    } };
    e$1$1 = {};
    n$1$1 = r$12;
    i$12 = a$1$1;
    o$1$1 = "function" == typeof Symbol && "function" == typeof Symbol.for ? Symbol.for("nodejs.util.inspect.custom") : null;
    e$1$1.Buffer = u$1$1, e$1$1.SlowBuffer = function(t52) {
      +t52 != t52 && (t52 = 0);
      return u$1$1.alloc(+t52);
    }, e$1$1.INSPECT_MAX_BYTES = 50;
    e$1$1.kMaxLength = 2147483647, u$1$1.TYPED_ARRAY_SUPPORT = function() {
      try {
        var t52 = new Uint8Array(1), r52 = { foo: function() {
          return 42;
        } };
        return Object.setPrototypeOf(r52, Uint8Array.prototype), Object.setPrototypeOf(t52, r52), 42 === t52.foo();
      } catch (t6) {
        return false;
      }
    }(), u$1$1.TYPED_ARRAY_SUPPORT || "undefined" == typeof console || "function" != typeof console.error || console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."), Object.defineProperty(u$1$1.prototype, "parent", { enumerable: true, get: function() {
      if (u$1$1.isBuffer(this))
        return this.buffer;
    } }), Object.defineProperty(u$1$1.prototype, "offset", { enumerable: true, get: function() {
      if (u$1$1.isBuffer(this))
        return this.byteOffset;
    } }), u$1$1.poolSize = 8192, u$1$1.from = function(t52, r52, e52) {
      return s$1(t52, r52, e52);
    }, Object.setPrototypeOf(u$1$1.prototype, Uint8Array.prototype), Object.setPrototypeOf(u$1$1, Uint8Array), u$1$1.alloc = function(t52, r52, e52) {
      return function(t6, r6, e6) {
        return h$1$1(t6), t6 <= 0 ? f$2(t6) : void 0 !== r6 ? "string" == typeof e6 ? f$2(t6).fill(r6, e6) : f$2(t6).fill(r6) : f$2(t6);
      }(t52, r52, e52);
    }, u$1$1.allocUnsafe = function(t52) {
      return a$2(t52);
    }, u$1$1.allocUnsafeSlow = function(t52) {
      return a$2(t52);
    }, u$1$1.isBuffer = function(t52) {
      return null != t52 && true === t52._isBuffer && t52 !== u$1$1.prototype;
    }, u$1$1.compare = function(t52, r52) {
      if (F2(t52, Uint8Array) && (t52 = u$1$1.from(t52, t52.offset, t52.byteLength)), F2(r52, Uint8Array) && (r52 = u$1$1.from(r52, r52.offset, r52.byteLength)), !u$1$1.isBuffer(t52) || !u$1$1.isBuffer(r52))
        throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');
      if (t52 === r52)
        return 0;
      for (var e52 = t52.length, n52 = r52.length, i52 = 0, o52 = Math.min(e52, n52); i52 < o52; ++i52)
        if (t52[i52] !== r52[i52]) {
          e52 = t52[i52], n52 = r52[i52];
          break;
        }
      return e52 < n52 ? -1 : n52 < e52 ? 1 : 0;
    }, u$1$1.isEncoding = function(t52) {
      switch (String(t52).toLowerCase()) {
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
    }, u$1$1.concat = function(t52, r52) {
      if (!Array.isArray(t52))
        throw new TypeError('"list" argument must be an Array of Buffers');
      if (0 === t52.length)
        return u$1$1.alloc(0);
      var e52;
      if (void 0 === r52)
        for (r52 = 0, e52 = 0; e52 < t52.length; ++e52)
          r52 += t52[e52].length;
      var n52 = u$1$1.allocUnsafe(r52), i52 = 0;
      for (e52 = 0; e52 < t52.length; ++e52) {
        var o52 = t52[e52];
        if (F2(o52, Uint8Array) && (o52 = u$1$1.from(o52)), !u$1$1.isBuffer(o52))
          throw new TypeError('"list" argument must be an Array of Buffers');
        o52.copy(n52, i52), i52 += o52.length;
      }
      return n52;
    }, u$1$1.byteLength = y3, u$1$1.prototype._isBuffer = true, u$1$1.prototype.swap16 = function() {
      var t52 = this.length;
      if (t52 % 2 != 0)
        throw new RangeError("Buffer size must be a multiple of 16-bits");
      for (var r52 = 0; r52 < t52; r52 += 2)
        w2(this, r52, r52 + 1);
      return this;
    }, u$1$1.prototype.swap32 = function() {
      var t52 = this.length;
      if (t52 % 4 != 0)
        throw new RangeError("Buffer size must be a multiple of 32-bits");
      for (var r52 = 0; r52 < t52; r52 += 4)
        w2(this, r52, r52 + 3), w2(this, r52 + 1, r52 + 2);
      return this;
    }, u$1$1.prototype.swap64 = function() {
      var t52 = this.length;
      if (t52 % 8 != 0)
        throw new RangeError("Buffer size must be a multiple of 64-bits");
      for (var r52 = 0; r52 < t52; r52 += 8)
        w2(this, r52, r52 + 7), w2(this, r52 + 1, r52 + 6), w2(this, r52 + 2, r52 + 5), w2(this, r52 + 3, r52 + 4);
      return this;
    }, u$1$1.prototype.toString = function() {
      var t52 = this.length;
      return 0 === t52 ? "" : 0 === arguments.length ? I2(this, 0, t52) : g2.apply(this, arguments);
    }, u$1$1.prototype.toLocaleString = u$1$1.prototype.toString, u$1$1.prototype.equals = function(t52) {
      if (!u$1$1.isBuffer(t52))
        throw new TypeError("Argument must be a Buffer");
      return this === t52 || 0 === u$1$1.compare(this, t52);
    }, u$1$1.prototype.inspect = function() {
      var t52 = "", r52 = e$1$1.INSPECT_MAX_BYTES;
      return t52 = this.toString("hex", 0, r52).replace(/(.{2})/g, "$1 ").trim(), this.length > r52 && (t52 += " ... "), "<Buffer " + t52 + ">";
    }, o$1$1 && (u$1$1.prototype[o$1$1] = u$1$1.prototype.inspect), u$1$1.prototype.compare = function(t52, r52, e52, n52, i52) {
      if (F2(t52, Uint8Array) && (t52 = u$1$1.from(t52, t52.offset, t52.byteLength)), !u$1$1.isBuffer(t52))
        throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof t52);
      if (void 0 === r52 && (r52 = 0), void 0 === e52 && (e52 = t52 ? t52.length : 0), void 0 === n52 && (n52 = 0), void 0 === i52 && (i52 = this.length), r52 < 0 || e52 > t52.length || n52 < 0 || i52 > this.length)
        throw new RangeError("out of range index");
      if (n52 >= i52 && r52 >= e52)
        return 0;
      if (n52 >= i52)
        return -1;
      if (r52 >= e52)
        return 1;
      if (this === t52)
        return 0;
      for (var o52 = (i52 >>>= 0) - (n52 >>>= 0), f52 = (e52 >>>= 0) - (r52 >>>= 0), s52 = Math.min(o52, f52), h52 = this.slice(n52, i52), a52 = t52.slice(r52, e52), p52 = 0; p52 < s52; ++p52)
        if (h52[p52] !== a52[p52]) {
          o52 = h52[p52], f52 = a52[p52];
          break;
        }
      return o52 < f52 ? -1 : f52 < o52 ? 1 : 0;
    }, u$1$1.prototype.includes = function(t52, r52, e52) {
      return -1 !== this.indexOf(t52, r52, e52);
    }, u$1$1.prototype.indexOf = function(t52, r52, e52) {
      return d3(this, t52, r52, e52, true);
    }, u$1$1.prototype.lastIndexOf = function(t52, r52, e52) {
      return d3(this, t52, r52, e52, false);
    }, u$1$1.prototype.write = function(t52, r52, e52, n52) {
      if (void 0 === r52)
        n52 = "utf8", e52 = this.length, r52 = 0;
      else if (void 0 === e52 && "string" == typeof r52)
        n52 = r52, e52 = this.length, r52 = 0;
      else {
        if (!isFinite(r52))
          throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
        r52 >>>= 0, isFinite(e52) ? (e52 >>>= 0, void 0 === n52 && (n52 = "utf8")) : (n52 = e52, e52 = void 0);
      }
      var i52 = this.length - r52;
      if ((void 0 === e52 || e52 > i52) && (e52 = i52), t52.length > 0 && (e52 < 0 || r52 < 0) || r52 > this.length)
        throw new RangeError("Attempt to write outside buffer bounds");
      n52 || (n52 = "utf8");
      for (var o52 = false; ; )
        switch (n52) {
          case "hex":
            return b2(this, t52, r52, e52);
          case "utf8":
          case "utf-8":
            return m3(this, t52, r52, e52);
          case "ascii":
            return E2(this, t52, r52, e52);
          case "latin1":
          case "binary":
            return B2(this, t52, r52, e52);
          case "base64":
            return A2(this, t52, r52, e52);
          case "ucs2":
          case "ucs-2":
          case "utf16le":
          case "utf-16le":
            return U2(this, t52, r52, e52);
          default:
            if (o52)
              throw new TypeError("Unknown encoding: " + n52);
            n52 = ("" + n52).toLowerCase(), o52 = true;
        }
    }, u$1$1.prototype.toJSON = function() {
      return { type: "Buffer", data: Array.prototype.slice.call(this._arr || this, 0) };
    };
    u$1$1.prototype.slice = function(t52, r52) {
      var e52 = this.length;
      (t52 = ~~t52) < 0 ? (t52 += e52) < 0 && (t52 = 0) : t52 > e52 && (t52 = e52), (r52 = void 0 === r52 ? e52 : ~~r52) < 0 ? (r52 += e52) < 0 && (r52 = 0) : r52 > e52 && (r52 = e52), r52 < t52 && (r52 = t52);
      var n52 = this.subarray(t52, r52);
      return Object.setPrototypeOf(n52, u$1$1.prototype), n52;
    }, u$1$1.prototype.readUIntLE = function(t52, r52, e52) {
      t52 >>>= 0, r52 >>>= 0, e52 || x2(t52, r52, this.length);
      for (var n52 = this[t52], i52 = 1, o52 = 0; ++o52 < r52 && (i52 *= 256); )
        n52 += this[t52 + o52] * i52;
      return n52;
    }, u$1$1.prototype.readUIntBE = function(t52, r52, e52) {
      t52 >>>= 0, r52 >>>= 0, e52 || x2(t52, r52, this.length);
      for (var n52 = this[t52 + --r52], i52 = 1; r52 > 0 && (i52 *= 256); )
        n52 += this[t52 + --r52] * i52;
      return n52;
    }, u$1$1.prototype.readUInt8 = function(t52, r52) {
      return t52 >>>= 0, r52 || x2(t52, 1, this.length), this[t52];
    }, u$1$1.prototype.readUInt16LE = function(t52, r52) {
      return t52 >>>= 0, r52 || x2(t52, 2, this.length), this[t52] | this[t52 + 1] << 8;
    }, u$1$1.prototype.readUInt16BE = function(t52, r52) {
      return t52 >>>= 0, r52 || x2(t52, 2, this.length), this[t52] << 8 | this[t52 + 1];
    }, u$1$1.prototype.readUInt32LE = function(t52, r52) {
      return t52 >>>= 0, r52 || x2(t52, 4, this.length), (this[t52] | this[t52 + 1] << 8 | this[t52 + 2] << 16) + 16777216 * this[t52 + 3];
    }, u$1$1.prototype.readUInt32BE = function(t52, r52) {
      return t52 >>>= 0, r52 || x2(t52, 4, this.length), 16777216 * this[t52] + (this[t52 + 1] << 16 | this[t52 + 2] << 8 | this[t52 + 3]);
    }, u$1$1.prototype.readIntLE = function(t52, r52, e52) {
      t52 >>>= 0, r52 >>>= 0, e52 || x2(t52, r52, this.length);
      for (var n52 = this[t52], i52 = 1, o52 = 0; ++o52 < r52 && (i52 *= 256); )
        n52 += this[t52 + o52] * i52;
      return n52 >= (i52 *= 128) && (n52 -= Math.pow(2, 8 * r52)), n52;
    }, u$1$1.prototype.readIntBE = function(t52, r52, e52) {
      t52 >>>= 0, r52 >>>= 0, e52 || x2(t52, r52, this.length);
      for (var n52 = r52, i52 = 1, o52 = this[t52 + --n52]; n52 > 0 && (i52 *= 256); )
        o52 += this[t52 + --n52] * i52;
      return o52 >= (i52 *= 128) && (o52 -= Math.pow(2, 8 * r52)), o52;
    }, u$1$1.prototype.readInt8 = function(t52, r52) {
      return t52 >>>= 0, r52 || x2(t52, 1, this.length), 128 & this[t52] ? -1 * (255 - this[t52] + 1) : this[t52];
    }, u$1$1.prototype.readInt16LE = function(t52, r52) {
      t52 >>>= 0, r52 || x2(t52, 2, this.length);
      var e52 = this[t52] | this[t52 + 1] << 8;
      return 32768 & e52 ? 4294901760 | e52 : e52;
    }, u$1$1.prototype.readInt16BE = function(t52, r52) {
      t52 >>>= 0, r52 || x2(t52, 2, this.length);
      var e52 = this[t52 + 1] | this[t52] << 8;
      return 32768 & e52 ? 4294901760 | e52 : e52;
    }, u$1$1.prototype.readInt32LE = function(t52, r52) {
      return t52 >>>= 0, r52 || x2(t52, 4, this.length), this[t52] | this[t52 + 1] << 8 | this[t52 + 2] << 16 | this[t52 + 3] << 24;
    }, u$1$1.prototype.readInt32BE = function(t52, r52) {
      return t52 >>>= 0, r52 || x2(t52, 4, this.length), this[t52] << 24 | this[t52 + 1] << 16 | this[t52 + 2] << 8 | this[t52 + 3];
    }, u$1$1.prototype.readFloatLE = function(t52, r52) {
      return t52 >>>= 0, r52 || x2(t52, 4, this.length), i$12.read(this, t52, true, 23, 4);
    }, u$1$1.prototype.readFloatBE = function(t52, r52) {
      return t52 >>>= 0, r52 || x2(t52, 4, this.length), i$12.read(this, t52, false, 23, 4);
    }, u$1$1.prototype.readDoubleLE = function(t52, r52) {
      return t52 >>>= 0, r52 || x2(t52, 8, this.length), i$12.read(this, t52, true, 52, 8);
    }, u$1$1.prototype.readDoubleBE = function(t52, r52) {
      return t52 >>>= 0, r52 || x2(t52, 8, this.length), i$12.read(this, t52, false, 52, 8);
    }, u$1$1.prototype.writeUIntLE = function(t52, r52, e52, n52) {
      (t52 = +t52, r52 >>>= 0, e52 >>>= 0, n52) || C2(this, t52, r52, e52, Math.pow(2, 8 * e52) - 1, 0);
      var i52 = 1, o52 = 0;
      for (this[r52] = 255 & t52; ++o52 < e52 && (i52 *= 256); )
        this[r52 + o52] = t52 / i52 & 255;
      return r52 + e52;
    }, u$1$1.prototype.writeUIntBE = function(t52, r52, e52, n52) {
      (t52 = +t52, r52 >>>= 0, e52 >>>= 0, n52) || C2(this, t52, r52, e52, Math.pow(2, 8 * e52) - 1, 0);
      var i52 = e52 - 1, o52 = 1;
      for (this[r52 + i52] = 255 & t52; --i52 >= 0 && (o52 *= 256); )
        this[r52 + i52] = t52 / o52 & 255;
      return r52 + e52;
    }, u$1$1.prototype.writeUInt8 = function(t52, r52, e52) {
      return t52 = +t52, r52 >>>= 0, e52 || C2(this, t52, r52, 1, 255, 0), this[r52] = 255 & t52, r52 + 1;
    }, u$1$1.prototype.writeUInt16LE = function(t52, r52, e52) {
      return t52 = +t52, r52 >>>= 0, e52 || C2(this, t52, r52, 2, 65535, 0), this[r52] = 255 & t52, this[r52 + 1] = t52 >>> 8, r52 + 2;
    }, u$1$1.prototype.writeUInt16BE = function(t52, r52, e52) {
      return t52 = +t52, r52 >>>= 0, e52 || C2(this, t52, r52, 2, 65535, 0), this[r52] = t52 >>> 8, this[r52 + 1] = 255 & t52, r52 + 2;
    }, u$1$1.prototype.writeUInt32LE = function(t52, r52, e52) {
      return t52 = +t52, r52 >>>= 0, e52 || C2(this, t52, r52, 4, 4294967295, 0), this[r52 + 3] = t52 >>> 24, this[r52 + 2] = t52 >>> 16, this[r52 + 1] = t52 >>> 8, this[r52] = 255 & t52, r52 + 4;
    }, u$1$1.prototype.writeUInt32BE = function(t52, r52, e52) {
      return t52 = +t52, r52 >>>= 0, e52 || C2(this, t52, r52, 4, 4294967295, 0), this[r52] = t52 >>> 24, this[r52 + 1] = t52 >>> 16, this[r52 + 2] = t52 >>> 8, this[r52 + 3] = 255 & t52, r52 + 4;
    }, u$1$1.prototype.writeIntLE = function(t52, r52, e52, n52) {
      if (t52 = +t52, r52 >>>= 0, !n52) {
        var i52 = Math.pow(2, 8 * e52 - 1);
        C2(this, t52, r52, e52, i52 - 1, -i52);
      }
      var o52 = 0, f52 = 1, u52 = 0;
      for (this[r52] = 255 & t52; ++o52 < e52 && (f52 *= 256); )
        t52 < 0 && 0 === u52 && 0 !== this[r52 + o52 - 1] && (u52 = 1), this[r52 + o52] = (t52 / f52 >> 0) - u52 & 255;
      return r52 + e52;
    }, u$1$1.prototype.writeIntBE = function(t52, r52, e52, n52) {
      if (t52 = +t52, r52 >>>= 0, !n52) {
        var i52 = Math.pow(2, 8 * e52 - 1);
        C2(this, t52, r52, e52, i52 - 1, -i52);
      }
      var o52 = e52 - 1, f52 = 1, u52 = 0;
      for (this[r52 + o52] = 255 & t52; --o52 >= 0 && (f52 *= 256); )
        t52 < 0 && 0 === u52 && 0 !== this[r52 + o52 + 1] && (u52 = 1), this[r52 + o52] = (t52 / f52 >> 0) - u52 & 255;
      return r52 + e52;
    }, u$1$1.prototype.writeInt8 = function(t52, r52, e52) {
      return t52 = +t52, r52 >>>= 0, e52 || C2(this, t52, r52, 1, 127, -128), t52 < 0 && (t52 = 255 + t52 + 1), this[r52] = 255 & t52, r52 + 1;
    }, u$1$1.prototype.writeInt16LE = function(t52, r52, e52) {
      return t52 = +t52, r52 >>>= 0, e52 || C2(this, t52, r52, 2, 32767, -32768), this[r52] = 255 & t52, this[r52 + 1] = t52 >>> 8, r52 + 2;
    }, u$1$1.prototype.writeInt16BE = function(t52, r52, e52) {
      return t52 = +t52, r52 >>>= 0, e52 || C2(this, t52, r52, 2, 32767, -32768), this[r52] = t52 >>> 8, this[r52 + 1] = 255 & t52, r52 + 2;
    }, u$1$1.prototype.writeInt32LE = function(t52, r52, e52) {
      return t52 = +t52, r52 >>>= 0, e52 || C2(this, t52, r52, 4, 2147483647, -2147483648), this[r52] = 255 & t52, this[r52 + 1] = t52 >>> 8, this[r52 + 2] = t52 >>> 16, this[r52 + 3] = t52 >>> 24, r52 + 4;
    }, u$1$1.prototype.writeInt32BE = function(t52, r52, e52) {
      return t52 = +t52, r52 >>>= 0, e52 || C2(this, t52, r52, 4, 2147483647, -2147483648), t52 < 0 && (t52 = 4294967295 + t52 + 1), this[r52] = t52 >>> 24, this[r52 + 1] = t52 >>> 16, this[r52 + 2] = t52 >>> 8, this[r52 + 3] = 255 & t52, r52 + 4;
    }, u$1$1.prototype.writeFloatLE = function(t52, r52, e52) {
      return k2(this, t52, r52, true, e52);
    }, u$1$1.prototype.writeFloatBE = function(t52, r52, e52) {
      return k2(this, t52, r52, false, e52);
    }, u$1$1.prototype.writeDoubleLE = function(t52, r52, e52) {
      return M2(this, t52, r52, true, e52);
    }, u$1$1.prototype.writeDoubleBE = function(t52, r52, e52) {
      return M2(this, t52, r52, false, e52);
    }, u$1$1.prototype.copy = function(t52, r52, e52, n52) {
      if (!u$1$1.isBuffer(t52))
        throw new TypeError("argument should be a Buffer");
      if (e52 || (e52 = 0), n52 || 0 === n52 || (n52 = this.length), r52 >= t52.length && (r52 = t52.length), r52 || (r52 = 0), n52 > 0 && n52 < e52 && (n52 = e52), n52 === e52)
        return 0;
      if (0 === t52.length || 0 === this.length)
        return 0;
      if (r52 < 0)
        throw new RangeError("targetStart out of bounds");
      if (e52 < 0 || e52 >= this.length)
        throw new RangeError("Index out of range");
      if (n52 < 0)
        throw new RangeError("sourceEnd out of bounds");
      n52 > this.length && (n52 = this.length), t52.length - r52 < n52 - e52 && (n52 = t52.length - r52 + e52);
      var i52 = n52 - e52;
      if (this === t52 && "function" == typeof Uint8Array.prototype.copyWithin)
        this.copyWithin(r52, e52, n52);
      else if (this === t52 && e52 < r52 && r52 < n52)
        for (var o52 = i52 - 1; o52 >= 0; --o52)
          t52[o52 + r52] = this[o52 + e52];
      else
        Uint8Array.prototype.set.call(t52, this.subarray(e52, n52), r52);
      return i52;
    }, u$1$1.prototype.fill = function(t52, r52, e52, n52) {
      if ("string" == typeof t52) {
        if ("string" == typeof r52 ? (n52 = r52, r52 = 0, e52 = this.length) : "string" == typeof e52 && (n52 = e52, e52 = this.length), void 0 !== n52 && "string" != typeof n52)
          throw new TypeError("encoding must be a string");
        if ("string" == typeof n52 && !u$1$1.isEncoding(n52))
          throw new TypeError("Unknown encoding: " + n52);
        if (1 === t52.length) {
          var i52 = t52.charCodeAt(0);
          ("utf8" === n52 && i52 < 128 || "latin1" === n52) && (t52 = i52);
        }
      } else
        "number" == typeof t52 ? t52 &= 255 : "boolean" == typeof t52 && (t52 = Number(t52));
      if (r52 < 0 || this.length < r52 || this.length < e52)
        throw new RangeError("Out of range index");
      if (e52 <= r52)
        return this;
      var o52;
      if (r52 >>>= 0, e52 = void 0 === e52 ? this.length : e52 >>> 0, t52 || (t52 = 0), "number" == typeof t52)
        for (o52 = r52; o52 < e52; ++o52)
          this[o52] = t52;
      else {
        var f52 = u$1$1.isBuffer(t52) ? t52 : u$1$1.from(t52, n52), s52 = f52.length;
        if (0 === s52)
          throw new TypeError('The value "' + t52 + '" is invalid for argument "value"');
        for (o52 = 0; o52 < e52 - r52; ++o52)
          this[o52 + r52] = f52[o52 % s52];
      }
      return this;
    };
    j2 = /[^+/0-9A-Za-z-_]/g;
    Y2 = function() {
      for (var t52 = new Array(256), r52 = 0; r52 < 16; ++r52)
        for (var e52 = 16 * r52, n52 = 0; n52 < 16; ++n52)
          t52[e52 + n52] = "0123456789abcdef"[r52] + "0123456789abcdef"[n52];
      return t52;
    }();
    e$1$1.Buffer;
    e$1$1.INSPECT_MAX_BYTES;
    e$1$1.kMaxLength;
    e4 = {};
    n4 = e$1$1;
    o4 = n4.Buffer;
    o4.from && o4.alloc && o4.allocUnsafe && o4.allocUnsafeSlow ? e4 = n4 : (t4(n4, e4), e4.Buffer = f4), f4.prototype = Object.create(o4.prototype), t4(o4, f4), f4.from = function(r52, e52, n52) {
      if ("number" == typeof r52)
        throw new TypeError("Argument must not be a number");
      return o4(r52, e52, n52);
    }, f4.alloc = function(r52, e52, n52) {
      if ("number" != typeof r52)
        throw new TypeError("Argument must be a number");
      var t52 = o4(r52);
      return void 0 !== e52 ? "string" == typeof n52 ? t52.fill(e52, n52) : t52.fill(e52) : t52.fill(0), t52;
    }, f4.allocUnsafe = function(r52) {
      if ("number" != typeof r52)
        throw new TypeError("Argument must be a number");
      return o4(r52);
    }, f4.allocUnsafeSlow = function(r52) {
      if ("number" != typeof r52)
        throw new TypeError("Argument must be a number");
      return n4.SlowBuffer(r52);
    };
    u4 = e4;
    e$12 = {};
    s4 = u4.Buffer;
    i4 = s4.isEncoding || function(t52) {
      switch ((t52 = "" + t52) && t52.toLowerCase()) {
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
    e$12.StringDecoder = a4, a4.prototype.write = function(t52) {
      if (0 === t52.length)
        return "";
      var e52, s52;
      if (this.lastNeed) {
        if (void 0 === (e52 = this.fillLast(t52)))
          return "";
        s52 = this.lastNeed, this.lastNeed = 0;
      } else
        s52 = 0;
      return s52 < t52.length ? e52 ? e52 + this.text(t52, s52) : this.text(t52, s52) : e52 || "";
    }, a4.prototype.end = function(t52) {
      var e52 = t52 && t52.length ? this.write(t52) : "";
      return this.lastNeed ? e52 + "\uFFFD" : e52;
    }, a4.prototype.text = function(t52, e52) {
      var s52 = function(t6, e6, s6) {
        var i6 = e6.length - 1;
        if (i6 < s6)
          return 0;
        var a52 = r4(e6[i6]);
        if (a52 >= 0)
          return a52 > 0 && (t6.lastNeed = a52 - 1), a52;
        if (--i6 < s6 || -2 === a52)
          return 0;
        if ((a52 = r4(e6[i6])) >= 0)
          return a52 > 0 && (t6.lastNeed = a52 - 2), a52;
        if (--i6 < s6 || -2 === a52)
          return 0;
        if ((a52 = r4(e6[i6])) >= 0)
          return a52 > 0 && (2 === a52 ? a52 = 0 : t6.lastNeed = a52 - 3), a52;
        return 0;
      }(this, t52, e52);
      if (!this.lastNeed)
        return t52.toString("utf8", e52);
      this.lastTotal = s52;
      var i52 = t52.length - (s52 - this.lastNeed);
      return t52.copy(this.lastChar, 0, i52), t52.toString("utf8", e52, i52);
    }, a4.prototype.fillLast = function(t52) {
      if (this.lastNeed <= t52.length)
        return t52.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, this.lastNeed), this.lastChar.toString(this.encoding, 0, this.lastTotal);
      t52.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, t52.length), this.lastNeed -= t52.length;
    };
    e$12.StringDecoder;
    e$12.StringDecoder;
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
    exports$12 = {};
    _dewExec3 = false;
    _global3 = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : globalThis;
    exports3 = dew3();
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
function u$22(r22) {
  var t22 = r22.length;
  if (t22 % 4 > 0)
    throw new Error("Invalid string. Length must be a multiple of 4");
  var e22 = r22.indexOf("=");
  return -1 === e22 && (e22 = t22), [e22, e22 === t22 ? 0 : 4 - e22 % 4];
}
function c$13(r22, e22, n22) {
  for (var o22, a22, h22 = [], u22 = e22; u22 < n22; u22 += 3)
    o22 = (r22[u22] << 16 & 16711680) + (r22[u22 + 1] << 8 & 65280) + (255 & r22[u22 + 2]), h22.push(t$13[(a22 = o22) >> 18 & 63] + t$13[a22 >> 12 & 63] + t$13[a22 >> 6 & 63] + t$13[63 & a22]);
  return h22.join("");
}
function f$22(t22) {
  if (t22 > 2147483647)
    throw new RangeError('The value "' + t22 + '" is invalid for option "size"');
  var r22 = new Uint8Array(t22);
  return Object.setPrototypeOf(r22, u$1$12.prototype), r22;
}
function u$1$12(t22, r22, e22) {
  if ("number" == typeof t22) {
    if ("string" == typeof r22)
      throw new TypeError('The "string" argument must be of type string. Received type number');
    return a$22(t22);
  }
  return s$12(t22, r22, e22);
}
function s$12(t22, r22, e22) {
  if ("string" == typeof t22)
    return function(t32, r32) {
      "string" == typeof r32 && "" !== r32 || (r32 = "utf8");
      if (!u$1$12.isEncoding(r32))
        throw new TypeError("Unknown encoding: " + r32);
      var e32 = 0 | y4(t32, r32), n32 = f$22(e32), i32 = n32.write(t32, r32);
      i32 !== e32 && (n32 = n32.slice(0, i32));
      return n32;
    }(t22, r22);
  if (ArrayBuffer.isView(t22))
    return p5(t22);
  if (null == t22)
    throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof t22);
  if (F3(t22, ArrayBuffer) || t22 && F3(t22.buffer, ArrayBuffer))
    return c$1$12(t22, r22, e22);
  if ("undefined" != typeof SharedArrayBuffer && (F3(t22, SharedArrayBuffer) || t22 && F3(t22.buffer, SharedArrayBuffer)))
    return c$1$12(t22, r22, e22);
  if ("number" == typeof t22)
    throw new TypeError('The "value" argument must not be of type number. Received type number');
  var n22 = t22.valueOf && t22.valueOf();
  if (null != n22 && n22 !== t22)
    return u$1$12.from(n22, r22, e22);
  var i22 = function(t32) {
    if (u$1$12.isBuffer(t32)) {
      var r32 = 0 | l$13(t32.length), e32 = f$22(r32);
      return 0 === e32.length || t32.copy(e32, 0, 0, r32), e32;
    }
    if (void 0 !== t32.length)
      return "number" != typeof t32.length || N3(t32.length) ? f$22(0) : p5(t32);
    if ("Buffer" === t32.type && Array.isArray(t32.data))
      return p5(t32.data);
  }(t22);
  if (i22)
    return i22;
  if ("undefined" != typeof Symbol && null != Symbol.toPrimitive && "function" == typeof t22[Symbol.toPrimitive])
    return u$1$12.from(t22[Symbol.toPrimitive]("string"), r22, e22);
  throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof t22);
}
function h$1$12(t22) {
  if ("number" != typeof t22)
    throw new TypeError('"size" argument must be of type number');
  if (t22 < 0)
    throw new RangeError('The value "' + t22 + '" is invalid for option "size"');
}
function a$22(t22) {
  return h$1$12(t22), f$22(t22 < 0 ? 0 : 0 | l$13(t22));
}
function p5(t22) {
  for (var r22 = t22.length < 0 ? 0 : 0 | l$13(t22.length), e22 = f$22(r22), n22 = 0; n22 < r22; n22 += 1)
    e22[n22] = 255 & t22[n22];
  return e22;
}
function c$1$12(t22, r22, e22) {
  if (r22 < 0 || t22.byteLength < r22)
    throw new RangeError('"offset" is outside of buffer bounds');
  if (t22.byteLength < r22 + (e22 || 0))
    throw new RangeError('"length" is outside of buffer bounds');
  var n22;
  return n22 = void 0 === r22 && void 0 === e22 ? new Uint8Array(t22) : void 0 === e22 ? new Uint8Array(t22, r22) : new Uint8Array(t22, r22, e22), Object.setPrototypeOf(n22, u$1$12.prototype), n22;
}
function l$13(t22) {
  if (t22 >= 2147483647)
    throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + 2147483647 .toString(16) + " bytes");
  return 0 | t22;
}
function y4(t22, r22) {
  if (u$1$12.isBuffer(t22))
    return t22.length;
  if (ArrayBuffer.isView(t22) || F3(t22, ArrayBuffer))
    return t22.byteLength;
  if ("string" != typeof t22)
    throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof t22);
  var e22 = t22.length, n22 = arguments.length > 2 && true === arguments[2];
  if (!n22 && 0 === e22)
    return 0;
  for (var i22 = false; ; )
    switch (r22) {
      case "ascii":
      case "latin1":
      case "binary":
        return e22;
      case "utf8":
      case "utf-8":
        return _3(t22).length;
      case "ucs2":
      case "ucs-2":
      case "utf16le":
      case "utf-16le":
        return 2 * e22;
      case "hex":
        return e22 >>> 1;
      case "base64":
        return z3(t22).length;
      default:
        if (i22)
          return n22 ? -1 : _3(t22).length;
        r22 = ("" + r22).toLowerCase(), i22 = true;
    }
}
function g3(t22, r22, e22) {
  var n22 = false;
  if ((void 0 === r22 || r22 < 0) && (r22 = 0), r22 > this.length)
    return "";
  if ((void 0 === e22 || e22 > this.length) && (e22 = this.length), e22 <= 0)
    return "";
  if ((e22 >>>= 0) <= (r22 >>>= 0))
    return "";
  for (t22 || (t22 = "utf8"); ; )
    switch (t22) {
      case "hex":
        return O3(this, r22, e22);
      case "utf8":
      case "utf-8":
        return I3(this, r22, e22);
      case "ascii":
        return S3(this, r22, e22);
      case "latin1":
      case "binary":
        return R3(this, r22, e22);
      case "base64":
        return T4(this, r22, e22);
      case "ucs2":
      case "ucs-2":
      case "utf16le":
      case "utf-16le":
        return L3(this, r22, e22);
      default:
        if (n22)
          throw new TypeError("Unknown encoding: " + t22);
        t22 = (t22 + "").toLowerCase(), n22 = true;
    }
}
function w3(t22, r22, e22) {
  var n22 = t22[r22];
  t22[r22] = t22[e22], t22[e22] = n22;
}
function d4(t22, r22, e22, n22, i22) {
  if (0 === t22.length)
    return -1;
  if ("string" == typeof e22 ? (n22 = e22, e22 = 0) : e22 > 2147483647 ? e22 = 2147483647 : e22 < -2147483648 && (e22 = -2147483648), N3(e22 = +e22) && (e22 = i22 ? 0 : t22.length - 1), e22 < 0 && (e22 = t22.length + e22), e22 >= t22.length) {
    if (i22)
      return -1;
    e22 = t22.length - 1;
  } else if (e22 < 0) {
    if (!i22)
      return -1;
    e22 = 0;
  }
  if ("string" == typeof r22 && (r22 = u$1$12.from(r22, n22)), u$1$12.isBuffer(r22))
    return 0 === r22.length ? -1 : v4(t22, r22, e22, n22, i22);
  if ("number" == typeof r22)
    return r22 &= 255, "function" == typeof Uint8Array.prototype.indexOf ? i22 ? Uint8Array.prototype.indexOf.call(t22, r22, e22) : Uint8Array.prototype.lastIndexOf.call(t22, r22, e22) : v4(t22, [r22], e22, n22, i22);
  throw new TypeError("val must be string, number or Buffer");
}
function v4(t22, r22, e22, n22, i22) {
  var o22, f22 = 1, u22 = t22.length, s22 = r22.length;
  if (void 0 !== n22 && ("ucs2" === (n22 = String(n22).toLowerCase()) || "ucs-2" === n22 || "utf16le" === n22 || "utf-16le" === n22)) {
    if (t22.length < 2 || r22.length < 2)
      return -1;
    f22 = 2, u22 /= 2, s22 /= 2, e22 /= 2;
  }
  function h22(t32, r32) {
    return 1 === f22 ? t32[r32] : t32.readUInt16BE(r32 * f22);
  }
  if (i22) {
    var a22 = -1;
    for (o22 = e22; o22 < u22; o22++)
      if (h22(t22, o22) === h22(r22, -1 === a22 ? 0 : o22 - a22)) {
        if (-1 === a22 && (a22 = o22), o22 - a22 + 1 === s22)
          return a22 * f22;
      } else
        -1 !== a22 && (o22 -= o22 - a22), a22 = -1;
  } else
    for (e22 + s22 > u22 && (e22 = u22 - s22), o22 = e22; o22 >= 0; o22--) {
      for (var p22 = true, c22 = 0; c22 < s22; c22++)
        if (h22(t22, o22 + c22) !== h22(r22, c22)) {
          p22 = false;
          break;
        }
      if (p22)
        return o22;
    }
  return -1;
}
function b3(t22, r22, e22, n22) {
  e22 = Number(e22) || 0;
  var i22 = t22.length - e22;
  n22 ? (n22 = Number(n22)) > i22 && (n22 = i22) : n22 = i22;
  var o22 = r22.length;
  n22 > o22 / 2 && (n22 = o22 / 2);
  for (var f22 = 0; f22 < n22; ++f22) {
    var u22 = parseInt(r22.substr(2 * f22, 2), 16);
    if (N3(u22))
      return f22;
    t22[e22 + f22] = u22;
  }
  return f22;
}
function m4(t22, r22, e22, n22) {
  return D3(_3(r22, t22.length - e22), t22, e22, n22);
}
function E3(t22, r22, e22, n22) {
  return D3(function(t32) {
    for (var r32 = [], e32 = 0; e32 < t32.length; ++e32)
      r32.push(255 & t32.charCodeAt(e32));
    return r32;
  }(r22), t22, e22, n22);
}
function B3(t22, r22, e22, n22) {
  return E3(t22, r22, e22, n22);
}
function A3(t22, r22, e22, n22) {
  return D3(z3(r22), t22, e22, n22);
}
function U3(t22, r22, e22, n22) {
  return D3(function(t32, r32) {
    for (var e32, n32, i22, o22 = [], f22 = 0; f22 < t32.length && !((r32 -= 2) < 0); ++f22)
      e32 = t32.charCodeAt(f22), n32 = e32 >> 8, i22 = e32 % 256, o22.push(i22), o22.push(n32);
    return o22;
  }(r22, t22.length - e22), t22, e22, n22);
}
function T4(t22, r22, e22) {
  return 0 === r22 && e22 === t22.length ? n$1$12.fromByteArray(t22) : n$1$12.fromByteArray(t22.slice(r22, e22));
}
function I3(t22, r22, e22) {
  e22 = Math.min(t22.length, e22);
  for (var n22 = [], i22 = r22; i22 < e22; ) {
    var o22, f22, u22, s22, h22 = t22[i22], a22 = null, p22 = h22 > 239 ? 4 : h22 > 223 ? 3 : h22 > 191 ? 2 : 1;
    if (i22 + p22 <= e22)
      switch (p22) {
        case 1:
          h22 < 128 && (a22 = h22);
          break;
        case 2:
          128 == (192 & (o22 = t22[i22 + 1])) && (s22 = (31 & h22) << 6 | 63 & o22) > 127 && (a22 = s22);
          break;
        case 3:
          o22 = t22[i22 + 1], f22 = t22[i22 + 2], 128 == (192 & o22) && 128 == (192 & f22) && (s22 = (15 & h22) << 12 | (63 & o22) << 6 | 63 & f22) > 2047 && (s22 < 55296 || s22 > 57343) && (a22 = s22);
          break;
        case 4:
          o22 = t22[i22 + 1], f22 = t22[i22 + 2], u22 = t22[i22 + 3], 128 == (192 & o22) && 128 == (192 & f22) && 128 == (192 & u22) && (s22 = (15 & h22) << 18 | (63 & o22) << 12 | (63 & f22) << 6 | 63 & u22) > 65535 && s22 < 1114112 && (a22 = s22);
      }
    null === a22 ? (a22 = 65533, p22 = 1) : a22 > 65535 && (a22 -= 65536, n22.push(a22 >>> 10 & 1023 | 55296), a22 = 56320 | 1023 & a22), n22.push(a22), i22 += p22;
  }
  return function(t32) {
    var r32 = t32.length;
    if (r32 <= 4096)
      return String.fromCharCode.apply(String, t32);
    var e32 = "", n32 = 0;
    for (; n32 < r32; )
      e32 += String.fromCharCode.apply(String, t32.slice(n32, n32 += 4096));
    return e32;
  }(n22);
}
function S3(t22, r22, e22) {
  var n22 = "";
  e22 = Math.min(t22.length, e22);
  for (var i22 = r22; i22 < e22; ++i22)
    n22 += String.fromCharCode(127 & t22[i22]);
  return n22;
}
function R3(t22, r22, e22) {
  var n22 = "";
  e22 = Math.min(t22.length, e22);
  for (var i22 = r22; i22 < e22; ++i22)
    n22 += String.fromCharCode(t22[i22]);
  return n22;
}
function O3(t22, r22, e22) {
  var n22 = t22.length;
  (!r22 || r22 < 0) && (r22 = 0), (!e22 || e22 < 0 || e22 > n22) && (e22 = n22);
  for (var i22 = "", o22 = r22; o22 < e22; ++o22)
    i22 += Y3[t22[o22]];
  return i22;
}
function L3(t22, r22, e22) {
  for (var n22 = t22.slice(r22, e22), i22 = "", o22 = 0; o22 < n22.length; o22 += 2)
    i22 += String.fromCharCode(n22[o22] + 256 * n22[o22 + 1]);
  return i22;
}
function x3(t22, r22, e22) {
  if (t22 % 1 != 0 || t22 < 0)
    throw new RangeError("offset is not uint");
  if (t22 + r22 > e22)
    throw new RangeError("Trying to access beyond buffer length");
}
function C3(t22, r22, e22, n22, i22, o22) {
  if (!u$1$12.isBuffer(t22))
    throw new TypeError('"buffer" argument must be a Buffer instance');
  if (r22 > i22 || r22 < o22)
    throw new RangeError('"value" argument is out of bounds');
  if (e22 + n22 > t22.length)
    throw new RangeError("Index out of range");
}
function P3(t22, r22, e22, n22, i22, o22) {
  if (e22 + n22 > t22.length)
    throw new RangeError("Index out of range");
  if (e22 < 0)
    throw new RangeError("Index out of range");
}
function k3(t22, r22, e22, n22, o22) {
  return r22 = +r22, e22 >>>= 0, o22 || P3(t22, 0, e22, 4), i$13.write(t22, r22, e22, n22, 23, 4), e22 + 4;
}
function M3(t22, r22, e22, n22, o22) {
  return r22 = +r22, e22 >>>= 0, o22 || P3(t22, 0, e22, 8), i$13.write(t22, r22, e22, n22, 52, 8), e22 + 8;
}
function _3(t22, r22) {
  var e22;
  r22 = r22 || 1 / 0;
  for (var n22 = t22.length, i22 = null, o22 = [], f22 = 0; f22 < n22; ++f22) {
    if ((e22 = t22.charCodeAt(f22)) > 55295 && e22 < 57344) {
      if (!i22) {
        if (e22 > 56319) {
          (r22 -= 3) > -1 && o22.push(239, 191, 189);
          continue;
        }
        if (f22 + 1 === n22) {
          (r22 -= 3) > -1 && o22.push(239, 191, 189);
          continue;
        }
        i22 = e22;
        continue;
      }
      if (e22 < 56320) {
        (r22 -= 3) > -1 && o22.push(239, 191, 189), i22 = e22;
        continue;
      }
      e22 = 65536 + (i22 - 55296 << 10 | e22 - 56320);
    } else
      i22 && (r22 -= 3) > -1 && o22.push(239, 191, 189);
    if (i22 = null, e22 < 128) {
      if ((r22 -= 1) < 0)
        break;
      o22.push(e22);
    } else if (e22 < 2048) {
      if ((r22 -= 2) < 0)
        break;
      o22.push(e22 >> 6 | 192, 63 & e22 | 128);
    } else if (e22 < 65536) {
      if ((r22 -= 3) < 0)
        break;
      o22.push(e22 >> 12 | 224, e22 >> 6 & 63 | 128, 63 & e22 | 128);
    } else {
      if (!(e22 < 1114112))
        throw new Error("Invalid code point");
      if ((r22 -= 4) < 0)
        break;
      o22.push(e22 >> 18 | 240, e22 >> 12 & 63 | 128, e22 >> 6 & 63 | 128, 63 & e22 | 128);
    }
  }
  return o22;
}
function z3(t22) {
  return n$1$12.toByteArray(function(t32) {
    if ((t32 = (t32 = t32.split("=")[0]).trim().replace(j3, "")).length < 2)
      return "";
    for (; t32.length % 4 != 0; )
      t32 += "=";
    return t32;
  }(t22));
}
function D3(t22, r22, e22, n22) {
  for (var i22 = 0; i22 < n22 && !(i22 + e22 >= r22.length || i22 >= t22.length); ++i22)
    r22[i22 + e22] = t22[i22];
  return i22;
}
function F3(t22, r22) {
  return t22 instanceof r22 || null != t22 && null != t22.constructor && null != t22.constructor.name && t22.constructor.name === r22.name;
}
function N3(t22) {
  return t22 != t22;
}
function t5(r22, e22) {
  for (var n22 in r22)
    e22[n22] = r22[n22];
}
function f5(r22, e22, n22) {
  return o5(r22, e22, n22);
}
function a5(t22) {
  var e22;
  switch (this.encoding = function(t32) {
    var e32 = function(t42) {
      if (!t42)
        return "utf8";
      for (var e42; ; )
        switch (t42) {
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
            return t42;
          default:
            if (e42)
              return;
            t42 = ("" + t42).toLowerCase(), e42 = true;
        }
    }(t32);
    if ("string" != typeof e32 && (s5.isEncoding === i5 || !i5(t32)))
      throw new Error("Unknown encoding: " + t32);
    return e32 || t32;
  }(t22), this.encoding) {
    case "utf16le":
      this.text = h5, this.end = l5, e22 = 4;
      break;
    case "utf8":
      this.fillLast = n$13, e22 = 4;
      break;
    case "base64":
      this.text = u$13, this.end = o$13, e22 = 3;
      break;
    default:
      return this.write = f$12, this.end = c5, void 0;
  }
  this.lastNeed = 0, this.lastTotal = 0, this.lastChar = s5.allocUnsafe(e22);
}
function r5(t22) {
  return t22 <= 127 ? 0 : t22 >> 5 == 6 ? 2 : t22 >> 4 == 14 ? 3 : t22 >> 3 == 30 ? 4 : t22 >> 6 == 2 ? -1 : -2;
}
function n$13(t22) {
  var e22 = this.lastTotal - this.lastNeed, s22 = function(t32, e32, s32) {
    if (128 != (192 & e32[0]))
      return t32.lastNeed = 0, "\uFFFD";
    if (t32.lastNeed > 1 && e32.length > 1) {
      if (128 != (192 & e32[1]))
        return t32.lastNeed = 1, "\uFFFD";
      if (t32.lastNeed > 2 && e32.length > 2 && 128 != (192 & e32[2]))
        return t32.lastNeed = 2, "\uFFFD";
    }
  }(this, t22);
  return void 0 !== s22 ? s22 : this.lastNeed <= t22.length ? (t22.copy(this.lastChar, e22, 0, this.lastNeed), this.lastChar.toString(this.encoding, 0, this.lastTotal)) : (t22.copy(this.lastChar, e22, 0, t22.length), this.lastNeed -= t22.length, void 0);
}
function h5(t22, e22) {
  if ((t22.length - e22) % 2 == 0) {
    var s22 = t22.toString("utf16le", e22);
    if (s22) {
      var i22 = s22.charCodeAt(s22.length - 1);
      if (i22 >= 55296 && i22 <= 56319)
        return this.lastNeed = 2, this.lastTotal = 4, this.lastChar[0] = t22[t22.length - 2], this.lastChar[1] = t22[t22.length - 1], s22.slice(0, -1);
    }
    return s22;
  }
  return this.lastNeed = 1, this.lastTotal = 2, this.lastChar[0] = t22[t22.length - 1], t22.toString("utf16le", e22, t22.length - 1);
}
function l5(t22) {
  var e22 = t22 && t22.length ? this.write(t22) : "";
  if (this.lastNeed) {
    var s22 = this.lastTotal - this.lastNeed;
    return e22 + this.lastChar.toString("utf16le", 0, s22);
  }
  return e22;
}
function u$13(t22, e22) {
  var s22 = (t22.length - e22) % 3;
  return 0 === s22 ? t22.toString("base64", e22) : (this.lastNeed = 3 - s22, this.lastTotal = 3, 1 === s22 ? this.lastChar[0] = t22[t22.length - 1] : (this.lastChar[0] = t22[t22.length - 2], this.lastChar[1] = t22[t22.length - 1]), t22.toString("base64", e22, t22.length - s22));
}
function o$13(t22) {
  var e22 = t22 && t22.length ? this.write(t22) : "";
  return this.lastNeed ? e22 + this.lastChar.toString("base64", 0, 3 - this.lastNeed) : e22;
}
function f$12(t22) {
  return t22.toString(this.encoding);
}
function c5(t22) {
  return t22 && t22.length ? this.write(t22) : "";
}
var r$13, t$13, e$22, n$22, o$23, a$12, h$12, a$1$12, e$1$12, n$1$12, i$13, o$1$12, j3, Y3, e5, n5, o5, u5, e$13, s5, i5, StringDecoder;
var init_string_decoder = __esm({
  "node-modules-polyfills:string_decoder"() {
    for (r$13 = { byteLength: function(r22) {
      var t22 = u$22(r22), e22 = t22[0], n22 = t22[1];
      return 3 * (e22 + n22) / 4 - n22;
    }, toByteArray: function(r22) {
      var t22, o22, a22 = u$22(r22), h22 = a22[0], c22 = a22[1], d22 = new n$22(function(r32, t32, e22) {
        return 3 * (t32 + e22) / 4 - e22;
      }(0, h22, c22)), f22 = 0, A22 = c22 > 0 ? h22 - 4 : h22;
      for (o22 = 0; o22 < A22; o22 += 4)
        t22 = e$22[r22.charCodeAt(o22)] << 18 | e$22[r22.charCodeAt(o22 + 1)] << 12 | e$22[r22.charCodeAt(o22 + 2)] << 6 | e$22[r22.charCodeAt(o22 + 3)], d22[f22++] = t22 >> 16 & 255, d22[f22++] = t22 >> 8 & 255, d22[f22++] = 255 & t22;
      2 === c22 && (t22 = e$22[r22.charCodeAt(o22)] << 2 | e$22[r22.charCodeAt(o22 + 1)] >> 4, d22[f22++] = 255 & t22);
      1 === c22 && (t22 = e$22[r22.charCodeAt(o22)] << 10 | e$22[r22.charCodeAt(o22 + 1)] << 4 | e$22[r22.charCodeAt(o22 + 2)] >> 2, d22[f22++] = t22 >> 8 & 255, d22[f22++] = 255 & t22);
      return d22;
    }, fromByteArray: function(r22) {
      for (var e22, n22 = r22.length, o22 = n22 % 3, a22 = [], h22 = 0, u22 = n22 - o22; h22 < u22; h22 += 16383)
        a22.push(c$13(r22, h22, h22 + 16383 > u22 ? u22 : h22 + 16383));
      1 === o22 ? (e22 = r22[n22 - 1], a22.push(t$13[e22 >> 2] + t$13[e22 << 4 & 63] + "==")) : 2 === o22 && (e22 = (r22[n22 - 2] << 8) + r22[n22 - 1], a22.push(t$13[e22 >> 10] + t$13[e22 >> 4 & 63] + t$13[e22 << 2 & 63] + "="));
      return a22.join("");
    } }, t$13 = [], e$22 = [], n$22 = "undefined" != typeof Uint8Array ? Uint8Array : Array, o$23 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", a$12 = 0, h$12 = o$23.length; a$12 < h$12; ++a$12)
      t$13[a$12] = o$23[a$12], e$22[o$23.charCodeAt(a$12)] = a$12;
    e$22["-".charCodeAt(0)] = 62, e$22["_".charCodeAt(0)] = 63;
    a$1$12 = { read: function(a22, t22, o22, r22, h22) {
      var M22, f22, p22 = 8 * h22 - r22 - 1, w22 = (1 << p22) - 1, e22 = w22 >> 1, i22 = -7, N22 = o22 ? h22 - 1 : 0, n22 = o22 ? -1 : 1, u22 = a22[t22 + N22];
      for (N22 += n22, M22 = u22 & (1 << -i22) - 1, u22 >>= -i22, i22 += p22; i22 > 0; M22 = 256 * M22 + a22[t22 + N22], N22 += n22, i22 -= 8)
        ;
      for (f22 = M22 & (1 << -i22) - 1, M22 >>= -i22, i22 += r22; i22 > 0; f22 = 256 * f22 + a22[t22 + N22], N22 += n22, i22 -= 8)
        ;
      if (0 === M22)
        M22 = 1 - e22;
      else {
        if (M22 === w22)
          return f22 ? NaN : 1 / 0 * (u22 ? -1 : 1);
        f22 += Math.pow(2, r22), M22 -= e22;
      }
      return (u22 ? -1 : 1) * f22 * Math.pow(2, M22 - r22);
    }, write: function(a22, t22, o22, r22, h22, M22) {
      var f22, p22, w22, e22 = 8 * M22 - h22 - 1, i22 = (1 << e22) - 1, N22 = i22 >> 1, n22 = 23 === h22 ? Math.pow(2, -24) - Math.pow(2, -77) : 0, u22 = r22 ? 0 : M22 - 1, l22 = r22 ? 1 : -1, s22 = t22 < 0 || 0 === t22 && 1 / t22 < 0 ? 1 : 0;
      for (t22 = Math.abs(t22), isNaN(t22) || t22 === 1 / 0 ? (p22 = isNaN(t22) ? 1 : 0, f22 = i22) : (f22 = Math.floor(Math.log(t22) / Math.LN2), t22 * (w22 = Math.pow(2, -f22)) < 1 && (f22--, w22 *= 2), (t22 += f22 + N22 >= 1 ? n22 / w22 : n22 * Math.pow(2, 1 - N22)) * w22 >= 2 && (f22++, w22 /= 2), f22 + N22 >= i22 ? (p22 = 0, f22 = i22) : f22 + N22 >= 1 ? (p22 = (t22 * w22 - 1) * Math.pow(2, h22), f22 += N22) : (p22 = t22 * Math.pow(2, N22 - 1) * Math.pow(2, h22), f22 = 0)); h22 >= 8; a22[o22 + u22] = 255 & p22, u22 += l22, p22 /= 256, h22 -= 8)
        ;
      for (f22 = f22 << h22 | p22, e22 += h22; e22 > 0; a22[o22 + u22] = 255 & f22, u22 += l22, f22 /= 256, e22 -= 8)
        ;
      a22[o22 + u22 - l22] |= 128 * s22;
    } };
    e$1$12 = {};
    n$1$12 = r$13;
    i$13 = a$1$12;
    o$1$12 = "function" == typeof Symbol && "function" == typeof Symbol.for ? Symbol.for("nodejs.util.inspect.custom") : null;
    e$1$12.Buffer = u$1$12, e$1$12.SlowBuffer = function(t22) {
      +t22 != t22 && (t22 = 0);
      return u$1$12.alloc(+t22);
    }, e$1$12.INSPECT_MAX_BYTES = 50;
    e$1$12.kMaxLength = 2147483647, u$1$12.TYPED_ARRAY_SUPPORT = function() {
      try {
        var t22 = new Uint8Array(1), r22 = { foo: function() {
          return 42;
        } };
        return Object.setPrototypeOf(r22, Uint8Array.prototype), Object.setPrototypeOf(t22, r22), 42 === t22.foo();
      } catch (t32) {
        return false;
      }
    }(), u$1$12.TYPED_ARRAY_SUPPORT || "undefined" == typeof console || "function" != typeof console.error || console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."), Object.defineProperty(u$1$12.prototype, "parent", { enumerable: true, get: function() {
      if (u$1$12.isBuffer(this))
        return this.buffer;
    } }), Object.defineProperty(u$1$12.prototype, "offset", { enumerable: true, get: function() {
      if (u$1$12.isBuffer(this))
        return this.byteOffset;
    } }), u$1$12.poolSize = 8192, u$1$12.from = function(t22, r22, e22) {
      return s$12(t22, r22, e22);
    }, Object.setPrototypeOf(u$1$12.prototype, Uint8Array.prototype), Object.setPrototypeOf(u$1$12, Uint8Array), u$1$12.alloc = function(t22, r22, e22) {
      return function(t32, r32, e32) {
        return h$1$12(t32), t32 <= 0 ? f$22(t32) : void 0 !== r32 ? "string" == typeof e32 ? f$22(t32).fill(r32, e32) : f$22(t32).fill(r32) : f$22(t32);
      }(t22, r22, e22);
    }, u$1$12.allocUnsafe = function(t22) {
      return a$22(t22);
    }, u$1$12.allocUnsafeSlow = function(t22) {
      return a$22(t22);
    }, u$1$12.isBuffer = function(t22) {
      return null != t22 && true === t22._isBuffer && t22 !== u$1$12.prototype;
    }, u$1$12.compare = function(t22, r22) {
      if (F3(t22, Uint8Array) && (t22 = u$1$12.from(t22, t22.offset, t22.byteLength)), F3(r22, Uint8Array) && (r22 = u$1$12.from(r22, r22.offset, r22.byteLength)), !u$1$12.isBuffer(t22) || !u$1$12.isBuffer(r22))
        throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');
      if (t22 === r22)
        return 0;
      for (var e22 = t22.length, n22 = r22.length, i22 = 0, o22 = Math.min(e22, n22); i22 < o22; ++i22)
        if (t22[i22] !== r22[i22]) {
          e22 = t22[i22], n22 = r22[i22];
          break;
        }
      return e22 < n22 ? -1 : n22 < e22 ? 1 : 0;
    }, u$1$12.isEncoding = function(t22) {
      switch (String(t22).toLowerCase()) {
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
    }, u$1$12.concat = function(t22, r22) {
      if (!Array.isArray(t22))
        throw new TypeError('"list" argument must be an Array of Buffers');
      if (0 === t22.length)
        return u$1$12.alloc(0);
      var e22;
      if (void 0 === r22)
        for (r22 = 0, e22 = 0; e22 < t22.length; ++e22)
          r22 += t22[e22].length;
      var n22 = u$1$12.allocUnsafe(r22), i22 = 0;
      for (e22 = 0; e22 < t22.length; ++e22) {
        var o22 = t22[e22];
        if (F3(o22, Uint8Array) && (o22 = u$1$12.from(o22)), !u$1$12.isBuffer(o22))
          throw new TypeError('"list" argument must be an Array of Buffers');
        o22.copy(n22, i22), i22 += o22.length;
      }
      return n22;
    }, u$1$12.byteLength = y4, u$1$12.prototype._isBuffer = true, u$1$12.prototype.swap16 = function() {
      var t22 = this.length;
      if (t22 % 2 != 0)
        throw new RangeError("Buffer size must be a multiple of 16-bits");
      for (var r22 = 0; r22 < t22; r22 += 2)
        w3(this, r22, r22 + 1);
      return this;
    }, u$1$12.prototype.swap32 = function() {
      var t22 = this.length;
      if (t22 % 4 != 0)
        throw new RangeError("Buffer size must be a multiple of 32-bits");
      for (var r22 = 0; r22 < t22; r22 += 4)
        w3(this, r22, r22 + 3), w3(this, r22 + 1, r22 + 2);
      return this;
    }, u$1$12.prototype.swap64 = function() {
      var t22 = this.length;
      if (t22 % 8 != 0)
        throw new RangeError("Buffer size must be a multiple of 64-bits");
      for (var r22 = 0; r22 < t22; r22 += 8)
        w3(this, r22, r22 + 7), w3(this, r22 + 1, r22 + 6), w3(this, r22 + 2, r22 + 5), w3(this, r22 + 3, r22 + 4);
      return this;
    }, u$1$12.prototype.toString = function() {
      var t22 = this.length;
      return 0 === t22 ? "" : 0 === arguments.length ? I3(this, 0, t22) : g3.apply(this, arguments);
    }, u$1$12.prototype.toLocaleString = u$1$12.prototype.toString, u$1$12.prototype.equals = function(t22) {
      if (!u$1$12.isBuffer(t22))
        throw new TypeError("Argument must be a Buffer");
      return this === t22 || 0 === u$1$12.compare(this, t22);
    }, u$1$12.prototype.inspect = function() {
      var t22 = "", r22 = e$1$12.INSPECT_MAX_BYTES;
      return t22 = this.toString("hex", 0, r22).replace(/(.{2})/g, "$1 ").trim(), this.length > r22 && (t22 += " ... "), "<Buffer " + t22 + ">";
    }, o$1$12 && (u$1$12.prototype[o$1$12] = u$1$12.prototype.inspect), u$1$12.prototype.compare = function(t22, r22, e22, n22, i22) {
      if (F3(t22, Uint8Array) && (t22 = u$1$12.from(t22, t22.offset, t22.byteLength)), !u$1$12.isBuffer(t22))
        throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof t22);
      if (void 0 === r22 && (r22 = 0), void 0 === e22 && (e22 = t22 ? t22.length : 0), void 0 === n22 && (n22 = 0), void 0 === i22 && (i22 = this.length), r22 < 0 || e22 > t22.length || n22 < 0 || i22 > this.length)
        throw new RangeError("out of range index");
      if (n22 >= i22 && r22 >= e22)
        return 0;
      if (n22 >= i22)
        return -1;
      if (r22 >= e22)
        return 1;
      if (this === t22)
        return 0;
      for (var o22 = (i22 >>>= 0) - (n22 >>>= 0), f22 = (e22 >>>= 0) - (r22 >>>= 0), s22 = Math.min(o22, f22), h22 = this.slice(n22, i22), a22 = t22.slice(r22, e22), p22 = 0; p22 < s22; ++p22)
        if (h22[p22] !== a22[p22]) {
          o22 = h22[p22], f22 = a22[p22];
          break;
        }
      return o22 < f22 ? -1 : f22 < o22 ? 1 : 0;
    }, u$1$12.prototype.includes = function(t22, r22, e22) {
      return -1 !== this.indexOf(t22, r22, e22);
    }, u$1$12.prototype.indexOf = function(t22, r22, e22) {
      return d4(this, t22, r22, e22, true);
    }, u$1$12.prototype.lastIndexOf = function(t22, r22, e22) {
      return d4(this, t22, r22, e22, false);
    }, u$1$12.prototype.write = function(t22, r22, e22, n22) {
      if (void 0 === r22)
        n22 = "utf8", e22 = this.length, r22 = 0;
      else if (void 0 === e22 && "string" == typeof r22)
        n22 = r22, e22 = this.length, r22 = 0;
      else {
        if (!isFinite(r22))
          throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
        r22 >>>= 0, isFinite(e22) ? (e22 >>>= 0, void 0 === n22 && (n22 = "utf8")) : (n22 = e22, e22 = void 0);
      }
      var i22 = this.length - r22;
      if ((void 0 === e22 || e22 > i22) && (e22 = i22), t22.length > 0 && (e22 < 0 || r22 < 0) || r22 > this.length)
        throw new RangeError("Attempt to write outside buffer bounds");
      n22 || (n22 = "utf8");
      for (var o22 = false; ; )
        switch (n22) {
          case "hex":
            return b3(this, t22, r22, e22);
          case "utf8":
          case "utf-8":
            return m4(this, t22, r22, e22);
          case "ascii":
            return E3(this, t22, r22, e22);
          case "latin1":
          case "binary":
            return B3(this, t22, r22, e22);
          case "base64":
            return A3(this, t22, r22, e22);
          case "ucs2":
          case "ucs-2":
          case "utf16le":
          case "utf-16le":
            return U3(this, t22, r22, e22);
          default:
            if (o22)
              throw new TypeError("Unknown encoding: " + n22);
            n22 = ("" + n22).toLowerCase(), o22 = true;
        }
    }, u$1$12.prototype.toJSON = function() {
      return { type: "Buffer", data: Array.prototype.slice.call(this._arr || this, 0) };
    };
    u$1$12.prototype.slice = function(t22, r22) {
      var e22 = this.length;
      (t22 = ~~t22) < 0 ? (t22 += e22) < 0 && (t22 = 0) : t22 > e22 && (t22 = e22), (r22 = void 0 === r22 ? e22 : ~~r22) < 0 ? (r22 += e22) < 0 && (r22 = 0) : r22 > e22 && (r22 = e22), r22 < t22 && (r22 = t22);
      var n22 = this.subarray(t22, r22);
      return Object.setPrototypeOf(n22, u$1$12.prototype), n22;
    }, u$1$12.prototype.readUIntLE = function(t22, r22, e22) {
      t22 >>>= 0, r22 >>>= 0, e22 || x3(t22, r22, this.length);
      for (var n22 = this[t22], i22 = 1, o22 = 0; ++o22 < r22 && (i22 *= 256); )
        n22 += this[t22 + o22] * i22;
      return n22;
    }, u$1$12.prototype.readUIntBE = function(t22, r22, e22) {
      t22 >>>= 0, r22 >>>= 0, e22 || x3(t22, r22, this.length);
      for (var n22 = this[t22 + --r22], i22 = 1; r22 > 0 && (i22 *= 256); )
        n22 += this[t22 + --r22] * i22;
      return n22;
    }, u$1$12.prototype.readUInt8 = function(t22, r22) {
      return t22 >>>= 0, r22 || x3(t22, 1, this.length), this[t22];
    }, u$1$12.prototype.readUInt16LE = function(t22, r22) {
      return t22 >>>= 0, r22 || x3(t22, 2, this.length), this[t22] | this[t22 + 1] << 8;
    }, u$1$12.prototype.readUInt16BE = function(t22, r22) {
      return t22 >>>= 0, r22 || x3(t22, 2, this.length), this[t22] << 8 | this[t22 + 1];
    }, u$1$12.prototype.readUInt32LE = function(t22, r22) {
      return t22 >>>= 0, r22 || x3(t22, 4, this.length), (this[t22] | this[t22 + 1] << 8 | this[t22 + 2] << 16) + 16777216 * this[t22 + 3];
    }, u$1$12.prototype.readUInt32BE = function(t22, r22) {
      return t22 >>>= 0, r22 || x3(t22, 4, this.length), 16777216 * this[t22] + (this[t22 + 1] << 16 | this[t22 + 2] << 8 | this[t22 + 3]);
    }, u$1$12.prototype.readIntLE = function(t22, r22, e22) {
      t22 >>>= 0, r22 >>>= 0, e22 || x3(t22, r22, this.length);
      for (var n22 = this[t22], i22 = 1, o22 = 0; ++o22 < r22 && (i22 *= 256); )
        n22 += this[t22 + o22] * i22;
      return n22 >= (i22 *= 128) && (n22 -= Math.pow(2, 8 * r22)), n22;
    }, u$1$12.prototype.readIntBE = function(t22, r22, e22) {
      t22 >>>= 0, r22 >>>= 0, e22 || x3(t22, r22, this.length);
      for (var n22 = r22, i22 = 1, o22 = this[t22 + --n22]; n22 > 0 && (i22 *= 256); )
        o22 += this[t22 + --n22] * i22;
      return o22 >= (i22 *= 128) && (o22 -= Math.pow(2, 8 * r22)), o22;
    }, u$1$12.prototype.readInt8 = function(t22, r22) {
      return t22 >>>= 0, r22 || x3(t22, 1, this.length), 128 & this[t22] ? -1 * (255 - this[t22] + 1) : this[t22];
    }, u$1$12.prototype.readInt16LE = function(t22, r22) {
      t22 >>>= 0, r22 || x3(t22, 2, this.length);
      var e22 = this[t22] | this[t22 + 1] << 8;
      return 32768 & e22 ? 4294901760 | e22 : e22;
    }, u$1$12.prototype.readInt16BE = function(t22, r22) {
      t22 >>>= 0, r22 || x3(t22, 2, this.length);
      var e22 = this[t22 + 1] | this[t22] << 8;
      return 32768 & e22 ? 4294901760 | e22 : e22;
    }, u$1$12.prototype.readInt32LE = function(t22, r22) {
      return t22 >>>= 0, r22 || x3(t22, 4, this.length), this[t22] | this[t22 + 1] << 8 | this[t22 + 2] << 16 | this[t22 + 3] << 24;
    }, u$1$12.prototype.readInt32BE = function(t22, r22) {
      return t22 >>>= 0, r22 || x3(t22, 4, this.length), this[t22] << 24 | this[t22 + 1] << 16 | this[t22 + 2] << 8 | this[t22 + 3];
    }, u$1$12.prototype.readFloatLE = function(t22, r22) {
      return t22 >>>= 0, r22 || x3(t22, 4, this.length), i$13.read(this, t22, true, 23, 4);
    }, u$1$12.prototype.readFloatBE = function(t22, r22) {
      return t22 >>>= 0, r22 || x3(t22, 4, this.length), i$13.read(this, t22, false, 23, 4);
    }, u$1$12.prototype.readDoubleLE = function(t22, r22) {
      return t22 >>>= 0, r22 || x3(t22, 8, this.length), i$13.read(this, t22, true, 52, 8);
    }, u$1$12.prototype.readDoubleBE = function(t22, r22) {
      return t22 >>>= 0, r22 || x3(t22, 8, this.length), i$13.read(this, t22, false, 52, 8);
    }, u$1$12.prototype.writeUIntLE = function(t22, r22, e22, n22) {
      (t22 = +t22, r22 >>>= 0, e22 >>>= 0, n22) || C3(this, t22, r22, e22, Math.pow(2, 8 * e22) - 1, 0);
      var i22 = 1, o22 = 0;
      for (this[r22] = 255 & t22; ++o22 < e22 && (i22 *= 256); )
        this[r22 + o22] = t22 / i22 & 255;
      return r22 + e22;
    }, u$1$12.prototype.writeUIntBE = function(t22, r22, e22, n22) {
      (t22 = +t22, r22 >>>= 0, e22 >>>= 0, n22) || C3(this, t22, r22, e22, Math.pow(2, 8 * e22) - 1, 0);
      var i22 = e22 - 1, o22 = 1;
      for (this[r22 + i22] = 255 & t22; --i22 >= 0 && (o22 *= 256); )
        this[r22 + i22] = t22 / o22 & 255;
      return r22 + e22;
    }, u$1$12.prototype.writeUInt8 = function(t22, r22, e22) {
      return t22 = +t22, r22 >>>= 0, e22 || C3(this, t22, r22, 1, 255, 0), this[r22] = 255 & t22, r22 + 1;
    }, u$1$12.prototype.writeUInt16LE = function(t22, r22, e22) {
      return t22 = +t22, r22 >>>= 0, e22 || C3(this, t22, r22, 2, 65535, 0), this[r22] = 255 & t22, this[r22 + 1] = t22 >>> 8, r22 + 2;
    }, u$1$12.prototype.writeUInt16BE = function(t22, r22, e22) {
      return t22 = +t22, r22 >>>= 0, e22 || C3(this, t22, r22, 2, 65535, 0), this[r22] = t22 >>> 8, this[r22 + 1] = 255 & t22, r22 + 2;
    }, u$1$12.prototype.writeUInt32LE = function(t22, r22, e22) {
      return t22 = +t22, r22 >>>= 0, e22 || C3(this, t22, r22, 4, 4294967295, 0), this[r22 + 3] = t22 >>> 24, this[r22 + 2] = t22 >>> 16, this[r22 + 1] = t22 >>> 8, this[r22] = 255 & t22, r22 + 4;
    }, u$1$12.prototype.writeUInt32BE = function(t22, r22, e22) {
      return t22 = +t22, r22 >>>= 0, e22 || C3(this, t22, r22, 4, 4294967295, 0), this[r22] = t22 >>> 24, this[r22 + 1] = t22 >>> 16, this[r22 + 2] = t22 >>> 8, this[r22 + 3] = 255 & t22, r22 + 4;
    }, u$1$12.prototype.writeIntLE = function(t22, r22, e22, n22) {
      if (t22 = +t22, r22 >>>= 0, !n22) {
        var i22 = Math.pow(2, 8 * e22 - 1);
        C3(this, t22, r22, e22, i22 - 1, -i22);
      }
      var o22 = 0, f22 = 1, u22 = 0;
      for (this[r22] = 255 & t22; ++o22 < e22 && (f22 *= 256); )
        t22 < 0 && 0 === u22 && 0 !== this[r22 + o22 - 1] && (u22 = 1), this[r22 + o22] = (t22 / f22 >> 0) - u22 & 255;
      return r22 + e22;
    }, u$1$12.prototype.writeIntBE = function(t22, r22, e22, n22) {
      if (t22 = +t22, r22 >>>= 0, !n22) {
        var i22 = Math.pow(2, 8 * e22 - 1);
        C3(this, t22, r22, e22, i22 - 1, -i22);
      }
      var o22 = e22 - 1, f22 = 1, u22 = 0;
      for (this[r22 + o22] = 255 & t22; --o22 >= 0 && (f22 *= 256); )
        t22 < 0 && 0 === u22 && 0 !== this[r22 + o22 + 1] && (u22 = 1), this[r22 + o22] = (t22 / f22 >> 0) - u22 & 255;
      return r22 + e22;
    }, u$1$12.prototype.writeInt8 = function(t22, r22, e22) {
      return t22 = +t22, r22 >>>= 0, e22 || C3(this, t22, r22, 1, 127, -128), t22 < 0 && (t22 = 255 + t22 + 1), this[r22] = 255 & t22, r22 + 1;
    }, u$1$12.prototype.writeInt16LE = function(t22, r22, e22) {
      return t22 = +t22, r22 >>>= 0, e22 || C3(this, t22, r22, 2, 32767, -32768), this[r22] = 255 & t22, this[r22 + 1] = t22 >>> 8, r22 + 2;
    }, u$1$12.prototype.writeInt16BE = function(t22, r22, e22) {
      return t22 = +t22, r22 >>>= 0, e22 || C3(this, t22, r22, 2, 32767, -32768), this[r22] = t22 >>> 8, this[r22 + 1] = 255 & t22, r22 + 2;
    }, u$1$12.prototype.writeInt32LE = function(t22, r22, e22) {
      return t22 = +t22, r22 >>>= 0, e22 || C3(this, t22, r22, 4, 2147483647, -2147483648), this[r22] = 255 & t22, this[r22 + 1] = t22 >>> 8, this[r22 + 2] = t22 >>> 16, this[r22 + 3] = t22 >>> 24, r22 + 4;
    }, u$1$12.prototype.writeInt32BE = function(t22, r22, e22) {
      return t22 = +t22, r22 >>>= 0, e22 || C3(this, t22, r22, 4, 2147483647, -2147483648), t22 < 0 && (t22 = 4294967295 + t22 + 1), this[r22] = t22 >>> 24, this[r22 + 1] = t22 >>> 16, this[r22 + 2] = t22 >>> 8, this[r22 + 3] = 255 & t22, r22 + 4;
    }, u$1$12.prototype.writeFloatLE = function(t22, r22, e22) {
      return k3(this, t22, r22, true, e22);
    }, u$1$12.prototype.writeFloatBE = function(t22, r22, e22) {
      return k3(this, t22, r22, false, e22);
    }, u$1$12.prototype.writeDoubleLE = function(t22, r22, e22) {
      return M3(this, t22, r22, true, e22);
    }, u$1$12.prototype.writeDoubleBE = function(t22, r22, e22) {
      return M3(this, t22, r22, false, e22);
    }, u$1$12.prototype.copy = function(t22, r22, e22, n22) {
      if (!u$1$12.isBuffer(t22))
        throw new TypeError("argument should be a Buffer");
      if (e22 || (e22 = 0), n22 || 0 === n22 || (n22 = this.length), r22 >= t22.length && (r22 = t22.length), r22 || (r22 = 0), n22 > 0 && n22 < e22 && (n22 = e22), n22 === e22)
        return 0;
      if (0 === t22.length || 0 === this.length)
        return 0;
      if (r22 < 0)
        throw new RangeError("targetStart out of bounds");
      if (e22 < 0 || e22 >= this.length)
        throw new RangeError("Index out of range");
      if (n22 < 0)
        throw new RangeError("sourceEnd out of bounds");
      n22 > this.length && (n22 = this.length), t22.length - r22 < n22 - e22 && (n22 = t22.length - r22 + e22);
      var i22 = n22 - e22;
      if (this === t22 && "function" == typeof Uint8Array.prototype.copyWithin)
        this.copyWithin(r22, e22, n22);
      else if (this === t22 && e22 < r22 && r22 < n22)
        for (var o22 = i22 - 1; o22 >= 0; --o22)
          t22[o22 + r22] = this[o22 + e22];
      else
        Uint8Array.prototype.set.call(t22, this.subarray(e22, n22), r22);
      return i22;
    }, u$1$12.prototype.fill = function(t22, r22, e22, n22) {
      if ("string" == typeof t22) {
        if ("string" == typeof r22 ? (n22 = r22, r22 = 0, e22 = this.length) : "string" == typeof e22 && (n22 = e22, e22 = this.length), void 0 !== n22 && "string" != typeof n22)
          throw new TypeError("encoding must be a string");
        if ("string" == typeof n22 && !u$1$12.isEncoding(n22))
          throw new TypeError("Unknown encoding: " + n22);
        if (1 === t22.length) {
          var i22 = t22.charCodeAt(0);
          ("utf8" === n22 && i22 < 128 || "latin1" === n22) && (t22 = i22);
        }
      } else
        "number" == typeof t22 ? t22 &= 255 : "boolean" == typeof t22 && (t22 = Number(t22));
      if (r22 < 0 || this.length < r22 || this.length < e22)
        throw new RangeError("Out of range index");
      if (e22 <= r22)
        return this;
      var o22;
      if (r22 >>>= 0, e22 = void 0 === e22 ? this.length : e22 >>> 0, t22 || (t22 = 0), "number" == typeof t22)
        for (o22 = r22; o22 < e22; ++o22)
          this[o22] = t22;
      else {
        var f22 = u$1$12.isBuffer(t22) ? t22 : u$1$12.from(t22, n22), s22 = f22.length;
        if (0 === s22)
          throw new TypeError('The value "' + t22 + '" is invalid for argument "value"');
        for (o22 = 0; o22 < e22 - r22; ++o22)
          this[o22 + r22] = f22[o22 % s22];
      }
      return this;
    };
    j3 = /[^+/0-9A-Za-z-_]/g;
    Y3 = function() {
      for (var t22 = new Array(256), r22 = 0; r22 < 16; ++r22)
        for (var e22 = 16 * r22, n22 = 0; n22 < 16; ++n22)
          t22[e22 + n22] = "0123456789abcdef"[r22] + "0123456789abcdef"[n22];
      return t22;
    }();
    e$1$12.Buffer;
    e$1$12.INSPECT_MAX_BYTES;
    e$1$12.kMaxLength;
    e5 = {};
    n5 = e$1$12;
    o5 = n5.Buffer;
    o5.from && o5.alloc && o5.allocUnsafe && o5.allocUnsafeSlow ? e5 = n5 : (t5(n5, e5), e5.Buffer = f5), f5.prototype = Object.create(o5.prototype), t5(o5, f5), f5.from = function(r22, e22, n22) {
      if ("number" == typeof r22)
        throw new TypeError("Argument must not be a number");
      return o5(r22, e22, n22);
    }, f5.alloc = function(r22, e22, n22) {
      if ("number" != typeof r22)
        throw new TypeError("Argument must be a number");
      var t22 = o5(r22);
      return void 0 !== e22 ? "string" == typeof n22 ? t22.fill(e22, n22) : t22.fill(e22) : t22.fill(0), t22;
    }, f5.allocUnsafe = function(r22) {
      if ("number" != typeof r22)
        throw new TypeError("Argument must be a number");
      return o5(r22);
    }, f5.allocUnsafeSlow = function(r22) {
      if ("number" != typeof r22)
        throw new TypeError("Argument must be a number");
      return n5.SlowBuffer(r22);
    };
    u5 = e5;
    e$13 = {};
    s5 = u5.Buffer;
    i5 = s5.isEncoding || function(t22) {
      switch ((t22 = "" + t22) && t22.toLowerCase()) {
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
    e$13.StringDecoder = a5, a5.prototype.write = function(t22) {
      if (0 === t22.length)
        return "";
      var e22, s22;
      if (this.lastNeed) {
        if (void 0 === (e22 = this.fillLast(t22)))
          return "";
        s22 = this.lastNeed, this.lastNeed = 0;
      } else
        s22 = 0;
      return s22 < t22.length ? e22 ? e22 + this.text(t22, s22) : this.text(t22, s22) : e22 || "";
    }, a5.prototype.end = function(t22) {
      var e22 = t22 && t22.length ? this.write(t22) : "";
      return this.lastNeed ? e22 + "\uFFFD" : e22;
    }, a5.prototype.text = function(t22, e22) {
      var s22 = function(t32, e32, s32) {
        var i32 = e32.length - 1;
        if (i32 < s32)
          return 0;
        var a22 = r5(e32[i32]);
        if (a22 >= 0)
          return a22 > 0 && (t32.lastNeed = a22 - 1), a22;
        if (--i32 < s32 || -2 === a22)
          return 0;
        if ((a22 = r5(e32[i32])) >= 0)
          return a22 > 0 && (t32.lastNeed = a22 - 2), a22;
        if (--i32 < s32 || -2 === a22)
          return 0;
        if ((a22 = r5(e32[i32])) >= 0)
          return a22 > 0 && (2 === a22 ? a22 = 0 : t32.lastNeed = a22 - 3), a22;
        return 0;
      }(this, t22, e22);
      if (!this.lastNeed)
        return t22.toString("utf8", e22);
      this.lastTotal = s22;
      var i22 = t22.length - (s22 - this.lastNeed);
      return t22.copy(this.lastChar, 0, i22), t22.toString("utf8", e22, i22);
    }, a5.prototype.fillLast = function(t22) {
      if (this.lastNeed <= t22.length)
        return t22.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, this.lastNeed), this.lastChar.toString(this.encoding, 0, this.lastTotal);
      t22.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, t22.length), this.lastNeed -= t22.length;
    };
    e$13.StringDecoder;
    e$13.StringDecoder;
    StringDecoder = e$13.StringDecoder;
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
        parser.state = S4.BEGIN;
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
        Object.create = function(o6) {
          function F4() {
          }
          F4.prototype = o6;
          var newf = new F4();
          return newf;
        };
      }
      if (!Object.keys) {
        Object.keys = function(o6) {
          var a6 = [];
          for (var i6 in o6)
            if (o6.hasOwnProperty(i6))
              a6.push(i6);
          return a6;
        };
      }
      function checkBufferLength(parser) {
        var maxAllowed = Math.max(sax.MAX_BUFFER_LENGTH, 10);
        var maxActual = 0;
        for (var i6 = 0, l6 = buffers.length; i6 < l6; i6++) {
          var len = parser[buffers[i6]].length;
          if (len > maxAllowed) {
            switch (buffers[i6]) {
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
                error(parser, "Max buffer length exceeded: " + buffers[i6]);
            }
          }
          maxActual = Math.max(maxActual, len);
        }
        var m5 = sax.MAX_BUFFER_LENGTH - maxActual;
        parser.bufferCheckPosition = m5 + parser.position;
      }
      function clearBuffers(parser) {
        for (var i6 = 0, l6 = buffers.length; i6 < l6; i6++) {
          parser[buffers[i6]] = "";
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
            set: function(h6) {
              if (!h6) {
                me2.removeAllListeners(ev);
                me2._parser["on" + ev] = h6;
                return h6;
              }
              me2.on(ev, h6);
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
      function isWhitespace(c6) {
        return c6 === " " || c6 === "\n" || c6 === "\r" || c6 === "	";
      }
      function isQuote(c6) {
        return c6 === '"' || c6 === "'";
      }
      function isAttribEnd(c6) {
        return c6 === ">" || isWhitespace(c6);
      }
      function isMatch(regex, c6) {
        return regex.test(c6);
      }
      function notMatch(regex, c6) {
        return !isMatch(regex, c6);
      }
      var S4 = 0;
      sax.STATE = {
        BEGIN: S4++,
        // leading byte order mark or whitespace
        BEGIN_WHITESPACE: S4++,
        // leading whitespace
        TEXT: S4++,
        // general stuff
        TEXT_ENTITY: S4++,
        // &amp and such.
        OPEN_WAKA: S4++,
        // <
        SGML_DECL: S4++,
        // <!BLARG
        SGML_DECL_QUOTED: S4++,
        // <!BLARG foo "bar
        DOCTYPE: S4++,
        // <!DOCTYPE
        DOCTYPE_QUOTED: S4++,
        // <!DOCTYPE "//blah
        DOCTYPE_DTD: S4++,
        // <!DOCTYPE "//blah" [ ...
        DOCTYPE_DTD_QUOTED: S4++,
        // <!DOCTYPE "//blah" [ "foo
        COMMENT_STARTING: S4++,
        // <!-
        COMMENT: S4++,
        // <!--
        COMMENT_ENDING: S4++,
        // <!-- blah -
        COMMENT_ENDED: S4++,
        // <!-- blah --
        CDATA: S4++,
        // <![CDATA[ something
        CDATA_ENDING: S4++,
        // ]
        CDATA_ENDING_2: S4++,
        // ]]
        PROC_INST: S4++,
        // <?hi
        PROC_INST_BODY: S4++,
        // <?hi there
        PROC_INST_ENDING: S4++,
        // <?hi "there" ?
        OPEN_TAG: S4++,
        // <strong
        OPEN_TAG_SLASH: S4++,
        // <strong /
        ATTRIB: S4++,
        // <a
        ATTRIB_NAME: S4++,
        // <a foo
        ATTRIB_NAME_SAW_WHITE: S4++,
        // <a foo _
        ATTRIB_VALUE: S4++,
        // <a foo=
        ATTRIB_VALUE_QUOTED: S4++,
        // <a foo="bar
        ATTRIB_VALUE_CLOSED: S4++,
        // <a foo="bar"
        ATTRIB_VALUE_UNQUOTED: S4++,
        // <a foo=bar
        ATTRIB_VALUE_ENTITY_Q: S4++,
        // <foo bar="&quot;"
        ATTRIB_VALUE_ENTITY_U: S4++,
        // <foo bar=&quot
        CLOSE_TAG: S4++,
        // </a
        CLOSE_TAG_SAW_WHITE: S4++,
        // </a   >
        SCRIPT: S4++,
        // <script> ...
        SCRIPT_ENDING: S4++
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
        var e6 = sax.ENTITIES[key];
        var s7 = typeof e6 === "number" ? String.fromCharCode(e6) : e6;
        sax.ENTITIES[key] = s7;
      });
      for (var s6 in sax.STATE) {
        sax.STATE[sax.STATE[s6]] = s6;
      }
      S4 = sax.STATE;
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
        if (parser.state !== S4.BEGIN && parser.state !== S4.BEGIN_WHITESPACE && parser.state !== S4.TEXT) {
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
        var i6 = name2.indexOf(":");
        var qualName = i6 < 0 ? ["", name2] : name2.split(":");
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
            Object.keys(tag.ns).forEach(function(p6) {
              emitNode(parser, "onopennamespace", {
                prefix: p6,
                uri: tag.ns[p6]
              });
            });
          }
          for (var i6 = 0, l6 = parser.attribList.length; i6 < l6; i6++) {
            var nv = parser.attribList[i6];
            var name2 = nv[0];
            var value = nv[1];
            var qualName = qname(name2, true);
            var prefix = qualName.prefix;
            var local = qualName.local;
            var uri = prefix === "" ? "" : tag.ns[prefix] || "";
            var a6 = {
              name: name2,
              value,
              prefix,
              local,
              uri
            };
            if (prefix && prefix !== "xmlns" && !uri) {
              strictFail(parser, "Unbound namespace prefix: " + JSON.stringify(prefix));
              a6.uri = prefix;
            }
            parser.tag.attributes[name2] = a6;
            emitNode(parser, "onattribute", a6);
          }
          parser.attribList.length = 0;
        }
        parser.tag.isSelfClosing = !!selfClosing;
        parser.sawRoot = true;
        parser.tags.push(parser.tag);
        emitNode(parser, "onopentag", parser.tag);
        if (!selfClosing) {
          if (!parser.noscript && parser.tagName.toLowerCase() === "script") {
            parser.state = S4.SCRIPT;
          } else {
            parser.state = S4.TEXT;
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
          parser.state = S4.TEXT;
          return;
        }
        if (parser.script) {
          if (parser.tagName !== "script") {
            parser.script += "</" + parser.tagName + ">";
            parser.tagName = "";
            parser.state = S4.SCRIPT;
            return;
          }
          emitNode(parser, "onscript", parser.script);
          parser.script = "";
        }
        var t6 = parser.tags.length;
        var tagName = parser.tagName;
        if (!parser.strict) {
          tagName = tagName[parser.looseCase]();
        }
        var closeTo = tagName;
        while (t6--) {
          var close = parser.tags[t6];
          if (close.name !== closeTo) {
            strictFail(parser, "Unexpected close tag");
          } else {
            break;
          }
        }
        if (t6 < 0) {
          strictFail(parser, "Unmatched closing tag: " + parser.tagName);
          parser.textNode += "</" + parser.tagName + ">";
          parser.state = S4.TEXT;
          return;
        }
        parser.tagName = tagName;
        var s7 = parser.tags.length;
        while (s7-- > t6) {
          var tag = parser.tag = parser.tags.pop();
          parser.tagName = parser.tag.name;
          emitNode(parser, "onclosetag", parser.tagName);
          var x4 = {};
          for (var i6 in tag.ns) {
            x4[i6] = tag.ns[i6];
          }
          var parent = parser.tags[parser.tags.length - 1] || parser;
          if (parser.opt.xmlns && tag.ns !== parent.ns) {
            Object.keys(tag.ns).forEach(function(p6) {
              var n6 = tag.ns[p6];
              emitNode(parser, "onclosenamespace", { prefix: p6, uri: n6 });
            });
          }
        }
        if (t6 === 0)
          parser.closedRoot = true;
        parser.tagName = parser.attribValue = parser.attribName = "";
        parser.attribList.length = 0;
        parser.state = S4.TEXT;
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
      function beginWhiteSpace(parser, c6) {
        if (c6 === "<") {
          parser.state = S4.OPEN_WAKA;
          parser.startTagPosition = parser.position;
        } else if (!isWhitespace(c6)) {
          strictFail(parser, "Non-whitespace before first tag.");
          parser.textNode = c6;
          parser.state = S4.TEXT;
        }
      }
      function charAt(chunk, i6) {
        var result = "";
        if (i6 < chunk.length) {
          result = chunk.charAt(i6);
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
        var i6 = 0;
        var c6 = "";
        while (true) {
          c6 = charAt(chunk, i6++);
          parser.c = c6;
          if (!c6) {
            break;
          }
          if (parser.trackPosition) {
            parser.position++;
            if (c6 === "\n") {
              parser.line++;
              parser.column = 0;
            } else {
              parser.column++;
            }
          }
          switch (parser.state) {
            case S4.BEGIN:
              parser.state = S4.BEGIN_WHITESPACE;
              if (c6 === "\uFEFF") {
                continue;
              }
              beginWhiteSpace(parser, c6);
              continue;
            case S4.BEGIN_WHITESPACE:
              beginWhiteSpace(parser, c6);
              continue;
            case S4.TEXT:
              if (parser.sawRoot && !parser.closedRoot) {
                var starti = i6 - 1;
                while (c6 && c6 !== "<" && c6 !== "&") {
                  c6 = charAt(chunk, i6++);
                  if (c6 && parser.trackPosition) {
                    parser.position++;
                    if (c6 === "\n") {
                      parser.line++;
                      parser.column = 0;
                    } else {
                      parser.column++;
                    }
                  }
                }
                parser.textNode += chunk.substring(starti, i6 - 1);
              }
              if (c6 === "<" && !(parser.sawRoot && parser.closedRoot && !parser.strict)) {
                parser.state = S4.OPEN_WAKA;
                parser.startTagPosition = parser.position;
              } else {
                if (!isWhitespace(c6) && (!parser.sawRoot || parser.closedRoot)) {
                  strictFail(parser, "Text data outside of root node.");
                }
                if (c6 === "&") {
                  parser.state = S4.TEXT_ENTITY;
                } else {
                  parser.textNode += c6;
                }
              }
              continue;
            case S4.SCRIPT:
              if (c6 === "<") {
                parser.state = S4.SCRIPT_ENDING;
              } else {
                parser.script += c6;
              }
              continue;
            case S4.SCRIPT_ENDING:
              if (c6 === "/") {
                parser.state = S4.CLOSE_TAG;
              } else {
                parser.script += "<" + c6;
                parser.state = S4.SCRIPT;
              }
              continue;
            case S4.OPEN_WAKA:
              if (c6 === "!") {
                parser.state = S4.SGML_DECL;
                parser.sgmlDecl = "";
              } else if (isWhitespace(c6)) {
              } else if (isMatch(nameStart, c6)) {
                parser.state = S4.OPEN_TAG;
                parser.tagName = c6;
              } else if (c6 === "/") {
                parser.state = S4.CLOSE_TAG;
                parser.tagName = "";
              } else if (c6 === "?") {
                parser.state = S4.PROC_INST;
                parser.procInstName = parser.procInstBody = "";
              } else {
                strictFail(parser, "Unencoded <");
                if (parser.startTagPosition + 1 < parser.position) {
                  var pad = parser.position - parser.startTagPosition;
                  c6 = new Array(pad).join(" ") + c6;
                }
                parser.textNode += "<" + c6;
                parser.state = S4.TEXT;
              }
              continue;
            case S4.SGML_DECL:
              if ((parser.sgmlDecl + c6).toUpperCase() === CDATA) {
                emitNode(parser, "onopencdata");
                parser.state = S4.CDATA;
                parser.sgmlDecl = "";
                parser.cdata = "";
              } else if (parser.sgmlDecl + c6 === "--") {
                parser.state = S4.COMMENT;
                parser.comment = "";
                parser.sgmlDecl = "";
              } else if ((parser.sgmlDecl + c6).toUpperCase() === DOCTYPE) {
                parser.state = S4.DOCTYPE;
                if (parser.doctype || parser.sawRoot) {
                  strictFail(
                    parser,
                    "Inappropriately located doctype declaration"
                  );
                }
                parser.doctype = "";
                parser.sgmlDecl = "";
              } else if (c6 === ">") {
                emitNode(parser, "onsgmldeclaration", parser.sgmlDecl);
                parser.sgmlDecl = "";
                parser.state = S4.TEXT;
              } else if (isQuote(c6)) {
                parser.state = S4.SGML_DECL_QUOTED;
                parser.sgmlDecl += c6;
              } else {
                parser.sgmlDecl += c6;
              }
              continue;
            case S4.SGML_DECL_QUOTED:
              if (c6 === parser.q) {
                parser.state = S4.SGML_DECL;
                parser.q = "";
              }
              parser.sgmlDecl += c6;
              continue;
            case S4.DOCTYPE:
              if (c6 === ">") {
                parser.state = S4.TEXT;
                emitNode(parser, "ondoctype", parser.doctype);
                parser.doctype = true;
              } else {
                parser.doctype += c6;
                if (c6 === "[") {
                  parser.state = S4.DOCTYPE_DTD;
                } else if (isQuote(c6)) {
                  parser.state = S4.DOCTYPE_QUOTED;
                  parser.q = c6;
                }
              }
              continue;
            case S4.DOCTYPE_QUOTED:
              parser.doctype += c6;
              if (c6 === parser.q) {
                parser.q = "";
                parser.state = S4.DOCTYPE;
              }
              continue;
            case S4.DOCTYPE_DTD:
              parser.doctype += c6;
              if (c6 === "]") {
                parser.state = S4.DOCTYPE;
              } else if (isQuote(c6)) {
                parser.state = S4.DOCTYPE_DTD_QUOTED;
                parser.q = c6;
              }
              continue;
            case S4.DOCTYPE_DTD_QUOTED:
              parser.doctype += c6;
              if (c6 === parser.q) {
                parser.state = S4.DOCTYPE_DTD;
                parser.q = "";
              }
              continue;
            case S4.COMMENT:
              if (c6 === "-") {
                parser.state = S4.COMMENT_ENDING;
              } else {
                parser.comment += c6;
              }
              continue;
            case S4.COMMENT_ENDING:
              if (c6 === "-") {
                parser.state = S4.COMMENT_ENDED;
                parser.comment = textopts(parser.opt, parser.comment);
                if (parser.comment) {
                  emitNode(parser, "oncomment", parser.comment);
                }
                parser.comment = "";
              } else {
                parser.comment += "-" + c6;
                parser.state = S4.COMMENT;
              }
              continue;
            case S4.COMMENT_ENDED:
              if (c6 !== ">") {
                strictFail(parser, "Malformed comment");
                parser.comment += "--" + c6;
                parser.state = S4.COMMENT;
              } else {
                parser.state = S4.TEXT;
              }
              continue;
            case S4.CDATA:
              if (c6 === "]") {
                parser.state = S4.CDATA_ENDING;
              } else {
                parser.cdata += c6;
              }
              continue;
            case S4.CDATA_ENDING:
              if (c6 === "]") {
                parser.state = S4.CDATA_ENDING_2;
              } else {
                parser.cdata += "]" + c6;
                parser.state = S4.CDATA;
              }
              continue;
            case S4.CDATA_ENDING_2:
              if (c6 === ">") {
                if (parser.cdata) {
                  emitNode(parser, "oncdata", parser.cdata);
                }
                emitNode(parser, "onclosecdata");
                parser.cdata = "";
                parser.state = S4.TEXT;
              } else if (c6 === "]") {
                parser.cdata += "]";
              } else {
                parser.cdata += "]]" + c6;
                parser.state = S4.CDATA;
              }
              continue;
            case S4.PROC_INST:
              if (c6 === "?") {
                parser.state = S4.PROC_INST_ENDING;
              } else if (isWhitespace(c6)) {
                parser.state = S4.PROC_INST_BODY;
              } else {
                parser.procInstName += c6;
              }
              continue;
            case S4.PROC_INST_BODY:
              if (!parser.procInstBody && isWhitespace(c6)) {
                continue;
              } else if (c6 === "?") {
                parser.state = S4.PROC_INST_ENDING;
              } else {
                parser.procInstBody += c6;
              }
              continue;
            case S4.PROC_INST_ENDING:
              if (c6 === ">") {
                emitNode(parser, "onprocessinginstruction", {
                  name: parser.procInstName,
                  body: parser.procInstBody
                });
                parser.procInstName = parser.procInstBody = "";
                parser.state = S4.TEXT;
              } else {
                parser.procInstBody += "?" + c6;
                parser.state = S4.PROC_INST_BODY;
              }
              continue;
            case S4.OPEN_TAG:
              if (isMatch(nameBody, c6)) {
                parser.tagName += c6;
              } else {
                newTag(parser);
                if (c6 === ">") {
                  openTag(parser);
                } else if (c6 === "/") {
                  parser.state = S4.OPEN_TAG_SLASH;
                } else {
                  if (!isWhitespace(c6)) {
                    strictFail(parser, "Invalid character in tag name");
                  }
                  parser.state = S4.ATTRIB;
                }
              }
              continue;
            case S4.OPEN_TAG_SLASH:
              if (c6 === ">") {
                openTag(parser, true);
                closeTag(parser);
              } else {
                strictFail(parser, "Forward-slash in opening tag not followed by >");
                parser.state = S4.ATTRIB;
              }
              continue;
            case S4.ATTRIB:
              if (isWhitespace(c6)) {
                continue;
              } else if (c6 === ">") {
                openTag(parser);
              } else if (c6 === "/") {
                parser.state = S4.OPEN_TAG_SLASH;
              } else if (isMatch(nameStart, c6)) {
                parser.attribName = c6;
                parser.attribValue = "";
                parser.state = S4.ATTRIB_NAME;
              } else {
                strictFail(parser, "Invalid attribute name");
              }
              continue;
            case S4.ATTRIB_NAME:
              if (c6 === "=") {
                parser.state = S4.ATTRIB_VALUE;
              } else if (c6 === ">") {
                strictFail(parser, "Attribute without value");
                parser.attribValue = parser.attribName;
                attrib(parser);
                openTag(parser);
              } else if (isWhitespace(c6)) {
                parser.state = S4.ATTRIB_NAME_SAW_WHITE;
              } else if (isMatch(nameBody, c6)) {
                parser.attribName += c6;
              } else {
                strictFail(parser, "Invalid attribute name");
              }
              continue;
            case S4.ATTRIB_NAME_SAW_WHITE:
              if (c6 === "=") {
                parser.state = S4.ATTRIB_VALUE;
              } else if (isWhitespace(c6)) {
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
                if (c6 === ">") {
                  openTag(parser);
                } else if (isMatch(nameStart, c6)) {
                  parser.attribName = c6;
                  parser.state = S4.ATTRIB_NAME;
                } else {
                  strictFail(parser, "Invalid attribute name");
                  parser.state = S4.ATTRIB;
                }
              }
              continue;
            case S4.ATTRIB_VALUE:
              if (isWhitespace(c6)) {
                continue;
              } else if (isQuote(c6)) {
                parser.q = c6;
                parser.state = S4.ATTRIB_VALUE_QUOTED;
              } else {
                strictFail(parser, "Unquoted attribute value");
                parser.state = S4.ATTRIB_VALUE_UNQUOTED;
                parser.attribValue = c6;
              }
              continue;
            case S4.ATTRIB_VALUE_QUOTED:
              if (c6 !== parser.q) {
                if (c6 === "&") {
                  parser.state = S4.ATTRIB_VALUE_ENTITY_Q;
                } else {
                  parser.attribValue += c6;
                }
                continue;
              }
              attrib(parser);
              parser.q = "";
              parser.state = S4.ATTRIB_VALUE_CLOSED;
              continue;
            case S4.ATTRIB_VALUE_CLOSED:
              if (isWhitespace(c6)) {
                parser.state = S4.ATTRIB;
              } else if (c6 === ">") {
                openTag(parser);
              } else if (c6 === "/") {
                parser.state = S4.OPEN_TAG_SLASH;
              } else if (isMatch(nameStart, c6)) {
                strictFail(parser, "No whitespace between attributes");
                parser.attribName = c6;
                parser.attribValue = "";
                parser.state = S4.ATTRIB_NAME;
              } else {
                strictFail(parser, "Invalid attribute name");
              }
              continue;
            case S4.ATTRIB_VALUE_UNQUOTED:
              if (!isAttribEnd(c6)) {
                if (c6 === "&") {
                  parser.state = S4.ATTRIB_VALUE_ENTITY_U;
                } else {
                  parser.attribValue += c6;
                }
                continue;
              }
              attrib(parser);
              if (c6 === ">") {
                openTag(parser);
              } else {
                parser.state = S4.ATTRIB;
              }
              continue;
            case S4.CLOSE_TAG:
              if (!parser.tagName) {
                if (isWhitespace(c6)) {
                  continue;
                } else if (notMatch(nameStart, c6)) {
                  if (parser.script) {
                    parser.script += "</" + c6;
                    parser.state = S4.SCRIPT;
                  } else {
                    strictFail(parser, "Invalid tagname in closing tag.");
                  }
                } else {
                  parser.tagName = c6;
                }
              } else if (c6 === ">") {
                closeTag(parser);
              } else if (isMatch(nameBody, c6)) {
                parser.tagName += c6;
              } else if (parser.script) {
                parser.script += "</" + parser.tagName;
                parser.tagName = "";
                parser.state = S4.SCRIPT;
              } else {
                if (!isWhitespace(c6)) {
                  strictFail(parser, "Invalid tagname in closing tag");
                }
                parser.state = S4.CLOSE_TAG_SAW_WHITE;
              }
              continue;
            case S4.CLOSE_TAG_SAW_WHITE:
              if (isWhitespace(c6)) {
                continue;
              }
              if (c6 === ">") {
                closeTag(parser);
              } else {
                strictFail(parser, "Invalid characters in closing tag");
              }
              continue;
            case S4.TEXT_ENTITY:
            case S4.ATTRIB_VALUE_ENTITY_Q:
            case S4.ATTRIB_VALUE_ENTITY_U:
              var returnState;
              var buffer2;
              switch (parser.state) {
                case S4.TEXT_ENTITY:
                  returnState = S4.TEXT;
                  buffer2 = "textNode";
                  break;
                case S4.ATTRIB_VALUE_ENTITY_Q:
                  returnState = S4.ATTRIB_VALUE_QUOTED;
                  buffer2 = "attribValue";
                  break;
                case S4.ATTRIB_VALUE_ENTITY_U:
                  returnState = S4.ATTRIB_VALUE_UNQUOTED;
                  buffer2 = "attribValue";
                  break;
              }
              if (c6 === ";") {
                parser[buffer2] += parseEntity(parser);
                parser.entity = "";
                parser.state = returnState;
              } else if (isMatch(parser.entity.length ? entityBody : entityStart, c6)) {
                parser.entity += c6;
              } else {
                strictFail(parser, "Invalid character in entity name");
                parser[buffer2] += "&" + parser.entity + c6;
                parser.entity = "";
                parser.state = returnState;
              }
              continue;
            default:
              throw new Error(parser, "Unknown state: " + parser.state);
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
        json = JSON.stringify(js, function(k4, v5) {
          return k4 === parentKey ? "_" : v5;
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
      var i6;
      if (element.elements && element.elements.length) {
        for (i6 = 0; i6 < element.elements.length; ++i6) {
          switch (element.elements[i6][options.typeKey]) {
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
      var i6, key, nodes, xml = [];
      for (key in element) {
        if (element.hasOwnProperty(key)) {
          nodes = isArray3(element[key]) ? element[key] : [element[key]];
          for (i6 = 0; i6 < nodes.length; ++i6) {
            switch (key) {
              case options.declarationKey:
                xml.push(writeDeclaration(nodes[i6], options, depth));
                break;
              case options.instructionKey:
                xml.push((options.indentInstruction ? writeIndentation(options, depth, firstLine) : "") + writeInstruction(nodes[i6], options, depth));
                break;
              case options.attributesKey:
              case options.parentKey:
                break;
              case options.textKey:
                xml.push((options.indentText ? writeIndentation(options, depth, firstLine) : "") + writeText(nodes[i6], options));
                break;
              case options.cdataKey:
                xml.push((options.indentCdata ? writeIndentation(options, depth, firstLine) : "") + writeCdata(nodes[i6], options));
                break;
              case options.doctypeKey:
                xml.push(writeIndentation(options, depth, firstLine) + writeDoctype(nodes[i6], options));
                break;
              case options.commentKey:
                xml.push(writeIndentation(options, depth, firstLine) + writeComment(nodes[i6], options));
                break;
              default:
                xml.push(writeIndentation(options, depth, firstLine) + writeElementCompact(nodes[i6], key, options, depth, hasContentCompact(nodes[i6], options)));
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
        } catch (e6) {
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
var import_xml_js = __toESM(require_lib(), 1);

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
function getRefList(state, citations) {
  if (!citations || !Object.keys(citations).length)
    return [];
  const elements = Object.keys(citations).sort().map((key) => {
    return citeToJatsRef(state, key, citations[key].cite);
  });
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
function getBack(state, { citations, footnotes, expressions }) {
  const elements = [
    ...getRefList(state, citations),
    ...getFootnotes(footnotes),
    ...getExpressions(expressions)
    // ack
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
  if (!title && !subtitle)
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
  return [
    {
      type: "element",
      name: "title-group",
      elements: [...articleTitle, ...articleSubtitle]
    }
  ];
}
function getArticleAuthors(frontmatter) {
  var _a;
  const contribs = (_a = frontmatter.authors) === null || _a === void 0 ? void 0 : _a.map((author) => {
    const attributes = {};
    const elements = [];
    attributes["contrib-type"] = "author";
    if (author.orcid) {
      elements.push({
        type: "element",
        name: "contrib-id",
        attributes: { "contrib-id-type": "orcid" },
        elements: [{ type: "text", text: author.orcid }]
      });
    }
    if (author.corresponding)
      attributes.corresp = "yes";
    if (author.name) {
      elements.push({
        type: "element",
        name: "string-name",
        elements: [{ type: "text", text: author.name }]
      });
    }
    if (author.roles) {
      elements.push(...author.roles.map((role) => {
        return {
          type: "element",
          name: "role",
          attributes: {
            vocab: "CRediT",
            "vocab-identifier": "http://credit.niso.org/",
            "vocab-term": `${role}`
          },
          elements: [{ type: "text", text: role }]
        };
      }));
    }
    if (author.affiliations) {
      elements.push(...author.affiliations.map((aff) => {
        return {
          type: "element",
          name: "aff",
          elements: [
            {
              type: "element",
              name: "institution",
              elements: [{ type: "text", text: aff }]
            }
          ]
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
  });
  return (contribs === null || contribs === void 0 ? void 0 : contribs.length) ? [{ type: "element", name: "contrib-group", elements: contribs }] : [];
}
function getArticlePermissions(frontmatter) {
  var _a, _b, _c, _d, _e;
  const text = (_c = (_b = (_a = frontmatter.license) === null || _a === void 0 ? void 0 : _a.content) === null || _b === void 0 ? void 0 : _b.url) !== null && _c !== void 0 ? _c : (_e = (_d = frontmatter.license) === null || _d === void 0 ? void 0 : _d.code) === null || _e === void 0 ? void 0 : _e.url;
  const freeToRead = frontmatter.open_access ? [{ type: "element", name: "ali:free_to_read" }] : [];
  return text ? [
    {
      type: "element",
      name: "permissions",
      elements: [
        ...freeToRead,
        {
          type: "element",
          name: "license",
          elements: [
            {
              type: "element",
              name: "ali:license_ref",
              elements: [{ type: "text", text }]
            }
          ]
        }
      ]
    }
  ] : [];
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
  if (first_page)
    pages.push({
      type: "element",
      name: "fpage",
      elements: [{ type: "text", text: `${first_page}` }]
    });
  if (last_page)
    pages.push({
      type: "element",
      name: "lpage",
      elements: [{ type: "text", text: `${last_page}` }]
    });
  return pages;
}
function getArticleMeta(frontmatter) {
  const elements = frontmatter ? [
    // article-id
    // article-version, article-version-alternatives
    // article-categories
    ...getArticleTitle(frontmatter),
    ...getArticleAuthors(frontmatter),
    // author-notes
    // pub-date or pub-date-not-available
    ...getArticleVolume(frontmatter),
    // volume-id
    // volume-series
    ...getArticleIssue(frontmatter),
    // issue-id
    // issue-title
    // issue-title-group
    // issue-sponsor
    // issue-part
    // volume-issue-group
    // isbn
    // supplement
    ...getArticlePages(frontmatter),
    // email, ext-link, uri, product, supplementary-material
    // history
    // pub-history
    ...getArticlePermissions(frontmatter)
    // self-uri
    // related-article, related-object
    // abstract
    // trans-abstract
    // kwd-group
    // funding-group
    // support-group
    // conference
    // counts
  ] : [];
  return { type: "element", name: "article-meta", elements };
}
function getFront(frontmatter) {
  const elements = [];
  const journalMeta = getJournalMeta();
  if (journalMeta)
    elements.push(journalMeta);
  const articleMeta = getArticleMeta(frontmatter);
  elements.push(articleMeta);
  return [{ type: "element", name: "front", elements }];
}

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
      const isHeaderRow = tr.children.reduce((h6, v5) => h6 && !!v5.header, true);
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
function headingsToSections(tree, current) {
  var _a;
  const children = [];
  function push(child) {
    if (current) {
      current.children.push(child);
    } else {
      children.push(child);
    }
  }
  function newSection(heading) {
    const { enumerator, enumerated, ...filtered } = heading;
    if (current && current.depth < heading.depth) {
      const next = { ...filtered, type: "section", children: [] };
      push(next);
      current = next;
      return { enumerator, enumerated };
    }
    current = { ...filtered, type: "section", children: [] };
    children.push(current);
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
  if (opts.isSubArticle) {
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
  const newId = `${idPrefix}-${keyInv.count}`;
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
    if (!((_a = inventory.cite) === null || _a === void 0 ? void 0 : _a.count)) {
      inventory.cite = { count: 0, lookup: {} };
    }
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
  var _a, _b, _c, _d, _e, _f, _g;
  const xrefs = selectAll("crossReference", mdast);
  const lookup = {
    ...(_a = inventory.section) === null || _a === void 0 ? void 0 : _a.lookup,
    ...(_b = inventory.expression) === null || _b === void 0 ? void 0 : _b.lookup,
    ...(_c = inventory.equation) === null || _c === void 0 ? void 0 : _c.lookup,
    ...(_d = inventory.figure) === null || _d === void 0 ? void 0 : _d.lookup,
    ...(_e = inventory.table) === null || _e === void 0 ? void 0 : _e.lookup,
    ...(_f = inventory.code) === null || _f === void 0 ? void 0 : _f.lookup,
    ...(_g = inventory.quote) === null || _g === void 0 ? void 0 : _g.lookup
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
  definitionTransform(tree);
  containerTransform(tree);
  tableTransform(tree);
  sectionTransform(tree, opts);
  citeGroupTransform(tree);
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
function escapeForXML(text) {
  return text.replace(/&(?!amp;)/g, "&amp;").replace(/</g, "&lt;");
}
function referenceKindToRefType(kind) {
  switch (kind) {
    case "heading":
      return RefType.sec;
    case "figure":
      return RefType.fig;
    case "equation":
      return RefType.dispFormula;
    case "table":
      return RefType.table;
    default:
      return RefType.custom;
  }
}
function renderLabel(node, state, template = (s6) => s6) {
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
      "xlink:href": escapeForXML(output.path)
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
      "xlink:href": escapeForXML(output.path)
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
        "xlink:href": escapeForXML(value.path)
      });
    });
  }
  state.closeNode();
}
function mathToMml(math, inline) {
  var _a, _b, _c;
  const katexXml = katex.renderToString(math, { output: "mathml", throwOnError: false });
  const katexJs = (0, import_xml_js.xml2js)(katexXml, { compact: false });
  const spanElement = (_a = katexJs.elements) === null || _a === void 0 ? void 0 : _a[0];
  const mathElement = (_b = spanElement === null || spanElement === void 0 ? void 0 : spanElement.elements) === null || _b === void 0 ? void 0 : _b[0];
  if (!mathElement)
    return;
  if (inline)
    mathElement.attributes = { ...mathElement.attributes, display: "inline" };
  (_c = mathElement.attributes) === null || _c === void 0 ? true : delete _c.xmlns;
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
  addMmlAndRemoveAnnotation(mathElement);
  return mathElement;
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
    state.openNode("def");
    state.renderInline(node, "p");
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
    state.openNode("list-item");
    state.renderInline(node, "p");
    state.closeNode();
  },
  thematicBreak(node, state) {
    state.warn("The use of thematic breaks should be restricted to use inside table cells.", node, "thematicBreak", {
      url: "https://jats.nlm.nih.gov/archiving/tag-library/1.3/element/hr.html"
    });
  },
  inlineMath(node, state) {
    state.openNode("inline-formula");
    state.openNode("alternatives");
    state.pushNode(mathToMml(node.value, true));
    state.openNode("tex-math");
    state.addLeaf("cdata", { cdata: node.value });
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
    renderLabel(node, state, (enumerator) => `(${enumerator})`);
    state.openNode("alternatives");
    state.pushNode(mathToMml(node.value));
    state.openNode("tex-math");
    state.addLeaf("cdata", { cdata: node.value });
    state.closeNode();
    state.closeNode();
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
  break(node, state, parent) {
    if (parent.type === "paragraph") {
      state.warn("There are no breaks allowed in paragraphs.", node, "break", {
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
      "xlink:href": escapeForXML(node.url)
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
    var _a, _b;
    if ((_a = node.url) === null || _a === void 0 ? void 0 : _a.startsWith("http")) {
      state.warn(`Image URL is remote (${node.url})`, node, "image");
    }
    if (state.data.isInContainer && node.alt) {
      state.openNode("alt-text");
      state.text(node.alt);
      state.closeNode();
    }
    const attrs = { mimetype: "image" };
    const ext = node.url ? (_b = node.url.split(".").slice(-1)) === null || _b === void 0 ? void 0 : _b[0] : "";
    if (ext)
      attrs["mime-subtype"] = ext;
    attrs["xlink:href"] = escapeForXML(node.url);
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
    state.openNode("named-content", { "content-type": "quantity" });
    state.text(`${node.number} `);
    state.openNode("abbrev", { "content-type": "unit", alt: node.alt });
    state.text(node.unit);
    state.closeNode();
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
    renderLabel(node, state, (s6) => `Figure ${s6} - Notebook.`);
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
  return { type: "text", text: escapeForXML(text) };
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
    this.handlers = (_a = opts === null || opts === void 0 ? void 0 : opts.handlers) !== null && _a !== void 0 ? _a : handlers;
    this.mdast = copyNode(mdast);
    basicTransformations(this.mdast, opts !== null && opts !== void 0 ? opts : {});
  }
  render() {
    this.renderChildren(this.mdast);
    while (this.stack.length > 1)
      this.closeNode();
  }
  top() {
    return this.stack[this.stack.length - 1];
  }
  warn(message, node, source, opts) {
    fileError(this.file, message, {
      ...opts,
      node,
      source: source ? `myst-to-jats:${source}` : "myst-to-jats"
    });
  }
  error(message, node, source, opts) {
    fileError(this.file, message, {
      ...opts,
      node,
      source: source ? `myst-to-jats:${source}` : "myst-to-jats"
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
      last.text += `${escapeForXML(value)}`;
      return last;
    }
    const node = createText(value);
    (_b = top.elements) === null || _b === void 0 ? void 0 : _b.push(node);
    return node;
  }
  renderChildren(node) {
    var _a;
    (_a = node.children) === null || _a === void 0 ? void 0 : _a.forEach((child) => {
      const handler = this.handlers[child.type];
      if (handler) {
        handler(child, this, node);
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
      isNotebookArticleRep
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
    const subArticleStates = subArticles.map((article2) => {
      const subArticleState = this.subArticleState(article2);
      referenceTargetTransform(subArticleState.mdast, inventory, article2.citations);
      return subArticleState;
    });
    [articleState, ...subArticleStates].forEach((state) => {
      referenceResolutionTransform(state.mdast, inventory);
      state.render();
    });
    const elements = [
      ...getFront(this.content.frontmatter),
      this.body(articleState),
      ...getBack(articleState, {
        citations: this.content.citations,
        footnotes: articleState.footnotes,
        expressions: articleState.expressions
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
  frontStub(frontmatter, notebookRep) {
    var _a;
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
    const articleMeta = getArticleMeta(stubFrontmatter);
    const elements = (_a = articleMeta === null || articleMeta === void 0 ? void 0 : articleMeta.elements) !== null && _a !== void 0 ? _a : [];
    if (notebookRep) {
      elements.push({
        type: "element",
        name: "article-version",
        attributes: { "article-version-type": "alt representation" },
        elements: [{ type: "text", text: "notebook" }]
      });
    }
    return [{ type: "element", name: "front-stub", elements }];
  }
  subArticleState(content) {
    return new JatsSerializer(this.file, content.mdast, {
      ...this.options,
      isNotebookArticleRep: false,
      isSubArticle: true,
      slug: content.slug
    });
  }
  subArticle(state, content, notebookRep) {
    const elements = [
      ...this.frontStub(content.frontmatter, notebookRep),
      { type: "element", name: "body", elements: state.elements() },
      ...getBack(state, {
        citations: content.citations,
        footnotes: state.footnotes,
        expressions: state.expressions
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
  const doc = new JatsDocument(file, content, opts !== null && opts !== void 0 ? opts : { handlers });
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
  const jats = (0, import_xml_js.js2xml)(element, {
    compact: false,
    spaces: opts === null || opts === void 0 ? void 0 : opts.spaces
  });
  file.result = jats;
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
  dist_default as default,
  writeJats
};
/*! Bundled license information:

@jspm/core/nodelibs/browser/chunk-44e51b61.js:
  (*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> *)
*/
/*! Bundled license information:

sax/lib/sax.js:
  (*! http://mths.be/fromcodepoint v0.1.0 by @mathias *)
*/
//# sourceMappingURL=/build/_shared/dist-CHMQMCHX.js.map
