import {
  require_t4_templating
} from "/build/_shared/chunk-BXI5BGHH.js";
import {
  require_csharp
} from "/build/_shared/chunk-RQ2ML27J.js";
import {
  __commonJS
} from "/build/_shared/chunk-D5NAPBYJ.js";

// ../../node_modules/refractor/lang/t4-cs.js
var require_t4_cs = __commonJS({
  "../../node_modules/refractor/lang/t4-cs.js"(exports, module) {
    var refractorT4Templating = require_t4_templating();
    var refractorCsharp = require_csharp();
    module.exports = t4Cs;
    t4Cs.displayName = "t4Cs";
    t4Cs.aliases = [];
    function t4Cs(Prism) {
      Prism.register(refractorT4Templating);
      Prism.register(refractorCsharp);
      Prism.languages.t4 = Prism.languages["t4-cs"] = Prism.languages["t4-templating"].createT4("csharp");
    }
  }
});

export {
  require_t4_cs
};
//# sourceMappingURL=/build/_shared/chunk-5YV6SNC4.js.map
