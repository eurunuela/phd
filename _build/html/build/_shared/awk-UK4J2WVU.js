import {
  __commonJS
} from "/build/_shared/chunk-D5NAPBYJ.js";

// ../../node_modules/highlight.js/lib/languages/awk.js
var require_awk = __commonJS({
  "../../node_modules/highlight.js/lib/languages/awk.js"(exports, module) {
    function awk(hljs) {
      const VARIABLE = {
        className: "variable",
        variants: [
          {
            begin: /\$[\w\d#@][\w\d_]*/
          },
          {
            begin: /\$\{(.*?)\}/
          }
        ]
      };
      const KEYWORDS = "BEGIN END if else while do for in break continue delete next nextfile function func exit|10";
      const STRING = {
        className: "string",
        contains: [hljs.BACKSLASH_ESCAPE],
        variants: [
          {
            begin: /(u|b)?r?'''/,
            end: /'''/,
            relevance: 10
          },
          {
            begin: /(u|b)?r?"""/,
            end: /"""/,
            relevance: 10
          },
          {
            begin: /(u|r|ur)'/,
            end: /'/,
            relevance: 10
          },
          {
            begin: /(u|r|ur)"/,
            end: /"/,
            relevance: 10
          },
          {
            begin: /(b|br)'/,
            end: /'/
          },
          {
            begin: /(b|br)"/,
            end: /"/
          },
          hljs.APOS_STRING_MODE,
          hljs.QUOTE_STRING_MODE
        ]
      };
      return {
        name: "Awk",
        keywords: {
          keyword: KEYWORDS
        },
        contains: [
          VARIABLE,
          STRING,
          hljs.REGEXP_MODE,
          hljs.HASH_COMMENT_MODE,
          hljs.NUMBER_MODE
        ]
      };
    }
    module.exports = awk;
  }
});
export default require_awk();
//# sourceMappingURL=/build/_shared/awk-UK4J2WVU.js.map
