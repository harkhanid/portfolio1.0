import React from "react";
interface LinkParserProps {
  text: string;
}

export const parseMarkdownLinks = (
  text: string
): Array<{ type: "text" | "link"; content: string; href?: string }> => {
  const elements: Array<{
    type: "text" | "link";
    content: string;
    href?: string;
  }> = [];
  const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;

  let lastIndex = 0;
  let match;

  while ((match = linkRegex.exec(text)) !== null) {
    // Add plain text before the matched link
    if (match.index > lastIndex) {
      elements.push({
        type: "text",
        content: text.substring(lastIndex, match.index),
      });
    }

    // Add the link element
    const linkText = match[1];
    const linkUrl = match[2];
    elements.push({ type: "link", content: linkText, href: linkUrl });

    lastIndex = linkRegex.lastIndex;
  }

  // Add remaining plain text after the last link
  if (lastIndex < text.length) {
    elements.push({ type: "text", content: text.substring(lastIndex) });
  }

  return elements;
};

const LinkParser: React.FC<LinkParserProps> = ({ text }) => {
  const elements = parseMarkdownLinks(text);

  return (
    <>
      {elements.map((element, index) =>
        element.type === "link" ? (
          <a
            key={index}
            className="font-bold hover:text-purple-600 cursor-pointer"
            href={element.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            {element.content}
          </a>
        ) : (
          <span key={index}>{element.content}</span>
        )
      )}
    </>
  );
};

export default LinkParser;
