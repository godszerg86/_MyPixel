let gridContainer = document.querySelector(".grid-container");
gridContainer.addEventListener("click", colorize, false);

function colorize(element) {
  if (element.target.className === "grid-cell" || element.target.className === "grid-cell cell-last") {
    element.target.style.backgroundColor = document.querySelector("#myColorId").value;
  }
}

document.querySelector('#createButton').addEventListener("click", creator, false);

function creator() {
  let widthField = document.querySelector("#gridWidth");
  let heightField = document.querySelector("#gridHeight");

  let gridCell = document.createElement('div');
  gridCell.setAttribute('class', 'grid-cell');

  let gridRow = document.createElement('div');
  gridRow.setAttribute('class', 'grid-row');

  gridContainer.innerHTML = "";

  for (let i = 0; i < widthField.value; i++) {
    gridRow.appendChild(gridCell.cloneNode());
  }

  gridRow.lastChild.setAttribute('class', 'grid-cell cell-last');

  for (let i = 0; i < heightField.value; i++) {
    gridContainer.appendChild(gridRow.cloneNode(true));
  }

  gridContainer.lastChild.setAttribute('class', 'grid-row row-last');
}
