import {
  ArrayExt,
  ChainIterator,
  ConflatableMessage,
  ElementExt,
  Message,
  MessageLoop,
  Platform,
  Selector,
  StringExt,
  chain,
  each,
  empty,
  filter,
  find,
  init_index_es6,
  init_index_es62,
  init_index_es63,
  iter,
  map,
  max,
  once,
  reduce,
  toArray
} from "/build/_shared/chunk-KAB4N37T.js";
import {
  __commonJS,
  __esm,
  __toESM
} from "/build/_shared/chunk-D5NAPBYJ.js";

// ../../node_modules/@lumino/properties/dist/index.es6.js
var AttachedProperty, Private;
var init_index_es64 = __esm({
  "../../node_modules/@lumino/properties/dist/index.es6.js"() {
    AttachedProperty = /** @class */
    function() {
      function AttachedProperty2(options) {
        this._pid = Private.nextPID();
        this.name = options.name;
        this._create = options.create;
        this._coerce = options.coerce || null;
        this._compare = options.compare || null;
        this._changed = options.changed || null;
      }
      AttachedProperty2.prototype.get = function(owner) {
        var value;
        var map2 = Private.ensureMap(owner);
        if (this._pid in map2) {
          value = map2[this._pid];
        } else {
          value = map2[this._pid] = this._createValue(owner);
        }
        return value;
      };
      AttachedProperty2.prototype.set = function(owner, value) {
        var oldValue;
        var map2 = Private.ensureMap(owner);
        if (this._pid in map2) {
          oldValue = map2[this._pid];
        } else {
          oldValue = map2[this._pid] = this._createValue(owner);
        }
        var newValue = this._coerceValue(owner, value);
        this._maybeNotify(owner, oldValue, map2[this._pid] = newValue);
      };
      AttachedProperty2.prototype.coerce = function(owner) {
        var oldValue;
        var map2 = Private.ensureMap(owner);
        if (this._pid in map2) {
          oldValue = map2[this._pid];
        } else {
          oldValue = map2[this._pid] = this._createValue(owner);
        }
        var newValue = this._coerceValue(owner, oldValue);
        this._maybeNotify(owner, oldValue, map2[this._pid] = newValue);
      };
      AttachedProperty2.prototype._createValue = function(owner) {
        var create = this._create;
        return create(owner);
      };
      AttachedProperty2.prototype._coerceValue = function(owner, value) {
        var coerce = this._coerce;
        return coerce ? coerce(owner, value) : value;
      };
      AttachedProperty2.prototype._compareValue = function(oldValue, newValue) {
        var compare = this._compare;
        return compare ? compare(oldValue, newValue) : oldValue === newValue;
      };
      AttachedProperty2.prototype._maybeNotify = function(owner, oldValue, newValue) {
        var changed = this._changed;
        if (changed && !this._compareValue(oldValue, newValue)) {
          changed(owner, oldValue, newValue);
        }
      };
      return AttachedProperty2;
    }();
    (function(AttachedProperty2) {
      function clearData(owner) {
        Private.ownerData.delete(owner);
      }
      AttachedProperty2.clearData = clearData;
    })(AttachedProperty || (AttachedProperty = {}));
    (function(Private8) {
      Private8.ownerData = /* @__PURE__ */ new WeakMap();
      Private8.nextPID = function() {
        var id = 0;
        return function() {
          var rand = Math.random();
          var stem = ("" + rand).slice(2);
          return "pid-" + stem + "-" + id++;
        };
      }();
      function ensureMap(owner) {
        var map2 = Private8.ownerData.get(owner);
        if (map2) {
          return map2;
        }
        map2 = /* @__PURE__ */ Object.create(null);
        Private8.ownerData.set(owner, map2);
        return map2;
      }
      Private8.ensureMap = ensureMap;
    })(Private || (Private = {}));
  }
});

// ../../node_modules/jupyterlab-plotly/node_modules/@lumino/coreutils/dist/index.js
var require_dist = __commonJS({
  "../../node_modules/jupyterlab-plotly/node_modules/@lumino/coreutils/dist/index.js"(exports, module) {
    (function(global, factory) {
      typeof exports === "object" && typeof module !== "undefined" ? factory(exports) : typeof define === "function" && define.amd ? define(["exports"], factory) : (global = typeof globalThis !== "undefined" ? globalThis : global || self, factory(global.lumino_coreutils = {}));
    })(exports, function(exports2) {
      "use strict";
      exports2.JSONExt = void 0;
      (function(JSONExt3) {
        JSONExt3.emptyObject = Object.freeze({});
        JSONExt3.emptyArray = Object.freeze([]);
        function isPrimitive(value) {
          return value === null || typeof value === "boolean" || typeof value === "number" || typeof value === "string";
        }
        JSONExt3.isPrimitive = isPrimitive;
        function isArray(value) {
          return Array.isArray(value);
        }
        JSONExt3.isArray = isArray;
        function isObject(value) {
          return !isPrimitive(value) && !isArray(value);
        }
        JSONExt3.isObject = isObject;
        function deepEqual(first, second) {
          if (first === second) {
            return true;
          }
          if (isPrimitive(first) || isPrimitive(second)) {
            return false;
          }
          var a1 = isArray(first);
          var a2 = isArray(second);
          if (a1 !== a2) {
            return false;
          }
          if (a1 && a2) {
            return deepArrayEqual(first, second);
          }
          return deepObjectEqual(first, second);
        }
        JSONExt3.deepEqual = deepEqual;
        function deepCopy(value) {
          if (isPrimitive(value)) {
            return value;
          }
          if (isArray(value)) {
            return deepArrayCopy(value);
          }
          return deepObjectCopy(value);
        }
        JSONExt3.deepCopy = deepCopy;
        function deepArrayEqual(first, second) {
          if (first === second) {
            return true;
          }
          if (first.length !== second.length) {
            return false;
          }
          for (var i = 0, n = first.length; i < n; ++i) {
            if (!deepEqual(first[i], second[i])) {
              return false;
            }
          }
          return true;
        }
        function deepObjectEqual(first, second) {
          if (first === second) {
            return true;
          }
          for (var key in first) {
            if (first[key] !== void 0 && !(key in second)) {
              return false;
            }
          }
          for (var key in second) {
            if (second[key] !== void 0 && !(key in first)) {
              return false;
            }
          }
          for (var key in first) {
            var firstValue = first[key];
            var secondValue = second[key];
            if (firstValue === void 0 && secondValue === void 0) {
              continue;
            }
            if (firstValue === void 0 || secondValue === void 0) {
              return false;
            }
            if (!deepEqual(firstValue, secondValue)) {
              return false;
            }
          }
          return true;
        }
        function deepArrayCopy(value) {
          var result = new Array(value.length);
          for (var i = 0, n = value.length; i < n; ++i) {
            result[i] = deepCopy(value[i]);
          }
          return result;
        }
        function deepObjectCopy(value) {
          var result = {};
          for (var key in value) {
            var subvalue = value[key];
            if (subvalue === void 0) {
              continue;
            }
            result[key] = deepCopy(subvalue);
          }
          return result;
        }
      })(exports2.JSONExt || (exports2.JSONExt = {}));
      var MimeData2 = (
        /** @class */
        function() {
          function MimeData3() {
            this._types = [];
            this._values = [];
          }
          MimeData3.prototype.types = function() {
            return this._types.slice();
          };
          MimeData3.prototype.hasData = function(mime) {
            return this._types.indexOf(mime) !== -1;
          };
          MimeData3.prototype.getData = function(mime) {
            var i = this._types.indexOf(mime);
            return i !== -1 ? this._values[i] : void 0;
          };
          MimeData3.prototype.setData = function(mime, data) {
            this.clearData(mime);
            this._types.push(mime);
            this._values.push(data);
          };
          MimeData3.prototype.clearData = function(mime) {
            var i = this._types.indexOf(mime);
            if (i !== -1) {
              this._types.splice(i, 1);
              this._values.splice(i, 1);
            }
          };
          MimeData3.prototype.clear = function() {
            this._types.length = 0;
            this._values.length = 0;
          };
          return MimeData3;
        }()
      );
      var PromiseDelegate = (
        /** @class */
        function() {
          function PromiseDelegate2() {
            var _this = this;
            this.promise = new Promise(function(resolve, reject) {
              _this._resolve = resolve;
              _this._reject = reject;
            });
          }
          PromiseDelegate2.prototype.resolve = function(value) {
            var resolve = this._resolve;
            resolve(value);
          };
          PromiseDelegate2.prototype.reject = function(reason) {
            var reject = this._reject;
            reject(reason);
          };
          return PromiseDelegate2;
        }()
      );
      var Token = (
        /** @class */
        function() {
          function Token2(name) {
            this.name = name;
            this._tokenStructuralPropertyT = null;
          }
          return Token2;
        }()
      );
      function fallbackRandomValues(buffer) {
        var value = 0;
        for (var i = 0, n = buffer.length; i < n; ++i) {
          if (i % 4 === 0) {
            value = Math.random() * 4294967295 >>> 0;
          }
          buffer[i] = value & 255;
          value >>>= 8;
        }
      }
      exports2.Random = void 0;
      (function(Random) {
        Random.getRandomValues = function() {
          var crypto = typeof window !== "undefined" && (window.crypto || window.msCrypto) || null;
          if (crypto && typeof crypto.getRandomValues === "function") {
            return function getRandomValues(buffer) {
              return crypto.getRandomValues(buffer);
            };
          }
          return fallbackRandomValues;
        }();
      })(exports2.Random || (exports2.Random = {}));
      function uuid4Factory(getRandomValues) {
        var bytes = new Uint8Array(16);
        var lut = new Array(256);
        for (var i = 0; i < 16; ++i) {
          lut[i] = "0" + i.toString(16);
        }
        for (var i = 16; i < 256; ++i) {
          lut[i] = i.toString(16);
        }
        return function uuid4() {
          getRandomValues(bytes);
          bytes[6] = 64 | bytes[6] & 15;
          bytes[8] = 128 | bytes[8] & 63;
          return lut[bytes[0]] + lut[bytes[1]] + lut[bytes[2]] + lut[bytes[3]] + "-" + lut[bytes[4]] + lut[bytes[5]] + "-" + lut[bytes[6]] + lut[bytes[7]] + "-" + lut[bytes[8]] + lut[bytes[9]] + "-" + lut[bytes[10]] + lut[bytes[11]] + lut[bytes[12]] + lut[bytes[13]] + lut[bytes[14]] + lut[bytes[15]];
        };
      }
      exports2.UUID = void 0;
      (function(UUID) {
        UUID.uuid4 = uuid4Factory(exports2.Random.getRandomValues);
      })(exports2.UUID || (exports2.UUID = {}));
      exports2.MimeData = MimeData2;
      exports2.PromiseDelegate = PromiseDelegate;
      exports2.Token = Token;
      Object.defineProperty(exports2, "__esModule", { value: true });
    });
  }
});

// ../../node_modules/jupyterlab-plotly/node_modules/@lumino/widgets/dist/index.es6.js
init_index_es6();
init_index_es63();
init_index_es62();
init_index_es64();

// ../../node_modules/jupyterlab-plotly/node_modules/@lumino/signaling/dist/index.es6.js
init_index_es6();
init_index_es64();
var Signal = (
  /** @class */
  function() {
    function Signal2(sender) {
      this._blockedCount = 0;
      this.sender = sender;
    }
    Signal2.prototype.block = function(fn) {
      this._blockedCount++;
      try {
        fn();
      } finally {
        this._blockedCount--;
      }
    };
    Signal2.prototype.connect = function(slot, thisArg) {
      return Private2.connect(this, slot, thisArg);
    };
    Signal2.prototype.disconnect = function(slot, thisArg) {
      return Private2.disconnect(this, slot, thisArg);
    };
    Signal2.prototype.emit = function(args) {
      if (!this._blockedCount) {
        Private2.emit(this, args);
      }
    };
    return Signal2;
  }()
);
(function(Signal2) {
  function blockAll(sender, fn) {
    var blockedProperty = Private2.blockedProperty;
    blockedProperty.set(sender, blockedProperty.get(sender) + 1);
    try {
      fn();
    } finally {
      blockedProperty.set(sender, blockedProperty.get(sender) - 1);
    }
  }
  Signal2.blockAll = blockAll;
  function disconnectBetween(sender, receiver) {
    Private2.disconnectBetween(sender, receiver);
  }
  Signal2.disconnectBetween = disconnectBetween;
  function disconnectSender(sender) {
    Private2.disconnectSender(sender);
  }
  Signal2.disconnectSender = disconnectSender;
  function disconnectReceiver(receiver) {
    Private2.disconnectReceiver(receiver);
  }
  Signal2.disconnectReceiver = disconnectReceiver;
  function disconnectAll(object) {
    Private2.disconnectAll(object);
  }
  Signal2.disconnectAll = disconnectAll;
  function clearData(object) {
    Private2.disconnectAll(object);
  }
  Signal2.clearData = clearData;
  function getExceptionHandler() {
    return Private2.exceptionHandler;
  }
  Signal2.getExceptionHandler = getExceptionHandler;
  function setExceptionHandler(handler) {
    var old = Private2.exceptionHandler;
    Private2.exceptionHandler = handler;
    return old;
  }
  Signal2.setExceptionHandler = setExceptionHandler;
})(Signal || (Signal = {}));
var Private2;
(function(Private8) {
  Private8.exceptionHandler = function(err) {
    console.error(err);
  };
  function connect(signal, slot, thisArg) {
    thisArg = thisArg || void 0;
    var receivers = receiversForSender.get(signal.sender);
    if (!receivers) {
      receivers = [];
      receiversForSender.set(signal.sender, receivers);
    }
    if (findConnection(receivers, signal, slot, thisArg)) {
      return false;
    }
    var receiver = thisArg || slot;
    var senders = sendersForReceiver.get(receiver);
    if (!senders) {
      senders = [];
      sendersForReceiver.set(receiver, senders);
    }
    var connection = { signal, slot, thisArg };
    receivers.push(connection);
    senders.push(connection);
    return true;
  }
  Private8.connect = connect;
  function disconnect(signal, slot, thisArg) {
    thisArg = thisArg || void 0;
    var receivers = receiversForSender.get(signal.sender);
    if (!receivers || receivers.length === 0) {
      return false;
    }
    var connection = findConnection(receivers, signal, slot, thisArg);
    if (!connection) {
      return false;
    }
    var receiver = thisArg || slot;
    var senders = sendersForReceiver.get(receiver);
    connection.signal = null;
    scheduleCleanup(receivers);
    scheduleCleanup(senders);
    return true;
  }
  Private8.disconnect = disconnect;
  function disconnectBetween(sender, receiver) {
    var receivers = receiversForSender.get(sender);
    if (!receivers || receivers.length === 0) {
      return;
    }
    var senders = sendersForReceiver.get(receiver);
    if (!senders || senders.length === 0) {
      return;
    }
    each(senders, function(connection) {
      if (!connection.signal) {
        return;
      }
      if (connection.signal.sender === sender) {
        connection.signal = null;
      }
    });
    scheduleCleanup(receivers);
    scheduleCleanup(senders);
  }
  Private8.disconnectBetween = disconnectBetween;
  function disconnectSender(sender) {
    var receivers = receiversForSender.get(sender);
    if (!receivers || receivers.length === 0) {
      return;
    }
    each(receivers, function(connection) {
      if (!connection.signal) {
        return;
      }
      var receiver = connection.thisArg || connection.slot;
      connection.signal = null;
      scheduleCleanup(sendersForReceiver.get(receiver));
    });
    scheduleCleanup(receivers);
  }
  Private8.disconnectSender = disconnectSender;
  function disconnectReceiver(receiver) {
    var senders = sendersForReceiver.get(receiver);
    if (!senders || senders.length === 0) {
      return;
    }
    each(senders, function(connection) {
      if (!connection.signal) {
        return;
      }
      var sender = connection.signal.sender;
      connection.signal = null;
      scheduleCleanup(receiversForSender.get(sender));
    });
    scheduleCleanup(senders);
  }
  Private8.disconnectReceiver = disconnectReceiver;
  function disconnectAll(object) {
    disconnectSender(object);
    disconnectReceiver(object);
  }
  Private8.disconnectAll = disconnectAll;
  function emit(signal, args) {
    if (Private8.blockedProperty.get(signal.sender) > 0) {
      return;
    }
    var receivers = receiversForSender.get(signal.sender);
    if (!receivers || receivers.length === 0) {
      return;
    }
    for (var i = 0, n = receivers.length; i < n; ++i) {
      var connection = receivers[i];
      if (connection.signal === signal) {
        invokeSlot(connection, args);
      }
    }
  }
  Private8.emit = emit;
  var receiversForSender = /* @__PURE__ */ new WeakMap();
  var sendersForReceiver = /* @__PURE__ */ new WeakMap();
  var dirtySet = /* @__PURE__ */ new Set();
  var schedule = function() {
    var ok = typeof requestAnimationFrame === "function";
    return ok ? requestAnimationFrame : setImmediate;
  }();
  function findConnection(connections, signal, slot, thisArg) {
    return find(connections, function(connection) {
      return connection.signal === signal && connection.slot === slot && connection.thisArg === thisArg;
    });
  }
  function invokeSlot(connection, args) {
    var signal = connection.signal, slot = connection.slot, thisArg = connection.thisArg;
    try {
      slot.call(thisArg, signal.sender, args);
    } catch (err) {
      Private8.exceptionHandler(err);
    }
  }
  function scheduleCleanup(array) {
    if (dirtySet.size === 0) {
      schedule(cleanupDirtySet);
    }
    dirtySet.add(array);
  }
  function cleanupDirtySet() {
    dirtySet.forEach(cleanupConnections);
    dirtySet.clear();
  }
  function cleanupConnections(connections) {
    ArrayExt.removeAllWhere(connections, isDeadConnection);
  }
  function isDeadConnection(connection) {
    return connection.signal === null;
  }
  Private8.blockedProperty = new AttachedProperty({
    name: "blocked",
    create: function() {
      return 0;
    }
  });
})(Private2 || (Private2 = {}));

// ../../node_modules/jupyterlab-plotly/node_modules/@lumino/disposable/dist/index.es6.js
init_index_es6();
var extendStatics = function(d, b) {
  extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
    d2.__proto__ = b2;
  } || function(d2, b2) {
    for (var p in b2)
      if (Object.prototype.hasOwnProperty.call(b2, p))
        d2[p] = b2[p];
  };
  return extendStatics(d, b);
};
function __extends(d, b) {
  if (typeof b !== "function" && b !== null)
    throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
  extendStatics(d, b);
  function __() {
    this.constructor = d;
  }
  d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}
var DisposableDelegate = (
  /** @class */
  function() {
    function DisposableDelegate2(fn) {
      this._fn = fn;
    }
    Object.defineProperty(DisposableDelegate2.prototype, "isDisposed", {
      /**
       * Test whether the delegate has been disposed.
       */
      get: function() {
        return !this._fn;
      },
      enumerable: true,
      configurable: true
    });
    DisposableDelegate2.prototype.dispose = function() {
      if (!this._fn) {
        return;
      }
      var fn = this._fn;
      this._fn = null;
      fn();
    };
    return DisposableDelegate2;
  }()
);
var ObservableDisposableDelegate = (
  /** @class */
  function(_super) {
    __extends(ObservableDisposableDelegate2, _super);
    function ObservableDisposableDelegate2() {
      var _this = _super !== null && _super.apply(this, arguments) || this;
      _this._disposed = new Signal(_this);
      return _this;
    }
    Object.defineProperty(ObservableDisposableDelegate2.prototype, "disposed", {
      /**
       * A signal emitted when the delegate is disposed.
       */
      get: function() {
        return this._disposed;
      },
      enumerable: true,
      configurable: true
    });
    ObservableDisposableDelegate2.prototype.dispose = function() {
      if (this.isDisposed) {
        return;
      }
      _super.prototype.dispose.call(this);
      this._disposed.emit(void 0);
      Signal.clearData(this);
    };
    return ObservableDisposableDelegate2;
  }(DisposableDelegate)
);
var DisposableSet = (
  /** @class */
  function() {
    function DisposableSet2() {
      this._isDisposed = false;
      this._items = /* @__PURE__ */ new Set();
    }
    Object.defineProperty(DisposableSet2.prototype, "isDisposed", {
      /**
       * Test whether the set has been disposed.
       */
      get: function() {
        return this._isDisposed;
      },
      enumerable: true,
      configurable: true
    });
    DisposableSet2.prototype.dispose = function() {
      if (this._isDisposed) {
        return;
      }
      this._isDisposed = true;
      this._items.forEach(function(item) {
        item.dispose();
      });
      this._items.clear();
    };
    DisposableSet2.prototype.contains = function(item) {
      return this._items.has(item);
    };
    DisposableSet2.prototype.add = function(item) {
      this._items.add(item);
    };
    DisposableSet2.prototype.remove = function(item) {
      this._items.delete(item);
    };
    DisposableSet2.prototype.clear = function() {
      this._items.clear();
    };
    return DisposableSet2;
  }()
);
(function(DisposableSet2) {
  function from(items) {
    var set = new DisposableSet2();
    each(items, function(item) {
      set.add(item);
    });
    return set;
  }
  DisposableSet2.from = from;
})(DisposableSet || (DisposableSet = {}));
var ObservableDisposableSet = (
  /** @class */
  function(_super) {
    __extends(ObservableDisposableSet2, _super);
    function ObservableDisposableSet2() {
      var _this = _super !== null && _super.apply(this, arguments) || this;
      _this._disposed = new Signal(_this);
      return _this;
    }
    Object.defineProperty(ObservableDisposableSet2.prototype, "disposed", {
      /**
       * A signal emitted when the set is disposed.
       */
      get: function() {
        return this._disposed;
      },
      enumerable: true,
      configurable: true
    });
    ObservableDisposableSet2.prototype.dispose = function() {
      if (this.isDisposed) {
        return;
      }
      _super.prototype.dispose.call(this);
      this._disposed.emit(void 0);
      Signal.clearData(this);
    };
    return ObservableDisposableSet2;
  }(DisposableSet)
);
(function(ObservableDisposableSet2) {
  function from(items) {
    var set = new ObservableDisposableSet2();
    each(items, function(item) {
      set.add(item);
    });
    return set;
  }
  ObservableDisposableSet2.from = from;
})(ObservableDisposableSet || (ObservableDisposableSet = {}));

// ../../node_modules/jupyterlab-plotly/node_modules/@lumino/dragdrop/dist/index.es6.js
var Drag = (
  /** @class */
  function() {
    function Drag2(options) {
      var _this = this;
      this._onScrollFrame = function() {
        if (!_this._scrollTarget) {
          return;
        }
        var _a = _this._scrollTarget, element = _a.element, edge = _a.edge, distance = _a.distance;
        var d = Private3.SCROLL_EDGE_SIZE - distance;
        var f = Math.pow(d / Private3.SCROLL_EDGE_SIZE, 2);
        var s = Math.max(1, Math.round(f * Private3.SCROLL_EDGE_SIZE));
        switch (edge) {
          case "top":
            element.scrollTop -= s;
            break;
          case "left":
            element.scrollLeft -= s;
            break;
          case "right":
            element.scrollLeft += s;
            break;
          case "bottom":
            element.scrollTop += s;
            break;
        }
        requestAnimationFrame(_this._onScrollFrame);
      };
      this._disposed = false;
      this._dropAction = "none";
      this._override = null;
      this._currentTarget = null;
      this._currentElement = null;
      this._promise = null;
      this._scrollTarget = null;
      this._resolve = null;
      this.document = options.document || document;
      this.mimeData = options.mimeData;
      this.dragImage = options.dragImage || null;
      this.proposedAction = options.proposedAction || "copy";
      this.supportedActions = options.supportedActions || "all";
      this.source = options.source || null;
    }
    Drag2.prototype.dispose = function() {
      if (this._disposed) {
        return;
      }
      this._disposed = true;
      if (this._currentTarget) {
        var event_1 = Private3.createMouseEvent("pointerup", -1, -1);
        Private3.dispatchDragLeave(this, this._currentTarget, null, event_1);
      }
      this._finalize("none");
    };
    Object.defineProperty(Drag2.prototype, "isDisposed", {
      /**
       * Test whether the drag object is disposed.
       */
      get: function() {
        return this._disposed;
      },
      enumerable: true,
      configurable: true
    });
    Drag2.prototype.start = function(clientX, clientY) {
      var _this = this;
      if (this._disposed) {
        return Promise.resolve("none");
      }
      if (this._promise) {
        return this._promise;
      }
      this._addListeners();
      this._attachDragImage(clientX, clientY);
      this._promise = new Promise(function(resolve, reject) {
        _this._resolve = resolve;
      });
      var event = Private3.createMouseEvent("pointermove", clientX, clientY);
      document.dispatchEvent(event);
      return this._promise;
    };
    Drag2.prototype.handleEvent = function(event) {
      switch (event.type) {
        case "mousemove":
          this._evtMouseMove(event);
          break;
        case "mouseup":
          this._evtMouseUp(event);
          break;
        case "pointermove":
          this._evtMouseMove(event);
          break;
        case "pointerup":
          this._evtMouseUp(event);
          break;
        case "keydown":
          this._evtKeyDown(event);
          break;
        default:
          event.preventDefault();
          event.stopPropagation();
          break;
      }
    };
    Drag2.prototype.moveDragImage = function(clientX, clientY) {
      if (!this.dragImage) {
        return;
      }
      var style = this.dragImage.style;
      style.top = clientY + "px";
      style.left = clientX + "px";
    };
    Drag2.prototype._evtMouseMove = function(event) {
      event.preventDefault();
      event.stopPropagation();
      this._updateCurrentTarget(event);
      this._updateDragScroll(event);
      this.moveDragImage(event.clientX, event.clientY);
    };
    Drag2.prototype._evtMouseUp = function(event) {
      event.preventDefault();
      event.stopPropagation();
      if (event.button !== 0) {
        return;
      }
      this._updateCurrentTarget(event);
      if (!this._currentTarget) {
        this._finalize("none");
        return;
      }
      if (this._dropAction === "none") {
        Private3.dispatchDragLeave(this, this._currentTarget, null, event);
        this._finalize("none");
        return;
      }
      var action = Private3.dispatchDrop(this, this._currentTarget, event);
      this._finalize(action);
    };
    Drag2.prototype._evtKeyDown = function(event) {
      event.preventDefault();
      event.stopPropagation();
      if (event.keyCode === 27) {
        this.dispose();
      }
    };
    Drag2.prototype._addListeners = function() {
      document.addEventListener("mousedown", this, true);
      document.addEventListener("mousemove", this, true);
      document.addEventListener("mouseup", this, true);
      document.addEventListener("mouseenter", this, true);
      document.addEventListener("mouseleave", this, true);
      document.addEventListener("mouseover", this, true);
      document.addEventListener("mouseout", this, true);
      document.addEventListener("pointerdown", this, true);
      document.addEventListener("pointermove", this, true);
      document.addEventListener("pointerup", this, true);
      document.addEventListener("pointerenter", this, true);
      document.addEventListener("pointerleave", this, true);
      document.addEventListener("pointerover", this, true);
      document.addEventListener("pointerout", this, true);
      document.addEventListener("keydown", this, true);
      document.addEventListener("keyup", this, true);
      document.addEventListener("keypress", this, true);
      document.addEventListener("contextmenu", this, true);
    };
    Drag2.prototype._removeListeners = function() {
      document.removeEventListener("mousedown", this, true);
      document.removeEventListener("mousemove", this, true);
      document.removeEventListener("mouseup", this, true);
      document.removeEventListener("mouseenter", this, true);
      document.removeEventListener("mouseleave", this, true);
      document.removeEventListener("mouseover", this, true);
      document.removeEventListener("mouseout", this, true);
      document.removeEventListener("pointerdown", this, true);
      document.removeEventListener("pointermove", this, true);
      document.removeEventListener("pointerup", this, true);
      document.removeEventListener("pointerenter", this, true);
      document.removeEventListener("pointerleave", this, true);
      document.removeEventListener("pointerover", this, true);
      document.removeEventListener("pointerout", this, true);
      document.removeEventListener("keydown", this, true);
      document.removeEventListener("keyup", this, true);
      document.removeEventListener("keypress", this, true);
      document.removeEventListener("contextmenu", this, true);
    };
    Drag2.prototype._updateDragScroll = function(event) {
      var target = Private3.findScrollTarget(event);
      if (!this._scrollTarget && !target) {
        return;
      }
      if (!this._scrollTarget) {
        setTimeout(this._onScrollFrame, 500);
      }
      this._scrollTarget = target;
    };
    Drag2.prototype._updateCurrentTarget = function(event) {
      var prevTarget = this._currentTarget;
      var currTarget = this._currentTarget;
      var prevElem = this._currentElement;
      var currElem = this.document.elementFromPoint(event.clientX, event.clientY);
      this._currentElement = currElem;
      if (currElem !== prevElem && currElem !== currTarget) {
        Private3.dispatchDragExit(this, currTarget, currElem, event);
      }
      if (currElem !== prevElem && currElem !== currTarget) {
        currTarget = Private3.dispatchDragEnter(this, currElem, currTarget, event);
      }
      if (currTarget !== prevTarget) {
        this._currentTarget = currTarget;
        Private3.dispatchDragLeave(this, prevTarget, currTarget, event);
      }
      var action = Private3.dispatchDragOver(this, currTarget, event);
      this._setDropAction(action);
    };
    Drag2.prototype._attachDragImage = function(clientX, clientY) {
      if (!this.dragImage) {
        return;
      }
      this.dragImage.classList.add("lm-mod-drag-image");
      this.dragImage.classList.add("p-mod-drag-image");
      var style = this.dragImage.style;
      style.pointerEvents = "none";
      style.position = "fixed";
      style.top = clientY + "px";
      style.left = clientX + "px";
      var body = this.document instanceof Document ? this.document.body : this.document.firstElementChild;
      body.appendChild(this.dragImage);
    };
    Drag2.prototype._detachDragImage = function() {
      if (!this.dragImage) {
        return;
      }
      var parent = this.dragImage.parentNode;
      if (!parent) {
        return;
      }
      parent.removeChild(this.dragImage);
    };
    Drag2.prototype._setDropAction = function(action) {
      action = Private3.validateAction(action, this.supportedActions);
      if (this._override && this._dropAction === action) {
        return;
      }
      switch (action) {
        case "none":
          this._dropAction = action;
          this._override = Drag2.overrideCursor("no-drop", this.document);
          break;
        case "copy":
          this._dropAction = action;
          this._override = Drag2.overrideCursor("copy", this.document);
          break;
        case "link":
          this._dropAction = action;
          this._override = Drag2.overrideCursor("alias", this.document);
          break;
        case "move":
          this._dropAction = action;
          this._override = Drag2.overrideCursor("move", this.document);
          break;
      }
    };
    Drag2.prototype._finalize = function(action) {
      var resolve = this._resolve;
      this._removeListeners();
      this._detachDragImage();
      if (this._override) {
        this._override.dispose();
        this._override = null;
      }
      this.mimeData.clear();
      this._disposed = true;
      this._dropAction = "none";
      this._currentTarget = null;
      this._currentElement = null;
      this._scrollTarget = null;
      this._promise = null;
      this._resolve = null;
      if (resolve) {
        resolve(action);
      }
    };
    return Drag2;
  }()
);
(function(Drag2) {
  function overrideCursor(cursor, doc) {
    if (doc === void 0) {
      doc = document;
    }
    var id = ++overrideCursorID;
    var body = doc instanceof Document ? doc.body : doc.firstElementChild;
    body.style.cursor = cursor;
    body.classList.add("lm-mod-override-cursor");
    body.classList.add("p-mod-override-cursor");
    return new DisposableDelegate(function() {
      if (id === overrideCursorID) {
        body.style.cursor = "";
        body.classList.remove("lm-mod-override-cursor");
        body.classList.remove("p-mod-override-cursor");
      }
    });
  }
  Drag2.overrideCursor = overrideCursor;
  var overrideCursorID = 0;
})(Drag || (Drag = {}));
var Private3;
(function(Private8) {
  Private8.SCROLL_EDGE_SIZE = 20;
  function validateAction(action, supported) {
    return actionTable[action] & supportedTable[supported] ? action : "none";
  }
  Private8.validateAction = validateAction;
  function createMouseEvent(type, clientX, clientY) {
    var event = document.createEvent("MouseEvent");
    event.initMouseEvent(type, true, true, window, 0, 0, 0, clientX, clientY, false, false, false, false, 0, null);
    return event;
  }
  Private8.createMouseEvent = createMouseEvent;
  function findScrollTarget(event) {
    var x = event.clientX;
    var y = event.clientY;
    var element = document.elementFromPoint(x, y);
    for (; element; element = element.parentElement) {
      var scrollable = element.hasAttribute("data-lm-dragscroll");
      scrollable = scrollable || element.hasAttribute("data-p-dragscroll");
      if (!scrollable) {
        continue;
      }
      var offsetX = 0;
      var offsetY = 0;
      if (element === document.body) {
        offsetX = window.pageXOffset;
        offsetY = window.pageYOffset;
      }
      var r = element.getBoundingClientRect();
      var top_1 = r.top + offsetY;
      var left = r.left + offsetX;
      var right = left + r.width;
      var bottom = top_1 + r.height;
      if (x < left || x >= right || y < top_1 || y >= bottom) {
        continue;
      }
      var dl = x - left + 1;
      var dt = y - top_1 + 1;
      var dr = right - x;
      var db = bottom - y;
      var distance = Math.min(dl, dt, dr, db);
      if (distance > Private8.SCROLL_EDGE_SIZE) {
        continue;
      }
      var edge = void 0;
      switch (distance) {
        case db:
          edge = "bottom";
          break;
        case dt:
          edge = "top";
          break;
        case dr:
          edge = "right";
          break;
        case dl:
          edge = "left";
          break;
        default:
          throw "unreachable";
      }
      var dsw = element.scrollWidth - element.clientWidth;
      var dsh = element.scrollHeight - element.clientHeight;
      var shouldScroll = void 0;
      switch (edge) {
        case "top":
          shouldScroll = dsh > 0 && element.scrollTop > 0;
          break;
        case "left":
          shouldScroll = dsw > 0 && element.scrollLeft > 0;
          break;
        case "right":
          shouldScroll = dsw > 0 && element.scrollLeft < dsw;
          break;
        case "bottom":
          shouldScroll = dsh > 0 && element.scrollTop < dsh;
          break;
        default:
          throw "unreachable";
      }
      if (!shouldScroll) {
        continue;
      }
      return { element, edge, distance };
    }
    return null;
  }
  Private8.findScrollTarget = findScrollTarget;
  function dispatchDragEnter(drag, currElem, currTarget, event) {
    if (!currElem) {
      return null;
    }
    var dragEvent = createDragEvent("lm-dragenter", drag, event, currTarget);
    var canceled = !currElem.dispatchEvent(dragEvent);
    if (canceled) {
      return currElem;
    }
    dragEvent = createDragEvent("p-dragenter", drag, event, currTarget);
    canceled = !currElem.dispatchEvent(dragEvent);
    if (canceled) {
      return currElem;
    }
    var body = drag.document instanceof Document ? drag.document.body : drag.document.firstElementChild;
    if (currElem === body) {
      return currTarget;
    }
    dragEvent = createDragEvent("lm-dragenter", drag, event, currTarget);
    body.dispatchEvent(dragEvent);
    dragEvent = createDragEvent("p-dragenter", drag, event, currTarget);
    body.dispatchEvent(dragEvent);
    return body;
  }
  Private8.dispatchDragEnter = dispatchDragEnter;
  function dispatchDragExit(drag, prevTarget, currTarget, event) {
    if (!prevTarget) {
      return;
    }
    var dragEvent = createDragEvent("lm-dragexit", drag, event, currTarget);
    prevTarget.dispatchEvent(dragEvent);
    dragEvent = createDragEvent("p-dragexit", drag, event, currTarget);
    prevTarget.dispatchEvent(dragEvent);
  }
  Private8.dispatchDragExit = dispatchDragExit;
  function dispatchDragLeave(drag, prevTarget, currTarget, event) {
    if (!prevTarget) {
      return;
    }
    var dragEvent = createDragEvent("lm-dragleave", drag, event, currTarget);
    prevTarget.dispatchEvent(dragEvent);
    dragEvent = createDragEvent("p-dragleave", drag, event, currTarget);
    prevTarget.dispatchEvent(dragEvent);
  }
  Private8.dispatchDragLeave = dispatchDragLeave;
  function dispatchDragOver(drag, currTarget, event) {
    if (!currTarget) {
      return "none";
    }
    var dragEvent = createDragEvent("lm-dragover", drag, event, null);
    var canceled = !currTarget.dispatchEvent(dragEvent);
    if (canceled) {
      return dragEvent.dropAction;
    }
    dragEvent = createDragEvent("p-dragover", drag, event, null);
    canceled = !currTarget.dispatchEvent(dragEvent);
    if (canceled) {
      return dragEvent.dropAction;
    }
    return "none";
  }
  Private8.dispatchDragOver = dispatchDragOver;
  function dispatchDrop(drag, currTarget, event) {
    if (!currTarget) {
      return "none";
    }
    var dragEvent = createDragEvent("lm-drop", drag, event, null);
    var canceled = !currTarget.dispatchEvent(dragEvent);
    if (canceled) {
      return dragEvent.dropAction;
    }
    dragEvent = createDragEvent("p-drop", drag, event, null);
    canceled = !currTarget.dispatchEvent(dragEvent);
    if (canceled) {
      return dragEvent.dropAction;
    }
    return "none";
  }
  Private8.dispatchDrop = dispatchDrop;
  var actionTable = {
    none: 0,
    copy: 1,
    link: 2,
    move: 4
  };
  var supportedTable = {
    none: actionTable["none"],
    copy: actionTable["copy"],
    link: actionTable["link"],
    move: actionTable["move"],
    "copy-link": actionTable["copy"] | actionTable["link"],
    "copy-move": actionTable["copy"] | actionTable["move"],
    "link-move": actionTable["link"] | actionTable["move"],
    all: actionTable["copy"] | actionTable["link"] | actionTable["move"]
  };
  function createDragEvent(type, drag, event, related) {
    var dragEvent = document.createEvent("MouseEvent");
    dragEvent.initMouseEvent(type, true, true, window, 0, event.screenX, event.screenY, event.clientX, event.clientY, event.ctrlKey, event.altKey, event.shiftKey, event.metaKey, event.button, related);
    dragEvent.dropAction = "none";
    dragEvent.mimeData = drag.mimeData;
    dragEvent.proposedAction = drag.proposedAction;
    dragEvent.supportedActions = drag.supportedActions;
    dragEvent.source = drag.source;
    return dragEvent;
  }
})(Private3 || (Private3 = {}));

// ../../node_modules/jupyterlab-plotly/node_modules/@lumino/widgets/dist/index.es6.js
var import_coreutils2 = __toESM(require_dist());

// ../../node_modules/jupyterlab-plotly/node_modules/@lumino/commands/dist/index.es6.js
init_index_es6();
var import_coreutils = __toESM(require_dist());
init_index_es63();

// ../../node_modules/jupyterlab-plotly/node_modules/@lumino/keyboard/dist/index.es6.js
function getKeyboardLayout() {
  return Private4.keyboardLayout;
}
var KeycodeLayout = (
  /** @class */
  function() {
    function KeycodeLayout2(name, codes, modifierKeys) {
      if (modifierKeys === void 0) {
        modifierKeys = [];
      }
      this.name = name;
      this._codes = codes;
      this._keys = KeycodeLayout2.extractKeys(codes);
      this._modifierKeys = KeycodeLayout2.convertToKeySet(modifierKeys);
    }
    KeycodeLayout2.prototype.keys = function() {
      return Object.keys(this._keys);
    };
    KeycodeLayout2.prototype.isValidKey = function(key) {
      return key in this._keys;
    };
    KeycodeLayout2.prototype.isModifierKey = function(key) {
      return key in this._modifierKeys;
    };
    KeycodeLayout2.prototype.keyForKeydownEvent = function(event) {
      return this._codes[event.keyCode] || "";
    };
    return KeycodeLayout2;
  }()
);
(function(KeycodeLayout2) {
  function extractKeys(codes) {
    var keys = /* @__PURE__ */ Object.create(null);
    for (var c in codes) {
      keys[codes[c]] = true;
    }
    return keys;
  }
  KeycodeLayout2.extractKeys = extractKeys;
  function convertToKeySet(keys) {
    var keySet = Object(null);
    for (var i = 0, n = keys.length; i < n; ++i) {
      keySet[keys[i]] = true;
    }
    return keySet;
  }
  KeycodeLayout2.convertToKeySet = convertToKeySet;
})(KeycodeLayout || (KeycodeLayout = {}));
var EN_US = new KeycodeLayout(
  "en-us",
  {
    8: "Backspace",
    9: "Tab",
    13: "Enter",
    16: "Shift",
    17: "Ctrl",
    18: "Alt",
    19: "Pause",
    27: "Escape",
    32: "Space",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    48: "0",
    49: "1",
    50: "2",
    51: "3",
    52: "4",
    53: "5",
    54: "6",
    55: "7",
    56: "8",
    57: "9",
    59: ";",
    61: "=",
    65: "A",
    66: "B",
    67: "C",
    68: "D",
    69: "E",
    70: "F",
    71: "G",
    72: "H",
    73: "I",
    74: "J",
    75: "K",
    76: "L",
    77: "M",
    78: "N",
    79: "O",
    80: "P",
    81: "Q",
    82: "R",
    83: "S",
    84: "T",
    85: "U",
    86: "V",
    87: "W",
    88: "X",
    89: "Y",
    90: "Z",
    91: "Meta",
    93: "ContextMenu",
    96: "0",
    97: "1",
    98: "2",
    99: "3",
    100: "4",
    101: "5",
    102: "6",
    103: "7",
    104: "8",
    105: "9",
    106: "*",
    107: "+",
    109: "-",
    110: ".",
    111: "/",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    173: "-",
    186: ";",
    187: "=",
    188: ",",
    189: "-",
    190: ".",
    191: "/",
    192: "`",
    219: "[",
    220: "\\",
    221: "]",
    222: "'",
    224: "Meta"
    // firefox
  },
  ["Shift", "Ctrl", "Alt", "Meta"]
  // modifier keys
);
var Private4;
(function(Private8) {
  Private8.keyboardLayout = EN_US;
})(Private4 || (Private4 = {}));

// ../../node_modules/jupyterlab-plotly/node_modules/@lumino/commands/dist/index.es6.js
var __assign = function() {
  __assign = Object.assign || function __assign3(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p))
          t[p] = s[p];
    }
    return t;
  };
  return __assign.apply(this, arguments);
};
var CommandRegistry = (
  /** @class */
  function() {
    function CommandRegistry2() {
      this._timerID = 0;
      this._replaying = false;
      this._keystrokes = [];
      this._keydownEvents = [];
      this._keyBindings = [];
      this._exactKeyMatch = null;
      this._commands = /* @__PURE__ */ Object.create(null);
      this._commandChanged = new Signal(this);
      this._commandExecuted = new Signal(this);
      this._keyBindingChanged = new Signal(this);
    }
    Object.defineProperty(CommandRegistry2.prototype, "commandChanged", {
      /**
       * A signal emitted when a command has changed.
       *
       * #### Notes
       * This signal is useful for visual representations of commands which
       * need to refresh when the state of a relevant command has changed.
       */
      get: function() {
        return this._commandChanged;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(CommandRegistry2.prototype, "commandExecuted", {
      /**
       * A signal emitted when a command has executed.
       *
       * #### Notes
       * Care should be taken when consuming this signal. The command system is used
       * by many components for many user actions. Handlers registered with this
       * signal must return quickly to ensure the overall application remains responsive.
       */
      get: function() {
        return this._commandExecuted;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(CommandRegistry2.prototype, "keyBindingChanged", {
      /**
       * A signal emitted when a key binding is changed.
       */
      get: function() {
        return this._keyBindingChanged;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(CommandRegistry2.prototype, "keyBindings", {
      /**
       * A read-only array of the key bindings in the registry.
       */
      get: function() {
        return this._keyBindings;
      },
      enumerable: true,
      configurable: true
    });
    CommandRegistry2.prototype.listCommands = function() {
      return Object.keys(this._commands);
    };
    CommandRegistry2.prototype.hasCommand = function(id) {
      return id in this._commands;
    };
    CommandRegistry2.prototype.addCommand = function(id, options) {
      var _this = this;
      if (id in this._commands) {
        throw new Error("Command '" + id + "' already registered.");
      }
      this._commands[id] = Private5.createCommand(options);
      this._commandChanged.emit({ id, type: "added" });
      return new DisposableDelegate(function() {
        delete _this._commands[id];
        _this._commandChanged.emit({ id, type: "removed" });
      });
    };
    CommandRegistry2.prototype.notifyCommandChanged = function(id) {
      if (id !== void 0 && !(id in this._commands)) {
        throw new Error("Command '" + id + "' is not registered.");
      }
      this._commandChanged.emit({ id, type: id ? "changed" : "many-changed" });
    };
    CommandRegistry2.prototype.describedBy = function(id) {
      var cmd = this._commands[id];
      return cmd ? cmd.describedBy || { args: null } : { args: null };
    };
    CommandRegistry2.prototype.label = function(id, args) {
      if (args === void 0) {
        args = import_coreutils.JSONExt.emptyObject;
      }
      var cmd = this._commands[id];
      return cmd ? cmd.label.call(void 0, args) : "";
    };
    CommandRegistry2.prototype.mnemonic = function(id, args) {
      if (args === void 0) {
        args = import_coreutils.JSONExt.emptyObject;
      }
      var cmd = this._commands[id];
      return cmd ? cmd.mnemonic.call(void 0, args) : -1;
    };
    CommandRegistry2.prototype.icon = function(id, args) {
      if (args === void 0) {
        args = import_coreutils.JSONExt.emptyObject;
      }
      var cmd = this._commands[id];
      return cmd ? cmd.icon.call(void 0, args) : (
        /* <DEPRECATED> */
        ""
      );
    };
    CommandRegistry2.prototype.iconClass = function(id, args) {
      if (args === void 0) {
        args = import_coreutils.JSONExt.emptyObject;
      }
      var cmd = this._commands[id];
      return cmd ? cmd.iconClass.call(void 0, args) : "";
    };
    CommandRegistry2.prototype.iconLabel = function(id, args) {
      if (args === void 0) {
        args = import_coreutils.JSONExt.emptyObject;
      }
      var cmd = this._commands[id];
      return cmd ? cmd.iconLabel.call(void 0, args) : "";
    };
    CommandRegistry2.prototype.caption = function(id, args) {
      if (args === void 0) {
        args = import_coreutils.JSONExt.emptyObject;
      }
      var cmd = this._commands[id];
      return cmd ? cmd.caption.call(void 0, args) : "";
    };
    CommandRegistry2.prototype.usage = function(id, args) {
      if (args === void 0) {
        args = import_coreutils.JSONExt.emptyObject;
      }
      var cmd = this._commands[id];
      return cmd ? cmd.usage.call(void 0, args) : "";
    };
    CommandRegistry2.prototype.className = function(id, args) {
      if (args === void 0) {
        args = import_coreutils.JSONExt.emptyObject;
      }
      var cmd = this._commands[id];
      return cmd ? cmd.className.call(void 0, args) : "";
    };
    CommandRegistry2.prototype.dataset = function(id, args) {
      if (args === void 0) {
        args = import_coreutils.JSONExt.emptyObject;
      }
      var cmd = this._commands[id];
      return cmd ? cmd.dataset.call(void 0, args) : {};
    };
    CommandRegistry2.prototype.isEnabled = function(id, args) {
      if (args === void 0) {
        args = import_coreutils.JSONExt.emptyObject;
      }
      var cmd = this._commands[id];
      return cmd ? cmd.isEnabled.call(void 0, args) : false;
    };
    CommandRegistry2.prototype.isToggled = function(id, args) {
      if (args === void 0) {
        args = import_coreutils.JSONExt.emptyObject;
      }
      var cmd = this._commands[id];
      return cmd ? cmd.isToggled.call(void 0, args) : false;
    };
    CommandRegistry2.prototype.isToggleable = function(id, args) {
      var cmd = this._commands[id];
      return cmd ? cmd.isToggleable : false;
    };
    CommandRegistry2.prototype.isVisible = function(id, args) {
      if (args === void 0) {
        args = import_coreutils.JSONExt.emptyObject;
      }
      var cmd = this._commands[id];
      return cmd ? cmd.isVisible.call(void 0, args) : false;
    };
    CommandRegistry2.prototype.execute = function(id, args) {
      if (args === void 0) {
        args = import_coreutils.JSONExt.emptyObject;
      }
      var cmd = this._commands[id];
      if (!cmd) {
        return Promise.reject(new Error("Command '" + id + "' not registered."));
      }
      var value;
      try {
        value = cmd.execute.call(void 0, args);
      } catch (err) {
        value = Promise.reject(err);
      }
      var result = Promise.resolve(value);
      this._commandExecuted.emit({ id, args, result });
      return result;
    };
    CommandRegistry2.prototype.addKeyBinding = function(options) {
      var _this = this;
      var binding = Private5.createKeyBinding(options);
      this._keyBindings.push(binding);
      this._keyBindingChanged.emit({ binding, type: "added" });
      return new DisposableDelegate(function() {
        ArrayExt.removeFirstOf(_this._keyBindings, binding);
        _this._keyBindingChanged.emit({ binding, type: "removed" });
      });
    };
    CommandRegistry2.prototype.processKeydownEvent = function(event) {
      if (this._replaying || CommandRegistry2.isModifierKeyPressed(event)) {
        return;
      }
      var keystroke = CommandRegistry2.keystrokeForKeydownEvent(event);
      if (!keystroke) {
        this._replayKeydownEvents();
        this._clearPendingState();
        return;
      }
      this._keystrokes.push(keystroke);
      var _a = Private5.matchKeyBinding(this._keyBindings, this._keystrokes, event), exact = _a.exact, partial = _a.partial;
      if (!exact && !partial) {
        this._replayKeydownEvents();
        this._clearPendingState();
        return;
      }
      event.preventDefault();
      event.stopPropagation();
      if (exact && !partial) {
        this._executeKeyBinding(exact);
        this._clearPendingState();
        return;
      }
      if (exact) {
        this._exactKeyMatch = exact;
      }
      this._keydownEvents.push(event);
      this._startTimer();
    };
    CommandRegistry2.prototype._startTimer = function() {
      var _this = this;
      this._clearTimer();
      this._timerID = window.setTimeout(function() {
        _this._onPendingTimeout();
      }, Private5.CHORD_TIMEOUT);
    };
    CommandRegistry2.prototype._clearTimer = function() {
      if (this._timerID !== 0) {
        clearTimeout(this._timerID);
        this._timerID = 0;
      }
    };
    CommandRegistry2.prototype._replayKeydownEvents = function() {
      if (this._keydownEvents.length === 0) {
        return;
      }
      this._replaying = true;
      this._keydownEvents.forEach(Private5.replayKeyEvent);
      this._replaying = false;
    };
    CommandRegistry2.prototype._executeKeyBinding = function(binding) {
      var command = binding.command, args = binding.args;
      if (!this.hasCommand(command) || !this.isEnabled(command, args)) {
        var word = this.hasCommand(command) ? "enabled" : "registered";
        var keys = binding.keys.join(", ");
        var msg1 = "Cannot execute key binding '" + keys + "':";
        var msg2 = "command '" + command + "' is not " + word + ".";
        console.warn(msg1 + " " + msg2);
        return;
      }
      this.execute(command, args);
    };
    CommandRegistry2.prototype._clearPendingState = function() {
      this._clearTimer();
      this._exactKeyMatch = null;
      this._keystrokes.length = 0;
      this._keydownEvents.length = 0;
    };
    CommandRegistry2.prototype._onPendingTimeout = function() {
      this._timerID = 0;
      if (this._exactKeyMatch) {
        this._executeKeyBinding(this._exactKeyMatch);
      } else {
        this._replayKeydownEvents();
      }
      this._clearPendingState();
    };
    return CommandRegistry2;
  }()
);
(function(CommandRegistry2) {
  function parseKeystroke(keystroke) {
    var key = "";
    var alt = false;
    var cmd = false;
    var ctrl = false;
    var shift = false;
    for (var _i = 0, _a = keystroke.split(/\s+/); _i < _a.length; _i++) {
      var token = _a[_i];
      if (token === "Accel") {
        if (Platform.IS_MAC) {
          cmd = true;
        } else {
          ctrl = true;
        }
      } else if (token === "Alt") {
        alt = true;
      } else if (token === "Cmd") {
        cmd = true;
      } else if (token === "Ctrl") {
        ctrl = true;
      } else if (token === "Shift") {
        shift = true;
      } else if (token.length > 0) {
        key = token;
      }
    }
    return { cmd, ctrl, alt, shift, key };
  }
  CommandRegistry2.parseKeystroke = parseKeystroke;
  function normalizeKeystroke(keystroke) {
    var mods = "";
    var parts = parseKeystroke(keystroke);
    if (parts.ctrl) {
      mods += "Ctrl ";
    }
    if (parts.alt) {
      mods += "Alt ";
    }
    if (parts.shift) {
      mods += "Shift ";
    }
    if (parts.cmd && Platform.IS_MAC) {
      mods += "Cmd ";
    }
    return mods + parts.key;
  }
  CommandRegistry2.normalizeKeystroke = normalizeKeystroke;
  function normalizeKeys(options) {
    var keys;
    if (Platform.IS_WIN) {
      keys = options.winKeys || options.keys;
    } else if (Platform.IS_MAC) {
      keys = options.macKeys || options.keys;
    } else {
      keys = options.linuxKeys || options.keys;
    }
    return keys.map(normalizeKeystroke);
  }
  CommandRegistry2.normalizeKeys = normalizeKeys;
  function formatKeystroke(keystroke) {
    return typeof keystroke === "string" ? formatSingleKey(keystroke) : keystroke.map(formatSingleKey).join(", ");
    function formatSingleKey(key) {
      var mods = [];
      var separator = Platform.IS_MAC ? " " : "+";
      var parts = parseKeystroke(key);
      if (parts.ctrl) {
        mods.push("Ctrl");
      }
      if (parts.alt) {
        mods.push("Alt");
      }
      if (parts.shift) {
        mods.push("Shift");
      }
      if (Platform.IS_MAC && parts.cmd) {
        mods.push("Cmd");
      }
      mods.push(parts.key);
      return mods.map(Private5.formatKey).join(separator);
    }
  }
  CommandRegistry2.formatKeystroke = formatKeystroke;
  function isModifierKeyPressed(event) {
    var layout = getKeyboardLayout();
    var key = layout.keyForKeydownEvent(event);
    return layout.isModifierKey(key);
  }
  CommandRegistry2.isModifierKeyPressed = isModifierKeyPressed;
  function keystrokeForKeydownEvent(event) {
    var layout = getKeyboardLayout();
    var key = layout.keyForKeydownEvent(event);
    if (!key || layout.isModifierKey(key)) {
      return "";
    }
    var mods = [];
    if (event.ctrlKey) {
      mods.push("Ctrl");
    }
    if (event.altKey) {
      mods.push("Alt");
    }
    if (event.shiftKey) {
      mods.push("Shift");
    }
    if (event.metaKey && Platform.IS_MAC) {
      mods.push("Cmd");
    }
    mods.push(key);
    return mods.join(" ");
  }
  CommandRegistry2.keystrokeForKeydownEvent = keystrokeForKeydownEvent;
})(CommandRegistry || (CommandRegistry = {}));
var Private5;
(function(Private8) {
  Private8.CHORD_TIMEOUT = 1e3;
  function createCommand(options) {
    var icon;
    var iconClass;
    if (!options.icon || typeof options.icon === "string") {
      iconClass = asFunc(options.iconClass || options.icon, emptyStringFunc);
      icon = iconClass;
    } else {
      iconClass = asFunc(options.iconClass, emptyStringFunc);
      icon = asFunc(options.icon, undefinedFunc);
    }
    return {
      execute: options.execute,
      describedBy: __assign({ args: null }, options.describedBy),
      label: asFunc(options.label, emptyStringFunc),
      mnemonic: asFunc(options.mnemonic, negativeOneFunc),
      icon,
      iconClass,
      iconLabel: asFunc(options.iconLabel, emptyStringFunc),
      caption: asFunc(options.caption, emptyStringFunc),
      usage: asFunc(options.usage, emptyStringFunc),
      className: asFunc(options.className, emptyStringFunc),
      dataset: asFunc(options.dataset, emptyDatasetFunc),
      isEnabled: options.isEnabled || trueFunc,
      isToggled: options.isToggled || falseFunc,
      isToggleable: options.isToggleable || !!options.isToggled,
      isVisible: options.isVisible || trueFunc
    };
  }
  Private8.createCommand = createCommand;
  function createKeyBinding(options) {
    return {
      keys: CommandRegistry.normalizeKeys(options),
      selector: validateSelector(options),
      command: options.command,
      args: options.args || import_coreutils.JSONExt.emptyObject
    };
  }
  Private8.createKeyBinding = createKeyBinding;
  function matchKeyBinding(bindings, keys, event) {
    var exact = null;
    var partial = false;
    var distance = Infinity;
    var specificity = 0;
    for (var i = 0, n = bindings.length; i < n; ++i) {
      var binding = bindings[i];
      var sqm = matchSequence(binding.keys, keys);
      if (sqm === 0) {
        continue;
      }
      if (sqm === 2) {
        if (!partial && targetDistance(binding.selector, event) !== -1) {
          partial = true;
        }
        continue;
      }
      var td = targetDistance(binding.selector, event);
      if (td === -1 || td > distance) {
        continue;
      }
      var sp = Selector.calculateSpecificity(binding.selector);
      if (!exact || td < distance || sp >= specificity) {
        exact = binding;
        distance = td;
        specificity = sp;
      }
    }
    return { exact, partial };
  }
  Private8.matchKeyBinding = matchKeyBinding;
  function replayKeyEvent(event) {
    event.target.dispatchEvent(cloneKeyboardEvent(event));
  }
  Private8.replayKeyEvent = replayKeyEvent;
  function formatKey(key) {
    if (Platform.IS_MAC) {
      return MAC_DISPLAY.hasOwnProperty(key) ? MAC_DISPLAY[key] : key;
    } else {
      return WIN_DISPLAY.hasOwnProperty(key) ? WIN_DISPLAY[key] : key;
    }
  }
  Private8.formatKey = formatKey;
  var MAC_DISPLAY = {
    Backspace: "\u232B",
    Tab: "\u21E5",
    Enter: "\u21A9",
    Shift: "\u21E7",
    Ctrl: "\u2303",
    Alt: "\u2325",
    Escape: "\u238B",
    PageUp: "\u21DE",
    PageDown: "\u21DF",
    End: "\u2198",
    Home: "\u2196",
    ArrowLeft: "\u2190",
    ArrowUp: "\u2191",
    ArrowRight: "\u2192",
    ArrowDown: "\u2193",
    Delete: "\u2326",
    Cmd: "\u2318"
  };
  var WIN_DISPLAY = {
    Escape: "Esc",
    PageUp: "Page Up",
    PageDown: "Page Down",
    ArrowLeft: "Left",
    ArrowUp: "Up",
    ArrowRight: "Right",
    ArrowDown: "Down",
    Delete: "Del"
  };
  var emptyStringFunc = function() {
    return "";
  };
  var negativeOneFunc = function() {
    return -1;
  };
  var trueFunc = function() {
    return true;
  };
  var falseFunc = function() {
    return false;
  };
  var emptyDatasetFunc = function() {
    return {};
  };
  var undefinedFunc = function() {
    return void 0;
  };
  function asFunc(value, dfault) {
    if (value === void 0) {
      return dfault;
    }
    if (typeof value === "function") {
      return value;
    }
    return function() {
      return value;
    };
  }
  function validateSelector(options) {
    if (options.selector.indexOf(",") !== -1) {
      throw new Error("Selector cannot contain commas: " + options.selector);
    }
    if (!Selector.isValid(options.selector)) {
      throw new Error("Invalid selector: " + options.selector);
    }
    return options.selector;
  }
  function matchSequence(bindKeys, userKeys) {
    if (bindKeys.length < userKeys.length) {
      return 0;
    }
    for (var i = 0, n = userKeys.length; i < n; ++i) {
      if (bindKeys[i] !== userKeys[i]) {
        return 0;
      }
    }
    if (bindKeys.length > userKeys.length) {
      return 2;
    }
    return 1;
  }
  function targetDistance(selector, event) {
    var targ = event.target;
    var curr = event.currentTarget;
    for (var dist = 0; targ !== null; targ = targ.parentElement, ++dist) {
      if (targ.hasAttribute("data-lm-suppress-shortcuts")) {
        return -1;
      }
      if (targ.hasAttribute("data-p-suppress-shortcuts")) {
        return -1;
      }
      if (Selector.matches(targ, selector)) {
        return dist;
      }
      if (targ === curr) {
        return -1;
      }
    }
    return -1;
  }
  function cloneKeyboardEvent(event) {
    var clone = document.createEvent("Event");
    var bubbles = event.bubbles || true;
    var cancelable = event.cancelable || true;
    clone.initEvent(event.type || "keydown", bubbles, cancelable);
    clone.key = event.key || "";
    clone.keyCode = event.keyCode || 0;
    clone.which = event.keyCode || 0;
    clone.ctrlKey = event.ctrlKey || false;
    clone.altKey = event.altKey || false;
    clone.shiftKey = event.shiftKey || false;
    clone.metaKey = event.metaKey || false;
    clone.view = event.view || window;
    return clone;
  }
})(Private5 || (Private5 = {}));

// ../../node_modules/jupyterlab-plotly/node_modules/@lumino/virtualdom/dist/index.es6.js
init_index_es6();
var extendStatics2 = function(d, b) {
  extendStatics2 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
    d2.__proto__ = b2;
  } || function(d2, b2) {
    for (var p in b2)
      if (Object.prototype.hasOwnProperty.call(b2, p))
        d2[p] = b2[p];
  };
  return extendStatics2(d, b);
};
function __extends2(d, b) {
  if (typeof b !== "function" && b !== null)
    throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
  extendStatics2(d, b);
  function __() {
    this.constructor = d;
  }
  d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}
var VirtualText = (
  /** @class */
  function() {
    function VirtualText2(content) {
      this.type = "text";
      this.content = content;
    }
    return VirtualText2;
  }()
);
var VirtualElement = (
  /** @class */
  function() {
    function VirtualElement2(tag, attrs, children, renderer) {
      this.type = "element";
      this.tag = tag;
      this.attrs = attrs;
      this.children = children;
      this.renderer = renderer;
    }
    return VirtualElement2;
  }()
);
var VirtualElementPass = (
  /** @class */
  function(_super) {
    __extends2(VirtualElementPass2, _super);
    function VirtualElementPass2(tag, attrs, renderer) {
      return _super.call(this, tag, attrs, [], renderer || void 0) || this;
    }
    return VirtualElementPass2;
  }(VirtualElement)
);
function h(tag) {
  var attrs = {};
  var renderer;
  var children = [];
  for (var i = 1, n = arguments.length; i < n; ++i) {
    var arg = arguments[i];
    if (typeof arg === "string") {
      children.push(new VirtualText(arg));
    } else if (arg instanceof VirtualText) {
      children.push(arg);
    } else if (arg instanceof VirtualElement) {
      children.push(arg);
    } else if (arg instanceof Array) {
      extend(children, arg);
    } else if ((i === 1 || i === 2) && arg && typeof arg === "object") {
      if ("render" in arg) {
        renderer = arg;
      } else {
        attrs = arg;
      }
    }
  }
  return new VirtualElement(tag, attrs, children, renderer);
  function extend(array, values) {
    for (var _i = 0, values_1 = values; _i < values_1.length; _i++) {
      var child = values_1[_i];
      if (typeof child === "string") {
        array.push(new VirtualText(child));
      } else if (child instanceof VirtualText) {
        array.push(child);
      } else if (child instanceof VirtualElement) {
        array.push(child);
      }
    }
  }
}
(function(h2) {
  h2.a = h2.bind(void 0, "a");
  h2.abbr = h2.bind(void 0, "abbr");
  h2.address = h2.bind(void 0, "address");
  h2.area = h2.bind(void 0, "area");
  h2.article = h2.bind(void 0, "article");
  h2.aside = h2.bind(void 0, "aside");
  h2.audio = h2.bind(void 0, "audio");
  h2.b = h2.bind(void 0, "b");
  h2.bdi = h2.bind(void 0, "bdi");
  h2.bdo = h2.bind(void 0, "bdo");
  h2.blockquote = h2.bind(void 0, "blockquote");
  h2.br = h2.bind(void 0, "br");
  h2.button = h2.bind(void 0, "button");
  h2.canvas = h2.bind(void 0, "canvas");
  h2.caption = h2.bind(void 0, "caption");
  h2.cite = h2.bind(void 0, "cite");
  h2.code = h2.bind(void 0, "code");
  h2.col = h2.bind(void 0, "col");
  h2.colgroup = h2.bind(void 0, "colgroup");
  h2.data = h2.bind(void 0, "data");
  h2.datalist = h2.bind(void 0, "datalist");
  h2.dd = h2.bind(void 0, "dd");
  h2.del = h2.bind(void 0, "del");
  h2.dfn = h2.bind(void 0, "dfn");
  h2.div = h2.bind(void 0, "div");
  h2.dl = h2.bind(void 0, "dl");
  h2.dt = h2.bind(void 0, "dt");
  h2.em = h2.bind(void 0, "em");
  h2.embed = h2.bind(void 0, "embed");
  h2.fieldset = h2.bind(void 0, "fieldset");
  h2.figcaption = h2.bind(void 0, "figcaption");
  h2.figure = h2.bind(void 0, "figure");
  h2.footer = h2.bind(void 0, "footer");
  h2.form = h2.bind(void 0, "form");
  h2.h1 = h2.bind(void 0, "h1");
  h2.h2 = h2.bind(void 0, "h2");
  h2.h3 = h2.bind(void 0, "h3");
  h2.h4 = h2.bind(void 0, "h4");
  h2.h5 = h2.bind(void 0, "h5");
  h2.h6 = h2.bind(void 0, "h6");
  h2.header = h2.bind(void 0, "header");
  h2.hr = h2.bind(void 0, "hr");
  h2.i = h2.bind(void 0, "i");
  h2.iframe = h2.bind(void 0, "iframe");
  h2.img = h2.bind(void 0, "img");
  h2.input = h2.bind(void 0, "input");
  h2.ins = h2.bind(void 0, "ins");
  h2.kbd = h2.bind(void 0, "kbd");
  h2.label = h2.bind(void 0, "label");
  h2.legend = h2.bind(void 0, "legend");
  h2.li = h2.bind(void 0, "li");
  h2.main = h2.bind(void 0, "main");
  h2.map = h2.bind(void 0, "map");
  h2.mark = h2.bind(void 0, "mark");
  h2.meter = h2.bind(void 0, "meter");
  h2.nav = h2.bind(void 0, "nav");
  h2.noscript = h2.bind(void 0, "noscript");
  h2.object = h2.bind(void 0, "object");
  h2.ol = h2.bind(void 0, "ol");
  h2.optgroup = h2.bind(void 0, "optgroup");
  h2.option = h2.bind(void 0, "option");
  h2.output = h2.bind(void 0, "output");
  h2.p = h2.bind(void 0, "p");
  h2.param = h2.bind(void 0, "param");
  h2.pre = h2.bind(void 0, "pre");
  h2.progress = h2.bind(void 0, "progress");
  h2.q = h2.bind(void 0, "q");
  h2.rp = h2.bind(void 0, "rp");
  h2.rt = h2.bind(void 0, "rt");
  h2.ruby = h2.bind(void 0, "ruby");
  h2.s = h2.bind(void 0, "s");
  h2.samp = h2.bind(void 0, "samp");
  h2.section = h2.bind(void 0, "section");
  h2.select = h2.bind(void 0, "select");
  h2.small = h2.bind(void 0, "small");
  h2.source = h2.bind(void 0, "source");
  h2.span = h2.bind(void 0, "span");
  h2.strong = h2.bind(void 0, "strong");
  h2.sub = h2.bind(void 0, "sub");
  h2.summary = h2.bind(void 0, "summary");
  h2.sup = h2.bind(void 0, "sup");
  h2.table = h2.bind(void 0, "table");
  h2.tbody = h2.bind(void 0, "tbody");
  h2.td = h2.bind(void 0, "td");
  h2.textarea = h2.bind(void 0, "textarea");
  h2.tfoot = h2.bind(void 0, "tfoot");
  h2.th = h2.bind(void 0, "th");
  h2.thead = h2.bind(void 0, "thead");
  h2.time = h2.bind(void 0, "time");
  h2.title = h2.bind(void 0, "title");
  h2.tr = h2.bind(void 0, "tr");
  h2.track = h2.bind(void 0, "track");
  h2.u = h2.bind(void 0, "u");
  h2.ul = h2.bind(void 0, "ul");
  h2.var_ = h2.bind(void 0, "var");
  h2.video = h2.bind(void 0, "video");
  h2.wbr = h2.bind(void 0, "wbr");
})(h || (h = {}));
var VirtualDOM;
(function(VirtualDOM2) {
  function realize(node) {
    return Private6.createDOMNode(node);
  }
  VirtualDOM2.realize = realize;
  function render(content, host) {
    var oldContent = Private6.hostMap.get(host) || [];
    var newContent = Private6.asContentArray(content);
    Private6.hostMap.set(host, newContent);
    Private6.updateContent(host, oldContent, newContent);
  }
  VirtualDOM2.render = render;
})(VirtualDOM || (VirtualDOM = {}));
var Private6;
(function(Private8) {
  Private8.hostMap = /* @__PURE__ */ new WeakMap();
  function asContentArray(value) {
    if (!value) {
      return [];
    }
    if (value instanceof Array) {
      return value;
    }
    return [value];
  }
  Private8.asContentArray = asContentArray;
  function createDOMNode(node) {
    var host = arguments[1] || null;
    var before = arguments[2] || null;
    if (host) {
      host.insertBefore(createDOMNode(node), before);
    } else {
      if (node.type === "text") {
        return document.createTextNode(node.content);
      }
      host = document.createElement(node.tag);
      addAttrs(host, node.attrs);
      if (node.renderer) {
        node.renderer.render(host, {
          attrs: node.attrs,
          children: node.children
        });
        return host;
      }
      for (var i = 0, n = node.children.length; i < n; ++i) {
        createDOMNode(node.children[i], host);
      }
    }
    return host;
  }
  Private8.createDOMNode = createDOMNode;
  function updateContent(host, oldContent, newContent) {
    if (oldContent === newContent) {
      return;
    }
    var oldKeyed = collectKeys(host, oldContent);
    var oldCopy = oldContent.slice();
    var currElem = host.firstChild;
    var newCount = newContent.length;
    for (var i = 0; i < newCount; ++i) {
      if (i >= oldCopy.length) {
        createDOMNode(newContent[i], host);
        continue;
      }
      var oldVNode = oldCopy[i];
      var newVNode = newContent[i];
      if (oldVNode === newVNode) {
        currElem = currElem.nextSibling;
        continue;
      }
      if (oldVNode.type === "text" && newVNode.type === "text") {
        if (currElem.textContent !== newVNode.content) {
          currElem.textContent = newVNode.content;
        }
        currElem = currElem.nextSibling;
        continue;
      }
      if (oldVNode.type === "text" || newVNode.type === "text") {
        ArrayExt.insert(oldCopy, i, newVNode);
        createDOMNode(newVNode, host, currElem);
        continue;
      }
      if (!oldVNode.renderer != !newVNode.renderer) {
        ArrayExt.insert(oldCopy, i, newVNode);
        createDOMNode(newVNode, host, currElem);
        continue;
      }
      var newKey = newVNode.attrs.key;
      if (newKey && newKey in oldKeyed) {
        var pair = oldKeyed[newKey];
        if (pair.vNode !== oldVNode) {
          ArrayExt.move(oldCopy, oldCopy.indexOf(pair.vNode, i + 1), i);
          host.insertBefore(pair.element, currElem);
          oldVNode = pair.vNode;
          currElem = pair.element;
        }
      }
      if (oldVNode === newVNode) {
        currElem = currElem.nextSibling;
        continue;
      }
      var oldKey = oldVNode.attrs.key;
      if (oldKey && oldKey !== newKey) {
        ArrayExt.insert(oldCopy, i, newVNode);
        createDOMNode(newVNode, host, currElem);
        continue;
      }
      if (oldVNode.tag !== newVNode.tag) {
        ArrayExt.insert(oldCopy, i, newVNode);
        createDOMNode(newVNode, host, currElem);
        continue;
      }
      updateAttrs(currElem, oldVNode.attrs, newVNode.attrs);
      if (newVNode.renderer) {
        newVNode.renderer.render(currElem, {
          attrs: newVNode.attrs,
          children: newVNode.children
        });
      } else {
        updateContent(currElem, oldVNode.children, newVNode.children);
      }
      currElem = currElem.nextSibling;
    }
    removeContent(host, oldCopy, newCount, true);
  }
  Private8.updateContent = updateContent;
  function removeContent(host, oldContent, newCount, _sentinel) {
    for (var i = oldContent.length - 1; i >= newCount; --i) {
      var oldNode = oldContent[i];
      var child = _sentinel ? host.lastChild : host.childNodes[i];
      if (oldNode.type === "text")
        ;
      else if (oldNode.renderer && oldNode.renderer.unrender) {
        oldNode.renderer.unrender(child, {
          attrs: oldNode.attrs,
          children: oldNode.children
        });
      } else {
        removeContent(child, oldNode.children, 0, false);
      }
      if (_sentinel) {
        host.removeChild(child);
      }
    }
  }
  var specialAttrs = {
    key: true,
    className: true,
    htmlFor: true,
    dataset: true,
    style: true
  };
  function addAttrs(element, attrs) {
    for (var name_1 in attrs) {
      if (name_1 in specialAttrs) {
        continue;
      }
      if (name_1.substr(0, 2) === "on") {
        element[name_1] = attrs[name_1];
      } else {
        element.setAttribute(name_1, attrs[name_1]);
      }
    }
    if (attrs.className !== void 0) {
      element.setAttribute("class", attrs.className);
    }
    if (attrs.htmlFor !== void 0) {
      element.setAttribute("for", attrs.htmlFor);
    }
    if (attrs.dataset) {
      addDataset(element, attrs.dataset);
    }
    if (attrs.style) {
      addStyle(element, attrs.style);
    }
  }
  function updateAttrs(element, oldAttrs, newAttrs) {
    if (oldAttrs === newAttrs) {
      return;
    }
    var name;
    for (name in oldAttrs) {
      if (name in specialAttrs || name in newAttrs) {
        continue;
      }
      if (name.substr(0, 2) === "on") {
        element[name] = null;
      } else {
        element.removeAttribute(name);
      }
    }
    for (name in newAttrs) {
      if (name in specialAttrs || oldAttrs[name] === newAttrs[name]) {
        continue;
      }
      if (name.substr(0, 2) === "on") {
        element[name] = newAttrs[name];
      } else {
        element.setAttribute(name, newAttrs[name]);
      }
    }
    if (oldAttrs.className !== newAttrs.className) {
      if (newAttrs.className !== void 0) {
        element.setAttribute("class", newAttrs.className);
      } else {
        element.removeAttribute("class");
      }
    }
    if (oldAttrs.htmlFor !== newAttrs.htmlFor) {
      if (newAttrs.htmlFor !== void 0) {
        element.setAttribute("for", newAttrs.htmlFor);
      } else {
        element.removeAttribute("for");
      }
    }
    if (oldAttrs.dataset !== newAttrs.dataset) {
      updateDataset(element, oldAttrs.dataset || {}, newAttrs.dataset || {});
    }
    if (oldAttrs.style !== newAttrs.style) {
      updateStyle(element, oldAttrs.style || {}, newAttrs.style || {});
    }
  }
  function addDataset(element, dataset) {
    for (var name_2 in dataset) {
      element.setAttribute("data-" + name_2, dataset[name_2]);
    }
  }
  function updateDataset(element, oldDataset, newDataset) {
    for (var name_3 in oldDataset) {
      if (!(name_3 in newDataset)) {
        element.removeAttribute("data-" + name_3);
      }
    }
    for (var name_4 in newDataset) {
      if (oldDataset[name_4] !== newDataset[name_4]) {
        element.setAttribute("data-" + name_4, newDataset[name_4]);
      }
    }
  }
  function addStyle(element, style) {
    var elemStyle = element.style;
    var name;
    for (name in style) {
      elemStyle[name] = style[name];
    }
  }
  function updateStyle(element, oldStyle, newStyle) {
    var elemStyle = element.style;
    var name;
    for (name in oldStyle) {
      if (!(name in newStyle)) {
        elemStyle[name] = "";
      }
    }
    for (name in newStyle) {
      if (oldStyle[name] !== newStyle[name]) {
        elemStyle[name] = newStyle[name];
      }
    }
  }
  function collectKeys(host, content) {
    var node = host.firstChild;
    var keyMap = /* @__PURE__ */ Object.create(null);
    for (var _i = 0, content_1 = content; _i < content_1.length; _i++) {
      var vNode = content_1[_i];
      if (vNode.type === "element" && vNode.attrs.key) {
        keyMap[vNode.attrs.key] = { vNode, element: node };
      }
      node = node.nextSibling;
    }
    return keyMap;
  }
})(Private6 || (Private6 = {}));

// ../../node_modules/jupyterlab-plotly/node_modules/@lumino/widgets/dist/index.es6.js
var extendStatics3 = function(d, b) {
  extendStatics3 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
    d2.__proto__ = b2;
  } || function(d2, b2) {
    for (var p in b2)
      if (Object.prototype.hasOwnProperty.call(b2, p))
        d2[p] = b2[p];
  };
  return extendStatics3(d, b);
};
function __extends3(d, b) {
  if (typeof b !== "function" && b !== null)
    throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
  extendStatics3(d, b);
  function __() {
    this.constructor = d;
  }
  d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}
var __assign2 = function() {
  __assign2 = Object.assign || function __assign3(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p))
          t[p] = s[p];
    }
    return t;
  };
  return __assign2.apply(this, arguments);
};
function __rest(s, e) {
  var t = {};
  for (var p in s)
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
      t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
      if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
        t[p[i]] = s[p[i]];
    }
  return t;
}
function __spreadArrays() {
  for (var s = 0, i = 0, il = arguments.length; i < il; i++)
    s += arguments[i].length;
  for (var r = Array(s), k = 0, i = 0; i < il; i++)
    for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
      r[k] = a[j];
  return r;
}
var BoxSizer = (
  /** @class */
  function() {
    function BoxSizer2() {
      this.sizeHint = 0;
      this.minSize = 0;
      this.maxSize = Infinity;
      this.stretch = 1;
      this.size = 0;
      this.done = false;
    }
    return BoxSizer2;
  }()
);
var BoxEngine;
(function(BoxEngine2) {
  function calc(sizers, space) {
    var count = sizers.length;
    if (count === 0) {
      return space;
    }
    var totalMin = 0;
    var totalMax = 0;
    var totalSize = 0;
    var totalStretch = 0;
    var stretchCount = 0;
    for (var i = 0; i < count; ++i) {
      var sizer = sizers[i];
      var min = sizer.minSize;
      var max2 = sizer.maxSize;
      var hint = sizer.sizeHint;
      sizer.done = false;
      sizer.size = Math.max(min, Math.min(hint, max2));
      totalSize += sizer.size;
      totalMin += min;
      totalMax += max2;
      if (sizer.stretch > 0) {
        totalStretch += sizer.stretch;
        stretchCount++;
      }
    }
    if (space === totalSize) {
      return 0;
    }
    if (space <= totalMin) {
      for (var i = 0; i < count; ++i) {
        var sizer = sizers[i];
        sizer.size = sizer.minSize;
      }
      return space - totalMin;
    }
    if (space >= totalMax) {
      for (var i = 0; i < count; ++i) {
        var sizer = sizers[i];
        sizer.size = sizer.maxSize;
      }
      return space - totalMax;
    }
    var nearZero = 0.01;
    var notDoneCount = count;
    if (space < totalSize) {
      var freeSpace = totalSize - space;
      while (stretchCount > 0 && freeSpace > nearZero) {
        var distSpace = freeSpace;
        var distStretch = totalStretch;
        for (var i = 0; i < count; ++i) {
          var sizer = sizers[i];
          if (sizer.done || sizer.stretch === 0) {
            continue;
          }
          var amt = sizer.stretch * distSpace / distStretch;
          if (sizer.size - amt <= sizer.minSize) {
            freeSpace -= sizer.size - sizer.minSize;
            totalStretch -= sizer.stretch;
            sizer.size = sizer.minSize;
            sizer.done = true;
            notDoneCount--;
            stretchCount--;
          } else {
            freeSpace -= amt;
            sizer.size -= amt;
          }
        }
      }
      while (notDoneCount > 0 && freeSpace > nearZero) {
        var amt = freeSpace / notDoneCount;
        for (var i = 0; i < count; ++i) {
          var sizer = sizers[i];
          if (sizer.done) {
            continue;
          }
          if (sizer.size - amt <= sizer.minSize) {
            freeSpace -= sizer.size - sizer.minSize;
            sizer.size = sizer.minSize;
            sizer.done = true;
            notDoneCount--;
          } else {
            freeSpace -= amt;
            sizer.size -= amt;
          }
        }
      }
    } else {
      var freeSpace = space - totalSize;
      while (stretchCount > 0 && freeSpace > nearZero) {
        var distSpace = freeSpace;
        var distStretch = totalStretch;
        for (var i = 0; i < count; ++i) {
          var sizer = sizers[i];
          if (sizer.done || sizer.stretch === 0) {
            continue;
          }
          var amt = sizer.stretch * distSpace / distStretch;
          if (sizer.size + amt >= sizer.maxSize) {
            freeSpace -= sizer.maxSize - sizer.size;
            totalStretch -= sizer.stretch;
            sizer.size = sizer.maxSize;
            sizer.done = true;
            notDoneCount--;
            stretchCount--;
          } else {
            freeSpace -= amt;
            sizer.size += amt;
          }
        }
      }
      while (notDoneCount > 0 && freeSpace > nearZero) {
        var amt = freeSpace / notDoneCount;
        for (var i = 0; i < count; ++i) {
          var sizer = sizers[i];
          if (sizer.done) {
            continue;
          }
          if (sizer.size + amt >= sizer.maxSize) {
            freeSpace -= sizer.maxSize - sizer.size;
            sizer.size = sizer.maxSize;
            sizer.done = true;
            notDoneCount--;
          } else {
            freeSpace -= amt;
            sizer.size += amt;
          }
        }
      }
    }
    return 0;
  }
  BoxEngine2.calc = calc;
  function adjust(sizers, index, delta) {
    if (sizers.length === 0 || delta === 0) {
      return;
    }
    if (delta > 0) {
      growSizer(sizers, index, delta);
    } else {
      shrinkSizer(sizers, index, -delta);
    }
  }
  BoxEngine2.adjust = adjust;
  function growSizer(sizers, index, delta) {
    var growLimit = 0;
    for (var i = 0; i <= index; ++i) {
      var sizer = sizers[i];
      growLimit += sizer.maxSize - sizer.size;
    }
    var shrinkLimit = 0;
    for (var i = index + 1, n = sizers.length; i < n; ++i) {
      var sizer = sizers[i];
      shrinkLimit += sizer.size - sizer.minSize;
    }
    delta = Math.min(delta, growLimit, shrinkLimit);
    var grow = delta;
    for (var i = index; i >= 0 && grow > 0; --i) {
      var sizer = sizers[i];
      var limit = sizer.maxSize - sizer.size;
      if (limit >= grow) {
        sizer.sizeHint = sizer.size + grow;
        grow = 0;
      } else {
        sizer.sizeHint = sizer.size + limit;
        grow -= limit;
      }
    }
    var shrink = delta;
    for (var i = index + 1, n = sizers.length; i < n && shrink > 0; ++i) {
      var sizer = sizers[i];
      var limit = sizer.size - sizer.minSize;
      if (limit >= shrink) {
        sizer.sizeHint = sizer.size - shrink;
        shrink = 0;
      } else {
        sizer.sizeHint = sizer.size - limit;
        shrink -= limit;
      }
    }
  }
  function shrinkSizer(sizers, index, delta) {
    var growLimit = 0;
    for (var i = index + 1, n = sizers.length; i < n; ++i) {
      var sizer = sizers[i];
      growLimit += sizer.maxSize - sizer.size;
    }
    var shrinkLimit = 0;
    for (var i = 0; i <= index; ++i) {
      var sizer = sizers[i];
      shrinkLimit += sizer.size - sizer.minSize;
    }
    delta = Math.min(delta, growLimit, shrinkLimit);
    var grow = delta;
    for (var i = index + 1, n = sizers.length; i < n && grow > 0; ++i) {
      var sizer = sizers[i];
      var limit = sizer.maxSize - sizer.size;
      if (limit >= grow) {
        sizer.sizeHint = sizer.size + grow;
        grow = 0;
      } else {
        sizer.sizeHint = sizer.size + limit;
        grow -= limit;
      }
    }
    var shrink = delta;
    for (var i = index; i >= 0 && shrink > 0; --i) {
      var sizer = sizers[i];
      var limit = sizer.size - sizer.minSize;
      if (limit >= shrink) {
        sizer.sizeHint = sizer.size - shrink;
        shrink = 0;
      } else {
        sizer.sizeHint = sizer.size - limit;
        shrink -= limit;
      }
    }
  }
})(BoxEngine || (BoxEngine = {}));
var Title = (
  /** @class */
  function() {
    function Title2(options) {
      this._label = "";
      this._caption = "";
      this._mnemonic = -1;
      this._iconClass = "";
      this._iconLabel = "";
      this._className = "";
      this._closable = false;
      this._changed = new Signal(this);
      this._isDisposed = false;
      this.owner = options.owner;
      if (options.label !== void 0) {
        this._label = options.label;
      }
      if (options.mnemonic !== void 0) {
        this._mnemonic = options.mnemonic;
      }
      if (options.icon !== void 0) {
        if (typeof options.icon === "string") {
          this._icon = null;
          this._iconClass = options.icon;
        } else {
          this._icon = options.icon;
        }
      } else {
        this._icon = null;
      }
      if (options.iconClass !== void 0) {
        this._iconClass = options.iconClass;
      }
      if (options.iconLabel !== void 0) {
        this._iconLabel = options.iconLabel;
      }
      if (options.iconRenderer !== void 0) {
        this._icon = options.iconRenderer;
      }
      if (options.caption !== void 0) {
        this._caption = options.caption;
      }
      if (options.className !== void 0) {
        this._className = options.className;
      }
      if (options.closable !== void 0) {
        this._closable = options.closable;
      }
      this._dataset = options.dataset || {};
    }
    Object.defineProperty(Title2.prototype, "changed", {
      /**
       * A signal emitted when the state of the title changes.
       */
      get: function() {
        return this._changed;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(Title2.prototype, "label", {
      /**
       * Get the label for the title.
       *
       * #### Notes
       * The default value is an empty string.
       */
      get: function() {
        return this._label;
      },
      /**
       * Set the label for the title.
       */
      set: function(value) {
        if (this._label === value) {
          return;
        }
        this._label = value;
        this._changed.emit(void 0);
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(Title2.prototype, "mnemonic", {
      /**
       * Get the mnemonic index for the title.
       *
       * #### Notes
       * The default value is `-1`.
       */
      get: function() {
        return this._mnemonic;
      },
      /**
       * Set the mnemonic index for the title.
       */
      set: function(value) {
        if (this._mnemonic === value) {
          return;
        }
        this._mnemonic = value;
        this._changed.emit(void 0);
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(Title2.prototype, "icon", {
      /**
       * Get the icon renderer for the title.
       *
       * #### Notes
       * The default value is undefined.
       *
       * DEPRECATED: if set to a string value, the .icon field will function as
       * an alias for the .iconClass field, for backwards compatibility
       */
      get: function() {
        if (this._icon === null) {
          return this.iconClass;
        }
        return this._icon;
      },
      /**
       * Set the icon renderer for the title.
       *
       * #### Notes
       * A renderer is an object that supplies a render and unrender function.
       *
       * DEPRECATED: if set to a string value, the .icon field will function as
       * an alias for the .iconClass field, for backwards compatibility
       */
      set: function(value) {
        if (typeof value === "string") {
          this._icon = null;
          this.iconClass = value;
        } else {
          if (this._icon === value) {
            return;
          }
          this._icon = value;
          this._changed.emit(void 0);
        }
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(Title2.prototype, "iconClass", {
      /**
       * Get the icon class name for the title.
       *
       * #### Notes
       * The default value is an empty string.
       */
      get: function() {
        return this._iconClass;
      },
      /**
       * Set the icon class name for the title.
       *
       * #### Notes
       * Multiple class names can be separated with whitespace.
       */
      set: function(value) {
        if (this._iconClass === value) {
          return;
        }
        this._iconClass = value;
        this._changed.emit(void 0);
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(Title2.prototype, "iconLabel", {
      /**
       * Get the icon label for the title.
       *
       * #### Notes
       * The default value is an empty string.
       */
      get: function() {
        return this._iconLabel;
      },
      /**
       * Set the icon label for the title.
       *
       * #### Notes
       * Multiple class names can be separated with whitespace.
       */
      set: function(value) {
        if (this._iconLabel === value) {
          return;
        }
        this._iconLabel = value;
        this._changed.emit(void 0);
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(Title2.prototype, "iconRenderer", {
      /**
       * @deprecated Use `icon` instead.
       */
      get: function() {
        return this._icon || void 0;
      },
      /**
       * @deprecated Use `icon` instead.
       */
      set: function(value) {
        this.icon = value;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(Title2.prototype, "caption", {
      /**
       * Get the caption for the title.
       *
       * #### Notes
       * The default value is an empty string.
       */
      get: function() {
        return this._caption;
      },
      /**
       * Set the caption for the title.
       */
      set: function(value) {
        if (this._caption === value) {
          return;
        }
        this._caption = value;
        this._changed.emit(void 0);
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(Title2.prototype, "className", {
      /**
       * Get the extra class name for the title.
       *
       * #### Notes
       * The default value is an empty string.
       */
      get: function() {
        return this._className;
      },
      /**
       * Set the extra class name for the title.
       *
       * #### Notes
       * Multiple class names can be separated with whitespace.
       */
      set: function(value) {
        if (this._className === value) {
          return;
        }
        this._className = value;
        this._changed.emit(void 0);
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(Title2.prototype, "closable", {
      /**
       * Get the closable state for the title.
       *
       * #### Notes
       * The default value is `false`.
       */
      get: function() {
        return this._closable;
      },
      /**
       * Set the closable state for the title.
       *
       * #### Notes
       * This controls the presence of a close icon when applicable.
       */
      set: function(value) {
        if (this._closable === value) {
          return;
        }
        this._closable = value;
        this._changed.emit(void 0);
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(Title2.prototype, "dataset", {
      /**
       * Get the dataset for the title.
       *
       * #### Notes
       * The default value is an empty dataset.
       */
      get: function() {
        return this._dataset;
      },
      /**
       * Set the dataset for the title.
       *
       * #### Notes
       * This controls the data attributes when applicable.
       */
      set: function(value) {
        if (this._dataset === value) {
          return;
        }
        this._dataset = value;
        this._changed.emit(void 0);
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(Title2.prototype, "isDisposed", {
      /**
       * Test whether the title has been disposed.
       */
      get: function() {
        return this._isDisposed;
      },
      enumerable: true,
      configurable: true
    });
    Title2.prototype.dispose = function() {
      if (this.isDisposed) {
        return;
      }
      this._isDisposed = true;
      Signal.clearData(this);
    };
    return Title2;
  }()
);
var Widget = (
  /** @class */
  function() {
    function Widget2(options) {
      if (options === void 0) {
        options = {};
      }
      this._flags = 0;
      this._layout = null;
      this._parent = null;
      this._disposed = new Signal(this);
      this._hiddenMode = Widget2.HiddenMode.Display;
      this.node = Private$j.createNode(options);
      this.addClass("lm-Widget");
      this.addClass("p-Widget");
    }
    Widget2.prototype.dispose = function() {
      if (this.isDisposed) {
        return;
      }
      this.setFlag(Widget2.Flag.IsDisposed);
      this._disposed.emit(void 0);
      if (this.parent) {
        this.parent = null;
      } else if (this.isAttached) {
        Widget2.detach(this);
      }
      if (this._layout) {
        this._layout.dispose();
        this._layout = null;
      }
      this.title.dispose();
      Signal.clearData(this);
      MessageLoop.clearData(this);
      AttachedProperty.clearData(this);
    };
    Object.defineProperty(Widget2.prototype, "disposed", {
      /**
       * A signal emitted when the widget is disposed.
       */
      get: function() {
        return this._disposed;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(Widget2.prototype, "isDisposed", {
      /**
       * Test whether the widget has been disposed.
       */
      get: function() {
        return this.testFlag(Widget2.Flag.IsDisposed);
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(Widget2.prototype, "isAttached", {
      /**
       * Test whether the widget's node is attached to the DOM.
       */
      get: function() {
        return this.testFlag(Widget2.Flag.IsAttached);
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(Widget2.prototype, "isHidden", {
      /**
       * Test whether the widget is explicitly hidden.
       */
      get: function() {
        return this.testFlag(Widget2.Flag.IsHidden);
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(Widget2.prototype, "isVisible", {
      /**
       * Test whether the widget is visible.
       *
       * #### Notes
       * A widget is visible when it is attached to the DOM, is not
       * explicitly hidden, and has no explicitly hidden ancestors.
       */
      get: function() {
        return this.testFlag(Widget2.Flag.IsVisible);
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(Widget2.prototype, "title", {
      /**
       * The title object for the widget.
       *
       * #### Notes
       * The title object is used by some container widgets when displaying
       * the widget alongside some title, such as a tab panel or side bar.
       *
       * Since not all widgets will use the title, it is created on demand.
       *
       * The `owner` property of the title is set to this widget.
       */
      get: function() {
        return Private$j.titleProperty.get(this);
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(Widget2.prototype, "id", {
      /**
       * Get the id of the widget's DOM node.
       */
      get: function() {
        return this.node.id;
      },
      /**
       * Set the id of the widget's DOM node.
       */
      set: function(value) {
        this.node.id = value;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(Widget2.prototype, "dataset", {
      /**
       * The dataset for the widget's DOM node.
       */
      get: function() {
        return this.node.dataset;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(Widget2.prototype, "hiddenMode", {
      /**
       * Get the method for hiding the widget.
       */
      get: function() {
        return this._hiddenMode;
      },
      /**
       * Set the method for hiding the widget.
       */
      set: function(value) {
        if (this._hiddenMode === value) {
          return;
        }
        if (this.isHidden) {
          this._toggleHidden(false);
        }
        if (value == Widget2.HiddenMode.Scale) {
          this.node.style.willChange = "transform";
        } else {
          this.node.style.willChange = "auto";
        }
        this._hiddenMode = value;
        if (this.isHidden) {
          this._toggleHidden(true);
        }
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(Widget2.prototype, "parent", {
      /**
       * Get the parent of the widget.
       */
      get: function() {
        return this._parent;
      },
      /**
       * Set the parent of the widget.
       *
       * #### Notes
       * Children are typically added to a widget by using a layout, which
       * means user code will not normally set the parent widget directly.
       *
       * The widget will be automatically removed from its old parent.
       *
       * This is a no-op if there is no effective parent change.
       */
      set: function(value) {
        if (this._parent === value) {
          return;
        }
        if (value && this.contains(value)) {
          throw new Error("Invalid parent widget.");
        }
        if (this._parent && !this._parent.isDisposed) {
          var msg = new Widget2.ChildMessage("child-removed", this);
          MessageLoop.sendMessage(this._parent, msg);
        }
        this._parent = value;
        if (this._parent && !this._parent.isDisposed) {
          var msg = new Widget2.ChildMessage("child-added", this);
          MessageLoop.sendMessage(this._parent, msg);
        }
        if (!this.isDisposed) {
          MessageLoop.sendMessage(this, Widget2.Msg.ParentChanged);
        }
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(Widget2.prototype, "layout", {
      /**
       * Get the layout for the widget.
       */
      get: function() {
        return this._layout;
      },
      /**
       * Set the layout for the widget.
       *
       * #### Notes
       * The layout is single-use only. It cannot be changed after the
       * first assignment.
       *
       * The layout is disposed automatically when the widget is disposed.
       */
      set: function(value) {
        if (this._layout === value) {
          return;
        }
        if (this.testFlag(Widget2.Flag.DisallowLayout)) {
          throw new Error("Cannot set widget layout.");
        }
        if (this._layout) {
          throw new Error("Cannot change widget layout.");
        }
        if (value.parent) {
          throw new Error("Cannot change layout parent.");
        }
        this._layout = value;
        value.parent = this;
      },
      enumerable: true,
      configurable: true
    });
    Widget2.prototype.children = function() {
      return this._layout ? this._layout.iter() : empty();
    };
    Widget2.prototype.contains = function(widget) {
      for (var value = widget; value; value = value._parent) {
        if (value === this) {
          return true;
        }
      }
      return false;
    };
    Widget2.prototype.hasClass = function(name) {
      return this.node.classList.contains(name);
    };
    Widget2.prototype.addClass = function(name) {
      this.node.classList.add(name);
    };
    Widget2.prototype.removeClass = function(name) {
      this.node.classList.remove(name);
    };
    Widget2.prototype.toggleClass = function(name, force) {
      if (force === true) {
        this.node.classList.add(name);
        return true;
      }
      if (force === false) {
        this.node.classList.remove(name);
        return false;
      }
      return this.node.classList.toggle(name);
    };
    Widget2.prototype.update = function() {
      MessageLoop.postMessage(this, Widget2.Msg.UpdateRequest);
    };
    Widget2.prototype.fit = function() {
      MessageLoop.postMessage(this, Widget2.Msg.FitRequest);
    };
    Widget2.prototype.activate = function() {
      MessageLoop.postMessage(this, Widget2.Msg.ActivateRequest);
    };
    Widget2.prototype.close = function() {
      MessageLoop.sendMessage(this, Widget2.Msg.CloseRequest);
    };
    Widget2.prototype.show = function() {
      if (!this.testFlag(Widget2.Flag.IsHidden)) {
        return;
      }
      if (this.isAttached && (!this.parent || this.parent.isVisible)) {
        MessageLoop.sendMessage(this, Widget2.Msg.BeforeShow);
      }
      this.clearFlag(Widget2.Flag.IsHidden);
      this.node.removeAttribute("aria-hidden");
      this._toggleHidden(false);
      if (this.isAttached && (!this.parent || this.parent.isVisible)) {
        MessageLoop.sendMessage(this, Widget2.Msg.AfterShow);
      }
      if (this.parent) {
        var msg = new Widget2.ChildMessage("child-shown", this);
        MessageLoop.sendMessage(this.parent, msg);
      }
    };
    Widget2.prototype.hide = function() {
      if (this.testFlag(Widget2.Flag.IsHidden)) {
        return;
      }
      if (this.isAttached && (!this.parent || this.parent.isVisible)) {
        MessageLoop.sendMessage(this, Widget2.Msg.BeforeHide);
      }
      this.setFlag(Widget2.Flag.IsHidden);
      this.node.setAttribute("aria-hidden", "true");
      this._toggleHidden(true);
      if (this.isAttached && (!this.parent || this.parent.isVisible)) {
        MessageLoop.sendMessage(this, Widget2.Msg.AfterHide);
      }
      if (this.parent) {
        var msg = new Widget2.ChildMessage("child-hidden", this);
        MessageLoop.sendMessage(this.parent, msg);
      }
    };
    Widget2.prototype.setHidden = function(hidden) {
      if (hidden) {
        this.hide();
      } else {
        this.show();
      }
    };
    Widget2.prototype.testFlag = function(flag) {
      return (this._flags & flag) !== 0;
    };
    Widget2.prototype.setFlag = function(flag) {
      this._flags |= flag;
    };
    Widget2.prototype.clearFlag = function(flag) {
      this._flags &= ~flag;
    };
    Widget2.prototype.processMessage = function(msg) {
      switch (msg.type) {
        case "resize":
          this.notifyLayout(msg);
          this.onResize(msg);
          break;
        case "update-request":
          this.notifyLayout(msg);
          this.onUpdateRequest(msg);
          break;
        case "fit-request":
          this.notifyLayout(msg);
          this.onFitRequest(msg);
          break;
        case "before-show":
          this.notifyLayout(msg);
          this.onBeforeShow(msg);
          break;
        case "after-show":
          this.setFlag(Widget2.Flag.IsVisible);
          this.notifyLayout(msg);
          this.onAfterShow(msg);
          break;
        case "before-hide":
          this.notifyLayout(msg);
          this.onBeforeHide(msg);
          break;
        case "after-hide":
          this.clearFlag(Widget2.Flag.IsVisible);
          this.notifyLayout(msg);
          this.onAfterHide(msg);
          break;
        case "before-attach":
          this.notifyLayout(msg);
          this.onBeforeAttach(msg);
          break;
        case "after-attach":
          if (!this.isHidden && (!this.parent || this.parent.isVisible)) {
            this.setFlag(Widget2.Flag.IsVisible);
          }
          this.setFlag(Widget2.Flag.IsAttached);
          this.notifyLayout(msg);
          this.onAfterAttach(msg);
          break;
        case "before-detach":
          this.notifyLayout(msg);
          this.onBeforeDetach(msg);
          break;
        case "after-detach":
          this.clearFlag(Widget2.Flag.IsVisible);
          this.clearFlag(Widget2.Flag.IsAttached);
          this.notifyLayout(msg);
          this.onAfterDetach(msg);
          break;
        case "activate-request":
          this.notifyLayout(msg);
          this.onActivateRequest(msg);
          break;
        case "close-request":
          this.notifyLayout(msg);
          this.onCloseRequest(msg);
          break;
        case "child-added":
          this.notifyLayout(msg);
          this.onChildAdded(msg);
          break;
        case "child-removed":
          this.notifyLayout(msg);
          this.onChildRemoved(msg);
          break;
        default:
          this.notifyLayout(msg);
          break;
      }
    };
    Widget2.prototype.notifyLayout = function(msg) {
      if (this._layout) {
        this._layout.processParentMessage(msg);
      }
    };
    Widget2.prototype.onCloseRequest = function(msg) {
      if (this.parent) {
        this.parent = null;
      } else if (this.isAttached) {
        Widget2.detach(this);
      }
    };
    Widget2.prototype.onResize = function(msg) {
    };
    Widget2.prototype.onUpdateRequest = function(msg) {
    };
    Widget2.prototype.onFitRequest = function(msg) {
    };
    Widget2.prototype.onActivateRequest = function(msg) {
    };
    Widget2.prototype.onBeforeShow = function(msg) {
    };
    Widget2.prototype.onAfterShow = function(msg) {
    };
    Widget2.prototype.onBeforeHide = function(msg) {
    };
    Widget2.prototype.onAfterHide = function(msg) {
    };
    Widget2.prototype.onBeforeAttach = function(msg) {
    };
    Widget2.prototype.onAfterAttach = function(msg) {
    };
    Widget2.prototype.onBeforeDetach = function(msg) {
    };
    Widget2.prototype.onAfterDetach = function(msg) {
    };
    Widget2.prototype.onChildAdded = function(msg) {
    };
    Widget2.prototype.onChildRemoved = function(msg) {
    };
    Widget2.prototype._toggleHidden = function(hidden) {
      if (hidden) {
        switch (this._hiddenMode) {
          case Widget2.HiddenMode.Display:
            this.addClass("lm-mod-hidden");
            this.addClass("p-mod-hidden");
            break;
          case Widget2.HiddenMode.Scale:
            this.node.style.transform = "scale(0)";
            break;
          case Widget2.HiddenMode.ContentVisibility:
            this.node.style.contentVisibility = "hidden";
            this.node.style.zIndex = "-1";
            break;
        }
      } else {
        switch (this._hiddenMode) {
          case Widget2.HiddenMode.Display:
            this.removeClass("lm-mod-hidden");
            this.removeClass("p-mod-hidden");
            break;
          case Widget2.HiddenMode.Scale:
            this.node.style.transform = "";
            break;
          case Widget2.HiddenMode.ContentVisibility:
            this.node.style.contentVisibility = "";
            this.node.style.zIndex = "";
            break;
        }
      }
    };
    return Widget2;
  }()
);
(function(Widget2) {
  (function(HiddenMode) {
    HiddenMode[HiddenMode["Display"] = 0] = "Display";
    HiddenMode[HiddenMode["Scale"] = 1] = "Scale";
    HiddenMode[HiddenMode["ContentVisibility"] = 2] = "ContentVisibility";
  })(Widget2.HiddenMode || (Widget2.HiddenMode = {}));
  (function(Flag) {
    Flag[Flag["IsDisposed"] = 1] = "IsDisposed";
    Flag[Flag["IsAttached"] = 2] = "IsAttached";
    Flag[Flag["IsHidden"] = 4] = "IsHidden";
    Flag[Flag["IsVisible"] = 8] = "IsVisible";
    Flag[Flag["DisallowLayout"] = 16] = "DisallowLayout";
  })(Widget2.Flag || (Widget2.Flag = {}));
  (function(Msg) {
    Msg.BeforeShow = new Message("before-show");
    Msg.AfterShow = new Message("after-show");
    Msg.BeforeHide = new Message("before-hide");
    Msg.AfterHide = new Message("after-hide");
    Msg.BeforeAttach = new Message("before-attach");
    Msg.AfterAttach = new Message("after-attach");
    Msg.BeforeDetach = new Message("before-detach");
    Msg.AfterDetach = new Message("after-detach");
    Msg.ParentChanged = new Message("parent-changed");
    Msg.UpdateRequest = new ConflatableMessage("update-request");
    Msg.FitRequest = new ConflatableMessage("fit-request");
    Msg.ActivateRequest = new ConflatableMessage("activate-request");
    Msg.CloseRequest = new ConflatableMessage("close-request");
  })(Widget2.Msg || (Widget2.Msg = {}));
  var ChildMessage = (
    /** @class */
    function(_super) {
      __extends3(ChildMessage2, _super);
      function ChildMessage2(type, child) {
        var _this = _super.call(this, type) || this;
        _this.child = child;
        return _this;
      }
      return ChildMessage2;
    }(Message)
  );
  Widget2.ChildMessage = ChildMessage;
  var ResizeMessage = (
    /** @class */
    function(_super) {
      __extends3(ResizeMessage2, _super);
      function ResizeMessage2(width, height) {
        var _this = _super.call(this, "resize") || this;
        _this.width = width;
        _this.height = height;
        return _this;
      }
      return ResizeMessage2;
    }(Message)
  );
  Widget2.ResizeMessage = ResizeMessage;
  (function(ResizeMessage2) {
    ResizeMessage2.UnknownSize = new ResizeMessage2(-1, -1);
  })(ResizeMessage = Widget2.ResizeMessage || (Widget2.ResizeMessage = {}));
  function attach(widget, host, ref) {
    if (ref === void 0) {
      ref = null;
    }
    if (widget.parent) {
      throw new Error("Cannot attach a child widget.");
    }
    if (widget.isAttached || widget.node.isConnected) {
      throw new Error("Widget is already attached.");
    }
    if (!host.isConnected) {
      throw new Error("Host is not attached.");
    }
    MessageLoop.sendMessage(widget, Widget2.Msg.BeforeAttach);
    host.insertBefore(widget.node, ref);
    MessageLoop.sendMessage(widget, Widget2.Msg.AfterAttach);
  }
  Widget2.attach = attach;
  function detach(widget) {
    if (widget.parent) {
      throw new Error("Cannot detach a child widget.");
    }
    if (!widget.isAttached || !widget.node.isConnected) {
      throw new Error("Widget is not attached.");
    }
    MessageLoop.sendMessage(widget, Widget2.Msg.BeforeDetach);
    widget.node.parentNode.removeChild(widget.node);
    MessageLoop.sendMessage(widget, Widget2.Msg.AfterDetach);
  }
  Widget2.detach = detach;
})(Widget || (Widget = {}));
var Private$j;
(function(Private8) {
  Private8.titleProperty = new AttachedProperty({
    name: "title",
    create: function(owner) {
      return new Title({ owner });
    }
  });
  function createNode(options) {
    return options.node || document.createElement(options.tag || "div");
  }
  Private8.createNode = createNode;
})(Private$j || (Private$j = {}));
var Layout = (
  /** @class */
  function() {
    function Layout2(options) {
      if (options === void 0) {
        options = {};
      }
      this._disposed = false;
      this._parent = null;
      this._fitPolicy = options.fitPolicy || "set-min-size";
    }
    Layout2.prototype.dispose = function() {
      this._parent = null;
      this._disposed = true;
      Signal.clearData(this);
      AttachedProperty.clearData(this);
    };
    Object.defineProperty(Layout2.prototype, "isDisposed", {
      /**
       * Test whether the layout is disposed.
       */
      get: function() {
        return this._disposed;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(Layout2.prototype, "parent", {
      /**
       * Get the parent widget of the layout.
       */
      get: function() {
        return this._parent;
      },
      /**
       * Set the parent widget of the layout.
       *
       * #### Notes
       * This is set automatically when installing the layout on the parent
       * widget. The parent widget should not be set directly by user code.
       */
      set: function(value) {
        if (this._parent === value) {
          return;
        }
        if (this._parent) {
          throw new Error("Cannot change parent widget.");
        }
        if (value.layout !== this) {
          throw new Error("Invalid parent widget.");
        }
        this._parent = value;
        this.init();
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(Layout2.prototype, "fitPolicy", {
      /**
       * Get the fit policy for the layout.
       *
       * #### Notes
       * The fit policy controls the computed size constraints which are
       * applied to the parent widget by the layout.
       *
       * Some layout implementations may ignore the fit policy.
       */
      get: function() {
        return this._fitPolicy;
      },
      /**
       * Set the fit policy for the layout.
       *
       * #### Notes
       * The fit policy controls the computed size constraints which are
       * applied to the parent widget by the layout.
       *
       * Some layout implementations may ignore the fit policy.
       *
       * Changing the fit policy will clear the current size constraint
       * for the parent widget and then re-fit the parent.
       */
      set: function(value) {
        if (this._fitPolicy === value) {
          return;
        }
        this._fitPolicy = value;
        if (this._parent) {
          var style = this._parent.node.style;
          style.minWidth = "";
          style.minHeight = "";
          style.maxWidth = "";
          style.maxHeight = "";
          this._parent.fit();
        }
      },
      enumerable: true,
      configurable: true
    });
    Layout2.prototype.processParentMessage = function(msg) {
      switch (msg.type) {
        case "resize":
          this.onResize(msg);
          break;
        case "update-request":
          this.onUpdateRequest(msg);
          break;
        case "fit-request":
          this.onFitRequest(msg);
          break;
        case "before-show":
          this.onBeforeShow(msg);
          break;
        case "after-show":
          this.onAfterShow(msg);
          break;
        case "before-hide":
          this.onBeforeHide(msg);
          break;
        case "after-hide":
          this.onAfterHide(msg);
          break;
        case "before-attach":
          this.onBeforeAttach(msg);
          break;
        case "after-attach":
          this.onAfterAttach(msg);
          break;
        case "before-detach":
          this.onBeforeDetach(msg);
          break;
        case "after-detach":
          this.onAfterDetach(msg);
          break;
        case "child-removed":
          this.onChildRemoved(msg);
          break;
        case "child-shown":
          this.onChildShown(msg);
          break;
        case "child-hidden":
          this.onChildHidden(msg);
          break;
      }
    };
    Layout2.prototype.init = function() {
      var _this = this;
      each(this, function(widget) {
        widget.parent = _this.parent;
      });
    };
    Layout2.prototype.onResize = function(msg) {
      each(this, function(widget) {
        MessageLoop.sendMessage(widget, Widget.ResizeMessage.UnknownSize);
      });
    };
    Layout2.prototype.onUpdateRequest = function(msg) {
      each(this, function(widget) {
        MessageLoop.sendMessage(widget, Widget.ResizeMessage.UnknownSize);
      });
    };
    Layout2.prototype.onBeforeAttach = function(msg) {
      each(this, function(widget) {
        MessageLoop.sendMessage(widget, msg);
      });
    };
    Layout2.prototype.onAfterAttach = function(msg) {
      each(this, function(widget) {
        MessageLoop.sendMessage(widget, msg);
      });
    };
    Layout2.prototype.onBeforeDetach = function(msg) {
      each(this, function(widget) {
        MessageLoop.sendMessage(widget, msg);
      });
    };
    Layout2.prototype.onAfterDetach = function(msg) {
      each(this, function(widget) {
        MessageLoop.sendMessage(widget, msg);
      });
    };
    Layout2.prototype.onBeforeShow = function(msg) {
      each(this, function(widget) {
        if (!widget.isHidden) {
          MessageLoop.sendMessage(widget, msg);
        }
      });
    };
    Layout2.prototype.onAfterShow = function(msg) {
      each(this, function(widget) {
        if (!widget.isHidden) {
          MessageLoop.sendMessage(widget, msg);
        }
      });
    };
    Layout2.prototype.onBeforeHide = function(msg) {
      each(this, function(widget) {
        if (!widget.isHidden) {
          MessageLoop.sendMessage(widget, msg);
        }
      });
    };
    Layout2.prototype.onAfterHide = function(msg) {
      each(this, function(widget) {
        if (!widget.isHidden) {
          MessageLoop.sendMessage(widget, msg);
        }
      });
    };
    Layout2.prototype.onChildRemoved = function(msg) {
      this.removeWidget(msg.child);
    };
    Layout2.prototype.onFitRequest = function(msg) {
    };
    Layout2.prototype.onChildShown = function(msg) {
    };
    Layout2.prototype.onChildHidden = function(msg) {
    };
    return Layout2;
  }()
);
(function(Layout2) {
  function getHorizontalAlignment(widget) {
    return Private$i.horizontalAlignmentProperty.get(widget);
  }
  Layout2.getHorizontalAlignment = getHorizontalAlignment;
  function setHorizontalAlignment(widget, value) {
    Private$i.horizontalAlignmentProperty.set(widget, value);
  }
  Layout2.setHorizontalAlignment = setHorizontalAlignment;
  function getVerticalAlignment(widget) {
    return Private$i.verticalAlignmentProperty.get(widget);
  }
  Layout2.getVerticalAlignment = getVerticalAlignment;
  function setVerticalAlignment(widget, value) {
    Private$i.verticalAlignmentProperty.set(widget, value);
  }
  Layout2.setVerticalAlignment = setVerticalAlignment;
})(Layout || (Layout = {}));
var LayoutItem = (
  /** @class */
  function() {
    function LayoutItem2(widget) {
      this._top = NaN;
      this._left = NaN;
      this._width = NaN;
      this._height = NaN;
      this._minWidth = 0;
      this._minHeight = 0;
      this._maxWidth = Infinity;
      this._maxHeight = Infinity;
      this._disposed = false;
      this.widget = widget;
      this.widget.node.style.position = "absolute";
    }
    LayoutItem2.prototype.dispose = function() {
      if (this._disposed) {
        return;
      }
      this._disposed = true;
      var style = this.widget.node.style;
      style.position = "";
      style.top = "";
      style.left = "";
      style.width = "";
      style.height = "";
    };
    Object.defineProperty(LayoutItem2.prototype, "minWidth", {
      /**
       * The computed minimum width of the widget.
       *
       * #### Notes
       * This value can be updated by calling the `fit` method.
       */
      get: function() {
        return this._minWidth;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(LayoutItem2.prototype, "minHeight", {
      /**
       * The computed minimum height of the widget.
       *
       * #### Notes
       * This value can be updated by calling the `fit` method.
       */
      get: function() {
        return this._minHeight;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(LayoutItem2.prototype, "maxWidth", {
      /**
       * The computed maximum width of the widget.
       *
       * #### Notes
       * This value can be updated by calling the `fit` method.
       */
      get: function() {
        return this._maxWidth;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(LayoutItem2.prototype, "maxHeight", {
      /**
       * The computed maximum height of the widget.
       *
       * #### Notes
       * This value can be updated by calling the `fit` method.
       */
      get: function() {
        return this._maxHeight;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(LayoutItem2.prototype, "isDisposed", {
      /**
       * Whether the layout item is disposed.
       */
      get: function() {
        return this._disposed;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(LayoutItem2.prototype, "isHidden", {
      /**
       * Whether the managed widget is hidden.
       */
      get: function() {
        return this.widget.isHidden;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(LayoutItem2.prototype, "isVisible", {
      /**
       * Whether the managed widget is visible.
       */
      get: function() {
        return this.widget.isVisible;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(LayoutItem2.prototype, "isAttached", {
      /**
       * Whether the managed widget is attached.
       */
      get: function() {
        return this.widget.isAttached;
      },
      enumerable: true,
      configurable: true
    });
    LayoutItem2.prototype.fit = function() {
      var limits = ElementExt.sizeLimits(this.widget.node);
      this._minWidth = limits.minWidth;
      this._minHeight = limits.minHeight;
      this._maxWidth = limits.maxWidth;
      this._maxHeight = limits.maxHeight;
    };
    LayoutItem2.prototype.update = function(left, top, width, height) {
      var clampW = Math.max(this._minWidth, Math.min(width, this._maxWidth));
      var clampH = Math.max(this._minHeight, Math.min(height, this._maxHeight));
      if (clampW < width) {
        switch (Layout.getHorizontalAlignment(this.widget)) {
          case "left":
            break;
          case "center":
            left += (width - clampW) / 2;
            break;
          case "right":
            left += width - clampW;
            break;
          default:
            throw "unreachable";
        }
      }
      if (clampH < height) {
        switch (Layout.getVerticalAlignment(this.widget)) {
          case "top":
            break;
          case "center":
            top += (height - clampH) / 2;
            break;
          case "bottom":
            top += height - clampH;
            break;
          default:
            throw "unreachable";
        }
      }
      var resized = false;
      var style = this.widget.node.style;
      if (this._top !== top) {
        this._top = top;
        style.top = top + "px";
      }
      if (this._left !== left) {
        this._left = left;
        style.left = left + "px";
      }
      if (this._width !== clampW) {
        resized = true;
        this._width = clampW;
        style.width = clampW + "px";
      }
      if (this._height !== clampH) {
        resized = true;
        this._height = clampH;
        style.height = clampH + "px";
      }
      if (resized) {
        var msg = new Widget.ResizeMessage(clampW, clampH);
        MessageLoop.sendMessage(this.widget, msg);
      }
    };
    return LayoutItem2;
  }()
);
var Private$i;
(function(Private8) {
  Private8.horizontalAlignmentProperty = new AttachedProperty({
    name: "horizontalAlignment",
    create: function() {
      return "center";
    },
    changed: onAlignmentChanged
  });
  Private8.verticalAlignmentProperty = new AttachedProperty({
    name: "verticalAlignment",
    create: function() {
      return "top";
    },
    changed: onAlignmentChanged
  });
  function onAlignmentChanged(child) {
    if (child.parent && child.parent.layout) {
      child.parent.update();
    }
  }
})(Private$i || (Private$i = {}));
var PanelLayout = (
  /** @class */
  function(_super) {
    __extends3(PanelLayout2, _super);
    function PanelLayout2() {
      var _this = _super !== null && _super.apply(this, arguments) || this;
      _this._widgets = [];
      return _this;
    }
    PanelLayout2.prototype.dispose = function() {
      while (this._widgets.length > 0) {
        this._widgets.pop().dispose();
      }
      _super.prototype.dispose.call(this);
    };
    Object.defineProperty(PanelLayout2.prototype, "widgets", {
      /**
       * A read-only array of the widgets in the layout.
       */
      get: function() {
        return this._widgets;
      },
      enumerable: true,
      configurable: true
    });
    PanelLayout2.prototype.iter = function() {
      return iter(this._widgets);
    };
    PanelLayout2.prototype.addWidget = function(widget) {
      this.insertWidget(this._widgets.length, widget);
    };
    PanelLayout2.prototype.insertWidget = function(index, widget) {
      widget.parent = this.parent;
      var i = this._widgets.indexOf(widget);
      var j = Math.max(0, Math.min(index, this._widgets.length));
      if (i === -1) {
        ArrayExt.insert(this._widgets, j, widget);
        if (this.parent) {
          this.attachWidget(j, widget);
        }
        return;
      }
      if (j === this._widgets.length) {
        j--;
      }
      if (i === j) {
        return;
      }
      ArrayExt.move(this._widgets, i, j);
      if (this.parent) {
        this.moveWidget(i, j, widget);
      }
    };
    PanelLayout2.prototype.removeWidget = function(widget) {
      this.removeWidgetAt(this._widgets.indexOf(widget));
    };
    PanelLayout2.prototype.removeWidgetAt = function(index) {
      var widget = ArrayExt.removeAt(this._widgets, index);
      if (widget && this.parent) {
        this.detachWidget(index, widget);
      }
    };
    PanelLayout2.prototype.init = function() {
      var _this = this;
      _super.prototype.init.call(this);
      each(this, function(widget, index) {
        _this.attachWidget(index, widget);
      });
    };
    PanelLayout2.prototype.attachWidget = function(index, widget) {
      var ref = this.parent.node.children[index];
      if (this.parent.isAttached) {
        MessageLoop.sendMessage(widget, Widget.Msg.BeforeAttach);
      }
      this.parent.node.insertBefore(widget.node, ref);
      if (this.parent.isAttached) {
        MessageLoop.sendMessage(widget, Widget.Msg.AfterAttach);
      }
    };
    PanelLayout2.prototype.moveWidget = function(fromIndex, toIndex, widget) {
      if (this.parent.isAttached) {
        MessageLoop.sendMessage(widget, Widget.Msg.BeforeDetach);
      }
      this.parent.node.removeChild(widget.node);
      if (this.parent.isAttached) {
        MessageLoop.sendMessage(widget, Widget.Msg.AfterDetach);
      }
      var ref = this.parent.node.children[toIndex];
      if (this.parent.isAttached) {
        MessageLoop.sendMessage(widget, Widget.Msg.BeforeAttach);
      }
      this.parent.node.insertBefore(widget.node, ref);
      if (this.parent.isAttached) {
        MessageLoop.sendMessage(widget, Widget.Msg.AfterAttach);
      }
    };
    PanelLayout2.prototype.detachWidget = function(index, widget) {
      if (this.parent.isAttached) {
        MessageLoop.sendMessage(widget, Widget.Msg.BeforeDetach);
      }
      this.parent.node.removeChild(widget.node);
      if (this.parent.isAttached) {
        MessageLoop.sendMessage(widget, Widget.Msg.AfterDetach);
      }
    };
    return PanelLayout2;
  }(Layout)
);
var Utils;
(function(Utils2) {
  function clampDimension(value) {
    return Math.max(0, Math.floor(value));
  }
  Utils2.clampDimension = clampDimension;
})(Utils || (Utils = {}));
var Utils$1 = Utils;
var SplitLayout = (
  /** @class */
  function(_super) {
    __extends3(SplitLayout2, _super);
    function SplitLayout2(options) {
      var _this = _super.call(this) || this;
      _this.widgetOffset = 0;
      _this._fixed = 0;
      _this._spacing = 4;
      _this._dirty = false;
      _this._hasNormedSizes = false;
      _this._sizers = [];
      _this._items = [];
      _this._handles = [];
      _this._box = null;
      _this._alignment = "start";
      _this._orientation = "horizontal";
      _this.renderer = options.renderer;
      if (options.orientation !== void 0) {
        _this._orientation = options.orientation;
      }
      if (options.alignment !== void 0) {
        _this._alignment = options.alignment;
      }
      if (options.spacing !== void 0) {
        _this._spacing = Utils.clampDimension(options.spacing);
      }
      return _this;
    }
    SplitLayout2.prototype.dispose = function() {
      each(this._items, function(item) {
        item.dispose();
      });
      this._box = null;
      this._items.length = 0;
      this._sizers.length = 0;
      this._handles.length = 0;
      _super.prototype.dispose.call(this);
    };
    Object.defineProperty(SplitLayout2.prototype, "orientation", {
      /**
       * Get the layout orientation for the split layout.
       */
      get: function() {
        return this._orientation;
      },
      /**
       * Set the layout orientation for the split layout.
       */
      set: function(value) {
        if (this._orientation === value) {
          return;
        }
        this._orientation = value;
        if (!this.parent) {
          return;
        }
        this.parent.dataset["orientation"] = value;
        this.parent.fit();
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(SplitLayout2.prototype, "alignment", {
      /**
       * Get the content alignment for the split layout.
       *
       * #### Notes
       * This is the alignment of the widgets in the layout direction.
       *
       * The alignment has no effect if the widgets can expand  to fill the
       * entire split layout.
       */
      get: function() {
        return this._alignment;
      },
      /**
       * Set the content alignment for the split layout.
       *
       * #### Notes
       * This is the alignment of the widgets in the layout direction.
       *
       * The alignment has no effect if the widgets can expand  to fill the
       * entire split layout.
       */
      set: function(value) {
        if (this._alignment === value) {
          return;
        }
        this._alignment = value;
        if (!this.parent) {
          return;
        }
        this.parent.dataset["alignment"] = value;
        this.parent.update();
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(SplitLayout2.prototype, "spacing", {
      /**
       * Get the inter-element spacing for the split layout.
       */
      get: function() {
        return this._spacing;
      },
      /**
       * Set the inter-element spacing for the split layout.
       */
      set: function(value) {
        value = Utils.clampDimension(value);
        if (this._spacing === value) {
          return;
        }
        this._spacing = value;
        if (!this.parent) {
          return;
        }
        this.parent.fit();
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(SplitLayout2.prototype, "handles", {
      /**
       * A read-only array of the split handles in the layout.
       */
      get: function() {
        return this._handles;
      },
      enumerable: true,
      configurable: true
    });
    SplitLayout2.prototype.absoluteSizes = function() {
      return this._sizers.map(function(sizer) {
        return sizer.size;
      });
    };
    SplitLayout2.prototype.relativeSizes = function() {
      return Private$h.normalize(this._sizers.map(function(sizer) {
        return sizer.size;
      }));
    };
    SplitLayout2.prototype.setRelativeSizes = function(sizes, update) {
      if (update === void 0) {
        update = true;
      }
      var n = this._sizers.length;
      var temp = sizes.slice(0, n);
      while (temp.length < n) {
        temp.push(0);
      }
      var normed = Private$h.normalize(temp);
      for (var i = 0; i < n; ++i) {
        var sizer = this._sizers[i];
        sizer.sizeHint = normed[i];
        sizer.size = normed[i];
      }
      this._hasNormedSizes = true;
      if (update && this.parent) {
        this.parent.update();
      }
    };
    SplitLayout2.prototype.moveHandle = function(index, position) {
      var handle = this._handles[index];
      if (!handle || handle.classList.contains("lm-mod-hidden")) {
        return;
      }
      var delta;
      if (this._orientation === "horizontal") {
        delta = position - handle.offsetLeft;
      } else {
        delta = position - handle.offsetTop;
      }
      if (delta === 0) {
        return;
      }
      for (var _i = 0, _a = this._sizers; _i < _a.length; _i++) {
        var sizer = _a[_i];
        if (sizer.size > 0) {
          sizer.sizeHint = sizer.size;
        }
      }
      BoxEngine.adjust(this._sizers, index, delta);
      if (this.parent) {
        this.parent.update();
      }
    };
    SplitLayout2.prototype.init = function() {
      this.parent.dataset["orientation"] = this.orientation;
      this.parent.dataset["alignment"] = this.alignment;
      _super.prototype.init.call(this);
    };
    SplitLayout2.prototype.attachWidget = function(index, widget) {
      var item = new LayoutItem(widget);
      var handle = Private$h.createHandle(this.renderer);
      var average = Private$h.averageSize(this._sizers);
      var sizer = Private$h.createSizer(average);
      ArrayExt.insert(this._items, index, item);
      ArrayExt.insert(this._sizers, index, sizer);
      ArrayExt.insert(this._handles, index, handle);
      if (this.parent.isAttached) {
        MessageLoop.sendMessage(widget, Widget.Msg.BeforeAttach);
      }
      this.parent.node.appendChild(widget.node);
      this.parent.node.appendChild(handle);
      if (this.parent.isAttached) {
        MessageLoop.sendMessage(widget, Widget.Msg.AfterAttach);
      }
      this.parent.fit();
    };
    SplitLayout2.prototype.moveWidget = function(fromIndex, toIndex, widget) {
      ArrayExt.move(this._items, fromIndex, toIndex);
      ArrayExt.move(this._sizers, fromIndex, toIndex);
      ArrayExt.move(this._handles, fromIndex, toIndex);
      this.parent.fit();
    };
    SplitLayout2.prototype.detachWidget = function(index, widget) {
      var item = ArrayExt.removeAt(this._items, index);
      var handle = ArrayExt.removeAt(this._handles, index);
      ArrayExt.removeAt(this._sizers, index);
      if (this.parent.isAttached) {
        MessageLoop.sendMessage(widget, Widget.Msg.BeforeDetach);
      }
      this.parent.node.removeChild(widget.node);
      this.parent.node.removeChild(handle);
      if (this.parent.isAttached) {
        MessageLoop.sendMessage(widget, Widget.Msg.AfterDetach);
      }
      item.dispose();
      this.parent.fit();
    };
    SplitLayout2.prototype.onBeforeShow = function(msg) {
      _super.prototype.onBeforeShow.call(this, msg);
      this.parent.update();
    };
    SplitLayout2.prototype.onBeforeAttach = function(msg) {
      _super.prototype.onBeforeAttach.call(this, msg);
      this.parent.fit();
    };
    SplitLayout2.prototype.onChildShown = function(msg) {
      this.parent.fit();
    };
    SplitLayout2.prototype.onChildHidden = function(msg) {
      this.parent.fit();
    };
    SplitLayout2.prototype.onResize = function(msg) {
      if (this.parent.isVisible) {
        this._update(msg.width, msg.height);
      }
    };
    SplitLayout2.prototype.onUpdateRequest = function(msg) {
      if (this.parent.isVisible) {
        this._update(-1, -1);
      }
    };
    SplitLayout2.prototype.onFitRequest = function(msg) {
      if (this.parent.isAttached) {
        this._fit();
      }
    };
    SplitLayout2.prototype.updateItemPosition = function(i, isHorizontal, left, top, height, width, size) {
      var item = this._items[i];
      if (item.isHidden) {
        return;
      }
      var handleStyle = this._handles[i].style;
      if (isHorizontal) {
        left += this.widgetOffset;
        item.update(left, top, size, height);
        left += size;
        handleStyle.top = top + "px";
        handleStyle.left = left + "px";
        handleStyle.width = this._spacing + "px";
        handleStyle.height = height + "px";
      } else {
        top += this.widgetOffset;
        item.update(left, top, width, size);
        top += size;
        handleStyle.top = top + "px";
        handleStyle.left = left + "px";
        handleStyle.width = width + "px";
        handleStyle.height = this._spacing + "px";
      }
    };
    SplitLayout2.prototype._fit = function() {
      var nVisible = 0;
      var lastHandleIndex = -1;
      for (var i = 0, n = this._items.length; i < n; ++i) {
        if (this._items[i].isHidden) {
          this._handles[i].classList.add("lm-mod-hidden");
          this._handles[i].classList.add("p-mod-hidden");
        } else {
          this._handles[i].classList.remove("lm-mod-hidden");
          this._handles[i].classList.remove("p-mod-hidden");
          lastHandleIndex = i;
          nVisible++;
        }
      }
      if (lastHandleIndex !== -1) {
        this._handles[lastHandleIndex].classList.add("lm-mod-hidden");
        this._handles[lastHandleIndex].classList.add("p-mod-hidden");
      }
      this._fixed = this._spacing * Math.max(0, nVisible - 1) + this.widgetOffset * this._items.length;
      var horz = this._orientation === "horizontal";
      var minW = horz ? this._fixed : 0;
      var minH = horz ? 0 : this._fixed;
      for (var i = 0, n = this._items.length; i < n; ++i) {
        var item = this._items[i];
        var sizer = this._sizers[i];
        if (sizer.size > 0) {
          sizer.sizeHint = sizer.size;
        }
        if (item.isHidden) {
          sizer.minSize = 0;
          sizer.maxSize = 0;
          continue;
        }
        item.fit();
        sizer.stretch = SplitLayout2.getStretch(item.widget);
        if (horz) {
          sizer.minSize = item.minWidth;
          sizer.maxSize = item.maxWidth;
          minW += item.minWidth;
          minH = Math.max(minH, item.minHeight);
        } else {
          sizer.minSize = item.minHeight;
          sizer.maxSize = item.maxHeight;
          minH += item.minHeight;
          minW = Math.max(minW, item.minWidth);
        }
      }
      var box = this._box = ElementExt.boxSizing(this.parent.node);
      minW += box.horizontalSum;
      minH += box.verticalSum;
      var style = this.parent.node.style;
      style.minWidth = minW + "px";
      style.minHeight = minH + "px";
      this._dirty = true;
      if (this.parent.parent) {
        MessageLoop.sendMessage(this.parent.parent, Widget.Msg.FitRequest);
      }
      if (this._dirty) {
        MessageLoop.sendMessage(this.parent, Widget.Msg.UpdateRequest);
      }
    };
    SplitLayout2.prototype._update = function(offsetWidth, offsetHeight) {
      this._dirty = false;
      var nVisible = 0;
      for (var i = 0, n = this._items.length; i < n; ++i) {
        nVisible += +!this._items[i].isHidden;
      }
      if (nVisible === 0 && this.widgetOffset === 0) {
        return;
      }
      if (offsetWidth < 0) {
        offsetWidth = this.parent.node.offsetWidth;
      }
      if (offsetHeight < 0) {
        offsetHeight = this.parent.node.offsetHeight;
      }
      if (!this._box) {
        this._box = ElementExt.boxSizing(this.parent.node);
      }
      var top = this._box.paddingTop;
      var left = this._box.paddingLeft;
      var width = offsetWidth - this._box.horizontalSum;
      var height = offsetHeight - this._box.verticalSum;
      var extra = 0;
      var offset = 0;
      var horz = this._orientation === "horizontal";
      if (nVisible > 0) {
        var space = void 0;
        if (horz) {
          space = Math.max(0, width - this._fixed);
        } else {
          space = Math.max(0, height - this._fixed);
        }
        if (this._hasNormedSizes) {
          for (var _i = 0, _a = this._sizers; _i < _a.length; _i++) {
            var sizer = _a[_i];
            sizer.sizeHint *= space;
          }
          this._hasNormedSizes = false;
        }
        var delta = BoxEngine.calc(this._sizers, space);
        if (delta > 0) {
          switch (this._alignment) {
            case "start":
              break;
            case "center":
              extra = 0;
              offset = delta / 2;
              break;
            case "end":
              extra = 0;
              offset = delta;
              break;
            case "justify":
              extra = delta / nVisible;
              offset = 0;
              break;
            default:
              throw "unreachable";
          }
        }
      }
      for (var i = 0, n = this._items.length; i < n; ++i) {
        var item = this._items[i];
        var size = item.isHidden ? 0 : this._sizers[i].size + extra;
        this.updateItemPosition(i, horz, horz ? left + offset : left, horz ? top : top + offset, height, width, size);
        var fullOffset = this.widgetOffset + (this._handles[i].classList.contains("lm-mod-hidden") ? 0 : this._spacing);
        if (horz) {
          left += size + fullOffset;
        } else {
          top += size + fullOffset;
        }
      }
    };
    return SplitLayout2;
  }(PanelLayout)
);
(function(SplitLayout2) {
  function getStretch(widget) {
    return Private$h.stretchProperty.get(widget);
  }
  SplitLayout2.getStretch = getStretch;
  function setStretch(widget, value) {
    Private$h.stretchProperty.set(widget, value);
  }
  SplitLayout2.setStretch = setStretch;
})(SplitLayout || (SplitLayout = {}));
var Private$h;
(function(Private8) {
  Private8.stretchProperty = new AttachedProperty({
    name: "stretch",
    create: function() {
      return 0;
    },
    coerce: function(owner, value) {
      return Math.max(0, Math.floor(value));
    },
    changed: onChildSizingChanged
  });
  function createSizer(size) {
    var sizer = new BoxSizer();
    sizer.sizeHint = Math.floor(size);
    return sizer;
  }
  Private8.createSizer = createSizer;
  function createHandle(renderer) {
    var handle = renderer.createHandle();
    handle.style.position = "absolute";
    return handle;
  }
  Private8.createHandle = createHandle;
  function averageSize(sizers) {
    return sizers.reduce(function(v, s) {
      return v + s.size;
    }, 0) / sizers.length || 0;
  }
  Private8.averageSize = averageSize;
  function normalize(values) {
    var n = values.length;
    if (n === 0) {
      return [];
    }
    var sum = values.reduce(function(a, b) {
      return a + Math.abs(b);
    }, 0);
    return sum === 0 ? values.map(function(v) {
      return 1 / n;
    }) : values.map(function(v) {
      return v / sum;
    });
  }
  Private8.normalize = normalize;
  function onChildSizingChanged(child) {
    if (child.parent && child.parent.layout instanceof SplitLayout) {
      child.parent.fit();
    }
  }
})(Private$h || (Private$h = {}));
var AccordionLayout = (
  /** @class */
  function(_super) {
    __extends3(AccordionLayout2, _super);
    function AccordionLayout2(options) {
      var _this = _super.call(this, __assign2(__assign2({}, options), { orientation: options.orientation || "vertical" })) || this;
      _this._titles = [];
      _this.titleSpace = options.titleSpace || 22;
      return _this;
    }
    Object.defineProperty(AccordionLayout2.prototype, "titleSpace", {
      /**
       * The section title height or width depending on the orientation.
       */
      get: function() {
        return this.widgetOffset;
      },
      set: function(value) {
        value = Utils$1.clampDimension(value);
        if (this.widgetOffset === value) {
          return;
        }
        this.widgetOffset = value;
        if (!this.parent) {
          return;
        }
        this.parent.fit();
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(AccordionLayout2.prototype, "titles", {
      /**
       * A read-only array of the section titles in the panel.
       */
      get: function() {
        return this._titles;
      },
      enumerable: true,
      configurable: true
    });
    AccordionLayout2.prototype.dispose = function() {
      if (this.isDisposed) {
        return;
      }
      this._titles.length = 0;
      _super.prototype.dispose.call(this);
    };
    AccordionLayout2.prototype.updateTitle = function(index, widget) {
      var oldTitle = this._titles[index];
      var expanded = oldTitle.classList.contains("lm-mod-expanded");
      var newTitle = Private$g.createTitle(this.renderer, widget.title, expanded);
      this._titles[index] = newTitle;
      this.parent.node.replaceChild(newTitle, oldTitle);
    };
    AccordionLayout2.prototype.attachWidget = function(index, widget) {
      var title = Private$g.createTitle(this.renderer, widget.title);
      ArrayExt.insert(this._titles, index, title);
      this.parent.node.appendChild(title);
      widget.node.setAttribute("role", "region");
      widget.node.setAttribute("aria-labelledby", title.id);
      _super.prototype.attachWidget.call(this, index, widget);
    };
    AccordionLayout2.prototype.moveWidget = function(fromIndex, toIndex, widget) {
      ArrayExt.move(this._titles, fromIndex, toIndex);
      _super.prototype.moveWidget.call(this, fromIndex, toIndex, widget);
    };
    AccordionLayout2.prototype.detachWidget = function(index, widget) {
      var title = ArrayExt.removeAt(this._titles, index);
      this.parent.node.removeChild(title);
      _super.prototype.detachWidget.call(this, index, widget);
    };
    AccordionLayout2.prototype.updateItemPosition = function(i, isHorizontal, left, top, height, width, size) {
      var titleStyle = this._titles[i].style;
      titleStyle.top = top + "px";
      titleStyle.left = left + "px";
      titleStyle.height = this.widgetOffset + "px";
      if (isHorizontal) {
        titleStyle.width = height + "px";
      } else {
        titleStyle.width = width + "px";
      }
      _super.prototype.updateItemPosition.call(this, i, isHorizontal, left, top, height, width, size);
    };
    return AccordionLayout2;
  }(SplitLayout)
);
var Private$g;
(function(Private8) {
  function createTitle(renderer, data, expanded) {
    if (expanded === void 0) {
      expanded = true;
    }
    var title = renderer.createSectionTitle(data);
    title.style.position = "absolute";
    title.setAttribute("aria-label", data.label + " Section");
    title.setAttribute("aria-expanded", expanded ? "true" : "false");
    title.setAttribute("aria-controls", data.owner.id);
    if (expanded) {
      title.classList.add("lm-mod-expanded");
    }
    return title;
  }
  Private8.createTitle = createTitle;
})(Private$g || (Private$g = {}));
var Panel = (
  /** @class */
  function(_super) {
    __extends3(Panel2, _super);
    function Panel2(options) {
      if (options === void 0) {
        options = {};
      }
      var _this = _super.call(this) || this;
      _this.addClass("lm-Panel");
      _this.addClass("p-Panel");
      _this.layout = Private$f.createLayout(options);
      return _this;
    }
    Object.defineProperty(Panel2.prototype, "widgets", {
      /**
       * A read-only array of the widgets in the panel.
       */
      get: function() {
        return this.layout.widgets;
      },
      enumerable: true,
      configurable: true
    });
    Panel2.prototype.addWidget = function(widget) {
      this.layout.addWidget(widget);
    };
    Panel2.prototype.insertWidget = function(index, widget) {
      this.layout.insertWidget(index, widget);
    };
    return Panel2;
  }(Widget)
);
var Private$f;
(function(Private8) {
  function createLayout(options) {
    return options.layout || new PanelLayout();
  }
  Private8.createLayout = createLayout;
})(Private$f || (Private$f = {}));
var SplitPanel = (
  /** @class */
  function(_super) {
    __extends3(SplitPanel2, _super);
    function SplitPanel2(options) {
      if (options === void 0) {
        options = {};
      }
      var _this = _super.call(this, { layout: Private$e.createLayout(options) }) || this;
      _this._handleMoved = new Signal(_this);
      _this._pressData = null;
      _this.addClass("lm-SplitPanel");
      _this.addClass("p-SplitPanel");
      return _this;
    }
    SplitPanel2.prototype.dispose = function() {
      this._releaseMouse();
      _super.prototype.dispose.call(this);
    };
    Object.defineProperty(SplitPanel2.prototype, "orientation", {
      /**
       * Get the layout orientation for the split panel.
       */
      get: function() {
        return this.layout.orientation;
      },
      /**
       * Set the layout orientation for the split panel.
       */
      set: function(value) {
        this.layout.orientation = value;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(SplitPanel2.prototype, "alignment", {
      /**
       * Get the content alignment for the split panel.
       *
       * #### Notes
       * This is the alignment of the widgets in the layout direction.
       *
       * The alignment has no effect if the widgets can expand to fill the
       * entire split panel.
       */
      get: function() {
        return this.layout.alignment;
      },
      /**
       * Set the content alignment for the split panel.
       *
       * #### Notes
       * This is the alignment of the widgets in the layout direction.
       *
       * The alignment has no effect if the widgets can expand to fill the
       * entire split panel.
       */
      set: function(value) {
        this.layout.alignment = value;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(SplitPanel2.prototype, "spacing", {
      /**
       * Get the inter-element spacing for the split panel.
       */
      get: function() {
        return this.layout.spacing;
      },
      /**
       * Set the inter-element spacing for the split panel.
       */
      set: function(value) {
        this.layout.spacing = value;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(SplitPanel2.prototype, "renderer", {
      /**
       * The renderer used by the split panel.
       */
      get: function() {
        return this.layout.renderer;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(SplitPanel2.prototype, "handleMoved", {
      /**
       * A signal emitted when a split handle has moved.
       */
      get: function() {
        return this._handleMoved;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(SplitPanel2.prototype, "handles", {
      /**
       * A read-only array of the split handles in the panel.
       */
      get: function() {
        return this.layout.handles;
      },
      enumerable: true,
      configurable: true
    });
    SplitPanel2.prototype.relativeSizes = function() {
      return this.layout.relativeSizes();
    };
    SplitPanel2.prototype.setRelativeSizes = function(sizes, update) {
      if (update === void 0) {
        update = true;
      }
      this.layout.setRelativeSizes(sizes, update);
    };
    SplitPanel2.prototype.handleEvent = function(event) {
      switch (event.type) {
        case "mousedown":
          this._evtMouseDown(event);
          break;
        case "mousemove":
          this._evtMouseMove(event);
          break;
        case "mouseup":
          this._evtMouseUp(event);
          break;
        case "pointerdown":
          this._evtMouseDown(event);
          break;
        case "pointermove":
          this._evtMouseMove(event);
          break;
        case "pointerup":
          this._evtMouseUp(event);
          break;
        case "keydown":
          this._evtKeyDown(event);
          break;
        case "contextmenu":
          event.preventDefault();
          event.stopPropagation();
          break;
      }
    };
    SplitPanel2.prototype.onBeforeAttach = function(msg) {
      this.node.addEventListener("mousedown", this);
      this.node.addEventListener("pointerdown", this);
    };
    SplitPanel2.prototype.onAfterDetach = function(msg) {
      this.node.removeEventListener("mousedown", this);
      this.node.removeEventListener("pointerdown", this);
      this._releaseMouse();
    };
    SplitPanel2.prototype.onChildAdded = function(msg) {
      msg.child.addClass("lm-SplitPanel-child");
      msg.child.addClass("p-SplitPanel-child");
      this._releaseMouse();
    };
    SplitPanel2.prototype.onChildRemoved = function(msg) {
      msg.child.removeClass("lm-SplitPanel-child");
      msg.child.removeClass("p-SplitPanel-child");
      this._releaseMouse();
    };
    SplitPanel2.prototype._evtKeyDown = function(event) {
      if (this._pressData) {
        event.preventDefault();
        event.stopPropagation();
      }
      if (event.keyCode === 27) {
        this._releaseMouse();
      }
    };
    SplitPanel2.prototype._evtMouseDown = function(event) {
      if (event.button !== 0) {
        return;
      }
      var layout = this.layout;
      var index = ArrayExt.findFirstIndex(layout.handles, function(handle2) {
        return handle2.contains(event.target);
      });
      if (index === -1) {
        return;
      }
      event.preventDefault();
      event.stopPropagation();
      document.addEventListener("mouseup", this, true);
      document.addEventListener("mousemove", this, true);
      document.addEventListener("pointerup", this, true);
      document.addEventListener("pointermove", this, true);
      document.addEventListener("keydown", this, true);
      document.addEventListener("contextmenu", this, true);
      var delta;
      var handle = layout.handles[index];
      var rect = handle.getBoundingClientRect();
      if (layout.orientation === "horizontal") {
        delta = event.clientX - rect.left;
      } else {
        delta = event.clientY - rect.top;
      }
      var style = window.getComputedStyle(handle);
      var override = Drag.overrideCursor(style.cursor);
      this._pressData = { index, delta, override };
    };
    SplitPanel2.prototype._evtMouseMove = function(event) {
      event.preventDefault();
      event.stopPropagation();
      var pos;
      var layout = this.layout;
      var rect = this.node.getBoundingClientRect();
      if (layout.orientation === "horizontal") {
        pos = event.clientX - rect.left - this._pressData.delta;
      } else {
        pos = event.clientY - rect.top - this._pressData.delta;
      }
      layout.moveHandle(this._pressData.index, pos);
    };
    SplitPanel2.prototype._evtMouseUp = function(event) {
      if (event.button !== 0) {
        return;
      }
      event.preventDefault();
      event.stopPropagation();
      this._releaseMouse();
    };
    SplitPanel2.prototype._releaseMouse = function() {
      if (!this._pressData) {
        return;
      }
      this._pressData.override.dispose();
      this._pressData = null;
      this._handleMoved.emit();
      document.removeEventListener("mouseup", this, true);
      document.removeEventListener("mousemove", this, true);
      document.removeEventListener("keydown", this, true);
      document.removeEventListener("pointerup", this, true);
      document.removeEventListener("pointermove", this, true);
      document.removeEventListener("contextmenu", this, true);
    };
    return SplitPanel2;
  }(Panel)
);
(function(SplitPanel2) {
  var Renderer = (
    /** @class */
    function() {
      function Renderer2() {
      }
      Renderer2.prototype.createHandle = function() {
        var handle = document.createElement("div");
        handle.className = "lm-SplitPanel-handle";
        handle.classList.add("p-SplitPanel-handle");
        return handle;
      };
      return Renderer2;
    }()
  );
  SplitPanel2.Renderer = Renderer;
  SplitPanel2.defaultRenderer = new Renderer();
  function getStretch(widget) {
    return SplitLayout.getStretch(widget);
  }
  SplitPanel2.getStretch = getStretch;
  function setStretch(widget, value) {
    SplitLayout.setStretch(widget, value);
  }
  SplitPanel2.setStretch = setStretch;
})(SplitPanel || (SplitPanel = {}));
var Private$e;
(function(Private8) {
  function createLayout(options) {
    return options.layout || new SplitLayout({
      renderer: options.renderer || SplitPanel.defaultRenderer,
      orientation: options.orientation,
      alignment: options.alignment,
      spacing: options.spacing
    });
  }
  Private8.createLayout = createLayout;
})(Private$e || (Private$e = {}));
var AccordionPanel = (
  /** @class */
  function(_super) {
    __extends3(AccordionPanel2, _super);
    function AccordionPanel2(options) {
      if (options === void 0) {
        options = {};
      }
      var _this = _super.call(this, __assign2(__assign2({}, options), { layout: Private$d.createLayout(options) })) || this;
      _this._widgetSizesCache = /* @__PURE__ */ new WeakMap();
      _this.addClass("lm-AccordionPanel");
      return _this;
    }
    Object.defineProperty(AccordionPanel2.prototype, "renderer", {
      /**
       * The renderer used by the accordion panel.
       */
      get: function() {
        return this.layout.renderer;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(AccordionPanel2.prototype, "titleSpace", {
      /**
       * The section title space.
       *
       * This is the height if the panel is vertical and the width if it is
       * horizontal.
       */
      get: function() {
        return this.layout.titleSpace;
      },
      set: function(value) {
        this.layout.titleSpace = value;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(AccordionPanel2.prototype, "titles", {
      /**
       * A read-only array of the section titles in the panel.
       */
      get: function() {
        return this.layout.titles;
      },
      enumerable: true,
      configurable: true
    });
    AccordionPanel2.prototype.addWidget = function(widget) {
      _super.prototype.addWidget.call(this, widget);
      widget.title.changed.connect(this._onTitleChanged, this);
    };
    AccordionPanel2.prototype.collapse = function(index) {
      var widget = this.layout.widgets[index];
      if (widget && !widget.isHidden) {
        this._toggleExpansion(index);
      }
    };
    AccordionPanel2.prototype.expand = function(index) {
      var widget = this.layout.widgets[index];
      if (widget && widget.isHidden) {
        this._toggleExpansion(index);
      }
    };
    AccordionPanel2.prototype.insertWidget = function(index, widget) {
      _super.prototype.insertWidget.call(this, index, widget);
      widget.title.changed.connect(this._onTitleChanged, this);
    };
    AccordionPanel2.prototype.handleEvent = function(event) {
      _super.prototype.handleEvent.call(this, event);
      switch (event.type) {
        case "click":
          this._evtClick(event);
          break;
        case "keydown":
          this._eventKeyDown(event);
          break;
      }
    };
    AccordionPanel2.prototype.onBeforeAttach = function(msg) {
      this.node.addEventListener("click", this);
      this.node.addEventListener("keydown", this);
      _super.prototype.onBeforeAttach.call(this, msg);
    };
    AccordionPanel2.prototype.onAfterDetach = function(msg) {
      _super.prototype.onAfterDetach.call(this, msg);
      this.node.removeEventListener("click", this);
      this.node.removeEventListener("keydown", this);
    };
    AccordionPanel2.prototype._onTitleChanged = function(sender) {
      var index = ArrayExt.findFirstIndex(this.widgets, function(widget) {
        return widget.contains(sender.owner);
      });
      if (index >= 0) {
        this.layout.updateTitle(index, sender.owner);
        this.update();
      }
    };
    AccordionPanel2.prototype._computeWidgetSize = function(index) {
      var layout = this.layout;
      var widget = layout.widgets[index];
      if (!widget) {
        return void 0;
      }
      var isHidden = widget.isHidden;
      var widgetSizes = layout.absoluteSizes();
      var delta = (isHidden ? -1 : 1) * this.spacing;
      var totalSize = widgetSizes.reduce(function(prev, curr) {
        return prev + curr;
      });
      var newSize = __spreadArrays(widgetSizes);
      if (!isHidden) {
        var currentSize = widgetSizes[index];
        this._widgetSizesCache.set(widget, currentSize);
        newSize[index] = 0;
        var widgetToCollapse = newSize.map(function(sz) {
          return sz > 0;
        }).lastIndexOf(true);
        if (widgetToCollapse === -1) {
          return void 0;
        }
        newSize[widgetToCollapse] = widgetSizes[widgetToCollapse] + currentSize + delta;
      } else {
        var previousSize_1 = this._widgetSizesCache.get(widget);
        if (!previousSize_1) {
          return void 0;
        }
        newSize[index] += previousSize_1;
        var widgetToCollapse = newSize.map(function(sz) {
          return sz - previousSize_1 > 0;
        }).lastIndexOf(true);
        if (widgetToCollapse === -1) {
          newSize.forEach(function(_, idx) {
            if (idx !== index) {
              newSize[idx] -= widgetSizes[idx] / totalSize * (previousSize_1 - delta);
            }
          });
        } else {
          newSize[widgetToCollapse] -= previousSize_1 - delta;
        }
      }
      return newSize.map(function(sz) {
        return sz / (totalSize + delta);
      });
    };
    AccordionPanel2.prototype._evtClick = function(event) {
      var target = event.target;
      if (target) {
        var index = ArrayExt.findFirstIndex(this.titles, function(title) {
          return title.contains(target);
        });
        if (index >= 0) {
          event.preventDefault();
          event.stopPropagation();
          this._toggleExpansion(index);
        }
      }
    };
    AccordionPanel2.prototype._eventKeyDown = function(event) {
      if (event.defaultPrevented) {
        return;
      }
      var target = event.target;
      var handled = false;
      if (target) {
        var index = ArrayExt.findFirstIndex(this.titles, function(title) {
          return title.contains(target);
        });
        if (index >= 0) {
          var keyCode = event.keyCode.toString();
          if (event.key.match(/Space|Enter/) || keyCode.match(/13|32/)) {
            target.click();
            handled = true;
          } else if (this.orientation === "horizontal" ? event.key.match(/ArrowLeft|ArrowRight/) || keyCode.match(/37|39/) : event.key.match(/ArrowUp|ArrowDown/) || keyCode.match(/38|40/)) {
            var direction = event.key.match(/ArrowLeft|ArrowUp/) || keyCode.match(/37|38/) ? -1 : 1;
            var length_1 = this.titles.length;
            var newIndex = (index + length_1 + direction) % length_1;
            this.titles[newIndex].focus();
            handled = true;
          } else if (event.key === "End" || keyCode === "35") {
            this.titles[this.titles.length - 1].focus();
            handled = true;
          } else if (event.key === "Home" || keyCode === "36") {
            this.titles[0].focus();
            handled = true;
          }
        }
        if (handled) {
          event.preventDefault();
        }
      }
    };
    AccordionPanel2.prototype._toggleExpansion = function(index) {
      var title = this.titles[index];
      var widget = this.layout.widgets[index];
      var newSize = this._computeWidgetSize(index);
      if (newSize) {
        this.setRelativeSizes(newSize, false);
      }
      if (widget.isHidden) {
        title.classList.add("lm-mod-expanded");
        title.setAttribute("aria-expanded", "true");
        widget.show();
      } else {
        title.classList.remove("lm-mod-expanded");
        title.setAttribute("aria-expanded", "false");
        widget.hide();
      }
    };
    return AccordionPanel2;
  }(SplitPanel)
);
(function(AccordionPanel2) {
  var Renderer = (
    /** @class */
    function(_super) {
      __extends3(Renderer2, _super);
      function Renderer2() {
        var _this = _super.call(this) || this;
        _this.titleClassName = "lm-AccordionPanel-title";
        _this._titleID = 0;
        _this._titleKeys = /* @__PURE__ */ new WeakMap();
        _this._uuid = ++Renderer2._nInstance;
        return _this;
      }
      Renderer2.prototype.createCollapseIcon = function(data) {
        return document.createElement("span");
      };
      Renderer2.prototype.createSectionTitle = function(data) {
        var handle = document.createElement("h3");
        handle.setAttribute("role", "button");
        handle.setAttribute("tabindex", "0");
        handle.id = this.createTitleKey(data);
        handle.className = this.titleClassName;
        for (var aData in data.dataset) {
          handle.dataset[aData] = data.dataset[aData];
        }
        var collapser = handle.appendChild(this.createCollapseIcon(data));
        collapser.className = "lm-AccordionPanel-titleCollapser";
        var label = handle.appendChild(document.createElement("span"));
        label.className = "lm-AccordionPanel-titleLabel";
        label.textContent = data.label;
        label.title = data.caption || data.label;
        return handle;
      };
      Renderer2.prototype.createTitleKey = function(data) {
        var key = this._titleKeys.get(data);
        if (key === void 0) {
          key = "title-key-" + this._uuid + "-" + this._titleID++;
          this._titleKeys.set(data, key);
        }
        return key;
      };
      Renderer2._nInstance = 0;
      return Renderer2;
    }(SplitPanel.Renderer)
  );
  AccordionPanel2.Renderer = Renderer;
  AccordionPanel2.defaultRenderer = new Renderer();
})(AccordionPanel || (AccordionPanel = {}));
var Private$d;
(function(Private8) {
  function createLayout(options) {
    return options.layout || new AccordionLayout({
      renderer: options.renderer || AccordionPanel.defaultRenderer,
      orientation: options.orientation,
      alignment: options.alignment,
      spacing: options.spacing,
      titleSpace: options.titleSpace
    });
  }
  Private8.createLayout = createLayout;
})(Private$d || (Private$d = {}));
var BoxLayout = (
  /** @class */
  function(_super) {
    __extends3(BoxLayout2, _super);
    function BoxLayout2(options) {
      if (options === void 0) {
        options = {};
      }
      var _this = _super.call(this) || this;
      _this._fixed = 0;
      _this._spacing = 4;
      _this._dirty = false;
      _this._sizers = [];
      _this._items = [];
      _this._box = null;
      _this._alignment = "start";
      _this._direction = "top-to-bottom";
      if (options.direction !== void 0) {
        _this._direction = options.direction;
      }
      if (options.alignment !== void 0) {
        _this._alignment = options.alignment;
      }
      if (options.spacing !== void 0) {
        _this._spacing = Utils$1.clampDimension(options.spacing);
      }
      return _this;
    }
    BoxLayout2.prototype.dispose = function() {
      each(this._items, function(item) {
        item.dispose();
      });
      this._box = null;
      this._items.length = 0;
      this._sizers.length = 0;
      _super.prototype.dispose.call(this);
    };
    Object.defineProperty(BoxLayout2.prototype, "direction", {
      /**
       * Get the layout direction for the box layout.
       */
      get: function() {
        return this._direction;
      },
      /**
       * Set the layout direction for the box layout.
       */
      set: function(value) {
        if (this._direction === value) {
          return;
        }
        this._direction = value;
        if (!this.parent) {
          return;
        }
        this.parent.dataset["direction"] = value;
        this.parent.fit();
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(BoxLayout2.prototype, "alignment", {
      /**
       * Get the content alignment for the box layout.
       *
       * #### Notes
       * This is the alignment of the widgets in the layout direction.
       *
       * The alignment has no effect if the widgets can expand to fill the
       * entire box layout.
       */
      get: function() {
        return this._alignment;
      },
      /**
       * Set the content alignment for the box layout.
       *
       * #### Notes
       * This is the alignment of the widgets in the layout direction.
       *
       * The alignment has no effect if the widgets can expand to fill the
       * entire box layout.
       */
      set: function(value) {
        if (this._alignment === value) {
          return;
        }
        this._alignment = value;
        if (!this.parent) {
          return;
        }
        this.parent.dataset["alignment"] = value;
        this.parent.update();
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(BoxLayout2.prototype, "spacing", {
      /**
       * Get the inter-element spacing for the box layout.
       */
      get: function() {
        return this._spacing;
      },
      /**
       * Set the inter-element spacing for the box layout.
       */
      set: function(value) {
        value = Utils$1.clampDimension(value);
        if (this._spacing === value) {
          return;
        }
        this._spacing = value;
        if (!this.parent) {
          return;
        }
        this.parent.fit();
      },
      enumerable: true,
      configurable: true
    });
    BoxLayout2.prototype.init = function() {
      this.parent.dataset["direction"] = this.direction;
      this.parent.dataset["alignment"] = this.alignment;
      _super.prototype.init.call(this);
    };
    BoxLayout2.prototype.attachWidget = function(index, widget) {
      ArrayExt.insert(this._items, index, new LayoutItem(widget));
      ArrayExt.insert(this._sizers, index, new BoxSizer());
      if (this.parent.isAttached) {
        MessageLoop.sendMessage(widget, Widget.Msg.BeforeAttach);
      }
      this.parent.node.appendChild(widget.node);
      if (this.parent.isAttached) {
        MessageLoop.sendMessage(widget, Widget.Msg.AfterAttach);
      }
      this.parent.fit();
    };
    BoxLayout2.prototype.moveWidget = function(fromIndex, toIndex, widget) {
      ArrayExt.move(this._items, fromIndex, toIndex);
      ArrayExt.move(this._sizers, fromIndex, toIndex);
      this.parent.update();
    };
    BoxLayout2.prototype.detachWidget = function(index, widget) {
      var item = ArrayExt.removeAt(this._items, index);
      ArrayExt.removeAt(this._sizers, index);
      if (this.parent.isAttached) {
        MessageLoop.sendMessage(widget, Widget.Msg.BeforeDetach);
      }
      this.parent.node.removeChild(widget.node);
      if (this.parent.isAttached) {
        MessageLoop.sendMessage(widget, Widget.Msg.AfterDetach);
      }
      item.dispose();
      this.parent.fit();
    };
    BoxLayout2.prototype.onBeforeShow = function(msg) {
      _super.prototype.onBeforeShow.call(this, msg);
      this.parent.update();
    };
    BoxLayout2.prototype.onBeforeAttach = function(msg) {
      _super.prototype.onBeforeAttach.call(this, msg);
      this.parent.fit();
    };
    BoxLayout2.prototype.onChildShown = function(msg) {
      this.parent.fit();
    };
    BoxLayout2.prototype.onChildHidden = function(msg) {
      this.parent.fit();
    };
    BoxLayout2.prototype.onResize = function(msg) {
      if (this.parent.isVisible) {
        this._update(msg.width, msg.height);
      }
    };
    BoxLayout2.prototype.onUpdateRequest = function(msg) {
      if (this.parent.isVisible) {
        this._update(-1, -1);
      }
    };
    BoxLayout2.prototype.onFitRequest = function(msg) {
      if (this.parent.isAttached) {
        this._fit();
      }
    };
    BoxLayout2.prototype._fit = function() {
      var nVisible = 0;
      for (var i = 0, n = this._items.length; i < n; ++i) {
        nVisible += +!this._items[i].isHidden;
      }
      this._fixed = this._spacing * Math.max(0, nVisible - 1);
      var horz = Private$c.isHorizontal(this._direction);
      var minW = horz ? this._fixed : 0;
      var minH = horz ? 0 : this._fixed;
      for (var i = 0, n = this._items.length; i < n; ++i) {
        var item = this._items[i];
        var sizer = this._sizers[i];
        if (item.isHidden) {
          sizer.minSize = 0;
          sizer.maxSize = 0;
          continue;
        }
        item.fit();
        sizer.sizeHint = BoxLayout2.getSizeBasis(item.widget);
        sizer.stretch = BoxLayout2.getStretch(item.widget);
        if (horz) {
          sizer.minSize = item.minWidth;
          sizer.maxSize = item.maxWidth;
          minW += item.minWidth;
          minH = Math.max(minH, item.minHeight);
        } else {
          sizer.minSize = item.minHeight;
          sizer.maxSize = item.maxHeight;
          minH += item.minHeight;
          minW = Math.max(minW, item.minWidth);
        }
      }
      var box = this._box = ElementExt.boxSizing(this.parent.node);
      minW += box.horizontalSum;
      minH += box.verticalSum;
      var style = this.parent.node.style;
      style.minWidth = minW + "px";
      style.minHeight = minH + "px";
      this._dirty = true;
      if (this.parent.parent) {
        MessageLoop.sendMessage(this.parent.parent, Widget.Msg.FitRequest);
      }
      if (this._dirty) {
        MessageLoop.sendMessage(this.parent, Widget.Msg.UpdateRequest);
      }
    };
    BoxLayout2.prototype._update = function(offsetWidth, offsetHeight) {
      this._dirty = false;
      var nVisible = 0;
      for (var i = 0, n = this._items.length; i < n; ++i) {
        nVisible += +!this._items[i].isHidden;
      }
      if (nVisible === 0) {
        return;
      }
      if (offsetWidth < 0) {
        offsetWidth = this.parent.node.offsetWidth;
      }
      if (offsetHeight < 0) {
        offsetHeight = this.parent.node.offsetHeight;
      }
      if (!this._box) {
        this._box = ElementExt.boxSizing(this.parent.node);
      }
      var top = this._box.paddingTop;
      var left = this._box.paddingLeft;
      var width = offsetWidth - this._box.horizontalSum;
      var height = offsetHeight - this._box.verticalSum;
      var delta;
      switch (this._direction) {
        case "left-to-right":
          delta = BoxEngine.calc(this._sizers, Math.max(0, width - this._fixed));
          break;
        case "top-to-bottom":
          delta = BoxEngine.calc(this._sizers, Math.max(0, height - this._fixed));
          break;
        case "right-to-left":
          delta = BoxEngine.calc(this._sizers, Math.max(0, width - this._fixed));
          left += width;
          break;
        case "bottom-to-top":
          delta = BoxEngine.calc(this._sizers, Math.max(0, height - this._fixed));
          top += height;
          break;
        default:
          throw "unreachable";
      }
      var extra = 0;
      var offset = 0;
      if (delta > 0) {
        switch (this._alignment) {
          case "start":
            break;
          case "center":
            extra = 0;
            offset = delta / 2;
            break;
          case "end":
            extra = 0;
            offset = delta;
            break;
          case "justify":
            extra = delta / nVisible;
            offset = 0;
            break;
          default:
            throw "unreachable";
        }
      }
      for (var i = 0, n = this._items.length; i < n; ++i) {
        var item = this._items[i];
        if (item.isHidden) {
          continue;
        }
        var size = this._sizers[i].size;
        switch (this._direction) {
          case "left-to-right":
            item.update(left + offset, top, size + extra, height);
            left += size + extra + this._spacing;
            break;
          case "top-to-bottom":
            item.update(left, top + offset, width, size + extra);
            top += size + extra + this._spacing;
            break;
          case "right-to-left":
            item.update(left - offset - size - extra, top, size + extra, height);
            left -= size + extra + this._spacing;
            break;
          case "bottom-to-top":
            item.update(left, top - offset - size - extra, width, size + extra);
            top -= size + extra + this._spacing;
            break;
          default:
            throw "unreachable";
        }
      }
    };
    return BoxLayout2;
  }(PanelLayout)
);
(function(BoxLayout2) {
  function getStretch(widget) {
    return Private$c.stretchProperty.get(widget);
  }
  BoxLayout2.getStretch = getStretch;
  function setStretch(widget, value) {
    Private$c.stretchProperty.set(widget, value);
  }
  BoxLayout2.setStretch = setStretch;
  function getSizeBasis(widget) {
    return Private$c.sizeBasisProperty.get(widget);
  }
  BoxLayout2.getSizeBasis = getSizeBasis;
  function setSizeBasis(widget, value) {
    Private$c.sizeBasisProperty.set(widget, value);
  }
  BoxLayout2.setSizeBasis = setSizeBasis;
})(BoxLayout || (BoxLayout = {}));
var Private$c;
(function(Private8) {
  Private8.stretchProperty = new AttachedProperty({
    name: "stretch",
    create: function() {
      return 0;
    },
    coerce: function(owner, value) {
      return Math.max(0, Math.floor(value));
    },
    changed: onChildSizingChanged
  });
  Private8.sizeBasisProperty = new AttachedProperty({
    name: "sizeBasis",
    create: function() {
      return 0;
    },
    coerce: function(owner, value) {
      return Math.max(0, Math.floor(value));
    },
    changed: onChildSizingChanged
  });
  function isHorizontal(dir) {
    return dir === "left-to-right" || dir === "right-to-left";
  }
  Private8.isHorizontal = isHorizontal;
  function clampSpacing(value) {
    return Math.max(0, Math.floor(value));
  }
  Private8.clampSpacing = clampSpacing;
  function onChildSizingChanged(child) {
    if (child.parent && child.parent.layout instanceof BoxLayout) {
      child.parent.fit();
    }
  }
})(Private$c || (Private$c = {}));
var BoxPanel = (
  /** @class */
  function(_super) {
    __extends3(BoxPanel2, _super);
    function BoxPanel2(options) {
      if (options === void 0) {
        options = {};
      }
      var _this = _super.call(this, { layout: Private$b.createLayout(options) }) || this;
      _this.addClass("lm-BoxPanel");
      _this.addClass("p-BoxPanel");
      return _this;
    }
    Object.defineProperty(BoxPanel2.prototype, "direction", {
      /**
       * Get the layout direction for the box panel.
       */
      get: function() {
        return this.layout.direction;
      },
      /**
       * Set the layout direction for the box panel.
       */
      set: function(value) {
        this.layout.direction = value;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(BoxPanel2.prototype, "alignment", {
      /**
       * Get the content alignment for the box panel.
       *
       * #### Notes
       * This is the alignment of the widgets in the layout direction.
       *
       * The alignment has no effect if the widgets can expand to fill the
       * entire box layout.
       */
      get: function() {
        return this.layout.alignment;
      },
      /**
       * Set the content alignment for the box panel.
       *
       * #### Notes
       * This is the alignment of the widgets in the layout direction.
       *
       * The alignment has no effect if the widgets can expand to fill the
       * entire box layout.
       */
      set: function(value) {
        this.layout.alignment = value;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(BoxPanel2.prototype, "spacing", {
      /**
       * Get the inter-element spacing for the box panel.
       */
      get: function() {
        return this.layout.spacing;
      },
      /**
       * Set the inter-element spacing for the box panel.
       */
      set: function(value) {
        this.layout.spacing = value;
      },
      enumerable: true,
      configurable: true
    });
    BoxPanel2.prototype.onChildAdded = function(msg) {
      msg.child.addClass("lm-BoxPanel-child");
      msg.child.addClass("p-BoxPanel-child");
    };
    BoxPanel2.prototype.onChildRemoved = function(msg) {
      msg.child.removeClass("lm-BoxPanel-child");
      msg.child.removeClass("p-BoxPanel-child");
    };
    return BoxPanel2;
  }(Panel)
);
(function(BoxPanel2) {
  function getStretch(widget) {
    return BoxLayout.getStretch(widget);
  }
  BoxPanel2.getStretch = getStretch;
  function setStretch(widget, value) {
    BoxLayout.setStretch(widget, value);
  }
  BoxPanel2.setStretch = setStretch;
  function getSizeBasis(widget) {
    return BoxLayout.getSizeBasis(widget);
  }
  BoxPanel2.getSizeBasis = getSizeBasis;
  function setSizeBasis(widget, value) {
    BoxLayout.setSizeBasis(widget, value);
  }
  BoxPanel2.setSizeBasis = setSizeBasis;
})(BoxPanel || (BoxPanel = {}));
var Private$b;
(function(Private8) {
  function createLayout(options) {
    return options.layout || new BoxLayout(options);
  }
  Private8.createLayout = createLayout;
})(Private$b || (Private$b = {}));
var CommandPalette = (
  /** @class */
  function(_super) {
    __extends3(CommandPalette2, _super);
    function CommandPalette2(options) {
      var _this = _super.call(this, { node: Private$a.createNode() }) || this;
      _this._activeIndex = -1;
      _this._items = [];
      _this._results = null;
      _this.addClass("lm-CommandPalette");
      _this.addClass("p-CommandPalette");
      _this.setFlag(Widget.Flag.DisallowLayout);
      _this.commands = options.commands;
      _this.renderer = options.renderer || CommandPalette2.defaultRenderer;
      _this.commands.commandChanged.connect(_this._onGenericChange, _this);
      _this.commands.keyBindingChanged.connect(_this._onGenericChange, _this);
      return _this;
    }
    CommandPalette2.prototype.dispose = function() {
      this._items.length = 0;
      this._results = null;
      _super.prototype.dispose.call(this);
    };
    Object.defineProperty(CommandPalette2.prototype, "searchNode", {
      /**
       * The command palette search node.
       *
       * #### Notes
       * This is the node which contains the search-related elements.
       */
      get: function() {
        return this.node.getElementsByClassName("lm-CommandPalette-search")[0];
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(CommandPalette2.prototype, "inputNode", {
      /**
       * The command palette input node.
       *
       * #### Notes
       * This is the actual input node for the search area.
       */
      get: function() {
        return this.node.getElementsByClassName("lm-CommandPalette-input")[0];
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(CommandPalette2.prototype, "contentNode", {
      /**
       * The command palette content node.
       *
       * #### Notes
       * This is the node which holds the command item nodes.
       *
       * Modifying this node directly can lead to undefined behavior.
       */
      get: function() {
        return this.node.getElementsByClassName("lm-CommandPalette-content")[0];
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(CommandPalette2.prototype, "items", {
      /**
       * A read-only array of the command items in the palette.
       */
      get: function() {
        return this._items;
      },
      enumerable: true,
      configurable: true
    });
    CommandPalette2.prototype.addItem = function(options) {
      var item = Private$a.createItem(this.commands, options);
      this._items.push(item);
      this.refresh();
      return item;
    };
    CommandPalette2.prototype.addItems = function(items) {
      var _this = this;
      var newItems = items.map(function(item) {
        return Private$a.createItem(_this.commands, item);
      });
      newItems.forEach(function(item) {
        return _this._items.push(item);
      });
      this.refresh();
      return newItems;
    };
    CommandPalette2.prototype.removeItem = function(item) {
      this.removeItemAt(this._items.indexOf(item));
    };
    CommandPalette2.prototype.removeItemAt = function(index) {
      var item = ArrayExt.removeAt(this._items, index);
      if (!item) {
        return;
      }
      this.refresh();
    };
    CommandPalette2.prototype.clearItems = function() {
      if (this._items.length === 0) {
        return;
      }
      this._items.length = 0;
      this.refresh();
    };
    CommandPalette2.prototype.refresh = function() {
      this._results = null;
      if (this.inputNode.value !== "") {
        var clear = this.node.getElementsByClassName("lm-close-icon")[0];
        clear.style.display = "inherit";
      } else {
        var clear = this.node.getElementsByClassName("lm-close-icon")[0];
        clear.style.display = "none";
      }
      this.update();
    };
    CommandPalette2.prototype.handleEvent = function(event) {
      switch (event.type) {
        case "click":
          this._evtClick(event);
          break;
        case "keydown":
          this._evtKeyDown(event);
          break;
        case "input":
          this.refresh();
          break;
        case "focus":
        case "blur":
          this._toggleFocused();
          break;
      }
    };
    CommandPalette2.prototype.onBeforeAttach = function(msg) {
      this.node.addEventListener("click", this);
      this.node.addEventListener("keydown", this);
      this.node.addEventListener("input", this);
      this.node.addEventListener("focus", this, true);
      this.node.addEventListener("blur", this, true);
    };
    CommandPalette2.prototype.onAfterDetach = function(msg) {
      this.node.removeEventListener("click", this);
      this.node.removeEventListener("keydown", this);
      this.node.removeEventListener("input", this);
      this.node.removeEventListener("focus", this, true);
      this.node.removeEventListener("blur", this, true);
    };
    CommandPalette2.prototype.onActivateRequest = function(msg) {
      if (this.isAttached) {
        var input = this.inputNode;
        input.focus();
        input.select();
      }
    };
    CommandPalette2.prototype.onUpdateRequest = function(msg) {
      var query = this.inputNode.value;
      var contentNode = this.contentNode;
      var results = this._results;
      if (!results) {
        results = this._results = Private$a.search(this._items, query);
        this._activeIndex = query ? ArrayExt.findFirstIndex(results, Private$a.canActivate) : -1;
      }
      if (!query && results.length === 0) {
        VirtualDOM.render(null, contentNode);
        return;
      }
      if (query && results.length === 0) {
        var content_1 = this.renderer.renderEmptyMessage({ query });
        VirtualDOM.render(content_1, contentNode);
        return;
      }
      var renderer = this.renderer;
      var activeIndex = this._activeIndex;
      var content = new Array(results.length);
      for (var i = 0, n = results.length; i < n; ++i) {
        var result = results[i];
        if (result.type === "header") {
          var indices = result.indices;
          var category = result.category;
          content[i] = renderer.renderHeader({ category, indices });
        } else {
          var item = result.item;
          var indices = result.indices;
          var active = i === activeIndex;
          content[i] = renderer.renderItem({ item, indices, active });
        }
      }
      VirtualDOM.render(content, contentNode);
      if (activeIndex < 0 || activeIndex >= results.length) {
        contentNode.scrollTop = 0;
      } else {
        var element = contentNode.children[activeIndex];
        ElementExt.scrollIntoViewIfNeeded(contentNode, element);
      }
    };
    CommandPalette2.prototype._evtClick = function(event) {
      if (event.button !== 0) {
        return;
      }
      if (event.target.classList.contains("lm-close-icon")) {
        this.inputNode.value = "";
        this.refresh();
        return;
      }
      var index = ArrayExt.findFirstIndex(this.contentNode.children, function(node) {
        return node.contains(event.target);
      });
      if (index === -1) {
        return;
      }
      event.preventDefault();
      event.stopPropagation();
      this._execute(index);
    };
    CommandPalette2.prototype._evtKeyDown = function(event) {
      if (event.altKey || event.ctrlKey || event.metaKey || event.shiftKey) {
        return;
      }
      switch (event.keyCode) {
        case 13:
          event.preventDefault();
          event.stopPropagation();
          this._execute(this._activeIndex);
          break;
        case 38:
          event.preventDefault();
          event.stopPropagation();
          this._activatePreviousItem();
          break;
        case 40:
          event.preventDefault();
          event.stopPropagation();
          this._activateNextItem();
          break;
      }
    };
    CommandPalette2.prototype._activateNextItem = function() {
      if (!this._results || this._results.length === 0) {
        return;
      }
      var ai = this._activeIndex;
      var n = this._results.length;
      var start = ai < n - 1 ? ai + 1 : 0;
      var stop = start === 0 ? n - 1 : start - 1;
      this._activeIndex = ArrayExt.findFirstIndex(this._results, Private$a.canActivate, start, stop);
      this.update();
    };
    CommandPalette2.prototype._activatePreviousItem = function() {
      if (!this._results || this._results.length === 0) {
        return;
      }
      var ai = this._activeIndex;
      var n = this._results.length;
      var start = ai <= 0 ? n - 1 : ai - 1;
      var stop = start === n - 1 ? 0 : start + 1;
      this._activeIndex = ArrayExt.findLastIndex(this._results, Private$a.canActivate, start, stop);
      this.update();
    };
    CommandPalette2.prototype._execute = function(index) {
      if (!this._results) {
        return;
      }
      var part = this._results[index];
      if (!part) {
        return;
      }
      if (part.type === "header") {
        var input = this.inputNode;
        input.value = part.category.toLowerCase() + " ";
        input.focus();
        this.refresh();
        return;
      }
      if (!part.item.isEnabled) {
        return;
      }
      this.commands.execute(part.item.command, part.item.args);
      this.inputNode.value = "";
      this.refresh();
    };
    CommandPalette2.prototype._toggleFocused = function() {
      var focused = document.activeElement === this.inputNode;
      this.toggleClass("lm-mod-focused", focused);
      this.toggleClass("p-mod-focused", focused);
    };
    CommandPalette2.prototype._onGenericChange = function() {
      this.refresh();
    };
    return CommandPalette2;
  }(Widget)
);
(function(CommandPalette2) {
  var Renderer = (
    /** @class */
    function() {
      function Renderer2() {
      }
      Renderer2.prototype.renderHeader = function(data) {
        var content = this.formatHeader(data);
        return h.li({
          className: "lm-CommandPalette-header p-CommandPalette-header"
          /* </DEPRECATED> */
        }, content);
      };
      Renderer2.prototype.renderItem = function(data) {
        var className = this.createItemClass(data);
        var dataset = this.createItemDataset(data);
        if (data.item.isToggleable) {
          return h.li({
            className,
            dataset,
            role: "checkbox",
            "aria-checked": "" + data.item.isToggled
          }, this.renderItemIcon(data), this.renderItemContent(data), this.renderItemShortcut(data));
        }
        return h.li({
          className,
          dataset
        }, this.renderItemIcon(data), this.renderItemContent(data), this.renderItemShortcut(data));
      };
      Renderer2.prototype.renderEmptyMessage = function(data) {
        var content = this.formatEmptyMessage(data);
        return h.li({
          className: "lm-CommandPalette-emptyMessage p-CommandPalette-emptyMessage"
          /* </DEPRECATED> */
        }, content);
      };
      Renderer2.prototype.renderItemIcon = function(data) {
        var className = this.createIconClass(data);
        if (typeof data.item.icon === "string") {
          return h.div({ className }, data.item.iconLabel);
        }
        return h.div({ className }, data.item.icon, data.item.iconLabel);
      };
      Renderer2.prototype.renderItemContent = function(data) {
        return h.div({
          className: "lm-CommandPalette-itemContent p-CommandPalette-itemContent"
          /* </DEPRECATED> */
        }, this.renderItemLabel(data), this.renderItemCaption(data));
      };
      Renderer2.prototype.renderItemLabel = function(data) {
        var content = this.formatItemLabel(data);
        return h.div({
          className: "lm-CommandPalette-itemLabel p-CommandPalette-itemLabel"
          /* </DEPRECATED> */
        }, content);
      };
      Renderer2.prototype.renderItemCaption = function(data) {
        var content = this.formatItemCaption(data);
        return h.div({
          className: "lm-CommandPalette-itemCaption p-CommandPalette-itemCaption"
          /* </DEPRECATED> */
        }, content);
      };
      Renderer2.prototype.renderItemShortcut = function(data) {
        var content = this.formatItemShortcut(data);
        return h.div({
          className: "lm-CommandPalette-itemShortcut p-CommandPalette-itemShortcut"
          /* </DEPRECATED> */
        }, content);
      };
      Renderer2.prototype.createItemClass = function(data) {
        var name = "lm-CommandPalette-item";
        name += " p-CommandPalette-item";
        if (!data.item.isEnabled) {
          name += " lm-mod-disabled";
          name += " p-mod-disabled";
        }
        if (data.item.isToggled) {
          name += " lm-mod-toggled";
          name += " p-mod-toggled";
        }
        if (data.active) {
          name += " lm-mod-active";
          name += " p-mod-active";
        }
        var extra = data.item.className;
        if (extra) {
          name += " " + extra;
        }
        return name;
      };
      Renderer2.prototype.createItemDataset = function(data) {
        return __assign2(__assign2({}, data.item.dataset), { command: data.item.command });
      };
      Renderer2.prototype.createIconClass = function(data) {
        var name = "lm-CommandPalette-itemIcon";
        name += " p-CommandPalette-itemIcon";
        var extra = data.item.iconClass;
        return extra ? name + " " + extra : name;
      };
      Renderer2.prototype.formatHeader = function(data) {
        if (!data.indices || data.indices.length === 0) {
          return data.category;
        }
        return StringExt.highlight(data.category, data.indices, h.mark);
      };
      Renderer2.prototype.formatEmptyMessage = function(data) {
        return "No commands found that match '" + data.query + "'";
      };
      Renderer2.prototype.formatItemShortcut = function(data) {
        var kb = data.item.keyBinding;
        return kb ? CommandRegistry.formatKeystroke(kb.keys) : null;
      };
      Renderer2.prototype.formatItemLabel = function(data) {
        if (!data.indices || data.indices.length === 0) {
          return data.item.label;
        }
        return StringExt.highlight(data.item.label, data.indices, h.mark);
      };
      Renderer2.prototype.formatItemCaption = function(data) {
        return data.item.caption;
      };
      return Renderer2;
    }()
  );
  CommandPalette2.Renderer = Renderer;
  CommandPalette2.defaultRenderer = new Renderer();
})(CommandPalette || (CommandPalette = {}));
var Private$a;
(function(Private8) {
  function createNode() {
    var node = document.createElement("div");
    var search2 = document.createElement("div");
    var wrapper = document.createElement("div");
    var input = document.createElement("input");
    var content = document.createElement("ul");
    var clear = document.createElement("button");
    search2.className = "lm-CommandPalette-search";
    wrapper.className = "lm-CommandPalette-wrapper";
    input.className = "lm-CommandPalette-input";
    clear.className = "lm-close-icon";
    content.className = "lm-CommandPalette-content";
    search2.classList.add("p-CommandPalette-search");
    wrapper.classList.add("p-CommandPalette-wrapper");
    input.classList.add("p-CommandPalette-input");
    content.classList.add("p-CommandPalette-content");
    input.spellcheck = false;
    wrapper.appendChild(input);
    wrapper.appendChild(clear);
    search2.appendChild(wrapper);
    node.appendChild(search2);
    node.appendChild(content);
    return node;
  }
  Private8.createNode = createNode;
  function createItem(commands, options) {
    return new CommandItem(commands, options);
  }
  Private8.createItem = createItem;
  function search(items, query) {
    var scores = matchItems(items, query);
    scores.sort(scoreCmp);
    return createResults(scores);
  }
  Private8.search = search;
  function canActivate(result) {
    return result.type === "item" && result.item.isEnabled;
  }
  Private8.canActivate = canActivate;
  function normalizeCategory(category) {
    return category.trim().replace(/\s+/g, " ");
  }
  function normalizeQuery(text) {
    return text.replace(/\s+/g, "").toLowerCase();
  }
  function matchItems(items, query) {
    query = normalizeQuery(query);
    var scores = [];
    for (var i = 0, n = items.length; i < n; ++i) {
      var item = items[i];
      if (!item.isVisible) {
        continue;
      }
      if (!query) {
        scores.push({
          matchType: 3,
          categoryIndices: null,
          labelIndices: null,
          score: 0,
          item
        });
        continue;
      }
      var score = fuzzySearch(item, query);
      if (!score) {
        continue;
      }
      if (!item.isEnabled) {
        score.score += 1e3;
      }
      scores.push(score);
    }
    return scores;
  }
  function fuzzySearch(item, query) {
    var category = item.category.toLowerCase();
    var label = item.label.toLowerCase();
    var source = category + " " + label;
    var score = Infinity;
    var indices = null;
    var rgx = /\b\w/g;
    while (true) {
      var rgxMatch = rgx.exec(source);
      if (!rgxMatch) {
        break;
      }
      var match = StringExt.matchSumOfDeltas(source, query, rgxMatch.index);
      if (!match) {
        break;
      }
      if (match && match.score <= score) {
        score = match.score;
        indices = match.indices;
      }
    }
    if (!indices || score === Infinity) {
      return null;
    }
    var pivot = category.length + 1;
    var j = ArrayExt.lowerBound(indices, pivot, function(a, b) {
      return a - b;
    });
    var categoryIndices = indices.slice(0, j);
    var labelIndices = indices.slice(j);
    for (var i = 0, n = labelIndices.length; i < n; ++i) {
      labelIndices[i] -= pivot;
    }
    if (categoryIndices.length === 0) {
      return {
        matchType: 0,
        categoryIndices: null,
        labelIndices,
        score,
        item
      };
    }
    if (labelIndices.length === 0) {
      return {
        matchType: 1,
        categoryIndices,
        labelIndices: null,
        score,
        item
      };
    }
    return {
      matchType: 2,
      categoryIndices,
      labelIndices,
      score,
      item
    };
  }
  function scoreCmp(a, b) {
    var m1 = a.matchType - b.matchType;
    if (m1 !== 0) {
      return m1;
    }
    var d1 = a.score - b.score;
    if (d1 !== 0) {
      return d1;
    }
    var i1 = 0;
    var i2 = 0;
    switch (a.matchType) {
      case 0:
        i1 = a.labelIndices[0];
        i2 = b.labelIndices[0];
        break;
      case 1:
      case 2:
        i1 = a.categoryIndices[0];
        i2 = b.categoryIndices[0];
        break;
    }
    if (i1 !== i2) {
      return i1 - i2;
    }
    var d2 = a.item.category.localeCompare(b.item.category);
    if (d2 !== 0) {
      return d2;
    }
    var r1 = a.item.rank;
    var r2 = b.item.rank;
    if (r1 !== r2) {
      return r1 < r2 ? -1 : 1;
    }
    return a.item.label.localeCompare(b.item.label);
  }
  function createResults(scores) {
    var visited = new Array(scores.length);
    ArrayExt.fill(visited, false);
    var results = [];
    for (var i = 0, n = scores.length; i < n; ++i) {
      if (visited[i]) {
        continue;
      }
      var _a = scores[i], item = _a.item, categoryIndices = _a.categoryIndices;
      var category = item.category;
      results.push({ type: "header", category, indices: categoryIndices });
      for (var j = i; j < n; ++j) {
        if (visited[j]) {
          continue;
        }
        var _b = scores[j], item_1 = _b.item, labelIndices = _b.labelIndices;
        if (item_1.category !== category) {
          continue;
        }
        results.push({ type: "item", item: item_1, indices: labelIndices });
        visited[j] = true;
      }
    }
    return results;
  }
  var CommandItem = (
    /** @class */
    function() {
      function CommandItem2(commands, options) {
        this._commands = commands;
        this.category = normalizeCategory(options.category);
        this.command = options.command;
        this.args = options.args || import_coreutils2.JSONExt.emptyObject;
        this.rank = options.rank !== void 0 ? options.rank : Infinity;
      }
      Object.defineProperty(CommandItem2.prototype, "label", {
        /**
         * The display label for the command item.
         */
        get: function() {
          return this._commands.label(this.command, this.args);
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(CommandItem2.prototype, "icon", {
        /**
         * The icon renderer for the command item.
         */
        get: function() {
          return this._commands.icon(this.command, this.args);
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(CommandItem2.prototype, "iconClass", {
        /**
         * The icon class for the command item.
         */
        get: function() {
          return this._commands.iconClass(this.command, this.args);
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(CommandItem2.prototype, "iconLabel", {
        /**
         * The icon label for the command item.
         */
        get: function() {
          return this._commands.iconLabel(this.command, this.args);
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(CommandItem2.prototype, "caption", {
        /**
         * The display caption for the command item.
         */
        get: function() {
          return this._commands.caption(this.command, this.args);
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(CommandItem2.prototype, "className", {
        /**
         * The extra class name for the command item.
         */
        get: function() {
          return this._commands.className(this.command, this.args);
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(CommandItem2.prototype, "dataset", {
        /**
         * The dataset for the command item.
         */
        get: function() {
          return this._commands.dataset(this.command, this.args);
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(CommandItem2.prototype, "isEnabled", {
        /**
         * Whether the command item is enabled.
         */
        get: function() {
          return this._commands.isEnabled(this.command, this.args);
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(CommandItem2.prototype, "isToggled", {
        /**
         * Whether the command item is toggled.
         */
        get: function() {
          return this._commands.isToggled(this.command, this.args);
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(CommandItem2.prototype, "isToggleable", {
        /**
         * Whether the command item is toggleable.
         */
        get: function() {
          return this._commands.isToggleable(this.command, this.args);
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(CommandItem2.prototype, "isVisible", {
        /**
         * Whether the command item is visible.
         */
        get: function() {
          return this._commands.isVisible(this.command, this.args);
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(CommandItem2.prototype, "keyBinding", {
        /**
         * The key binding for the command item.
         */
        get: function() {
          var _a = this, command = _a.command, args = _a.args;
          return ArrayExt.findLastValue(this._commands.keyBindings, function(kb) {
            return kb.command === command && import_coreutils2.JSONExt.deepEqual(kb.args, args);
          }) || null;
        },
        enumerable: true,
        configurable: true
      });
      return CommandItem2;
    }()
  );
})(Private$a || (Private$a = {}));
var Menu = (
  /** @class */
  function(_super) {
    __extends3(Menu2, _super);
    function Menu2(options) {
      var _this = _super.call(this, { node: Private$9.createNode() }) || this;
      _this._childIndex = -1;
      _this._activeIndex = -1;
      _this._openTimerID = 0;
      _this._closeTimerID = 0;
      _this._items = [];
      _this._childMenu = null;
      _this._parentMenu = null;
      _this._aboutToClose = new Signal(_this);
      _this._menuRequested = new Signal(_this);
      _this.addClass("lm-Menu");
      _this.addClass("p-Menu");
      _this.setFlag(Widget.Flag.DisallowLayout);
      _this.commands = options.commands;
      _this.renderer = options.renderer || Menu2.defaultRenderer;
      return _this;
    }
    Menu2.prototype.dispose = function() {
      this.close();
      this._items.length = 0;
      _super.prototype.dispose.call(this);
    };
    Object.defineProperty(Menu2.prototype, "aboutToClose", {
      /**
       * A signal emitted just before the menu is closed.
       *
       * #### Notes
       * This signal is emitted when the menu receives a `'close-request'`
       * message, just before it removes itself from the DOM.
       *
       * This signal is not emitted if the menu is already detached from
       * the DOM when it receives the `'close-request'` message.
       */
      get: function() {
        return this._aboutToClose;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(Menu2.prototype, "menuRequested", {
      /**
       * A signal emitted when a new menu is requested by the user.
       *
       * #### Notes
       * This signal is emitted whenever the user presses the right or left
       * arrow keys, and a submenu cannot be opened or closed in response.
       *
       * This signal is useful when implementing menu bars in order to open
       * the next or previous menu in response to a user key press.
       *
       * This signal is only emitted for the root menu in a hierarchy.
       */
      get: function() {
        return this._menuRequested;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(Menu2.prototype, "parentMenu", {
      /**
       * The parent menu of the menu.
       *
       * #### Notes
       * This is `null` unless the menu is an open submenu.
       */
      get: function() {
        return this._parentMenu;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(Menu2.prototype, "childMenu", {
      /**
       * The child menu of the menu.
       *
       * #### Notes
       * This is `null` unless the menu has an open submenu.
       */
      get: function() {
        return this._childMenu;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(Menu2.prototype, "rootMenu", {
      /**
       * The root menu of the menu hierarchy.
       */
      get: function() {
        var menu = this;
        while (menu._parentMenu) {
          menu = menu._parentMenu;
        }
        return menu;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(Menu2.prototype, "leafMenu", {
      /**
       * The leaf menu of the menu hierarchy.
       */
      get: function() {
        var menu = this;
        while (menu._childMenu) {
          menu = menu._childMenu;
        }
        return menu;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(Menu2.prototype, "contentNode", {
      /**
       * The menu content node.
       *
       * #### Notes
       * This is the node which holds the menu item nodes.
       *
       * Modifying this node directly can lead to undefined behavior.
       */
      get: function() {
        return this.node.getElementsByClassName("lm-Menu-content")[0];
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(Menu2.prototype, "activeItem", {
      /**
       * Get the currently active menu item.
       */
      get: function() {
        return this._items[this._activeIndex] || null;
      },
      /**
       * Set the currently active menu item.
       *
       * #### Notes
       * If the item cannot be activated, the item will be set to `null`.
       */
      set: function(value) {
        this.activeIndex = value ? this._items.indexOf(value) : -1;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(Menu2.prototype, "activeIndex", {
      /**
       * Get the index of the currently active menu item.
       *
       * #### Notes
       * This will be `-1` if no menu item is active.
       */
      get: function() {
        return this._activeIndex;
      },
      /**
       * Set the index of the currently active menu item.
       *
       * #### Notes
       * If the item cannot be activated, the index will be set to `-1`.
       */
      set: function(value) {
        if (value < 0 || value >= this._items.length) {
          value = -1;
        }
        if (value !== -1 && !Private$9.canActivate(this._items[value])) {
          value = -1;
        }
        if (this._activeIndex === value) {
          return;
        }
        this._activeIndex = value;
        if (this._activeIndex >= 0 && this.contentNode.childNodes[this._activeIndex]) {
          this.contentNode.childNodes[this._activeIndex].focus();
        }
        this.update();
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(Menu2.prototype, "items", {
      /**
       * A read-only array of the menu items in the menu.
       */
      get: function() {
        return this._items;
      },
      enumerable: true,
      configurable: true
    });
    Menu2.prototype.activateNextItem = function() {
      var n = this._items.length;
      var ai = this._activeIndex;
      var start = ai < n - 1 ? ai + 1 : 0;
      var stop = start === 0 ? n - 1 : start - 1;
      this.activeIndex = ArrayExt.findFirstIndex(this._items, Private$9.canActivate, start, stop);
    };
    Menu2.prototype.activatePreviousItem = function() {
      var n = this._items.length;
      var ai = this._activeIndex;
      var start = ai <= 0 ? n - 1 : ai - 1;
      var stop = start === n - 1 ? 0 : start + 1;
      this.activeIndex = ArrayExt.findLastIndex(this._items, Private$9.canActivate, start, stop);
    };
    Menu2.prototype.triggerActiveItem = function() {
      if (!this.isAttached) {
        return;
      }
      var item = this.activeItem;
      if (!item) {
        return;
      }
      this._cancelOpenTimer();
      this._cancelCloseTimer();
      if (item.type === "submenu") {
        this._openChildMenu(true);
        return;
      }
      this.rootMenu.close();
      var command = item.command, args = item.args;
      if (this.commands.isEnabled(command, args)) {
        this.commands.execute(command, args);
      } else {
        console.log("Command '" + command + "' is disabled.");
      }
    };
    Menu2.prototype.addItem = function(options) {
      return this.insertItem(this._items.length, options);
    };
    Menu2.prototype.insertItem = function(index, options) {
      if (this.isAttached) {
        this.close();
      }
      this.activeIndex = -1;
      var i = Math.max(0, Math.min(index, this._items.length));
      var item = Private$9.createItem(this, options);
      ArrayExt.insert(this._items, i, item);
      this.update();
      return item;
    };
    Menu2.prototype.removeItem = function(item) {
      this.removeItemAt(this._items.indexOf(item));
    };
    Menu2.prototype.removeItemAt = function(index) {
      if (this.isAttached) {
        this.close();
      }
      this.activeIndex = -1;
      var item = ArrayExt.removeAt(this._items, index);
      if (!item) {
        return;
      }
      this.update();
    };
    Menu2.prototype.clearItems = function() {
      if (this.isAttached) {
        this.close();
      }
      this.activeIndex = -1;
      if (this._items.length === 0) {
        return;
      }
      this._items.length = 0;
      this.update();
    };
    Menu2.prototype.open = function(x, y, options) {
      if (options === void 0) {
        options = {};
      }
      if (this.isAttached) {
        return;
      }
      var forceX = options.forceX || false;
      var forceY = options.forceY || false;
      Private$9.openRootMenu(this, x, y, forceX, forceY);
      this.activate();
    };
    Menu2.prototype.handleEvent = function(event) {
      switch (event.type) {
        case "keydown":
          this._evtKeyDown(event);
          break;
        case "mouseup":
          this._evtMouseUp(event);
          break;
        case "mousemove":
          this._evtMouseMove(event);
          break;
        case "mouseenter":
          this._evtMouseEnter(event);
          break;
        case "mouseleave":
          this._evtMouseLeave(event);
          break;
        case "mousedown":
          this._evtMouseDown(event);
          break;
        case "contextmenu":
          event.preventDefault();
          event.stopPropagation();
          break;
      }
    };
    Menu2.prototype.onBeforeAttach = function(msg) {
      this.node.addEventListener("keydown", this);
      this.node.addEventListener("mouseup", this);
      this.node.addEventListener("mousemove", this);
      this.node.addEventListener("mouseenter", this);
      this.node.addEventListener("mouseleave", this);
      this.node.addEventListener("contextmenu", this);
      document.addEventListener("mousedown", this, true);
    };
    Menu2.prototype.onAfterDetach = function(msg) {
      this.node.removeEventListener("keydown", this);
      this.node.removeEventListener("mouseup", this);
      this.node.removeEventListener("mousemove", this);
      this.node.removeEventListener("mouseenter", this);
      this.node.removeEventListener("mouseleave", this);
      this.node.removeEventListener("contextmenu", this);
      document.removeEventListener("mousedown", this, true);
    };
    Menu2.prototype.onActivateRequest = function(msg) {
      if (this.isAttached) {
        this.node.focus();
      }
    };
    Menu2.prototype.onUpdateRequest = function(msg) {
      var _this = this;
      var items = this._items;
      var renderer = this.renderer;
      var activeIndex = this._activeIndex;
      var collapsedFlags = Private$9.computeCollapsed(items);
      var content = new Array(items.length);
      var _loop_1 = function(i2, n2) {
        var item = items[i2];
        var active = i2 === activeIndex;
        var collapsed = collapsedFlags[i2];
        content[i2] = renderer.renderItem({
          item,
          active,
          collapsed,
          onfocus: function() {
            _this.activeIndex = i2;
          }
        });
      };
      for (var i = 0, n = items.length; i < n; ++i) {
        _loop_1(i);
      }
      VirtualDOM.render(content, this.contentNode);
    };
    Menu2.prototype.onCloseRequest = function(msg) {
      this._cancelOpenTimer();
      this._cancelCloseTimer();
      this.activeIndex = -1;
      var childMenu = this._childMenu;
      if (childMenu) {
        this._childIndex = -1;
        this._childMenu = null;
        childMenu._parentMenu = null;
        childMenu.close();
      }
      var parentMenu = this._parentMenu;
      if (parentMenu) {
        this._parentMenu = null;
        parentMenu._childIndex = -1;
        parentMenu._childMenu = null;
        parentMenu.activate();
      }
      if (this.isAttached) {
        this._aboutToClose.emit(void 0);
      }
      _super.prototype.onCloseRequest.call(this, msg);
    };
    Menu2.prototype._evtKeyDown = function(event) {
      event.preventDefault();
      event.stopPropagation();
      var kc = event.keyCode;
      if (kc === 13) {
        this.triggerActiveItem();
        return;
      }
      if (kc === 27) {
        this.close();
        return;
      }
      if (kc === 37) {
        if (this._parentMenu) {
          this.close();
        } else {
          this._menuRequested.emit("previous");
        }
        return;
      }
      if (kc === 38) {
        this.activatePreviousItem();
        return;
      }
      if (kc === 39) {
        var item = this.activeItem;
        if (item && item.type === "submenu") {
          this.triggerActiveItem();
        } else {
          this.rootMenu._menuRequested.emit("next");
        }
        return;
      }
      if (kc === 40) {
        this.activateNextItem();
        return;
      }
      var key = getKeyboardLayout().keyForKeydownEvent(event);
      if (!key) {
        return;
      }
      var start = this._activeIndex + 1;
      var result = Private$9.findMnemonic(this._items, key, start);
      if (result.index !== -1 && !result.multiple) {
        this.activeIndex = result.index;
        this.triggerActiveItem();
      } else if (result.index !== -1) {
        this.activeIndex = result.index;
      } else if (result.auto !== -1) {
        this.activeIndex = result.auto;
      }
    };
    Menu2.prototype._evtMouseUp = function(event) {
      if (event.button !== 0) {
        return;
      }
      event.preventDefault();
      event.stopPropagation();
      this.triggerActiveItem();
    };
    Menu2.prototype._evtMouseMove = function(event) {
      var index = ArrayExt.findFirstIndex(this.contentNode.children, function(node) {
        return ElementExt.hitTest(node, event.clientX, event.clientY);
      });
      if (index === this._activeIndex) {
        return;
      }
      this.activeIndex = index;
      index = this.activeIndex;
      if (index === this._childIndex) {
        this._cancelOpenTimer();
        this._cancelCloseTimer();
        return;
      }
      if (this._childIndex !== -1) {
        this._startCloseTimer();
      }
      this._cancelOpenTimer();
      var item = this.activeItem;
      if (!item || item.type !== "submenu" || !item.submenu) {
        return;
      }
      this._startOpenTimer();
    };
    Menu2.prototype._evtMouseEnter = function(event) {
      for (var menu = this._parentMenu; menu; menu = menu._parentMenu) {
        menu._cancelOpenTimer();
        menu._cancelCloseTimer();
        menu.activeIndex = menu._childIndex;
      }
    };
    Menu2.prototype._evtMouseLeave = function(event) {
      this._cancelOpenTimer();
      if (!this._childMenu) {
        this.activeIndex = -1;
        return;
      }
      var clientX = event.clientX, clientY = event.clientY;
      if (ElementExt.hitTest(this._childMenu.node, clientX, clientY)) {
        this._cancelCloseTimer();
        return;
      }
      this.activeIndex = -1;
      this._startCloseTimer();
    };
    Menu2.prototype._evtMouseDown = function(event) {
      if (this._parentMenu) {
        return;
      }
      if (Private$9.hitTestMenus(this, event.clientX, event.clientY)) {
        event.preventDefault();
        event.stopPropagation();
      } else {
        this.close();
      }
    };
    Menu2.prototype._openChildMenu = function(activateFirst) {
      if (activateFirst === void 0) {
        activateFirst = false;
      }
      var item = this.activeItem;
      if (!item || item.type !== "submenu" || !item.submenu) {
        this._closeChildMenu();
        return;
      }
      var submenu = item.submenu;
      if (submenu === this._childMenu) {
        return;
      }
      Menu2.saveWindowData();
      this._closeChildMenu();
      this._childMenu = submenu;
      this._childIndex = this._activeIndex;
      submenu._parentMenu = this;
      MessageLoop.sendMessage(this, Widget.Msg.UpdateRequest);
      var itemNode = this.contentNode.children[this._activeIndex];
      Private$9.openSubmenu(submenu, itemNode);
      if (activateFirst) {
        submenu.activeIndex = -1;
        submenu.activateNextItem();
      }
      submenu.activate();
    };
    Menu2.prototype._closeChildMenu = function() {
      if (this._childMenu) {
        this._childMenu.close();
      }
    };
    Menu2.prototype._startOpenTimer = function() {
      var _this = this;
      if (this._openTimerID === 0) {
        this._openTimerID = window.setTimeout(function() {
          _this._openTimerID = 0;
          _this._openChildMenu();
        }, Private$9.TIMER_DELAY);
      }
    };
    Menu2.prototype._startCloseTimer = function() {
      var _this = this;
      if (this._closeTimerID === 0) {
        this._closeTimerID = window.setTimeout(function() {
          _this._closeTimerID = 0;
          _this._closeChildMenu();
        }, Private$9.TIMER_DELAY);
      }
    };
    Menu2.prototype._cancelOpenTimer = function() {
      if (this._openTimerID !== 0) {
        clearTimeout(this._openTimerID);
        this._openTimerID = 0;
      }
    };
    Menu2.prototype._cancelCloseTimer = function() {
      if (this._closeTimerID !== 0) {
        clearTimeout(this._closeTimerID);
        this._closeTimerID = 0;
      }
    };
    Menu2.saveWindowData = function() {
      Private$9.saveWindowData();
    };
    return Menu2;
  }(Widget)
);
(function(Menu2) {
  var Renderer = (
    /** @class */
    function() {
      function Renderer2() {
      }
      Renderer2.prototype.renderItem = function(data) {
        var className = this.createItemClass(data);
        var dataset = this.createItemDataset(data);
        var aria = this.createItemARIA(data);
        return h.li(__assign2({
          className,
          dataset,
          tabindex: "0",
          onfocus: data.onfocus
        }, aria), this.renderIcon(data), this.renderLabel(data), this.renderShortcut(data), this.renderSubmenu(data));
      };
      Renderer2.prototype.renderIcon = function(data) {
        var className = this.createIconClass(data);
        if (typeof data.item.icon === "string") {
          return h.div({ className }, data.item.iconLabel);
        }
        return h.div({ className }, data.item.icon, data.item.iconLabel);
      };
      Renderer2.prototype.renderLabel = function(data) {
        var content = this.formatLabel(data);
        return h.div({
          className: "lm-Menu-itemLabel p-Menu-itemLabel"
          /* </DEPRECATED> */
        }, content);
      };
      Renderer2.prototype.renderShortcut = function(data) {
        var content = this.formatShortcut(data);
        return h.div({
          className: "lm-Menu-itemShortcut p-Menu-itemShortcut"
          /* </DEPRECATED> */
        }, content);
      };
      Renderer2.prototype.renderSubmenu = function(data) {
        return h.div({
          className: "lm-Menu-itemSubmenuIcon p-Menu-itemSubmenuIcon"
          /* </DEPRECATED> */
        });
      };
      Renderer2.prototype.createItemClass = function(data) {
        var name = "lm-Menu-item";
        name += " p-Menu-item";
        if (!data.item.isEnabled) {
          name += " lm-mod-disabled";
          name += " p-mod-disabled";
        }
        if (data.item.isToggled) {
          name += " lm-mod-toggled";
          name += " p-mod-toggled";
        }
        if (!data.item.isVisible) {
          name += " lm-mod-hidden";
          name += " p-mod-hidden";
        }
        if (data.active) {
          name += " lm-mod-active";
          name += " p-mod-active";
        }
        if (data.collapsed) {
          name += " lm-mod-collapsed";
          name += " p-mod-collapsed";
        }
        var extra = data.item.className;
        if (extra) {
          name += " " + extra;
        }
        return name;
      };
      Renderer2.prototype.createItemDataset = function(data) {
        var result;
        var _a = data.item, type = _a.type, command = _a.command, dataset = _a.dataset;
        if (type === "command") {
          result = __assign2(__assign2({}, dataset), { type, command });
        } else {
          result = __assign2(__assign2({}, dataset), { type });
        }
        return result;
      };
      Renderer2.prototype.createIconClass = function(data) {
        var name = "lm-Menu-itemIcon";
        name += " p-Menu-itemIcon";
        var extra = data.item.iconClass;
        return extra ? name + " " + extra : name;
      };
      Renderer2.prototype.createItemARIA = function(data) {
        var aria = {};
        switch (data.item.type) {
          case "separator":
            aria.role = "presentation";
            break;
          case "submenu":
            aria["aria-haspopup"] = "true";
            if (!data.item.isEnabled) {
              aria["aria-disabled"] = "true";
            }
            break;
          default:
            if (!data.item.isEnabled) {
              aria["aria-disabled"] = "true";
            }
            aria.role = "menuitem";
        }
        return aria;
      };
      Renderer2.prototype.formatLabel = function(data) {
        var _a = data.item, label = _a.label, mnemonic = _a.mnemonic;
        if (mnemonic < 0 || mnemonic >= label.length) {
          return label;
        }
        var prefix = label.slice(0, mnemonic);
        var suffix = label.slice(mnemonic + 1);
        var char = label[mnemonic];
        var span = h.span({
          className: "lm-Menu-itemMnemonic p-Menu-itemMnemonic"
          /* </DEPRECATED> */
        }, char);
        return [prefix, span, suffix];
      };
      Renderer2.prototype.formatShortcut = function(data) {
        var kb = data.item.keyBinding;
        return kb ? CommandRegistry.formatKeystroke(kb.keys) : null;
      };
      return Renderer2;
    }()
  );
  Menu2.Renderer = Renderer;
  Menu2.defaultRenderer = new Renderer();
})(Menu || (Menu = {}));
var Private$9;
(function(Private8) {
  Private8.TIMER_DELAY = 300;
  Private8.SUBMENU_OVERLAP = 3;
  var transientWindowDataCache = null;
  var transientCacheCounter = 0;
  function getWindowData() {
    if (transientCacheCounter > 0) {
      transientCacheCounter--;
      return transientWindowDataCache;
    }
    return _getWindowData();
  }
  function saveWindowData() {
    transientWindowDataCache = _getWindowData();
    transientCacheCounter++;
  }
  Private8.saveWindowData = saveWindowData;
  function createNode() {
    var node = document.createElement("div");
    var content = document.createElement("ul");
    content.className = "lm-Menu-content";
    content.classList.add("p-Menu-content");
    node.appendChild(content);
    content.setAttribute("role", "menu");
    node.tabIndex = 0;
    return node;
  }
  Private8.createNode = createNode;
  function canActivate(item) {
    return item.type !== "separator" && item.isEnabled && item.isVisible;
  }
  Private8.canActivate = canActivate;
  function createItem(owner, options) {
    return new MenuItem(owner.commands, options);
  }
  Private8.createItem = createItem;
  function hitTestMenus(menu, x, y) {
    for (var temp = menu; temp; temp = temp.childMenu) {
      if (ElementExt.hitTest(temp.node, x, y)) {
        return true;
      }
    }
    return false;
  }
  Private8.hitTestMenus = hitTestMenus;
  function computeCollapsed(items) {
    var result = new Array(items.length);
    ArrayExt.fill(result, false);
    var k1 = 0;
    var n = items.length;
    for (; k1 < n; ++k1) {
      var item = items[k1];
      if (!item.isVisible) {
        continue;
      }
      if (item.type !== "separator") {
        break;
      }
      result[k1] = true;
    }
    var k2 = n - 1;
    for (; k2 >= 0; --k2) {
      var item = items[k2];
      if (!item.isVisible) {
        continue;
      }
      if (item.type !== "separator") {
        break;
      }
      result[k2] = true;
    }
    var hide = false;
    while (++k1 < k2) {
      var item = items[k1];
      if (!item.isVisible) {
        continue;
      }
      if (item.type !== "separator") {
        hide = false;
      } else if (hide) {
        result[k1] = true;
      } else {
        hide = true;
      }
    }
    return result;
  }
  Private8.computeCollapsed = computeCollapsed;
  function _getWindowData() {
    return {
      pageXOffset: window.pageXOffset,
      pageYOffset: window.pageYOffset,
      clientWidth: document.documentElement.clientWidth,
      clientHeight: document.documentElement.clientHeight
    };
  }
  function openRootMenu(menu, x, y, forceX, forceY) {
    var windowData = getWindowData();
    var px = windowData.pageXOffset;
    var py = windowData.pageYOffset;
    var cw = windowData.clientWidth;
    var ch = windowData.clientHeight;
    MessageLoop.sendMessage(menu, Widget.Msg.UpdateRequest);
    var maxHeight = ch - (forceY ? y : 0);
    var node = menu.node;
    var style = node.style;
    style.opacity = "0";
    style.maxHeight = maxHeight + "px";
    Widget.attach(menu, document.body);
    var _a = node.getBoundingClientRect(), width = _a.width, height = _a.height;
    if (!forceX && x + width > px + cw) {
      x = px + cw - width;
    }
    if (!forceY && y + height > py + ch) {
      if (y > py + ch) {
        y = py + ch - height;
      } else {
        y = y - height;
      }
    }
    style.transform = "translate(" + Math.max(0, x) + "px, " + Math.max(0, y) + "px";
    style.opacity = "1";
  }
  Private8.openRootMenu = openRootMenu;
  function openSubmenu(submenu, itemNode) {
    var windowData = getWindowData();
    var px = windowData.pageXOffset;
    var py = windowData.pageYOffset;
    var cw = windowData.clientWidth;
    var ch = windowData.clientHeight;
    MessageLoop.sendMessage(submenu, Widget.Msg.UpdateRequest);
    var maxHeight = ch;
    var node = submenu.node;
    var style = node.style;
    style.opacity = "0";
    style.maxHeight = maxHeight + "px";
    Widget.attach(submenu, document.body);
    var _a = node.getBoundingClientRect(), width = _a.width, height = _a.height;
    var box = ElementExt.boxSizing(submenu.node);
    var itemRect = itemNode.getBoundingClientRect();
    var x = itemRect.right - Private8.SUBMENU_OVERLAP;
    if (x + width > px + cw) {
      x = itemRect.left + Private8.SUBMENU_OVERLAP - width;
    }
    var y = itemRect.top - box.borderTop - box.paddingTop;
    if (y + height > py + ch) {
      y = itemRect.bottom + box.borderBottom + box.paddingBottom - height;
    }
    style.transform = "translate(" + Math.max(0, x) + "px, " + Math.max(0, y) + "px";
    style.opacity = "1";
  }
  Private8.openSubmenu = openSubmenu;
  function findMnemonic(items, key, start) {
    var index = -1;
    var auto = -1;
    var multiple = false;
    var upperKey = key.toUpperCase();
    for (var i = 0, n = items.length; i < n; ++i) {
      var k = (i + start) % n;
      var item = items[k];
      if (!canActivate(item)) {
        continue;
      }
      var label = item.label;
      if (label.length === 0) {
        continue;
      }
      var mn = item.mnemonic;
      if (mn >= 0 && mn < label.length) {
        if (label[mn].toUpperCase() === upperKey) {
          if (index === -1) {
            index = k;
          } else {
            multiple = true;
          }
        }
        continue;
      }
      if (auto === -1 && label[0].toUpperCase() === upperKey) {
        auto = k;
      }
    }
    return { index, multiple, auto };
  }
  Private8.findMnemonic = findMnemonic;
  var MenuItem = (
    /** @class */
    function() {
      function MenuItem2(commands, options) {
        this._commands = commands;
        this.type = options.type || "command";
        this.command = options.command || "";
        this.args = options.args || import_coreutils2.JSONExt.emptyObject;
        this.submenu = options.submenu || null;
      }
      Object.defineProperty(MenuItem2.prototype, "label", {
        /**
         * The display label for the menu item.
         */
        get: function() {
          if (this.type === "command") {
            return this._commands.label(this.command, this.args);
          }
          if (this.type === "submenu" && this.submenu) {
            return this.submenu.title.label;
          }
          return "";
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(MenuItem2.prototype, "mnemonic", {
        /**
         * The mnemonic index for the menu item.
         */
        get: function() {
          if (this.type === "command") {
            return this._commands.mnemonic(this.command, this.args);
          }
          if (this.type === "submenu" && this.submenu) {
            return this.submenu.title.mnemonic;
          }
          return -1;
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(MenuItem2.prototype, "icon", {
        /**
         * The icon renderer for the menu item.
         */
        get: function() {
          if (this.type === "command") {
            return this._commands.icon(this.command, this.args);
          }
          if (this.type === "submenu" && this.submenu) {
            return this.submenu.title.icon;
          }
          return this.iconClass;
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(MenuItem2.prototype, "iconClass", {
        /**
         * The icon class for the menu item.
         */
        get: function() {
          if (this.type === "command") {
            return this._commands.iconClass(this.command, this.args);
          }
          if (this.type === "submenu" && this.submenu) {
            return this.submenu.title.iconClass;
          }
          return "";
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(MenuItem2.prototype, "iconLabel", {
        /**
         * The icon label for the menu item.
         */
        get: function() {
          if (this.type === "command") {
            return this._commands.iconLabel(this.command, this.args);
          }
          if (this.type === "submenu" && this.submenu) {
            return this.submenu.title.iconLabel;
          }
          return "";
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(MenuItem2.prototype, "caption", {
        /**
         * The display caption for the menu item.
         */
        get: function() {
          if (this.type === "command") {
            return this._commands.caption(this.command, this.args);
          }
          if (this.type === "submenu" && this.submenu) {
            return this.submenu.title.caption;
          }
          return "";
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(MenuItem2.prototype, "className", {
        /**
         * The extra class name for the menu item.
         */
        get: function() {
          if (this.type === "command") {
            return this._commands.className(this.command, this.args);
          }
          if (this.type === "submenu" && this.submenu) {
            return this.submenu.title.className;
          }
          return "";
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(MenuItem2.prototype, "dataset", {
        /**
         * The dataset for the menu item.
         */
        get: function() {
          if (this.type === "command") {
            return this._commands.dataset(this.command, this.args);
          }
          if (this.type === "submenu" && this.submenu) {
            return this.submenu.title.dataset;
          }
          return {};
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(MenuItem2.prototype, "isEnabled", {
        /**
         * Whether the menu item is enabled.
         */
        get: function() {
          if (this.type === "command") {
            return this._commands.isEnabled(this.command, this.args);
          }
          if (this.type === "submenu") {
            return this.submenu !== null;
          }
          return true;
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(MenuItem2.prototype, "isToggled", {
        /**
         * Whether the menu item is toggled.
         */
        get: function() {
          if (this.type === "command") {
            return this._commands.isToggled(this.command, this.args);
          }
          return false;
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(MenuItem2.prototype, "isVisible", {
        /**
         * Whether the menu item is visible.
         */
        get: function() {
          if (this.type === "command") {
            return this._commands.isVisible(this.command, this.args);
          }
          if (this.type === "submenu") {
            return this.submenu !== null;
          }
          return true;
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(MenuItem2.prototype, "keyBinding", {
        /**
         * The key binding for the menu item.
         */
        get: function() {
          if (this.type === "command") {
            var _a = this, command_1 = _a.command, args_1 = _a.args;
            return ArrayExt.findLastValue(this._commands.keyBindings, function(kb) {
              return kb.command === command_1 && import_coreutils2.JSONExt.deepEqual(kb.args, args_1);
            }) || null;
          }
          return null;
        },
        enumerable: true,
        configurable: true
      });
      return MenuItem2;
    }()
  );
})(Private$9 || (Private$9 = {}));
var ContextMenu = (
  /** @class */
  function() {
    function ContextMenu2(options) {
      this._groupByTarget = true;
      this._idTick = 0;
      this._items = [];
      this._sortBySelector = true;
      var groupByTarget = options.groupByTarget, sortBySelector = options.sortBySelector, others = __rest(options, ["groupByTarget", "sortBySelector"]);
      this.menu = new Menu(others);
      this._groupByTarget = groupByTarget !== false;
      this._sortBySelector = sortBySelector !== false;
    }
    ContextMenu2.prototype.addItem = function(options) {
      var _this = this;
      var item = Private$8.createItem(options, this._idTick++);
      this._items.push(item);
      return new DisposableDelegate(function() {
        ArrayExt.removeFirstOf(_this._items, item);
      });
    };
    ContextMenu2.prototype.open = function(event) {
      var _this = this;
      Menu.saveWindowData();
      this.menu.clearItems();
      if (this._items.length === 0) {
        return false;
      }
      var items = Private$8.matchItems(this._items, event, this._groupByTarget, this._sortBySelector);
      if (!items || items.length === 0) {
        return false;
      }
      each(items, function(item) {
        _this.menu.addItem(item);
      });
      this.menu.open(event.clientX, event.clientY);
      return true;
    };
    return ContextMenu2;
  }()
);
var Private$8;
(function(Private8) {
  function createItem(options, id) {
    var selector = validateSelector(options.selector);
    var rank = options.rank !== void 0 ? options.rank : Infinity;
    return __assign2(__assign2({}, options), { selector, rank, id });
  }
  Private8.createItem = createItem;
  function matchItems(items, event, groupByTarget, sortBySelector) {
    var target = event.target;
    if (!target) {
      return null;
    }
    var currentTarget = event.currentTarget;
    if (!currentTarget) {
      return null;
    }
    if (!currentTarget.contains(target)) {
      target = document.elementFromPoint(event.clientX, event.clientY);
      if (!target || !currentTarget.contains(target)) {
        return null;
      }
    }
    var result = [];
    var availableItems = items.slice();
    while (target !== null) {
      var matches = [];
      for (var i = 0, n = availableItems.length; i < n; ++i) {
        var item = availableItems[i];
        if (!item) {
          continue;
        }
        if (!Selector.matches(target, item.selector)) {
          continue;
        }
        matches.push(item);
        availableItems[i] = null;
      }
      if (matches.length !== 0) {
        if (groupByTarget) {
          matches.sort(sortBySelector ? itemCmp : itemCmpRank);
        }
        result.push.apply(result, matches);
      }
      if (target === currentTarget) {
        break;
      }
      target = target.parentElement;
    }
    if (!groupByTarget) {
      result.sort(sortBySelector ? itemCmp : itemCmpRank);
    }
    return result;
  }
  Private8.matchItems = matchItems;
  function validateSelector(selector) {
    if (selector.indexOf(",") !== -1) {
      throw new Error("Selector cannot contain commas: " + selector);
    }
    if (!Selector.isValid(selector)) {
      throw new Error("Invalid selector: " + selector);
    }
    return selector;
  }
  function itemCmpRank(a, b) {
    var r1 = a.rank;
    var r2 = b.rank;
    if (r1 !== r2) {
      return r1 < r2 ? -1 : 1;
    }
    return a.id - b.id;
  }
  function itemCmp(a, b) {
    var s1 = Selector.calculateSpecificity(a.selector);
    var s2 = Selector.calculateSpecificity(b.selector);
    if (s1 !== s2) {
      return s2 - s1;
    }
    return itemCmpRank(a, b);
  }
})(Private$8 || (Private$8 = {}));
var TabBar = (
  /** @class */
  function(_super) {
    __extends3(TabBar2, _super);
    function TabBar2(options) {
      if (options === void 0) {
        options = {};
      }
      var _this = _super.call(this, { node: Private$7.createNode() }) || this;
      _this._currentIndex = -1;
      _this._titles = [];
      _this._titlesEditable = false;
      _this._previousTitle = null;
      _this._dragData = null;
      _this._addButtonEnabled = false;
      _this._tabMoved = new Signal(_this);
      _this._currentChanged = new Signal(_this);
      _this._addRequested = new Signal(_this);
      _this._tabCloseRequested = new Signal(_this);
      _this._tabDetachRequested = new Signal(_this);
      _this._tabActivateRequested = new Signal(_this);
      _this.addClass("lm-TabBar");
      _this.addClass("p-TabBar");
      _this.contentNode.setAttribute("role", "tablist");
      _this.setFlag(Widget.Flag.DisallowLayout);
      _this._document = options.document || document;
      _this.tabsMovable = options.tabsMovable || false;
      _this.titlesEditable = options.titlesEditable || false;
      _this.allowDeselect = options.allowDeselect || false;
      _this.addButtonEnabled = options.addButtonEnabled || false;
      _this.insertBehavior = options.insertBehavior || "select-tab-if-needed";
      _this.name = options.name || "";
      _this.orientation = options.orientation || "horizontal";
      _this.removeBehavior = options.removeBehavior || "select-tab-after";
      _this.renderer = options.renderer || TabBar2.defaultRenderer;
      return _this;
    }
    TabBar2.prototype.dispose = function() {
      this._releaseMouse();
      this._titles.length = 0;
      this._previousTitle = null;
      _super.prototype.dispose.call(this);
    };
    Object.defineProperty(TabBar2.prototype, "currentChanged", {
      /**
       * A signal emitted when the current tab is changed.
       *
       * #### Notes
       * This signal is emitted when the currently selected tab is changed
       * either through user or programmatic interaction.
       *
       * Notably, this signal is not emitted when the index of the current
       * tab changes due to tabs being inserted, removed, or moved. It is
       * only emitted when the actual current tab node is changed.
       */
      get: function() {
        return this._currentChanged;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(TabBar2.prototype, "tabMoved", {
      /**
       * A signal emitted when a tab is moved by the user.
       *
       * #### Notes
       * This signal is emitted when a tab is moved by user interaction.
       *
       * This signal is not emitted when a tab is moved programmatically.
       */
      get: function() {
        return this._tabMoved;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(TabBar2.prototype, "tabActivateRequested", {
      /**
       * A signal emitted when a tab is clicked by the user.
       *
       * #### Notes
       * If the clicked tab is not the current tab, the clicked tab will be
       * made current and the `currentChanged` signal will be emitted first.
       *
       * This signal is emitted even if the clicked tab is the current tab.
       */
      get: function() {
        return this._tabActivateRequested;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(TabBar2.prototype, "addRequested", {
      /**
       * A signal emitted when the tab bar add button is clicked.
       */
      get: function() {
        return this._addRequested;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(TabBar2.prototype, "tabCloseRequested", {
      /**
       * A signal emitted when a tab close icon is clicked.
       *
       * #### Notes
       * This signal is not emitted unless the tab title is `closable`.
       */
      get: function() {
        return this._tabCloseRequested;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(TabBar2.prototype, "tabDetachRequested", {
      /**
       * A signal emitted when a tab is dragged beyond the detach threshold.
       *
       * #### Notes
       * This signal is emitted when the user drags a tab with the mouse,
       * and mouse is dragged beyond the detach threshold.
       *
       * The consumer of the signal should call `releaseMouse` and remove
       * the tab in order to complete the detach.
       *
       * This signal is only emitted once per drag cycle.
       */
      get: function() {
        return this._tabDetachRequested;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(TabBar2.prototype, "document", {
      /**
       * The document to use with the tab bar.
       *
       * The default is the global `document` instance.
       */
      get: function() {
        return this._document;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(TabBar2.prototype, "titlesEditable", {
      /**
       * Whether the titles can be user-edited.
       *
       */
      get: function() {
        return this._titlesEditable;
      },
      /**
       * Set whether titles can be user edited.
       *
       */
      set: function(value) {
        this._titlesEditable = value;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(TabBar2.prototype, "currentTitle", {
      /**
       * Get the currently selected title.
       *
       * #### Notes
       * This will be `null` if no tab is selected.
       */
      get: function() {
        return this._titles[this._currentIndex] || null;
      },
      /**
       * Set the currently selected title.
       *
       * #### Notes
       * If the title does not exist, the title will be set to `null`.
       */
      set: function(value) {
        this.currentIndex = value ? this._titles.indexOf(value) : -1;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(TabBar2.prototype, "currentIndex", {
      /**
       * Get the index of the currently selected tab.
       *
       * #### Notes
       * This will be `-1` if no tab is selected.
       */
      get: function() {
        return this._currentIndex;
      },
      /**
       * Set the index of the currently selected tab.
       *
       * #### Notes
       * If the value is out of range, the index will be set to `-1`.
       */
      set: function(value) {
        if (value < 0 || value >= this._titles.length) {
          value = -1;
        }
        if (this._currentIndex === value) {
          return;
        }
        var pi = this._currentIndex;
        var pt = this._titles[pi] || null;
        var ci = value;
        var ct = this._titles[ci] || null;
        this._currentIndex = ci;
        this._previousTitle = pt;
        this.update();
        this._currentChanged.emit({
          previousIndex: pi,
          previousTitle: pt,
          currentIndex: ci,
          currentTitle: ct
        });
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(TabBar2.prototype, "name", {
      /**
       * Get the name of the tab bar.
       */
      get: function() {
        return this._name;
      },
      /**
       * Set the name of the tab bar.
       */
      set: function(value) {
        this._name = value;
        if (value) {
          this.contentNode.setAttribute("aria-label", value);
        } else {
          this.contentNode.removeAttribute("aria-label");
        }
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(TabBar2.prototype, "orientation", {
      /**
       * Get the orientation of the tab bar.
       *
       * #### Notes
       * This controls whether the tabs are arranged in a row or column.
       */
      get: function() {
        return this._orientation;
      },
      /**
       * Set the orientation of the tab bar.
       *
       * #### Notes
       * This controls whether the tabs are arranged in a row or column.
       */
      set: function(value) {
        if (this._orientation === value) {
          return;
        }
        this._releaseMouse();
        this._orientation = value;
        this.dataset["orientation"] = value;
        this.contentNode.setAttribute("aria-orientation", value);
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(TabBar2.prototype, "addButtonEnabled", {
      /**
       * Whether the add button is enabled.
       */
      get: function() {
        return this._addButtonEnabled;
      },
      /**
       * Set whether the add button is enabled.
       */
      set: function(value) {
        if (this._addButtonEnabled === value) {
          return;
        }
        this._addButtonEnabled = value;
        if (value) {
          this.addButtonNode.classList.remove("lm-mod-hidden");
        } else {
          this.addButtonNode.classList.add("lm-mod-hidden");
        }
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(TabBar2.prototype, "titles", {
      /**
       * A read-only array of the titles in the tab bar.
       */
      get: function() {
        return this._titles;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(TabBar2.prototype, "contentNode", {
      /**
       * The tab bar content node.
       *
       * #### Notes
       * This is the node which holds the tab nodes.
       *
       * Modifying this node directly can lead to undefined behavior.
       */
      get: function() {
        return this.node.getElementsByClassName("lm-TabBar-content")[0];
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(TabBar2.prototype, "addButtonNode", {
      /**
       * The tab bar add button node.
       *
       * #### Notes
       * This is the node which holds the add button.
       *
       * Modifying this node directly can lead to undefined behavior.
       */
      get: function() {
        return this.node.getElementsByClassName("lm-TabBar-addButton")[0];
      },
      enumerable: true,
      configurable: true
    });
    TabBar2.prototype.addTab = function(value) {
      return this.insertTab(this._titles.length, value);
    };
    TabBar2.prototype.insertTab = function(index, value) {
      this._releaseMouse();
      var title = Private$7.asTitle(value);
      var i = this._titles.indexOf(title);
      var j = Math.max(0, Math.min(index, this._titles.length));
      if (i === -1) {
        ArrayExt.insert(this._titles, j, title);
        title.changed.connect(this._onTitleChanged, this);
        this.update();
        this._adjustCurrentForInsert(j, title);
        return title;
      }
      if (j === this._titles.length) {
        j--;
      }
      if (i === j) {
        return title;
      }
      ArrayExt.move(this._titles, i, j);
      this.update();
      this._adjustCurrentForMove(i, j);
      return title;
    };
    TabBar2.prototype.removeTab = function(title) {
      this.removeTabAt(this._titles.indexOf(title));
    };
    TabBar2.prototype.removeTabAt = function(index) {
      this._releaseMouse();
      var title = ArrayExt.removeAt(this._titles, index);
      if (!title) {
        return;
      }
      title.changed.disconnect(this._onTitleChanged, this);
      if (title === this._previousTitle) {
        this._previousTitle = null;
      }
      this.update();
      this._adjustCurrentForRemove(index, title);
    };
    TabBar2.prototype.clearTabs = function() {
      if (this._titles.length === 0) {
        return;
      }
      this._releaseMouse();
      for (var _i = 0, _a = this._titles; _i < _a.length; _i++) {
        var title = _a[_i];
        title.changed.disconnect(this._onTitleChanged, this);
      }
      var pi = this.currentIndex;
      var pt = this.currentTitle;
      this._currentIndex = -1;
      this._previousTitle = null;
      this._titles.length = 0;
      this.update();
      if (pi === -1) {
        return;
      }
      this._currentChanged.emit({
        previousIndex: pi,
        previousTitle: pt,
        currentIndex: -1,
        currentTitle: null
      });
    };
    TabBar2.prototype.releaseMouse = function() {
      this._releaseMouse();
    };
    TabBar2.prototype.handleEvent = function(event) {
      switch (event.type) {
        case "mousedown":
          this._evtMouseDown(event);
          break;
        case "mousemove":
          this._evtMouseMove(event);
          break;
        case "mouseup":
          this._evtMouseUp(event);
          break;
        case "pointerdown":
          this._evtMouseDown(event);
          break;
        case "pointermove":
          this._evtMouseMove(event);
          break;
        case "pointerup":
          this._evtMouseUp(event);
          break;
        case "dblclick":
          this._evtDblClick(event);
          break;
        case "keydown":
          this._evtKeyDown(event);
          break;
        case "contextmenu":
          event.preventDefault();
          event.stopPropagation();
          break;
      }
    };
    TabBar2.prototype.onBeforeAttach = function(msg) {
      this.node.addEventListener("mousedown", this);
      this.node.addEventListener("pointerdown", this);
      this.node.addEventListener("dblclick", this);
    };
    TabBar2.prototype.onAfterDetach = function(msg) {
      this.node.removeEventListener("mousedown", this);
      this.node.removeEventListener("pointerdown", this);
      this.node.removeEventListener("dblclick", this);
      this._releaseMouse();
    };
    TabBar2.prototype.onUpdateRequest = function(msg) {
      var titles = this._titles;
      var renderer = this.renderer;
      var currentTitle = this.currentTitle;
      var content = new Array(titles.length);
      for (var i = 0, n = titles.length; i < n; ++i) {
        var title = titles[i];
        var current = title === currentTitle;
        var zIndex = current ? n : n - i - 1;
        content[i] = renderer.renderTab({ title, current, zIndex });
      }
      VirtualDOM.render(content, this.contentNode);
    };
    TabBar2.prototype._evtDblClick = function(event) {
      if (!this.titlesEditable) {
        return;
      }
      var tabs = this.contentNode.children;
      var index = ArrayExt.findFirstIndex(tabs, function(tab) {
        return ElementExt.hitTest(tab, event.clientX, event.clientY);
      });
      if (index === -1) {
        return;
      }
      var title = this.titles[index];
      var label = tabs[index].querySelector(".lm-TabBar-tabLabel");
      if (label && label.contains(event.target)) {
        var value = title.label || "";
        var oldValue_1 = label.innerHTML;
        label.innerHTML = "";
        var input_1 = document.createElement("input");
        input_1.classList.add("lm-TabBar-tabInput");
        input_1.value = value;
        label.appendChild(input_1);
        var onblur_1 = function() {
          input_1.removeEventListener("blur", onblur_1);
          label.innerHTML = oldValue_1;
        };
        input_1.addEventListener("dblclick", function(event2) {
          return event2.stopPropagation();
        });
        input_1.addEventListener("blur", onblur_1);
        input_1.addEventListener("keydown", function(event2) {
          if (event2.key === "Enter") {
            if (input_1.value !== "") {
              title.label = title.caption = input_1.value;
            }
            onblur_1();
          } else if (event2.key === "Escape") {
            onblur_1();
          }
        });
        input_1.select();
        input_1.focus();
        if (label.children.length > 0) {
          label.children[0].focus();
        }
      }
    };
    TabBar2.prototype._evtKeyDown = function(event) {
      event.preventDefault();
      event.stopPropagation();
      if (event.keyCode === 27) {
        this._releaseMouse();
      }
    };
    TabBar2.prototype._evtMouseDown = function(event) {
      if (event.button !== 0 && event.button !== 1) {
        return;
      }
      if (this._dragData) {
        return;
      }
      var addButtonClicked = this.addButtonEnabled && this.addButtonNode.contains(event.target);
      var tabs = this.contentNode.children;
      var index = ArrayExt.findFirstIndex(tabs, function(tab) {
        return ElementExt.hitTest(tab, event.clientX, event.clientY);
      });
      if (index === -1 && !addButtonClicked) {
        return;
      }
      event.preventDefault();
      event.stopPropagation();
      this._dragData = {
        tab: tabs[index],
        index,
        pressX: event.clientX,
        pressY: event.clientY,
        tabPos: -1,
        tabSize: -1,
        tabPressPos: -1,
        targetIndex: -1,
        tabLayout: null,
        contentRect: null,
        override: null,
        dragActive: false,
        dragAborted: false,
        detachRequested: false
      };
      this.document.addEventListener("mouseup", this, true);
      this.document.addEventListener("pointerup", this, true);
      if (event.button === 1 || addButtonClicked) {
        return;
      }
      var icon = tabs[index].querySelector(this.renderer.closeIconSelector);
      if (icon && icon.contains(event.target)) {
        return;
      }
      if (this.tabsMovable) {
        this.document.addEventListener("mousemove", this, true);
        this.document.addEventListener("pointermove", this, true);
        this.document.addEventListener("keydown", this, true);
        this.document.addEventListener("contextmenu", this, true);
      }
      if (this.allowDeselect && this.currentIndex === index) {
        this.currentIndex = -1;
      } else {
        this.currentIndex = index;
      }
      if (this.currentIndex === -1) {
        return;
      }
      this._tabActivateRequested.emit({
        index: this.currentIndex,
        title: this.currentTitle
      });
    };
    TabBar2.prototype._evtMouseMove = function(event) {
      var data = this._dragData;
      if (!data) {
        return;
      }
      event.preventDefault();
      event.stopPropagation();
      var tabs = this.contentNode.children;
      if (!data.dragActive && !Private$7.dragExceeded(data, event)) {
        return;
      }
      if (!data.dragActive) {
        var tabRect = data.tab.getBoundingClientRect();
        if (this._orientation === "horizontal") {
          data.tabPos = data.tab.offsetLeft;
          data.tabSize = tabRect.width;
          data.tabPressPos = data.pressX - tabRect.left;
        } else {
          data.tabPos = data.tab.offsetTop;
          data.tabSize = tabRect.height;
          data.tabPressPos = data.pressY - tabRect.top;
        }
        data.tabLayout = Private$7.snapTabLayout(tabs, this._orientation);
        data.contentRect = this.contentNode.getBoundingClientRect();
        data.override = Drag.overrideCursor("default");
        data.tab.classList.add("lm-mod-dragging");
        this.addClass("lm-mod-dragging");
        data.tab.classList.add("p-mod-dragging");
        this.addClass("p-mod-dragging");
        data.dragActive = true;
      }
      if (!data.detachRequested && Private$7.detachExceeded(data, event)) {
        data.detachRequested = true;
        var index = data.index;
        var clientX = event.clientX;
        var clientY = event.clientY;
        var tab = tabs[index];
        var title = this._titles[index];
        this._tabDetachRequested.emit({ index, title, tab, clientX, clientY });
        if (data.dragAborted) {
          return;
        }
      }
      Private$7.layoutTabs(tabs, data, event, this._orientation);
    };
    TabBar2.prototype._evtMouseUp = function(event) {
      var _this = this;
      if (event.button !== 0 && event.button !== 1) {
        return;
      }
      var data = this._dragData;
      if (!data) {
        return;
      }
      event.preventDefault();
      event.stopPropagation();
      this.document.removeEventListener("mousemove", this, true);
      this.document.removeEventListener("mouseup", this, true);
      this.document.removeEventListener("pointermove", this, true);
      this.document.removeEventListener("pointerup", this, true);
      this.document.removeEventListener("keydown", this, true);
      this.document.removeEventListener("contextmenu", this, true);
      if (!data.dragActive) {
        this._dragData = null;
        var addButtonClicked = this.addButtonEnabled && this.addButtonNode.contains(event.target);
        if (addButtonClicked) {
          this._addRequested.emit(void 0);
          return;
        }
        var tabs = this.contentNode.children;
        var index = ArrayExt.findFirstIndex(tabs, function(tab) {
          return ElementExt.hitTest(tab, event.clientX, event.clientY);
        });
        if (index !== data.index) {
          return;
        }
        var title = this._titles[index];
        if (!title.closable) {
          return;
        }
        if (event.button === 1) {
          this._tabCloseRequested.emit({ index, title });
          return;
        }
        var icon = tabs[index].querySelector(this.renderer.closeIconSelector);
        if (icon && icon.contains(event.target)) {
          this._tabCloseRequested.emit({ index, title });
          return;
        }
        return;
      }
      if (event.button !== 0) {
        return;
      }
      Private$7.finalizeTabPosition(data, this._orientation);
      data.tab.classList.remove("lm-mod-dragging");
      data.tab.classList.remove("p-mod-dragging");
      var duration = Private$7.parseTransitionDuration(data.tab);
      setTimeout(function() {
        if (data.dragAborted) {
          return;
        }
        _this._dragData = null;
        Private$7.resetTabPositions(_this.contentNode.children, _this._orientation);
        data.override.dispose();
        _this.removeClass("lm-mod-dragging");
        _this.removeClass("p-mod-dragging");
        var i = data.index;
        var j = data.targetIndex;
        if (j === -1 || i === j) {
          return;
        }
        ArrayExt.move(_this._titles, i, j);
        _this._adjustCurrentForMove(i, j);
        _this._tabMoved.emit({
          fromIndex: i,
          toIndex: j,
          title: _this._titles[j]
        });
        MessageLoop.sendMessage(_this, Widget.Msg.UpdateRequest);
      }, duration);
    };
    TabBar2.prototype._releaseMouse = function() {
      var data = this._dragData;
      if (!data) {
        return;
      }
      this._dragData = null;
      this.document.removeEventListener("mousemove", this, true);
      this.document.removeEventListener("mouseup", this, true);
      this.document.removeEventListener("pointermove", this, true);
      this.document.removeEventListener("pointerup", this, true);
      this.document.removeEventListener("keydown", this, true);
      this.document.removeEventListener("contextmenu", this, true);
      data.dragAborted = true;
      if (!data.dragActive) {
        return;
      }
      Private$7.resetTabPositions(this.contentNode.children, this._orientation);
      data.override.dispose();
      data.tab.classList.remove("lm-mod-dragging");
      this.removeClass("lm-mod-dragging");
      data.tab.classList.remove("p-mod-dragging");
      this.removeClass("p-mod-dragging");
    };
    TabBar2.prototype._adjustCurrentForInsert = function(i, title) {
      var ct = this.currentTitle;
      var ci = this._currentIndex;
      var bh = this.insertBehavior;
      if (bh === "select-tab" || bh === "select-tab-if-needed" && ci === -1) {
        this._currentIndex = i;
        this._previousTitle = ct;
        this._currentChanged.emit({
          previousIndex: ci,
          previousTitle: ct,
          currentIndex: i,
          currentTitle: title
        });
        return;
      }
      if (ci >= i) {
        this._currentIndex++;
      }
    };
    TabBar2.prototype._adjustCurrentForMove = function(i, j) {
      if (this._currentIndex === i) {
        this._currentIndex = j;
      } else if (this._currentIndex < i && this._currentIndex >= j) {
        this._currentIndex++;
      } else if (this._currentIndex > i && this._currentIndex <= j) {
        this._currentIndex--;
      }
    };
    TabBar2.prototype._adjustCurrentForRemove = function(i, title) {
      var ci = this._currentIndex;
      var bh = this.removeBehavior;
      if (ci !== i) {
        if (ci > i) {
          this._currentIndex--;
        }
        return;
      }
      if (this._titles.length === 0) {
        this._currentIndex = -1;
        this._currentChanged.emit({
          previousIndex: i,
          previousTitle: title,
          currentIndex: -1,
          currentTitle: null
        });
        return;
      }
      if (bh === "select-tab-after") {
        this._currentIndex = Math.min(i, this._titles.length - 1);
        this._currentChanged.emit({
          previousIndex: i,
          previousTitle: title,
          currentIndex: this._currentIndex,
          currentTitle: this.currentTitle
        });
        return;
      }
      if (bh === "select-tab-before") {
        this._currentIndex = Math.max(0, i - 1);
        this._currentChanged.emit({
          previousIndex: i,
          previousTitle: title,
          currentIndex: this._currentIndex,
          currentTitle: this.currentTitle
        });
        return;
      }
      if (bh === "select-previous-tab") {
        if (this._previousTitle) {
          this._currentIndex = this._titles.indexOf(this._previousTitle);
          this._previousTitle = null;
        } else {
          this._currentIndex = Math.min(i, this._titles.length - 1);
        }
        this._currentChanged.emit({
          previousIndex: i,
          previousTitle: title,
          currentIndex: this._currentIndex,
          currentTitle: this.currentTitle
        });
        return;
      }
      this._currentIndex = -1;
      this._currentChanged.emit({
        previousIndex: i,
        previousTitle: title,
        currentIndex: -1,
        currentTitle: null
      });
    };
    TabBar2.prototype._onTitleChanged = function(sender) {
      this.update();
    };
    return TabBar2;
  }(Widget)
);
(function(TabBar2) {
  var Renderer = (
    /** @class */
    function() {
      function Renderer2() {
        this.closeIconSelector = ".lm-TabBar-tabCloseIcon";
        this._tabID = 0;
        this._tabKeys = /* @__PURE__ */ new WeakMap();
        this._uuid = ++Renderer2._nInstance;
      }
      Renderer2.prototype.renderTab = function(data) {
        var title = data.title.caption;
        var key = this.createTabKey(data);
        var id = key;
        var style = this.createTabStyle(data);
        var className = this.createTabClass(data);
        var dataset = this.createTabDataset(data);
        var aria = this.createTabARIA(data);
        if (data.title.closable) {
          return h.li(__assign2({ id, key, className, title, style, dataset }, aria), this.renderIcon(data), this.renderLabel(data), this.renderCloseIcon(data));
        } else {
          return h.li(__assign2({ id, key, className, title, style, dataset }, aria), this.renderIcon(data), this.renderLabel(data));
        }
      };
      Renderer2.prototype.renderIcon = function(data) {
        var title = data.title;
        var className = this.createIconClass(data);
        if (typeof title.icon === "string") {
          return h.div({ className }, title.iconLabel);
        }
        return h.div({ className }, title.icon, title.iconLabel);
      };
      Renderer2.prototype.renderLabel = function(data) {
        return h.div({
          className: "lm-TabBar-tabLabel p-TabBar-tabLabel"
          /* </DEPRECATED> */
        }, data.title.label);
      };
      Renderer2.prototype.renderCloseIcon = function(data) {
        return h.div({
          className: "lm-TabBar-tabCloseIcon p-TabBar-tabCloseIcon"
          /* </DEPRECATED> */
        });
      };
      Renderer2.prototype.createTabKey = function(data) {
        var key = this._tabKeys.get(data.title);
        if (key === void 0) {
          key = "tab-key-" + this._uuid + "-" + this._tabID++;
          this._tabKeys.set(data.title, key);
        }
        return key;
      };
      Renderer2.prototype.createTabStyle = function(data) {
        return { zIndex: "" + data.zIndex };
      };
      Renderer2.prototype.createTabClass = function(data) {
        var name = "lm-TabBar-tab";
        name += " p-TabBar-tab";
        if (data.title.className) {
          name += " " + data.title.className;
        }
        if (data.title.closable) {
          name += " lm-mod-closable";
          name += " p-mod-closable";
        }
        if (data.current) {
          name += " lm-mod-current";
          name += " p-mod-current";
        }
        return name;
      };
      Renderer2.prototype.createTabDataset = function(data) {
        return data.title.dataset;
      };
      Renderer2.prototype.createTabARIA = function(data) {
        return { role: "tab", "aria-selected": data.current.toString() };
      };
      Renderer2.prototype.createIconClass = function(data) {
        var name = "lm-TabBar-tabIcon";
        name += " p-TabBar-tabIcon";
        var extra = data.title.iconClass;
        return extra ? name + " " + extra : name;
      };
      Renderer2._nInstance = 0;
      return Renderer2;
    }()
  );
  TabBar2.Renderer = Renderer;
  TabBar2.defaultRenderer = new Renderer();
  TabBar2.addButtonSelector = ".lm-TabBar-addButton";
})(TabBar || (TabBar = {}));
var Private$7;
(function(Private8) {
  Private8.DRAG_THRESHOLD = 5;
  Private8.DETACH_THRESHOLD = 20;
  function createNode() {
    var node = document.createElement("div");
    var content = document.createElement("ul");
    content.setAttribute("role", "tablist");
    content.className = "lm-TabBar-content";
    content.classList.add("p-TabBar-content");
    node.appendChild(content);
    var add = document.createElement("div");
    add.className = "lm-TabBar-addButton lm-mod-hidden";
    node.appendChild(add);
    return node;
  }
  Private8.createNode = createNode;
  function asTitle(value) {
    return value instanceof Title ? value : new Title(value);
  }
  Private8.asTitle = asTitle;
  function parseTransitionDuration(tab) {
    var style = window.getComputedStyle(tab);
    return 1e3 * (parseFloat(style.transitionDuration) || 0);
  }
  Private8.parseTransitionDuration = parseTransitionDuration;
  function snapTabLayout(tabs, orientation) {
    var layout = new Array(tabs.length);
    for (var i = 0, n = tabs.length; i < n; ++i) {
      var node = tabs[i];
      var style = window.getComputedStyle(node);
      if (orientation === "horizontal") {
        layout[i] = {
          pos: node.offsetLeft,
          size: node.offsetWidth,
          margin: parseFloat(style.marginLeft) || 0
        };
      } else {
        layout[i] = {
          pos: node.offsetTop,
          size: node.offsetHeight,
          margin: parseFloat(style.marginTop) || 0
        };
      }
    }
    return layout;
  }
  Private8.snapTabLayout = snapTabLayout;
  function dragExceeded(data, event) {
    var dx = Math.abs(event.clientX - data.pressX);
    var dy = Math.abs(event.clientY - data.pressY);
    return dx >= Private8.DRAG_THRESHOLD || dy >= Private8.DRAG_THRESHOLD;
  }
  Private8.dragExceeded = dragExceeded;
  function detachExceeded(data, event) {
    var rect = data.contentRect;
    return event.clientX < rect.left - Private8.DETACH_THRESHOLD || event.clientX >= rect.right + Private8.DETACH_THRESHOLD || event.clientY < rect.top - Private8.DETACH_THRESHOLD || event.clientY >= rect.bottom + Private8.DETACH_THRESHOLD;
  }
  Private8.detachExceeded = detachExceeded;
  function layoutTabs(tabs, data, event, orientation) {
    var pressPos;
    var localPos;
    var clientPos;
    var clientSize;
    if (orientation === "horizontal") {
      pressPos = data.pressX;
      localPos = event.clientX - data.contentRect.left;
      clientPos = event.clientX;
      clientSize = data.contentRect.width;
    } else {
      pressPos = data.pressY;
      localPos = event.clientY - data.contentRect.top;
      clientPos = event.clientY;
      clientSize = data.contentRect.height;
    }
    var targetIndex = data.index;
    var targetPos = localPos - data.tabPressPos;
    var targetEnd = targetPos + data.tabSize;
    for (var i = 0, n = tabs.length; i < n; ++i) {
      var pxPos = void 0;
      var layout = data.tabLayout[i];
      var threshold = layout.pos + (layout.size >> 1);
      if (i < data.index && targetPos < threshold) {
        pxPos = data.tabSize + data.tabLayout[i + 1].margin + "px";
        targetIndex = Math.min(targetIndex, i);
      } else if (i > data.index && targetEnd > threshold) {
        pxPos = -data.tabSize - layout.margin + "px";
        targetIndex = Math.max(targetIndex, i);
      } else if (i === data.index) {
        var ideal = clientPos - pressPos;
        var limit = clientSize - (data.tabPos + data.tabSize);
        pxPos = Math.max(-data.tabPos, Math.min(ideal, limit)) + "px";
      } else {
        pxPos = "";
      }
      if (orientation === "horizontal") {
        tabs[i].style.left = pxPos;
      } else {
        tabs[i].style.top = pxPos;
      }
    }
    data.targetIndex = targetIndex;
  }
  Private8.layoutTabs = layoutTabs;
  function finalizeTabPosition(data, orientation) {
    var clientSize;
    if (orientation === "horizontal") {
      clientSize = data.contentRect.width;
    } else {
      clientSize = data.contentRect.height;
    }
    var ideal;
    if (data.targetIndex === data.index) {
      ideal = 0;
    } else if (data.targetIndex > data.index) {
      var tgt = data.tabLayout[data.targetIndex];
      ideal = tgt.pos + tgt.size - data.tabSize - data.tabPos;
    } else {
      var tgt = data.tabLayout[data.targetIndex];
      ideal = tgt.pos - data.tabPos;
    }
    var limit = clientSize - (data.tabPos + data.tabSize);
    var final = Math.max(-data.tabPos, Math.min(ideal, limit));
    if (orientation === "horizontal") {
      data.tab.style.left = final + "px";
    } else {
      data.tab.style.top = final + "px";
    }
  }
  Private8.finalizeTabPosition = finalizeTabPosition;
  function resetTabPositions(tabs, orientation) {
    each(tabs, function(tab) {
      if (orientation === "horizontal") {
        tab.style.left = "";
      } else {
        tab.style.top = "";
      }
    });
  }
  Private8.resetTabPositions = resetTabPositions;
})(Private$7 || (Private$7 = {}));
var DockLayout = (
  /** @class */
  function(_super) {
    __extends3(DockLayout2, _super);
    function DockLayout2(options) {
      var _this = _super.call(this) || this;
      _this._spacing = 4;
      _this._dirty = false;
      _this._root = null;
      _this._box = null;
      _this._items = /* @__PURE__ */ new Map();
      _this.renderer = options.renderer;
      if (options.spacing !== void 0) {
        _this._spacing = Utils$1.clampDimension(options.spacing);
      }
      _this._document = options.document || document;
      _this._hiddenMode = options.hiddenMode !== void 0 ? options.hiddenMode : Widget.HiddenMode.Display;
      return _this;
    }
    DockLayout2.prototype.dispose = function() {
      var widgets = this.iter();
      this._items.forEach(function(item) {
        item.dispose();
      });
      this._box = null;
      this._root = null;
      this._items.clear();
      each(widgets, function(widget) {
        widget.dispose();
      });
      _super.prototype.dispose.call(this);
    };
    Object.defineProperty(DockLayout2.prototype, "hiddenMode", {
      /**
       * The method for hiding child widgets.
       *
       * #### Notes
       * If there is only one child widget, `Display` hiding mode will be used
       * regardless of this setting.
       */
      get: function() {
        return this._hiddenMode;
      },
      set: function(v) {
        var _this = this;
        if (this._hiddenMode === v) {
          return;
        }
        this._hiddenMode = v;
        each(this.tabBars(), function(bar) {
          if (bar.titles.length > 1) {
            bar.titles.forEach(function(title) {
              title.owner.hiddenMode = _this._hiddenMode;
            });
          }
        });
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(DockLayout2.prototype, "spacing", {
      /**
       * Get the inter-element spacing for the dock layout.
       */
      get: function() {
        return this._spacing;
      },
      /**
       * Set the inter-element spacing for the dock layout.
       */
      set: function(value) {
        value = Utils$1.clampDimension(value);
        if (this._spacing === value) {
          return;
        }
        this._spacing = value;
        if (!this.parent) {
          return;
        }
        this.parent.fit();
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(DockLayout2.prototype, "isEmpty", {
      /**
       * Whether the dock layout is empty.
       */
      get: function() {
        return this._root === null;
      },
      enumerable: true,
      configurable: true
    });
    DockLayout2.prototype.iter = function() {
      return this._root ? this._root.iterAllWidgets() : empty();
    };
    DockLayout2.prototype.widgets = function() {
      return this._root ? this._root.iterUserWidgets() : empty();
    };
    DockLayout2.prototype.selectedWidgets = function() {
      return this._root ? this._root.iterSelectedWidgets() : empty();
    };
    DockLayout2.prototype.tabBars = function() {
      return this._root ? this._root.iterTabBars() : empty();
    };
    DockLayout2.prototype.handles = function() {
      return this._root ? this._root.iterHandles() : empty();
    };
    DockLayout2.prototype.moveHandle = function(handle, offsetX, offsetY) {
      var hidden = handle.classList.contains("lm-mod-hidden");
      hidden = hidden || handle.classList.contains("p-mod-hidden");
      if (!this._root || hidden) {
        return;
      }
      var data = this._root.findSplitNode(handle);
      if (!data) {
        return;
      }
      var delta;
      if (data.node.orientation === "horizontal") {
        delta = offsetX - handle.offsetLeft;
      } else {
        delta = offsetY - handle.offsetTop;
      }
      if (delta === 0) {
        return;
      }
      data.node.holdSizes();
      BoxEngine.adjust(data.node.sizers, data.index, delta);
      if (this.parent) {
        this.parent.update();
      }
    };
    DockLayout2.prototype.saveLayout = function() {
      if (!this._root) {
        return { main: null };
      }
      this._root.holdAllSizes();
      return { main: this._root.createConfig() };
    };
    DockLayout2.prototype.restoreLayout = function(config) {
      var _this = this;
      var widgetSet = /* @__PURE__ */ new Set();
      var mainConfig;
      if (config.main) {
        mainConfig = Private$6.normalizeAreaConfig(config.main, widgetSet);
      } else {
        mainConfig = null;
      }
      var oldWidgets = this.widgets();
      var oldTabBars = this.tabBars();
      var oldHandles = this.handles();
      this._root = null;
      each(oldWidgets, function(widget) {
        if (!widgetSet.has(widget)) {
          widget.parent = null;
        }
      });
      each(oldTabBars, function(tabBar) {
        tabBar.dispose();
      });
      each(oldHandles, function(handle) {
        if (handle.parentNode) {
          handle.parentNode.removeChild(handle);
        }
      });
      widgetSet.forEach(function(widget) {
        widget.parent = _this.parent;
      });
      if (mainConfig) {
        this._root = Private$6.realizeAreaConfig(mainConfig, {
          // Ignoring optional `document` argument as we must reuse `this._document`
          createTabBar: function(document2) {
            return _this._createTabBar();
          },
          createHandle: function() {
            return _this._createHandle();
          }
        }, this._document);
      } else {
        this._root = null;
      }
      if (!this.parent) {
        return;
      }
      widgetSet.forEach(function(widget) {
        _this.attachWidget(widget);
      });
      this.parent.fit();
    };
    DockLayout2.prototype.addWidget = function(widget, options) {
      if (options === void 0) {
        options = {};
      }
      var ref = options.ref || null;
      var mode = options.mode || "tab-after";
      var refNode = null;
      if (this._root && ref) {
        refNode = this._root.findTabNode(ref);
      }
      if (ref && !refNode) {
        throw new Error("Reference widget is not in the layout.");
      }
      widget.parent = this.parent;
      switch (mode) {
        case "tab-after":
          this._insertTab(widget, ref, refNode, true);
          break;
        case "tab-before":
          this._insertTab(widget, ref, refNode, false);
          break;
        case "split-top":
          this._insertSplit(widget, ref, refNode, "vertical", false);
          break;
        case "split-left":
          this._insertSplit(widget, ref, refNode, "horizontal", false);
          break;
        case "split-right":
          this._insertSplit(widget, ref, refNode, "horizontal", true);
          break;
        case "split-bottom":
          this._insertSplit(widget, ref, refNode, "vertical", true);
          break;
      }
      if (!this.parent) {
        return;
      }
      this.attachWidget(widget);
      this.parent.fit();
    };
    DockLayout2.prototype.removeWidget = function(widget) {
      this._removeWidget(widget);
      if (!this.parent) {
        return;
      }
      this.detachWidget(widget);
      this.parent.fit();
    };
    DockLayout2.prototype.hitTestTabAreas = function(clientX, clientY) {
      if (!this._root || !this.parent || !this.parent.isVisible) {
        return null;
      }
      if (!this._box) {
        this._box = ElementExt.boxSizing(this.parent.node);
      }
      var rect = this.parent.node.getBoundingClientRect();
      var x = clientX - rect.left - this._box.borderLeft;
      var y = clientY - rect.top - this._box.borderTop;
      var tabNode = this._root.hitTestTabNodes(x, y);
      if (!tabNode) {
        return null;
      }
      var tabBar = tabNode.tabBar, top = tabNode.top, left = tabNode.left, width = tabNode.width, height = tabNode.height;
      var borderWidth = this._box.borderLeft + this._box.borderRight;
      var borderHeight = this._box.borderTop + this._box.borderBottom;
      var right = rect.width - borderWidth - (left + width);
      var bottom = rect.height - borderHeight - (top + height);
      return { tabBar, x, y, top, left, right, bottom, width, height };
    };
    DockLayout2.prototype.init = function() {
      var _this = this;
      _super.prototype.init.call(this);
      each(this, function(widget) {
        _this.attachWidget(widget);
      });
      each(this.handles(), function(handle) {
        _this.parent.node.appendChild(handle);
      });
      this.parent.fit();
    };
    DockLayout2.prototype.attachWidget = function(widget) {
      if (this.parent.node === widget.node.parentNode) {
        return;
      }
      this._items.set(widget, new LayoutItem(widget));
      if (this.parent.isAttached) {
        MessageLoop.sendMessage(widget, Widget.Msg.BeforeAttach);
      }
      this.parent.node.appendChild(widget.node);
      if (this.parent.isAttached) {
        MessageLoop.sendMessage(widget, Widget.Msg.AfterAttach);
      }
    };
    DockLayout2.prototype.detachWidget = function(widget) {
      if (this.parent.node !== widget.node.parentNode) {
        return;
      }
      if (this.parent.isAttached) {
        MessageLoop.sendMessage(widget, Widget.Msg.BeforeDetach);
      }
      this.parent.node.removeChild(widget.node);
      if (this.parent.isAttached) {
        MessageLoop.sendMessage(widget, Widget.Msg.AfterDetach);
      }
      var item = this._items.get(widget);
      if (item) {
        this._items.delete(widget);
        item.dispose();
      }
    };
    DockLayout2.prototype.onBeforeShow = function(msg) {
      _super.prototype.onBeforeShow.call(this, msg);
      this.parent.update();
    };
    DockLayout2.prototype.onBeforeAttach = function(msg) {
      _super.prototype.onBeforeAttach.call(this, msg);
      this.parent.fit();
    };
    DockLayout2.prototype.onChildShown = function(msg) {
      this.parent.fit();
    };
    DockLayout2.prototype.onChildHidden = function(msg) {
      this.parent.fit();
    };
    DockLayout2.prototype.onResize = function(msg) {
      if (this.parent.isVisible) {
        this._update(msg.width, msg.height);
      }
    };
    DockLayout2.prototype.onUpdateRequest = function(msg) {
      if (this.parent.isVisible) {
        this._update(-1, -1);
      }
    };
    DockLayout2.prototype.onFitRequest = function(msg) {
      if (this.parent.isAttached) {
        this._fit();
      }
    };
    DockLayout2.prototype._removeWidget = function(widget) {
      if (!this._root) {
        return;
      }
      var tabNode = this._root.findTabNode(widget);
      if (!tabNode) {
        return;
      }
      Private$6.removeAria(widget);
      if (tabNode.tabBar.titles.length > 1) {
        tabNode.tabBar.removeTab(widget.title);
        if (this._hiddenMode === Widget.HiddenMode.Scale && tabNode.tabBar.titles.length == 1) {
          var existingWidget = tabNode.tabBar.titles[0].owner;
          existingWidget.hiddenMode = Widget.HiddenMode.Display;
        }
        return;
      }
      tabNode.tabBar.dispose();
      if (this._root === tabNode) {
        this._root = null;
        return;
      }
      this._root.holdAllSizes();
      var splitNode = tabNode.parent;
      tabNode.parent = null;
      var i = ArrayExt.removeFirstOf(splitNode.children, tabNode);
      var handle = ArrayExt.removeAt(splitNode.handles, i);
      ArrayExt.removeAt(splitNode.sizers, i);
      if (handle.parentNode) {
        handle.parentNode.removeChild(handle);
      }
      if (splitNode.children.length > 1) {
        splitNode.syncHandles();
        return;
      }
      var maybeParent = splitNode.parent;
      splitNode.parent = null;
      var childNode = splitNode.children[0];
      var childHandle = splitNode.handles[0];
      splitNode.children.length = 0;
      splitNode.handles.length = 0;
      splitNode.sizers.length = 0;
      if (childHandle.parentNode) {
        childHandle.parentNode.removeChild(childHandle);
      }
      if (this._root === splitNode) {
        childNode.parent = null;
        this._root = childNode;
        return;
      }
      var parentNode = maybeParent;
      var j = parentNode.children.indexOf(splitNode);
      if (childNode instanceof Private$6.TabLayoutNode) {
        childNode.parent = parentNode;
        parentNode.children[j] = childNode;
        return;
      }
      var splitHandle = ArrayExt.removeAt(parentNode.handles, j);
      ArrayExt.removeAt(parentNode.children, j);
      ArrayExt.removeAt(parentNode.sizers, j);
      if (splitHandle.parentNode) {
        splitHandle.parentNode.removeChild(splitHandle);
      }
      for (var i_1 = 0, n = childNode.children.length; i_1 < n; ++i_1) {
        var gChild = childNode.children[i_1];
        var gHandle = childNode.handles[i_1];
        var gSizer = childNode.sizers[i_1];
        ArrayExt.insert(parentNode.children, j + i_1, gChild);
        ArrayExt.insert(parentNode.handles, j + i_1, gHandle);
        ArrayExt.insert(parentNode.sizers, j + i_1, gSizer);
        gChild.parent = parentNode;
      }
      childNode.children.length = 0;
      childNode.handles.length = 0;
      childNode.sizers.length = 0;
      childNode.parent = null;
      parentNode.syncHandles();
    };
    DockLayout2.prototype._insertTab = function(widget, ref, refNode, after) {
      if (widget === ref) {
        return;
      }
      if (!this._root) {
        var tabNode = new Private$6.TabLayoutNode(this._createTabBar());
        tabNode.tabBar.addTab(widget.title);
        this._root = tabNode;
        Private$6.addAria(widget, tabNode.tabBar);
        return;
      }
      if (!refNode) {
        refNode = this._root.findFirstTabNode();
      }
      if (refNode.tabBar.titles.indexOf(widget.title) === -1) {
        this._removeWidget(widget);
        widget.hide();
      }
      var index;
      if (ref) {
        index = refNode.tabBar.titles.indexOf(ref.title);
      } else {
        index = refNode.tabBar.currentIndex;
      }
      if (this._hiddenMode === Widget.HiddenMode.Scale) {
        if (refNode.tabBar.titles.length === 0) {
          widget.hiddenMode = Widget.HiddenMode.Display;
        } else if (refNode.tabBar.titles.length == 1) {
          var existingWidget = refNode.tabBar.titles[0].owner;
          existingWidget.hiddenMode = Widget.HiddenMode.Scale;
        } else {
          widget.hiddenMode = Widget.HiddenMode.Scale;
        }
      } else {
        widget.hiddenMode = this._hiddenMode;
      }
      refNode.tabBar.insertTab(index + (after ? 1 : 0), widget.title);
      Private$6.addAria(widget, refNode.tabBar);
    };
    DockLayout2.prototype._insertSplit = function(widget, ref, refNode, orientation, after) {
      if (widget === ref && refNode && refNode.tabBar.titles.length === 1) {
        return;
      }
      this._removeWidget(widget);
      var tabNode = new Private$6.TabLayoutNode(this._createTabBar());
      tabNode.tabBar.addTab(widget.title);
      Private$6.addAria(widget, tabNode.tabBar);
      if (!this._root) {
        this._root = tabNode;
        return;
      }
      if (!refNode || !refNode.parent) {
        var root = this._splitRoot(orientation);
        var i_2 = after ? root.children.length : 0;
        root.normalizeSizes();
        var sizer = Private$6.createSizer(refNode ? 1 : Private$6.GOLDEN_RATIO);
        ArrayExt.insert(root.children, i_2, tabNode);
        ArrayExt.insert(root.sizers, i_2, sizer);
        ArrayExt.insert(root.handles, i_2, this._createHandle());
        tabNode.parent = root;
        root.normalizeSizes();
        root.syncHandles();
        return;
      }
      var splitNode = refNode.parent;
      if (splitNode.orientation === orientation) {
        var i_3 = splitNode.children.indexOf(refNode);
        splitNode.normalizeSizes();
        var s = splitNode.sizers[i_3].sizeHint /= 2;
        var j_1 = i_3 + (after ? 1 : 0);
        ArrayExt.insert(splitNode.children, j_1, tabNode);
        ArrayExt.insert(splitNode.sizers, j_1, Private$6.createSizer(s));
        ArrayExt.insert(splitNode.handles, j_1, this._createHandle());
        tabNode.parent = splitNode;
        splitNode.syncHandles();
        return;
      }
      var i = ArrayExt.removeFirstOf(splitNode.children, refNode);
      var childNode = new Private$6.SplitLayoutNode(orientation);
      childNode.normalized = true;
      childNode.children.push(refNode);
      childNode.sizers.push(Private$6.createSizer(0.5));
      childNode.handles.push(this._createHandle());
      refNode.parent = childNode;
      var j = after ? 1 : 0;
      ArrayExt.insert(childNode.children, j, tabNode);
      ArrayExt.insert(childNode.sizers, j, Private$6.createSizer(0.5));
      ArrayExt.insert(childNode.handles, j, this._createHandle());
      tabNode.parent = childNode;
      childNode.syncHandles();
      ArrayExt.insert(splitNode.children, i, childNode);
      childNode.parent = splitNode;
    };
    DockLayout2.prototype._splitRoot = function(orientation) {
      var oldRoot = this._root;
      if (oldRoot instanceof Private$6.SplitLayoutNode) {
        if (oldRoot.orientation === orientation) {
          return oldRoot;
        }
      }
      var newRoot = this._root = new Private$6.SplitLayoutNode(orientation);
      if (oldRoot) {
        newRoot.children.push(oldRoot);
        newRoot.sizers.push(Private$6.createSizer(0));
        newRoot.handles.push(this._createHandle());
        oldRoot.parent = newRoot;
      }
      return newRoot;
    };
    DockLayout2.prototype._fit = function() {
      var minW = 0;
      var minH = 0;
      if (this._root) {
        var limits = this._root.fit(this._spacing, this._items);
        minW = limits.minWidth;
        minH = limits.minHeight;
      }
      var box = this._box = ElementExt.boxSizing(this.parent.node);
      minW += box.horizontalSum;
      minH += box.verticalSum;
      var style = this.parent.node.style;
      style.minWidth = minW + "px";
      style.minHeight = minH + "px";
      this._dirty = true;
      if (this.parent.parent) {
        MessageLoop.sendMessage(this.parent.parent, Widget.Msg.FitRequest);
      }
      if (this._dirty) {
        MessageLoop.sendMessage(this.parent, Widget.Msg.UpdateRequest);
      }
    };
    DockLayout2.prototype._update = function(offsetWidth, offsetHeight) {
      this._dirty = false;
      if (!this._root) {
        return;
      }
      if (offsetWidth < 0) {
        offsetWidth = this.parent.node.offsetWidth;
      }
      if (offsetHeight < 0) {
        offsetHeight = this.parent.node.offsetHeight;
      }
      if (!this._box) {
        this._box = ElementExt.boxSizing(this.parent.node);
      }
      var x = this._box.paddingTop;
      var y = this._box.paddingLeft;
      var width = offsetWidth - this._box.horizontalSum;
      var height = offsetHeight - this._box.verticalSum;
      this._root.update(x, y, width, height, this._spacing, this._items);
    };
    DockLayout2.prototype._createTabBar = function() {
      var tabBar = this.renderer.createTabBar(this._document);
      tabBar.orientation = "horizontal";
      if (this.parent) {
        tabBar.parent = this.parent;
        this.attachWidget(tabBar);
      }
      return tabBar;
    };
    DockLayout2.prototype._createHandle = function() {
      var handle = this.renderer.createHandle();
      var style = handle.style;
      style.position = "absolute";
      style.top = "0";
      style.left = "0";
      style.width = "0";
      style.height = "0";
      if (this.parent) {
        this.parent.node.appendChild(handle);
      }
      return handle;
    };
    return DockLayout2;
  }(Layout)
);
var Private$6;
(function(Private8) {
  Private8.GOLDEN_RATIO = 0.618;
  function createSizer(hint) {
    var sizer = new BoxSizer();
    sizer.sizeHint = hint;
    sizer.size = hint;
    return sizer;
  }
  Private8.createSizer = createSizer;
  function normalizeAreaConfig(config, widgetSet) {
    var result;
    if (config.type === "tab-area") {
      result = normalizeTabAreaConfig(config, widgetSet);
    } else {
      result = normalizeSplitAreaConfig(config, widgetSet);
    }
    return result;
  }
  Private8.normalizeAreaConfig = normalizeAreaConfig;
  function realizeAreaConfig(config, renderer, document2) {
    var node;
    if (config.type === "tab-area") {
      node = realizeTabAreaConfig(config, renderer, document2);
    } else {
      node = realizeSplitAreaConfig(config, renderer, document2);
    }
    return node;
  }
  Private8.realizeAreaConfig = realizeAreaConfig;
  var TabLayoutNode = (
    /** @class */
    function() {
      function TabLayoutNode2(tabBar) {
        this.parent = null;
        this._top = 0;
        this._left = 0;
        this._width = 0;
        this._height = 0;
        var tabSizer = new BoxSizer();
        var widgetSizer = new BoxSizer();
        tabSizer.stretch = 0;
        widgetSizer.stretch = 1;
        this.tabBar = tabBar;
        this.sizers = [tabSizer, widgetSizer];
      }
      Object.defineProperty(TabLayoutNode2.prototype, "top", {
        /**
         * The most recent value for the `top` edge of the layout box.
         */
        get: function() {
          return this._top;
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(TabLayoutNode2.prototype, "left", {
        /**
         * The most recent value for the `left` edge of the layout box.
         */
        get: function() {
          return this._left;
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(TabLayoutNode2.prototype, "width", {
        /**
         * The most recent value for the `width` of the layout box.
         */
        get: function() {
          return this._width;
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(TabLayoutNode2.prototype, "height", {
        /**
         * The most recent value for the `height` of the layout box.
         */
        get: function() {
          return this._height;
        },
        enumerable: true,
        configurable: true
      });
      TabLayoutNode2.prototype.iterAllWidgets = function() {
        return chain(once(this.tabBar), this.iterUserWidgets());
      };
      TabLayoutNode2.prototype.iterUserWidgets = function() {
        return map(this.tabBar.titles, function(title) {
          return title.owner;
        });
      };
      TabLayoutNode2.prototype.iterSelectedWidgets = function() {
        var title = this.tabBar.currentTitle;
        return title ? once(title.owner) : empty();
      };
      TabLayoutNode2.prototype.iterTabBars = function() {
        return once(this.tabBar);
      };
      TabLayoutNode2.prototype.iterHandles = function() {
        return empty();
      };
      TabLayoutNode2.prototype.findTabNode = function(widget) {
        return this.tabBar.titles.indexOf(widget.title) !== -1 ? this : null;
      };
      TabLayoutNode2.prototype.findSplitNode = function(handle) {
        return null;
      };
      TabLayoutNode2.prototype.findFirstTabNode = function() {
        return this;
      };
      TabLayoutNode2.prototype.hitTestTabNodes = function(x, y) {
        if (x < this._left || x >= this._left + this._width) {
          return null;
        }
        if (y < this._top || y >= this._top + this._height) {
          return null;
        }
        return this;
      };
      TabLayoutNode2.prototype.createConfig = function() {
        var widgets = this.tabBar.titles.map(function(title) {
          return title.owner;
        });
        var currentIndex = this.tabBar.currentIndex;
        return { type: "tab-area", widgets, currentIndex };
      };
      TabLayoutNode2.prototype.holdAllSizes = function() {
        return;
      };
      TabLayoutNode2.prototype.fit = function(spacing, items) {
        var minWidth = 0;
        var minHeight = 0;
        var maxWidth = Infinity;
        var maxHeight = Infinity;
        var tabBarItem = items.get(this.tabBar);
        var current = this.tabBar.currentTitle;
        var widgetItem = current ? items.get(current.owner) : void 0;
        var _a = this.sizers, tabBarSizer = _a[0], widgetSizer = _a[1];
        if (tabBarItem) {
          tabBarItem.fit();
        }
        if (widgetItem) {
          widgetItem.fit();
        }
        if (tabBarItem && !tabBarItem.isHidden) {
          minWidth = Math.max(minWidth, tabBarItem.minWidth);
          minHeight += tabBarItem.minHeight;
          tabBarSizer.minSize = tabBarItem.minHeight;
          tabBarSizer.maxSize = tabBarItem.maxHeight;
        } else {
          tabBarSizer.minSize = 0;
          tabBarSizer.maxSize = 0;
        }
        if (widgetItem && !widgetItem.isHidden) {
          minWidth = Math.max(minWidth, widgetItem.minWidth);
          minHeight += widgetItem.minHeight;
          widgetSizer.minSize = widgetItem.minHeight;
          widgetSizer.maxSize = Infinity;
        } else {
          widgetSizer.minSize = 0;
          widgetSizer.maxSize = Infinity;
        }
        return { minWidth, minHeight, maxWidth, maxHeight };
      };
      TabLayoutNode2.prototype.update = function(left, top, width, height, spacing, items) {
        this._top = top;
        this._left = left;
        this._width = width;
        this._height = height;
        var tabBarItem = items.get(this.tabBar);
        var current = this.tabBar.currentTitle;
        var widgetItem = current ? items.get(current.owner) : void 0;
        BoxEngine.calc(this.sizers, height);
        if (tabBarItem && !tabBarItem.isHidden) {
          var size = this.sizers[0].size;
          tabBarItem.update(left, top, width, size);
          top += size;
        }
        if (widgetItem && !widgetItem.isHidden) {
          var size = this.sizers[1].size;
          widgetItem.update(left, top, width, size);
        }
      };
      return TabLayoutNode2;
    }()
  );
  Private8.TabLayoutNode = TabLayoutNode;
  var SplitLayoutNode = (
    /** @class */
    function() {
      function SplitLayoutNode2(orientation) {
        this.parent = null;
        this.normalized = false;
        this.children = [];
        this.sizers = [];
        this.handles = [];
        this.orientation = orientation;
      }
      SplitLayoutNode2.prototype.iterAllWidgets = function() {
        var children = map(this.children, function(child) {
          return child.iterAllWidgets();
        });
        return new ChainIterator(children);
      };
      SplitLayoutNode2.prototype.iterUserWidgets = function() {
        var children = map(this.children, function(child) {
          return child.iterUserWidgets();
        });
        return new ChainIterator(children);
      };
      SplitLayoutNode2.prototype.iterSelectedWidgets = function() {
        var children = map(this.children, function(child) {
          return child.iterSelectedWidgets();
        });
        return new ChainIterator(children);
      };
      SplitLayoutNode2.prototype.iterTabBars = function() {
        var children = map(this.children, function(child) {
          return child.iterTabBars();
        });
        return new ChainIterator(children);
      };
      SplitLayoutNode2.prototype.iterHandles = function() {
        var children = map(this.children, function(child) {
          return child.iterHandles();
        });
        return chain(this.handles, new ChainIterator(children));
      };
      SplitLayoutNode2.prototype.findTabNode = function(widget) {
        for (var i = 0, n = this.children.length; i < n; ++i) {
          var result = this.children[i].findTabNode(widget);
          if (result) {
            return result;
          }
        }
        return null;
      };
      SplitLayoutNode2.prototype.findSplitNode = function(handle) {
        var index = this.handles.indexOf(handle);
        if (index !== -1) {
          return { index, node: this };
        }
        for (var i = 0, n = this.children.length; i < n; ++i) {
          var result = this.children[i].findSplitNode(handle);
          if (result) {
            return result;
          }
        }
        return null;
      };
      SplitLayoutNode2.prototype.findFirstTabNode = function() {
        if (this.children.length === 0) {
          return null;
        }
        return this.children[0].findFirstTabNode();
      };
      SplitLayoutNode2.prototype.hitTestTabNodes = function(x, y) {
        for (var i = 0, n = this.children.length; i < n; ++i) {
          var result = this.children[i].hitTestTabNodes(x, y);
          if (result) {
            return result;
          }
        }
        return null;
      };
      SplitLayoutNode2.prototype.createConfig = function() {
        var orientation = this.orientation;
        var sizes = this.createNormalizedSizes();
        var children = this.children.map(function(child) {
          return child.createConfig();
        });
        return { type: "split-area", orientation, children, sizes };
      };
      SplitLayoutNode2.prototype.syncHandles = function() {
        var _this = this;
        each(this.handles, function(handle, i) {
          handle.setAttribute("data-orientation", _this.orientation);
          if (i === _this.handles.length - 1) {
            handle.classList.add("lm-mod-hidden");
            handle.classList.add("p-mod-hidden");
          } else {
            handle.classList.remove("lm-mod-hidden");
            handle.classList.remove("p-mod-hidden");
          }
        });
      };
      SplitLayoutNode2.prototype.holdSizes = function() {
        each(this.sizers, function(sizer) {
          sizer.sizeHint = sizer.size;
        });
      };
      SplitLayoutNode2.prototype.holdAllSizes = function() {
        each(this.children, function(child) {
          return child.holdAllSizes();
        });
        this.holdSizes();
      };
      SplitLayoutNode2.prototype.normalizeSizes = function() {
        var n = this.sizers.length;
        if (n === 0) {
          return;
        }
        this.holdSizes();
        var sum = reduce(this.sizers, function(v, sizer) {
          return v + sizer.sizeHint;
        }, 0);
        if (sum === 0) {
          each(this.sizers, function(sizer) {
            sizer.size = sizer.sizeHint = 1 / n;
          });
        } else {
          each(this.sizers, function(sizer) {
            sizer.size = sizer.sizeHint /= sum;
          });
        }
        this.normalized = true;
      };
      SplitLayoutNode2.prototype.createNormalizedSizes = function() {
        var n = this.sizers.length;
        if (n === 0) {
          return [];
        }
        var sizes = this.sizers.map(function(sizer) {
          return sizer.size;
        });
        var sum = reduce(sizes, function(v, size) {
          return v + size;
        }, 0);
        if (sum === 0) {
          each(sizes, function(size, i) {
            sizes[i] = 1 / n;
          });
        } else {
          each(sizes, function(size, i) {
            sizes[i] = size / sum;
          });
        }
        return sizes;
      };
      SplitLayoutNode2.prototype.fit = function(spacing, items) {
        var horizontal = this.orientation === "horizontal";
        var fixed = Math.max(0, this.children.length - 1) * spacing;
        var minWidth = horizontal ? fixed : 0;
        var minHeight = horizontal ? 0 : fixed;
        var maxWidth = Infinity;
        var maxHeight = Infinity;
        for (var i = 0, n = this.children.length; i < n; ++i) {
          var limits = this.children[i].fit(spacing, items);
          if (horizontal) {
            minHeight = Math.max(minHeight, limits.minHeight);
            minWidth += limits.minWidth;
            this.sizers[i].minSize = limits.minWidth;
          } else {
            minWidth = Math.max(minWidth, limits.minWidth);
            minHeight += limits.minHeight;
            this.sizers[i].minSize = limits.minHeight;
          }
        }
        return { minWidth, minHeight, maxWidth, maxHeight };
      };
      SplitLayoutNode2.prototype.update = function(left, top, width, height, spacing, items) {
        var horizontal = this.orientation === "horizontal";
        var fixed = Math.max(0, this.children.length - 1) * spacing;
        var space = Math.max(0, (horizontal ? width : height) - fixed);
        if (this.normalized) {
          each(this.sizers, function(sizer) {
            sizer.sizeHint *= space;
          });
          this.normalized = false;
        }
        BoxEngine.calc(this.sizers, space);
        for (var i = 0, n = this.children.length; i < n; ++i) {
          var child = this.children[i];
          var size = this.sizers[i].size;
          var handleStyle = this.handles[i].style;
          if (horizontal) {
            child.update(left, top, size, height, spacing, items);
            left += size;
            handleStyle.top = top + "px";
            handleStyle.left = left + "px";
            handleStyle.width = spacing + "px";
            handleStyle.height = height + "px";
            left += spacing;
          } else {
            child.update(left, top, width, size, spacing, items);
            top += size;
            handleStyle.top = top + "px";
            handleStyle.left = left + "px";
            handleStyle.width = width + "px";
            handleStyle.height = spacing + "px";
            top += spacing;
          }
        }
      };
      return SplitLayoutNode2;
    }()
  );
  Private8.SplitLayoutNode = SplitLayoutNode;
  function addAria(widget, tabBar) {
    widget.node.setAttribute("role", "tabpanel");
    var renderer = tabBar.renderer;
    if (renderer instanceof TabBar.Renderer) {
      var tabId = renderer.createTabKey({
        title: widget.title,
        current: false,
        zIndex: 0
      });
      widget.node.setAttribute("aria-labelledby", tabId);
    }
  }
  Private8.addAria = addAria;
  function removeAria(widget) {
    widget.node.removeAttribute("role");
    widget.node.removeAttribute("aria-labelledby");
  }
  Private8.removeAria = removeAria;
  function normalizeTabAreaConfig(config, widgetSet) {
    if (config.widgets.length === 0) {
      return null;
    }
    var widgets = [];
    each(config.widgets, function(widget) {
      if (!widgetSet.has(widget)) {
        widgetSet.add(widget);
        widgets.push(widget);
      }
    });
    if (widgets.length === 0) {
      return null;
    }
    var index = config.currentIndex;
    if (index !== -1 && (index < 0 || index >= widgets.length)) {
      index = 0;
    }
    return { type: "tab-area", widgets, currentIndex: index };
  }
  function normalizeSplitAreaConfig(config, widgetSet) {
    var orientation = config.orientation;
    var children = [];
    var sizes = [];
    for (var i = 0, n = config.children.length; i < n; ++i) {
      var child = normalizeAreaConfig(config.children[i], widgetSet);
      if (!child) {
        continue;
      }
      if (child.type === "tab-area" || child.orientation !== orientation) {
        children.push(child);
        sizes.push(Math.abs(config.sizes[i] || 0));
      } else {
        children.push.apply(children, child.children);
        sizes.push.apply(sizes, child.sizes);
      }
    }
    if (children.length === 0) {
      return null;
    }
    if (children.length === 1) {
      return children[0];
    }
    return { type: "split-area", orientation, children, sizes };
  }
  function realizeTabAreaConfig(config, renderer, document2) {
    var tabBar = renderer.createTabBar(document2);
    each(config.widgets, function(widget) {
      widget.hide();
      tabBar.addTab(widget.title);
      Private8.addAria(widget, tabBar);
    });
    tabBar.currentIndex = config.currentIndex;
    return new TabLayoutNode(tabBar);
  }
  function realizeSplitAreaConfig(config, renderer, document2) {
    var node = new SplitLayoutNode(config.orientation);
    each(config.children, function(child, i) {
      var childNode = realizeAreaConfig(child, renderer, document2);
      var sizer = createSizer(config.sizes[i]);
      var handle = renderer.createHandle();
      node.children.push(childNode);
      node.handles.push(handle);
      node.sizers.push(sizer);
      childNode.parent = node;
    });
    node.syncHandles();
    node.normalizeSizes();
    return node;
  }
})(Private$6 || (Private$6 = {}));
var DockPanel = (
  /** @class */
  function(_super) {
    __extends3(DockPanel2, _super);
    function DockPanel2(options) {
      if (options === void 0) {
        options = {};
      }
      var _this = _super.call(this) || this;
      _this._drag = null;
      _this._tabsMovable = true;
      _this._tabsConstrained = false;
      _this._addButtonEnabled = false;
      _this._pressData = null;
      _this._layoutModified = new Signal(_this);
      _this._addRequested = new Signal(_this);
      _this.addClass("lm-DockPanel");
      _this.addClass("p-DockPanel");
      _this._document = options.document || document;
      _this._mode = options.mode || "multiple-document";
      _this._renderer = options.renderer || DockPanel2.defaultRenderer;
      _this._edges = options.edges || Private$5.DEFAULT_EDGES;
      if (options.tabsMovable !== void 0) {
        _this._tabsMovable = options.tabsMovable;
      }
      if (options.tabsConstrained !== void 0) {
        _this._tabsConstrained = options.tabsConstrained;
      }
      if (options.addButtonEnabled !== void 0) {
        _this._addButtonEnabled = options.addButtonEnabled;
      }
      _this.dataset["mode"] = _this._mode;
      var renderer = {
        createTabBar: function() {
          return _this._createTabBar();
        },
        createHandle: function() {
          return _this._createHandle();
        }
      };
      _this.layout = new DockLayout({
        document: _this._document,
        renderer,
        spacing: options.spacing,
        hiddenMode: options.hiddenMode
      });
      _this.overlay = options.overlay || new DockPanel2.Overlay();
      _this.node.appendChild(_this.overlay.node);
      return _this;
    }
    DockPanel2.prototype.dispose = function() {
      this._releaseMouse();
      this.overlay.hide(0);
      if (this._drag) {
        this._drag.dispose();
      }
      _super.prototype.dispose.call(this);
    };
    Object.defineProperty(DockPanel2.prototype, "hiddenMode", {
      /**
       * The method for hiding widgets.
       */
      get: function() {
        return this.layout.hiddenMode;
      },
      /**
       * Set the method for hiding widgets.
       */
      set: function(v) {
        this.layout.hiddenMode = v;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(DockPanel2.prototype, "layoutModified", {
      /**
       * A signal emitted when the layout configuration is modified.
       *
       * #### Notes
       * This signal is emitted whenever the current layout configuration
       * may have changed.
       *
       * This signal is emitted asynchronously in a collapsed fashion, so
       * that multiple synchronous modifications results in only a single
       * emit of the signal.
       */
      get: function() {
        return this._layoutModified;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(DockPanel2.prototype, "addRequested", {
      /**
       * A signal emitted when the add button on a tab bar is clicked.
       *
       */
      get: function() {
        return this._addRequested;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(DockPanel2.prototype, "renderer", {
      /**
       * The renderer used by the dock panel.
       */
      get: function() {
        return this.layout.renderer;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(DockPanel2.prototype, "spacing", {
      /**
       * Get the spacing between the widgets.
       */
      get: function() {
        return this.layout.spacing;
      },
      /**
       * Set the spacing between the widgets.
       */
      set: function(value) {
        this.layout.spacing = value;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(DockPanel2.prototype, "mode", {
      /**
       * Get the mode for the dock panel.
       */
      get: function() {
        return this._mode;
      },
      /**
       * Set the mode for the dock panel.
       *
       * #### Notes
       * Changing the mode is a destructive operation with respect to the
       * panel's layout configuration. If layout state must be preserved,
       * save the current layout config before changing the mode.
       */
      set: function(value) {
        if (this._mode === value) {
          return;
        }
        this._mode = value;
        this.dataset["mode"] = value;
        var layout = this.layout;
        switch (value) {
          case "multiple-document":
            each(layout.tabBars(), function(tabBar) {
              tabBar.show();
            });
            break;
          case "single-document":
            layout.restoreLayout(Private$5.createSingleDocumentConfig(this));
            break;
          default:
            throw "unreachable";
        }
        MessageLoop.postMessage(this, Private$5.LayoutModified);
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(DockPanel2.prototype, "tabsMovable", {
      /**
       * Whether the tabs can be dragged / moved at runtime.
       */
      get: function() {
        return this._tabsMovable;
      },
      /**
       * Enable / Disable draggable / movable tabs.
       */
      set: function(value) {
        this._tabsMovable = value;
        each(this.tabBars(), function(tabbar) {
          tabbar.tabsMovable = value;
        });
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(DockPanel2.prototype, "tabsConstrained", {
      /**
       * Whether the tabs are constrained to their source dock panel
       */
      get: function() {
        return this._tabsConstrained;
      },
      /**
       * Constrain/Allow tabs to be dragged outside of this dock panel
       */
      set: function(value) {
        this._tabsConstrained = value;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(DockPanel2.prototype, "addButtonEnabled", {
      /**
       * Whether the add buttons for each tab bar are enabled.
       */
      get: function() {
        return this._addButtonEnabled;
      },
      /**
       * Set whether the add buttons for each tab bar are enabled.
       */
      set: function(value) {
        this._addButtonEnabled = value;
        each(this.tabBars(), function(tabbar) {
          tabbar.addButtonEnabled = value;
        });
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(DockPanel2.prototype, "isEmpty", {
      /**
       * Whether the dock panel is empty.
       */
      get: function() {
        return this.layout.isEmpty;
      },
      enumerable: true,
      configurable: true
    });
    DockPanel2.prototype.widgets = function() {
      return this.layout.widgets();
    };
    DockPanel2.prototype.selectedWidgets = function() {
      return this.layout.selectedWidgets();
    };
    DockPanel2.prototype.tabBars = function() {
      return this.layout.tabBars();
    };
    DockPanel2.prototype.handles = function() {
      return this.layout.handles();
    };
    DockPanel2.prototype.selectWidget = function(widget) {
      var tabBar = find(this.tabBars(), function(bar) {
        return bar.titles.indexOf(widget.title) !== -1;
      });
      if (!tabBar) {
        throw new Error("Widget is not contained in the dock panel.");
      }
      tabBar.currentTitle = widget.title;
    };
    DockPanel2.prototype.activateWidget = function(widget) {
      this.selectWidget(widget);
      widget.activate();
    };
    DockPanel2.prototype.saveLayout = function() {
      return this.layout.saveLayout();
    };
    DockPanel2.prototype.restoreLayout = function(config) {
      this._mode = "multiple-document";
      this.layout.restoreLayout(config);
      if (Platform.IS_EDGE || Platform.IS_IE) {
        MessageLoop.flush();
      }
      MessageLoop.postMessage(this, Private$5.LayoutModified);
    };
    DockPanel2.prototype.addWidget = function(widget, options) {
      if (options === void 0) {
        options = {};
      }
      if (this._mode === "single-document") {
        this.layout.addWidget(widget);
      } else {
        this.layout.addWidget(widget, options);
      }
      MessageLoop.postMessage(this, Private$5.LayoutModified);
    };
    DockPanel2.prototype.processMessage = function(msg) {
      if (msg.type === "layout-modified") {
        this._layoutModified.emit(void 0);
      } else {
        _super.prototype.processMessage.call(this, msg);
      }
    };
    DockPanel2.prototype.handleEvent = function(event) {
      switch (event.type) {
        case "lm-dragenter":
          this._evtDragEnter(event);
          break;
        case "lm-dragleave":
          this._evtDragLeave(event);
          break;
        case "lm-dragover":
          this._evtDragOver(event);
          break;
        case "lm-drop":
          this._evtDrop(event);
          break;
        case "mousedown":
          this._evtMouseDown(event);
          break;
        case "mousemove":
          this._evtMouseMove(event);
          break;
        case "mouseup":
          this._evtMouseUp(event);
          break;
        case "pointerdown":
          this._evtMouseDown(event);
          break;
        case "pointermove":
          this._evtMouseMove(event);
          break;
        case "pointerup":
          this._evtMouseUp(event);
          break;
        case "keydown":
          this._evtKeyDown(event);
          break;
        case "contextmenu":
          event.preventDefault();
          event.stopPropagation();
          break;
      }
    };
    DockPanel2.prototype.onBeforeAttach = function(msg) {
      this.node.addEventListener("lm-dragenter", this);
      this.node.addEventListener("lm-dragleave", this);
      this.node.addEventListener("lm-dragover", this);
      this.node.addEventListener("lm-drop", this);
      this.node.addEventListener("mousedown", this);
      this.node.addEventListener("pointerdown", this);
    };
    DockPanel2.prototype.onAfterDetach = function(msg) {
      this.node.removeEventListener("lm-dragenter", this);
      this.node.removeEventListener("lm-dragleave", this);
      this.node.removeEventListener("lm-dragover", this);
      this.node.removeEventListener("lm-drop", this);
      this.node.removeEventListener("mousedown", this);
      this.node.removeEventListener("pointerdown", this);
      this._releaseMouse();
    };
    DockPanel2.prototype.onChildAdded = function(msg) {
      if (Private$5.isGeneratedTabBarProperty.get(msg.child)) {
        return;
      }
      msg.child.addClass("lm-DockPanel-widget");
      msg.child.addClass("p-DockPanel-widget");
    };
    DockPanel2.prototype.onChildRemoved = function(msg) {
      if (Private$5.isGeneratedTabBarProperty.get(msg.child)) {
        return;
      }
      msg.child.removeClass("lm-DockPanel-widget");
      msg.child.removeClass("p-DockPanel-widget");
      MessageLoop.postMessage(this, Private$5.LayoutModified);
    };
    DockPanel2.prototype._evtDragEnter = function(event) {
      if (event.mimeData.hasData("application/vnd.lumino.widget-factory")) {
        event.preventDefault();
        event.stopPropagation();
      }
    };
    DockPanel2.prototype._evtDragLeave = function(event) {
      event.preventDefault();
      if (this._tabsConstrained && event.source !== this)
        return;
      event.stopPropagation();
      this.overlay.hide(1);
    };
    DockPanel2.prototype._evtDragOver = function(event) {
      event.preventDefault();
      if (this._tabsConstrained && event.source !== this || this._showOverlay(event.clientX, event.clientY) === "invalid") {
        event.dropAction = "none";
      } else {
        event.stopPropagation();
        event.dropAction = event.proposedAction;
      }
    };
    DockPanel2.prototype._evtDrop = function(event) {
      event.preventDefault();
      this.overlay.hide(0);
      if (event.proposedAction === "none") {
        event.dropAction = "none";
        return;
      }
      var clientX = event.clientX, clientY = event.clientY;
      var _a = Private$5.findDropTarget(this, clientX, clientY, this._edges), zone = _a.zone, target = _a.target;
      if (this._tabsConstrained && event.source !== this || zone === "invalid") {
        event.dropAction = "none";
        return;
      }
      var mimeData = event.mimeData;
      var factory = mimeData.getData("application/vnd.lumino.widget-factory");
      if (typeof factory !== "function") {
        event.dropAction = "none";
        return;
      }
      var widget = factory();
      if (!(widget instanceof Widget)) {
        event.dropAction = "none";
        return;
      }
      if (widget.contains(this)) {
        event.dropAction = "none";
        return;
      }
      var ref = target ? Private$5.getDropRef(target.tabBar) : null;
      switch (zone) {
        case "root-all":
          this.addWidget(widget);
          break;
        case "root-top":
          this.addWidget(widget, { mode: "split-top" });
          break;
        case "root-left":
          this.addWidget(widget, { mode: "split-left" });
          break;
        case "root-right":
          this.addWidget(widget, { mode: "split-right" });
          break;
        case "root-bottom":
          this.addWidget(widget, { mode: "split-bottom" });
          break;
        case "widget-all":
          this.addWidget(widget, { mode: "tab-after", ref });
          break;
        case "widget-top":
          this.addWidget(widget, { mode: "split-top", ref });
          break;
        case "widget-left":
          this.addWidget(widget, { mode: "split-left", ref });
          break;
        case "widget-right":
          this.addWidget(widget, { mode: "split-right", ref });
          break;
        case "widget-bottom":
          this.addWidget(widget, { mode: "split-bottom", ref });
          break;
        case "widget-tab":
          this.addWidget(widget, { mode: "tab-after", ref });
          break;
        default:
          throw "unreachable";
      }
      event.dropAction = event.proposedAction;
      event.stopPropagation();
      this.activateWidget(widget);
    };
    DockPanel2.prototype._evtKeyDown = function(event) {
      event.preventDefault();
      event.stopPropagation();
      if (event.keyCode === 27) {
        this._releaseMouse();
        MessageLoop.postMessage(this, Private$5.LayoutModified);
      }
    };
    DockPanel2.prototype._evtMouseDown = function(event) {
      if (event.button !== 0) {
        return;
      }
      var layout = this.layout;
      var target = event.target;
      var handle = find(layout.handles(), function(handle2) {
        return handle2.contains(target);
      });
      if (!handle) {
        return;
      }
      event.preventDefault();
      event.stopPropagation();
      this._document.addEventListener("keydown", this, true);
      this._document.addEventListener("mouseup", this, true);
      this._document.addEventListener("mousemove", this, true);
      this._document.addEventListener("pointerup", this, true);
      this._document.addEventListener("pointermove", this, true);
      this._document.addEventListener("contextmenu", this, true);
      var rect = handle.getBoundingClientRect();
      var deltaX = event.clientX - rect.left;
      var deltaY = event.clientY - rect.top;
      var style = window.getComputedStyle(handle);
      var override = Drag.overrideCursor(style.cursor, this._document);
      this._pressData = { handle, deltaX, deltaY, override };
    };
    DockPanel2.prototype._evtMouseMove = function(event) {
      if (!this._pressData) {
        return;
      }
      event.preventDefault();
      event.stopPropagation();
      var rect = this.node.getBoundingClientRect();
      var xPos = event.clientX - rect.left - this._pressData.deltaX;
      var yPos = event.clientY - rect.top - this._pressData.deltaY;
      var layout = this.layout;
      layout.moveHandle(this._pressData.handle, xPos, yPos);
    };
    DockPanel2.prototype._evtMouseUp = function(event) {
      if (event.button !== 0) {
        return;
      }
      event.preventDefault();
      event.stopPropagation();
      this._releaseMouse();
      MessageLoop.postMessage(this, Private$5.LayoutModified);
    };
    DockPanel2.prototype._releaseMouse = function() {
      if (!this._pressData) {
        return;
      }
      this._pressData.override.dispose();
      this._pressData = null;
      this._document.removeEventListener("keydown", this, true);
      this._document.removeEventListener("mouseup", this, true);
      this._document.removeEventListener("mousemove", this, true);
      this._document.removeEventListener("pointerup", this, true);
      this._document.removeEventListener("pointermove", this, true);
      this._document.removeEventListener("contextmenu", this, true);
    };
    DockPanel2.prototype._showOverlay = function(clientX, clientY) {
      var _a = Private$5.findDropTarget(this, clientX, clientY, this._edges), zone = _a.zone, target = _a.target;
      if (zone === "invalid") {
        this.overlay.hide(100);
        return zone;
      }
      var top;
      var left;
      var right;
      var bottom;
      var box = ElementExt.boxSizing(this.node);
      var rect = this.node.getBoundingClientRect();
      switch (zone) {
        case "root-all":
          top = box.paddingTop;
          left = box.paddingLeft;
          right = box.paddingRight;
          bottom = box.paddingBottom;
          break;
        case "root-top":
          top = box.paddingTop;
          left = box.paddingLeft;
          right = box.paddingRight;
          bottom = rect.height * Private$5.GOLDEN_RATIO;
          break;
        case "root-left":
          top = box.paddingTop;
          left = box.paddingLeft;
          right = rect.width * Private$5.GOLDEN_RATIO;
          bottom = box.paddingBottom;
          break;
        case "root-right":
          top = box.paddingTop;
          left = rect.width * Private$5.GOLDEN_RATIO;
          right = box.paddingRight;
          bottom = box.paddingBottom;
          break;
        case "root-bottom":
          top = rect.height * Private$5.GOLDEN_RATIO;
          left = box.paddingLeft;
          right = box.paddingRight;
          bottom = box.paddingBottom;
          break;
        case "widget-all":
          top = target.top;
          left = target.left;
          right = target.right;
          bottom = target.bottom;
          break;
        case "widget-top":
          top = target.top;
          left = target.left;
          right = target.right;
          bottom = target.bottom + target.height / 2;
          break;
        case "widget-left":
          top = target.top;
          left = target.left;
          right = target.right + target.width / 2;
          bottom = target.bottom;
          break;
        case "widget-right":
          top = target.top;
          left = target.left + target.width / 2;
          right = target.right;
          bottom = target.bottom;
          break;
        case "widget-bottom":
          top = target.top + target.height / 2;
          left = target.left;
          right = target.right;
          bottom = target.bottom;
          break;
        case "widget-tab":
          var tabHeight = target.tabBar.node.getBoundingClientRect().height;
          top = target.top;
          left = target.left;
          right = target.right;
          bottom = target.bottom + target.height - tabHeight;
          break;
        default:
          throw "unreachable";
      }
      this.overlay.show({ top, left, right, bottom });
      return zone;
    };
    DockPanel2.prototype._createTabBar = function() {
      var tabBar = this._renderer.createTabBar(this._document);
      Private$5.isGeneratedTabBarProperty.set(tabBar, true);
      if (this._mode === "single-document") {
        tabBar.hide();
      }
      tabBar.tabsMovable = this._tabsMovable;
      tabBar.allowDeselect = false;
      tabBar.addButtonEnabled = this._addButtonEnabled;
      tabBar.removeBehavior = "select-previous-tab";
      tabBar.insertBehavior = "select-tab-if-needed";
      tabBar.tabMoved.connect(this._onTabMoved, this);
      tabBar.currentChanged.connect(this._onCurrentChanged, this);
      tabBar.tabCloseRequested.connect(this._onTabCloseRequested, this);
      tabBar.tabDetachRequested.connect(this._onTabDetachRequested, this);
      tabBar.tabActivateRequested.connect(this._onTabActivateRequested, this);
      tabBar.addRequested.connect(this._onTabAddRequested, this);
      return tabBar;
    };
    DockPanel2.prototype._createHandle = function() {
      return this._renderer.createHandle();
    };
    DockPanel2.prototype._onTabMoved = function() {
      MessageLoop.postMessage(this, Private$5.LayoutModified);
    };
    DockPanel2.prototype._onCurrentChanged = function(sender, args) {
      var previousTitle = args.previousTitle, currentTitle = args.currentTitle;
      if (previousTitle) {
        previousTitle.owner.hide();
      }
      if (currentTitle) {
        currentTitle.owner.show();
      }
      if (Platform.IS_EDGE || Platform.IS_IE) {
        MessageLoop.flush();
      }
      MessageLoop.postMessage(this, Private$5.LayoutModified);
    };
    DockPanel2.prototype._onTabAddRequested = function(sender) {
      this._addRequested.emit(sender);
    };
    DockPanel2.prototype._onTabActivateRequested = function(sender, args) {
      args.title.owner.activate();
    };
    DockPanel2.prototype._onTabCloseRequested = function(sender, args) {
      args.title.owner.close();
    };
    DockPanel2.prototype._onTabDetachRequested = function(sender, args) {
      var _this = this;
      if (this._drag) {
        return;
      }
      sender.releaseMouse();
      var title = args.title, tab = args.tab, clientX = args.clientX, clientY = args.clientY;
      var mimeData = new import_coreutils2.MimeData();
      var factory = function() {
        return title.owner;
      };
      mimeData.setData("application/vnd.lumino.widget-factory", factory);
      var dragImage = tab.cloneNode(true);
      this._drag = new Drag({
        document: this._document,
        mimeData,
        dragImage,
        proposedAction: "move",
        supportedActions: "move",
        source: this
      });
      tab.classList.add("lm-mod-hidden");
      tab.classList.add("p-mod-hidden");
      var cleanup = function() {
        _this._drag = null;
        tab.classList.remove("lm-mod-hidden");
        tab.classList.remove("p-mod-hidden");
      };
      this._drag.start(clientX, clientY).then(cleanup);
    };
    return DockPanel2;
  }(Widget)
);
(function(DockPanel2) {
  var Overlay = (
    /** @class */
    function() {
      function Overlay2() {
        this._timer = -1;
        this._hidden = true;
        this.node = document.createElement("div");
        this.node.classList.add("lm-DockPanel-overlay");
        this.node.classList.add("lm-mod-hidden");
        this.node.classList.add("p-DockPanel-overlay");
        this.node.classList.add("p-mod-hidden");
        this.node.style.position = "absolute";
      }
      Overlay2.prototype.show = function(geo) {
        var style = this.node.style;
        style.top = geo.top + "px";
        style.left = geo.left + "px";
        style.right = geo.right + "px";
        style.bottom = geo.bottom + "px";
        clearTimeout(this._timer);
        this._timer = -1;
        if (!this._hidden) {
          return;
        }
        this._hidden = false;
        this.node.classList.remove("lm-mod-hidden");
        this.node.classList.remove("p-mod-hidden");
      };
      Overlay2.prototype.hide = function(delay) {
        var _this = this;
        if (this._hidden) {
          return;
        }
        if (delay <= 0) {
          clearTimeout(this._timer);
          this._timer = -1;
          this._hidden = true;
          this.node.classList.add("lm-mod-hidden");
          this.node.classList.add("p-mod-hidden");
          return;
        }
        if (this._timer !== -1) {
          return;
        }
        this._timer = window.setTimeout(function() {
          _this._timer = -1;
          _this._hidden = true;
          _this.node.classList.add("lm-mod-hidden");
          _this.node.classList.add("p-mod-hidden");
        }, delay);
      };
      return Overlay2;
    }()
  );
  DockPanel2.Overlay = Overlay;
  var Renderer = (
    /** @class */
    function() {
      function Renderer2() {
      }
      Renderer2.prototype.createTabBar = function(document2) {
        var bar = new TabBar({ document: document2 });
        bar.addClass("lm-DockPanel-tabBar");
        bar.addClass("p-DockPanel-tabBar");
        return bar;
      };
      Renderer2.prototype.createHandle = function() {
        var handle = document.createElement("div");
        handle.className = "lm-DockPanel-handle";
        handle.classList.add("p-DockPanel-handle");
        return handle;
      };
      return Renderer2;
    }()
  );
  DockPanel2.Renderer = Renderer;
  DockPanel2.defaultRenderer = new Renderer();
})(DockPanel || (DockPanel = {}));
var Private$5;
(function(Private8) {
  Private8.GOLDEN_RATIO = 0.618;
  Private8.DEFAULT_EDGES = {
    /**
     * The size of the top edge dock zone for the root panel, in pixels.
     * This is different from the others to distinguish between the top
     * tab bar and the top root zone.
     */
    top: 12,
    /**
     * The size of the edge dock zone for the root panel, in pixels.
     */
    right: 40,
    /**
     * The size of the edge dock zone for the root panel, in pixels.
     */
    bottom: 40,
    /**
     * The size of the edge dock zone for the root panel, in pixels.
     */
    left: 40
  };
  Private8.LayoutModified = new ConflatableMessage("layout-modified");
  Private8.isGeneratedTabBarProperty = new AttachedProperty({
    name: "isGeneratedTabBar",
    create: function() {
      return false;
    }
  });
  function createSingleDocumentConfig(panel) {
    if (panel.isEmpty) {
      return { main: null };
    }
    var widgets = toArray(panel.widgets());
    var selected = panel.selectedWidgets().next();
    var currentIndex = selected ? widgets.indexOf(selected) : -1;
    return { main: { type: "tab-area", widgets, currentIndex } };
  }
  Private8.createSingleDocumentConfig = createSingleDocumentConfig;
  function findDropTarget(panel, clientX, clientY, edges) {
    if (!ElementExt.hitTest(panel.node, clientX, clientY)) {
      return { zone: "invalid", target: null };
    }
    var layout = panel.layout;
    if (layout.isEmpty) {
      return { zone: "root-all", target: null };
    }
    if (panel.mode === "multiple-document") {
      var panelRect = panel.node.getBoundingClientRect();
      var pl = clientX - panelRect.left + 1;
      var pt = clientY - panelRect.top + 1;
      var pr = panelRect.right - clientX;
      var pb = panelRect.bottom - clientY;
      var pd = Math.min(pt, pr, pb, pl);
      switch (pd) {
        case pt:
          if (pt < edges.top) {
            return { zone: "root-top", target: null };
          }
          break;
        case pr:
          if (pr < edges.right) {
            return { zone: "root-right", target: null };
          }
          break;
        case pb:
          if (pb < edges.bottom) {
            return { zone: "root-bottom", target: null };
          }
          break;
        case pl:
          if (pl < edges.left) {
            return { zone: "root-left", target: null };
          }
          break;
        default:
          throw "unreachable";
      }
    }
    var target = layout.hitTestTabAreas(clientX, clientY);
    if (!target) {
      return { zone: "invalid", target: null };
    }
    if (panel.mode === "single-document") {
      return { zone: "widget-all", target };
    }
    var al = target.x - target.left + 1;
    var at = target.y - target.top + 1;
    var ar = target.left + target.width - target.x;
    var ab = target.top + target.height - target.y;
    var tabHeight = target.tabBar.node.getBoundingClientRect().height;
    if (at < tabHeight) {
      return { zone: "widget-tab", target };
    }
    var rx = Math.round(target.width / 3);
    var ry = Math.round(target.height / 3);
    if (al > rx && ar > rx && at > ry && ab > ry) {
      return { zone: "widget-all", target };
    }
    al /= rx;
    at /= ry;
    ar /= rx;
    ab /= ry;
    var ad = Math.min(al, at, ar, ab);
    var zone;
    switch (ad) {
      case al:
        zone = "widget-left";
        break;
      case at:
        zone = "widget-top";
        break;
      case ar:
        zone = "widget-right";
        break;
      case ab:
        zone = "widget-bottom";
        break;
      default:
        throw "unreachable";
    }
    return { zone, target };
  }
  Private8.findDropTarget = findDropTarget;
  function getDropRef(tabBar) {
    if (tabBar.titles.length === 0) {
      return null;
    }
    if (tabBar.currentTitle) {
      return tabBar.currentTitle.owner;
    }
    return tabBar.titles[tabBar.titles.length - 1].owner;
  }
  Private8.getDropRef = getDropRef;
})(Private$5 || (Private$5 = {}));
var FocusTracker = (
  /** @class */
  function() {
    function FocusTracker2() {
      this._counter = 0;
      this._widgets = [];
      this._activeWidget = null;
      this._currentWidget = null;
      this._numbers = /* @__PURE__ */ new Map();
      this._nodes = /* @__PURE__ */ new Map();
      this._activeChanged = new Signal(this);
      this._currentChanged = new Signal(this);
    }
    FocusTracker2.prototype.dispose = function() {
      var _this = this;
      if (this._counter < 0) {
        return;
      }
      this._counter = -1;
      Signal.clearData(this);
      each(this._widgets, function(w) {
        w.node.removeEventListener("focus", _this, true);
        w.node.removeEventListener("blur", _this, true);
      });
      this._activeWidget = null;
      this._currentWidget = null;
      this._nodes.clear();
      this._numbers.clear();
      this._widgets.length = 0;
    };
    Object.defineProperty(FocusTracker2.prototype, "currentChanged", {
      /**
       * A signal emitted when the current widget has changed.
       */
      get: function() {
        return this._currentChanged;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(FocusTracker2.prototype, "activeChanged", {
      /**
       * A signal emitted when the active widget has changed.
       */
      get: function() {
        return this._activeChanged;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(FocusTracker2.prototype, "isDisposed", {
      /**
       * A flag indicating whether the tracker is disposed.
       */
      get: function() {
        return this._counter < 0;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(FocusTracker2.prototype, "currentWidget", {
      /**
       * The current widget in the tracker.
       *
       * #### Notes
       * The current widget is the widget among the tracked widgets which
       * has the *descendant node* which has most recently been focused.
       *
       * The current widget will not be updated if the node loses focus. It
       * will only be updated when a different tracked widget gains focus.
       *
       * If the current widget is removed from the tracker, the previous
       * current widget will be restored.
       *
       * This behavior is intended to follow a user's conceptual model of
       * a semantically "current" widget, where the "last thing of type X"
       * to be interacted with is the "current instance of X", regardless
       * of whether that instance still has focus.
       */
      get: function() {
        return this._currentWidget;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(FocusTracker2.prototype, "activeWidget", {
      /**
       * The active widget in the tracker.
       *
       * #### Notes
       * The active widget is the widget among the tracked widgets which
       * has the *descendant node* which is currently focused.
       */
      get: function() {
        return this._activeWidget;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(FocusTracker2.prototype, "widgets", {
      /**
       * A read only array of the widgets being tracked.
       */
      get: function() {
        return this._widgets;
      },
      enumerable: true,
      configurable: true
    });
    FocusTracker2.prototype.focusNumber = function(widget) {
      var n = this._numbers.get(widget);
      return n === void 0 ? -1 : n;
    };
    FocusTracker2.prototype.has = function(widget) {
      return this._numbers.has(widget);
    };
    FocusTracker2.prototype.add = function(widget) {
      if (this._numbers.has(widget)) {
        return;
      }
      var focused = widget.node.contains(document.activeElement);
      var n = focused ? this._counter++ : -1;
      this._widgets.push(widget);
      this._numbers.set(widget, n);
      this._nodes.set(widget.node, widget);
      widget.node.addEventListener("focus", this, true);
      widget.node.addEventListener("blur", this, true);
      widget.disposed.connect(this._onWidgetDisposed, this);
      if (focused) {
        this._setWidgets(widget, widget);
      }
    };
    FocusTracker2.prototype.remove = function(widget) {
      var _this = this;
      if (!this._numbers.has(widget)) {
        return;
      }
      widget.disposed.disconnect(this._onWidgetDisposed, this);
      widget.node.removeEventListener("focus", this, true);
      widget.node.removeEventListener("blur", this, true);
      ArrayExt.removeFirstOf(this._widgets, widget);
      this._nodes.delete(widget.node);
      this._numbers.delete(widget);
      if (this._currentWidget !== widget) {
        return;
      }
      var valid = filter(this._widgets, function(w) {
        return _this._numbers.get(w) !== -1;
      });
      var previous = max(valid, function(first, second) {
        var a = _this._numbers.get(first);
        var b = _this._numbers.get(second);
        return a - b;
      }) || null;
      this._setWidgets(previous, null);
    };
    FocusTracker2.prototype.handleEvent = function(event) {
      switch (event.type) {
        case "focus":
          this._evtFocus(event);
          break;
        case "blur":
          this._evtBlur(event);
          break;
      }
    };
    FocusTracker2.prototype._setWidgets = function(current, active) {
      var oldCurrent = this._currentWidget;
      this._currentWidget = current;
      var oldActive = this._activeWidget;
      this._activeWidget = active;
      if (oldCurrent !== current) {
        this._currentChanged.emit({ oldValue: oldCurrent, newValue: current });
      }
      if (oldActive !== active) {
        this._activeChanged.emit({ oldValue: oldActive, newValue: active });
      }
    };
    FocusTracker2.prototype._evtFocus = function(event) {
      var widget = this._nodes.get(event.currentTarget);
      if (widget !== this._currentWidget) {
        this._numbers.set(widget, this._counter++);
      }
      this._setWidgets(widget, widget);
    };
    FocusTracker2.prototype._evtBlur = function(event) {
      var widget = this._nodes.get(event.currentTarget);
      var focusTarget = event.relatedTarget;
      if (!focusTarget) {
        this._setWidgets(this._currentWidget, null);
        return;
      }
      if (widget.node.contains(focusTarget)) {
        return;
      }
      if (!find(this._widgets, function(w) {
        return w.node.contains(focusTarget);
      })) {
        this._setWidgets(this._currentWidget, null);
        return;
      }
    };
    FocusTracker2.prototype._onWidgetDisposed = function(sender) {
      this.remove(sender);
    };
    return FocusTracker2;
  }()
);
var GridLayout = (
  /** @class */
  function(_super) {
    __extends3(GridLayout2, _super);
    function GridLayout2(options) {
      if (options === void 0) {
        options = {};
      }
      var _this = _super.call(this, options) || this;
      _this._dirty = false;
      _this._rowSpacing = 4;
      _this._columnSpacing = 4;
      _this._items = [];
      _this._rowStarts = [];
      _this._columnStarts = [];
      _this._rowSizers = [new BoxSizer()];
      _this._columnSizers = [new BoxSizer()];
      _this._box = null;
      if (options.rowCount !== void 0) {
        Private$4.reallocSizers(_this._rowSizers, options.rowCount);
      }
      if (options.columnCount !== void 0) {
        Private$4.reallocSizers(_this._columnSizers, options.columnCount);
      }
      if (options.rowSpacing !== void 0) {
        _this._rowSpacing = Private$4.clampValue(options.rowSpacing);
      }
      if (options.columnSpacing !== void 0) {
        _this._columnSpacing = Private$4.clampValue(options.columnSpacing);
      }
      return _this;
    }
    GridLayout2.prototype.dispose = function() {
      each(this._items, function(item) {
        var widget = item.widget;
        item.dispose();
        widget.dispose();
      });
      this._box = null;
      this._items.length = 0;
      this._rowStarts.length = 0;
      this._rowSizers.length = 0;
      this._columnStarts.length = 0;
      this._columnSizers.length = 0;
      _super.prototype.dispose.call(this);
    };
    Object.defineProperty(GridLayout2.prototype, "rowCount", {
      /**
       * Get the number of rows in the layout.
       */
      get: function() {
        return this._rowSizers.length;
      },
      /**
       * Set the number of rows in the layout.
       *
       * #### Notes
       * The minimum row count is `1`.
       */
      set: function(value) {
        if (value === this.rowCount) {
          return;
        }
        Private$4.reallocSizers(this._rowSizers, value);
        if (this.parent) {
          this.parent.fit();
        }
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(GridLayout2.prototype, "columnCount", {
      /**
       * Get the number of columns in the layout.
       */
      get: function() {
        return this._columnSizers.length;
      },
      /**
       * Set the number of columns in the layout.
       *
       * #### Notes
       * The minimum column count is `1`.
       */
      set: function(value) {
        if (value === this.columnCount) {
          return;
        }
        Private$4.reallocSizers(this._columnSizers, value);
        if (this.parent) {
          this.parent.fit();
        }
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(GridLayout2.prototype, "rowSpacing", {
      /**
       * Get the row spacing for the layout.
       */
      get: function() {
        return this._rowSpacing;
      },
      /**
       * Set the row spacing for the layout.
       */
      set: function(value) {
        value = Private$4.clampValue(value);
        if (this._rowSpacing === value) {
          return;
        }
        this._rowSpacing = value;
        if (this.parent) {
          this.parent.fit();
        }
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(GridLayout2.prototype, "columnSpacing", {
      /**
       * Get the column spacing for the layout.
       */
      get: function() {
        return this._columnSpacing;
      },
      /**
       * Set the col spacing for the layout.
       */
      set: function(value) {
        value = Private$4.clampValue(value);
        if (this._columnSpacing === value) {
          return;
        }
        this._columnSpacing = value;
        if (this.parent) {
          this.parent.fit();
        }
      },
      enumerable: true,
      configurable: true
    });
    GridLayout2.prototype.rowStretch = function(index) {
      var sizer = this._rowSizers[index];
      return sizer ? sizer.stretch : -1;
    };
    GridLayout2.prototype.setRowStretch = function(index, value) {
      var sizer = this._rowSizers[index];
      if (!sizer) {
        return;
      }
      value = Private$4.clampValue(value);
      if (sizer.stretch === value) {
        return;
      }
      sizer.stretch = value;
      if (this.parent) {
        this.parent.update();
      }
    };
    GridLayout2.prototype.columnStretch = function(index) {
      var sizer = this._columnSizers[index];
      return sizer ? sizer.stretch : -1;
    };
    GridLayout2.prototype.setColumnStretch = function(index, value) {
      var sizer = this._columnSizers[index];
      if (!sizer) {
        return;
      }
      value = Private$4.clampValue(value);
      if (sizer.stretch === value) {
        return;
      }
      sizer.stretch = value;
      if (this.parent) {
        this.parent.update();
      }
    };
    GridLayout2.prototype.iter = function() {
      return map(this._items, function(item) {
        return item.widget;
      });
    };
    GridLayout2.prototype.addWidget = function(widget) {
      var i = ArrayExt.findFirstIndex(this._items, function(it) {
        return it.widget === widget;
      });
      if (i !== -1) {
        return;
      }
      this._items.push(new LayoutItem(widget));
      if (this.parent) {
        this.attachWidget(widget);
      }
    };
    GridLayout2.prototype.removeWidget = function(widget) {
      var i = ArrayExt.findFirstIndex(this._items, function(it) {
        return it.widget === widget;
      });
      if (i === -1) {
        return;
      }
      var item = ArrayExt.removeAt(this._items, i);
      if (this.parent) {
        this.detachWidget(widget);
      }
      item.dispose();
    };
    GridLayout2.prototype.init = function() {
      var _this = this;
      _super.prototype.init.call(this);
      each(this, function(widget) {
        _this.attachWidget(widget);
      });
    };
    GridLayout2.prototype.attachWidget = function(widget) {
      if (this.parent.isAttached) {
        MessageLoop.sendMessage(widget, Widget.Msg.BeforeAttach);
      }
      this.parent.node.appendChild(widget.node);
      if (this.parent.isAttached) {
        MessageLoop.sendMessage(widget, Widget.Msg.AfterAttach);
      }
      this.parent.fit();
    };
    GridLayout2.prototype.detachWidget = function(widget) {
      if (this.parent.isAttached) {
        MessageLoop.sendMessage(widget, Widget.Msg.BeforeDetach);
      }
      this.parent.node.removeChild(widget.node);
      if (this.parent.isAttached) {
        MessageLoop.sendMessage(widget, Widget.Msg.AfterDetach);
      }
      this.parent.fit();
    };
    GridLayout2.prototype.onBeforeShow = function(msg) {
      _super.prototype.onBeforeShow.call(this, msg);
      this.parent.update();
    };
    GridLayout2.prototype.onBeforeAttach = function(msg) {
      _super.prototype.onBeforeAttach.call(this, msg);
      this.parent.fit();
    };
    GridLayout2.prototype.onChildShown = function(msg) {
      this.parent.fit();
    };
    GridLayout2.prototype.onChildHidden = function(msg) {
      this.parent.fit();
    };
    GridLayout2.prototype.onResize = function(msg) {
      if (this.parent.isVisible) {
        this._update(msg.width, msg.height);
      }
    };
    GridLayout2.prototype.onUpdateRequest = function(msg) {
      if (this.parent.isVisible) {
        this._update(-1, -1);
      }
    };
    GridLayout2.prototype.onFitRequest = function(msg) {
      if (this.parent.isAttached) {
        this._fit();
      }
    };
    GridLayout2.prototype._fit = function() {
      for (var i = 0, n = this.rowCount; i < n; ++i) {
        this._rowSizers[i].minSize = 0;
      }
      for (var i = 0, n = this.columnCount; i < n; ++i) {
        this._columnSizers[i].minSize = 0;
      }
      var items = this._items.filter(function(it) {
        return !it.isHidden;
      });
      for (var i = 0, n = items.length; i < n; ++i) {
        items[i].fit();
      }
      var maxRow = this.rowCount - 1;
      var maxCol = this.columnCount - 1;
      items.sort(Private$4.rowSpanCmp);
      for (var i = 0, n = items.length; i < n; ++i) {
        var item = items[i];
        var config = GridLayout2.getCellConfig(item.widget);
        var r1 = Math.min(config.row, maxRow);
        var r2 = Math.min(config.row + config.rowSpan - 1, maxRow);
        Private$4.distributeMin(this._rowSizers, r1, r2, item.minHeight);
      }
      items.sort(Private$4.columnSpanCmp);
      for (var i = 0, n = items.length; i < n; ++i) {
        var item = items[i];
        var config = GridLayout2.getCellConfig(item.widget);
        var c1 = Math.min(config.column, maxCol);
        var c2 = Math.min(config.column + config.columnSpan - 1, maxCol);
        Private$4.distributeMin(this._columnSizers, c1, c2, item.minWidth);
      }
      if (this.fitPolicy === "set-no-constraint") {
        MessageLoop.sendMessage(this.parent, Widget.Msg.UpdateRequest);
        return;
      }
      var minH = maxRow * this._rowSpacing;
      var minW = maxCol * this._columnSpacing;
      for (var i = 0, n = this.rowCount; i < n; ++i) {
        minH += this._rowSizers[i].minSize;
      }
      for (var i = 0, n = this.columnCount; i < n; ++i) {
        minW += this._columnSizers[i].minSize;
      }
      var box = this._box = ElementExt.boxSizing(this.parent.node);
      minW += box.horizontalSum;
      minH += box.verticalSum;
      var style = this.parent.node.style;
      style.minWidth = minW + "px";
      style.minHeight = minH + "px";
      this._dirty = true;
      if (this.parent.parent) {
        MessageLoop.sendMessage(this.parent.parent, Widget.Msg.FitRequest);
      }
      if (this._dirty) {
        MessageLoop.sendMessage(this.parent, Widget.Msg.UpdateRequest);
      }
    };
    GridLayout2.prototype._update = function(offsetWidth, offsetHeight) {
      this._dirty = false;
      if (offsetWidth < 0) {
        offsetWidth = this.parent.node.offsetWidth;
      }
      if (offsetHeight < 0) {
        offsetHeight = this.parent.node.offsetHeight;
      }
      if (!this._box) {
        this._box = ElementExt.boxSizing(this.parent.node);
      }
      var top = this._box.paddingTop;
      var left = this._box.paddingLeft;
      var width = offsetWidth - this._box.horizontalSum;
      var height = offsetHeight - this._box.verticalSum;
      var maxRow = this.rowCount - 1;
      var maxCol = this.columnCount - 1;
      var fixedRowSpace = maxRow * this._rowSpacing;
      var fixedColSpace = maxCol * this._columnSpacing;
      BoxEngine.calc(this._rowSizers, Math.max(0, height - fixedRowSpace));
      BoxEngine.calc(this._columnSizers, Math.max(0, width - fixedColSpace));
      for (var i = 0, pos = top, n = this.rowCount; i < n; ++i) {
        this._rowStarts[i] = pos;
        pos += this._rowSizers[i].size + this._rowSpacing;
      }
      for (var i = 0, pos = left, n = this.columnCount; i < n; ++i) {
        this._columnStarts[i] = pos;
        pos += this._columnSizers[i].size + this._columnSpacing;
      }
      for (var i = 0, n = this._items.length; i < n; ++i) {
        var item = this._items[i];
        if (item.isHidden) {
          continue;
        }
        var config = GridLayout2.getCellConfig(item.widget);
        var r1 = Math.min(config.row, maxRow);
        var c1 = Math.min(config.column, maxCol);
        var r2 = Math.min(config.row + config.rowSpan - 1, maxRow);
        var c2 = Math.min(config.column + config.columnSpan - 1, maxCol);
        var x = this._columnStarts[c1];
        var y = this._rowStarts[r1];
        var w = this._columnStarts[c2] + this._columnSizers[c2].size - x;
        var h2 = this._rowStarts[r2] + this._rowSizers[r2].size - y;
        item.update(x, y, w, h2);
      }
    };
    return GridLayout2;
  }(Layout)
);
(function(GridLayout2) {
  function getCellConfig(widget) {
    return Private$4.cellConfigProperty.get(widget);
  }
  GridLayout2.getCellConfig = getCellConfig;
  function setCellConfig(widget, value) {
    Private$4.cellConfigProperty.set(widget, Private$4.normalizeConfig(value));
  }
  GridLayout2.setCellConfig = setCellConfig;
})(GridLayout || (GridLayout = {}));
var Private$4;
(function(Private8) {
  Private8.cellConfigProperty = new AttachedProperty({
    name: "cellConfig",
    create: function() {
      return { row: 0, column: 0, rowSpan: 1, columnSpan: 1 };
    },
    changed: onChildCellConfigChanged
  });
  function normalizeConfig(config) {
    var row = Math.max(0, Math.floor(config.row || 0));
    var column = Math.max(0, Math.floor(config.column || 0));
    var rowSpan = Math.max(1, Math.floor(config.rowSpan || 0));
    var columnSpan = Math.max(1, Math.floor(config.columnSpan || 0));
    return { row, column, rowSpan, columnSpan };
  }
  Private8.normalizeConfig = normalizeConfig;
  function clampValue(value) {
    return Math.max(0, Math.floor(value));
  }
  Private8.clampValue = clampValue;
  function rowSpanCmp(a, b) {
    var c1 = Private8.cellConfigProperty.get(a.widget);
    var c2 = Private8.cellConfigProperty.get(b.widget);
    return c1.rowSpan - c2.rowSpan;
  }
  Private8.rowSpanCmp = rowSpanCmp;
  function columnSpanCmp(a, b) {
    var c1 = Private8.cellConfigProperty.get(a.widget);
    var c2 = Private8.cellConfigProperty.get(b.widget);
    return c1.columnSpan - c2.columnSpan;
  }
  Private8.columnSpanCmp = columnSpanCmp;
  function reallocSizers(sizers, count) {
    count = Math.max(1, Math.floor(count));
    while (sizers.length < count) {
      sizers.push(new BoxSizer());
    }
    if (sizers.length > count) {
      sizers.length = count;
    }
  }
  Private8.reallocSizers = reallocSizers;
  function distributeMin(sizers, i1, i2, minSize) {
    if (i2 < i1) {
      return;
    }
    if (i1 === i2) {
      var sizer = sizers[i1];
      sizer.minSize = Math.max(sizer.minSize, minSize);
      return;
    }
    var totalMin = 0;
    for (var i = i1; i <= i2; ++i) {
      totalMin += sizers[i].minSize;
    }
    if (totalMin >= minSize) {
      return;
    }
    var portion = (minSize - totalMin) / (i2 - i1 + 1);
    for (var i = i1; i <= i2; ++i) {
      sizers[i].minSize += portion;
    }
  }
  Private8.distributeMin = distributeMin;
  function onChildCellConfigChanged(child) {
    if (child.parent && child.parent.layout instanceof GridLayout) {
      child.parent.fit();
    }
  }
})(Private$4 || (Private$4 = {}));
var MenuBar = (
  /** @class */
  function(_super) {
    __extends3(MenuBar2, _super);
    function MenuBar2(options) {
      if (options === void 0) {
        options = {};
      }
      var _this = _super.call(this, { node: Private$3.createNode() }) || this;
      _this._activeIndex = -1;
      _this._tabFocusIndex = 0;
      _this._menus = [];
      _this._childMenu = null;
      _this.addClass("lm-MenuBar");
      _this.addClass("p-MenuBar");
      _this.setFlag(Widget.Flag.DisallowLayout);
      _this.renderer = options.renderer || MenuBar2.defaultRenderer;
      _this._forceItemsPosition = options.forceItemsPosition || {
        forceX: true,
        forceY: true
      };
      return _this;
    }
    MenuBar2.prototype.dispose = function() {
      this._closeChildMenu();
      this._menus.length = 0;
      _super.prototype.dispose.call(this);
    };
    Object.defineProperty(MenuBar2.prototype, "childMenu", {
      /**
       * The child menu of the menu bar.
       *
       * #### Notes
       * This will be `null` if the menu bar does not have an open menu.
       */
      get: function() {
        return this._childMenu;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(MenuBar2.prototype, "contentNode", {
      /**
       * Get the menu bar content node.
       *
       * #### Notes
       * This is the node which holds the menu title nodes.
       *
       * Modifying this node directly can lead to undefined behavior.
       */
      get: function() {
        return this.node.getElementsByClassName("lm-MenuBar-content")[0];
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(MenuBar2.prototype, "activeMenu", {
      /**
       * Get the currently active menu.
       */
      get: function() {
        return this._menus[this._activeIndex] || null;
      },
      /**
       * Set the currently active menu.
       *
       * #### Notes
       * If the menu does not exist, the menu will be set to `null`.
       */
      set: function(value) {
        this.activeIndex = value ? this._menus.indexOf(value) : -1;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(MenuBar2.prototype, "activeIndex", {
      /**
       * Get the index of the currently active menu.
       *
       * #### Notes
       * This will be `-1` if no menu is active.
       */
      get: function() {
        return this._activeIndex;
      },
      /**
       * Set the index of the currently active menu.
       *
       * #### Notes
       * If the menu cannot be activated, the index will be set to `-1`.
       */
      set: function(value) {
        if (value < 0 || value >= this._menus.length) {
          value = -1;
        }
        if (this._activeIndex === value) {
          return;
        }
        this._activeIndex = value;
        if (value !== -1) {
          this._tabFocusIndex = value;
        }
        if (this._activeIndex >= 0 && this.contentNode.childNodes[this._activeIndex]) {
          this.contentNode.childNodes[this._activeIndex].focus();
        }
        this.update();
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(MenuBar2.prototype, "menus", {
      /**
       * A read-only array of the menus in the menu bar.
       */
      get: function() {
        return this._menus;
      },
      enumerable: true,
      configurable: true
    });
    MenuBar2.prototype.openActiveMenu = function() {
      if (this._activeIndex === -1) {
        return;
      }
      this._openChildMenu();
      if (this._childMenu) {
        this._childMenu.activeIndex = -1;
        this._childMenu.activateNextItem();
      }
    };
    MenuBar2.prototype.addMenu = function(menu) {
      this.insertMenu(this._menus.length, menu);
    };
    MenuBar2.prototype.insertMenu = function(index, menu) {
      this._closeChildMenu();
      var i = this._menus.indexOf(menu);
      var j = Math.max(0, Math.min(index, this._menus.length));
      if (i === -1) {
        ArrayExt.insert(this._menus, j, menu);
        menu.addClass("lm-MenuBar-menu");
        menu.addClass("p-MenuBar-menu");
        menu.aboutToClose.connect(this._onMenuAboutToClose, this);
        menu.menuRequested.connect(this._onMenuMenuRequested, this);
        menu.title.changed.connect(this._onTitleChanged, this);
        this.update();
        return;
      }
      if (j === this._menus.length) {
        j--;
      }
      if (i === j) {
        return;
      }
      ArrayExt.move(this._menus, i, j);
      this.update();
    };
    MenuBar2.prototype.removeMenu = function(menu) {
      this.removeMenuAt(this._menus.indexOf(menu));
    };
    MenuBar2.prototype.removeMenuAt = function(index) {
      this._closeChildMenu();
      var menu = ArrayExt.removeAt(this._menus, index);
      if (!menu) {
        return;
      }
      menu.aboutToClose.disconnect(this._onMenuAboutToClose, this);
      menu.menuRequested.disconnect(this._onMenuMenuRequested, this);
      menu.title.changed.disconnect(this._onTitleChanged, this);
      menu.removeClass("lm-MenuBar-menu");
      menu.removeClass("p-MenuBar-menu");
      this.update();
    };
    MenuBar2.prototype.clearMenus = function() {
      if (this._menus.length === 0) {
        return;
      }
      this._closeChildMenu();
      for (var _i = 0, _a = this._menus; _i < _a.length; _i++) {
        var menu = _a[_i];
        menu.aboutToClose.disconnect(this._onMenuAboutToClose, this);
        menu.menuRequested.disconnect(this._onMenuMenuRequested, this);
        menu.title.changed.disconnect(this._onTitleChanged, this);
        menu.removeClass("lm-MenuBar-menu");
        menu.removeClass("p-MenuBar-menu");
      }
      this._menus.length = 0;
      this.update();
    };
    MenuBar2.prototype.handleEvent = function(event) {
      switch (event.type) {
        case "keydown":
          this._evtKeyDown(event);
          break;
        case "mousedown":
          this._evtMouseDown(event);
          break;
        case "mousemove":
          this._evtMouseMove(event);
          break;
        case "mouseleave":
          this._evtMouseLeave(event);
          break;
        case "contextmenu":
          event.preventDefault();
          event.stopPropagation();
          break;
      }
    };
    MenuBar2.prototype.onBeforeAttach = function(msg) {
      this.node.addEventListener("keydown", this);
      this.node.addEventListener("mousedown", this);
      this.node.addEventListener("mousemove", this);
      this.node.addEventListener("mouseleave", this);
      this.node.addEventListener("contextmenu", this);
    };
    MenuBar2.prototype.onAfterDetach = function(msg) {
      this.node.removeEventListener("keydown", this);
      this.node.removeEventListener("mousedown", this);
      this.node.removeEventListener("mousemove", this);
      this.node.removeEventListener("mouseleave", this);
      this.node.removeEventListener("contextmenu", this);
      this._closeChildMenu();
    };
    MenuBar2.prototype.onActivateRequest = function(msg) {
      if (this.isAttached) {
        this.activeIndex = 0;
      }
    };
    MenuBar2.prototype.onUpdateRequest = function(msg) {
      var _this = this;
      var menus = this._menus;
      var renderer = this.renderer;
      var activeIndex = this._activeIndex;
      var tabFocusIndex = this._tabFocusIndex >= 0 && this._tabFocusIndex < menus.length ? this._tabFocusIndex : 0;
      var content = new Array(menus.length);
      var _loop_1 = function(i2, n2) {
        var title = menus[i2].title;
        var active = i2 === activeIndex;
        if (active && menus[i2].items.length == 0) {
          active = false;
        }
        content[i2] = renderer.renderItem({
          title,
          active,
          tabbable: i2 === tabFocusIndex,
          onfocus: function() {
            _this.activeIndex = i2;
          }
        });
      };
      for (var i = 0, n = menus.length; i < n; ++i) {
        _loop_1(i);
      }
      VirtualDOM.render(content, this.contentNode);
    };
    MenuBar2.prototype._evtKeyDown = function(event) {
      var kc = event.keyCode;
      if (kc === 9) {
        this.activeIndex = -1;
        return;
      }
      event.preventDefault();
      event.stopPropagation();
      if (kc === 13 || kc === 32 || kc === 38 || kc === 40) {
        this.openActiveMenu();
        return;
      }
      if (kc === 27) {
        this._closeChildMenu();
        this.activeIndex = -1;
        this.node.blur();
        return;
      }
      if (kc === 37) {
        var i = this._activeIndex;
        var n = this._menus.length;
        this.activeIndex = i === 0 ? n - 1 : i - 1;
        return;
      }
      if (kc === 39) {
        var i = this._activeIndex;
        var n = this._menus.length;
        this.activeIndex = i === n - 1 ? 0 : i + 1;
        return;
      }
      var key = getKeyboardLayout().keyForKeydownEvent(event);
      if (!key) {
        return;
      }
      var start = this._activeIndex + 1;
      var result = Private$3.findMnemonic(this._menus, key, start);
      if (result.index !== -1 && !result.multiple) {
        this.activeIndex = result.index;
        this.openActiveMenu();
      } else if (result.index !== -1) {
        this.activeIndex = result.index;
      } else if (result.auto !== -1) {
        this.activeIndex = result.auto;
      }
    };
    MenuBar2.prototype._evtMouseDown = function(event) {
      if (!ElementExt.hitTest(this.node, event.clientX, event.clientY)) {
        return;
      }
      event.preventDefault();
      event.stopPropagation();
      event.stopImmediatePropagation();
      var index = ArrayExt.findFirstIndex(this.contentNode.children, function(node) {
        return ElementExt.hitTest(node, event.clientX, event.clientY);
      });
      if (index === -1) {
        this._closeChildMenu();
        return;
      }
      if (event.button !== 0) {
        return;
      }
      if (this._childMenu) {
        this._closeChildMenu();
        this.activeIndex = index;
      } else {
        var position = this._positionForMenu(index);
        Menu.saveWindowData();
        this.activeIndex = index;
        this._openChildMenu(position);
      }
    };
    MenuBar2.prototype._evtMouseMove = function(event) {
      var index = ArrayExt.findFirstIndex(this.contentNode.children, function(node) {
        return ElementExt.hitTest(node, event.clientX, event.clientY);
      });
      if (index === this._activeIndex) {
        return;
      }
      if (index === -1 && this._childMenu) {
        return;
      }
      var position = this._positionForMenu(index);
      Menu.saveWindowData();
      this.activeIndex = index;
      if (this._childMenu) {
        this._openChildMenu(position);
      }
    };
    MenuBar2.prototype._positionForMenu = function(index) {
      var itemNode = this.contentNode.children[index];
      var _a = itemNode.getBoundingClientRect(), left = _a.left, bottom = _a.bottom;
      return {
        top: bottom,
        left
      };
    };
    MenuBar2.prototype._evtMouseLeave = function(event) {
      if (!this._childMenu) {
        this.activeIndex = -1;
      }
    };
    MenuBar2.prototype._openChildMenu = function(options) {
      var _a;
      if (options === void 0) {
        options = {};
      }
      var newMenu = this.activeMenu;
      if (!newMenu) {
        this._closeChildMenu();
        return;
      }
      var oldMenu = this._childMenu;
      if (oldMenu === newMenu) {
        return;
      }
      this._childMenu = newMenu;
      if (oldMenu) {
        oldMenu.close();
      } else {
        document.addEventListener("mousedown", this, true);
      }
      MessageLoop.sendMessage(this, Widget.Msg.UpdateRequest);
      var left = options.left, top = options.top;
      if (typeof left === "undefined" || typeof top === "undefined") {
        _a = this._positionForMenu(this._activeIndex), left = _a.left, top = _a.top;
      }
      if (!oldMenu) {
        this.addClass("lm-mod-active");
        this.addClass("p-mod-active");
      }
      if (newMenu.items.length > 0) {
        newMenu.open(left, top, this._forceItemsPosition);
      }
    };
    MenuBar2.prototype._closeChildMenu = function() {
      if (!this._childMenu) {
        return;
      }
      this.removeClass("lm-mod-active");
      this.removeClass("p-mod-active");
      document.removeEventListener("mousedown", this, true);
      var menu = this._childMenu;
      this._childMenu = null;
      menu.close();
      this.activeIndex = -1;
    };
    MenuBar2.prototype._onMenuAboutToClose = function(sender) {
      if (sender !== this._childMenu) {
        return;
      }
      this.removeClass("lm-mod-active");
      this.removeClass("p-mod-active");
      document.removeEventListener("mousedown", this, true);
      this._childMenu = null;
      this.activeIndex = -1;
    };
    MenuBar2.prototype._onMenuMenuRequested = function(sender, args) {
      if (sender !== this._childMenu) {
        return;
      }
      var i = this._activeIndex;
      var n = this._menus.length;
      switch (args) {
        case "next":
          this.activeIndex = i === n - 1 ? 0 : i + 1;
          break;
        case "previous":
          this.activeIndex = i === 0 ? n - 1 : i - 1;
          break;
      }
      this.openActiveMenu();
    };
    MenuBar2.prototype._onTitleChanged = function() {
      this.update();
    };
    return MenuBar2;
  }(Widget)
);
(function(MenuBar2) {
  var Renderer = (
    /** @class */
    function() {
      function Renderer2() {
      }
      Renderer2.prototype.renderItem = function(data) {
        var className = this.createItemClass(data);
        var dataset = this.createItemDataset(data);
        var aria = this.createItemARIA(data);
        return h.li(__assign2({
          className,
          dataset,
          tabindex: data.tabbable ? "0" : "-1",
          onfocus: data.onfocus
        }, aria), this.renderIcon(data), this.renderLabel(data));
      };
      Renderer2.prototype.renderIcon = function(data) {
        var className = this.createIconClass(data);
        if (typeof data.title.icon === "string") {
          return h.div({ className }, data.title.iconLabel);
        }
        return h.div({ className }, data.title.icon, data.title.iconLabel);
      };
      Renderer2.prototype.renderLabel = function(data) {
        var content = this.formatLabel(data);
        return h.div({
          className: "lm-MenuBar-itemLabel p-MenuBar-itemLabel"
          /* </DEPRECATED> */
        }, content);
      };
      Renderer2.prototype.createItemClass = function(data) {
        var name = "lm-MenuBar-item";
        name += " p-MenuBar-item";
        if (data.title.className) {
          name += " " + data.title.className;
        }
        if (data.active) {
          name += " lm-mod-active";
          name += " p-mod-active";
        }
        return name;
      };
      Renderer2.prototype.createItemDataset = function(data) {
        return data.title.dataset;
      };
      Renderer2.prototype.createItemARIA = function(data) {
        return { role: "menuitem", "aria-haspopup": "true" };
      };
      Renderer2.prototype.createIconClass = function(data) {
        var name = "lm-MenuBar-itemIcon";
        name += " p-MenuBar-itemIcon";
        var extra = data.title.iconClass;
        return extra ? name + " " + extra : name;
      };
      Renderer2.prototype.formatLabel = function(data) {
        var _a = data.title, label = _a.label, mnemonic = _a.mnemonic;
        if (mnemonic < 0 || mnemonic >= label.length) {
          return label;
        }
        var prefix = label.slice(0, mnemonic);
        var suffix = label.slice(mnemonic + 1);
        var char = label[mnemonic];
        var span = h.span({
          className: "lm-MenuBar-itemMnemonic p-MenuBar-itemMnemonic"
          /* </DEPRECATED> */
        }, char);
        return [prefix, span, suffix];
      };
      return Renderer2;
    }()
  );
  MenuBar2.Renderer = Renderer;
  MenuBar2.defaultRenderer = new Renderer();
})(MenuBar || (MenuBar = {}));
var Private$3;
(function(Private8) {
  function createNode() {
    var node = document.createElement("div");
    var content = document.createElement("ul");
    content.className = "lm-MenuBar-content";
    content.classList.add("p-MenuBar-content");
    node.appendChild(content);
    content.setAttribute("role", "menubar");
    return node;
  }
  Private8.createNode = createNode;
  function findMnemonic(menus, key, start) {
    var index = -1;
    var auto = -1;
    var multiple = false;
    var upperKey = key.toUpperCase();
    for (var i = 0, n = menus.length; i < n; ++i) {
      var k = (i + start) % n;
      var title = menus[k].title;
      if (title.label.length === 0) {
        continue;
      }
      var mn = title.mnemonic;
      if (mn >= 0 && mn < title.label.length) {
        if (title.label[mn].toUpperCase() === upperKey) {
          if (index === -1) {
            index = k;
          } else {
            multiple = true;
          }
        }
        continue;
      }
      if (auto === -1 && title.label[0].toUpperCase() === upperKey) {
        auto = k;
      }
    }
    return { index, multiple, auto };
  }
  Private8.findMnemonic = findMnemonic;
})(Private$3 || (Private$3 = {}));
var ScrollBar = (
  /** @class */
  function(_super) {
    __extends3(ScrollBar2, _super);
    function ScrollBar2(options) {
      if (options === void 0) {
        options = {};
      }
      var _this = _super.call(this, { node: Private$2.createNode() }) || this;
      _this._onRepeat = function() {
        _this._repeatTimer = -1;
        if (!_this._pressData) {
          return;
        }
        var part = _this._pressData.part;
        if (part === "thumb") {
          return;
        }
        _this._repeatTimer = window.setTimeout(_this._onRepeat, 20);
        var mouseX = _this._pressData.mouseX;
        var mouseY = _this._pressData.mouseY;
        if (part === "decrement") {
          if (!ElementExt.hitTest(_this.decrementNode, mouseX, mouseY)) {
            return;
          }
          _this._stepRequested.emit("decrement");
          return;
        }
        if (part === "increment") {
          if (!ElementExt.hitTest(_this.incrementNode, mouseX, mouseY)) {
            return;
          }
          _this._stepRequested.emit("increment");
          return;
        }
        if (part === "track") {
          if (!ElementExt.hitTest(_this.trackNode, mouseX, mouseY)) {
            return;
          }
          var thumbNode = _this.thumbNode;
          if (ElementExt.hitTest(thumbNode, mouseX, mouseY)) {
            return;
          }
          var thumbRect = thumbNode.getBoundingClientRect();
          var dir = void 0;
          if (_this._orientation === "horizontal") {
            dir = mouseX < thumbRect.left ? "decrement" : "increment";
          } else {
            dir = mouseY < thumbRect.top ? "decrement" : "increment";
          }
          _this._pageRequested.emit(dir);
          return;
        }
      };
      _this._value = 0;
      _this._page = 10;
      _this._maximum = 100;
      _this._repeatTimer = -1;
      _this._pressData = null;
      _this._thumbMoved = new Signal(_this);
      _this._stepRequested = new Signal(_this);
      _this._pageRequested = new Signal(_this);
      _this.addClass("lm-ScrollBar");
      _this.addClass("p-ScrollBar");
      _this.setFlag(Widget.Flag.DisallowLayout);
      _this._orientation = options.orientation || "vertical";
      _this.dataset["orientation"] = _this._orientation;
      if (options.maximum !== void 0) {
        _this._maximum = Math.max(0, options.maximum);
      }
      if (options.page !== void 0) {
        _this._page = Math.max(0, options.page);
      }
      if (options.value !== void 0) {
        _this._value = Math.max(0, Math.min(options.value, _this._maximum));
      }
      return _this;
    }
    Object.defineProperty(ScrollBar2.prototype, "thumbMoved", {
      /**
       * A signal emitted when the user moves the scroll thumb.
       *
       * #### Notes
       * The payload is the current value of the scroll bar.
       */
      get: function() {
        return this._thumbMoved;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(ScrollBar2.prototype, "stepRequested", {
      /**
       * A signal emitted when the user clicks a step button.
       *
       * #### Notes
       * The payload is whether a decrease or increase is requested.
       */
      get: function() {
        return this._stepRequested;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(ScrollBar2.prototype, "pageRequested", {
      /**
       * A signal emitted when the user clicks the scroll track.
       *
       * #### Notes
       * The payload is whether a decrease or increase is requested.
       */
      get: function() {
        return this._pageRequested;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(ScrollBar2.prototype, "orientation", {
      /**
       * Get the orientation of the scroll bar.
       */
      get: function() {
        return this._orientation;
      },
      /**
       * Set the orientation of the scroll bar.
       */
      set: function(value) {
        if (this._orientation === value) {
          return;
        }
        this._releaseMouse();
        this._orientation = value;
        this.dataset["orientation"] = value;
        this.update();
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(ScrollBar2.prototype, "value", {
      /**
       * Get the current value of the scroll bar.
       */
      get: function() {
        return this._value;
      },
      /**
       * Set the current value of the scroll bar.
       *
       * #### Notes
       * The value will be clamped to the range `[0, maximum]`.
       */
      set: function(value) {
        value = Math.max(0, Math.min(value, this._maximum));
        if (this._value === value) {
          return;
        }
        this._value = value;
        this.update();
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(ScrollBar2.prototype, "page", {
      /**
       * Get the page size of the scroll bar.
       *
       * #### Notes
       * The page size is the amount of visible content in the scrolled
       * region, expressed in data units. It determines the size of the
       * scroll bar thumb.
       */
      get: function() {
        return this._page;
      },
      /**
       * Set the page size of the scroll bar.
       *
       * #### Notes
       * The page size will be clamped to the range `[0, Infinity]`.
       */
      set: function(value) {
        value = Math.max(0, value);
        if (this._page === value) {
          return;
        }
        this._page = value;
        this.update();
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(ScrollBar2.prototype, "maximum", {
      /**
       * Get the maximum value of the scroll bar.
       */
      get: function() {
        return this._maximum;
      },
      /**
       * Set the maximum value of the scroll bar.
       *
       * #### Notes
       * The max size will be clamped to the range `[0, Infinity]`.
       */
      set: function(value) {
        value = Math.max(0, value);
        if (this._maximum === value) {
          return;
        }
        this._maximum = value;
        this._value = Math.min(this._value, value);
        this.update();
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(ScrollBar2.prototype, "decrementNode", {
      /**
       * The scroll bar decrement button node.
       *
       * #### Notes
       * Modifying this node directly can lead to undefined behavior.
       */
      get: function() {
        return this.node.getElementsByClassName("lm-ScrollBar-button")[0];
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(ScrollBar2.prototype, "incrementNode", {
      /**
       * The scroll bar increment button node.
       *
       * #### Notes
       * Modifying this node directly can lead to undefined behavior.
       */
      get: function() {
        return this.node.getElementsByClassName("lm-ScrollBar-button")[1];
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(ScrollBar2.prototype, "trackNode", {
      /**
       * The scroll bar track node.
       *
       * #### Notes
       * Modifying this node directly can lead to undefined behavior.
       */
      get: function() {
        return this.node.getElementsByClassName("lm-ScrollBar-track")[0];
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(ScrollBar2.prototype, "thumbNode", {
      /**
       * The scroll bar thumb node.
       *
       * #### Notes
       * Modifying this node directly can lead to undefined behavior.
       */
      get: function() {
        return this.node.getElementsByClassName("lm-ScrollBar-thumb")[0];
      },
      enumerable: true,
      configurable: true
    });
    ScrollBar2.prototype.handleEvent = function(event) {
      switch (event.type) {
        case "mousedown":
          this._evtMouseDown(event);
          break;
        case "mousemove":
          this._evtMouseMove(event);
          break;
        case "mouseup":
          this._evtMouseUp(event);
          break;
        case "keydown":
          this._evtKeyDown(event);
          break;
        case "contextmenu":
          event.preventDefault();
          event.stopPropagation();
          break;
      }
    };
    ScrollBar2.prototype.onBeforeAttach = function(msg) {
      this.node.addEventListener("mousedown", this);
      this.update();
    };
    ScrollBar2.prototype.onAfterDetach = function(msg) {
      this.node.removeEventListener("mousedown", this);
      this._releaseMouse();
    };
    ScrollBar2.prototype.onUpdateRequest = function(msg) {
      var value = this._value * 100 / this._maximum;
      var page = this._page * 100 / (this._page + this._maximum);
      value = Math.max(0, Math.min(value, 100));
      page = Math.max(0, Math.min(page, 100));
      var thumbStyle = this.thumbNode.style;
      if (this._orientation === "horizontal") {
        thumbStyle.top = "";
        thumbStyle.height = "";
        thumbStyle.left = value + "%";
        thumbStyle.width = page + "%";
        thumbStyle.transform = "translate(" + -value + "%, 0%)";
      } else {
        thumbStyle.left = "";
        thumbStyle.width = "";
        thumbStyle.top = value + "%";
        thumbStyle.height = page + "%";
        thumbStyle.transform = "translate(0%, " + -value + "%)";
      }
    };
    ScrollBar2.prototype._evtKeyDown = function(event) {
      event.preventDefault();
      event.stopPropagation();
      if (event.keyCode !== 27) {
        return;
      }
      var value = this._pressData ? this._pressData.value : -1;
      this._releaseMouse();
      if (value !== -1) {
        this._moveThumb(value);
      }
    };
    ScrollBar2.prototype._evtMouseDown = function(event) {
      if (event.button !== 0) {
        return;
      }
      this.activate();
      if (this._pressData) {
        return;
      }
      var part = Private$2.findPart(this, event.target);
      if (!part) {
        return;
      }
      event.preventDefault();
      event.stopPropagation();
      var override = Drag.overrideCursor("default");
      this._pressData = {
        part,
        override,
        delta: -1,
        value: -1,
        mouseX: event.clientX,
        mouseY: event.clientY
      };
      document.addEventListener("mousemove", this, true);
      document.addEventListener("mouseup", this, true);
      document.addEventListener("keydown", this, true);
      document.addEventListener("contextmenu", this, true);
      if (part === "thumb") {
        var thumbNode = this.thumbNode;
        var thumbRect = thumbNode.getBoundingClientRect();
        if (this._orientation === "horizontal") {
          this._pressData.delta = event.clientX - thumbRect.left;
        } else {
          this._pressData.delta = event.clientY - thumbRect.top;
        }
        thumbNode.classList.add("lm-mod-active");
        thumbNode.classList.add("p-mod-active");
        this._pressData.value = this._value;
        return;
      }
      if (part === "track") {
        var thumbRect = this.thumbNode.getBoundingClientRect();
        var dir = void 0;
        if (this._orientation === "horizontal") {
          dir = event.clientX < thumbRect.left ? "decrement" : "increment";
        } else {
          dir = event.clientY < thumbRect.top ? "decrement" : "increment";
        }
        this._repeatTimer = window.setTimeout(this._onRepeat, 350);
        this._pageRequested.emit(dir);
        return;
      }
      if (part === "decrement") {
        this.decrementNode.classList.add("lm-mod-active");
        this.decrementNode.classList.add("p-mod-active");
        this._repeatTimer = window.setTimeout(this._onRepeat, 350);
        this._stepRequested.emit("decrement");
        return;
      }
      if (part === "increment") {
        this.incrementNode.classList.add("lm-mod-active");
        this.incrementNode.classList.add("p-mod-active");
        this._repeatTimer = window.setTimeout(this._onRepeat, 350);
        this._stepRequested.emit("increment");
        return;
      }
    };
    ScrollBar2.prototype._evtMouseMove = function(event) {
      if (!this._pressData) {
        return;
      }
      event.preventDefault();
      event.stopPropagation();
      this._pressData.mouseX = event.clientX;
      this._pressData.mouseY = event.clientY;
      if (this._pressData.part !== "thumb") {
        return;
      }
      var thumbRect = this.thumbNode.getBoundingClientRect();
      var trackRect = this.trackNode.getBoundingClientRect();
      var trackPos;
      var trackSpan;
      if (this._orientation === "horizontal") {
        trackPos = event.clientX - trackRect.left - this._pressData.delta;
        trackSpan = trackRect.width - thumbRect.width;
      } else {
        trackPos = event.clientY - trackRect.top - this._pressData.delta;
        trackSpan = trackRect.height - thumbRect.height;
      }
      var value = trackSpan === 0 ? 0 : trackPos * this._maximum / trackSpan;
      this._moveThumb(value);
    };
    ScrollBar2.prototype._evtMouseUp = function(event) {
      if (event.button !== 0) {
        return;
      }
      event.preventDefault();
      event.stopPropagation();
      this._releaseMouse();
    };
    ScrollBar2.prototype._releaseMouse = function() {
      if (!this._pressData) {
        return;
      }
      clearTimeout(this._repeatTimer);
      this._repeatTimer = -1;
      this._pressData.override.dispose();
      this._pressData = null;
      document.removeEventListener("mousemove", this, true);
      document.removeEventListener("mouseup", this, true);
      document.removeEventListener("keydown", this, true);
      document.removeEventListener("contextmenu", this, true);
      this.thumbNode.classList.remove("lm-mod-active");
      this.decrementNode.classList.remove("lm-mod-active");
      this.incrementNode.classList.remove("lm-mod-active");
      this.thumbNode.classList.remove("p-mod-active");
      this.decrementNode.classList.remove("p-mod-active");
      this.incrementNode.classList.remove("p-mod-active");
    };
    ScrollBar2.prototype._moveThumb = function(value) {
      value = Math.max(0, Math.min(value, this._maximum));
      if (this._value === value) {
        return;
      }
      this._value = value;
      this.update();
      this._thumbMoved.emit(value);
    };
    return ScrollBar2;
  }(Widget)
);
var Private$2;
(function(Private8) {
  function createNode() {
    var node = document.createElement("div");
    var decrement = document.createElement("div");
    var increment = document.createElement("div");
    var track = document.createElement("div");
    var thumb = document.createElement("div");
    decrement.className = "lm-ScrollBar-button";
    increment.className = "lm-ScrollBar-button";
    decrement.dataset["action"] = "decrement";
    increment.dataset["action"] = "increment";
    track.className = "lm-ScrollBar-track";
    thumb.className = "lm-ScrollBar-thumb";
    decrement.classList.add("p-ScrollBar-button");
    increment.classList.add("p-ScrollBar-button");
    track.classList.add("p-ScrollBar-track");
    thumb.classList.add("p-ScrollBar-thumb");
    track.appendChild(thumb);
    node.appendChild(decrement);
    node.appendChild(track);
    node.appendChild(increment);
    return node;
  }
  Private8.createNode = createNode;
  function findPart(scrollBar, target) {
    if (scrollBar.thumbNode.contains(target)) {
      return "thumb";
    }
    if (scrollBar.trackNode.contains(target)) {
      return "track";
    }
    if (scrollBar.decrementNode.contains(target)) {
      return "decrement";
    }
    if (scrollBar.incrementNode.contains(target)) {
      return "increment";
    }
    return null;
  }
  Private8.findPart = findPart;
})(Private$2 || (Private$2 = {}));
var SingletonLayout = (
  /** @class */
  function(_super) {
    __extends3(SingletonLayout2, _super);
    function SingletonLayout2() {
      var _this = _super !== null && _super.apply(this, arguments) || this;
      _this._widget = null;
      return _this;
    }
    SingletonLayout2.prototype.dispose = function() {
      if (this._widget) {
        var widget = this._widget;
        this._widget = null;
        widget.dispose();
      }
      _super.prototype.dispose.call(this);
    };
    Object.defineProperty(SingletonLayout2.prototype, "widget", {
      /**
       * Get the child widget for the layout.
       */
      get: function() {
        return this._widget;
      },
      /**
       * Set the child widget for the layout.
       *
       * #### Notes
       * Setting the child widget will cause the old child widget to be
       * automatically disposed. If that is not desired, set the parent
       * of the old child to `null` before assigning a new child.
       */
      set: function(widget) {
        if (widget) {
          widget.parent = this.parent;
        }
        if (this._widget === widget) {
          return;
        }
        if (this._widget) {
          this._widget.dispose();
        }
        this._widget = widget;
        if (this.parent && widget) {
          this.attachWidget(widget);
        }
      },
      enumerable: true,
      configurable: true
    });
    SingletonLayout2.prototype.iter = function() {
      return this._widget ? once(this._widget) : empty();
    };
    SingletonLayout2.prototype.removeWidget = function(widget) {
      if (this._widget !== widget) {
        return;
      }
      this._widget = null;
      if (this.parent) {
        this.detachWidget(widget);
      }
    };
    SingletonLayout2.prototype.init = function() {
      var _this = this;
      _super.prototype.init.call(this);
      each(this, function(widget) {
        _this.attachWidget(widget);
      });
    };
    SingletonLayout2.prototype.attachWidget = function(widget) {
      if (this.parent.isAttached) {
        MessageLoop.sendMessage(widget, Widget.Msg.BeforeAttach);
      }
      this.parent.node.appendChild(widget.node);
      if (this.parent.isAttached) {
        MessageLoop.sendMessage(widget, Widget.Msg.AfterAttach);
      }
    };
    SingletonLayout2.prototype.detachWidget = function(widget) {
      if (this.parent.isAttached) {
        MessageLoop.sendMessage(widget, Widget.Msg.BeforeDetach);
      }
      this.parent.node.removeChild(widget.node);
      if (this.parent.isAttached) {
        MessageLoop.sendMessage(widget, Widget.Msg.AfterDetach);
      }
    };
    return SingletonLayout2;
  }(Layout)
);
var StackedLayout = (
  /** @class */
  function(_super) {
    __extends3(StackedLayout2, _super);
    function StackedLayout2(options) {
      if (options === void 0) {
        options = {};
      }
      var _this = _super.call(this, options) || this;
      _this._dirty = false;
      _this._items = [];
      _this._box = null;
      _this._hiddenMode = options.hiddenMode !== void 0 ? options.hiddenMode : Widget.HiddenMode.Display;
      return _this;
    }
    Object.defineProperty(StackedLayout2.prototype, "hiddenMode", {
      /**
       * The method for hiding widgets.
       *
       * #### Notes
       * If there is only one child widget, `Display` hiding mode will be used
       * regardless of this setting.
       */
      get: function() {
        return this._hiddenMode;
      },
      /**
       * Set the method for hiding widgets.
       *
       * #### Notes
       * If there is only one child widget, `Display` hiding mode will be used
       * regardless of this setting.
       */
      set: function(v) {
        var _this = this;
        if (this._hiddenMode === v) {
          return;
        }
        this._hiddenMode = v;
        if (this.widgets.length > 1) {
          this.widgets.forEach(function(w) {
            w.hiddenMode = _this._hiddenMode;
          });
        }
      },
      enumerable: true,
      configurable: true
    });
    StackedLayout2.prototype.dispose = function() {
      each(this._items, function(item) {
        item.dispose();
      });
      this._box = null;
      this._items.length = 0;
      _super.prototype.dispose.call(this);
    };
    StackedLayout2.prototype.attachWidget = function(index, widget) {
      if (this._hiddenMode === Widget.HiddenMode.Scale && this._items.length > 0) {
        if (this._items.length === 1) {
          this.widgets[0].hiddenMode = Widget.HiddenMode.Scale;
        }
        widget.hiddenMode = Widget.HiddenMode.Scale;
      } else {
        widget.hiddenMode = Widget.HiddenMode.Display;
      }
      ArrayExt.insert(this._items, index, new LayoutItem(widget));
      if (this.parent.isAttached) {
        MessageLoop.sendMessage(widget, Widget.Msg.BeforeAttach);
      }
      this.parent.node.appendChild(widget.node);
      if (this.parent.isAttached) {
        MessageLoop.sendMessage(widget, Widget.Msg.AfterAttach);
      }
      this.parent.fit();
    };
    StackedLayout2.prototype.moveWidget = function(fromIndex, toIndex, widget) {
      ArrayExt.move(this._items, fromIndex, toIndex);
      this.parent.update();
    };
    StackedLayout2.prototype.detachWidget = function(index, widget) {
      var item = ArrayExt.removeAt(this._items, index);
      if (this.parent.isAttached) {
        MessageLoop.sendMessage(widget, Widget.Msg.BeforeDetach);
      }
      this.parent.node.removeChild(widget.node);
      if (this.parent.isAttached) {
        MessageLoop.sendMessage(widget, Widget.Msg.AfterDetach);
      }
      item.widget.node.style.zIndex = "";
      if (this._hiddenMode === Widget.HiddenMode.Scale) {
        widget.hiddenMode = Widget.HiddenMode.Display;
        if (this._items.length === 1) {
          this._items[0].widget.hiddenMode = Widget.HiddenMode.Display;
        }
      }
      item.dispose();
      this.parent.fit();
    };
    StackedLayout2.prototype.onBeforeShow = function(msg) {
      _super.prototype.onBeforeShow.call(this, msg);
      this.parent.update();
    };
    StackedLayout2.prototype.onBeforeAttach = function(msg) {
      _super.prototype.onBeforeAttach.call(this, msg);
      this.parent.fit();
    };
    StackedLayout2.prototype.onChildShown = function(msg) {
      this.parent.fit();
    };
    StackedLayout2.prototype.onChildHidden = function(msg) {
      this.parent.fit();
    };
    StackedLayout2.prototype.onResize = function(msg) {
      if (this.parent.isVisible) {
        this._update(msg.width, msg.height);
      }
    };
    StackedLayout2.prototype.onUpdateRequest = function(msg) {
      if (this.parent.isVisible) {
        this._update(-1, -1);
      }
    };
    StackedLayout2.prototype.onFitRequest = function(msg) {
      if (this.parent.isAttached) {
        this._fit();
      }
    };
    StackedLayout2.prototype._fit = function() {
      var minW = 0;
      var minH = 0;
      for (var i = 0, n = this._items.length; i < n; ++i) {
        var item = this._items[i];
        if (item.isHidden) {
          continue;
        }
        item.fit();
        minW = Math.max(minW, item.minWidth);
        minH = Math.max(minH, item.minHeight);
      }
      var box = this._box = ElementExt.boxSizing(this.parent.node);
      minW += box.horizontalSum;
      minH += box.verticalSum;
      var style = this.parent.node.style;
      style.minWidth = minW + "px";
      style.minHeight = minH + "px";
      this._dirty = true;
      if (this.parent.parent) {
        MessageLoop.sendMessage(this.parent.parent, Widget.Msg.FitRequest);
      }
      if (this._dirty) {
        MessageLoop.sendMessage(this.parent, Widget.Msg.UpdateRequest);
      }
    };
    StackedLayout2.prototype._update = function(offsetWidth, offsetHeight) {
      this._dirty = false;
      var nVisible = 0;
      for (var i = 0, n = this._items.length; i < n; ++i) {
        nVisible += +!this._items[i].isHidden;
      }
      if (nVisible === 0) {
        return;
      }
      if (offsetWidth < 0) {
        offsetWidth = this.parent.node.offsetWidth;
      }
      if (offsetHeight < 0) {
        offsetHeight = this.parent.node.offsetHeight;
      }
      if (!this._box) {
        this._box = ElementExt.boxSizing(this.parent.node);
      }
      var top = this._box.paddingTop;
      var left = this._box.paddingLeft;
      var width = offsetWidth - this._box.horizontalSum;
      var height = offsetHeight - this._box.verticalSum;
      for (var i = 0, n = this._items.length; i < n; ++i) {
        var item = this._items[i];
        if (item.isHidden) {
          continue;
        }
        item.widget.node.style.zIndex = "" + i;
        item.update(left, top, width, height);
      }
    };
    return StackedLayout2;
  }(PanelLayout)
);
var StackedPanel = (
  /** @class */
  function(_super) {
    __extends3(StackedPanel2, _super);
    function StackedPanel2(options) {
      if (options === void 0) {
        options = {};
      }
      var _this = _super.call(this, { layout: Private$1.createLayout(options) }) || this;
      _this._widgetRemoved = new Signal(_this);
      _this.addClass("lm-StackedPanel");
      _this.addClass("p-StackedPanel");
      return _this;
    }
    Object.defineProperty(StackedPanel2.prototype, "hiddenMode", {
      /**
       * The method for hiding widgets.
       *
       * #### Notes
       * If there is only one child widget, `Display` hiding mode will be used
       * regardless of this setting.
       */
      get: function() {
        return this.layout.hiddenMode;
      },
      /**
       * Set the method for hiding widgets.
       *
       * #### Notes
       * If there is only one child widget, `Display` hiding mode will be used
       * regardless of this setting.
       */
      set: function(v) {
        this.layout.hiddenMode = v;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(StackedPanel2.prototype, "widgetRemoved", {
      /**
       * A signal emitted when a widget is removed from a stacked panel.
       */
      get: function() {
        return this._widgetRemoved;
      },
      enumerable: true,
      configurable: true
    });
    StackedPanel2.prototype.onChildAdded = function(msg) {
      msg.child.addClass("lm-StackedPanel-child");
      msg.child.addClass("p-StackedPanel-child");
    };
    StackedPanel2.prototype.onChildRemoved = function(msg) {
      msg.child.removeClass("lm-StackedPanel-child");
      msg.child.removeClass("p-StackedPanel-child");
      this._widgetRemoved.emit(msg.child);
    };
    return StackedPanel2;
  }(Panel)
);
var Private$1;
(function(Private8) {
  function createLayout(options) {
    return options.layout || new StackedLayout();
  }
  Private8.createLayout = createLayout;
})(Private$1 || (Private$1 = {}));
var TabPanel = (
  /** @class */
  function(_super) {
    __extends3(TabPanel2, _super);
    function TabPanel2(options) {
      if (options === void 0) {
        options = {};
      }
      var _this = _super.call(this) || this;
      _this._currentChanged = new Signal(_this);
      _this._addRequested = new Signal(_this);
      _this.addClass("lm-TabPanel");
      _this.addClass("p-TabPanel");
      _this.tabBar = new TabBar(options);
      _this.tabBar.addClass("lm-TabPanel-tabBar");
      _this.stackedPanel = new StackedPanel();
      _this.stackedPanel.addClass("lm-TabPanel-stackedPanel");
      _this.tabBar.addClass("p-TabPanel-tabBar");
      _this.stackedPanel.addClass("p-TabPanel-stackedPanel");
      _this.tabBar.tabMoved.connect(_this._onTabMoved, _this);
      _this.tabBar.currentChanged.connect(_this._onCurrentChanged, _this);
      _this.tabBar.tabCloseRequested.connect(_this._onTabCloseRequested, _this);
      _this.tabBar.tabActivateRequested.connect(_this._onTabActivateRequested, _this);
      _this.tabBar.addRequested.connect(_this._onTabAddRequested, _this);
      _this.stackedPanel.widgetRemoved.connect(_this._onWidgetRemoved, _this);
      _this._tabPlacement = options.tabPlacement || "top";
      var direction = Private7.directionFromPlacement(_this._tabPlacement);
      var orientation = Private7.orientationFromPlacement(_this._tabPlacement);
      _this.tabBar.orientation = orientation;
      _this.tabBar.dataset["placement"] = _this._tabPlacement;
      var layout = new BoxLayout({ direction, spacing: 0 });
      BoxLayout.setStretch(_this.tabBar, 0);
      BoxLayout.setStretch(_this.stackedPanel, 1);
      layout.addWidget(_this.tabBar);
      layout.addWidget(_this.stackedPanel);
      _this.layout = layout;
      return _this;
    }
    Object.defineProperty(TabPanel2.prototype, "currentChanged", {
      /**
       * A signal emitted when the current tab is changed.
       *
       * #### Notes
       * This signal is emitted when the currently selected tab is changed
       * either through user or programmatic interaction.
       *
       * Notably, this signal is not emitted when the index of the current
       * tab changes due to tabs being inserted, removed, or moved. It is
       * only emitted when the actual current tab node is changed.
       */
      get: function() {
        return this._currentChanged;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(TabPanel2.prototype, "currentIndex", {
      /**
       * Get the index of the currently selected tab.
       *
       * #### Notes
       * This will be `-1` if no tab is selected.
       */
      get: function() {
        return this.tabBar.currentIndex;
      },
      /**
       * Set the index of the currently selected tab.
       *
       * #### Notes
       * If the index is out of range, it will be set to `-1`.
       */
      set: function(value) {
        this.tabBar.currentIndex = value;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(TabPanel2.prototype, "currentWidget", {
      /**
       * Get the currently selected widget.
       *
       * #### Notes
       * This will be `null` if there is no selected tab.
       */
      get: function() {
        var title = this.tabBar.currentTitle;
        return title ? title.owner : null;
      },
      /**
       * Set the currently selected widget.
       *
       * #### Notes
       * If the widget is not in the panel, it will be set to `null`.
       */
      set: function(value) {
        this.tabBar.currentTitle = value ? value.title : null;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(TabPanel2.prototype, "tabsMovable", {
      /**
       * Get the whether the tabs are movable by the user.
       *
       * #### Notes
       * Tabs can always be moved programmatically.
       */
      get: function() {
        return this.tabBar.tabsMovable;
      },
      /**
       * Set the whether the tabs are movable by the user.
       *
       * #### Notes
       * Tabs can always be moved programmatically.
       */
      set: function(value) {
        this.tabBar.tabsMovable = value;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(TabPanel2.prototype, "addButtonEnabled", {
      /**
       * Get the whether the add button is enabled.
       *
       */
      get: function() {
        return this.tabBar.addButtonEnabled;
      },
      /**
       * Set the whether the add button is enabled.
       *
       */
      set: function(value) {
        this.tabBar.addButtonEnabled = value;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(TabPanel2.prototype, "tabPlacement", {
      /**
       * Get the tab placement for the tab panel.
       *
       * #### Notes
       * This controls the position of the tab bar relative to the content.
       */
      get: function() {
        return this._tabPlacement;
      },
      /**
       * Set the tab placement for the tab panel.
       *
       * #### Notes
       * This controls the position of the tab bar relative to the content.
       */
      set: function(value) {
        if (this._tabPlacement === value) {
          return;
        }
        this._tabPlacement = value;
        var direction = Private7.directionFromPlacement(value);
        var orientation = Private7.orientationFromPlacement(value);
        this.tabBar.orientation = orientation;
        this.tabBar.dataset["placement"] = value;
        this.layout.direction = direction;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(TabPanel2.prototype, "addRequested", {
      /**
       * A signal emitted when the add button on a tab bar is clicked.
       *
       */
      get: function() {
        return this._addRequested;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(TabPanel2.prototype, "widgets", {
      /**
       * A read-only array of the widgets in the panel.
       */
      get: function() {
        return this.stackedPanel.widgets;
      },
      enumerable: true,
      configurable: true
    });
    TabPanel2.prototype.addWidget = function(widget) {
      this.insertWidget(this.widgets.length, widget);
    };
    TabPanel2.prototype.insertWidget = function(index, widget) {
      if (widget !== this.currentWidget) {
        widget.hide();
      }
      this.stackedPanel.insertWidget(index, widget);
      this.tabBar.insertTab(index, widget.title);
      widget.node.setAttribute("role", "tabpanel");
      var renderer = this.tabBar.renderer;
      if (renderer instanceof TabBar.Renderer) {
        var tabId = renderer.createTabKey({
          title: widget.title,
          current: false,
          zIndex: 0
        });
        widget.node.setAttribute("aria-labelledby", tabId);
      }
    };
    TabPanel2.prototype._onCurrentChanged = function(sender, args) {
      var previousIndex = args.previousIndex, previousTitle = args.previousTitle, currentIndex = args.currentIndex, currentTitle = args.currentTitle;
      var previousWidget = previousTitle ? previousTitle.owner : null;
      var currentWidget = currentTitle ? currentTitle.owner : null;
      if (previousWidget) {
        previousWidget.hide();
      }
      if (currentWidget) {
        currentWidget.show();
      }
      this._currentChanged.emit({
        previousIndex,
        previousWidget,
        currentIndex,
        currentWidget
      });
      if (Platform.IS_EDGE || Platform.IS_IE) {
        MessageLoop.flush();
      }
    };
    TabPanel2.prototype._onTabAddRequested = function(sender, args) {
      this._addRequested.emit(sender);
    };
    TabPanel2.prototype._onTabActivateRequested = function(sender, args) {
      args.title.owner.activate();
    };
    TabPanel2.prototype._onTabCloseRequested = function(sender, args) {
      args.title.owner.close();
    };
    TabPanel2.prototype._onTabMoved = function(sender, args) {
      this.stackedPanel.insertWidget(args.toIndex, args.title.owner);
    };
    TabPanel2.prototype._onWidgetRemoved = function(sender, widget) {
      widget.node.removeAttribute("role");
      widget.node.removeAttribute("aria-labelledby");
      this.tabBar.removeTab(widget.title);
    };
    return TabPanel2;
  }(Widget)
);
var Private7;
(function(Private8) {
  function orientationFromPlacement(plc) {
    return placementToOrientationMap[plc];
  }
  Private8.orientationFromPlacement = orientationFromPlacement;
  function directionFromPlacement(plc) {
    return placementToDirectionMap[plc];
  }
  Private8.directionFromPlacement = directionFromPlacement;
  var placementToOrientationMap = {
    top: "horizontal",
    left: "vertical",
    right: "vertical",
    bottom: "horizontal"
  };
  var placementToDirectionMap = {
    top: "top-to-bottom",
    left: "left-to-right",
    right: "right-to-left",
    bottom: "bottom-to-top"
  };
})(Private7 || (Private7 = {}));

// ../../node_modules/jupyterlab-plotly/lib/plotly-renderer.js
var __awaiter = function(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function(resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function(resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};
var CSS_CLASS = "jp-RenderedPlotly";
var CSS_ICON_CLASS = "jp-MaterialIcon jp-PlotlyIcon";
var MIME_TYPE = "application/vnd.plotly.v1+json";
var RenderedPlotly = class extends Widget {
  /**
   * Create a new widget for rendering Plotly.
   */
  constructor(options) {
    super();
    this.addClass(CSS_CLASS);
    this._mimeType = options.mimeType;
    this._img_el = document.createElement("img");
    this._img_el.className = "plot-img";
    this.node.appendChild(this._img_el);
    this._img_el.addEventListener("mouseenter", (event) => {
      this.createGraph(this._model);
    });
  }
  /**
   * Render Plotly into this widget's node.
   */
  renderModel(model) {
    if (this.hasGraphElement()) {
      return Promise.resolve();
    }
    this._model = model;
    const png_data = model.data["image/png"];
    if (png_data !== void 0 && png_data !== null) {
      this.updateImage(png_data);
      return Promise.resolve();
    } else {
      return this.createGraph(model);
    }
  }
  hasGraphElement() {
    return this.node.querySelector(".plot-container") !== null;
  }
  updateImage(png_data) {
    this.hideGraph();
    this._img_el.src = "data:image/png;base64," + png_data;
    this.showImage();
  }
  hideGraph() {
    let el = this.node.querySelector(".plot-container");
    if (el !== null && el !== void 0) {
      el.style.display = "none";
    }
  }
  showGraph() {
    let el = this.node.querySelector(".plot-container");
    if (el !== null && el !== void 0) {
      el.style.display = "block";
    }
  }
  hideImage() {
    let el = this.node.querySelector(".plot-img");
    if (el !== null && el !== void 0) {
      el.style.display = "none";
    }
  }
  showImage() {
    let el = this.node.querySelector(".plot-img");
    if (el !== null && el !== void 0) {
      el.style.display = "block";
    }
  }
  createGraph(model) {
    const { data, layout, frames, config } = model.data[this._mimeType];
    if (!layout.height) {
      layout.height = 360;
    }
    const loadPlotly = () => __awaiter(this, void 0, void 0, function* () {
      if (RenderedPlotly.Plotly === null) {
        RenderedPlotly.Plotly = yield import("/build/_shared/plotly-MLHI6XCW.js");
        RenderedPlotly.Plotly = RenderedPlotly.Plotly.default;
        RenderedPlotly._resolveLoadingPlotly();
      }
      return RenderedPlotly.loadingPlotly;
    });
    return loadPlotly().then(() => {
      return RenderedPlotly.Plotly.react(this.node, data, layout, config);
    }).then((plot) => {
      this.showGraph();
      this.hideImage();
      this.update();
      if (frames) {
        RenderedPlotly.Plotly.addFrames(this.node, frames);
      }
      if (this.node.offsetWidth > 0 && this.node.offsetHeight > 0) {
        RenderedPlotly.Plotly.toImage(plot, {
          format: "png",
          width: this.node.offsetWidth,
          height: this.node.offsetHeight
        }).then((url) => {
          const imageData = url.split(",")[1];
          if (model.data["image/png"] !== imageData) {
            model.setData({
              data: Object.assign(Object.assign({}, model.data), { "image/png": imageData })
            });
          }
        });
      }
      this.node.on("plotly_webglcontextlost", () => {
        const png_data = model.data["image/png"];
        if (png_data !== void 0 && png_data !== null) {
          this.updateImage(png_data);
          return Promise.resolve();
        }
      });
    });
  }
  /**
   * A message handler invoked on an `'after-show'` message.
   */
  onAfterShow(msg) {
    this.update();
  }
  /**
   * A message handler invoked on a `'resize'` message.
   */
  onResize(msg) {
    this.update();
  }
  /**
   * A message handler invoked on an `'update-request'` message.
   */
  onUpdateRequest(msg) {
    if (RenderedPlotly.Plotly && this.isVisible && this.hasGraphElement()) {
      RenderedPlotly.Plotly.redraw(this.node).then(() => {
        RenderedPlotly.Plotly.Plots.resize(this.node);
      });
    }
  }
};
RenderedPlotly.Plotly = null;
RenderedPlotly.loadingPlotly = new Promise((resolve) => {
  RenderedPlotly._resolveLoadingPlotly = resolve;
});
var rendererFactory = {
  safe: true,
  mimeTypes: [MIME_TYPE],
  createRenderer: (options) => new RenderedPlotly(options)
};
var extensions = [
  {
    id: "@jupyterlab/plotly-extension:factory",
    rendererFactory,
    rank: 0,
    dataType: "json",
    fileTypes: [
      {
        name: "plotly",
        mimeTypes: [MIME_TYPE],
        extensions: [".plotly", ".plotly.json"],
        iconClass: CSS_ICON_CLASS
      }
    ],
    documentWidgetFactoryOptions: {
      name: "Plotly",
      primaryFileType: "plotly",
      fileTypes: ["plotly", "json"],
      defaultFor: ["plotly"]
    }
  }
];
var plotly_renderer_default = extensions;
export {
  MIME_TYPE,
  RenderedPlotly,
  plotly_renderer_default as default,
  rendererFactory
};
/*! Bundled license information:

@lumino/disposable/dist/index.es6.js:
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

@lumino/commands/dist/index.es6.js:
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

@lumino/virtualdom/dist/index.es6.js:
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

@lumino/widgets/dist/index.es6.js:
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
//# sourceMappingURL=/build/_shared/plotly-renderer-VEGWEDS5.js.map
