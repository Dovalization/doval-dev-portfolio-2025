import type { Root, RootContent, Element, Text } from "hast";

const makeSection = (children: Element[] = []): Element => ({
  type: "element",
  tagName: "section",
  properties: {},
  children,
});

const isWhitespace = (node: RootContent) =>
  node.type === "text" && (node as Text).value.trim() === "";

const hasContent = (section: Element) =>
  section.children.some((child) => !isWhitespace(child));

type Acc = { sections: RootContent[]; current: Element };

/**
 * Groups h2 headings and their following siblings into <section> elements.
 * Content before the first h2 is left unwrapped.
 */
const rehypeSectionize = () => {
  return (tree: Root) => {
    const { sections, current } = tree.children.reduce<Acc>(
      (acc, child) => {
        if (isWhitespace(child)) return acc;

        const el = child as Element;
        const tagName = child.type === "element" ? el.tagName : null;

        if (tagName === "hr") {
          const flushed = hasContent(acc.current)
            ? [...acc.sections, acc.current, child]
            : [...acc.sections, child];
          return { sections: flushed, current: makeSection() };
        }

        if (tagName === "h2") {
          const flushed = hasContent(acc.current)
            ? [...acc.sections, acc.current]
            : acc.sections;
          return { sections: flushed, current: makeSection([el]) };
        }

        return {
          ...acc,
          current: { ...acc.current, children: [...acc.current.children, el] },
        };
      },
      { sections: [], current: makeSection() },
    );

    tree.children = hasContent(current) ? [...sections, current] : sections;
  };
};

export default rehypeSectionize;
