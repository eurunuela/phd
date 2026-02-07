import {
  __commonJS
} from "/build/_shared/chunk-K3U4UPJ2.js";

// ../../node_modules/highlight.js/lib/languages/vbscript-html.js
var require_vbscript_html = __commonJS({
  "../../node_modules/highlight.js/lib/languages/vbscript-html.js"(exports, module) {
    function vbscriptHtml(hljs) {
      return {
        name: "VBScript in HTML",
        subLanguage: "xml",
        contains: [
          {
            begin: "<%",
            end: "%>",
            subLanguage: "vbscript"
          }
        ]
      };
    }
    module.exports = vbscriptHtml;
  }
});
export default require_vbscript_html();
//# sourceMappingURL=/build/_shared/vbscript-html-6EGJXELW.js.map
