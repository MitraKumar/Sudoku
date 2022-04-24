class Sudoku {
  static updateBorad(board, x, y, data) {
    return board.map((row, board_x) =>
      row.map((cell_value, board_y) => {
        if (board_x === x && board_y === y) {
          return data;
        }
        return cell_value;
      })
    );
  }

  static checkSolved(board) {
    if (
      this.horizontalMatch(board, 9, 9) &&
      this.verticalMatch(board, 9, 9) &&
      this.boxMatch(board, 9, 9)
    ) {
      return true;
    }
    return false;
  }

  static verticalMatch(board, row, col) {
    var hash = new Array(10);

    for (var i = 0; i < row; i++) {
      for (var j = 0; j < 10; j++) {
        hash[j] = 0;
      }

      for (var j = 0; j < col; j++) {
        hash[board[j][i]]++;
      }

      for (var j = 0; j < 10; j++) {
        if (hash[j] > 1) {
          return false;
        }
      }
    }

    return true;
  }

  static horizontalMatch(board, row, col) {
    var hash = new Array(10);

    for (var i = 0; i < row; i++) {
      for (var j = 0; j < 10; j++) {
        hash[j] = 0;
      }

      for (var j = 0; j < col; j++) {
        hash[board[i][j]]++;
      }

      for (var j = 0; j < 10; j++) {
        if (hash[j] > 1) {
          return false;
        }
      }
    }

    return true;
  }

  static boxMatch(board, row, col) {
    for (var i = 0; i < row; i += 3) {
      for (var j = 0; j < col; j += 3) {
        if (
          !this.horizontalMatch(board, i + 3, j + 3) ||
          !this.verticalMatch(board, i + 3, j + 3)
        )
          return false;
      }
    }
    return true;
  }

  static isEmpty(board) {
    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
        if (board[i][j] === 0) return true;
      }
    }
    return false;
  }
}
