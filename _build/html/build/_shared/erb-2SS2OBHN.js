import {
  __commonJS
} from "/build/_shared/chunk-D5NAPBYJ.js";

// ../../node_modules/highlight.js/lib/languages/erb.js
var require_erb = __commonJS({
  "../../node_modules/highlight.js/lib/languages/erb.js"(exports, module) {
    function erb(hljs) {
      return {
        name: "ERB",
        subLanguage: "xml",
        contains: [
          hljs.COMMENT("<%#", "%>"),
          {
            begin: "<%[%=-]?",
            end: "[%-]?%>",
            subLanguage: "ruby",
            excludeBegin: true,
            excludeEnd: true
          }
        ]
      };
    }
    module.exports = erb;
  }
});
export default require_erb();
//# sourceMappingURL=/build/_shared/erb-2SS2OBHN.js.map
