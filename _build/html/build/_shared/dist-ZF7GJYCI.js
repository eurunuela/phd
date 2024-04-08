import "/build/_shared/chunk-D5NAPBYJ.js";

// ../../node_modules/myst-ext-tabs/dist/index.js
var tabSetDirective = {
  name: "tab-set",
  alias: ["tabSet"],
  options: {
    class: {
      type: String
    }
  },
  body: {
    type: "myst"
  },
  run(data) {
    var _a;
    return [
      {
        type: "tabSet",
        class: (_a = data.options) === null || _a === void 0 ? void 0 : _a.class,
        children: data.body || []
      }
    ];
  }
};
var tabItemDirective = {
  name: "tab-item",
  alias: ["tabItem", "tab"],
  arg: {
    type: String
  },
  options: {
    sync: {
      type: String
    },
    selected: {
      type: Boolean
    }
  },
  body: {
    type: "myst"
  },
  run(data) {
    var _a, _b, _c;
    return [
      {
        type: "tabItem",
        title: (_a = data.arg) !== null && _a !== void 0 ? _a : "Tab Title",
        sync: (_b = data.options) === null || _b === void 0 ? void 0 : _b.sync,
        selected: (_c = data.options) === null || _c === void 0 ? void 0 : _c.selected,
        children: data.body || []
      }
    ];
  }
};
var tabDirectives = [tabSetDirective, tabItemDirective];
export {
  tabDirectives,
  tabItemDirective,
  tabSetDirective
};
//# sourceMappingURL=/build/_shared/dist-ZF7GJYCI.js.map
