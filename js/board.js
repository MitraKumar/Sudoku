class Board {
    constructor(values) {
        this.data = values
    }

    render() {
        // Create a board
        let board = document.createElement("DIV");

        // setting attributes to the created div element
        board.setAttribute("id", "board");

        for (let i = 0; i < this.data.length; i++) {
            let box = new Box(i, this.data[i]);
            box.render(board);
        }

        // Appending to the output div
        let output = document.querySelector('#output');
        output.appendChild(board);
    }
}