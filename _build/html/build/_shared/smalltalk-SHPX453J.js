import {
  __esm
} from "/build/_shared/chunk-D5NAPBYJ.js";

// ../../node_modules/@codemirror/legacy-modes/mode/smalltalk.js
var specialChars, keywords, Context, Token, State, next, nextComment, nextString, nextSymbol, nextTemporaries, smalltalk;
var init_smalltalk = __esm({
  "../../node_modules/@codemirror/legacy-modes/mode/smalltalk.js"() {
    specialChars = /[+\-\/\\*~<>=@%|&?!.,:;^]/;
    keywords = /true|false|nil|self|super|thisContext/;
    Context = function(tokenizer, parent) {
      this.next = tokenizer;
      this.parent = parent;
    };
    Token = function(name, context, eos) {
      this.name = name;
      this.context = context;
      this.eos = eos;
    };
    State = function() {
      this.context = new Context(next, null);
      this.expectVariable = true;
      this.indentation = 0;
      this.userIndentationDelta = 0;
    };
    State.prototype.userIndent = function(indentation, indentUnit) {
      this.userIndentationDelta = indentation > 0 ? indentation / indentUnit - this.indentation : 0;
    };
    next = function(stream, context, state) {
      var token = new Token(null, context, false);
      var aChar = stream.next();
      if (aChar === '"') {
        token = nextComment(stream, new Context(nextComment, context));
      } else if (aChar === "'") {
        token = nextString(stream, new Context(nextString, context));
      } else if (aChar === "#") {
        if (stream.peek() === "'") {
          stream.next();
          token = nextSymbol(stream, new Context(nextSymbol, context));
        } else {
          if (stream.eatWhile(/[^\s.{}\[\]()]/))
            token.name = "string.special";
          else
            token.name = "meta";
        }
      } else if (aChar === "$") {
        if (stream.next() === "<") {
          stream.eatWhile(/[^\s>]/);
          stream.next();
        }
        token.name = "string.special";
      } else if (aChar === "|" && state.expectVariable) {
        token.context = new Context(nextTemporaries, context);
      } else if (/[\[\]{}()]/.test(aChar)) {
        token.name = "bracket";
        token.eos = /[\[{(]/.test(aChar);
        if (aChar === "[") {
          state.indentation++;
        } else if (aChar === "]") {
          state.indentation = Math.max(0, state.indentation - 1);
        }
      } else if (specialChars.test(aChar)) {
        stream.eatWhile(specialChars);
        token.name = "operator";
        token.eos = aChar !== ";";
      } else if (/\d/.test(aChar)) {
        stream.eatWhile(/[\w\d]/);
        token.name = "number";
      } else if (/[\w_]/.test(aChar)) {
        stream.eatWhile(/[\w\d_]/);
        token.name = state.expectVariable ? keywords.test(stream.current()) ? "keyword" : "variable" : null;
      } else {
        token.eos = state.expectVariable;
      }
      return token;
    };
    nextComment = function(stream, context) {
      stream.eatWhile(/[^"]/);
      return new Token("comment", stream.eat('"') ? context.parent : context, true);
    };
    nextString = function(stream, context) {
      stream.eatWhile(/[^']/);
      return new Token("string", stream.eat("'") ? context.parent : context, false);
    };
    nextSymbol = function(stream, context) {
      stream.eatWhile(/[^']/);
      return new Token("string.special", stream.eat("'") ? context.parent : context, false);
    };
    nextTemporaries = function(stream, context) {
      var token = new Token(null, context, false);
      var aChar = stream.next();
      if (aChar === "|") {
        token.context = context.parent;
        token.eos = true;
      } else {
        stream.eatWhile(/[^|]/);
        token.name = "variable";
      }
      return token;
    };
    smalltalk = {
      name: "smalltalk",
      startState: function() {
        return new State();
      },
      token: function(stream, state) {
        state.userIndent(stream.indentation(), stream.indentUnit);
        if (stream.eatSpace()) {
          return null;
        }
        var token = state.context.next(stream, state.context, state);
        state.context = token.context;
        state.expectVariable = token.eos;
        return token.name;
      },
      blankLine: function(state, indentUnit) {
        state.userIndent(0, indentUnit);
      },
      indent: function(state, textAfter, cx) {
        var i = state.context.next === next && textAfter && textAfter.charAt(0) === "]" ? -1 : state.userIndentationDelta;
        return (state.indentation + i) * cx.unit;
      },
      languageData: {
        indentOnInput: /^\s*\]$/
      }
    };
  }
});
init_smalltalk();
export {
  smalltalk
};
//# sourceMappingURL=/build/_shared/smalltalk-SHPX453J.js.map