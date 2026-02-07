import {
  AppCatchBoundary,
  ContentReload,
  Document,
  getMetaTagsForSite,
  require_loaders
} from "/build/_shared/chunk-37VOXM6D.js";
import "/build/_shared/chunk-LUKMIKXZ.js";
import "/build/_shared/chunk-XPFBZO6U.js";
import "/build/_shared/chunk-3IWYRLZL.js";
import "/build/_shared/chunk-KRFQZPCV.js";
import "/build/_shared/chunk-UK27NEDD.js";
import "/build/_shared/chunk-54A3JBH5.js";
import "/build/_shared/chunk-OKIPWGJP.js";
import "/build/_shared/chunk-QPDZAD6Q.js";
import "/build/_shared/chunk-63RQRREX.js";
import "/build/_shared/chunk-6RGX3KNX.js";
import {
  Outlet,
  require_jsx_dev_runtime,
  require_react,
  useLoaderData
} from "/build/_shared/chunk-P7B3ZFHM.js";
import {
  __toESM
} from "/build/_shared/chunk-K3U4UPJ2.js";

// app/styles/app.css
var app_default = "/build/_assets/app-FVY3W2IS.css";

// ../../node_modules/thebe-core/dist/lib/thebe-core.css
var thebe_core_default = "/build/_assets/thebe-core-MV24PL2B.css";

// app/root.tsx
var import_loaders = __toESM(require_loaders());

// app/components/ChatWidget.tsx
var import_react2 = __toESM(require_react());

// app/components/ChatMessage.tsx
var import_react = __toESM(require_react());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function ChatMessage({ role, content }) {
  const isUser = role === "user";
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: `flex flex-col ${isUser ? "items-end" : "items-start"} mb-4`, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-xs text-stone-500 dark:text-stone-400 mb-1 px-1", children: isUser ? "You" : "AI Assistant" }, void 0, false, {
      fileName: "app/components/ChatMessage.tsx",
      lineNumber: 13,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      "div",
      {
        className: `rounded-lg px-4 py-2 max-w-[85%] ${isUser ? "bg-blue-600 text-white rounded-br-none" : "bg-stone-100 dark:bg-stone-800 text-stone-900 dark:text-stone-100 rounded-bl-none"}`,
        children: content.split("\n").map((line, i, arr) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react.default.Fragment, { children: [
          line,
          i < arr.length - 1 && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, false, {
            fileName: "app/components/ChatMessage.tsx",
            lineNumber: 26,
            columnNumber: 36
          }, this)
        ] }, i, true, {
          fileName: "app/components/ChatMessage.tsx",
          lineNumber: 24,
          columnNumber: 11
        }, this))
      },
      void 0,
      false,
      {
        fileName: "app/components/ChatMessage.tsx",
        lineNumber: 16,
        columnNumber: 7
      },
      this
    )
  ] }, void 0, true, {
    fileName: "app/components/ChatMessage.tsx",
    lineNumber: 12,
    columnNumber: 5
  }, this);
}

