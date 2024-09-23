//@ts-check

const cursorCategories = {
  geneal: ["auto", "default", "none"],
  linkAndState: ["context-menu", "help", "pointer", "progress", "wait"],
  selection: ["cell", "crosshair", "text", "vertical-text"],
  dragAndDrop: ["alias", "copy", "move", "no-drop", "not-allowed", "grab", "grabbing"],
  resizeAndScroll: [
    "all-scroll",
    "col-resize",
    "row-resize",
    "n-resize",
    "e-resize",
    "s-resize",
    "w-resize",
    "ne-resize",
    "nw-resize",
    "se-resize",
    "sw-resize",
    "ew-resize",
    "ns-resize",
    "nesw-resize",
    "nwse-resize",
  ],
  zoomInOut: ["zoom-in", "zoom-out"],
};

const container = document.getElementById("container");

for (const category in cursorCategories) {
  const cursorList = cursorCategories[category];
  const categoryElement = document.createElement("div");
  const CursorWrapper = document.createElement("div");
  const hr = document.createElement("hr");
  const h2 = document.createElement("h2");
  h2.innerText = category;

  categoryElement.classList.add("category");
  CursorWrapper.classList.add("cursor-wrapper");

  categoryElement.appendChild(h2);
  categoryElement.appendChild(hr);
  categoryElement.appendChild(CursorWrapper);
  if (container) container.appendChild(categoryElement);

  for (const cursor of cursorList) {
    const cursorElement = document.createElement("div");
    cursorElement.classList.add("cursor");
    cursorElement.style.cursor = cursor;
    cursorElement.innerText = cursor;
    CursorWrapper.appendChild(cursorElement);
  }
}
