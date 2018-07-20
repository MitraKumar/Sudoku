class Board {
    constructor(values) {
        this.data = values
    }

    render() {
        // Create a box
        let board = document.createElement("DIV");

        // setting attributes to the created div element
        board.setAttribute("id", "board");

        for (let values of this.data) {
            let box = new Box(values);
            box.render(board);
        }

        // Appending to the output div
        let output = document.querySelector('#output');
        output.appendChild(board);
    }
}