import "/build/_shared/chunk-D5NAPBYJ.js";

// ../../node_modules/myst-ext-grid/dist/index.js
var gridDirective = {
  name: "grid",
  arg: {
    type: String
  },
  // options:
  // // https://sphinx-design.readthedocs.io/en/furo-theme/grids.html#grid-options
  // 'class-container'
  // 'class-row'
  // gutter
  // margin
  // padding
  // reverse
  // outline
  body: {
    type: "myst",
    required: true
  },
  run(data) {
    return [
      {
        type: "grid",
        columns: getColumns(data.arg),
        children: data.body
      }
    ];
  }
};
function getColumns(columnString) {
  const columns = (columnString !== null && columnString !== void 0 ? columnString : "1 2 2 3").split(/\s/).map((s) => Number(s.trim())).filter((n) => !Number.isNaN(n)).map((n) => Math.min(Math.max(Math.floor(n), 1), 12));
  if (columns.length === 0 || columns.length > 4)
    return [1, 2, 2, 3];
  return columns;
}
export {
  gridDirective
};
//# sourceMappingURL=/build/_shared/dist-B5YLR3VR.js.map
