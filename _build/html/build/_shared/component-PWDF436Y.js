import {
  require_color_name,
  require_color_string
} from "/build/_shared/chunk-WPZ7VNTV.js";
import {
  closeBrackets,
  closeBracketsKeymap,
  init_dist as init_dist6
} from "/build/_shared/chunk-ADE5NEQC.js";
import {
  Annotation,
  ChangeDesc,
  ChangeSet,
  CharCategory,
  Compartment,
  Decoration,
  Direction,
  EditorSelection,
  EditorState,
  EditorView,
  Facet,
  HighlightStyle,
  IndentContext,
  LRLanguage,
  LRParser,
  LanguageDescription,
  LanguageSupport,
  LocalTokenGroup,
  NodeProp,
  Prec,
  RangeSetBuilder,
  StateEffect,
  StateField,
  StreamLanguage,
  StyleModule,
  Text,
  ViewPlugin,
  bracketMatching,
  codePointAt,
  codePointSize,
  combineConfig,
  countColumn,
  crosshairCursor,
  defaultHighlightStyle,
  drawSelection,
  findClusterBreak,
  foldGutter,
  fromCodePoint,
  getIndentUnit,
  getIndentation,
  getPanel,
  highlightActiveLine,
  highlightSpecialChars,
  highlightTrailingWhitespace,
  highlightTree,
  highlightWhitespace,
  indentOnInput,
  indentString,
  indentUnit,
  init_dist,
  init_dist2,
  init_dist3,
  init_dist4,
  init_dist5,
  init_dist6 as init_dist7,
  init_style_mod,
  keymap,
  lineNumbers,
  matchBrackets,
  rectangularSelection,
  runScopeHandlers,
  scrollPastEnd,
  showPanel,
  syntaxHighlighting,
  syntaxTree,
  tags,
  tooltips
} from "/build/_shared/chunk-56LNZOHZ.js";
import {
  DOMUtils,
  InputGroup,
  ReactWidget,
  Signal,
  TextItem,
  VDomModel,
  VDomRenderer,
  _defineProperty,
  _extends,
  _typeof,
  _unsupportedIterableToArray,
  classes,
  index_es6_exports,
  init_defineProperty,
  init_extends,
  init_index_es6,
  init_index_es63 as init_index_es62,
  init_index_es64 as init_index_es63,
  init_lib,
  init_lib2,
  init_lib3,
  init_lib4,
  init_typeof,
  init_unsupportedIterableToArray,
  lineFormIcon,
  nullTranslator,
  require_dist,
  require_minimist,
  require_url_parse,
  showPopup
} from "/build/_shared/chunk-VQ44ZQQP.js";
import "/build/_shared/chunk-6S3SPRRW.js";
import "/build/_shared/chunk-EO2YHY6V.js";
import {
  require_react
} from "/build/_shared/chunk-IFNAVDNZ.js";
import {
  __commonJS,
  __esm,
  __require,
  __toCommonJS,
  __toESM
} from "/build/_shared/chunk-D5NAPBYJ.js";

// ../../node_modules/@codemirror/commands/dist/index.js
function command(f, option) {
  return ({ state, dispatch }) => {
    if (state.readOnly)
      return false;
    let tr = f(option, state);
    if (!tr)
      return false;
    dispatch(state.update(tr));
    return true;
  };
}
function getConfig(state, pos) {
  let data = state.languageDataAt("commentTokens", pos);
  return data.length ? data[0] : {};
}
function findBlockComment(state, { open, close }, from2, to) {
  let textBefore = state.sliceDoc(from2 - SearchMargin, from2);
  let textAfter = state.sliceDoc(to, to + SearchMargin);
  let spaceBefore = /\s*$/.exec(textBefore)[0].length, spaceAfter = /^\s*/.exec(textAfter)[0].length;
  let beforeOff = textBefore.length - spaceBefore;
  if (textBefore.slice(beforeOff - open.length, beforeOff) == open && textAfter.slice(spaceAfter, spaceAfter + close.length) == close) {
    return {
      open: { pos: from2 - spaceBefore, margin: spaceBefore && 1 },
      close: { pos: to + spaceAfter, margin: spaceAfter && 1 }
    };
  }
  let startText, endText;
  if (to - from2 <= 2 * SearchMargin) {
    startText = endText = state.sliceDoc(from2, to);
  } else {
    startText = state.sliceDoc(from2, from2 + SearchMargin);
    endText = state.sliceDoc(to - SearchMargin, to);
  }
  let startSpace = /^\s*/.exec(startText)[0].length, endSpace = /\s*$/.exec(endText)[0].length;
  let endOff = endText.length - endSpace - close.length;
  if (startText.slice(startSpace, startSpace + open.length) == open && endText.slice(endOff, endOff + close.length) == close) {
    return {
      open: {
        pos: from2 + startSpace + open.length,
        margin: /\s/.test(startText.charAt(startSpace + open.length)) ? 1 : 0
      },
      close: {
        pos: to - endSpace - close.length,
        margin: /\s/.test(endText.charAt(endOff - 1)) ? 1 : 0
      }
    };
  }
  return null;
}
function selectedLineRanges(state) {
  let ranges = [];
  for (let r of state.selection.ranges) {
    let fromLine = state.doc.lineAt(r.from);
    let toLine = r.to <= fromLine.to ? fromLine : state.doc.lineAt(r.to);
    let last2 = ranges.length - 1;
    if (last2 >= 0 && ranges[last2].to > fromLine.from)
      ranges[last2].to = toLine.to;
    else
      ranges.push({ from: fromLine.from + /^\s*/.exec(fromLine.text)[0].length, to: toLine.to });
  }
  return ranges;
}
function changeBlockComment(option, state, ranges = state.selection.ranges) {
  let tokens = ranges.map((r) => getConfig(state, r.from).block);
  if (!tokens.every((c) => c))
    return null;
  let comments = ranges.map((r, i) => findBlockComment(state, tokens[i], r.from, r.to));
  if (option != 2 && !comments.every((c) => c)) {
    return { changes: state.changes(ranges.map((range, i) => {
      if (comments[i])
        return [];
      return [{ from: range.from, insert: tokens[i].open + " " }, { from: range.to, insert: " " + tokens[i].close }];
    })) };
  } else if (option != 1 && comments.some((c) => c)) {
    let changes = [];
    for (let i = 0, comment; i < comments.length; i++)
      if (comment = comments[i]) {
        let token = tokens[i], { open, close } = comment;
        changes.push({ from: open.pos - token.open.length, to: open.pos + open.margin }, { from: close.pos - close.margin, to: close.pos + token.close.length });
      }
    return { changes };
  }
  return null;
}
function changeLineComment(option, state, ranges = state.selection.ranges) {
  let lines = [];
  let prevLine = -1;
  for (let { from: from2, to } of ranges) {
    let startI = lines.length, minIndent = 1e9;
    let token = getConfig(state, from2).line;
    if (!token)
      continue;
    for (let pos = from2; pos <= to; ) {
      let line = state.doc.lineAt(pos);
      if (line.from > prevLine && (from2 == to || to > line.from)) {
        prevLine = line.from;
        let indent = /^\s*/.exec(line.text)[0].length;
        let empty2 = indent == line.length;
        let comment = line.text.slice(indent, indent + token.length) == token ? indent : -1;
        if (indent < line.text.length && indent < minIndent)
          minIndent = indent;
        lines.push({ line, comment, token, indent, empty: empty2, single: false });
      }
      pos = line.to + 1;
    }
    if (minIndent < 1e9) {
      for (let i = startI; i < lines.length; i++)
        if (lines[i].indent < lines[i].line.text.length)
          lines[i].indent = minIndent;
    }
    if (lines.length == startI + 1)
      lines[startI].single = true;
  }
  if (option != 2 && lines.some((l) => l.comment < 0 && (!l.empty || l.single))) {
    let changes = [];
    for (let { line, token, indent, empty: empty2, single } of lines)
      if (single || !empty2)
        changes.push({ from: line.from + indent, insert: token + " " });
    let changeSet = state.changes(changes);
    return { changes: changeSet, selection: state.selection.map(changeSet, 1) };
  } else if (option != 1 && lines.some((l) => l.comment >= 0)) {
    let changes = [];
    for (let { line, comment, token } of lines)
      if (comment >= 0) {
        let from2 = line.from + comment, to = from2 + token.length;
        if (line.text[to - line.from] == " ")
          to++;
        changes.push({ from: from2, to });
      }
    return { changes };
  }
  return null;
}
function updateBranch(branch, to, maxLen, newEvent) {
  let start = to + 1 > maxLen + 20 ? to - maxLen - 1 : 0;
  let newBranch = branch.slice(start, to);
  newBranch.push(newEvent);
  return newBranch;
}
function isAdjacent(a, b) {
  let ranges = [], isAdjacent2 = false;
  a.iterChangedRanges((f, t) => ranges.push(f, t));
  b.iterChangedRanges((_f, _t, f, t) => {
    for (let i = 0; i < ranges.length; ) {
      let from2 = ranges[i++], to = ranges[i++];
      if (t >= from2 && f <= to)
        isAdjacent2 = true;
    }
  });
  return isAdjacent2;
}
function eqSelectionShape(a, b) {
  return a.ranges.length == b.ranges.length && a.ranges.filter((r, i) => r.empty != b.ranges[i].empty).length === 0;
}
function conc(a, b) {
  return !a.length ? b : !b.length ? a : a.concat(b);
}
function addSelection(branch, selection) {
  if (!branch.length) {
    return [HistEvent.selection([selection])];
  } else {
    let lastEvent = branch[branch.length - 1];
    let sels = lastEvent.selectionsAfter.slice(Math.max(0, lastEvent.selectionsAfter.length - MaxSelectionsPerEvent));
    if (sels.length && sels[sels.length - 1].eq(selection))
      return branch;
    sels.push(selection);
    return updateBranch(branch, branch.length - 1, 1e9, lastEvent.setSelAfter(sels));
  }
}
function popSelection(branch) {
  let last2 = branch[branch.length - 1];
  let newBranch = branch.slice();
  newBranch[branch.length - 1] = last2.setSelAfter(last2.selectionsAfter.slice(0, last2.selectionsAfter.length - 1));
  return newBranch;
}
function addMappingToBranch(branch, mapping) {
  if (!branch.length)
    return branch;
  let length3 = branch.length, selections = none;
  while (length3) {
    let event = mapEvent(branch[length3 - 1], mapping, selections);
    if (event.changes && !event.changes.empty || event.effects.length) {
      let result = branch.slice(0, length3);
      result[length3 - 1] = event;
      return result;
    } else {
      mapping = event.mapped;
      length3--;
      selections = event.selectionsAfter;
    }
  }
  return selections.length ? [HistEvent.selection(selections)] : none;
}
function mapEvent(event, mapping, extraSelections) {
  let selections = conc(event.selectionsAfter.length ? event.selectionsAfter.map((s) => s.map(mapping)) : none, extraSelections);
  if (!event.changes)
    return HistEvent.selection(selections);
  let mappedChanges = event.changes.map(mapping), before = mapping.mapDesc(event.changes, true);
  let fullMapping = event.mapped ? event.mapped.composeDesc(before) : before;
  return new HistEvent(mappedChanges, StateEffect.mapEffects(event.effects, mapping), fullMapping, event.startSelection.map(before), selections);
}
function updateSel(sel, by) {
  return EditorSelection.create(sel.ranges.map(by), sel.mainIndex);
}
function setSel(state, selection) {
  return state.update({ selection, scrollIntoView: true, userEvent: "select" });
}
function moveSel({ state, dispatch }, how) {
  let selection = updateSel(state.selection, how);
  if (selection.eq(state.selection))
    return false;
  dispatch(setSel(state, selection));
  return true;
}
function rangeEnd(range, forward) {
  return EditorSelection.cursor(forward ? range.to : range.from);
}
function cursorByChar(view, forward) {
  return moveSel(view, (range) => range.empty ? view.moveByChar(range, forward) : rangeEnd(range, forward));
}
function ltrAtCursor(view) {
  return view.textDirectionAt(view.state.selection.main.head) == Direction.LTR;
}
function cursorByGroup(view, forward) {
  return moveSel(view, (range) => range.empty ? view.moveByGroup(range, forward) : rangeEnd(range, forward));
}
function interestingNode(state, node, bracketProp) {
  if (node.type.prop(bracketProp))
    return true;
  let len = node.to - node.from;
  return len && (len > 2 || /[^\s,.;:]/.test(state.sliceDoc(node.from, node.to))) || node.firstChild;
}
function moveBySyntax(state, start, forward) {
  let pos = syntaxTree(state).resolveInner(start.head);
  let bracketProp = forward ? NodeProp.closedBy : NodeProp.openedBy;
  for (let at = start.head; ; ) {
    let next = forward ? pos.childAfter(at) : pos.childBefore(at);
    if (!next)
      break;
    if (interestingNode(state, next, bracketProp))
      pos = next;
    else
      at = forward ? next.to : next.from;
  }
  let bracket = pos.type.prop(bracketProp), match, newPos;
  if (bracket && (match = forward ? matchBrackets(state, pos.from, 1) : matchBrackets(state, pos.to, -1)) && match.matched)
    newPos = forward ? match.end.to : match.end.from;
  else
    newPos = forward ? pos.to : pos.from;
  return EditorSelection.cursor(newPos, forward ? -1 : 1);
}
function cursorByLine(view, forward) {
  return moveSel(view, (range) => {
    if (!range.empty)
      return rangeEnd(range, forward);
    let moved = view.moveVertically(range, forward);
    return moved.head != range.head ? moved : view.moveToLineBoundary(range, forward);
  });
}
function pageInfo(view) {
  let selfScroll = view.scrollDOM.clientHeight < view.scrollDOM.scrollHeight - 2;
  let marginTop = 0, marginBottom = 0, height;
  if (selfScroll) {
    for (let source of view.state.facet(EditorView.scrollMargins)) {
      let margins = source(view);
      if (margins === null || margins === void 0 ? void 0 : margins.top)
        marginTop = Math.max(margins === null || margins === void 0 ? void 0 : margins.top, marginTop);
      if (margins === null || margins === void 0 ? void 0 : margins.bottom)
        marginBottom = Math.max(margins === null || margins === void 0 ? void 0 : margins.bottom, marginBottom);
    }
    height = view.scrollDOM.clientHeight - marginTop - marginBottom;
  } else {
    height = (view.dom.ownerDocument.defaultView || window).innerHeight;
  }
  return {
    marginTop,
    marginBottom,
    selfScroll,
    height: Math.max(view.defaultLineHeight, height - 5)
  };
}
function cursorByPage(view, forward) {
  let page = pageInfo(view);
  let { state } = view, selection = updateSel(state.selection, (range) => {
    return range.empty ? view.moveVertically(range, forward, page.height) : rangeEnd(range, forward);
  });
  if (selection.eq(state.selection))
    return false;
  let effect;
  if (page.selfScroll) {
    let startPos = view.coordsAtPos(state.selection.main.head);
    let scrollRect = view.scrollDOM.getBoundingClientRect();
    let scrollTop = scrollRect.top + page.marginTop, scrollBottom = scrollRect.bottom - page.marginBottom;
    if (startPos && startPos.top > scrollTop && startPos.bottom < scrollBottom)
      effect = EditorView.scrollIntoView(selection.main.head, { y: "start", yMargin: startPos.top - scrollTop });
  }
  view.dispatch(setSel(state, selection), { effects: effect });
  return true;
}
function moveByLineBoundary(view, start, forward) {
  let line = view.lineBlockAt(start.head), moved = view.moveToLineBoundary(start, forward);
  if (moved.head == start.head && moved.head != (forward ? line.to : line.from))
    moved = view.moveToLineBoundary(start, forward, false);
  if (!forward && moved.head == line.from && line.length) {
    let space = /^\s*/.exec(view.state.sliceDoc(line.from, Math.min(line.from + 100, line.to)))[0].length;
    if (space && start.head != line.from + space)
      moved = EditorSelection.cursor(line.from + space);
  }
  return moved;
}
function toMatchingBracket(state, dispatch, extend) {
  let found2 = false, selection = updateSel(state.selection, (range) => {
    let matching = matchBrackets(state, range.head, -1) || matchBrackets(state, range.head, 1) || range.head > 0 && matchBrackets(state, range.head - 1, 1) || range.head < state.doc.length && matchBrackets(state, range.head + 1, -1);
    if (!matching || !matching.end)
      return range;
    found2 = true;
    let head = matching.start.from == range.head ? matching.end.to : matching.end.from;
    return extend ? EditorSelection.range(range.anchor, head) : EditorSelection.cursor(head);
  });
  if (!found2)
    return false;
  dispatch(setSel(state, selection));
  return true;
}
function extendSel(view, how) {
  let selection = updateSel(view.state.selection, (range) => {
    let head = how(range);
    return EditorSelection.range(range.anchor, head.head, head.goalColumn, head.bidiLevel || void 0);
  });
  if (selection.eq(view.state.selection))
    return false;
  view.dispatch(setSel(view.state, selection));
  return true;
}
function selectByChar(view, forward) {
  return extendSel(view, (range) => view.moveByChar(range, forward));
}
function selectByGroup(view, forward) {
  return extendSel(view, (range) => view.moveByGroup(range, forward));
}
function selectByLine(view, forward) {
  return extendSel(view, (range) => view.moveVertically(range, forward));
}
function selectByPage(view, forward) {
  return extendSel(view, (range) => view.moveVertically(range, forward, pageInfo(view).height));
}
function deleteBy(target, by) {
  if (target.state.readOnly)
    return false;
  let event = "delete.selection", { state } = target;
  let changes = state.changeByRange((range) => {
    let { from: from2, to } = range;
    if (from2 == to) {
      let towards = by(from2);
      if (towards < from2) {
        event = "delete.backward";
        towards = skipAtomic(target, towards, false);
      } else if (towards > from2) {
        event = "delete.forward";
        towards = skipAtomic(target, towards, true);
      }
      from2 = Math.min(from2, towards);
      to = Math.max(to, towards);
    } else {
      from2 = skipAtomic(target, from2, false);
      to = skipAtomic(target, to, true);
    }
    return from2 == to ? { range } : { changes: { from: from2, to }, range: EditorSelection.cursor(from2) };
  });
  if (changes.changes.empty)
    return false;
  target.dispatch(state.update(changes, {
    scrollIntoView: true,
    userEvent: event,
    effects: event == "delete.selection" ? EditorView.announce.of(state.phrase("Selection deleted")) : void 0
  }));
  return true;
}
function skipAtomic(target, pos, forward) {
  if (target instanceof EditorView)
    for (let ranges of target.state.facet(EditorView.atomicRanges).map((f) => f(target)))
      ranges.between(pos, pos, (from2, to) => {
        if (from2 < pos && to > pos)
          pos = forward ? to : from2;
      });
  return pos;
}
function selectedLineBlocks(state) {
  let blocks = [], upto = -1;
  for (let range of state.selection.ranges) {
    let startLine = state.doc.lineAt(range.from), endLine = state.doc.lineAt(range.to);
    if (!range.empty && range.to == endLine.from)
      endLine = state.doc.lineAt(range.to - 1);
    if (upto >= startLine.number) {
      let prev = blocks[blocks.length - 1];
      prev.to = endLine.to;
      prev.ranges.push(range);
    } else {
      blocks.push({ from: startLine.from, to: endLine.to, ranges: [range] });
    }
    upto = endLine.number + 1;
  }
  return blocks;
}
function moveLine(state, dispatch, forward) {
  if (state.readOnly)
    return false;
  let changes = [], ranges = [];
  for (let block of selectedLineBlocks(state)) {
    if (forward ? block.to == state.doc.length : block.from == 0)
      continue;
    let nextLine = state.doc.lineAt(forward ? block.to + 1 : block.from - 1);
    let size = nextLine.length + 1;
    if (forward) {
      changes.push({ from: block.to, to: nextLine.to }, { from: block.from, insert: nextLine.text + state.lineBreak });
      for (let r of block.ranges)
        ranges.push(EditorSelection.range(Math.min(state.doc.length, r.anchor + size), Math.min(state.doc.length, r.head + size)));
    } else {
      changes.push({ from: nextLine.from, to: block.from }, { from: block.to, insert: state.lineBreak + nextLine.text });
      for (let r of block.ranges)
        ranges.push(EditorSelection.range(r.anchor - size, r.head - size));
    }
  }
  if (!changes.length)
    return false;
  dispatch(state.update({
    changes,
    scrollIntoView: true,
    selection: EditorSelection.create(ranges, state.selection.mainIndex),
    userEvent: "move.line"
  }));
  return true;
}
function copyLine(state, dispatch, forward) {
  if (state.readOnly)
    return false;
  let changes = [];
  for (let block of selectedLineBlocks(state)) {
    if (forward)
      changes.push({ from: block.from, insert: state.doc.slice(block.from, block.to) + state.lineBreak });
    else
      changes.push({ from: block.to, insert: state.lineBreak + state.doc.slice(block.from, block.to) });
  }
  dispatch(state.update({ changes, scrollIntoView: true, userEvent: "input.copyline" }));
  return true;
}
function isBetweenBrackets(state, pos) {
  if (/\(\)|\[\]|\{\}/.test(state.sliceDoc(pos - 1, pos + 1)))
    return { from: pos, to: pos };
  let context = syntaxTree(state).resolveInner(pos);
  let before = context.childBefore(pos), after = context.childAfter(pos), closedBy;
  if (before && after && before.to <= pos && after.from >= pos && (closedBy = before.type.prop(NodeProp.closedBy)) && closedBy.indexOf(after.name) > -1 && state.doc.lineAt(before.to).from == state.doc.lineAt(after.from).from && !/\S/.test(state.sliceDoc(before.to, after.from)))
    return { from: before.to, to: after.from };
  return null;
}
function newlineAndIndent(atEof) {
  return ({ state, dispatch }) => {
    if (state.readOnly)
      return false;
    let changes = state.changeByRange((range) => {
      let { from: from2, to } = range, line = state.doc.lineAt(from2);
      let explode = !atEof && from2 == to && isBetweenBrackets(state, from2);
      if (atEof)
        from2 = to = (to <= line.to ? line : state.doc.lineAt(to)).to;
      let cx = new IndentContext(state, { simulateBreak: from2, simulateDoubleBreak: !!explode });
      let indent = getIndentation(cx, from2);
      if (indent == null)
        indent = countColumn(/^\s*/.exec(state.doc.lineAt(from2).text)[0], state.tabSize);
      while (to < line.to && /\s/.test(line.text[to - line.from]))
        to++;
      if (explode)
        ({ from: from2, to } = explode);
      else if (from2 > line.from && from2 < line.from + 100 && !/\S/.test(line.text.slice(0, from2)))
        from2 = line.from;
      let insert = ["", indentString(state, indent)];
      if (explode)
        insert.push(indentString(state, cx.lineIndent(line.from, -1)));
      return {
        changes: { from: from2, to, insert: Text.of(insert) },
        range: EditorSelection.cursor(from2 + 1 + insert[1].length)
      };
    });
    dispatch(state.update(changes, { scrollIntoView: true, userEvent: "input" }));
    return true;
  };
}
function changeBySelectedLine(state, f) {
  let atLine = -1;
  return state.changeByRange((range) => {
    let changes = [];
    for (let pos = range.from; pos <= range.to; ) {
      let line = state.doc.lineAt(pos);
      if (line.number > atLine && (range.empty || range.to > line.from)) {
        f(line, changes, range);
        atLine = line.number;
      }
      pos = line.to + 1;
    }
    let changeSet = state.changes(changes);
    return {
      changes,
      range: EditorSelection.range(changeSet.mapPos(range.anchor, 1), changeSet.mapPos(range.head, 1))
    };
  });
}
var toggleComment, toggleLineComment, toggleBlockComment, toggleBlockCommentByLine, SearchMargin, fromHistory, invertedEffects, HistEvent, none, MaxSelectionsPerEvent, joinableUserEvent, HistoryState, cursorCharLeft, cursorCharRight, cursorGroupLeft, cursorGroupRight, segmenter, cursorSyntaxLeft, cursorSyntaxRight, cursorLineUp, cursorLineDown, cursorPageUp, cursorPageDown, cursorLineBoundaryForward, cursorLineBoundaryBackward, cursorLineBoundaryLeft, cursorLineBoundaryRight, cursorLineStart, cursorLineEnd, cursorMatchingBracket, selectCharLeft, selectCharRight, selectGroupLeft, selectGroupRight, selectSyntaxLeft, selectSyntaxRight, selectLineUp, selectLineDown, selectPageUp, selectPageDown, selectLineBoundaryForward, selectLineBoundaryBackward, selectLineBoundaryLeft, selectLineBoundaryRight, selectLineStart, selectLineEnd, cursorDocStart, cursorDocEnd, selectDocStart, selectDocEnd, selectAll, selectLine, selectParentSyntax, simplifySelection, deleteByChar, deleteCharBackward, deleteCharForward, deleteByGroup, deleteGroupBackward, deleteGroupForward, deleteToLineEnd, deleteToLineStart, splitLine, transposeChars, moveLineUp, moveLineDown, copyLineUp, copyLineDown, deleteLine, insertNewlineAndIndent, insertBlankLine, indentSelection, indentMore, indentLess, insertTab, emacsStyleKeymap, standardKeymap, defaultKeymap;
var init_dist8 = __esm({
  "../../node_modules/@codemirror/commands/dist/index.js"() {
    init_dist();
    init_dist2();
    init_dist5();
    init_dist3();
    toggleComment = (target) => {
      let { state } = target, line = state.doc.lineAt(state.selection.main.from), config = getConfig(target.state, line.from);
      return config.line ? toggleLineComment(target) : config.block ? toggleBlockCommentByLine(target) : false;
    };
    toggleLineComment = /* @__PURE__ */ command(
      changeLineComment,
      0
      /* CommentOption.Toggle */
    );
    toggleBlockComment = /* @__PURE__ */ command(
      changeBlockComment,
      0
      /* CommentOption.Toggle */
    );
    toggleBlockCommentByLine = /* @__PURE__ */ command(
      (o, s) => changeBlockComment(o, s, selectedLineRanges(s)),
      0
      /* CommentOption.Toggle */
    );
    SearchMargin = 50;
    fromHistory = /* @__PURE__ */ Annotation.define();
    invertedEffects = /* @__PURE__ */ Facet.define();
    HistEvent = class {
      constructor(changes, effects, mapped, startSelection, selectionsAfter) {
        this.changes = changes;
        this.effects = effects;
        this.mapped = mapped;
        this.startSelection = startSelection;
        this.selectionsAfter = selectionsAfter;
      }
      setSelAfter(after) {
        return new HistEvent(this.changes, this.effects, this.mapped, this.startSelection, after);
      }
      toJSON() {
        var _a, _b, _c;
        return {
          changes: (_a = this.changes) === null || _a === void 0 ? void 0 : _a.toJSON(),
          mapped: (_b = this.mapped) === null || _b === void 0 ? void 0 : _b.toJSON(),
          startSelection: (_c = this.startSelection) === null || _c === void 0 ? void 0 : _c.toJSON(),
          selectionsAfter: this.selectionsAfter.map((s) => s.toJSON())
        };
      }
      static fromJSON(json) {
        return new HistEvent(json.changes && ChangeSet.fromJSON(json.changes), [], json.mapped && ChangeDesc.fromJSON(json.mapped), json.startSelection && EditorSelection.fromJSON(json.startSelection), json.selectionsAfter.map(EditorSelection.fromJSON));
      }
      // This does not check `addToHistory` and such, it assumes the
      // transaction needs to be converted to an item. Returns null when
      // there are no changes or effects in the transaction.
      static fromTransaction(tr, selection) {
        let effects = none;
        for (let invert of tr.startState.facet(invertedEffects)) {
          let result = invert(tr);
          if (result.length)
            effects = effects.concat(result);
        }
        if (!effects.length && tr.changes.empty)
          return null;
        return new HistEvent(tr.changes.invert(tr.startState.doc), effects, void 0, selection || tr.startState.selection, none);
      }
      static selection(selections) {
        return new HistEvent(void 0, none, void 0, void 0, selections);
      }
    };
    none = [];
    MaxSelectionsPerEvent = 200;
    joinableUserEvent = /^(input\.type|delete)($|\.)/;
    HistoryState = class {
      constructor(done, undone, prevTime = 0, prevUserEvent = void 0) {
        this.done = done;
        this.undone = undone;
        this.prevTime = prevTime;
        this.prevUserEvent = prevUserEvent;
      }
      isolate() {
        return this.prevTime ? new HistoryState(this.done, this.undone) : this;
      }
      addChanges(event, time2, userEvent, config, tr) {
        let done = this.done, lastEvent = done[done.length - 1];
        if (lastEvent && lastEvent.changes && !lastEvent.changes.empty && event.changes && (!userEvent || joinableUserEvent.test(userEvent)) && (!lastEvent.selectionsAfter.length && time2 - this.prevTime < config.newGroupDelay && config.joinToEvent(tr, isAdjacent(lastEvent.changes, event.changes)) || // For compose (but not compose.start) events, always join with previous event
        userEvent == "input.type.compose")) {
          done = updateBranch(done, done.length - 1, config.minDepth, new HistEvent(event.changes.compose(lastEvent.changes), conc(event.effects, lastEvent.effects), lastEvent.mapped, lastEvent.startSelection, none));
        } else {
          done = updateBranch(done, done.length, config.minDepth, event);
        }
        return new HistoryState(done, none, time2, userEvent);
      }
      addSelection(selection, time2, userEvent, newGroupDelay) {
        let last2 = this.done.length ? this.done[this.done.length - 1].selectionsAfter : none;
        if (last2.length > 0 && time2 - this.prevTime < newGroupDelay && userEvent == this.prevUserEvent && userEvent && /^select($|\.)/.test(userEvent) && eqSelectionShape(last2[last2.length - 1], selection))
          return this;
        return new HistoryState(addSelection(this.done, selection), this.undone, time2, userEvent);
      }
      addMapping(mapping) {
        return new HistoryState(addMappingToBranch(this.done, mapping), addMappingToBranch(this.undone, mapping), this.prevTime, this.prevUserEvent);
      }
      pop(side, state, selection) {
        let branch = side == 0 ? this.done : this.undone;
        if (branch.length == 0)
          return null;
        let event = branch[branch.length - 1];
        if (selection && event.selectionsAfter.length) {
          return state.update({
            selection: event.selectionsAfter[event.selectionsAfter.length - 1],
            annotations: fromHistory.of({ side, rest: popSelection(branch) }),
            userEvent: side == 0 ? "select.undo" : "select.redo",
            scrollIntoView: true
          });
        } else if (!event.changes) {
          return null;
        } else {
          let rest = branch.length == 1 ? none : branch.slice(0, branch.length - 1);
          if (event.mapped)
            rest = addMappingToBranch(rest, event.mapped);
          return state.update({
            changes: event.changes,
            selection: event.startSelection,
            effects: event.effects,
            annotations: fromHistory.of({ side, rest }),
            filter: false,
            userEvent: side == 0 ? "undo" : "redo",
            scrollIntoView: true
          });
        }
      }
    };
    HistoryState.empty = /* @__PURE__ */ new HistoryState(none, none);
    cursorCharLeft = (view) => cursorByChar(view, !ltrAtCursor(view));
    cursorCharRight = (view) => cursorByChar(view, ltrAtCursor(view));
    cursorGroupLeft = (view) => cursorByGroup(view, !ltrAtCursor(view));
    cursorGroupRight = (view) => cursorByGroup(view, ltrAtCursor(view));
    segmenter = typeof Intl != "undefined" && Intl.Segmenter ? /* @__PURE__ */ new Intl.Segmenter(void 0, { granularity: "word" }) : null;
    cursorSyntaxLeft = (view) => moveSel(view, (range) => moveBySyntax(view.state, range, !ltrAtCursor(view)));
    cursorSyntaxRight = (view) => moveSel(view, (range) => moveBySyntax(view.state, range, ltrAtCursor(view)));
    cursorLineUp = (view) => cursorByLine(view, false);
    cursorLineDown = (view) => cursorByLine(view, true);
    cursorPageUp = (view) => cursorByPage(view, false);
    cursorPageDown = (view) => cursorByPage(view, true);
    cursorLineBoundaryForward = (view) => moveSel(view, (range) => moveByLineBoundary(view, range, true));
    cursorLineBoundaryBackward = (view) => moveSel(view, (range) => moveByLineBoundary(view, range, false));
    cursorLineBoundaryLeft = (view) => moveSel(view, (range) => moveByLineBoundary(view, range, !ltrAtCursor(view)));
    cursorLineBoundaryRight = (view) => moveSel(view, (range) => moveByLineBoundary(view, range, ltrAtCursor(view)));
    cursorLineStart = (view) => moveSel(view, (range) => EditorSelection.cursor(view.lineBlockAt(range.head).from, 1));
    cursorLineEnd = (view) => moveSel(view, (range) => EditorSelection.cursor(view.lineBlockAt(range.head).to, -1));
    cursorMatchingBracket = ({ state, dispatch }) => toMatchingBracket(state, dispatch, false);
    selectCharLeft = (view) => selectByChar(view, !ltrAtCursor(view));
    selectCharRight = (view) => selectByChar(view, ltrAtCursor(view));
    selectGroupLeft = (view) => selectByGroup(view, !ltrAtCursor(view));
    selectGroupRight = (view) => selectByGroup(view, ltrAtCursor(view));
    selectSyntaxLeft = (view) => extendSel(view, (range) => moveBySyntax(view.state, range, !ltrAtCursor(view)));
    selectSyntaxRight = (view) => extendSel(view, (range) => moveBySyntax(view.state, range, ltrAtCursor(view)));
    selectLineUp = (view) => selectByLine(view, false);
    selectLineDown = (view) => selectByLine(view, true);
    selectPageUp = (view) => selectByPage(view, false);
    selectPageDown = (view) => selectByPage(view, true);
    selectLineBoundaryForward = (view) => extendSel(view, (range) => moveByLineBoundary(view, range, true));
    selectLineBoundaryBackward = (view) => extendSel(view, (range) => moveByLineBoundary(view, range, false));
    selectLineBoundaryLeft = (view) => extendSel(view, (range) => moveByLineBoundary(view, range, !ltrAtCursor(view)));
    selectLineBoundaryRight = (view) => extendSel(view, (range) => moveByLineBoundary(view, range, ltrAtCursor(view)));
    selectLineStart = (view) => extendSel(view, (range) => EditorSelection.cursor(view.lineBlockAt(range.head).from));
    selectLineEnd = (view) => extendSel(view, (range) => EditorSelection.cursor(view.lineBlockAt(range.head).to));
    cursorDocStart = ({ state, dispatch }) => {
      dispatch(setSel(state, { anchor: 0 }));
      return true;
    };
    cursorDocEnd = ({ state, dispatch }) => {
      dispatch(setSel(state, { anchor: state.doc.length }));
      return true;
    };
    selectDocStart = ({ state, dispatch }) => {
      dispatch(setSel(state, { anchor: state.selection.main.anchor, head: 0 }));
      return true;
    };
    selectDocEnd = ({ state, dispatch }) => {
      dispatch(setSel(state, { anchor: state.selection.main.anchor, head: state.doc.length }));
      return true;
    };
    selectAll = ({ state, dispatch }) => {
      dispatch(state.update({ selection: { anchor: 0, head: state.doc.length }, userEvent: "select" }));
      return true;
    };
    selectLine = ({ state, dispatch }) => {
      let ranges = selectedLineBlocks(state).map(({ from: from2, to }) => EditorSelection.range(from2, Math.min(to + 1, state.doc.length)));
      dispatch(state.update({ selection: EditorSelection.create(ranges), userEvent: "select" }));
      return true;
    };
    selectParentSyntax = ({ state, dispatch }) => {
      let selection = updateSel(state.selection, (range) => {
        var _a;
        let context = syntaxTree(state).resolveInner(range.head, 1);
        while (!(context.from < range.from && context.to >= range.to || context.to > range.to && context.from <= range.from || !((_a = context.parent) === null || _a === void 0 ? void 0 : _a.parent)))
          context = context.parent;
        return EditorSelection.range(context.to, context.from);
      });
      dispatch(setSel(state, selection));
      return true;
    };
    simplifySelection = ({ state, dispatch }) => {
      let cur = state.selection, selection = null;
      if (cur.ranges.length > 1)
        selection = EditorSelection.create([cur.main]);
      else if (!cur.main.empty)
        selection = EditorSelection.create([EditorSelection.cursor(cur.main.head)]);
      if (!selection)
        return false;
      dispatch(setSel(state, selection));
      return true;
    };
    deleteByChar = (target, forward) => deleteBy(target, (pos) => {
      let { state } = target, line = state.doc.lineAt(pos), before, targetPos;
      if (!forward && pos > line.from && pos < line.from + 200 && !/[^ \t]/.test(before = line.text.slice(0, pos - line.from))) {
        if (before[before.length - 1] == "	")
          return pos - 1;
        let col = countColumn(before, state.tabSize), drop = col % getIndentUnit(state) || getIndentUnit(state);
        for (let i = 0; i < drop && before[before.length - 1 - i] == " "; i++)
          pos--;
        targetPos = pos;
      } else {
        targetPos = findClusterBreak(line.text, pos - line.from, forward, forward) + line.from;
        if (targetPos == pos && line.number != (forward ? state.doc.lines : 1))
          targetPos += forward ? 1 : -1;
      }
      return targetPos;
    });
    deleteCharBackward = (view) => deleteByChar(view, false);
    deleteCharForward = (view) => deleteByChar(view, true);
    deleteByGroup = (target, forward) => deleteBy(target, (start) => {
      let pos = start, { state } = target, line = state.doc.lineAt(pos);
      let categorize = state.charCategorizer(pos);
      for (let cat = null; ; ) {
        if (pos == (forward ? line.to : line.from)) {
          if (pos == start && line.number != (forward ? state.doc.lines : 1))
            pos += forward ? 1 : -1;
          break;
        }
        let next = findClusterBreak(line.text, pos - line.from, forward) + line.from;
        let nextChar = line.text.slice(Math.min(pos, next) - line.from, Math.max(pos, next) - line.from);
        let nextCat = categorize(nextChar);
        if (cat != null && nextCat != cat)
          break;
        if (nextChar != " " || pos != start)
          cat = nextCat;
        pos = next;
      }
      return pos;
    });
    deleteGroupBackward = (target) => deleteByGroup(target, false);
    deleteGroupForward = (target) => deleteByGroup(target, true);
    deleteToLineEnd = (view) => deleteBy(view, (pos) => {
      let lineEnd = view.lineBlockAt(pos).to;
      return pos < lineEnd ? lineEnd : Math.min(view.state.doc.length, pos + 1);
    });
    deleteToLineStart = (view) => deleteBy(view, (pos) => {
      let lineStart = view.lineBlockAt(pos).from;
      return pos > lineStart ? lineStart : Math.max(0, pos - 1);
    });
    splitLine = ({ state, dispatch }) => {
      if (state.readOnly)
        return false;
      let changes = state.changeByRange((range) => {
        return {
          changes: { from: range.from, to: range.to, insert: Text.of(["", ""]) },
          range: EditorSelection.cursor(range.from)
        };
      });
      dispatch(state.update(changes, { scrollIntoView: true, userEvent: "input" }));
      return true;
    };
    transposeChars = ({ state, dispatch }) => {
      if (state.readOnly)
        return false;
      let changes = state.changeByRange((range) => {
        if (!range.empty || range.from == 0 || range.from == state.doc.length)
          return { range };
        let pos = range.from, line = state.doc.lineAt(pos);
        let from2 = pos == line.from ? pos - 1 : findClusterBreak(line.text, pos - line.from, false) + line.from;
        let to = pos == line.to ? pos + 1 : findClusterBreak(line.text, pos - line.from, true) + line.from;
        return {
          changes: { from: from2, to, insert: state.doc.slice(pos, to).append(state.doc.slice(from2, pos)) },
          range: EditorSelection.cursor(to)
        };
      });
      if (changes.changes.empty)
        return false;
      dispatch(state.update(changes, { scrollIntoView: true, userEvent: "move.character" }));
      return true;
    };
    moveLineUp = ({ state, dispatch }) => moveLine(state, dispatch, false);
    moveLineDown = ({ state, dispatch }) => moveLine(state, dispatch, true);
    copyLineUp = ({ state, dispatch }) => copyLine(state, dispatch, false);
    copyLineDown = ({ state, dispatch }) => copyLine(state, dispatch, true);
    deleteLine = (view) => {
      if (view.state.readOnly)
        return false;
      let { state } = view, changes = state.changes(selectedLineBlocks(state).map(({ from: from2, to }) => {
        if (from2 > 0)
          from2--;
        else if (to < state.doc.length)
          to++;
        return { from: from2, to };
      }));
      let selection = updateSel(state.selection, (range) => view.moveVertically(range, true)).map(changes);
      view.dispatch({ changes, selection, scrollIntoView: true, userEvent: "delete.line" });
      return true;
    };
    insertNewlineAndIndent = /* @__PURE__ */ newlineAndIndent(false);
    insertBlankLine = /* @__PURE__ */ newlineAndIndent(true);
    indentSelection = ({ state, dispatch }) => {
      if (state.readOnly)
        return false;
      let updated = /* @__PURE__ */ Object.create(null);
      let context = new IndentContext(state, { overrideIndentation: (start) => {
        let found2 = updated[start];
        return found2 == null ? -1 : found2;
      } });
      let changes = changeBySelectedLine(state, (line, changes2, range) => {
        let indent = getIndentation(context, line.from);
        if (indent == null)
          return;
        if (!/\S/.test(line.text))
          indent = 0;
        let cur = /^\s*/.exec(line.text)[0];
        let norm = indentString(state, indent);
        if (cur != norm || range.from < line.from + cur.length) {
          updated[line.from] = indent;
          changes2.push({ from: line.from, to: line.from + cur.length, insert: norm });
        }
      });
      if (!changes.changes.empty)
        dispatch(state.update(changes, { userEvent: "indent" }));
      return true;
    };
    indentMore = ({ state, dispatch }) => {
      if (state.readOnly)
        return false;
      dispatch(state.update(changeBySelectedLine(state, (line, changes) => {
        changes.push({ from: line.from, insert: state.facet(indentUnit) });
      }), { userEvent: "input.indent" }));
      return true;
    };
    indentLess = ({ state, dispatch }) => {
      if (state.readOnly)
        return false;
      dispatch(state.update(changeBySelectedLine(state, (line, changes) => {
        let space = /^\s*/.exec(line.text)[0];
        if (!space)
          return;
        let col = countColumn(space, state.tabSize), keep = 0;
        let insert = indentString(state, Math.max(0, col - getIndentUnit(state)));
        while (keep < space.length && keep < insert.length && space.charCodeAt(keep) == insert.charCodeAt(keep))
          keep++;
        changes.push({ from: line.from + keep, to: line.from + space.length, insert: insert.slice(keep) });
      }), { userEvent: "delete.dedent" }));
      return true;
    };
    insertTab = ({ state, dispatch }) => {
      if (state.selection.ranges.some((r) => !r.empty))
        return indentMore({ state, dispatch });
      dispatch(state.update(state.replaceSelection("	"), { scrollIntoView: true, userEvent: "input" }));
      return true;
    };
    emacsStyleKeymap = [
      { key: "Ctrl-b", run: cursorCharLeft, shift: selectCharLeft, preventDefault: true },
      { key: "Ctrl-f", run: cursorCharRight, shift: selectCharRight },
      { key: "Ctrl-p", run: cursorLineUp, shift: selectLineUp },
      { key: "Ctrl-n", run: cursorLineDown, shift: selectLineDown },
      { key: "Ctrl-a", run: cursorLineStart, shift: selectLineStart },
      { key: "Ctrl-e", run: cursorLineEnd, shift: selectLineEnd },
      { key: "Ctrl-d", run: deleteCharForward },
      { key: "Ctrl-h", run: deleteCharBackward },
      { key: "Ctrl-k", run: deleteToLineEnd },
      { key: "Ctrl-Alt-h", run: deleteGroupBackward },
      { key: "Ctrl-o", run: splitLine },
      { key: "Ctrl-t", run: transposeChars },
      { key: "Ctrl-v", run: cursorPageDown }
    ];
    standardKeymap = /* @__PURE__ */ [
      { key: "ArrowLeft", run: cursorCharLeft, shift: selectCharLeft, preventDefault: true },
      { key: "Mod-ArrowLeft", mac: "Alt-ArrowLeft", run: cursorGroupLeft, shift: selectGroupLeft, preventDefault: true },
      { mac: "Cmd-ArrowLeft", run: cursorLineBoundaryLeft, shift: selectLineBoundaryLeft, preventDefault: true },
      { key: "ArrowRight", run: cursorCharRight, shift: selectCharRight, preventDefault: true },
      { key: "Mod-ArrowRight", mac: "Alt-ArrowRight", run: cursorGroupRight, shift: selectGroupRight, preventDefault: true },
      { mac: "Cmd-ArrowRight", run: cursorLineBoundaryRight, shift: selectLineBoundaryRight, preventDefault: true },
      { key: "ArrowUp", run: cursorLineUp, shift: selectLineUp, preventDefault: true },
      { mac: "Cmd-ArrowUp", run: cursorDocStart, shift: selectDocStart },
      { mac: "Ctrl-ArrowUp", run: cursorPageUp, shift: selectPageUp },
      { key: "ArrowDown", run: cursorLineDown, shift: selectLineDown, preventDefault: true },
      { mac: "Cmd-ArrowDown", run: cursorDocEnd, shift: selectDocEnd },
      { mac: "Ctrl-ArrowDown", run: cursorPageDown, shift: selectPageDown },
      { key: "PageUp", run: cursorPageUp, shift: selectPageUp },
      { key: "PageDown", run: cursorPageDown, shift: selectPageDown },
      { key: "Home", run: cursorLineBoundaryBackward, shift: selectLineBoundaryBackward, preventDefault: true },
      { key: "Mod-Home", run: cursorDocStart, shift: selectDocStart },
      { key: "End", run: cursorLineBoundaryForward, shift: selectLineBoundaryForward, preventDefault: true },
      { key: "Mod-End", run: cursorDocEnd, shift: selectDocEnd },
      { key: "Enter", run: insertNewlineAndIndent },
      { key: "Mod-a", run: selectAll },
      { key: "Backspace", run: deleteCharBackward, shift: deleteCharBackward },
      { key: "Delete", run: deleteCharForward },
      { key: "Mod-Backspace", mac: "Alt-Backspace", run: deleteGroupBackward },
      { key: "Mod-Delete", mac: "Alt-Delete", run: deleteGroupForward },
      { mac: "Mod-Backspace", run: deleteToLineStart },
      { mac: "Mod-Delete", run: deleteToLineEnd }
    ].concat(/* @__PURE__ */ emacsStyleKeymap.map((b) => ({ mac: b.key, run: b.run, shift: b.shift })));
    defaultKeymap = /* @__PURE__ */ [
      { key: "Alt-ArrowLeft", mac: "Ctrl-ArrowLeft", run: cursorSyntaxLeft, shift: selectSyntaxLeft },
      { key: "Alt-ArrowRight", mac: "Ctrl-ArrowRight", run: cursorSyntaxRight, shift: selectSyntaxRight },
      { key: "Alt-ArrowUp", run: moveLineUp },
      { key: "Shift-Alt-ArrowUp", run: copyLineUp },
      { key: "Alt-ArrowDown", run: moveLineDown },
      { key: "Shift-Alt-ArrowDown", run: copyLineDown },
      { key: "Escape", run: simplifySelection },
      { key: "Mod-Enter", run: insertBlankLine },
      { key: "Alt-l", mac: "Ctrl-l", run: selectLine },
      { key: "Mod-i", run: selectParentSyntax, preventDefault: true },
      { key: "Mod-[", run: indentLess },
      { key: "Mod-]", run: indentMore },
      { key: "Mod-Alt-\\", run: indentSelection },
      { key: "Shift-Mod-k", run: deleteLine },
      { key: "Shift-Mod-\\", run: cursorMatchingBracket },
      { key: "Mod-/", run: toggleComment },
      { key: "Alt-A", run: toggleBlockComment }
    ].concat(standardKeymap);
  }
});

// ../../node_modules/@jupyter/ydoc/lib/api.js
var init_api = __esm({
  "../../node_modules/@jupyter/ydoc/lib/api.js"() {
  }
});

// ../../node_modules/@jupyter/ydoc/lib/utils.js
var init_utils = __esm({
  "../../node_modules/@jupyter/ydoc/lib/utils.js"() {
  }
});

// ../../node_modules/@jupyter/ydoc/lib/awareness.js
var init_awareness = __esm({
  "../../node_modules/@jupyter/ydoc/lib/awareness.js"() {
  }
});

// ../../node_modules/@jupyter/ydoc/lib/ytext.js
var init_ytext = __esm({
  "../../node_modules/@jupyter/ydoc/lib/ytext.js"() {
  }
});

// ../../node_modules/lib0/set.js
var create;
var init_set = __esm({
  "../../node_modules/lib0/set.js"() {
    create = () => /* @__PURE__ */ new Set();
  }
});

// ../../node_modules/lib0/array.js
var last, appendTo, from, some, isArray;
var init_array = __esm({
  "../../node_modules/lib0/array.js"() {
    last = (arr) => arr[arr.length - 1];
    appendTo = (dest, src) => {
      for (let i = 0; i < src.length; i++) {
        dest.push(src[i]);
      }
    };
    from = Array.from;
    some = (arr, f) => {
      for (let i = 0; i < arr.length; i++) {
        if (f(arr[i], i, arr)) {
          return true;
        }
      }
      return false;
    };
    isArray = Array.isArray;
  }
});

// ../../node_modules/lib0/string.js
var fromCharCode, fromCodePoint2, MAX_UTF16_CHARACTER, toLowerCase, trimLeftRegex, trimLeft, fromCamelCaseRegex, fromCamelCase, _encodeUtf8Polyfill, utf8TextEncoder, _encodeUtf8Native, encodeUtf8, utf8TextDecoder;
var init_string = __esm({
  "../../node_modules/lib0/string.js"() {
    fromCharCode = String.fromCharCode;
    fromCodePoint2 = String.fromCodePoint;
    MAX_UTF16_CHARACTER = fromCharCode(65535);
    toLowerCase = (s) => s.toLowerCase();
    trimLeftRegex = /^\s*/g;
    trimLeft = (s) => s.replace(trimLeftRegex, "");
    fromCamelCaseRegex = /([A-Z])/g;
    fromCamelCase = (s, separator) => trimLeft(s.replace(fromCamelCaseRegex, (match) => `${separator}${toLowerCase(match)}`));
    _encodeUtf8Polyfill = (str) => {
      const encodedString = unescape(encodeURIComponent(str));
      const len = encodedString.length;
      const buf = new Uint8Array(len);
      for (let i = 0; i < len; i++) {
        buf[i] = /** @type {number} */
        encodedString.codePointAt(i);
      }
      return buf;
    };
    utf8TextEncoder = /** @type {TextEncoder} */
    typeof TextEncoder !== "undefined" ? new TextEncoder() : null;
    _encodeUtf8Native = (str) => utf8TextEncoder.encode(str);
    encodeUtf8 = utf8TextEncoder ? _encodeUtf8Native : _encodeUtf8Polyfill;
    utf8TextDecoder = typeof TextDecoder === "undefined" ? null : new TextDecoder("utf-8", { fatal: true, ignoreBOM: true });
    if (utf8TextDecoder && utf8TextDecoder.decode(new Uint8Array()).length === 1) {
      utf8TextDecoder = null;
    }
  }
});

// ../../node_modules/lib0/map.js
var create2, copy, setIfUndefined, map, any;
var init_map = __esm({
  "../../node_modules/lib0/map.js"() {
    create2 = () => /* @__PURE__ */ new Map();
    copy = (m) => {
      const r = create2();
      m.forEach((v, k) => {
        r.set(k, v);
      });
      return r;
    };
    setIfUndefined = (map2, key, createT) => {
      let set = map2.get(key);
      if (set === void 0) {
        map2.set(key, set = createT());
      }
      return set;
    };
    map = (m, f) => {
      const res = [];
      for (const [key, value] of m) {
        res.push(f(value, key));
      }
      return res;
    };
    any = (m, f) => {
      for (const [key, value] of m) {
        if (f(value, key)) {
          return true;
        }
      }
      return false;
    };
  }
});

// ../../node_modules/lib0/conditions.js
var undefinedToNull;
var init_conditions = __esm({
  "../../node_modules/lib0/conditions.js"() {
    undefinedToNull = (v) => v === void 0 ? null : v;
  }
});

// ../../node_modules/lib0/storage.js
var VarStoragePolyfill, _localStorage, usePolyfill, varStorage;
var init_storage = __esm({
  "../../node_modules/lib0/storage.js"() {
    VarStoragePolyfill = class {
      constructor() {
        this.map = /* @__PURE__ */ new Map();
      }
      /**
       * @param {string} key
       * @param {any} newValue
       */
      setItem(key, newValue) {
        this.map.set(key, newValue);
      }
      /**
       * @param {string} key
       */
      getItem(key) {
        return this.map.get(key);
      }
    };
    _localStorage = new VarStoragePolyfill();
    usePolyfill = true;
    try {
      if (typeof localStorage !== "undefined") {
        _localStorage = localStorage;
        usePolyfill = false;
      }
    } catch (e) {
    }
    varStorage = _localStorage;
  }
});

// ../../node_modules/lib0/object.js
var assign, keys, forEach, length, isEmpty, every, hasProperty, equalFlat;
var init_object = __esm({
  "../../node_modules/lib0/object.js"() {
    assign = Object.assign;
    keys = Object.keys;
    forEach = (obj, f) => {
      for (const key in obj) {
        f(obj[key], key);
      }
    };
    length = (obj) => keys(obj).length;
    isEmpty = (obj) => {
      for (const _k in obj) {
        return false;
      }
      return true;
    };
    every = (obj, f) => {
      for (const key in obj) {
        if (!f(obj[key], key)) {
          return false;
        }
      }
      return true;
    };
    hasProperty = (obj, key) => Object.prototype.hasOwnProperty.call(obj, key);
    equalFlat = (a, b) => a === b || length(a) === length(b) && every(a, (val, key) => (val !== void 0 || hasProperty(b, key)) && b[key] === val);
  }
});

// ../../node_modules/lib0/function.js
var callAll, equalityStrict, equalityDeep, isOneOf;
var init_function = __esm({
  "../../node_modules/lib0/function.js"() {
    init_object();
    callAll = (fs, args2, i = 0) => {
      try {
        for (; i < fs.length; i++) {
          fs[i](...args2);
        }
      } finally {
        if (i < fs.length) {
          callAll(fs, args2, i + 1);
        }
      }
    };
    equalityStrict = (a, b) => a === b;
    equalityDeep = (a, b) => {
      if (a == null || b == null) {
        return equalityStrict(a, b);
      }
      if (a.constructor !== b.constructor) {
        return false;
      }
      if (a === b) {
        return true;
      }
      switch (a.constructor) {
        case ArrayBuffer:
          a = new Uint8Array(a);
          b = new Uint8Array(b);
        case Uint8Array: {
          if (a.byteLength !== b.byteLength) {
            return false;
          }
          for (let i = 0; i < a.length; i++) {
            if (a[i] !== b[i]) {
              return false;
            }
          }
          break;
        }
        case Set: {
          if (a.size !== b.size) {
            return false;
          }
          for (const value of a) {
            if (!b.has(value)) {
              return false;
            }
          }
          break;
        }
        case Map: {
          if (a.size !== b.size) {
            return false;
          }
          for (const key of a.keys()) {
            if (!b.has(key) || !equalityDeep(a.get(key), b.get(key))) {
              return false;
            }
          }
          break;
        }
        case Object:
          if (length(a) !== length(b)) {
            return false;
          }
          for (const key in a) {
            if (!hasProperty(a, key) || !equalityDeep(a[key], b[key])) {
              return false;
            }
          }
          break;
        case Array:
          if (a.length !== b.length) {
            return false;
          }
          for (let i = 0; i < a.length; i++) {
            if (!equalityDeep(a[i], b[i])) {
              return false;
            }
          }
          break;
        default:
          return false;
      }
      return true;
    };
    isOneOf = (value, options) => options.includes(value);
  }
});

// ../../node_modules/lib0/environment.js
var isNode, isMac, params, args, computeParams, hasParam, getVariable, hasConf, production, forceColor, supportsColor;
var init_environment = __esm({
  "../../node_modules/lib0/environment.js"() {
    init_map();
    init_string();
    init_conditions();
    init_storage();
    init_function();
    isNode = typeof process !== "undefined" && process.release && /node|io\.js/.test(process.release.name);
    isMac = typeof navigator !== "undefined" ? /Mac/.test(navigator.platform) : false;
    args = [];
    computeParams = () => {
      if (params === void 0) {
        if (isNode) {
          params = create2();
          const pargs = process.argv;
          let currParamName = null;
          for (let i = 0; i < pargs.length; i++) {
            const parg = pargs[i];
            if (parg[0] === "-") {
              if (currParamName !== null) {
                params.set(currParamName, "");
              }
              currParamName = parg;
            } else {
              if (currParamName !== null) {
                params.set(currParamName, parg);
                currParamName = null;
              } else {
                args.push(parg);
              }
            }
          }
          if (currParamName !== null) {
            params.set(currParamName, "");
          }
        } else if (typeof location === "object") {
          params = create2();
          (location.search || "?").slice(1).split("&").forEach((kv) => {
            if (kv.length !== 0) {
              const [key, value] = kv.split("=");
              params.set(`--${fromCamelCase(key, "-")}`, value);
              params.set(`-${fromCamelCase(key, "-")}`, value);
            }
          });
        } else {
          params = create2();
        }
      }
      return params;
    };
    hasParam = (name2) => computeParams().has(name2);
    getVariable = (name2) => isNode ? undefinedToNull(process.env[name2.toUpperCase()]) : undefinedToNull(varStorage.getItem(name2));
    hasConf = (name2) => hasParam("--" + name2) || getVariable(name2) !== null;
    production = hasConf("production");
    forceColor = isNode && isOneOf(process.env.FORCE_COLOR, ["true", "1", "2"]);
    supportsColor = !hasParam("no-colors") && (!isNode || process.stdout.isTTY || forceColor) && (!isNode || hasParam("color") || forceColor || getVariable("COLORTERM") !== null || (getVariable("TERM") || "").includes("color"));
  }
});

// ../../node_modules/lib0/math.js
var floor, abs, min, max, isNaN2, isNegativeZero;
var init_math = __esm({
  "../../node_modules/lib0/math.js"() {
    floor = Math.floor;
    abs = Math.abs;
    min = (a, b) => a < b ? a : b;
    max = (a, b) => a > b ? a : b;
    isNaN2 = Number.isNaN;
    isNegativeZero = (n) => n !== 0 ? n < 0 : 1 / n < 0;
  }
});

// ../../node_modules/lib0/binary.js
var BIT1, BIT2, BIT3, BIT4, BIT6, BIT7, BIT8, BIT18, BIT19, BIT20, BIT21, BIT22, BIT23, BIT24, BIT25, BIT26, BIT27, BIT28, BIT29, BIT30, BIT31, BIT32, BITS5, BITS6, BITS7, BITS17, BITS18, BITS19, BITS20, BITS21, BITS22, BITS23, BITS24, BITS25, BITS26, BITS27, BITS28, BITS29, BITS30, BITS31;
var init_binary = __esm({
  "../../node_modules/lib0/binary.js"() {
    BIT1 = 1;
    BIT2 = 2;
    BIT3 = 4;
    BIT4 = 8;
    BIT6 = 32;
    BIT7 = 64;
    BIT8 = 128;
    BIT18 = 1 << 17;
    BIT19 = 1 << 18;
    BIT20 = 1 << 19;
    BIT21 = 1 << 20;
    BIT22 = 1 << 21;
    BIT23 = 1 << 22;
    BIT24 = 1 << 23;
    BIT25 = 1 << 24;
    BIT26 = 1 << 25;
    BIT27 = 1 << 26;
    BIT28 = 1 << 27;
    BIT29 = 1 << 28;
    BIT30 = 1 << 29;
    BIT31 = 1 << 30;
    BIT32 = 1 << 31;
    BITS5 = 31;
    BITS6 = 63;
    BITS7 = 127;
    BITS17 = BIT18 - 1;
    BITS18 = BIT19 - 1;
    BITS19 = BIT20 - 1;
    BITS20 = BIT21 - 1;
    BITS21 = BIT22 - 1;
    BITS22 = BIT23 - 1;
    BITS23 = BIT24 - 1;
    BITS24 = BIT25 - 1;
    BITS25 = BIT26 - 1;
    BITS26 = BIT27 - 1;
    BITS27 = BIT28 - 1;
    BITS28 = BIT29 - 1;
    BITS29 = BIT30 - 1;
    BITS30 = BIT31 - 1;
    BITS31 = 2147483647;
  }
});

// ../../node_modules/lib0/number.js
var MAX_SAFE_INTEGER, MIN_SAFE_INTEGER, LOWEST_INT32, isInteger, isNaN3, parseInt2;
var init_number = __esm({
  "../../node_modules/lib0/number.js"() {
    init_math();
    MAX_SAFE_INTEGER = Number.MAX_SAFE_INTEGER;
    MIN_SAFE_INTEGER = Number.MIN_SAFE_INTEGER;
    LOWEST_INT32 = 1 << 31;
    isInteger = Number.isInteger || ((num) => typeof num === "number" && isFinite(num) && floor(num) === num);
    isNaN3 = Number.isNaN;
    parseInt2 = Number.parseInt;
  }
});

// ../../node_modules/lib0/error.js
var create3, methodUnimplemented, unexpectedCase;
var init_error = __esm({
  "../../node_modules/lib0/error.js"() {
    create3 = (s) => new Error(s);
    methodUnimplemented = () => {
      throw create3("Method unimplemented");
    };
    unexpectedCase = () => {
      throw create3("Unexpected case");
    };
  }
});

// ../../node_modules/lib0/buffer.js
var createUint8ArrayViewFromArrayBuffer;
var init_buffer = __esm({
  "../../node_modules/lib0/buffer.js"() {
    createUint8ArrayViewFromArrayBuffer = (buffer, byteOffset, length3) => new Uint8Array(buffer, byteOffset, length3);
  }
});

// ../../node_modules/lib0/encoding.js
var Encoder, createEncoder, length2, toUint8Array, verifyLen, write, writeUint8, writeVarUint, writeVarInt, _strBuffer, _maxStrBSize, _writeVarStringNative, _writeVarStringPolyfill, writeVarString, writeUint8Array, writeVarUint8Array, writeOnDataView, writeFloat32, writeFloat64, writeBigInt64, floatTestBed, isFloat32, writeAny, RleEncoder, flushUintOptRleEncoder, UintOptRleEncoder, flushIntDiffOptRleEncoder, IntDiffOptRleEncoder, StringEncoder;
var init_encoding = __esm({
  "../../node_modules/lib0/encoding.js"() {
    init_buffer();
    init_math();
    init_number();
    init_binary();
    init_string();
    init_array();
    Encoder = class {
      constructor() {
        this.cpos = 0;
        this.cbuf = new Uint8Array(100);
        this.bufs = [];
      }
    };
    createEncoder = () => new Encoder();
    length2 = (encoder) => {
      let len = encoder.cpos;
      for (let i = 0; i < encoder.bufs.length; i++) {
        len += encoder.bufs[i].length;
      }
      return len;
    };
    toUint8Array = (encoder) => {
      const uint8arr = new Uint8Array(length2(encoder));
      let curPos = 0;
      for (let i = 0; i < encoder.bufs.length; i++) {
        const d = encoder.bufs[i];
        uint8arr.set(d, curPos);
        curPos += d.length;
      }
      uint8arr.set(createUint8ArrayViewFromArrayBuffer(encoder.cbuf.buffer, 0, encoder.cpos), curPos);
      return uint8arr;
    };
    verifyLen = (encoder, len) => {
      const bufferLen = encoder.cbuf.length;
      if (bufferLen - encoder.cpos < len) {
        encoder.bufs.push(createUint8ArrayViewFromArrayBuffer(encoder.cbuf.buffer, 0, encoder.cpos));
        encoder.cbuf = new Uint8Array(max(bufferLen, len) * 2);
        encoder.cpos = 0;
      }
    };
    write = (encoder, num) => {
      const bufferLen = encoder.cbuf.length;
      if (encoder.cpos === bufferLen) {
        encoder.bufs.push(encoder.cbuf);
        encoder.cbuf = new Uint8Array(bufferLen * 2);
        encoder.cpos = 0;
      }
      encoder.cbuf[encoder.cpos++] = num;
    };
    writeUint8 = write;
    writeVarUint = (encoder, num) => {
      while (num > BITS7) {
        write(encoder, BIT8 | BITS7 & num);
        num = floor(num / 128);
      }
      write(encoder, BITS7 & num);
    };
    writeVarInt = (encoder, num) => {
      const isNegative = isNegativeZero(num);
      if (isNegative) {
        num = -num;
      }
      write(encoder, (num > BITS6 ? BIT8 : 0) | (isNegative ? BIT7 : 0) | BITS6 & num);
      num = floor(num / 64);
      while (num > 0) {
        write(encoder, (num > BITS7 ? BIT8 : 0) | BITS7 & num);
        num = floor(num / 128);
      }
    };
    _strBuffer = new Uint8Array(3e4);
    _maxStrBSize = _strBuffer.length / 3;
    _writeVarStringNative = (encoder, str) => {
      if (str.length < _maxStrBSize) {
        const written = utf8TextEncoder.encodeInto(str, _strBuffer).written || 0;
        writeVarUint(encoder, written);
        for (let i = 0; i < written; i++) {
          write(encoder, _strBuffer[i]);
        }
      } else {
        writeVarUint8Array(encoder, encodeUtf8(str));
      }
    };
    _writeVarStringPolyfill = (encoder, str) => {
      const encodedString = unescape(encodeURIComponent(str));
      const len = encodedString.length;
      writeVarUint(encoder, len);
      for (let i = 0; i < len; i++) {
        write(
          encoder,
          /** @type {number} */
          encodedString.codePointAt(i)
        );
      }
    };
    writeVarString = utf8TextEncoder && /** @type {any} */
    utf8TextEncoder.encodeInto ? _writeVarStringNative : _writeVarStringPolyfill;
    writeUint8Array = (encoder, uint8Array) => {
      const bufferLen = encoder.cbuf.length;
      const cpos = encoder.cpos;
      const leftCopyLen = min(bufferLen - cpos, uint8Array.length);
      const rightCopyLen = uint8Array.length - leftCopyLen;
      encoder.cbuf.set(uint8Array.subarray(0, leftCopyLen), cpos);
      encoder.cpos += leftCopyLen;
      if (rightCopyLen > 0) {
        encoder.bufs.push(encoder.cbuf);
        encoder.cbuf = new Uint8Array(max(bufferLen * 2, rightCopyLen));
        encoder.cbuf.set(uint8Array.subarray(leftCopyLen));
        encoder.cpos = rightCopyLen;
      }
    };
    writeVarUint8Array = (encoder, uint8Array) => {
      writeVarUint(encoder, uint8Array.byteLength);
      writeUint8Array(encoder, uint8Array);
    };
    writeOnDataView = (encoder, len) => {
      verifyLen(encoder, len);
      const dview = new DataView(encoder.cbuf.buffer, encoder.cpos, len);
      encoder.cpos += len;
      return dview;
    };
    writeFloat32 = (encoder, num) => writeOnDataView(encoder, 4).setFloat32(0, num, false);
    writeFloat64 = (encoder, num) => writeOnDataView(encoder, 8).setFloat64(0, num, false);
    writeBigInt64 = (encoder, num) => (
      /** @type {any} */
      writeOnDataView(encoder, 8).setBigInt64(0, num, false)
    );
    floatTestBed = new DataView(new ArrayBuffer(4));
    isFloat32 = (num) => {
      floatTestBed.setFloat32(0, num);
      return floatTestBed.getFloat32(0) === num;
    };
    writeAny = (encoder, data) => {
      switch (typeof data) {
        case "string":
          write(encoder, 119);
          writeVarString(encoder, data);
          break;
        case "number":
          if (isInteger(data) && abs(data) <= BITS31) {
            write(encoder, 125);
            writeVarInt(encoder, data);
          } else if (isFloat32(data)) {
            write(encoder, 124);
            writeFloat32(encoder, data);
          } else {
            write(encoder, 123);
            writeFloat64(encoder, data);
          }
          break;
        case "bigint":
          write(encoder, 122);
          writeBigInt64(encoder, data);
          break;
        case "object":
          if (data === null) {
            write(encoder, 126);
          } else if (isArray(data)) {
            write(encoder, 117);
            writeVarUint(encoder, data.length);
            for (let i = 0; i < data.length; i++) {
              writeAny(encoder, data[i]);
            }
          } else if (data instanceof Uint8Array) {
            write(encoder, 116);
            writeVarUint8Array(encoder, data);
          } else {
            write(encoder, 118);
            const keys2 = Object.keys(data);
            writeVarUint(encoder, keys2.length);
            for (let i = 0; i < keys2.length; i++) {
              const key = keys2[i];
              writeVarString(encoder, key);
              writeAny(encoder, data[key]);
            }
          }
          break;
        case "boolean":
          write(encoder, data ? 120 : 121);
          break;
        default:
          write(encoder, 127);
      }
    };
    RleEncoder = class extends Encoder {
      /**
       * @param {function(Encoder, T):void} writer
       */
      constructor(writer) {
        super();
        this.w = writer;
        this.s = null;
        this.count = 0;
      }
      /**
       * @param {T} v
       */
      write(v) {
        if (this.s === v) {
          this.count++;
        } else {
          if (this.count > 0) {
            writeVarUint(this, this.count - 1);
          }
          this.count = 1;
          this.w(this, v);
          this.s = v;
        }
      }
    };
    flushUintOptRleEncoder = (encoder) => {
      if (encoder.count > 0) {
        writeVarInt(encoder.encoder, encoder.count === 1 ? encoder.s : -encoder.s);
        if (encoder.count > 1) {
          writeVarUint(encoder.encoder, encoder.count - 2);
        }
      }
    };
    UintOptRleEncoder = class {
      constructor() {
        this.encoder = new Encoder();
        this.s = 0;
        this.count = 0;
      }
      /**
       * @param {number} v
       */
      write(v) {
        if (this.s === v) {
          this.count++;
        } else {
          flushUintOptRleEncoder(this);
          this.count = 1;
          this.s = v;
        }
      }
      toUint8Array() {
        flushUintOptRleEncoder(this);
        return toUint8Array(this.encoder);
      }
    };
    flushIntDiffOptRleEncoder = (encoder) => {
      if (encoder.count > 0) {
        const encodedDiff = encoder.diff * 2 + (encoder.count === 1 ? 0 : 1);
        writeVarInt(encoder.encoder, encodedDiff);
        if (encoder.count > 1) {
          writeVarUint(encoder.encoder, encoder.count - 2);
        }
      }
    };
    IntDiffOptRleEncoder = class {
      constructor() {
        this.encoder = new Encoder();
        this.s = 0;
        this.count = 0;
        this.diff = 0;
      }
      /**
       * @param {number} v
       */
      write(v) {
        if (this.diff === v - this.s) {
          this.s = v;
          this.count++;
        } else {
          flushIntDiffOptRleEncoder(this);
          this.count = 1;
          this.diff = v - this.s;
          this.s = v;
        }
      }
      toUint8Array() {
        flushIntDiffOptRleEncoder(this);
        return toUint8Array(this.encoder);
      }
    };
    StringEncoder = class {
      constructor() {
        this.sarr = [];
        this.s = "";
        this.lensE = new UintOptRleEncoder();
      }
      /**
       * @param {string} string
       */
      write(string) {
        this.s += string;
        if (this.s.length > 19) {
          this.sarr.push(this.s);
          this.s = "";
        }
        this.lensE.write(string.length);
      }
      toUint8Array() {
        const encoder = new Encoder();
        this.sarr.push(this.s);
        this.s = "";
        writeVarString(encoder, this.sarr.join(""));
        writeUint8Array(encoder, this.lensE.toUint8Array());
        return toUint8Array(encoder);
      }
    };
  }
});

// ../../node_modules/lib0/time.js
var getUnixTime;
var init_time = __esm({
  "../../node_modules/lib0/time.js"() {
    getUnixTime = Date.now;
  }
});

// ../../node_modules/lib0/observable.js
var Observable;
var init_observable = __esm({
  "../../node_modules/lib0/observable.js"() {
    init_map();
    init_set();
    init_array();
    Observable = class {
      constructor() {
        this._observers = create2();
      }
      /**
       * @param {N} name
       * @param {function} f
       */
      on(name2, f) {
        setIfUndefined(this._observers, name2, create).add(f);
      }
      /**
       * @param {N} name
       * @param {function} f
       */
      once(name2, f) {
        const _f = (...args2) => {
          this.off(name2, _f);
          f(...args2);
        };
        this.on(name2, _f);
      }
      /**
       * @param {N} name
       * @param {function} f
       */
      off(name2, f) {
        const observers = this._observers.get(name2);
        if (observers !== void 0) {
          observers.delete(f);
          if (observers.size === 0) {
            this._observers.delete(name2);
          }
        }
      }
      /**
       * Emit a named event. All registered event listeners that listen to the
       * specified name will receive the event.
       *
       * @todo This should catch exceptions
       *
       * @param {N} name The event name.
       * @param {Array<any>} args The arguments that are applied to the event listener.
       */
      emit(name2, args2) {
        return from((this._observers.get(name2) || create2()).values()).forEach((f) => f(...args2));
      }
      destroy() {
        this._observers = create2();
      }
    };
  }
});

// ../../node_modules/lib0/webcrypto.js
var subtle, getRandomValues;
var init_webcrypto = __esm({
  "../../node_modules/lib0/webcrypto.js"() {
    subtle = crypto.subtle;
    getRandomValues = crypto.getRandomValues.bind(crypto);
  }
});

// ../../node_modules/lib0/random.js
var uint32, uuidv4Template, uuidv4;
var init_random = __esm({
  "../../node_modules/lib0/random.js"() {
    init_webcrypto();
    uint32 = () => getRandomValues(new Uint32Array(1))[0];
    uuidv4Template = [1e7] + -1e3 + -4e3 + -8e3 + -1e11;
    uuidv4 = () => uuidv4Template.replace(
      /[018]/g,
      /** @param {number} c */
      (c) => (c ^ uint32() & 15 >> c / 4).toString(16)
    );
  }
});

// ../../node_modules/lib0/promise.js
var create4, all;
var init_promise = __esm({
  "../../node_modules/lib0/promise.js"() {
    create4 = (f) => (
      /** @type {Promise<T>} */
      new Promise(f)
    );
    all = Promise.all.bind(Promise);
  }
});

// ../../node_modules/lib0/pair.js
var Pair, create5;
var init_pair = __esm({
  "../../node_modules/lib0/pair.js"() {
    Pair = class {
      /**
       * @param {L} left
       * @param {R} right
       */
      constructor(left, right) {
        this.left = left;
        this.right = right;
      }
    };
    create5 = (left, right) => new Pair(left, right);
  }
});

// ../../node_modules/lib0/dom.js
var doc, domParser, mapToStyleString, ELEMENT_NODE, TEXT_NODE, CDATA_SECTION_NODE, COMMENT_NODE, DOCUMENT_NODE, DOCUMENT_TYPE_NODE, DOCUMENT_FRAGMENT_NODE;
var init_dom = __esm({
  "../../node_modules/lib0/dom.js"() {
    init_map();
    doc = /** @type {Document} */
    typeof document !== "undefined" ? document : {};
    domParser = /** @type {DOMParser} */
    typeof DOMParser !== "undefined" ? new DOMParser() : null;
    mapToStyleString = (m) => map(m, (value, key) => `${key}:${value};`).join("");
    ELEMENT_NODE = doc.ELEMENT_NODE;
    TEXT_NODE = doc.TEXT_NODE;
    CDATA_SECTION_NODE = doc.CDATA_SECTION_NODE;
    COMMENT_NODE = doc.COMMENT_NODE;
    DOCUMENT_NODE = doc.DOCUMENT_NODE;
    DOCUMENT_TYPE_NODE = doc.DOCUMENT_TYPE_NODE;
    DOCUMENT_FRAGMENT_NODE = doc.DOCUMENT_FRAGMENT_NODE;
  }
});

// ../../node_modules/lib0/symbol.js
var create6;
var init_symbol = __esm({
  "../../node_modules/lib0/symbol.js"() {
    create6 = Symbol;
  }
});

// ../../node_modules/lib0/logging.common.js
var BOLD, UNBOLD, BLUE, GREY, GREEN, RED, PURPLE, ORANGE, UNCOLOR, computeNoColorLoggingArgs, lastLoggingTime;
var init_logging_common = __esm({
  "../../node_modules/lib0/logging.common.js"() {
    init_symbol();
    init_time();
    BOLD = create6();
    UNBOLD = create6();
    BLUE = create6();
    GREY = create6();
    GREEN = create6();
    RED = create6();
    PURPLE = create6();
    ORANGE = create6();
    UNCOLOR = create6();
    computeNoColorLoggingArgs = (args2) => {
      const strBuilder = [];
      const logArgs = [];
      let i = 0;
      for (; i < args2.length; i++) {
        const arg = args2[i];
        if (arg.constructor === String || arg.constructor === Number) {
          strBuilder.push(arg);
        } else if (arg.constructor === Object) {
          logArgs.push(JSON.stringify(arg));
        }
      }
      return logArgs;
    };
    lastLoggingTime = getUnixTime();
  }
});

// ../../node_modules/lib0/logging.js
var _browserStyleMap, computeBrowserLoggingArgs, computeLoggingArgs, print, warn, vconsoles;
var init_logging = __esm({
  "../../node_modules/lib0/logging.js"() {
    init_environment();
    init_set();
    init_pair();
    init_dom();
    init_map();
    init_logging_common();
    init_logging_common();
    _browserStyleMap = {
      [BOLD]: create5("font-weight", "bold"),
      [UNBOLD]: create5("font-weight", "normal"),
      [BLUE]: create5("color", "blue"),
      [GREEN]: create5("color", "green"),
      [GREY]: create5("color", "grey"),
      [RED]: create5("color", "red"),
      [PURPLE]: create5("color", "purple"),
      [ORANGE]: create5("color", "orange"),
      // not well supported in chrome when debugging node with inspector - TODO: deprecate
      [UNCOLOR]: create5("color", "black")
    };
    computeBrowserLoggingArgs = (args2) => {
      const strBuilder = [];
      const styles = [];
      const currentStyle = create2();
      let logArgs = [];
      let i = 0;
      for (; i < args2.length; i++) {
        const arg = args2[i];
        const style = _browserStyleMap[arg];
        if (style !== void 0) {
          currentStyle.set(style.left, style.right);
        } else {
          if (arg.constructor === String || arg.constructor === Number) {
            const style2 = mapToStyleString(currentStyle);
            if (i > 0 || style2.length > 0) {
              strBuilder.push("%c" + arg);
              styles.push(style2);
            } else {
              strBuilder.push(arg);
            }
          } else {
            break;
          }
        }
      }
      if (i > 0) {
        logArgs = styles;
        logArgs.unshift(strBuilder.join(""));
      }
      for (; i < args2.length; i++) {
        const arg = args2[i];
        if (!(arg instanceof Symbol)) {
          logArgs.push(arg);
        }
      }
      return logArgs;
    };
    computeLoggingArgs = supportsColor ? computeBrowserLoggingArgs : computeNoColorLoggingArgs;
    print = (...args2) => {
      console.log(...computeLoggingArgs(args2));
      vconsoles.forEach((vc) => vc.print(args2));
    };
    warn = (...args2) => {
      console.warn(...computeLoggingArgs(args2));
      args2.unshift(ORANGE);
      vconsoles.forEach((vc) => vc.print(args2));
    };
    vconsoles = create();
  }
});

// ../../node_modules/lib0/iterator.js
var createIterator, iteratorFilter, iteratorMap;
var init_iterator = __esm({
  "../../node_modules/lib0/iterator.js"() {
    createIterator = (next) => ({
      /**
       * @return {IterableIterator<T>}
       */
      [Symbol.iterator]() {
        return this;
      },
      // @ts-ignore
      next
    });
    iteratorFilter = (iterator, filter) => createIterator(() => {
      let res;
      do {
        res = iterator.next();
      } while (!res.done && !filter(res.value));
      return res;
    });
    iteratorMap = (iterator, fmap) => createIterator(() => {
      const { done, value } = iterator.next();
      return { done, value: done ? void 0 : fmap(value) };
    });
  }
});

// ../../node_modules/yjs/dist/yjs.mjs
var DeleteItem, DeleteSet, iterateDeletedStructs, findIndexDS, isDeleted, sortAndMergeDeleteSet, mergeDeleteSets, addToDeleteSet, createDeleteSet, writeDeleteSet, generateNewClientId, Doc, DSEncoderV1, UpdateEncoderV1, DSEncoderV2, UpdateEncoderV2, writeStructs, writeClientsStructs, writeStructsFromTransaction, EventHandler, createEventHandler, addEventHandlerListener, removeEventHandlerListener, callEventHandlerListeners, ID, compareIDs, createID, findRootTypeKey, isParentOf, Snapshot, createSnapshot, emptySnapshot, isVisible, splitSnapshotAffectedStructs, StructStore, getStateVector, getState, addStruct, findIndexSS, find, getItem, findIndexCleanStart, getItemCleanStart, getItemCleanEnd, replaceStruct, iterateStructs, Transaction2, writeUpdateMessageFromTransaction, addChangedTypeToTransaction, tryToMergeWithLefts, tryGcDeleteSet, tryMergeDeleteSet, cleanupTransactions, transact, StackItem, clearUndoManagerStackItem, popStackItem, UndoManager, errorComputeChanges, YEvent, getPathTo, maxSearchMarker, globalSearchMarkerTimestamp, ArraySearchMarker, refreshMarkerTimestamp, overwriteMarker, markPosition, findMarker, updateMarkerChanges, callTypeObservers, AbstractType, typeListSlice, typeListToArray, typeListForEach, typeListMap, typeListCreateIterator, typeListGet, typeListInsertGenericsAfter, lengthExceeded, typeListInsertGenerics, typeListPushGenerics, typeListDelete, typeMapDelete, typeMapSet, typeMapGet, typeMapGetAll, typeMapHas, createMapIterator, YArrayEvent, YArray, YMapEvent, YMap, equalAttrs, ItemTextListPosition, findNextPosition, findPosition, insertNegatedAttributes, updateCurrentAttributes, minimizeAttributeChanges, insertAttributes, insertText, formatText, cleanupFormattingGap, cleanupContextlessFormattingGap, cleanupYTextFormatting, cleanupYTextAfterTransaction, deleteText, YTextEvent, YText, YXmlTreeWalker, YXmlFragment, YXmlElement, YXmlEvent, AbstractStruct, structGCRefNumber, GC, ContentBinary, ContentDeleted, createDocFromOpts, ContentDoc, ContentEmbed, ContentFormat, ContentAny, ContentString, YArrayRefID, YMapRefID, YTextRefID, YXmlElementRefID, YXmlFragmentRefID, ContentType, followRedone, keepItem, splitItem, isDeletedByUndoStack, redoItem, Item, glo, importIdentifier;
var init_yjs = __esm({
  "../../node_modules/yjs/dist/yjs.mjs"() {
    init_observable();
    init_array();
    init_math();
    init_map();
    init_encoding();
    init_random();
    init_promise();
    init_error();
    init_binary();
    init_function();
    init_function();
    init_set();
    init_logging();
    init_time();
    init_iterator();
    init_object();
    DeleteItem = class {
      /**
       * @param {number} clock
       * @param {number} len
       */
      constructor(clock, len) {
        this.clock = clock;
        this.len = len;
      }
    };
    DeleteSet = class {
      constructor() {
        this.clients = /* @__PURE__ */ new Map();
      }
    };
    iterateDeletedStructs = (transaction, ds, f) => ds.clients.forEach((deletes, clientid) => {
      const structs = (
        /** @type {Array<GC|Item>} */
        transaction.doc.store.clients.get(clientid)
      );
      for (let i = 0; i < deletes.length; i++) {
        const del = deletes[i];
        iterateStructs(transaction, structs, del.clock, del.len, f);
      }
    });
    findIndexDS = (dis, clock) => {
      let left = 0;
      let right = dis.length - 1;
      while (left <= right) {
        const midindex = floor((left + right) / 2);
        const mid = dis[midindex];
        const midclock = mid.clock;
        if (midclock <= clock) {
          if (clock < midclock + mid.len) {
            return midindex;
          }
          left = midindex + 1;
        } else {
          right = midindex - 1;
        }
      }
      return null;
    };
    isDeleted = (ds, id2) => {
      const dis = ds.clients.get(id2.client);
      return dis !== void 0 && findIndexDS(dis, id2.clock) !== null;
    };
    sortAndMergeDeleteSet = (ds) => {
      ds.clients.forEach((dels) => {
        dels.sort((a, b) => a.clock - b.clock);
        let i, j;
        for (i = 1, j = 1; i < dels.length; i++) {
          const left = dels[j - 1];
          const right = dels[i];
          if (left.clock + left.len >= right.clock) {
            left.len = max(left.len, right.clock + right.len - left.clock);
          } else {
            if (j < i) {
              dels[j] = right;
            }
            j++;
          }
        }
        dels.length = j;
      });
    };
    mergeDeleteSets = (dss) => {
      const merged = new DeleteSet();
      for (let dssI = 0; dssI < dss.length; dssI++) {
        dss[dssI].clients.forEach((delsLeft, client) => {
          if (!merged.clients.has(client)) {
            const dels = delsLeft.slice();
            for (let i = dssI + 1; i < dss.length; i++) {
              appendTo(dels, dss[i].clients.get(client) || []);
            }
            merged.clients.set(client, dels);
          }
        });
      }
      sortAndMergeDeleteSet(merged);
      return merged;
    };
    addToDeleteSet = (ds, client, clock, length3) => {
      setIfUndefined(ds.clients, client, () => (
        /** @type {Array<DeleteItem>} */
        []
      )).push(new DeleteItem(clock, length3));
    };
    createDeleteSet = () => new DeleteSet();
    writeDeleteSet = (encoder, ds) => {
      writeVarUint(encoder.restEncoder, ds.clients.size);
      from(ds.clients.entries()).sort((a, b) => b[0] - a[0]).forEach(([client, dsitems]) => {
        encoder.resetDsCurVal();
        writeVarUint(encoder.restEncoder, client);
        const len = dsitems.length;
        writeVarUint(encoder.restEncoder, len);
        for (let i = 0; i < len; i++) {
          const item = dsitems[i];
          encoder.writeDsClock(item.clock);
          encoder.writeDsLen(item.len);
        }
      });
    };
    generateNewClientId = uint32;
    Doc = class extends Observable {
      /**
       * @param {DocOpts} opts configuration
       */
      constructor({ guid = uuidv4(), collectionid = null, gc = true, gcFilter = () => true, meta = null, autoLoad = false, shouldLoad = true } = {}) {
        super();
        this.gc = gc;
        this.gcFilter = gcFilter;
        this.clientID = generateNewClientId();
        this.guid = guid;
        this.collectionid = collectionid;
        this.share = /* @__PURE__ */ new Map();
        this.store = new StructStore();
        this._transaction = null;
        this._transactionCleanups = [];
        this.subdocs = /* @__PURE__ */ new Set();
        this._item = null;
        this.shouldLoad = shouldLoad;
        this.autoLoad = autoLoad;
        this.meta = meta;
        this.isLoaded = false;
        this.isSynced = false;
        this.whenLoaded = create4((resolve) => {
          this.on("load", () => {
            this.isLoaded = true;
            resolve(this);
          });
        });
        const provideSyncedPromise = () => create4((resolve) => {
          const eventHandler = (isSynced) => {
            if (isSynced === void 0 || isSynced === true) {
              this.off("sync", eventHandler);
              resolve();
            }
          };
          this.on("sync", eventHandler);
        });
        this.on("sync", (isSynced) => {
          if (isSynced === false && this.isSynced) {
            this.whenSynced = provideSyncedPromise();
          }
          this.isSynced = isSynced === void 0 || isSynced === true;
          if (!this.isLoaded) {
            this.emit("load", []);
          }
        });
        this.whenSynced = provideSyncedPromise();
      }
      /**
       * Notify the parent document that you request to load data into this subdocument (if it is a subdocument).
       *
       * `load()` might be used in the future to request any provider to load the most current data.
       *
       * It is safe to call `load()` multiple times.
       */
      load() {
        const item = this._item;
        if (item !== null && !this.shouldLoad) {
          transact(
            /** @type {any} */
            item.parent.doc,
            (transaction) => {
              transaction.subdocsLoaded.add(this);
            },
            null,
            true
          );
        }
        this.shouldLoad = true;
      }
      getSubdocs() {
        return this.subdocs;
      }
      getSubdocGuids() {
        return new Set(from(this.subdocs).map((doc2) => doc2.guid));
      }
      /**
       * Changes that happen inside of a transaction are bundled. This means that
       * the observer fires _after_ the transaction is finished and that all changes
       * that happened inside of the transaction are sent as one message to the
       * other peers.
       *
       * @template T
       * @param {function(Transaction):T} f The function that should be executed as a transaction
       * @param {any} [origin] Origin of who started the transaction. Will be stored on transaction.origin
       * @return T
       *
       * @public
       */
      transact(f, origin = null) {
        return transact(this, f, origin);
      }
      /**
       * Define a shared data type.
       *
       * Multiple calls of `y.get(name, TypeConstructor)` yield the same result
       * and do not overwrite each other. I.e.
       * `y.define(name, Y.Array) === y.define(name, Y.Array)`
       *
       * After this method is called, the type is also available on `y.share.get(name)`.
       *
       * *Best Practices:*
       * Define all types right after the Yjs instance is created and store them in a separate object.
       * Also use the typed methods `getText(name)`, `getArray(name)`, ..
       *
       * @example
       *   const y = new Y(..)
       *   const appState = {
       *     document: y.getText('document')
       *     comments: y.getArray('comments')
       *   }
       *
       * @param {string} name
       * @param {Function} TypeConstructor The constructor of the type definition. E.g. Y.Text, Y.Array, Y.Map, ...
       * @return {AbstractType<any>} The created type. Constructed with TypeConstructor
       *
       * @public
       */
      get(name2, TypeConstructor = AbstractType) {
        const type = setIfUndefined(this.share, name2, () => {
          const t = new TypeConstructor();
          t._integrate(this, null);
          return t;
        });
        const Constr = type.constructor;
        if (TypeConstructor !== AbstractType && Constr !== TypeConstructor) {
          if (Constr === AbstractType) {
            const t = new TypeConstructor();
            t._map = type._map;
            type._map.forEach(
              /** @param {Item?} n */
              (n) => {
                for (; n !== null; n = n.left) {
                  n.parent = t;
                }
              }
            );
            t._start = type._start;
            for (let n = t._start; n !== null; n = n.right) {
              n.parent = t;
            }
            t._length = type._length;
            this.share.set(name2, t);
            t._integrate(this, null);
            return t;
          } else {
            throw new Error(`Type with the name ${name2} has already been defined with a different constructor`);
          }
        }
        return type;
      }
      /**
       * @template T
       * @param {string} [name]
       * @return {YArray<T>}
       *
       * @public
       */
      getArray(name2 = "") {
        return this.get(name2, YArray);
      }
      /**
       * @param {string} [name]
       * @return {YText}
       *
       * @public
       */
      getText(name2 = "") {
        return this.get(name2, YText);
      }
      /**
       * @template T
       * @param {string} [name]
       * @return {YMap<T>}
       *
       * @public
       */
      getMap(name2 = "") {
        return this.get(name2, YMap);
      }
      /**
       * @param {string} [name]
       * @return {YXmlFragment}
       *
       * @public
       */
      getXmlFragment(name2 = "") {
        return this.get(name2, YXmlFragment);
      }
      /**
       * Converts the entire document into a js object, recursively traversing each yjs type
       * Doesn't log types that have not been defined (using ydoc.getType(..)).
       *
       * @deprecated Do not use this method and rather call toJSON directly on the shared types.
       *
       * @return {Object<string, any>}
       */
      toJSON() {
        const doc2 = {};
        this.share.forEach((value, key) => {
          doc2[key] = value.toJSON();
        });
        return doc2;
      }
      /**
       * Emit `destroy` event and unregister all event handlers.
       */
      destroy() {
        from(this.subdocs).forEach((subdoc) => subdoc.destroy());
        const item = this._item;
        if (item !== null) {
          this._item = null;
          const content = (
            /** @type {ContentDoc} */
            item.content
          );
          content.doc = new Doc({ guid: this.guid, ...content.opts, shouldLoad: false });
          content.doc._item = item;
          transact(
            /** @type {any} */
            item.parent.doc,
            (transaction) => {
              const doc2 = content.doc;
              if (!item.deleted) {
                transaction.subdocsAdded.add(doc2);
              }
              transaction.subdocsRemoved.add(this);
            },
            null,
            true
          );
        }
        this.emit("destroyed", [true]);
        this.emit("destroy", [this]);
        super.destroy();
      }
      /**
       * @param {string} eventName
       * @param {function(...any):any} f
       */
      on(eventName, f) {
        super.on(eventName, f);
      }
      /**
       * @param {string} eventName
       * @param {function} f
       */
      off(eventName, f) {
        super.off(eventName, f);
      }
    };
    DSEncoderV1 = class {
      constructor() {
        this.restEncoder = createEncoder();
      }
      toUint8Array() {
        return toUint8Array(this.restEncoder);
      }
      resetDsCurVal() {
      }
      /**
       * @param {number} clock
       */
      writeDsClock(clock) {
        writeVarUint(this.restEncoder, clock);
      }
      /**
       * @param {number} len
       */
      writeDsLen(len) {
        writeVarUint(this.restEncoder, len);
      }
    };
    UpdateEncoderV1 = class extends DSEncoderV1 {
      /**
       * @param {ID} id
       */
      writeLeftID(id2) {
        writeVarUint(this.restEncoder, id2.client);
        writeVarUint(this.restEncoder, id2.clock);
      }
      /**
       * @param {ID} id
       */
      writeRightID(id2) {
        writeVarUint(this.restEncoder, id2.client);
        writeVarUint(this.restEncoder, id2.clock);
      }
      /**
       * Use writeClient and writeClock instead of writeID if possible.
       * @param {number} client
       */
      writeClient(client) {
        writeVarUint(this.restEncoder, client);
      }
      /**
       * @param {number} info An unsigned 8-bit integer
       */
      writeInfo(info) {
        writeUint8(this.restEncoder, info);
      }
      /**
       * @param {string} s
       */
      writeString(s) {
        writeVarString(this.restEncoder, s);
      }
      /**
       * @param {boolean} isYKey
       */
      writeParentInfo(isYKey) {
        writeVarUint(this.restEncoder, isYKey ? 1 : 0);
      }
      /**
       * @param {number} info An unsigned 8-bit integer
       */
      writeTypeRef(info) {
        writeVarUint(this.restEncoder, info);
      }
      /**
       * Write len of a struct - well suited for Opt RLE encoder.
       *
       * @param {number} len
       */
      writeLen(len) {
        writeVarUint(this.restEncoder, len);
      }
      /**
       * @param {any} any
       */
      writeAny(any2) {
        writeAny(this.restEncoder, any2);
      }
      /**
       * @param {Uint8Array} buf
       */
      writeBuf(buf) {
        writeVarUint8Array(this.restEncoder, buf);
      }
      /**
       * @param {any} embed
       */
      writeJSON(embed) {
        writeVarString(this.restEncoder, JSON.stringify(embed));
      }
      /**
       * @param {string} key
       */
      writeKey(key) {
        writeVarString(this.restEncoder, key);
      }
    };
    DSEncoderV2 = class {
      constructor() {
        this.restEncoder = createEncoder();
        this.dsCurrVal = 0;
      }
      toUint8Array() {
        return toUint8Array(this.restEncoder);
      }
      resetDsCurVal() {
        this.dsCurrVal = 0;
      }
      /**
       * @param {number} clock
       */
      writeDsClock(clock) {
        const diff = clock - this.dsCurrVal;
        this.dsCurrVal = clock;
        writeVarUint(this.restEncoder, diff);
      }
      /**
       * @param {number} len
       */
      writeDsLen(len) {
        if (len === 0) {
          unexpectedCase();
        }
        writeVarUint(this.restEncoder, len - 1);
        this.dsCurrVal += len;
      }
    };
    UpdateEncoderV2 = class extends DSEncoderV2 {
      constructor() {
        super();
        this.keyMap = /* @__PURE__ */ new Map();
        this.keyClock = 0;
        this.keyClockEncoder = new IntDiffOptRleEncoder();
        this.clientEncoder = new UintOptRleEncoder();
        this.leftClockEncoder = new IntDiffOptRleEncoder();
        this.rightClockEncoder = new IntDiffOptRleEncoder();
        this.infoEncoder = new RleEncoder(writeUint8);
        this.stringEncoder = new StringEncoder();
        this.parentInfoEncoder = new RleEncoder(writeUint8);
        this.typeRefEncoder = new UintOptRleEncoder();
        this.lenEncoder = new UintOptRleEncoder();
      }
      toUint8Array() {
        const encoder = createEncoder();
        writeVarUint(encoder, 0);
        writeVarUint8Array(encoder, this.keyClockEncoder.toUint8Array());
        writeVarUint8Array(encoder, this.clientEncoder.toUint8Array());
        writeVarUint8Array(encoder, this.leftClockEncoder.toUint8Array());
        writeVarUint8Array(encoder, this.rightClockEncoder.toUint8Array());
        writeVarUint8Array(encoder, toUint8Array(this.infoEncoder));
        writeVarUint8Array(encoder, this.stringEncoder.toUint8Array());
        writeVarUint8Array(encoder, toUint8Array(this.parentInfoEncoder));
        writeVarUint8Array(encoder, this.typeRefEncoder.toUint8Array());
        writeVarUint8Array(encoder, this.lenEncoder.toUint8Array());
        writeUint8Array(encoder, toUint8Array(this.restEncoder));
        return toUint8Array(encoder);
      }
      /**
       * @param {ID} id
       */
      writeLeftID(id2) {
        this.clientEncoder.write(id2.client);
        this.leftClockEncoder.write(id2.clock);
      }
      /**
       * @param {ID} id
       */
      writeRightID(id2) {
        this.clientEncoder.write(id2.client);
        this.rightClockEncoder.write(id2.clock);
      }
      /**
       * @param {number} client
       */
      writeClient(client) {
        this.clientEncoder.write(client);
      }
      /**
       * @param {number} info An unsigned 8-bit integer
       */
      writeInfo(info) {
        this.infoEncoder.write(info);
      }
      /**
       * @param {string} s
       */
      writeString(s) {
        this.stringEncoder.write(s);
      }
      /**
       * @param {boolean} isYKey
       */
      writeParentInfo(isYKey) {
        this.parentInfoEncoder.write(isYKey ? 1 : 0);
      }
      /**
       * @param {number} info An unsigned 8-bit integer
       */
      writeTypeRef(info) {
        this.typeRefEncoder.write(info);
      }
      /**
       * Write len of a struct - well suited for Opt RLE encoder.
       *
       * @param {number} len
       */
      writeLen(len) {
        this.lenEncoder.write(len);
      }
      /**
       * @param {any} any
       */
      writeAny(any2) {
        writeAny(this.restEncoder, any2);
      }
      /**
       * @param {Uint8Array} buf
       */
      writeBuf(buf) {
        writeVarUint8Array(this.restEncoder, buf);
      }
      /**
       * This is mainly here for legacy purposes.
       *
       * Initial we incoded objects using JSON. Now we use the much faster lib0/any-encoder. This method mainly exists for legacy purposes for the v1 encoder.
       *
       * @param {any} embed
       */
      writeJSON(embed) {
        writeAny(this.restEncoder, embed);
      }
      /**
       * Property keys are often reused. For example, in y-prosemirror the key `bold` might
       * occur very often. For a 3d application, the key `position` might occur very often.
       *
       * We cache these keys in a Map and refer to them via a unique number.
       *
       * @param {string} key
       */
      writeKey(key) {
        const clock = this.keyMap.get(key);
        if (clock === void 0) {
          this.keyClockEncoder.write(this.keyClock++);
          this.stringEncoder.write(key);
        } else {
          this.keyClockEncoder.write(clock);
        }
      }
    };
    writeStructs = (encoder, structs, client, clock) => {
      clock = max(clock, structs[0].id.clock);
      const startNewStructs = findIndexSS(structs, clock);
      writeVarUint(encoder.restEncoder, structs.length - startNewStructs);
      encoder.writeClient(client);
      writeVarUint(encoder.restEncoder, clock);
      const firstStruct = structs[startNewStructs];
      firstStruct.write(encoder, clock - firstStruct.id.clock);
      for (let i = startNewStructs + 1; i < structs.length; i++) {
        structs[i].write(encoder, 0);
      }
    };
    writeClientsStructs = (encoder, store, _sm) => {
      const sm = /* @__PURE__ */ new Map();
      _sm.forEach((clock, client) => {
        if (getState(store, client) > clock) {
          sm.set(client, clock);
        }
      });
      getStateVector(store).forEach((_clock, client) => {
        if (!_sm.has(client)) {
          sm.set(client, 0);
        }
      });
      writeVarUint(encoder.restEncoder, sm.size);
      from(sm.entries()).sort((a, b) => b[0] - a[0]).forEach(([client, clock]) => {
        writeStructs(
          encoder,
          /** @type {Array<GC|Item>} */
          store.clients.get(client),
          client,
          clock
        );
      });
    };
    writeStructsFromTransaction = (encoder, transaction) => writeClientsStructs(encoder, transaction.doc.store, transaction.beforeState);
    EventHandler = class {
      constructor() {
        this.l = [];
      }
    };
    createEventHandler = () => new EventHandler();
    addEventHandlerListener = (eventHandler, f) => eventHandler.l.push(f);
    removeEventHandlerListener = (eventHandler, f) => {
      const l = eventHandler.l;
      const len = l.length;
      eventHandler.l = l.filter((g) => f !== g);
      if (len === eventHandler.l.length) {
        console.error("[yjs] Tried to remove event handler that doesn't exist.");
      }
    };
    callEventHandlerListeners = (eventHandler, arg0, arg1) => callAll(eventHandler.l, [arg0, arg1]);
    ID = class {
      /**
       * @param {number} client client id
       * @param {number} clock unique per client id, continuous number
       */
      constructor(client, clock) {
        this.client = client;
        this.clock = clock;
      }
    };
    compareIDs = (a, b) => a === b || a !== null && b !== null && a.client === b.client && a.clock === b.clock;
    createID = (client, clock) => new ID(client, clock);
    findRootTypeKey = (type) => {
      for (const [key, value] of type.doc.share.entries()) {
        if (value === type) {
          return key;
        }
      }
      throw unexpectedCase();
    };
    isParentOf = (parent, child) => {
      while (child !== null) {
        if (child.parent === parent) {
          return true;
        }
        child = /** @type {AbstractType<any>} */
        child.parent._item;
      }
      return false;
    };
    Snapshot = class {
      /**
       * @param {DeleteSet} ds
       * @param {Map<number,number>} sv state map
       */
      constructor(ds, sv) {
        this.ds = ds;
        this.sv = sv;
      }
    };
    createSnapshot = (ds, sm) => new Snapshot(ds, sm);
    emptySnapshot = createSnapshot(createDeleteSet(), /* @__PURE__ */ new Map());
    isVisible = (item, snapshot) => snapshot === void 0 ? !item.deleted : snapshot.sv.has(item.id.client) && (snapshot.sv.get(item.id.client) || 0) > item.id.clock && !isDeleted(snapshot.ds, item.id);
    splitSnapshotAffectedStructs = (transaction, snapshot) => {
      const meta = setIfUndefined(transaction.meta, splitSnapshotAffectedStructs, create);
      const store = transaction.doc.store;
      if (!meta.has(snapshot)) {
        snapshot.sv.forEach((clock, client) => {
          if (clock < getState(store, client)) {
            getItemCleanStart(transaction, createID(client, clock));
          }
        });
        iterateDeletedStructs(transaction, snapshot.ds, (_item) => {
        });
        meta.add(snapshot);
      }
    };
    StructStore = class {
      constructor() {
        this.clients = /* @__PURE__ */ new Map();
        this.pendingStructs = null;
        this.pendingDs = null;
      }
    };
    getStateVector = (store) => {
      const sm = /* @__PURE__ */ new Map();
      store.clients.forEach((structs, client) => {
        const struct = structs[structs.length - 1];
        sm.set(client, struct.id.clock + struct.length);
      });
      return sm;
    };
    getState = (store, client) => {
      const structs = store.clients.get(client);
      if (structs === void 0) {
        return 0;
      }
      const lastStruct = structs[structs.length - 1];
      return lastStruct.id.clock + lastStruct.length;
    };
    addStruct = (store, struct) => {
      let structs = store.clients.get(struct.id.client);
      if (structs === void 0) {
        structs = [];
        store.clients.set(struct.id.client, structs);
      } else {
        const lastStruct = structs[structs.length - 1];
        if (lastStruct.id.clock + lastStruct.length !== struct.id.clock) {
          throw unexpectedCase();
        }
      }
      structs.push(struct);
    };
    findIndexSS = (structs, clock) => {
      let left = 0;
      let right = structs.length - 1;
      let mid = structs[right];
      let midclock = mid.id.clock;
      if (midclock === clock) {
        return right;
      }
      let midindex = floor(clock / (midclock + mid.length - 1) * right);
      while (left <= right) {
        mid = structs[midindex];
        midclock = mid.id.clock;
        if (midclock <= clock) {
          if (clock < midclock + mid.length) {
            return midindex;
          }
          left = midindex + 1;
        } else {
          right = midindex - 1;
        }
        midindex = floor((left + right) / 2);
      }
      throw unexpectedCase();
    };
    find = (store, id2) => {
      const structs = store.clients.get(id2.client);
      return structs[findIndexSS(structs, id2.clock)];
    };
    getItem = /** @type {function(StructStore,ID):Item} */
    find;
    findIndexCleanStart = (transaction, structs, clock) => {
      const index = findIndexSS(structs, clock);
      const struct = structs[index];
      if (struct.id.clock < clock && struct instanceof Item) {
        structs.splice(index + 1, 0, splitItem(transaction, struct, clock - struct.id.clock));
        return index + 1;
      }
      return index;
    };
    getItemCleanStart = (transaction, id2) => {
      const structs = (
        /** @type {Array<Item>} */
        transaction.doc.store.clients.get(id2.client)
      );
      return structs[findIndexCleanStart(transaction, structs, id2.clock)];
    };
    getItemCleanEnd = (transaction, store, id2) => {
      const structs = store.clients.get(id2.client);
      const index = findIndexSS(structs, id2.clock);
      const struct = structs[index];
      if (id2.clock !== struct.id.clock + struct.length - 1 && struct.constructor !== GC) {
        structs.splice(index + 1, 0, splitItem(transaction, struct, id2.clock - struct.id.clock + 1));
      }
      return struct;
    };
    replaceStruct = (store, struct, newStruct) => {
      const structs = (
        /** @type {Array<GC|Item>} */
        store.clients.get(struct.id.client)
      );
      structs[findIndexSS(structs, struct.id.clock)] = newStruct;
    };
    iterateStructs = (transaction, structs, clockStart, len, f) => {
      if (len === 0) {
        return;
      }
      const clockEnd = clockStart + len;
      let index = findIndexCleanStart(transaction, structs, clockStart);
      let struct;
      do {
        struct = structs[index++];
        if (clockEnd < struct.id.clock + struct.length) {
          findIndexCleanStart(transaction, structs, clockEnd);
        }
        f(struct);
      } while (index < structs.length && structs[index].id.clock < clockEnd);
    };
    Transaction2 = class {
      /**
       * @param {Doc} doc
       * @param {any} origin
       * @param {boolean} local
       */
      constructor(doc2, origin, local) {
        this.doc = doc2;
        this.deleteSet = new DeleteSet();
        this.beforeState = getStateVector(doc2.store);
        this.afterState = /* @__PURE__ */ new Map();
        this.changed = /* @__PURE__ */ new Map();
        this.changedParentTypes = /* @__PURE__ */ new Map();
        this._mergeStructs = [];
        this.origin = origin;
        this.meta = /* @__PURE__ */ new Map();
        this.local = local;
        this.subdocsAdded = /* @__PURE__ */ new Set();
        this.subdocsRemoved = /* @__PURE__ */ new Set();
        this.subdocsLoaded = /* @__PURE__ */ new Set();
        this._needFormattingCleanup = false;
      }
    };
    writeUpdateMessageFromTransaction = (encoder, transaction) => {
      if (transaction.deleteSet.clients.size === 0 && !any(transaction.afterState, (clock, client) => transaction.beforeState.get(client) !== clock)) {
        return false;
      }
      sortAndMergeDeleteSet(transaction.deleteSet);
      writeStructsFromTransaction(encoder, transaction);
      writeDeleteSet(encoder, transaction.deleteSet);
      return true;
    };
    addChangedTypeToTransaction = (transaction, type, parentSub) => {
      const item = type._item;
      if (item === null || item.id.clock < (transaction.beforeState.get(item.id.client) || 0) && !item.deleted) {
        setIfUndefined(transaction.changed, type, create).add(parentSub);
      }
    };
    tryToMergeWithLefts = (structs, pos) => {
      let right = structs[pos];
      let left = structs[pos - 1];
      let i = pos;
      for (; i > 0; right = left, left = structs[--i - 1]) {
        if (left.deleted === right.deleted && left.constructor === right.constructor) {
          if (left.mergeWith(right)) {
            if (right instanceof Item && right.parentSub !== null && /** @type {AbstractType<any>} */
            right.parent._map.get(right.parentSub) === right) {
              right.parent._map.set(
                right.parentSub,
                /** @type {Item} */
                left
              );
            }
            continue;
          }
        }
        break;
      }
      const merged = pos - i;
      if (merged) {
        structs.splice(pos + 1 - merged, merged);
      }
      return merged;
    };
    tryGcDeleteSet = (ds, store, gcFilter) => {
      for (const [client, deleteItems] of ds.clients.entries()) {
        const structs = (
          /** @type {Array<GC|Item>} */
          store.clients.get(client)
        );
        for (let di = deleteItems.length - 1; di >= 0; di--) {
          const deleteItem = deleteItems[di];
          const endDeleteItemClock = deleteItem.clock + deleteItem.len;
          for (let si = findIndexSS(structs, deleteItem.clock), struct = structs[si]; si < structs.length && struct.id.clock < endDeleteItemClock; struct = structs[++si]) {
            const struct2 = structs[si];
            if (deleteItem.clock + deleteItem.len <= struct2.id.clock) {
              break;
            }
            if (struct2 instanceof Item && struct2.deleted && !struct2.keep && gcFilter(struct2)) {
              struct2.gc(store, false);
            }
          }
        }
      }
    };
    tryMergeDeleteSet = (ds, store) => {
      ds.clients.forEach((deleteItems, client) => {
        const structs = (
          /** @type {Array<GC|Item>} */
          store.clients.get(client)
        );
        for (let di = deleteItems.length - 1; di >= 0; di--) {
          const deleteItem = deleteItems[di];
          const mostRightIndexToCheck = min(structs.length - 1, 1 + findIndexSS(structs, deleteItem.clock + deleteItem.len - 1));
          for (let si = mostRightIndexToCheck, struct = structs[si]; si > 0 && struct.id.clock >= deleteItem.clock; struct = structs[si]) {
            si -= 1 + tryToMergeWithLefts(structs, si);
          }
        }
      });
    };
    cleanupTransactions = (transactionCleanups, i) => {
      if (i < transactionCleanups.length) {
        const transaction = transactionCleanups[i];
        const doc2 = transaction.doc;
        const store = doc2.store;
        const ds = transaction.deleteSet;
        const mergeStructs = transaction._mergeStructs;
        try {
          sortAndMergeDeleteSet(ds);
          transaction.afterState = getStateVector(transaction.doc.store);
          doc2.emit("beforeObserverCalls", [transaction, doc2]);
          const fs = [];
          transaction.changed.forEach(
            (subs, itemtype) => fs.push(() => {
              if (itemtype._item === null || !itemtype._item.deleted) {
                itemtype._callObserver(transaction, subs);
              }
            })
          );
          fs.push(() => {
            transaction.changedParentTypes.forEach((events, type) => {
              if (type._dEH.l.length > 0 && (type._item === null || !type._item.deleted)) {
                events = events.filter(
                  (event) => event.target._item === null || !event.target._item.deleted
                );
                events.forEach((event) => {
                  event.currentTarget = type;
                  event._path = null;
                });
                events.sort((event1, event2) => event1.path.length - event2.path.length);
                callEventHandlerListeners(type._dEH, events, transaction);
              }
            });
          });
          fs.push(() => doc2.emit("afterTransaction", [transaction, doc2]));
          callAll(fs, []);
          if (transaction._needFormattingCleanup) {
            cleanupYTextAfterTransaction(transaction);
          }
        } finally {
          if (doc2.gc) {
            tryGcDeleteSet(ds, store, doc2.gcFilter);
          }
          tryMergeDeleteSet(ds, store);
          transaction.afterState.forEach((clock, client) => {
            const beforeClock = transaction.beforeState.get(client) || 0;
            if (beforeClock !== clock) {
              const structs = (
                /** @type {Array<GC|Item>} */
                store.clients.get(client)
              );
              const firstChangePos = max(findIndexSS(structs, beforeClock), 1);
              for (let i2 = structs.length - 1; i2 >= firstChangePos; ) {
                i2 -= 1 + tryToMergeWithLefts(structs, i2);
              }
            }
          });
          for (let i2 = mergeStructs.length - 1; i2 >= 0; i2--) {
            const { client, clock } = mergeStructs[i2].id;
            const structs = (
              /** @type {Array<GC|Item>} */
              store.clients.get(client)
            );
            const replacedStructPos = findIndexSS(structs, clock);
            if (replacedStructPos + 1 < structs.length) {
              if (tryToMergeWithLefts(structs, replacedStructPos + 1) > 1) {
                continue;
              }
            }
            if (replacedStructPos > 0) {
              tryToMergeWithLefts(structs, replacedStructPos);
            }
          }
          if (!transaction.local && transaction.afterState.get(doc2.clientID) !== transaction.beforeState.get(doc2.clientID)) {
            print(ORANGE, BOLD, "[yjs] ", UNBOLD, RED, "Changed the client-id because another client seems to be using it.");
            doc2.clientID = generateNewClientId();
          }
          doc2.emit("afterTransactionCleanup", [transaction, doc2]);
          if (doc2._observers.has("update")) {
            const encoder = new UpdateEncoderV1();
            const hasContent = writeUpdateMessageFromTransaction(encoder, transaction);
            if (hasContent) {
              doc2.emit("update", [encoder.toUint8Array(), transaction.origin, doc2, transaction]);
            }
          }
          if (doc2._observers.has("updateV2")) {
            const encoder = new UpdateEncoderV2();
            const hasContent = writeUpdateMessageFromTransaction(encoder, transaction);
            if (hasContent) {
              doc2.emit("updateV2", [encoder.toUint8Array(), transaction.origin, doc2, transaction]);
            }
          }
          const { subdocsAdded, subdocsLoaded, subdocsRemoved } = transaction;
          if (subdocsAdded.size > 0 || subdocsRemoved.size > 0 || subdocsLoaded.size > 0) {
            subdocsAdded.forEach((subdoc) => {
              subdoc.clientID = doc2.clientID;
              if (subdoc.collectionid == null) {
                subdoc.collectionid = doc2.collectionid;
              }
              doc2.subdocs.add(subdoc);
            });
            subdocsRemoved.forEach((subdoc) => doc2.subdocs.delete(subdoc));
            doc2.emit("subdocs", [{ loaded: subdocsLoaded, added: subdocsAdded, removed: subdocsRemoved }, doc2, transaction]);
            subdocsRemoved.forEach((subdoc) => subdoc.destroy());
          }
          if (transactionCleanups.length <= i + 1) {
            doc2._transactionCleanups = [];
            doc2.emit("afterAllTransactions", [doc2, transactionCleanups]);
          } else {
            cleanupTransactions(transactionCleanups, i + 1);
          }
        }
      }
    };
    transact = (doc2, f, origin = null, local = true) => {
      const transactionCleanups = doc2._transactionCleanups;
      let initialCall = false;
      let result = null;
      if (doc2._transaction === null) {
        initialCall = true;
        doc2._transaction = new Transaction2(doc2, origin, local);
        transactionCleanups.push(doc2._transaction);
        if (transactionCleanups.length === 1) {
          doc2.emit("beforeAllTransactions", [doc2]);
        }
        doc2.emit("beforeTransaction", [doc2._transaction, doc2]);
      }
      try {
        result = f(doc2._transaction);
      } finally {
        if (initialCall) {
          const finishCleanup = doc2._transaction === transactionCleanups[0];
          doc2._transaction = null;
          if (finishCleanup) {
            cleanupTransactions(transactionCleanups, 0);
          }
        }
      }
      return result;
    };
    StackItem = class {
      /**
       * @param {DeleteSet} deletions
       * @param {DeleteSet} insertions
       */
      constructor(deletions, insertions) {
        this.insertions = insertions;
        this.deletions = deletions;
        this.meta = /* @__PURE__ */ new Map();
      }
    };
    clearUndoManagerStackItem = (tr, um, stackItem) => {
      iterateDeletedStructs(tr, stackItem.deletions, (item) => {
        if (item instanceof Item && um.scope.some((type) => isParentOf(type, item))) {
          keepItem(item, false);
        }
      });
    };
    popStackItem = (undoManager, stack, eventType) => {
      let result = null;
      let _tr = null;
      const doc2 = undoManager.doc;
      const scope = undoManager.scope;
      transact(doc2, (transaction) => {
        while (stack.length > 0 && result === null) {
          const store = doc2.store;
          const stackItem = (
            /** @type {StackItem} */
            stack.pop()
          );
          const itemsToRedo = /* @__PURE__ */ new Set();
          const itemsToDelete = [];
          let performedChange = false;
          iterateDeletedStructs(transaction, stackItem.insertions, (struct) => {
            if (struct instanceof Item) {
              if (struct.redone !== null) {
                let { item, diff } = followRedone(store, struct.id);
                if (diff > 0) {
                  item = getItemCleanStart(transaction, createID(item.id.client, item.id.clock + diff));
                }
                struct = item;
              }
              if (!struct.deleted && scope.some((type) => isParentOf(
                type,
                /** @type {Item} */
                struct
              ))) {
                itemsToDelete.push(struct);
              }
            }
          });
          iterateDeletedStructs(transaction, stackItem.deletions, (struct) => {
            if (struct instanceof Item && scope.some((type) => isParentOf(type, struct)) && // Never redo structs in stackItem.insertions because they were created and deleted in the same capture interval.
            !isDeleted(stackItem.insertions, struct.id)) {
              itemsToRedo.add(struct);
            }
          });
          itemsToRedo.forEach((struct) => {
            performedChange = redoItem(transaction, struct, itemsToRedo, stackItem.insertions, undoManager.ignoreRemoteMapChanges, undoManager) !== null || performedChange;
          });
          for (let i = itemsToDelete.length - 1; i >= 0; i--) {
            const item = itemsToDelete[i];
            if (undoManager.deleteFilter(item)) {
              item.delete(transaction);
              performedChange = true;
            }
          }
          result = performedChange ? stackItem : null;
        }
        transaction.changed.forEach((subProps, type) => {
          if (subProps.has(null) && type._searchMarker) {
            type._searchMarker.length = 0;
          }
        });
        _tr = transaction;
      }, undoManager);
      if (result != null) {
        const changedParentTypes = _tr.changedParentTypes;
        undoManager.emit("stack-item-popped", [{ stackItem: result, type: eventType, changedParentTypes }, undoManager]);
      }
      return result;
    };
    UndoManager = class extends Observable {
      /**
       * @param {AbstractType<any>|Array<AbstractType<any>>} typeScope Accepts either a single type, or an array of types
       * @param {UndoManagerOptions} options
       */
      constructor(typeScope, {
        captureTimeout = 500,
        captureTransaction = (_tr) => true,
        deleteFilter = () => true,
        trackedOrigins = /* @__PURE__ */ new Set([null]),
        ignoreRemoteMapChanges = false,
        doc: doc2 = (
          /** @type {Doc} */
          isArray(typeScope) ? typeScope[0].doc : typeScope.doc
        )
      } = {}) {
        super();
        this.scope = [];
        this.doc = doc2;
        this.addToScope(typeScope);
        this.deleteFilter = deleteFilter;
        trackedOrigins.add(this);
        this.trackedOrigins = trackedOrigins;
        this.captureTransaction = captureTransaction;
        this.undoStack = [];
        this.redoStack = [];
        this.undoing = false;
        this.redoing = false;
        this.lastChange = 0;
        this.ignoreRemoteMapChanges = ignoreRemoteMapChanges;
        this.captureTimeout = captureTimeout;
        this.afterTransactionHandler = (transaction) => {
          if (!this.captureTransaction(transaction) || !this.scope.some((type) => transaction.changedParentTypes.has(type)) || !this.trackedOrigins.has(transaction.origin) && (!transaction.origin || !this.trackedOrigins.has(transaction.origin.constructor))) {
            return;
          }
          const undoing = this.undoing;
          const redoing = this.redoing;
          const stack = undoing ? this.redoStack : this.undoStack;
          if (undoing) {
            this.stopCapturing();
          } else if (!redoing) {
            this.clear(false, true);
          }
          const insertions = new DeleteSet();
          transaction.afterState.forEach((endClock, client) => {
            const startClock = transaction.beforeState.get(client) || 0;
            const len = endClock - startClock;
            if (len > 0) {
              addToDeleteSet(insertions, client, startClock, len);
            }
          });
          const now = getUnixTime();
          let didAdd = false;
          if (this.lastChange > 0 && now - this.lastChange < this.captureTimeout && stack.length > 0 && !undoing && !redoing) {
            const lastOp = stack[stack.length - 1];
            lastOp.deletions = mergeDeleteSets([lastOp.deletions, transaction.deleteSet]);
            lastOp.insertions = mergeDeleteSets([lastOp.insertions, insertions]);
          } else {
            stack.push(new StackItem(transaction.deleteSet, insertions));
            didAdd = true;
          }
          if (!undoing && !redoing) {
            this.lastChange = now;
          }
          iterateDeletedStructs(
            transaction,
            transaction.deleteSet,
            /** @param {Item|GC} item */
            (item) => {
              if (item instanceof Item && this.scope.some((type) => isParentOf(type, item))) {
                keepItem(item, true);
              }
            }
          );
          const changeEvent = [{ stackItem: stack[stack.length - 1], origin: transaction.origin, type: undoing ? "redo" : "undo", changedParentTypes: transaction.changedParentTypes }, this];
          if (didAdd) {
            this.emit("stack-item-added", changeEvent);
          } else {
            this.emit("stack-item-updated", changeEvent);
          }
        };
        this.doc.on("afterTransaction", this.afterTransactionHandler);
        this.doc.on("destroy", () => {
          this.destroy();
        });
      }
      /**
       * @param {Array<AbstractType<any>> | AbstractType<any>} ytypes
       */
      addToScope(ytypes) {
        ytypes = isArray(ytypes) ? ytypes : [ytypes];
        ytypes.forEach((ytype) => {
          if (this.scope.every((yt) => yt !== ytype)) {
            if (ytype.doc !== this.doc)
              warn("[yjs#509] Not same Y.Doc");
            this.scope.push(ytype);
          }
        });
      }
      /**
       * @param {any} origin
       */
      addTrackedOrigin(origin) {
        this.trackedOrigins.add(origin);
      }
      /**
       * @param {any} origin
       */
      removeTrackedOrigin(origin) {
        this.trackedOrigins.delete(origin);
      }
      clear(clearUndoStack = true, clearRedoStack = true) {
        if (clearUndoStack && this.canUndo() || clearRedoStack && this.canRedo()) {
          this.doc.transact((tr) => {
            if (clearUndoStack) {
              this.undoStack.forEach((item) => clearUndoManagerStackItem(tr, this, item));
              this.undoStack = [];
            }
            if (clearRedoStack) {
              this.redoStack.forEach((item) => clearUndoManagerStackItem(tr, this, item));
              this.redoStack = [];
            }
            this.emit("stack-cleared", [{ undoStackCleared: clearUndoStack, redoStackCleared: clearRedoStack }]);
          });
        }
      }
      /**
       * UndoManager merges Undo-StackItem if they are created within time-gap
       * smaller than `options.captureTimeout`. Call `um.stopCapturing()` so that the next
       * StackItem won't be merged.
       *
       *
       * @example
       *     // without stopCapturing
       *     ytext.insert(0, 'a')
       *     ytext.insert(1, 'b')
       *     um.undo()
       *     ytext.toString() // => '' (note that 'ab' was removed)
       *     // with stopCapturing
       *     ytext.insert(0, 'a')
       *     um.stopCapturing()
       *     ytext.insert(0, 'b')
       *     um.undo()
       *     ytext.toString() // => 'a' (note that only 'b' was removed)
       *
       */
      stopCapturing() {
        this.lastChange = 0;
      }
      /**
       * Undo last changes on type.
       *
       * @return {StackItem?} Returns StackItem if a change was applied
       */
      undo() {
        this.undoing = true;
        let res;
        try {
          res = popStackItem(this, this.undoStack, "undo");
        } finally {
          this.undoing = false;
        }
        return res;
      }
      /**
       * Redo last undo operation.
       *
       * @return {StackItem?} Returns StackItem if a change was applied
       */
      redo() {
        this.redoing = true;
        let res;
        try {
          res = popStackItem(this, this.redoStack, "redo");
        } finally {
          this.redoing = false;
        }
        return res;
      }
      /**
       * Are undo steps available?
       *
       * @return {boolean} `true` if undo is possible
       */
      canUndo() {
        return this.undoStack.length > 0;
      }
      /**
       * Are redo steps available?
       *
       * @return {boolean} `true` if redo is possible
       */
      canRedo() {
        return this.redoStack.length > 0;
      }
      destroy() {
        this.trackedOrigins.delete(this);
        this.doc.off("afterTransaction", this.afterTransactionHandler);
        super.destroy();
      }
    };
    errorComputeChanges = "You must not compute changes after the event-handler fired.";
    YEvent = class {
      /**
       * @param {T} target The changed type.
       * @param {Transaction} transaction
       */
      constructor(target, transaction) {
        this.target = target;
        this.currentTarget = target;
        this.transaction = transaction;
        this._changes = null;
        this._keys = null;
        this._delta = null;
        this._path = null;
      }
      /**
       * Computes the path from `y` to the changed type.
       *
       * @todo v14 should standardize on path: Array<{parent, index}> because that is easier to work with.
       *
       * The following property holds:
       * @example
       *   let type = y
       *   event.path.forEach(dir => {
       *     type = type.get(dir)
       *   })
       *   type === event.target // => true
       */
      get path() {
        return this._path || (this._path = getPathTo(this.currentTarget, this.target));
      }
      /**
       * Check if a struct is deleted by this event.
       *
       * In contrast to change.deleted, this method also returns true if the struct was added and then deleted.
       *
       * @param {AbstractStruct} struct
       * @return {boolean}
       */
      deletes(struct) {
        return isDeleted(this.transaction.deleteSet, struct.id);
      }
      /**
       * @type {Map<string, { action: 'add' | 'update' | 'delete', oldValue: any, newValue: any }>}
       */
      get keys() {
        if (this._keys === null) {
          if (this.transaction.doc._transactionCleanups.length === 0) {
            throw create3(errorComputeChanges);
          }
          const keys2 = /* @__PURE__ */ new Map();
          const target = this.target;
          const changed = (
            /** @type Set<string|null> */
            this.transaction.changed.get(target)
          );
          changed.forEach((key) => {
            if (key !== null) {
              const item = (
                /** @type {Item} */
                target._map.get(key)
              );
              let action;
              let oldValue;
              if (this.adds(item)) {
                let prev = item.left;
                while (prev !== null && this.adds(prev)) {
                  prev = prev.left;
                }
                if (this.deletes(item)) {
                  if (prev !== null && this.deletes(prev)) {
                    action = "delete";
                    oldValue = last(prev.content.getContent());
                  } else {
                    return;
                  }
                } else {
                  if (prev !== null && this.deletes(prev)) {
                    action = "update";
                    oldValue = last(prev.content.getContent());
                  } else {
                    action = "add";
                    oldValue = void 0;
                  }
                }
              } else {
                if (this.deletes(item)) {
                  action = "delete";
                  oldValue = last(
                    /** @type {Item} */
                    item.content.getContent()
                  );
                } else {
                  return;
                }
              }
              keys2.set(key, { action, oldValue });
            }
          });
          this._keys = keys2;
        }
        return this._keys;
      }
      /**
       * This is a computed property. Note that this can only be safely computed during the
       * event call. Computing this property after other changes happened might result in
       * unexpected behavior (incorrect computation of deltas). A safe way to collect changes
       * is to store the `changes` or the `delta` object. Avoid storing the `transaction` object.
       *
       * @type {Array<{insert?: string | Array<any> | object | AbstractType<any>, retain?: number, delete?: number, attributes?: Object<string, any>}>}
       */
      get delta() {
        return this.changes.delta;
      }
      /**
       * Check if a struct is added by this event.
       *
       * In contrast to change.deleted, this method also returns true if the struct was added and then deleted.
       *
       * @param {AbstractStruct} struct
       * @return {boolean}
       */
      adds(struct) {
        return struct.id.clock >= (this.transaction.beforeState.get(struct.id.client) || 0);
      }
      /**
       * This is a computed property. Note that this can only be safely computed during the
       * event call. Computing this property after other changes happened might result in
       * unexpected behavior (incorrect computation of deltas). A safe way to collect changes
       * is to store the `changes` or the `delta` object. Avoid storing the `transaction` object.
       *
       * @type {{added:Set<Item>,deleted:Set<Item>,keys:Map<string,{action:'add'|'update'|'delete',oldValue:any}>,delta:Array<{insert?:Array<any>|string, delete?:number, retain?:number}>}}
       */
      get changes() {
        let changes = this._changes;
        if (changes === null) {
          if (this.transaction.doc._transactionCleanups.length === 0) {
            throw create3(errorComputeChanges);
          }
          const target = this.target;
          const added = create();
          const deleted = create();
          const delta = [];
          changes = {
            added,
            deleted,
            delta,
            keys: this.keys
          };
          const changed = (
            /** @type Set<string|null> */
            this.transaction.changed.get(target)
          );
          if (changed.has(null)) {
            let lastOp = null;
            const packOp = () => {
              if (lastOp) {
                delta.push(lastOp);
              }
            };
            for (let item = target._start; item !== null; item = item.right) {
              if (item.deleted) {
                if (this.deletes(item) && !this.adds(item)) {
                  if (lastOp === null || lastOp.delete === void 0) {
                    packOp();
                    lastOp = { delete: 0 };
                  }
                  lastOp.delete += item.length;
                  deleted.add(item);
                }
              } else {
                if (this.adds(item)) {
                  if (lastOp === null || lastOp.insert === void 0) {
                    packOp();
                    lastOp = { insert: [] };
                  }
                  lastOp.insert = lastOp.insert.concat(item.content.getContent());
                  added.add(item);
                } else {
                  if (lastOp === null || lastOp.retain === void 0) {
                    packOp();
                    lastOp = { retain: 0 };
                  }
                  lastOp.retain += item.length;
                }
              }
            }
            if (lastOp !== null && lastOp.retain === void 0) {
              packOp();
            }
          }
          this._changes = changes;
        }
        return (
          /** @type {any} */
          changes
        );
      }
    };
    getPathTo = (parent, child) => {
      const path2 = [];
      while (child._item !== null && child !== parent) {
        if (child._item.parentSub !== null) {
          path2.unshift(child._item.parentSub);
        } else {
          let i = 0;
          let c = (
            /** @type {AbstractType<any>} */
            child._item.parent._start
          );
          while (c !== child._item && c !== null) {
            if (!c.deleted) {
              i++;
            }
            c = c.right;
          }
          path2.unshift(i);
        }
        child = /** @type {AbstractType<any>} */
        child._item.parent;
      }
      return path2;
    };
    maxSearchMarker = 80;
    globalSearchMarkerTimestamp = 0;
    ArraySearchMarker = class {
      /**
       * @param {Item} p
       * @param {number} index
       */
      constructor(p2, index) {
        p2.marker = true;
        this.p = p2;
        this.index = index;
        this.timestamp = globalSearchMarkerTimestamp++;
      }
    };
    refreshMarkerTimestamp = (marker) => {
      marker.timestamp = globalSearchMarkerTimestamp++;
    };
    overwriteMarker = (marker, p2, index) => {
      marker.p.marker = false;
      marker.p = p2;
      p2.marker = true;
      marker.index = index;
      marker.timestamp = globalSearchMarkerTimestamp++;
    };
    markPosition = (searchMarker, p2, index) => {
      if (searchMarker.length >= maxSearchMarker) {
        const marker = searchMarker.reduce((a, b) => a.timestamp < b.timestamp ? a : b);
        overwriteMarker(marker, p2, index);
        return marker;
      } else {
        const pm = new ArraySearchMarker(p2, index);
        searchMarker.push(pm);
        return pm;
      }
    };
    findMarker = (yarray, index) => {
      if (yarray._start === null || index === 0 || yarray._searchMarker === null) {
        return null;
      }
      const marker = yarray._searchMarker.length === 0 ? null : yarray._searchMarker.reduce((a, b) => abs(index - a.index) < abs(index - b.index) ? a : b);
      let p2 = yarray._start;
      let pindex = 0;
      if (marker !== null) {
        p2 = marker.p;
        pindex = marker.index;
        refreshMarkerTimestamp(marker);
      }
      while (p2.right !== null && pindex < index) {
        if (!p2.deleted && p2.countable) {
          if (index < pindex + p2.length) {
            break;
          }
          pindex += p2.length;
        }
        p2 = p2.right;
      }
      while (p2.left !== null && pindex > index) {
        p2 = p2.left;
        if (!p2.deleted && p2.countable) {
          pindex -= p2.length;
        }
      }
      while (p2.left !== null && p2.left.id.client === p2.id.client && p2.left.id.clock + p2.left.length === p2.id.clock) {
        p2 = p2.left;
        if (!p2.deleted && p2.countable) {
          pindex -= p2.length;
        }
      }
      if (marker !== null && abs(marker.index - pindex) < /** @type {YText|YArray<any>} */
      p2.parent.length / maxSearchMarker) {
        overwriteMarker(marker, p2, pindex);
        return marker;
      } else {
        return markPosition(yarray._searchMarker, p2, pindex);
      }
    };
    updateMarkerChanges = (searchMarker, index, len) => {
      for (let i = searchMarker.length - 1; i >= 0; i--) {
        const m = searchMarker[i];
        if (len > 0) {
          let p2 = m.p;
          p2.marker = false;
          while (p2 && (p2.deleted || !p2.countable)) {
            p2 = p2.left;
            if (p2 && !p2.deleted && p2.countable) {
              m.index -= p2.length;
            }
          }
          if (p2 === null || p2.marker === true) {
            searchMarker.splice(i, 1);
            continue;
          }
          m.p = p2;
          p2.marker = true;
        }
        if (index < m.index || len > 0 && index === m.index) {
          m.index = max(index, m.index + len);
        }
      }
    };
    callTypeObservers = (type, transaction, event) => {
      const changedType = type;
      const changedParentTypes = transaction.changedParentTypes;
      while (true) {
        setIfUndefined(changedParentTypes, type, () => []).push(event);
        if (type._item === null) {
          break;
        }
        type = /** @type {AbstractType<any>} */
        type._item.parent;
      }
      callEventHandlerListeners(changedType._eH, event, transaction);
    };
    AbstractType = class {
      constructor() {
        this._item = null;
        this._map = /* @__PURE__ */ new Map();
        this._start = null;
        this.doc = null;
        this._length = 0;
        this._eH = createEventHandler();
        this._dEH = createEventHandler();
        this._searchMarker = null;
      }
      /**
       * @return {AbstractType<any>|null}
       */
      get parent() {
        return this._item ? (
          /** @type {AbstractType<any>} */
          this._item.parent
        ) : null;
      }
      /**
       * Integrate this type into the Yjs instance.
       *
       * * Save this struct in the os
       * * This type is sent to other client
       * * Observer functions are fired
       *
       * @param {Doc} y The Yjs instance
       * @param {Item|null} item
       */
      _integrate(y, item) {
        this.doc = y;
        this._item = item;
      }
      /**
       * @return {AbstractType<EventType>}
       */
      _copy() {
        throw methodUnimplemented();
      }
      /**
       * @return {AbstractType<EventType>}
       */
      clone() {
        throw methodUnimplemented();
      }
      /**
       * @param {UpdateEncoderV1 | UpdateEncoderV2} _encoder
       */
      _write(_encoder) {
      }
      /**
       * The first non-deleted item
       */
      get _first() {
        let n = this._start;
        while (n !== null && n.deleted) {
          n = n.right;
        }
        return n;
      }
      /**
       * Creates YEvent and calls all type observers.
       * Must be implemented by each type.
       *
       * @param {Transaction} transaction
       * @param {Set<null|string>} _parentSubs Keys changed on this type. `null` if list was modified.
       */
      _callObserver(transaction, _parentSubs) {
        if (!transaction.local && this._searchMarker) {
          this._searchMarker.length = 0;
        }
      }
      /**
       * Observe all events that are created on this type.
       *
       * @param {function(EventType, Transaction):void} f Observer function
       */
      observe(f) {
        addEventHandlerListener(this._eH, f);
      }
      /**
       * Observe all events that are created by this type and its children.
       *
       * @param {function(Array<YEvent<any>>,Transaction):void} f Observer function
       */
      observeDeep(f) {
        addEventHandlerListener(this._dEH, f);
      }
      /**
       * Unregister an observer function.
       *
       * @param {function(EventType,Transaction):void} f Observer function
       */
      unobserve(f) {
        removeEventHandlerListener(this._eH, f);
      }
      /**
       * Unregister an observer function.
       *
       * @param {function(Array<YEvent<any>>,Transaction):void} f Observer function
       */
      unobserveDeep(f) {
        removeEventHandlerListener(this._dEH, f);
      }
      /**
       * @abstract
       * @return {any}
       */
      toJSON() {
      }
    };
    typeListSlice = (type, start, end) => {
      if (start < 0) {
        start = type._length + start;
      }
      if (end < 0) {
        end = type._length + end;
      }
      let len = end - start;
      const cs = [];
      let n = type._start;
      while (n !== null && len > 0) {
        if (n.countable && !n.deleted) {
          const c = n.content.getContent();
          if (c.length <= start) {
            start -= c.length;
          } else {
            for (let i = start; i < c.length && len > 0; i++) {
              cs.push(c[i]);
              len--;
            }
            start = 0;
          }
        }
        n = n.right;
      }
      return cs;
    };
    typeListToArray = (type) => {
      const cs = [];
      let n = type._start;
      while (n !== null) {
        if (n.countable && !n.deleted) {
          const c = n.content.getContent();
          for (let i = 0; i < c.length; i++) {
            cs.push(c[i]);
          }
        }
        n = n.right;
      }
      return cs;
    };
    typeListForEach = (type, f) => {
      let index = 0;
      let n = type._start;
      while (n !== null) {
        if (n.countable && !n.deleted) {
          const c = n.content.getContent();
          for (let i = 0; i < c.length; i++) {
            f(c[i], index++, type);
          }
        }
        n = n.right;
      }
    };
    typeListMap = (type, f) => {
      const result = [];
      typeListForEach(type, (c, i) => {
        result.push(f(c, i, type));
      });
      return result;
    };
    typeListCreateIterator = (type) => {
      let n = type._start;
      let currentContent = null;
      let currentContentIndex = 0;
      return {
        [Symbol.iterator]() {
          return this;
        },
        next: () => {
          if (currentContent === null) {
            while (n !== null && n.deleted) {
              n = n.right;
            }
            if (n === null) {
              return {
                done: true,
                value: void 0
              };
            }
            currentContent = n.content.getContent();
            currentContentIndex = 0;
            n = n.right;
          }
          const value = currentContent[currentContentIndex++];
          if (currentContent.length <= currentContentIndex) {
            currentContent = null;
          }
          return {
            done: false,
            value
          };
        }
      };
    };
    typeListGet = (type, index) => {
      const marker = findMarker(type, index);
      let n = type._start;
      if (marker !== null) {
        n = marker.p;
        index -= marker.index;
      }
      for (; n !== null; n = n.right) {
        if (!n.deleted && n.countable) {
          if (index < n.length) {
            return n.content.getContent()[index];
          }
          index -= n.length;
        }
      }
    };
    typeListInsertGenericsAfter = (transaction, parent, referenceItem, content) => {
      let left = referenceItem;
      const doc2 = transaction.doc;
      const ownClientId = doc2.clientID;
      const store = doc2.store;
      const right = referenceItem === null ? parent._start : referenceItem.right;
      let jsonContent = [];
      const packJsonContent = () => {
        if (jsonContent.length > 0) {
          left = new Item(createID(ownClientId, getState(store, ownClientId)), left, left && left.lastId, right, right && right.id, parent, null, new ContentAny(jsonContent));
          left.integrate(transaction, 0);
          jsonContent = [];
        }
      };
      content.forEach((c) => {
        if (c === null) {
          jsonContent.push(c);
        } else {
          switch (c.constructor) {
            case Number:
            case Object:
            case Boolean:
            case Array:
            case String:
              jsonContent.push(c);
              break;
            default:
              packJsonContent();
              switch (c.constructor) {
                case Uint8Array:
                case ArrayBuffer:
                  left = new Item(createID(ownClientId, getState(store, ownClientId)), left, left && left.lastId, right, right && right.id, parent, null, new ContentBinary(new Uint8Array(
                    /** @type {Uint8Array} */
                    c
                  )));
                  left.integrate(transaction, 0);
                  break;
                case Doc:
                  left = new Item(createID(ownClientId, getState(store, ownClientId)), left, left && left.lastId, right, right && right.id, parent, null, new ContentDoc(
                    /** @type {Doc} */
                    c
                  ));
                  left.integrate(transaction, 0);
                  break;
                default:
                  if (c instanceof AbstractType) {
                    left = new Item(createID(ownClientId, getState(store, ownClientId)), left, left && left.lastId, right, right && right.id, parent, null, new ContentType(c));
                    left.integrate(transaction, 0);
                  } else {
                    throw new Error("Unexpected content type in insert operation");
                  }
              }
          }
        }
      });
      packJsonContent();
    };
    lengthExceeded = () => create3("Length exceeded!");
    typeListInsertGenerics = (transaction, parent, index, content) => {
      if (index > parent._length) {
        throw lengthExceeded();
      }
      if (index === 0) {
        if (parent._searchMarker) {
          updateMarkerChanges(parent._searchMarker, index, content.length);
        }
        return typeListInsertGenericsAfter(transaction, parent, null, content);
      }
      const startIndex = index;
      const marker = findMarker(parent, index);
      let n = parent._start;
      if (marker !== null) {
        n = marker.p;
        index -= marker.index;
        if (index === 0) {
          n = n.prev;
          index += n && n.countable && !n.deleted ? n.length : 0;
        }
      }
      for (; n !== null; n = n.right) {
        if (!n.deleted && n.countable) {
          if (index <= n.length) {
            if (index < n.length) {
              getItemCleanStart(transaction, createID(n.id.client, n.id.clock + index));
            }
            break;
          }
          index -= n.length;
        }
      }
      if (parent._searchMarker) {
        updateMarkerChanges(parent._searchMarker, startIndex, content.length);
      }
      return typeListInsertGenericsAfter(transaction, parent, n, content);
    };
    typeListPushGenerics = (transaction, parent, content) => {
      const marker = (parent._searchMarker || []).reduce((maxMarker, currMarker) => currMarker.index > maxMarker.index ? currMarker : maxMarker, { index: 0, p: parent._start });
      let n = marker.p;
      if (n) {
        while (n.right) {
          n = n.right;
        }
      }
      return typeListInsertGenericsAfter(transaction, parent, n, content);
    };
    typeListDelete = (transaction, parent, index, length3) => {
      if (length3 === 0) {
        return;
      }
      const startIndex = index;
      const startLength = length3;
      const marker = findMarker(parent, index);
      let n = parent._start;
      if (marker !== null) {
        n = marker.p;
        index -= marker.index;
      }
      for (; n !== null && index > 0; n = n.right) {
        if (!n.deleted && n.countable) {
          if (index < n.length) {
            getItemCleanStart(transaction, createID(n.id.client, n.id.clock + index));
          }
          index -= n.length;
        }
      }
      while (length3 > 0 && n !== null) {
        if (!n.deleted) {
          if (length3 < n.length) {
            getItemCleanStart(transaction, createID(n.id.client, n.id.clock + length3));
          }
          n.delete(transaction);
          length3 -= n.length;
        }
        n = n.right;
      }
      if (length3 > 0) {
        throw lengthExceeded();
      }
      if (parent._searchMarker) {
        updateMarkerChanges(
          parent._searchMarker,
          startIndex,
          -startLength + length3
          /* in case we remove the above exception */
        );
      }
    };
    typeMapDelete = (transaction, parent, key) => {
      const c = parent._map.get(key);
      if (c !== void 0) {
        c.delete(transaction);
      }
    };
    typeMapSet = (transaction, parent, key, value) => {
      const left = parent._map.get(key) || null;
      const doc2 = transaction.doc;
      const ownClientId = doc2.clientID;
      let content;
      if (value == null) {
        content = new ContentAny([value]);
      } else {
        switch (value.constructor) {
          case Number:
          case Object:
          case Boolean:
          case Array:
          case String:
            content = new ContentAny([value]);
            break;
          case Uint8Array:
            content = new ContentBinary(
              /** @type {Uint8Array} */
              value
            );
            break;
          case Doc:
            content = new ContentDoc(
              /** @type {Doc} */
              value
            );
            break;
          default:
            if (value instanceof AbstractType) {
              content = new ContentType(value);
            } else {
              throw new Error("Unexpected content type");
            }
        }
      }
      new Item(createID(ownClientId, getState(doc2.store, ownClientId)), left, left && left.lastId, null, null, parent, key, content).integrate(transaction, 0);
    };
    typeMapGet = (parent, key) => {
      const val = parent._map.get(key);
      return val !== void 0 && !val.deleted ? val.content.getContent()[val.length - 1] : void 0;
    };
    typeMapGetAll = (parent) => {
      const res = {};
      parent._map.forEach((value, key) => {
        if (!value.deleted) {
          res[key] = value.content.getContent()[value.length - 1];
        }
      });
      return res;
    };
    typeMapHas = (parent, key) => {
      const val = parent._map.get(key);
      return val !== void 0 && !val.deleted;
    };
    createMapIterator = (map2) => iteratorFilter(
      map2.entries(),
      /** @param {any} entry */
      (entry) => !entry[1].deleted
    );
    YArrayEvent = class extends YEvent {
      /**
       * @param {YArray<T>} yarray The changed type
       * @param {Transaction} transaction The transaction object
       */
      constructor(yarray, transaction) {
        super(yarray, transaction);
        this._transaction = transaction;
      }
    };
    YArray = class extends AbstractType {
      constructor() {
        super();
        this._prelimContent = [];
        this._searchMarker = [];
      }
      /**
       * Construct a new YArray containing the specified items.
       * @template {Object<string,any>|Array<any>|number|null|string|Uint8Array} T
       * @param {Array<T>} items
       * @return {YArray<T>}
       */
      static from(items) {
        const a = new YArray();
        a.push(items);
        return a;
      }
      /**
       * Integrate this type into the Yjs instance.
       *
       * * Save this struct in the os
       * * This type is sent to other client
       * * Observer functions are fired
       *
       * @param {Doc} y The Yjs instance
       * @param {Item} item
       */
      _integrate(y, item) {
        super._integrate(y, item);
        this.insert(
          0,
          /** @type {Array<any>} */
          this._prelimContent
        );
        this._prelimContent = null;
      }
      /**
       * @return {YArray<T>}
       */
      _copy() {
        return new YArray();
      }
      /**
       * @return {YArray<T>}
       */
      clone() {
        const arr = new YArray();
        arr.insert(0, this.toArray().map(
          (el) => el instanceof AbstractType ? (
            /** @type {typeof el} */
            el.clone()
          ) : el
        ));
        return arr;
      }
      get length() {
        return this._prelimContent === null ? this._length : this._prelimContent.length;
      }
      /**
       * Creates YArrayEvent and calls observers.
       *
       * @param {Transaction} transaction
       * @param {Set<null|string>} parentSubs Keys changed on this type. `null` if list was modified.
       */
      _callObserver(transaction, parentSubs) {
        super._callObserver(transaction, parentSubs);
        callTypeObservers(this, transaction, new YArrayEvent(this, transaction));
      }
      /**
       * Inserts new content at an index.
       *
       * Important: This function expects an array of content. Not just a content
       * object. The reason for this "weirdness" is that inserting several elements
       * is very efficient when it is done as a single operation.
       *
       * @example
       *  // Insert character 'a' at position 0
       *  yarray.insert(0, ['a'])
       *  // Insert numbers 1, 2 at position 1
       *  yarray.insert(1, [1, 2])
       *
       * @param {number} index The index to insert content at.
       * @param {Array<T>} content The array of content
       */
      insert(index, content) {
        if (this.doc !== null) {
          transact(this.doc, (transaction) => {
            typeListInsertGenerics(
              transaction,
              this,
              index,
              /** @type {any} */
              content
            );
          });
        } else {
          this._prelimContent.splice(index, 0, ...content);
        }
      }
      /**
       * Appends content to this YArray.
       *
       * @param {Array<T>} content Array of content to append.
       *
       * @todo Use the following implementation in all types.
       */
      push(content) {
        if (this.doc !== null) {
          transact(this.doc, (transaction) => {
            typeListPushGenerics(
              transaction,
              this,
              /** @type {any} */
              content
            );
          });
        } else {
          this._prelimContent.push(...content);
        }
      }
      /**
       * Preppends content to this YArray.
       *
       * @param {Array<T>} content Array of content to preppend.
       */
      unshift(content) {
        this.insert(0, content);
      }
      /**
       * Deletes elements starting from an index.
       *
       * @param {number} index Index at which to start deleting elements
       * @param {number} length The number of elements to remove. Defaults to 1.
       */
      delete(index, length3 = 1) {
        if (this.doc !== null) {
          transact(this.doc, (transaction) => {
            typeListDelete(transaction, this, index, length3);
          });
        } else {
          this._prelimContent.splice(index, length3);
        }
      }
      /**
       * Returns the i-th element from a YArray.
       *
       * @param {number} index The index of the element to return from the YArray
       * @return {T}
       */
      get(index) {
        return typeListGet(this, index);
      }
      /**
       * Transforms this YArray to a JavaScript Array.
       *
       * @return {Array<T>}
       */
      toArray() {
        return typeListToArray(this);
      }
      /**
       * Transforms this YArray to a JavaScript Array.
       *
       * @param {number} [start]
       * @param {number} [end]
       * @return {Array<T>}
       */
      slice(start = 0, end = this.length) {
        return typeListSlice(this, start, end);
      }
      /**
       * Transforms this Shared Type to a JSON object.
       *
       * @return {Array<any>}
       */
      toJSON() {
        return this.map((c) => c instanceof AbstractType ? c.toJSON() : c);
      }
      /**
       * Returns an Array with the result of calling a provided function on every
       * element of this YArray.
       *
       * @template M
       * @param {function(T,number,YArray<T>):M} f Function that produces an element of the new Array
       * @return {Array<M>} A new array with each element being the result of the
       *                 callback function
       */
      map(f) {
        return typeListMap(
          this,
          /** @type {any} */
          f
        );
      }
      /**
       * Executes a provided function once on overy element of this YArray.
       *
       * @param {function(T,number,YArray<T>):void} f A function to execute on every element of this YArray.
       */
      forEach(f) {
        typeListForEach(this, f);
      }
      /**
       * @return {IterableIterator<T>}
       */
      [Symbol.iterator]() {
        return typeListCreateIterator(this);
      }
      /**
       * @param {UpdateEncoderV1 | UpdateEncoderV2} encoder
       */
      _write(encoder) {
        encoder.writeTypeRef(YArrayRefID);
      }
    };
    YMapEvent = class extends YEvent {
      /**
       * @param {YMap<T>} ymap The YArray that changed.
       * @param {Transaction} transaction
       * @param {Set<any>} subs The keys that changed.
       */
      constructor(ymap, transaction, subs) {
        super(ymap, transaction);
        this.keysChanged = subs;
      }
    };
    YMap = class extends AbstractType {
      /**
       *
       * @param {Iterable<readonly [string, any]>=} entries - an optional iterable to initialize the YMap
       */
      constructor(entries) {
        super();
        this._prelimContent = null;
        if (entries === void 0) {
          this._prelimContent = /* @__PURE__ */ new Map();
        } else {
          this._prelimContent = new Map(entries);
        }
      }
      /**
       * Integrate this type into the Yjs instance.
       *
       * * Save this struct in the os
       * * This type is sent to other client
       * * Observer functions are fired
       *
       * @param {Doc} y The Yjs instance
       * @param {Item} item
       */
      _integrate(y, item) {
        super._integrate(y, item);
        this._prelimContent.forEach((value, key) => {
          this.set(key, value);
        });
        this._prelimContent = null;
      }
      /**
       * @return {YMap<MapType>}
       */
      _copy() {
        return new YMap();
      }
      /**
       * @return {YMap<MapType>}
       */
      clone() {
        const map2 = new YMap();
        this.forEach((value, key) => {
          map2.set(key, value instanceof AbstractType ? (
            /** @type {typeof value} */
            value.clone()
          ) : value);
        });
        return map2;
      }
      /**
       * Creates YMapEvent and calls observers.
       *
       * @param {Transaction} transaction
       * @param {Set<null|string>} parentSubs Keys changed on this type. `null` if list was modified.
       */
      _callObserver(transaction, parentSubs) {
        callTypeObservers(this, transaction, new YMapEvent(this, transaction, parentSubs));
      }
      /**
       * Transforms this Shared Type to a JSON object.
       *
       * @return {Object<string,any>}
       */
      toJSON() {
        const map2 = {};
        this._map.forEach((item, key) => {
          if (!item.deleted) {
            const v = item.content.getContent()[item.length - 1];
            map2[key] = v instanceof AbstractType ? v.toJSON() : v;
          }
        });
        return map2;
      }
      /**
       * Returns the size of the YMap (count of key/value pairs)
       *
       * @return {number}
       */
      get size() {
        return [...createMapIterator(this._map)].length;
      }
      /**
       * Returns the keys for each element in the YMap Type.
       *
       * @return {IterableIterator<string>}
       */
      keys() {
        return iteratorMap(
          createMapIterator(this._map),
          /** @param {any} v */
          (v) => v[0]
        );
      }
      /**
       * Returns the values for each element in the YMap Type.
       *
       * @return {IterableIterator<any>}
       */
      values() {
        return iteratorMap(
          createMapIterator(this._map),
          /** @param {any} v */
          (v) => v[1].content.getContent()[v[1].length - 1]
        );
      }
      /**
       * Returns an Iterator of [key, value] pairs
       *
       * @return {IterableIterator<any>}
       */
      entries() {
        return iteratorMap(
          createMapIterator(this._map),
          /** @param {any} v */
          (v) => [v[0], v[1].content.getContent()[v[1].length - 1]]
        );
      }
      /**
       * Executes a provided function on once on every key-value pair.
       *
       * @param {function(MapType,string,YMap<MapType>):void} f A function to execute on every element of this YArray.
       */
      forEach(f) {
        this._map.forEach((item, key) => {
          if (!item.deleted) {
            f(item.content.getContent()[item.length - 1], key, this);
          }
        });
      }
      /**
       * Returns an Iterator of [key, value] pairs
       *
       * @return {IterableIterator<any>}
       */
      [Symbol.iterator]() {
        return this.entries();
      }
      /**
       * Remove a specified element from this YMap.
       *
       * @param {string} key The key of the element to remove.
       */
      delete(key) {
        if (this.doc !== null) {
          transact(this.doc, (transaction) => {
            typeMapDelete(transaction, this, key);
          });
        } else {
          this._prelimContent.delete(key);
        }
      }
      /**
       * Adds or updates an element with a specified key and value.
       * @template {MapType} VAL
       *
       * @param {string} key The key of the element to add to this YMap
       * @param {VAL} value The value of the element to add
       * @return {VAL}
       */
      set(key, value) {
        if (this.doc !== null) {
          transact(this.doc, (transaction) => {
            typeMapSet(
              transaction,
              this,
              key,
              /** @type {any} */
              value
            );
          });
        } else {
          this._prelimContent.set(key, value);
        }
        return value;
      }
      /**
       * Returns a specified element from this YMap.
       *
       * @param {string} key
       * @return {MapType|undefined}
       */
      get(key) {
        return (
          /** @type {any} */
          typeMapGet(this, key)
        );
      }
      /**
       * Returns a boolean indicating whether the specified key exists or not.
       *
       * @param {string} key The key to test.
       * @return {boolean}
       */
      has(key) {
        return typeMapHas(this, key);
      }
      /**
       * Removes all elements from this YMap.
       */
      clear() {
        if (this.doc !== null) {
          transact(this.doc, (transaction) => {
            this.forEach(function(_value, key, map2) {
              typeMapDelete(transaction, map2, key);
            });
          });
        } else {
          this._prelimContent.clear();
        }
      }
      /**
       * @param {UpdateEncoderV1 | UpdateEncoderV2} encoder
       */
      _write(encoder) {
        encoder.writeTypeRef(YMapRefID);
      }
    };
    equalAttrs = (a, b) => a === b || typeof a === "object" && typeof b === "object" && a && b && equalFlat(a, b);
    ItemTextListPosition = class {
      /**
       * @param {Item|null} left
       * @param {Item|null} right
       * @param {number} index
       * @param {Map<string,any>} currentAttributes
       */
      constructor(left, right, index, currentAttributes) {
        this.left = left;
        this.right = right;
        this.index = index;
        this.currentAttributes = currentAttributes;
      }
      /**
       * Only call this if you know that this.right is defined
       */
      forward() {
        if (this.right === null) {
          unexpectedCase();
        }
        switch (this.right.content.constructor) {
          case ContentFormat:
            if (!this.right.deleted) {
              updateCurrentAttributes(
                this.currentAttributes,
                /** @type {ContentFormat} */
                this.right.content
              );
            }
            break;
          default:
            if (!this.right.deleted) {
              this.index += this.right.length;
            }
            break;
        }
        this.left = this.right;
        this.right = this.right.right;
      }
    };
    findNextPosition = (transaction, pos, count) => {
      while (pos.right !== null && count > 0) {
        switch (pos.right.content.constructor) {
          case ContentFormat:
            if (!pos.right.deleted) {
              updateCurrentAttributes(
                pos.currentAttributes,
                /** @type {ContentFormat} */
                pos.right.content
              );
            }
            break;
          default:
            if (!pos.right.deleted) {
              if (count < pos.right.length) {
                getItemCleanStart(transaction, createID(pos.right.id.client, pos.right.id.clock + count));
              }
              pos.index += pos.right.length;
              count -= pos.right.length;
            }
            break;
        }
        pos.left = pos.right;
        pos.right = pos.right.right;
      }
      return pos;
    };
    findPosition = (transaction, parent, index) => {
      const currentAttributes = /* @__PURE__ */ new Map();
      const marker = findMarker(parent, index);
      if (marker) {
        const pos = new ItemTextListPosition(marker.p.left, marker.p, marker.index, currentAttributes);
        return findNextPosition(transaction, pos, index - marker.index);
      } else {
        const pos = new ItemTextListPosition(null, parent._start, 0, currentAttributes);
        return findNextPosition(transaction, pos, index);
      }
    };
    insertNegatedAttributes = (transaction, parent, currPos, negatedAttributes) => {
      while (currPos.right !== null && (currPos.right.deleted === true || currPos.right.content.constructor === ContentFormat && equalAttrs(
        negatedAttributes.get(
          /** @type {ContentFormat} */
          currPos.right.content.key
        ),
        /** @type {ContentFormat} */
        currPos.right.content.value
      ))) {
        if (!currPos.right.deleted) {
          negatedAttributes.delete(
            /** @type {ContentFormat} */
            currPos.right.content.key
          );
        }
        currPos.forward();
      }
      const doc2 = transaction.doc;
      const ownClientId = doc2.clientID;
      negatedAttributes.forEach((val, key) => {
        const left = currPos.left;
        const right = currPos.right;
        const nextFormat = new Item(createID(ownClientId, getState(doc2.store, ownClientId)), left, left && left.lastId, right, right && right.id, parent, null, new ContentFormat(key, val));
        nextFormat.integrate(transaction, 0);
        currPos.right = nextFormat;
        currPos.forward();
      });
    };
    updateCurrentAttributes = (currentAttributes, format) => {
      const { key, value } = format;
      if (value === null) {
        currentAttributes.delete(key);
      } else {
        currentAttributes.set(key, value);
      }
    };
    minimizeAttributeChanges = (currPos, attributes) => {
      while (true) {
        if (currPos.right === null) {
          break;
        } else if (currPos.right.deleted || currPos.right.content.constructor === ContentFormat && equalAttrs(
          attributes[
            /** @type {ContentFormat} */
            currPos.right.content.key
          ] || null,
          /** @type {ContentFormat} */
          currPos.right.content.value
        ))
          ;
        else {
          break;
        }
        currPos.forward();
      }
    };
    insertAttributes = (transaction, parent, currPos, attributes) => {
      const doc2 = transaction.doc;
      const ownClientId = doc2.clientID;
      const negatedAttributes = /* @__PURE__ */ new Map();
      for (const key in attributes) {
        const val = attributes[key];
        const currentVal = currPos.currentAttributes.get(key) || null;
        if (!equalAttrs(currentVal, val)) {
          negatedAttributes.set(key, currentVal);
          const { left, right } = currPos;
          currPos.right = new Item(createID(ownClientId, getState(doc2.store, ownClientId)), left, left && left.lastId, right, right && right.id, parent, null, new ContentFormat(key, val));
          currPos.right.integrate(transaction, 0);
          currPos.forward();
        }
      }
      return negatedAttributes;
    };
    insertText = (transaction, parent, currPos, text2, attributes) => {
      currPos.currentAttributes.forEach((_val, key) => {
        if (attributes[key] === void 0) {
          attributes[key] = null;
        }
      });
      const doc2 = transaction.doc;
      const ownClientId = doc2.clientID;
      minimizeAttributeChanges(currPos, attributes);
      const negatedAttributes = insertAttributes(transaction, parent, currPos, attributes);
      const content = text2.constructor === String ? new ContentString(
        /** @type {string} */
        text2
      ) : text2 instanceof AbstractType ? new ContentType(text2) : new ContentEmbed(text2);
      let { left, right, index } = currPos;
      if (parent._searchMarker) {
        updateMarkerChanges(parent._searchMarker, currPos.index, content.getLength());
      }
      right = new Item(createID(ownClientId, getState(doc2.store, ownClientId)), left, left && left.lastId, right, right && right.id, parent, null, content);
      right.integrate(transaction, 0);
      currPos.right = right;
      currPos.index = index;
      currPos.forward();
      insertNegatedAttributes(transaction, parent, currPos, negatedAttributes);
    };
    formatText = (transaction, parent, currPos, length3, attributes) => {
      const doc2 = transaction.doc;
      const ownClientId = doc2.clientID;
      minimizeAttributeChanges(currPos, attributes);
      const negatedAttributes = insertAttributes(transaction, parent, currPos, attributes);
      iterationLoop:
        while (currPos.right !== null && (length3 > 0 || negatedAttributes.size > 0 && (currPos.right.deleted || currPos.right.content.constructor === ContentFormat))) {
          if (!currPos.right.deleted) {
            switch (currPos.right.content.constructor) {
              case ContentFormat: {
                const { key, value } = (
                  /** @type {ContentFormat} */
                  currPos.right.content
                );
                const attr = attributes[key];
                if (attr !== void 0) {
                  if (equalAttrs(attr, value)) {
                    negatedAttributes.delete(key);
                  } else {
                    if (length3 === 0) {
                      break iterationLoop;
                    }
                    negatedAttributes.set(key, value);
                  }
                  currPos.right.delete(transaction);
                } else {
                  currPos.currentAttributes.set(key, value);
                }
                break;
              }
              default:
                if (length3 < currPos.right.length) {
                  getItemCleanStart(transaction, createID(currPos.right.id.client, currPos.right.id.clock + length3));
                }
                length3 -= currPos.right.length;
                break;
            }
          }
          currPos.forward();
        }
      if (length3 > 0) {
        let newlines = "";
        for (; length3 > 0; length3--) {
          newlines += "\n";
        }
        currPos.right = new Item(createID(ownClientId, getState(doc2.store, ownClientId)), currPos.left, currPos.left && currPos.left.lastId, currPos.right, currPos.right && currPos.right.id, parent, null, new ContentString(newlines));
        currPos.right.integrate(transaction, 0);
        currPos.forward();
      }
      insertNegatedAttributes(transaction, parent, currPos, negatedAttributes);
    };
    cleanupFormattingGap = (transaction, start, curr, startAttributes, currAttributes) => {
      let end = start;
      const endFormats = create2();
      while (end && (!end.countable || end.deleted)) {
        if (!end.deleted && end.content.constructor === ContentFormat) {
          const cf = (
            /** @type {ContentFormat} */
            end.content
          );
          endFormats.set(cf.key, cf);
        }
        end = end.right;
      }
      let cleanups = 0;
      let reachedCurr = false;
      while (start !== end) {
        if (curr === start) {
          reachedCurr = true;
        }
        if (!start.deleted) {
          const content = start.content;
          switch (content.constructor) {
            case ContentFormat: {
              const { key, value } = (
                /** @type {ContentFormat} */
                content
              );
              const startAttrValue = startAttributes.get(key) || null;
              if (endFormats.get(key) !== content || startAttrValue === value) {
                start.delete(transaction);
                cleanups++;
                if (!reachedCurr && (currAttributes.get(key) || null) === value && startAttrValue !== value) {
                  if (startAttrValue === null) {
                    currAttributes.delete(key);
                  } else {
                    currAttributes.set(key, startAttrValue);
                  }
                }
              }
              if (!reachedCurr && !start.deleted) {
                updateCurrentAttributes(
                  currAttributes,
                  /** @type {ContentFormat} */
                  content
                );
              }
              break;
            }
          }
        }
        start = /** @type {Item} */
        start.right;
      }
      return cleanups;
    };
    cleanupContextlessFormattingGap = (transaction, item) => {
      while (item && item.right && (item.right.deleted || !item.right.countable)) {
        item = item.right;
      }
      const attrs = /* @__PURE__ */ new Set();
      while (item && (item.deleted || !item.countable)) {
        if (!item.deleted && item.content.constructor === ContentFormat) {
          const key = (
            /** @type {ContentFormat} */
            item.content.key
          );
          if (attrs.has(key)) {
            item.delete(transaction);
          } else {
            attrs.add(key);
          }
        }
        item = item.left;
      }
    };
    cleanupYTextFormatting = (type) => {
      let res = 0;
      transact(
        /** @type {Doc} */
        type.doc,
        (transaction) => {
          let start = (
            /** @type {Item} */
            type._start
          );
          let end = type._start;
          let startAttributes = create2();
          const currentAttributes = copy(startAttributes);
          while (end) {
            if (end.deleted === false) {
              switch (end.content.constructor) {
                case ContentFormat:
                  updateCurrentAttributes(
                    currentAttributes,
                    /** @type {ContentFormat} */
                    end.content
                  );
                  break;
                default:
                  res += cleanupFormattingGap(transaction, start, end, startAttributes, currentAttributes);
                  startAttributes = copy(currentAttributes);
                  start = end;
                  break;
              }
            }
            end = end.right;
          }
        }
      );
      return res;
    };
    cleanupYTextAfterTransaction = (transaction) => {
      const needFullCleanup = /* @__PURE__ */ new Set();
      const doc2 = transaction.doc;
      for (const [client, afterClock] of transaction.afterState.entries()) {
        const clock = transaction.beforeState.get(client) || 0;
        if (afterClock === clock) {
          continue;
        }
        iterateStructs(
          transaction,
          /** @type {Array<Item|GC>} */
          doc2.store.clients.get(client),
          clock,
          afterClock,
          (item) => {
            if (!item.deleted && /** @type {Item} */
            item.content.constructor === ContentFormat && item.constructor !== GC) {
              needFullCleanup.add(
                /** @type {any} */
                item.parent
              );
            }
          }
        );
      }
      transact(doc2, (t) => {
        iterateDeletedStructs(transaction, transaction.deleteSet, (item) => {
          if (item instanceof GC || !/** @type {YText} */
          item.parent._hasFormatting || needFullCleanup.has(
            /** @type {YText} */
            item.parent
          )) {
            return;
          }
          const parent = (
            /** @type {YText} */
            item.parent
          );
          if (item.content.constructor === ContentFormat) {
            needFullCleanup.add(parent);
          } else {
            cleanupContextlessFormattingGap(t, item);
          }
        });
        for (const yText of needFullCleanup) {
          cleanupYTextFormatting(yText);
        }
      });
    };
    deleteText = (transaction, currPos, length3) => {
      const startLength = length3;
      const startAttrs = copy(currPos.currentAttributes);
      const start = currPos.right;
      while (length3 > 0 && currPos.right !== null) {
        if (currPos.right.deleted === false) {
          switch (currPos.right.content.constructor) {
            case ContentType:
            case ContentEmbed:
            case ContentString:
              if (length3 < currPos.right.length) {
                getItemCleanStart(transaction, createID(currPos.right.id.client, currPos.right.id.clock + length3));
              }
              length3 -= currPos.right.length;
              currPos.right.delete(transaction);
              break;
          }
        }
        currPos.forward();
      }
      if (start) {
        cleanupFormattingGap(transaction, start, currPos.right, startAttrs, currPos.currentAttributes);
      }
      const parent = (
        /** @type {AbstractType<any>} */
        /** @type {Item} */
        (currPos.left || currPos.right).parent
      );
      if (parent._searchMarker) {
        updateMarkerChanges(parent._searchMarker, currPos.index, -startLength + length3);
      }
      return currPos;
    };
    YTextEvent = class extends YEvent {
      /**
       * @param {YText} ytext
       * @param {Transaction} transaction
       * @param {Set<any>} subs The keys that changed
       */
      constructor(ytext, transaction, subs) {
        super(ytext, transaction);
        this.childListChanged = false;
        this.keysChanged = /* @__PURE__ */ new Set();
        subs.forEach((sub) => {
          if (sub === null) {
            this.childListChanged = true;
          } else {
            this.keysChanged.add(sub);
          }
        });
      }
      /**
       * @type {{added:Set<Item>,deleted:Set<Item>,keys:Map<string,{action:'add'|'update'|'delete',oldValue:any}>,delta:Array<{insert?:Array<any>|string, delete?:number, retain?:number}>}}
       */
      get changes() {
        if (this._changes === null) {
          const changes = {
            keys: this.keys,
            delta: this.delta,
            added: /* @__PURE__ */ new Set(),
            deleted: /* @__PURE__ */ new Set()
          };
          this._changes = changes;
        }
        return (
          /** @type {any} */
          this._changes
        );
      }
      /**
       * Compute the changes in the delta format.
       * A {@link https://quilljs.com/docs/delta/|Quill Delta}) that represents the changes on the document.
       *
       * @type {Array<{insert?:string|object|AbstractType<any>, delete?:number, retain?:number, attributes?: Object<string,any>}>}
       *
       * @public
       */
      get delta() {
        if (this._delta === null) {
          const y = (
            /** @type {Doc} */
            this.target.doc
          );
          const delta = [];
          transact(y, (transaction) => {
            const currentAttributes = /* @__PURE__ */ new Map();
            const oldAttributes = /* @__PURE__ */ new Map();
            let item = this.target._start;
            let action = null;
            const attributes = {};
            let insert = "";
            let retain = 0;
            let deleteLen = 0;
            const addOp = () => {
              if (action !== null) {
                let op = null;
                switch (action) {
                  case "delete":
                    if (deleteLen > 0) {
                      op = { delete: deleteLen };
                    }
                    deleteLen = 0;
                    break;
                  case "insert":
                    if (typeof insert === "object" || insert.length > 0) {
                      op = { insert };
                      if (currentAttributes.size > 0) {
                        op.attributes = {};
                        currentAttributes.forEach((value, key) => {
                          if (value !== null) {
                            op.attributes[key] = value;
                          }
                        });
                      }
                    }
                    insert = "";
                    break;
                  case "retain":
                    if (retain > 0) {
                      op = { retain };
                      if (!isEmpty(attributes)) {
                        op.attributes = assign({}, attributes);
                      }
                    }
                    retain = 0;
                    break;
                }
                if (op)
                  delta.push(op);
                action = null;
              }
            };
            while (item !== null) {
              switch (item.content.constructor) {
                case ContentType:
                case ContentEmbed:
                  if (this.adds(item)) {
                    if (!this.deletes(item)) {
                      addOp();
                      action = "insert";
                      insert = item.content.getContent()[0];
                      addOp();
                    }
                  } else if (this.deletes(item)) {
                    if (action !== "delete") {
                      addOp();
                      action = "delete";
                    }
                    deleteLen += 1;
                  } else if (!item.deleted) {
                    if (action !== "retain") {
                      addOp();
                      action = "retain";
                    }
                    retain += 1;
                  }
                  break;
                case ContentString:
                  if (this.adds(item)) {
                    if (!this.deletes(item)) {
                      if (action !== "insert") {
                        addOp();
                        action = "insert";
                      }
                      insert += /** @type {ContentString} */
                      item.content.str;
                    }
                  } else if (this.deletes(item)) {
                    if (action !== "delete") {
                      addOp();
                      action = "delete";
                    }
                    deleteLen += item.length;
                  } else if (!item.deleted) {
                    if (action !== "retain") {
                      addOp();
                      action = "retain";
                    }
                    retain += item.length;
                  }
                  break;
                case ContentFormat: {
                  const { key, value } = (
                    /** @type {ContentFormat} */
                    item.content
                  );
                  if (this.adds(item)) {
                    if (!this.deletes(item)) {
                      const curVal = currentAttributes.get(key) || null;
                      if (!equalAttrs(curVal, value)) {
                        if (action === "retain") {
                          addOp();
                        }
                        if (equalAttrs(value, oldAttributes.get(key) || null)) {
                          delete attributes[key];
                        } else {
                          attributes[key] = value;
                        }
                      } else if (value !== null) {
                        item.delete(transaction);
                      }
                    }
                  } else if (this.deletes(item)) {
                    oldAttributes.set(key, value);
                    const curVal = currentAttributes.get(key) || null;
                    if (!equalAttrs(curVal, value)) {
                      if (action === "retain") {
                        addOp();
                      }
                      attributes[key] = curVal;
                    }
                  } else if (!item.deleted) {
                    oldAttributes.set(key, value);
                    const attr = attributes[key];
                    if (attr !== void 0) {
                      if (!equalAttrs(attr, value)) {
                        if (action === "retain") {
                          addOp();
                        }
                        if (value === null) {
                          delete attributes[key];
                        } else {
                          attributes[key] = value;
                        }
                      } else if (attr !== null) {
                        item.delete(transaction);
                      }
                    }
                  }
                  if (!item.deleted) {
                    if (action === "insert") {
                      addOp();
                    }
                    updateCurrentAttributes(
                      currentAttributes,
                      /** @type {ContentFormat} */
                      item.content
                    );
                  }
                  break;
                }
              }
              item = item.right;
            }
            addOp();
            while (delta.length > 0) {
              const lastOp = delta[delta.length - 1];
              if (lastOp.retain !== void 0 && lastOp.attributes === void 0) {
                delta.pop();
              } else {
                break;
              }
            }
          });
          this._delta = delta;
        }
        return (
          /** @type {any} */
          this._delta
        );
      }
    };
    YText = class extends AbstractType {
      /**
       * @param {String} [string] The initial value of the YText.
       */
      constructor(string) {
        super();
        this._pending = string !== void 0 ? [() => this.insert(0, string)] : [];
        this._searchMarker = [];
        this._hasFormatting = false;
      }
      /**
       * Number of characters of this text type.
       *
       * @type {number}
       */
      get length() {
        return this._length;
      }
      /**
       * @param {Doc} y
       * @param {Item} item
       */
      _integrate(y, item) {
        super._integrate(y, item);
        try {
          this._pending.forEach((f) => f());
        } catch (e) {
          console.error(e);
        }
        this._pending = null;
      }
      _copy() {
        return new YText();
      }
      /**
       * @return {YText}
       */
      clone() {
        const text2 = new YText();
        text2.applyDelta(this.toDelta());
        return text2;
      }
      /**
       * Creates YTextEvent and calls observers.
       *
       * @param {Transaction} transaction
       * @param {Set<null|string>} parentSubs Keys changed on this type. `null` if list was modified.
       */
      _callObserver(transaction, parentSubs) {
        super._callObserver(transaction, parentSubs);
        const event = new YTextEvent(this, transaction, parentSubs);
        callTypeObservers(this, transaction, event);
        if (!transaction.local && this._hasFormatting) {
          transaction._needFormattingCleanup = true;
        }
      }
      /**
       * Returns the unformatted string representation of this YText type.
       *
       * @public
       */
      toString() {
        let str = "";
        let n = this._start;
        while (n !== null) {
          if (!n.deleted && n.countable && n.content.constructor === ContentString) {
            str += /** @type {ContentString} */
            n.content.str;
          }
          n = n.right;
        }
        return str;
      }
      /**
       * Returns the unformatted string representation of this YText type.
       *
       * @return {string}
       * @public
       */
      toJSON() {
        return this.toString();
      }
      /**
       * Apply a {@link Delta} on this shared YText type.
       *
       * @param {any} delta The changes to apply on this element.
       * @param {object}  opts
       * @param {boolean} [opts.sanitize] Sanitize input delta. Removes ending newlines if set to true.
       *
       *
       * @public
       */
      applyDelta(delta, { sanitize = true } = {}) {
        if (this.doc !== null) {
          transact(this.doc, (transaction) => {
            const currPos = new ItemTextListPosition(null, this._start, 0, /* @__PURE__ */ new Map());
            for (let i = 0; i < delta.length; i++) {
              const op = delta[i];
              if (op.insert !== void 0) {
                const ins = !sanitize && typeof op.insert === "string" && i === delta.length - 1 && currPos.right === null && op.insert.slice(-1) === "\n" ? op.insert.slice(0, -1) : op.insert;
                if (typeof ins !== "string" || ins.length > 0) {
                  insertText(transaction, this, currPos, ins, op.attributes || {});
                }
              } else if (op.retain !== void 0) {
                formatText(transaction, this, currPos, op.retain, op.attributes || {});
              } else if (op.delete !== void 0) {
                deleteText(transaction, currPos, op.delete);
              }
            }
          });
        } else {
          this._pending.push(() => this.applyDelta(delta));
        }
      }
      /**
       * Returns the Delta representation of this YText type.
       *
       * @param {Snapshot} [snapshot]
       * @param {Snapshot} [prevSnapshot]
       * @param {function('removed' | 'added', ID):any} [computeYChange]
       * @return {any} The Delta representation of this type.
       *
       * @public
       */
      toDelta(snapshot, prevSnapshot, computeYChange) {
        const ops = [];
        const currentAttributes = /* @__PURE__ */ new Map();
        const doc2 = (
          /** @type {Doc} */
          this.doc
        );
        let str = "";
        let n = this._start;
        function packStr() {
          if (str.length > 0) {
            const attributes = {};
            let addAttributes = false;
            currentAttributes.forEach((value, key) => {
              addAttributes = true;
              attributes[key] = value;
            });
            const op = { insert: str };
            if (addAttributes) {
              op.attributes = attributes;
            }
            ops.push(op);
            str = "";
          }
        }
        const computeDelta = () => {
          while (n !== null) {
            if (isVisible(n, snapshot) || prevSnapshot !== void 0 && isVisible(n, prevSnapshot)) {
              switch (n.content.constructor) {
                case ContentString: {
                  const cur = currentAttributes.get("ychange");
                  if (snapshot !== void 0 && !isVisible(n, snapshot)) {
                    if (cur === void 0 || cur.user !== n.id.client || cur.type !== "removed") {
                      packStr();
                      currentAttributes.set("ychange", computeYChange ? computeYChange("removed", n.id) : { type: "removed" });
                    }
                  } else if (prevSnapshot !== void 0 && !isVisible(n, prevSnapshot)) {
                    if (cur === void 0 || cur.user !== n.id.client || cur.type !== "added") {
                      packStr();
                      currentAttributes.set("ychange", computeYChange ? computeYChange("added", n.id) : { type: "added" });
                    }
                  } else if (cur !== void 0) {
                    packStr();
                    currentAttributes.delete("ychange");
                  }
                  str += /** @type {ContentString} */
                  n.content.str;
                  break;
                }
                case ContentType:
                case ContentEmbed: {
                  packStr();
                  const op = {
                    insert: n.content.getContent()[0]
                  };
                  if (currentAttributes.size > 0) {
                    const attrs = (
                      /** @type {Object<string,any>} */
                      {}
                    );
                    op.attributes = attrs;
                    currentAttributes.forEach((value, key) => {
                      attrs[key] = value;
                    });
                  }
                  ops.push(op);
                  break;
                }
                case ContentFormat:
                  if (isVisible(n, snapshot)) {
                    packStr();
                    updateCurrentAttributes(
                      currentAttributes,
                      /** @type {ContentFormat} */
                      n.content
                    );
                  }
                  break;
              }
            }
            n = n.right;
          }
          packStr();
        };
        if (snapshot || prevSnapshot) {
          transact(doc2, (transaction) => {
            if (snapshot) {
              splitSnapshotAffectedStructs(transaction, snapshot);
            }
            if (prevSnapshot) {
              splitSnapshotAffectedStructs(transaction, prevSnapshot);
            }
            computeDelta();
          }, "cleanup");
        } else {
          computeDelta();
        }
        return ops;
      }
      /**
       * Insert text at a given index.
       *
       * @param {number} index The index at which to start inserting.
       * @param {String} text The text to insert at the specified position.
       * @param {TextAttributes} [attributes] Optionally define some formatting
       *                                    information to apply on the inserted
       *                                    Text.
       * @public
       */
      insert(index, text2, attributes) {
        if (text2.length <= 0) {
          return;
        }
        const y = this.doc;
        if (y !== null) {
          transact(y, (transaction) => {
            const pos = findPosition(transaction, this, index);
            if (!attributes) {
              attributes = {};
              pos.currentAttributes.forEach((v, k) => {
                attributes[k] = v;
              });
            }
            insertText(transaction, this, pos, text2, attributes);
          });
        } else {
          this._pending.push(() => this.insert(index, text2, attributes));
        }
      }
      /**
       * Inserts an embed at a index.
       *
       * @param {number} index The index to insert the embed at.
       * @param {Object | AbstractType<any>} embed The Object that represents the embed.
       * @param {TextAttributes} attributes Attribute information to apply on the
       *                                    embed
       *
       * @public
       */
      insertEmbed(index, embed, attributes = {}) {
        const y = this.doc;
        if (y !== null) {
          transact(y, (transaction) => {
            const pos = findPosition(transaction, this, index);
            insertText(transaction, this, pos, embed, attributes);
          });
        } else {
          this._pending.push(() => this.insertEmbed(index, embed, attributes));
        }
      }
      /**
       * Deletes text starting from an index.
       *
       * @param {number} index Index at which to start deleting.
       * @param {number} length The number of characters to remove. Defaults to 1.
       *
       * @public
       */
      delete(index, length3) {
        if (length3 === 0) {
          return;
        }
        const y = this.doc;
        if (y !== null) {
          transact(y, (transaction) => {
            deleteText(transaction, findPosition(transaction, this, index), length3);
          });
        } else {
          this._pending.push(() => this.delete(index, length3));
        }
      }
      /**
       * Assigns properties to a range of text.
       *
       * @param {number} index The position where to start formatting.
       * @param {number} length The amount of characters to assign properties to.
       * @param {TextAttributes} attributes Attribute information to apply on the
       *                                    text.
       *
       * @public
       */
      format(index, length3, attributes) {
        if (length3 === 0) {
          return;
        }
        const y = this.doc;
        if (y !== null) {
          transact(y, (transaction) => {
            const pos = findPosition(transaction, this, index);
            if (pos.right === null) {
              return;
            }
            formatText(transaction, this, pos, length3, attributes);
          });
        } else {
          this._pending.push(() => this.format(index, length3, attributes));
        }
      }
      /**
       * Removes an attribute.
       *
       * @note Xml-Text nodes don't have attributes. You can use this feature to assign properties to complete text-blocks.
       *
       * @param {String} attributeName The attribute name that is to be removed.
       *
       * @public
       */
      removeAttribute(attributeName) {
        if (this.doc !== null) {
          transact(this.doc, (transaction) => {
            typeMapDelete(transaction, this, attributeName);
          });
        } else {
          this._pending.push(() => this.removeAttribute(attributeName));
        }
      }
      /**
       * Sets or updates an attribute.
       *
       * @note Xml-Text nodes don't have attributes. You can use this feature to assign properties to complete text-blocks.
       *
       * @param {String} attributeName The attribute name that is to be set.
       * @param {any} attributeValue The attribute value that is to be set.
       *
       * @public
       */
      setAttribute(attributeName, attributeValue) {
        if (this.doc !== null) {
          transact(this.doc, (transaction) => {
            typeMapSet(transaction, this, attributeName, attributeValue);
          });
        } else {
          this._pending.push(() => this.setAttribute(attributeName, attributeValue));
        }
      }
      /**
       * Returns an attribute value that belongs to the attribute name.
       *
       * @note Xml-Text nodes don't have attributes. You can use this feature to assign properties to complete text-blocks.
       *
       * @param {String} attributeName The attribute name that identifies the
       *                               queried value.
       * @return {any} The queried attribute value.
       *
       * @public
       */
      getAttribute(attributeName) {
        return (
          /** @type {any} */
          typeMapGet(this, attributeName)
        );
      }
      /**
       * Returns all attribute name/value pairs in a JSON Object.
       *
       * @note Xml-Text nodes don't have attributes. You can use this feature to assign properties to complete text-blocks.
       *
       * @return {Object<string, any>} A JSON Object that describes the attributes.
       *
       * @public
       */
      getAttributes() {
        return typeMapGetAll(this);
      }
      /**
       * @param {UpdateEncoderV1 | UpdateEncoderV2} encoder
       */
      _write(encoder) {
        encoder.writeTypeRef(YTextRefID);
      }
    };
    YXmlTreeWalker = class {
      /**
       * @param {YXmlFragment | YXmlElement} root
       * @param {function(AbstractType<any>):boolean} [f]
       */
      constructor(root, f = () => true) {
        this._filter = f;
        this._root = root;
        this._currentNode = /** @type {Item} */
        root._start;
        this._firstCall = true;
      }
      [Symbol.iterator]() {
        return this;
      }
      /**
       * Get the next node.
       *
       * @return {IteratorResult<YXmlElement|YXmlText|YXmlHook>} The next node.
       *
       * @public
       */
      next() {
        let n = this._currentNode;
        let type = n && n.content && /** @type {any} */
        n.content.type;
        if (n !== null && (!this._firstCall || n.deleted || !this._filter(type))) {
          do {
            type = /** @type {any} */
            n.content.type;
            if (!n.deleted && (type.constructor === YXmlElement || type.constructor === YXmlFragment) && type._start !== null) {
              n = type._start;
            } else {
              while (n !== null) {
                if (n.right !== null) {
                  n = n.right;
                  break;
                } else if (n.parent === this._root) {
                  n = null;
                } else {
                  n = /** @type {AbstractType<any>} */
                  n.parent._item;
                }
              }
            }
          } while (n !== null && (n.deleted || !this._filter(
            /** @type {ContentType} */
            n.content.type
          )));
        }
        this._firstCall = false;
        if (n === null) {
          return { value: void 0, done: true };
        }
        this._currentNode = n;
        return { value: (
          /** @type {any} */
          n.content.type
        ), done: false };
      }
    };
    YXmlFragment = class extends AbstractType {
      constructor() {
        super();
        this._prelimContent = [];
      }
      /**
       * @type {YXmlElement|YXmlText|null}
       */
      get firstChild() {
        const first = this._first;
        return first ? first.content.getContent()[0] : null;
      }
      /**
       * Integrate this type into the Yjs instance.
       *
       * * Save this struct in the os
       * * This type is sent to other client
       * * Observer functions are fired
       *
       * @param {Doc} y The Yjs instance
       * @param {Item} item
       */
      _integrate(y, item) {
        super._integrate(y, item);
        this.insert(
          0,
          /** @type {Array<any>} */
          this._prelimContent
        );
        this._prelimContent = null;
      }
      _copy() {
        return new YXmlFragment();
      }
      /**
       * @return {YXmlFragment}
       */
      clone() {
        const el = new YXmlFragment();
        el.insert(0, this.toArray().map((item) => item instanceof AbstractType ? item.clone() : item));
        return el;
      }
      get length() {
        return this._prelimContent === null ? this._length : this._prelimContent.length;
      }
      /**
       * Create a subtree of childNodes.
       *
       * @example
       * const walker = elem.createTreeWalker(dom => dom.nodeName === 'div')
       * for (let node in walker) {
       *   // `node` is a div node
       *   nop(node)
       * }
       *
       * @param {function(AbstractType<any>):boolean} filter Function that is called on each child element and
       *                          returns a Boolean indicating whether the child
       *                          is to be included in the subtree.
       * @return {YXmlTreeWalker} A subtree and a position within it.
       *
       * @public
       */
      createTreeWalker(filter) {
        return new YXmlTreeWalker(this, filter);
      }
      /**
       * Returns the first YXmlElement that matches the query.
       * Similar to DOM's {@link querySelector}.
       *
       * Query support:
       *   - tagname
       * TODO:
       *   - id
       *   - attribute
       *
       * @param {CSS_Selector} query The query on the children.
       * @return {YXmlElement|YXmlText|YXmlHook|null} The first element that matches the query or null.
       *
       * @public
       */
      querySelector(query) {
        query = query.toUpperCase();
        const iterator = new YXmlTreeWalker(this, (element2) => element2.nodeName && element2.nodeName.toUpperCase() === query);
        const next = iterator.next();
        if (next.done) {
          return null;
        } else {
          return next.value;
        }
      }
      /**
       * Returns all YXmlElements that match the query.
       * Similar to Dom's {@link querySelectorAll}.
       *
       * @todo Does not yet support all queries. Currently only query by tagName.
       *
       * @param {CSS_Selector} query The query on the children
       * @return {Array<YXmlElement|YXmlText|YXmlHook|null>} The elements that match this query.
       *
       * @public
       */
      querySelectorAll(query) {
        query = query.toUpperCase();
        return from(new YXmlTreeWalker(this, (element2) => element2.nodeName && element2.nodeName.toUpperCase() === query));
      }
      /**
       * Creates YXmlEvent and calls observers.
       *
       * @param {Transaction} transaction
       * @param {Set<null|string>} parentSubs Keys changed on this type. `null` if list was modified.
       */
      _callObserver(transaction, parentSubs) {
        callTypeObservers(this, transaction, new YXmlEvent(this, parentSubs, transaction));
      }
      /**
       * Get the string representation of all the children of this YXmlFragment.
       *
       * @return {string} The string representation of all children.
       */
      toString() {
        return typeListMap(this, (xml) => xml.toString()).join("");
      }
      /**
       * @return {string}
       */
      toJSON() {
        return this.toString();
      }
      /**
       * Creates a Dom Element that mirrors this YXmlElement.
       *
       * @param {Document} [_document=document] The document object (you must define
       *                                        this when calling this method in
       *                                        nodejs)
       * @param {Object<string, any>} [hooks={}] Optional property to customize how hooks
       *                                             are presented in the DOM
       * @param {any} [binding] You should not set this property. This is
       *                               used if DomBinding wants to create a
       *                               association to the created DOM type.
       * @return {Node} The {@link https://developer.mozilla.org/en-US/docs/Web/API/Element|Dom Element}
       *
       * @public
       */
      toDOM(_document = document, hooks = {}, binding) {
        const fragment = _document.createDocumentFragment();
        if (binding !== void 0) {
          binding._createAssociation(fragment, this);
        }
        typeListForEach(this, (xmlType) => {
          fragment.insertBefore(xmlType.toDOM(_document, hooks, binding), null);
        });
        return fragment;
      }
      /**
       * Inserts new content at an index.
       *
       * @example
       *  // Insert character 'a' at position 0
       *  xml.insert(0, [new Y.XmlText('text')])
       *
       * @param {number} index The index to insert content at
       * @param {Array<YXmlElement|YXmlText>} content The array of content
       */
      insert(index, content) {
        if (this.doc !== null) {
          transact(this.doc, (transaction) => {
            typeListInsertGenerics(transaction, this, index, content);
          });
        } else {
          this._prelimContent.splice(index, 0, ...content);
        }
      }
      /**
       * Inserts new content at an index.
       *
       * @example
       *  // Insert character 'a' at position 0
       *  xml.insert(0, [new Y.XmlText('text')])
       *
       * @param {null|Item|YXmlElement|YXmlText} ref The index to insert content at
       * @param {Array<YXmlElement|YXmlText>} content The array of content
       */
      insertAfter(ref, content) {
        if (this.doc !== null) {
          transact(this.doc, (transaction) => {
            const refItem = ref && ref instanceof AbstractType ? ref._item : ref;
            typeListInsertGenericsAfter(transaction, this, refItem, content);
          });
        } else {
          const pc = (
            /** @type {Array<any>} */
            this._prelimContent
          );
          const index = ref === null ? 0 : pc.findIndex((el) => el === ref) + 1;
          if (index === 0 && ref !== null) {
            throw create3("Reference item not found");
          }
          pc.splice(index, 0, ...content);
        }
      }
      /**
       * Deletes elements starting from an index.
       *
       * @param {number} index Index at which to start deleting elements
       * @param {number} [length=1] The number of elements to remove. Defaults to 1.
       */
      delete(index, length3 = 1) {
        if (this.doc !== null) {
          transact(this.doc, (transaction) => {
            typeListDelete(transaction, this, index, length3);
          });
        } else {
          this._prelimContent.splice(index, length3);
        }
      }
      /**
       * Transforms this YArray to a JavaScript Array.
       *
       * @return {Array<YXmlElement|YXmlText|YXmlHook>}
       */
      toArray() {
        return typeListToArray(this);
      }
      /**
       * Appends content to this YArray.
       *
       * @param {Array<YXmlElement|YXmlText>} content Array of content to append.
       */
      push(content) {
        this.insert(this.length, content);
      }
      /**
       * Preppends content to this YArray.
       *
       * @param {Array<YXmlElement|YXmlText>} content Array of content to preppend.
       */
      unshift(content) {
        this.insert(0, content);
      }
      /**
       * Returns the i-th element from a YArray.
       *
       * @param {number} index The index of the element to return from the YArray
       * @return {YXmlElement|YXmlText}
       */
      get(index) {
        return typeListGet(this, index);
      }
      /**
       * Transforms this YArray to a JavaScript Array.
       *
       * @param {number} [start]
       * @param {number} [end]
       * @return {Array<YXmlElement|YXmlText>}
       */
      slice(start = 0, end = this.length) {
        return typeListSlice(this, start, end);
      }
      /**
       * Executes a provided function on once on overy child element.
       *
       * @param {function(YXmlElement|YXmlText,number, typeof self):void} f A function to execute on every element of this YArray.
       */
      forEach(f) {
        typeListForEach(this, f);
      }
      /**
       * Transform the properties of this type to binary and write it to an
       * BinaryEncoder.
       *
       * This is called when this Item is sent to a remote peer.
       *
       * @param {UpdateEncoderV1 | UpdateEncoderV2} encoder The encoder to write data to.
       */
      _write(encoder) {
        encoder.writeTypeRef(YXmlFragmentRefID);
      }
    };
    YXmlElement = class extends YXmlFragment {
      constructor(nodeName = "UNDEFINED") {
        super();
        this.nodeName = nodeName;
        this._prelimAttrs = /* @__PURE__ */ new Map();
      }
      /**
       * @type {YXmlElement|YXmlText|null}
       */
      get nextSibling() {
        const n = this._item ? this._item.next : null;
        return n ? (
          /** @type {YXmlElement|YXmlText} */
          /** @type {ContentType} */
          n.content.type
        ) : null;
      }
      /**
       * @type {YXmlElement|YXmlText|null}
       */
      get prevSibling() {
        const n = this._item ? this._item.prev : null;
        return n ? (
          /** @type {YXmlElement|YXmlText} */
          /** @type {ContentType} */
          n.content.type
        ) : null;
      }
      /**
       * Integrate this type into the Yjs instance.
       *
       * * Save this struct in the os
       * * This type is sent to other client
       * * Observer functions are fired
       *
       * @param {Doc} y The Yjs instance
       * @param {Item} item
       */
      _integrate(y, item) {
        super._integrate(y, item);
        /** @type {Map<string, any>} */
        this._prelimAttrs.forEach((value, key) => {
          this.setAttribute(key, value);
        });
        this._prelimAttrs = null;
      }
      /**
       * Creates an Item with the same effect as this Item (without position effect)
       *
       * @return {YXmlElement}
       */
      _copy() {
        return new YXmlElement(this.nodeName);
      }
      /**
       * @return {YXmlElement<KV>}
       */
      clone() {
        const el = new YXmlElement(this.nodeName);
        const attrs = this.getAttributes();
        forEach(attrs, (value, key) => {
          if (typeof value === "string") {
            el.setAttribute(key, value);
          }
        });
        el.insert(0, this.toArray().map((item) => item instanceof AbstractType ? item.clone() : item));
        return el;
      }
      /**
       * Returns the XML serialization of this YXmlElement.
       * The attributes are ordered by attribute-name, so you can easily use this
       * method to compare YXmlElements
       *
       * @return {string} The string representation of this type.
       *
       * @public
       */
      toString() {
        const attrs = this.getAttributes();
        const stringBuilder = [];
        const keys2 = [];
        for (const key in attrs) {
          keys2.push(key);
        }
        keys2.sort();
        const keysLen = keys2.length;
        for (let i = 0; i < keysLen; i++) {
          const key = keys2[i];
          stringBuilder.push(key + '="' + attrs[key] + '"');
        }
        const nodeName = this.nodeName.toLocaleLowerCase();
        const attrsString = stringBuilder.length > 0 ? " " + stringBuilder.join(" ") : "";
        return `<${nodeName}${attrsString}>${super.toString()}</${nodeName}>`;
      }
      /**
       * Removes an attribute from this YXmlElement.
       *
       * @param {string} attributeName The attribute name that is to be removed.
       *
       * @public
       */
      removeAttribute(attributeName) {
        if (this.doc !== null) {
          transact(this.doc, (transaction) => {
            typeMapDelete(transaction, this, attributeName);
          });
        } else {
          this._prelimAttrs.delete(attributeName);
        }
      }
      /**
       * Sets or updates an attribute.
       *
       * @template {keyof KV & string} KEY
       *
       * @param {KEY} attributeName The attribute name that is to be set.
       * @param {KV[KEY]} attributeValue The attribute value that is to be set.
       *
       * @public
       */
      setAttribute(attributeName, attributeValue) {
        if (this.doc !== null) {
          transact(this.doc, (transaction) => {
            typeMapSet(transaction, this, attributeName, attributeValue);
          });
        } else {
          this._prelimAttrs.set(attributeName, attributeValue);
        }
      }
      /**
       * Returns an attribute value that belongs to the attribute name.
       *
       * @template {keyof KV & string} KEY
       *
       * @param {KEY} attributeName The attribute name that identifies the
       *                               queried value.
       * @return {KV[KEY]|undefined} The queried attribute value.
       *
       * @public
       */
      getAttribute(attributeName) {
        return (
          /** @type {any} */
          typeMapGet(this, attributeName)
        );
      }
      /**
       * Returns whether an attribute exists
       *
       * @param {string} attributeName The attribute name to check for existence.
       * @return {boolean} whether the attribute exists.
       *
       * @public
       */
      hasAttribute(attributeName) {
        return (
          /** @type {any} */
          typeMapHas(this, attributeName)
        );
      }
      /**
       * Returns all attribute name/value pairs in a JSON Object.
       *
       * @return {{ [Key in Extract<keyof KV,string>]?: KV[Key]}} A JSON Object that describes the attributes.
       *
       * @public
       */
      getAttributes() {
        return (
          /** @type {any} */
          typeMapGetAll(this)
        );
      }
      /**
       * Creates a Dom Element that mirrors this YXmlElement.
       *
       * @param {Document} [_document=document] The document object (you must define
       *                                        this when calling this method in
       *                                        nodejs)
       * @param {Object<string, any>} [hooks={}] Optional property to customize how hooks
       *                                             are presented in the DOM
       * @param {any} [binding] You should not set this property. This is
       *                               used if DomBinding wants to create a
       *                               association to the created DOM type.
       * @return {Node} The {@link https://developer.mozilla.org/en-US/docs/Web/API/Element|Dom Element}
       *
       * @public
       */
      toDOM(_document = document, hooks = {}, binding) {
        const dom = _document.createElement(this.nodeName);
        const attrs = this.getAttributes();
        for (const key in attrs) {
          const value = attrs[key];
          if (typeof value === "string") {
            dom.setAttribute(key, value);
          }
        }
        typeListForEach(this, (yxml) => {
          dom.appendChild(yxml.toDOM(_document, hooks, binding));
        });
        if (binding !== void 0) {
          binding._createAssociation(dom, this);
        }
        return dom;
      }
      /**
       * Transform the properties of this type to binary and write it to an
       * BinaryEncoder.
       *
       * This is called when this Item is sent to a remote peer.
       *
       * @param {UpdateEncoderV1 | UpdateEncoderV2} encoder The encoder to write data to.
       */
      _write(encoder) {
        encoder.writeTypeRef(YXmlElementRefID);
        encoder.writeKey(this.nodeName);
      }
    };
    YXmlEvent = class extends YEvent {
      /**
       * @param {YXmlElement|YXmlText|YXmlFragment} target The target on which the event is created.
       * @param {Set<string|null>} subs The set of changed attributes. `null` is included if the
       *                   child list changed.
       * @param {Transaction} transaction The transaction instance with wich the
       *                                  change was created.
       */
      constructor(target, subs, transaction) {
        super(target, transaction);
        this.childListChanged = false;
        this.attributesChanged = /* @__PURE__ */ new Set();
        subs.forEach((sub) => {
          if (sub === null) {
            this.childListChanged = true;
          } else {
            this.attributesChanged.add(sub);
          }
        });
      }
    };
    AbstractStruct = class {
      /**
       * @param {ID} id
       * @param {number} length
       */
      constructor(id2, length3) {
        this.id = id2;
        this.length = length3;
      }
      /**
       * @type {boolean}
       */
      get deleted() {
        throw methodUnimplemented();
      }
      /**
       * Merge this struct with the item to the right.
       * This method is already assuming that `this.id.clock + this.length === this.id.clock`.
       * Also this method does *not* remove right from StructStore!
       * @param {AbstractStruct} right
       * @return {boolean} wether this merged with right
       */
      mergeWith(right) {
        return false;
      }
      /**
       * @param {UpdateEncoderV1 | UpdateEncoderV2} encoder The encoder to write data to.
       * @param {number} offset
       * @param {number} encodingRef
       */
      write(encoder, offset, encodingRef) {
        throw methodUnimplemented();
      }
      /**
       * @param {Transaction} transaction
       * @param {number} offset
       */
      integrate(transaction, offset) {
        throw methodUnimplemented();
      }
    };
    structGCRefNumber = 0;
    GC = class extends AbstractStruct {
      get deleted() {
        return true;
      }
      delete() {
      }
      /**
       * @param {GC} right
       * @return {boolean}
       */
      mergeWith(right) {
        if (this.constructor !== right.constructor) {
          return false;
        }
        this.length += right.length;
        return true;
      }
      /**
       * @param {Transaction} transaction
       * @param {number} offset
       */
      integrate(transaction, offset) {
        if (offset > 0) {
          this.id.clock += offset;
          this.length -= offset;
        }
        addStruct(transaction.doc.store, this);
      }
      /**
       * @param {UpdateEncoderV1 | UpdateEncoderV2} encoder
       * @param {number} offset
       */
      write(encoder, offset) {
        encoder.writeInfo(structGCRefNumber);
        encoder.writeLen(this.length - offset);
      }
      /**
       * @param {Transaction} transaction
       * @param {StructStore} store
       * @return {null | number}
       */
      getMissing(transaction, store) {
        return null;
      }
    };
    ContentBinary = class {
      /**
       * @param {Uint8Array} content
       */
      constructor(content) {
        this.content = content;
      }
      /**
       * @return {number}
       */
      getLength() {
        return 1;
      }
      /**
       * @return {Array<any>}
       */
      getContent() {
        return [this.content];
      }
      /**
       * @return {boolean}
       */
      isCountable() {
        return true;
      }
      /**
       * @return {ContentBinary}
       */
      copy() {
        return new ContentBinary(this.content);
      }
      /**
       * @param {number} offset
       * @return {ContentBinary}
       */
      splice(offset) {
        throw methodUnimplemented();
      }
      /**
       * @param {ContentBinary} right
       * @return {boolean}
       */
      mergeWith(right) {
        return false;
      }
      /**
       * @param {Transaction} transaction
       * @param {Item} item
       */
      integrate(transaction, item) {
      }
      /**
       * @param {Transaction} transaction
       */
      delete(transaction) {
      }
      /**
       * @param {StructStore} store
       */
      gc(store) {
      }
      /**
       * @param {UpdateEncoderV1 | UpdateEncoderV2} encoder
       * @param {number} offset
       */
      write(encoder, offset) {
        encoder.writeBuf(this.content);
      }
      /**
       * @return {number}
       */
      getRef() {
        return 3;
      }
    };
    ContentDeleted = class {
      /**
       * @param {number} len
       */
      constructor(len) {
        this.len = len;
      }
      /**
       * @return {number}
       */
      getLength() {
        return this.len;
      }
      /**
       * @return {Array<any>}
       */
      getContent() {
        return [];
      }
      /**
       * @return {boolean}
       */
      isCountable() {
        return false;
      }
      /**
       * @return {ContentDeleted}
       */
      copy() {
        return new ContentDeleted(this.len);
      }
      /**
       * @param {number} offset
       * @return {ContentDeleted}
       */
      splice(offset) {
        const right = new ContentDeleted(this.len - offset);
        this.len = offset;
        return right;
      }
      /**
       * @param {ContentDeleted} right
       * @return {boolean}
       */
      mergeWith(right) {
        this.len += right.len;
        return true;
      }
      /**
       * @param {Transaction} transaction
       * @param {Item} item
       */
      integrate(transaction, item) {
        addToDeleteSet(transaction.deleteSet, item.id.client, item.id.clock, this.len);
        item.markDeleted();
      }
      /**
       * @param {Transaction} transaction
       */
      delete(transaction) {
      }
      /**
       * @param {StructStore} store
       */
      gc(store) {
      }
      /**
       * @param {UpdateEncoderV1 | UpdateEncoderV2} encoder
       * @param {number} offset
       */
      write(encoder, offset) {
        encoder.writeLen(this.len - offset);
      }
      /**
       * @return {number}
       */
      getRef() {
        return 1;
      }
    };
    createDocFromOpts = (guid, opts) => new Doc({ guid, ...opts, shouldLoad: opts.shouldLoad || opts.autoLoad || false });
    ContentDoc = class {
      /**
       * @param {Doc} doc
       */
      constructor(doc2) {
        if (doc2._item) {
          console.error("This document was already integrated as a sub-document. You should create a second instance instead with the same guid.");
        }
        this.doc = doc2;
        const opts = {};
        this.opts = opts;
        if (!doc2.gc) {
          opts.gc = false;
        }
        if (doc2.autoLoad) {
          opts.autoLoad = true;
        }
        if (doc2.meta !== null) {
          opts.meta = doc2.meta;
        }
      }
      /**
       * @return {number}
       */
      getLength() {
        return 1;
      }
      /**
       * @return {Array<any>}
       */
      getContent() {
        return [this.doc];
      }
      /**
       * @return {boolean}
       */
      isCountable() {
        return true;
      }
      /**
       * @return {ContentDoc}
       */
      copy() {
        return new ContentDoc(createDocFromOpts(this.doc.guid, this.opts));
      }
      /**
       * @param {number} offset
       * @return {ContentDoc}
       */
      splice(offset) {
        throw methodUnimplemented();
      }
      /**
       * @param {ContentDoc} right
       * @return {boolean}
       */
      mergeWith(right) {
        return false;
      }
      /**
       * @param {Transaction} transaction
       * @param {Item} item
       */
      integrate(transaction, item) {
        this.doc._item = item;
        transaction.subdocsAdded.add(this.doc);
        if (this.doc.shouldLoad) {
          transaction.subdocsLoaded.add(this.doc);
        }
      }
      /**
       * @param {Transaction} transaction
       */
      delete(transaction) {
        if (transaction.subdocsAdded.has(this.doc)) {
          transaction.subdocsAdded.delete(this.doc);
        } else {
          transaction.subdocsRemoved.add(this.doc);
        }
      }
      /**
       * @param {StructStore} store
       */
      gc(store) {
      }
      /**
       * @param {UpdateEncoderV1 | UpdateEncoderV2} encoder
       * @param {number} offset
       */
      write(encoder, offset) {
        encoder.writeString(this.doc.guid);
        encoder.writeAny(this.opts);
      }
      /**
       * @return {number}
       */
      getRef() {
        return 9;
      }
    };
    ContentEmbed = class {
      /**
       * @param {Object} embed
       */
      constructor(embed) {
        this.embed = embed;
      }
      /**
       * @return {number}
       */
      getLength() {
        return 1;
      }
      /**
       * @return {Array<any>}
       */
      getContent() {
        return [this.embed];
      }
      /**
       * @return {boolean}
       */
      isCountable() {
        return true;
      }
      /**
       * @return {ContentEmbed}
       */
      copy() {
        return new ContentEmbed(this.embed);
      }
      /**
       * @param {number} offset
       * @return {ContentEmbed}
       */
      splice(offset) {
        throw methodUnimplemented();
      }
      /**
       * @param {ContentEmbed} right
       * @return {boolean}
       */
      mergeWith(right) {
        return false;
      }
      /**
       * @param {Transaction} transaction
       * @param {Item} item
       */
      integrate(transaction, item) {
      }
      /**
       * @param {Transaction} transaction
       */
      delete(transaction) {
      }
      /**
       * @param {StructStore} store
       */
      gc(store) {
      }
      /**
       * @param {UpdateEncoderV1 | UpdateEncoderV2} encoder
       * @param {number} offset
       */
      write(encoder, offset) {
        encoder.writeJSON(this.embed);
      }
      /**
       * @return {number}
       */
      getRef() {
        return 5;
      }
    };
    ContentFormat = class {
      /**
       * @param {string} key
       * @param {Object} value
       */
      constructor(key, value) {
        this.key = key;
        this.value = value;
      }
      /**
       * @return {number}
       */
      getLength() {
        return 1;
      }
      /**
       * @return {Array<any>}
       */
      getContent() {
        return [];
      }
      /**
       * @return {boolean}
       */
      isCountable() {
        return false;
      }
      /**
       * @return {ContentFormat}
       */
      copy() {
        return new ContentFormat(this.key, this.value);
      }
      /**
       * @param {number} _offset
       * @return {ContentFormat}
       */
      splice(_offset) {
        throw methodUnimplemented();
      }
      /**
       * @param {ContentFormat} _right
       * @return {boolean}
       */
      mergeWith(_right) {
        return false;
      }
      /**
       * @param {Transaction} _transaction
       * @param {Item} item
       */
      integrate(_transaction, item) {
        const p2 = (
          /** @type {YText} */
          item.parent
        );
        p2._searchMarker = null;
        p2._hasFormatting = true;
      }
      /**
       * @param {Transaction} transaction
       */
      delete(transaction) {
      }
      /**
       * @param {StructStore} store
       */
      gc(store) {
      }
      /**
       * @param {UpdateEncoderV1 | UpdateEncoderV2} encoder
       * @param {number} offset
       */
      write(encoder, offset) {
        encoder.writeKey(this.key);
        encoder.writeJSON(this.value);
      }
      /**
       * @return {number}
       */
      getRef() {
        return 6;
      }
    };
    ContentAny = class {
      /**
       * @param {Array<any>} arr
       */
      constructor(arr) {
        this.arr = arr;
      }
      /**
       * @return {number}
       */
      getLength() {
        return this.arr.length;
      }
      /**
       * @return {Array<any>}
       */
      getContent() {
        return this.arr;
      }
      /**
       * @return {boolean}
       */
      isCountable() {
        return true;
      }
      /**
       * @return {ContentAny}
       */
      copy() {
        return new ContentAny(this.arr);
      }
      /**
       * @param {number} offset
       * @return {ContentAny}
       */
      splice(offset) {
        const right = new ContentAny(this.arr.slice(offset));
        this.arr = this.arr.slice(0, offset);
        return right;
      }
      /**
       * @param {ContentAny} right
       * @return {boolean}
       */
      mergeWith(right) {
        this.arr = this.arr.concat(right.arr);
        return true;
      }
      /**
       * @param {Transaction} transaction
       * @param {Item} item
       */
      integrate(transaction, item) {
      }
      /**
       * @param {Transaction} transaction
       */
      delete(transaction) {
      }
      /**
       * @param {StructStore} store
       */
      gc(store) {
      }
      /**
       * @param {UpdateEncoderV1 | UpdateEncoderV2} encoder
       * @param {number} offset
       */
      write(encoder, offset) {
        const len = this.arr.length;
        encoder.writeLen(len - offset);
        for (let i = offset; i < len; i++) {
          const c = this.arr[i];
          encoder.writeAny(c);
        }
      }
      /**
       * @return {number}
       */
      getRef() {
        return 8;
      }
    };
    ContentString = class {
      /**
       * @param {string} str
       */
      constructor(str) {
        this.str = str;
      }
      /**
       * @return {number}
       */
      getLength() {
        return this.str.length;
      }
      /**
       * @return {Array<any>}
       */
      getContent() {
        return this.str.split("");
      }
      /**
       * @return {boolean}
       */
      isCountable() {
        return true;
      }
      /**
       * @return {ContentString}
       */
      copy() {
        return new ContentString(this.str);
      }
      /**
       * @param {number} offset
       * @return {ContentString}
       */
      splice(offset) {
        const right = new ContentString(this.str.slice(offset));
        this.str = this.str.slice(0, offset);
        const firstCharCode = this.str.charCodeAt(offset - 1);
        if (firstCharCode >= 55296 && firstCharCode <= 56319) {
          this.str = this.str.slice(0, offset - 1) + "\uFFFD";
          right.str = "\uFFFD" + right.str.slice(1);
        }
        return right;
      }
      /**
       * @param {ContentString} right
       * @return {boolean}
       */
      mergeWith(right) {
        this.str += right.str;
        return true;
      }
      /**
       * @param {Transaction} transaction
       * @param {Item} item
       */
      integrate(transaction, item) {
      }
      /**
       * @param {Transaction} transaction
       */
      delete(transaction) {
      }
      /**
       * @param {StructStore} store
       */
      gc(store) {
      }
      /**
       * @param {UpdateEncoderV1 | UpdateEncoderV2} encoder
       * @param {number} offset
       */
      write(encoder, offset) {
        encoder.writeString(offset === 0 ? this.str : this.str.slice(offset));
      }
      /**
       * @return {number}
       */
      getRef() {
        return 4;
      }
    };
    YArrayRefID = 0;
    YMapRefID = 1;
    YTextRefID = 2;
    YXmlElementRefID = 3;
    YXmlFragmentRefID = 4;
    ContentType = class {
      /**
       * @param {AbstractType<any>} type
       */
      constructor(type) {
        this.type = type;
      }
      /**
       * @return {number}
       */
      getLength() {
        return 1;
      }
      /**
       * @return {Array<any>}
       */
      getContent() {
        return [this.type];
      }
      /**
       * @return {boolean}
       */
      isCountable() {
        return true;
      }
      /**
       * @return {ContentType}
       */
      copy() {
        return new ContentType(this.type._copy());
      }
      /**
       * @param {number} offset
       * @return {ContentType}
       */
      splice(offset) {
        throw methodUnimplemented();
      }
      /**
       * @param {ContentType} right
       * @return {boolean}
       */
      mergeWith(right) {
        return false;
      }
      /**
       * @param {Transaction} transaction
       * @param {Item} item
       */
      integrate(transaction, item) {
        this.type._integrate(transaction.doc, item);
      }
      /**
       * @param {Transaction} transaction
       */
      delete(transaction) {
        let item = this.type._start;
        while (item !== null) {
          if (!item.deleted) {
            item.delete(transaction);
          } else if (item.id.clock < (transaction.beforeState.get(item.id.client) || 0)) {
            transaction._mergeStructs.push(item);
          }
          item = item.right;
        }
        this.type._map.forEach((item2) => {
          if (!item2.deleted) {
            item2.delete(transaction);
          } else if (item2.id.clock < (transaction.beforeState.get(item2.id.client) || 0)) {
            transaction._mergeStructs.push(item2);
          }
        });
        transaction.changed.delete(this.type);
      }
      /**
       * @param {StructStore} store
       */
      gc(store) {
        let item = this.type._start;
        while (item !== null) {
          item.gc(store, true);
          item = item.right;
        }
        this.type._start = null;
        this.type._map.forEach(
          /** @param {Item | null} item */
          (item2) => {
            while (item2 !== null) {
              item2.gc(store, true);
              item2 = item2.left;
            }
          }
        );
        this.type._map = /* @__PURE__ */ new Map();
      }
      /**
       * @param {UpdateEncoderV1 | UpdateEncoderV2} encoder
       * @param {number} offset
       */
      write(encoder, offset) {
        this.type._write(encoder);
      }
      /**
       * @return {number}
       */
      getRef() {
        return 7;
      }
    };
    followRedone = (store, id2) => {
      let nextID = id2;
      let diff = 0;
      let item;
      do {
        if (diff > 0) {
          nextID = createID(nextID.client, nextID.clock + diff);
        }
        item = getItem(store, nextID);
        diff = nextID.clock - item.id.clock;
        nextID = item.redone;
      } while (nextID !== null && item instanceof Item);
      return {
        item,
        diff
      };
    };
    keepItem = (item, keep) => {
      while (item !== null && item.keep !== keep) {
        item.keep = keep;
        item = /** @type {AbstractType<any>} */
        item.parent._item;
      }
    };
    splitItem = (transaction, leftItem, diff) => {
      const { client, clock } = leftItem.id;
      const rightItem = new Item(
        createID(client, clock + diff),
        leftItem,
        createID(client, clock + diff - 1),
        leftItem.right,
        leftItem.rightOrigin,
        leftItem.parent,
        leftItem.parentSub,
        leftItem.content.splice(diff)
      );
      if (leftItem.deleted) {
        rightItem.markDeleted();
      }
      if (leftItem.keep) {
        rightItem.keep = true;
      }
      if (leftItem.redone !== null) {
        rightItem.redone = createID(leftItem.redone.client, leftItem.redone.clock + diff);
      }
      leftItem.right = rightItem;
      if (rightItem.right !== null) {
        rightItem.right.left = rightItem;
      }
      transaction._mergeStructs.push(rightItem);
      if (rightItem.parentSub !== null && rightItem.right === null) {
        rightItem.parent._map.set(rightItem.parentSub, rightItem);
      }
      leftItem.length = diff;
      return rightItem;
    };
    isDeletedByUndoStack = (stack, id2) => some(
      stack,
      /** @param {StackItem} s */
      (s) => isDeleted(s.deletions, id2)
    );
    redoItem = (transaction, item, redoitems, itemsToDelete, ignoreRemoteMapChanges, um) => {
      const doc2 = transaction.doc;
      const store = doc2.store;
      const ownClientID = doc2.clientID;
      const redone = item.redone;
      if (redone !== null) {
        return getItemCleanStart(transaction, redone);
      }
      let parentItem = (
        /** @type {AbstractType<any>} */
        item.parent._item
      );
      let left = null;
      let right;
      if (parentItem !== null && parentItem.deleted === true) {
        if (parentItem.redone === null && (!redoitems.has(parentItem) || redoItem(transaction, parentItem, redoitems, itemsToDelete, ignoreRemoteMapChanges, um) === null)) {
          return null;
        }
        while (parentItem.redone !== null) {
          parentItem = getItemCleanStart(transaction, parentItem.redone);
        }
      }
      const parentType = parentItem === null ? (
        /** @type {AbstractType<any>} */
        item.parent
      ) : (
        /** @type {ContentType} */
        parentItem.content.type
      );
      if (item.parentSub === null) {
        left = item.left;
        right = item;
        while (left !== null) {
          let leftTrace = left;
          while (leftTrace !== null && /** @type {AbstractType<any>} */
          leftTrace.parent._item !== parentItem) {
            leftTrace = leftTrace.redone === null ? null : getItemCleanStart(transaction, leftTrace.redone);
          }
          if (leftTrace !== null && /** @type {AbstractType<any>} */
          leftTrace.parent._item === parentItem) {
            left = leftTrace;
            break;
          }
          left = left.left;
        }
        while (right !== null) {
          let rightTrace = right;
          while (rightTrace !== null && /** @type {AbstractType<any>} */
          rightTrace.parent._item !== parentItem) {
            rightTrace = rightTrace.redone === null ? null : getItemCleanStart(transaction, rightTrace.redone);
          }
          if (rightTrace !== null && /** @type {AbstractType<any>} */
          rightTrace.parent._item === parentItem) {
            right = rightTrace;
            break;
          }
          right = right.right;
        }
      } else {
        right = null;
        if (item.right && !ignoreRemoteMapChanges) {
          left = item;
          while (left !== null && left.right !== null && (left.right.redone || isDeleted(itemsToDelete, left.right.id) || isDeletedByUndoStack(um.undoStack, left.right.id) || isDeletedByUndoStack(um.redoStack, left.right.id))) {
            left = left.right;
            while (left.redone)
              left = getItemCleanStart(transaction, left.redone);
          }
          if (left && left.right !== null) {
            return null;
          }
        } else {
          left = parentType._map.get(item.parentSub) || null;
        }
      }
      const nextClock = getState(store, ownClientID);
      const nextId = createID(ownClientID, nextClock);
      const redoneItem = new Item(
        nextId,
        left,
        left && left.lastId,
        right,
        right && right.id,
        parentType,
        item.parentSub,
        item.content.copy()
      );
      item.redone = nextId;
      keepItem(redoneItem, true);
      redoneItem.integrate(transaction, 0);
      return redoneItem;
    };
    Item = class extends AbstractStruct {
      /**
       * @param {ID} id
       * @param {Item | null} left
       * @param {ID | null} origin
       * @param {Item | null} right
       * @param {ID | null} rightOrigin
       * @param {AbstractType<any>|ID|null} parent Is a type if integrated, is null if it is possible to copy parent from left or right, is ID before integration to search for it.
       * @param {string | null} parentSub
       * @param {AbstractContent} content
       */
      constructor(id2, left, origin, right, rightOrigin, parent, parentSub, content) {
        super(id2, content.getLength());
        this.origin = origin;
        this.left = left;
        this.right = right;
        this.rightOrigin = rightOrigin;
        this.parent = parent;
        this.parentSub = parentSub;
        this.redone = null;
        this.content = content;
        this.info = this.content.isCountable() ? BIT2 : 0;
      }
      /**
       * This is used to mark the item as an indexed fast-search marker
       *
       * @type {boolean}
       */
      set marker(isMarked) {
        if ((this.info & BIT4) > 0 !== isMarked) {
          this.info ^= BIT4;
        }
      }
      get marker() {
        return (this.info & BIT4) > 0;
      }
      /**
       * If true, do not garbage collect this Item.
       */
      get keep() {
        return (this.info & BIT1) > 0;
      }
      set keep(doKeep) {
        if (this.keep !== doKeep) {
          this.info ^= BIT1;
        }
      }
      get countable() {
        return (this.info & BIT2) > 0;
      }
      /**
       * Whether this item was deleted or not.
       * @type {Boolean}
       */
      get deleted() {
        return (this.info & BIT3) > 0;
      }
      set deleted(doDelete) {
        if (this.deleted !== doDelete) {
          this.info ^= BIT3;
        }
      }
      markDeleted() {
        this.info |= BIT3;
      }
      /**
       * Return the creator clientID of the missing op or define missing items and return null.
       *
       * @param {Transaction} transaction
       * @param {StructStore} store
       * @return {null | number}
       */
      getMissing(transaction, store) {
        if (this.origin && this.origin.client !== this.id.client && this.origin.clock >= getState(store, this.origin.client)) {
          return this.origin.client;
        }
        if (this.rightOrigin && this.rightOrigin.client !== this.id.client && this.rightOrigin.clock >= getState(store, this.rightOrigin.client)) {
          return this.rightOrigin.client;
        }
        if (this.parent && this.parent.constructor === ID && this.id.client !== this.parent.client && this.parent.clock >= getState(store, this.parent.client)) {
          return this.parent.client;
        }
        if (this.origin) {
          this.left = getItemCleanEnd(transaction, store, this.origin);
          this.origin = this.left.lastId;
        }
        if (this.rightOrigin) {
          this.right = getItemCleanStart(transaction, this.rightOrigin);
          this.rightOrigin = this.right.id;
        }
        if (this.left && this.left.constructor === GC || this.right && this.right.constructor === GC) {
          this.parent = null;
        } else if (!this.parent) {
          if (this.left && this.left.constructor === Item) {
            this.parent = this.left.parent;
            this.parentSub = this.left.parentSub;
          }
          if (this.right && this.right.constructor === Item) {
            this.parent = this.right.parent;
            this.parentSub = this.right.parentSub;
          }
        } else if (this.parent.constructor === ID) {
          const parentItem = getItem(store, this.parent);
          if (parentItem.constructor === GC) {
            this.parent = null;
          } else {
            this.parent = /** @type {ContentType} */
            parentItem.content.type;
          }
        }
        return null;
      }
      /**
       * @param {Transaction} transaction
       * @param {number} offset
       */
      integrate(transaction, offset) {
        if (offset > 0) {
          this.id.clock += offset;
          this.left = getItemCleanEnd(transaction, transaction.doc.store, createID(this.id.client, this.id.clock - 1));
          this.origin = this.left.lastId;
          this.content = this.content.splice(offset);
          this.length -= offset;
        }
        if (this.parent) {
          if (!this.left && (!this.right || this.right.left !== null) || this.left && this.left.right !== this.right) {
            let left = this.left;
            let o;
            if (left !== null) {
              o = left.right;
            } else if (this.parentSub !== null) {
              o = /** @type {AbstractType<any>} */
              this.parent._map.get(this.parentSub) || null;
              while (o !== null && o.left !== null) {
                o = o.left;
              }
            } else {
              o = /** @type {AbstractType<any>} */
              this.parent._start;
            }
            const conflictingItems = /* @__PURE__ */ new Set();
            const itemsBeforeOrigin = /* @__PURE__ */ new Set();
            while (o !== null && o !== this.right) {
              itemsBeforeOrigin.add(o);
              conflictingItems.add(o);
              if (compareIDs(this.origin, o.origin)) {
                if (o.id.client < this.id.client) {
                  left = o;
                  conflictingItems.clear();
                } else if (compareIDs(this.rightOrigin, o.rightOrigin)) {
                  break;
                }
              } else if (o.origin !== null && itemsBeforeOrigin.has(getItem(transaction.doc.store, o.origin))) {
                if (!conflictingItems.has(getItem(transaction.doc.store, o.origin))) {
                  left = o;
                  conflictingItems.clear();
                }
              } else {
                break;
              }
              o = o.right;
            }
            this.left = left;
          }
          if (this.left !== null) {
            const right = this.left.right;
            this.right = right;
            this.left.right = this;
          } else {
            let r;
            if (this.parentSub !== null) {
              r = /** @type {AbstractType<any>} */
              this.parent._map.get(this.parentSub) || null;
              while (r !== null && r.left !== null) {
                r = r.left;
              }
            } else {
              r = /** @type {AbstractType<any>} */
              this.parent._start;
              this.parent._start = this;
            }
            this.right = r;
          }
          if (this.right !== null) {
            this.right.left = this;
          } else if (this.parentSub !== null) {
            this.parent._map.set(this.parentSub, this);
            if (this.left !== null) {
              this.left.delete(transaction);
            }
          }
          if (this.parentSub === null && this.countable && !this.deleted) {
            this.parent._length += this.length;
          }
          addStruct(transaction.doc.store, this);
          this.content.integrate(transaction, this);
          addChangedTypeToTransaction(
            transaction,
            /** @type {AbstractType<any>} */
            this.parent,
            this.parentSub
          );
          if (
            /** @type {AbstractType<any>} */
            this.parent._item !== null && /** @type {AbstractType<any>} */
            this.parent._item.deleted || this.parentSub !== null && this.right !== null
          ) {
            this.delete(transaction);
          }
        } else {
          new GC(this.id, this.length).integrate(transaction, 0);
        }
      }
      /**
       * Returns the next non-deleted item
       */
      get next() {
        let n = this.right;
        while (n !== null && n.deleted) {
          n = n.right;
        }
        return n;
      }
      /**
       * Returns the previous non-deleted item
       */
      get prev() {
        let n = this.left;
        while (n !== null && n.deleted) {
          n = n.left;
        }
        return n;
      }
      /**
       * Computes the last content address of this Item.
       */
      get lastId() {
        return this.length === 1 ? this.id : createID(this.id.client, this.id.clock + this.length - 1);
      }
      /**
       * Try to merge two items
       *
       * @param {Item} right
       * @return {boolean}
       */
      mergeWith(right) {
        if (this.constructor === right.constructor && compareIDs(right.origin, this.lastId) && this.right === right && compareIDs(this.rightOrigin, right.rightOrigin) && this.id.client === right.id.client && this.id.clock + this.length === right.id.clock && this.deleted === right.deleted && this.redone === null && right.redone === null && this.content.constructor === right.content.constructor && this.content.mergeWith(right.content)) {
          const searchMarker = (
            /** @type {AbstractType<any>} */
            this.parent._searchMarker
          );
          if (searchMarker) {
            searchMarker.forEach((marker) => {
              if (marker.p === right) {
                marker.p = this;
                if (!this.deleted && this.countable) {
                  marker.index -= this.length;
                }
              }
            });
          }
          if (right.keep) {
            this.keep = true;
          }
          this.right = right.right;
          if (this.right !== null) {
            this.right.left = this;
          }
          this.length += right.length;
          return true;
        }
        return false;
      }
      /**
       * Mark this Item as deleted.
       *
       * @param {Transaction} transaction
       */
      delete(transaction) {
        if (!this.deleted) {
          const parent = (
            /** @type {AbstractType<any>} */
            this.parent
          );
          if (this.countable && this.parentSub === null) {
            parent._length -= this.length;
          }
          this.markDeleted();
          addToDeleteSet(transaction.deleteSet, this.id.client, this.id.clock, this.length);
          addChangedTypeToTransaction(transaction, parent, this.parentSub);
          this.content.delete(transaction);
        }
      }
      /**
       * @param {StructStore} store
       * @param {boolean} parentGCd
       */
      gc(store, parentGCd) {
        if (!this.deleted) {
          throw unexpectedCase();
        }
        this.content.gc(store);
        if (parentGCd) {
          replaceStruct(store, this, new GC(this.id, this.length));
        } else {
          this.content = new ContentDeleted(this.length);
        }
      }
      /**
       * Transform the properties of this type to binary and write it to an
       * BinaryEncoder.
       *
       * This is called when this Item is sent to a remote peer.
       *
       * @param {UpdateEncoderV1 | UpdateEncoderV2} encoder The encoder to write data to.
       * @param {number} offset
       */
      write(encoder, offset) {
        const origin = offset > 0 ? createID(this.id.client, this.id.clock + offset - 1) : this.origin;
        const rightOrigin = this.rightOrigin;
        const parentSub = this.parentSub;
        const info = this.content.getRef() & BITS5 | (origin === null ? 0 : BIT8) | // origin is defined
        (rightOrigin === null ? 0 : BIT7) | // right origin is defined
        (parentSub === null ? 0 : BIT6);
        encoder.writeInfo(info);
        if (origin !== null) {
          encoder.writeLeftID(origin);
        }
        if (rightOrigin !== null) {
          encoder.writeRightID(rightOrigin);
        }
        if (origin === null && rightOrigin === null) {
          const parent = (
            /** @type {AbstractType<any>} */
            this.parent
          );
          if (parent._item !== void 0) {
            const parentItem = parent._item;
            if (parentItem === null) {
              const ykey = findRootTypeKey(parent);
              encoder.writeParentInfo(true);
              encoder.writeString(ykey);
            } else {
              encoder.writeParentInfo(false);
              encoder.writeLeftID(parentItem.id);
            }
          } else if (parent.constructor === String) {
            encoder.writeParentInfo(true);
            encoder.writeString(parent);
          } else if (parent.constructor === ID) {
            encoder.writeParentInfo(false);
            encoder.writeLeftID(parent);
          } else {
            unexpectedCase();
          }
          if (parentSub !== null) {
            encoder.writeString(parentSub);
          }
        }
        this.content.write(encoder, offset);
      }
    };
    glo = /** @type {any} */
    typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof globalThis !== "undefined" ? globalThis : {};
    importIdentifier = "__ $YJS$ __";
    if (glo[importIdentifier] === true) {
      console.error("Yjs was already imported. This breaks constructor checks and will lead to issues! - https://github.com/yjs/yjs/issues/438");
    }
    glo[importIdentifier] = true;
  }
});

// ../../node_modules/y-protocols/awareness.js
var outdatedTimeout, Awareness, removeAwarenessStates;
var init_awareness2 = __esm({
  "../../node_modules/y-protocols/awareness.js"() {
    init_time();
    init_math();
    init_observable();
    init_function();
    outdatedTimeout = 3e4;
    Awareness = class extends Observable {
      /**
       * @param {Y.Doc} doc
       */
      constructor(doc2) {
        super();
        this.doc = doc2;
        this.clientID = doc2.clientID;
        this.states = /* @__PURE__ */ new Map();
        this.meta = /* @__PURE__ */ new Map();
        this._checkInterval = /** @type {any} */
        setInterval(() => {
          const now = getUnixTime();
          if (this.getLocalState() !== null && outdatedTimeout / 2 <= now - /** @type {{lastUpdated:number}} */
          this.meta.get(this.clientID).lastUpdated) {
            this.setLocalState(this.getLocalState());
          }
          const remove = [];
          this.meta.forEach((meta, clientid) => {
            if (clientid !== this.clientID && outdatedTimeout <= now - meta.lastUpdated && this.states.has(clientid)) {
              remove.push(clientid);
            }
          });
          if (remove.length > 0) {
            removeAwarenessStates(this, remove, "timeout");
          }
        }, floor(outdatedTimeout / 10));
        doc2.on("destroy", () => {
          this.destroy();
        });
        this.setLocalState({});
      }
      destroy() {
        this.emit("destroy", [this]);
        this.setLocalState(null);
        super.destroy();
        clearInterval(this._checkInterval);
      }
      /**
       * @return {Object<string,any>|null}
       */
      getLocalState() {
        return this.states.get(this.clientID) || null;
      }
      /**
       * @param {Object<string,any>|null} state
       */
      setLocalState(state) {
        const clientID = this.clientID;
        const currLocalMeta = this.meta.get(clientID);
        const clock = currLocalMeta === void 0 ? 0 : currLocalMeta.clock + 1;
        const prevState = this.states.get(clientID);
        if (state === null) {
          this.states.delete(clientID);
        } else {
          this.states.set(clientID, state);
        }
        this.meta.set(clientID, {
          clock,
          lastUpdated: getUnixTime()
        });
        const added = [];
        const updated = [];
        const filteredUpdated = [];
        const removed = [];
        if (state === null) {
          removed.push(clientID);
        } else if (prevState == null) {
          if (state != null) {
            added.push(clientID);
          }
        } else {
          updated.push(clientID);
          if (!equalityDeep(prevState, state)) {
            filteredUpdated.push(clientID);
          }
        }
        if (added.length > 0 || filteredUpdated.length > 0 || removed.length > 0) {
          this.emit("change", [{ added, updated: filteredUpdated, removed }, "local"]);
        }
        this.emit("update", [{ added, updated, removed }, "local"]);
      }
      /**
       * @param {string} field
       * @param {any} value
       */
      setLocalStateField(field, value) {
        const state = this.getLocalState();
        if (state !== null) {
          this.setLocalState({
            ...state,
            [field]: value
          });
        }
      }
      /**
       * @return {Map<number,Object<string,any>>}
       */
      getStates() {
        return this.states;
      }
    };
    removeAwarenessStates = (awareness, clients, origin) => {
      const removed = [];
      for (let i = 0; i < clients.length; i++) {
        const clientID = clients[i];
        if (awareness.states.has(clientID)) {
          awareness.states.delete(clientID);
          if (clientID === awareness.clientID) {
            const curMeta = (
              /** @type {MetaClientState} */
              awareness.meta.get(clientID)
            );
            awareness.meta.set(clientID, {
              clock: curMeta.clock + 1,
              lastUpdated: getUnixTime()
            });
          }
          removed.push(clientID);
        }
      }
      if (removed.length > 0) {
        awareness.emit("change", [{ added: [], updated: [], removed }, origin]);
        awareness.emit("update", [{ added: [], updated: [], removed }, origin]);
      }
    };
  }
});

// ../../node_modules/@jupyter/ydoc/lib/ydocument.js
var import_coreutils, YDocument;
var init_ydocument = __esm({
  "../../node_modules/@jupyter/ydoc/lib/ydocument.js"() {
    import_coreutils = __toESM(require_dist(), 1);
    init_index_es6();
    init_awareness2();
    init_yjs();
    YDocument = class {
      constructor(options) {
        var _a;
        this.onStateChanged = (event) => {
          const stateChange = new Array();
          event.keysChanged.forEach((key) => {
            const change = event.changes.keys.get(key);
            if (change) {
              stateChange.push({
                name: key,
                oldValue: change.oldValue,
                newValue: this.ystate.get(key)
              });
            }
          });
          this._changed.emit({ stateChange });
        };
        this._changed = new Signal(this);
        this._isDisposed = false;
        this._disposed = new Signal(this);
        this._ydoc = (_a = options === null || options === void 0 ? void 0 : options.ydoc) !== null && _a !== void 0 ? _a : new Doc();
        this._ystate = this._ydoc.getMap("state");
        this._undoManager = new UndoManager([], {
          trackedOrigins: /* @__PURE__ */ new Set([this]),
          doc: this._ydoc
        });
        this._awareness = new Awareness(this._ydoc);
        this._ystate.observe(this.onStateChanged);
      }
      /**
       * YJS document.
       */
      get ydoc() {
        return this._ydoc;
      }
      /**
       * Shared state
       */
      get ystate() {
        return this._ystate;
      }
      /**
       * YJS document undo manager
       */
      get undoManager() {
        return this._undoManager;
      }
      /**
       * Shared awareness
       */
      get awareness() {
        return this._awareness;
      }
      /**
       * The changed signal.
       */
      get changed() {
        return this._changed;
      }
      /**
       * A signal emitted when the document is disposed.
       */
      get disposed() {
        return this._disposed;
      }
      /**
       * Whether the document is disposed or not.
       */
      get isDisposed() {
        return this._isDisposed;
      }
      /**
       * Document state
       */
      get state() {
        return import_coreutils.JSONExt.deepCopy(this.ystate.toJSON());
      }
      /**
       * Whether the object can undo changes.
       */
      canUndo() {
        return this.undoManager.undoStack.length > 0;
      }
      /**
       * Whether the object can redo changes.
       */
      canRedo() {
        return this.undoManager.redoStack.length > 0;
      }
      /**
       * Dispose of the resources.
       */
      dispose() {
        if (this._isDisposed) {
          return;
        }
        this._isDisposed = true;
        this.ystate.unobserve(this.onStateChanged);
        this.awareness.destroy();
        this.undoManager.destroy();
        this.ydoc.destroy();
        this._disposed.emit();
        Signal.clearData(this);
      }
      /**
       * Get the value for a state attribute
       *
       * @param key Key to get
       */
      getState(key) {
        const value = this.ystate.get(key);
        return typeof value === "undefined" ? value : import_coreutils.JSONExt.deepCopy(value);
      }
      /**
       * Set the value of a state attribute
       *
       * @param key Key to set
       * @param value New attribute value
       */
      setState(key, value) {
        if (!import_coreutils.JSONExt.deepEqual(this.ystate.get(key), value)) {
          this.ystate.set(key, value);
        }
      }
      /**
       * Undo an operation.
       */
      undo() {
        this.undoManager.undo();
      }
      /**
       * Redo an operation.
       */
      redo() {
        this.undoManager.redo();
      }
      /**
       * Clear the change stack.
       */
      clearUndoHistory() {
        this.undoManager.clear();
      }
      /**
       * Perform a transaction. While the function f is called, all changes to the shared
       * document are bundled into a single event.
       */
      transact(f, undoable = true) {
        this.ydoc.transact(f, undoable ? this : null);
      }
    };
  }
});

// ../../node_modules/@jupyter/ydoc/lib/yfile.js
var YFile;
var init_yfile = __esm({
  "../../node_modules/@jupyter/ydoc/lib/yfile.js"() {
    init_ydocument();
    YFile = class extends YDocument {
      /**
       * Create a new file
       *
       * #### Notes
       * The document is empty and must be populated
       */
      constructor() {
        super();
        this.version = "1.0.0";
        this.ysource = this.ydoc.getText("source");
        this._modelObserver = (event) => {
          this._changed.emit({ sourceChange: event.changes.delta });
        };
        this.undoManager.addToScope(this.ysource);
        this.ysource.observe(this._modelObserver);
      }
      /**
       * Creates a standalone YFile
       */
      static create() {
        return new YFile();
      }
      /**
       * File text
       */
      get source() {
        return this.getSource();
      }
      set source(v) {
        this.setSource(v);
      }
      /**
       * Dispose of the resources.
       */
      dispose() {
        if (this.isDisposed) {
          return;
        }
        this.ysource.unobserve(this._modelObserver);
        super.dispose();
      }
      /**
       * Get the file text.
       *
       * @returns File text.
       */
      getSource() {
        return this.ysource.toString();
      }
      /**
       * Set the file text.
       *
       * @param value New text
       */
      setSource(value) {
        this.transact(() => {
          const ytext = this.ysource;
          ytext.delete(0, ytext.length);
          ytext.insert(0, value);
        });
      }
      /**
       * Replace content from `start' to `end` with `value`.
       *
       * @param start: The start index of the range to replace (inclusive).
       * @param end: The end index of the range to replace (exclusive).
       * @param value: New source (optional).
       */
      updateSource(start, end, value = "") {
        this.transact(() => {
          const ysource = this.ysource;
          ysource.insert(start, value);
          ysource.delete(start + value.length, end - start);
        });
      }
    };
  }
});

// ../../node_modules/@jupyter/ydoc/lib/ycell.js
var import_coreutils2;
var init_ycell = __esm({
  "../../node_modules/@jupyter/ydoc/lib/ycell.js"() {
    import_coreutils2 = __toESM(require_dist(), 1);
    init_index_es6();
    init_awareness2();
  }
});

// ../../node_modules/@jupyter/ydoc/lib/ynotebook.js
var import_coreutils3;
var init_ynotebook = __esm({
  "../../node_modules/@jupyter/ydoc/lib/ynotebook.js"() {
    import_coreutils3 = __toESM(require_dist(), 1);
    init_index_es6();
    init_ydocument();
    init_ycell();
  }
});

// ../../node_modules/@jupyter/ydoc/lib/index.js
var init_lib5 = __esm({
  "../../node_modules/@jupyter/ydoc/lib/index.js"() {
    init_api();
    init_utils();
    init_awareness();
    init_ytext();
    init_ydocument();
    init_yfile();
    init_ynotebook();
    init_ycell();
  }
});

// ../../node_modules/@jupyterlab/codeeditor/node_modules/@lumino/algorithm/dist/index.es6.js
function every2(object, fn) {
  let index = 0;
  for (const value of object) {
    if (false === fn(value, index++)) {
      return false;
    }
  }
  return true;
}
function some2(object, fn) {
  let index = 0;
  for (const value of object) {
    if (fn(value, index++)) {
      return true;
    }
  }
  return false;
}
function* retro(object) {
  if (typeof object.retro === "function") {
    yield* object.retro();
  } else {
    for (let index = object.length - 1; index > -1; index--) {
      yield object[index];
    }
  }
}
var ArrayExt, Private, StringExt;
var init_index_es64 = __esm({
  "../../node_modules/@jupyterlab/codeeditor/node_modules/@lumino/algorithm/dist/index.es6.js"() {
    (function(ArrayExt2) {
      function firstIndexOf(array, value, start = 0, stop = -1) {
        let n = array.length;
        if (n === 0) {
          return -1;
        }
        if (start < 0) {
          start = Math.max(0, start + n);
        } else {
          start = Math.min(start, n - 1);
        }
        if (stop < 0) {
          stop = Math.max(0, stop + n);
        } else {
          stop = Math.min(stop, n - 1);
        }
        let span;
        if (stop < start) {
          span = stop + 1 + (n - start);
        } else {
          span = stop - start + 1;
        }
        for (let i = 0; i < span; ++i) {
          let j = (start + i) % n;
          if (array[j] === value) {
            return j;
          }
        }
        return -1;
      }
      ArrayExt2.firstIndexOf = firstIndexOf;
      function lastIndexOf(array, value, start = -1, stop = 0) {
        let n = array.length;
        if (n === 0) {
          return -1;
        }
        if (start < 0) {
          start = Math.max(0, start + n);
        } else {
          start = Math.min(start, n - 1);
        }
        if (stop < 0) {
          stop = Math.max(0, stop + n);
        } else {
          stop = Math.min(stop, n - 1);
        }
        let span;
        if (start < stop) {
          span = start + 1 + (n - stop);
        } else {
          span = start - stop + 1;
        }
        for (let i = 0; i < span; ++i) {
          let j = (start - i + n) % n;
          if (array[j] === value) {
            return j;
          }
        }
        return -1;
      }
      ArrayExt2.lastIndexOf = lastIndexOf;
      function findFirstIndex(array, fn, start = 0, stop = -1) {
        let n = array.length;
        if (n === 0) {
          return -1;
        }
        if (start < 0) {
          start = Math.max(0, start + n);
        } else {
          start = Math.min(start, n - 1);
        }
        if (stop < 0) {
          stop = Math.max(0, stop + n);
        } else {
          stop = Math.min(stop, n - 1);
        }
        let span;
        if (stop < start) {
          span = stop + 1 + (n - start);
        } else {
          span = stop - start + 1;
        }
        for (let i = 0; i < span; ++i) {
          let j = (start + i) % n;
          if (fn(array[j], j)) {
            return j;
          }
        }
        return -1;
      }
      ArrayExt2.findFirstIndex = findFirstIndex;
      function findLastIndex(array, fn, start = -1, stop = 0) {
        let n = array.length;
        if (n === 0) {
          return -1;
        }
        if (start < 0) {
          start = Math.max(0, start + n);
        } else {
          start = Math.min(start, n - 1);
        }
        if (stop < 0) {
          stop = Math.max(0, stop + n);
        } else {
          stop = Math.min(stop, n - 1);
        }
        let d;
        if (start < stop) {
          d = start + 1 + (n - stop);
        } else {
          d = start - stop + 1;
        }
        for (let i = 0; i < d; ++i) {
          let j = (start - i + n) % n;
          if (fn(array[j], j)) {
            return j;
          }
        }
        return -1;
      }
      ArrayExt2.findLastIndex = findLastIndex;
      function findFirstValue(array, fn, start = 0, stop = -1) {
        let index = findFirstIndex(array, fn, start, stop);
        return index !== -1 ? array[index] : void 0;
      }
      ArrayExt2.findFirstValue = findFirstValue;
      function findLastValue(array, fn, start = -1, stop = 0) {
        let index = findLastIndex(array, fn, start, stop);
        return index !== -1 ? array[index] : void 0;
      }
      ArrayExt2.findLastValue = findLastValue;
      function lowerBound(array, value, fn, start = 0, stop = -1) {
        let n = array.length;
        if (n === 0) {
          return 0;
        }
        if (start < 0) {
          start = Math.max(0, start + n);
        } else {
          start = Math.min(start, n - 1);
        }
        if (stop < 0) {
          stop = Math.max(0, stop + n);
        } else {
          stop = Math.min(stop, n - 1);
        }
        let begin = start;
        let span = stop - start + 1;
        while (span > 0) {
          let half = span >> 1;
          let middle = begin + half;
          if (fn(array[middle], value) < 0) {
            begin = middle + 1;
            span -= half + 1;
          } else {
            span = half;
          }
        }
        return begin;
      }
      ArrayExt2.lowerBound = lowerBound;
      function upperBound(array, value, fn, start = 0, stop = -1) {
        let n = array.length;
        if (n === 0) {
          return 0;
        }
        if (start < 0) {
          start = Math.max(0, start + n);
        } else {
          start = Math.min(start, n - 1);
        }
        if (stop < 0) {
          stop = Math.max(0, stop + n);
        } else {
          stop = Math.min(stop, n - 1);
        }
        let begin = start;
        let span = stop - start + 1;
        while (span > 0) {
          let half = span >> 1;
          let middle = begin + half;
          if (fn(array[middle], value) > 0) {
            span = half;
          } else {
            begin = middle + 1;
            span -= half + 1;
          }
        }
        return begin;
      }
      ArrayExt2.upperBound = upperBound;
      function shallowEqual(a, b, fn) {
        if (a === b) {
          return true;
        }
        if (a.length !== b.length) {
          return false;
        }
        for (let i = 0, n = a.length; i < n; ++i) {
          if (fn ? !fn(a[i], b[i]) : a[i] !== b[i]) {
            return false;
          }
        }
        return true;
      }
      ArrayExt2.shallowEqual = shallowEqual;
      function slice(array, options = {}) {
        let { start, stop, step } = options;
        if (step === void 0) {
          step = 1;
        }
        if (step === 0) {
          throw new Error("Slice `step` cannot be zero.");
        }
        let n = array.length;
        if (start === void 0) {
          start = step < 0 ? n - 1 : 0;
        } else if (start < 0) {
          start = Math.max(start + n, step < 0 ? -1 : 0);
        } else if (start >= n) {
          start = step < 0 ? n - 1 : n;
        }
        if (stop === void 0) {
          stop = step < 0 ? -1 : n;
        } else if (stop < 0) {
          stop = Math.max(stop + n, step < 0 ? -1 : 0);
        } else if (stop >= n) {
          stop = step < 0 ? n - 1 : n;
        }
        let length3;
        if (step < 0 && stop >= start || step > 0 && start >= stop) {
          length3 = 0;
        } else if (step < 0) {
          length3 = Math.floor((stop - start + 1) / step + 1);
        } else {
          length3 = Math.floor((stop - start - 1) / step + 1);
        }
        let result = [];
        for (let i = 0; i < length3; ++i) {
          result[i] = array[start + i * step];
        }
        return result;
      }
      ArrayExt2.slice = slice;
      function move(array, fromIndex, toIndex) {
        let n = array.length;
        if (n <= 1) {
          return;
        }
        if (fromIndex < 0) {
          fromIndex = Math.max(0, fromIndex + n);
        } else {
          fromIndex = Math.min(fromIndex, n - 1);
        }
        if (toIndex < 0) {
          toIndex = Math.max(0, toIndex + n);
        } else {
          toIndex = Math.min(toIndex, n - 1);
        }
        if (fromIndex === toIndex) {
          return;
        }
        let value = array[fromIndex];
        let d = fromIndex < toIndex ? 1 : -1;
        for (let i = fromIndex; i !== toIndex; i += d) {
          array[i] = array[i + d];
        }
        array[toIndex] = value;
      }
      ArrayExt2.move = move;
      function reverse(array, start = 0, stop = -1) {
        let n = array.length;
        if (n <= 1) {
          return;
        }
        if (start < 0) {
          start = Math.max(0, start + n);
        } else {
          start = Math.min(start, n - 1);
        }
        if (stop < 0) {
          stop = Math.max(0, stop + n);
        } else {
          stop = Math.min(stop, n - 1);
        }
        while (start < stop) {
          let a = array[start];
          let b = array[stop];
          array[start++] = b;
          array[stop--] = a;
        }
      }
      ArrayExt2.reverse = reverse;
      function rotate(array, delta, start = 0, stop = -1) {
        let n = array.length;
        if (n <= 1) {
          return;
        }
        if (start < 0) {
          start = Math.max(0, start + n);
        } else {
          start = Math.min(start, n - 1);
        }
        if (stop < 0) {
          stop = Math.max(0, stop + n);
        } else {
          stop = Math.min(stop, n - 1);
        }
        if (start >= stop) {
          return;
        }
        let length3 = stop - start + 1;
        if (delta > 0) {
          delta = delta % length3;
        } else if (delta < 0) {
          delta = (delta % length3 + length3) % length3;
        }
        if (delta === 0) {
          return;
        }
        let pivot = start + delta;
        reverse(array, start, pivot - 1);
        reverse(array, pivot, stop);
        reverse(array, start, stop);
      }
      ArrayExt2.rotate = rotate;
      function fill(array, value, start = 0, stop = -1) {
        let n = array.length;
        if (n === 0) {
          return;
        }
        if (start < 0) {
          start = Math.max(0, start + n);
        } else {
          start = Math.min(start, n - 1);
        }
        if (stop < 0) {
          stop = Math.max(0, stop + n);
        } else {
          stop = Math.min(stop, n - 1);
        }
        let span;
        if (stop < start) {
          span = stop + 1 + (n - start);
        } else {
          span = stop - start + 1;
        }
        for (let i = 0; i < span; ++i) {
          array[(start + i) % n] = value;
        }
      }
      ArrayExt2.fill = fill;
      function insert(array, index, value) {
        let n = array.length;
        if (index < 0) {
          index = Math.max(0, index + n);
        } else {
          index = Math.min(index, n);
        }
        for (let i = n; i > index; --i) {
          array[i] = array[i - 1];
        }
        array[index] = value;
      }
      ArrayExt2.insert = insert;
      function removeAt(array, index) {
        let n = array.length;
        if (index < 0) {
          index += n;
        }
        if (index < 0 || index >= n) {
          return void 0;
        }
        let value = array[index];
        for (let i = index + 1; i < n; ++i) {
          array[i - 1] = array[i];
        }
        array.length = n - 1;
        return value;
      }
      ArrayExt2.removeAt = removeAt;
      function removeFirstOf(array, value, start = 0, stop = -1) {
        let index = firstIndexOf(array, value, start, stop);
        if (index !== -1) {
          removeAt(array, index);
        }
        return index;
      }
      ArrayExt2.removeFirstOf = removeFirstOf;
      function removeLastOf(array, value, start = -1, stop = 0) {
        let index = lastIndexOf(array, value, start, stop);
        if (index !== -1) {
          removeAt(array, index);
        }
        return index;
      }
      ArrayExt2.removeLastOf = removeLastOf;
      function removeAllOf(array, value, start = 0, stop = -1) {
        let n = array.length;
        if (n === 0) {
          return 0;
        }
        if (start < 0) {
          start = Math.max(0, start + n);
        } else {
          start = Math.min(start, n - 1);
        }
        if (stop < 0) {
          stop = Math.max(0, stop + n);
        } else {
          stop = Math.min(stop, n - 1);
        }
        let count = 0;
        for (let i = 0; i < n; ++i) {
          if (start <= stop && i >= start && i <= stop && array[i] === value) {
            count++;
          } else if (stop < start && (i <= stop || i >= start) && array[i] === value) {
            count++;
          } else if (count > 0) {
            array[i - count] = array[i];
          }
        }
        if (count > 0) {
          array.length = n - count;
        }
        return count;
      }
      ArrayExt2.removeAllOf = removeAllOf;
      function removeFirstWhere(array, fn, start = 0, stop = -1) {
        let value;
        let index = findFirstIndex(array, fn, start, stop);
        if (index !== -1) {
          value = removeAt(array, index);
        }
        return { index, value };
      }
      ArrayExt2.removeFirstWhere = removeFirstWhere;
      function removeLastWhere(array, fn, start = -1, stop = 0) {
        let value;
        let index = findLastIndex(array, fn, start, stop);
        if (index !== -1) {
          value = removeAt(array, index);
        }
        return { index, value };
      }
      ArrayExt2.removeLastWhere = removeLastWhere;
      function removeAllWhere(array, fn, start = 0, stop = -1) {
        let n = array.length;
        if (n === 0) {
          return 0;
        }
        if (start < 0) {
          start = Math.max(0, start + n);
        } else {
          start = Math.min(start, n - 1);
        }
        if (stop < 0) {
          stop = Math.max(0, stop + n);
        } else {
          stop = Math.min(stop, n - 1);
        }
        let count = 0;
        for (let i = 0; i < n; ++i) {
          if (start <= stop && i >= start && i <= stop && fn(array[i], i)) {
            count++;
          } else if (stop < start && (i <= stop || i >= start) && fn(array[i], i)) {
            count++;
          } else if (count > 0) {
            array[i - count] = array[i];
          }
        }
        if (count > 0) {
          array.length = n - count;
        }
        return count;
      }
      ArrayExt2.removeAllWhere = removeAllWhere;
    })(ArrayExt || (ArrayExt = {}));
    (function(Private7) {
      function rangeLength(start, stop, step) {
        if (step === 0) {
          return Infinity;
        }
        if (start > stop && step > 0) {
          return 0;
        }
        if (start < stop && step < 0) {
          return 0;
        }
        return Math.ceil((stop - start) / step);
      }
      Private7.rangeLength = rangeLength;
    })(Private || (Private = {}));
    (function(StringExt2) {
      function findIndices(source, query, start = 0) {
        let indices = new Array(query.length);
        for (let i = 0, j = start, n = query.length; i < n; ++i, ++j) {
          j = source.indexOf(query[i], j);
          if (j === -1) {
            return null;
          }
          indices[i] = j;
        }
        return indices;
      }
      StringExt2.findIndices = findIndices;
      function matchSumOfSquares(source, query, start = 0) {
        let indices = findIndices(source, query, start);
        if (!indices) {
          return null;
        }
        let score = 0;
        for (let i = 0, n = indices.length; i < n; ++i) {
          let j = indices[i] - start;
          score += j * j;
        }
        return { score, indices };
      }
      StringExt2.matchSumOfSquares = matchSumOfSquares;
      function matchSumOfDeltas(source, query, start = 0) {
        let indices = findIndices(source, query, start);
        if (!indices) {
          return null;
        }
        let score = 0;
        let last2 = start - 1;
        for (let i = 0, n = indices.length; i < n; ++i) {
          let j = indices[i];
          score += j - last2 - 1;
          last2 = j;
        }
        return { score, indices };
      }
      StringExt2.matchSumOfDeltas = matchSumOfDeltas;
      function highlight(source, indices, fn) {
        let result = [];
        let k = 0;
        let last2 = 0;
        let n = indices.length;
        while (k < n) {
          let i = indices[k];
          let j = indices[k];
          while (++k < n && indices[k] === j + 1) {
            j++;
          }
          if (last2 < i) {
            result.push(source.slice(last2, i));
          }
          if (i < j + 1) {
            result.push(fn(source.slice(i, j + 1)));
          }
          last2 = j + 1;
        }
        if (last2 < source.length) {
          result.push(source.slice(last2));
        }
        return result;
      }
      StringExt2.highlight = highlight;
      function cmp(a, b) {
        return a < b ? -1 : a > b ? 1 : 0;
      }
      StringExt2.cmp = cmp;
    })(StringExt || (StringExt = {}));
  }
});

// ../../node_modules/@jupyterlab/codeeditor/node_modules/@lumino/collections/dist/index.es6.js
var LinkedList, Private2;
var init_index_es65 = __esm({
  "../../node_modules/@jupyterlab/codeeditor/node_modules/@lumino/collections/dist/index.es6.js"() {
    LinkedList = class {
      constructor() {
        this._first = null;
        this._last = null;
        this._size = 0;
      }
      /**
       * Whether the list is empty.
       *
       * #### Complexity
       * Constant.
       */
      get isEmpty() {
        return this._size === 0;
      }
      /**
       * The size of the list.
       *
       * #### Complexity
       * `O(1)`
       *
       * #### Notes
       * This is equivalent to `length`.
       */
      get size() {
        return this._size;
      }
      /**
       * The length of the list.
       *
       * #### Complexity
       * Constant.
       *
       * #### Notes
       * This is equivalent to `size`.
       *
       * This property is deprecated.
       */
      get length() {
        return this._size;
      }
      /**
       * The first value in the list.
       *
       * This is `undefined` if the list is empty.
       *
       * #### Complexity
       * Constant.
       */
      get first() {
        return this._first ? this._first.value : void 0;
      }
      /**
       * The last value in the list.
       *
       * This is `undefined` if the list is empty.
       *
       * #### Complexity
       * Constant.
       */
      get last() {
        return this._last ? this._last.value : void 0;
      }
      /**
       * The first node in the list.
       *
       * This is `null` if the list is empty.
       *
       * #### Complexity
       * Constant.
       */
      get firstNode() {
        return this._first;
      }
      /**
       * The last node in the list.
       *
       * This is `null` if the list is empty.
       *
       * #### Complexity
       * Constant.
       */
      get lastNode() {
        return this._last;
      }
      /**
       * Create an iterator over the values in the list.
       *
       * @returns A new iterator starting with the first value.
       *
       * #### Complexity
       * Constant.
       */
      *[Symbol.iterator]() {
        let node = this._first;
        while (node) {
          yield node.value;
          node = node.next;
        }
      }
      /**
       * Create a reverse iterator over the values in the list.
       *
       * @returns A new iterator starting with the last value.
       *
       * #### Complexity
       * Constant.
       */
      *retro() {
        let node = this._last;
        while (node) {
          yield node.value;
          node = node.prev;
        }
      }
      /**
       * Create an iterator over the nodes in the list.
       *
       * @returns A new iterator starting with the first node.
       *
       * #### Complexity
       * Constant.
       */
      *nodes() {
        let node = this._first;
        while (node) {
          yield node;
          node = node.next;
        }
      }
      /**
       * Create a reverse iterator over the nodes in the list.
       *
       * @returns A new iterator starting with the last node.
       *
       * #### Complexity
       * Constant.
       */
      *retroNodes() {
        let node = this._last;
        while (node) {
          yield node;
          node = node.prev;
        }
      }
      /**
       * Assign new values to the list, replacing all current values.
       *
       * @param values - The values to assign to the list.
       *
       * #### Complexity
       * Linear.
       */
      assign(values) {
        this.clear();
        for (const value of values) {
          this.addLast(value);
        }
      }
      /**
       * Add a value to the end of the list.
       *
       * @param value - The value to add to the end of the list.
       *
       * #### Complexity
       * Constant.
       *
       * #### Notes
       * This is equivalent to `addLast`.
       */
      push(value) {
        this.addLast(value);
      }
      /**
       * Remove and return the value at the end of the list.
       *
       * @returns The removed value, or `undefined` if the list is empty.
       *
       * #### Complexity
       * Constant.
       *
       * #### Notes
       * This is equivalent to `removeLast`.
       */
      pop() {
        return this.removeLast();
      }
      /**
       * Add a value to the beginning of the list.
       *
       * @param value - The value to add to the beginning of the list.
       *
       * #### Complexity
       * Constant.
       *
       * #### Notes
       * This is equivalent to `addFirst`.
       */
      shift(value) {
        this.addFirst(value);
      }
      /**
       * Remove and return the value at the beginning of the list.
       *
       * @returns The removed value, or `undefined` if the list is empty.
       *
       * #### Complexity
       * Constant.
       *
       * #### Notes
       * This is equivalent to `removeFirst`.
       */
      unshift() {
        return this.removeFirst();
      }
      /**
       * Add a value to the beginning of the list.
       *
       * @param value - The value to add to the beginning of the list.
       *
       * @returns The list node which holds the value.
       *
       * #### Complexity
       * Constant.
       */
      addFirst(value) {
        let node = new Private2.LinkedListNode(this, value);
        if (!this._first) {
          this._first = node;
          this._last = node;
        } else {
          node.next = this._first;
          this._first.prev = node;
          this._first = node;
        }
        this._size++;
        return node;
      }
      /**
       * Add a value to the end of the list.
       *
       * @param value - The value to add to the end of the list.
       *
       * @returns The list node which holds the value.
       *
       * #### Complexity
       * Constant.
       */
      addLast(value) {
        let node = new Private2.LinkedListNode(this, value);
        if (!this._last) {
          this._first = node;
          this._last = node;
        } else {
          node.prev = this._last;
          this._last.next = node;
          this._last = node;
        }
        this._size++;
        return node;
      }
      /**
       * Insert a value before a specific node in the list.
       *
       * @param value - The value to insert before the reference node.
       *
       * @param ref - The reference node of interest. If this is `null`,
       *   the value will be added to the beginning of the list.
       *
       * @returns The list node which holds the value.
       *
       * #### Notes
       * The reference node must be owned by the list.
       *
       * #### Complexity
       * Constant.
       */
      insertBefore(value, ref) {
        if (!ref || ref === this._first) {
          return this.addFirst(value);
        }
        if (!(ref instanceof Private2.LinkedListNode) || ref.list !== this) {
          throw new Error("Reference node is not owned by the list.");
        }
        let node = new Private2.LinkedListNode(this, value);
        let _ref = ref;
        let prev = _ref.prev;
        node.next = _ref;
        node.prev = prev;
        _ref.prev = node;
        prev.next = node;
        this._size++;
        return node;
      }
      /**
       * Insert a value after a specific node in the list.
       *
       * @param value - The value to insert after the reference node.
       *
       * @param ref - The reference node of interest. If this is `null`,
       *   the value will be added to the end of the list.
       *
       * @returns The list node which holds the value.
       *
       * #### Notes
       * The reference node must be owned by the list.
       *
       * #### Complexity
       * Constant.
       */
      insertAfter(value, ref) {
        if (!ref || ref === this._last) {
          return this.addLast(value);
        }
        if (!(ref instanceof Private2.LinkedListNode) || ref.list !== this) {
          throw new Error("Reference node is not owned by the list.");
        }
        let node = new Private2.LinkedListNode(this, value);
        let _ref = ref;
        let next = _ref.next;
        node.next = next;
        node.prev = _ref;
        _ref.next = node;
        next.prev = node;
        this._size++;
        return node;
      }
      /**
       * Remove and return the value at the beginning of the list.
       *
       * @returns The removed value, or `undefined` if the list is empty.
       *
       * #### Complexity
       * Constant.
       */
      removeFirst() {
        let node = this._first;
        if (!node) {
          return void 0;
        }
        if (node === this._last) {
          this._first = null;
          this._last = null;
        } else {
          this._first = node.next;
          this._first.prev = null;
        }
        node.list = null;
        node.next = null;
        node.prev = null;
        this._size--;
        return node.value;
      }
      /**
       * Remove and return the value at the end of the list.
       *
       * @returns The removed value, or `undefined` if the list is empty.
       *
       * #### Complexity
       * Constant.
       */
      removeLast() {
        let node = this._last;
        if (!node) {
          return void 0;
        }
        if (node === this._first) {
          this._first = null;
          this._last = null;
        } else {
          this._last = node.prev;
          this._last.next = null;
        }
        node.list = null;
        node.next = null;
        node.prev = null;
        this._size--;
        return node.value;
      }
      /**
       * Remove a specific node from the list.
       *
       * @param node - The node to remove from the list.
       *
       * #### Complexity
       * Constant.
       *
       * #### Notes
       * The node must be owned by the list.
       */
      removeNode(node) {
        if (!(node instanceof Private2.LinkedListNode) || node.list !== this) {
          throw new Error("Node is not owned by the list.");
        }
        let _node = node;
        if (_node === this._first && _node === this._last) {
          this._first = null;
          this._last = null;
        } else if (_node === this._first) {
          this._first = _node.next;
          this._first.prev = null;
        } else if (_node === this._last) {
          this._last = _node.prev;
          this._last.next = null;
        } else {
          _node.next.prev = _node.prev;
          _node.prev.next = _node.next;
        }
        _node.list = null;
        _node.next = null;
        _node.prev = null;
        this._size--;
      }
      /**
       * Remove all values from the list.
       *
       * #### Complexity
       * Linear.
       */
      clear() {
        let node = this._first;
        while (node) {
          let next = node.next;
          node.list = null;
          node.prev = null;
          node.next = null;
          node = next;
        }
        this._first = null;
        this._last = null;
        this._size = 0;
      }
    };
    (function(LinkedList2) {
      function from2(values) {
        let list = new LinkedList2();
        list.assign(values);
        return list;
      }
      LinkedList2.from = from2;
    })(LinkedList || (LinkedList = {}));
    (function(Private7) {
      class LinkedListNode {
        /**
         * Construct a new linked list node.
         *
         * @param list - The list which owns the node.
         *
         * @param value - The value for the link.
         */
        constructor(list, value) {
          this.list = null;
          this.next = null;
          this.prev = null;
          this.list = list;
          this.value = value;
        }
      }
      Private7.LinkedListNode = LinkedListNode;
    })(Private2 || (Private2 = {}));
  }
});

// ../../node_modules/@jupyterlab/codeeditor/node_modules/@lumino/messaging/dist/index.es6.js
var Message, MessageLoop;
var init_index_es66 = __esm({
  "../../node_modules/@jupyterlab/codeeditor/node_modules/@lumino/messaging/dist/index.es6.js"() {
    init_index_es64();
    init_index_es65();
    Message = class {
      /**
       * Construct a new message.
       *
       * @param type - The type of the message.
       */
      constructor(type) {
        this.type = type;
      }
      /**
       * Test whether the message is conflatable.
       *
       * #### Notes
       * Message conflation is an advanced topic. Most message types will
       * not make use of this feature.
       *
       * If a conflatable message is posted to a handler while another
       * conflatable message of the same `type` has already been posted
       * to the handler, the `conflate()` method of the existing message
       * will be invoked. If that method returns `true`, the new message
       * will not be enqueued. This allows messages to be compressed, so
       * that only a single instance of the message type is processed per
       * cycle, no matter how many times messages of that type are posted.
       *
       * Custom message types may reimplement this property.
       *
       * The default implementation is always `false`.
       */
      get isConflatable() {
        return false;
      }
      /**
       * Conflate this message with another message of the same `type`.
       *
       * @param other - A conflatable message of the same `type`.
       *
       * @returns `true` if the message was successfully conflated, or
       *   `false` otherwise.
       *
       * #### Notes
       * Message conflation is an advanced topic. Most message types will
       * not make use of this feature.
       *
       * This method is called automatically by the message loop when the
       * given message is posted to the handler paired with this message.
       * This message will already be enqueued and conflatable, and the
       * given message will have the same `type` and also be conflatable.
       *
       * This method should merge the state of the other message into this
       * message as needed so that when this message is finally delivered
       * to the handler, it receives the most up-to-date information.
       *
       * If this method returns `true`, it signals that the other message
       * was successfully conflated and that message will not be enqueued.
       *
       * If this method returns `false`, the other message will be enqueued
       * for normal delivery.
       *
       * Custom message types may reimplement this method.
       *
       * The default implementation always returns `false`.
       */
      conflate(other) {
        return false;
      }
    };
    (function(MessageLoop2) {
      let pending = null;
      const schedule = ((resolved) => (fn) => {
        let rejected = false;
        resolved.then(() => !rejected && fn());
        return () => {
          rejected = true;
        };
      })(Promise.resolve());
      function sendMessage(handler, msg) {
        let hooks = messageHooks.get(handler);
        if (!hooks || hooks.length === 0) {
          invokeHandler(handler, msg);
          return;
        }
        let passed = every2(retro(hooks), (hook) => {
          return hook ? invokeHook(hook, handler, msg) : true;
        });
        if (passed) {
          invokeHandler(handler, msg);
        }
      }
      MessageLoop2.sendMessage = sendMessage;
      function postMessage(handler, msg) {
        if (!msg.isConflatable) {
          enqueueMessage(handler, msg);
          return;
        }
        let conflated = some2(messageQueue, (posted) => {
          if (posted.handler !== handler) {
            return false;
          }
          if (!posted.msg) {
            return false;
          }
          if (posted.msg.type !== msg.type) {
            return false;
          }
          if (!posted.msg.isConflatable) {
            return false;
          }
          return posted.msg.conflate(msg);
        });
        if (!conflated) {
          enqueueMessage(handler, msg);
        }
      }
      MessageLoop2.postMessage = postMessage;
      function installMessageHook(handler, hook) {
        let hooks = messageHooks.get(handler);
        if (hooks && hooks.indexOf(hook) !== -1) {
          return;
        }
        if (!hooks) {
          messageHooks.set(handler, [hook]);
        } else {
          hooks.push(hook);
        }
      }
      MessageLoop2.installMessageHook = installMessageHook;
      function removeMessageHook(handler, hook) {
        let hooks = messageHooks.get(handler);
        if (!hooks) {
          return;
        }
        let i = hooks.indexOf(hook);
        if (i === -1) {
          return;
        }
        hooks[i] = null;
        scheduleCleanup(hooks);
      }
      MessageLoop2.removeMessageHook = removeMessageHook;
      function clearData(handler) {
        let hooks = messageHooks.get(handler);
        if (hooks && hooks.length > 0) {
          ArrayExt.fill(hooks, null);
          scheduleCleanup(hooks);
        }
        for (const posted of messageQueue) {
          if (posted.handler === handler) {
            posted.handler = null;
            posted.msg = null;
          }
        }
      }
      MessageLoop2.clearData = clearData;
      function flush() {
        if (flushGuard || pending === null) {
          return;
        }
        pending();
        pending = null;
        flushGuard = true;
        runMessageLoop();
        flushGuard = false;
      }
      MessageLoop2.flush = flush;
      function getExceptionHandler() {
        return exceptionHandler;
      }
      MessageLoop2.getExceptionHandler = getExceptionHandler;
      function setExceptionHandler(handler) {
        let old = exceptionHandler;
        exceptionHandler = handler;
        return old;
      }
      MessageLoop2.setExceptionHandler = setExceptionHandler;
      const messageQueue = new LinkedList();
      const messageHooks = /* @__PURE__ */ new WeakMap();
      const dirtySet = /* @__PURE__ */ new Set();
      let exceptionHandler = (err) => {
        console.error(err);
      };
      let flushGuard = false;
      function invokeHook(hook, handler, msg) {
        let result = true;
        try {
          if (typeof hook === "function") {
            result = hook(handler, msg);
          } else {
            result = hook.messageHook(handler, msg);
          }
        } catch (err) {
          exceptionHandler(err);
        }
        return result;
      }
      function invokeHandler(handler, msg) {
        try {
          handler.processMessage(msg);
        } catch (err) {
          exceptionHandler(err);
        }
      }
      function enqueueMessage(handler, msg) {
        messageQueue.addLast({ handler, msg });
        if (pending !== null) {
          return;
        }
        pending = schedule(runMessageLoop);
      }
      function runMessageLoop() {
        pending = null;
        if (messageQueue.isEmpty) {
          return;
        }
        let sentinel = { handler: null, msg: null };
        messageQueue.addLast(sentinel);
        while (true) {
          let posted = messageQueue.removeFirst();
          if (posted === sentinel) {
            return;
          }
          if (posted.handler && posted.msg) {
            sendMessage(posted.handler, posted.msg);
          }
        }
      }
      function scheduleCleanup(hooks) {
        if (dirtySet.size === 0) {
          schedule(cleanupDirtySet);
        }
        dirtySet.add(hooks);
      }
      function cleanupDirtySet() {
        dirtySet.forEach(cleanupHooks);
        dirtySet.clear();
      }
      function cleanupHooks(hooks) {
        ArrayExt.removeAllWhere(hooks, isNull);
      }
      function isNull(value) {
        return value === null;
      }
    })(MessageLoop || (MessageLoop = {}));
  }
});

// ../../node_modules/@jupyterlab/codeeditor/node_modules/@jupyterlab/observables/lib/observablemap.js
var ObservableMap, Private3;
var init_observablemap = __esm({
  "../../node_modules/@jupyterlab/codeeditor/node_modules/@jupyterlab/observables/lib/observablemap.js"() {
    init_index_es6();
    ObservableMap = class {
      /**
       * Construct a new observable map.
       */
      constructor(options = {}) {
        this._map = /* @__PURE__ */ new Map();
        this._changed = new Signal(this);
        this._isDisposed = false;
        this._itemCmp = options.itemCmp || Private3.itemCmp;
        if (options.values) {
          for (const key in options.values) {
            this._map.set(key, options.values[key]);
          }
        }
      }
      /**
       * The type of the Observable.
       */
      get type() {
        return "Map";
      }
      /**
       * A signal emitted when the map has changed.
       */
      get changed() {
        return this._changed;
      }
      /**
       * Whether this map has been disposed.
       */
      get isDisposed() {
        return this._isDisposed;
      }
      /**
       * The number of key-value pairs in the map.
       */
      get size() {
        return this._map.size;
      }
      /**
       * Set a key-value pair in the map
       *
       * @param key - The key to set.
       *
       * @param value - The value for the key.
       *
       * @returns the old value for the key, or undefined
       *   if that did not exist.
       *
       * @throws if the new value is undefined.
       *
       * #### Notes
       * This is a no-op if the value does not change.
       */
      set(key, value) {
        const oldVal = this._map.get(key);
        if (value === void 0) {
          throw Error("Cannot set an undefined value, use remove");
        }
        const itemCmp = this._itemCmp;
        if (oldVal !== void 0 && itemCmp(oldVal, value)) {
          return oldVal;
        }
        this._map.set(key, value);
        this._changed.emit({
          type: oldVal ? "change" : "add",
          key,
          oldValue: oldVal,
          newValue: value
        });
        return oldVal;
      }
      /**
       * Get a value for a given key.
       *
       * @param key - the key.
       *
       * @returns the value for that key.
       */
      get(key) {
        return this._map.get(key);
      }
      /**
       * Check whether the map has a key.
       *
       * @param key - the key to check.
       *
       * @returns `true` if the map has the key, `false` otherwise.
       */
      has(key) {
        return this._map.has(key);
      }
      /**
       * Get a list of the keys in the map.
       *
       * @returns - a list of keys.
       */
      keys() {
        const keyList = [];
        this._map.forEach((v, k) => {
          keyList.push(k);
        });
        return keyList;
      }
      /**
       * Get a list of the values in the map.
       *
       * @returns - a list of values.
       */
      values() {
        const valList = [];
        this._map.forEach((v, k) => {
          valList.push(v);
        });
        return valList;
      }
      /**
       * Remove a key from the map
       *
       * @param key - the key to remove.
       *
       * @returns the value of the given key,
       *   or undefined if that does not exist.
       *
       * #### Notes
       * This is a no-op if the value does not change.
       */
      delete(key) {
        const oldVal = this._map.get(key);
        const removed = this._map.delete(key);
        if (removed) {
          this._changed.emit({
            type: "remove",
            key,
            oldValue: oldVal,
            newValue: void 0
          });
        }
        return oldVal;
      }
      /**
       * Set the ObservableMap to an empty map.
       */
      clear() {
        const keyList = this.keys();
        for (let i = 0; i < keyList.length; i++) {
          this.delete(keyList[i]);
        }
      }
      /**
       * Dispose of the resources held by the map.
       */
      dispose() {
        if (this.isDisposed) {
          return;
        }
        this._isDisposed = true;
        Signal.clearData(this);
        this._map.clear();
      }
    };
    (function(Private7) {
      function itemCmp(first, second) {
        return first === second;
      }
      Private7.itemCmp = itemCmp;
    })(Private3 || (Private3 = {}));
  }
});

// ../../node_modules/@jupyterlab/codeeditor/node_modules/@jupyterlab/observables/lib/observablejson.js
var import_coreutils4, ObservableJSON;
var init_observablejson = __esm({
  "../../node_modules/@jupyterlab/codeeditor/node_modules/@jupyterlab/observables/lib/observablejson.js"() {
    import_coreutils4 = __toESM(require_dist());
    init_index_es66();
    init_observablemap();
    ObservableJSON = class extends ObservableMap {
      /**
       * Construct a new observable JSON object.
       */
      constructor(options = {}) {
        super({
          itemCmp: import_coreutils4.JSONExt.deepEqual,
          values: options.values
        });
      }
      /**
       * Serialize the model to JSON.
       */
      toJSON() {
        const out = /* @__PURE__ */ Object.create(null);
        const keys2 = this.keys();
        for (const key of keys2) {
          const value = this.get(key);
          if (value !== void 0) {
            out[key] = import_coreutils4.JSONExt.deepCopy(value);
          }
        }
        return out;
      }
    };
    (function(ObservableJSON2) {
      class ChangeMessage extends Message {
        /**
         * Create a new metadata changed message.
         */
        constructor(type, args2) {
          super(type);
          this.args = args2;
        }
      }
      ObservableJSON2.ChangeMessage = ChangeMessage;
    })(ObservableJSON || (ObservableJSON = {}));
  }
});

// ../../node_modules/@jupyterlab/codeeditor/node_modules/@jupyterlab/observables/lib/observablestring.js
var init_observablestring = __esm({
  "../../node_modules/@jupyterlab/codeeditor/node_modules/@jupyterlab/observables/lib/observablestring.js"() {
    init_index_es6();
  }
});

// ../../node_modules/@jupyterlab/codeeditor/node_modules/@jupyterlab/observables/lib/observablelist.js
var ObservableList, Private4;
var init_observablelist = __esm({
  "../../node_modules/@jupyterlab/codeeditor/node_modules/@jupyterlab/observables/lib/observablelist.js"() {
    init_index_es64();
    init_index_es6();
    ObservableList = class {
      /**
       * Construct a new observable map.
       */
      constructor(options = {}) {
        this._array = [];
        this._isDisposed = false;
        this._changed = new Signal(this);
        if (options.values) {
          for (const value of options.values) {
            this._array.push(value);
          }
        }
        this._itemCmp = options.itemCmp || Private4.itemCmp;
      }
      /**
       * The type of this object.
       */
      get type() {
        return "List";
      }
      /**
       * A signal emitted when the list has changed.
       */
      get changed() {
        return this._changed;
      }
      /**
       * The length of the list.
       */
      get length() {
        return this._array.length;
      }
      /**
       * Test whether the list has been disposed.
       */
      get isDisposed() {
        return this._isDisposed;
      }
      /**
       * Dispose of the resources held by the list.
       */
      dispose() {
        if (this._isDisposed) {
          return;
        }
        this._isDisposed = true;
        Signal.clearData(this);
        this.clear();
      }
      /**
       * Create an iterator over the values in the list.
       *
       * @returns A new iterator starting at the front of the list.
       *
       * #### Complexity
       * Constant.
       *
       * #### Iterator Validity
       * No changes.
       */
      [Symbol.iterator]() {
        return this._array[Symbol.iterator]();
      }
      /**
       * Get the value at the specified index.
       *
       * @param index - The positive integer index of interest.
       *
       * @returns The value at the specified index.
       *
       * #### Undefined Behavior
       * An `index` which is non-integral or out of range.
       */
      get(index) {
        return this._array[index];
      }
      /**
       * Set the value at the specified index.
       *
       * @param index - The positive integer index of interest.
       *
       * @param value - The value to set at the specified index.
       *
       * #### Complexity
       * Constant.
       *
       * #### Iterator Validity
       * No changes.
       *
       * #### Undefined Behavior
       * An `index` which is non-integral or out of range.
       */
      set(index, value) {
        const oldValue = this._array[index];
        if (value === void 0) {
          throw new Error("Cannot set an undefined item");
        }
        const itemCmp = this._itemCmp;
        if (itemCmp(oldValue, value)) {
          return;
        }
        this._array[index] = value;
        this._changed.emit({
          type: "set",
          oldIndex: index,
          newIndex: index,
          oldValues: [oldValue],
          newValues: [value]
        });
      }
      /**
       * Add a value to the end of the list.
       *
       * @param value - The value to add to the end of the list.
       *
       * @returns The new length of the list.
       *
       * #### Complexity
       * Constant.
       *
       * #### Notes
       * By convention, the oldIndex is set to -1 to indicate
       * an push operation.
       *
       * #### Iterator Validity
       * No changes.
       */
      push(value) {
        const num = this._array.push(value);
        this._changed.emit({
          type: "add",
          oldIndex: -1,
          newIndex: this.length - 1,
          oldValues: [],
          newValues: [value]
        });
        return num;
      }
      /**
       * Insert a value into the list at a specific index.
       *
       * @param index - The index at which to insert the value.
       *
       * @param value - The value to set at the specified index.
       *
       * #### Complexity
       * Linear.
       *
       * #### Iterator Validity
       * No changes.
       *
       * #### Notes
       * The `index` will be clamped to the bounds of the list.
       *
       * By convention, the oldIndex is set to -2 to indicate
       * an insert operation.
       *
       * The value -2 as oldIndex can be used to distinguish from the push
       * method which will use a value -1.
       *
       * #### Undefined Behavior
       * An `index` which is non-integral.
       */
      insert(index, value) {
        if (index === this._array.length) {
          this._array.push(value);
        } else {
          ArrayExt.insert(this._array, index, value);
        }
        this._changed.emit({
          type: "add",
          oldIndex: -2,
          newIndex: index,
          oldValues: [],
          newValues: [value]
        });
      }
      /**
       * Remove the first occurrence of a value from the list.
       *
       * @param value - The value of interest.
       *
       * @returns The index of the removed value, or `-1` if the value
       *   is not contained in the list.
       *
       * #### Complexity
       * Linear.
       *
       * #### Iterator Validity
       * Iterators pointing at the removed value and beyond are invalidated.
       */
      removeValue(value) {
        const itemCmp = this._itemCmp;
        const index = ArrayExt.findFirstIndex(this._array, (item) => {
          return itemCmp(item, value);
        });
        this.remove(index);
        return index;
      }
      /**
       * Remove and return the value at a specific index.
       *
       * @param index - The index of the value of interest.
       *
       * @returns The value at the specified index, or `undefined` if the
       *   index is out of range.
       *
       * #### Complexity
       * Constant.
       *
       * #### Iterator Validity
       * Iterators pointing at the removed value and beyond are invalidated.
       *
       * #### Undefined Behavior
       * An `index` which is non-integral.
       */
      remove(index) {
        const value = ArrayExt.removeAt(this._array, index);
        if (value === void 0) {
          return;
        }
        this._changed.emit({
          type: "remove",
          oldIndex: index,
          newIndex: -1,
          newValues: [],
          oldValues: [value]
        });
        return value;
      }
      /**
       * Remove all values from the list.
       *
       * #### Complexity
       * Linear.
       *
       * #### Iterator Validity
       * All current iterators are invalidated.
       */
      clear() {
        const copy2 = this._array.slice();
        this._array.length = 0;
        this._changed.emit({
          type: "remove",
          oldIndex: 0,
          newIndex: 0,
          newValues: [],
          oldValues: copy2
        });
      }
      /**
       * Move a value from one index to another.
       *
       * @param fromIndex - The index of the element to move.
       *
       * @param toIndex - The index to move the element to.
       *
       * #### Complexity
       * Constant.
       *
       * #### Iterator Validity
       * Iterators pointing at the lesser of the `fromIndex` and the `toIndex`
       * and beyond are invalidated.
       *
       * #### Undefined Behavior
       * A `fromIndex` or a `toIndex` which is non-integral.
       */
      move(fromIndex, toIndex) {
        if (this.length <= 1 || fromIndex === toIndex) {
          return;
        }
        const values = [this._array[fromIndex]];
        ArrayExt.move(this._array, fromIndex, toIndex);
        this._changed.emit({
          type: "move",
          oldIndex: fromIndex,
          newIndex: toIndex,
          oldValues: values,
          newValues: values
        });
      }
      /**
       * Push a set of values to the back of the list.
       *
       * @param values - An iterable set of values to add.
       *
       * @returns The new length of the list.
       *
       * #### Complexity
       * Linear.
       *
       * #### Notes
       * By convention, the oldIndex is set to -1 to indicate
       * an push operation.
       *
       * #### Iterator Validity
       * No changes.
       */
      pushAll(values) {
        const newIndex = this.length;
        for (const value of values) {
          this._array.push(value);
        }
        this._changed.emit({
          type: "add",
          oldIndex: -1,
          newIndex,
          oldValues: [],
          newValues: Array.from(values)
        });
        return this.length;
      }
      /**
       * Insert a set of items into the list at the specified index.
       *
       * @param index - The index at which to insert the values.
       *
       * @param values - The values to insert at the specified index.
       *
       * #### Complexity.
       * Linear.
       *
       * #### Iterator Validity
       * No changes.
       *
       * #### Notes
       * The `index` will be clamped to the bounds of the list.
       * By convention, the oldIndex is set to -2 to indicate
       * an insert operation.
       *
       * #### Undefined Behavior.
       * An `index` which is non-integral.
       */
      insertAll(index, values) {
        const newIndex = index;
        for (const value of values) {
          ArrayExt.insert(this._array, index++, value);
        }
        this._changed.emit({
          type: "add",
          oldIndex: -2,
          newIndex,
          oldValues: [],
          newValues: Array.from(values)
        });
      }
      /**
       * Remove a range of items from the list.
       *
       * @param startIndex - The start index of the range to remove (inclusive).
       *
       * @param endIndex - The end index of the range to remove (exclusive).
       *
       * @returns The new length of the list.
       *
       * #### Complexity
       * Linear.
       *
       * #### Iterator Validity
       * Iterators pointing to the first removed value and beyond are invalid.
       *
       * #### Undefined Behavior
       * A `startIndex` or `endIndex` which is non-integral.
       */
      removeRange(startIndex, endIndex) {
        const oldValues = this._array.slice(startIndex, endIndex);
        for (let i = startIndex; i < endIndex; i++) {
          ArrayExt.removeAt(this._array, startIndex);
        }
        this._changed.emit({
          type: "remove",
          oldIndex: startIndex,
          newIndex: -1,
          oldValues,
          newValues: []
        });
        return this.length;
      }
    };
    (function(Private7) {
      function itemCmp(first, second) {
        return first === second;
      }
      Private7.itemCmp = itemCmp;
    })(Private4 || (Private4 = {}));
  }
});

// ../../node_modules/@jupyterlab/codeeditor/node_modules/@jupyterlab/observables/lib/undoablelist.js
var ObservableUndoableList;
var init_undoablelist = __esm({
  "../../node_modules/@jupyterlab/codeeditor/node_modules/@jupyterlab/observables/lib/undoablelist.js"() {
    init_observablelist();
    ObservableUndoableList = class extends ObservableList {
      /**
       * Construct a new undoable observable list.
       */
      constructor(serializer) {
        super();
        this._inCompound = false;
        this._isUndoable = true;
        this._madeCompoundChange = false;
        this._index = -1;
        this._stack = [];
        this._serializer = serializer;
        this.changed.connect(this._onListChanged, this);
      }
      /**
       * Whether the object can redo changes.
       */
      get canRedo() {
        return this._index < this._stack.length - 1;
      }
      /**
       * Whether the object can undo changes.
       */
      get canUndo() {
        return this._index >= 0;
      }
      /**
       * Begin a compound operation.
       *
       * @param isUndoAble - Whether the operation is undoable.
       *   The default is `true`.
       */
      beginCompoundOperation(isUndoAble) {
        this._inCompound = true;
        this._isUndoable = isUndoAble !== false;
        this._madeCompoundChange = false;
      }
      /**
       * End a compound operation.
       */
      endCompoundOperation() {
        this._inCompound = false;
        this._isUndoable = true;
        if (this._madeCompoundChange) {
          this._index++;
        }
      }
      /**
       * Undo an operation.
       */
      undo() {
        if (!this.canUndo) {
          return;
        }
        const changes = this._stack[this._index];
        this._isUndoable = false;
        for (const change of changes.reverse()) {
          this._undoChange(change);
        }
        this._isUndoable = true;
        this._index--;
      }
      /**
       * Redo an operation.
       */
      redo() {
        if (!this.canRedo) {
          return;
        }
        this._index++;
        const changes = this._stack[this._index];
        this._isUndoable = false;
        for (const change of changes) {
          this._redoChange(change);
        }
        this._isUndoable = true;
      }
      /**
       * Clear the change stack.
       */
      clearUndo() {
        this._index = -1;
        this._stack = [];
      }
      /**
       * Handle a change in the list.
       */
      _onListChanged(list, change) {
        if (this.isDisposed || !this._isUndoable) {
          return;
        }
        if (!this._inCompound || !this._madeCompoundChange) {
          this._stack = this._stack.slice(0, this._index + 1);
        }
        const evt = this._copyChange(change);
        if (this._stack[this._index + 1]) {
          this._stack[this._index + 1].push(evt);
        } else {
          this._stack.push([evt]);
        }
        if (!this._inCompound) {
          this._index++;
        } else {
          this._madeCompoundChange = true;
        }
      }
      /**
       * Undo a change event.
       */
      _undoChange(change) {
        let index = 0;
        const serializer = this._serializer;
        switch (change.type) {
          case "add":
            for (let length3 = change.newValues.length; length3 > 0; length3--) {
              this.remove(change.newIndex);
            }
            break;
          case "set":
            index = change.oldIndex;
            for (const value of change.oldValues) {
              this.set(index++, serializer.fromJSON(value));
            }
            break;
          case "remove":
            index = change.oldIndex;
            for (const value of change.oldValues) {
              this.insert(index++, serializer.fromJSON(value));
            }
            break;
          case "move":
            this.move(change.newIndex, change.oldIndex);
            break;
          default:
            return;
        }
      }
      /**
       * Redo a change event.
       */
      _redoChange(change) {
        let index = 0;
        const serializer = this._serializer;
        switch (change.type) {
          case "add":
            index = change.newIndex;
            for (const value of change.newValues) {
              this.insert(index++, serializer.fromJSON(value));
            }
            break;
          case "set":
            index = change.newIndex;
            for (const value of change.newValues) {
              this.set(change.newIndex++, serializer.fromJSON(value));
            }
            break;
          case "remove":
            for (let length3 = change.oldValues.length; length3 > 0; length3--) {
              this.remove(change.oldIndex);
            }
            break;
          case "move":
            this.move(change.oldIndex, change.newIndex);
            break;
          default:
            return;
        }
      }
      /**
       * Copy a change as JSON.
       */
      _copyChange(change) {
        const oldValues = [];
        for (const value of change.oldValues) {
          oldValues.push(this._serializer.toJSON(value));
        }
        const newValues = [];
        for (const value of change.newValues) {
          newValues.push(this._serializer.toJSON(value));
        }
        return {
          type: change.type,
          oldIndex: change.oldIndex,
          newIndex: change.newIndex,
          oldValues,
          newValues
        };
      }
    };
    (function(ObservableUndoableList2) {
      class IdentitySerializer {
        /**
         * Identity serialize.
         */
        toJSON(value) {
          return value;
        }
        /**
         * Identity deserialize.
         */
        fromJSON(value) {
          return value;
        }
      }
      ObservableUndoableList2.IdentitySerializer = IdentitySerializer;
    })(ObservableUndoableList || (ObservableUndoableList = {}));
  }
});

// ../../node_modules/@jupyterlab/codeeditor/node_modules/@jupyterlab/observables/lib/modeldb.js
var import_coreutils5, ObservableValue;
var init_modeldb = __esm({
  "../../node_modules/@jupyterlab/codeeditor/node_modules/@jupyterlab/observables/lib/modeldb.js"() {
    import_coreutils5 = __toESM(require_dist());
    init_index_es62();
    init_index_es6();
    ObservableValue = class {
      /**
       * Constructor for the value.
       *
       * @param initialValue: the starting value for the `ObservableValue`.
       */
      constructor(initialValue = null) {
        this._value = null;
        this._changed = new Signal(this);
        this._isDisposed = false;
        this._value = initialValue;
      }
      /**
       * The observable type.
       */
      get type() {
        return "Value";
      }
      /**
       * Whether the value has been disposed.
       */
      get isDisposed() {
        return this._isDisposed;
      }
      /**
       * The changed signal.
       */
      get changed() {
        return this._changed;
      }
      /**
       * Get the current value, or `undefined` if it has not been set.
       */
      get() {
        return this._value;
      }
      /**
       * Set the current value.
       */
      set(value) {
        const oldValue = this._value;
        if (import_coreutils5.JSONExt.deepEqual(oldValue, value)) {
          return;
        }
        this._value = value;
        this._changed.emit({
          oldValue,
          newValue: value
        });
      }
      /**
       * Dispose of the resources held by the value.
       */
      dispose() {
        if (this._isDisposed) {
          return;
        }
        this._isDisposed = true;
        Signal.clearData(this);
        this._value = null;
      }
    };
    (function(ObservableValue2) {
      class IChangedArgs {
      }
      ObservableValue2.IChangedArgs = IChangedArgs;
    })(ObservableValue || (ObservableValue = {}));
  }
});

// ../../node_modules/@jupyterlab/codeeditor/node_modules/@jupyterlab/observables/lib/index.js
var init_lib6 = __esm({
  "../../node_modules/@jupyterlab/codeeditor/node_modules/@jupyterlab/observables/lib/index.js"() {
    init_modeldb();
    init_observablejson();
    init_observablelist();
    init_observablemap();
    init_observablestring();
    init_undoablelist();
  }
});

// ../../node_modules/@jupyterlab/codeeditor/lib/mimetype.js
var IEditorMimeTypeService;
var init_mimetype = __esm({
  "../../node_modules/@jupyterlab/codeeditor/lib/mimetype.js"() {
    (function(IEditorMimeTypeService2) {
      IEditorMimeTypeService2.defaultMimeType = "text/plain";
    })(IEditorMimeTypeService || (IEditorMimeTypeService = {}));
  }
});

// ../../node_modules/@jupyterlab/codeeditor/lib/editor.js
var CodeEditor;
var init_editor = __esm({
  "../../node_modules/@jupyterlab/codeeditor/lib/editor.js"() {
    init_lib5();
    init_lib6();
    init_index_es6();
    init_mimetype();
    (function(CodeEditor2) {
      class Model {
        /**
         * Construct a new Model.
         */
        constructor(options = {}) {
          var _a, _b;
          this.standaloneModel = false;
          this._isDisposed = false;
          this._selections = new ObservableMap();
          this._mimeType = IEditorMimeTypeService.defaultMimeType;
          this._mimeTypeChanged = new Signal(this);
          this.standaloneModel = typeof options.sharedModel === "undefined";
          this.sharedModel = (_a = options.sharedModel) !== null && _a !== void 0 ? _a : new YFile();
          this._mimeType = (_b = options.mimeType) !== null && _b !== void 0 ? _b : IEditorMimeTypeService.defaultMimeType;
        }
        /**
         * A signal emitted when a mimetype changes.
         */
        get mimeTypeChanged() {
          return this._mimeTypeChanged;
        }
        /**
         * Get the selections for the model.
         */
        get selections() {
          return this._selections;
        }
        /**
         * A mime type of the model.
         */
        get mimeType() {
          return this._mimeType;
        }
        set mimeType(newValue) {
          const oldValue = this.mimeType;
          if (oldValue === newValue) {
            return;
          }
          this._mimeType = newValue;
          this._mimeTypeChanged.emit({
            name: "mimeType",
            oldValue,
            newValue
          });
        }
        /**
         * Whether the model is disposed.
         */
        get isDisposed() {
          return this._isDisposed;
        }
        /**
         * Dispose of the resources used by the model.
         */
        dispose() {
          if (this._isDisposed) {
            return;
          }
          this._isDisposed = true;
          this._selections.dispose();
          if (this.standaloneModel) {
            this.sharedModel.dispose();
          }
          Signal.clearData(this);
        }
      }
      CodeEditor2.Model = Model;
    })(CodeEditor || (CodeEditor = {}));
  }
});

// ../../node_modules/@jupyterlab/codeeditor/lib/factory.js
var init_factory = __esm({
  "../../node_modules/@jupyterlab/codeeditor/lib/factory.js"() {
  }
});

// ../../node_modules/@jupyterlab/codeeditor/lib/jsoneditor.js
var import_coreutils6;
var init_jsoneditor = __esm({
  "../../node_modules/@jupyterlab/codeeditor/lib/jsoneditor.js"() {
    init_lib();
    import_coreutils6 = __toESM(require_dist());
    init_index_es63();
  }
});

// ../../node_modules/@jupyterlab/codeeditor/lib/lineCol.js
function LineColComponent(props) {
  const translator = props.translator || nullTranslator;
  const trans = translator.load("jupyterlab");
  const keydownHandler = (event) => {
    if (event.key === "Enter" || event.key === "Spacebar" || event.key === " ") {
      event.preventDefault();
      event.stopPropagation();
      props.handleClick();
    } else {
      return;
    }
  };
  return import_react.default.createElement(TextItem, { onClick: props.handleClick, source: trans.__("Ln %1, Col %2", props.line, props.column), title: trans.__("Go to line number\u2026"), tabIndex: 0, onKeyDown: keydownHandler });
}
var import_react, LineFormComponent, LineCol;
var init_lineCol = __esm({
  "../../node_modules/@jupyterlab/codeeditor/lib/lineCol.js"() {
    init_lib3();
    init_lib();
    init_lib2();
    import_react = __toESM(require_react());
    init_lib4();
    LineFormComponent = class extends import_react.default.Component {
      /**
       * Construct a new LineFormComponent.
       */
      constructor(props) {
        super(props);
        this._handleChange = (event) => {
          this.setState({ value: event.currentTarget.value });
        };
        this._handleSubmit = (event) => {
          event.preventDefault();
          const value = parseInt(this._textInput.value, 10);
          if (!isNaN(value) && isFinite(value) && 1 <= value && value <= this.props.maxLine) {
            this.props.handleSubmit(value);
          }
          return false;
        };
        this._handleFocus = () => {
          this.setState({ hasFocus: true });
        };
        this._handleBlur = () => {
          this.setState({ hasFocus: false });
        };
        this._textInput = null;
        this.translator = props.translator || nullTranslator;
        this._trans = this.translator.load("jupyterlab");
        this.state = {
          value: "",
          hasFocus: false,
          textInputId: DOMUtils.createDomID() + "-line-number-input"
        };
      }
      /**
       * Focus the element on mount.
       */
      componentDidMount() {
        this._textInput.focus();
      }
      /**
       * Render the LineFormComponent.
       */
      render() {
        return import_react.default.createElement(
          "div",
          { className: "jp-lineFormSearch" },
          import_react.default.createElement(
            "form",
            { name: "lineColumnForm", onSubmit: this._handleSubmit, noValidate: true },
            import_react.default.createElement(
              "div",
              { className: classes("jp-lineFormWrapper", "lm-lineForm-wrapper", this.state.hasFocus ? "jp-lineFormWrapperFocusWithin" : void 0) },
              import_react.default.createElement("input", { type: "text", id: this.state.textInputId, className: "jp-lineFormInput", onChange: this._handleChange, onFocus: this._handleFocus, onBlur: this._handleBlur, value: this.state.value, ref: (input) => {
                this._textInput = input;
              } }),
              import_react.default.createElement(
                "div",
                { className: "jp-baseLineForm jp-lineFormButtonContainer" },
                import_react.default.createElement(lineFormIcon.react, { className: "jp-baseLineForm jp-lineFormButtonIcon", elementPosition: "center" }),
                import_react.default.createElement("input", { type: "submit", className: "jp-baseLineForm jp-lineFormButton", value: "" })
              )
            ),
            import_react.default.createElement("label", { className: "jp-lineFormCaption", htmlFor: this.state.textInputId }, this._trans.__("Go to line number between 1 and %1", this.props.maxLine))
          )
        );
      }
    };
    LineCol = class extends VDomRenderer {
      /**
       * Construct a new LineCol status item.
       */
      constructor(translator) {
        super(new LineCol.Model());
        this._popup = null;
        this.addClass("jp-mod-highlighted");
        this.translator = translator || nullTranslator;
      }
      /**
       * Render the status item.
       */
      render() {
        if (this.model === null) {
          return null;
        } else {
          return import_react.default.createElement(LineColComponent, { line: this.model.line, column: this.model.column, translator: this.translator, handleClick: () => this._handleClick() });
        }
      }
      /**
       * A click handler for the widget.
       */
      _handleClick() {
        if (this._popup) {
          this._popup.dispose();
        }
        const body = ReactWidget.create(import_react.default.createElement(LineFormComponent, { handleSubmit: (val) => this._handleSubmit(val), currentLine: this.model.line, maxLine: this.model.editor.lineCount, translator: this.translator }));
        this._popup = showPopup({
          body,
          anchor: this,
          align: "right"
        });
      }
      /**
       * Handle submission for the widget.
       */
      _handleSubmit(value) {
        this.model.editor.setCursorPosition({ line: value - 1, column: 0 });
        this._popup.dispose();
        this.model.editor.focus();
      }
    };
    (function(LineCol2) {
      class Model extends VDomModel {
        constructor() {
          super(...arguments);
          this._onSelectionChanged = () => {
            const oldState = this._getAllState();
            const pos = this.editor.getCursorPosition();
            this._line = pos.line + 1;
            this._column = pos.column + 1;
            this._triggerChange(oldState, this._getAllState());
          };
          this._line = 1;
          this._column = 1;
          this._editor = null;
        }
        /**
         * The current editor of the model.
         */
        get editor() {
          return this._editor;
        }
        set editor(editor) {
          var _a;
          const oldEditor = this._editor;
          if ((_a = oldEditor === null || oldEditor === void 0 ? void 0 : oldEditor.model) === null || _a === void 0 ? void 0 : _a.selections) {
            oldEditor.model.selections.changed.disconnect(this._onSelectionChanged);
          }
          const oldState = this._getAllState();
          this._editor = editor;
          if (!this._editor) {
            this._column = 1;
            this._line = 1;
          } else {
            this._editor.model.selections.changed.connect(this._onSelectionChanged);
            const pos = this._editor.getCursorPosition();
            this._column = pos.column + 1;
            this._line = pos.line + 1;
          }
          this._triggerChange(oldState, this._getAllState());
        }
        /**
         * The current line of the model.
         */
        get line() {
          return this._line;
        }
        /**
         * The current column of the model.
         */
        get column() {
          return this._column;
        }
        _getAllState() {
          return [this._line, this._column];
        }
        _triggerChange(oldState, newState) {
          if (oldState[0] !== newState[0] || oldState[1] !== newState[1]) {
            this.stateChanged.emit(void 0);
          }
        }
      }
      LineCol2.Model = Model;
    })(LineCol || (LineCol = {}));
  }
});

// ../../node_modules/@jupyterlab/codeeditor/lib/tokens.js
var import_coreutils7, COMPLETER_ENABLED_CLASS, COMPLETER_ACTIVE_CLASS, IEditorServices, IPositionModel;
var init_tokens = __esm({
  "../../node_modules/@jupyterlab/codeeditor/lib/tokens.js"() {
    import_coreutils7 = __toESM(require_dist());
    COMPLETER_ENABLED_CLASS = "jp-mod-completer-enabled";
    COMPLETER_ACTIVE_CLASS = "jp-mod-completer-active";
    IEditorServices = new import_coreutils7.Token("@jupyterlab/codeeditor:IEditorServices", `A service for the text editor provider
  for the application. Use this to create new text editors and host them in your
  UI elements.`);
    IPositionModel = new import_coreutils7.Token("@jupyterlab/codeeditor:IPositionModel", `A service to handle an code editor cursor position.`);
  }
});

// ../../node_modules/@jupyterlab/codeeditor/lib/widget.js
var Private5;
var init_widget = __esm({
  "../../node_modules/@jupyterlab/codeeditor/lib/widget.js"() {
    init_index_es63();
    (function(Private7) {
      function findTextData(mime) {
        const types = mime.types();
        const textType = types.find((t) => t.indexOf("text") === 0);
        if (textType === void 0) {
          return void 0;
        }
        return mime.getData(textType);
      }
      Private7.findTextData = findTextData;
    })(Private5 || (Private5 = {}));
  }
});

// ../../node_modules/@jupyterlab/codeeditor/lib/viewer.js
var init_viewer = __esm({
  "../../node_modules/@jupyterlab/codeeditor/lib/viewer.js"() {
    init_index_es63();
  }
});

// ../../node_modules/@jupyterlab/codeeditor/lib/index.js
var init_lib7 = __esm({
  "../../node_modules/@jupyterlab/codeeditor/lib/index.js"() {
    init_editor();
    init_factory();
    init_jsoneditor();
    init_lineCol();
    init_mimetype();
    init_tokens();
    init_viewer();
    init_widget();
  }
});

// ../../node_modules/@jupyterlab/codemirror/lib/commands.js
var CODE_RUNNER_SELECTOR, TOOLTIP_OPENER_SELECTOR, StateCommands;
var init_commands = __esm({
  "../../node_modules/@jupyterlab/codemirror/lib/commands.js"() {
    init_dist8();
    init_lib7();
    CODE_RUNNER_SELECTOR = "[data-jp-code-runner]";
    TOOLTIP_OPENER_SELECTOR = ".jp-CodeMirrorEditor:not(.jp-mod-has-primary-selection):not(.jp-mod-in-leading-whitespace):not(.jp-mod-completer-active)";
    (function(StateCommands2) {
      function indentMoreOrInsertTab(target) {
        var _a;
        if ((_a = target.dom.parentElement) === null || _a === void 0 ? void 0 : _a.classList.contains(COMPLETER_ENABLED_CLASS)) {
          return false;
        }
        const arg = { state: target.state, dispatch: target.dispatch };
        const from2 = target.state.selection.main.from;
        const to = target.state.selection.main.to;
        if (from2 != to) {
          return indentMore(arg);
        }
        const line = target.state.doc.lineAt(from2);
        const before = target.state.doc.slice(line.from, from2).toString();
        if (/^\s*$/.test(before)) {
          return indentMore(arg);
        } else {
          return insertTab(arg);
        }
      }
      StateCommands2.indentMoreOrInsertTab = indentMoreOrInsertTab;
      function completerOrInsertNewLine(target) {
        var _a;
        if ((_a = target.dom.parentElement) === null || _a === void 0 ? void 0 : _a.classList.contains(COMPLETER_ACTIVE_CLASS)) {
          return true;
        }
        const arg = { state: target.state, dispatch: target.dispatch };
        return insertNewlineAndIndent(arg);
      }
      StateCommands2.completerOrInsertNewLine = completerOrInsertNewLine;
      function preventNewLineOnRun(target) {
        if (target.dom.closest(CODE_RUNNER_SELECTOR)) {
          return true;
        }
        return false;
      }
      StateCommands2.preventNewLineOnRun = preventNewLineOnRun;
      function dedentIfNotLaunchingTooltip(target) {
        if (target.dom.closest(TOOLTIP_OPENER_SELECTOR)) {
          return true;
        }
        return indentLess(target);
      }
      StateCommands2.dedentIfNotLaunchingTooltip = dedentIfNotLaunchingTooltip;
    })(StateCommands || (StateCommands = {}));
  }
});

// ../../node_modules/@jupyterlab/codemirror/lib/extensions/customStyle.js
function setEditorStyle(view) {
  const { fontFamily, fontSize, lineHeight } = view.state.facet(customThemeConfig);
  let style = "";
  if (fontSize) {
    style += `font-size: ${fontSize}px !important;`;
  }
  if (fontFamily) {
    style += `font-family: ${fontFamily} !important;`;
  }
  if (lineHeight) {
    style += `line-height: ${lineHeight.toString()} !important`;
  }
  return { style };
}
function customTheme(config) {
  return [
    customThemeConfig.of(config),
    EditorView.editorAttributes.of(setEditorStyle)
  ];
}
var customThemeConfig;
var init_customStyle = __esm({
  "../../node_modules/@jupyterlab/codemirror/lib/extensions/customStyle.js"() {
    init_dist();
    init_dist2();
    customThemeConfig = Facet.define({
      combine(configs) {
        return combineConfig(configs, {
          fontFamily: null,
          fontSize: null,
          lineHeight: null
        }, {
          fontFamily: (a, b) => a !== null && a !== void 0 ? a : b,
          fontSize: (a, b) => a !== null && a !== void 0 ? a : b,
          lineHeight: (a, b) => a !== null && a !== void 0 ? a : b
        });
      }
    });
  }
});

// ../../node_modules/@jupyterlab/codemirror/lib/extensions/ipython-md.js
var INLINE_MATH_DOLLAR, INLINE_MATH_BRACKET, BLOCK_MATH_DOLLAR, BLOCK_MATH_BRACKET, DELIMITER_LENGTH, DELIMITERS;
var init_ipython_md = __esm({
  "../../node_modules/@jupyterlab/codemirror/lib/extensions/ipython-md.js"() {
    init_dist3();
    init_dist4();
    INLINE_MATH_DOLLAR = "InlineMathDollar";
    INLINE_MATH_BRACKET = "InlineMathBracket";
    BLOCK_MATH_DOLLAR = "BlockMathDollar";
    BLOCK_MATH_BRACKET = "BlockMathBracket";
    DELIMITER_LENGTH = {
      [INLINE_MATH_DOLLAR]: 1,
      [INLINE_MATH_BRACKET]: 3,
      [BLOCK_MATH_DOLLAR]: 2,
      [BLOCK_MATH_BRACKET]: 3
    };
    DELIMITERS = Object.keys(DELIMITER_LENGTH).reduce((agg, name2) => {
      agg[name2] = { mark: `${name2}Mark`, resolve: name2 };
      return agg;
    }, {});
  }
});

// ../../node_modules/@jupyterlab/codemirror/lib/extensions/rulers.js
function rulers(value) {
  return [baseTheme, rulerConfig.of(value), plugin];
}
var import_coreutils8, RULERS_CLASSNAME, baseTheme, rulerConfig, plugin;
var init_rulers = __esm({
  "../../node_modules/@jupyterlab/codemirror/lib/extensions/rulers.js"() {
    init_dist();
    init_dist2();
    import_coreutils8 = __toESM(require_dist());
    RULERS_CLASSNAME = "cm-rulers";
    baseTheme = EditorView.baseTheme({
      [`.${RULERS_CLASSNAME}`]: { borderRight: "1px dotted gray", opacity: 0.7 }
    });
    rulerConfig = Facet.define({
      // Merge all unique values
      combine(value) {
        const final = value.reduce((agg, arr) => agg.concat(
          // Check value is not in aggregate nor multiple time in the array.
          arr.filter((v, idx) => !agg.includes(v) && idx == arr.lastIndexOf(v))
        ), []);
        return final;
      }
    });
    plugin = ViewPlugin.fromClass(class {
      constructor(view) {
        var _a, _b;
        this.rulersContainer = view.dom.appendChild(document.createElement("div"));
        this.rulersContainer.style.cssText = `
                position: absolute;
                left: 0;
                top: 0;
                width: 100%;
                height: 100%;
                pointer-events: none;
                overflow: hidden;
            `;
        const defaultCharacterWidth = view.defaultCharacterWidth;
        const widths = view.state.facet(rulerConfig);
        const guttersWidths = (_b = (_a = view.scrollDOM.querySelector(".cm-gutters")) === null || _a === void 0 ? void 0 : _a.clientWidth) !== null && _b !== void 0 ? _b : 0;
        this.rulers = widths.map((width) => {
          const ruler = this.rulersContainer.appendChild(document.createElement("div"));
          ruler.classList.add(RULERS_CLASSNAME);
          ruler.style.cssText = `
                position: absolute;
                left: ${guttersWidths + width * defaultCharacterWidth}px;
                height: 100%;
            `;
          ruler.style.width = "6px";
          return ruler;
        });
      }
      update(update) {
        var _a, _b;
        const widths = update.view.state.facet(rulerConfig);
        if (update.viewportChanged || update.geometryChanged || !import_coreutils8.JSONExt.deepEqual(widths, update.startState.facet(rulerConfig))) {
          const guttersWidth = (_b = (_a = update.view.scrollDOM.querySelector(".cm-gutters")) === null || _a === void 0 ? void 0 : _a.clientWidth) !== null && _b !== void 0 ? _b : 0;
          const defaultCharacterWidth = update.view.defaultCharacterWidth;
          this.rulers.forEach((ruler, rulerIdx) => {
            ruler.style.left = `${guttersWidth + widths[rulerIdx] * defaultCharacterWidth}px`;
          });
        }
      }
      destroy() {
        this.rulers.forEach((ruler) => {
          ruler.remove();
        });
        this.rulersContainer.remove();
      }
    });
  }
});

// ../../node_modules/@jupyterlab/codemirror/lib/extensions/ybinding.js
var ySyncFacet, ySyncAnnotation, ySync;
var init_ybinding = __esm({
  "../../node_modules/@jupyterlab/codemirror/lib/extensions/ybinding.js"() {
    init_dist();
    init_dist2();
    ySyncFacet = Facet.define({
      combine(inputs) {
        return inputs[inputs.length - 1];
      }
    });
    ySyncAnnotation = Annotation.define();
    ySync = ViewPlugin.fromClass(class {
      constructor(view) {
        this.conf = view.state.facet(ySyncFacet);
        this._observer = (event, tr) => {
          var _a;
          if (tr.origin !== this.conf) {
            const delta = event.delta;
            const changes = [];
            let pos = 0;
            for (let i = 0; i < delta.length; i++) {
              const d = delta[i];
              if (d.insert != null) {
                changes.push({ from: pos, to: pos, insert: d.insert });
              } else if (d.delete != null) {
                changes.push({ from: pos, to: pos + d.delete, insert: "" });
                pos += d.delete;
              } else {
                pos += (_a = d.retain) !== null && _a !== void 0 ? _a : 0;
              }
            }
            view.dispatch({
              changes,
              // Specified the changes origin to not loop when synchronizing
              annotations: [ySyncAnnotation.of(this.conf)]
            });
          }
        };
        this._ytext = this.conf.ytext;
        this._ytext.observe(this._observer);
      }
      update(update) {
        if (!update.docChanged || update.transactions.length > 0 && update.transactions[0].annotation(ySyncAnnotation) === this.conf) {
          return;
        }
        const ytext = this.conf.ytext;
        ytext.doc.transact(() => {
          let adj = 0;
          update.changes.iterChanges((fromA, toA, fromB, toB, insert) => {
            const insertText2 = insert.sliceString(0, insert.length, "\n");
            if (fromA !== toA) {
              ytext.delete(fromA + adj, toA - fromA);
            }
            if (insertText2.length > 0) {
              ytext.insert(fromA + adj, insertText2);
            }
            adj += insertText2.length - (toA - fromA);
          });
        }, this.conf);
      }
      destroy() {
        this._ytext.unobserve(this._observer);
      }
    });
  }
});

// ../../node_modules/@jupyterlab/codemirror/lib/extensions/index.js
var init_extensions = __esm({
  "../../node_modules/@jupyterlab/codemirror/lib/extensions/index.js"() {
    init_customStyle();
    init_ipython_md();
    init_rulers();
    init_ybinding();
  }
});

// ../../node_modules/crelt/index.js
function crelt() {
  var elt = arguments[0];
  if (typeof elt == "string")
    elt = document.createElement(elt);
  var i = 1, next = arguments[1];
  if (next && typeof next == "object" && next.nodeType == null && !Array.isArray(next)) {
    for (var name2 in next)
      if (Object.prototype.hasOwnProperty.call(next, name2)) {
        var value = next[name2];
        if (typeof value == "string")
          elt.setAttribute(name2, value);
        else if (value != null)
          elt[name2] = value;
      }
    i++;
  }
  for (; i < arguments.length; i++)
    add(elt, arguments[i]);
  return elt;
}
function add(elt, child) {
  if (typeof child == "string") {
    elt.appendChild(document.createTextNode(child));
  } else if (child == null) {
  } else if (child.nodeType != null) {
    elt.appendChild(child);
  } else if (Array.isArray(child)) {
    for (var i = 0; i < child.length; i++)
      add(elt, child[i]);
  } else {
    throw new RangeError("Unsupported child node: " + child);
  }
}
var init_crelt = __esm({
  "../../node_modules/crelt/index.js"() {
  }
});

// ../../node_modules/@codemirror/search/dist/index.js
function validRegExp(source) {
  try {
    new RegExp(source, baseFlags);
    return true;
  } catch (_a) {
    return false;
  }
}
function toCharEnd(text2, pos) {
  if (pos >= text2.length)
    return pos;
  let line = text2.lineAt(pos), next;
  while (pos < line.to && (next = line.text.charCodeAt(pos - line.from)) >= 56320 && next < 57344)
    pos++;
  return pos;
}
function findNextOccurrence(state, query) {
  let { main, ranges } = state.selection;
  let word2 = state.wordAt(main.head), fullWord = word2 && word2.from == main.from && word2.to == main.to;
  for (let cycled = false, cursor = new SearchCursor(state.doc, query, ranges[ranges.length - 1].to); ; ) {
    cursor.next();
    if (cursor.done) {
      if (cycled)
        return null;
      cursor = new SearchCursor(state.doc, query, 0, Math.max(0, ranges[ranges.length - 1].from - 1));
      cycled = true;
    } else {
      if (cycled && ranges.some((r) => r.from == cursor.value.from))
        continue;
      if (fullWord) {
        let word3 = state.wordAt(cursor.value.from);
        if (!word3 || word3.from != cursor.value.from || word3.to != cursor.value.to)
          continue;
      }
      return cursor.value;
    }
  }
}
function stringCursor(spec, state, from2, to) {
  return new SearchCursor(state.doc, spec.unquoted, from2, to, spec.caseSensitive ? void 0 : (x) => x.toLowerCase(), spec.wholeWord ? stringWordTest(state.doc, state.charCategorizer(state.selection.main.head)) : void 0);
}
function stringWordTest(doc2, categorizer) {
  return (from2, to, buf, bufPos) => {
    if (bufPos > from2 || bufPos + buf.length < to) {
      bufPos = Math.max(0, from2 - 2);
      buf = doc2.sliceString(bufPos, Math.min(doc2.length, to + 2));
    }
    return (categorizer(charBefore(buf, from2 - bufPos)) != CharCategory.Word || categorizer(charAfter(buf, from2 - bufPos)) != CharCategory.Word) && (categorizer(charAfter(buf, to - bufPos)) != CharCategory.Word || categorizer(charBefore(buf, to - bufPos)) != CharCategory.Word);
  };
}
function regexpCursor(spec, state, from2, to) {
  return new RegExpCursor(state.doc, spec.search, {
    ignoreCase: !spec.caseSensitive,
    test: spec.wholeWord ? regexpWordTest(state.charCategorizer(state.selection.main.head)) : void 0
  }, from2, to);
}
function charBefore(str, index) {
  return str.slice(findClusterBreak(str, index, false), index);
}
function charAfter(str, index) {
  return str.slice(index, findClusterBreak(str, index));
}
function regexpWordTest(categorizer) {
  return (_from, _to, match) => !match[0].length || (categorizer(charBefore(match.input, match.index)) != CharCategory.Word || categorizer(charAfter(match.input, match.index)) != CharCategory.Word) && (categorizer(charAfter(match.input, match.index + match[0].length)) != CharCategory.Word || categorizer(charBefore(match.input, match.index + match[0].length)) != CharCategory.Word);
}
function searchCommand(f) {
  return (view) => {
    let state = view.state.field(searchState, false);
    return state && state.query.spec.valid ? f(view, state) : openSearchPanel(view);
  };
}
function createSearchPanel(view) {
  return view.state.facet(searchConfigFacet).createPanel(view);
}
function defaultQuery(state, fallback) {
  var _a, _b, _c, _d, _e;
  let sel = state.selection.main;
  let selText = sel.empty || sel.to > sel.from + 100 ? "" : state.sliceDoc(sel.from, sel.to);
  if (fallback && !selText)
    return fallback;
  let config = state.facet(searchConfigFacet);
  return new SearchQuery({
    search: ((_a = fallback === null || fallback === void 0 ? void 0 : fallback.literal) !== null && _a !== void 0 ? _a : config.literal) ? selText : selText.replace(/\n/g, "\\n"),
    caseSensitive: (_b = fallback === null || fallback === void 0 ? void 0 : fallback.caseSensitive) !== null && _b !== void 0 ? _b : config.caseSensitive,
    literal: (_c = fallback === null || fallback === void 0 ? void 0 : fallback.literal) !== null && _c !== void 0 ? _c : config.literal,
    regexp: (_d = fallback === null || fallback === void 0 ? void 0 : fallback.regexp) !== null && _d !== void 0 ? _d : config.regexp,
    wholeWord: (_e = fallback === null || fallback === void 0 ? void 0 : fallback.wholeWord) !== null && _e !== void 0 ? _e : config.wholeWord
  });
}
function getSearchInput(view) {
  let panel = getPanel(view, createSearchPanel);
  return panel && panel.dom.querySelector("[main-field]");
}
function selectSearchInput(view) {
  let input = getSearchInput(view);
  if (input && input == view.root.activeElement)
    input.select();
}
function phrase(view, phrase2) {
  return view.state.phrase(phrase2);
}
function announceMatch(view, { from: from2, to }) {
  let line = view.state.doc.lineAt(from2), lineEnd = view.state.doc.lineAt(to).to;
  let start = Math.max(line.from, from2 - AnnounceMargin), end = Math.min(lineEnd, to + AnnounceMargin);
  let text2 = view.state.sliceDoc(start, end);
  if (start != line.from) {
    for (let i = 0; i < AnnounceMargin; i++)
      if (!Break.test(text2[i + 1]) && Break.test(text2[i])) {
        text2 = text2.slice(i);
        break;
      }
  }
  if (end != lineEnd) {
    for (let i = text2.length - 1; i > text2.length - AnnounceMargin; i--)
      if (!Break.test(text2[i - 1]) && Break.test(text2[i])) {
        text2 = text2.slice(0, i);
        break;
      }
  }
  return EditorView.announce.of(`${view.state.phrase("current match")}. ${text2} ${view.state.phrase("on line")} ${line.number}.`);
}
var basicNormalize, SearchCursor, empty, baseFlags, RegExpCursor, flattened, FlattenedDoc, MultilineRegExpCursor, selectWord, selectNextOccurrence, searchConfigFacet, SearchQuery, QueryType, StringQuery, RegExpQuery, setSearchQuery, togglePanel, searchState, SearchState, matchMark, selectedMatchMark, searchHighlighter, findNext, findPrevious, selectMatches, selectSelectionMatches, replaceNext, replaceAll, openSearchPanel, closeSearchPanel, SearchPanel, AnnounceMargin, Break, baseTheme2, searchExtensions;
var init_dist9 = __esm({
  "../../node_modules/@codemirror/search/dist/index.js"() {
    init_dist2();
    init_dist();
    init_crelt();
    basicNormalize = typeof String.prototype.normalize == "function" ? (x) => x.normalize("NFKD") : (x) => x;
    SearchCursor = class {
      /**
      Create a text cursor. The query is the search string, `from` to
      `to` provides the region to search.
      
      When `normalize` is given, it will be called, on both the query
      string and the content it is matched against, before comparing.
      You can, for example, create a case-insensitive search by
      passing `s => s.toLowerCase()`.
      
      Text is always normalized with
      [`.normalize("NFKD")`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/normalize)
      (when supported).
      */
      constructor(text2, query, from2 = 0, to = text2.length, normalize, test) {
        this.test = test;
        this.value = { from: 0, to: 0 };
        this.done = false;
        this.matches = [];
        this.buffer = "";
        this.bufferPos = 0;
        this.iter = text2.iterRange(from2, to);
        this.bufferStart = from2;
        this.normalize = normalize ? (x) => normalize(basicNormalize(x)) : basicNormalize;
        this.query = this.normalize(query);
      }
      peek() {
        if (this.bufferPos == this.buffer.length) {
          this.bufferStart += this.buffer.length;
          this.iter.next();
          if (this.iter.done)
            return -1;
          this.bufferPos = 0;
          this.buffer = this.iter.value;
        }
        return codePointAt(this.buffer, this.bufferPos);
      }
      /**
      Look for the next match. Updates the iterator's
      [`value`](https://codemirror.net/6/docs/ref/#search.SearchCursor.value) and
      [`done`](https://codemirror.net/6/docs/ref/#search.SearchCursor.done) properties. Should be called
      at least once before using the cursor.
      */
      next() {
        while (this.matches.length)
          this.matches.pop();
        return this.nextOverlapping();
      }
      /**
      The `next` method will ignore matches that partially overlap a
      previous match. This method behaves like `next`, but includes
      such matches.
      */
      nextOverlapping() {
        for (; ; ) {
          let next = this.peek();
          if (next < 0) {
            this.done = true;
            return this;
          }
          let str = fromCodePoint(next), start = this.bufferStart + this.bufferPos;
          this.bufferPos += codePointSize(next);
          let norm = this.normalize(str);
          for (let i = 0, pos = start; ; i++) {
            let code = norm.charCodeAt(i);
            let match = this.match(code, pos);
            if (i == norm.length - 1) {
              if (match) {
                this.value = match;
                return this;
              }
              break;
            }
            if (pos == start && i < str.length && str.charCodeAt(i) == code)
              pos++;
          }
        }
      }
      match(code, pos) {
        let match = null;
        for (let i = 0; i < this.matches.length; i += 2) {
          let index = this.matches[i], keep = false;
          if (this.query.charCodeAt(index) == code) {
            if (index == this.query.length - 1) {
              match = { from: this.matches[i + 1], to: pos + 1 };
            } else {
              this.matches[i]++;
              keep = true;
            }
          }
          if (!keep) {
            this.matches.splice(i, 2);
            i -= 2;
          }
        }
        if (this.query.charCodeAt(0) == code) {
          if (this.query.length == 1)
            match = { from: pos, to: pos + 1 };
          else
            this.matches.push(1, pos);
        }
        if (match && this.test && !this.test(match.from, match.to, this.buffer, this.bufferStart))
          match = null;
        return match;
      }
    };
    if (typeof Symbol != "undefined")
      SearchCursor.prototype[Symbol.iterator] = function() {
        return this;
      };
    empty = { from: -1, to: -1, match: /* @__PURE__ */ /.*/.exec("") };
    baseFlags = "gm" + (/x/.unicode == null ? "" : "u");
    RegExpCursor = class {
      /**
      Create a cursor that will search the given range in the given
      document. `query` should be the raw pattern (as you'd pass it to
      `new RegExp`).
      */
      constructor(text2, query, options, from2 = 0, to = text2.length) {
        this.text = text2;
        this.to = to;
        this.curLine = "";
        this.done = false;
        this.value = empty;
        if (/\\[sWDnr]|\n|\r|\[\^/.test(query))
          return new MultilineRegExpCursor(text2, query, options, from2, to);
        this.re = new RegExp(query, baseFlags + ((options === null || options === void 0 ? void 0 : options.ignoreCase) ? "i" : ""));
        this.test = options === null || options === void 0 ? void 0 : options.test;
        this.iter = text2.iter();
        let startLine = text2.lineAt(from2);
        this.curLineStart = startLine.from;
        this.matchPos = toCharEnd(text2, from2);
        this.getLine(this.curLineStart);
      }
      getLine(skip) {
        this.iter.next(skip);
        if (this.iter.lineBreak) {
          this.curLine = "";
        } else {
          this.curLine = this.iter.value;
          if (this.curLineStart + this.curLine.length > this.to)
            this.curLine = this.curLine.slice(0, this.to - this.curLineStart);
          this.iter.next();
        }
      }
      nextLine() {
        this.curLineStart = this.curLineStart + this.curLine.length + 1;
        if (this.curLineStart > this.to)
          this.curLine = "";
        else
          this.getLine(0);
      }
      /**
      Move to the next match, if there is one.
      */
      next() {
        for (let off = this.matchPos - this.curLineStart; ; ) {
          this.re.lastIndex = off;
          let match = this.matchPos <= this.to && this.re.exec(this.curLine);
          if (match) {
            let from2 = this.curLineStart + match.index, to = from2 + match[0].length;
            this.matchPos = toCharEnd(this.text, to + (from2 == to ? 1 : 0));
            if (from2 == this.curLineStart + this.curLine.length)
              this.nextLine();
            if ((from2 < to || from2 > this.value.to) && (!this.test || this.test(from2, to, match))) {
              this.value = { from: from2, to, match };
              return this;
            }
            off = this.matchPos - this.curLineStart;
          } else if (this.curLineStart + this.curLine.length < this.to) {
            this.nextLine();
            off = 0;
          } else {
            this.done = true;
            return this;
          }
        }
      }
    };
    flattened = /* @__PURE__ */ new WeakMap();
    FlattenedDoc = class {
      constructor(from2, text2) {
        this.from = from2;
        this.text = text2;
      }
      get to() {
        return this.from + this.text.length;
      }
      static get(doc2, from2, to) {
        let cached = flattened.get(doc2);
        if (!cached || cached.from >= to || cached.to <= from2) {
          let flat = new FlattenedDoc(from2, doc2.sliceString(from2, to));
          flattened.set(doc2, flat);
          return flat;
        }
        if (cached.from == from2 && cached.to == to)
          return cached;
        let { text: text2, from: cachedFrom } = cached;
        if (cachedFrom > from2) {
          text2 = doc2.sliceString(from2, cachedFrom) + text2;
          cachedFrom = from2;
        }
        if (cached.to < to)
          text2 += doc2.sliceString(cached.to, to);
        flattened.set(doc2, new FlattenedDoc(cachedFrom, text2));
        return new FlattenedDoc(from2, text2.slice(from2 - cachedFrom, to - cachedFrom));
      }
    };
    MultilineRegExpCursor = class {
      constructor(text2, query, options, from2, to) {
        this.text = text2;
        this.to = to;
        this.done = false;
        this.value = empty;
        this.matchPos = toCharEnd(text2, from2);
        this.re = new RegExp(query, baseFlags + ((options === null || options === void 0 ? void 0 : options.ignoreCase) ? "i" : ""));
        this.test = options === null || options === void 0 ? void 0 : options.test;
        this.flat = FlattenedDoc.get(text2, from2, this.chunkEnd(
          from2 + 5e3
          /* Chunk.Base */
        ));
      }
      chunkEnd(pos) {
        return pos >= this.to ? this.to : this.text.lineAt(pos).to;
      }
      next() {
        for (; ; ) {
          let off = this.re.lastIndex = this.matchPos - this.flat.from;
          let match = this.re.exec(this.flat.text);
          if (match && !match[0] && match.index == off) {
            this.re.lastIndex = off + 1;
            match = this.re.exec(this.flat.text);
          }
          if (match) {
            let from2 = this.flat.from + match.index, to = from2 + match[0].length;
            if ((this.flat.to >= this.to || match.index + match[0].length <= this.flat.text.length - 10) && (!this.test || this.test(from2, to, match))) {
              this.value = { from: from2, to, match };
              this.matchPos = toCharEnd(this.text, to + (from2 == to ? 1 : 0));
              return this;
            }
          }
          if (this.flat.to == this.to) {
            this.done = true;
            return this;
          }
          this.flat = FlattenedDoc.get(this.text, this.flat.from, this.chunkEnd(this.flat.from + this.flat.text.length * 2));
        }
      }
    };
    if (typeof Symbol != "undefined") {
      RegExpCursor.prototype[Symbol.iterator] = MultilineRegExpCursor.prototype[Symbol.iterator] = function() {
        return this;
      };
    }
    selectWord = ({ state, dispatch }) => {
      let { selection } = state;
      let newSel = EditorSelection.create(selection.ranges.map((range) => state.wordAt(range.head) || EditorSelection.cursor(range.head)), selection.mainIndex);
      if (newSel.eq(selection))
        return false;
      dispatch(state.update({ selection: newSel }));
      return true;
    };
    selectNextOccurrence = ({ state, dispatch }) => {
      let { ranges } = state.selection;
      if (ranges.some((sel) => sel.from === sel.to))
        return selectWord({ state, dispatch });
      let searchedText = state.sliceDoc(ranges[0].from, ranges[0].to);
      if (state.selection.ranges.some((r) => state.sliceDoc(r.from, r.to) != searchedText))
        return false;
      let range = findNextOccurrence(state, searchedText);
      if (!range)
        return false;
      dispatch(state.update({
        selection: state.selection.addRange(EditorSelection.range(range.from, range.to), false),
        effects: EditorView.scrollIntoView(range.to)
      }));
      return true;
    };
    searchConfigFacet = /* @__PURE__ */ Facet.define({
      combine(configs) {
        return combineConfig(configs, {
          top: false,
          caseSensitive: false,
          literal: false,
          regexp: false,
          wholeWord: false,
          createPanel: (view) => new SearchPanel(view),
          scrollToMatch: (range) => EditorView.scrollIntoView(range)
        });
      }
    });
    SearchQuery = class {
      /**
      Create a query object.
      */
      constructor(config) {
        this.search = config.search;
        this.caseSensitive = !!config.caseSensitive;
        this.literal = !!config.literal;
        this.regexp = !!config.regexp;
        this.replace = config.replace || "";
        this.valid = !!this.search && (!this.regexp || validRegExp(this.search));
        this.unquoted = this.unquote(this.search);
        this.wholeWord = !!config.wholeWord;
      }
      /**
      @internal
      */
      unquote(text2) {
        return this.literal ? text2 : text2.replace(/\\([nrt\\])/g, (_, ch) => ch == "n" ? "\n" : ch == "r" ? "\r" : ch == "t" ? "	" : "\\");
      }
      /**
      Compare this query to another query.
      */
      eq(other) {
        return this.search == other.search && this.replace == other.replace && this.caseSensitive == other.caseSensitive && this.regexp == other.regexp && this.wholeWord == other.wholeWord;
      }
      /**
      @internal
      */
      create() {
        return this.regexp ? new RegExpQuery(this) : new StringQuery(this);
      }
      /**
      Get a search cursor for this query, searching through the given
      range in the given state.
      */
      getCursor(state, from2 = 0, to) {
        let st = state.doc ? state : EditorState.create({ doc: state });
        if (to == null)
          to = st.doc.length;
        return this.regexp ? regexpCursor(this, st, from2, to) : stringCursor(this, st, from2, to);
      }
    };
    QueryType = class {
      constructor(spec) {
        this.spec = spec;
      }
    };
    StringQuery = class extends QueryType {
      constructor(spec) {
        super(spec);
      }
      nextMatch(state, curFrom, curTo) {
        let cursor = stringCursor(this.spec, state, curTo, state.doc.length).nextOverlapping();
        if (cursor.done)
          cursor = stringCursor(this.spec, state, 0, curFrom).nextOverlapping();
        return cursor.done ? null : cursor.value;
      }
      // Searching in reverse is, rather than implementing an inverted search
      // cursor, done by scanning chunk after chunk forward.
      prevMatchInRange(state, from2, to) {
        for (let pos = to; ; ) {
          let start = Math.max(from2, pos - 1e4 - this.spec.unquoted.length);
          let cursor = stringCursor(this.spec, state, start, pos), range = null;
          while (!cursor.nextOverlapping().done)
            range = cursor.value;
          if (range)
            return range;
          if (start == from2)
            return null;
          pos -= 1e4;
        }
      }
      prevMatch(state, curFrom, curTo) {
        return this.prevMatchInRange(state, 0, curFrom) || this.prevMatchInRange(state, curTo, state.doc.length);
      }
      getReplacement(_result) {
        return this.spec.unquote(this.spec.replace);
      }
      matchAll(state, limit) {
        let cursor = stringCursor(this.spec, state, 0, state.doc.length), ranges = [];
        while (!cursor.next().done) {
          if (ranges.length >= limit)
            return null;
          ranges.push(cursor.value);
        }
        return ranges;
      }
      highlight(state, from2, to, add2) {
        let cursor = stringCursor(this.spec, state, Math.max(0, from2 - this.spec.unquoted.length), Math.min(to + this.spec.unquoted.length, state.doc.length));
        while (!cursor.next().done)
          add2(cursor.value.from, cursor.value.to);
      }
    };
    RegExpQuery = class extends QueryType {
      nextMatch(state, curFrom, curTo) {
        let cursor = regexpCursor(this.spec, state, curTo, state.doc.length).next();
        if (cursor.done)
          cursor = regexpCursor(this.spec, state, 0, curFrom).next();
        return cursor.done ? null : cursor.value;
      }
      prevMatchInRange(state, from2, to) {
        for (let size = 1; ; size++) {
          let start = Math.max(
            from2,
            to - size * 1e4
            /* FindPrev.ChunkSize */
          );
          let cursor = regexpCursor(this.spec, state, start, to), range = null;
          while (!cursor.next().done)
            range = cursor.value;
          if (range && (start == from2 || range.from > start + 10))
            return range;
          if (start == from2)
            return null;
        }
      }
      prevMatch(state, curFrom, curTo) {
        return this.prevMatchInRange(state, 0, curFrom) || this.prevMatchInRange(state, curTo, state.doc.length);
      }
      getReplacement(result) {
        return this.spec.unquote(this.spec.replace.replace(/\$([$&\d+])/g, (m, i) => i == "$" ? "$" : i == "&" ? result.match[0] : i != "0" && +i < result.match.length ? result.match[i] : m));
      }
      matchAll(state, limit) {
        let cursor = regexpCursor(this.spec, state, 0, state.doc.length), ranges = [];
        while (!cursor.next().done) {
          if (ranges.length >= limit)
            return null;
          ranges.push(cursor.value);
        }
        return ranges;
      }
      highlight(state, from2, to, add2) {
        let cursor = regexpCursor(this.spec, state, Math.max(
          0,
          from2 - 250
          /* RegExp.HighlightMargin */
        ), Math.min(to + 250, state.doc.length));
        while (!cursor.next().done)
          add2(cursor.value.from, cursor.value.to);
      }
    };
    setSearchQuery = /* @__PURE__ */ StateEffect.define();
    togglePanel = /* @__PURE__ */ StateEffect.define();
    searchState = /* @__PURE__ */ StateField.define({
      create(state) {
        return new SearchState(defaultQuery(state).create(), null);
      },
      update(value, tr) {
        for (let effect of tr.effects) {
          if (effect.is(setSearchQuery))
            value = new SearchState(effect.value.create(), value.panel);
          else if (effect.is(togglePanel))
            value = new SearchState(value.query, effect.value ? createSearchPanel : null);
        }
        return value;
      },
      provide: (f) => showPanel.from(f, (val) => val.panel)
    });
    SearchState = class {
      constructor(query, panel) {
        this.query = query;
        this.panel = panel;
      }
    };
    matchMark = /* @__PURE__ */ Decoration.mark({ class: "cm-searchMatch" });
    selectedMatchMark = /* @__PURE__ */ Decoration.mark({ class: "cm-searchMatch cm-searchMatch-selected" });
    searchHighlighter = /* @__PURE__ */ ViewPlugin.fromClass(class {
      constructor(view) {
        this.view = view;
        this.decorations = this.highlight(view.state.field(searchState));
      }
      update(update) {
        let state = update.state.field(searchState);
        if (state != update.startState.field(searchState) || update.docChanged || update.selectionSet || update.viewportChanged)
          this.decorations = this.highlight(state);
      }
      highlight({ query, panel }) {
        if (!panel || !query.spec.valid)
          return Decoration.none;
        let { view } = this;
        let builder = new RangeSetBuilder();
        for (let i = 0, ranges = view.visibleRanges, l = ranges.length; i < l; i++) {
          let { from: from2, to } = ranges[i];
          while (i < l - 1 && to > ranges[i + 1].from - 2 * 250)
            to = ranges[++i].to;
          query.highlight(view.state, from2, to, (from3, to2) => {
            let selected = view.state.selection.ranges.some((r) => r.from == from3 && r.to == to2);
            builder.add(from3, to2, selected ? selectedMatchMark : matchMark);
          });
        }
        return builder.finish();
      }
    }, {
      decorations: (v) => v.decorations
    });
    findNext = /* @__PURE__ */ searchCommand((view, { query }) => {
      let { to } = view.state.selection.main;
      let next = query.nextMatch(view.state, to, to);
      if (!next)
        return false;
      let selection = EditorSelection.single(next.from, next.to);
      let config = view.state.facet(searchConfigFacet);
      view.dispatch({
        selection,
        effects: [announceMatch(view, next), config.scrollToMatch(selection.main, view)],
        userEvent: "select.search"
      });
      selectSearchInput(view);
      return true;
    });
    findPrevious = /* @__PURE__ */ searchCommand((view, { query }) => {
      let { state } = view, { from: from2 } = state.selection.main;
      let prev = query.prevMatch(state, from2, from2);
      if (!prev)
        return false;
      let selection = EditorSelection.single(prev.from, prev.to);
      let config = view.state.facet(searchConfigFacet);
      view.dispatch({
        selection,
        effects: [announceMatch(view, prev), config.scrollToMatch(selection.main, view)],
        userEvent: "select.search"
      });
      selectSearchInput(view);
      return true;
    });
    selectMatches = /* @__PURE__ */ searchCommand((view, { query }) => {
      let ranges = query.matchAll(view.state, 1e3);
      if (!ranges || !ranges.length)
        return false;
      view.dispatch({
        selection: EditorSelection.create(ranges.map((r) => EditorSelection.range(r.from, r.to))),
        userEvent: "select.search.matches"
      });
      return true;
    });
    selectSelectionMatches = ({ state, dispatch }) => {
      let sel = state.selection;
      if (sel.ranges.length > 1 || sel.main.empty)
        return false;
      let { from: from2, to } = sel.main;
      let ranges = [], main = 0;
      for (let cur = new SearchCursor(state.doc, state.sliceDoc(from2, to)); !cur.next().done; ) {
        if (ranges.length > 1e3)
          return false;
        if (cur.value.from == from2)
          main = ranges.length;
        ranges.push(EditorSelection.range(cur.value.from, cur.value.to));
      }
      dispatch(state.update({
        selection: EditorSelection.create(ranges, main),
        userEvent: "select.search.matches"
      }));
      return true;
    };
    replaceNext = /* @__PURE__ */ searchCommand((view, { query }) => {
      let { state } = view, { from: from2, to } = state.selection.main;
      if (state.readOnly)
        return false;
      let next = query.nextMatch(state, from2, from2);
      if (!next)
        return false;
      let changes = [], selection, replacement;
      let effects = [];
      if (next.from == from2 && next.to == to) {
        replacement = state.toText(query.getReplacement(next));
        changes.push({ from: next.from, to: next.to, insert: replacement });
        next = query.nextMatch(state, next.from, next.to);
        effects.push(EditorView.announce.of(state.phrase("replaced match on line $", state.doc.lineAt(from2).number) + "."));
      }
      if (next) {
        let off = changes.length == 0 || changes[0].from >= next.to ? 0 : next.to - next.from - replacement.length;
        selection = EditorSelection.single(next.from - off, next.to - off);
        effects.push(announceMatch(view, next));
        effects.push(state.facet(searchConfigFacet).scrollToMatch(selection.main, view));
      }
      view.dispatch({
        changes,
        selection,
        effects,
        userEvent: "input.replace"
      });
      return true;
    });
    replaceAll = /* @__PURE__ */ searchCommand((view, { query }) => {
      if (view.state.readOnly)
        return false;
      let changes = query.matchAll(view.state, 1e9).map((match) => {
        let { from: from2, to } = match;
        return { from: from2, to, insert: query.getReplacement(match) };
      });
      if (!changes.length)
        return false;
      let announceText = view.state.phrase("replaced $ matches", changes.length) + ".";
      view.dispatch({
        changes,
        effects: EditorView.announce.of(announceText),
        userEvent: "input.replace.all"
      });
      return true;
    });
    openSearchPanel = (view) => {
      let state = view.state.field(searchState, false);
      if (state && state.panel) {
        let searchInput = getSearchInput(view);
        if (searchInput && searchInput != view.root.activeElement) {
          let query = defaultQuery(view.state, state.query.spec);
          if (query.valid)
            view.dispatch({ effects: setSearchQuery.of(query) });
          searchInput.focus();
          searchInput.select();
        }
      } else {
        view.dispatch({ effects: [
          togglePanel.of(true),
          state ? setSearchQuery.of(defaultQuery(view.state, state.query.spec)) : StateEffect.appendConfig.of(searchExtensions)
        ] });
      }
      return true;
    };
    closeSearchPanel = (view) => {
      let state = view.state.field(searchState, false);
      if (!state || !state.panel)
        return false;
      let panel = getPanel(view, createSearchPanel);
      if (panel && panel.dom.contains(view.root.activeElement))
        view.focus();
      view.dispatch({ effects: togglePanel.of(false) });
      return true;
    };
    SearchPanel = class {
      constructor(view) {
        this.view = view;
        let query = this.query = view.state.field(searchState).query.spec;
        this.commit = this.commit.bind(this);
        this.searchField = crelt("input", {
          value: query.search,
          placeholder: phrase(view, "Find"),
          "aria-label": phrase(view, "Find"),
          class: "cm-textfield",
          name: "search",
          form: "",
          "main-field": "true",
          onchange: this.commit,
          onkeyup: this.commit
        });
        this.replaceField = crelt("input", {
          value: query.replace,
          placeholder: phrase(view, "Replace"),
          "aria-label": phrase(view, "Replace"),
          class: "cm-textfield",
          name: "replace",
          form: "",
          onchange: this.commit,
          onkeyup: this.commit
        });
        this.caseField = crelt("input", {
          type: "checkbox",
          name: "case",
          form: "",
          checked: query.caseSensitive,
          onchange: this.commit
        });
        this.reField = crelt("input", {
          type: "checkbox",
          name: "re",
          form: "",
          checked: query.regexp,
          onchange: this.commit
        });
        this.wordField = crelt("input", {
          type: "checkbox",
          name: "word",
          form: "",
          checked: query.wholeWord,
          onchange: this.commit
        });
        function button(name2, onclick, content) {
          return crelt("button", { class: "cm-button", name: name2, onclick, type: "button" }, content);
        }
        this.dom = crelt("div", { onkeydown: (e) => this.keydown(e), class: "cm-search" }, [
          this.searchField,
          button("next", () => findNext(view), [phrase(view, "next")]),
          button("prev", () => findPrevious(view), [phrase(view, "previous")]),
          button("select", () => selectMatches(view), [phrase(view, "all")]),
          crelt("label", null, [this.caseField, phrase(view, "match case")]),
          crelt("label", null, [this.reField, phrase(view, "regexp")]),
          crelt("label", null, [this.wordField, phrase(view, "by word")]),
          ...view.state.readOnly ? [] : [
            crelt("br"),
            this.replaceField,
            button("replace", () => replaceNext(view), [phrase(view, "replace")]),
            button("replaceAll", () => replaceAll(view), [phrase(view, "replace all")])
          ],
          crelt("button", {
            name: "close",
            onclick: () => closeSearchPanel(view),
            "aria-label": phrase(view, "close"),
            type: "button"
          }, ["\xD7"])
        ]);
      }
      commit() {
        let query = new SearchQuery({
          search: this.searchField.value,
          caseSensitive: this.caseField.checked,
          regexp: this.reField.checked,
          wholeWord: this.wordField.checked,
          replace: this.replaceField.value
        });
        if (!query.eq(this.query)) {
          this.query = query;
          this.view.dispatch({ effects: setSearchQuery.of(query) });
        }
      }
      keydown(e) {
        if (runScopeHandlers(this.view, e, "search-panel")) {
          e.preventDefault();
        } else if (e.keyCode == 13 && e.target == this.searchField) {
          e.preventDefault();
          (e.shiftKey ? findPrevious : findNext)(this.view);
        } else if (e.keyCode == 13 && e.target == this.replaceField) {
          e.preventDefault();
          replaceNext(this.view);
        }
      }
      update(update) {
        for (let tr of update.transactions)
          for (let effect of tr.effects) {
            if (effect.is(setSearchQuery) && !effect.value.eq(this.query))
              this.setQuery(effect.value);
          }
      }
      setQuery(query) {
        this.query = query;
        this.searchField.value = query.search;
        this.replaceField.value = query.replace;
        this.caseField.checked = query.caseSensitive;
        this.reField.checked = query.regexp;
        this.wordField.checked = query.wholeWord;
      }
      mount() {
        this.searchField.select();
      }
      get pos() {
        return 80;
      }
      get top() {
        return this.view.state.facet(searchConfigFacet).top;
      }
    };
    AnnounceMargin = 30;
    Break = /[\s\.,:;?!]/;
    baseTheme2 = /* @__PURE__ */ EditorView.baseTheme({
      ".cm-panel.cm-search": {
        padding: "2px 6px 4px",
        position: "relative",
        "& [name=close]": {
          position: "absolute",
          top: "0",
          right: "4px",
          backgroundColor: "inherit",
          border: "none",
          font: "inherit",
          padding: 0,
          margin: 0
        },
        "& input, & button, & label": {
          margin: ".2em .6em .2em 0"
        },
        "& input[type=checkbox]": {
          marginRight: ".2em"
        },
        "& label": {
          fontSize: "80%",
          whiteSpace: "pre"
        }
      },
      "&light .cm-searchMatch": { backgroundColor: "#ffff0054" },
      "&dark .cm-searchMatch": { backgroundColor: "#00ffff8a" },
      "&light .cm-searchMatch-selected": { backgroundColor: "#ff6a0054" },
      "&dark .cm-searchMatch-selected": { backgroundColor: "#ff00ff8a" }
    });
    searchExtensions = [
      searchState,
      /* @__PURE__ */ Prec.low(searchHighlighter),
      baseTheme2
    ];
  }
});

// ../../node_modules/@jupyterlab/codemirror/lib/extension.js
var import_coreutils9, READ_ONLY_CLASS, ExtensionsHandler, EditorExtensionRegistry;
var init_extension = __esm({
  "../../node_modules/@jupyterlab/codemirror/lib/extension.js"() {
    init_dist6();
    init_dist8();
    init_dist5();
    init_dist();
    init_dist2();
    init_lib();
    import_coreutils9 = __toESM(require_dist());
    init_index_es6();
    init_commands();
    init_extensions();
    init_dist9();
    READ_ONLY_CLASS = "jp-mod-readOnly";
    ExtensionsHandler = class {
      constructor({ baseConfiguration, config, defaultExtensions } = {}) {
        this._configChanged = new Signal(this);
        this._disposed = new Signal(this);
        this._isDisposed = false;
        this._immutables = /* @__PURE__ */ new Set();
        this._baseConfig = baseConfiguration !== null && baseConfiguration !== void 0 ? baseConfiguration : {};
        this._config = config !== null && config !== void 0 ? config : {};
        this._configurableBuilderMap = new Map(defaultExtensions);
        const configurables = Object.keys(this._config).concat(Object.keys(this._baseConfig));
        this._immutables = new Set([...this._configurableBuilderMap.keys()].filter((key) => !configurables.includes(key)));
      }
      /**
       * Signal triggered when the editor configuration changes.
       * It provides the mapping of the new configuration (only those that changed).
       *
       * It should result in a call to `IExtensionsHandler.reconfigureExtensions`.
       */
      get configChanged() {
        return this._configChanged;
      }
      /**
       * A signal emitted when the object is disposed.
       */
      get disposed() {
        return this._disposed;
      }
      /**
       * Tests whether the object is disposed.
       */
      get isDisposed() {
        return this._isDisposed;
      }
      /**
       * Dispose of the resources held by the object.
       */
      dispose() {
        if (this.isDisposed) {
          return;
        }
        this._isDisposed = true;
        this._disposed.emit();
        Signal.clearData(this);
      }
      /**
       * Get a config option for the editor.
       */
      getOption(option) {
        var _a;
        return (_a = this._config[option]) !== null && _a !== void 0 ? _a : this._baseConfig[option];
      }
      /**
       * Whether the option exists or not.
       */
      hasOption(option) {
        return Object.keys(this._config).includes(option) || Object.keys(this._baseConfig).includes(option);
      }
      /**
       * Set a config option for the editor.
       *
       * You will need to reconfigure the editor extensions by listening
       * to `IExtensionsHandler.configChanged`.
       */
      setOption(option, value) {
        if (this._config[option] !== value) {
          this._config[option] = value;
          this._configChanged.emit({ [option]: value });
        }
      }
      /**
       * Set a base config option for the editor.
       *
       * You will need to reconfigure the editor extensions by listening
       * to `IExtensionsHandler.configChanged`.
       */
      setBaseOptions(options) {
        const changed = this._getChangedOptions(options, this._baseConfig);
        if (changed.length > 0) {
          this._baseConfig = options;
          const customizedKeys = Object.keys(this._config);
          const notOverridden = changed.filter((k) => !customizedKeys.includes(k));
          if (notOverridden.length > 0) {
            this._configChanged.emit(notOverridden.reduce((agg, key) => {
              agg[key] = this._baseConfig[key];
              return agg;
            }, {}));
          }
        }
      }
      /**
       * Set config options for the editor.
       *
       * You will need to reconfigure the editor extensions by listening
       * to `EditorHandler.configChanged`.
       *
       * This method is preferred when setting several options. The
       * options are set within an operation, which only performs
       * the costly update at the end, and not after every option
       * is set.
       */
      setOptions(options) {
        const changed = this._getChangedOptions(options, this._config);
        if (changed.length > 0) {
          this._config = { ...options };
          this._configChanged.emit(changed.reduce((agg, key) => {
            var _a;
            agg[key] = (_a = this._config[key]) !== null && _a !== void 0 ? _a : this._baseConfig[key];
            return agg;
          }, {}));
        }
      }
      /**
       * Reconfigures the extension mapped with key with the provided value.
       *
       * @param view Editor view
       * @param key Parameter unique key
       * @param value Parameter value to be applied
       */
      reconfigureExtension(view, key, value) {
        const effect = this.getEffect(view.state, key, value);
        if (effect) {
          view.dispatch({
            effects: [effect]
          });
        }
      }
      /**
       * Reconfigures all the extensions mapped with the options from the
       * provided partial configuration.
       *
       * @param view Editor view
       * @param configuration Editor configuration
       */
      reconfigureExtensions(view, configuration) {
        const effects = Object.keys(configuration).filter((key) => this.has(key)).map((key) => this.getEffect(view.state, key, configuration[key]));
        view.dispatch({
          effects: effects.filter((effect) => effect !== null)
        });
      }
      /**
       * Appends extensions to the top-level configuration of the
       * editor.
       *
       * Injected extension cannot be removed.
       *
       * ### Notes
       * You should prefer registering a IEditorExtensionFactory instead
       * of this feature.
       *
       * @alpha
       * @param view Editor view
       * @param extension Editor extension to inject
       */
      injectExtension(view, extension) {
        view.dispatch({
          effects: StateEffect.appendConfig.of(extension)
        });
      }
      /**
       * Returns the list of initial extensions of an editor
       * based on the configuration.
       *
       * @returns The initial editor extensions
       */
      getInitialExtensions() {
        const configuration = { ...this._baseConfig, ...this._config };
        const extensions = [...this._immutables].map((key) => {
          var _a;
          return (_a = this.get(key)) === null || _a === void 0 ? void 0 : _a.instance(void 0);
        }).filter((ext) => ext);
        for (const k of Object.keys(configuration)) {
          const builder = this.get(k);
          if (builder) {
            const value = configuration[k];
            extensions.push(builder.instance(value));
          }
        }
        return extensions;
      }
      /**
       * Get a extension builder
       * @param key Extension unique identifier
       * @returns The extension builder
       */
      get(key) {
        return this._configurableBuilderMap.get(key);
      }
      /**
       * Whether the editor has an extension for the identifier.
       *
       * @param key Extension unique identifier
       * @returns Extension existence
       */
      has(key) {
        return this._configurableBuilderMap.has(key);
      }
      getEffect(state, key, value) {
        var _a;
        const builder = this.get(key);
        return (_a = builder === null || builder === void 0 ? void 0 : builder.reconfigure(value)) !== null && _a !== void 0 ? _a : null;
      }
      _getChangedOptions(newConfig, oldConfig) {
        const changed = new Array();
        const newKeys = new Array();
        for (const [key, value] of Object.entries(newConfig)) {
          newKeys.push(key);
          if (oldConfig[key] !== value) {
            changed.push(key);
          }
        }
        changed.push(...Object.keys(oldConfig).filter((k) => !newKeys.includes(k)));
        return changed;
      }
    };
    EditorExtensionRegistry = class {
      constructor() {
        this.configurationBuilder = /* @__PURE__ */ new Map();
        this.configurationSchema = {};
        this.defaultOptions = {};
        this.handlers = /* @__PURE__ */ new Set();
        this.immutableExtensions = /* @__PURE__ */ new Set();
        this._baseConfiguration = {};
      }
      /**
       * Base editor configuration
       *
       * This is the default configuration optionally modified by the user;
       * e.g. through user settings.
       */
      get baseConfiguration() {
        return { ...this.defaultOptions, ...this._baseConfiguration };
      }
      set baseConfiguration(v) {
        if (!import_coreutils9.JSONExt.deepEqual(v, this._baseConfiguration)) {
          this._baseConfiguration = v;
          for (const handler of this.handlers) {
            handler.setBaseOptions(this.baseConfiguration);
          }
        }
      }
      /**
       * Default editor configuration
       *
       * This is the default configuration as defined when extensions
       * are registered.
       */
      get defaultConfiguration() {
        return Object.freeze({ ...this.defaultOptions });
      }
      /**
       * Editor configuration JSON schema
       */
      get settingsSchema() {
        return Object.freeze(import_coreutils9.JSONExt.deepCopy(this.configurationSchema));
      }
      /**
       * Add a default editor extension
       *
       * @template T Extension parameter type
       * @param factory Extension factory
       */
      addExtension(factory) {
        var _a;
        if (this.configurationBuilder.has(factory.name)) {
          throw new Error(`Extension named ${factory.name} is already registered.`);
        }
        this.configurationBuilder.set(factory.name, factory);
        if (typeof factory.default != "undefined") {
          this.defaultOptions[factory.name] = factory.default;
        }
        if (factory.schema) {
          this.configurationSchema[factory.name] = {
            default: (_a = factory.default) !== null && _a !== void 0 ? _a : null,
            ...factory.schema
          };
          this.defaultOptions[factory.name] = this.configurationSchema[factory.name].default;
        }
      }
      /**
       * Create a new extensions handler for an editor
       *
       * @param options Extensions options and initial editor configuration
       */
      createNew(options) {
        const configuration = new Array();
        for (const [key, builder] of this.configurationBuilder.entries()) {
          const extension = builder.factory(options);
          if (extension) {
            configuration.push([key, extension]);
          }
        }
        const handler = new ExtensionsHandler({
          baseConfiguration: this.baseConfiguration,
          config: options.config,
          defaultExtensions: configuration
        });
        this.handlers.add(handler);
        handler.disposed.connect(() => {
          this.handlers.delete(handler);
        });
        return handler;
      }
    };
    (function(EditorExtensionRegistry2) {
      class ConfigurableExtension {
        /**
         * Create a dynamic editor extension.
         *
         * @param builder Extension builder
         */
        constructor(builder) {
          this._compartment = new Compartment();
          this._builder = builder;
        }
        /**
         * Create an editor extension for the provided value.
         *
         * @param value Editor extension parameter value
         * @returns The editor extension
         */
        instance(value) {
          return this._compartment.of(this._builder(value));
        }
        /**
         * Reconfigure an editor extension.
         *
         * @param value Editor extension value
         * @returns Editor state effect
         */
        reconfigure(value) {
          return this._compartment.reconfigure(this._builder(value));
        }
      }
      class ImmutableExtension {
        /**
         * Create an immutable editor extension.
         *
         * @param extension Extension
         */
        constructor(extension) {
          this._extension = extension;
        }
        /**
         * Create an editor extension.
         *
         * @returns The editor extension
         */
        instance() {
          return this._extension;
        }
        /**
         * Reconfigure an editor extension.
         *
         * This is a no-op
         */
        reconfigure() {
          return null;
        }
      }
      function createConfigurableExtension(builder) {
        return new ConfigurableExtension(builder);
      }
      EditorExtensionRegistry2.createConfigurableExtension = createConfigurableExtension;
      function createConditionalExtension(truthy, falsy = []) {
        return new ConfigurableExtension((value) => value ? truthy : falsy);
      }
      EditorExtensionRegistry2.createConditionalExtension = createConditionalExtension;
      function createImmutableExtension(extension) {
        return new ImmutableExtension(extension);
      }
      EditorExtensionRegistry2.createImmutableExtension = createImmutableExtension;
      function getDefaultExtensions(options = {}) {
        const { themes, translator } = options;
        const trans = (translator !== null && translator !== void 0 ? translator : nullTranslator).load("jupyterlab");
        const extensions = [
          Object.freeze({
            name: "autoClosingBrackets",
            default: false,
            factory: () => createConditionalExtension(closeBrackets()),
            schema: {
              type: "boolean",
              title: trans.__("Auto Closing Brackets")
            }
          }),
          Object.freeze({
            name: "codeFolding",
            default: false,
            factory: () => createConditionalExtension(foldGutter()),
            schema: {
              type: "boolean",
              title: trans.__("Code Folding")
            }
          }),
          Object.freeze({
            name: "cursorBlinkRate",
            default: 1200,
            factory: () => createConfigurableExtension((value) => drawSelection({ cursorBlinkRate: value })),
            schema: {
              type: "number",
              title: trans.__("Cursor blinking rate"),
              description: trans.__("Half-period in milliseconds used for cursor blinking. The default blink rate is 1200ms. By setting this to zero, blinking can be disabled.")
            }
          }),
          Object.freeze({
            name: "highlightActiveLine",
            default: false,
            factory: () => createConditionalExtension(highlightActiveLine()),
            schema: {
              type: "boolean",
              title: trans.__("Highlight the active line")
            }
          }),
          Object.freeze({
            name: "highlightSpecialCharacters",
            default: true,
            factory: () => createConditionalExtension(highlightSpecialChars()),
            schema: {
              type: "boolean",
              title: trans.__("Highlight special characters")
            }
          }),
          Object.freeze({
            name: "highlightTrailingWhitespace",
            default: false,
            factory: () => createConditionalExtension(highlightTrailingWhitespace()),
            schema: {
              type: "boolean",
              title: trans.__("Highlight trailing white spaces")
            }
          }),
          Object.freeze({
            name: "highlightWhitespace",
            default: false,
            factory: () => createConditionalExtension(highlightWhitespace()),
            schema: {
              type: "boolean",
              title: trans.__("Highlight white spaces")
            }
          }),
          Object.freeze({
            name: "indentUnit",
            default: "4",
            factory: () => createConfigurableExtension((value) => value == "Tab" ? indentUnit.of("	") : indentUnit.of(" ".repeat(parseInt(value, 10)))),
            schema: {
              type: "string",
              title: trans.__("Indentation unit"),
              description: trans.__("The indentation is a `Tab` or the number of spaces. This defaults to 4 spaces."),
              enum: ["Tab", "1", "2", "4", "8"]
            }
          }),
          // Default keyboard shortcuts
          // TODO at some point we may want to get this configurable
          Object.freeze({
            name: "keymap",
            default: [
              {
                key: "Mod-Enter",
                run: StateCommands.preventNewLineOnRun
              },
              {
                key: "Enter",
                run: StateCommands.completerOrInsertNewLine
              },
              ...defaultKeymap,
              {
                key: "Tab",
                run: StateCommands.indentMoreOrInsertTab,
                shift: StateCommands.dedentIfNotLaunchingTooltip
              }
            ],
            factory: () => createConfigurableExtension((value) => keymap.of(value))
          }),
          Object.freeze({
            name: "lineNumbers",
            default: true,
            factory: () => createConditionalExtension(lineNumbers()),
            schema: {
              type: "boolean",
              title: trans.__("Line Numbers")
            }
          }),
          Object.freeze({
            name: "lineWrap",
            factory: () => createConditionalExtension(EditorView.lineWrapping),
            default: true,
            schema: {
              type: "boolean",
              title: trans.__("Line Wrap")
            }
          }),
          Object.freeze({
            name: "matchBrackets",
            default: true,
            factory: () => createConditionalExtension([
              bracketMatching(),
              // closeBracketsKeymap must have higher precedence over defaultKeymap
              Prec.high(keymap.of(closeBracketsKeymap))
            ]),
            schema: {
              type: "boolean",
              title: trans.__("Match Brackets")
            }
          }),
          Object.freeze({
            name: "rectangularSelection",
            default: true,
            factory: () => createConditionalExtension([
              rectangularSelection(),
              crosshairCursor()
            ]),
            schema: {
              type: "boolean",
              title: trans.__("Rectangular selection"),
              description: trans.__("Rectangular (block) selection can be created by dragging the mouse pointer while holding the left mouse button and the Alt key. When the Alt key is pressed, a crosshair cursor will appear, indicating that the rectangular selection mode is active.")
            }
          }),
          Object.freeze({
            name: "readOnly",
            default: false,
            factory: () => createConfigurableExtension((value) => [
              EditorState.readOnly.of(value),
              value ? EditorView.editorAttributes.of({ class: READ_ONLY_CLASS }) : []
            ])
          }),
          Object.freeze({
            name: "rulers",
            default: [],
            factory: () => createConfigurableExtension((value) => value.length > 0 ? rulers(value) : []),
            schema: {
              type: "array",
              title: trans.__("Rulers"),
              items: {
                type: "number",
                minimum: 0
              }
            }
          }),
          Object.freeze({
            name: "extendSelection",
            default: true,
            factory: () => createConditionalExtension(keymap.of([
              {
                key: "Mod-Shift-l",
                run: selectSelectionMatches,
                preventDefault: true
              },
              { key: "Mod-d", run: selectNextOccurrence, preventDefault: true }
            ]))
          }),
          Object.freeze({
            // Whether to activate the native CodeMirror search panel or not.
            name: "searchWithCM",
            default: false,
            factory: () => createConditionalExtension(keymap.of([
              {
                key: "Mod-f",
                run: openSearchPanel,
                scope: "editor search-panel"
              },
              {
                key: "F3",
                run: findNext,
                shift: findPrevious,
                scope: "editor search-panel",
                preventDefault: true
              },
              {
                key: "Mod-g",
                run: findNext,
                shift: findPrevious,
                scope: "editor search-panel",
                preventDefault: true
              },
              {
                key: "Escape",
                run: closeSearchPanel,
                scope: "editor search-panel"
              }
            ]))
          }),
          Object.freeze({
            name: "scrollPastEnd",
            default: false,
            factory: (options2) => options2.inline ? null : createConditionalExtension(scrollPastEnd())
          }),
          Object.freeze({
            name: "smartIndent",
            default: true,
            factory: () => createConditionalExtension(indentOnInput()),
            schema: {
              type: "boolean",
              title: trans.__("Smart Indentation")
            }
          }),
          /**
           * tabFocusable
           *
           * Can the user use the tab key to focus on / enter the CodeMirror editor?
           * If this is false, the CodeMirror editor can still be focused (via
           * mouse-click, for example), just not via tab key navigation.
           *
           * It can be useful to set tabFocusable to false when the editor is
           * embedded in a context that provides an alternative to the tab key for
           * navigation. For example, the Notebook widget allows the user to move
           * from one cell to another using the up and down arrow keys and to enter
           * and exit the CodeMirror editor associated with that cell by pressing
           * the enter and escape keys, respectively.
           */
          Object.freeze({
            name: "tabFocusable",
            // The default for this needs to be true because the CodeMirror editor
            // is used in lots of different places. By default, a user should be
            // able to tab into a CodeMirror editor on the page, and by default, the
            // user should be able to get out of the editor by pressing the escape
            // key then immediately pressing the tab key (or shift+tab to go
            // backwards on the page). If there are places in the app where this
            // model of user interaction doesn't make sense or is broken, those
            // places should be remedied on a case-by-case basis, **not** by making
            // `tabFocusable` false by default.
            default: true,
            factory: () => createConditionalExtension(EditorView.contentAttributes.of({
              tabIndex: "0"
            }), EditorView.contentAttributes.of({
              tabIndex: "-1"
            }))
          }),
          Object.freeze({
            name: "tabSize",
            default: 4,
            factory: () => createConfigurableExtension((value) => EditorState.tabSize.of(value)),
            schema: {
              type: "number",
              title: trans.__("Tab size")
            }
          }),
          Object.freeze({
            name: "tooltips",
            factory: () => (
              // we need `absolute` due to use of `contain: layout` in lumino;
              // we attach to body to ensure cursor collaboration tooltip is
              // visible in first line of the editor.
              createImmutableExtension(tooltips({
                position: "absolute",
                parent: document.body
              }))
            )
          }),
          Object.freeze({
            name: "allowMultipleSelections",
            default: true,
            factory: () => createConfigurableExtension((value) => EditorState.allowMultipleSelections.of(value)),
            schema: {
              type: "boolean",
              title: trans.__("Multiple selections")
            }
          }),
          Object.freeze({
            name: "customStyles",
            factory: () => createConfigurableExtension((config) => customTheme(config)),
            default: {
              fontFamily: null,
              fontSize: null,
              lineHeight: null
            },
            schema: {
              title: trans.__("Custom editor styles"),
              type: "object",
              properties: {
                fontFamily: {
                  type: ["string", "null"],
                  title: trans.__("Font Family")
                },
                fontSize: {
                  type: ["number", "null"],
                  minimum: 1,
                  maximum: 100,
                  title: trans.__("Font Size")
                },
                lineHeight: {
                  type: ["number", "null"],
                  title: trans.__("Line Height")
                }
              },
              additionalProperties: false
            }
          })
        ];
        if (themes) {
          extensions.push(Object.freeze({
            name: "theme",
            default: "jupyter",
            factory: () => createConfigurableExtension((value) => themes.getTheme(value)),
            schema: {
              type: "string",
              title: trans.__("Theme"),
              description: trans.__("CodeMirror theme")
            }
          }));
        }
        if (translator) {
          extensions.push(Object.freeze({
            name: "translation",
            // The list of internal strings is available at https://codemirror.net/examples/translate/
            default: {
              // @codemirror/view
              "Control character": trans.__("Control character"),
              // @codemirror/commands
              "Selection deleted": trans.__("Selection deleted"),
              // @codemirror/language
              "Folded lines": trans.__("Folded lines"),
              "Unfolded lines": trans.__("Unfolded lines"),
              to: trans.__("to"),
              "folded code": trans.__("folded code"),
              unfold: trans.__("unfold"),
              "Fold line": trans.__("Fold line"),
              "Unfold line": trans.__("Unfold line"),
              // @codemirror/search
              "Go to line": trans.__("Go to line"),
              go: trans.__("go"),
              Find: trans.__("Find"),
              Replace: trans.__("Replace"),
              next: trans.__("next"),
              previous: trans.__("previous"),
              all: trans.__("all"),
              "match case": trans.__("match case"),
              replace: trans.__("replace"),
              "replace all": trans.__("replace all"),
              close: trans.__("close"),
              "current match": trans.__("current match"),
              "replaced $ matches": trans.__("replaced $ matches"),
              "replaced match on line $": trans.__("replaced match on line $"),
              "on line": trans.__("on line"),
              // @codemirror/autocomplete
              Completions: trans.__("Completions"),
              // @codemirror/lint
              Diagnostics: trans.__("Diagnostics"),
              "No diagnostics": trans.__("No diagnostics")
            },
            factory: () => createConfigurableExtension((value) => EditorState.phrases.of(value))
          }));
        }
        return extensions;
      }
      EditorExtensionRegistry2.getDefaultExtensions = getDefaultExtensions;
    })(EditorExtensionRegistry || (EditorExtensionRegistry = {}));
  }
});

// ../../node_modules/@jupyterlab/codemirror/node_modules/@jupyterlab/coreutils/lib/activitymonitor.js
var require_activitymonitor = __commonJS({
  "../../node_modules/@jupyterlab/codemirror/node_modules/@jupyterlab/coreutils/lib/activitymonitor.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.ActivityMonitor = void 0;
    var signaling_1 = (init_index_es6(), __toCommonJS(index_es6_exports));
    var ActivityMonitor = class {
      /**
       * Construct a new activity monitor.
       */
      constructor(options) {
        this._timer = -1;
        this._timeout = -1;
        this._isDisposed = false;
        this._activityStopped = new signaling_1.Signal(this);
        options.signal.connect(this._onSignalFired, this);
        this._timeout = options.timeout || 1e3;
      }
      /**
       * A signal emitted when activity has ceased.
       */
      get activityStopped() {
        return this._activityStopped;
      }
      /**
       * The timeout associated with the monitor, in milliseconds.
       */
      get timeout() {
        return this._timeout;
      }
      set timeout(value) {
        this._timeout = value;
      }
      /**
       * Test whether the monitor has been disposed.
       *
       * #### Notes
       * This is a read-only property.
       */
      get isDisposed() {
        return this._isDisposed;
      }
      /**
       * Dispose of the resources used by the activity monitor.
       */
      dispose() {
        if (this._isDisposed) {
          return;
        }
        this._isDisposed = true;
        signaling_1.Signal.clearData(this);
      }
      /**
       * A signal handler for the monitored signal.
       */
      _onSignalFired(sender, args2) {
        clearTimeout(this._timer);
        this._sender = sender;
        this._args = args2;
        this._timer = setTimeout(() => {
          this._activityStopped.emit({
            sender: this._sender,
            args: this._args
          });
        }, this._timeout);
      }
    };
    exports2.ActivityMonitor = ActivityMonitor;
  }
});

// ../../node_modules/@jupyterlab/codemirror/node_modules/@jupyterlab/coreutils/lib/interfaces.js
var require_interfaces = __commonJS({
  "../../node_modules/@jupyterlab/codemirror/node_modules/@jupyterlab/coreutils/lib/interfaces.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
  }
});

// ../../node_modules/@jupyterlab/codemirror/node_modules/@jupyterlab/coreutils/lib/lru.js
var require_lru = __commonJS({
  "../../node_modules/@jupyterlab/codemirror/node_modules/@jupyterlab/coreutils/lib/lru.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.LruCache = void 0;
    var DEFAULT_MAX_SIZE = 128;
    var LruCache = class {
      constructor(options = {}) {
        this._map = /* @__PURE__ */ new Map();
        this._maxSize = (options === null || options === void 0 ? void 0 : options.maxSize) || DEFAULT_MAX_SIZE;
      }
      /**
       * Return the current size of the cache.
       */
      get size() {
        return this._map.size;
      }
      /**
       * Clear the values in the cache.
       */
      clear() {
        this._map.clear();
      }
      /**
       * Get a value (or null) from the cache, pushing the item to the front of the cache.
       */
      get(key) {
        const item = this._map.get(key) || null;
        if (item != null) {
          this._map.delete(key);
          this._map.set(key, item);
        }
        return item;
      }
      /**
       * Set a value in the cache, potentially evicting an old item.
       */
      set(key, value) {
        if (this._map.size >= this._maxSize) {
          this._map.delete(this._map.keys().next().value);
        }
        this._map.set(key, value);
      }
    };
    exports2.LruCache = LruCache;
  }
});

// ../../node_modules/@jupyterlab/codemirror/node_modules/@jupyterlab/coreutils/lib/markdowncodeblocks.js
var require_markdowncodeblocks = __commonJS({
  "../../node_modules/@jupyterlab/codemirror/node_modules/@jupyterlab/coreutils/lib/markdowncodeblocks.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.MarkdownCodeBlocks = void 0;
    var MarkdownCodeBlocks;
    (function(MarkdownCodeBlocks2) {
      MarkdownCodeBlocks2.CODE_BLOCK_MARKER = "```";
      const markdownExtensions = [
        ".markdown",
        ".mdown",
        ".mkdn",
        ".md",
        ".mkd",
        ".mdwn",
        ".mdtxt",
        ".mdtext",
        ".text",
        ".txt",
        ".Rmd"
      ];
      class MarkdownCodeBlock {
        constructor(startLine) {
          this.startLine = startLine;
          this.code = "";
          this.endLine = -1;
        }
      }
      MarkdownCodeBlocks2.MarkdownCodeBlock = MarkdownCodeBlock;
      function isMarkdown(extension) {
        return markdownExtensions.indexOf(extension) > -1;
      }
      MarkdownCodeBlocks2.isMarkdown = isMarkdown;
      function findMarkdownCodeBlocks(text2) {
        if (!text2 || text2 === "") {
          return [];
        }
        const lines = text2.split("\n");
        const codeBlocks = [];
        let currentBlock = null;
        for (let lineIndex = 0; lineIndex < lines.length; lineIndex++) {
          const line = lines[lineIndex];
          const lineContainsMarker = line.indexOf(MarkdownCodeBlocks2.CODE_BLOCK_MARKER) === 0;
          const constructingBlock = currentBlock != null;
          if (!lineContainsMarker && !constructingBlock) {
            continue;
          }
          if (!constructingBlock) {
            currentBlock = new MarkdownCodeBlock(lineIndex);
            const firstIndex = line.indexOf(MarkdownCodeBlocks2.CODE_BLOCK_MARKER);
            const lastIndex = line.lastIndexOf(MarkdownCodeBlocks2.CODE_BLOCK_MARKER);
            const isSingleLine = firstIndex !== lastIndex;
            if (isSingleLine) {
              currentBlock.code = line.substring(firstIndex + MarkdownCodeBlocks2.CODE_BLOCK_MARKER.length, lastIndex);
              currentBlock.endLine = lineIndex;
              codeBlocks.push(currentBlock);
              currentBlock = null;
            }
          } else if (currentBlock) {
            if (lineContainsMarker) {
              currentBlock.endLine = lineIndex - 1;
              codeBlocks.push(currentBlock);
              currentBlock = null;
            } else {
              currentBlock.code += line + "\n";
            }
          }
        }
        return codeBlocks;
      }
      MarkdownCodeBlocks2.findMarkdownCodeBlocks = findMarkdownCodeBlocks;
    })(MarkdownCodeBlocks || (exports2.MarkdownCodeBlocks = MarkdownCodeBlocks = {}));
  }
});

// ../../node_modules/@jupyterlab/codemirror/node_modules/@jupyterlab/coreutils/lib/url.js
var require_url = __commonJS({
  "../../node_modules/@jupyterlab/codemirror/node_modules/@jupyterlab/coreutils/lib/url.js"(exports2) {
    "use strict";
    var __importDefault2 = exports2 && exports2.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.URLExt = void 0;
    var path_1 = __require("path");
    var url_parse_1 = __importDefault2(require_url_parse());
    var URLExt;
    (function(URLExt2) {
      function parse(url) {
        if (typeof document !== "undefined" && document) {
          const a = document.createElement("a");
          a.href = url;
          return a;
        }
        return (0, url_parse_1.default)(url);
      }
      URLExt2.parse = parse;
      function getHostName(url) {
        return (0, url_parse_1.default)(url).hostname;
      }
      URLExt2.getHostName = getHostName;
      function normalize(url) {
        return url && parse(url).toString();
      }
      URLExt2.normalize = normalize;
      function join(...parts) {
        let u = (0, url_parse_1.default)(parts[0], {});
        const isSchemaLess = u.protocol === "" && u.slashes;
        if (isSchemaLess) {
          u = (0, url_parse_1.default)(parts[0], "https:" + parts[0]);
        }
        const prefix = `${isSchemaLess ? "" : u.protocol}${u.slashes ? "//" : ""}${u.auth}${u.auth ? "@" : ""}${u.host}`;
        const path2 = path_1.posix.join(`${!!prefix && u.pathname[0] !== "/" ? "/" : ""}${u.pathname}`, ...parts.slice(1));
        return `${prefix}${path2 === "." ? "" : path2}`;
      }
      URLExt2.join = join;
      function encodeParts(url) {
        return join(...url.split("/").map(encodeURIComponent));
      }
      URLExt2.encodeParts = encodeParts;
      function objectToQueryString(value) {
        const keys2 = Object.keys(value).filter((key) => key.length > 0);
        if (!keys2.length) {
          return "";
        }
        return "?" + keys2.map((key) => {
          const content = encodeURIComponent(String(value[key]));
          return key + (content ? "=" + content : "");
        }).join("&");
      }
      URLExt2.objectToQueryString = objectToQueryString;
      function queryStringToObject(value) {
        return value.replace(/^\?/, "").split("&").reduce((acc, val) => {
          const [key, value2] = val.split("=");
          if (key.length > 0) {
            acc[key] = decodeURIComponent(value2 || "");
          }
          return acc;
        }, {});
      }
      URLExt2.queryStringToObject = queryStringToObject;
      function isLocal(url, allowRoot = false) {
        const { protocol } = parse(url);
        return (!protocol || url.toLowerCase().indexOf(protocol) !== 0) && (allowRoot ? url.indexOf("//") !== 0 : url.indexOf("/") !== 0);
      }
      URLExt2.isLocal = isLocal;
    })(URLExt || (exports2.URLExt = URLExt = {}));
  }
});

// ../../node_modules/@jupyterlab/codemirror/node_modules/@jupyterlab/coreutils/lib/pageconfig.js
var require_pageconfig = __commonJS({
  "../../node_modules/@jupyterlab/codemirror/node_modules/@jupyterlab/coreutils/lib/pageconfig.js"(exports, module) {
    "use strict";
    var __importDefault = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.PageConfig = void 0;
    var coreutils_1 = require_dist();
    var minimist_1 = __importDefault(require_minimist());
    var url_1 = require_url();
    var PageConfig;
    (function(PageConfig) {
      function getOption(name) {
        if (configData) {
          return configData[name] || getBodyData(name);
        }
        configData = /* @__PURE__ */ Object.create(null);
        let found = false;
        if (typeof document !== "undefined" && document) {
          const el = document.getElementById("jupyter-config-data");
          if (el) {
            configData = JSON.parse(el.textContent || "");
            found = true;
          }
        }
        if (!found && typeof process !== "undefined" && process.argv) {
          try {
            const cli = (0, minimist_1.default)(process.argv.slice(2));
            const path = __require("path");
            let fullPath = "";
            if ("jupyter-config-data" in cli) {
              fullPath = path.resolve(cli["jupyter-config-data"]);
            } else if ("JUPYTER_CONFIG_DATA" in process.env) {
              fullPath = path.resolve(process.env["JUPYTER_CONFIG_DATA"]);
            }
            if (fullPath) {
              configData = eval("require")(fullPath);
            }
          } catch (e) {
            console.error(e);
          }
        }
        if (!coreutils_1.JSONExt.isObject(configData)) {
          configData = /* @__PURE__ */ Object.create(null);
        } else {
          for (const key in configData) {
            if (typeof configData[key] !== "string") {
              configData[key] = JSON.stringify(configData[key]);
            }
          }
        }
        return configData[name] || getBodyData(name);
      }
      PageConfig.getOption = getOption;
      function setOption(name2, value) {
        const last2 = getOption(name2);
        configData[name2] = value;
        return last2;
      }
      PageConfig.setOption = setOption;
      function getBaseUrl() {
        return url_1.URLExt.normalize(getOption("baseUrl") || "/");
      }
      PageConfig.getBaseUrl = getBaseUrl;
      function getTreeUrl() {
        return url_1.URLExt.join(getBaseUrl(), getOption("treeUrl"));
      }
      PageConfig.getTreeUrl = getTreeUrl;
      function getShareUrl() {
        return url_1.URLExt.normalize(getOption("shareUrl") || getBaseUrl());
      }
      PageConfig.getShareUrl = getShareUrl;
      function getTreeShareUrl() {
        return url_1.URLExt.normalize(url_1.URLExt.join(getShareUrl(), getOption("treeUrl")));
      }
      PageConfig.getTreeShareUrl = getTreeShareUrl;
      function getUrl(options) {
        var _a, _b, _c, _d;
        let path2 = options.toShare ? getShareUrl() : getBaseUrl();
        const mode = (_a = options.mode) !== null && _a !== void 0 ? _a : getOption("mode");
        const workspace = (_b = options.workspace) !== null && _b !== void 0 ? _b : getOption("workspace");
        const labOrDoc = mode === "single-document" ? "doc" : "lab";
        path2 = url_1.URLExt.join(path2, labOrDoc);
        if (workspace !== PageConfig.defaultWorkspace) {
          path2 = url_1.URLExt.join(path2, "workspaces", encodeURIComponent((_c = getOption("workspace")) !== null && _c !== void 0 ? _c : PageConfig.defaultWorkspace));
        }
        const treePath = (_d = options.treePath) !== null && _d !== void 0 ? _d : getOption("treePath");
        if (treePath) {
          path2 = url_1.URLExt.join(path2, "tree", url_1.URLExt.encodeParts(treePath));
        }
        return path2;
      }
      PageConfig.getUrl = getUrl;
      PageConfig.defaultWorkspace = "default";
      function getWsUrl(baseUrl) {
        let wsUrl = getOption("wsUrl");
        if (!wsUrl) {
          baseUrl = baseUrl ? url_1.URLExt.normalize(baseUrl) : getBaseUrl();
          if (baseUrl.indexOf("http") !== 0) {
            return "";
          }
          wsUrl = "ws" + baseUrl.slice(4);
        }
        return url_1.URLExt.normalize(wsUrl);
      }
      PageConfig.getWsUrl = getWsUrl;
      function getNBConvertURL({ path: path2, format, download }) {
        const notebookPath = url_1.URLExt.encodeParts(path2);
        const url = url_1.URLExt.join(getBaseUrl(), "nbconvert", format, notebookPath);
        if (download) {
          return url + "?download=true";
        }
        return url;
      }
      PageConfig.getNBConvertURL = getNBConvertURL;
      function getToken() {
        return getOption("token") || getBodyData("jupyterApiToken");
      }
      PageConfig.getToken = getToken;
      function getNotebookVersion() {
        const notebookVersion = getOption("notebookVersion");
        if (notebookVersion === "") {
          return [0, 0, 0];
        }
        return JSON.parse(notebookVersion);
      }
      PageConfig.getNotebookVersion = getNotebookVersion;
      let configData = null;
      function getBodyData(key) {
        if (typeof document === "undefined" || !document.body) {
          return "";
        }
        const val = document.body.dataset[key];
        if (typeof val === "undefined") {
          return "";
        }
        return decodeURIComponent(val);
      }
      let Extension;
      (function(Extension2) {
        function populate(key) {
          try {
            const raw = getOption(key);
            if (raw) {
              return JSON.parse(raw);
            }
          } catch (error) {
            console.warn(`Unable to parse ${key}.`, error);
          }
          return [];
        }
        Extension2.deferred = populate("deferredExtensions");
        Extension2.disabled = populate("disabledExtensions");
        function isDeferred(id2) {
          const separatorIndex = id2.indexOf(":");
          let extName = "";
          if (separatorIndex !== -1) {
            extName = id2.slice(0, separatorIndex);
          }
          return Extension2.deferred.some((val) => val === id2 || extName && val === extName);
        }
        Extension2.isDeferred = isDeferred;
        function isDisabled(id2) {
          const separatorIndex = id2.indexOf(":");
          let extName = "";
          if (separatorIndex !== -1) {
            extName = id2.slice(0, separatorIndex);
          }
          return Extension2.disabled.some((val) => val === id2 || extName && val === extName);
        }
        Extension2.isDisabled = isDisabled;
      })(Extension = PageConfig.Extension || (PageConfig.Extension = {}));
    })(PageConfig || (exports.PageConfig = PageConfig = {}));
  }
});

// ../../node_modules/@jupyterlab/codemirror/node_modules/@jupyterlab/coreutils/lib/path.js
var require_path = __commonJS({
  "../../node_modules/@jupyterlab/codemirror/node_modules/@jupyterlab/coreutils/lib/path.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.PathExt = void 0;
    var path_1 = __require("path");
    var PathExt2;
    (function(PathExt3) {
      function join(...paths) {
        const path2 = path_1.posix.join(...paths);
        return path2 === "." ? "" : removeSlash(path2);
      }
      PathExt3.join = join;
      function joinWithLeadingSlash(...paths) {
        const path2 = path_1.posix.join(...paths);
        return path2 === "." ? "" : path2;
      }
      PathExt3.joinWithLeadingSlash = joinWithLeadingSlash;
      function basename(path2, ext) {
        return path_1.posix.basename(path2, ext);
      }
      PathExt3.basename = basename;
      function dirname(path2) {
        const dir = removeSlash(path_1.posix.dirname(path2));
        return dir === "." ? "" : dir;
      }
      PathExt3.dirname = dirname;
      function extname(path2) {
        return path_1.posix.extname(path2);
      }
      PathExt3.extname = extname;
      function normalize(path2) {
        if (path2 === "") {
          return "";
        }
        return removeSlash(path_1.posix.normalize(path2));
      }
      PathExt3.normalize = normalize;
      function resolve(...parts) {
        return removeSlash(path_1.posix.resolve(...parts));
      }
      PathExt3.resolve = resolve;
      function relative(from2, to) {
        return removeSlash(path_1.posix.relative(from2, to));
      }
      PathExt3.relative = relative;
      function normalizeExtension(extension) {
        if (extension.length > 0 && extension.indexOf(".") !== 0) {
          extension = `.${extension}`;
        }
        return extension;
      }
      PathExt3.normalizeExtension = normalizeExtension;
      function removeSlash(path2) {
        if (path2.indexOf("/") === 0) {
          path2 = path2.slice(1);
        }
        return path2;
      }
      PathExt3.removeSlash = removeSlash;
    })(PathExt2 || (exports2.PathExt = PathExt2 = {}));
  }
});

// ../../node_modules/@jupyterlab/codemirror/node_modules/@jupyterlab/coreutils/lib/signal.js
var require_signal = __commonJS({
  "../../node_modules/@jupyterlab/codemirror/node_modules/@jupyterlab/coreutils/lib/signal.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.signalToPromise = void 0;
    var coreutils_12 = require_dist();
    function signalToPromise(signal, timeout) {
      const waitForSignal = new coreutils_12.PromiseDelegate();
      function cleanup() {
        signal.disconnect(slot);
      }
      function slot(sender, args2) {
        cleanup();
        waitForSignal.resolve([sender, args2]);
      }
      signal.connect(slot);
      if ((timeout !== null && timeout !== void 0 ? timeout : 0) > 0) {
        setTimeout(() => {
          cleanup();
          waitForSignal.reject(`Signal not emitted within ${timeout} ms.`);
        }, timeout);
      }
      return waitForSignal.promise;
    }
    exports2.signalToPromise = signalToPromise;
  }
});

// ../../node_modules/@jupyterlab/codemirror/node_modules/@jupyterlab/coreutils/lib/text.js
var require_text = __commonJS({
  "../../node_modules/@jupyterlab/codemirror/node_modules/@jupyterlab/coreutils/lib/text.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.Text = void 0;
    var Text2;
    (function(Text3) {
      const HAS_SURROGATES = "\u{1D41A}".length > 1;
      function jsIndexToCharIndex(jsIdx, text2) {
        if (HAS_SURROGATES) {
          return jsIdx;
        }
        let charIdx = jsIdx;
        for (let i = 0; i + 1 < text2.length && i < jsIdx; i++) {
          const charCode = text2.charCodeAt(i);
          if (charCode >= 55296 && charCode <= 56319) {
            const nextCharCode = text2.charCodeAt(i + 1);
            if (nextCharCode >= 56320 && nextCharCode <= 57343) {
              charIdx--;
              i++;
            }
          }
        }
        return charIdx;
      }
      Text3.jsIndexToCharIndex = jsIndexToCharIndex;
      function charIndexToJsIndex(charIdx, text2) {
        if (HAS_SURROGATES) {
          return charIdx;
        }
        let jsIdx = charIdx;
        for (let i = 0; i + 1 < text2.length && i < jsIdx; i++) {
          const charCode = text2.charCodeAt(i);
          if (charCode >= 55296 && charCode <= 56319) {
            const nextCharCode = text2.charCodeAt(i + 1);
            if (nextCharCode >= 56320 && nextCharCode <= 57343) {
              jsIdx++;
              i++;
            }
          }
        }
        return jsIdx;
      }
      Text3.charIndexToJsIndex = charIndexToJsIndex;
      function camelCase(str, upper = false) {
        return str.replace(/^(\w)|[\s-_:]+(\w)/g, function(match, p1, p2) {
          if (p2) {
            return p2.toUpperCase();
          } else {
            return upper ? p1.toUpperCase() : p1.toLowerCase();
          }
        });
      }
      Text3.camelCase = camelCase;
      function titleCase(str) {
        return (str || "").toLowerCase().split(" ").map((word2) => word2.charAt(0).toUpperCase() + word2.slice(1)).join(" ");
      }
      Text3.titleCase = titleCase;
    })(Text2 || (exports2.Text = Text2 = {}));
  }
});

// ../../node_modules/@jupyterlab/codemirror/node_modules/@jupyterlab/coreutils/lib/time.js
var require_time = __commonJS({
  "../../node_modules/@jupyterlab/codemirror/node_modules/@jupyterlab/coreutils/lib/time.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.Time = void 0;
    var UNITS = [
      { name: "years", milliseconds: 365 * 24 * 60 * 60 * 1e3 },
      { name: "months", milliseconds: 30 * 24 * 60 * 60 * 1e3 },
      { name: "days", milliseconds: 24 * 60 * 60 * 1e3 },
      { name: "hours", milliseconds: 60 * 60 * 1e3 },
      { name: "minutes", milliseconds: 60 * 1e3 },
      { name: "seconds", milliseconds: 1e3 }
    ];
    var Time;
    (function(Time2) {
      function formatHuman(value) {
        const lang = document.documentElement.lang || "en";
        const formatter = new Intl.RelativeTimeFormat(lang, { numeric: "auto" });
        const delta = new Date(value).getTime() - Date.now();
        for (let unit of UNITS) {
          const amount = Math.ceil(delta / unit.milliseconds);
          if (amount === 0) {
            continue;
          }
          return formatter.format(amount, unit.name);
        }
        return formatter.format(0, "seconds");
      }
      Time2.formatHuman = formatHuman;
      function format(value) {
        const lang = document.documentElement.lang || "en";
        const formatter = new Intl.DateTimeFormat(lang, {
          dateStyle: "short",
          timeStyle: "short"
        });
        return formatter.format(new Date(value));
      }
      Time2.format = format;
    })(Time || (exports2.Time = Time = {}));
  }
});

// ../../node_modules/@jupyterlab/codemirror/node_modules/@jupyterlab/coreutils/lib/index.js
var require_lib = __commonJS({
  "../../node_modules/@jupyterlab/codemirror/node_modules/@jupyterlab/coreutils/lib/index.js"(exports2) {
    "use strict";
    var __createBinding = exports2 && exports2.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __exportStar = exports2 && exports2.__exportStar || function(m, exports3) {
      for (var p2 in m)
        if (p2 !== "default" && !Object.prototype.hasOwnProperty.call(exports3, p2))
          __createBinding(exports3, m, p2);
    };
    Object.defineProperty(exports2, "__esModule", { value: true });
    __exportStar(require_activitymonitor(), exports2);
    __exportStar(require_interfaces(), exports2);
    __exportStar(require_lru(), exports2);
    __exportStar(require_markdowncodeblocks(), exports2);
    __exportStar(require_pageconfig(), exports2);
    __exportStar(require_path(), exports2);
    __exportStar(require_signal(), exports2);
    __exportStar(require_text(), exports2);
    __exportStar(require_time(), exports2);
    __exportStar(require_url(), exports2);
  }
});

// ../../node_modules/@lezer/generator/dist/index.js
function walkExprs(exprs, f) {
  let result = null;
  for (let i = 0; i < exprs.length; i++) {
    let expr = exprs[i].walk(f);
    if (expr != exprs[i] && !result)
      result = exprs.slice(0, i);
    if (result)
      result.push(expr);
  }
  return result || exprs;
}
function exprEq(a, b) {
  return a.constructor == b.constructor && a.eq(b);
}
function exprsEq(a, b) {
  return a.length == b.length && a.every((e, i) => exprEq(e, b[i]));
}
function maybeParens(node, parent) {
  return node.prec < parent.prec ? "(" + node.toString() + ")" : node.toString();
}
function hasProps(props) {
  for (let _p in props)
    return true;
  return false;
}
function cmpSet(a, b, cmp) {
  if (a.length != b.length)
    return a.length - b.length;
  for (let i = 0; i < a.length; i++) {
    let diff = cmp(a[i], b[i]);
    if (diff)
      return diff;
  }
  return 0;
}
function union(a, b) {
  if (a.length == 0 || a == b)
    return b;
  if (b.length == 0)
    return a;
  let result = a.slice();
  for (let value of b)
    if (!a.includes(value))
      result.push(value);
  return result.sort();
}
function charFor(n) {
  return n > MAX_CHAR ? "\u221E" : n == 10 ? "\\n" : n == 13 ? "\\r" : n < 32 || n >= 55296 && n < 57343 ? "\\u{" + n.toString(16) + "}" : String.fromCharCode(n);
}
function minimize(states, start) {
  let partition = /* @__PURE__ */ Object.create(null);
  let byAccepting = /* @__PURE__ */ Object.create(null);
  for (let state of states) {
    let id2 = ids(state.accepting);
    let group = byAccepting[id2] || (byAccepting[id2] = []);
    group.push(state);
    partition[state.id] = group;
  }
  for (; ; ) {
    let split = false, newPartition = /* @__PURE__ */ Object.create(null);
    for (let state of states) {
      if (newPartition[state.id])
        continue;
      let group = partition[state.id];
      if (group.length == 1) {
        newPartition[group[0].id] = group;
        continue;
      }
      let parts = [];
      groups:
        for (let state2 of group) {
          for (let p2 of parts) {
            if (isEquivalent(state2, p2[0], partition)) {
              p2.push(state2);
              continue groups;
            }
          }
          parts.push([state2]);
        }
      if (parts.length > 1)
        split = true;
      for (let p2 of parts)
        for (let s of p2)
          newPartition[s.id] = p2;
    }
    if (!split)
      return applyMinimization(states, start, partition);
    partition = newPartition;
  }
}
function isEquivalent(a, b, partition) {
  if (a.edges.length != b.edges.length)
    return false;
  for (let i = 0; i < a.edges.length; i++) {
    let eA = a.edges[i], eB = b.edges[i];
    if (eA.from != eB.from || eA.to != eB.to || partition[eA.target.id] != partition[eB.target.id])
      return false;
  }
  return true;
}
function applyMinimization(states, start, partition) {
  for (let state of states) {
    for (let i = 0; i < state.edges.length; i++) {
      let edge = state.edges[i], target = partition[edge.target.id][0];
      if (target != edge.target)
        state.edges[i] = new Edge(edge.from, edge.to, target);
    }
  }
  return partition[start.id][0];
}
function exampleFromEdges(edges) {
  let str = "";
  for (let i = 0; i < edges.length; i++)
    str += String.fromCharCode(edges[i].from);
  return str;
}
function ids(elts) {
  let result = "";
  for (let elt of elts) {
    if (result.length)
      result += "-";
    result += elt.id;
  }
  return result;
}
function sameSet$1(a, b) {
  if (a.length != b.length)
    return false;
  for (let i = 0; i < a.length; i++)
    if (a[i] != b[i])
      return false;
  return true;
}
function mergeEdges(edges) {
  let separate = [], result = [];
  for (let edge of edges) {
    if (!separate.includes(edge.from))
      separate.push(edge.from);
    if (!separate.includes(edge.to))
      separate.push(edge.to);
  }
  separate.sort((a, b) => a - b);
  for (let i = 1; i < separate.length; i++) {
    let from2 = separate[i - 1], to = separate[i];
    let found2 = [];
    for (let edge of edges)
      if (edge.to > from2 && edge.from < to) {
        for (let target of edge.target.closure())
          if (!found2.includes(target))
            found2.push(target);
      }
    if (found2.length)
      result.push(new MergedEdge(from2, to, found2));
  }
  let eof = edges.filter(
    (e) => e.from == 65535 && e.to == 65535
    /* Seq.End */
  );
  if (eof.length) {
    let found2 = [];
    for (let edge of eof)
      for (let target of edge.target.closure())
        if (!found2.includes(target))
          found2.push(target);
    if (found2.length)
      result.push(new MergedEdge(65535, 65535, found2));
  }
  return result;
}
function parseGrammar(input) {
  let start = input.start;
  let rules = [];
  let prec = null;
  let tokens = null;
  let localTokens = [];
  let mainSkip = null;
  let scopedSkip = [];
  let dialects = [];
  let context = null;
  let external = [];
  let specialized = [];
  let props = [];
  let propSources = [];
  let tops = [];
  let sawTop = false;
  let autoDelim = false;
  while (input.type != "eof") {
    let start2 = input.start;
    if (input.eat("at", "top")) {
      if (input.type != "id")
        input.raise(`Top rules must have a name`, input.start);
      tops.push(parseRule(input, parseIdent(input)));
      sawTop = true;
    } else if (input.type == "at" && input.value == "tokens") {
      if (tokens)
        input.raise(`Multiple @tokens declaractions`, input.start);
      else
        tokens = parseTokens(input);
    } else if (input.eat("at", "local")) {
      input.expect("id", "tokens");
      localTokens.push(parseLocalTokens(input, start2));
    } else if (input.eat("at", "context")) {
      if (context)
        input.raise(`Multiple @context declarations`, start2);
      let id2 = parseIdent(input);
      input.expect("id", "from");
      let source = input.expect("string");
      context = new ContextDeclaration(start2, id2, source);
    } else if (input.eat("at", "external")) {
      if (input.eat("id", "tokens"))
        external.push(parseExternalTokens(input, start2));
      else if (input.eat("id", "prop"))
        props.push(parseExternalProp(input, start2));
      else if (input.eat("id", "extend"))
        specialized.push(parseExternalSpecialize(input, "extend", start2));
      else if (input.eat("id", "specialize"))
        specialized.push(parseExternalSpecialize(input, "specialize", start2));
      else if (input.eat("id", "propSource"))
        propSources.push(parseExternalPropSource(input, start2));
      else
        input.unexpected();
    } else if (input.eat("at", "dialects")) {
      input.expect("{");
      for (let first = true; !input.eat("}"); first = false) {
        if (!first)
          input.eat(",");
        dialects.push(parseIdent(input));
      }
    } else if (input.type == "at" && input.value == "precedence") {
      if (prec)
        input.raise(`Multiple precedence declarations`, input.start);
      prec = parsePrecedence(input);
    } else if (input.eat("at", "detectDelim")) {
      autoDelim = true;
    } else if (input.eat("at", "skip")) {
      let skip = parseBracedExpr(input);
      if (input.type == "{") {
        input.next();
        let rules2 = [], topRules = [];
        while (!input.eat("}")) {
          if (input.eat("at", "top")) {
            topRules.push(parseRule(input, parseIdent(input)));
            sawTop = true;
          } else {
            rules2.push(parseRule(input));
          }
        }
        scopedSkip.push({ expr: skip, topRules, rules: rules2 });
      } else {
        if (mainSkip)
          input.raise(`Multiple top-level skip declarations`, input.start);
        mainSkip = skip;
      }
    } else {
      rules.push(parseRule(input));
    }
  }
  if (!sawTop)
    return input.raise(`Missing @top declaration`);
  return new GrammarDeclaration(start, rules, tops, tokens, localTokens, context, external, specialized, propSources, prec, mainSkip, scopedSkip, dialects, props, autoDelim);
}
function parseRule(input, named) {
  let start = named ? named.start : input.start;
  let id2 = named || parseIdent(input);
  let props = parseProps(input);
  let params2 = [];
  if (input.eat("<"))
    while (!input.eat(">")) {
      if (params2.length)
        input.expect(",");
      params2.push(parseIdent(input));
    }
  let expr = parseBracedExpr(input);
  return new RuleDeclaration(start, id2, props, params2, expr);
}
function parseProps(input) {
  if (input.type != "[")
    return none$2;
  let props = [];
  input.expect("[");
  while (!input.eat("]")) {
    if (props.length)
      input.expect(",");
    props.push(parseProp(input));
  }
  return props;
}
function parseProp(input) {
  let start = input.start, value = [], name2 = input.value, at = input.type == "at";
  if (!input.eat("at") && !input.eat("id"))
    input.unexpected();
  if (input.eat("="))
    for (; ; ) {
      if (input.type == "string" || input.type == "id") {
        value.push(new PropPart(input.start, input.value, null));
        input.next();
      } else if (input.eat(".")) {
        value.push(new PropPart(input.start, ".", null));
      } else if (input.eat("{")) {
        value.push(new PropPart(input.start, null, input.expect("id")));
        input.expect("}");
      } else {
        break;
      }
    }
  return new Prop(start, at, name2, value);
}
function parseBracedExpr(input) {
  input.expect("{");
  let expr = parseExprChoice(input);
  input.expect("}");
  return expr;
}
function parseExprInner(input) {
  let start = input.start;
  if (input.eat("(")) {
    if (input.eat(")"))
      return new SequenceExpression(start, none$2, [none$2, none$2]);
    let expr = parseExprChoice(input);
    input.expect(")");
    return expr;
  } else if (input.type == "string") {
    let value = input.value;
    input.next();
    if (value.length == 0)
      return new SequenceExpression(start, none$2, [none$2, none$2]);
    return new LiteralExpression(start, value);
  } else if (input.eat("id", "_")) {
    return new AnyExpression(start);
  } else if (input.type == "set") {
    let content = input.value, invert = input.string[input.start] == "!";
    let unescaped = readString(content.replace(/\\.|-|"/g, (m) => {
      return m == "-" ? SET_MARKER : m == '"' ? '\\"' : m;
    }));
    let ranges = [];
    for (let pos = 0; pos < unescaped.length; ) {
      let code = unescaped.codePointAt(pos);
      pos += code > 65535 ? 2 : 1;
      if (pos < unescaped.length - 1 && unescaped[pos] == SET_MARKER) {
        let end = unescaped.codePointAt(pos + 1);
        pos += end > 65535 ? 3 : 2;
        if (end < code)
          input.raise("Invalid character range", input.start);
        addRange(input, ranges, code, end + 1);
      } else {
        if (code == SET_MARKER.charCodeAt(0))
          code = 45;
        addRange(input, ranges, code, code + 1);
      }
    }
    input.next();
    return new SetExpression(start, ranges.sort((a, b) => a[0] - b[0]), invert);
  } else if (input.type == "at" && (input.value == "specialize" || input.value == "extend")) {
    let { start: start2, value } = input;
    input.next();
    let props = parseProps(input);
    input.expect("<");
    let token = parseExprChoice(input), content;
    if (input.eat(",")) {
      content = parseExprChoice(input);
    } else if (token instanceof LiteralExpression) {
      content = token;
    } else {
      input.raise(`@${value} requires two arguments when its first argument isn't a literal string`);
    }
    input.expect(">");
    return new SpecializeExpression(start2, value, props, token, content);
  } else if (input.type == "at" && CharClasses.hasOwnProperty(input.value)) {
    let cls = new CharClass(input.start, input.value);
    input.next();
    return cls;
  } else if (input.type == "[") {
    let rule = parseRule(input, new Identifier(start, "_anon"));
    if (rule.params.length)
      input.raise(`Inline rules can't have parameters`, rule.start);
    return new InlineRuleExpression(start, rule);
  } else {
    let id2 = parseIdent(input);
    if (input.type == "[" || input.type == "{") {
      let rule = parseRule(input, id2);
      if (rule.params.length)
        input.raise(`Inline rules can't have parameters`, rule.start);
      return new InlineRuleExpression(start, rule);
    } else {
      if (input.eat(".") && id2.name == "std" && CharClasses.hasOwnProperty(input.value)) {
        let cls = new CharClass(start, input.value);
        input.next();
        return cls;
      }
      return new NameExpression(start, id2, parseArgs(input));
    }
  }
}
function parseArgs(input) {
  let args2 = [];
  if (input.eat("<"))
    while (!input.eat(">")) {
      if (args2.length)
        input.expect(",");
      args2.push(parseExprChoice(input));
    }
  return args2;
}
function addRange(input, ranges, from2, to) {
  if (!ranges.every(([a, b]) => b <= from2 || a >= to))
    input.raise("Overlapping character range", input.start);
  ranges.push([from2, to]);
}
function parseExprSuffix(input) {
  let start = input.start;
  let expr = parseExprInner(input);
  for (; ; ) {
    let kind = input.type;
    if (input.eat("*") || input.eat("?") || input.eat("+"))
      expr = new RepeatExpression(start, expr, kind);
    else
      return expr;
  }
}
function endOfSequence(input) {
  return input.type == "}" || input.type == ")" || input.type == "|" || input.type == "/" || input.type == "/\\" || input.type == "{" || input.type == "," || input.type == ">";
}
function parseExprSequence(input) {
  let start = input.start, exprs = [], markers = [none$2];
  do {
    for (; ; ) {
      let localStart = input.start, markerType;
      if (input.eat("~"))
        markerType = "ambig";
      else if (input.eat("!"))
        markerType = "prec";
      else
        break;
      markers[markers.length - 1] = markers[markers.length - 1].concat(new ConflictMarker(localStart, parseIdent(input), markerType));
    }
    if (endOfSequence(input))
      break;
    exprs.push(parseExprSuffix(input));
    markers.push(none$2);
  } while (!endOfSequence(input));
  if (exprs.length == 1 && markers.every((ms) => ms.length == 0))
    return exprs[0];
  return new SequenceExpression(start, exprs, markers, !exprs.length);
}
function parseExprChoice(input) {
  let start = input.start, left = parseExprSequence(input);
  if (!input.eat("|"))
    return left;
  let exprs = [left];
  do {
    exprs.push(parseExprSequence(input));
  } while (input.eat("|"));
  let empty2 = exprs.find((s) => s instanceof SequenceExpression && s.empty);
  if (empty2)
    input.raise("Empty expression in choice operator. If this is intentional, use () to make it explicit.", empty2.start);
  return new ChoiceExpression(start, exprs);
}
function parseIdent(input) {
  if (input.type != "id")
    input.unexpected();
  let start = input.start, name2 = input.value;
  input.next();
  return new Identifier(start, name2);
}
function parsePrecedence(input) {
  let start = input.start;
  input.next();
  input.expect("{");
  let items = [];
  while (!input.eat("}")) {
    if (items.length)
      input.eat(",");
    items.push({
      id: parseIdent(input),
      type: input.eat("at", "left") ? "left" : input.eat("at", "right") ? "right" : input.eat("at", "cut") ? "cut" : null
    });
  }
  return new PrecDeclaration(start, items);
}
function parseTokens(input) {
  let start = input.start;
  input.next();
  input.expect("{");
  let tokenRules = [];
  let literals = [];
  let precedences = [];
  let conflicts = [];
  while (!input.eat("}")) {
    if (input.type == "at" && input.value == "precedence") {
      precedences.push(parseTokenPrecedence(input));
    } else if (input.type == "at" && input.value == "conflict") {
      conflicts.push(parseTokenConflict(input));
    } else if (input.type == "string") {
      literals.push(new LiteralDeclaration(input.start, input.expect("string"), parseProps(input)));
    } else {
      tokenRules.push(parseRule(input));
    }
  }
  return new TokenDeclaration(start, precedences, conflicts, tokenRules, literals);
}
function parseLocalTokens(input, start) {
  input.expect("{");
  let tokenRules = [];
  let precedences = [];
  let fallback = null;
  while (!input.eat("}")) {
    if (input.type == "at" && input.value == "precedence") {
      precedences.push(parseTokenPrecedence(input));
    } else if (input.eat("at", "else") && !fallback) {
      fallback = { id: parseIdent(input), props: parseProps(input) };
    } else {
      tokenRules.push(parseRule(input));
    }
  }
  return new LocalTokenDeclaration(start, precedences, tokenRules, fallback);
}
function parseTokenPrecedence(input) {
  let start = input.start;
  input.next();
  input.expect("{");
  let tokens = [];
  while (!input.eat("}")) {
    if (tokens.length)
      input.eat(",");
    let expr = parseExprInner(input);
    if (expr instanceof LiteralExpression || expr instanceof NameExpression)
      tokens.push(expr);
    else
      input.raise(`Invalid expression in token precedences`, expr.start);
  }
  return new TokenPrecDeclaration(start, tokens);
}
function parseTokenConflict(input) {
  let start = input.start;
  input.next();
  input.expect("{");
  let a = parseExprInner(input);
  if (!(a instanceof LiteralExpression || a instanceof NameExpression))
    input.raise(`Invalid expression in token conflict`, a.start);
  input.eat(",");
  let b = parseExprInner(input);
  if (!(b instanceof LiteralExpression || b instanceof NameExpression))
    input.raise(`Invalid expression in token conflict`, b.start);
  input.expect("}");
  return new TokenConflictDeclaration(start, a, b);
}
function parseExternalTokenSet(input) {
  let tokens = [];
  input.expect("{");
  while (!input.eat("}")) {
    if (tokens.length)
      input.eat(",");
    let id2 = parseIdent(input);
    let props = parseProps(input);
    tokens.push({ id: id2, props });
  }
  return tokens;
}
function parseExternalTokens(input, start) {
  let id2 = parseIdent(input);
  input.expect("id", "from");
  let from2 = input.expect("string");
  return new ExternalTokenDeclaration(start, id2, from2, parseExternalTokenSet(input));
}
function parseExternalSpecialize(input, type, start) {
  let token = parseBracedExpr(input);
  let id2 = parseIdent(input);
  input.expect("id", "from");
  let from2 = input.expect("string");
  return new ExternalSpecializeDeclaration(start, type, token, id2, from2, parseExternalTokenSet(input));
}
function parseExternalPropSource(input, start) {
  let id2 = parseIdent(input);
  input.expect("id", "from");
  return new ExternalPropSourceDeclaration(start, id2, input.expect("string"));
}
function parseExternalProp(input, start) {
  let externalID = parseIdent(input);
  let id2 = input.eat("id", "as") ? parseIdent(input) : externalID;
  input.expect("id", "from");
  let from2 = input.expect("string");
  return new ExternalPropDeclaration(start, id2, externalID, from2);
}
function readString(string) {
  let point = /\\(?:u\{([\da-f]+)\}|u([\da-f]{4})|x([\da-f]{2})|([ntbrf0])|(.))|[^]/yig;
  let out = "", m;
  while (m = point.exec(string)) {
    let [all2, u1, u2, u3, single, unknown] = m;
    if (u1 || u2 || u3)
      out += String.fromCodePoint(parseInt(u1 || u2 || u3, 16));
    else if (single)
      out += single == "n" ? "\n" : single == "t" ? "	" : single == "0" ? "\0" : single == "r" ? "\r" : single == "f" ? "\f" : "\b";
    else if (unknown)
      out += unknown;
    else
      out += all2;
  }
  return out;
}
function hash(a, b) {
  return (a << 5) + a + b;
}
function hashString(h, s) {
  for (let i = 0; i < s.length; i++)
    h = hash(h, s.charCodeAt(i));
  return h;
}
function conflictsAt(group) {
  let result = Conflicts.none;
  for (let pos of group)
    result = result.join(pos.conflicts());
  return result;
}
function compareRepeatPrec(a, b) {
  for (let pos of a)
    if (pos.rule.name.repeated) {
      for (let posB of b)
        if (posB.rule.name == pos.rule.name) {
          if (pos.rule.isRepeatWrap && pos.pos == 2)
            return 1;
          if (posB.rule.isRepeatWrap && posB.pos == 2)
            return -1;
        }
    }
  return 0;
}
function cmpStr(a, b) {
  return a < b ? -1 : a > b ? 1 : 0;
}
function termsAhead(rule, pos, after, first) {
  let found2 = [];
  for (let i = pos + 1; i < rule.parts.length; i++) {
    let next = rule.parts[i], cont = false;
    if (next.terminal) {
      addTo(next, found2);
    } else
      for (let term of first[next.name]) {
        if (term == null)
          cont = true;
        else
          addTo(term, found2);
      }
    if (!cont)
      return found2;
  }
  for (let a of after)
    addTo(a, found2);
  return found2;
}
function eqSet(a, b) {
  if (a.length != b.length)
    return false;
  for (let i = 0; i < a.length; i++)
    if (!a[i].eq(b[i]))
      return false;
  return true;
}
function sameSet(a, b) {
  if (a.length != b.length)
    return false;
  for (let i = 0; i < a.length; i++)
    if (a[i] != b[i])
      return false;
  return true;
}
function hashPositions(set) {
  let h = 5381;
  for (let pos of set)
    h = hash(h, pos.hash);
  return h;
}
function closure(set, first) {
  let added = [], redo = [];
  function addFor(name2, ahead, ambigAhead, skipAhead, via) {
    for (let rule of name2.rules) {
      let add2 = added.find((a) => a.rule == rule);
      if (!add2) {
        let existing = set.find((p2) => p2.pos == 0 && p2.rule == rule);
        add2 = existing ? new Pos(rule, 0, existing.ahead.slice(), existing.ambigAhead, existing.skipAhead, existing.via) : new Pos(rule, 0, [], none$1, skipAhead, via);
        added.push(add2);
      }
      if (add2.skipAhead != skipAhead)
        throw new GenError("Inconsistent skip sets after " + via.trail());
      add2.ambigAhead = union(add2.ambigAhead, ambigAhead);
      for (let term of ahead)
        if (!add2.ahead.includes(term)) {
          add2.ahead.push(term);
          if (add2.rule.parts.length && !add2.rule.parts[0].terminal)
            addTo(add2, redo);
        }
    }
  }
  for (let pos of set) {
    let next = pos.next;
    if (next && !next.terminal)
      addFor(next, termsAhead(pos.rule, pos.pos, pos.ahead, first), pos.conflicts(pos.pos + 1).ambigGroups, pos.pos == pos.rule.parts.length - 1 ? pos.skipAhead : pos.rule.skip, pos);
  }
  while (redo.length) {
    let add2 = redo.pop();
    addFor(add2.rule.parts[0], termsAhead(add2.rule, 0, add2.ahead, first), union(add2.rule.conflicts[1].ambigGroups, add2.rule.parts.length == 1 ? add2.ambigAhead : none$1), add2.rule.parts.length == 1 ? add2.skipAhead : add2.rule.skip, add2);
  }
  let result = set.slice();
  for (let add2 of added) {
    add2.ahead.sort((a, b) => a.hash - b.hash);
    add2.finish();
    let origIndex = set.findIndex((p2) => p2.pos == 0 && p2.rule == add2.rule);
    if (origIndex > -1)
      result[origIndex] = add2;
    else
      result.push(add2);
  }
  return result.sort((a, b) => a.cmp(b));
}
function addTo(value, array) {
  if (!array.includes(value))
    array.push(value);
}
function computeFirstSets(terms) {
  let table = /* @__PURE__ */ Object.create(null);
  for (let t of terms.terms)
    if (!t.terminal)
      table[t.name] = [];
  for (; ; ) {
    let change = false;
    for (let nt of terms.terms)
      if (!nt.terminal)
        for (let rule of nt.rules) {
          let set = table[nt.name];
          let found2 = false, startLen = set.length;
          for (let part of rule.parts) {
            found2 = true;
            if (part.terminal) {
              addTo(part, set);
            } else {
              for (let t of table[part.name]) {
                if (t == null)
                  found2 = false;
                else
                  addTo(t, set);
              }
            }
            if (found2)
              break;
          }
          if (!found2)
            addTo(null, set);
          if (set.length > startLen)
            change = true;
        }
    if (!change)
      return table;
  }
}
function findConflictOrigin(a, b) {
  if (a.eqSimple(b))
    return "";
  function via(root, start) {
    let hist = [];
    for (let p2 = start.via; !p2.eqSimple(root); p2 = p2.via)
      hist.push(p2);
    if (!hist.length)
      return "";
    hist.unshift(start);
    return hist.reverse().map((p2, i) => "\n" + "  ".repeat(i + 1) + (p2 == start ? "" : "via ") + p2).join("");
  }
  for (let p2 = a; p2; p2 = p2.via)
    for (let p22 = b; p22; p22 = p22.via) {
      if (p2.eqSimple(p22))
        return "\nShared origin: " + p2 + via(p2, a) + via(p2, b);
    }
  return "";
}
function buildFullAutomaton(terms, startTerms, first) {
  let states = [], statesBySetHash = {};
  let cores = {};
  let t0 = Date.now();
  function getState2(core, top) {
    if (core.length == 0)
      return null;
    let coreHash = hashPositions(core), byHash = cores[coreHash];
    let skip;
    for (let pos of core) {
      if (!skip)
        skip = pos.skip;
      else if (skip != pos.skip)
        throw new GenError("Inconsistent skip sets after " + pos.trail());
    }
    if (byHash) {
      for (let known of byHash)
        if (eqSet(core, known.set)) {
          if (known.state.skip != skip)
            throw new GenError("Inconsistent skip sets after " + known.set[0].trail());
          return known.state;
        }
    }
    let set = closure(core, first);
    let hash2 = hashPositions(set), forHash = statesBySetHash[hash2] || (statesBySetHash[hash2] = []);
    let found2;
    if (!top) {
      for (let state of forHash)
        if (state.hasSet(set))
          found2 = state;
    }
    if (!found2) {
      found2 = new State2(states.length, set, 0, skip, hash2, top);
      forHash.push(found2);
      states.push(found2);
      if (timing && states.length % 500 == 0)
        console.log(`${states.length} states after ${((Date.now() - t0) / 1e3).toFixed(2)}s`);
    }
    (cores[coreHash] || (cores[coreHash] = [])).push(new Core(core, found2));
    return found2;
  }
  for (const startTerm of startTerms) {
    const startSkip = startTerm.rules.length ? startTerm.rules[0].skip : terms.names["%noskip"];
    getState2(startTerm.rules.map((rule) => new Pos(rule, 0, [terms.eof], none$1, startSkip, null).finish()), startTerm);
  }
  let conflicts = [];
  for (let filled = 0; filled < states.length; filled++) {
    let state = states[filled];
    let byTerm = [], byTermPos = [], atEnd = [];
    for (let pos of state.set) {
      if (pos.pos == pos.rule.parts.length) {
        if (!pos.rule.name.top)
          atEnd.push(pos);
      } else {
        let next = pos.rule.parts[pos.pos];
        let index = byTerm.indexOf(next);
        if (index < 0) {
          byTerm.push(next);
          byTermPos.push([pos]);
        } else {
          byTermPos[index].push(pos);
        }
      }
    }
    for (let i = 0; i < byTerm.length; i++) {
      let term = byTerm[i], positions = byTermPos[i].map((p2) => p2.advance());
      if (term.terminal) {
        let set = applyCut(positions);
        let next = getState2(set);
        if (next)
          state.addAction(new Shift(term, next), byTermPos[i], conflicts);
      } else {
        let goto = getState2(positions);
        if (goto)
          state.goto.push(new Shift(term, goto));
      }
    }
    let replaced = false;
    for (let pos of atEnd)
      for (let ahead of pos.ahead) {
        let count = state.actions.length;
        state.addAction(new Reduce(ahead, pos.rule), [pos], conflicts);
        if (state.actions.length == count)
          replaced = true;
      }
    if (replaced)
      for (let i = 0; i < state.goto.length; i++) {
        let start = first[state.goto[i].term.name];
        if (!start.some((term) => state.actions.some((a) => a.term == term && a instanceof Shift)))
          state.goto.splice(i--, 1);
      }
  }
  if (conflicts.length)
    throw new GenError(conflicts.map((c) => c.error).join("\n\n"));
  for (let state of states)
    state.finish();
  if (timing)
    console.log(`${states.length} states total.`);
  return states;
}
function applyCut(set) {
  let found2 = null, cut = 1;
  for (let pos of set) {
    let value = pos.rule.conflicts[pos.pos - 1].cut;
    if (value < cut)
      continue;
    if (!found2 || value > cut) {
      cut = value;
      found2 = [];
    }
    found2.push(pos);
  }
  return found2 || set;
}
function canMerge(a, b, mapping) {
  for (let goto of a.goto)
    for (let other of b.goto) {
      if (goto.term == other.term && mapping[goto.target.id] != mapping[other.target.id])
        return false;
    }
  let byTerm = b.actionsByTerm();
  for (let action of a.actions) {
    let setB = byTerm[action.term.id];
    if (setB && setB.some((other) => !other.matches(action, mapping))) {
      if (setB.length == 1)
        return false;
      let setA = a.actionsByTerm()[action.term.id];
      if (setA.length != setB.length || setA.some((a1) => !setB.some((a2) => a1.matches(a2, mapping))))
        return false;
    }
  }
  return true;
}
function mergeStates(states, mapping) {
  let newStates = [];
  for (let state of states) {
    let newID = mapping[state.id];
    if (!newStates[newID]) {
      newStates[newID] = new State2(newID, state.set, 0, state.skip, state.hash, state.startRule);
      newStates[newID].tokenGroup = state.tokenGroup;
      newStates[newID].defaultReduce = state.defaultReduce;
    }
  }
  for (let state of states) {
    let newID = mapping[state.id], target = newStates[newID];
    target.flags |= state.flags;
    for (let i = 0; i < state.actions.length; i++) {
      let action = state.actions[i].map(mapping, newStates);
      if (!target.actions.some((a) => a.eq(action))) {
        target.actions.push(action);
        target.actionPositions.push(state.actionPositions[i]);
      }
    }
    for (let goto of state.goto) {
      let mapped = goto.map(mapping, newStates);
      if (!target.goto.some((g) => g.eq(mapped)))
        target.goto.push(mapped);
    }
  }
  return newStates;
}
function samePosSet(a, b) {
  if (a.length != b.length)
    return false;
  for (let i = 0; i < a.length; i++)
    if (!a[i].eqSimple(b[i]))
      return false;
  return true;
}
function collapseAutomaton(states) {
  let mapping = [], groups = [];
  assignGroups:
    for (let i = 0; i < states.length; i++) {
      let state = states[i];
      if (!state.startRule)
        for (let j = 0; j < groups.length; j++) {
          let group = groups[j], other = states[group.members[0]];
          if (state.tokenGroup == other.tokenGroup && state.skip == other.skip && !other.startRule && samePosSet(state.set, other.set)) {
            group.members.push(i);
            mapping.push(j);
            continue assignGroups;
          }
        }
      mapping.push(groups.length);
      groups.push(new Group(groups.length, i));
    }
  function spill(groupIndex, index) {
    let group = groups[groupIndex], state = states[group.members[index]];
    let pop = group.members.pop();
    if (index != group.members.length)
      group.members[index] = pop;
    for (let i = groupIndex + 1; i < groups.length; i++) {
      mapping[state.id] = i;
      if (groups[i].origin == group.origin && groups[i].members.every((id2) => canMerge(state, states[id2], mapping))) {
        groups[i].members.push(state.id);
        return;
      }
    }
    mapping[state.id] = groups.length;
    groups.push(new Group(group.origin, state.id));
  }
  for (let pass = 1; ; pass++) {
    let conflicts = false, t0 = Date.now();
    for (let g = 0, startLen = groups.length; g < startLen; g++) {
      let group = groups[g];
      for (let i = 0; i < group.members.length - 1; i++) {
        for (let j = i + 1; j < group.members.length; j++) {
          let idA = group.members[i], idB = group.members[j];
          if (!canMerge(states[idA], states[idB], mapping)) {
            conflicts = true;
            spill(g, j--);
          }
        }
      }
    }
    if (timing)
      console.log(`Collapse pass ${pass}${conflicts ? `` : `, done`} (${((Date.now() - t0) / 1e3).toFixed(2)}s)`);
    if (!conflicts)
      return mergeStates(states, mapping);
  }
}
function mergeIdentical(states) {
  for (let pass = 1; ; pass++) {
    let mapping = [], didMerge = false, t0 = Date.now();
    let newStates = [];
    for (let i = 0; i < states.length; i++) {
      let state = states[i];
      let match = newStates.findIndex((s) => state.eq(s));
      if (match < 0) {
        mapping[i] = newStates.length;
        newStates.push(state);
      } else {
        mapping[i] = match;
        didMerge = true;
        let other = newStates[match], add2 = null;
        for (let pos of state.set)
          if (!other.set.some((p2) => p2.eqSimple(pos)))
            (add2 || (add2 = [])).push(pos);
        if (add2)
          other.set = add2.concat(other.set).sort((a, b) => a.cmp(b));
      }
    }
    if (timing)
      console.log(`Merge identical pass ${pass}${didMerge ? "" : ", done"} (${((Date.now() - t0) / 1e3).toFixed(2)}s)`);
    if (!didMerge)
      return states;
    for (let state of newStates)
      if (!state.defaultReduce) {
        state.actions = state.actions.map((a) => a.map(mapping, newStates));
        state.goto = state.goto.map((a) => a.map(mapping, newStates));
      }
    for (let i = 0; i < newStates.length; i++)
      newStates[i].id = i;
    states = newStates;
  }
}
function finishAutomaton(full) {
  return mergeIdentical(collapseAutomaton(full));
}
function digitToChar(digit) {
  let ch = digit + 32;
  if (ch >= 34)
    ch++;
  if (ch >= 92)
    ch++;
  return String.fromCharCode(ch);
}
function encode(value, max2 = 65535) {
  if (value > max2)
    throw new Error("Trying to encode a number that's too big: " + value);
  if (value == 65535)
    return String.fromCharCode(
      126
      /* Encode.BigValCode */
    );
  let result = "";
  for (let first = 46; ; first = 0) {
    let low = value % 46, rest = value - low;
    result = digitToChar(low + first) + result;
    if (rest == 0)
      break;
    value = rest / 46;
  }
  return result;
}
function encodeArray(values, max2 = 65535) {
  let result = '"' + encode(values.length, 4294967295);
  for (let i = 0; i < values.length; i++)
    result += encode(values[i], max2);
  result += '"';
  return result;
}
function p(...terms) {
  return new Parts(terms, null);
}
function addToProp(term, prop, value) {
  let cur = term.props[prop];
  if (!cur || cur.split(" ").indexOf(value) < 0)
    term.props[prop] = cur ? cur + " " + value : value;
}
function buildSpecializeTable(spec) {
  let table = /* @__PURE__ */ Object.create(null);
  for (let { value, term, type } of spec) {
    let code = type == "specialize" ? 0 : 1;
    table[value] = term.id << 1 | code;
  }
  return table;
}
function reduceAction(rule, skipInfo, depth = rule.parts.length) {
  return rule.name.id | 65536 | (rule.isRepeatWrap && depth == rule.parts.length ? 131072 : 0) | (skipInfo.some((i) => i.rule == rule.name) ? 262144 : 0) | depth << 19;
}
function findArray(data, value) {
  search:
    for (let i = 0; ; ) {
      let next = data.indexOf(value[0], i);
      if (next == -1 || next + value.length > data.length)
        break;
      for (let j = 1; j < value.length; j++) {
        if (value[j] != data[next + j]) {
          i = next + 1;
          continue search;
        }
      }
      return next;
    }
  return -1;
}
function findSkipStates(table, startRules) {
  let nonSkip = /* @__PURE__ */ Object.create(null);
  let work = [];
  let add2 = (state) => {
    if (!nonSkip[state.id]) {
      nonSkip[state.id] = true;
      work.push(state);
    }
  };
  for (let state of table)
    if (state.startRule && startRules.includes(state.startRule))
      add2(state);
  for (let i = 0; i < work.length; i++) {
    for (let a of work[i].actions)
      if (a instanceof Shift)
        add2(a.target);
    for (let a of work[i].goto)
      add2(a.target);
  }
  return (id2) => !nonSkip[id2];
}
function computeGotoTable(states) {
  let goto = {};
  let maxTerm = 0;
  for (let state of states) {
    for (let entry of state.goto) {
      maxTerm = Math.max(entry.term.id, maxTerm);
      let set = goto[entry.term.id] || (goto[entry.term.id] = {});
      (set[entry.target.id] || (set[entry.target.id] = [])).push(state.id);
    }
  }
  let data = new DataBuilder();
  let index = [];
  let offset = maxTerm + 2;
  for (let term = 0; term <= maxTerm; term++) {
    let entries = goto[term];
    if (!entries) {
      index.push(1);
      continue;
    }
    let termTable = [];
    let keys2 = Object.keys(entries);
    for (let target of keys2) {
      let list = entries[target];
      termTable.push((target == keys2[keys2.length - 1] ? 1 : 0) + (list.length << 1));
      termTable.push(+target);
      for (let source of list)
        termTable.push(source);
    }
    index.push(data.storeArray(termTable) + offset);
  }
  if (index.some((n) => n > 65535))
    throw new GenError("Goto table too large");
  return Uint16Array.from([maxTerm + 1, ...index, ...data.data]);
}
function addToSet(set, value) {
  if (!set.includes(value))
    set.push(value);
}
function buildTokenMasks(groups) {
  let masks = /* @__PURE__ */ Object.create(null);
  for (let group of groups) {
    let groupMask = 1 << group.groupID;
    for (let term of group.tokens) {
      masks[term.id] = (masks[term.id] || 0) | groupMask;
    }
  }
  return masks;
}
function checkTogether(states, b, skipInfo) {
  let cache = /* @__PURE__ */ Object.create(null);
  function hasTerm(state, term) {
    return state.actions.some((a) => a.term == term) || skipInfo[b.skipRules.indexOf(state.skip)].startTokens.includes(term);
  }
  return (a, b2) => {
    if (a.id < b2.id)
      [a, b2] = [b2, a];
    let key = a.id | b2.id << 16, cached = cache[key];
    if (cached != null)
      return cached;
    return cache[key] = states.some((state) => hasTerm(state, a) && hasTerm(state, b2));
  };
}
function invertRanges(ranges) {
  let pos = 0, result = [];
  for (let [a, b] of ranges) {
    if (a > pos)
      result.push([pos, a]);
    pos = b;
  }
  if (pos <= MAX_CODE)
    result.push([pos, MAX_CODE + 1]);
  return result;
}
function rangeEdges(from2, to, low, hi) {
  if (low < ASTRAL) {
    if (low < GAP_START)
      from2.edge(low, Math.min(hi, GAP_START), to);
    if (hi > GAP_END)
      from2.edge(Math.max(low, GAP_END), Math.min(hi, MAX_CHAR + 1), to);
    low = ASTRAL;
  }
  if (hi <= ASTRAL)
    return;
  let lowStr = String.fromCodePoint(low), hiStr = String.fromCodePoint(hi - 1);
  let lowA = lowStr.charCodeAt(0), lowB = lowStr.charCodeAt(1);
  let hiA = hiStr.charCodeAt(0), hiB = hiStr.charCodeAt(1);
  if (lowA == hiA) {
    let hop = new State$1();
    from2.edge(lowA, lowA + 1, hop);
    hop.edge(lowB, hiB + 1, to);
  } else {
    let midStart = lowA, midEnd = hiA;
    if (lowB > LOW_SURR_B) {
      midStart++;
      let hop = new State$1();
      from2.edge(lowA, lowA + 1, hop);
      hop.edge(lowB, HIGH_SURR_B + 1, to);
    }
    if (hiB < HIGH_SURR_B) {
      midEnd--;
      let hop = new State$1();
      from2.edge(hiA, hiA + 1, hop);
      hop.edge(LOW_SURR_B, hiB + 1, to);
    }
    if (midStart <= midEnd) {
      let hop = new State$1();
      from2.edge(midStart, midEnd + 1, hop);
      hop.edge(LOW_SURR_B, HIGH_SURR_B + 1, to);
    }
  }
}
function isEmpty2(expr) {
  return expr instanceof SequenceExpression && expr.exprs.length == 0;
}
function gatherExtTokens(b, tokens) {
  let result = /* @__PURE__ */ Object.create(null);
  for (let token of tokens) {
    b.unique(token.id);
    let { name: name2, props, dialect } = b.nodeInfo(token.props, "d", token.id.name);
    let term = b.makeTerminal(token.id.name, name2, props);
    if (dialect != null)
      (b.tokens.byDialect[dialect] || (b.tokens.byDialect[dialect] = [])).push(term);
    b.namedTerms[token.id.name] = result[token.id.name] = term;
  }
  return result;
}
function findExtToken(b, tokens, expr) {
  let found2 = tokens[expr.id.name];
  if (!found2)
    return null;
  if (expr.args.length)
    b.raise("External tokens cannot take arguments", expr.args[0].start);
  b.used(expr.id.name);
  return found2;
}
function addRel(rel, term, after) {
  let found2 = rel.findIndex((r) => r.term == term);
  if (found2 < 0)
    rel.push({ term, after });
  else
    rel[found2] = { term, after: rel[found2].after.concat(after) };
}
function inlineRules(rules, preserve) {
  for (let pass = 0; ; pass++) {
    let inlinable = /* @__PURE__ */ Object.create(null), found2;
    if (pass == 0)
      for (let rule of rules) {
        if (rule.name.inline && !inlinable[rule.name.name]) {
          let group = rules.filter((r) => r.name == rule.name);
          if (group.some((r) => r.parts.includes(rule.name)))
            continue;
          found2 = inlinable[rule.name.name] = group;
        }
      }
    for (let i = 0; i < rules.length; i++) {
      let rule = rules[i];
      if (!rule.name.interesting && !rule.parts.includes(rule.name) && rule.parts.length < 3 && !preserve.includes(rule.name) && (rule.parts.length == 1 || rules.every((other) => other.skip == rule.skip || !other.parts.includes(rule.name))) && !rule.parts.some((p2) => !!inlinable[p2.name]) && !rules.some((r, j) => j != i && r.name == rule.name))
        found2 = inlinable[rule.name.name] = [rule];
    }
    if (!found2)
      return rules;
    let newRules = [];
    for (let rule of rules) {
      let expand = function(at, conflicts, parts) {
        if (at == rule.parts.length) {
          newRules.push(new Rule(rule.name, parts, conflicts, rule.skip));
          return;
        }
        let next = rule.parts[at], replace = inlinable[next.name];
        if (!replace) {
          expand(at + 1, conflicts.concat(rule.conflicts[at + 1]), parts.concat(next));
          return;
        }
        for (let r of replace)
          expand(at + 1, conflicts.slice(0, conflicts.length - 1).concat(conflicts[at].join(r.conflicts[0])).concat(r.conflicts.slice(1, r.conflicts.length - 1)).concat(rule.conflicts[at + 1].join(r.conflicts[r.conflicts.length - 1])), parts.concat(r.parts));
      };
      if (inlinable[rule.name.name])
        continue;
      if (!rule.parts.some((p2) => !!inlinable[p2.name])) {
        newRules.push(rule);
        continue;
      }
      expand(0, [rule.conflicts[0]], []);
    }
    rules = newRules;
  }
}
function mergeRules(rules) {
  let merged = /* @__PURE__ */ Object.create(null), found2;
  for (let i = 0; i < rules.length; ) {
    let groupStart = i;
    let name2 = rules[i++].name;
    while (i < rules.length && rules[i].name == name2)
      i++;
    let size = i - groupStart;
    if (name2.interesting)
      continue;
    for (let j = i; j < rules.length; ) {
      let otherStart = j, otherName = rules[j++].name;
      while (j < rules.length && rules[j].name == otherName)
        j++;
      if (j - otherStart != size || otherName.interesting)
        continue;
      let match = true;
      for (let k = 0; k < size && match; k++) {
        let a = rules[groupStart + k], b = rules[otherStart + k];
        if (a.cmpNoName(b) != 0)
          match = false;
      }
      if (match)
        found2 = merged[name2.name] = otherName;
    }
  }
  if (!found2)
    return rules;
  let newRules = [];
  for (let rule of rules)
    if (!merged[rule.name.name]) {
      newRules.push(rule.parts.every((p2) => !merged[p2.name]) ? rule : new Rule(rule.name, rule.parts.map((p2) => merged[p2.name] || p2), rule.conflicts, rule.skip));
    }
  return newRules;
}
function simplifyRules(rules, preserve) {
  return mergeRules(inlineRules(rules, preserve));
}
function buildParser(text2, options = {}) {
  let builder = new Builder(text2, options), parser = builder.getParser();
  parser.termTable = builder.termTable;
  return parser;
}
function ignored(name2) {
  let first = name2[0];
  return first == "_" || first.toUpperCase() != first;
}
function isExported(rule) {
  return rule.props.some((p2) => p2.at && p2.name == "export");
}
var Node, GrammarDeclaration, RuleDeclaration, PrecDeclaration, TokenPrecDeclaration, TokenConflictDeclaration, TokenDeclaration, LocalTokenDeclaration, LiteralDeclaration, ContextDeclaration, ExternalTokenDeclaration, ExternalSpecializeDeclaration, ExternalPropSourceDeclaration, ExternalPropDeclaration, Identifier, Expression, NameExpression, SpecializeExpression, InlineRuleExpression, ChoiceExpression, SequenceExpression, ConflictMarker, RepeatExpression, LiteralExpression, SetExpression, AnyExpression, CharClasses, CharClass, Prop, PropPart, GenError, termHash, Term, TermSet, none$3, Conflicts, ruleID, Rule, MAX_CHAR, Edge, stateID, State$1, Conflict$1, MergedEdge, word, none$2, Input, SET_MARKER, verbose, timing, time, Pos, Shift, Reduce, State2, Core, Conflict2, Group, none$1, none2, Parts, BuiltRule, Builder, MinSharedActions, FinishStateContext, DataBuilder, TokenGroup, TokenArg, BuildingRule, TokenSet, MainTokenSet, LocalTokenSet, ASTRAL, GAP_START, GAP_END, MAX_CODE, LOW_SURR_B, HIGH_SURR_B, ExternalTokenSet, ExternalSpecializer, KEYWORDS;
var init_dist10 = __esm({
  "../../node_modules/@lezer/generator/dist/index.js"() {
    init_dist3();
    init_dist7();
    Node = class {
      constructor(start) {
        this.start = start;
      }
    };
    GrammarDeclaration = class extends Node {
      constructor(start, rules, topRules, tokens, localTokens, context, externalTokens, externalSpecializers, externalPropSources, precedences, mainSkip, scopedSkip, dialects, externalProps, autoDelim) {
        super(start);
        this.rules = rules;
        this.topRules = topRules;
        this.tokens = tokens;
        this.localTokens = localTokens;
        this.context = context;
        this.externalTokens = externalTokens;
        this.externalSpecializers = externalSpecializers;
        this.externalPropSources = externalPropSources;
        this.precedences = precedences;
        this.mainSkip = mainSkip;
        this.scopedSkip = scopedSkip;
        this.dialects = dialects;
        this.externalProps = externalProps;
        this.autoDelim = autoDelim;
      }
      toString() {
        return Object.values(this.rules).join("\n");
      }
    };
    RuleDeclaration = class extends Node {
      constructor(start, id2, props, params2, expr) {
        super(start);
        this.id = id2;
        this.props = props;
        this.params = params2;
        this.expr = expr;
      }
      toString() {
        return this.id.name + (this.params.length ? `<${this.params.join()}>` : "") + " -> " + this.expr;
      }
    };
    PrecDeclaration = class extends Node {
      constructor(start, items) {
        super(start);
        this.items = items;
      }
    };
    TokenPrecDeclaration = class extends Node {
      constructor(start, items) {
        super(start);
        this.items = items;
      }
    };
    TokenConflictDeclaration = class extends Node {
      constructor(start, a, b) {
        super(start);
        this.a = a;
        this.b = b;
      }
    };
    TokenDeclaration = class extends Node {
      constructor(start, precedences, conflicts, rules, literals) {
        super(start);
        this.precedences = precedences;
        this.conflicts = conflicts;
        this.rules = rules;
        this.literals = literals;
      }
    };
    LocalTokenDeclaration = class extends Node {
      constructor(start, precedences, rules, fallback) {
        super(start);
        this.precedences = precedences;
        this.rules = rules;
        this.fallback = fallback;
      }
    };
    LiteralDeclaration = class extends Node {
      constructor(start, literal, props) {
        super(start);
        this.literal = literal;
        this.props = props;
      }
    };
    ContextDeclaration = class extends Node {
      constructor(start, id2, source) {
        super(start);
        this.id = id2;
        this.source = source;
      }
    };
    ExternalTokenDeclaration = class extends Node {
      constructor(start, id2, source, tokens) {
        super(start);
        this.id = id2;
        this.source = source;
        this.tokens = tokens;
      }
    };
    ExternalSpecializeDeclaration = class extends Node {
      constructor(start, type, token, id2, source, tokens) {
        super(start);
        this.type = type;
        this.token = token;
        this.id = id2;
        this.source = source;
        this.tokens = tokens;
      }
    };
    ExternalPropSourceDeclaration = class extends Node {
      constructor(start, id2, source) {
        super(start);
        this.id = id2;
        this.source = source;
      }
    };
    ExternalPropDeclaration = class extends Node {
      constructor(start, id2, externalID, source) {
        super(start);
        this.id = id2;
        this.externalID = externalID;
        this.source = source;
      }
    };
    Identifier = class extends Node {
      constructor(start, name2) {
        super(start);
        this.name = name2;
      }
      toString() {
        return this.name;
      }
    };
    Expression = class extends Node {
      walk(f) {
        return f(this);
      }
      eq(_other) {
        return false;
      }
    };
    Expression.prototype.prec = 10;
    NameExpression = class extends Expression {
      constructor(start, id2, args2) {
        super(start);
        this.id = id2;
        this.args = args2;
      }
      toString() {
        return this.id.name + (this.args.length ? `<${this.args.join()}>` : "");
      }
      eq(other) {
        return this.id.name == other.id.name && exprsEq(this.args, other.args);
      }
      walk(f) {
        let args2 = walkExprs(this.args, f);
        return f(args2 == this.args ? this : new NameExpression(this.start, this.id, args2));
      }
    };
    SpecializeExpression = class extends Expression {
      constructor(start, type, props, token, content) {
        super(start);
        this.type = type;
        this.props = props;
        this.token = token;
        this.content = content;
      }
      toString() {
        return `@${this.type}[${this.props.join(",")}]<${this.token}, ${this.content}>`;
      }
      eq(other) {
        return this.type == other.type && Prop.eqProps(this.props, other.props) && exprEq(this.token, other.token) && exprEq(this.content, other.content);
      }
      walk(f) {
        let token = this.token.walk(f), content = this.content.walk(f);
        return f(token == this.token && content == this.content ? this : new SpecializeExpression(this.start, this.type, this.props, token, content));
      }
    };
    InlineRuleExpression = class extends Expression {
      constructor(start, rule) {
        super(start);
        this.rule = rule;
      }
      toString() {
        let rule = this.rule;
        return `${rule.id}${rule.props.length ? `[${rule.props.join(",")}]` : ""} { ${rule.expr} }`;
      }
      eq(other) {
        let rule = this.rule, oRule = other.rule;
        return exprEq(rule.expr, oRule.expr) && rule.id.name == oRule.id.name && Prop.eqProps(rule.props, oRule.props);
      }
      walk(f) {
        let rule = this.rule, expr = rule.expr.walk(f);
        return f(expr == rule.expr ? this : new InlineRuleExpression(this.start, new RuleDeclaration(rule.start, rule.id, rule.props, [], expr)));
      }
    };
    ChoiceExpression = class extends Expression {
      constructor(start, exprs) {
        super(start);
        this.exprs = exprs;
      }
      toString() {
        return this.exprs.map((e) => maybeParens(e, this)).join(" | ");
      }
      eq(other) {
        return exprsEq(this.exprs, other.exprs);
      }
      walk(f) {
        let exprs = walkExprs(this.exprs, f);
        return f(exprs == this.exprs ? this : new ChoiceExpression(this.start, exprs));
      }
    };
    ChoiceExpression.prototype.prec = 1;
    SequenceExpression = class extends Expression {
      constructor(start, exprs, markers, empty2 = false) {
        super(start);
        this.exprs = exprs;
        this.markers = markers;
        this.empty = empty2;
      }
      toString() {
        return this.empty ? "()" : this.exprs.map((e) => maybeParens(e, this)).join(" ");
      }
      eq(other) {
        return exprsEq(this.exprs, other.exprs) && this.markers.every((m, i) => {
          let om = other.markers[i];
          return m.length == om.length && m.every((x, i2) => x.eq(om[i2]));
        });
      }
      walk(f) {
        let exprs = walkExprs(this.exprs, f);
        return f(exprs == this.exprs ? this : new SequenceExpression(this.start, exprs, this.markers, this.empty && !exprs.length));
      }
    };
    SequenceExpression.prototype.prec = 2;
    ConflictMarker = class extends Node {
      constructor(start, id2, type) {
        super(start);
        this.id = id2;
        this.type = type;
      }
      toString() {
        return (this.type == "ambig" ? "~" : "!") + this.id.name;
      }
      eq(other) {
        return this.id.name == other.id.name && this.type == other.type;
      }
    };
    RepeatExpression = class extends Expression {
      constructor(start, expr, kind) {
        super(start);
        this.expr = expr;
        this.kind = kind;
      }
      toString() {
        return maybeParens(this.expr, this) + this.kind;
      }
      eq(other) {
        return exprEq(this.expr, other.expr) && this.kind == other.kind;
      }
      walk(f) {
        let expr = this.expr.walk(f);
        return f(expr == this.expr ? this : new RepeatExpression(this.start, expr, this.kind));
      }
    };
    RepeatExpression.prototype.prec = 3;
    LiteralExpression = class extends Expression {
      // value.length is always > 0
      constructor(start, value) {
        super(start);
        this.value = value;
      }
      toString() {
        return JSON.stringify(this.value);
      }
      eq(other) {
        return this.value == other.value;
      }
    };
    SetExpression = class extends Expression {
      constructor(start, ranges, inverted) {
        super(start);
        this.ranges = ranges;
        this.inverted = inverted;
      }
      toString() {
        return `[${this.inverted ? "^" : ""}${this.ranges.map(([a, b]) => {
          return String.fromCodePoint(a) + (b == a + 1 ? "" : "-" + String.fromCodePoint(b));
        })}]`;
      }
      eq(other) {
        return this.inverted == other.inverted && this.ranges.length == other.ranges.length && this.ranges.every(([a, b], i) => {
          let [x, y] = other.ranges[i];
          return a == x && b == y;
        });
      }
    };
    AnyExpression = class extends Expression {
      constructor(start) {
        super(start);
      }
      toString() {
        return "_";
      }
      eq() {
        return true;
      }
    };
    CharClasses = {
      asciiLetter: [[65, 91], [97, 123]],
      asciiLowercase: [[97, 123]],
      asciiUppercase: [[65, 91]],
      digit: [[48, 58]],
      whitespace: [
        [9, 14],
        [32, 33],
        [133, 134],
        [160, 161],
        [5760, 5761],
        [8192, 8203],
        [8232, 8234],
        [8239, 8240],
        [8287, 8288],
        [12288, 12289]
      ],
      eof: [[65535, 65535]]
    };
    CharClass = class extends Expression {
      constructor(start, type) {
        super(start);
        this.type = type;
      }
      toString() {
        return "@" + this.type;
      }
      eq(expr) {
        return this.type == expr.type;
      }
    };
    Prop = class extends Node {
      constructor(start, at, name2, value) {
        super(start);
        this.at = at;
        this.name = name2;
        this.value = value;
      }
      eq(other) {
        return this.name == other.name && this.value.length == other.value.length && this.value.every((v, i) => v.value == other.value[i].value && v.name == other.value[i].name);
      }
      toString() {
        let result = (this.at ? "@" : "") + this.name;
        if (this.value.length) {
          result += "=";
          for (let { name: name2, value } of this.value)
            result += name2 ? `{${name2}}` : /[^\w-]/.test(value) ? JSON.stringify(value) : value;
        }
        return result;
      }
      static eqProps(a, b) {
        return a.length == b.length && a.every((p2, i) => p2.eq(b[i]));
      }
    };
    PropPart = class extends Node {
      constructor(start, value, name2) {
        super(start);
        this.value = value;
        this.name = name2;
      }
    };
    GenError = class extends Error {
    };
    termHash = 0;
    Term = class {
      constructor(name2, flags, nodeName, props = {}) {
        this.name = name2;
        this.flags = flags;
        this.nodeName = nodeName;
        this.props = props;
        this.hash = ++termHash;
        this.id = -1;
        this.rules = [];
      }
      toString() {
        return this.name;
      }
      get nodeType() {
        return this.top || this.nodeName != null || hasProps(this.props) || this.repeated;
      }
      get terminal() {
        return (this.flags & 1) > 0;
      }
      get eof() {
        return (this.flags & 4) > 0;
      }
      get error() {
        return "error" in this.props;
      }
      get top() {
        return (this.flags & 2) > 0;
      }
      get interesting() {
        return this.flags > 0 || this.nodeName != null;
      }
      get repeated() {
        return (this.flags & 16) > 0;
      }
      set preserve(value) {
        this.flags = value ? this.flags | 8 : this.flags & ~8;
      }
      get preserve() {
        return (this.flags & 8) > 0;
      }
      set inline(value) {
        this.flags = value ? this.flags | 32 : this.flags & ~32;
      }
      get inline() {
        return (this.flags & 32) > 0;
      }
      cmp(other) {
        return this.hash - other.hash;
      }
    };
    TermSet = class {
      constructor() {
        this.terms = [];
        this.names = /* @__PURE__ */ Object.create(null);
        this.tops = [];
        this.eof = this.term(
          "\u2404",
          null,
          1 | 4
          /* TermFlag.Eof */
        );
        this.error = this.term(
          "\u26A0",
          "\u26A0",
          8
          /* TermFlag.Preserve */
        );
      }
      term(name2, nodeName, flags = 0, props = {}) {
        let term = new Term(name2, flags, nodeName, props);
        this.terms.push(term);
        this.names[name2] = term;
        return term;
      }
      makeTop(nodeName, props) {
        const term = this.term("@top", nodeName, 2, props);
        this.tops.push(term);
        return term;
      }
      makeTerminal(name2, nodeName, props = {}) {
        return this.term(name2, nodeName, 1, props);
      }
      makeNonTerminal(name2, nodeName, props = {}) {
        return this.term(name2, nodeName, 0, props);
      }
      makeRepeat(name2) {
        return this.term(
          name2,
          null,
          16
          /* TermFlag.Repeated */
        );
      }
      uniqueName(name2) {
        for (let i = 0; ; i++) {
          let cur = i ? `${name2}-${i}` : name2;
          if (!this.names[cur])
            return cur;
        }
      }
      finish(rules) {
        for (let rule of rules)
          rule.name.rules.push(rule);
        this.terms = this.terms.filter((t) => t.terminal || t.preserve || rules.some((r) => r.name == t || r.parts.includes(t)));
        let names = {};
        let nodeTypes = [this.error];
        this.error.id = 0;
        let nextID = 0 + 1;
        for (let term of this.terms)
          if (term.id < 0 && term.nodeType && !term.repeated) {
            term.id = nextID++;
            nodeTypes.push(term);
          }
        let minRepeatTerm = nextID;
        for (let term of this.terms)
          if (term.repeated) {
            term.id = nextID++;
            nodeTypes.push(term);
          }
        this.eof.id = nextID++;
        for (let term of this.terms) {
          if (term.id < 0)
            term.id = nextID++;
          if (term.name)
            names[term.id] = term.name;
        }
        if (nextID >= 65534)
          throw new GenError("Too many terms");
        return { nodeTypes, names, minRepeatTerm, maxTerm: nextID - 1 };
      }
    };
    none$3 = [];
    Conflicts = class {
      constructor(precedence, ambigGroups = none$3, cut = 0) {
        this.precedence = precedence;
        this.ambigGroups = ambigGroups;
        this.cut = cut;
      }
      join(other) {
        if (this == Conflicts.none || this == other)
          return other;
        if (other == Conflicts.none)
          return this;
        return new Conflicts(Math.max(this.precedence, other.precedence), union(this.ambigGroups, other.ambigGroups), Math.max(this.cut, other.cut));
      }
      cmp(other) {
        return this.precedence - other.precedence || cmpSet(this.ambigGroups, other.ambigGroups, (a, b) => a < b ? -1 : a > b ? 1 : 0) || this.cut - other.cut;
      }
    };
    Conflicts.none = new Conflicts(0);
    ruleID = 0;
    Rule = class {
      constructor(name2, parts, conflicts, skip) {
        this.name = name2;
        this.parts = parts;
        this.conflicts = conflicts;
        this.skip = skip;
        this.id = ruleID++;
      }
      cmp(rule) {
        return this.id - rule.id;
      }
      cmpNoName(rule) {
        return this.parts.length - rule.parts.length || this.skip.hash - rule.skip.hash || this.parts.reduce((r, s, i) => r || s.cmp(rule.parts[i]), 0) || cmpSet(this.conflicts, rule.conflicts, (a, b) => a.cmp(b));
      }
      toString() {
        return this.name + " -> " + this.parts.join(" ");
      }
      get isRepeatWrap() {
        return this.name.repeated && this.parts.length == 2 && this.parts[0] == this.name;
      }
      sameReduce(other) {
        return this.name == other.name && this.parts.length == other.parts.length && this.isRepeatWrap == other.isRepeatWrap;
      }
    };
    MAX_CHAR = 65535;
    Edge = class {
      constructor(from2, to, target) {
        this.from = from2;
        this.to = to;
        this.target = target;
      }
      toString() {
        return `-> ${this.target.id}[label=${JSON.stringify(this.from < 0 ? "\u03B5" : charFor(this.from) + (this.to > this.from + 1 ? "-" + charFor(this.to - 1) : ""))}]`;
      }
    };
    stateID = 1;
    State$1 = class State {
      constructor(accepting = [], id2 = stateID++) {
        this.accepting = accepting;
        this.id = id2;
        this.edges = [];
      }
      edge(from2, to, target) {
        this.edges.push(new Edge(from2, to, target));
      }
      nullEdge(target) {
        this.edge(-1, -1, target);
      }
      compile() {
        let labeled = /* @__PURE__ */ Object.create(null), localID = 0;
        let startState = explore(this.closure().sort((a, b) => a.id - b.id));
        return minimize(Object.values(labeled), startState);
        function explore(states) {
          let newState = labeled[ids(states)] = new State(states.reduce((a, s) => union(a, s.accepting), []), localID++);
          let out = [];
          for (let state of states)
            for (let edge of state.edges) {
              if (edge.from >= 0)
                out.push(edge);
            }
          let transitions = mergeEdges(out);
          for (let merged of transitions) {
            let targets = merged.targets.sort((a, b) => a.id - b.id);
            newState.edge(merged.from, merged.to, labeled[ids(targets)] || explore(targets));
          }
          return newState;
        }
      }
      closure() {
        let result = [], seen = /* @__PURE__ */ Object.create(null);
        function explore(state) {
          if (seen[state.id])
            return;
          seen[state.id] = true;
          if (state.edges.some((e) => e.from >= 0) || state.accepting.length > 0 && !state.edges.some((e) => sameSet$1(state.accepting, e.target.accepting)))
            result.push(state);
          for (let edge of state.edges)
            if (edge.from < 0)
              explore(edge.target);
        }
        explore(this);
        return result;
      }
      findConflicts(occurTogether) {
        let conflicts = [], cycleTerms = this.cycleTerms();
        function add2(a, b, soft, aEdges, bEdges) {
          if (a.id < b.id) {
            [a, b] = [b, a];
            soft = -soft;
          }
          let found2 = conflicts.find((c) => c.a == a && c.b == b);
          if (!found2)
            conflicts.push(new Conflict$1(a, b, soft, exampleFromEdges(aEdges), bEdges && exampleFromEdges(bEdges)));
          else if (found2.soft != soft)
            found2.soft = 0;
        }
        this.reachable((state, edges) => {
          if (state.accepting.length == 0)
            return;
          for (let i = 0; i < state.accepting.length; i++)
            for (let j = i + 1; j < state.accepting.length; j++)
              add2(state.accepting[i], state.accepting[j], 0, edges);
          state.reachable((s, es) => {
            if (s != state)
              for (let term of s.accepting) {
                let hasCycle = cycleTerms.includes(term);
                for (let orig of state.accepting)
                  if (term != orig)
                    add2(term, orig, hasCycle || cycleTerms.includes(orig) || !occurTogether(term, orig) ? 0 : 1, edges, edges.concat(es));
              }
          });
        });
        return conflicts;
      }
      cycleTerms() {
        let work = [];
        this.reachable((state) => {
          for (let { target } of state.edges)
            work.push(state, target);
        });
        let table = /* @__PURE__ */ new Map();
        let haveCycle = [];
        for (let i = 0; i < work.length; ) {
          let from2 = work[i++], to = work[i++];
          let entry = table.get(from2);
          if (!entry)
            table.set(from2, entry = []);
          if (entry.includes(to))
            continue;
          if (from2 == to) {
            if (!haveCycle.includes(from2))
              haveCycle.push(from2);
          } else {
            for (let next of entry)
              work.push(from2, next);
            entry.push(to);
          }
        }
        let result = [];
        for (let state of haveCycle) {
          for (let term of state.accepting) {
            if (!result.includes(term))
              result.push(term);
          }
        }
        return result;
      }
      reachable(f) {
        let seen = [], edges = [];
        (function explore(s) {
          f(s, edges);
          seen.push(s);
          for (let edge of s.edges)
            if (!seen.includes(edge.target)) {
              edges.push(edge);
              explore(edge.target);
              edges.pop();
            }
        })(this);
      }
      toString() {
        let out = "digraph {\n";
        this.reachable((state) => {
          if (state.accepting.length)
            out += `  ${state.id} [label=${JSON.stringify(state.accepting.join())}];
`;
          for (let edge of state.edges)
            out += `  ${state.id} ${edge};
`;
        });
        return out + "}";
      }
      // Tokenizer data is represented as a single flat array. This
      // contains regions for each tokenizer state. Region offsets are
      // used to identify states.
      //
      // Each state is laid out as:
      //  - Token group mask
      //  - Offset of the end of the accepting data
      //  - Number of outgoing edges in the state
      //  - Pairs of token masks and term ids that indicate the accepting
      //    states, sorted by precedence
      //  - Triples for the edges: each with a low and high bound and the
      //    offset of the next state.
      toArray(groupMasks, precedence) {
        let offsets = [];
        let data = [];
        this.reachable((state) => {
          let start = data.length;
          let acceptEnd = start + 3 + state.accepting.length * 2;
          offsets[state.id] = start;
          data.push(state.stateMask(groupMasks), acceptEnd, state.edges.length);
          state.accepting.sort((a, b) => precedence.indexOf(a.id) - precedence.indexOf(b.id));
          for (let term of state.accepting)
            data.push(term.id, groupMasks[term.id] || 65535);
          for (let edge of state.edges)
            data.push(edge.from, edge.to, -edge.target.id - 1);
        });
        for (let i = 0; i < data.length; i++)
          if (data[i] < 0)
            data[i] = offsets[-data[i] - 1];
        if (data.length > Math.pow(2, 16))
          throw new GenError("Tokenizer tables too big to represent with 16-bit offsets.");
        return Uint16Array.from(data);
      }
      stateMask(groupMasks) {
        let mask = 0;
        this.reachable((state) => {
          for (let term of state.accepting)
            mask |= groupMasks[term.id] || 65535;
        });
        return mask;
      }
    };
    Conflict$1 = class Conflict {
      constructor(a, b, soft, exampleA, exampleB) {
        this.a = a;
        this.b = b;
        this.soft = soft;
        this.exampleA = exampleA;
        this.exampleB = exampleB;
      }
    };
    MergedEdge = class {
      constructor(from2, to, targets) {
        this.from = from2;
        this.to = to;
        this.targets = targets;
      }
    };
    word = /[\w_-]+/gy;
    try {
      word = /[\p{Alphabetic}\d_-]+/ugy;
    } catch (_) {
    }
    none$2 = [];
    Input = class {
      constructor(string, fileName = null) {
        this.string = string;
        this.fileName = fileName;
        this.type = "sof";
        this.value = null;
        this.start = 0;
        this.end = 0;
        this.next();
      }
      lineInfo(pos) {
        for (let line = 1, cur = 0; ; ) {
          let next = this.string.indexOf("\n", cur);
          if (next > -1 && next < pos) {
            ++line;
            cur = next + 1;
          } else {
            return { line, ch: pos - cur };
          }
        }
      }
      message(msg, pos = -1) {
        let posInfo = this.fileName || "";
        if (pos > -1) {
          let info = this.lineInfo(pos);
          posInfo += (posInfo ? " " : "") + info.line + ":" + info.ch;
        }
        return posInfo ? msg + ` (${posInfo})` : msg;
      }
      raise(msg, pos = -1) {
        throw new GenError(this.message(msg, pos));
      }
      match(pos, re) {
        let match = re.exec(this.string.slice(pos));
        return match ? pos + match[0].length : -1;
      }
      next() {
        let start = this.match(this.end, /^(\s|\/\/.*|\/\*[^]*?\*\/)*/);
        if (start == this.string.length)
          return this.set("eof", null, start, start);
        let next = this.string[start];
        if (next == '"') {
          let end = this.match(start + 1, /^(\\.|[^"\\])*"/);
          if (end == -1)
            this.raise("Unterminated string literal", start);
          return this.set("string", readString(this.string.slice(start + 1, end - 1)), start, end);
        } else if (next == "'") {
          let end = this.match(start + 1, /^(\\.|[^'\\])*'/);
          if (end == -1)
            this.raise("Unterminated string literal", start);
          return this.set("string", readString(this.string.slice(start + 1, end - 1)), start, end);
        } else if (next == "@") {
          word.lastIndex = start + 1;
          let m = word.exec(this.string);
          if (!m)
            return this.raise("@ without a name", start);
          return this.set("at", m[0], start, start + 1 + m[0].length);
        } else if ((next == "$" || next == "!") && this.string[start + 1] == "[") {
          let end = this.match(start + 2, /^(?:\\.|[^\]\\])*\]/);
          if (end == -1)
            this.raise("Unterminated character set", start);
          return this.set("set", this.string.slice(start + 2, end - 1), start, end);
        } else if (/[\[\]()!~+*?{}<>\.,|:$=]/.test(next)) {
          return this.set(next, null, start, start + 1);
        } else {
          word.lastIndex = start;
          let m = word.exec(this.string);
          if (!m)
            return this.raise("Unexpected character " + JSON.stringify(next), start);
          return this.set("id", m[0], start, start + m[0].length);
        }
      }
      set(type, value, start, end) {
        this.type = type;
        this.value = value;
        this.start = start;
        this.end = end;
      }
      eat(type, value = null) {
        if (this.type == type && (value == null || this.value === value)) {
          this.next();
          return true;
        } else {
          return false;
        }
      }
      unexpected() {
        return this.raise(`Unexpected token '${this.string.slice(this.start, this.end)}'`, this.start);
      }
      expect(type, value = null) {
        let val = this.value;
        if (this.type != type || !(value == null || val === value))
          this.unexpected();
        this.next();
        return val;
      }
      parse() {
        return parseGrammar(this);
      }
    };
    SET_MARKER = "\uFDDA";
    verbose = typeof process != "undefined" && process.env.LOG || "";
    timing = /\btime\b/.test(verbose);
    time = timing ? (label, f) => {
      let t0 = Date.now();
      let result = f();
      console.log(`${label} (${((Date.now() - t0) / 1e3).toFixed(2)}s)`);
      return result;
    } : (_label, f) => f();
    Pos = class {
      constructor(rule, pos, ahead, ambigAhead, skipAhead, via) {
        this.rule = rule;
        this.pos = pos;
        this.ahead = ahead;
        this.ambigAhead = ambigAhead;
        this.skipAhead = skipAhead;
        this.via = via;
        this.hash = 0;
      }
      finish() {
        let h = hash(hash(this.rule.id, this.pos), this.skipAhead.hash);
        for (let a of this.ahead)
          h = hash(h, a.hash);
        for (let group of this.ambigAhead)
          h = hashString(h, group);
        this.hash = h;
        return this;
      }
      get next() {
        return this.pos < this.rule.parts.length ? this.rule.parts[this.pos] : null;
      }
      advance() {
        return new Pos(this.rule, this.pos + 1, this.ahead, this.ambigAhead, this.skipAhead, this.via).finish();
      }
      get skip() {
        return this.pos == this.rule.parts.length ? this.skipAhead : this.rule.skip;
      }
      cmp(pos) {
        return this.rule.cmp(pos.rule) || this.pos - pos.pos || this.skipAhead.hash - pos.skipAhead.hash || cmpSet(this.ahead, pos.ahead, (a, b) => a.cmp(b)) || cmpSet(this.ambigAhead, pos.ambigAhead, cmpStr);
      }
      eqSimple(pos) {
        return pos.rule == this.rule && pos.pos == this.pos;
      }
      toString() {
        let parts = this.rule.parts.map((t) => t.name);
        parts.splice(this.pos, 0, "\xB7");
        return `${this.rule.name} -> ${parts.join(" ")}`;
      }
      eq(other) {
        return this == other || this.hash == other.hash && this.rule == other.rule && this.pos == other.pos && this.skipAhead == other.skipAhead && sameSet(this.ahead, other.ahead) && sameSet(this.ambigAhead, other.ambigAhead);
      }
      trail(maxLen = 60) {
        let result = [];
        for (let pos = this; pos; pos = pos.via) {
          for (let i = pos.pos - 1; i >= 0; i--)
            result.push(pos.rule.parts[i]);
        }
        let value = result.reverse().join(" ");
        if (value.length > maxLen)
          value = value.slice(value.length - maxLen).replace(/.*? /, "\u2026 ");
        return value;
      }
      conflicts(pos = this.pos) {
        let result = this.rule.conflicts[pos];
        if (pos == this.rule.parts.length && this.ambigAhead.length)
          result = result.join(new Conflicts(0, this.ambigAhead));
        return result;
      }
      static addOrigins(group, context) {
        let result = group.slice();
        for (let i = 0; i < result.length; i++) {
          let next = result[i];
          if (next.pos == 0)
            for (let pos of context) {
              if (pos.next == next.rule.name && !result.includes(pos))
                result.push(pos);
            }
        }
        return result;
      }
    };
    Shift = class {
      constructor(term, target) {
        this.term = term;
        this.target = target;
      }
      eq(other) {
        return other instanceof Shift && this.term == other.term && other.target.id == this.target.id;
      }
      cmp(other) {
        return other instanceof Reduce ? -1 : this.term.id - other.term.id || this.target.id - other.target.id;
      }
      matches(other, mapping) {
        return other instanceof Shift && mapping[other.target.id] == mapping[this.target.id];
      }
      toString() {
        return "s" + this.target.id;
      }
      map(mapping, states) {
        let mapped = states[mapping[this.target.id]];
        return mapped == this.target ? this : new Shift(this.term, mapped);
      }
    };
    Reduce = class {
      constructor(term, rule) {
        this.term = term;
        this.rule = rule;
      }
      eq(other) {
        return other instanceof Reduce && this.term == other.term && other.rule.sameReduce(this.rule);
      }
      cmp(other) {
        return other instanceof Shift ? 1 : this.term.id - other.term.id || this.rule.name.id - other.rule.name.id || this.rule.parts.length - other.rule.parts.length;
      }
      matches(other, mapping) {
        return other instanceof Reduce && other.rule.sameReduce(this.rule);
      }
      toString() {
        return `${this.rule.name.name}(${this.rule.parts.length})`;
      }
      map() {
        return this;
      }
    };
    State2 = class {
      constructor(id2, set, flags = 0, skip, hash2 = hashPositions(set), startRule = null) {
        this.id = id2;
        this.set = set;
        this.flags = flags;
        this.skip = skip;
        this.hash = hash2;
        this.startRule = startRule;
        this.actions = [];
        this.actionPositions = [];
        this.goto = [];
        this.tokenGroup = -1;
        this.defaultReduce = null;
        this._actionsByTerm = null;
      }
      toString() {
        let actions = this.actions.map((t) => t.term + "=" + t).join(",") + (this.goto.length ? " | " + this.goto.map((g) => g.term + "=" + g).join(",") : "");
        return this.id + ": " + this.set.filter((p2) => p2.pos > 0).join() + (this.defaultReduce ? `
  always ${this.defaultReduce.name}(${this.defaultReduce.parts.length})` : actions.length ? "\n  " + actions : "");
      }
      addActionInner(value, positions) {
        check:
          for (let i = 0; i < this.actions.length; i++) {
            let action = this.actions[i];
            if (action.term == value.term) {
              if (action.eq(value))
                return null;
              let fullPos = Pos.addOrigins(positions, this.set), actionFullPos = Pos.addOrigins(this.actionPositions[i], this.set);
              let conflicts = conflictsAt(fullPos), actionConflicts = conflictsAt(actionFullPos);
              let diff = compareRepeatPrec(fullPos, actionFullPos) || conflicts.precedence - actionConflicts.precedence;
              if (diff > 0) {
                this.actions.splice(i, 1);
                this.actionPositions.splice(i, 1);
                i--;
                continue check;
              } else if (diff < 0) {
                return null;
              } else if (conflicts.ambigGroups.some((g) => actionConflicts.ambigGroups.includes(g))) {
                continue check;
              } else {
                return action;
              }
            }
          }
        this.actions.push(value);
        this.actionPositions.push(positions);
        return null;
      }
      addAction(value, positions, conflicts) {
        let conflict = this.addActionInner(value, positions);
        if (conflict) {
          let conflictPos = this.actionPositions[this.actions.indexOf(conflict)][0];
          let rules = [positions[0].rule.name, conflictPos.rule.name];
          if (conflicts.some((c) => c.rules.some((r) => rules.includes(r))))
            return;
          let error;
          if (conflict instanceof Shift)
            error = `shift/reduce conflict between
  ${conflictPos}
and
  ${positions[0].rule}`;
          else
            error = `reduce/reduce conflict between
  ${conflictPos.rule}
and
  ${positions[0].rule}`;
          error += `
With input:
  ${positions[0].trail(70)} \xB7 ${value.term} \u2026`;
          error += findConflictOrigin(conflictPos, positions[0]);
          conflicts.push(new Conflict2(error, rules));
        }
      }
      getGoto(term) {
        return this.goto.find((a) => a.term == term);
      }
      hasSet(set) {
        return eqSet(this.set, set);
      }
      actionsByTerm() {
        let result = this._actionsByTerm;
        if (!result) {
          this._actionsByTerm = result = /* @__PURE__ */ Object.create(null);
          for (let action of this.actions)
            (result[action.term.id] || (result[action.term.id] = [])).push(action);
        }
        return result;
      }
      finish() {
        if (this.actions.length) {
          let first = this.actions[0];
          if (first instanceof Reduce) {
            let { rule } = first;
            if (this.actions.every((a) => a instanceof Reduce && a.rule.sameReduce(rule)))
              this.defaultReduce = rule;
          }
        }
        this.actions.sort((a, b) => a.cmp(b));
        this.goto.sort((a, b) => a.cmp(b));
      }
      eq(other) {
        let dThis = this.defaultReduce, dOther = other.defaultReduce;
        if (dThis || dOther)
          return dThis && dOther ? dThis.sameReduce(dOther) : false;
        return this.skip == other.skip && this.tokenGroup == other.tokenGroup && eqSet(this.actions, other.actions) && eqSet(this.goto, other.goto);
      }
    };
    Core = class {
      constructor(set, state) {
        this.set = set;
        this.state = state;
      }
    };
    Conflict2 = class {
      constructor(error, rules) {
        this.error = error;
        this.rules = rules;
      }
    };
    Group = class {
      constructor(origin, member) {
        this.origin = origin;
        this.members = [member];
      }
    };
    none$1 = [];
    none2 = [];
    Parts = class {
      constructor(terms, conflicts) {
        this.terms = terms;
        this.conflicts = conflicts;
      }
      concat(other) {
        if (this == Parts.none)
          return other;
        if (other == Parts.none)
          return this;
        let conflicts = null;
        if (this.conflicts || other.conflicts) {
          conflicts = this.conflicts ? this.conflicts.slice() : this.ensureConflicts();
          let otherConflicts = other.ensureConflicts();
          conflicts[conflicts.length - 1] = conflicts[conflicts.length - 1].join(otherConflicts[0]);
          for (let i = 1; i < otherConflicts.length; i++)
            conflicts.push(otherConflicts[i]);
        }
        return new Parts(this.terms.concat(other.terms), conflicts);
      }
      withConflicts(pos, conflicts) {
        if (conflicts == Conflicts.none)
          return this;
        let array = this.conflicts ? this.conflicts.slice() : this.ensureConflicts();
        array[pos] = array[pos].join(conflicts);
        return new Parts(this.terms, array);
      }
      ensureConflicts() {
        if (this.conflicts)
          return this.conflicts;
        let empty2 = [];
        for (let i = 0; i <= this.terms.length; i++)
          empty2.push(Conflicts.none);
        return empty2;
      }
    };
    Parts.none = new Parts(none2, null);
    BuiltRule = class {
      constructor(id2, args2, term) {
        this.id = id2;
        this.args = args2;
        this.term = term;
      }
      matches(expr) {
        return this.id == expr.id.name && exprsEq(expr.args, this.args);
      }
      matchesRepeat(expr) {
        return this.id == "+" && exprEq(expr.expr, this.args[0]);
      }
    };
    Builder = class {
      constructor(text2, options) {
        this.options = options;
        this.terms = new TermSet();
        this.specialized = /* @__PURE__ */ Object.create(null);
        this.tokenOrigins = /* @__PURE__ */ Object.create(null);
        this.rules = [];
        this.built = [];
        this.ruleNames = /* @__PURE__ */ Object.create(null);
        this.namespaces = /* @__PURE__ */ Object.create(null);
        this.namedTerms = /* @__PURE__ */ Object.create(null);
        this.termTable = /* @__PURE__ */ Object.create(null);
        this.knownProps = /* @__PURE__ */ Object.create(null);
        this.dynamicRulePrecedences = [];
        this.definedGroups = [];
        this.astRules = [];
        this.currentSkip = [];
        time("Parse", () => {
          this.input = new Input(text2, options.fileName);
          this.ast = this.input.parse();
        });
        let NP = NodeProp;
        for (let prop in NP) {
          if (NP[prop] instanceof NodeProp && !NP[prop].perNode)
            this.knownProps[prop] = { prop: NP[prop], source: { name: prop, from: null } };
        }
        for (let prop of this.ast.externalProps) {
          this.knownProps[prop.id.name] = {
            prop: this.options.externalProp ? this.options.externalProp(prop.id.name) : new NodeProp(),
            source: { name: prop.externalID.name, from: prop.source }
          };
        }
        this.dialects = this.ast.dialects.map((d) => d.name);
        this.tokens = new MainTokenSet(this, this.ast.tokens);
        this.localTokens = this.ast.localTokens.map((g) => new LocalTokenSet(this, g));
        this.externalTokens = this.ast.externalTokens.map((ext) => new ExternalTokenSet(this, ext));
        this.externalSpecializers = this.ast.externalSpecializers.map((decl) => new ExternalSpecializer(this, decl));
        time("Build rules", () => {
          let noSkip = this.newName("%noskip", true);
          this.defineRule(noSkip, []);
          let mainSkip = this.ast.mainSkip ? this.newName("%mainskip", true) : noSkip;
          let scopedSkip = [], topRules = [];
          for (let rule of this.ast.rules)
            this.astRules.push({ skip: mainSkip, rule });
          for (let rule of this.ast.topRules)
            topRules.push({ skip: mainSkip, rule });
          for (let scoped of this.ast.scopedSkip) {
            let skip = noSkip, found2 = this.ast.scopedSkip.findIndex((sc, i) => i < scopedSkip.length && exprEq(sc.expr, scoped.expr));
            if (found2 > -1)
              skip = scopedSkip[found2];
            else if (this.ast.mainSkip && exprEq(scoped.expr, this.ast.mainSkip))
              skip = mainSkip;
            else if (!isEmpty2(scoped.expr))
              skip = this.newName("%skip", true);
            scopedSkip.push(skip);
            for (let rule of scoped.rules)
              this.astRules.push({ skip, rule });
            for (let rule of scoped.topRules)
              topRules.push({ skip, rule });
          }
          for (let { rule } of this.astRules) {
            this.unique(rule.id);
          }
          this.currentSkip.push(noSkip);
          this.skipRules = mainSkip == noSkip ? [mainSkip] : [noSkip, mainSkip];
          if (mainSkip != noSkip)
            this.defineRule(mainSkip, this.normalizeExpr(this.ast.mainSkip));
          for (let i = 0; i < this.ast.scopedSkip.length; i++) {
            let skip = scopedSkip[i];
            if (!this.skipRules.includes(skip)) {
              this.skipRules.push(skip);
              if (skip != noSkip)
                this.defineRule(skip, this.normalizeExpr(this.ast.scopedSkip[i].expr));
            }
          }
          this.currentSkip.pop();
          for (let { rule, skip } of topRules.sort((a, b) => a.rule.start - b.rule.start)) {
            this.unique(rule.id);
            this.used(rule.id.name);
            this.currentSkip.push(skip);
            let { name: name2, props } = this.nodeInfo(rule.props, "a", rule.id.name, none2, none2, rule.expr);
            let term = this.terms.makeTop(name2, props);
            this.namedTerms[name2] = term;
            this.defineRule(term, this.normalizeExpr(rule.expr));
            this.currentSkip.pop();
          }
          for (let ext of this.externalSpecializers)
            ext.finish();
          for (let { skip, rule } of this.astRules) {
            if (this.ruleNames[rule.id.name] && isExported(rule) && !rule.params.length) {
              this.buildRule(rule, [], skip, false);
              if (rule.expr instanceof SequenceExpression && rule.expr.exprs.length == 0)
                this.used(rule.id.name);
            }
          }
        });
        for (let name2 in this.ruleNames) {
          let value = this.ruleNames[name2];
          if (value)
            this.warn(`Unused rule '${value.name}'`, value.start);
        }
        this.tokens.takePrecedences();
        this.tokens.takeConflicts();
        for (let lt of this.localTokens)
          lt.takePrecedences();
        for (let { name: name2, group, rule } of this.definedGroups)
          this.defineGroup(name2, group, rule);
        this.checkGroups();
      }
      unique(id2) {
        if (id2.name in this.ruleNames)
          this.raise(`Duplicate definition of rule '${id2.name}'`, id2.start);
        this.ruleNames[id2.name] = id2;
      }
      used(name2) {
        this.ruleNames[name2] = null;
      }
      newName(base, nodeName = null, props = {}) {
        for (let i = nodeName ? 0 : 1; ; i++) {
          let name2 = i ? `${base}-${i}` : base;
          if (!this.terms.names[name2])
            return this.terms.makeNonTerminal(name2, nodeName === true ? null : nodeName, props);
        }
      }
      prepareParser() {
        let rules = time("Simplify rules", () => simplifyRules(this.rules, [
          ...this.skipRules,
          ...this.terms.tops
        ]));
        let { nodeTypes, names: termNames, minRepeatTerm, maxTerm } = this.terms.finish(rules);
        for (let prop in this.namedTerms)
          this.termTable[prop] = this.namedTerms[prop].id;
        if (/\bgrammar\b/.test(verbose))
          console.log(rules.join("\n"));
        let startTerms = this.terms.tops.slice();
        let first = computeFirstSets(this.terms);
        let skipInfo = this.skipRules.map((name2, id2) => {
          let skip = [], startTokens = [], rules2 = [];
          for (let rule of name2.rules) {
            if (!rule.parts.length)
              continue;
            let start = rule.parts[0];
            for (let t of start.terminal ? [start] : first[start.name] || [])
              if (!startTokens.includes(t))
                startTokens.push(t);
            if (start.terminal && rule.parts.length == 1 && !rules2.some((r) => r != rule && r.parts[0] == start))
              skip.push(start);
            else
              rules2.push(rule);
          }
          name2.rules = rules2;
          if (rules2.length)
            startTerms.push(name2);
          return { skip, rule: rules2.length ? name2 : null, startTokens, id: id2 };
        });
        let fullTable = time("Build full automaton", () => buildFullAutomaton(this.terms, startTerms, first));
        let localTokens = this.localTokens.map((grp, i) => grp.buildLocalGroup(fullTable, skipInfo, i));
        let { tokenGroups, tokenPrec, tokenData } = time("Build token groups", () => this.tokens.buildTokenGroups(fullTable, skipInfo, localTokens.length));
        let table = time("Finish automaton", () => finishAutomaton(fullTable));
        let skipState = findSkipStates(table, this.terms.tops);
        if (/\blr\b/.test(verbose))
          console.log(table.join("\n"));
        let specialized = [];
        for (let ext of this.externalSpecializers)
          specialized.push(ext);
        for (let name2 in this.specialized)
          specialized.push({ token: this.terms.names[name2], table: buildSpecializeTable(this.specialized[name2]) });
        let tokStart = (tokenizer) => {
          if (tokenizer instanceof ExternalTokenSet)
            return tokenizer.ast.start;
          return this.tokens.ast ? this.tokens.ast.start : -1;
        };
        let tokenizers = tokenGroups.concat(this.externalTokens).sort((a, b) => tokStart(a) - tokStart(b)).concat(localTokens);
        let data = new DataBuilder();
        let skipData = skipInfo.map((info) => {
          let actions = [];
          for (let term of info.skip)
            actions.push(term.id, 0, 262144 >> 16);
          if (info.rule) {
            let state = table.find((s) => s.startRule == info.rule);
            for (let action of state.actions)
              actions.push(action.term.id, state.id, 131072 >> 16);
          }
          actions.push(
            65535,
            0
            /* Seq.Done */
          );
          return data.storeArray(actions);
        });
        let states = time("Finish states", () => {
          let states2 = new Uint32Array(
            table.length * 6
            /* ParseState.Size */
          );
          let forceReductions = this.computeForceReductions(table, skipInfo);
          let finishCx = new FinishStateContext(tokenizers, data, states2, skipData, skipInfo, table, this);
          for (let s of table)
            finishCx.finish(s, skipState(s.id), forceReductions[s.id]);
          return states2;
        });
        let dialects = /* @__PURE__ */ Object.create(null);
        for (let i = 0; i < this.dialects.length; i++)
          dialects[this.dialects[i]] = data.storeArray((this.tokens.byDialect[i] || none2).map((t) => t.id).concat(
            65535
            /* Seq.End */
          ));
        let dynamicPrecedences = null;
        if (this.dynamicRulePrecedences.length) {
          dynamicPrecedences = /* @__PURE__ */ Object.create(null);
          for (let { rule, prec } of this.dynamicRulePrecedences)
            dynamicPrecedences[rule.id] = prec;
        }
        let topRules = /* @__PURE__ */ Object.create(null);
        for (let term of this.terms.tops)
          topRules[term.nodeName] = [table.find((state) => state.startRule == term).id, term.id];
        let precTable = data.storeArray(tokenPrec.concat(
          65535
          /* Seq.End */
        ));
        let { nodeProps, skippedTypes } = this.gatherNodeProps(nodeTypes);
        return {
          states,
          stateData: data.finish(),
          goto: computeGotoTable(table),
          nodeNames: nodeTypes.filter((t) => t.id < minRepeatTerm).map((t) => t.nodeName).join(" "),
          nodeProps,
          skippedTypes,
          maxTerm,
          repeatNodeCount: nodeTypes.length - minRepeatTerm,
          tokenizers,
          tokenData,
          topRules,
          dialects,
          dynamicPrecedences,
          specialized,
          tokenPrec: precTable,
          termNames
        };
      }
      getParser() {
        let { states, stateData, goto, nodeNames, nodeProps: rawNodeProps, skippedTypes, maxTerm, repeatNodeCount, tokenizers, tokenData, topRules, dialects, dynamicPrecedences, specialized: rawSpecialized, tokenPrec, termNames } = this.prepareParser();
        let specialized = rawSpecialized.map((v) => {
          if (v instanceof ExternalSpecializer) {
            let ext = this.options.externalSpecializer(v.ast.id.name, this.termTable);
            return {
              term: v.term.id,
              get: (value, stack) => ext(value, stack) << 1 | (v.ast.type == "extend" ? 1 : 0),
              external: ext,
              extend: v.ast.type == "extend"
            };
          } else {
            return { term: v.token.id, get: (value) => v.table[value] || -1 };
          }
        });
        return LRParser.deserialize({
          version: 14,
          states,
          stateData,
          goto,
          nodeNames,
          maxTerm,
          repeatNodeCount,
          nodeProps: rawNodeProps.map(({ prop, terms }) => [this.knownProps[prop].prop, ...terms]),
          propSources: !this.options.externalPropSource ? void 0 : this.ast.externalPropSources.map((s) => this.options.externalPropSource(s.id.name)),
          skippedNodes: skippedTypes,
          tokenData,
          tokenizers: tokenizers.map((tok) => tok.create()),
          context: !this.ast.context ? void 0 : typeof this.options.contextTracker == "function" ? this.options.contextTracker(this.termTable) : this.options.contextTracker,
          topRules,
          dialects,
          dynamicPrecedences,
          specialized,
          tokenPrec,
          termNames
        });
      }
      getParserFile() {
        let { states, stateData, goto, nodeNames, nodeProps: rawNodeProps, skippedTypes, maxTerm, repeatNodeCount, tokenizers: rawTokenizers, tokenData, topRules, dialects: rawDialects, dynamicPrecedences, specialized: rawSpecialized, tokenPrec, termNames } = this.prepareParser();
        let mod = this.options.moduleStyle || "es", ts = this.options.typeScript ? ": any" : "";
        let gen = "// This file was generated by lezer-generator. You probably shouldn't edit it.\n", head = gen;
        let imports = {}, imported = /* @__PURE__ */ Object.create(null);
        let defined = /* @__PURE__ */ Object.create(null);
        for (let word2 of KEYWORDS)
          defined[word2] = true;
        let exportName = this.options.exportName || "parser";
        defined[exportName] = true;
        let getName = (prefix) => {
          for (let i = 0; ; i++) {
            let id2 = prefix + (i ? "_" + i : "");
            if (!defined[id2])
              return id2;
          }
        };
        let importName = (name2, source, prefix = name2) => {
          let spec = name2 + " from " + source;
          if (imported[spec])
            return imported[spec];
          let src = JSON.stringify(source), varName = name2;
          if (name2 in defined) {
            varName = getName(prefix);
            name2 += `${mod == "cjs" ? ":" : " as"} ${varName}`;
          }
          defined[varName] = true;
          (imports[src] || (imports[src] = [])).push(name2);
          return imported[spec] = varName;
        };
        let lrParser = importName("LRParser", "@lezer/lr");
        let tokenizers = rawTokenizers.map((tok) => tok.createSource(importName));
        let context = this.ast.context ? importName(this.ast.context.id.name, this.ast.context.source) : null;
        let nodeProps = rawNodeProps.map(({ prop, terms: terms2 }) => {
          let { source } = this.knownProps[prop];
          let propID = source.from ? importName(source.name, source.from) : JSON.stringify(source.name);
          return `[${propID}, ${terms2.map(serializePropValue).join(",")}]`;
        });
        function specializationTableString(table) {
          return "{__proto__:null," + Object.keys(table).map((key) => `${/\W/.test(key) ? JSON.stringify(key) : key}:${table[key]}`).join(", ") + "}";
        }
        let specHead = "";
        let specialized = rawSpecialized.map((v) => {
          if (v instanceof ExternalSpecializer) {
            let name2 = importName(v.ast.id.name, v.ast.source);
            return `{term: ${v.term.id}, get: (value${ts}, stack${ts}) => (${name2}(value, stack) << 1)${v.ast.type == "extend" ? ` | ${1}` : ""}, external: ${name2}${v.ast.type == "extend" ? ", extend: true" : ""}}`;
          } else {
            let tableName = getName("spec_" + v.token.name.replace(/\W/g, ""));
            defined[tableName] = true;
            specHead += `const ${tableName} = ${specializationTableString(v.table)}
`;
            return `{term: ${v.token.id}, get: (value${ts}) => ${tableName}[value] || -1}`;
          }
        });
        let propSources = this.ast.externalPropSources.map((s) => importName(s.id.name, s.source));
        for (let source in imports) {
          if (mod == "cjs")
            head += `const {${imports[source].join(", ")}} = require(${source})
`;
          else
            head += `import {${imports[source].join(", ")}} from ${source}
`;
        }
        head += specHead;
        function serializePropValue(value) {
          return typeof value != "string" || /^(true|false|\d+(\.\d+)?|\.\d+)$/.test(value) ? value : JSON.stringify(value);
        }
        let dialects = Object.keys(rawDialects).map((d) => `${d}: ${rawDialects[d]}`);
        let parserStr = `${lrParser}.deserialize({
  version: ${14},
  states: ${encodeArray(states, 4294967295)},
  stateData: ${encodeArray(stateData)},
  goto: ${encodeArray(goto)},
  nodeNames: ${JSON.stringify(nodeNames)},
  maxTerm: ${maxTerm}${context ? `,
  context: ${context}` : ""}${nodeProps.length ? `,
  nodeProps: [
    ${nodeProps.join(",\n    ")}
  ]` : ""}${propSources.length ? `,
  propSources: [${propSources.join()}]` : ""}${skippedTypes.length ? `,
  skippedNodes: ${JSON.stringify(skippedTypes)}` : ""},
  repeatNodeCount: ${repeatNodeCount},
  tokenData: ${encodeArray(tokenData)},
  tokenizers: [${tokenizers.join(", ")}],
  topRules: ${JSON.stringify(topRules)}${dialects.length ? `,
  dialects: {${dialects.join(", ")}}` : ""}${dynamicPrecedences ? `,
  dynamicPrecedences: ${JSON.stringify(dynamicPrecedences)}` : ""}${specialized.length ? `,
  specialized: [${specialized.join(",")}]` : ""},
  tokenPrec: ${tokenPrec}${this.options.includeNames ? `,
  termNames: ${JSON.stringify(termNames)}` : ""}
})`;
        let terms = [];
        for (let name2 in this.termTable) {
          let id2 = name2;
          if (KEYWORDS.includes(id2))
            for (let i = 1; ; i++) {
              id2 = "_".repeat(i) + name2;
              if (!(id2 in this.termTable))
                break;
            }
          terms.push(`${id2}${mod == "cjs" ? ":" : " ="} ${this.termTable[name2]}`);
        }
        for (let id2 = 0; id2 < this.dialects.length; id2++)
          terms.push(`Dialect_${this.dialects[id2]}${mod == "cjs" ? ":" : " ="} ${id2}`);
        return {
          parser: head + (mod == "cjs" ? `exports.${exportName} = ${parserStr}
` : `export const ${exportName} = ${parserStr}
`),
          terms: mod == "cjs" ? `${gen}module.exports = {
  ${terms.join(",\n  ")}
}` : `${gen}export const
  ${terms.join(",\n  ")}
`
        };
      }
      gatherNonSkippedNodes() {
        let seen = /* @__PURE__ */ Object.create(null);
        let work = [];
        let add2 = (term) => {
          if (!seen[term.id]) {
            seen[term.id] = true;
            work.push(term);
          }
        };
        this.terms.tops.forEach(add2);
        for (let i = 0; i < work.length; i++) {
          for (let rule of work[i].rules)
            for (let part of rule.parts)
              add2(part);
        }
        return seen;
      }
      gatherNodeProps(nodeTypes) {
        let notSkipped = this.gatherNonSkippedNodes(), skippedTypes = [];
        let nodeProps = [];
        for (let type of nodeTypes) {
          if (!notSkipped[type.id] && !type.error)
            skippedTypes.push(type.id);
          for (let prop in type.props) {
            let known = this.knownProps[prop];
            if (!known)
              throw new GenError("No known prop type for " + prop);
            if (known.source.from == null && (known.source.name == "repeated" || known.source.name == "error"))
              continue;
            let rec = nodeProps.find((r) => r.prop == prop);
            if (!rec)
              nodeProps.push(rec = { prop, values: {} });
            (rec.values[type.props[prop]] || (rec.values[type.props[prop]] = [])).push(type.id);
          }
        }
        return {
          nodeProps: nodeProps.map(({ prop, values }) => {
            let terms = [];
            for (let val in values) {
              let ids2 = values[val];
              if (ids2.length == 1) {
                terms.push(ids2[0], val);
              } else {
                terms.push(-ids2.length);
                for (let id2 of ids2)
                  terms.push(id2);
                terms.push(val);
              }
            }
            return { prop, terms };
          }),
          skippedTypes
        };
      }
      makeTerminal(name2, tag, props) {
        return this.terms.makeTerminal(this.terms.uniqueName(name2), tag, props);
      }
      computeForceReductions(states, skipInfo) {
        let reductions = [];
        let candidates = [];
        let gotoEdges = /* @__PURE__ */ Object.create(null);
        for (let state of states) {
          reductions.push(0);
          for (let edge of state.goto) {
            let array = gotoEdges[edge.term.id] || (gotoEdges[edge.term.id] = []);
            let found2 = array.find((o) => o.target == edge.target.id);
            if (found2)
              found2.parents.push(state.id);
            else
              array.push({ parents: [state.id], target: edge.target.id });
          }
          candidates[state.id] = state.set.filter((pos) => pos.pos > 0 && !pos.rule.name.top).sort((a, b) => b.pos - a.pos || a.rule.parts.length - b.rule.parts.length);
        }
        let length1Reductions = /* @__PURE__ */ Object.create(null);
        function createsCycle(term, startState, parents = null) {
          let edges = gotoEdges[term];
          if (!edges)
            return false;
          return edges.some((val) => {
            let parentIntersection = parents ? parents.filter((id2) => val.parents.includes(id2)) : val.parents;
            if (parentIntersection.length == 0)
              return false;
            if (val.target == startState)
              return true;
            let found2 = length1Reductions[val.target];
            return found2 != null && createsCycle(found2, startState, parentIntersection);
          });
        }
        for (let state of states) {
          if (state.defaultReduce && state.defaultReduce.parts.length > 0) {
            reductions[state.id] = reduceAction(state.defaultReduce, skipInfo);
            if (state.defaultReduce.parts.length == 1)
              length1Reductions[state.id] = state.defaultReduce.name.id;
          }
        }
        for (let setSize = 1; ; setSize++) {
          let done = true;
          for (let state of states) {
            if (state.defaultReduce)
              continue;
            let set = candidates[state.id];
            if (set.length != setSize) {
              if (set.length > setSize)
                done = false;
              continue;
            }
            for (let pos of set) {
              if (pos.pos != 1 || !createsCycle(pos.rule.name.id, state.id)) {
                reductions[state.id] = reduceAction(pos.rule, skipInfo, pos.pos);
                if (pos.pos == 1)
                  length1Reductions[state.id] = pos.rule.name.id;
                break;
              }
            }
          }
          if (done)
            break;
        }
        return reductions;
      }
      substituteArgs(expr, args2, params2) {
        if (args2.length == 0)
          return expr;
        return expr.walk((expr2) => {
          let found2;
          if (expr2 instanceof NameExpression && (found2 = params2.findIndex((p2) => p2.name == expr2.id.name)) > -1) {
            let arg = args2[found2];
            if (expr2.args.length) {
              if (arg instanceof NameExpression && !arg.args.length)
                return new NameExpression(expr2.start, arg.id, expr2.args);
              this.raise(`Passing arguments to a parameter that already has arguments`, expr2.start);
            }
            return arg;
          } else if (expr2 instanceof InlineRuleExpression) {
            let r = expr2.rule, props = this.substituteArgsInProps(r.props, args2, params2);
            return props == r.props ? expr2 : new InlineRuleExpression(expr2.start, new RuleDeclaration(r.start, r.id, props, r.params, r.expr));
          } else if (expr2 instanceof SpecializeExpression) {
            let props = this.substituteArgsInProps(expr2.props, args2, params2);
            return props == expr2.props ? expr2 : new SpecializeExpression(expr2.start, expr2.type, props, expr2.token, expr2.content);
          }
          return expr2;
        });
      }
      substituteArgsInProps(props, args2, params2) {
        let substituteInValue = (value) => {
          let result2 = value;
          for (let i = 0; i < value.length; i++) {
            let part = value[i];
            if (!part.name)
              continue;
            let found2 = params2.findIndex((p2) => p2.name == part.name);
            if (found2 < 0)
              continue;
            if (result2 == value)
              result2 = value.slice();
            let expr = args2[found2];
            if (expr instanceof NameExpression && !expr.args.length)
              result2[i] = new PropPart(part.start, expr.id.name, null);
            else if (expr instanceof LiteralExpression)
              result2[i] = new PropPart(part.start, expr.value, null);
            else
              this.raise(`Trying to interpolate expression '${expr}' into a prop`, part.start);
          }
          return result2;
        };
        let result = props;
        for (let i = 0; i < props.length; i++) {
          let prop = props[i], value = substituteInValue(prop.value);
          if (value != prop.value) {
            if (result == props)
              result = props.slice();
            result[i] = new Prop(prop.start, prop.at, prop.name, value);
          }
        }
        return result;
      }
      conflictsFor(markers) {
        let here = Conflicts.none, atEnd = Conflicts.none;
        for (let marker of markers) {
          if (marker.type == "ambig") {
            here = here.join(new Conflicts(0, [marker.id.name]));
          } else {
            let precs = this.ast.precedences;
            let index = precs ? precs.items.findIndex((item) => item.id.name == marker.id.name) : -1;
            if (index < 0)
              this.raise(`Reference to unknown precedence: '${marker.id.name}'`, marker.id.start);
            let prec = precs.items[index], value = precs.items.length - index;
            if (prec.type == "cut") {
              here = here.join(new Conflicts(0, none2, value));
            } else {
              here = here.join(new Conflicts(value << 2));
              atEnd = atEnd.join(new Conflicts((value << 2) + (prec.type == "left" ? 1 : prec.type == "right" ? -1 : 0)));
            }
          }
        }
        return { here, atEnd };
      }
      raise(message, pos = 1) {
        return this.input.raise(message, pos);
      }
      warn(message, pos = -1) {
        let msg = this.input.message(message, pos);
        if (this.options.warn)
          this.options.warn(msg);
        else
          console.warn(msg);
      }
      defineRule(name2, choices) {
        let skip = this.currentSkip[this.currentSkip.length - 1];
        for (let choice of choices)
          this.rules.push(new Rule(name2, choice.terms, choice.ensureConflicts(), skip));
      }
      resolve(expr) {
        for (let built of this.built)
          if (built.matches(expr))
            return [p(built.term)];
        let found2 = this.tokens.getToken(expr);
        if (found2)
          return [p(found2)];
        for (let grp of this.localTokens) {
          let found3 = grp.getToken(expr);
          if (found3)
            return [p(found3)];
        }
        for (let ext of this.externalTokens) {
          let found3 = ext.getToken(expr);
          if (found3)
            return [p(found3)];
        }
        for (let ext of this.externalSpecializers) {
          let found3 = ext.getToken(expr);
          if (found3)
            return [p(found3)];
        }
        let known = this.astRules.find((r) => r.rule.id.name == expr.id.name);
        if (!known)
          return this.raise(`Reference to undefined rule '${expr.id.name}'`, expr.start);
        if (known.rule.params.length != expr.args.length)
          this.raise(`Wrong number or arguments for '${expr.id.name}'`, expr.start);
        this.used(known.rule.id.name);
        return [p(this.buildRule(known.rule, expr.args, known.skip))];
      }
      // For tree-balancing reasons, repeat expressions X+ have to be
      // normalized to something like
      //
      //     R -> X | R R
      //
      // Returns the `R` term.
      normalizeRepeat(expr) {
        let known = this.built.find((b) => b.matchesRepeat(expr));
        if (known)
          return p(known.term);
        let name2 = expr.expr.prec < expr.prec ? `(${expr.expr})+` : `${expr.expr}+`;
        let term = this.terms.makeRepeat(this.terms.uniqueName(name2));
        this.built.push(new BuiltRule("+", [expr.expr], term));
        this.defineRule(term, this.normalizeExpr(expr.expr).concat(p(term, term)));
        return p(term);
      }
      normalizeSequence(expr) {
        let result = expr.exprs.map((e) => this.normalizeExpr(e));
        let builder = this;
        function complete(start, from2, endConflicts) {
          let { here, atEnd } = builder.conflictsFor(expr.markers[from2]);
          if (from2 == result.length)
            return [start.withConflicts(start.terms.length, here.join(endConflicts))];
          let choices = [];
          for (let choice of result[from2]) {
            for (let full of complete(start.concat(choice).withConflicts(start.terms.length, here), from2 + 1, endConflicts.join(atEnd)))
              choices.push(full);
          }
          return choices;
        }
        return complete(Parts.none, 0, Conflicts.none);
      }
      normalizeExpr(expr) {
        if (expr instanceof RepeatExpression && expr.kind == "?") {
          return [Parts.none, ...this.normalizeExpr(expr.expr)];
        } else if (expr instanceof RepeatExpression) {
          let repeated = this.normalizeRepeat(expr);
          return expr.kind == "+" ? [repeated] : [Parts.none, repeated];
        } else if (expr instanceof ChoiceExpression) {
          return expr.exprs.reduce((o, e) => o.concat(this.normalizeExpr(e)), []);
        } else if (expr instanceof SequenceExpression) {
          return this.normalizeSequence(expr);
        } else if (expr instanceof LiteralExpression) {
          return [p(this.tokens.getLiteral(expr))];
        } else if (expr instanceof NameExpression) {
          return this.resolve(expr);
        } else if (expr instanceof SpecializeExpression) {
          return [p(this.resolveSpecialization(expr))];
        } else if (expr instanceof InlineRuleExpression) {
          return [p(this.buildRule(expr.rule, none2, this.currentSkip[this.currentSkip.length - 1], true))];
        } else {
          return this.raise(`This type of expression ('${expr}') may not occur in non-token rules`, expr.start);
        }
      }
      buildRule(rule, args2, skip, inline = false) {
        let expr = this.substituteArgs(rule.expr, args2, rule.params);
        let { name: nodeName, props, dynamicPrec, inline: explicitInline, group, exported } = this.nodeInfo(rule.props || none2, inline ? "pg" : "pgi", rule.id.name, args2, rule.params, rule.expr);
        if (exported && rule.params.length)
          this.warn(`Can't export parameterized rules`, rule.start);
        if (exported && inline)
          this.warn(`Can't export inline rule`, rule.start);
        let name2 = this.newName(rule.id.name + (args2.length ? "<" + args2.join(",") + ">" : ""), nodeName || true, props);
        if (explicitInline)
          name2.inline = true;
        if (dynamicPrec)
          this.registerDynamicPrec(name2, dynamicPrec);
        if ((name2.nodeType || exported) && rule.params.length == 0) {
          if (!nodeName)
            name2.preserve = true;
          if (!inline)
            this.namedTerms[exported || rule.id.name] = name2;
        }
        if (!inline)
          this.built.push(new BuiltRule(rule.id.name, args2, name2));
        this.currentSkip.push(skip);
        this.defineRule(name2, this.normalizeExpr(expr));
        this.currentSkip.pop();
        if (group)
          this.definedGroups.push({ name: name2, group, rule });
        return name2;
      }
      nodeInfo(props, allow, defaultName = null, args2 = none2, params2 = none2, expr, defaultProps) {
        let result = {};
        let name2 = defaultName && (allow.indexOf("a") > -1 || !ignored(defaultName)) && !/ /.test(defaultName) ? defaultName : null;
        let dialect = null, dynamicPrec = 0, inline = false, group = null, exported = null;
        for (let prop of props) {
          if (!prop.at) {
            if (!this.knownProps[prop.name]) {
              let builtin = ["name", "dialect", "dynamicPrecedence", "export", "isGroup"].includes(prop.name) ? ` (did you mean '@${prop.name}'?)` : "";
              this.raise(`Unknown prop name '${prop.name}'${builtin}`, prop.start);
            }
            result[prop.name] = this.finishProp(prop, args2, params2);
          } else if (prop.name == "name") {
            name2 = this.finishProp(prop, args2, params2);
            if (/ /.test(name2))
              this.raise(`Node names cannot have spaces ('${name2}')`, prop.start);
          } else if (prop.name == "dialect") {
            if (allow.indexOf("d") < 0)
              this.raise("Can't specify a dialect on non-token rules", props[0].start);
            if (prop.value.length != 1 && !prop.value[0].value)
              this.raise("The '@dialect' rule prop must hold a plain string value");
            let dialectID = this.dialects.indexOf(prop.value[0].value);
            if (dialectID < 0)
              this.raise(`Unknown dialect '${prop.value[0].value}'`, prop.value[0].start);
            dialect = dialectID;
          } else if (prop.name == "dynamicPrecedence") {
            if (allow.indexOf("p") < 0)
              this.raise("Dynamic precedence can only be specified on nonterminals");
            if (prop.value.length != 1 || !/^-?(?:10|\d)$/.test(prop.value[0].value))
              this.raise("The '@dynamicPrecedence' rule prop must hold an integer between -10 and 10");
            dynamicPrec = +prop.value[0].value;
          } else if (prop.name == "inline") {
            if (prop.value.length)
              this.raise("'@inline' doesn't take a value", prop.value[0].start);
            if (allow.indexOf("i") < 0)
              this.raise("Inline can only be specified on nonterminals");
            inline = true;
          } else if (prop.name == "isGroup") {
            if (allow.indexOf("g") < 0)
              this.raise("'@isGroup' can only be specified on nonterminals");
            group = prop.value.length ? this.finishProp(prop, args2, params2) : defaultName;
          } else if (prop.name == "export") {
            if (prop.value.length)
              exported = this.finishProp(prop, args2, params2);
            else
              exported = defaultName;
          } else {
            this.raise(`Unknown built-in prop name '@${prop.name}'`, prop.start);
          }
        }
        if (expr && this.ast.autoDelim && (name2 || hasProps(result))) {
          let delim = this.findDelimiters(expr);
          if (delim) {
            addToProp(delim[0], "closedBy", delim[1].nodeName);
            addToProp(delim[1], "openedBy", delim[0].nodeName);
          }
        }
        if (defaultProps && hasProps(defaultProps)) {
          for (let prop in defaultProps)
            if (!(prop in result))
              result[prop] = defaultProps[prop];
        }
        if (hasProps(result) && !name2)
          this.raise(`Node has properties but no name`, props.length ? props[0].start : expr.start);
        if (inline && (hasProps(result) || dialect || dynamicPrec))
          this.raise(`Inline nodes can't have props, dynamic precedence, or a dialect`, props[0].start);
        if (inline && name2)
          name2 = null;
        return { name: name2, props: result, dialect, dynamicPrec, inline, group, exported };
      }
      finishProp(prop, args2, params2) {
        return prop.value.map((part) => {
          if (part.value)
            return part.value;
          let pos = params2.findIndex((param) => param.name == part.name);
          if (pos < 0)
            this.raise(`Property refers to '${part.name}', but no parameter by that name is in scope`, part.start);
          let expr = args2[pos];
          if (expr instanceof NameExpression && !expr.args.length)
            return expr.id.name;
          if (expr instanceof LiteralExpression)
            return expr.value;
          return this.raise(`Expression '${expr}' can not be used as part of a property value`, part.start);
        }).join("");
      }
      resolveSpecialization(expr) {
        let type = expr.type;
        let { name: name2, props, dialect } = this.nodeInfo(expr.props, "d");
        let terminal = this.normalizeExpr(expr.token);
        if (terminal.length != 1 || terminal[0].terms.length != 1 || !terminal[0].terms[0].terminal)
          this.raise(`The first argument to '${type}' must resolve to a token`, expr.token.start);
        let values;
        if (expr.content instanceof LiteralExpression)
          values = [expr.content.value];
        else if (expr.content instanceof ChoiceExpression && expr.content.exprs.every((e) => e instanceof LiteralExpression))
          values = expr.content.exprs.map((expr2) => expr2.value);
        else
          return this.raise(`The second argument to '${expr.type}' must be a literal or choice of literals`, expr.content.start);
        let term = terminal[0].terms[0], token = null;
        let table = this.specialized[term.name] || (this.specialized[term.name] = []);
        for (let value of values) {
          let known = table.find((sp) => sp.value == value);
          if (known == null) {
            if (!token) {
              token = this.makeTerminal(term.name + "/" + JSON.stringify(value), name2, props);
              if (dialect != null)
                (this.tokens.byDialect[dialect] || (this.tokens.byDialect[dialect] = [])).push(token);
            }
            table.push({ value, term: token, type, dialect, name: name2 });
            this.tokenOrigins[token.name] = { spec: term };
          } else {
            if (known.type != type)
              this.raise(`Conflicting specialization types for ${JSON.stringify(value)} of ${term.name} (${type} vs ${known.type})`, expr.start);
            if (known.dialect != dialect)
              this.raise(`Conflicting dialects for specialization ${JSON.stringify(value)} of ${term.name}`, expr.start);
            if (known.name != name2)
              this.raise(`Conflicting names for specialization ${JSON.stringify(value)} of ${term.name}`, expr.start);
            if (token && known.term != token)
              this.raise(`Conflicting specialization tokens for ${JSON.stringify(value)} of ${term.name}`, expr.start);
            token = known.term;
          }
        }
        return token;
      }
      findDelimiters(expr) {
        if (!(expr instanceof SequenceExpression) || expr.exprs.length < 2)
          return null;
        let findToken = (expr2) => {
          if (expr2 instanceof LiteralExpression)
            return { term: this.tokens.getLiteral(expr2), str: expr2.value };
          if (expr2 instanceof NameExpression && expr2.args.length == 0) {
            let rule = this.ast.rules.find((r) => r.id.name == expr2.id.name);
            if (rule)
              return findToken(rule.expr);
            let token = this.tokens.rules.find((r) => r.id.name == expr2.id.name);
            if (token && token.expr instanceof LiteralExpression)
              return { term: this.tokens.getToken(expr2), str: token.expr.value };
          }
          return null;
        };
        let lastToken = findToken(expr.exprs[expr.exprs.length - 1]);
        if (!lastToken || !lastToken.term.nodeName)
          return null;
        const brackets = ["()", "[]", "{}", "<>"];
        let bracket = brackets.find((b) => lastToken.str.indexOf(b[1]) > -1 && lastToken.str.indexOf(b[0]) < 0);
        if (!bracket)
          return null;
        let firstToken = findToken(expr.exprs[0]);
        if (!firstToken || !firstToken.term.nodeName || firstToken.str.indexOf(bracket[0]) < 0 || firstToken.str.indexOf(bracket[1]) > -1)
          return null;
        return [firstToken.term, lastToken.term];
      }
      registerDynamicPrec(term, prec) {
        this.dynamicRulePrecedences.push({ rule: term, prec });
        term.preserve = true;
      }
      defineGroup(rule, group, ast) {
        var _a;
        let recur = [];
        let getNamed = (rule2) => {
          if (rule2.nodeName)
            return [rule2];
          if (recur.includes(rule2))
            this.raise(`Rule '${ast.id.name}' cannot define a group because it contains a non-named recursive rule ('${rule2.name}')`, ast.start);
          let result = [];
          recur.push(rule2);
          for (let r of this.rules)
            if (r.name == rule2) {
              let names = r.parts.map(getNamed).filter((x) => x.length);
              if (names.length > 1)
                this.raise(`Rule '${ast.id.name}' cannot define a group because some choices produce multiple named nodes`, ast.start);
              if (names.length == 1)
                for (let n of names[0])
                  result.push(n);
            }
          recur.pop();
          return result;
        };
        for (let name2 of getNamed(rule))
          name2.props["group"] = (((_a = name2.props["group"]) === null || _a === void 0 ? void 0 : _a.split(" ")) || []).concat(group).sort().join(" ");
      }
      checkGroups() {
        let groups = /* @__PURE__ */ Object.create(null), nodeNames = /* @__PURE__ */ Object.create(null);
        for (let term of this.terms.terms)
          if (term.nodeName) {
            nodeNames[term.nodeName] = true;
            if (term.props["group"])
              for (let group of term.props["group"].split(" ")) {
                (groups[group] || (groups[group] = [])).push(term);
              }
          }
        let names = Object.keys(groups);
        for (let i = 0; i < names.length; i++) {
          let name2 = names[i], terms = groups[name2];
          if (nodeNames[name2])
            this.warn(`Group name '${name2}' conflicts with a node of the same name`);
          for (let j = i + 1; j < names.length; j++) {
            let other = groups[names[j]];
            if (terms.some((t) => other.includes(t)) && (terms.length > other.length ? other.some((t) => !terms.includes(t)) : terms.some((t) => !other.includes(t))))
              this.warn(`Groups '${name2}' and '${names[j]}' overlap without one being a superset of the other`);
          }
        }
      }
    };
    MinSharedActions = 5;
    FinishStateContext = class {
      constructor(tokenizers, data, stateArray, skipData, skipInfo, states, builder) {
        this.tokenizers = tokenizers;
        this.data = data;
        this.stateArray = stateArray;
        this.skipData = skipData;
        this.skipInfo = skipInfo;
        this.states = states;
        this.builder = builder;
        this.sharedActions = [];
      }
      findSharedActions(state) {
        if (state.actions.length < MinSharedActions)
          return null;
        let found2 = null;
        for (let shared of this.sharedActions) {
          if ((!found2 || shared.actions.length > found2.actions.length) && shared.actions.every((a) => state.actions.some((b) => b.eq(a))))
            found2 = shared;
        }
        if (found2)
          return found2;
        let max2 = null, scratch = [];
        for (let i = state.id + 1; i < this.states.length; i++) {
          let other = this.states[i], fill = 0;
          if (other.defaultReduce || other.actions.length < MinSharedActions)
            continue;
          for (let a of state.actions)
            for (let b of other.actions)
              if (a.eq(b))
                scratch[fill++] = a;
          if (fill >= MinSharedActions && (!max2 || max2.length < fill)) {
            max2 = scratch;
            scratch = [];
          }
        }
        if (!max2)
          return null;
        let result = { actions: max2, addr: this.storeActions(max2, -1, null) };
        this.sharedActions.push(result);
        return result;
      }
      storeActions(actions, skipReduce, shared) {
        if (skipReduce < 0 && shared && shared.actions.length == actions.length)
          return shared.addr;
        let data = [];
        for (let action of actions) {
          if (shared && shared.actions.some((a) => a.eq(action)))
            continue;
          if (action instanceof Shift) {
            data.push(action.term.id, action.target.id, 0);
          } else {
            let code = reduceAction(action.rule, this.skipInfo);
            if (code != skipReduce)
              data.push(action.term.id, code & 65535, code >> 16);
          }
        }
        data.push(
          65535
          /* Seq.End */
        );
        if (skipReduce > -1)
          data.push(2, skipReduce & 65535, skipReduce >> 16);
        else if (shared)
          data.push(1, shared.addr & 65535, shared.addr >> 16);
        else
          data.push(
            0
            /* Seq.Done */
          );
        return this.data.storeArray(data);
      }
      finish(state, isSkip, forcedReduce) {
        let b = this.builder;
        let skipID = b.skipRules.indexOf(state.skip);
        let skipTable = this.skipData[skipID], skipTerms = this.skipInfo[skipID].startTokens;
        let defaultReduce = state.defaultReduce ? reduceAction(state.defaultReduce, this.skipInfo) : 0;
        let flags = isSkip ? 1 : 0;
        let skipReduce = -1, shared = null;
        if (defaultReduce == 0) {
          if (isSkip) {
            for (const action of state.actions)
              if (action instanceof Reduce && action.term.eof)
                skipReduce = reduceAction(action.rule, this.skipInfo);
          }
          if (skipReduce < 0)
            shared = this.findSharedActions(state);
        }
        if (state.set.some((p2) => p2.rule.name.top && p2.pos == p2.rule.parts.length))
          flags |= 2;
        let external = [];
        for (let i = 0; i < state.actions.length + skipTerms.length; i++) {
          let term = i < state.actions.length ? state.actions[i].term : skipTerms[i - state.actions.length];
          for (; ; ) {
            let orig = b.tokenOrigins[term.name];
            if (orig && orig.spec) {
              term = orig.spec;
              continue;
            }
            if (orig && orig.external instanceof ExternalTokenSet)
              addToSet(external, orig.external);
            break;
          }
        }
        let tokenizerMask = 0;
        for (let i = 0; i < this.tokenizers.length; i++) {
          let tok = this.tokenizers[i];
          if (external.includes(tok) || tok.groupID == state.tokenGroup)
            tokenizerMask |= 1 << i;
        }
        let base = state.id * 6;
        this.stateArray[
          base + 0
          /* ParseState.Flags */
        ] = flags;
        this.stateArray[
          base + 1
          /* ParseState.Actions */
        ] = this.storeActions(defaultReduce ? none2 : state.actions, skipReduce, shared);
        this.stateArray[
          base + 2
          /* ParseState.Skip */
        ] = skipTable;
        this.stateArray[
          base + 3
          /* ParseState.TokenizerMask */
        ] = tokenizerMask;
        this.stateArray[
          base + 4
          /* ParseState.DefaultReduce */
        ] = defaultReduce;
        this.stateArray[
          base + 5
          /* ParseState.ForcedReduce */
        ] = forcedReduce;
      }
    };
    DataBuilder = class {
      constructor() {
        this.data = [];
      }
      storeArray(data) {
        let found2 = findArray(this.data, data);
        if (found2 > -1)
          return found2;
        let pos = this.data.length;
        for (let num of data)
          this.data.push(num);
        return pos;
      }
      finish() {
        return Uint16Array.from(this.data);
      }
    };
    TokenGroup = class {
      constructor(tokens, groupID) {
        this.tokens = tokens;
        this.groupID = groupID;
      }
      create() {
        return this.groupID;
      }
      createSource() {
        return String(this.groupID);
      }
    };
    TokenArg = class {
      constructor(name2, expr, scope) {
        this.name = name2;
        this.expr = expr;
        this.scope = scope;
      }
    };
    BuildingRule = class {
      constructor(name2, start, to, args2) {
        this.name = name2;
        this.start = start;
        this.to = to;
        this.args = args2;
      }
    };
    TokenSet = class {
      constructor(b, ast) {
        this.b = b;
        this.ast = ast;
        this.startState = new State$1();
        this.built = [];
        this.building = [];
        this.byDialect = /* @__PURE__ */ Object.create(null);
        this.precedenceRelations = [];
        this.rules = ast ? ast.rules : none2;
        for (let rule of this.rules)
          b.unique(rule.id);
      }
      getToken(expr) {
        for (let built of this.built)
          if (built.matches(expr))
            return built.term;
        let name2 = expr.id.name;
        let rule = this.rules.find((r) => r.id.name == name2);
        if (!rule)
          return null;
        let { name: nodeName, props, dialect, exported } = this.b.nodeInfo(rule.props, "d", name2, expr.args, rule.params.length != expr.args.length ? none2 : rule.params);
        let term = this.b.makeTerminal(expr.toString(), nodeName, props);
        if (dialect != null)
          (this.byDialect[dialect] || (this.byDialect[dialect] = [])).push(term);
        if ((term.nodeType || exported) && rule.params.length == 0) {
          if (!term.nodeType)
            term.preserve = true;
          this.b.namedTerms[exported || name2] = term;
        }
        this.buildRule(rule, expr, this.startState, new State$1([term]));
        this.built.push(new BuiltRule(name2, expr.args, term));
        return term;
      }
      buildRule(rule, expr, from2, to, args2 = none2) {
        let name2 = expr.id.name;
        if (rule.params.length != expr.args.length)
          this.b.raise(`Incorrect number of arguments for token '${name2}'`, expr.start);
        let building = this.building.find((b) => b.name == name2 && exprsEq(expr.args, b.args));
        if (building) {
          if (building.to == to) {
            from2.nullEdge(building.start);
            return;
          }
          let lastIndex = this.building.length - 1;
          while (this.building[lastIndex].name != name2)
            lastIndex--;
          this.b.raise(`Invalid (non-tail) recursion in token rules: ${this.building.slice(lastIndex).map((b) => b.name).join(" -> ")}`, expr.start);
        }
        this.b.used(rule.id.name);
        let start = new State$1();
        from2.nullEdge(start);
        this.building.push(new BuildingRule(name2, start, to, expr.args));
        this.build(this.b.substituteArgs(rule.expr, expr.args, rule.params), start, to, expr.args.map((e, i) => new TokenArg(rule.params[i].name, e, args2)));
        this.building.pop();
      }
      build(expr, from2, to, args2) {
        if (expr instanceof NameExpression) {
          let name2 = expr.id.name, arg = args2.find((a) => a.name == name2);
          if (arg)
            return this.build(arg.expr, from2, to, arg.scope);
          let rule;
          for (let i = 0, lt = this.b.localTokens; i <= lt.length; i++) {
            let set = i == lt.length ? this.b.tokens : lt[i];
            rule = set.rules.find((r) => r.id.name == name2);
          }
          if (!rule)
            return this.b.raise(`Reference to token rule '${expr.id.name}', which isn't found`, expr.start);
          this.buildRule(rule, expr, from2, to, args2);
        } else if (expr instanceof CharClass) {
          for (let [a, b] of CharClasses[expr.type])
            from2.edge(a, b, to);
        } else if (expr instanceof ChoiceExpression) {
          for (let choice of expr.exprs)
            this.build(choice, from2, to, args2);
        } else if (isEmpty2(expr)) {
          from2.nullEdge(to);
        } else if (expr instanceof SequenceExpression) {
          let conflict = expr.markers.find((c) => c.length > 0);
          if (conflict)
            this.b.raise("Conflict marker in token expression", conflict[0].start);
          for (let i = 0; i < expr.exprs.length; i++) {
            let next = i == expr.exprs.length - 1 ? to : new State$1();
            this.build(expr.exprs[i], from2, next, args2);
            from2 = next;
          }
        } else if (expr instanceof RepeatExpression) {
          if (expr.kind == "*") {
            let loop = new State$1();
            from2.nullEdge(loop);
            this.build(expr.expr, loop, loop, args2);
            loop.nullEdge(to);
          } else if (expr.kind == "+") {
            let loop = new State$1();
            this.build(expr.expr, from2, loop, args2);
            this.build(expr.expr, loop, loop, args2);
            loop.nullEdge(to);
          } else {
            from2.nullEdge(to);
            this.build(expr.expr, from2, to, args2);
          }
        } else if (expr instanceof SetExpression) {
          for (let [a, b] of expr.inverted ? invertRanges(expr.ranges) : expr.ranges)
            rangeEdges(from2, to, a, b);
        } else if (expr instanceof LiteralExpression) {
          for (let i = 0; i < expr.value.length; i++) {
            let ch = expr.value.charCodeAt(i);
            let next = i == expr.value.length - 1 ? to : new State$1();
            from2.edge(ch, ch + 1, next);
            from2 = next;
          }
        } else if (expr instanceof AnyExpression) {
          let mid = new State$1();
          from2.edge(0, 56320, to);
          from2.edge(56320, MAX_CHAR + 1, to);
          from2.edge(55296, 56320, mid);
          mid.edge(56320, 57344, to);
        } else {
          return this.b.raise(`Unrecognized expression type in token`, expr.start);
        }
      }
      takePrecedences() {
        let rel = this.precedenceRelations = [];
        if (this.ast)
          for (let group of this.ast.precedences) {
            let prev = [];
            for (let item of group.items) {
              let level = [];
              if (item instanceof NameExpression) {
                for (let built of this.built)
                  if (item.args.length ? built.matches(item) : built.id == item.id.name)
                    level.push(built.term);
              } else {
                let id2 = JSON.stringify(item.value), found2 = this.built.find((b) => b.id == id2);
                if (found2)
                  level.push(found2.term);
              }
              if (!level.length)
                this.b.warn(`Precedence specified for unknown token ${item}`, item.start);
              for (let term of level)
                addRel(rel, term, prev);
              prev = prev.concat(level);
            }
          }
      }
      precededBy(a, b) {
        let found2 = this.precedenceRelations.find((r) => r.term == a);
        return found2 && found2.after.includes(b);
      }
      buildPrecTable(softConflicts) {
        let precTable = [], rel = this.precedenceRelations.slice();
        for (let { a, b, soft } of softConflicts)
          if (soft) {
            if (!rel.some((r) => r.term == a) || !rel.some((r) => r.term == b))
              continue;
            if (soft < 0)
              [a, b] = [b, a];
            addRel(rel, b, [a]);
            addRel(rel, a, []);
          }
        add:
          while (rel.length) {
            for (let i = 0; i < rel.length; i++) {
              let record = rel[i];
              if (record.after.every((t) => precTable.includes(t.id))) {
                precTable.push(record.term.id);
                if (rel.length == 1)
                  break add;
                rel[i] = rel.pop();
                continue add;
              }
            }
            this.b.raise(`Cyclic token precedence relation between ${rel.map((r) => r.term).join(", ")}`);
          }
        return precTable;
      }
    };
    MainTokenSet = class extends TokenSet {
      constructor() {
        super(...arguments);
        this.explicitConflicts = [];
      }
      getLiteral(expr) {
        let id2 = JSON.stringify(expr.value);
        for (let built of this.built)
          if (built.id == id2)
            return built.term;
        let name2 = null, props = {}, dialect = null, exported = null;
        let decl = this.ast ? this.ast.literals.find((l) => l.literal == expr.value) : null;
        if (decl)
          ({ name: name2, props, dialect, exported } = this.b.nodeInfo(decl.props, "da", expr.value));
        let term = this.b.makeTerminal(id2, name2, props);
        if (dialect != null)
          (this.byDialect[dialect] || (this.byDialect[dialect] = [])).push(term);
        if (exported)
          this.b.namedTerms[exported] = term;
        this.build(expr, this.startState, new State$1([term]), none2);
        this.built.push(new BuiltRule(id2, none2, term));
        return term;
      }
      takeConflicts() {
        var _a;
        let resolve = (expr) => {
          if (expr instanceof NameExpression) {
            for (let built of this.built)
              if (built.matches(expr))
                return built.term;
          } else {
            let id2 = JSON.stringify(expr.value), found2 = this.built.find((b) => b.id == id2);
            if (found2)
              return found2.term;
          }
          this.b.warn(`Precedence specified for unknown token ${expr}`, expr.start);
          return null;
        };
        for (let c of ((_a = this.ast) === null || _a === void 0 ? void 0 : _a.conflicts) || []) {
          let a = resolve(c.a), b = resolve(c.b);
          if (a && b) {
            if (a.id < b.id)
              [a, b] = [b, a];
            this.explicitConflicts.push({ a, b });
          }
        }
      }
      // Token groups are a mechanism for allowing conflicting (matching
      // overlapping input, without an explicit precedence being given)
      // tokens to exist in a grammar _if_ they don't occur in the same
      // place (aren't used in the same states).
      //
      // States that use tokens that conflict will raise an error when any
      // of the conflicting pairs of tokens both occur in that state.
      // Otherwise, they are assigned a token group, which includes all
      // the potentially-conflicting tokens they use. If there's already a
      // group that doesn't have any conflicts with those tokens, that is
      // reused, otherwise a new group is created.
      //
      // So each state has zero or one token groups, and each conflicting
      // token may belong to one or more groups. Tokens get assigned a
      // 16-bit bitmask with the groups they belong to set to 1 (all-1s
      // for non-conflicting tokens). When tokenizing, that mask is
      // compared to the current state's group (again using all-1s for
      // group-less states) to determine whether a token is applicable for
      // this state.
      //
      // Extended/specialized tokens are treated as their parent token for
      // this purpose.
      buildTokenGroups(states, skipInfo, startID) {
        let tokens = this.startState.compile();
        if (tokens.accepting.length)
          this.b.raise(`Grammar contains zero-length tokens (in '${tokens.accepting[0].name}')`, this.rules.find((r) => r.id.name == tokens.accepting[0].name).start);
        if (/\btokens\b/.test(verbose))
          console.log(tokens.toString());
        let allConflicts = tokens.findConflicts(checkTogether(states, this.b, skipInfo)).filter(({ a, b }) => !this.precededBy(a, b) && !this.precededBy(b, a));
        for (let { a, b } of this.explicitConflicts) {
          if (!allConflicts.some((c) => c.a == a && c.b == b))
            allConflicts.push(new Conflict$1(a, b, 0, "", ""));
        }
        let softConflicts = allConflicts.filter((c) => c.soft), conflicts = allConflicts.filter((c) => !c.soft);
        let errors = [];
        let groups = [];
        for (let state of states) {
          if (state.defaultReduce || state.tokenGroup > -1)
            continue;
          let terms = [], incompatible = [];
          let skip = skipInfo[this.b.skipRules.indexOf(state.skip)].startTokens;
          for (let term of skip)
            if (state.actions.some((a) => a.term == term))
              this.b.raise(`Use of token ${term.name} conflicts with skip rule`);
          let stateTerms = [];
          for (let i = 0; i < state.actions.length + (skip ? skip.length : 0); i++) {
            let term = i < state.actions.length ? state.actions[i].term : skip[i - state.actions.length];
            let orig = this.b.tokenOrigins[term.name];
            if (orig && orig.spec)
              term = orig.spec;
            else if (orig && orig.external)
              continue;
            addToSet(stateTerms, term);
          }
          if (stateTerms.length == 0)
            continue;
          for (let term of stateTerms) {
            for (let conflict of conflicts) {
              let conflicting = conflict.a == term ? conflict.b : conflict.b == term ? conflict.a : null;
              if (!conflicting)
                continue;
              if (stateTerms.includes(conflicting) && !errors.some((e) => e.conflict == conflict)) {
                let example = conflict.exampleA ? ` (example: ${JSON.stringify(conflict.exampleA)}${conflict.exampleB ? ` vs ${JSON.stringify(conflict.exampleB)}` : ""})` : "";
                errors.push({
                  error: `Overlapping tokens ${term.name} and ${conflicting.name} used in same context${example}
After: ${state.set[0].trail()}`,
                  conflict
                });
              }
              addToSet(terms, term);
              addToSet(incompatible, conflicting);
            }
          }
          let tokenGroup = null;
          for (let group of groups) {
            if (incompatible.some((term) => group.tokens.includes(term)))
              continue;
            for (let term of terms)
              addToSet(group.tokens, term);
            tokenGroup = group;
            break;
          }
          if (!tokenGroup) {
            tokenGroup = new TokenGroup(terms, groups.length + startID);
            groups.push(tokenGroup);
          }
          state.tokenGroup = tokenGroup.groupID;
        }
        if (errors.length)
          this.b.raise(errors.map((e) => e.error).join("\n\n"));
        if (groups.length + startID > 16)
          this.b.raise(`Too many different token groups (${groups.length}) to represent them as a 16-bit bitfield`);
        let precTable = this.buildPrecTable(softConflicts);
        return {
          tokenGroups: groups,
          tokenPrec: precTable,
          tokenData: tokens.toArray(buildTokenMasks(groups), precTable)
        };
      }
    };
    LocalTokenSet = class extends TokenSet {
      constructor(b, ast) {
        super(b, ast);
        this.fallback = null;
        if (ast.fallback)
          b.unique(ast.fallback.id);
      }
      getToken(expr) {
        let term = null;
        if (this.ast.fallback && this.ast.fallback.id.name == expr.id.name) {
          if (expr.args.length)
            this.b.raise(`Incorrect number of arguments for ${expr.id.name}`, expr.start);
          if (!this.fallback) {
            let { name: nodeName, props, exported } = this.b.nodeInfo(this.ast.fallback.props, "", expr.id.name, none2, none2);
            let term2 = this.fallback = this.b.makeTerminal(expr.id.name, nodeName, props);
            if (term2.nodeType || exported) {
              if (!term2.nodeType)
                term2.preserve = true;
              this.b.namedTerms[exported || expr.id.name] = term2;
            }
            this.b.used(expr.id.name);
          }
          term = this.fallback;
        } else {
          term = super.getToken(expr);
        }
        if (term && !this.b.tokenOrigins[term.name])
          this.b.tokenOrigins[term.name] = { group: this };
        return term;
      }
      buildLocalGroup(states, skipInfo, id2) {
        let tokens = this.startState.compile();
        if (tokens.accepting.length)
          this.b.raise(`Grammar contains zero-length tokens (in '${tokens.accepting[0].name}')`, this.rules.find((r) => r.id.name == tokens.accepting[0].name).start);
        for (let { a, b, exampleA } of tokens.findConflicts(() => true)) {
          if (!this.precededBy(a, b) && !this.precededBy(b, a))
            this.b.raise(`Overlapping tokens ${a.name} and ${b.name} in local token group${exampleA ? ` (example: ${JSON.stringify(exampleA)})` : ""}`);
        }
        for (let state of states) {
          if (state.defaultReduce)
            continue;
          let usesThis = null;
          let usesOther = skipInfo[this.b.skipRules.indexOf(state.skip)].startTokens[0];
          for (let { term } of state.actions) {
            let orig = this.b.tokenOrigins[term.name];
            if ((orig === null || orig === void 0 ? void 0 : orig.group) == this)
              usesThis = term;
            else
              usesOther = term;
          }
          if (usesThis) {
            if (usesOther)
              this.b.raise(`Tokens from a local token group used together with other tokens (${usesThis.name} with ${usesOther.name})`);
            state.tokenGroup = id2;
          }
        }
        let precTable = this.buildPrecTable(none2);
        let tokenData = tokens.toArray({
          [id2]: 65535
          /* Seq.End */
        }, precTable);
        let precOffset = tokenData.length;
        let fullData = new Uint16Array(tokenData.length + precTable.length + 1);
        fullData.set(tokenData, 0);
        fullData.set(precTable, precOffset);
        fullData[fullData.length - 1] = 65535;
        return {
          groupID: id2,
          create: () => new LocalTokenGroup(fullData, precOffset, this.fallback ? this.fallback.id : void 0),
          createSource: (importName) => `new ${importName("LocalTokenGroup", "@lezer/lr")}(${encodeArray(fullData)}, ${precOffset}${this.fallback ? `, ${this.fallback.id}` : ""})`
        };
      }
    };
    ASTRAL = 65536;
    GAP_START = 55296;
    GAP_END = 57344;
    MAX_CODE = 1114111;
    LOW_SURR_B = 56320;
    HIGH_SURR_B = 57343;
    ExternalTokenSet = class {
      constructor(b, ast) {
        this.b = b;
        this.ast = ast;
        this.tokens = gatherExtTokens(b, ast.tokens);
        for (let name2 in this.tokens)
          this.b.tokenOrigins[this.tokens[name2].name] = { external: this };
      }
      getToken(expr) {
        return findExtToken(this.b, this.tokens, expr);
      }
      create() {
        return this.b.options.externalTokenizer(this.ast.id.name, this.b.termTable);
      }
      createSource(importName) {
        let { source, id: { name: name2 } } = this.ast;
        return importName(name2, source);
      }
    };
    ExternalSpecializer = class {
      constructor(b, ast) {
        this.b = b;
        this.ast = ast;
        this.term = null;
        this.tokens = gatherExtTokens(b, ast.tokens);
      }
      finish() {
        let terms = this.b.normalizeExpr(this.ast.token);
        if (terms.length != 1 || terms[0].terms.length != 1 || !terms[0].terms[0].terminal)
          this.b.raise(`The token expression to '@external ${this.ast.type}' must resolve to a token`, this.ast.token.start);
        this.term = terms[0].terms[0];
        for (let name2 in this.tokens)
          this.b.tokenOrigins[this.tokens[name2].name] = { spec: this.term, external: this };
      }
      getToken(expr) {
        return findExtToken(this.b, this.tokens, expr);
      }
    };
    KEYWORDS = [
      "break",
      "case",
      "catch",
      "continue",
      "debugger",
      "default",
      "do",
      "else",
      "finally",
      "for",
      "function",
      "if",
      "return",
      "switch",
      "throw",
      "try",
      "var",
      "while",
      "with",
      "null",
      "true",
      "false",
      "instanceof",
      "typeof",
      "void",
      "delete",
      "new",
      "in",
      "this",
      "const",
      "class",
      "extends",
      "export",
      "import",
      "super",
      "enum",
      "implements",
      "interface",
      "let",
      "package",
      "private",
      "protected",
      "public",
      "static",
      "yield",
      "require"
    ];
  }
});

// ../../node_modules/@jupyterlab/codemirror/lib/theme.js
var jupyterEditorTheme, jupyterHighlightStyle, jupyterTheme, EditorThemeRegistry;
var init_theme = __esm({
  "../../node_modules/@jupyterlab/codemirror/lib/theme.js"() {
    init_dist5();
    init_dist2();
    init_lib();
    init_dist4();
    jupyterEditorTheme = EditorView.theme({
      /**
       * CodeMirror themes are handling the background/color in this way. This works
       * fine for CodeMirror editors outside the notebook, but the notebook styles
       * these things differently.
       */
      "&": {
        background: "var(--jp-layout-color0)",
        color: "var(--jp-content-font-color1)"
      },
      /* In the notebook, we want this styling to be handled by its container */
      ".jp-CodeConsole &, .jp-Notebook &": {
        background: "transparent"
      },
      ".cm-content": {
        caretColor: "var(--jp-editor-cursor-color)"
      },
      /* Inherit font family from .cm-editor */
      ".cm-scroller": {
        fontFamily: "inherit"
      },
      ".cm-cursor, .cm-dropCursor": {
        borderLeft: "var(--jp-code-cursor-width0) solid var(--jp-editor-cursor-color)"
      },
      ".cm-selectionBackground, .cm-content ::selection": {
        backgroundColor: "var(--jp-editor-selected-background)"
      },
      "&.cm-focused > .cm-scroller > .cm-selectionLayer .cm-selectionBackground": {
        backgroundColor: "var(--jp-editor-selected-focused-background)"
      },
      ".cm-gutters": {
        borderRight: "1px solid var(--jp-border-color2)",
        backgroundColor: "var(--jp-layout-color2)"
      },
      ".cm-gutter": {
        backgroundColor: "var(--jp-layout-color2)"
      },
      ".cm-activeLine": {
        backgroundColor: "color-mix(in srgb, var(--jp-layout-color3) 25%, transparent)"
      },
      ".cm-lineNumbers": {
        color: "var(--jp-ui-font-color2)"
      },
      ".cm-searchMatch": {
        backgroundColor: "var(--jp-search-unselected-match-background-color)",
        color: "var(--jp-search-unselected-match-color)"
      },
      ".cm-searchMatch.cm-searchMatch-selected": {
        backgroundColor: "var(--jp-search-selected-match-background-color) !important",
        color: "var(--jp-search-selected-match-color) !important"
      },
      ".cm-tooltip": {
        backgroundColor: "var(--jp-layout-color1)"
      },
      ".cm-builtin": {
        color: "var(--jp-mirror-editor-builtin-color)"
      }
    });
    jupyterHighlightStyle = HighlightStyle.define([
      // Order matters - a rule will override the previous ones; important for example for in headings styles.
      { tag: tags.meta, color: "var(--jp-mirror-editor-meta-color)" },
      { tag: tags.heading, color: "var(--jp-mirror-editor-header-color)" },
      {
        tag: [tags.heading1, tags.heading2, tags.heading3, tags.heading4],
        color: "var(--jp-mirror-editor-header-color)",
        fontWeight: "bold"
      },
      {
        tag: tags.keyword,
        color: "var(--jp-mirror-editor-keyword-color)",
        fontWeight: "bold"
      },
      { tag: tags.atom, color: "var(--jp-mirror-editor-atom-color)" },
      { tag: tags.number, color: "var(--jp-mirror-editor-number-color)" },
      {
        tag: [tags.definition(tags.name), tags.function(tags.definition(tags.variableName))],
        color: "var(--jp-mirror-editor-def-color)"
      },
      {
        tag: tags.standard(tags.variableName),
        color: "var(--jp-mirror-editor-builtin-color)"
      },
      {
        tag: [tags.special(tags.variableName), tags.self],
        color: "var(--jp-mirror-editor-variable-2-color)"
      },
      { tag: tags.punctuation, color: "var(--jp-mirror-editor-punctuation-color)" },
      { tag: tags.propertyName, color: "var(--jp-mirror-editor-property-color)" },
      {
        tag: tags.operator,
        color: "var(--jp-mirror-editor-operator-color)",
        fontWeight: "bold"
      },
      {
        tag: tags.comment,
        color: "var(--jp-mirror-editor-comment-color)",
        fontStyle: "italic"
      },
      { tag: tags.string, color: "var(--jp-mirror-editor-string-color)" },
      {
        tag: [tags.labelName, tags.monospace, tags.special(tags.string)],
        color: "var(--jp-mirror-editor-string-2-color)"
      },
      { tag: tags.bracket, color: "var(--jp-mirror-editor-bracket-color)" },
      { tag: tags.tagName, color: "var(--jp-mirror-editor-tag-color)" },
      { tag: tags.attributeName, color: "var(--jp-mirror-editor-attribute-color)" },
      { tag: tags.quote, color: "var(--jp-mirror-editor-quote-color)" },
      {
        tag: tags.link,
        color: "var(--jp-mirror-editor-link-color)",
        textDecoration: "underline"
      },
      { tag: [tags.separator, tags.derefOperator, tags.paren], color: "" },
      { tag: tags.strong, fontWeight: "bold" },
      { tag: tags.emphasis, fontStyle: "italic" },
      { tag: tags.strikethrough, textDecoration: "line-through" },
      {
        tag: tags.bool,
        color: "var(--jp-mirror-editor-keyword-color)",
        fontWeight: "bold"
      }
    ]);
    jupyterTheme = [
      jupyterEditorTheme,
      syntaxHighlighting(jupyterHighlightStyle)
    ];
    EditorThemeRegistry = class {
      constructor() {
        this._themeMap = /* @__PURE__ */ new Map([
          ["jupyter", Object.freeze({ name: "jupyter", theme: jupyterTheme })]
        ]);
      }
      /**
       * Get all themes
       */
      get themes() {
        return Array.from(this._themeMap.values());
      }
      /**
       * Get the default CodeMirror 6 theme for JupyterLab
       *
       * @returns Default theme
       */
      defaultTheme() {
        return this._themeMap.get("jupyter").theme;
      }
      /**
       * Register a new theme.
       *
       * @param theme Codemirror 6 theme
       */
      addTheme(theme2) {
        if (this._themeMap.has(theme2.name)) {
          throw new Error(`A theme named '${theme2.name}' is already registered.`);
        }
        this._themeMap.set(theme2.name, { displayName: theme2.name, ...theme2 });
      }
      /**
       * Get a theme.
       *
       * #### Notes
       * It falls back to the default theme
       *
       * @param name Theme name
       * @returns Theme extension
       */
      getTheme(name2) {
        var _a;
        const ext = (_a = this._themeMap.get(name2)) === null || _a === void 0 ? void 0 : _a.theme;
        return ext !== null && ext !== void 0 ? ext : this.defaultTheme();
      }
    };
    (function(EditorThemeRegistry2) {
      function getDefaultThemes(translator) {
        const trans = (translator !== null && translator !== void 0 ? translator : nullTranslator).load("jupyterlab");
        return [
          Object.freeze({
            name: "codemirror",
            displayName: trans.__("codemirror"),
            theme: [
              EditorView.baseTheme({}),
              syntaxHighlighting(defaultHighlightStyle)
            ]
          })
        ];
      }
      EditorThemeRegistry2.getDefaultThemes = getDefaultThemes;
    })(EditorThemeRegistry || (EditorThemeRegistry = {}));
  }
});

// ../../node_modules/@jupyterlab/codemirror/lib/pythonBuiltin.js
function pythonBuiltin(langPython) {
  return ViewPlugin.define((view) => new PythonBuiltin(view, langPython), {
    decorations: (v) => v.decorations
  });
}
var PythonBuiltin, builtins;
var init_pythonBuiltin = __esm({
  "../../node_modules/@jupyterlab/codemirror/lib/pythonBuiltin.js"() {
    init_dist5();
    init_dist();
    init_dist2();
    init_dist3();
    PythonBuiltin = class {
      constructor(view, langPython) {
        this.langPython = langPython;
        this.tree = syntaxTree(view.state);
        this.mark = Decoration.mark({ class: "cm-builtin" });
        this.decorations = this.buildDeco(view);
        this.decoratedTo = view.viewport.to;
      }
      update(update) {
        let tree = syntaxTree(update.state);
        let { viewport } = update.view, decoratedToMapped = update.changes.mapPos(this.decoratedTo, 1);
        if (tree.length < viewport.to && tree.type == this.tree.type && decoratedToMapped >= viewport.to) {
          this.decorations = this.decorations.map(update.changes);
          this.decoratedTo = decoratedToMapped;
        } else if (tree != this.tree || update.viewportChanged) {
          this.tree = tree;
          this.decorations = this.buildDeco(update.view);
          this.decoratedTo = viewport.to;
        }
      }
      buildDeco(view) {
        if (!this.tree.length)
          return Decoration.none;
        let builder = new RangeSetBuilder();
        const enter = (node) => {
          var _a;
          const cursor = node.node.cursor();
          const mounted = cursor.tree && cursor.tree.prop(NodeProp.mounted);
          if (mounted && mounted.overlay) {
            (_a = node.node.enter(mounted.overlay[0].from + node.from, 1)) === null || _a === void 0 ? void 0 : _a.cursor().iterate(enter);
          }
          if (this.langPython.isActiveAt(view.state, node.from + 1) && node.name === "VariableName") {
            const variableName = view.state.sliceDoc(node.from, node.to);
            if (builtins.includes(variableName)) {
              builder.add(node.from, node.to, this.mark);
            }
          }
        };
        for (let { from: from2, to } of view.visibleRanges) {
          this.tree.iterate({ enter, from: from2, to });
        }
        return builder.finish();
      }
    };
    builtins = [
      "abs",
      "aiter",
      "all",
      "any",
      "anext",
      "ascii",
      "bin",
      "bool",
      "breakpoint",
      "bytearray",
      "bytes",
      "callable",
      "chr",
      "classmethod",
      "compile",
      "complex",
      "delattr",
      "dict",
      "dir",
      "divmod",
      "enumerate",
      "eval",
      "exec",
      "filter",
      "float",
      "format",
      "frozenset",
      "getattr",
      "globals",
      "hasattr",
      "hash",
      "help",
      "hex",
      "id",
      "input",
      "int",
      "isinstance",
      "issubclass",
      "iter",
      "len",
      "list",
      "locals",
      "map",
      "max",
      "memoryview",
      "min",
      "next",
      "object",
      "oct",
      "open",
      "ord",
      "pow",
      "print",
      "property",
      "range",
      "repr",
      "reversed",
      "round",
      "set",
      "setattr",
      "slice",
      "sorted",
      "staticmethod",
      "str",
      "sum",
      "super",
      "tuple",
      "type",
      "vars",
      "zip",
      "__import__"
    ];
  }
});

// ../../node_modules/@jupyterlab/codemirror/lib/language.js
var import_coreutils10, EditorLanguageRegistry;
var init_language = __esm({
  "../../node_modules/@jupyterlab/codemirror/lib/language.js"() {
    init_dist5();
    init_lib7();
    import_coreutils10 = __toESM(require_lib());
    init_lib();
    init_dist10();
    init_dist4();
    init_theme();
    init_pythonBuiltin();
    EditorLanguageRegistry = class {
      constructor() {
        this._modeList = [];
        this.addLanguage({
          name: "none",
          mime: "text/plain",
          support: new LanguageSupport(
            // Create a dummy parser that as no expression to parse
            LRLanguage.define({ parser: buildParser("@top Program { }") })
          )
        });
      }
      /**
       * Register a new language for CodeMirror
       *
       * @param language Language to register
       */
      addLanguage(language) {
        var _a;
        const info = (_a = this.findByName(language.name)) !== null && _a !== void 0 ? _a : this.findByMIME(language.mime, true);
        if (info) {
          throw new Error(`${language.mime} already registered`);
        }
        this._modeList.push(this.makeSpec(language));
      }
      /**
       * Ensure a codemirror mode is available by name or Codemirror spec.
       *
       * @param language - The mode to ensure.  If it is a string, uses [findBest]
       *   to get the appropriate spec.
       *
       * @returns A promise that resolves when the mode is available.
       */
      async getLanguage(language) {
        const spec = this.findBest(language);
        if (spec && !spec.support) {
          spec.support = await spec.load();
        }
        return spec;
      }
      /**
       * Get the raw list of available modes specs.
       *
       * @returns The available modes
       */
      getLanguages() {
        return [...this._modeList];
      }
      /**
       * Find a codemirror mode by MIME.
       *
       * @param mime Mime type to look for
       * @param strict Whether xml and json should be assimilated to the generic mimetype
       * @returns The mode or null
       */
      findByMIME(mime, strict = false) {
        if (Array.isArray(mime)) {
          for (let i = 0; i < mime.length; i++) {
            const spec = this.findByMIME(mime[i]);
            if (spec)
              return spec;
          }
          return null;
        }
        mime = mime.toLowerCase();
        for (let i = 0; i < this._modeList.length; i++) {
          let info = this._modeList[i];
          if (Array.isArray(info.mime)) {
            for (let j = 0; j < info.mime.length; j++) {
              if (info.mime[j] == mime) {
                return info;
              }
            }
          } else if (info.mime == mime) {
            return info;
          }
        }
        if (!strict) {
          if (/\+xml$/.test(mime))
            return this.findByMIME("application/xml");
          if (/\+json$/.test(mime))
            return this.findByMIME("application/json");
        }
        return null;
      }
      /**
       * Find a codemirror mode by name.
       *
       * @param name The mode name
       * @returns The mode or null
       */
      findByName(name2) {
        name2 = name2.toLowerCase();
        for (let i = 0; i < this._modeList.length; i++) {
          let info = this._modeList[i];
          if (info.name.toLowerCase() == name2)
            return info;
          if (info.alias) {
            for (let j = 0; j < info.alias.length; j++) {
              if (info.alias[j].toLowerCase() == name2) {
                return info;
              }
            }
          }
        }
        return null;
      }
      /**
       * Find a codemirror mode by extension.
       *
       * @param ext The extension name
       * @returns The mode or null
       */
      findByExtension(ext) {
        if (Array.isArray(ext)) {
          for (let i = 0; i < ext.length; i++) {
            const spec = this.findByExtension(ext[i]);
            if (spec)
              return spec;
          }
          return null;
        }
        ext = ext.toLowerCase();
        for (let i = 0; i < this._modeList.length; i++) {
          let info = this._modeList[i];
          for (let j = 0; j < info.extensions.length; j++) {
            if (info.extensions[j].toLowerCase() == ext) {
              return info;
            }
          }
        }
        return null;
      }
      /**
       * Find a codemirror mode by filename.
       *
       * @param name File name
       * @returns The mode or null
       */
      findByFileName(name2) {
        const basename = import_coreutils10.PathExt.basename(name2);
        for (let i = 0; i < this._modeList.length; i++) {
          let info = this._modeList[i];
          if (info.filename && info.filename.test(basename)) {
            return info;
          }
        }
        let dot = basename.lastIndexOf(".");
        let ext = dot > -1 && basename.substring(dot + 1, basename.length);
        if (ext) {
          return this.findByExtension(ext);
        }
        return null;
      }
      /**
       * Find a codemirror mode by name or CodeMirror spec.
       *
       * @param language The CodeMirror mode
       * @param fallback Whether to fallback to default mimetype spec or not
       * @returns The mode or null
       */
      findBest(language, fallback = true) {
        var _a, _b, _c, _d;
        const modename = typeof language === "string" ? language : language.name;
        const mimetype = typeof language !== "string" ? language.mime : modename;
        const ext = typeof language !== "string" ? (_a = language.extensions) !== null && _a !== void 0 ? _a : [] : [];
        return (_d = (_c = (_b = modename ? this.findByName(modename) : null) !== null && _b !== void 0 ? _b : mimetype ? this.findByMIME(mimetype) : null) !== null && _c !== void 0 ? _c : this.findByExtension(ext)) !== null && _d !== void 0 ? _d : fallback ? this.findByMIME(IEditorMimeTypeService.defaultMimeType) : null;
      }
      /**
       * Parse and style a string.
       *
       * @param code Code to highlight
       * @param language Code language
       * @param el HTML element into which the highlighted code will be inserted
       */
      async highlight(code, language, el) {
        var _a;
        if (language) {
          await this.getLanguage(language);
        }
        const language_ = (_a = language === null || language === void 0 ? void 0 : language.support) === null || _a === void 0 ? void 0 : _a.language;
        if (!language_) {
          el.appendChild(document.createTextNode(code));
          return;
        }
        const tree = language_.parser.parse(code);
        let pos = 0;
        highlightTree(tree, jupyterHighlightStyle, (from2, to, classes2) => {
          if (from2 > pos) {
            el.appendChild(document.createTextNode(code.slice(pos, from2)));
          }
          const sp = el.appendChild(document.createElement("span"));
          sp.className = classes2;
          sp.appendChild(document.createTextNode(code.slice(from2, to)));
          pos = to;
        });
        if (pos < tree.length - 1) {
          el.appendChild(document.createTextNode(code.slice(pos, tree.length)));
        }
      }
      // Code mirror uses two similar structures, a plain object with optional fields,
      // and a class with the same fields but all mandatory. Maybe adopting the same
      // pattern would be less confusing (although far more verbose)
      makeSpec(spec) {
        let res = LanguageDescription.of(spec);
        res.mime = spec.mime;
        res.displayName = spec.displayName;
        return res;
      }
    };
    (function(EditorLanguageRegistry2) {
      function legacy(parser) {
        return new LanguageSupport(StreamLanguage.define(parser));
      }
      EditorLanguageRegistry2.legacy = legacy;
      async function sql(dialectName) {
        const m = await import("/build/_shared/dist-RTNY6DBK.js");
        return m.sql({ dialect: m[dialectName] });
      }
      function getDefaultLanguages(translator) {
        const trans = (translator !== null && translator !== void 0 ? translator : nullTranslator).load("jupyterlab");
        return [
          {
            name: "C",
            displayName: trans.__("C"),
            mime: "text/x-csrc",
            extensions: ["c", "h", "ino"],
            async load() {
              const m = await import("/build/_shared/dist-7TK7LJ3P.js");
              return m.cpp();
            }
          },
          {
            name: "C++",
            displayName: trans.__("C++"),
            mime: "text/x-c++src",
            extensions: ["cpp", "c++", "cc", "cxx", "hpp", "h++", "hh", "hxx"],
            async load() {
              const m = await import("/build/_shared/dist-7TK7LJ3P.js");
              return m.cpp();
            }
          },
          {
            name: "CQL",
            displayName: trans.__("CQL"),
            mime: "text/x-cassandra",
            extensions: ["cql"],
            load() {
              return sql("Cassandra");
            }
          },
          {
            name: "CSS",
            displayName: trans.__("CSS"),
            mime: "text/css",
            extensions: ["css"],
            async load() {
              const m = await import("/build/_shared/dist-6TJMHLC6.js");
              return m.css();
            }
          },
          {
            name: "HTML",
            displayName: trans.__("HTML"),
            alias: ["xhtml"],
            mime: "text/html",
            extensions: ["html", "htm", "handlebars", "hbs"],
            async load() {
              const m = await import("/build/_shared/dist-YMM7E3M4.js");
              return m.html();
            }
          },
          {
            name: "Java",
            displayName: trans.__("Java"),
            mime: "text/x-java",
            extensions: ["java"],
            async load() {
              const m = await import("/build/_shared/dist-OIXXCMEO.js");
              return m.java();
            }
          },
          {
            name: "Javascript",
            displayName: trans.__("Javascript"),
            alias: ["ecmascript", "js", "node"],
            mime: [
              "text/javascript",
              "text/ecmascript",
              "application/javascript",
              "application/x-javascript",
              "application/ecmascript"
            ],
            extensions: ["js", "mjs", "cjs"],
            async load() {
              const m = await import("/build/_shared/dist-UYS4WYX5.js");
              return m.javascript();
            }
          },
          {
            name: "JSON",
            displayName: trans.__("JSON"),
            alias: ["json5"],
            mime: ["application/json", "application/x-json"],
            extensions: ["json", "map"],
            async load() {
              const m = await import("/build/_shared/dist-4KEFIYSQ.js");
              return m.json();
            }
          },
          {
            name: "JSX",
            displayName: trans.__("JSX"),
            mime: "text/jsx",
            extensions: ["jsx"],
            async load() {
              const m = await import("/build/_shared/dist-UYS4WYX5.js");
              return m.javascript({ jsx: true });
            }
          },
          {
            name: "MariaDB SQL",
            displayName: trans.__("MariaDB SQL"),
            mime: "text/x-mariadb",
            load() {
              return sql("MariaSQL");
            }
          },
          {
            name: "Markdown",
            displayName: trans.__("Markdown"),
            mime: "text/x-markdown",
            extensions: ["md", "markdown", "mkd"],
            async load() {
              const m = await import("/build/_shared/dist-EZLKAVR6.js");
              return m.markdown({ codeLanguages: this._modeList });
            }
          },
          {
            name: "MS SQL",
            displayName: trans.__("MS SQL"),
            mime: "text/x-mssql",
            load() {
              return sql("MSSQL");
            }
          },
          {
            name: "MySQL",
            displayName: trans.__("MySQL"),
            mime: "text/x-mysql",
            load() {
              return sql("MySQL");
            }
          },
          {
            name: "PHP",
            displayName: trans.__("PHP"),
            mime: [
              "text/x-php",
              "application/x-httpd-php",
              "application/x-httpd-php-open"
            ],
            extensions: ["php", "php3", "php4", "php5", "php7", "phtml"],
            async load() {
              const m = await import("/build/_shared/dist-B32JRE4R.js");
              return m.php();
            }
          },
          {
            name: "PLSQL",
            displayName: trans.__("PLSQL"),
            mime: "text/x-plsql",
            extensions: ["pls"],
            load() {
              return sql("PLSQL");
            }
          },
          {
            name: "PostgreSQL",
            displayName: trans.__("PostgreSQL"),
            mime: "text/x-pgsql",
            load() {
              return sql("PostgreSQL");
            }
          },
          {
            name: "Python",
            displayName: trans.__("Python"),
            mime: "text/x-python",
            extensions: ["BUILD", "bzl", "py", "pyw"],
            filename: /^(BUCK|BUILD)$/,
            async load() {
              const m = await import("/build/_shared/dist-GFZZCNSX.js");
              return new LanguageSupport(m.pythonLanguage, pythonBuiltin(m.pythonLanguage));
            }
          },
          {
            name: "ipython",
            displayName: trans.__("ipython"),
            mime: "text/x-ipython",
            async load() {
              const m = await import("/build/_shared/dist-GFZZCNSX.js");
              return new LanguageSupport(m.pythonLanguage, pythonBuiltin(m.pythonLanguage));
            }
          },
          {
            name: "Rust",
            displayName: trans.__("Rust"),
            mime: "text/x-rustsrc",
            extensions: ["rs"],
            async load() {
              const m = await import("/build/_shared/dist-QQJJVVGP.js");
              return m.rust();
            }
          },
          {
            name: "SQL",
            displayName: trans.__("SQL"),
            mime: ["application/sql", "text/x-sql"],
            extensions: ["sql"],
            load() {
              return sql("StandardSQL");
            }
          },
          {
            name: "SQLite",
            displayName: trans.__("SQLite"),
            mime: "text/x-sqlite",
            load() {
              return sql("SQLite");
            }
          },
          {
            name: "TSX",
            displayName: trans.__("TSX"),
            alias: ["TypeScript-JSX"],
            mime: "text/typescript-jsx",
            extensions: ["tsx"],
            async load() {
              const m = await import("/build/_shared/dist-UYS4WYX5.js");
              return m.javascript({ jsx: true, typescript: true });
            }
          },
          {
            name: "TypeScript",
            displayName: trans.__("TypeScript"),
            alias: ["ts"],
            mime: "application/typescript",
            extensions: ["ts"],
            async load() {
              const m = await import("/build/_shared/dist-UYS4WYX5.js");
              return m.javascript({ typescript: true });
            }
          },
          {
            name: "WebAssembly",
            displayName: trans.__("WebAssembly"),
            mime: "text/webassembly",
            extensions: ["wat", "wast"],
            async load() {
              const m = await import("/build/_shared/dist-OPB64QYO.js");
              return m.wast();
            }
          },
          {
            name: "XML",
            displayName: trans.__("XML"),
            alias: ["rss", "wsdl", "xsd"],
            mime: ["application/xml", "text/xml"],
            extensions: ["xml", "xsl", "xsd", "svg"],
            async load() {
              const m = await import("/build/_shared/dist-Y4IPUVFT.js");
              return m.xml();
            }
          },
          // Legacy modes ported from CodeMirror 5
          {
            name: "APL",
            displayName: trans.__("APL"),
            mime: "text/apl",
            extensions: ["dyalog", "apl"],
            async load() {
              const m = await import("/build/_shared/apl-WBYPGPVD.js");
              return legacy(m.apl);
            }
          },
          {
            name: "PGP",
            displayName: trans.__("PGP"),
            alias: ["asciiarmor"],
            mime: [
              "application/pgp",
              "application/pgp-encrypted",
              "application/pgp-keys",
              "application/pgp-signature"
            ],
            extensions: ["asc", "pgp", "sig"],
            async load() {
              const m = await import("/build/_shared/asciiarmor-3DCND37C.js");
              return legacy(m.asciiArmor);
            }
          },
          {
            name: "ASN.1",
            displayName: trans.__("ASN.1"),
            mime: "text/x-ttcn-asn",
            extensions: ["asn", "asn1"],
            async load() {
              const m = await import("/build/_shared/asn1-YNIWVKRN.js");
              return legacy(m.asn1({}));
            }
          },
          {
            name: "Asterisk",
            displayName: trans.__("Asterisk"),
            mime: "text/x-asterisk",
            filename: /^extensions\.conf$/i,
            async load() {
              const m = await import("/build/_shared/asterisk-POBB66WN.js");
              return legacy(m.asterisk);
            }
          },
          {
            name: "Brainfuck",
            displayName: trans.__("Brainfuck"),
            mime: "text/x-brainfuck",
            extensions: ["b", "bf"],
            async load() {
              const m = await import("/build/_shared/brainfuck-NCJBT5QB.js");
              return legacy(m.brainfuck);
            }
          },
          {
            name: "Cobol",
            displayName: trans.__("Cobol"),
            mime: "text/x-cobol",
            extensions: ["cob", "cpy"],
            async load() {
              const m = await import("/build/_shared/cobol-GZTWTD4V.js");
              return legacy(m.cobol);
            }
          },
          {
            name: "C#",
            displayName: trans.__("C#"),
            alias: ["csharp", "cs"],
            mime: "text/x-csharp",
            extensions: ["cs"],
            async load() {
              const m = await import("/build/_shared/clike-AYJO25IC.js");
              return legacy(m.csharp);
            }
          },
          {
            name: "Clojure",
            displayName: trans.__("Clojure"),
            mime: "text/x-clojure",
            extensions: ["clj", "cljc", "cljx"],
            async load() {
              const m = await import("/build/_shared/clojure-N6ZC35RP.js");
              return legacy(m.clojure);
            }
          },
          {
            name: "ClojureScript",
            displayName: trans.__("ClojureScript"),
            mime: "text/x-clojurescript",
            extensions: ["cljs"],
            async load() {
              const m = await import("/build/_shared/clojure-N6ZC35RP.js");
              return legacy(m.clojure);
            }
          },
          {
            name: "Closure Stylesheets (GSS)",
            displayName: trans.__("Closure Stylesheets (GSS)"),
            mime: "text/x-gss",
            extensions: ["gss"],
            async load() {
              const m = await import("/build/_shared/css-KO5K3Q53.js");
              return legacy(m.gss);
            }
          },
          {
            name: "CMake",
            displayName: trans.__("CMake"),
            mime: "text/x-cmake",
            extensions: ["cmake", "cmake.in"],
            filename: /^CMakeLists\.txt$/,
            async load() {
              const m = await import("/build/_shared/cmake-VMG6IQOI.js");
              return legacy(m.cmake);
            }
          },
          {
            name: "CoffeeScript",
            displayName: trans.__("CoffeeScript"),
            alias: ["coffee", "coffee-script"],
            mime: [
              "application/vnd.coffeescript",
              "text/coffeescript",
              "text/x-coffeescript"
            ],
            extensions: ["coffee"],
            async load() {
              const m = await import("/build/_shared/coffeescript-IFGME57U.js");
              return legacy(m.coffeeScript);
            }
          },
          {
            name: "Common Lisp",
            displayName: trans.__("Common Lisp"),
            alias: ["lisp"],
            mime: "text/x-common-lisp",
            extensions: ["cl", "lisp", "el"],
            async load() {
              const m = await import("/build/_shared/commonlisp-ZIAKCXDG.js");
              return legacy(m.commonLisp);
            }
          },
          {
            name: "Cypher",
            displayName: trans.__("Cypher"),
            mime: "application/x-cypher-query",
            extensions: ["cyp", "cypher"],
            async load() {
              const m = await import("/build/_shared/cypher-YYIIRJHH.js");
              return legacy(m.cypher);
            }
          },
          {
            name: "Cython",
            displayName: trans.__("Cython"),
            mime: "text/x-cython",
            extensions: ["pyx", "pxd", "pxi"],
            async load() {
              const m = await import("/build/_shared/python-UEH4IQQW.js");
              return legacy(m.cython);
            }
          },
          {
            name: "Crystal",
            displayName: trans.__("Crystal"),
            mime: "text/x-crystal",
            extensions: ["cr"],
            async load() {
              const m = await import("/build/_shared/crystal-RNHINDJJ.js");
              return legacy(m.crystal);
            }
          },
          {
            name: "D",
            displayName: trans.__("D"),
            mime: "text/x-d",
            extensions: ["d"],
            async load() {
              const m = await import("/build/_shared/d-73L2SFXV.js");
              return legacy(m.d);
            }
          },
          {
            name: "Dart",
            displayName: trans.__("Dart"),
            mime: ["application/dart", "text/x-dart"],
            extensions: ["dart"],
            async load() {
              const m = await import("/build/_shared/clike-AYJO25IC.js");
              return legacy(m.dart);
            }
          },
          {
            name: "diff",
            displayName: trans.__("diff"),
            mime: "text/x-diff",
            extensions: ["diff", "patch"],
            async load() {
              const m = await import("/build/_shared/diff-YQAEZSWI.js");
              return legacy(m.diff);
            }
          },
          {
            name: "Dockerfile",
            displayName: trans.__("Dockerfile"),
            mime: "text/x-dockerfile",
            filename: /^Dockerfile$/,
            async load() {
              const m = await import("/build/_shared/dockerfile-JPMXVDAL.js");
              return legacy(m.dockerFile);
            }
          },
          {
            name: "DTD",
            displayName: trans.__("DTD"),
            mime: "application/xml-dtd",
            extensions: ["dtd"],
            async load() {
              const m = await import("/build/_shared/dtd-MSLOAK3Y.js");
              return legacy(m.dtd);
            }
          },
          {
            name: "Dylan",
            displayName: trans.__("Dylan"),
            mime: "text/x-dylan",
            extensions: ["dylan", "dyl", "intr"],
            async load() {
              const m = await import("/build/_shared/dylan-CDBDNXAL.js");
              return legacy(m.dylan);
            }
          },
          {
            name: "EBNF",
            displayName: trans.__("EBNF"),
            mime: "text/x-ebnf",
            async load() {
              const m = await import("/build/_shared/ebnf-FPQB6FE7.js");
              return legacy(m.ebnf);
            }
          },
          {
            name: "ECL",
            displayName: trans.__("ECL"),
            mime: "text/x-ecl",
            extensions: ["ecl"],
            async load() {
              const m = await import("/build/_shared/ecl-M2QEBLGT.js");
              return legacy(m.ecl);
            }
          },
          {
            name: "edn",
            displayName: trans.__("edn"),
            mime: "application/edn",
            extensions: ["edn"],
            async load() {
              const m = await import("/build/_shared/clojure-N6ZC35RP.js");
              return legacy(m.clojure);
            }
          },
          {
            name: "Eiffel",
            displayName: trans.__("Eiffel"),
            mime: "text/x-eiffel",
            extensions: ["e"],
            async load() {
              const m = await import("/build/_shared/eiffel-AUO7HHIC.js");
              return legacy(m.eiffel);
            }
          },
          {
            name: "Elm",
            displayName: trans.__("Elm"),
            mime: "text/x-elm",
            extensions: ["elm"],
            async load() {
              const m = await import("/build/_shared/elm-3HJENXMC.js");
              return legacy(m.elm);
            }
          },
          {
            name: "Erlang",
            displayName: trans.__("Erlang"),
            mime: "text/x-erlang",
            extensions: ["erl"],
            async load() {
              const m = await import("/build/_shared/erlang-JSRF6JYK.js");
              return legacy(m.erlang);
            }
          },
          {
            name: "Esper",
            displayName: trans.__("Esper"),
            mime: "text/x-esper",
            async load() {
              const m = await import("/build/_shared/sql-QPHQCVFA.js");
              return legacy(m.esper);
            }
          },
          {
            name: "Factor",
            displayName: trans.__("Factor"),
            mime: "text/x-factor",
            extensions: ["factor"],
            async load() {
              const m = await import("/build/_shared/factor-3UTIVP4P.js");
              return legacy(m.factor);
            }
          },
          {
            name: "FCL",
            displayName: trans.__("FCL"),
            mime: "text/x-fcl",
            async load() {
              const m = await import("/build/_shared/fcl-GXNX4JR6.js");
              return legacy(m.fcl);
            }
          },
          {
            name: "Forth",
            displayName: trans.__("Forth"),
            mime: "text/x-forth",
            extensions: ["forth", "fth", "4th"],
            async load() {
              const m = await import("/build/_shared/forth-YVVZ3X45.js");
              return legacy(m.forth);
            }
          },
          {
            name: "Fortran",
            displayName: trans.__("Fortran"),
            mime: "text/x-fortran",
            extensions: ["f", "for", "f77", "f90", "f95"],
            async load() {
              const m = await import("/build/_shared/fortran-EDTZXSGM.js");
              return legacy(m.fortran);
            }
          },
          {
            name: "F#",
            displayName: trans.__("F#"),
            alias: ["fsharp"],
            mime: "text/x-fsharp",
            extensions: ["fs"],
            async load() {
              const m = await import("/build/_shared/mllike-FCDZF2CX.js");
              return legacy(m.fSharp);
            }
          },
          {
            name: "Gas",
            displayName: trans.__("Gas"),
            mime: "text/x-gas",
            extensions: ["s"],
            async load() {
              const m = await import("/build/_shared/gas-7CBF34MA.js");
              return legacy(m.gas);
            }
          },
          {
            name: "Gherkin",
            displayName: trans.__("Gherkin"),
            mime: "text/x-feature",
            extensions: ["feature"],
            async load() {
              const m = await import("/build/_shared/gherkin-GY4E7RLV.js");
              return legacy(m.gherkin);
            }
          },
          {
            name: "Go",
            displayName: trans.__("Go"),
            mime: "text/x-go",
            extensions: ["go"],
            async load() {
              const m = await import("/build/_shared/go-JU5VGE6A.js");
              return legacy(m.go);
            }
          },
          {
            name: "Groovy",
            displayName: trans.__("Groovy"),
            mime: "text/x-groovy",
            extensions: ["groovy", "gradle"],
            filename: /^Jenkinsfile$/,
            async load() {
              const m = await import("/build/_shared/groovy-O4CXVS46.js");
              return legacy(m.groovy);
            }
          },
          {
            name: "Haskell",
            displayName: trans.__("Haskell"),
            mime: "text/x-haskell",
            extensions: ["hs"],
            async load() {
              const m = await import("/build/_shared/haskell-P4YTJ65P.js");
              return legacy(m.haskell);
            }
          },
          {
            name: "Haxe",
            displayName: trans.__("Haxe"),
            mime: "text/x-haxe",
            extensions: ["hx"],
            async load() {
              const m = await import("/build/_shared/haxe-NCCG5XVB.js");
              return legacy(m.haxe);
            }
          },
          {
            name: "HXML",
            displayName: trans.__("HXML"),
            mime: "text/x-hxml",
            extensions: ["hxml"],
            async load() {
              const m = await import("/build/_shared/haxe-NCCG5XVB.js");
              return legacy(m.hxml);
            }
          },
          {
            name: "HTTP",
            displayName: trans.__("HTTP"),
            mime: "message/http",
            async load() {
              const m = await import("/build/_shared/http-ZXW7GCXS.js");
              return legacy(m.http);
            }
          },
          {
            name: "IDL",
            displayName: trans.__("IDL"),
            mime: "text/x-idl",
            extensions: ["pro"],
            async load() {
              const m = await import("/build/_shared/idl-T6NGYFGH.js");
              return legacy(m.idl);
            }
          },
          {
            name: "JSON-LD",
            displayName: trans.__("JSON-LD"),
            alias: ["jsonld"],
            mime: "application/ld+json",
            extensions: ["jsonld"],
            async load() {
              const m = await import("/build/_shared/javascript-A2CGBD5B.js");
              return legacy(m.jsonld);
            }
          },
          {
            name: "Jinja2",
            displayName: trans.__("Jinja2"),
            mime: "text/jinja2",
            extensions: ["j2", "jinja", "jinja2"],
            async load() {
              const m = await import("/build/_shared/jinja2-GXNNEWSP.js");
              return legacy(m.jinja2);
            }
          },
          {
            name: "Julia",
            displayName: trans.__("Julia"),
            mime: "text/x-julia",
            extensions: ["jl"],
            async load() {
              const m = await import("/build/_shared/julia-VRNLDHTO.js");
              return legacy(m.julia);
            }
          },
          {
            name: "Kotlin",
            displayName: trans.__("Kotlin"),
            mime: "text/x-kotlin",
            extensions: ["kt"],
            async load() {
              const m = await import("/build/_shared/clike-AYJO25IC.js");
              return legacy(m.kotlin);
            }
          },
          {
            name: "LESS",
            displayName: trans.__("LESS"),
            mime: "text/x-less",
            extensions: ["less"],
            async load() {
              const m = await import("/build/_shared/css-KO5K3Q53.js");
              return legacy(m.less);
            }
          },
          {
            name: "LiveScript",
            displayName: trans.__("LiveScript"),
            alias: ["ls"],
            mime: "text/x-livescript",
            extensions: ["ls"],
            async load() {
              const m = await import("/build/_shared/livescript-EBZUU6JI.js");
              return legacy(m.liveScript);
            }
          },
          {
            name: "Lua",
            displayName: trans.__("Lua"),
            mime: "text/x-lua",
            extensions: ["lua"],
            async load() {
              const m = await import("/build/_shared/lua-FPZMEF6U.js");
              return legacy(m.lua);
            }
          },
          {
            name: "mIRC",
            displayName: trans.__("mIRC"),
            mime: "text/mirc",
            async load() {
              const m = await import("/build/_shared/mirc-I6ZWOFH6.js");
              return legacy(m.mirc);
            }
          },
          {
            name: "Mathematica",
            displayName: trans.__("Mathematica"),
            mime: "text/x-mathematica",
            extensions: ["m", "nb", "wl", "wls"],
            async load() {
              const m = await import("/build/_shared/mathematica-CGLKKP3P.js");
              return legacy(m.mathematica);
            }
          },
          {
            name: "Modelica",
            displayName: trans.__("Modelica"),
            mime: "text/x-modelica",
            extensions: ["mo"],
            async load() {
              const m = await import("/build/_shared/modelica-VNDRJ6HK.js");
              return legacy(m.modelica);
            }
          },
          {
            name: "MUMPS",
            displayName: trans.__("MUMPS"),
            mime: "text/x-mumps",
            extensions: ["mps"],
            async load() {
              const m = await import("/build/_shared/mumps-RLI2TCAX.js");
              return legacy(m.mumps);
            }
          },
          {
            name: "mbox",
            displayName: trans.__("mbox"),
            mime: "application/mbox",
            extensions: ["mbox"],
            async load() {
              const m = await import("/build/_shared/mbox-X3DFKMTH.js");
              return legacy(m.mbox);
            }
          },
          {
            name: "Nginx",
            displayName: trans.__("Nginx"),
            mime: "text/x-nginx-conf",
            filename: /nginx.*\.conf$/i,
            async load() {
              const m = await import("/build/_shared/nginx-SMDVL3TB.js");
              return legacy(m.nginx);
            }
          },
          {
            name: "NSIS",
            displayName: trans.__("NSIS"),
            mime: "text/x-nsis",
            extensions: ["nsh", "nsi"],
            async load() {
              const m = await import("/build/_shared/nsis-DK5IZOVW.js");
              return legacy(m.nsis);
            }
          },
          {
            name: "NTriples",
            displayName: trans.__("NTriples"),
            mime: [
              "application/n-triples",
              "application/n-quads",
              "text/n-triples"
            ],
            extensions: ["nt", "nq"],
            async load() {
              const m = await import("/build/_shared/ntriples-XF7RFRPI.js");
              return legacy(m.ntriples);
            }
          },
          {
            name: "Objective-C",
            displayName: trans.__("Objective-C"),
            alias: ["objective-c", "objc"],
            mime: "text/x-objectivec",
            extensions: ["m"],
            async load() {
              const m = await import("/build/_shared/clike-AYJO25IC.js");
              return legacy(m.objectiveC);
            }
          },
          {
            name: "Objective-C++",
            displayName: trans.__("Objective-C++"),
            alias: ["objective-c++", "objc++"],
            mime: "text/x-objectivec++",
            extensions: ["mm"],
            async load() {
              const m = await import("/build/_shared/clike-AYJO25IC.js");
              return legacy(m.objectiveCpp);
            }
          },
          {
            name: "OCaml",
            displayName: trans.__("OCaml"),
            mime: "text/x-ocaml",
            extensions: ["ml", "mli", "mll", "mly"],
            async load() {
              const m = await import("/build/_shared/mllike-FCDZF2CX.js");
              return legacy(m.oCaml);
            }
          },
          {
            name: "Octave",
            displayName: trans.__("Octave"),
            mime: "text/x-octave",
            extensions: ["m"],
            async load() {
              const m = await import("/build/_shared/octave-VLOUOFVN.js");
              return legacy(m.octave);
            }
          },
          {
            name: "Oz",
            displayName: trans.__("Oz"),
            mime: "text/x-oz",
            extensions: ["oz"],
            async load() {
              const m = await import("/build/_shared/oz-5BJV7BA6.js");
              return legacy(m.oz);
            }
          },
          {
            name: "Pascal",
            displayName: trans.__("Pascal"),
            mime: "text/x-pascal",
            extensions: ["p", "pas"],
            async load() {
              const m = await import("/build/_shared/pascal-6SBW4D45.js");
              return legacy(m.pascal);
            }
          },
          {
            name: "Perl",
            displayName: trans.__("Perl"),
            mime: "text/x-perl",
            extensions: ["pl", "pm"],
            async load() {
              const m = await import("/build/_shared/perl-DTFOIDIO.js");
              return legacy(m.perl);
            }
          },
          {
            name: "Pig",
            displayName: trans.__("Pig"),
            mime: "text/x-pig",
            extensions: ["pig"],
            async load() {
              const m = await import("/build/_shared/pig-OUOKJK3U.js");
              return legacy(m.pig);
            }
          },
          {
            name: "PowerShell",
            displayName: trans.__("PowerShell"),
            mime: "application/x-powershell",
            extensions: ["ps1", "psd1", "psm1"],
            async load() {
              const m = await import("/build/_shared/powershell-WDKBLNKM.js");
              return legacy(m.powerShell);
            }
          },
          {
            name: "Properties files",
            displayName: trans.__("Properties files"),
            alias: ["ini", "properties"],
            mime: "text/x-properties",
            extensions: ["properties", "ini", "in"],
            async load() {
              const m = await import("/build/_shared/properties-DD6YWWCU.js");
              return legacy(m.properties);
            }
          },
          {
            name: "ProtoBuf",
            displayName: trans.__("ProtoBuf"),
            mime: "text/x-protobuf",
            extensions: ["proto"],
            async load() {
              const m = await import("/build/_shared/protobuf-U2UI3HA6.js");
              return legacy(m.protobuf);
            }
          },
          {
            name: "Puppet",
            displayName: trans.__("Puppet"),
            mime: "text/x-puppet",
            extensions: ["pp"],
            async load() {
              const m = await import("/build/_shared/puppet-QCUVA2SY.js");
              return legacy(m.puppet);
            }
          },
          {
            name: "Q",
            displayName: trans.__("Q"),
            mime: "text/x-q",
            extensions: ["q"],
            async load() {
              const m = await import("/build/_shared/q-QGKEQGLA.js");
              return legacy(m.q);
            }
          },
          {
            name: "R",
            displayName: trans.__("R"),
            alias: ["rscript"],
            mime: "text/x-rsrc",
            extensions: ["r", "R"],
            async load() {
              const m = await import("/build/_shared/r-SKE6FHXS.js");
              return legacy(m.r);
            }
          },
          {
            name: "RPM Changes",
            displayName: trans.__("RPM Changes"),
            mime: "text/x-rpm-changes",
            async load() {
              const m = await import("/build/_shared/rpm-XEYNL3UD.js");
              return legacy(m.rpmChanges);
            }
          },
          {
            name: "RPM Spec",
            displayName: trans.__("RPM Spec"),
            mime: "text/x-rpm-spec",
            extensions: ["spec"],
            async load() {
              const m = await import("/build/_shared/rpm-XEYNL3UD.js");
              return legacy(m.rpmSpec);
            }
          },
          {
            name: "Ruby",
            displayName: trans.__("Ruby"),
            alias: ["jruby", "macruby", "rake", "rb", "rbx"],
            mime: "text/x-ruby",
            extensions: ["rb"],
            async load() {
              const m = await import("/build/_shared/ruby-NPNG7W2B.js");
              return legacy(m.ruby);
            }
          },
          {
            name: "SAS",
            displayName: trans.__("SAS"),
            mime: "text/x-sas",
            extensions: ["sas"],
            async load() {
              const m = await import("/build/_shared/sas-QHJ3EZMO.js");
              return legacy(m.sas);
            }
          },
          {
            name: "Scala",
            displayName: trans.__("Scala"),
            mime: "text/x-scala",
            extensions: ["scala"],
            async load() {
              const m = await import("/build/_shared/clike-AYJO25IC.js");
              return legacy(m.scala);
            }
          },
          {
            name: "Scheme",
            displayName: trans.__("Scheme"),
            mime: "text/x-scheme",
            extensions: ["scm", "ss"],
            async load() {
              const m = await import("/build/_shared/scheme-ZPOXDTA2.js");
              return legacy(m.scheme);
            }
          },
          {
            name: "SCSS",
            displayName: trans.__("SCSS"),
            mime: "text/x-scss",
            extensions: ["scss"],
            async load() {
              const m = await import("/build/_shared/css-KO5K3Q53.js");
              return legacy(m.sCSS);
            }
          },
          {
            name: "Shell",
            displayName: trans.__("Shell"),
            alias: ["bash", "sh", "zsh"],
            mime: ["text/x-sh", "application/x-sh"],
            extensions: ["sh", "ksh", "bash"],
            filename: /^PKGBUILD$/,
            async load() {
              const m = await import("/build/_shared/shell-QM5LL43K.js");
              return legacy(m.shell);
            }
          },
          {
            name: "Sieve",
            displayName: trans.__("Sieve"),
            mime: "application/sieve",
            extensions: ["siv", "sieve"],
            async load() {
              const m = await import("/build/_shared/sieve-JZEYFJYX.js");
              return legacy(m.sieve);
            }
          },
          {
            name: "Smalltalk",
            displayName: trans.__("Smalltalk"),
            mime: "text/x-stsrc",
            extensions: ["st"],
            async load() {
              const m = await import("/build/_shared/smalltalk-SHPX453J.js");
              return legacy(m.smalltalk);
            }
          },
          {
            name: "Solr",
            displayName: trans.__("Solr"),
            mime: "text/x-solr",
            async load() {
              const m = await import("/build/_shared/solr-FWMRYSZV.js");
              return legacy(m.solr);
            }
          },
          {
            name: "SML",
            displayName: trans.__("SML"),
            mime: "text/x-sml",
            extensions: ["sml", "sig", "fun", "smackspec"],
            async load() {
              const m = await import("/build/_shared/mllike-FCDZF2CX.js");
              return legacy(m.sml);
            }
          },
          {
            name: "SPARQL",
            displayName: trans.__("SPARQL"),
            alias: ["sparul"],
            mime: "application/sparql-query",
            extensions: ["rq", "sparql"],
            async load() {
              const m = await import("/build/_shared/sparql-ZE3JW3BU.js");
              return legacy(m.sparql);
            }
          },
          {
            name: "Spreadsheet",
            displayName: trans.__("Spreadsheet"),
            alias: ["excel", "formula"],
            mime: "text/x-spreadsheet",
            async load() {
              const m = await import("/build/_shared/spreadsheet-FONJT3NI.js");
              return legacy(m.spreadsheet);
            }
          },
          {
            name: "Squirrel",
            displayName: trans.__("Squirrel"),
            mime: "text/x-squirrel",
            extensions: ["nut"],
            async load() {
              const m = await import("/build/_shared/clike-AYJO25IC.js");
              return legacy(m.squirrel);
            }
          },
          {
            name: "Stylus",
            displayName: trans.__("Stylus"),
            mime: "text/x-styl",
            extensions: ["styl"],
            async load() {
              const m = await import("/build/_shared/stylus-J75HC22Q.js");
              return legacy(m.stylus);
            }
          },
          {
            name: "Swift",
            displayName: trans.__("Swift"),
            mime: "text/x-swift",
            extensions: ["swift"],
            async load() {
              const m = await import("/build/_shared/swift-YENO57XQ.js");
              return legacy(m.swift);
            }
          },
          {
            name: "sTeX",
            displayName: trans.__("sTeX"),
            mime: "text/x-stex",
            async load() {
              const m = await import("/build/_shared/stex-J77W2EAB.js");
              return legacy(m.stex);
            }
          },
          {
            name: "LaTeX",
            displayName: trans.__("LaTeX"),
            alias: ["tex"],
            mime: "text/x-latex",
            extensions: ["text", "ltx", "tex"],
            async load() {
              const m = await import("/build/_shared/stex-J77W2EAB.js");
              return legacy(m.stex);
            }
          },
          {
            name: "SystemVerilog",
            displayName: trans.__("SystemVerilog"),
            mime: "text/x-systemverilog",
            extensions: ["v", "sv", "svh"],
            async load() {
              const m = await import("/build/_shared/verilog-5H67HMKX.js");
              return legacy(m.verilog);
            }
          },
          {
            name: "Tcl",
            displayName: trans.__("Tcl"),
            mime: "text/x-tcl",
            extensions: ["tcl"],
            async load() {
              const m = await import("/build/_shared/tcl-PIDPQOP3.js");
              return legacy(m.tcl);
            }
          },
          {
            name: "Textile",
            displayName: trans.__("Textile"),
            mime: "text/x-textile",
            extensions: ["textile"],
            async load() {
              const m = await import("/build/_shared/textile-LVAXVLE6.js");
              return legacy(m.textile);
            }
          },
          {
            name: "TiddlyWiki",
            displayName: trans.__("TiddlyWiki"),
            mime: "text/x-tiddlywiki",
            async load() {
              const m = await import("/build/_shared/tiddlywiki-P4TQTDYT.js");
              return legacy(m.tiddlyWiki);
            }
          },
          {
            name: "Tiki wiki",
            displayName: trans.__("Tiki wiki"),
            mime: "text/tiki",
            async load() {
              const m = await import("/build/_shared/tiki-AJAYAFUL.js");
              return legacy(m.tiki);
            }
          },
          {
            name: "TOML",
            displayName: trans.__("TOML"),
            mime: "text/x-toml",
            extensions: ["toml"],
            async load() {
              const m = await import("/build/_shared/toml-6YVQWW5X.js");
              return legacy(m.toml);
            }
          },
          {
            name: "troff",
            displayName: trans.__("troff"),
            mime: "text/troff",
            extensions: ["1", "2", "3", "4", "5", "6", "7", "8", "9"],
            async load() {
              const m = await import("/build/_shared/troff-733ZBC2V.js");
              return legacy(m.troff);
            }
          },
          {
            name: "TTCN",
            displayName: trans.__("TTCN"),
            mime: "text/x-ttcn",
            extensions: ["ttcn", "ttcn3", "ttcnpp"],
            async load() {
              const m = await import("/build/_shared/ttcn-XWHRNK7V.js");
              return legacy(m.ttcn);
            }
          },
          {
            name: "TTCN_CFG",
            displayName: trans.__("TTCN_CFG"),
            mime: "text/x-ttcn-cfg",
            extensions: ["cfg"],
            async load() {
              const m = await import("/build/_shared/ttcn-cfg-F62LRWEB.js");
              return legacy(m.ttcnCfg);
            }
          },
          {
            name: "Turtle",
            displayName: trans.__("Turtle"),
            mime: "text/turtle",
            extensions: ["ttl"],
            async load() {
              const m = await import("/build/_shared/turtle-4Z3VCE2Y.js");
              return legacy(m.turtle);
            }
          },
          {
            name: "Web IDL",
            displayName: trans.__("Web IDL"),
            mime: "text/x-webidl",
            extensions: ["webidl"],
            async load() {
              const m = await import("/build/_shared/webidl-C256MF76.js");
              return legacy(m.webIDL);
            }
          },
          {
            name: "VB.NET",
            displayName: trans.__("VB.NET"),
            mime: "text/x-vb",
            extensions: ["vb"],
            async load() {
              const m = await import("/build/_shared/vb-GRBDYVAW.js");
              return legacy(m.vb);
            }
          },
          {
            name: "VBScript",
            displayName: trans.__("VBScript"),
            mime: "text/vbscript",
            extensions: ["vbs"],
            async load() {
              const m = await import("/build/_shared/vbscript-NGX7GLKL.js");
              return legacy(m.vbScript);
            }
          },
          {
            name: "Velocity",
            displayName: trans.__("Velocity"),
            mime: "text/velocity",
            extensions: ["vtl"],
            async load() {
              const m = await import("/build/_shared/velocity-SBY45XQJ.js");
              return legacy(m.velocity);
            }
          },
          {
            name: "Verilog",
            displayName: trans.__("Verilog"),
            mime: "text/x-verilog",
            extensions: ["v"],
            async load() {
              const m = await import("/build/_shared/verilog-5H67HMKX.js");
              return legacy(m.verilog);
            }
          },
          {
            name: "VHDL",
            displayName: trans.__("VHDL"),
            mime: "text/x-vhdl",
            extensions: ["vhd", "vhdl"],
            async load() {
              const m = await import("/build/_shared/vhdl-B7TELP2Z.js");
              return legacy(m.vhdl);
            }
          },
          {
            name: "XQuery",
            displayName: trans.__("XQuery"),
            mime: "application/xquery",
            extensions: ["xy", "xquery"],
            async load() {
              const m = await import("/build/_shared/xquery-4B2IOVF5.js");
              return legacy(m.xQuery);
            }
          },
          {
            name: "Yacas",
            displayName: trans.__("Yacas"),
            mime: "text/x-yacas",
            extensions: ["ys"],
            async load() {
              const m = await import("/build/_shared/yacas-XQKX37TJ.js");
              return legacy(m.yacas);
            }
          },
          {
            name: "YAML",
            displayName: trans.__("YAML"),
            alias: ["yml"],
            mime: ["text/x-yaml", "text/yaml"],
            extensions: ["yaml", "yml"],
            async load() {
              const m = await import("/build/_shared/yaml-FPY7E6GI.js");
              return legacy(m.yaml);
            }
          },
          {
            name: "Z80",
            displayName: trans.__("Z80"),
            mime: "text/x-z80",
            extensions: ["z80"],
            async load() {
              const m = await import("/build/_shared/z80-EIH3IGRD.js");
              return legacy(m.z80);
            }
          },
          {
            name: "mscgen",
            displayName: trans.__("mscgen"),
            mime: "text/x-mscgen",
            extensions: ["mscgen", "mscin", "msc"],
            async load() {
              const m = await import("/build/_shared/mscgen-J4EKIDTY.js");
              return legacy(m.mscgen);
            }
          },
          {
            name: "xu",
            displayName: trans.__("xu"),
            mime: "text/x-xu",
            extensions: ["xu"],
            async load() {
              const m = await import("/build/_shared/mscgen-J4EKIDTY.js");
              return legacy(m.xu);
            }
          },
          {
            name: "msgenny",
            displayName: trans.__("msgenny"),
            mime: "text/x-msgenny",
            extensions: ["msgenny"],
            async load() {
              const m = await import("/build/_shared/mscgen-J4EKIDTY.js");
              return legacy(m.msgenny);
            }
          }
        ];
      }
      EditorLanguageRegistry2.getDefaultLanguages = getDefaultLanguages;
    })(EditorLanguageRegistry || (EditorLanguageRegistry = {}));
  }
});

// ../../node_modules/@jupyterlab/codemirror/lib/editor.js
var import_coreutils11, Private6;
var init_editor2 = __esm({
  "../../node_modules/@jupyterlab/codemirror/lib/editor.js"() {
    init_dist();
    init_dist2();
    import_coreutils11 = __toESM(require_dist());
    init_index_es6();
    init_extension();
    init_language();
    (function(Private7) {
      function createEditor(host, editorConfig, additionalExtensions, doc2) {
        const extensions = editorConfig.getInitialExtensions();
        extensions.push(...additionalExtensions);
        const view = new EditorView({
          state: EditorState.create({
            doc: doc2,
            extensions
          }),
          parent: host
        });
        return view;
      }
      Private7.createEditor = createEditor;
    })(Private6 || (Private6 = {}));
  }
});

// ../../node_modules/@jupyterlab/codemirror/lib/factory.js
var init_factory2 = __esm({
  "../../node_modules/@jupyterlab/codemirror/lib/factory.js"() {
    init_lib();
    init_extension();
    init_editor2();
    init_language();
  }
});

// ../../node_modules/@jupyterlab/codemirror/lib/mimetype.js
var init_mimetype2 = __esm({
  "../../node_modules/@jupyterlab/codemirror/lib/mimetype.js"() {
  }
});

// ../../node_modules/@jupyterlab/codemirror/lib/searchprovider.js
var Utils;
var init_searchprovider = __esm({
  "../../node_modules/@jupyterlab/codemirror/lib/searchprovider.js"() {
    init_index_es6();
    (function(Utils2) {
      function findNext2(matches, position, lowerBound = 0, higherBound = Infinity) {
        higherBound = Math.min(matches.length - 1, higherBound);
        while (lowerBound <= higherBound) {
          let middle = Math.floor(0.5 * (lowerBound + higherBound));
          const currentPosition = matches[middle].position;
          if (currentPosition < position) {
            lowerBound = middle + 1;
            if (lowerBound < matches.length && matches[lowerBound].position > position) {
              return lowerBound;
            }
          } else if (currentPosition > position) {
            higherBound = middle - 1;
            if (higherBound > 0 && matches[higherBound].position < position) {
              return middle;
            }
          } else {
            return middle;
          }
        }
        const first = lowerBound > 0 ? lowerBound - 1 : 0;
        const match = matches[first];
        return match.position >= position ? first : null;
      }
      Utils2.findNext = findNext2;
    })(Utils || (Utils = {}));
  }
});

// ../../node_modules/@jupyterlab/codemirror/lib/token.js
var import_coreutils12, IEditorExtensionRegistry, IEditorLanguageRegistry, IEditorThemeRegistry;
var init_token = __esm({
  "../../node_modules/@jupyterlab/codemirror/lib/token.js"() {
    import_coreutils12 = __toESM(require_dist());
    IEditorExtensionRegistry = new import_coreutils12.Token("@jupyterlab/codemirror:IEditorExtensionRegistry", `A registry for CodeMirror extension factories.`);
    IEditorLanguageRegistry = new import_coreutils12.Token("@jupyterlab/codemirror:IEditorLanguageRegistry", "A registry for CodeMirror languages.");
    IEditorThemeRegistry = new import_coreutils12.Token("@jupyterlab/codemirror:IEditorThemeRegistry", "A registry for CodeMirror theme.");
  }
});

// ../../node_modules/@jupyterlab/codemirror/lib/index.js
var init_lib8 = __esm({
  "../../node_modules/@jupyterlab/codemirror/lib/index.js"() {
    init_commands();
    init_editor2();
    init_extension();
    init_extensions();
    init_factory2();
    init_language();
    init_mimetype2();
    init_searchprovider();
    init_theme();
    init_token();
    init_pythonBuiltin();
  }
});

// ../../node_modules/react-highlight-words/dist/main.js
var require_main = __commonJS({
  "../../node_modules/react-highlight-words/dist/main.js"(exports2, module2) {
    module2.exports = /******/
    function(modules) {
      var installedModules = {};
      function __webpack_require__(moduleId) {
        if (installedModules[moduleId])
          return installedModules[moduleId].exports;
        var module3 = installedModules[moduleId] = {
          /******/
          exports: {},
          /******/
          id: moduleId,
          /******/
          loaded: false
          /******/
        };
        modules[moduleId].call(module3.exports, module3, module3.exports, __webpack_require__);
        module3.loaded = true;
        return module3.exports;
      }
      __webpack_require__.m = modules;
      __webpack_require__.c = installedModules;
      __webpack_require__.p = "";
      return __webpack_require__(0);
    }([
      /* 0 */
      /***/
      function(module3, exports3, __webpack_require__) {
        module3.exports = __webpack_require__(1);
      },
      /* 1 */
      /***/
      function(module3, exports3, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports3, "__esModule", {
          value: true
        });
        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : { "default": obj };
        }
        var _Highlighter = __webpack_require__(2);
        var _Highlighter2 = _interopRequireDefault(_Highlighter);
        exports3["default"] = _Highlighter2["default"];
        module3.exports = exports3["default"];
      },
      /* 2 */
      /***/
      function(module3, exports3, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports3, "__esModule", {
          value: true
        });
        var _extends2 = Object.assign || function(target) {
          for (var i = 1; i < arguments.length; i++) {
            var source = arguments[i];
            for (var key in source) {
              if (Object.prototype.hasOwnProperty.call(source, key)) {
                target[key] = source[key];
              }
            }
          }
          return target;
        };
        exports3["default"] = Highlighter2;
        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : { "default": obj };
        }
        function _objectWithoutProperties(obj, keys2) {
          var target = {};
          for (var i in obj) {
            if (keys2.indexOf(i) >= 0)
              continue;
            if (!Object.prototype.hasOwnProperty.call(obj, i))
              continue;
            target[i] = obj[i];
          }
          return target;
        }
        var _highlightWordsCore = __webpack_require__(3);
        var _propTypes = __webpack_require__(4);
        var _propTypes2 = _interopRequireDefault(_propTypes);
        var _react = __webpack_require__(14);
        var _memoizeOne = __webpack_require__(15);
        var _memoizeOne2 = _interopRequireDefault(_memoizeOne);
        Highlighter2.propTypes = {
          activeClassName: _propTypes2["default"].string,
          activeIndex: _propTypes2["default"].number,
          activeStyle: _propTypes2["default"].object,
          autoEscape: _propTypes2["default"].bool,
          className: _propTypes2["default"].string,
          findChunks: _propTypes2["default"].func,
          highlightClassName: _propTypes2["default"].oneOfType([_propTypes2["default"].object, _propTypes2["default"].string]),
          highlightStyle: _propTypes2["default"].object,
          highlightTag: _propTypes2["default"].oneOfType([_propTypes2["default"].node, _propTypes2["default"].func, _propTypes2["default"].string]),
          sanitize: _propTypes2["default"].func,
          searchWords: _propTypes2["default"].arrayOf(_propTypes2["default"].oneOfType([_propTypes2["default"].string, _propTypes2["default"].instanceOf(RegExp)])).isRequired,
          textToHighlight: _propTypes2["default"].string.isRequired,
          unhighlightTag: _propTypes2["default"].oneOfType([_propTypes2["default"].node, _propTypes2["default"].func, _propTypes2["default"].string]),
          unhighlightClassName: _propTypes2["default"].string,
          unhighlightStyle: _propTypes2["default"].object
        };
        function Highlighter2(_ref) {
          var _ref$activeClassName = _ref.activeClassName;
          var activeClassName = _ref$activeClassName === void 0 ? "" : _ref$activeClassName;
          var _ref$activeIndex = _ref.activeIndex;
          var activeIndex = _ref$activeIndex === void 0 ? -1 : _ref$activeIndex;
          var activeStyle = _ref.activeStyle;
          var autoEscape = _ref.autoEscape;
          var _ref$caseSensitive = _ref.caseSensitive;
          var caseSensitive = _ref$caseSensitive === void 0 ? false : _ref$caseSensitive;
          var className = _ref.className;
          var findChunks = _ref.findChunks;
          var _ref$highlightClassName = _ref.highlightClassName;
          var highlightClassName = _ref$highlightClassName === void 0 ? "" : _ref$highlightClassName;
          var _ref$highlightStyle = _ref.highlightStyle;
          var highlightStyle = _ref$highlightStyle === void 0 ? {} : _ref$highlightStyle;
          var _ref$highlightTag = _ref.highlightTag;
          var highlightTag = _ref$highlightTag === void 0 ? "mark" : _ref$highlightTag;
          var sanitize = _ref.sanitize;
          var searchWords = _ref.searchWords;
          var textToHighlight = _ref.textToHighlight;
          var _ref$unhighlightTag = _ref.unhighlightTag;
          var unhighlightTag = _ref$unhighlightTag === void 0 ? "span" : _ref$unhighlightTag;
          var _ref$unhighlightClassName = _ref.unhighlightClassName;
          var unhighlightClassName = _ref$unhighlightClassName === void 0 ? "" : _ref$unhighlightClassName;
          var unhighlightStyle = _ref.unhighlightStyle;
          var rest = _objectWithoutProperties(_ref, ["activeClassName", "activeIndex", "activeStyle", "autoEscape", "caseSensitive", "className", "findChunks", "highlightClassName", "highlightStyle", "highlightTag", "sanitize", "searchWords", "textToHighlight", "unhighlightTag", "unhighlightClassName", "unhighlightStyle"]);
          var chunks = (0, _highlightWordsCore.findAll)({
            autoEscape,
            caseSensitive,
            findChunks,
            sanitize,
            searchWords,
            textToHighlight
          });
          var HighlightTag = highlightTag;
          var highlightIndex = -1;
          var highlightClassNames = "";
          var highlightStyles = void 0;
          var lowercaseProps = function lowercaseProps2(object) {
            var mapped = {};
            for (var key in object) {
              mapped[key.toLowerCase()] = object[key];
            }
            return mapped;
          };
          var memoizedLowercaseProps = (0, _memoizeOne2["default"])(lowercaseProps);
          return (0, _react.createElement)("span", _extends2({
            className
          }, rest, {
            children: chunks.map(function(chunk, index) {
              var text2 = textToHighlight.substr(chunk.start, chunk.end - chunk.start);
              if (chunk.highlight) {
                highlightIndex++;
                var highlightClass = void 0;
                if (typeof highlightClassName === "object") {
                  if (!caseSensitive) {
                    highlightClassName = memoizedLowercaseProps(highlightClassName);
                    highlightClass = highlightClassName[text2.toLowerCase()];
                  } else {
                    highlightClass = highlightClassName[text2];
                  }
                } else {
                  highlightClass = highlightClassName;
                }
                var isActive = highlightIndex === +activeIndex;
                highlightClassNames = highlightClass + " " + (isActive ? activeClassName : "");
                highlightStyles = isActive === true && activeStyle != null ? Object.assign({}, highlightStyle, activeStyle) : highlightStyle;
                var props = {
                  children: text2,
                  className: highlightClassNames,
                  key: index,
                  style: highlightStyles
                };
                if (typeof HighlightTag !== "string") {
                  props.highlightIndex = highlightIndex;
                }
                return (0, _react.createElement)(HighlightTag, props);
              } else {
                return (0, _react.createElement)(unhighlightTag, {
                  children: text2,
                  className: unhighlightClassName,
                  key: index,
                  style: unhighlightStyle
                });
              }
            })
          }));
        }
        module3.exports = exports3["default"];
      },
      /* 3 */
      /***/
      function(module3, exports3) {
        module3.exports = /******/
        function(modules) {
          var installedModules = {};
          function __webpack_require__(moduleId) {
            if (installedModules[moduleId])
              return installedModules[moduleId].exports;
            var module4 = installedModules[moduleId] = {
              /******/
              exports: {},
              /******/
              id: moduleId,
              /******/
              loaded: false
              /******/
            };
            modules[moduleId].call(module4.exports, module4, module4.exports, __webpack_require__);
            module4.loaded = true;
            return module4.exports;
          }
          __webpack_require__.m = modules;
          __webpack_require__.c = installedModules;
          __webpack_require__.p = "";
          return __webpack_require__(0);
        }([
          /* 0 */
          /***/
          function(module4, exports4, __webpack_require__) {
            module4.exports = __webpack_require__(1);
          },
          /* 1 */
          /***/
          function(module4, exports4, __webpack_require__) {
            "use strict";
            Object.defineProperty(exports4, "__esModule", {
              value: true
            });
            var _utils = __webpack_require__(2);
            Object.defineProperty(exports4, "combineChunks", {
              enumerable: true,
              get: function get() {
                return _utils.combineChunks;
              }
            });
            Object.defineProperty(exports4, "fillInChunks", {
              enumerable: true,
              get: function get() {
                return _utils.fillInChunks;
              }
            });
            Object.defineProperty(exports4, "findAll", {
              enumerable: true,
              get: function get() {
                return _utils.findAll;
              }
            });
            Object.defineProperty(exports4, "findChunks", {
              enumerable: true,
              get: function get() {
                return _utils.findChunks;
              }
            });
          },
          /* 2 */
          /***/
          function(module4, exports4) {
            "use strict";
            Object.defineProperty(exports4, "__esModule", {
              value: true
            });
            var findAll = exports4.findAll = function findAll2(_ref) {
              var autoEscape = _ref.autoEscape, _ref$caseSensitive = _ref.caseSensitive, caseSensitive = _ref$caseSensitive === void 0 ? false : _ref$caseSensitive, _ref$findChunks = _ref.findChunks, findChunks = _ref$findChunks === void 0 ? defaultFindChunks : _ref$findChunks, sanitize = _ref.sanitize, searchWords = _ref.searchWords, textToHighlight = _ref.textToHighlight;
              return fillInChunks({
                chunksToHighlight: combineChunks({
                  chunks: findChunks({
                    autoEscape,
                    caseSensitive,
                    sanitize,
                    searchWords,
                    textToHighlight
                  })
                }),
                totalLength: textToHighlight ? textToHighlight.length : 0
              });
            };
            var combineChunks = exports4.combineChunks = function combineChunks2(_ref2) {
              var chunks = _ref2.chunks;
              chunks = chunks.sort(function(first, second) {
                return first.start - second.start;
              }).reduce(function(processedChunks, nextChunk) {
                if (processedChunks.length === 0) {
                  return [nextChunk];
                } else {
                  var prevChunk = processedChunks.pop();
                  if (nextChunk.start <= prevChunk.end) {
                    var endIndex = Math.max(prevChunk.end, nextChunk.end);
                    processedChunks.push({ start: prevChunk.start, end: endIndex });
                  } else {
                    processedChunks.push(prevChunk, nextChunk);
                  }
                  return processedChunks;
                }
              }, []);
              return chunks;
            };
            var defaultFindChunks = function defaultFindChunks2(_ref3) {
              var autoEscape = _ref3.autoEscape, caseSensitive = _ref3.caseSensitive, _ref3$sanitize = _ref3.sanitize, sanitize = _ref3$sanitize === void 0 ? identity2 : _ref3$sanitize, searchWords = _ref3.searchWords, textToHighlight = _ref3.textToHighlight;
              textToHighlight = sanitize(textToHighlight);
              return searchWords.filter(function(searchWord) {
                return searchWord;
              }).reduce(function(chunks, searchWord) {
                searchWord = sanitize(searchWord);
                if (autoEscape) {
                  searchWord = escapeRegExpFn(searchWord);
                }
                var regex = new RegExp(searchWord, caseSensitive ? "g" : "gi");
                var match = void 0;
                while (match = regex.exec(textToHighlight)) {
                  var start = match.index;
                  var end = regex.lastIndex;
                  if (end > start) {
                    chunks.push({ start, end });
                  }
                  if (match.index == regex.lastIndex) {
                    regex.lastIndex++;
                  }
                }
                return chunks;
              }, []);
            };
            exports4.findChunks = defaultFindChunks;
            var fillInChunks = exports4.fillInChunks = function fillInChunks2(_ref4) {
              var chunksToHighlight = _ref4.chunksToHighlight, totalLength = _ref4.totalLength;
              var allChunks = [];
              var append2 = function append3(start, end, highlight) {
                if (end - start > 0) {
                  allChunks.push({
                    start,
                    end,
                    highlight
                  });
                }
              };
              if (chunksToHighlight.length === 0) {
                append2(0, totalLength, false);
              } else {
                var lastIndex = 0;
                chunksToHighlight.forEach(function(chunk) {
                  append2(lastIndex, chunk.start, false);
                  append2(chunk.start, chunk.end, true);
                  lastIndex = chunk.end;
                });
                append2(lastIndex, totalLength, false);
              }
              return allChunks;
            };
            function identity2(value) {
              return value;
            }
            function escapeRegExpFn(str) {
              return str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
            }
          }
          /******/
        ]);
      },
      /* 4 */
      /***/
      function(module3, exports3, __webpack_require__) {
        (function(process2) {
          if (process2.env.NODE_ENV !== "production") {
            var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 60103;
            var isValidElement = function(object) {
              return typeof object === "object" && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
            };
            var throwOnDirectAccess = true;
            module3.exports = __webpack_require__(6)(isValidElement, throwOnDirectAccess);
          } else {
            module3.exports = __webpack_require__(13)();
          }
        }).call(exports3, __webpack_require__(5));
      },
      /* 5 */
      /***/
      function(module3, exports3) {
        var process2 = module3.exports = {};
        var cachedSetTimeout;
        var cachedClearTimeout;
        function defaultSetTimout() {
          throw new Error("setTimeout has not been defined");
        }
        function defaultClearTimeout() {
          throw new Error("clearTimeout has not been defined");
        }
        (function() {
          try {
            if (typeof setTimeout === "function") {
              cachedSetTimeout = setTimeout;
            } else {
              cachedSetTimeout = defaultSetTimout;
            }
          } catch (e) {
            cachedSetTimeout = defaultSetTimout;
          }
          try {
            if (typeof clearTimeout === "function") {
              cachedClearTimeout = clearTimeout;
            } else {
              cachedClearTimeout = defaultClearTimeout;
            }
          } catch (e) {
            cachedClearTimeout = defaultClearTimeout;
          }
        })();
        function runTimeout(fun) {
          if (cachedSetTimeout === setTimeout) {
            return setTimeout(fun, 0);
          }
          if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
            cachedSetTimeout = setTimeout;
            return setTimeout(fun, 0);
          }
          try {
            return cachedSetTimeout(fun, 0);
          } catch (e) {
            try {
              return cachedSetTimeout.call(null, fun, 0);
            } catch (e2) {
              return cachedSetTimeout.call(this, fun, 0);
            }
          }
        }
        function runClearTimeout(marker) {
          if (cachedClearTimeout === clearTimeout) {
            return clearTimeout(marker);
          }
          if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
            cachedClearTimeout = clearTimeout;
            return clearTimeout(marker);
          }
          try {
            return cachedClearTimeout(marker);
          } catch (e) {
            try {
              return cachedClearTimeout.call(null, marker);
            } catch (e2) {
              return cachedClearTimeout.call(this, marker);
            }
          }
        }
        var queue = [];
        var draining = false;
        var currentQueue;
        var queueIndex = -1;
        function cleanUpNextTick() {
          if (!draining || !currentQueue) {
            return;
          }
          draining = false;
          if (currentQueue.length) {
            queue = currentQueue.concat(queue);
          } else {
            queueIndex = -1;
          }
          if (queue.length) {
            drainQueue();
          }
        }
        function drainQueue() {
          if (draining) {
            return;
          }
          var timeout = runTimeout(cleanUpNextTick);
          draining = true;
          var len = queue.length;
          while (len) {
            currentQueue = queue;
            queue = [];
            while (++queueIndex < len) {
              if (currentQueue) {
                currentQueue[queueIndex].run();
              }
            }
            queueIndex = -1;
            len = queue.length;
          }
          currentQueue = null;
          draining = false;
          runClearTimeout(timeout);
        }
        process2.nextTick = function(fun) {
          var args2 = new Array(arguments.length - 1);
          if (arguments.length > 1) {
            for (var i = 1; i < arguments.length; i++) {
              args2[i - 1] = arguments[i];
            }
          }
          queue.push(new Item2(fun, args2));
          if (queue.length === 1 && !draining) {
            runTimeout(drainQueue);
          }
        };
        function Item2(fun, array) {
          this.fun = fun;
          this.array = array;
        }
        Item2.prototype.run = function() {
          this.fun.apply(null, this.array);
        };
        process2.title = "browser";
        process2.browser = true;
        process2.env = {};
        process2.argv = [];
        process2.version = "";
        process2.versions = {};
        function noop() {
        }
        process2.on = noop;
        process2.addListener = noop;
        process2.once = noop;
        process2.off = noop;
        process2.removeListener = noop;
        process2.removeAllListeners = noop;
        process2.emit = noop;
        process2.prependListener = noop;
        process2.prependOnceListener = noop;
        process2.listeners = function(name2) {
          return [];
        };
        process2.binding = function(name2) {
          throw new Error("process.binding is not supported");
        };
        process2.cwd = function() {
          return "/";
        };
        process2.chdir = function(dir) {
          throw new Error("process.chdir is not supported");
        };
        process2.umask = function() {
          return 0;
        };
      },
      /* 6 */
      /***/
      function(module3, exports3, __webpack_require__) {
        (function(process2) {
          "use strict";
          var emptyFunction = __webpack_require__(7);
          var invariant = __webpack_require__(8);
          var warning = __webpack_require__(9);
          var assign2 = __webpack_require__(10);
          var ReactPropTypesSecret = __webpack_require__(11);
          var checkPropTypes = __webpack_require__(12);
          module3.exports = function(isValidElement, throwOnDirectAccess) {
            var ITERATOR_SYMBOL = typeof Symbol === "function" && Symbol.iterator;
            var FAUX_ITERATOR_SYMBOL = "@@iterator";
            function getIteratorFn(maybeIterable) {
              var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
              if (typeof iteratorFn === "function") {
                return iteratorFn;
              }
            }
            var ANONYMOUS = "<<anonymous>>";
            var ReactPropTypes = {
              array: createPrimitiveTypeChecker("array"),
              bool: createPrimitiveTypeChecker("boolean"),
              func: createPrimitiveTypeChecker("function"),
              number: createPrimitiveTypeChecker("number"),
              object: createPrimitiveTypeChecker("object"),
              string: createPrimitiveTypeChecker("string"),
              symbol: createPrimitiveTypeChecker("symbol"),
              any: createAnyTypeChecker(),
              arrayOf: createArrayOfTypeChecker,
              element: createElementTypeChecker(),
              instanceOf: createInstanceTypeChecker,
              node: createNodeChecker(),
              objectOf: createObjectOfTypeChecker,
              oneOf: createEnumTypeChecker,
              oneOfType: createUnionTypeChecker,
              shape: createShapeTypeChecker,
              exact: createStrictShapeTypeChecker
            };
            function is(x, y) {
              if (x === y) {
                return x !== 0 || 1 / x === 1 / y;
              } else {
                return x !== x && y !== y;
              }
            }
            function PropTypeError(message) {
              this.message = message;
              this.stack = "";
            }
            PropTypeError.prototype = Error.prototype;
            function createChainableTypeChecker(validate) {
              if (process2.env.NODE_ENV !== "production") {
                var manualPropTypeCallCache = {};
                var manualPropTypeWarningCount = 0;
              }
              function checkType(isRequired, props, propName, componentName, location2, propFullName, secret) {
                componentName = componentName || ANONYMOUS;
                propFullName = propFullName || propName;
                if (secret !== ReactPropTypesSecret) {
                  if (throwOnDirectAccess) {
                    invariant(
                      false,
                      "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
                    );
                  } else if (process2.env.NODE_ENV !== "production" && typeof console !== "undefined") {
                    var cacheKey = componentName + ":" + propName;
                    if (!manualPropTypeCallCache[cacheKey] && // Avoid spamming the console because they are often not actionable except for lib authors
                    manualPropTypeWarningCount < 3) {
                      warning(
                        false,
                        "You are manually calling a React.PropTypes validation function for the `%s` prop on `%s`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details.",
                        propFullName,
                        componentName
                      );
                      manualPropTypeCallCache[cacheKey] = true;
                      manualPropTypeWarningCount++;
                    }
                  }
                }
                if (props[propName] == null) {
                  if (isRequired) {
                    if (props[propName] === null) {
                      return new PropTypeError("The " + location2 + " `" + propFullName + "` is marked as required " + ("in `" + componentName + "`, but its value is `null`."));
                    }
                    return new PropTypeError("The " + location2 + " `" + propFullName + "` is marked as required in " + ("`" + componentName + "`, but its value is `undefined`."));
                  }
                  return null;
                } else {
                  return validate(props, propName, componentName, location2, propFullName);
                }
              }
              var chainedCheckType = checkType.bind(null, false);
              chainedCheckType.isRequired = checkType.bind(null, true);
              return chainedCheckType;
            }
            function createPrimitiveTypeChecker(expectedType) {
              function validate(props, propName, componentName, location2, propFullName, secret) {
                var propValue = props[propName];
                var propType = getPropType(propValue);
                if (propType !== expectedType) {
                  var preciseType = getPreciseType(propValue);
                  return new PropTypeError("Invalid " + location2 + " `" + propFullName + "` of type " + ("`" + preciseType + "` supplied to `" + componentName + "`, expected ") + ("`" + expectedType + "`."));
                }
                return null;
              }
              return createChainableTypeChecker(validate);
            }
            function createAnyTypeChecker() {
              return createChainableTypeChecker(emptyFunction.thatReturnsNull);
            }
            function createArrayOfTypeChecker(typeChecker) {
              function validate(props, propName, componentName, location2, propFullName) {
                if (typeof typeChecker !== "function") {
                  return new PropTypeError("Property `" + propFullName + "` of component `" + componentName + "` has invalid PropType notation inside arrayOf.");
                }
                var propValue = props[propName];
                if (!Array.isArray(propValue)) {
                  var propType = getPropType(propValue);
                  return new PropTypeError("Invalid " + location2 + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected an array."));
                }
                for (var i = 0; i < propValue.length; i++) {
                  var error = typeChecker(propValue, i, componentName, location2, propFullName + "[" + i + "]", ReactPropTypesSecret);
                  if (error instanceof Error) {
                    return error;
                  }
                }
                return null;
              }
              return createChainableTypeChecker(validate);
            }
            function createElementTypeChecker() {
              function validate(props, propName, componentName, location2, propFullName) {
                var propValue = props[propName];
                if (!isValidElement(propValue)) {
                  var propType = getPropType(propValue);
                  return new PropTypeError("Invalid " + location2 + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected a single ReactElement."));
                }
                return null;
              }
              return createChainableTypeChecker(validate);
            }
            function createInstanceTypeChecker(expectedClass) {
              function validate(props, propName, componentName, location2, propFullName) {
                if (!(props[propName] instanceof expectedClass)) {
                  var expectedClassName = expectedClass.name || ANONYMOUS;
                  var actualClassName = getClassName(props[propName]);
                  return new PropTypeError("Invalid " + location2 + " `" + propFullName + "` of type " + ("`" + actualClassName + "` supplied to `" + componentName + "`, expected ") + ("instance of `" + expectedClassName + "`."));
                }
                return null;
              }
              return createChainableTypeChecker(validate);
            }
            function createEnumTypeChecker(expectedValues) {
              if (!Array.isArray(expectedValues)) {
                process2.env.NODE_ENV !== "production" ? warning(false, "Invalid argument supplied to oneOf, expected an instance of array.") : void 0;
                return emptyFunction.thatReturnsNull;
              }
              function validate(props, propName, componentName, location2, propFullName) {
                var propValue = props[propName];
                for (var i = 0; i < expectedValues.length; i++) {
                  if (is(propValue, expectedValues[i])) {
                    return null;
                  }
                }
                var valuesString = JSON.stringify(expectedValues);
                return new PropTypeError("Invalid " + location2 + " `" + propFullName + "` of value `" + propValue + "` " + ("supplied to `" + componentName + "`, expected one of " + valuesString + "."));
              }
              return createChainableTypeChecker(validate);
            }
            function createObjectOfTypeChecker(typeChecker) {
              function validate(props, propName, componentName, location2, propFullName) {
                if (typeof typeChecker !== "function") {
                  return new PropTypeError("Property `" + propFullName + "` of component `" + componentName + "` has invalid PropType notation inside objectOf.");
                }
                var propValue = props[propName];
                var propType = getPropType(propValue);
                if (propType !== "object") {
                  return new PropTypeError("Invalid " + location2 + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected an object."));
                }
                for (var key in propValue) {
                  if (propValue.hasOwnProperty(key)) {
                    var error = typeChecker(propValue, key, componentName, location2, propFullName + "." + key, ReactPropTypesSecret);
                    if (error instanceof Error) {
                      return error;
                    }
                  }
                }
                return null;
              }
              return createChainableTypeChecker(validate);
            }
            function createUnionTypeChecker(arrayOfTypeCheckers) {
              if (!Array.isArray(arrayOfTypeCheckers)) {
                process2.env.NODE_ENV !== "production" ? warning(false, "Invalid argument supplied to oneOfType, expected an instance of array.") : void 0;
                return emptyFunction.thatReturnsNull;
              }
              for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
                var checker = arrayOfTypeCheckers[i];
                if (typeof checker !== "function") {
                  warning(
                    false,
                    "Invalid argument supplied to oneOfType. Expected an array of check functions, but received %s at index %s.",
                    getPostfixForTypeWarning(checker),
                    i
                  );
                  return emptyFunction.thatReturnsNull;
                }
              }
              function validate(props, propName, componentName, location2, propFullName) {
                for (var i2 = 0; i2 < arrayOfTypeCheckers.length; i2++) {
                  var checker2 = arrayOfTypeCheckers[i2];
                  if (checker2(props, propName, componentName, location2, propFullName, ReactPropTypesSecret) == null) {
                    return null;
                  }
                }
                return new PropTypeError("Invalid " + location2 + " `" + propFullName + "` supplied to " + ("`" + componentName + "`."));
              }
              return createChainableTypeChecker(validate);
            }
            function createNodeChecker() {
              function validate(props, propName, componentName, location2, propFullName) {
                if (!isNode2(props[propName])) {
                  return new PropTypeError("Invalid " + location2 + " `" + propFullName + "` supplied to " + ("`" + componentName + "`, expected a ReactNode."));
                }
                return null;
              }
              return createChainableTypeChecker(validate);
            }
            function createShapeTypeChecker(shapeTypes) {
              function validate(props, propName, componentName, location2, propFullName) {
                var propValue = props[propName];
                var propType = getPropType(propValue);
                if (propType !== "object") {
                  return new PropTypeError("Invalid " + location2 + " `" + propFullName + "` of type `" + propType + "` " + ("supplied to `" + componentName + "`, expected `object`."));
                }
                for (var key in shapeTypes) {
                  var checker = shapeTypes[key];
                  if (!checker) {
                    continue;
                  }
                  var error = checker(propValue, key, componentName, location2, propFullName + "." + key, ReactPropTypesSecret);
                  if (error) {
                    return error;
                  }
                }
                return null;
              }
              return createChainableTypeChecker(validate);
            }
            function createStrictShapeTypeChecker(shapeTypes) {
              function validate(props, propName, componentName, location2, propFullName) {
                var propValue = props[propName];
                var propType = getPropType(propValue);
                if (propType !== "object") {
                  return new PropTypeError("Invalid " + location2 + " `" + propFullName + "` of type `" + propType + "` " + ("supplied to `" + componentName + "`, expected `object`."));
                }
                var allKeys = assign2({}, props[propName], shapeTypes);
                for (var key in allKeys) {
                  var checker = shapeTypes[key];
                  if (!checker) {
                    return new PropTypeError(
                      "Invalid " + location2 + " `" + propFullName + "` key `" + key + "` supplied to `" + componentName + "`.\nBad object: " + JSON.stringify(props[propName], null, "  ") + "\nValid keys: " + JSON.stringify(Object.keys(shapeTypes), null, "  ")
                    );
                  }
                  var error = checker(propValue, key, componentName, location2, propFullName + "." + key, ReactPropTypesSecret);
                  if (error) {
                    return error;
                  }
                }
                return null;
              }
              return createChainableTypeChecker(validate);
            }
            function isNode2(propValue) {
              switch (typeof propValue) {
                case "number":
                case "string":
                case "undefined":
                  return true;
                case "boolean":
                  return !propValue;
                case "object":
                  if (Array.isArray(propValue)) {
                    return propValue.every(isNode2);
                  }
                  if (propValue === null || isValidElement(propValue)) {
                    return true;
                  }
                  var iteratorFn = getIteratorFn(propValue);
                  if (iteratorFn) {
                    var iterator = iteratorFn.call(propValue);
                    var step;
                    if (iteratorFn !== propValue.entries) {
                      while (!(step = iterator.next()).done) {
                        if (!isNode2(step.value)) {
                          return false;
                        }
                      }
                    } else {
                      while (!(step = iterator.next()).done) {
                        var entry = step.value;
                        if (entry) {
                          if (!isNode2(entry[1])) {
                            return false;
                          }
                        }
                      }
                    }
                  } else {
                    return false;
                  }
                  return true;
                default:
                  return false;
              }
            }
            function isSymbol(propType, propValue) {
              if (propType === "symbol") {
                return true;
              }
              if (propValue["@@toStringTag"] === "Symbol") {
                return true;
              }
              if (typeof Symbol === "function" && propValue instanceof Symbol) {
                return true;
              }
              return false;
            }
            function getPropType(propValue) {
              var propType = typeof propValue;
              if (Array.isArray(propValue)) {
                return "array";
              }
              if (propValue instanceof RegExp) {
                return "object";
              }
              if (isSymbol(propType, propValue)) {
                return "symbol";
              }
              return propType;
            }
            function getPreciseType(propValue) {
              if (typeof propValue === "undefined" || propValue === null) {
                return "" + propValue;
              }
              var propType = getPropType(propValue);
              if (propType === "object") {
                if (propValue instanceof Date) {
                  return "date";
                } else if (propValue instanceof RegExp) {
                  return "regexp";
                }
              }
              return propType;
            }
            function getPostfixForTypeWarning(value) {
              var type = getPreciseType(value);
              switch (type) {
                case "array":
                case "object":
                  return "an " + type;
                case "boolean":
                case "date":
                case "regexp":
                  return "a " + type;
                default:
                  return type;
              }
            }
            function getClassName(propValue) {
              if (!propValue.constructor || !propValue.constructor.name) {
                return ANONYMOUS;
              }
              return propValue.constructor.name;
            }
            ReactPropTypes.checkPropTypes = checkPropTypes;
            ReactPropTypes.PropTypes = ReactPropTypes;
            return ReactPropTypes;
          };
        }).call(exports3, __webpack_require__(5));
      },
      /* 7 */
      /***/
      function(module3, exports3) {
        "use strict";
        function makeEmptyFunction(arg) {
          return function() {
            return arg;
          };
        }
        var emptyFunction = function emptyFunction2() {
        };
        emptyFunction.thatReturns = makeEmptyFunction;
        emptyFunction.thatReturnsFalse = makeEmptyFunction(false);
        emptyFunction.thatReturnsTrue = makeEmptyFunction(true);
        emptyFunction.thatReturnsNull = makeEmptyFunction(null);
        emptyFunction.thatReturnsThis = function() {
          return this;
        };
        emptyFunction.thatReturnsArgument = function(arg) {
          return arg;
        };
        module3.exports = emptyFunction;
      },
      /* 8 */
      /***/
      function(module3, exports3, __webpack_require__) {
        (function(process2) {
          "use strict";
          var validateFormat = function validateFormat2(format) {
          };
          if (process2.env.NODE_ENV !== "production") {
            validateFormat = function validateFormat2(format) {
              if (format === void 0) {
                throw new Error("invariant requires an error message argument");
              }
            };
          }
          function invariant(condition, format, a, b, c, d, e, f) {
            validateFormat(format);
            if (!condition) {
              var error;
              if (format === void 0) {
                error = new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");
              } else {
                var args2 = [a, b, c, d, e, f];
                var argIndex = 0;
                error = new Error(format.replace(/%s/g, function() {
                  return args2[argIndex++];
                }));
                error.name = "Invariant Violation";
              }
              error.framesToPop = 1;
              throw error;
            }
          }
          module3.exports = invariant;
        }).call(exports3, __webpack_require__(5));
      },
      /* 9 */
      /***/
      function(module3, exports3, __webpack_require__) {
        (function(process2) {
          "use strict";
          var emptyFunction = __webpack_require__(7);
          var warning = emptyFunction;
          if (process2.env.NODE_ENV !== "production") {
            var printWarning = function printWarning2(format) {
              for (var _len = arguments.length, args2 = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
                args2[_key - 1] = arguments[_key];
              }
              var argIndex = 0;
              var message = "Warning: " + format.replace(/%s/g, function() {
                return args2[argIndex++];
              });
              if (typeof console !== "undefined") {
                console.error(message);
              }
              try {
                throw new Error(message);
              } catch (x) {
              }
            };
            warning = function warning2(condition, format) {
              if (format === void 0) {
                throw new Error("`warning(condition, format, ...args)` requires a warning message argument");
              }
              if (format.indexOf("Failed Composite propType: ") === 0) {
                return;
              }
              if (!condition) {
                for (var _len2 = arguments.length, args2 = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
                  args2[_key2 - 2] = arguments[_key2];
                }
                printWarning.apply(void 0, [format].concat(args2));
              }
            };
          }
          module3.exports = warning;
        }).call(exports3, __webpack_require__(5));
      },
      /* 10 */
      /***/
      function(module3, exports3) {
        "use strict";
        var getOwnPropertySymbols = Object.getOwnPropertySymbols;
        var hasOwnProperty = Object.prototype.hasOwnProperty;
        var propIsEnumerable = Object.prototype.propertyIsEnumerable;
        function toObject(val) {
          if (val === null || val === void 0) {
            throw new TypeError("Object.assign cannot be called with null or undefined");
          }
          return Object(val);
        }
        function shouldUseNative() {
          try {
            if (!Object.assign) {
              return false;
            }
            var test1 = new String("abc");
            test1[5] = "de";
            if (Object.getOwnPropertyNames(test1)[0] === "5") {
              return false;
            }
            var test2 = {};
            for (var i = 0; i < 10; i++) {
              test2["_" + String.fromCharCode(i)] = i;
            }
            var order2 = Object.getOwnPropertyNames(test2).map(function(n) {
              return test2[n];
            });
            if (order2.join("") !== "0123456789") {
              return false;
            }
            var test3 = {};
            "abcdefghijklmnopqrst".split("").forEach(function(letter) {
              test3[letter] = letter;
            });
            if (Object.keys(Object.assign({}, test3)).join("") !== "abcdefghijklmnopqrst") {
              return false;
            }
            return true;
          } catch (err) {
            return false;
          }
        }
        module3.exports = shouldUseNative() ? Object.assign : function(target, source) {
          var from2;
          var to = toObject(target);
          var symbols;
          for (var s = 1; s < arguments.length; s++) {
            from2 = Object(arguments[s]);
            for (var key in from2) {
              if (hasOwnProperty.call(from2, key)) {
                to[key] = from2[key];
              }
            }
            if (getOwnPropertySymbols) {
              symbols = getOwnPropertySymbols(from2);
              for (var i = 0; i < symbols.length; i++) {
                if (propIsEnumerable.call(from2, symbols[i])) {
                  to[symbols[i]] = from2[symbols[i]];
                }
              }
            }
          }
          return to;
        };
      },
      /* 11 */
      /***/
      function(module3, exports3) {
        "use strict";
        var ReactPropTypesSecret = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
        module3.exports = ReactPropTypesSecret;
      },
      /* 12 */
      /***/
      function(module3, exports3, __webpack_require__) {
        (function(process2) {
          "use strict";
          if (process2.env.NODE_ENV !== "production") {
            var invariant = __webpack_require__(8);
            var warning = __webpack_require__(9);
            var ReactPropTypesSecret = __webpack_require__(11);
            var loggedTypeFailures = {};
          }
          function checkPropTypes(typeSpecs, values, location2, componentName, getStack) {
            if (process2.env.NODE_ENV !== "production") {
              for (var typeSpecName in typeSpecs) {
                if (typeSpecs.hasOwnProperty(typeSpecName)) {
                  var error;
                  try {
                    invariant(typeof typeSpecs[typeSpecName] === "function", "%s: %s type `%s` is invalid; it must be a function, usually from the `prop-types` package, but received `%s`.", componentName || "React class", location2, typeSpecName, typeof typeSpecs[typeSpecName]);
                    error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location2, null, ReactPropTypesSecret);
                  } catch (ex) {
                    error = ex;
                  }
                  warning(!error || error instanceof Error, "%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", componentName || "React class", location2, typeSpecName, typeof error);
                  if (error instanceof Error && !(error.message in loggedTypeFailures)) {
                    loggedTypeFailures[error.message] = true;
                    var stack = getStack ? getStack() : "";
                    warning(false, "Failed %s type: %s%s", location2, error.message, stack != null ? stack : "");
                  }
                }
              }
            }
          }
          module3.exports = checkPropTypes;
        }).call(exports3, __webpack_require__(5));
      },
      /* 13 */
      /***/
      function(module3, exports3, __webpack_require__) {
        "use strict";
        var emptyFunction = __webpack_require__(7);
        var invariant = __webpack_require__(8);
        var ReactPropTypesSecret = __webpack_require__(11);
        module3.exports = function() {
          function shim(props, propName, componentName, location2, propFullName, secret) {
            if (secret === ReactPropTypesSecret) {
              return;
            }
            invariant(
              false,
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
            );
          }
          ;
          shim.isRequired = shim;
          function getShim() {
            return shim;
          }
          ;
          var ReactPropTypes = {
            array: shim,
            bool: shim,
            func: shim,
            number: shim,
            object: shim,
            string: shim,
            symbol: shim,
            any: shim,
            arrayOf: getShim,
            element: shim,
            instanceOf: getShim,
            node: shim,
            objectOf: getShim,
            oneOf: getShim,
            oneOfType: getShim,
            shape: getShim,
            exact: getShim
          };
          ReactPropTypes.checkPropTypes = emptyFunction;
          ReactPropTypes.PropTypes = ReactPropTypes;
          return ReactPropTypes;
        };
      },
      /* 14 */
      /***/
      function(module3, exports3) {
        module3.exports = require_react();
      },
      /* 15 */
      /***/
      function(module3, exports3) {
        "use strict";
        var simpleIsEqual = function simpleIsEqual2(a, b) {
          return a === b;
        };
        function index(resultFn) {
          var isEqual = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : simpleIsEqual;
          var lastThis = void 0;
          var lastArgs = [];
          var lastResult = void 0;
          var calledOnce = false;
          var isNewArgEqualToLast = function isNewArgEqualToLast2(newArg, index2) {
            return isEqual(newArg, lastArgs[index2]);
          };
          var result = function result2() {
            for (var _len = arguments.length, newArgs = Array(_len), _key = 0; _key < _len; _key++) {
              newArgs[_key] = arguments[_key];
            }
            if (calledOnce && lastThis === this && newArgs.length === lastArgs.length && newArgs.every(isNewArgEqualToLast)) {
              return lastResult;
            }
            calledOnce = true;
            lastThis = this;
            lastArgs = newArgs;
            lastResult = resultFn.apply(this, newArgs);
            return lastResult;
          };
          return result;
        }
        module3.exports = index;
      }
      /******/
    ]);
  }
});

// ../../node_modules/react-json-tree/lib/esm/objType.js
function objType(obj) {
  const type = Object.prototype.toString.call(obj).slice(8, -1);
  if (type === "Object" && typeof obj[Symbol.iterator] === "function") {
    return "Iterable";
  }
  if (type === "Custom" && obj.constructor !== Object && obj instanceof Object) {
    return "Object";
  }
  return type;
}
var init_objType = __esm({
  "../../node_modules/react-json-tree/lib/esm/objType.js"() {
  }
});

// ../../node_modules/react-json-tree/lib/esm/JSONArrow.js
function JSONArrow(_ref) {
  let {
    styling,
    arrowStyle = "single",
    expanded,
    nodeType,
    onClick
  } = _ref;
  return /* @__PURE__ */ import_react2.default.createElement("div", _extends({}, styling("arrowContainer", arrowStyle), {
    onClick
  }), /* @__PURE__ */ import_react2.default.createElement("div", styling(["arrow", "arrowSign"], nodeType, expanded, arrowStyle), "\u25B6", arrowStyle === "double" && /* @__PURE__ */ import_react2.default.createElement("div", styling(["arrowSign", "arrowSignInner"]), "\u25B6")));
}
var import_react2;
var init_JSONArrow = __esm({
  "../../node_modules/react-json-tree/lib/esm/JSONArrow.js"() {
    init_extends();
    import_react2 = __toESM(require_react());
  }
});

// ../../node_modules/react-json-tree/lib/esm/getCollectionEntries.js
function getLength(type, collection) {
  if (type === "Object") {
    return Object.keys(collection).length;
  } else if (type === "Array") {
    return collection.length;
  }
  return Infinity;
}
function isIterableMap(collection) {
  return typeof collection.set === "function";
}
function getEntries(type, collection, sortObjectKeys) {
  let from2 = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 0;
  let to = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : Infinity;
  let res;
  if (type === "Object") {
    let keys2 = Object.getOwnPropertyNames(collection);
    if (sortObjectKeys) {
      keys2.sort(sortObjectKeys === true ? void 0 : sortObjectKeys);
    }
    keys2 = keys2.slice(from2, to + 1);
    res = {
      entries: keys2.map((key) => ({
        key,
        value: collection[key]
      }))
    };
  } else if (type === "Array") {
    res = {
      entries: collection.slice(from2, to + 1).map((val, idx) => ({
        key: idx + from2,
        value: val
      }))
    };
  } else {
    let idx = 0;
    const entries = [];
    let done = true;
    const isMap = isIterableMap(collection);
    for (const item of collection) {
      if (idx > to) {
        done = false;
        break;
      }
      if (from2 <= idx) {
        if (isMap && Array.isArray(item)) {
          if (typeof item[0] === "string" || typeof item[0] === "number") {
            entries.push({
              key: item[0],
              value: item[1]
            });
          } else {
            entries.push({
              key: `[entry ${idx}]`,
              value: {
                "[key]": item[0],
                "[value]": item[1]
              }
            });
          }
        } else {
          entries.push({
            key: idx,
            value: item
          });
        }
      }
      idx++;
    }
    res = {
      hasMore: !done,
      entries
    };
  }
  return res;
}
function getRanges(from2, to, limit) {
  const ranges = [];
  while (to - from2 > limit * limit) {
    limit = limit * limit;
  }
  for (let i = from2; i <= to; i += limit) {
    ranges.push({
      from: i,
      to: Math.min(to, i + limit - 1)
    });
  }
  return ranges;
}
function getCollectionEntries(type, collection, sortObjectKeys, limit) {
  let from2 = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : 0;
  let to = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : Infinity;
  const getEntriesBound = getEntries.bind(null, type, collection, sortObjectKeys);
  if (!limit) {
    return getEntriesBound().entries;
  }
  const isSubset = to < Infinity;
  const length3 = Math.min(to - from2, getLength(type, collection));
  if (type !== "Iterable") {
    if (length3 <= limit || limit < 7) {
      return getEntriesBound(from2, to).entries;
    }
  } else {
    if (length3 <= limit && !isSubset) {
      return getEntriesBound(from2, to).entries;
    }
  }
  let limitedEntries;
  if (type === "Iterable") {
    const {
      hasMore,
      entries
    } = getEntriesBound(from2, from2 + limit - 1);
    limitedEntries = hasMore ? [...entries, ...getRanges(from2 + limit, from2 + 2 * limit - 1, limit)] : entries;
  } else {
    limitedEntries = isSubset ? getRanges(from2, to, limit) : [...getEntriesBound(0, limit - 5).entries, ...getRanges(limit - 4, length3 - 5, limit), ...getEntriesBound(length3 - 4, length3 - 1).entries];
  }
  return limitedEntries;
}
var init_getCollectionEntries = __esm({
  "../../node_modules/react-json-tree/lib/esm/getCollectionEntries.js"() {
  }
});

// ../../node_modules/react-json-tree/lib/esm/ItemRange.js
function ItemRange(props) {
  const {
    styling,
    from: from2,
    to,
    renderChildNodes: renderChildNodes2,
    nodeType
  } = props;
  const [expanded, setExpanded] = (0, import_react3.useState)(false);
  const handleClick = (0, import_react3.useCallback)(() => {
    setExpanded(!expanded);
  }, [expanded]);
  return expanded ? /* @__PURE__ */ import_react3.default.createElement("div", styling("itemRange", expanded), renderChildNodes2(props, from2, to)) : /* @__PURE__ */ import_react3.default.createElement("div", _extends({}, styling("itemRange", expanded), {
    onClick: handleClick
  }), /* @__PURE__ */ import_react3.default.createElement(JSONArrow, {
    nodeType,
    styling,
    expanded: false,
    onClick: handleClick,
    arrowStyle: "double"
  }), `${from2} ... ${to}`);
}
var import_react3;
var init_ItemRange = __esm({
  "../../node_modules/react-json-tree/lib/esm/ItemRange.js"() {
    init_extends();
    import_react3 = __toESM(require_react());
    init_JSONArrow();
  }
});

// ../../node_modules/react-json-tree/lib/esm/JSONNestedNode.js
function isRange(rangeOrEntry) {
  return rangeOrEntry.to !== void 0;
}
function renderChildNodes(props, from2, to) {
  const {
    nodeType,
    data,
    collectionLimit,
    circularCache,
    keyPath,
    postprocessValue,
    sortObjectKeys
  } = props;
  const childNodes = [];
  getCollectionEntries(nodeType, data, sortObjectKeys, collectionLimit, from2, to).forEach((entry) => {
    if (isRange(entry)) {
      childNodes.push(/* @__PURE__ */ import_react4.default.createElement(ItemRange, _extends({}, props, {
        key: `ItemRange--${entry.from}-${entry.to}`,
        from: entry.from,
        to: entry.to,
        renderChildNodes
      })));
    } else {
      const {
        key,
        value
      } = entry;
      const isCircular = circularCache.indexOf(value) !== -1;
      childNodes.push(/* @__PURE__ */ import_react4.default.createElement(JSONNode, _extends({}, props, {
        postprocessValue,
        collectionLimit,
        key: `Node--${key}`,
        keyPath: [key, ...keyPath],
        value: postprocessValue(value),
        circularCache: [...circularCache, value],
        isCircular,
        hideRoot: false
      })));
    }
  });
  return childNodes;
}
function JSONNestedNode(props) {
  const {
    circularCache = [],
    collectionLimit,
    createItemString: createItemString4,
    data,
    expandable,
    getItemString,
    hideRoot,
    isCircular,
    keyPath,
    labelRenderer,
    level = 0,
    nodeType,
    nodeTypeIndicator,
    shouldExpandNodeInitially,
    styling
  } = props;
  const [expanded, setExpanded] = (0, import_react4.useState)(
    // calculate individual node expansion if necessary
    isCircular ? false : shouldExpandNodeInitially(keyPath, data, level)
  );
  const handleClick = (0, import_react4.useCallback)(() => {
    if (expandable)
      setExpanded(!expanded);
  }, [expandable, expanded]);
  const renderedChildren = expanded || hideRoot && level === 0 ? renderChildNodes({
    ...props,
    circularCache,
    level: level + 1
  }) : null;
  const itemType = /* @__PURE__ */ import_react4.default.createElement("span", styling("nestedNodeItemType", expanded), nodeTypeIndicator);
  const renderedItemString = getItemString(nodeType, data, itemType, createItemString4(data, collectionLimit), keyPath);
  const stylingArgs = [keyPath, nodeType, expanded, expandable];
  return hideRoot ? /* @__PURE__ */ import_react4.default.createElement("li", styling("rootNode", ...stylingArgs), /* @__PURE__ */ import_react4.default.createElement("ul", styling("rootNodeChildren", ...stylingArgs), renderedChildren)) : /* @__PURE__ */ import_react4.default.createElement("li", styling("nestedNode", ...stylingArgs), expandable && /* @__PURE__ */ import_react4.default.createElement(JSONArrow, {
    styling,
    nodeType,
    expanded,
    onClick: handleClick
  }), /* @__PURE__ */ import_react4.default.createElement("label", _extends({}, styling(["label", "nestedNodeLabel"], ...stylingArgs), {
    onClick: handleClick
  }), labelRenderer(...stylingArgs)), /* @__PURE__ */ import_react4.default.createElement("span", _extends({}, styling("nestedNodeItemString", ...stylingArgs), {
    onClick: handleClick
  }), renderedItemString), /* @__PURE__ */ import_react4.default.createElement("ul", styling("nestedNodeChildren", ...stylingArgs), renderedChildren));
}
var import_react4;
var init_JSONNestedNode = __esm({
  "../../node_modules/react-json-tree/lib/esm/JSONNestedNode.js"() {
    init_extends();
    import_react4 = __toESM(require_react());
    init_JSONArrow();
    init_getCollectionEntries();
    init_JSONNode();
    init_ItemRange();
  }
});

// ../../node_modules/react-json-tree/lib/esm/JSONObjectNode.js
function createItemString(data) {
  const len = Object.getOwnPropertyNames(data).length;
  return `${len} ${len !== 1 ? "keys" : "key"}`;
}
function JSONObjectNode(_ref) {
  let {
    data,
    ...props
  } = _ref;
  return /* @__PURE__ */ import_react5.default.createElement(JSONNestedNode, _extends({}, props, {
    data,
    nodeType: "Object",
    nodeTypeIndicator: props.nodeType === "Error" ? "Error()" : "{}",
    createItemString,
    expandable: Object.getOwnPropertyNames(data).length > 0
  }));
}
var import_react5;
var init_JSONObjectNode = __esm({
  "../../node_modules/react-json-tree/lib/esm/JSONObjectNode.js"() {
    init_extends();
    import_react5 = __toESM(require_react());
    init_JSONNestedNode();
  }
});

// ../../node_modules/react-json-tree/lib/esm/JSONArrayNode.js
function createItemString2(data) {
  return `${data.length} ${data.length !== 1 ? "items" : "item"}`;
}
function JSONArrayNode(_ref) {
  let {
    data,
    ...props
  } = _ref;
  return /* @__PURE__ */ import_react6.default.createElement(JSONNestedNode, _extends({}, props, {
    data,
    nodeType: "Array",
    nodeTypeIndicator: "[]",
    createItemString: createItemString2,
    expandable: data.length > 0
  }));
}
var import_react6;
var init_JSONArrayNode = __esm({
  "../../node_modules/react-json-tree/lib/esm/JSONArrayNode.js"() {
    init_extends();
    import_react6 = __toESM(require_react());
    init_JSONNestedNode();
  }
});

// ../../node_modules/react-json-tree/lib/esm/JSONIterableNode.js
function createItemString3(data, limit) {
  let count = 0;
  let hasMore = false;
  if (Number.isSafeInteger(data.size)) {
    count = data.size;
  } else {
    for (const entry of data) {
      if (limit && count + 1 > limit) {
        hasMore = true;
        break;
      }
      count += 1;
    }
  }
  return `${hasMore ? ">" : ""}${count} ${count !== 1 ? "entries" : "entry"}`;
}
function JSONIterableNode(props) {
  return /* @__PURE__ */ import_react7.default.createElement(JSONNestedNode, _extends({}, props, {
    nodeType: "Iterable",
    nodeTypeIndicator: "()",
    createItemString: createItemString3,
    expandable: true
  }));
}
var import_react7;
var init_JSONIterableNode = __esm({
  "../../node_modules/react-json-tree/lib/esm/JSONIterableNode.js"() {
    init_extends();
    import_react7 = __toESM(require_react());
    init_JSONNestedNode();
  }
});

// ../../node_modules/react-json-tree/lib/esm/JSONValueNode.js
function JSONValueNode(_ref) {
  let {
    nodeType,
    styling,
    labelRenderer,
    keyPath,
    valueRenderer,
    value,
    valueGetter = (value2) => value2
  } = _ref;
  return /* @__PURE__ */ import_react8.default.createElement("li", styling("value", nodeType, keyPath), /* @__PURE__ */ import_react8.default.createElement("label", styling(["label", "valueLabel"], nodeType, keyPath), labelRenderer(keyPath, nodeType, false, false)), /* @__PURE__ */ import_react8.default.createElement("span", styling("valueText", nodeType, keyPath), valueRenderer(valueGetter(value), value, ...keyPath)));
}
var import_react8;
var init_JSONValueNode = __esm({
  "../../node_modules/react-json-tree/lib/esm/JSONValueNode.js"() {
    import_react8 = __toESM(require_react());
  }
});

// ../../node_modules/react-json-tree/lib/esm/JSONNode.js
function JSONNode(_ref) {
  let {
    getItemString,
    keyPath,
    labelRenderer,
    styling,
    value,
    valueRenderer,
    isCustomNode,
    ...rest
  } = _ref;
  const nodeType = isCustomNode(value) ? "Custom" : objType(value);
  const simpleNodeProps = {
    getItemString,
    key: keyPath[0],
    keyPath,
    labelRenderer,
    nodeType,
    styling,
    value,
    valueRenderer
  };
  const nestedNodeProps = {
    ...rest,
    ...simpleNodeProps,
    data: value,
    isCustomNode
  };
  switch (nodeType) {
    case "Object":
    case "Error":
    case "WeakMap":
    case "WeakSet":
      return /* @__PURE__ */ import_react9.default.createElement(JSONObjectNode, nestedNodeProps);
    case "Array":
      return /* @__PURE__ */ import_react9.default.createElement(JSONArrayNode, nestedNodeProps);
    case "Iterable":
    case "Map":
    case "Set":
      return /* @__PURE__ */ import_react9.default.createElement(JSONIterableNode, nestedNodeProps);
    case "String":
      return /* @__PURE__ */ import_react9.default.createElement(JSONValueNode, _extends({}, simpleNodeProps, {
        valueGetter: (raw) => `"${raw}"`
      }));
    case "Number":
      return /* @__PURE__ */ import_react9.default.createElement(JSONValueNode, simpleNodeProps);
    case "Boolean":
      return /* @__PURE__ */ import_react9.default.createElement(JSONValueNode, _extends({}, simpleNodeProps, {
        valueGetter: (raw) => raw ? "true" : "false"
      }));
    case "Date":
      return /* @__PURE__ */ import_react9.default.createElement(JSONValueNode, _extends({}, simpleNodeProps, {
        valueGetter: (raw) => raw.toISOString()
      }));
    case "Null":
      return /* @__PURE__ */ import_react9.default.createElement(JSONValueNode, _extends({}, simpleNodeProps, {
        valueGetter: () => "null"
      }));
    case "Undefined":
      return /* @__PURE__ */ import_react9.default.createElement(JSONValueNode, _extends({}, simpleNodeProps, {
        valueGetter: () => "undefined"
      }));
    case "Function":
    case "Symbol":
      return /* @__PURE__ */ import_react9.default.createElement(JSONValueNode, _extends({}, simpleNodeProps, {
        valueGetter: (raw) => raw.toString()
      }));
    case "Custom":
      return /* @__PURE__ */ import_react9.default.createElement(JSONValueNode, simpleNodeProps);
    default:
      return /* @__PURE__ */ import_react9.default.createElement(JSONValueNode, _extends({}, simpleNodeProps, {
        valueGetter: () => `<${nodeType}>`
      }));
  }
}
var import_react9;
var init_JSONNode = __esm({
  "../../node_modules/react-json-tree/lib/esm/JSONNode.js"() {
    init_extends();
    import_react9 = __toESM(require_react());
    init_objType();
    init_JSONObjectNode();
    init_JSONArrayNode();
    init_JSONIterableNode();
    init_JSONValueNode();
  }
});

// ../../node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js
function _arrayWithHoles(arr) {
  if (Array.isArray(arr))
    return arr;
}
var init_arrayWithHoles = __esm({
  "../../node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js"() {
  }
});

// ../../node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js
function _iterableToArrayLimit(r, l) {
  var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (null != t) {
    var e, n, i, u, a = [], f = true, o = false;
    try {
      if (i = (t = t.call(r)).next, 0 === l) {
        if (Object(t) !== t)
          return;
        f = false;
      } else
        for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = true)
          ;
    } catch (r2) {
      o = true, n = r2;
    } finally {
      try {
        if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u))
          return;
      } finally {
        if (o)
          throw n;
      }
    }
    return a;
  }
}
var init_iterableToArrayLimit = __esm({
  "../../node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js"() {
  }
});

// ../../node_modules/@babel/runtime/helpers/esm/nonIterableRest.js
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
var init_nonIterableRest = __esm({
  "../../node_modules/@babel/runtime/helpers/esm/nonIterableRest.js"() {
  }
});

// ../../node_modules/@babel/runtime/helpers/esm/slicedToArray.js
function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}
var init_slicedToArray = __esm({
  "../../node_modules/@babel/runtime/helpers/esm/slicedToArray.js"() {
    init_arrayWithHoles();
    init_iterableToArrayLimit();
    init_unsupportedIterableToArray();
    init_nonIterableRest();
  }
});

// ../../node_modules/base16/lib/threezerotwofour.js
var require_threezerotwofour = __commonJS({
  "../../node_modules/base16/lib/threezerotwofour.js"(exports2, module2) {
    "use strict";
    exports2.__esModule = true;
    exports2["default"] = {
      scheme: "threezerotwofour",
      author: "jan t. sott (http://github.com/idleberg)",
      base00: "#090300",
      base01: "#3a3432",
      base02: "#4a4543",
      base03: "#5c5855",
      base04: "#807d7c",
      base05: "#a5a2a2",
      base06: "#d6d5d4",
      base07: "#f7f7f7",
      base08: "#db2d20",
      base09: "#e8bbd0",
      base0A: "#fded02",
      base0B: "#01a252",
      base0C: "#b5e4f4",
      base0D: "#01a0e4",
      base0E: "#a16a94",
      base0F: "#cdab53"
    };
    module2.exports = exports2["default"];
  }
});

// ../../node_modules/base16/lib/apathy.js
var require_apathy = __commonJS({
  "../../node_modules/base16/lib/apathy.js"(exports2, module2) {
    "use strict";
    exports2.__esModule = true;
    exports2["default"] = {
      scheme: "apathy",
      author: "jannik siebert (https://github.com/janniks)",
      base00: "#031A16",
      base01: "#0B342D",
      base02: "#184E45",
      base03: "#2B685E",
      base04: "#5F9C92",
      base05: "#81B5AC",
      base06: "#A7CEC8",
      base07: "#D2E7E4",
      base08: "#3E9688",
      base09: "#3E7996",
      base0A: "#3E4C96",
      base0B: "#883E96",
      base0C: "#963E4C",
      base0D: "#96883E",
      base0E: "#4C963E",
      base0F: "#3E965B"
    };
    module2.exports = exports2["default"];
  }
});

// ../../node_modules/base16/lib/ashes.js
var require_ashes = __commonJS({
  "../../node_modules/base16/lib/ashes.js"(exports2, module2) {
    "use strict";
    exports2.__esModule = true;
    exports2["default"] = {
      scheme: "ashes",
      author: "jannik siebert (https://github.com/janniks)",
      base00: "#1C2023",
      base01: "#393F45",
      base02: "#565E65",
      base03: "#747C84",
      base04: "#ADB3BA",
      base05: "#C7CCD1",
      base06: "#DFE2E5",
      base07: "#F3F4F5",
      base08: "#C7AE95",
      base09: "#C7C795",
      base0A: "#AEC795",
      base0B: "#95C7AE",
      base0C: "#95AEC7",
      base0D: "#AE95C7",
      base0E: "#C795AE",
      base0F: "#C79595"
    };
    module2.exports = exports2["default"];
  }
});

// ../../node_modules/base16/lib/atelier-dune.js
var require_atelier_dune = __commonJS({
  "../../node_modules/base16/lib/atelier-dune.js"(exports2, module2) {
    "use strict";
    exports2.__esModule = true;
    exports2["default"] = {
      scheme: "atelier dune",
      author: "bram de haan (http://atelierbram.github.io/syntax-highlighting/atelier-schemes/dune)",
      base00: "#20201d",
      base01: "#292824",
      base02: "#6e6b5e",
      base03: "#7d7a68",
      base04: "#999580",
      base05: "#a6a28c",
      base06: "#e8e4cf",
      base07: "#fefbec",
      base08: "#d73737",
      base09: "#b65611",
      base0A: "#cfb017",
      base0B: "#60ac39",
      base0C: "#1fad83",
      base0D: "#6684e1",
      base0E: "#b854d4",
      base0F: "#d43552"
    };
    module2.exports = exports2["default"];
  }
});

// ../../node_modules/base16/lib/atelier-forest.js
var require_atelier_forest = __commonJS({
  "../../node_modules/base16/lib/atelier-forest.js"(exports2, module2) {
    "use strict";
    exports2.__esModule = true;
    exports2["default"] = {
      scheme: "atelier forest",
      author: "bram de haan (http://atelierbram.github.io/syntax-highlighting/atelier-schemes/forest)",
      base00: "#1b1918",
      base01: "#2c2421",
      base02: "#68615e",
      base03: "#766e6b",
      base04: "#9c9491",
      base05: "#a8a19f",
      base06: "#e6e2e0",
      base07: "#f1efee",
      base08: "#f22c40",
      base09: "#df5320",
      base0A: "#d5911a",
      base0B: "#5ab738",
      base0C: "#00ad9c",
      base0D: "#407ee7",
      base0E: "#6666ea",
      base0F: "#c33ff3"
    };
    module2.exports = exports2["default"];
  }
});

// ../../node_modules/base16/lib/atelier-heath.js
var require_atelier_heath = __commonJS({
  "../../node_modules/base16/lib/atelier-heath.js"(exports2, module2) {
    "use strict";
    exports2.__esModule = true;
    exports2["default"] = {
      scheme: "atelier heath",
      author: "bram de haan (http://atelierbram.github.io/syntax-highlighting/atelier-schemes/heath)",
      base00: "#1b181b",
      base01: "#292329",
      base02: "#695d69",
      base03: "#776977",
      base04: "#9e8f9e",
      base05: "#ab9bab",
      base06: "#d8cad8",
      base07: "#f7f3f7",
      base08: "#ca402b",
      base09: "#a65926",
      base0A: "#bb8a35",
      base0B: "#379a37",
      base0C: "#159393",
      base0D: "#516aec",
      base0E: "#7b59c0",
      base0F: "#cc33cc"
    };
    module2.exports = exports2["default"];
  }
});

// ../../node_modules/base16/lib/atelier-lakeside.js
var require_atelier_lakeside = __commonJS({
  "../../node_modules/base16/lib/atelier-lakeside.js"(exports2, module2) {
    "use strict";
    exports2.__esModule = true;
    exports2["default"] = {
      scheme: "atelier lakeside",
      author: "bram de haan (http://atelierbram.github.io/syntax-highlighting/atelier-schemes/lakeside/)",
      base00: "#161b1d",
      base01: "#1f292e",
      base02: "#516d7b",
      base03: "#5a7b8c",
      base04: "#7195a8",
      base05: "#7ea2b4",
      base06: "#c1e4f6",
      base07: "#ebf8ff",
      base08: "#d22d72",
      base09: "#935c25",
      base0A: "#8a8a0f",
      base0B: "#568c3b",
      base0C: "#2d8f6f",
      base0D: "#257fad",
      base0E: "#5d5db1",
      base0F: "#b72dd2"
    };
    module2.exports = exports2["default"];
  }
});

// ../../node_modules/base16/lib/atelier-seaside.js
var require_atelier_seaside = __commonJS({
  "../../node_modules/base16/lib/atelier-seaside.js"(exports2, module2) {
    "use strict";
    exports2.__esModule = true;
    exports2["default"] = {
      scheme: "atelier seaside",
      author: "bram de haan (http://atelierbram.github.io/syntax-highlighting/atelier-schemes/seaside/)",
      base00: "#131513",
      base01: "#242924",
      base02: "#5e6e5e",
      base03: "#687d68",
      base04: "#809980",
      base05: "#8ca68c",
      base06: "#cfe8cf",
      base07: "#f0fff0",
      base08: "#e6193c",
      base09: "#87711d",
      base0A: "#c3c322",
      base0B: "#29a329",
      base0C: "#1999b3",
      base0D: "#3d62f5",
      base0E: "#ad2bee",
      base0F: "#e619c3"
    };
    module2.exports = exports2["default"];
  }
});

// ../../node_modules/base16/lib/bespin.js
var require_bespin = __commonJS({
  "../../node_modules/base16/lib/bespin.js"(exports2, module2) {
    "use strict";
    exports2.__esModule = true;
    exports2["default"] = {
      scheme: "bespin",
      author: "jan t. sott",
      base00: "#28211c",
      base01: "#36312e",
      base02: "#5e5d5c",
      base03: "#666666",
      base04: "#797977",
      base05: "#8a8986",
      base06: "#9d9b97",
      base07: "#baae9e",
      base08: "#cf6a4c",
      base09: "#cf7d34",
      base0A: "#f9ee98",
      base0B: "#54be0d",
      base0C: "#afc4db",
      base0D: "#5ea6ea",
      base0E: "#9b859d",
      base0F: "#937121"
    };
    module2.exports = exports2["default"];
  }
});

// ../../node_modules/base16/lib/brewer.js
var require_brewer = __commonJS({
  "../../node_modules/base16/lib/brewer.js"(exports2, module2) {
    "use strict";
    exports2.__esModule = true;
    exports2["default"] = {
      scheme: "brewer",
      author: "timoth\xE9e poisot (http://github.com/tpoisot)",
      base00: "#0c0d0e",
      base01: "#2e2f30",
      base02: "#515253",
      base03: "#737475",
      base04: "#959697",
      base05: "#b7b8b9",
      base06: "#dadbdc",
      base07: "#fcfdfe",
      base08: "#e31a1c",
      base09: "#e6550d",
      base0A: "#dca060",
      base0B: "#31a354",
      base0C: "#80b1d3",
      base0D: "#3182bd",
      base0E: "#756bb1",
      base0F: "#b15928"
    };
    module2.exports = exports2["default"];
  }
});

// ../../node_modules/base16/lib/bright.js
var require_bright = __commonJS({
  "../../node_modules/base16/lib/bright.js"(exports2, module2) {
    "use strict";
    exports2.__esModule = true;
    exports2["default"] = {
      scheme: "bright",
      author: "chris kempson (http://chriskempson.com)",
      base00: "#000000",
      base01: "#303030",
      base02: "#505050",
      base03: "#b0b0b0",
      base04: "#d0d0d0",
      base05: "#e0e0e0",
      base06: "#f5f5f5",
      base07: "#ffffff",
      base08: "#fb0120",
      base09: "#fc6d24",
      base0A: "#fda331",
      base0B: "#a1c659",
      base0C: "#76c7b7",
      base0D: "#6fb3d2",
      base0E: "#d381c3",
      base0F: "#be643c"
    };
    module2.exports = exports2["default"];
  }
});

// ../../node_modules/base16/lib/chalk.js
var require_chalk = __commonJS({
  "../../node_modules/base16/lib/chalk.js"(exports2, module2) {
    "use strict";
    exports2.__esModule = true;
    exports2["default"] = {
      scheme: "chalk",
      author: "chris kempson (http://chriskempson.com)",
      base00: "#151515",
      base01: "#202020",
      base02: "#303030",
      base03: "#505050",
      base04: "#b0b0b0",
      base05: "#d0d0d0",
      base06: "#e0e0e0",
      base07: "#f5f5f5",
      base08: "#fb9fb1",
      base09: "#eda987",
      base0A: "#ddb26f",
      base0B: "#acc267",
      base0C: "#12cfc0",
      base0D: "#6fc2ef",
      base0E: "#e1a3ee",
      base0F: "#deaf8f"
    };
    module2.exports = exports2["default"];
  }
});

// ../../node_modules/base16/lib/codeschool.js
var require_codeschool = __commonJS({
  "../../node_modules/base16/lib/codeschool.js"(exports2, module2) {
    "use strict";
    exports2.__esModule = true;
    exports2["default"] = {
      scheme: "codeschool",
      author: "brettof86",
      base00: "#232c31",
      base01: "#1c3657",
      base02: "#2a343a",
      base03: "#3f4944",
      base04: "#84898c",
      base05: "#9ea7a6",
      base06: "#a7cfa3",
      base07: "#b5d8f6",
      base08: "#2a5491",
      base09: "#43820d",
      base0A: "#a03b1e",
      base0B: "#237986",
      base0C: "#b02f30",
      base0D: "#484d79",
      base0E: "#c59820",
      base0F: "#c98344"
    };
    module2.exports = exports2["default"];
  }
});

// ../../node_modules/base16/lib/colors.js
var require_colors = __commonJS({
  "../../node_modules/base16/lib/colors.js"(exports2, module2) {
    "use strict";
    exports2.__esModule = true;
    exports2["default"] = {
      scheme: "colors",
      author: "mrmrs (http://clrs.cc)",
      base00: "#111111",
      base01: "#333333",
      base02: "#555555",
      base03: "#777777",
      base04: "#999999",
      base05: "#bbbbbb",
      base06: "#dddddd",
      base07: "#ffffff",
      base08: "#ff4136",
      base09: "#ff851b",
      base0A: "#ffdc00",
      base0B: "#2ecc40",
      base0C: "#7fdbff",
      base0D: "#0074d9",
      base0E: "#b10dc9",
      base0F: "#85144b"
    };
    module2.exports = exports2["default"];
  }
});

// ../../node_modules/base16/lib/default.js
var require_default = __commonJS({
  "../../node_modules/base16/lib/default.js"(exports2, module2) {
    "use strict";
    exports2.__esModule = true;
    exports2["default"] = {
      scheme: "default",
      author: "chris kempson (http://chriskempson.com)",
      base00: "#181818",
      base01: "#282828",
      base02: "#383838",
      base03: "#585858",
      base04: "#b8b8b8",
      base05: "#d8d8d8",
      base06: "#e8e8e8",
      base07: "#f8f8f8",
      base08: "#ab4642",
      base09: "#dc9656",
      base0A: "#f7ca88",
      base0B: "#a1b56c",
      base0C: "#86c1b9",
      base0D: "#7cafc2",
      base0E: "#ba8baf",
      base0F: "#a16946"
    };
    module2.exports = exports2["default"];
  }
});

// ../../node_modules/base16/lib/eighties.js
var require_eighties = __commonJS({
  "../../node_modules/base16/lib/eighties.js"(exports2, module2) {
    "use strict";
    exports2.__esModule = true;
    exports2["default"] = {
      scheme: "eighties",
      author: "chris kempson (http://chriskempson.com)",
      base00: "#2d2d2d",
      base01: "#393939",
      base02: "#515151",
      base03: "#747369",
      base04: "#a09f93",
      base05: "#d3d0c8",
      base06: "#e8e6df",
      base07: "#f2f0ec",
      base08: "#f2777a",
      base09: "#f99157",
      base0A: "#ffcc66",
      base0B: "#99cc99",
      base0C: "#66cccc",
      base0D: "#6699cc",
      base0E: "#cc99cc",
      base0F: "#d27b53"
    };
    module2.exports = exports2["default"];
  }
});

// ../../node_modules/base16/lib/embers.js
var require_embers = __commonJS({
  "../../node_modules/base16/lib/embers.js"(exports2, module2) {
    "use strict";
    exports2.__esModule = true;
    exports2["default"] = {
      scheme: "embers",
      author: "jannik siebert (https://github.com/janniks)",
      base00: "#16130F",
      base01: "#2C2620",
      base02: "#433B32",
      base03: "#5A5047",
      base04: "#8A8075",
      base05: "#A39A90",
      base06: "#BEB6AE",
      base07: "#DBD6D1",
      base08: "#826D57",
      base09: "#828257",
      base0A: "#6D8257",
      base0B: "#57826D",
      base0C: "#576D82",
      base0D: "#6D5782",
      base0E: "#82576D",
      base0F: "#825757"
    };
    module2.exports = exports2["default"];
  }
});

// ../../node_modules/base16/lib/flat.js
var require_flat = __commonJS({
  "../../node_modules/base16/lib/flat.js"(exports2, module2) {
    "use strict";
    exports2.__esModule = true;
    exports2["default"] = {
      scheme: "flat",
      author: "chris kempson (http://chriskempson.com)",
      base00: "#2C3E50",
      base01: "#34495E",
      base02: "#7F8C8D",
      base03: "#95A5A6",
      base04: "#BDC3C7",
      base05: "#e0e0e0",
      base06: "#f5f5f5",
      base07: "#ECF0F1",
      base08: "#E74C3C",
      base09: "#E67E22",
      base0A: "#F1C40F",
      base0B: "#2ECC71",
      base0C: "#1ABC9C",
      base0D: "#3498DB",
      base0E: "#9B59B6",
      base0F: "#be643c"
    };
    module2.exports = exports2["default"];
  }
});

// ../../node_modules/base16/lib/google.js
var require_google = __commonJS({
  "../../node_modules/base16/lib/google.js"(exports2, module2) {
    "use strict";
    exports2.__esModule = true;
    exports2["default"] = {
      scheme: "google",
      author: "seth wright (http://sethawright.com)",
      base00: "#1d1f21",
      base01: "#282a2e",
      base02: "#373b41",
      base03: "#969896",
      base04: "#b4b7b4",
      base05: "#c5c8c6",
      base06: "#e0e0e0",
      base07: "#ffffff",
      base08: "#CC342B",
      base09: "#F96A38",
      base0A: "#FBA922",
      base0B: "#198844",
      base0C: "#3971ED",
      base0D: "#3971ED",
      base0E: "#A36AC7",
      base0F: "#3971ED"
    };
    module2.exports = exports2["default"];
  }
});

// ../../node_modules/base16/lib/grayscale.js
var require_grayscale = __commonJS({
  "../../node_modules/base16/lib/grayscale.js"(exports2, module2) {
    "use strict";
    exports2.__esModule = true;
    exports2["default"] = {
      scheme: "grayscale",
      author: "alexandre gavioli (https://github.com/alexx2/)",
      base00: "#101010",
      base01: "#252525",
      base02: "#464646",
      base03: "#525252",
      base04: "#ababab",
      base05: "#b9b9b9",
      base06: "#e3e3e3",
      base07: "#f7f7f7",
      base08: "#7c7c7c",
      base09: "#999999",
      base0A: "#a0a0a0",
      base0B: "#8e8e8e",
      base0C: "#868686",
      base0D: "#686868",
      base0E: "#747474",
      base0F: "#5e5e5e"
    };
    module2.exports = exports2["default"];
  }
});

// ../../node_modules/base16/lib/greenscreen.js
var require_greenscreen = __commonJS({
  "../../node_modules/base16/lib/greenscreen.js"(exports2, module2) {
    "use strict";
    exports2.__esModule = true;
    exports2["default"] = {
      scheme: "green screen",
      author: "chris kempson (http://chriskempson.com)",
      base00: "#001100",
      base01: "#003300",
      base02: "#005500",
      base03: "#007700",
      base04: "#009900",
      base05: "#00bb00",
      base06: "#00dd00",
      base07: "#00ff00",
      base08: "#007700",
      base09: "#009900",
      base0A: "#007700",
      base0B: "#00bb00",
      base0C: "#005500",
      base0D: "#009900",
      base0E: "#00bb00",
      base0F: "#005500"
    };
    module2.exports = exports2["default"];
  }
});

// ../../node_modules/base16/lib/harmonic.js
var require_harmonic = __commonJS({
  "../../node_modules/base16/lib/harmonic.js"(exports2, module2) {
    "use strict";
    exports2.__esModule = true;
    exports2["default"] = {
      scheme: "harmonic16",
      author: "jannik siebert (https://github.com/janniks)",
      base00: "#0b1c2c",
      base01: "#223b54",
      base02: "#405c79",
      base03: "#627e99",
      base04: "#aabcce",
      base05: "#cbd6e2",
      base06: "#e5ebf1",
      base07: "#f7f9fb",
      base08: "#bf8b56",
      base09: "#bfbf56",
      base0A: "#8bbf56",
      base0B: "#56bf8b",
      base0C: "#568bbf",
      base0D: "#8b56bf",
      base0E: "#bf568b",
      base0F: "#bf5656"
    };
    module2.exports = exports2["default"];
  }
});

// ../../node_modules/base16/lib/hopscotch.js
var require_hopscotch = __commonJS({
  "../../node_modules/base16/lib/hopscotch.js"(exports2, module2) {
    "use strict";
    exports2.__esModule = true;
    exports2["default"] = {
      scheme: "hopscotch",
      author: "jan t. sott",
      base00: "#322931",
      base01: "#433b42",
      base02: "#5c545b",
      base03: "#797379",
      base04: "#989498",
      base05: "#b9b5b8",
      base06: "#d5d3d5",
      base07: "#ffffff",
      base08: "#dd464c",
      base09: "#fd8b19",
      base0A: "#fdcc59",
      base0B: "#8fc13e",
      base0C: "#149b93",
      base0D: "#1290bf",
      base0E: "#c85e7c",
      base0F: "#b33508"
    };
    module2.exports = exports2["default"];
  }
});

// ../../node_modules/base16/lib/isotope.js
var require_isotope = __commonJS({
  "../../node_modules/base16/lib/isotope.js"(exports2, module2) {
    "use strict";
    exports2.__esModule = true;
    exports2["default"] = {
      scheme: "isotope",
      author: "jan t. sott",
      base00: "#000000",
      base01: "#404040",
      base02: "#606060",
      base03: "#808080",
      base04: "#c0c0c0",
      base05: "#d0d0d0",
      base06: "#e0e0e0",
      base07: "#ffffff",
      base08: "#ff0000",
      base09: "#ff9900",
      base0A: "#ff0099",
      base0B: "#33ff00",
      base0C: "#00ffff",
      base0D: "#0066ff",
      base0E: "#cc00ff",
      base0F: "#3300ff"
    };
    module2.exports = exports2["default"];
  }
});

// ../../node_modules/base16/lib/marrakesh.js
var require_marrakesh = __commonJS({
  "../../node_modules/base16/lib/marrakesh.js"(exports2, module2) {
    "use strict";
    exports2.__esModule = true;
    exports2["default"] = {
      scheme: "marrakesh",
      author: "alexandre gavioli (http://github.com/alexx2/)",
      base00: "#201602",
      base01: "#302e00",
      base02: "#5f5b17",
      base03: "#6c6823",
      base04: "#86813b",
      base05: "#948e48",
      base06: "#ccc37a",
      base07: "#faf0a5",
      base08: "#c35359",
      base09: "#b36144",
      base0A: "#a88339",
      base0B: "#18974e",
      base0C: "#75a738",
      base0D: "#477ca1",
      base0E: "#8868b3",
      base0F: "#b3588e"
    };
    module2.exports = exports2["default"];
  }
});

// ../../node_modules/base16/lib/mocha.js
var require_mocha = __commonJS({
  "../../node_modules/base16/lib/mocha.js"(exports2, module2) {
    "use strict";
    exports2.__esModule = true;
    exports2["default"] = {
      scheme: "mocha",
      author: "chris kempson (http://chriskempson.com)",
      base00: "#3B3228",
      base01: "#534636",
      base02: "#645240",
      base03: "#7e705a",
      base04: "#b8afad",
      base05: "#d0c8c6",
      base06: "#e9e1dd",
      base07: "#f5eeeb",
      base08: "#cb6077",
      base09: "#d28b71",
      base0A: "#f4bc87",
      base0B: "#beb55b",
      base0C: "#7bbda4",
      base0D: "#8ab3b5",
      base0E: "#a89bb9",
      base0F: "#bb9584"
    };
    module2.exports = exports2["default"];
  }
});

// ../../node_modules/base16/lib/monokai.js
var require_monokai = __commonJS({
  "../../node_modules/base16/lib/monokai.js"(exports2, module2) {
    "use strict";
    exports2.__esModule = true;
    exports2["default"] = {
      scheme: "monokai",
      author: "wimer hazenberg (http://www.monokai.nl)",
      base00: "#272822",
      base01: "#383830",
      base02: "#49483e",
      base03: "#75715e",
      base04: "#a59f85",
      base05: "#f8f8f2",
      base06: "#f5f4f1",
      base07: "#f9f8f5",
      base08: "#f92672",
      base09: "#fd971f",
      base0A: "#f4bf75",
      base0B: "#a6e22e",
      base0C: "#a1efe4",
      base0D: "#66d9ef",
      base0E: "#ae81ff",
      base0F: "#cc6633"
    };
    module2.exports = exports2["default"];
  }
});

// ../../node_modules/base16/lib/ocean.js
var require_ocean = __commonJS({
  "../../node_modules/base16/lib/ocean.js"(exports2, module2) {
    "use strict";
    exports2.__esModule = true;
    exports2["default"] = {
      scheme: "ocean",
      author: "chris kempson (http://chriskempson.com)",
      base00: "#2b303b",
      base01: "#343d46",
      base02: "#4f5b66",
      base03: "#65737e",
      base04: "#a7adba",
      base05: "#c0c5ce",
      base06: "#dfe1e8",
      base07: "#eff1f5",
      base08: "#bf616a",
      base09: "#d08770",
      base0A: "#ebcb8b",
      base0B: "#a3be8c",
      base0C: "#96b5b4",
      base0D: "#8fa1b3",
      base0E: "#b48ead",
      base0F: "#ab7967"
    };
    module2.exports = exports2["default"];
  }
});

// ../../node_modules/base16/lib/paraiso.js
var require_paraiso = __commonJS({
  "../../node_modules/base16/lib/paraiso.js"(exports2, module2) {
    "use strict";
    exports2.__esModule = true;
    exports2["default"] = {
      scheme: "paraiso",
      author: "jan t. sott",
      base00: "#2f1e2e",
      base01: "#41323f",
      base02: "#4f424c",
      base03: "#776e71",
      base04: "#8d8687",
      base05: "#a39e9b",
      base06: "#b9b6b0",
      base07: "#e7e9db",
      base08: "#ef6155",
      base09: "#f99b15",
      base0A: "#fec418",
      base0B: "#48b685",
      base0C: "#5bc4bf",
      base0D: "#06b6ef",
      base0E: "#815ba4",
      base0F: "#e96ba8"
    };
    module2.exports = exports2["default"];
  }
});

// ../../node_modules/base16/lib/pop.js
var require_pop = __commonJS({
  "../../node_modules/base16/lib/pop.js"(exports2, module2) {
    "use strict";
    exports2.__esModule = true;
    exports2["default"] = {
      scheme: "pop",
      author: "chris kempson (http://chriskempson.com)",
      base00: "#000000",
      base01: "#202020",
      base02: "#303030",
      base03: "#505050",
      base04: "#b0b0b0",
      base05: "#d0d0d0",
      base06: "#e0e0e0",
      base07: "#ffffff",
      base08: "#eb008a",
      base09: "#f29333",
      base0A: "#f8ca12",
      base0B: "#37b349",
      base0C: "#00aabb",
      base0D: "#0e5a94",
      base0E: "#b31e8d",
      base0F: "#7a2d00"
    };
    module2.exports = exports2["default"];
  }
});

// ../../node_modules/base16/lib/railscasts.js
var require_railscasts = __commonJS({
  "../../node_modules/base16/lib/railscasts.js"(exports2, module2) {
    "use strict";
    exports2.__esModule = true;
    exports2["default"] = {
      scheme: "railscasts",
      author: "ryan bates (http://railscasts.com)",
      base00: "#2b2b2b",
      base01: "#272935",
      base02: "#3a4055",
      base03: "#5a647e",
      base04: "#d4cfc9",
      base05: "#e6e1dc",
      base06: "#f4f1ed",
      base07: "#f9f7f3",
      base08: "#da4939",
      base09: "#cc7833",
      base0A: "#ffc66d",
      base0B: "#a5c261",
      base0C: "#519f50",
      base0D: "#6d9cbe",
      base0E: "#b6b3eb",
      base0F: "#bc9458"
    };
    module2.exports = exports2["default"];
  }
});

// ../../node_modules/base16/lib/shapeshifter.js
var require_shapeshifter = __commonJS({
  "../../node_modules/base16/lib/shapeshifter.js"(exports2, module2) {
    "use strict";
    exports2.__esModule = true;
    exports2["default"] = {
      scheme: "shapeshifter",
      author: "tyler benziger (http://tybenz.com)",
      base00: "#000000",
      base01: "#040404",
      base02: "#102015",
      base03: "#343434",
      base04: "#555555",
      base05: "#ababab",
      base06: "#e0e0e0",
      base07: "#f9f9f9",
      base08: "#e92f2f",
      base09: "#e09448",
      base0A: "#dddd13",
      base0B: "#0ed839",
      base0C: "#23edda",
      base0D: "#3b48e3",
      base0E: "#f996e2",
      base0F: "#69542d"
    };
    module2.exports = exports2["default"];
  }
});

// ../../node_modules/base16/lib/solarized.js
var require_solarized = __commonJS({
  "../../node_modules/base16/lib/solarized.js"(exports2, module2) {
    "use strict";
    exports2.__esModule = true;
    exports2["default"] = {
      scheme: "solarized",
      author: "ethan schoonover (http://ethanschoonover.com/solarized)",
      base00: "#002b36",
      base01: "#073642",
      base02: "#586e75",
      base03: "#657b83",
      base04: "#839496",
      base05: "#93a1a1",
      base06: "#eee8d5",
      base07: "#fdf6e3",
      base08: "#dc322f",
      base09: "#cb4b16",
      base0A: "#b58900",
      base0B: "#859900",
      base0C: "#2aa198",
      base0D: "#268bd2",
      base0E: "#6c71c4",
      base0F: "#d33682"
    };
    module2.exports = exports2["default"];
  }
});

// ../../node_modules/base16/lib/summerfruit.js
var require_summerfruit = __commonJS({
  "../../node_modules/base16/lib/summerfruit.js"(exports2, module2) {
    "use strict";
    exports2.__esModule = true;
    exports2["default"] = {
      scheme: "summerfruit",
      author: "christopher corley (http://cscorley.github.io/)",
      base00: "#151515",
      base01: "#202020",
      base02: "#303030",
      base03: "#505050",
      base04: "#B0B0B0",
      base05: "#D0D0D0",
      base06: "#E0E0E0",
      base07: "#FFFFFF",
      base08: "#FF0086",
      base09: "#FD8900",
      base0A: "#ABA800",
      base0B: "#00C918",
      base0C: "#1faaaa",
      base0D: "#3777E6",
      base0E: "#AD00A1",
      base0F: "#cc6633"
    };
    module2.exports = exports2["default"];
  }
});

// ../../node_modules/base16/lib/tomorrow.js
var require_tomorrow = __commonJS({
  "../../node_modules/base16/lib/tomorrow.js"(exports2, module2) {
    "use strict";
    exports2.__esModule = true;
    exports2["default"] = {
      scheme: "tomorrow",
      author: "chris kempson (http://chriskempson.com)",
      base00: "#1d1f21",
      base01: "#282a2e",
      base02: "#373b41",
      base03: "#969896",
      base04: "#b4b7b4",
      base05: "#c5c8c6",
      base06: "#e0e0e0",
      base07: "#ffffff",
      base08: "#cc6666",
      base09: "#de935f",
      base0A: "#f0c674",
      base0B: "#b5bd68",
      base0C: "#8abeb7",
      base0D: "#81a2be",
      base0E: "#b294bb",
      base0F: "#a3685a"
    };
    module2.exports = exports2["default"];
  }
});

// ../../node_modules/base16/lib/tube.js
var require_tube = __commonJS({
  "../../node_modules/base16/lib/tube.js"(exports2, module2) {
    "use strict";
    exports2.__esModule = true;
    exports2["default"] = {
      scheme: "london tube",
      author: "jan t. sott",
      base00: "#231f20",
      base01: "#1c3f95",
      base02: "#5a5758",
      base03: "#737171",
      base04: "#959ca1",
      base05: "#d9d8d8",
      base06: "#e7e7e8",
      base07: "#ffffff",
      base08: "#ee2e24",
      base09: "#f386a1",
      base0A: "#ffd204",
      base0B: "#00853e",
      base0C: "#85cebc",
      base0D: "#009ddc",
      base0E: "#98005d",
      base0F: "#b06110"
    };
    module2.exports = exports2["default"];
  }
});

// ../../node_modules/base16/lib/twilight.js
var require_twilight = __commonJS({
  "../../node_modules/base16/lib/twilight.js"(exports2, module2) {
    "use strict";
    exports2.__esModule = true;
    exports2["default"] = {
      scheme: "twilight",
      author: "david hart (http://hart-dev.com)",
      base00: "#1e1e1e",
      base01: "#323537",
      base02: "#464b50",
      base03: "#5f5a60",
      base04: "#838184",
      base05: "#a7a7a7",
      base06: "#c3c3c3",
      base07: "#ffffff",
      base08: "#cf6a4c",
      base09: "#cda869",
      base0A: "#f9ee98",
      base0B: "#8f9d6a",
      base0C: "#afc4db",
      base0D: "#7587a6",
      base0E: "#9b859d",
      base0F: "#9b703f"
    };
    module2.exports = exports2["default"];
  }
});

// ../../node_modules/base16/lib/index.js
var require_lib2 = __commonJS({
  "../../node_modules/base16/lib/index.js"(exports2) {
    "use strict";
    exports2.__esModule = true;
    function _interopRequire(obj) {
      return obj && obj.__esModule ? obj["default"] : obj;
    }
    var _threezerotwofour = require_threezerotwofour();
    exports2.threezerotwofour = _interopRequire(_threezerotwofour);
    var _apathy = require_apathy();
    exports2.apathy = _interopRequire(_apathy);
    var _ashes = require_ashes();
    exports2.ashes = _interopRequire(_ashes);
    var _atelierDune = require_atelier_dune();
    exports2.atelierDune = _interopRequire(_atelierDune);
    var _atelierForest = require_atelier_forest();
    exports2.atelierForest = _interopRequire(_atelierForest);
    var _atelierHeath = require_atelier_heath();
    exports2.atelierHeath = _interopRequire(_atelierHeath);
    var _atelierLakeside = require_atelier_lakeside();
    exports2.atelierLakeside = _interopRequire(_atelierLakeside);
    var _atelierSeaside = require_atelier_seaside();
    exports2.atelierSeaside = _interopRequire(_atelierSeaside);
    var _bespin = require_bespin();
    exports2.bespin = _interopRequire(_bespin);
    var _brewer = require_brewer();
    exports2.brewer = _interopRequire(_brewer);
    var _bright = require_bright();
    exports2.bright = _interopRequire(_bright);
    var _chalk = require_chalk();
    exports2.chalk = _interopRequire(_chalk);
    var _codeschool = require_codeschool();
    exports2.codeschool = _interopRequire(_codeschool);
    var _colors = require_colors();
    exports2.colors = _interopRequire(_colors);
    var _default = require_default();
    exports2["default"] = _interopRequire(_default);
    var _eighties = require_eighties();
    exports2.eighties = _interopRequire(_eighties);
    var _embers = require_embers();
    exports2.embers = _interopRequire(_embers);
    var _flat = require_flat();
    exports2.flat = _interopRequire(_flat);
    var _google = require_google();
    exports2.google = _interopRequire(_google);
    var _grayscale = require_grayscale();
    exports2.grayscale = _interopRequire(_grayscale);
    var _greenscreen = require_greenscreen();
    exports2.greenscreen = _interopRequire(_greenscreen);
    var _harmonic = require_harmonic();
    exports2.harmonic = _interopRequire(_harmonic);
    var _hopscotch = require_hopscotch();
    exports2.hopscotch = _interopRequire(_hopscotch);
    var _isotope = require_isotope();
    exports2.isotope = _interopRequire(_isotope);
    var _marrakesh = require_marrakesh();
    exports2.marrakesh = _interopRequire(_marrakesh);
    var _mocha = require_mocha();
    exports2.mocha = _interopRequire(_mocha);
    var _monokai = require_monokai();
    exports2.monokai = _interopRequire(_monokai);
    var _ocean = require_ocean();
    exports2.ocean = _interopRequire(_ocean);
    var _paraiso = require_paraiso();
    exports2.paraiso = _interopRequire(_paraiso);
    var _pop = require_pop();
    exports2.pop = _interopRequire(_pop);
    var _railscasts = require_railscasts();
    exports2.railscasts = _interopRequire(_railscasts);
    var _shapeshifter = require_shapeshifter();
    exports2.shapeshifter = _interopRequire(_shapeshifter);
    var _solarized = require_solarized();
    exports2.solarized = _interopRequire(_solarized);
    var _summerfruit = require_summerfruit();
    exports2.summerfruit = _interopRequire(_summerfruit);
    var _tomorrow = require_tomorrow();
    exports2.tomorrow = _interopRequire(_tomorrow);
    var _tube = require_tube();
    exports2.tube = _interopRequire(_tube);
    var _twilight = require_twilight();
    exports2.twilight = _interopRequire(_twilight);
  }
});

// ../../node_modules/color-convert/conversions.js
var require_conversions = __commonJS({
  "../../node_modules/color-convert/conversions.js"(exports2, module2) {
    var cssKeywords = require_color_name();
    var reverseKeywords = {};
    for (key in cssKeywords) {
      if (cssKeywords.hasOwnProperty(key)) {
        reverseKeywords[cssKeywords[key]] = key;
      }
    }
    var key;
    var convert = module2.exports = {
      rgb: { channels: 3, labels: "rgb" },
      hsl: { channels: 3, labels: "hsl" },
      hsv: { channels: 3, labels: "hsv" },
      hwb: { channels: 3, labels: "hwb" },
      cmyk: { channels: 4, labels: "cmyk" },
      xyz: { channels: 3, labels: "xyz" },
      lab: { channels: 3, labels: "lab" },
      lch: { channels: 3, labels: "lch" },
      hex: { channels: 1, labels: ["hex"] },
      keyword: { channels: 1, labels: ["keyword"] },
      ansi16: { channels: 1, labels: ["ansi16"] },
      ansi256: { channels: 1, labels: ["ansi256"] },
      hcg: { channels: 3, labels: ["h", "c", "g"] },
      apple: { channels: 3, labels: ["r16", "g16", "b16"] },
      gray: { channels: 1, labels: ["gray"] }
    };
    for (model in convert) {
      if (convert.hasOwnProperty(model)) {
        if (!("channels" in convert[model])) {
          throw new Error("missing channels property: " + model);
        }
        if (!("labels" in convert[model])) {
          throw new Error("missing channel labels property: " + model);
        }
        if (convert[model].labels.length !== convert[model].channels) {
          throw new Error("channel and label counts mismatch: " + model);
        }
        channels = convert[model].channels;
        labels = convert[model].labels;
        delete convert[model].channels;
        delete convert[model].labels;
        Object.defineProperty(convert[model], "channels", { value: channels });
        Object.defineProperty(convert[model], "labels", { value: labels });
      }
    }
    var channels;
    var labels;
    var model;
    convert.rgb.hsl = function(rgb) {
      var r = rgb[0] / 255;
      var g = rgb[1] / 255;
      var b = rgb[2] / 255;
      var min2 = Math.min(r, g, b);
      var max2 = Math.max(r, g, b);
      var delta = max2 - min2;
      var h;
      var s;
      var l;
      if (max2 === min2) {
        h = 0;
      } else if (r === max2) {
        h = (g - b) / delta;
      } else if (g === max2) {
        h = 2 + (b - r) / delta;
      } else if (b === max2) {
        h = 4 + (r - g) / delta;
      }
      h = Math.min(h * 60, 360);
      if (h < 0) {
        h += 360;
      }
      l = (min2 + max2) / 2;
      if (max2 === min2) {
        s = 0;
      } else if (l <= 0.5) {
        s = delta / (max2 + min2);
      } else {
        s = delta / (2 - max2 - min2);
      }
      return [h, s * 100, l * 100];
    };
    convert.rgb.hsv = function(rgb) {
      var rdif;
      var gdif;
      var bdif;
      var h;
      var s;
      var r = rgb[0] / 255;
      var g = rgb[1] / 255;
      var b = rgb[2] / 255;
      var v = Math.max(r, g, b);
      var diff = v - Math.min(r, g, b);
      var diffc = function(c) {
        return (v - c) / 6 / diff + 1 / 2;
      };
      if (diff === 0) {
        h = s = 0;
      } else {
        s = diff / v;
        rdif = diffc(r);
        gdif = diffc(g);
        bdif = diffc(b);
        if (r === v) {
          h = bdif - gdif;
        } else if (g === v) {
          h = 1 / 3 + rdif - bdif;
        } else if (b === v) {
          h = 2 / 3 + gdif - rdif;
        }
        if (h < 0) {
          h += 1;
        } else if (h > 1) {
          h -= 1;
        }
      }
      return [
        h * 360,
        s * 100,
        v * 100
      ];
    };
    convert.rgb.hwb = function(rgb) {
      var r = rgb[0];
      var g = rgb[1];
      var b = rgb[2];
      var h = convert.rgb.hsl(rgb)[0];
      var w = 1 / 255 * Math.min(r, Math.min(g, b));
      b = 1 - 1 / 255 * Math.max(r, Math.max(g, b));
      return [h, w * 100, b * 100];
    };
    convert.rgb.cmyk = function(rgb) {
      var r = rgb[0] / 255;
      var g = rgb[1] / 255;
      var b = rgb[2] / 255;
      var c;
      var m;
      var y;
      var k;
      k = Math.min(1 - r, 1 - g, 1 - b);
      c = (1 - r - k) / (1 - k) || 0;
      m = (1 - g - k) / (1 - k) || 0;
      y = (1 - b - k) / (1 - k) || 0;
      return [c * 100, m * 100, y * 100, k * 100];
    };
    function comparativeDistance(x, y) {
      return Math.pow(x[0] - y[0], 2) + Math.pow(x[1] - y[1], 2) + Math.pow(x[2] - y[2], 2);
    }
    convert.rgb.keyword = function(rgb) {
      var reversed = reverseKeywords[rgb];
      if (reversed) {
        return reversed;
      }
      var currentClosestDistance = Infinity;
      var currentClosestKeyword;
      for (var keyword in cssKeywords) {
        if (cssKeywords.hasOwnProperty(keyword)) {
          var value = cssKeywords[keyword];
          var distance = comparativeDistance(rgb, value);
          if (distance < currentClosestDistance) {
            currentClosestDistance = distance;
            currentClosestKeyword = keyword;
          }
        }
      }
      return currentClosestKeyword;
    };
    convert.keyword.rgb = function(keyword) {
      return cssKeywords[keyword];
    };
    convert.rgb.xyz = function(rgb) {
      var r = rgb[0] / 255;
      var g = rgb[1] / 255;
      var b = rgb[2] / 255;
      r = r > 0.04045 ? Math.pow((r + 0.055) / 1.055, 2.4) : r / 12.92;
      g = g > 0.04045 ? Math.pow((g + 0.055) / 1.055, 2.4) : g / 12.92;
      b = b > 0.04045 ? Math.pow((b + 0.055) / 1.055, 2.4) : b / 12.92;
      var x = r * 0.4124 + g * 0.3576 + b * 0.1805;
      var y = r * 0.2126 + g * 0.7152 + b * 0.0722;
      var z = r * 0.0193 + g * 0.1192 + b * 0.9505;
      return [x * 100, y * 100, z * 100];
    };
    convert.rgb.lab = function(rgb) {
      var xyz = convert.rgb.xyz(rgb);
      var x = xyz[0];
      var y = xyz[1];
      var z = xyz[2];
      var l;
      var a;
      var b;
      x /= 95.047;
      y /= 100;
      z /= 108.883;
      x = x > 8856e-6 ? Math.pow(x, 1 / 3) : 7.787 * x + 16 / 116;
      y = y > 8856e-6 ? Math.pow(y, 1 / 3) : 7.787 * y + 16 / 116;
      z = z > 8856e-6 ? Math.pow(z, 1 / 3) : 7.787 * z + 16 / 116;
      l = 116 * y - 16;
      a = 500 * (x - y);
      b = 200 * (y - z);
      return [l, a, b];
    };
    convert.hsl.rgb = function(hsl) {
      var h = hsl[0] / 360;
      var s = hsl[1] / 100;
      var l = hsl[2] / 100;
      var t1;
      var t2;
      var t3;
      var rgb;
      var val;
      if (s === 0) {
        val = l * 255;
        return [val, val, val];
      }
      if (l < 0.5) {
        t2 = l * (1 + s);
      } else {
        t2 = l + s - l * s;
      }
      t1 = 2 * l - t2;
      rgb = [0, 0, 0];
      for (var i = 0; i < 3; i++) {
        t3 = h + 1 / 3 * -(i - 1);
        if (t3 < 0) {
          t3++;
        }
        if (t3 > 1) {
          t3--;
        }
        if (6 * t3 < 1) {
          val = t1 + (t2 - t1) * 6 * t3;
        } else if (2 * t3 < 1) {
          val = t2;
        } else if (3 * t3 < 2) {
          val = t1 + (t2 - t1) * (2 / 3 - t3) * 6;
        } else {
          val = t1;
        }
        rgb[i] = val * 255;
      }
      return rgb;
    };
    convert.hsl.hsv = function(hsl) {
      var h = hsl[0];
      var s = hsl[1] / 100;
      var l = hsl[2] / 100;
      var smin = s;
      var lmin = Math.max(l, 0.01);
      var sv;
      var v;
      l *= 2;
      s *= l <= 1 ? l : 2 - l;
      smin *= lmin <= 1 ? lmin : 2 - lmin;
      v = (l + s) / 2;
      sv = l === 0 ? 2 * smin / (lmin + smin) : 2 * s / (l + s);
      return [h, sv * 100, v * 100];
    };
    convert.hsv.rgb = function(hsv) {
      var h = hsv[0] / 60;
      var s = hsv[1] / 100;
      var v = hsv[2] / 100;
      var hi = Math.floor(h) % 6;
      var f = h - Math.floor(h);
      var p2 = 255 * v * (1 - s);
      var q = 255 * v * (1 - s * f);
      var t = 255 * v * (1 - s * (1 - f));
      v *= 255;
      switch (hi) {
        case 0:
          return [v, t, p2];
        case 1:
          return [q, v, p2];
        case 2:
          return [p2, v, t];
        case 3:
          return [p2, q, v];
        case 4:
          return [t, p2, v];
        case 5:
          return [v, p2, q];
      }
    };
    convert.hsv.hsl = function(hsv) {
      var h = hsv[0];
      var s = hsv[1] / 100;
      var v = hsv[2] / 100;
      var vmin = Math.max(v, 0.01);
      var lmin;
      var sl;
      var l;
      l = (2 - s) * v;
      lmin = (2 - s) * vmin;
      sl = s * vmin;
      sl /= lmin <= 1 ? lmin : 2 - lmin;
      sl = sl || 0;
      l /= 2;
      return [h, sl * 100, l * 100];
    };
    convert.hwb.rgb = function(hwb) {
      var h = hwb[0] / 360;
      var wh = hwb[1] / 100;
      var bl = hwb[2] / 100;
      var ratio = wh + bl;
      var i;
      var v;
      var f;
      var n;
      if (ratio > 1) {
        wh /= ratio;
        bl /= ratio;
      }
      i = Math.floor(6 * h);
      v = 1 - bl;
      f = 6 * h - i;
      if ((i & 1) !== 0) {
        f = 1 - f;
      }
      n = wh + f * (v - wh);
      var r;
      var g;
      var b;
      switch (i) {
        default:
        case 6:
        case 0:
          r = v;
          g = n;
          b = wh;
          break;
        case 1:
          r = n;
          g = v;
          b = wh;
          break;
        case 2:
          r = wh;
          g = v;
          b = n;
          break;
        case 3:
          r = wh;
          g = n;
          b = v;
          break;
        case 4:
          r = n;
          g = wh;
          b = v;
          break;
        case 5:
          r = v;
          g = wh;
          b = n;
          break;
      }
      return [r * 255, g * 255, b * 255];
    };
    convert.cmyk.rgb = function(cmyk) {
      var c = cmyk[0] / 100;
      var m = cmyk[1] / 100;
      var y = cmyk[2] / 100;
      var k = cmyk[3] / 100;
      var r;
      var g;
      var b;
      r = 1 - Math.min(1, c * (1 - k) + k);
      g = 1 - Math.min(1, m * (1 - k) + k);
      b = 1 - Math.min(1, y * (1 - k) + k);
      return [r * 255, g * 255, b * 255];
    };
    convert.xyz.rgb = function(xyz) {
      var x = xyz[0] / 100;
      var y = xyz[1] / 100;
      var z = xyz[2] / 100;
      var r;
      var g;
      var b;
      r = x * 3.2406 + y * -1.5372 + z * -0.4986;
      g = x * -0.9689 + y * 1.8758 + z * 0.0415;
      b = x * 0.0557 + y * -0.204 + z * 1.057;
      r = r > 31308e-7 ? 1.055 * Math.pow(r, 1 / 2.4) - 0.055 : r * 12.92;
      g = g > 31308e-7 ? 1.055 * Math.pow(g, 1 / 2.4) - 0.055 : g * 12.92;
      b = b > 31308e-7 ? 1.055 * Math.pow(b, 1 / 2.4) - 0.055 : b * 12.92;
      r = Math.min(Math.max(0, r), 1);
      g = Math.min(Math.max(0, g), 1);
      b = Math.min(Math.max(0, b), 1);
      return [r * 255, g * 255, b * 255];
    };
    convert.xyz.lab = function(xyz) {
      var x = xyz[0];
      var y = xyz[1];
      var z = xyz[2];
      var l;
      var a;
      var b;
      x /= 95.047;
      y /= 100;
      z /= 108.883;
      x = x > 8856e-6 ? Math.pow(x, 1 / 3) : 7.787 * x + 16 / 116;
      y = y > 8856e-6 ? Math.pow(y, 1 / 3) : 7.787 * y + 16 / 116;
      z = z > 8856e-6 ? Math.pow(z, 1 / 3) : 7.787 * z + 16 / 116;
      l = 116 * y - 16;
      a = 500 * (x - y);
      b = 200 * (y - z);
      return [l, a, b];
    };
    convert.lab.xyz = function(lab) {
      var l = lab[0];
      var a = lab[1];
      var b = lab[2];
      var x;
      var y;
      var z;
      y = (l + 16) / 116;
      x = a / 500 + y;
      z = y - b / 200;
      var y2 = Math.pow(y, 3);
      var x2 = Math.pow(x, 3);
      var z2 = Math.pow(z, 3);
      y = y2 > 8856e-6 ? y2 : (y - 16 / 116) / 7.787;
      x = x2 > 8856e-6 ? x2 : (x - 16 / 116) / 7.787;
      z = z2 > 8856e-6 ? z2 : (z - 16 / 116) / 7.787;
      x *= 95.047;
      y *= 100;
      z *= 108.883;
      return [x, y, z];
    };
    convert.lab.lch = function(lab) {
      var l = lab[0];
      var a = lab[1];
      var b = lab[2];
      var hr;
      var h;
      var c;
      hr = Math.atan2(b, a);
      h = hr * 360 / 2 / Math.PI;
      if (h < 0) {
        h += 360;
      }
      c = Math.sqrt(a * a + b * b);
      return [l, c, h];
    };
    convert.lch.lab = function(lch) {
      var l = lch[0];
      var c = lch[1];
      var h = lch[2];
      var a;
      var b;
      var hr;
      hr = h / 360 * 2 * Math.PI;
      a = c * Math.cos(hr);
      b = c * Math.sin(hr);
      return [l, a, b];
    };
    convert.rgb.ansi16 = function(args2) {
      var r = args2[0];
      var g = args2[1];
      var b = args2[2];
      var value = 1 in arguments ? arguments[1] : convert.rgb.hsv(args2)[2];
      value = Math.round(value / 50);
      if (value === 0) {
        return 30;
      }
      var ansi = 30 + (Math.round(b / 255) << 2 | Math.round(g / 255) << 1 | Math.round(r / 255));
      if (value === 2) {
        ansi += 60;
      }
      return ansi;
    };
    convert.hsv.ansi16 = function(args2) {
      return convert.rgb.ansi16(convert.hsv.rgb(args2), args2[2]);
    };
    convert.rgb.ansi256 = function(args2) {
      var r = args2[0];
      var g = args2[1];
      var b = args2[2];
      if (r === g && g === b) {
        if (r < 8) {
          return 16;
        }
        if (r > 248) {
          return 231;
        }
        return Math.round((r - 8) / 247 * 24) + 232;
      }
      var ansi = 16 + 36 * Math.round(r / 255 * 5) + 6 * Math.round(g / 255 * 5) + Math.round(b / 255 * 5);
      return ansi;
    };
    convert.ansi16.rgb = function(args2) {
      var color = args2 % 10;
      if (color === 0 || color === 7) {
        if (args2 > 50) {
          color += 3.5;
        }
        color = color / 10.5 * 255;
        return [color, color, color];
      }
      var mult = (~~(args2 > 50) + 1) * 0.5;
      var r = (color & 1) * mult * 255;
      var g = (color >> 1 & 1) * mult * 255;
      var b = (color >> 2 & 1) * mult * 255;
      return [r, g, b];
    };
    convert.ansi256.rgb = function(args2) {
      if (args2 >= 232) {
        var c = (args2 - 232) * 10 + 8;
        return [c, c, c];
      }
      args2 -= 16;
      var rem;
      var r = Math.floor(args2 / 36) / 5 * 255;
      var g = Math.floor((rem = args2 % 36) / 6) / 5 * 255;
      var b = rem % 6 / 5 * 255;
      return [r, g, b];
    };
    convert.rgb.hex = function(args2) {
      var integer = ((Math.round(args2[0]) & 255) << 16) + ((Math.round(args2[1]) & 255) << 8) + (Math.round(args2[2]) & 255);
      var string = integer.toString(16).toUpperCase();
      return "000000".substring(string.length) + string;
    };
    convert.hex.rgb = function(args2) {
      var match = args2.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);
      if (!match) {
        return [0, 0, 0];
      }
      var colorString = match[0];
      if (match[0].length === 3) {
        colorString = colorString.split("").map(function(char) {
          return char + char;
        }).join("");
      }
      var integer = parseInt(colorString, 16);
      var r = integer >> 16 & 255;
      var g = integer >> 8 & 255;
      var b = integer & 255;
      return [r, g, b];
    };
    convert.rgb.hcg = function(rgb) {
      var r = rgb[0] / 255;
      var g = rgb[1] / 255;
      var b = rgb[2] / 255;
      var max2 = Math.max(Math.max(r, g), b);
      var min2 = Math.min(Math.min(r, g), b);
      var chroma = max2 - min2;
      var grayscale;
      var hue;
      if (chroma < 1) {
        grayscale = min2 / (1 - chroma);
      } else {
        grayscale = 0;
      }
      if (chroma <= 0) {
        hue = 0;
      } else if (max2 === r) {
        hue = (g - b) / chroma % 6;
      } else if (max2 === g) {
        hue = 2 + (b - r) / chroma;
      } else {
        hue = 4 + (r - g) / chroma + 4;
      }
      hue /= 6;
      hue %= 1;
      return [hue * 360, chroma * 100, grayscale * 100];
    };
    convert.hsl.hcg = function(hsl) {
      var s = hsl[1] / 100;
      var l = hsl[2] / 100;
      var c = 1;
      var f = 0;
      if (l < 0.5) {
        c = 2 * s * l;
      } else {
        c = 2 * s * (1 - l);
      }
      if (c < 1) {
        f = (l - 0.5 * c) / (1 - c);
      }
      return [hsl[0], c * 100, f * 100];
    };
    convert.hsv.hcg = function(hsv) {
      var s = hsv[1] / 100;
      var v = hsv[2] / 100;
      var c = s * v;
      var f = 0;
      if (c < 1) {
        f = (v - c) / (1 - c);
      }
      return [hsv[0], c * 100, f * 100];
    };
    convert.hcg.rgb = function(hcg) {
      var h = hcg[0] / 360;
      var c = hcg[1] / 100;
      var g = hcg[2] / 100;
      if (c === 0) {
        return [g * 255, g * 255, g * 255];
      }
      var pure = [0, 0, 0];
      var hi = h % 1 * 6;
      var v = hi % 1;
      var w = 1 - v;
      var mg = 0;
      switch (Math.floor(hi)) {
        case 0:
          pure[0] = 1;
          pure[1] = v;
          pure[2] = 0;
          break;
        case 1:
          pure[0] = w;
          pure[1] = 1;
          pure[2] = 0;
          break;
        case 2:
          pure[0] = 0;
          pure[1] = 1;
          pure[2] = v;
          break;
        case 3:
          pure[0] = 0;
          pure[1] = w;
          pure[2] = 1;
          break;
        case 4:
          pure[0] = v;
          pure[1] = 0;
          pure[2] = 1;
          break;
        default:
          pure[0] = 1;
          pure[1] = 0;
          pure[2] = w;
      }
      mg = (1 - c) * g;
      return [
        (c * pure[0] + mg) * 255,
        (c * pure[1] + mg) * 255,
        (c * pure[2] + mg) * 255
      ];
    };
    convert.hcg.hsv = function(hcg) {
      var c = hcg[1] / 100;
      var g = hcg[2] / 100;
      var v = c + g * (1 - c);
      var f = 0;
      if (v > 0) {
        f = c / v;
      }
      return [hcg[0], f * 100, v * 100];
    };
    convert.hcg.hsl = function(hcg) {
      var c = hcg[1] / 100;
      var g = hcg[2] / 100;
      var l = g * (1 - c) + 0.5 * c;
      var s = 0;
      if (l > 0 && l < 0.5) {
        s = c / (2 * l);
      } else if (l >= 0.5 && l < 1) {
        s = c / (2 * (1 - l));
      }
      return [hcg[0], s * 100, l * 100];
    };
    convert.hcg.hwb = function(hcg) {
      var c = hcg[1] / 100;
      var g = hcg[2] / 100;
      var v = c + g * (1 - c);
      return [hcg[0], (v - c) * 100, (1 - v) * 100];
    };
    convert.hwb.hcg = function(hwb) {
      var w = hwb[1] / 100;
      var b = hwb[2] / 100;
      var v = 1 - b;
      var c = v - w;
      var g = 0;
      if (c < 1) {
        g = (v - c) / (1 - c);
      }
      return [hwb[0], c * 100, g * 100];
    };
    convert.apple.rgb = function(apple) {
      return [apple[0] / 65535 * 255, apple[1] / 65535 * 255, apple[2] / 65535 * 255];
    };
    convert.rgb.apple = function(rgb) {
      return [rgb[0] / 255 * 65535, rgb[1] / 255 * 65535, rgb[2] / 255 * 65535];
    };
    convert.gray.rgb = function(args2) {
      return [args2[0] / 100 * 255, args2[0] / 100 * 255, args2[0] / 100 * 255];
    };
    convert.gray.hsl = convert.gray.hsv = function(args2) {
      return [0, 0, args2[0]];
    };
    convert.gray.hwb = function(gray) {
      return [0, 100, gray[0]];
    };
    convert.gray.cmyk = function(gray) {
      return [0, 0, 0, gray[0]];
    };
    convert.gray.lab = function(gray) {
      return [gray[0], 0, 0];
    };
    convert.gray.hex = function(gray) {
      var val = Math.round(gray[0] / 100 * 255) & 255;
      var integer = (val << 16) + (val << 8) + val;
      var string = integer.toString(16).toUpperCase();
      return "000000".substring(string.length) + string;
    };
    convert.rgb.gray = function(rgb) {
      var val = (rgb[0] + rgb[1] + rgb[2]) / 3;
      return [val / 255 * 100];
    };
  }
});

// ../../node_modules/color-convert/route.js
var require_route = __commonJS({
  "../../node_modules/color-convert/route.js"(exports2, module2) {
    var conversions = require_conversions();
    function buildGraph() {
      var graph = {};
      var models = Object.keys(conversions);
      for (var len = models.length, i = 0; i < len; i++) {
        graph[models[i]] = {
          // http://jsperf.com/1-vs-infinity
          // micro-opt, but this is simple.
          distance: -1,
          parent: null
        };
      }
      return graph;
    }
    function deriveBFS(fromModel) {
      var graph = buildGraph();
      var queue = [fromModel];
      graph[fromModel].distance = 0;
      while (queue.length) {
        var current = queue.pop();
        var adjacents = Object.keys(conversions[current]);
        for (var len = adjacents.length, i = 0; i < len; i++) {
          var adjacent = adjacents[i];
          var node = graph[adjacent];
          if (node.distance === -1) {
            node.distance = graph[current].distance + 1;
            node.parent = current;
            queue.unshift(adjacent);
          }
        }
      }
      return graph;
    }
    function link(from2, to) {
      return function(args2) {
        return to(from2(args2));
      };
    }
    function wrapConversion(toModel, graph) {
      var path2 = [graph[toModel].parent, toModel];
      var fn = conversions[graph[toModel].parent][toModel];
      var cur = graph[toModel].parent;
      while (graph[cur].parent) {
        path2.unshift(graph[cur].parent);
        fn = link(conversions[graph[cur].parent][cur], fn);
        cur = graph[cur].parent;
      }
      fn.conversion = path2;
      return fn;
    }
    module2.exports = function(fromModel) {
      var graph = deriveBFS(fromModel);
      var conversion = {};
      var models = Object.keys(graph);
      for (var len = models.length, i = 0; i < len; i++) {
        var toModel = models[i];
        var node = graph[toModel];
        if (node.parent === null) {
          continue;
        }
        conversion[toModel] = wrapConversion(toModel, graph);
      }
      return conversion;
    };
  }
});

// ../../node_modules/color-convert/index.js
var require_color_convert = __commonJS({
  "../../node_modules/color-convert/index.js"(exports2, module2) {
    var conversions = require_conversions();
    var route = require_route();
    var convert = {};
    var models = Object.keys(conversions);
    function wrapRaw(fn) {
      var wrappedFn = function(args2) {
        if (args2 === void 0 || args2 === null) {
          return args2;
        }
        if (arguments.length > 1) {
          args2 = Array.prototype.slice.call(arguments);
        }
        return fn(args2);
      };
      if ("conversion" in fn) {
        wrappedFn.conversion = fn.conversion;
      }
      return wrappedFn;
    }
    function wrapRounded(fn) {
      var wrappedFn = function(args2) {
        if (args2 === void 0 || args2 === null) {
          return args2;
        }
        if (arguments.length > 1) {
          args2 = Array.prototype.slice.call(arguments);
        }
        var result = fn(args2);
        if (typeof result === "object") {
          for (var len = result.length, i = 0; i < len; i++) {
            result[i] = Math.round(result[i]);
          }
        }
        return result;
      };
      if ("conversion" in fn) {
        wrappedFn.conversion = fn.conversion;
      }
      return wrappedFn;
    }
    models.forEach(function(fromModel) {
      convert[fromModel] = {};
      Object.defineProperty(convert[fromModel], "channels", { value: conversions[fromModel].channels });
      Object.defineProperty(convert[fromModel], "labels", { value: conversions[fromModel].labels });
      var routes = route(fromModel);
      var routeModels = Object.keys(routes);
      routeModels.forEach(function(toModel) {
        var fn = routes[toModel];
        convert[fromModel][toModel] = wrapRounded(fn);
        convert[fromModel][toModel].raw = wrapRaw(fn);
      });
    });
    module2.exports = convert;
  }
});

// ../../node_modules/react-base16-styling/node_modules/color/index.js
var require_color = __commonJS({
  "../../node_modules/react-base16-styling/node_modules/color/index.js"(exports2, module2) {
    "use strict";
    var colorString = require_color_string();
    var convert = require_color_convert();
    var _slice = [].slice;
    var skippedModels = [
      // to be honest, I don't really feel like keyword belongs in color convert, but eh.
      "keyword",
      // gray conflicts with some method names, and has its own method defined.
      "gray",
      // shouldn't really be in color-convert either...
      "hex"
    ];
    var hashedModelKeys = {};
    Object.keys(convert).forEach(function(model) {
      hashedModelKeys[_slice.call(convert[model].labels).sort().join("")] = model;
    });
    var limiters = {};
    function Color2(obj, model) {
      if (!(this instanceof Color2)) {
        return new Color2(obj, model);
      }
      if (model && model in skippedModels) {
        model = null;
      }
      if (model && !(model in convert)) {
        throw new Error("Unknown model: " + model);
      }
      var i;
      var channels;
      if (obj == null) {
        this.model = "rgb";
        this.color = [0, 0, 0];
        this.valpha = 1;
      } else if (obj instanceof Color2) {
        this.model = obj.model;
        this.color = obj.color.slice();
        this.valpha = obj.valpha;
      } else if (typeof obj === "string") {
        var result = colorString.get(obj);
        if (result === null) {
          throw new Error("Unable to parse color from string: " + obj);
        }
        this.model = result.model;
        channels = convert[this.model].channels;
        this.color = result.value.slice(0, channels);
        this.valpha = typeof result.value[channels] === "number" ? result.value[channels] : 1;
      } else if (obj.length) {
        this.model = model || "rgb";
        channels = convert[this.model].channels;
        var newArr = _slice.call(obj, 0, channels);
        this.color = zeroArray(newArr, channels);
        this.valpha = typeof obj[channels] === "number" ? obj[channels] : 1;
      } else if (typeof obj === "number") {
        obj &= 16777215;
        this.model = "rgb";
        this.color = [
          obj >> 16 & 255,
          obj >> 8 & 255,
          obj & 255
        ];
        this.valpha = 1;
      } else {
        this.valpha = 1;
        var keys2 = Object.keys(obj);
        if ("alpha" in obj) {
          keys2.splice(keys2.indexOf("alpha"), 1);
          this.valpha = typeof obj.alpha === "number" ? obj.alpha : 0;
        }
        var hashedKeys = keys2.sort().join("");
        if (!(hashedKeys in hashedModelKeys)) {
          throw new Error("Unable to parse color from object: " + JSON.stringify(obj));
        }
        this.model = hashedModelKeys[hashedKeys];
        var labels = convert[this.model].labels;
        var color = [];
        for (i = 0; i < labels.length; i++) {
          color.push(obj[labels[i]]);
        }
        this.color = zeroArray(color);
      }
      if (limiters[this.model]) {
        channels = convert[this.model].channels;
        for (i = 0; i < channels; i++) {
          var limit = limiters[this.model][i];
          if (limit) {
            this.color[i] = limit(this.color[i]);
          }
        }
      }
      this.valpha = Math.max(0, Math.min(1, this.valpha));
      if (Object.freeze) {
        Object.freeze(this);
      }
    }
    Color2.prototype = {
      toString: function() {
        return this.string();
      },
      toJSON: function() {
        return this[this.model]();
      },
      string: function(places) {
        var self2 = this.model in colorString.to ? this : this.rgb();
        self2 = self2.round(typeof places === "number" ? places : 1);
        var args2 = self2.valpha === 1 ? self2.color : self2.color.concat(this.valpha);
        return colorString.to[self2.model](args2);
      },
      percentString: function(places) {
        var self2 = this.rgb().round(typeof places === "number" ? places : 1);
        var args2 = self2.valpha === 1 ? self2.color : self2.color.concat(this.valpha);
        return colorString.to.rgb.percent(args2);
      },
      array: function() {
        return this.valpha === 1 ? this.color.slice() : this.color.concat(this.valpha);
      },
      object: function() {
        var result = {};
        var channels = convert[this.model].channels;
        var labels = convert[this.model].labels;
        for (var i = 0; i < channels; i++) {
          result[labels[i]] = this.color[i];
        }
        if (this.valpha !== 1) {
          result.alpha = this.valpha;
        }
        return result;
      },
      unitArray: function() {
        var rgb = this.rgb().color;
        rgb[0] /= 255;
        rgb[1] /= 255;
        rgb[2] /= 255;
        if (this.valpha !== 1) {
          rgb.push(this.valpha);
        }
        return rgb;
      },
      unitObject: function() {
        var rgb = this.rgb().object();
        rgb.r /= 255;
        rgb.g /= 255;
        rgb.b /= 255;
        if (this.valpha !== 1) {
          rgb.alpha = this.valpha;
        }
        return rgb;
      },
      round: function(places) {
        places = Math.max(places || 0, 0);
        return new Color2(this.color.map(roundToPlace(places)).concat(this.valpha), this.model);
      },
      alpha: function(val) {
        if (arguments.length) {
          return new Color2(this.color.concat(Math.max(0, Math.min(1, val))), this.model);
        }
        return this.valpha;
      },
      // rgb
      red: getset("rgb", 0, maxfn(255)),
      green: getset("rgb", 1, maxfn(255)),
      blue: getset("rgb", 2, maxfn(255)),
      hue: getset(["hsl", "hsv", "hsl", "hwb", "hcg"], 0, function(val) {
        return (val % 360 + 360) % 360;
      }),
      // eslint-disable-line brace-style
      saturationl: getset("hsl", 1, maxfn(100)),
      lightness: getset("hsl", 2, maxfn(100)),
      saturationv: getset("hsv", 1, maxfn(100)),
      value: getset("hsv", 2, maxfn(100)),
      chroma: getset("hcg", 1, maxfn(100)),
      gray: getset("hcg", 2, maxfn(100)),
      white: getset("hwb", 1, maxfn(100)),
      wblack: getset("hwb", 2, maxfn(100)),
      cyan: getset("cmyk", 0, maxfn(100)),
      magenta: getset("cmyk", 1, maxfn(100)),
      yellow: getset("cmyk", 2, maxfn(100)),
      black: getset("cmyk", 3, maxfn(100)),
      x: getset("xyz", 0, maxfn(100)),
      y: getset("xyz", 1, maxfn(100)),
      z: getset("xyz", 2, maxfn(100)),
      l: getset("lab", 0, maxfn(100)),
      a: getset("lab", 1),
      b: getset("lab", 2),
      keyword: function(val) {
        if (arguments.length) {
          return new Color2(val);
        }
        return convert[this.model].keyword(this.color);
      },
      hex: function(val) {
        if (arguments.length) {
          return new Color2(val);
        }
        return colorString.to.hex(this.rgb().round().color);
      },
      rgbNumber: function() {
        var rgb = this.rgb().color;
        return (rgb[0] & 255) << 16 | (rgb[1] & 255) << 8 | rgb[2] & 255;
      },
      luminosity: function() {
        var rgb = this.rgb().color;
        var lum = [];
        for (var i = 0; i < rgb.length; i++) {
          var chan = rgb[i] / 255;
          lum[i] = chan <= 0.03928 ? chan / 12.92 : Math.pow((chan + 0.055) / 1.055, 2.4);
        }
        return 0.2126 * lum[0] + 0.7152 * lum[1] + 0.0722 * lum[2];
      },
      contrast: function(color2) {
        var lum1 = this.luminosity();
        var lum2 = color2.luminosity();
        if (lum1 > lum2) {
          return (lum1 + 0.05) / (lum2 + 0.05);
        }
        return (lum2 + 0.05) / (lum1 + 0.05);
      },
      level: function(color2) {
        var contrastRatio = this.contrast(color2);
        if (contrastRatio >= 7.1) {
          return "AAA";
        }
        return contrastRatio >= 4.5 ? "AA" : "";
      },
      isDark: function() {
        var rgb = this.rgb().color;
        var yiq = (rgb[0] * 299 + rgb[1] * 587 + rgb[2] * 114) / 1e3;
        return yiq < 128;
      },
      isLight: function() {
        return !this.isDark();
      },
      negate: function() {
        var rgb = this.rgb();
        for (var i = 0; i < 3; i++) {
          rgb.color[i] = 255 - rgb.color[i];
        }
        return rgb;
      },
      lighten: function(ratio) {
        var hsl = this.hsl();
        hsl.color[2] += hsl.color[2] * ratio;
        return hsl;
      },
      darken: function(ratio) {
        var hsl = this.hsl();
        hsl.color[2] -= hsl.color[2] * ratio;
        return hsl;
      },
      saturate: function(ratio) {
        var hsl = this.hsl();
        hsl.color[1] += hsl.color[1] * ratio;
        return hsl;
      },
      desaturate: function(ratio) {
        var hsl = this.hsl();
        hsl.color[1] -= hsl.color[1] * ratio;
        return hsl;
      },
      whiten: function(ratio) {
        var hwb = this.hwb();
        hwb.color[1] += hwb.color[1] * ratio;
        return hwb;
      },
      blacken: function(ratio) {
        var hwb = this.hwb();
        hwb.color[2] += hwb.color[2] * ratio;
        return hwb;
      },
      grayscale: function() {
        var rgb = this.rgb().color;
        var val = rgb[0] * 0.3 + rgb[1] * 0.59 + rgb[2] * 0.11;
        return Color2.rgb(val, val, val);
      },
      fade: function(ratio) {
        return this.alpha(this.valpha - this.valpha * ratio);
      },
      opaquer: function(ratio) {
        return this.alpha(this.valpha + this.valpha * ratio);
      },
      rotate: function(degrees) {
        var hsl = this.hsl();
        var hue = hsl.color[0];
        hue = (hue + degrees) % 360;
        hue = hue < 0 ? 360 + hue : hue;
        hsl.color[0] = hue;
        return hsl;
      },
      mix: function(mixinColor, weight) {
        if (!mixinColor || !mixinColor.rgb) {
          throw new Error('Argument to "mix" was not a Color instance, but rather an instance of ' + typeof mixinColor);
        }
        var color1 = mixinColor.rgb();
        var color2 = this.rgb();
        var p2 = weight === void 0 ? 0.5 : weight;
        var w = 2 * p2 - 1;
        var a = color1.alpha() - color2.alpha();
        var w1 = ((w * a === -1 ? w : (w + a) / (1 + w * a)) + 1) / 2;
        var w2 = 1 - w1;
        return Color2.rgb(
          w1 * color1.red() + w2 * color2.red(),
          w1 * color1.green() + w2 * color2.green(),
          w1 * color1.blue() + w2 * color2.blue(),
          color1.alpha() * p2 + color2.alpha() * (1 - p2)
        );
      }
    };
    Object.keys(convert).forEach(function(model) {
      if (skippedModels.indexOf(model) !== -1) {
        return;
      }
      var channels = convert[model].channels;
      Color2.prototype[model] = function() {
        if (this.model === model) {
          return new Color2(this);
        }
        if (arguments.length) {
          return new Color2(arguments, model);
        }
        var newAlpha = typeof arguments[channels] === "number" ? channels : this.valpha;
        return new Color2(assertArray(convert[this.model][model].raw(this.color)).concat(newAlpha), model);
      };
      Color2[model] = function(color) {
        if (typeof color === "number") {
          color = zeroArray(_slice.call(arguments), channels);
        }
        return new Color2(color, model);
      };
    });
    function roundTo(num, places) {
      return Number(num.toFixed(places));
    }
    function roundToPlace(places) {
      return function(num) {
        return roundTo(num, places);
      };
    }
    function getset(model, channel, modifier) {
      model = Array.isArray(model) ? model : [model];
      model.forEach(function(m) {
        (limiters[m] || (limiters[m] = []))[channel] = modifier;
      });
      model = model[0];
      return function(val) {
        var result;
        if (arguments.length) {
          if (modifier) {
            val = modifier(val);
          }
          result = this[model]();
          result.color[channel] = val;
          return result;
        }
        result = this[model]().color[channel];
        if (modifier) {
          result = modifier(result);
        }
        return result;
      };
    }
    function maxfn(max2) {
      return function(v) {
        return Math.max(0, Math.min(max2, v));
      };
    }
    function assertArray(val) {
      return Array.isArray(val) ? val : [val];
    }
    function zeroArray(arr, length3) {
      for (var i = 0; i < length3; i++) {
        if (typeof arr[i] !== "number") {
          arr[i] = 0;
        }
      }
      return arr;
    }
    module2.exports = Color2;
  }
});

// ../../node_modules/lodash.curry/index.js
var require_lodash = __commonJS({
  "../../node_modules/lodash.curry/index.js"(exports2, module2) {
    var FUNC_ERROR_TEXT = "Expected a function";
    var PLACEHOLDER = "__lodash_placeholder__";
    var BIND_FLAG = 1;
    var BIND_KEY_FLAG = 2;
    var CURRY_BOUND_FLAG = 4;
    var CURRY_FLAG = 8;
    var CURRY_RIGHT_FLAG = 16;
    var PARTIAL_FLAG = 32;
    var PARTIAL_RIGHT_FLAG = 64;
    var ARY_FLAG = 128;
    var REARG_FLAG = 256;
    var FLIP_FLAG = 512;
    var INFINITY = 1 / 0;
    var MAX_SAFE_INTEGER2 = 9007199254740991;
    var MAX_INTEGER = 17976931348623157e292;
    var NAN = 0 / 0;
    var wrapFlags = [
      ["ary", ARY_FLAG],
      ["bind", BIND_FLAG],
      ["bindKey", BIND_KEY_FLAG],
      ["curry", CURRY_FLAG],
      ["curryRight", CURRY_RIGHT_FLAG],
      ["flip", FLIP_FLAG],
      ["partial", PARTIAL_FLAG],
      ["partialRight", PARTIAL_RIGHT_FLAG],
      ["rearg", REARG_FLAG]
    ];
    var funcTag = "[object Function]";
    var genTag = "[object GeneratorFunction]";
    var symbolTag = "[object Symbol]";
    var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
    var reTrim = /^\s+|\s+$/g;
    var reWrapComment = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/;
    var reWrapDetails = /\{\n\/\* \[wrapped with (.+)\] \*/;
    var reSplitDetails = /,? & /;
    var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
    var reIsBinary = /^0b[01]+$/i;
    var reIsHostCtor = /^\[object .+?Constructor\]$/;
    var reIsOctal = /^0o[0-7]+$/i;
    var reIsUint = /^(?:0|[1-9]\d*)$/;
    var freeParseInt = parseInt;
    var freeGlobal = typeof globalThis == "object" && globalThis && globalThis.Object === Object && globalThis;
    var freeSelf = typeof self == "object" && self && self.Object === Object && self;
    var root = freeGlobal || freeSelf || Function("return this")();
    function apply(func, thisArg, args2) {
      switch (args2.length) {
        case 0:
          return func.call(thisArg);
        case 1:
          return func.call(thisArg, args2[0]);
        case 2:
          return func.call(thisArg, args2[0], args2[1]);
        case 3:
          return func.call(thisArg, args2[0], args2[1], args2[2]);
      }
      return func.apply(thisArg, args2);
    }
    function arrayEach(array, iteratee) {
      var index = -1, length3 = array ? array.length : 0;
      while (++index < length3) {
        if (iteratee(array[index], index, array) === false) {
          break;
        }
      }
      return array;
    }
    function arrayIncludes(array, value) {
      var length3 = array ? array.length : 0;
      return !!length3 && baseIndexOf(array, value, 0) > -1;
    }
    function baseFindIndex(array, predicate, fromIndex, fromRight) {
      var length3 = array.length, index = fromIndex + (fromRight ? 1 : -1);
      while (fromRight ? index-- : ++index < length3) {
        if (predicate(array[index], index, array)) {
          return index;
        }
      }
      return -1;
    }
    function baseIndexOf(array, value, fromIndex) {
      if (value !== value) {
        return baseFindIndex(array, baseIsNaN, fromIndex);
      }
      var index = fromIndex - 1, length3 = array.length;
      while (++index < length3) {
        if (array[index] === value) {
          return index;
        }
      }
      return -1;
    }
    function baseIsNaN(value) {
      return value !== value;
    }
    function countHolders(array, placeholder) {
      var length3 = array.length, result = 0;
      while (length3--) {
        if (array[length3] === placeholder) {
          result++;
        }
      }
      return result;
    }
    function getValue(object, key) {
      return object == null ? void 0 : object[key];
    }
    function isHostObject(value) {
      var result = false;
      if (value != null && typeof value.toString != "function") {
        try {
          result = !!(value + "");
        } catch (e) {
        }
      }
      return result;
    }
    function replaceHolders(array, placeholder) {
      var index = -1, length3 = array.length, resIndex = 0, result = [];
      while (++index < length3) {
        var value = array[index];
        if (value === placeholder || value === PLACEHOLDER) {
          array[index] = PLACEHOLDER;
          result[resIndex++] = index;
        }
      }
      return result;
    }
    var funcProto = Function.prototype;
    var objectProto = Object.prototype;
    var coreJsData = root["__core-js_shared__"];
    var maskSrcKey = function() {
      var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || "");
      return uid ? "Symbol(src)_1." + uid : "";
    }();
    var funcToString = funcProto.toString;
    var hasOwnProperty = objectProto.hasOwnProperty;
    var objectToString = objectProto.toString;
    var reIsNative = RegExp(
      "^" + funcToString.call(hasOwnProperty).replace(reRegExpChar, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
    );
    var objectCreate = Object.create;
    var nativeMax = Math.max;
    var nativeMin = Math.min;
    var defineProperty = function() {
      var func = getNative(Object, "defineProperty"), name2 = getNative.name;
      return name2 && name2.length > 2 ? func : void 0;
    }();
    function baseCreate(proto) {
      return isObject(proto) ? objectCreate(proto) : {};
    }
    function baseIsNative(value) {
      if (!isObject(value) || isMasked(value)) {
        return false;
      }
      var pattern = isFunction(value) || isHostObject(value) ? reIsNative : reIsHostCtor;
      return pattern.test(toSource(value));
    }
    function composeArgs(args2, partials, holders, isCurried) {
      var argsIndex = -1, argsLength = args2.length, holdersLength = holders.length, leftIndex = -1, leftLength = partials.length, rangeLength = nativeMax(argsLength - holdersLength, 0), result = Array(leftLength + rangeLength), isUncurried = !isCurried;
      while (++leftIndex < leftLength) {
        result[leftIndex] = partials[leftIndex];
      }
      while (++argsIndex < holdersLength) {
        if (isUncurried || argsIndex < argsLength) {
          result[holders[argsIndex]] = args2[argsIndex];
        }
      }
      while (rangeLength--) {
        result[leftIndex++] = args2[argsIndex++];
      }
      return result;
    }
    function composeArgsRight(args2, partials, holders, isCurried) {
      var argsIndex = -1, argsLength = args2.length, holdersIndex = -1, holdersLength = holders.length, rightIndex = -1, rightLength = partials.length, rangeLength = nativeMax(argsLength - holdersLength, 0), result = Array(rangeLength + rightLength), isUncurried = !isCurried;
      while (++argsIndex < rangeLength) {
        result[argsIndex] = args2[argsIndex];
      }
      var offset = argsIndex;
      while (++rightIndex < rightLength) {
        result[offset + rightIndex] = partials[rightIndex];
      }
      while (++holdersIndex < holdersLength) {
        if (isUncurried || argsIndex < argsLength) {
          result[offset + holders[holdersIndex]] = args2[argsIndex++];
        }
      }
      return result;
    }
    function copyArray(source, array) {
      var index = -1, length3 = source.length;
      array || (array = Array(length3));
      while (++index < length3) {
        array[index] = source[index];
      }
      return array;
    }
    function createBind(func, bitmask, thisArg) {
      var isBind = bitmask & BIND_FLAG, Ctor = createCtor(func);
      function wrapper() {
        var fn = this && this !== root && this instanceof wrapper ? Ctor : func;
        return fn.apply(isBind ? thisArg : this, arguments);
      }
      return wrapper;
    }
    function createCtor(Ctor) {
      return function() {
        var args2 = arguments;
        switch (args2.length) {
          case 0:
            return new Ctor();
          case 1:
            return new Ctor(args2[0]);
          case 2:
            return new Ctor(args2[0], args2[1]);
          case 3:
            return new Ctor(args2[0], args2[1], args2[2]);
          case 4:
            return new Ctor(args2[0], args2[1], args2[2], args2[3]);
          case 5:
            return new Ctor(args2[0], args2[1], args2[2], args2[3], args2[4]);
          case 6:
            return new Ctor(args2[0], args2[1], args2[2], args2[3], args2[4], args2[5]);
          case 7:
            return new Ctor(args2[0], args2[1], args2[2], args2[3], args2[4], args2[5], args2[6]);
        }
        var thisBinding = baseCreate(Ctor.prototype), result = Ctor.apply(thisBinding, args2);
        return isObject(result) ? result : thisBinding;
      };
    }
    function createCurry(func, bitmask, arity) {
      var Ctor = createCtor(func);
      function wrapper() {
        var length3 = arguments.length, args2 = Array(length3), index = length3, placeholder = getHolder(wrapper);
        while (index--) {
          args2[index] = arguments[index];
        }
        var holders = length3 < 3 && args2[0] !== placeholder && args2[length3 - 1] !== placeholder ? [] : replaceHolders(args2, placeholder);
        length3 -= holders.length;
        if (length3 < arity) {
          return createRecurry(
            func,
            bitmask,
            createHybrid,
            wrapper.placeholder,
            void 0,
            args2,
            holders,
            void 0,
            void 0,
            arity - length3
          );
        }
        var fn = this && this !== root && this instanceof wrapper ? Ctor : func;
        return apply(fn, this, args2);
      }
      return wrapper;
    }
    function createHybrid(func, bitmask, thisArg, partials, holders, partialsRight, holdersRight, argPos, ary, arity) {
      var isAry = bitmask & ARY_FLAG, isBind = bitmask & BIND_FLAG, isBindKey = bitmask & BIND_KEY_FLAG, isCurried = bitmask & (CURRY_FLAG | CURRY_RIGHT_FLAG), isFlip = bitmask & FLIP_FLAG, Ctor = isBindKey ? void 0 : createCtor(func);
      function wrapper() {
        var length3 = arguments.length, args2 = Array(length3), index = length3;
        while (index--) {
          args2[index] = arguments[index];
        }
        if (isCurried) {
          var placeholder = getHolder(wrapper), holdersCount = countHolders(args2, placeholder);
        }
        if (partials) {
          args2 = composeArgs(args2, partials, holders, isCurried);
        }
        if (partialsRight) {
          args2 = composeArgsRight(args2, partialsRight, holdersRight, isCurried);
        }
        length3 -= holdersCount;
        if (isCurried && length3 < arity) {
          var newHolders = replaceHolders(args2, placeholder);
          return createRecurry(
            func,
            bitmask,
            createHybrid,
            wrapper.placeholder,
            thisArg,
            args2,
            newHolders,
            argPos,
            ary,
            arity - length3
          );
        }
        var thisBinding = isBind ? thisArg : this, fn = isBindKey ? thisBinding[func] : func;
        length3 = args2.length;
        if (argPos) {
          args2 = reorder(args2, argPos);
        } else if (isFlip && length3 > 1) {
          args2.reverse();
        }
        if (isAry && ary < length3) {
          args2.length = ary;
        }
        if (this && this !== root && this instanceof wrapper) {
          fn = Ctor || createCtor(fn);
        }
        return fn.apply(thisBinding, args2);
      }
      return wrapper;
    }
    function createPartial(func, bitmask, thisArg, partials) {
      var isBind = bitmask & BIND_FLAG, Ctor = createCtor(func);
      function wrapper() {
        var argsIndex = -1, argsLength = arguments.length, leftIndex = -1, leftLength = partials.length, args2 = Array(leftLength + argsLength), fn = this && this !== root && this instanceof wrapper ? Ctor : func;
        while (++leftIndex < leftLength) {
          args2[leftIndex] = partials[leftIndex];
        }
        while (argsLength--) {
          args2[leftIndex++] = arguments[++argsIndex];
        }
        return apply(fn, isBind ? thisArg : this, args2);
      }
      return wrapper;
    }
    function createRecurry(func, bitmask, wrapFunc, placeholder, thisArg, partials, holders, argPos, ary, arity) {
      var isCurry = bitmask & CURRY_FLAG, newHolders = isCurry ? holders : void 0, newHoldersRight = isCurry ? void 0 : holders, newPartials = isCurry ? partials : void 0, newPartialsRight = isCurry ? void 0 : partials;
      bitmask |= isCurry ? PARTIAL_FLAG : PARTIAL_RIGHT_FLAG;
      bitmask &= ~(isCurry ? PARTIAL_RIGHT_FLAG : PARTIAL_FLAG);
      if (!(bitmask & CURRY_BOUND_FLAG)) {
        bitmask &= ~(BIND_FLAG | BIND_KEY_FLAG);
      }
      var result = wrapFunc(func, bitmask, thisArg, newPartials, newHolders, newPartialsRight, newHoldersRight, argPos, ary, arity);
      result.placeholder = placeholder;
      return setWrapToString(result, func, bitmask);
    }
    function createWrap(func, bitmask, thisArg, partials, holders, argPos, ary, arity) {
      var isBindKey = bitmask & BIND_KEY_FLAG;
      if (!isBindKey && typeof func != "function") {
        throw new TypeError(FUNC_ERROR_TEXT);
      }
      var length3 = partials ? partials.length : 0;
      if (!length3) {
        bitmask &= ~(PARTIAL_FLAG | PARTIAL_RIGHT_FLAG);
        partials = holders = void 0;
      }
      ary = ary === void 0 ? ary : nativeMax(toInteger(ary), 0);
      arity = arity === void 0 ? arity : toInteger(arity);
      length3 -= holders ? holders.length : 0;
      if (bitmask & PARTIAL_RIGHT_FLAG) {
        var partialsRight = partials, holdersRight = holders;
        partials = holders = void 0;
      }
      var newData = [
        func,
        bitmask,
        thisArg,
        partials,
        holders,
        partialsRight,
        holdersRight,
        argPos,
        ary,
        arity
      ];
      func = newData[0];
      bitmask = newData[1];
      thisArg = newData[2];
      partials = newData[3];
      holders = newData[4];
      arity = newData[9] = newData[9] == null ? isBindKey ? 0 : func.length : nativeMax(newData[9] - length3, 0);
      if (!arity && bitmask & (CURRY_FLAG | CURRY_RIGHT_FLAG)) {
        bitmask &= ~(CURRY_FLAG | CURRY_RIGHT_FLAG);
      }
      if (!bitmask || bitmask == BIND_FLAG) {
        var result = createBind(func, bitmask, thisArg);
      } else if (bitmask == CURRY_FLAG || bitmask == CURRY_RIGHT_FLAG) {
        result = createCurry(func, bitmask, arity);
      } else if ((bitmask == PARTIAL_FLAG || bitmask == (BIND_FLAG | PARTIAL_FLAG)) && !holders.length) {
        result = createPartial(func, bitmask, thisArg, partials);
      } else {
        result = createHybrid.apply(void 0, newData);
      }
      return setWrapToString(result, func, bitmask);
    }
    function getHolder(func) {
      var object = func;
      return object.placeholder;
    }
    function getNative(object, key) {
      var value = getValue(object, key);
      return baseIsNative(value) ? value : void 0;
    }
    function getWrapDetails(source) {
      var match = source.match(reWrapDetails);
      return match ? match[1].split(reSplitDetails) : [];
    }
    function insertWrapDetails(source, details) {
      var length3 = details.length, lastIndex = length3 - 1;
      details[lastIndex] = (length3 > 1 ? "& " : "") + details[lastIndex];
      details = details.join(length3 > 2 ? ", " : " ");
      return source.replace(reWrapComment, "{\n/* [wrapped with " + details + "] */\n");
    }
    function isIndex(value, length3) {
      length3 = length3 == null ? MAX_SAFE_INTEGER2 : length3;
      return !!length3 && (typeof value == "number" || reIsUint.test(value)) && (value > -1 && value % 1 == 0 && value < length3);
    }
    function isMasked(func) {
      return !!maskSrcKey && maskSrcKey in func;
    }
    function reorder(array, indexes) {
      var arrLength = array.length, length3 = nativeMin(indexes.length, arrLength), oldArray = copyArray(array);
      while (length3--) {
        var index = indexes[length3];
        array[length3] = isIndex(index, arrLength) ? oldArray[index] : void 0;
      }
      return array;
    }
    var setWrapToString = !defineProperty ? identity2 : function(wrapper, reference, bitmask) {
      var source = reference + "";
      return defineProperty(wrapper, "toString", {
        "configurable": true,
        "enumerable": false,
        "value": constant(insertWrapDetails(source, updateWrapDetails(getWrapDetails(source), bitmask)))
      });
    };
    function toSource(func) {
      if (func != null) {
        try {
          return funcToString.call(func);
        } catch (e) {
        }
        try {
          return func + "";
        } catch (e) {
        }
      }
      return "";
    }
    function updateWrapDetails(details, bitmask) {
      arrayEach(wrapFlags, function(pair) {
        var value = "_." + pair[0];
        if (bitmask & pair[1] && !arrayIncludes(details, value)) {
          details.push(value);
        }
      });
      return details.sort();
    }
    function curry2(func, arity, guard) {
      arity = guard ? void 0 : arity;
      var result = createWrap(func, CURRY_FLAG, void 0, void 0, void 0, void 0, void 0, arity);
      result.placeholder = curry2.placeholder;
      return result;
    }
    function isFunction(value) {
      var tag = isObject(value) ? objectToString.call(value) : "";
      return tag == funcTag || tag == genTag;
    }
    function isObject(value) {
      var type = typeof value;
      return !!value && (type == "object" || type == "function");
    }
    function isObjectLike(value) {
      return !!value && typeof value == "object";
    }
    function isSymbol(value) {
      return typeof value == "symbol" || isObjectLike(value) && objectToString.call(value) == symbolTag;
    }
    function toFinite(value) {
      if (!value) {
        return value === 0 ? value : 0;
      }
      value = toNumber(value);
      if (value === INFINITY || value === -INFINITY) {
        var sign = value < 0 ? -1 : 1;
        return sign * MAX_INTEGER;
      }
      return value === value ? value : 0;
    }
    function toInteger(value) {
      var result = toFinite(value), remainder = result % 1;
      return result === result ? remainder ? result - remainder : result : 0;
    }
    function toNumber(value) {
      if (typeof value == "number") {
        return value;
      }
      if (isSymbol(value)) {
        return NAN;
      }
      if (isObject(value)) {
        var other = typeof value.valueOf == "function" ? value.valueOf() : value;
        value = isObject(other) ? other + "" : other;
      }
      if (typeof value != "string") {
        return value === 0 ? value : +value;
      }
      value = value.replace(reTrim, "");
      var isBinary = reIsBinary.test(value);
      return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value;
    }
    function constant(value) {
      return function() {
        return value;
      };
    }
    function identity2(value) {
      return value;
    }
    curry2.placeholder = {};
    module2.exports = curry2;
  }
});

// ../../node_modules/react-base16-styling/lib/esm/colorConverters.js
function yuv2rgb(yuv) {
  var y = yuv[0], u = yuv[1], v = yuv[2];
  var r, g, b;
  r = y * 1 + u * 0 + v * 1.13983;
  g = y * 1 + u * -0.39465 + v * -0.5806;
  b = y * 1 + u * 2.02311 + v * 0;
  r = Math.min(Math.max(0, r), 1);
  g = Math.min(Math.max(0, g), 1);
  b = Math.min(Math.max(0, b), 1);
  return [r * 255, g * 255, b * 255];
}
function rgb2yuv(rgb) {
  var r = rgb[0] / 255, g = rgb[1] / 255, b = rgb[2] / 255;
  var y = r * 0.299 + g * 0.587 + b * 0.114;
  var u = r * -0.14713 + g * -0.28886 + b * 0.436;
  var v = r * 0.615 + g * -0.51499 + b * -0.10001;
  return [y, u, v];
}
var init_colorConverters = __esm({
  "../../node_modules/react-base16-styling/lib/esm/colorConverters.js"() {
  }
});

// ../../node_modules/react-base16-styling/lib/esm/types.js
var init_types = __esm({
  "../../node_modules/react-base16-styling/lib/esm/types.js"() {
  }
});

// ../../node_modules/react-base16-styling/lib/esm/index.js
function ownKeys(object, enumerableOnly) {
  var keys2 = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function(sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys2.push.apply(keys2, symbols);
  }
  return keys2;
}
function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys(Object(source), true).forEach(function(key) {
      _defineProperty(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function(key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }
  return target;
}
var base16, import_color, import_lodash, DEFAULT_BASE16, BASE16_KEYS, flip, invertColor, merger, mergeStyling, mergeStylings, getStylingByKeys, invertBase16Theme, createStyling, isStylingConfig, getBase16Theme, invertTheme;
var init_esm = __esm({
  "../../node_modules/react-base16-styling/lib/esm/index.js"() {
    init_typeof();
    init_defineProperty();
    init_slicedToArray();
    base16 = __toESM(require_lib2());
    import_color = __toESM(require_color());
    import_lodash = __toESM(require_lodash());
    init_colorConverters();
    init_types();
    DEFAULT_BASE16 = base16.default;
    BASE16_KEYS = Object.keys(DEFAULT_BASE16);
    flip = function flip2(x) {
      return x < 0.25 ? 1 : x < 0.5 ? 0.9 - x : 1.1 - x;
    };
    invertColor = function invertColor2(hexString) {
      var color = (0, import_color.default)(hexString);
      var _rgb2yuv = rgb2yuv(color.array()), _rgb2yuv2 = _slicedToArray(_rgb2yuv, 3), y = _rgb2yuv2[0], u = _rgb2yuv2[1], v = _rgb2yuv2[2];
      var flippedYuv = [flip(y), u, v];
      var rgb = yuv2rgb(flippedYuv);
      return import_color.default.rgb(rgb).hex();
    };
    merger = function merger2(styling) {
      return function(prevStyling) {
        return {
          className: [prevStyling.className, styling.className].filter(Boolean).join(" "),
          style: _objectSpread(_objectSpread({}, prevStyling.style || {}), styling.style || {})
        };
      };
    };
    mergeStyling = function mergeStyling2(customStyling, defaultStyling) {
      if (customStyling === void 0) {
        return defaultStyling;
      }
      if (defaultStyling === void 0) {
        return customStyling;
      }
      var customType = _typeof(customStyling);
      var defaultType = _typeof(defaultStyling);
      switch (customType) {
        case "string":
          switch (defaultType) {
            case "string":
              return [defaultStyling, customStyling].filter(Boolean).join(" ");
            case "object":
              return merger({
                className: customStyling,
                style: defaultStyling
              });
            case "function":
              return function(styling) {
                for (var _len = arguments.length, args2 = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
                  args2[_key - 1] = arguments[_key];
                }
                return merger({
                  className: customStyling
                })(defaultStyling.apply(void 0, [styling].concat(args2)));
              };
          }
          break;
        case "object":
          switch (defaultType) {
            case "string":
              return merger({
                className: defaultStyling,
                style: customStyling
              });
            case "object":
              return _objectSpread(_objectSpread({}, defaultStyling), customStyling);
            case "function":
              return function(styling) {
                for (var _len2 = arguments.length, args2 = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
                  args2[_key2 - 1] = arguments[_key2];
                }
                return merger({
                  style: customStyling
                })(defaultStyling.apply(void 0, [styling].concat(args2)));
              };
          }
          break;
        case "function":
          switch (defaultType) {
            case "string":
              return function(styling) {
                for (var _len3 = arguments.length, args2 = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
                  args2[_key3 - 1] = arguments[_key3];
                }
                return customStyling.apply(void 0, [merger(styling)({
                  className: defaultStyling
                })].concat(args2));
              };
            case "object":
              return function(styling) {
                for (var _len4 = arguments.length, args2 = new Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
                  args2[_key4 - 1] = arguments[_key4];
                }
                return customStyling.apply(void 0, [merger(styling)({
                  style: defaultStyling
                })].concat(args2));
              };
            case "function":
              return function(styling) {
                for (var _len5 = arguments.length, args2 = new Array(_len5 > 1 ? _len5 - 1 : 0), _key5 = 1; _key5 < _len5; _key5++) {
                  args2[_key5 - 1] = arguments[_key5];
                }
                return customStyling.apply(void 0, [defaultStyling.apply(void 0, [styling].concat(args2))].concat(args2));
              };
          }
      }
    };
    mergeStylings = function mergeStylings2(customStylings, defaultStylings) {
      var keys2 = Object.keys(defaultStylings);
      for (var key in customStylings) {
        if (keys2.indexOf(key) === -1)
          keys2.push(key);
      }
      return keys2.reduce(function(mergedStyling, key2) {
        return mergedStyling[key2] = mergeStyling(customStylings[key2], defaultStylings[key2]), mergedStyling;
      }, {});
    };
    getStylingByKeys = function getStylingByKeys2(mergedStyling, keys2) {
      for (var _len6 = arguments.length, args2 = new Array(_len6 > 2 ? _len6 - 2 : 0), _key6 = 2; _key6 < _len6; _key6++) {
        args2[_key6 - 2] = arguments[_key6];
      }
      if (keys2 === null) {
        return mergedStyling;
      }
      if (!Array.isArray(keys2)) {
        keys2 = [keys2];
      }
      var styles = keys2.map(function(key) {
        return mergedStyling[key];
      }).filter(Boolean);
      var props = styles.reduce(function(obj, s) {
        if (typeof s === "string") {
          obj.className = [obj.className, s].filter(Boolean).join(" ");
        } else if (_typeof(s) === "object") {
          obj.style = _objectSpread(_objectSpread({}, obj.style), s);
        } else if (typeof s === "function") {
          obj = _objectSpread(_objectSpread({}, obj), s.apply(void 0, [obj].concat(args2)));
        }
        return obj;
      }, {
        className: "",
        style: {}
      });
      if (!props.className) {
        delete props.className;
      }
      if (Object.keys(props.style).length === 0) {
        delete props.style;
      }
      return props;
    };
    invertBase16Theme = function invertBase16Theme2(base16Theme) {
      return Object.keys(base16Theme).reduce(function(t, key) {
        return t[key] = /^base/.test(key) ? invertColor(base16Theme[key]) : key === "scheme" ? base16Theme[key] + ":inverted" : base16Theme[key], t;
      }, {});
    };
    createStyling = (0, import_lodash.default)(function(getStylingFromBase16) {
      var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      var themeOrStyling = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
      var _options$defaultBase = options.defaultBase16, defaultBase16 = _options$defaultBase === void 0 ? DEFAULT_BASE16 : _options$defaultBase, _options$base16Themes = options.base16Themes, base16Themes = _options$base16Themes === void 0 ? null : _options$base16Themes;
      var base16Theme = getBase16Theme(themeOrStyling, base16Themes);
      if (base16Theme) {
        themeOrStyling = _objectSpread(_objectSpread({}, base16Theme), themeOrStyling);
      }
      var theme2 = BASE16_KEYS.reduce(function(t, key) {
        return t[key] = themeOrStyling[key] || defaultBase16[key], t;
      }, {});
      var customStyling = Object.keys(themeOrStyling).reduce(function(s, key) {
        return BASE16_KEYS.indexOf(key) === -1 ? (s[key] = themeOrStyling[key], s) : s;
      }, {});
      var defaultStyling = getStylingFromBase16(theme2);
      var mergedStyling = mergeStylings(customStyling, defaultStyling);
      for (var _len7 = arguments.length, args2 = new Array(_len7 > 3 ? _len7 - 3 : 0), _key7 = 3; _key7 < _len7; _key7++) {
        args2[_key7 - 3] = arguments[_key7];
      }
      return (0, import_lodash.default)(getStylingByKeys, 2).apply(void 0, [mergedStyling].concat(args2));
    }, 3);
    isStylingConfig = function isStylingConfig2(theme2) {
      return !!theme2.extend;
    };
    getBase16Theme = function getBase16Theme2(theme2, base16Themes) {
      if (theme2 && isStylingConfig(theme2) && theme2.extend) {
        theme2 = theme2.extend;
      }
      if (typeof theme2 === "string") {
        var _theme$split = theme2.split(":"), _theme$split2 = _slicedToArray(_theme$split, 2), _themeName = _theme$split2[0], modifier = _theme$split2[1];
        if (base16Themes) {
          theme2 = base16Themes[_themeName];
        } else {
          theme2 = base16[_themeName];
        }
        if (modifier === "inverted") {
          theme2 = invertBase16Theme(theme2);
        }
      }
      return theme2 && Object.prototype.hasOwnProperty.call(theme2, "base00") ? theme2 : void 0;
    };
    invertTheme = function invertTheme2(theme2) {
      if (typeof theme2 === "string") {
        return "".concat(theme2, ":inverted");
      }
      if (theme2 && isStylingConfig(theme2) && theme2.extend) {
        if (typeof theme2.extend === "string") {
          return _objectSpread(_objectSpread({}, theme2), {}, {
            extend: "".concat(theme2.extend, ":inverted")
          });
        }
        return _objectSpread(_objectSpread({}, theme2), {}, {
          extend: invertBase16Theme(theme2.extend)
        });
      }
      if (theme2) {
        return invertBase16Theme(theme2);
      }
      return theme2;
    };
  }
});

// ../../node_modules/react-json-tree/lib/esm/themes/solarized.js
var solarized_default;
var init_solarized = __esm({
  "../../node_modules/react-json-tree/lib/esm/themes/solarized.js"() {
    solarized_default = {
      scheme: "solarized",
      author: "ethan schoonover (http://ethanschoonover.com/solarized)",
      base00: "#002b36",
      base01: "#073642",
      base02: "#586e75",
      base03: "#657b83",
      base04: "#839496",
      base05: "#93a1a1",
      base06: "#eee8d5",
      base07: "#fdf6e3",
      base08: "#dc322f",
      base09: "#cb4b16",
      base0A: "#b58900",
      base0B: "#859900",
      base0C: "#2aa198",
      base0D: "#268bd2",
      base0E: "#6c71c4",
      base0F: "#d33682"
    };
  }
});

// ../../node_modules/react-json-tree/lib/esm/createStylingFromTheme.js
var colorMap, valueColorMap, getDefaultThemeStyling, createStylingFromTheme, createStylingFromTheme_default;
var init_createStylingFromTheme = __esm({
  "../../node_modules/react-json-tree/lib/esm/createStylingFromTheme.js"() {
    init_esm();
    init_solarized();
    colorMap = (theme2) => ({
      BACKGROUND_COLOR: theme2.base00,
      TEXT_COLOR: theme2.base07,
      STRING_COLOR: theme2.base0B,
      DATE_COLOR: theme2.base0B,
      NUMBER_COLOR: theme2.base09,
      BOOLEAN_COLOR: theme2.base09,
      NULL_COLOR: theme2.base08,
      UNDEFINED_COLOR: theme2.base08,
      FUNCTION_COLOR: theme2.base08,
      SYMBOL_COLOR: theme2.base08,
      LABEL_COLOR: theme2.base0D,
      ARROW_COLOR: theme2.base0D,
      ITEM_STRING_COLOR: theme2.base0B,
      ITEM_STRING_EXPANDED_COLOR: theme2.base03
    });
    valueColorMap = (colors) => ({
      String: colors.STRING_COLOR,
      Date: colors.DATE_COLOR,
      Number: colors.NUMBER_COLOR,
      Boolean: colors.BOOLEAN_COLOR,
      Null: colors.NULL_COLOR,
      Undefined: colors.UNDEFINED_COLOR,
      Function: colors.FUNCTION_COLOR,
      Symbol: colors.SYMBOL_COLOR
    });
    getDefaultThemeStyling = (theme2) => {
      const colors = colorMap(theme2);
      return {
        tree: {
          border: 0,
          padding: 0,
          marginTop: "0.5em",
          marginBottom: "0.5em",
          marginLeft: "0.125em",
          marginRight: 0,
          listStyle: "none",
          MozUserSelect: "none",
          WebkitUserSelect: "none",
          backgroundColor: colors.BACKGROUND_COLOR
        },
        value: (_ref, nodeType, keyPath) => {
          let {
            style
          } = _ref;
          return {
            style: {
              ...style,
              paddingTop: "0.25em",
              paddingRight: 0,
              marginLeft: "0.875em",
              WebkitUserSelect: "text",
              MozUserSelect: "text",
              wordWrap: "break-word",
              paddingLeft: keyPath.length > 1 ? "2.125em" : "1.25em",
              textIndent: "-0.5em",
              wordBreak: "break-all"
            }
          };
        },
        label: {
          display: "inline-block",
          color: colors.LABEL_COLOR
        },
        valueLabel: {
          margin: "0 0.5em 0 0"
        },
        valueText: (_ref2, nodeType) => {
          let {
            style
          } = _ref2;
          return {
            style: {
              ...style,
              color: valueColorMap(colors)[nodeType]
            }
          };
        },
        itemRange: (styling, expanded) => ({
          style: {
            paddingTop: expanded ? 0 : "0.25em",
            cursor: "pointer",
            color: colors.LABEL_COLOR
          }
        }),
        arrow: (_ref3, nodeType, expanded) => {
          let {
            style
          } = _ref3;
          return {
            style: {
              ...style,
              marginLeft: 0,
              transition: "150ms",
              WebkitTransition: "150ms",
              MozTransition: "150ms",
              WebkitTransform: expanded ? "rotateZ(90deg)" : "rotateZ(0deg)",
              MozTransform: expanded ? "rotateZ(90deg)" : "rotateZ(0deg)",
              transform: expanded ? "rotateZ(90deg)" : "rotateZ(0deg)",
              transformOrigin: "45% 50%",
              WebkitTransformOrigin: "45% 50%",
              MozTransformOrigin: "45% 50%",
              position: "relative",
              lineHeight: "1.1em",
              fontSize: "0.75em"
            }
          };
        },
        arrowContainer: (_ref4, arrowStyle) => {
          let {
            style
          } = _ref4;
          return {
            style: {
              ...style,
              display: "inline-block",
              paddingRight: "0.5em",
              paddingLeft: arrowStyle === "double" ? "1em" : 0,
              cursor: "pointer"
            }
          };
        },
        arrowSign: {
          color: colors.ARROW_COLOR
        },
        arrowSignInner: {
          position: "absolute",
          top: 0,
          left: "-0.4em"
        },
        nestedNode: (_ref5, keyPath, nodeType, expanded, expandable) => {
          let {
            style
          } = _ref5;
          return {
            style: {
              ...style,
              position: "relative",
              paddingTop: "0.25em",
              marginLeft: keyPath.length > 1 ? "0.875em" : 0,
              paddingLeft: !expandable ? "1.125em" : 0
            }
          };
        },
        rootNode: {
          padding: 0,
          margin: 0
        },
        nestedNodeLabel: (_ref6, keyPath, nodeType, expanded, expandable) => {
          let {
            style
          } = _ref6;
          return {
            style: {
              ...style,
              margin: 0,
              padding: 0,
              WebkitUserSelect: expandable ? "inherit" : "text",
              MozUserSelect: expandable ? "inherit" : "text",
              cursor: expandable ? "pointer" : "default"
            }
          };
        },
        nestedNodeItemString: (_ref7, keyPath, nodeType, expanded) => {
          let {
            style
          } = _ref7;
          return {
            style: {
              ...style,
              paddingLeft: "0.5em",
              cursor: "default",
              color: expanded ? colors.ITEM_STRING_EXPANDED_COLOR : colors.ITEM_STRING_COLOR
            }
          };
        },
        nestedNodeItemType: {
          marginLeft: "0.3em",
          marginRight: "0.3em"
        },
        nestedNodeChildren: (_ref8, nodeType, expanded) => {
          let {
            style
          } = _ref8;
          return {
            style: {
              ...style,
              padding: 0,
              margin: 0,
              listStyle: "none",
              display: expanded ? "block" : "none"
            }
          };
        },
        rootNodeChildren: {
          padding: 0,
          margin: 0,
          listStyle: "none"
        }
      };
    };
    createStylingFromTheme = createStyling(getDefaultThemeStyling, {
      defaultBase16: solarized_default
    });
    createStylingFromTheme_default = createStylingFromTheme;
  }
});

// ../../node_modules/react-json-tree/lib/esm/index.js
function JSONTree(_ref2) {
  let {
    data: value,
    theme: theme2,
    invertTheme: shouldInvertTheme,
    keyPath = ["root"],
    labelRenderer = defaultLabelRenderer,
    valueRenderer = identity,
    shouldExpandNodeInitially = expandRootNode,
    hideRoot = false,
    getItemString = defaultItemString,
    postprocessValue = identity,
    isCustomNode = noCustomNode,
    collectionLimit = 50,
    sortObjectKeys = false
  } = _ref2;
  const styling = (0, import_react10.useMemo)(() => createStylingFromTheme_default(shouldInvertTheme ? invertTheme(theme2) : theme2), [theme2, shouldInvertTheme]);
  return /* @__PURE__ */ import_react10.default.createElement("ul", styling("tree"), /* @__PURE__ */ import_react10.default.createElement(JSONNode, {
    keyPath: hideRoot ? [] : keyPath,
    value: postprocessValue(value),
    isCustomNode,
    styling,
    labelRenderer,
    valueRenderer,
    shouldExpandNodeInitially,
    hideRoot,
    getItemString,
    postprocessValue,
    collectionLimit,
    sortObjectKeys
  }));
}
var import_react10, identity, expandRootNode, defaultItemString, defaultLabelRenderer, noCustomNode;
var init_esm2 = __esm({
  "../../node_modules/react-json-tree/lib/esm/index.js"() {
    import_react10 = __toESM(require_react());
    init_JSONNode();
    init_createStylingFromTheme();
    init_esm();
    identity = (value) => value;
    expandRootNode = (keyPath, data, level) => level === 0;
    defaultItemString = (type, data, itemType, itemString) => /* @__PURE__ */ import_react10.default.createElement("span", null, itemType, " ", itemString);
    defaultLabelRenderer = (_ref) => {
      let [label] = _ref;
      return /* @__PURE__ */ import_react10.default.createElement("span", null, label, ":");
    };
    noCustomNode = () => false;
  }
});

// ../../node_modules/@jupyterlab/json-extension/lib/component.js
function getStyle(tag) {
  var _a;
  return (_a = jupyterHighlightStyle.style([tag])) !== null && _a !== void 0 ? _a : "";
}
function objectIncludes(data, query) {
  return JSON.stringify(data).includes(query);
}
function filterPaths(data, query, parent = ["root"]) {
  if (import_coreutils13.JSONExt.isArray(data)) {
    return data.reduce((result, item, index) => {
      if (item && typeof item === "object" && objectIncludes(item, query)) {
        return [
          ...result,
          [index, ...parent].join(","),
          ...filterPaths(item, query, [index, ...parent])
        ];
      }
      return result;
    }, []);
  }
  if (import_coreutils13.JSONExt.isObject(data)) {
    return Object.keys(data).reduce((result, key) => {
      const item = data[key];
      if (item && typeof item === "object" && (key.includes(query) || objectIncludes(item, query))) {
        return [
          ...result,
          [key, ...parent].join(","),
          ...filterPaths(item, query, [key, ...parent])
        ];
      }
      return result;
    }, []);
  }
  return [];
}
var import_coreutils13, React11, import_react_highlight_words, Component2, theme;
var init_component = __esm({
  "../../node_modules/@jupyterlab/json-extension/lib/component.js"() {
    init_lib8();
    init_lib();
    init_lib2();
    init_dist4();
    import_coreutils13 = __toESM(require_dist());
    React11 = __toESM(require_react());
    import_react_highlight_words = __toESM(require_main());
    init_esm2();
    init_style_mod();
    Component2 = class extends React11.Component {
      constructor() {
        super(...arguments);
        this.state = { filter: "", value: "" };
        this.timer = 0;
        this.handleChange = (event) => {
          const { value } = event.target;
          this.setState({ value });
          window.clearTimeout(this.timer);
          this.timer = window.setTimeout(() => {
            this.setState({ filter: value });
          }, 300);
        };
      }
      componentDidMount() {
        StyleModule.mount(document, jupyterHighlightStyle.module);
      }
      render() {
        const translator = this.props.translator || nullTranslator;
        const trans = translator.load("jupyterlab");
        const { data, metadata, forwardedRef } = this.props;
        const root = metadata && metadata.root ? metadata.root : "root";
        const keyPaths = this.state.filter ? filterPaths(data, this.state.filter, [root]) : [root];
        return React11.createElement(
          "div",
          { className: "container", ref: forwardedRef },
          React11.createElement(InputGroup, { className: "filter", type: "text", placeholder: trans.__("Find\u2026"), onChange: this.handleChange, value: this.state.value, rightIcon: "ui-components:search" }),
          React11.createElement(JSONTree, { data, collectionLimit: 100, theme: {
            extend: theme,
            valueLabel: getStyle(tags.variableName),
            valueText: getStyle(tags.string),
            nestedNodeItemString: getStyle(tags.comment)
          }, invertTheme: false, keyPath: [root], getItemString: (type, data2, itemType, itemString) => Array.isArray(data2) ? (
            // Always display array type and the number of items i.e. "[] 2 items".
            React11.createElement(
              "span",
              null,
              itemType,
              " ",
              itemString
            )
          ) : Object.keys(data2).length === 0 ? (
            // Only display object type when it's empty i.e. "{}".
            React11.createElement("span", null, itemType)
          ) : null, labelRenderer: ([label, type]) => {
            return React11.createElement(
              "span",
              { className: getStyle(tags.keyword) },
              React11.createElement(import_react_highlight_words.default, { searchWords: [this.state.filter], textToHighlight: `${label}`, highlightClassName: "jp-mod-selected" })
            );
          }, valueRenderer: (raw) => {
            let className = getStyle(tags.string);
            if (typeof raw === "number") {
              className = getStyle(tags.number);
            }
            if (raw === "true" || raw === "false") {
              className = getStyle(tags.keyword);
            }
            return React11.createElement(
              "span",
              { className },
              React11.createElement(import_react_highlight_words.default, { searchWords: [this.state.filter], textToHighlight: `${raw}`, highlightClassName: "jp-mod-selected" })
            );
          }, shouldExpandNodeInitially: (keyPath, data2, level) => metadata && metadata.expanded ? true : keyPaths.join(",").includes(keyPath.join(",")) })
        );
      }
    };
    theme = {
      scheme: "jupyter",
      base00: "invalid",
      base01: "invalid",
      base02: "invalid",
      base03: "invalid",
      base04: "invalid",
      base05: "invalid",
      base06: "invalid",
      base07: "invalid",
      base08: "invalid",
      base09: "invalid",
      base0A: "invalid",
      base0B: "invalid",
      base0C: "invalid",
      base0D: "invalid",
      base0E: "invalid",
      base0F: "invalid",
      author: "invalid"
    };
  }
});
init_component();
export {
  Component2 as Component
};
/*! Bundled license information:

react-highlight-words/dist/main.js:
  (*
  object-assign
  (c) Sindre Sorhus
  @license MIT
  *)
*/
//# sourceMappingURL=/build/_shared/component-PWDF436Y.js.map
