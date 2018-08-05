const data = unsolved['1'];
const sudoku = new Sudoku(data);

function input(i, j, value) {
    sudoku.input(i, j, value);
}