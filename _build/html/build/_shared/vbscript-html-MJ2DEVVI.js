import {
  __commonJS
} from "/build/_shared/chunk-D5NAPBYJ.js";

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
//# sourceMappingURL=/build/_shared/vbscript-html-MJ2DEVVI.js.map
