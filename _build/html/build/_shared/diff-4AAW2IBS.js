import {
  __commonJS
} from "/build/_shared/chunk-D5NAPBYJ.js";

// ../../node_modules/highlight.js/lib/languages/diff.js
var require_diff = __commonJS({
  "../../node_modules/highlight.js/lib/languages/diff.js"(exports, module) {
    function diff(hljs) {
      return {
        name: "Diff",
        aliases: ["patch"],
        contains: [
          {
            className: "meta",
            relevance: 10,
            variants: [
              {
                begin: /^@@ +-\d+,\d+ +\+\d+,\d+ +@@/
              },
              {
                begin: /^\*\*\* +\d+,\d+ +\*\*\*\*$/
              },
              {
                begin: /^--- +\d+,\d+ +----$/
              }
            ]
          },
          {
            className: "comment",
            variants: [
              {
                begin: /Index: /,
                end: /$/
              },
              {
                begin: /^index/,
                end: /$/
              },
              {
                begin: /={3,}/,
                end: /$/
              },
              {
                begin: /^-{3}/,
                end: /$/
              },
              {
                begin: /^\*{3} /,
                end: /$/
              },
              {
                begin: /^\+{3}/,
                end: /$/
              },
              {
                begin: /^\*{15}$/
              },
              {
                begin: /^diff --git/,
                end: /$/
              }
            ]
          },
          {
            className: "addition",
            begin: /^\+/,
            end: /$/
          },
          {
            className: "deletion",
            begin: /^-/,
            end: /$/
          },
          {
            className: "addition",
            begin: /^!/,
            end: /$/
          }
        ]
      };
    }
    module.exports = diff;
  }
});
export default require_diff();
//# sourceMappingURL=/build/_shared/diff-4AAW2IBS.js.map