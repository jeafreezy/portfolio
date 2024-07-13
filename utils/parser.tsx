import { parseDocument } from "htmlparser2";

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
