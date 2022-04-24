// Getting data from a local file
var index = Math.floor(Math.random() * unsolved.length);
var board = unsolved[index];
// var board = solved[1];

var display = document.getElementById("board");
var timmer = document.getElementById("timmer");
var t = new Timer();

var score = 0;

// Timmer Function
function startTimmer() {
	setInterval(function () {
		var txt = t.show();
		timmer.innerHTML = txt;
		t.update();
	}, 1000);
}

// Board design
function createBoard() {
	for (var l = 0; l < 9; l += 3) {
		for (var k = 0; k < 9; k += 3) {

			var box = document.createElement("div");
			box.setAttribute("class", "box");
			for (var i = 0; i < 3; i++) {
				for (var j = k; j < k + 3; j++) {
					var cell = document.createElement("input");

					if (board[i + l][j] > 0) {
						cell.setAttribute("value", board[i + l][j]);
						cell.setAttribute("disabled", true);
					}

					cell.setAttribute("type", "number");
					cell.setAttribute("min", 1);
					cell.setAttribute("max", 9);
					cell.setAttribute("maxLength", 2);
					cell.setAttribute("class", "field");
					cell.setAttribute("id", parseInt(j) + parseInt((i + l) * 9));
					cell.addEventListener("keyup", play);

					box.appendChild(cell);
				}
			}
			display.appendChild(box);
		}
	}
}

function resetBoard() {
	var cells = document.getElementsByClassName("field");
	for (var i = 0; i < cells.length; i++) {
		var cell = cells[i];
		var id = cell.id;
		var row = parseInt(id / 9);
		var col = parseInt(id % 9);

		if (board[row][col]) {
			cell.value = board[row][col];
		} else {
			cell.value = " ";
		}
	}
}


function play(e) {
	var input = parseInt(e.key);
	var id = this.id;
	var row = parseInt(id / 9);
	var col = parseInt(id % 9);

	if (input === 0) {
		// Getting the first character for the input, if zero is pressed.
		const inputText = this.value;
		this.value = inputText[0];
		return;
	}

	board[row][col] = input;
	this.value = e.key;
}

function verticalMatch(board, row, col) {
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

function horizontalMatch(board, row, col) {
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

function boxMatch(board, row, col) {
	for (var i = 0; i < row; i += 3) {
		for (var j = 0; j < col; j += 3) {
			if (!horizontalMatch(board, i + 3, j + 3) || !verticalMatch(board, i + 3, j + 3))
				return false;
		}
	}
	return true;
}

function isEmpty(board) {
	for (let i = 0; i < 9; i++) {
		for (let j = 0; j < 9; j++) {
			if (board[i][j] === 0) return true;
		}
	}
	return false;
}

function checkSolved(elm) {
	if (isEmpty(board)) {
		alert("Please Complete the game!!");
		return;
	} else {
		if (horizontalMatch(board, 9, 9) && verticalMatch(board, 9, 9) && boxMatch(board, 9, 9)) {
			let header = document.getElementById('modalHeader');
			header.innerHTML = "You Win!!";
			t.stop();
			elm.target.setAttribute("data-target", "#myModal");
			elm.target.setAttribute("data-toggle", "modal");
		} else {
			let header = document.getElementById('failureHeader');
			header.innerHTML = "oops!!You Loose..";
			t.reset();
			elm.target.setAttribute("data-target", "#failure");
			elm.target.setAttribute("data-toggle", "modal");
		}
	}

}

function reset() {
	board = unsolved[1];
	t.reset();
	t.start();
	resetBoard();
}