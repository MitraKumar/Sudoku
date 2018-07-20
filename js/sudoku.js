class Sudoku {
    constructor(data) {
        this.data = data;
        this.sudoku = Sudoku.createSudokuMatrix(this.data);
        this.board = new Board(this.sudoku);

    }

    render() {
        this.board.render();
    }

    static createSudokuMatrix(data) {
        let new_Data = [];
        for (var l = 0; l < 9; l += 3) {
            for (var k = 0; k < 9; k += 3) {
                let temp_data = []
                for (var i = 0; i < 3; i++) {
                    for (var j = k; j < k + 3; j++) {
                        temp_data.push(data[i + l][j]);
                    }
                }
                new_Data.push(temp_data);
            }
        }
        return new_Data;
    }

}