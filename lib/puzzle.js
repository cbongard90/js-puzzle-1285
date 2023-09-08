// We get all the tiles
const tiles = document.querySelectorAll("td");

// We create the canMove function
const canMove = (tile) => {
  // extract the columnIndex (cell) and rowIndex of the tile
  const tileColumn = tile.cellIndex;
  const tileRow = tile.parentElement.rowIndex;

  // We get the empty tile
  const emptyTile = document.querySelector("td.empty");
  const emptyTileColumn = emptyTile.cellIndex;
  const emptyTileRow = emptyTile.parentElement.rowIndex;

  // we check if the tiles are on the same row OR column
  const sameRow = tileRow === emptyTileRow;
  const sameColumn = tileColumn === emptyTileColumn;

  // console.log(sameRow, sameColumn);

  //    8: row3 col 2     empty: row3 col3
  return (
    (sameRow && tileColumn === emptyTileColumn - 1) ||
    (sameColumn && tileRow === emptyTileRow - 1) ||
    (sameRow && tileColumn === emptyTileColumn + 1) ||
    (sameColumn && tileRow === emptyTileRow + 1)
  );
};

const moveTile = (tile) => {
  // We select the empty tile
  const emptyTile = document.querySelector("td.empty");

  // We transfer the value from the selected to the empty tile
  emptyTile.innerHTML = tile.innerHTML;
  // we remove the empty class to the empty tile
  emptyTile.classList.remove('empty');
  // We remove the inner content of the selected tile
  tile.innerHTML = '';
  // we add the empty class to the selected tile:
  tile.classList.add('empty');
}

const checkIfPlayerWins = () => {
  const tilesOrder = Array.from(document.querySelectorAll("td")).map(
    (element) => element.innerHTML
  );
  if (tilesOrder.join(",") === "1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,") {
    setTimeout(() => {
      alert("Congrats you win!");
    }, 200);
  }
}

// todo
const hintButton = document.getElementById("show-hint");

hintButton.addEventListener("click", () => {
  const hint = document.querySelector(".hint");
  hint.classList.toggle("active");
});

// We listen to the tiles
tiles.forEach((tile) => {
  // We add the event listener
  tile.addEventListener("click", () => {
    // if I can move the tile
    if (canMove(tile)) {
      // Move the tile
      moveTile(tile);

      // Check if the player wins
      checkIfPlayerWins();
    }
  });
});
