function getInputData() {
  const inputData = document.getElementById("enterData").value;
  const createNode = document.getElementById("nodes");
  const spanTag = document.createElement("span");
  spanTag.textContent = inputData;
  createNode.append(spanTag);
}
function removeInputData() {
  const inputData = document.getElementsByTagName("span");
  const ask = confirm("You want to delete all the entered list");
  if (ask) {
    const parent = document.getElementById("nodes");
    parent.innerText = "";
  } else {
    return;
  }
}
const addText = document.querySelector("button");
addText.addEventListener("click", getInputData);

const removeText = document.getElementById("reset");
removeText.addEventListener("click", removeInputData);
