const data = unsolved['1'];

let sudoku = new Sudoku(data);
sudoku.start();
sudoku.render();

document.querySelector('#submit').addEventListener('click', () => sudoku.checkSolved());