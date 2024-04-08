// ../../node_modules/doi-utils/dist/validatePart.js
var DOI_VALIDATION_PATTERN = /^10.\d{4,9}\/[-._;()/:A-Z0-9]+$/i;
function validatePart(possibleDOI) {
  if (!possibleDOI)
    return false;
  return possibleDOI.match(DOI_VALIDATION_PATTERN) !== null;
}

// ../../node_modules/doi-utils/dist/resolvers.js
var doiOrg = {
  test(url) {
    return !!url.hostname.match(/(?:dx\.)?(?:www\.)?doi\.org/);
  },
  parse(url) {
    return url.pathname.replace(/^\//, "");
  }
};
var elife = {
  test(url) {
    return url.hostname.endsWith("elifesciences.org") && url.pathname.startsWith("/articles/");
  },
  parse(url) {
    return `10.7554/eLife.${url.pathname.replace("/articles/", "")}`;
  }
};
var zenodo = {
  test(url) {
    return url.hostname.endsWith("zenodo.org") && !!url.pathname.match(/^\/(?:record|badge\/latestdoi)\//);
  },
  parse(url) {
    return `10.5281/zenodo.${url.pathname.replace(/^\/(?:record|badge\/latestdoi)\//, "")}`;
  }
};
function clumpParts(url) {
  const parts = url.pathname.split("/").filter((p) => !!p);
  return parts.slice(0, -1).map((a, i) => `${a}/${parts[i + 1]}`);
}
var pathParts = {
  test(url) {
    return !!clumpParts(url).find(validatePart);
  },
  parse(url) {
    return clumpParts(url).find(validatePart);
  }
};
var idInQuery = {
  test(url) {
    return validatePart(url.searchParams.get("id"));
  },
  parse(url) {
    var _a;
    return (_a = url.searchParams.get("id")) !== null && _a !== void 0 ? _a : void 0;
  }
};
var STRICT_RESOLVERS = [doiOrg];
var DEFAULT_RESOLVERS = [doiOrg, pathParts, elife, zenodo, idInQuery];

// ../../node_modules/doi-utils/dist/index.js
var OPEN_FUNDER_REGISTRY_PREFIX = "10.13039";
function validate(possibleDOI, opts) {
  if (!possibleDOI)
    return false;
  return !!normalize(possibleDOI, opts);
}
function normalize(possibleDOI, opts) {
  let doi2 = void 0;
  if (!possibleDOI)
    return void 0;
  if (validatePart(possibleDOI))
    return possibleDOI;
  if (possibleDOI.startsWith("doi:")) {
    doi2 = possibleDOI.slice(4);
    if (validatePart(doi2))
      return doi2;
  }
  try {
    const url = new URL(possibleDOI.startsWith("http") ? possibleDOI : `http://${possibleDOI}`);
    const strictResolver = STRICT_RESOLVERS.find((r) => r.test(url));
    const nonStrictResolver = DEFAULT_RESOLVERS.find((r) => r.test(url));
    if ((opts === null || opts === void 0 ? void 0 : opts.strict) && !strictResolver)
      return void 0;
    const resolver = strictResolver !== null && strictResolver !== void 0 ? strictResolver : nonStrictResolver;
    if (!resolver)
      return void 0;
    doi2 = resolver.parse(url);
    if (!(opts === null || opts === void 0 ? void 0 : opts.strict) && strictResolver)
      return doi2;
  } catch (error) {
  }
  if (validatePart(doi2))
    return doi2;
  return void 0;
}
function buildUrl(possibleDOI, opts) {
  const doi2 = normalize(possibleDOI, opts);
  if (!doi2)
    return void 0;
  return `https://doi.org/${doi2}`;
}
function isOpenFunderRegistry(possibleDOI) {
  const doi2 = normalize(possibleDOI);
  if (!doi2)
    return false;
  return doi2.startsWith(`${OPEN_FUNDER_REGISTRY_PREFIX}/`);
}
var doi = {
  validatePart,
  validate,
  normalize,
  buildUrl,
  isOpenFunderRegistry
};

// ../../node_modules/simple-validators/dist/utils.js
function getDate(object) {
  if (object == null) {
    return /* @__PURE__ */ new Date();
  }
  if (object instanceof Date) {
    return object;
  }
  if (typeof object === "string") {
    return new Date(object);
  }
  if ((object === null || object === void 0 ? void 0 : object.toDate) !== void 0) {
    return object.toDate();
  }
  throw new Error(`Could not parse date: ${object}`);
}
function formatDate(date) {
  if (date instanceof Date) {
    return date.toISOString();
  }
  if ((date === null || date === void 0 ? void 0 : date.toDate) !== void 0) {
    return date.toDate().toISOString();
  }
  if (typeof date === "string") {
    return formatDate(getDate(date));
  }
  return null;
}

// ../../node_modules/simple-validators/dist/validators.js
function defined(val) {
  return val != null;
}
function locationSuffix(opts) {
  if (opts.file && opts.location)
    return ` (at ${opts.file}#${opts.location})`;
  if (opts.file || opts.location)
    return ` (at ${opts.file || opts.location})`;
  return "";
}
function incrementOptions(property, opts) {
  let location = opts.property;
  if (opts.location)
    location = `${opts.location}.${opts.property}`;
  return { ...opts, property, location };
}
function validationError(message, opts) {
  if (opts.suppressErrors)
    return void 0;
  const { messages } = opts;
  if (!messages.errors)
    messages.errors = [];
  const fullMessage = `'${opts.property}' ${message}${locationSuffix(opts)}`;
  messages.errors.push({
    property: opts.property,
    message: fullMessage
  });
  if (opts.errorLogFn)
    opts.errorLogFn(fullMessage);
  return void 0;
}
function validationWarning(message, opts) {
  if (opts.suppressWarnings)
    return void 0;
  const { messages } = opts;
  if (!messages.warnings)
    messages.warnings = [];
  const fullMessage = `'${opts.property}' ${message}${locationSuffix(opts)}`;
  messages.warnings.push({
    property: opts.property,
    message: fullMessage
  });
  if (opts.warningLogFn)
    opts.warningLogFn(fullMessage);
  return void 0;
}
function validateBoolean(input, opts) {
  if (typeof input === "string") {
    if (input.toLowerCase() === "true")
      return true;
    if (input.toLowerCase() === "false")
      return false;
  }
  if (input === true || input === false)
    return input;
  return validationError("must be boolean", opts);
}
function validateNumber(input, opts) {
  const value = Number(input);
  if (Number.isNaN(value)) {
    return validationError(`must be a number: ${input}`, opts);
  }
  if (defined(opts.min) && value < opts.min) {
    return validationError(`must be greater than or equal to ${opts.min}: ${value}`, opts);
  }
  if (defined(opts.max) && value > opts.max) {
    return validationError(`must be less than or equal to ${opts.max}: ${value}`, opts);
  }
  if (opts.integer && !Number.isInteger(value)) {
    return validationError(`must be an integer: ${value}`, opts);
  }
  return value;
}
function validateString(input, opts) {
  let value = input;
  if (opts.coerceNumber && typeof value === "number") {
    if (Number.isNaN(value))
      validationWarning("is not a number", opts);
    value = String(value);
  }
  if (typeof value !== "string")
    return validationError(`must be string`, opts);
  if (opts.maxLength && value.length > opts.maxLength) {
    return validationError(`must be less than ${opts.maxLength} chars`, opts);
  }
  if (opts.regex && !value.match(opts.regex)) {
    return validationError(`must match regex ${opts.regex}`, opts);
  }
  if (opts.escapeFn) {
    value = opts.escapeFn(value);
  }
  return value;
}
function validateUrl(input, opts) {
  const value = validateString(input, { ...opts, maxLength: 2048 });
  if (value === void 0)
    return value;
  let url;
  try {
    url = new URL(value);
  } catch {
    return validationError(`must be valid URL: ${value}`, opts);
  }
  if (opts.includes && !url.origin.includes(opts.includes)) {
    return validationError(`must include "${opts.includes}": ${value}`, opts);
  }
  return value;
}
function validateEmail(input, opts) {
  const value = validateString(input, opts);
  if (value === void 0)
    return value;
  const valid = value.toLowerCase().match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
  if (!valid) {
    return validationError(`must be valid email address: ${value}`, opts);
  }
  return value;
}
function validateChoice(input, opts) {
  if (!opts.choices.includes(input)) {
    return validationError(`invalid value '${input}' - must be one of [${opts.choices.join(", ")}]`, opts);
  }
  return input;
}
function validateEnum(input, opts) {
  if (!Object.values(opts.enum).includes(input)) {
    return validationError(`invalid value '${input}' - must be one of [${Object.values(opts.enum).join(", ")}]`, opts);
  }
  return input;
}
function validateDate(input, opts) {
  const date = new Date(input);
  if (!date.getDate()) {
    return validationError(`invalid date "${input}" - must be ISO 8601 format or IETF timestamp`, opts);
  }
  return typeof input === "string" ? input : formatDate(date);
}
function validateObject(input, opts) {
  if (typeof input !== "object")
    return validationError(`must be object`, opts);
  return input;
}
function validateKeys(input, keys, opts) {
  var _a;
  const value = {};
  let required = keys.required || [];
  const optional = keys.optional || [];
  const aliasKeys = Object.entries((_a = keys.alias) !== null && _a !== void 0 ? _a : {}).filter((alias) => required.includes(alias[1]) || optional.includes(alias[1])).map((alias) => alias[0]);
  const ignored = [];
  Object.keys(input).forEach((k) => {
    var _a2;
    if (required.includes(k) || optional.includes(k)) {
      value[k] = input[k];
      required = required.filter((val) => val !== k);
    } else if (aliasKeys.includes(k)) {
      const normalized = (_a2 = keys.alias) === null || _a2 === void 0 ? void 0 : _a2[k];
      if (input[normalized] === void 0) {
        value[normalized] = input[k];
        required = required.filter((val) => val !== normalized);
      } else {
        validationWarning(`both "${normalized}" and "${k}" were provided, "${k}" was ignored.`, opts);
      }
    } else {
      ignored.push(k);
      if (opts.keepExtraKeys)
        value[k] = input[k];
    }
  });
  if (required.length) {
    validationError(`missing required key${required.length > 1 ? "s" : ""}: ${required.join(", ")}`, opts);
    if (!opts.returnInvalidPartial)
      return void 0;
  }
  if (ignored.length) {
    validationWarning(`extra key${ignored.length > 1 ? "s" : ""} ignored: ${ignored.join(", ")}`, opts);
  }
  return value;
}
function validateObjectKeys(input, keys, opts) {
  const value = validateObject(input, opts);
  if (value === void 0)
    return void 0;
  return validateKeys(value, keys, opts);
}
function validateList(input, opts, itemValidator) {
  let value;
  if (Array.isArray(input)) {
    value = input;
  } else if (opts.coerce) {
    value = [input];
  } else {
    return validationError("must be an array", opts);
  }
  return value.map((item, index) => itemValidator(item, index)).filter((item) => item !== void 0);
}
function fillMissingKeys(base, filler, keys) {
  const output = { ...base };
  keys.forEach((key) => {
    if (!defined(output[key]) && defined(filler[key])) {
      const k = key;
      output[k] = filler[k];
    }
  });
  return output;
}
function filterKeys(value, keys) {
  return fillMissingKeys({}, value, keys);
}

// ../../node_modules/myst-frontmatter/dist/numbering/validators.js
var NUMBERING_OPTIONS = ["enumerator", "all", "headings"];
var HEADING_KEYS = ["heading_1", "heading_2", "heading_3", "heading_4", "heading_5", "heading_6"];
var NUMBERING_KEYS = [
  "figure",
  "subfigure",
  "equation",
  "subequation",
  "table",
  "code",
  ...HEADING_KEYS
];
var NUMBERING_ITEM_KEYS = ["enabled", "start", "template"];
var NUMBERING_ALIAS = {
  sections: "headings",
  h1: "heading_1",
  h2: "heading_2",
  h3: "heading_3",
  h4: "heading_4",
  h5: "heading_5",
  h6: "heading_6",
  heading1: "heading_1",
  heading2: "heading_2",
  heading3: "heading_3",
  heading4: "heading_4",
  heading5: "heading_5",
  heading6: "heading_6"
};
function isBoolean(input) {
  if (typeof input === "string") {
    return ["true", "false"].includes(input.toLowerCase());
  }
  return typeof input === "boolean";
}
function validateNumberingItem(input, opts) {
  var _a, _b;
  if (isBoolean(input)) {
    input = { enabled: input };
  } else if (typeof input === "number") {
    input = { start: input };
  } else if (typeof input === "string") {
    input = { template: input };
  }
  const value = validateObjectKeys(input, { optional: NUMBERING_ITEM_KEYS }, opts);
  if (value === void 0)
    return void 0;
  const output = {};
  if (defined(value.enabled)) {
    const enabled = validateBoolean(value.enabled, incrementOptions("enabled", opts));
    if (defined(enabled))
      output.enabled = enabled;
  }
  if (defined(value.start)) {
    const start = validateNumber(value.start, {
      ...incrementOptions("start", opts),
      integer: true,
      min: 1
    });
    if (start) {
      output.start = start;
      output.enabled = (_a = output.enabled) !== null && _a !== void 0 ? _a : true;
    }
  }
  if (defined(value.template)) {
    const template = validateString(value.template, incrementOptions("template", opts));
    if (defined(template)) {
      output.template = template;
      output.enabled = (_b = output.enabled) !== null && _b !== void 0 ? _b : true;
    }
  }
  if (Object.keys(output).length === 0)
    return void 0;
  return output;
}
function validateNumbering(input, opts) {
  var _a, _b, _c, _d;
  if (isBoolean(input)) {
    input = { all: input };
  }
  const value = validateObjectKeys(input, { optional: [...NUMBERING_KEYS, ...NUMBERING_OPTIONS], alias: NUMBERING_ALIAS }, { ...opts, suppressWarnings: true, keepExtraKeys: true });
  if (value === void 0)
    return void 0;
  const output = {};
  let headings;
  if (defined(value.enumerator)) {
    const enumeratorOpts = incrementOptions("enumerator", opts);
    output.enumerator = validateNumberingItem(value.enumerator, enumeratorOpts);
    if (((_a = output.enumerator) === null || _a === void 0 ? void 0 : _a.enabled) != null) {
      if (output.enumerator.enabled !== true) {
        validationWarning("value for 'enabled' is ignored", enumeratorOpts);
      }
      delete output.enumerator.enabled;
    }
    if (((_b = output.enumerator) === null || _b === void 0 ? void 0 : _b.start) != null) {
      validationWarning("value for 'start' is ignored", enumeratorOpts);
      delete output.enumerator.start;
    }
  }
  if (defined(value.all)) {
    const allOpts = incrementOptions("all", opts);
    output.all = validateNumberingItem(value.all, allOpts);
    if (((_c = output.all) === null || _c === void 0 ? void 0 : _c.template) != null) {
      validationWarning("value for 'template' is ignored", allOpts);
      delete output.all.template;
    }
    if (((_d = output.all) === null || _d === void 0 ? void 0 : _d.start) != null) {
      validationWarning("value for 'start' is ignored", allOpts);
      delete output.all.start;
    }
  }
  if (defined(value.headings)) {
    headings = validateNumberingItem(value.headings, incrementOptions("headings", opts));
    HEADING_KEYS.forEach((headingKey) => {
      if (headings && !defined(value[headingKey])) {
        value[headingKey] = headings;
      }
    });
  }
  Object.keys(value).filter((key) => !NUMBERING_OPTIONS.includes(key)).forEach((key) => {
    if (defined(value[key])) {
      const item = validateNumberingItem(value[key], incrementOptions(key, opts));
      if (!defined(item))
        return;
      if (headings && HEADING_KEYS.includes(key)) {
        output[key] = { ...headings, ...item };
      } else {
        output[key] = item;
      }
    }
  });
  if (Object.keys(output).length === 0)
    return void 0;
  return output;
}
function fillNumbering(base, filler) {
  const output = { ...filler, ...base };
  Object.entries(filler !== null && filler !== void 0 ? filler : {}).filter(([key]) => !NUMBERING_OPTIONS.includes(key)).forEach(([key, val]) => {
    var _a, _b, _c;
    output[key] = fillMissingKeys(
      (_a = base === null || base === void 0 ? void 0 : base[key]) !== null && _a !== void 0 ? _a : {},
      // Enabling/disabling all in base overrides filler
      { ...val, enabled: (_c = (_b = base === null || base === void 0 ? void 0 : base.all) === null || _b === void 0 ? void 0 : _b.enabled) !== null && _c !== void 0 ? _c : val.enabled },
      NUMBERING_ITEM_KEYS
    );
  });
  return output;
}

export {
  doi,
  defined,
  incrementOptions,
  validationError,
  validationWarning,
  validateBoolean,
  validateNumber,
  validateString,
  validateUrl,
  validateEmail,
  validateChoice,
  validateEnum,
  validateDate,
  validateObject,
  validateKeys,
  validateObjectKeys,
  validateList,
  filterKeys,
  validateNumbering,
  fillNumbering
};
//# sourceMappingURL=/build/_shared/chunk-XIVVYPNM.js.map
