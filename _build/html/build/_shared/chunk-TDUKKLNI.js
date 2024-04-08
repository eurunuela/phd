// ../../node_modules/myst-spec-ext/dist/types.js
var SourceFileKind;
(function(SourceFileKind2) {
  SourceFileKind2["Article"] = "Article";
  SourceFileKind2["Notebook"] = "Notebook";
})(SourceFileKind || (SourceFileKind = {}));

// ../../node_modules/credit-roles/dist/index.js
var CREDIT_URL = "https://credit.niso.org/";
var CreditRole;
(function(CreditRole2) {
  CreditRole2["Conceptualization"] = "Conceptualization";
  CreditRole2["DataCuration"] = "Data curation";
  CreditRole2["FormalAnalysis"] = "Formal analysis";
  CreditRole2["FundingAcquisition"] = "Funding acquisition";
  CreditRole2["Investigation"] = "Investigation";
  CreditRole2["Methodology"] = "Methodology";
  CreditRole2["ProjectAdministration"] = "Project administration";
  CreditRole2["Resources"] = "Resources";
  CreditRole2["Software"] = "Software";
  CreditRole2["Supervision"] = "Supervision";
  CreditRole2["Validation"] = "Validation";
  CreditRole2["Visualization"] = "Visualization";
  CreditRole2["WritingOriginalDraft"] = "Writing \u2013 original draft";
  CreditRole2["WritingReviewEditing"] = "Writing \u2013 review & editing";
})(CreditRole || (CreditRole = {}));
var CreditDescriptions = {
  [CreditRole.Conceptualization]: "Ideas; formulation or evolution of overarching research goals and aims.",
  [CreditRole.DataCuration]: "Management activities to annotate (produce metadata), scrub data and maintain research data (including software code, where it is necessary for interpreting the data itself) for initial use and later re-use.",
  [CreditRole.FormalAnalysis]: "Application of statistical, mathematical, computational, or other formal techniques to analyse or synthesize study data.",
  [CreditRole.FundingAcquisition]: "Acquisition of the financial support for the project leading to this publication.",
  [CreditRole.Investigation]: "Conducting a research and investigation process, specifically performing the experiments, or data/evidence collection.",
  [CreditRole.Methodology]: "Development or design of methodology; creation of models.",
  [CreditRole.ProjectAdministration]: "Management and coordination responsibility for the research activity planning and execution.",
  [CreditRole.Resources]: "Provision of study materials, reagents, materials, patients, laboratory samples, animals, instrumentation, computing resources, or other analysis tools.",
  [CreditRole.Software]: "Programming, software development; designing computer programs; implementation of the computer code and supporting algorithms; testing of existing code components.",
  [CreditRole.Supervision]: "Oversight and leadership responsibility for the research activity planning and execution, including mentorship external to the core team.",
  [CreditRole.Validation]: "Verification, whether as a part of the activity or separate, of the overall replication/reproducibility of results/experiments and other research outputs.",
  [CreditRole.Visualization]: "Preparation, creation and/or presentation of the published work, specifically visualization/data presentation.",
  [CreditRole.WritingOriginalDraft]: "Preparation, creation and/or presentation of the published work, specifically writing the initial draft (including substantive translation).",
  [CreditRole.WritingReviewEditing]: "Preparation, creation and/or presentation of the published work by those from the original research group, specifically critical review, commentary or revision \u2013 including pre- or post-publication stages."
};
var ROLES = Object.keys(CreditDescriptions);
var ALIAS_ROLES = {
  writing: CreditRole.WritingOriginalDraft,
  editing: CreditRole.WritingReviewEditing,
  review: CreditRole.WritingReviewEditing,
  analysis: CreditRole.FormalAnalysis,
  funding: CreditRole.FundingAcquisition,
  admin: CreditRole.ProjectAdministration,
  administration: CreditRole.ProjectAdministration
};
function standardize(v) {
  return v.trim().toLowerCase().replaceAll("z", "s").split("").reduce((s, n) => {
    if (n.match(/([a-z])/))
      return [...s, n];
    const last = s[s.length - 1];
    if (!(last === null || last === void 0 ? void 0 : last.match(/([a-z])/)))
      return s;
    return [...s, "-"];
  }, []).join("");
}
var STANDARDIZED_ROLES = Object.fromEntries(ROLES.map((v) => [standardize(v), v]));
function normalize(value, opts) {
  var _a, _b;
  if (!value)
    return void 0;
  if (ROLES.includes(value))
    return value;
  if (opts === null || opts === void 0 ? void 0 : opts.strict)
    return void 0;
  return (_b = (_a = STANDARDIZED_ROLES[standardize(value)]) !== null && _a !== void 0 ? _a : ALIAS_ROLES[value.toLowerCase().trim()]) !== null && _b !== void 0 ? _b : void 0;
}
function validate(value, opts) {
  if (!value)
    return false;
  return !!normalize(value, opts);
}
function buildUrl(value, opts) {
  const role = normalize(value, opts);
  if (!role)
    return void 0;
  const url = role.toLowerCase().replace("\u2013 ", "").replace("& ", "").replaceAll(" ", "-");
  return `${CREDIT_URL}contributor-roles/${url}/`;
}
var credit = {
  validate,
  normalize,
  buildUrl
};

// ../../node_modules/orcid/dist/index.js
var ORCID_URL = "https://orcid.org";
var ORCID_REGEX_STRICT = "^([0-9]{4}-){3}[0-9]{3}[0-9X]$";
var ORCID_REGEX = "^((http(s)?://)?(www.)?orcid.org/)?([0-9]{4}-){3}[0-9]{3}[0-9X]$";
function validate2(value, opts) {
  const match = value === null || value === void 0 ? void 0 : value.match((opts === null || opts === void 0 ? void 0 : opts.strict) ? ORCID_REGEX_STRICT : ORCID_REGEX);
  if (!match)
    return false;
  return true;
}
function normalize2(value, opts) {
  if (!value || !validate2(value, opts))
    return void 0;
  return value.replace(/^(https?:\/\/)?(www\.)?orcid\.org\//, "");
}
function buildUrl2(value, opts) {
  const orcid2 = normalize2(value, opts);
  if (!orcid2)
    return void 0;
  return `${ORCID_URL}/${orcid2}`;
}
var orcid = {
  validate: validate2,
  normalize: normalize2,
  buildUrl: buildUrl2
};

export {
  SourceFileKind,
  CREDIT_URL,
  normalize,
  validate,
  buildUrl,
  credit,
  orcid
};
//# sourceMappingURL=/build/_shared/chunk-TDUKKLNI.js.map
