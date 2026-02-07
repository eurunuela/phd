import {
  ParseTypesEnum
} from "/build/_shared/chunk-OKIPWGJP.js";
import "/build/_shared/chunk-6RGX3KNX.js";
import "/build/_shared/chunk-K3U4UPJ2.js";

// ../../node_modules/myst-ext-grid/dist/index.js
var gridDirective = {
  name: "grid",
  arg: {
    type: ParseTypesEnum.string
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
    type: ParseTypesEnum.parsed,
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
//# sourceMappingURL=/build/_shared/dist-D2CPS7KT.js.map
