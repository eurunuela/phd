import {
  __esm
} from "/build/_shared/chunk-D5NAPBYJ.js";

// ../../node_modules/@codemirror/legacy-modes/mode/haskell.js
function switchState(source, setState, f) {
  setState(f);
  return f(source, setState);
}
function normal(source, setState) {
  if (source.eatWhile(whiteCharRE)) {
    return null;
  }
  var ch = source.next();
  if (specialRE.test(ch)) {
    if (ch == "{" && source.eat("-")) {
      var t = "comment";
      if (source.eat("#")) {
        t = "meta";
      }
      return switchState(source, setState, ncomment(t, 1));
    }
    return null;
  }
  if (ch == "'") {
    if (source.eat("\\")) {
      source.next();
    } else {
      source.next();
    }
    if (source.eat("'")) {
      return "string";
    }
    return "error";
  }
  if (ch == '"') {
    return switchState(source, setState, stringLiteral);
  }
  if (largeRE.test(ch)) {
    source.eatWhile(idRE);
    if (source.eat(".")) {
      return "qualifier";
    }
    return "type";
  }
  if (smallRE.test(ch)) {
    source.eatWhile(idRE);
    return "variable";
  }
  if (digitRE.test(ch)) {
    if (ch == "0") {
      if (source.eat(/[xX]/)) {
        source.eatWhile(hexitRE);
        return "integer";
      }
      if (source.eat(/[oO]/)) {
        source.eatWhile(octitRE);
        return "number";
      }
    }
    source.eatWhile(digitRE);
    var t = "number";
    if (source.match(/^\.\d+/)) {
      t = "number";
    }
    if (source.eat(/[eE]/)) {
      t = "number";
      source.eat(/[-+]/);
      source.eatWhile(digitRE);
    }
    return t;
  }
  if (ch == "." && source.eat("."))
    return "keyword";
  if (symbolRE.test(ch)) {
    if (ch == "-" && source.eat(/-/)) {
      source.eatWhile(/-/);
      if (!source.eat(symbolRE)) {
        source.skipToEnd();
        return "comment";
      }
    }
    source.eatWhile(symbolRE);
    return "variable";
  }
  return "error";
}
function ncomment(type, nest) {
  if (nest == 0) {
    return normal;
  }
  return function(source, setState) {
    var currNest = nest;
    while (!source.eol()) {
      var ch = source.next();
      if (ch == "{" && source.eat("-")) {
        ++currNest;
      } else if (ch == "-" && source.eat("}")) {
        --currNest;
        if (currNest == 0) {
          setState(normal);
          return type;
        }
      }
    }
    setState(ncomment(type, currNest));
    return type;
  };
}
function stringLiteral(source, setState) {
  while (!source.eol()) {
    var ch = source.next();
    if (ch == '"') {
      setState(normal);
      return "string";
    }
    if (ch == "\\") {
      if (source.eol() || source.eat(whiteCharRE)) {
        setState(stringGap);
        return "string";
      }
      if (source.eat("&")) {
      } else {
        source.next();
      }
    }
  }
  setState(normal);
  return "error";
}
function stringGap(source, setState) {
  if (source.eat("\\")) {
    return switchState(source, setState, stringLiteral);
  }
  source.next();
  setState(normal);
  return "error";
}
var smallRE, largeRE, digitRE, hexitRE, octitRE, idRE, symbolRE, specialRE, whiteCharRE, wellKnownWords, haskell;
var init_haskell = __esm({
  "../../node_modules/@codemirror/legacy-modes/mode/haskell.js"() {
    smallRE = /[a-z_]/;
    largeRE = /[A-Z]/;
    digitRE = /\d/;
    hexitRE = /[0-9A-Fa-f]/;
    octitRE = /[0-7]/;
    idRE = /[a-z_A-Z0-9'\xa1-\uffff]/;
    symbolRE = /[-!#$%&*+.\/<=>?@\\^|~:]/;
    specialRE = /[(),;[\]`{}]/;
    whiteCharRE = /[ \t\v\f]/;
    wellKnownWords = function() {
      var wkw = {};
      function setType(t) {
        return function() {
          for (var i = 0; i < arguments.length; i++)
            wkw[arguments[i]] = t;
        };
      }
      setType("keyword")(
        "case",
        "class",
        "data",
        "default",
        "deriving",
        "do",
        "else",
        "foreign",
        "if",
        "import",
        "in",
        "infix",
        "infixl",
        "infixr",
        "instance",
        "let",
        "module",
        "newtype",
        "of",
        "then",
        "type",
        "where",
        "_"
      );
      setType("keyword")(
        "..",
        ":",
        "::",
        "=",
        "\\",
        "<-",
        "->",
        "@",
        "~",
        "=>"
      );
      setType("builtin")(
        "!!",
        "$!",
        "$",
        "&&",
        "+",
        "++",
        "-",
        ".",
        "/",
        "/=",
        "<",
        "<*",
        "<=",
        "<$>",
        "<*>",
        "=<<",
        "==",
        ">",
        ">=",
        ">>",
        ">>=",
        "^",
        "^^",
        "||",
        "*",
        "*>",
        "**"
      );
      setType("builtin")(
        "Applicative",
        "Bool",
        "Bounded",
        "Char",
        "Double",
        "EQ",
        "Either",
        "Enum",
        "Eq",
        "False",
        "FilePath",
        "Float",
        "Floating",
        "Fractional",
        "Functor",
        "GT",
        "IO",
        "IOError",
        "Int",
        "Integer",
        "Integral",
        "Just",
        "LT",
        "Left",
        "Maybe",
        "Monad",
        "Nothing",
        "Num",
        "Ord",
        "Ordering",
        "Rational",
        "Read",
        "ReadS",
        "Real",
        "RealFloat",
        "RealFrac",
        "Right",
        "Show",
        "ShowS",
        "String",
        "True"
      );
      setType("builtin")(
        "abs",
        "acos",
        "acosh",
        "all",
        "and",
        "any",
        "appendFile",
        "asTypeOf",
        "asin",
        "asinh",
        "atan",
        "atan2",
        "atanh",
        "break",
        "catch",
        "ceiling",
        "compare",
        "concat",
        "concatMap",
        "const",
        "cos",
        "cosh",
        "curry",
        "cycle",
        "decodeFloat",
        "div",
        "divMod",
        "drop",
        "dropWhile",
        "either",
        "elem",
        "encodeFloat",
        "enumFrom",
        "enumFromThen",
        "enumFromThenTo",
        "enumFromTo",
        "error",
        "even",
        "exp",
        "exponent",
        "fail",
        "filter",
        "flip",
        "floatDigits",
        "floatRadix",
        "floatRange",
        "floor",
        "fmap",
        "foldl",
        "foldl1",
        "foldr",
        "foldr1",
        "fromEnum",
        "fromInteger",
        "fromIntegral",
        "fromRational",
        "fst",
        "gcd",
        "getChar",
        "getContents",
        "getLine",
        "head",
        "id",
        "init",
        "interact",
        "ioError",
        "isDenormalized",
        "isIEEE",
        "isInfinite",
        "isNaN",
        "isNegativeZero",
        "iterate",
        "last",
        "lcm",
        "length",
        "lex",
        "lines",
        "log",
        "logBase",
        "lookup",
        "map",
        "mapM",
        "mapM_",
        "max",
        "maxBound",
        "maximum",
        "maybe",
        "min",
        "minBound",
        "minimum",
        "mod",
        "negate",
        "not",
        "notElem",
        "null",
        "odd",
        "or",
        "otherwise",
        "pi",
        "pred",
        "print",
        "product",
        "properFraction",
        "pure",
        "putChar",
        "putStr",
        "putStrLn",
        "quot",
        "quotRem",
        "read",
        "readFile",
        "readIO",
        "readList",
        "readLn",
        "readParen",
        "reads",
        "readsPrec",
        "realToFrac",
        "recip",
        "rem",
        "repeat",
        "replicate",
        "return",
        "reverse",
        "round",
        "scaleFloat",
        "scanl",
        "scanl1",
        "scanr",
        "scanr1",
        "seq",
        "sequence",
        "sequence_",
        "show",
        "showChar",
        "showList",
        "showParen",
        "showString",
        "shows",
        "showsPrec",
        "significand",
        "signum",
        "sin",
        "sinh",
        "snd",
        "span",
        "splitAt",
        "sqrt",
        "subtract",
        "succ",
        "sum",
        "tail",
        "take",
        "takeWhile",
        "tan",
        "tanh",
        "toEnum",
        "toInteger",
        "toRational",
        "truncate",
        "uncurry",
        "undefined",
        "unlines",
        "until",
        "unwords",
        "unzip",
        "unzip3",
        "userError",
        "words",
        "writeFile",
        "zip",
        "zip3",
        "zipWith",
        "zipWith3"
      );
      return wkw;
    }();
    haskell = {
      name: "haskell",
      startState: function() {
        return { f: normal };
      },
      copyState: function(s) {
        return { f: s.f };
      },
      token: function(stream, state) {
        var t = state.f(stream, function(s) {
          state.f = s;
        });
        var w = stream.current();
        return wellKnownWords.hasOwnProperty(w) ? wellKnownWords[w] : t;
      },
      languageData: {
        commentTokens: { line: "--", block: { open: "{-", close: "-}" } }
      }
    };
  }
});
init_haskell();
export {
  haskell
};
//# sourceMappingURL=/build/_shared/haskell-P4YTJ65P.js.map