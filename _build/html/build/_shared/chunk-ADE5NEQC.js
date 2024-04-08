import {
  Annotation,
  CharCategory,
  Decoration,
  EditorSelection,
  EditorView,
  Facet,
  MapMode,
  Prec,
  RangeSet,
  RangeValue,
  StateEffect,
  StateField,
  Text,
  WidgetType,
  codePointAt,
  codePointSize,
  fromCodePoint,
  indentUnit,
  init_dist,
  init_dist2,
  init_dist5 as init_dist3,
  keymap,
  syntaxTree
} from "/build/_shared/chunk-56LNZOHZ.js";
import {
  __esm
} from "/build/_shared/chunk-D5NAPBYJ.js";

// ../../node_modules/@codemirror/autocomplete/dist/index.js
function toSet(chars) {
  let flat = Object.keys(chars).join("");
  let words = /\w/.test(flat);
  if (words)
    flat = flat.replace(/\w/g, "");
  return `[${words ? "\\w" : ""}${flat.replace(/[^\w\s]/g, "\\$&")}]`;
}
function prefixMatch(options) {
  let first = /* @__PURE__ */ Object.create(null), rest = /* @__PURE__ */ Object.create(null);
  for (let { label } of options) {
    first[label[0]] = true;
    for (let i = 1; i < label.length; i++)
      rest[label[i]] = true;
  }
  let source = toSet(first) + toSet(rest) + "*$";
  return [new RegExp("^" + source), new RegExp(source)];
}
function completeFromList(list) {
  let options = list.map((o) => typeof o == "string" ? { label: o } : o);
  let [validFor, match] = options.every((o) => /^\w+$/.test(o.label)) ? [/\w*$/, /\w+$/] : prefixMatch(options);
  return (context) => {
    let token = context.matchBefore(match);
    return token || context.explicit ? { from: token ? token.from : context.pos, options, validFor } : null;
  };
}
function ifNotIn(nodes, source) {
  return (context) => {
    for (let pos = syntaxTree(context.state).resolveInner(context.pos, -1); pos; pos = pos.parent) {
      if (nodes.indexOf(pos.name) > -1)
        return null;
      if (pos.type.isTop)
        break;
    }
    return source(context);
  };
}
function ensureAnchor(expr, start) {
  var _a;
  let { source } = expr;
  let addStart = start && source[0] != "^", addEnd = source[source.length - 1] != "$";
  if (!addStart && !addEnd)
    return expr;
  return new RegExp(`${addStart ? "^" : ""}(?:${source})${addEnd ? "$" : ""}`, (_a = expr.flags) !== null && _a !== void 0 ? _a : expr.ignoreCase ? "i" : "");
}
function fieldSelection(ranges, field) {
  return EditorSelection.create(ranges.filter((r) => r.field == field).map((r) => EditorSelection.range(r.from, r.to)));
}
function snippet(template) {
  let snippet2 = Snippet.parse(template);
  return (editor, completion, from, to) => {
    let { text, ranges } = snippet2.instantiate(editor.state, from);
    let spec = {
      changes: { from, to, insert: Text.of(text) },
      scrollIntoView: true,
      annotations: completion ? pickedCompletion.of(completion) : void 0
    };
    if (ranges.length)
      spec.selection = fieldSelection(ranges, 0);
    if (ranges.length > 1) {
      let active = new ActiveSnippet(ranges, 0);
      let effects = spec.effects = [setActive.of(active)];
      if (editor.state.field(snippetState, false) === void 0)
        effects.push(StateEffect.appendConfig.of([snippetState, addSnippetKeymap, snippetPointerHandler, baseTheme]));
    }
    editor.dispatch(editor.state.update(spec));
  };
}
function moveField(dir) {
  return ({ state, dispatch }) => {
    let active = state.field(snippetState, false);
    if (!active || dir < 0 && active.active == 0)
      return false;
    let next = active.active + dir, last = dir > 0 && !active.ranges.some((r) => r.field == next + dir);
    dispatch(state.update({
      selection: fieldSelection(active.ranges, next),
      effects: setActive.of(last ? null : new ActiveSnippet(active.ranges, next)),
      scrollIntoView: true
    }));
    return true;
  };
}
function snippetCompletion(template, completion) {
  return Object.assign(Object.assign({}, completion), { apply: snippet(template) });
}
function closeBrackets() {
  return [inputHandler, bracketState];
}
function closing(ch) {
  for (let i = 0; i < definedClosing.length; i += 2)
    if (definedClosing.charCodeAt(i) == ch)
      return definedClosing.charAt(i + 1);
  return fromCodePoint(ch < 128 ? ch : ch + 1);
}
function config(state, pos) {
  return state.languageDataAt("closeBrackets", pos)[0] || defaults;
}
function insertBracket(state, bracket) {
  let conf = config(state, state.selection.main.head);
  let tokens = conf.brackets || defaults.brackets;
  for (let tok of tokens) {
    let closed = closing(codePointAt(tok, 0));
    if (bracket == tok)
      return closed == tok ? handleSame(state, tok, tokens.indexOf(tok + tok + tok) > -1, conf) : handleOpen(state, tok, closed, conf.before || defaults.before);
    if (bracket == closed && closedBracketAt(state, state.selection.main.from))
      return handleClose(state, tok, closed);
  }
  return null;
}
function closedBracketAt(state, pos) {
  let found = false;
  state.field(bracketState).between(0, state.doc.length, (from) => {
    if (from == pos)
      found = true;
  });
  return found;
}
function nextChar(doc, pos) {
  let next = doc.sliceString(pos, pos + 2);
  return next.slice(0, codePointSize(codePointAt(next, 0)));
}
function prevChar(doc, pos) {
  let prev = doc.sliceString(pos - 2, pos);
  return codePointSize(codePointAt(prev, 0)) == prev.length ? prev : prev.slice(1);
}
function handleOpen(state, open, close, closeBefore) {
  let dont = null, changes = state.changeByRange((range) => {
    if (!range.empty)
      return {
        changes: [{ insert: open, from: range.from }, { insert: close, from: range.to }],
        effects: closeBracketEffect.of(range.to + open.length),
        range: EditorSelection.range(range.anchor + open.length, range.head + open.length)
      };
    let next = nextChar(state.doc, range.head);
    if (!next || /\s/.test(next) || closeBefore.indexOf(next) > -1)
      return {
        changes: { insert: open + close, from: range.head },
        effects: closeBracketEffect.of(range.head + open.length),
        range: EditorSelection.cursor(range.head + open.length)
      };
    return { range: dont = range };
  });
  return dont ? null : state.update(changes, {
    scrollIntoView: true,
    userEvent: "input.type"
  });
}
function handleClose(state, _open, close) {
  let dont = null, changes = state.changeByRange((range) => {
    if (range.empty && nextChar(state.doc, range.head) == close)
      return {
        changes: { from: range.head, to: range.head + close.length, insert: close },
        range: EditorSelection.cursor(range.head + close.length)
      };
    return dont = { range };
  });
  return dont ? null : state.update(changes, {
    scrollIntoView: true,
    userEvent: "input.type"
  });
}
function handleSame(state, token, allowTriple, config2) {
  let stringPrefixes = config2.stringPrefixes || defaults.stringPrefixes;
  let dont = null, changes = state.changeByRange((range) => {
    if (!range.empty)
      return {
        changes: [{ insert: token, from: range.from }, { insert: token, from: range.to }],
        effects: closeBracketEffect.of(range.to + token.length),
        range: EditorSelection.range(range.anchor + token.length, range.head + token.length)
      };
    let pos = range.head, next = nextChar(state.doc, pos), start;
    if (next == token) {
      if (nodeStart(state, pos)) {
        return {
          changes: { insert: token + token, from: pos },
          effects: closeBracketEffect.of(pos + token.length),
          range: EditorSelection.cursor(pos + token.length)
        };
      } else if (closedBracketAt(state, pos)) {
        let isTriple = allowTriple && state.sliceDoc(pos, pos + token.length * 3) == token + token + token;
        let content = isTriple ? token + token + token : token;
        return {
          changes: { from: pos, to: pos + content.length, insert: content },
          range: EditorSelection.cursor(pos + content.length)
        };
      }
    } else if (allowTriple && state.sliceDoc(pos - 2 * token.length, pos) == token + token && (start = canStartStringAt(state, pos - 2 * token.length, stringPrefixes)) > -1 && nodeStart(state, start)) {
      return {
        changes: { insert: token + token + token + token, from: pos },
        effects: closeBracketEffect.of(pos + token.length),
        range: EditorSelection.cursor(pos + token.length)
      };
    } else if (state.charCategorizer(pos)(next) != CharCategory.Word) {
      if (canStartStringAt(state, pos, stringPrefixes) > -1 && !probablyInString(state, pos, token, stringPrefixes))
        return {
          changes: { insert: token + token, from: pos },
          effects: closeBracketEffect.of(pos + token.length),
          range: EditorSelection.cursor(pos + token.length)
        };
    }
    return { range: dont = range };
  });
  return dont ? null : state.update(changes, {
    scrollIntoView: true,
    userEvent: "input.type"
  });
}
function nodeStart(state, pos) {
  let tree = syntaxTree(state).resolveInner(pos + 1);
  return tree.parent && tree.from == pos;
}
function probablyInString(state, pos, quoteToken, prefixes) {
  let node = syntaxTree(state).resolveInner(pos, -1);
  let maxPrefix = prefixes.reduce((m, p) => Math.max(m, p.length), 0);
  for (let i = 0; i < 5; i++) {
    let start = state.sliceDoc(node.from, Math.min(node.to, node.from + quoteToken.length + maxPrefix));
    let quotePos = start.indexOf(quoteToken);
    if (!quotePos || quotePos > -1 && prefixes.indexOf(start.slice(0, quotePos)) > -1) {
      let first = node.firstChild;
      while (first && first.from == node.from && first.to - first.from > quoteToken.length + quotePos) {
        if (state.sliceDoc(first.to - quoteToken.length, first.to) == quoteToken)
          return false;
        first = first.firstChild;
      }
      return true;
    }
    let parent = node.to == pos && node.parent;
    if (!parent)
      break;
    node = parent;
  }
  return false;
}
function canStartStringAt(state, pos, prefixes) {
  let charCat = state.charCategorizer(pos);
  if (charCat(state.sliceDoc(pos - 1, pos)) != CharCategory.Word)
    return pos;
  for (let prefix of prefixes) {
    let start = pos - prefix.length;
    if (state.sliceDoc(start, pos) == prefix && charCat(state.sliceDoc(start - 1, start)) != CharCategory.Word)
      return start;
  }
  return -1;
}
var CompletionContext, pickedCompletion, baseTheme, FieldPos, FieldRange, Snippet, fieldMarker, fieldRange, ActiveSnippet, setActive, moveToField, snippetState, clearSnippet, nextSnippetField, prevSnippetField, defaultSnippetKeymap, snippetKeymap, addSnippetKeymap, snippetPointerHandler, defaults, closeBracketEffect, closedBracket, bracketState, definedClosing, android, inputHandler, deleteBracketPair, closeBracketsKeymap;
var init_dist4 = __esm({
  "../../node_modules/@codemirror/autocomplete/dist/index.js"() {
    init_dist();
    init_dist2();
    init_dist3();
    CompletionContext = class {
      /**
      Create a new completion context. (Mostly useful for testing
      completion sources—in the editor, the extension will create
      these for you.)
      */
      constructor(state, pos, explicit) {
        this.state = state;
        this.pos = pos;
        this.explicit = explicit;
        this.abortListeners = [];
      }
      /**
      Get the extent, content, and (if there is a token) type of the
      token before `this.pos`.
      */
      tokenBefore(types) {
        let token = syntaxTree(this.state).resolveInner(this.pos, -1);
        while (token && types.indexOf(token.name) < 0)
          token = token.parent;
        return token ? {
          from: token.from,
          to: this.pos,
          text: this.state.sliceDoc(token.from, this.pos),
          type: token.type
        } : null;
      }
      /**
      Get the match of the given expression directly before the
      cursor.
      */
      matchBefore(expr) {
        let line = this.state.doc.lineAt(this.pos);
        let start = Math.max(line.from, this.pos - 250);
        let str = line.text.slice(start - line.from, this.pos - line.from);
        let found = str.search(ensureAnchor(expr, false));
        return found < 0 ? null : { from: start + found, to: this.pos, text: str.slice(found) };
      }
      /**
      Yields true when the query has been aborted. Can be useful in
      asynchronous queries to avoid doing work that will be ignored.
      */
      get aborted() {
        return this.abortListeners == null;
      }
      /**
      Allows you to register abort handlers, which will be called when
      the query is
      [aborted](https://codemirror.net/6/docs/ref/#autocomplete.CompletionContext.aborted).
      */
      addEventListener(type, listener) {
        if (type == "abort" && this.abortListeners)
          this.abortListeners.push(listener);
      }
    };
    pickedCompletion = /* @__PURE__ */ Annotation.define();
    baseTheme = /* @__PURE__ */ EditorView.baseTheme({
      ".cm-tooltip.cm-tooltip-autocomplete": {
        "& > ul": {
          fontFamily: "monospace",
          whiteSpace: "nowrap",
          overflow: "hidden auto",
          maxWidth_fallback: "700px",
          maxWidth: "min(700px, 95vw)",
          minWidth: "250px",
          maxHeight: "10em",
          height: "100%",
          listStyle: "none",
          margin: 0,
          padding: 0,
          "& > li, & > completion-section": {
            padding: "1px 3px",
            lineHeight: 1.2
          },
          "& > li": {
            overflowX: "hidden",
            textOverflow: "ellipsis",
            cursor: "pointer"
          },
          "& > completion-section": {
            display: "list-item",
            borderBottom: "1px solid silver",
            paddingLeft: "0.5em",
            opacity: 0.7
          }
        }
      },
      "&light .cm-tooltip-autocomplete ul li[aria-selected]": {
        background: "#17c",
        color: "white"
      },
      "&light .cm-tooltip-autocomplete-disabled ul li[aria-selected]": {
        background: "#777"
      },
      "&dark .cm-tooltip-autocomplete ul li[aria-selected]": {
        background: "#347",
        color: "white"
      },
      "&dark .cm-tooltip-autocomplete-disabled ul li[aria-selected]": {
        background: "#444"
      },
      ".cm-completionListIncompleteTop:before, .cm-completionListIncompleteBottom:after": {
        content: '"\xB7\xB7\xB7"',
        opacity: 0.5,
        display: "block",
        textAlign: "center"
      },
      ".cm-tooltip.cm-completionInfo": {
        position: "absolute",
        padding: "3px 9px",
        width: "max-content",
        maxWidth: `${400}px`,
        boxSizing: "border-box"
      },
      ".cm-completionInfo.cm-completionInfo-left": { right: "100%" },
      ".cm-completionInfo.cm-completionInfo-right": { left: "100%" },
      ".cm-completionInfo.cm-completionInfo-left-narrow": { right: `${30}px` },
      ".cm-completionInfo.cm-completionInfo-right-narrow": { left: `${30}px` },
      "&light .cm-snippetField": { backgroundColor: "#00000022" },
      "&dark .cm-snippetField": { backgroundColor: "#ffffff22" },
      ".cm-snippetFieldPosition": {
        verticalAlign: "text-top",
        width: 0,
        height: "1.15em",
        display: "inline-block",
        margin: "0 -0.7px -.7em",
        borderLeft: "1.4px dotted #888"
      },
      ".cm-completionMatchedText": {
        textDecoration: "underline"
      },
      ".cm-completionDetail": {
        marginLeft: "0.5em",
        fontStyle: "italic"
      },
      ".cm-completionIcon": {
        fontSize: "90%",
        width: ".8em",
        display: "inline-block",
        textAlign: "center",
        paddingRight: ".6em",
        opacity: "0.6",
        boxSizing: "content-box"
      },
      ".cm-completionIcon-function, .cm-completionIcon-method": {
        "&:after": { content: "'\u0192'" }
      },
      ".cm-completionIcon-class": {
        "&:after": { content: "'\u25CB'" }
      },
      ".cm-completionIcon-interface": {
        "&:after": { content: "'\u25CC'" }
      },
      ".cm-completionIcon-variable": {
        "&:after": { content: "'\u{1D465}'" }
      },
      ".cm-completionIcon-constant": {
        "&:after": { content: "'\u{1D436}'" }
      },
      ".cm-completionIcon-type": {
        "&:after": { content: "'\u{1D461}'" }
      },
      ".cm-completionIcon-enum": {
        "&:after": { content: "'\u222A'" }
      },
      ".cm-completionIcon-property": {
        "&:after": { content: "'\u25A1'" }
      },
      ".cm-completionIcon-keyword": {
        "&:after": { content: "'\u{1F511}\uFE0E'" }
        // Disable emoji rendering
      },
      ".cm-completionIcon-namespace": {
        "&:after": { content: "'\u25A2'" }
      },
      ".cm-completionIcon-text": {
        "&:after": { content: "'abc'", fontSize: "50%", verticalAlign: "middle" }
      }
    });
    FieldPos = class {
      constructor(field, line, from, to) {
        this.field = field;
        this.line = line;
        this.from = from;
        this.to = to;
      }
    };
    FieldRange = class {
      constructor(field, from, to) {
        this.field = field;
        this.from = from;
        this.to = to;
      }
      map(changes) {
        let from = changes.mapPos(this.from, -1, MapMode.TrackDel);
        let to = changes.mapPos(this.to, 1, MapMode.TrackDel);
        return from == null || to == null ? null : new FieldRange(this.field, from, to);
      }
    };
    Snippet = class {
      constructor(lines, fieldPositions) {
        this.lines = lines;
        this.fieldPositions = fieldPositions;
      }
      instantiate(state, pos) {
        let text = [], lineStart = [pos];
        let lineObj = state.doc.lineAt(pos), baseIndent = /^\s*/.exec(lineObj.text)[0];
        for (let line of this.lines) {
          if (text.length) {
            let indent = baseIndent, tabs = /^\t*/.exec(line)[0].length;
            for (let i = 0; i < tabs; i++)
              indent += state.facet(indentUnit);
            lineStart.push(pos + indent.length - tabs);
            line = indent + line.slice(tabs);
          }
          text.push(line);
          pos += line.length + 1;
        }
        let ranges = this.fieldPositions.map((pos2) => new FieldRange(pos2.field, lineStart[pos2.line] + pos2.from, lineStart[pos2.line] + pos2.to));
        return { text, ranges };
      }
      static parse(template) {
        let fields = [];
        let lines = [], positions = [], m;
        for (let line of template.split(/\r\n?|\n/)) {
          while (m = /[#$]\{(?:(\d+)(?::([^}]*))?|([^}]*))\}/.exec(line)) {
            let seq = m[1] ? +m[1] : null, name = m[2] || m[3] || "", found = -1;
            for (let i = 0; i < fields.length; i++) {
              if (seq != null ? fields[i].seq == seq : name ? fields[i].name == name : false)
                found = i;
            }
            if (found < 0) {
              let i = 0;
              while (i < fields.length && (seq == null || fields[i].seq != null && fields[i].seq < seq))
                i++;
              fields.splice(i, 0, { seq, name });
              found = i;
              for (let pos of positions)
                if (pos.field >= found)
                  pos.field++;
            }
            positions.push(new FieldPos(found, lines.length, m.index, m.index + name.length));
            line = line.slice(0, m.index) + name + line.slice(m.index + m[0].length);
          }
          for (let esc; esc = /\\([{}])/.exec(line); ) {
            line = line.slice(0, esc.index) + esc[1] + line.slice(esc.index + esc[0].length);
            for (let pos of positions)
              if (pos.line == lines.length && pos.from > esc.index) {
                pos.from--;
                pos.to--;
              }
          }
          lines.push(line);
        }
        return new Snippet(lines, positions);
      }
    };
    fieldMarker = /* @__PURE__ */ Decoration.widget({ widget: /* @__PURE__ */ new class extends WidgetType {
      toDOM() {
        let span = document.createElement("span");
        span.className = "cm-snippetFieldPosition";
        return span;
      }
      ignoreEvent() {
        return false;
      }
    }() });
    fieldRange = /* @__PURE__ */ Decoration.mark({ class: "cm-snippetField" });
    ActiveSnippet = class {
      constructor(ranges, active) {
        this.ranges = ranges;
        this.active = active;
        this.deco = Decoration.set(ranges.map((r) => (r.from == r.to ? fieldMarker : fieldRange).range(r.from, r.to)));
      }
      map(changes) {
        let ranges = [];
        for (let r of this.ranges) {
          let mapped = r.map(changes);
          if (!mapped)
            return null;
          ranges.push(mapped);
        }
        return new ActiveSnippet(ranges, this.active);
      }
      selectionInsideField(sel) {
        return sel.ranges.every((range) => this.ranges.some((r) => r.field == this.active && r.from <= range.from && r.to >= range.to));
      }
    };
    setActive = /* @__PURE__ */ StateEffect.define({
      map(value, changes) {
        return value && value.map(changes);
      }
    });
    moveToField = /* @__PURE__ */ StateEffect.define();
    snippetState = /* @__PURE__ */ StateField.define({
      create() {
        return null;
      },
      update(value, tr) {
        for (let effect of tr.effects) {
          if (effect.is(setActive))
            return effect.value;
          if (effect.is(moveToField) && value)
            return new ActiveSnippet(value.ranges, effect.value);
        }
        if (value && tr.docChanged)
          value = value.map(tr.changes);
        if (value && tr.selection && !value.selectionInsideField(tr.selection))
          value = null;
        return value;
      },
      provide: (f) => EditorView.decorations.from(f, (val) => val ? val.deco : Decoration.none)
    });
    clearSnippet = ({ state, dispatch }) => {
      let active = state.field(snippetState, false);
      if (!active)
        return false;
      dispatch(state.update({ effects: setActive.of(null) }));
      return true;
    };
    nextSnippetField = /* @__PURE__ */ moveField(1);
    prevSnippetField = /* @__PURE__ */ moveField(-1);
    defaultSnippetKeymap = [
      { key: "Tab", run: nextSnippetField, shift: prevSnippetField },
      { key: "Escape", run: clearSnippet }
    ];
    snippetKeymap = /* @__PURE__ */ Facet.define({
      combine(maps) {
        return maps.length ? maps[0] : defaultSnippetKeymap;
      }
    });
    addSnippetKeymap = /* @__PURE__ */ Prec.highest(/* @__PURE__ */ keymap.compute([snippetKeymap], (state) => state.facet(snippetKeymap)));
    snippetPointerHandler = /* @__PURE__ */ EditorView.domEventHandlers({
      mousedown(event, view) {
        let active = view.state.field(snippetState, false), pos;
        if (!active || (pos = view.posAtCoords({ x: event.clientX, y: event.clientY })) == null)
          return false;
        let match = active.ranges.find((r) => r.from <= pos && r.to >= pos);
        if (!match || match.field == active.active)
          return false;
        view.dispatch({
          selection: fieldSelection(active.ranges, match.field),
          effects: setActive.of(active.ranges.some((r) => r.field > match.field) ? new ActiveSnippet(active.ranges, match.field) : null),
          scrollIntoView: true
        });
        return true;
      }
    });
    defaults = {
      brackets: ["(", "[", "{", "'", '"'],
      before: ")]}:;>",
      stringPrefixes: []
    };
    closeBracketEffect = /* @__PURE__ */ StateEffect.define({
      map(value, mapping) {
        let mapped = mapping.mapPos(value, -1, MapMode.TrackAfter);
        return mapped == null ? void 0 : mapped;
      }
    });
    closedBracket = /* @__PURE__ */ new class extends RangeValue {
    }();
    closedBracket.startSide = 1;
    closedBracket.endSide = -1;
    bracketState = /* @__PURE__ */ StateField.define({
      create() {
        return RangeSet.empty;
      },
      update(value, tr) {
        if (tr.selection) {
          let lineStart = tr.state.doc.lineAt(tr.selection.main.head).from;
          let prevLineStart = tr.startState.doc.lineAt(tr.startState.selection.main.head).from;
          if (lineStart != tr.changes.mapPos(prevLineStart, -1))
            value = RangeSet.empty;
        }
        value = value.map(tr.changes);
        for (let effect of tr.effects)
          if (effect.is(closeBracketEffect))
            value = value.update({ add: [closedBracket.range(effect.value, effect.value + 1)] });
        return value;
      }
    });
    definedClosing = "()[]{}<>";
    android = typeof navigator == "object" && /* @__PURE__ */ /Android\b/.test(navigator.userAgent);
    inputHandler = /* @__PURE__ */ EditorView.inputHandler.of((view, from, to, insert) => {
      if ((android ? view.composing : view.compositionStarted) || view.state.readOnly)
        return false;
      let sel = view.state.selection.main;
      if (insert.length > 2 || insert.length == 2 && codePointSize(codePointAt(insert, 0)) == 1 || from != sel.from || to != sel.to)
        return false;
      let tr = insertBracket(view.state, insert);
      if (!tr)
        return false;
      view.dispatch(tr);
      return true;
    });
    deleteBracketPair = ({ state, dispatch }) => {
      if (state.readOnly)
        return false;
      let conf = config(state, state.selection.main.head);
      let tokens = conf.brackets || defaults.brackets;
      let dont = null, changes = state.changeByRange((range) => {
        if (range.empty) {
          let before = prevChar(state.doc, range.head);
          for (let token of tokens) {
            if (token == before && nextChar(state.doc, range.head) == closing(codePointAt(token, 0)))
              return {
                changes: { from: range.head - token.length, to: range.head + token.length },
                range: EditorSelection.cursor(range.head - token.length)
              };
          }
        }
        return { range: dont = range };
      });
      if (!dont)
        dispatch(state.update(changes, { scrollIntoView: true, userEvent: "delete.backward" }));
      return !dont;
    };
    closeBracketsKeymap = [
      { key: "Backspace", run: deleteBracketPair }
    ];
  }
});

export {
  CompletionContext,
  completeFromList,
  ifNotIn,
  snippetCompletion,
  closeBrackets,
  closeBracketsKeymap,
  init_dist4 as init_dist
};
//# sourceMappingURL=/build/_shared/chunk-ADE5NEQC.js.map
