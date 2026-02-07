import {
  __commonJS
} from "/build/_shared/chunk-K3U4UPJ2.js";

// ../../node_modules/highlight.js/lib/languages/node-repl.js
var require_node_repl = __commonJS({
  "../../node_modules/highlight.js/lib/languages/node-repl.js"(exports, module) {
    function nodeRepl(hljs) {
      return {
        name: "Node REPL",
        contains: [
          {
            className: "meta",
            starts: {
              // a space separates the REPL prefix from the actual code
              // this is purely for cleaner HTML output
              end: / |$/,
              starts: {
                end: "$",
                subLanguage: "javascript"
              }
            },
            variants: [
              {
                begin: /^>(?=[ ]|$)/
              },
              {
                begin: /^\.\.\.(?=[ ]|$)/
              }
            ]
          }
        ]
      };
    }
    module.exports = nodeRepl;
  }
});
export default require_node_repl();
//# sourceMappingURL=/build/_shared/node-repl-R2HXKTV6.js.map
