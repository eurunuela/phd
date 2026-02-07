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
    const resolvers = (opts === null || opts === void 0 ? void 0 : opts.strict) ? STRICT_RESOLVERS : DEFAULT_RESOLVERS;
    const resolver = resolvers.find((r) => r.test(url));
    if (!resolver)
      return void 0;
    doi2 = resolver.parse(url);
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
var doi = {
  validatePart,
  validate,
  normalize,
  buildUrl
};

export {
  doi
};
//# sourceMappingURL=/build/_shared/chunk-54A3JBH5.js.map
