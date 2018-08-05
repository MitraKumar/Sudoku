sudoku.start();
sudoku.render();

document.querySelector('#submit').addEventListener('click', () => sudoku.checkSolved());