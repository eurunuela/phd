import {
  ParseTypesEnum,
  createId,
  normalizeLabel
} from "/build/_shared/chunk-OKIPWGJP.js";
import "/build/_shared/chunk-6RGX3KNX.js";
import "/build/_shared/chunk-K3U4UPJ2.js";

// ../../node_modules/myst-ext-exercise/dist/exercise.js
var exerciseDirective = {
  name: "exercise",
  alias: ["exercise-start"],
  arg: {
    type: ParseTypesEnum.parsed
  },
  options: {
    label: {
      type: ParseTypesEnum.string
    },
    class: {
      type: ParseTypesEnum.string
    },
    nonumber: {
      type: ParseTypesEnum.boolean
    },
    hidden: {
      type: ParseTypesEnum.boolean
    }
  },
  body: {
    type: ParseTypesEnum.parsed
  },
  run(data) {
    var _a, _b, _c, _d, _e;
    const children = [];
    if (data.arg) {
      children.push({
        type: "admonitionTitle",
        children: data.arg
      });
    }
    if (data.body) {
      children.push(...data.body);
    }
    const nonumber = (_b = (_a = data.options) === null || _a === void 0 ? void 0 : _a.nonumber) !== null && _b !== void 0 ? _b : false;
    const backupLabel = nonumber ? void 0 : `exercise-${createId()}`;
    const rawLabel = ((_c = data.options) === null || _c === void 0 ? void 0 : _c.label) || backupLabel;
    const { label, identifier } = normalizeLabel(rawLabel) || {};
    const exercise = {
      type: "exercise",
      label,
      identifier,
      class: (_d = data.options) === null || _d === void 0 ? void 0 : _d.class,
      hidden: (_e = data.options) === null || _e === void 0 ? void 0 : _e.hidden,
      enumerated: !nonumber,
      children
    };
    if (data.name.endsWith("-start")) {
      exercise.gate = "start";
    }
    return [exercise];
  }
};
var solutionDirective = {
  name: "solution",
  alias: ["solution-start"],
  arg: {
    type: ParseTypesEnum.string,
    required: true
  },
  options: {
    label: {
      type: ParseTypesEnum.string
    },
    class: {
      type: ParseTypesEnum.string
    },
    hidden: {
      type: ParseTypesEnum.boolean
    }
  },
  body: {
    type: ParseTypesEnum.parsed
  },
  run(data) {
    var _a, _b, _c;
    const children = [];
    if (data.arg) {
      const { label: label2, identifier: identifier2 } = normalizeLabel(data.arg) || {};
      children.push({
        type: "admonitionTitle",
        children: [
          { type: "text", value: "Solution to " },
          { type: "crossReference", label: label2, identifier: identifier2 }
        ]
      });
    }
    if (data.body) {
      children.push(...data.body);
    }
    const rawLabel = (_a = data.options) === null || _a === void 0 ? void 0 : _a.label;
    const { label, identifier } = normalizeLabel(rawLabel) || {};
    const solution = {
      type: "solution",
      label,
      identifier,
      class: (_b = data.options) === null || _b === void 0 ? void 0 : _b.class,
      hidden: (_c = data.options) === null || _c === void 0 ? void 0 : _c.hidden,
      children
    };
    if (data.name.endsWith("-start")) {
      solution.gate = "start";
    }
    return [solution];
  }
};
var solutionEndDirective = {
  name: "solution-end",
  run: () => [{ type: "solution", gate: "end" }]
};
var exerciseEndDirective = {
  name: "exercise-end",
  run: () => [{ type: "exercise", gate: "end" }]
};
var exerciseDirectives = [
  exerciseDirective,
  exerciseEndDirective,
  solutionDirective,
  solutionEndDirective
];
export {
  exerciseDirective,
  exerciseDirectives,
  solutionDirective
};
//# sourceMappingURL=/build/_shared/dist-HLAXLC5U.js.map
