import {
  ParseTypesEnum,
  normalizeLabel
} from "/build/_shared/chunk-OKIPWGJP.js";
import "/build/_shared/chunk-6RGX3KNX.js";
import "/build/_shared/chunk-K3U4UPJ2.js";

// ../../node_modules/myst-ext-proof/dist/proof.js
var proofDirective = {
  name: "proof",
  alias: [
    "prf:proof",
    "prf:theorem",
    "prf:axiom",
    "prf:lemma",
    "prf:definition",
    "prf:criterion",
    "prf:remark",
    "prf:conjecture",
    "prf:corollary",
    "prf:algorithm",
    "prf:example",
    "prf:property",
    "prf:observation",
    "prf:proposition",
    "prf:assumption"
  ],
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
    }
  },
  body: {
    type: ParseTypesEnum.parsed,
    required: true
  },
  run(data) {
    var _a, _b, _c, _d;
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
    const rawLabel = (_c = data.options) === null || _c === void 0 ? void 0 : _c.label;
    const { label, identifier } = normalizeLabel(rawLabel) || {};
    const proof = {
      type: "proof",
      kind: data.name !== "proof" ? data.name.replace("prf:", "") : void 0,
      label,
      identifier,
      class: (_d = data.options) === null || _d === void 0 ? void 0 : _d.class,
      enumerated: !nonumber,
      children
    };
    return [proof];
  }
};

// ../../node_modules/myst-ext-proof/dist/types.js
var ProofKind;
(function(ProofKind2) {
  ProofKind2["proof"] = "proof";
  ProofKind2["axiom"] = "axiom";
  ProofKind2["lemma"] = "lemma";
  ProofKind2["definition"] = "definition";
  ProofKind2["criterion"] = "criterion";
  ProofKind2["remark"] = "remark";
  ProofKind2["conjecture"] = "conjecture";
  ProofKind2["corollary"] = "corollary";
  ProofKind2["algorithm"] = "algorithm";
  ProofKind2["example"] = "example";
  ProofKind2["property"] = "property";
  ProofKind2["observation"] = "observation";
  ProofKind2["proposition"] = "proposition";
  ProofKind2["assumption"] = "assumption";
  ProofKind2["theorem"] = "theorem";
})(ProofKind || (ProofKind = {}));
export {
  ProofKind,
  proofDirective
};
//# sourceMappingURL=/build/_shared/dist-4EEFVKVF.js.map
