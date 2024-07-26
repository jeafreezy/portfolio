import { parseDocument } from "htmlparser2";

/**
 *This function extracts the first 100 words from the provided html string.
 *
 * htmlString: The html string to parse and extract.
 *
 * @returns: The parsed html, returning only the first 20 words.
 */
export const extractFirst100Words = (htmlString: any) => {
  const feed = parseDocument(htmlString);
  let textContent = "";

  const traverseNodes = (node: any) => {
    if (node.type === "text") {
      textContent += node.data + " ";
    }

    if (node.children) {
      node.children.forEach(traverseNodes);
    }
  };

  traverseNodes(feed);

  // Split into words and get the first 100
  return textContent.split(/\s+/).slice(0, 20).join(" ").trim() + "...";
};