// app/components/ChatWidget.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
var WELCOME_EXAMPLES = [
  "What is Paradigm Free Mapping?",
  "How does stability selection work?",
  "What are the main contributions?"
];
function ChatWidget() {
  const [isOpen, setIsOpen] = (0, import_react2.useState)(false);
  const [messages, setMessages] = (0, import_react2.useState)([]);
  const [inputText, setInputText] = (0, import_react2.useState)("");
  const [isLoading, setIsLoading] = (0, import_react2.useState)(false);
  const [error, setError] = (0, import_react2.useState)(null);
  const messagesEndRef = (0, import_react2.useRef)(null);
  const textareaRef = (0, import_react2.useRef)(null);
  const messagesContainerRef = (0, import_react2.useRef)(null);
  (0, import_react2.useEffect)(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isLoading]);
  (0, import_react2.useEffect)(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = `${Math.min(textareaRef.current.scrollHeight, 96)}px`;
    }
  }, [inputText]);
  const handleSend = async () => {
    if (!inputText.trim() || isLoading)
      return;
    const userMessage = { role: "user", content: inputText.trim() };
    const newMessages = [...messages, userMessage];
    setMessages(newMessages);
    setInputText("");
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ messages: newMessages })
      });
      if (!response.ok) {
        throw new Error(`API error: ${response.status} ${response.statusText}`);
      }
      const data = await response.json();
      setMessages([...newMessages, { role: "assistant", content: data.reply }]);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to get response. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };
  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };
  const handleExampleClick = (example) => {
    var _a;
    setInputText(example);
    (_a = textareaRef.current) == null ? void 0 : _a.focus();
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_jsx_dev_runtime2.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
      "button",
      {
        onClick: () => setIsOpen(!isOpen),
        className: "fixed bottom-6 right-6 z-50 w-14 h-14 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg transition-all duration-200 hover:scale-110 flex items-center justify-center",
        "aria-label": isOpen ? "Close chat" : "Open chat",
        children: isOpen ? (
          // X icon
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("svg", { className: "w-6 h-6", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M6 18L18 6M6 6l12 12" }, void 0, false, {
            fileName: "app/components/ChatWidget.tsx",
            lineNumber: 98,
            columnNumber: 13
          }, this) }, void 0, false, {
            fileName: "app/components/ChatWidget.tsx",
            lineNumber: 97,
            columnNumber: 11
          }, this)
        ) : (
          // Chat bubble icon
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("svg", { className: "w-6 h-6", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" }, void 0, false, {
            fileName: "app/components/ChatWidget.tsx",
            lineNumber: 103,
            columnNumber: 13
          }, this) }, void 0, false, {
            fileName: "app/components/ChatWidget.tsx",
            lineNumber: 102,
            columnNumber: 11
          }, this)
        )
      },
      void 0,
      false,
      {
        fileName: "app/components/ChatWidget.tsx",
        lineNumber: 90,
        columnNumber: 7
      },
      this
    ),
    isOpen && /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "fixed bottom-24 right-6 z-50 w-96 h-[32rem] max-w-[calc(100vw-3rem)] bg-white dark:bg-stone-900 rounded-lg shadow-2xl flex flex-col overflow-hidden", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "bg-gradient-to-r from-blue-600 to-blue-700 text-white px-4 py-3 flex items-center justify-between", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h3", { className: "font-semibold text-lg", children: "Ask about this thesis" }, void 0, false, {
          fileName: "app/components/ChatWidget.tsx",
          lineNumber: 113,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
          "button",
          {
            onClick: () => setIsOpen(false),
            className: "hover:bg-blue-500 rounded p-1 transition-colors",
            "aria-label": "Close chat",
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("svg", { className: "w-5 h-5", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M6 18L18 6M6 6l12 12" }, void 0, false, {
              fileName: "app/components/ChatWidget.tsx",
              lineNumber: 120,
              columnNumber: 17
            }, this) }, void 0, false, {
              fileName: "app/components/ChatWidget.tsx",
              lineNumber: 119,
              columnNumber: 15
            }, this)
          },
          void 0,
          false,
          {
            fileName: "app/components/ChatWidget.tsx",
            lineNumber: 114,
            columnNumber: 13
          },
          this
        )
      ] }, void 0, true, {
        fileName: "app/components/ChatWidget.tsx",
        lineNumber: 112,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
        "div",
        {
          ref: messagesContainerRef,
          className: "flex-1 overflow-y-auto p-4 space-y-2",
          children: [
            messages.length === 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "text-center py-8", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "text-stone-600 dark:text-stone-400 mb-4", children: "Welcome! Ask me anything about this thesis." }, void 0, false, {
                fileName: "app/components/ChatWidget.tsx",
                lineNumber: 132,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "space-y-2", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "text-sm text-stone-500 dark:text-stone-500 mb-2", children: "Try asking:" }, void 0, false, {
                  fileName: "app/components/ChatWidget.tsx",
                  lineNumber: 136,
                  columnNumber: 19
                }, this),
                WELCOME_EXAMPLES.map((example, i) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
                  "button",
                  {
                    onClick: () => handleExampleClick(example),
                    className: "block w-full text-left px-3 py-2 text-sm bg-stone-50 dark:bg-stone-800 hover:bg-stone-100 dark:hover:bg-stone-700 rounded text-stone-700 dark:text-stone-300 transition-colors",
                    children: example
                  },
                  i,
                  false,
                  {
                    fileName: "app/components/ChatWidget.tsx",
                    lineNumber: 138,
                    columnNumber: 21
                  },
                  this
                ))
              ] }, void 0, true, {
                fileName: "app/components/ChatWidget.tsx",
                lineNumber: 135,
                columnNumber: 17
              }, this)
            ] }, void 0, true, {
              fileName: "app/components/ChatWidget.tsx",
              lineNumber: 131,
              columnNumber: 15
            }, this),
            messages.map((msg, i) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ChatMessage, { role: msg.role, content: msg.content }, i, false, {
              fileName: "app/components/ChatWidget.tsx",
              lineNumber: 151,
              columnNumber: 15
            }, this)),
            isLoading && /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex items-start mb-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "bg-stone-100 dark:bg-stone-800 rounded-lg rounded-bl-none px-4 py-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex space-x-1", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
                "div",
                {
                  className: "w-2 h-2 bg-stone-400 dark:bg-stone-500 rounded-full animate-bounce",
                  style: { animationDelay: "0ms", animationDuration: "1s" }
                },
                void 0,
                false,
                {
                  fileName: "app/components/ChatWidget.tsx",
                  lineNumber: 159,
                  columnNumber: 21
                },
                this
              ),
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
                "div",
                {
                  className: "w-2 h-2 bg-stone-400 dark:bg-stone-500 rounded-full animate-bounce",
                  style: { animationDelay: "150ms", animationDuration: "1s" }
                },
                void 0,
                false,
                {
                  fileName: "app/components/ChatWidget.tsx",
                  lineNumber: 163,
                  columnNumber: 21
                },
                this
              ),
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
                "div",
                {
                  className: "w-2 h-2 bg-stone-400 dark:bg-stone-500 rounded-full animate-bounce",
                  style: { animationDelay: "300ms", animationDuration: "1s" }
                },
                void 0,
                false,
                {
                  fileName: "app/components/ChatWidget.tsx",
                  lineNumber: 167,
                  columnNumber: 21
                },
                this
              )
            ] }, void 0, true, {
              fileName: "app/components/ChatWidget.tsx",
              lineNumber: 158,
              columnNumber: 19
            }, this) }, void 0, false, {
              fileName: "app/components/ChatWidget.tsx",
              lineNumber: 157,
              columnNumber: 17
            }, this) }, void 0, false, {
              fileName: "app/components/ChatWidget.tsx",
              lineNumber: 156,
              columnNumber: 15
            }, this),
            error && /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "bg-red-100 dark:bg-red-900/30 border border-red-400 dark:border-red-700 text-red-700 dark:text-red-300 px-4 py-3 rounded relative mb-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex items-start justify-between", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "text-sm", children: error }, void 0, false, {
                fileName: "app/components/ChatWidget.tsx",
                lineNumber: 180,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
                "button",
                {
                  onClick: () => setError(null),
                  className: "ml-2 text-red-700 dark:text-red-300 hover:text-red-900 dark:hover:text-red-100",
                  children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("svg", { className: "w-4 h-4", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M6 18L18 6M6 6l12 12" }, void 0, false, {
                    fileName: "app/components/ChatWidget.tsx",
                    lineNumber: 186,
                    columnNumber: 23
                  }, this) }, void 0, false, {
                    fileName: "app/components/ChatWidget.tsx",
                    lineNumber: 185,
                    columnNumber: 21
                  }, this)
                },
                void 0,
                false,
                {
                  fileName: "app/components/ChatWidget.tsx",
                  lineNumber: 181,
                  columnNumber: 19
                },
                this
              )
            ] }, void 0, true, {
              fileName: "app/components/ChatWidget.tsx",
              lineNumber: 179,
              columnNumber: 17
            }, this) }, void 0, false, {
              fileName: "app/components/ChatWidget.tsx",
              lineNumber: 178,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { ref: messagesEndRef }, void 0, false, {
              fileName: "app/components/ChatWidget.tsx",
              lineNumber: 193,
              columnNumber: 13
            }, this)
          ]
        },
        void 0,
        true,
        {
          fileName: "app/components/ChatWidget.tsx",
          lineNumber: 126,
          columnNumber: 11
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "border-t border-stone-200 dark:border-stone-700 p-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex items-end space-x-2", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
          "textarea",
          {
            ref: textareaRef,
            value: inputText,
            onChange: (e) => setInputText(e.target.value),
            onKeyDown: handleKeyDown,
            placeholder: "Ask a question about the thesis...",
            disabled: isLoading,
            className: "flex-1 resize-none bg-white dark:bg-stone-800 border border-stone-300 dark:border-stone-600 rounded-lg px-3 py-2 text-stone-900 dark:text-stone-100 placeholder-stone-400 dark:placeholder-stone-500 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 disabled:opacity-50 disabled:cursor-not-allowed",
            rows: 1,
            style: { maxHeight: "96px" }
          },
          void 0,
          false,
          {
            fileName: "app/components/ChatWidget.tsx",
            lineNumber: 199,
            columnNumber: 15
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
          "button",
          {
            onClick: handleSend,
            disabled: !inputText.trim() || isLoading,
            className: "bg-blue-600 hover:bg-blue-700 disabled:bg-stone-300 dark:disabled:bg-stone-700 text-white rounded-lg p-2 transition-colors disabled:cursor-not-allowed flex-shrink-0",
            "aria-label": "Send message",
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("svg", { className: "w-5 h-5", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M12 19l9 2-9-18-9 18 9-2zm0 0v-8" }, void 0, false, {
              fileName: "app/components/ChatWidget.tsx",
              lineNumber: 217,
              columnNumber: 19
            }, this) }, void 0, false, {
              fileName: "app/components/ChatWidget.tsx",
              lineNumber: 216,
              columnNumber: 17
            }, this)
          },
          void 0,
          false,
          {
            fileName: "app/components/ChatWidget.tsx",
            lineNumber: 210,
            columnNumber: 15
          },
          this
        )
      ] }, void 0, true, {
        fileName: "app/components/ChatWidget.tsx",
        lineNumber: 198,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/components/ChatWidget.tsx",
        lineNumber: 197,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/ChatWidget.tsx",
      lineNumber: 110,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/ChatWidget.tsx",
    lineNumber: 88,
    columnNumber: 5
  }, this);
}

// app/root.tsx
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime());
var meta = ({ data }) => {
  var _a, _b;
  return getMetaTagsForSite({
    title: (_a = data == null ? void 0 : data.config) == null ? void 0 : _a.title,
    twitter: (_b = data == null ? void 0 : data.config) == null ? void 0 : _b.twitter
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
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
    Document,
    {
      theme,
      config,
      scripts: MODE === "static" ? void 0 : /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(ContentReload, { port: CONTENT_CDN_PORT }, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 61,
        columnNumber: 48
      }, this),
      staticBuild: MODE === "static",
      baseurl: BASE_URL,
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Outlet, {}, void 0, false, {
          fileName: "app/root.tsx",
          lineNumber: 65,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(ChatWidget, {}, void 0, false, {
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
//# sourceMappingURL=/build/root-GBX6IOZU.js.map
