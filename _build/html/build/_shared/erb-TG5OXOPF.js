import {
  __commonJS
} from "/build/_shared/chunk-K3U4UPJ2.js";

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
//# sourceMappingURL=/build/_shared/erb-TG5OXOPF.js.map
