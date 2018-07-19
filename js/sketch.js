function main() {
  createBoard();
  startTimmer();

  // submit function
  document.getElementById("submit").addEventListener("click", checkSolved);

  // quit function 
  document.getElementById("quit").addEventListener("click", reset);
}

main();



// console.log(unsolved[1]);



// var new_board = solveGrid(unsolved[1]);
// console.log(new_board);