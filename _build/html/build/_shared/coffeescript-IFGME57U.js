import {
  __esm
} from "/build/_shared/chunk-D5NAPBYJ.js";

// ../../node_modules/@codemirror/legacy-modes/mode/coffeescript.js
function wordRegexp(words) {
  return new RegExp("^((" + words.join(")|(") + "))\\b");
}
function tokenBase(stream, state) {
  if (stream.sol()) {
    if (state.scope.align === null)
      state.scope.align = false;
    var scopeOffset = state.scope.offset;
    if (stream.eatSpace()) {
      var lineOffset = stream.indentation();
      if (lineOffset > scopeOffset && state.scope.type == "coffee") {
        return "indent";
      } else if (lineOffset < scopeOffset) {
        return "dedent";
      }
      return null;
    } else {
      if (scopeOffset > 0) {
        dedent(stream, state);
      }
    }
  }
  if (stream.eatSpace()) {
    return null;
  }
  var ch = stream.peek();
  if (stream.match("####")) {
    stream.skipToEnd();
    return "comment";
  }
  if (stream.match("###")) {
    state.tokenize = longComment;
    return state.tokenize(stream, state);
  }
  if (ch === "#") {
    stream.skipToEnd();
    return "comment";
  }
  if (stream.match(/^-?[0-9\.]/, false)) {
    var floatLiteral = false;
    if (stream.match(/^-?\d*\.\d+(e[\+\-]?\d+)?/i)) {
      floatLiteral = true;
    }
    if (stream.match(/^-?\d+\.\d*/)) {
      floatLiteral = true;
    }
    if (stream.match(/^-?\.\d+/)) {
      floatLiteral = true;
    }
    if (floatLiteral) {
      if (stream.peek() == ".") {
        stream.backUp(1);
      }
      return "number";
    }
    var intLiteral = false;
    if (stream.match(/^-?0x[0-9a-f]+/i)) {
      intLiteral = true;
    }
    if (stream.match(/^-?[1-9]\d*(e[\+\-]?\d+)?/)) {
      intLiteral = true;
    }
    if (stream.match(/^-?0(?![\dx])/i)) {
      intLiteral = true;
    }
    if (intLiteral) {
      return "number";
    }
  }
  if (stream.match(stringPrefixes)) {
    state.tokenize = tokenFactory(stream.current(), false, "string");
    return state.tokenize(stream, state);
  }
  if (stream.match(regexPrefixes)) {
    if (stream.current() != "/" || stream.match(/^.*\//, false)) {
      state.tokenize = tokenFactory(stream.current(), true, "string.special");
      return state.tokenize(stream, state);
    } else {
      stream.backUp(1);
    }
  }
  if (stream.match(operators) || stream.match(wordOperators)) {
    return "operator";
  }
  if (stream.match(delimiters)) {
    return "punctuation";
  }
  if (stream.match(constants)) {
    return "atom";
  }
  if (stream.match(atProp) || state.prop && stream.match(identifiers)) {
    return "property";
  }
  if (stream.match(keywords)) {
    return "keyword";
  }
  if (stream.match(identifiers)) {
    return "variable";
  }
  stream.next();
  return ERRORCLASS;
}
function tokenFactory(delimiter, singleline, outclass) {
  return function(stream, state) {
    while (!stream.eol()) {
      stream.eatWhile(/[^'"\/\\]/);
      if (stream.eat("\\")) {
        stream.next();
        if (singleline && stream.eol()) {
          return outclass;
        }
      } else if (stream.match(delimiter)) {
        state.tokenize = tokenBase;
        return outclass;
      } else {
        stream.eat(/['"\/]/);
      }
    }
    if (singleline) {
      state.tokenize = tokenBase;
    }
    return outclass;
  };
}
function longComment(stream, state) {
  while (!stream.eol()) {
    stream.eatWhile(/[^#]/);
    if (stream.match("###")) {
      state.tokenize = tokenBase;
      break;
    }
    stream.eatWhile("#");
  }
  return "comment";
}
function indent(stream, state, type = "coffee") {
  var offset = 0, align = false, alignOffset = null;
  for (var scope = state.scope; scope; scope = scope.prev) {
    if (scope.type === "coffee" || scope.type == "}") {
      offset = scope.offset + stream.indentUnit;
      break;
    }
  }
  if (type !== "coffee") {
    align = null;
    alignOffset = stream.column() + stream.current().length;
  } else if (state.scope.align) {
    state.scope.align = false;
  }
  state.scope = {
    offset,
    type,
    prev: state.scope,
    align,
    alignOffset
  };
}
function dedent(stream, state) {
  if (!state.scope.prev)
    return;
  if (state.scope.type === "coffee") {
    var _indent = stream.indentation();
    var matched = false;
    for (var scope = state.scope; scope; scope = scope.prev) {
      if (_indent === scope.offset) {
        matched = true;
        break;
      }
    }
    if (!matched) {
      return true;
    }
    while (state.scope.prev && state.scope.offset !== _indent) {
      state.scope = state.scope.prev;
    }
    return false;
  } else {
    state.scope = state.scope.prev;
    return false;
  }
}
function tokenLexer(stream, state) {
  var style = state.tokenize(stream, state);
  var current = stream.current();
  if (current === "return") {
    state.dedent = true;
  }
  if ((current === "->" || current === "=>") && stream.eol() || style === "indent") {
    indent(stream, state);
  }
  var delimiter_index = "[({".indexOf(current);
  if (delimiter_index !== -1) {
    indent(stream, state, "])}".slice(delimiter_index, delimiter_index + 1));
  }
  if (indentKeywords.exec(current)) {
    indent(stream, state);
  }
  if (current == "then") {
    dedent(stream, state);
  }
  if (style === "dedent") {
    if (dedent(stream, state)) {
      return ERRORCLASS;
    }
  }
  delimiter_index = "])}".indexOf(current);
  if (delimiter_index !== -1) {
    while (state.scope.type == "coffee" && state.scope.prev)
      state.scope = state.scope.prev;
    if (state.scope.type == current)
      state.scope = state.scope.prev;
  }
  if (state.dedent && stream.eol()) {
    if (state.scope.type == "coffee" && state.scope.prev)
      state.scope = state.scope.prev;
    state.dedent = false;
  }
  return style == "indent" || style == "dedent" ? null : style;
}
var ERRORCLASS, operators, delimiters, identifiers, atProp, wordOperators, indentKeywords, commonKeywords, keywords, stringPrefixes, regexPrefixes, commonConstants, constants, coffeeScript;
var init_coffeescript = __esm({
  "../../node_modules/@codemirror/legacy-modes/mode/coffeescript.js"() {
    ERRORCLASS = "error";
    operators = /^(?:->|=>|\+[+=]?|-[\-=]?|\*[\*=]?|\/[\/=]?|[=!]=|<[><]?=?|>>?=?|%=?|&=?|\|=?|\^=?|\~|!|\?|(or|and|\|\||&&|\?)=)/;
    delimiters = /^(?:[()\[\]{},:`=;]|\.\.?\.?)/;
    identifiers = /^[_A-Za-z$][_A-Za-z$0-9]*/;
    atProp = /^@[_A-Za-z$][_A-Za-z$0-9]*/;
    wordOperators = wordRegexp([
      "and",
      "or",
      "not",
      "is",
      "isnt",
      "in",
      "instanceof",
      "typeof"
    ]);
    indentKeywords = [
      "for",
      "while",
      "loop",
      "if",
      "unless",
      "else",
      "switch",
      "try",
      "catch",
      "finally",
      "class"
    ];
    commonKeywords = [
      "break",
      "by",
      "continue",
      "debugger",
      "delete",
      "do",
      "in",
      "of",
      "new",
      "return",
      "then",
      "this",
      "@",
      "throw",
      "when",
      "until",
      "extends"
    ];
    keywords = wordRegexp(indentKeywords.concat(commonKeywords));
    indentKeywords = wordRegexp(indentKeywords);
    stringPrefixes = /^('{3}|\"{3}|['\"])/;
    regexPrefixes = /^(\/{3}|\/)/;
    commonConstants = ["Infinity", "NaN", "undefined", "null", "true", "false", "on", "off", "yes", "no"];
    constants = wordRegexp(commonConstants);
    coffeeScript = {
      name: "coffeescript",
      startState: function() {
        return {
          tokenize: tokenBase,
          scope: { offset: 0, type: "coffee", prev: null, align: false },
          prop: false,
          dedent: 0
        };
      },
      token: function(stream, state) {
        var fillAlign = state.scope.align === null && state.scope;
        if (fillAlign && stream.sol())
          fillAlign.align = false;
        var style = tokenLexer(stream, state);
        if (style && style != "comment") {
          if (fillAlign)
            fillAlign.align = true;
          state.prop = style == "punctuation" && stream.current() == ".";
        }
        return style;
      },
      indent: function(state, text) {
        if (state.tokenize != tokenBase)
          return 0;
        var scope = state.scope;
        var closer = text && "])}".indexOf(text.charAt(0)) > -1;
        if (closer)
          while (scope.type == "coffee" && scope.prev)
            scope = scope.prev;
        var closes = closer && scope.type === text.charAt(0);
        if (scope.align)
          return scope.alignOffset - (closes ? 1 : 0);
        else
          return (closes ? scope.prev : scope).offset;
      },
      languageData: {
        commentTokens: { line: "#" }
      }
    };
  }
});
init_coffeescript();
export {
  coffeeScript
};
//# sourceMappingURL=/build/_shared/coffeescript-IFGME57U.js.map