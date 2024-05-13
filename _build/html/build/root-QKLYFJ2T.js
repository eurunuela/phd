import {
  AppCatchBoundary,
  ContentReload,
  Document,
  SkipToArticle,
  getMetaTagsForSite,
  require_loaders
} from "/build/_shared/chunk-3KT6YWPZ.js";
import "/build/_shared/chunk-WYS2FUD5.js";
import "/build/_shared/chunk-TDUKKLNI.js";
import "/build/_shared/chunk-XIVVYPNM.js";
import "/build/_shared/chunk-VQ44ZQQP.js";
import "/build/_shared/chunk-KAB4N37T.js";
import "/build/_shared/chunk-XJ2I6HXP.js";
import "/build/_shared/chunk-6S3SPRRW.js";
import "/build/_shared/chunk-44FAGZWP.js";
import "/build/_shared/chunk-DXW3BAL6.js";
import "/build/_shared/chunk-63RQRREX.js";
import "/build/_shared/chunk-6RGX3KNX.js";
import {
  Outlet,
  useLoaderData
} from "/build/_shared/chunk-R5AUCJJM.js";
import "/build/_shared/chunk-EO2YHY6V.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-BR5CJPZL.js";
import "/build/_shared/chunk-IFNAVDNZ.js";
import {
  __toESM
} from "/build/_shared/chunk-D5NAPBYJ.js";

// app/styles/app.css
var app_default = "/build/_assets/app-5BOKYBSI.css";

// ../../node_modules/thebe-core/dist/lib/thebe-core.css
var thebe_core_default = "/build/_assets/thebe-core-LH56HQDS.css";

// app/root.tsx
var import_loaders = __toESM(require_loaders());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var meta = ({ data }) => {
  var _a, _b, _c;
  return getMetaTagsForSite({
    title: (_a = data == null ? void 0 : data.config) == null ? void 0 : _a.title,
    twitter: (_c = (_b = data == null ? void 0 : data.config) == null ? void 0 : _b.options) == null ? void 0 : _c.twitter
  });
};
var links = () => {
  return [
    { rel: "stylesheet", href: app_default },
    { rel: "stylesheet", href: thebe_core_default },
    {
      rel: "stylesheet",
      href: "https://cdn.jsdelivr.net/npm/jupyter-matplotlib@0.11.3/css/mpl_widget.css"
    },
    {
      rel: "stylesheet",
      href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css"
    }
  ];
};
function AppWithReload() {
  const { theme, config, CONTENT_CDN_PORT, MODE, BASE_URL } = useLoaderData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
    Document,
    {
      theme,
      config,
      scripts: MODE === "static" ? void 0 : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ContentReload, { port: CONTENT_CDN_PORT }, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 61,
        columnNumber: 48
      }, this),
      staticBuild: MODE === "static",
      baseurl: BASE_URL,
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SkipToArticle, {}, void 0, false, {
          fileName: "app/root.tsx",
          lineNumber: 65,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Outlet, {}, void 0, false, {
          fileName: "app/root.tsx",
          lineNumber: 66,
          columnNumber: 7
        }, this)
      ]
    },
    void 0,
    true,
    {
      fileName: "app/root.tsx",
      lineNumber: 58,
      columnNumber: 5
    },
    this
  );
}
export {
  AppCatchBoundary as CatchBoundary,
  AppWithReload as default,
  links,
  meta
};
//# sourceMappingURL=/build/root-QKLYFJ2T.js.map
