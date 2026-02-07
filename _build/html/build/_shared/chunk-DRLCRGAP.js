// ../../node_modules/unist-builder/lib/index.js
var u = (
  /**
   * @type {(
   *   (<T extends string>(type: T) => {type: T}) &
   *   (<T extends string, P extends Props>(type: T, props: P) => {type: T} & P) &
   *   (<T extends string>(type: T, value: string) => {type: T, value: string}) &
   *   (<T extends string, P extends Props>(type: T, props: P, value: string) => {type: T, value: string} & P) &
   *   (<T extends string, C extends Array<Node>>(type: T, children: C) => {type: T, children: C}) &
   *   (<T extends string, P extends Props, C extends Array<Node>>(type: T, props: P, children: C) => {type: T, children: C} & P)
   * )}
   */
  /**
   * @param {string} type
   * @param {Props | ChildrenOrValue | null | undefined} [props]
   * @param {ChildrenOrValue | null | undefined} [value]
   * @returns {Node}
   */
  function(type, props, value) {
    const node = { type: String(type) };
    if ((value === void 0 || value === null) && (typeof props === "string" || Array.isArray(props))) {
      value = props;
    } else {
      Object.assign(node, props);
    }
    if (Array.isArray(value)) {
      node.children = value;
    } else if (value !== void 0 && value !== null) {
      node.value = String(value);
    }
    return node;
  }
);

export {
  u
};
//# sourceMappingURL=/build/_shared/chunk-DRLCRGAP.js.map
