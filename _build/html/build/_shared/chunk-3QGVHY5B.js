import {
  __commonJS
} from "/build/_shared/chunk-D5NAPBYJ.js";

// ../../node_modules/refractor/lang/brainfuck.js
var require_brainfuck = __commonJS({
  "../../node_modules/refractor/lang/brainfuck.js"(exports, module) {
    module.exports = brainfuck;
    brainfuck.displayName = "brainfuck";
    brainfuck.aliases = [];
    function brainfuck(Prism) {
      Prism.languages.brainfuck = {
        pointer: {
          pattern: /<|>/,
          alias: "keyword"
        },
        increment: {
          pattern: /\+/,
          alias: "inserted"
        },
        decrement: {
          pattern: /-/,
          alias: "deleted"
        },
        branching: {
          pattern: /\[|\]/,
          alias: "important"
        },
        operator: /[.,]/,
        comment: /\S+/
      };
    }
  }
});

export {
  require_brainfuck
};
//# sourceMappingURL=/build/_shared/chunk-3QGVHY5B.js.map
