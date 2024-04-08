import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-BR5CJPZL.js";
import {
  require_react
} from "/build/_shared/chunk-IFNAVDNZ.js";
import {
  __toESM
} from "/build/_shared/chunk-D5NAPBYJ.js";

// app/routes/chatbot.tsx
var import_react3 = __toESM(require_react());

// ../../node_modules/react-icons/lib/iconBase.mjs
var import_react2 = __toESM(require_react(), 1);

// ../../node_modules/react-icons/lib/iconContext.mjs
var import_react = __toESM(require_react(), 1);
var DefaultContext = {
  color: void 0,
  size: void 0,
  className: void 0,
  style: void 0,
  attr: void 0
};
var IconContext = import_react.default.createContext && /* @__PURE__ */ import_react.default.createContext(DefaultContext);

// ../../node_modules/react-icons/lib/iconBase.mjs
var _excluded = ["attr", "size", "title"];
function _objectWithoutProperties(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key))
        continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}
function ownKeys(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function(r2) {
      return Object.getOwnPropertyDescriptor(e, r2).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys(Object(t), true).forEach(function(r2) {
      _defineProperty(e, r2, t[r2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function(r2) {
      Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
    });
  }
  return e;
}
function _defineProperty(obj, key, value) {
  key = _toPropertyKey(key);
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _toPropertyKey(arg) {
  var key = _toPrimitive(arg, "string");
  return typeof key === "symbol" ? key : String(key);
}
function _toPrimitive(input, hint) {
  if (typeof input !== "object" || input === null)
    return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== void 0) {
    var res = prim.call(input, hint || "default");
    if (typeof res !== "object")
      return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}
function Tree2Element(tree) {
  return tree && tree.map((node, i) => /* @__PURE__ */ import_react2.default.createElement(node.tag, _objectSpread({
    key: i
  }, node.attr), Tree2Element(node.child)));
}
function GenIcon(data) {
  return (props) => /* @__PURE__ */ import_react2.default.createElement(IconBase, _extends({
    attr: _objectSpread({}, data.attr)
  }, props), Tree2Element(data.child));
}
function IconBase(props) {
  var elem = (conf) => {
    var {
      attr,
      size,
      title
    } = props, svgProps = _objectWithoutProperties(props, _excluded);
    var computedSize = size || conf.size || "1em";
    var className;
    if (conf.className)
      className = conf.className;
    if (props.className)
      className = (className ? className + " " : "") + props.className;
    return /* @__PURE__ */ import_react2.default.createElement("svg", _extends({
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0"
    }, conf.attr, attr, svgProps, {
      className,
      style: _objectSpread(_objectSpread({
        color: props.color || conf.color
      }, conf.style), props.style),
      height: computedSize,
      width: computedSize,
      xmlns: "http://www.w3.org/2000/svg"
    }), title && /* @__PURE__ */ import_react2.default.createElement("title", null, title), props.children);
  };
  return IconContext !== void 0 ? /* @__PURE__ */ import_react2.default.createElement(IconContext.Consumer, null, (conf) => elem(conf)) : elem(DefaultContext);
}

// ../../node_modules/react-icons/io/index.mjs
function IoMdCloseCircle(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M256 48C140.559 48 48 140.559 48 256c0 115.436 92.559 208 208 208 115.435 0 208-92.564 208-208 0-115.441-92.564-208-208-208zm104.002 282.881l-29.12 29.117L256 285.117l-74.881 74.881-29.121-29.117L226.881 256l-74.883-74.881 29.121-29.116L256 226.881l74.881-74.878 29.12 29.116L285.119 256l74.883 74.881z" }, "child": [] }] })(props);
}

// app/routes/chatbot.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function ChatbotWindow({ chatOpen, setChatOpen }) {
  const [message, setMessage] = (0, import_react3.useState)("");
  const [response, setResponse] = (0, import_react3.useState)("");
  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };
  const sendMessage = async () => {
    console.log("Message sent:", message);
    const apiResponse = await fetch("/api/query", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ message })
    });
    const answer = await apiResponse.text();
    const answer_parsed = JSON.parse(answer).response;
    setResponse(answer_parsed);
    console.log("Response:", answer_parsed);
    setMessage("");
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "fixed z-[100] h-full w-full pb-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "relative flex items-center justify-center p-6 max-[770px]:w-[100%] max-[770px]:p-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: " w-[40%] max-[1400px]:w-[50%] h-[700px] mx-auto bg-gray-100 rounded-lg shadow-lg max-[770px]:w-[95%]", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "relative", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { onClick: () => setChatOpen(false), className: "absolute top-2 right-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(IoMdCloseCircle, {}, void 0, false, {
      fileName: "app/routes/chatbot.tsx",
      lineNumber: 37,
      columnNumber: 15
    }, this) }, void 0, false, {
      fileName: "app/routes/chatbot.tsx",
      lineNumber: 36,
      columnNumber: 13
    }, this) }, void 0, false, {
      fileName: "app/routes/chatbot.tsx",
      lineNumber: 35,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "p-6 h-[90%]", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex-1 overflow-y-auto bg-white rounded-md h-[100%]", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "h-full p-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: response }, void 0, false, {
      fileName: "app/routes/chatbot.tsx",
      lineNumber: 44,
      columnNumber: 17
    }, this) }, void 0, false, {
      fileName: "app/routes/chatbot.tsx",
      lineNumber: 43,
      columnNumber: 15
    }, this) }, void 0, false, {
      fileName: "app/routes/chatbot.tsx",
      lineNumber: 42,
      columnNumber: 13
    }, this) }, void 0, false, {
      fileName: "app/routes/chatbot.tsx",
      lineNumber: 41,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "relative px-6 bottom-0 flex h-[50px]", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        "input",
        {
          type: "text",
          value: message,
          onChange: handleMessageChange,
          className: "flex-1 p-2 mr-2 rounded-md"
        },
        void 0,
        false,
        {
          fileName: "app/routes/chatbot.tsx",
          lineNumber: 50,
          columnNumber: 13
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { onClick: sendMessage, className: "p-2 text-white bg-blue-500 rounded-md z-[100]", children: "Send" }, void 0, false, {
        fileName: "app/routes/chatbot.tsx",
        lineNumber: 56,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/chatbot.tsx",
      lineNumber: 49,
      columnNumber: 11
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/chatbot.tsx",
    lineNumber: 34,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "app/routes/chatbot.tsx",
    lineNumber: 33,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/chatbot.tsx",
    lineNumber: 31,
    columnNumber: 5
  }, this);
}
var chatbot_default = ChatbotWindow;

export {
  chatbot_default
};
//# sourceMappingURL=/build/_shared/chunk-B3ASLRW2.js.map
