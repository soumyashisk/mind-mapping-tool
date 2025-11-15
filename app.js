const mapArea = document.getElementById("mapArea");
let nodeId = 0;

mapArea.addEventListener("click", (e) => {
  createNode(e.clientX, e.clientY);
});

function createNode(x, y) {
  const node = document.createElement("div");
  node.className = "node";
  node.textContent = "Node " + ++nodeId;
  // node.contentEditable = true;
  node.style.opacity = 0;
  node.style.pointerEvents = "none";

  mapArea.appendChild(node);

  const posX = Math.max(
    10,
    Math.min(
      x - node.clientWidth / 2,
      window.innerWidth - node.clientWidth - 10
    )
  );

  const posY = Math.max(
    10,
    Math.min(
      y - node.clientHeight / 2,
      window.innerHeight - node.clientHeight - 10
    )
  );

  node.style.left = posX + "px";
  node.style.top = posY + "px";
  node.dataset.id = nodeId;
  node.style.opacity = 1;
  node.style.pointerEvents = "all";

  return node;
}
