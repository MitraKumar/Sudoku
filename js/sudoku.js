class Sudoku {
    constructor(data) {
        this.data = data;
        this.sudoku = Sudoku.createSudokuMatrix(this.data);
        this.board = new Board(this.sudoku);
        this.timer = new Timer();
    }

    render() {
        this.board.render();
    }

    start() {
        setInterval(() => {
            let txt = this.timer.show();
            document.querySelector('#timmer').innerHTML = txt;
            this.timer.update();
        }, 1000);
    }

    verticalMatch(board, row, col) {
        var hash = new Array(10);

        for (let i = 0; i < row; i++) {
            for (let j = 0; j < 10; j++) {
                hash[j] = 0;
            }

            for (let j = 0; j < col; j++) {
                hash[board[j][i]]++;
            }

            for (let j = 0; j < 10; j++) {
                if (hash[j] > 1) {
                    return false;
                }
            }
        }

        return true;
    }

    horizontalMatch(board, row, col) {
        let hash = new Array(10);

        for (let i = 0; i < row; i++) {
            for (let j = 0; j < 10; j++) {
                hash[j] = 0;
            }

            for (let j = 0; j < col; j++) {
                hash[board[i][j]]++;
            }

            for (let j = 0; j < 10; j++) {
                if (hash[j] > 1) {
                    return false;
                }
            }
        }

        return true;
    }

    boxMatch(board, row, col) {
        for (let i = 0; i < row; i += 3) {
            for (let j = 0; j < col; j += 3) {
                if (!this.horizontalMatch(board, i + 3, j + 3) || !this.verticalMatch(board, i + 3, j + 3))
                    return false;
            }
        }
        return true;
    }

    checkSolved() {
        if (this.horizontalMatch(this.data, 9, 9) && this.verticalMatch(this.data, 9, 9) && this.boxMatch(this.data, 9, 9)) {
            alert("You Win");
        } else {
            alert("Complete the game");
        }
    }

    input(i, j, value) {
        this.data[i][j] = value;
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