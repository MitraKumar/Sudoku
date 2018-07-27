class Cell {
    constructor(i, j, val) {
        this.i = i;
        this.j = j;
        this.value = val;
        this.input;
    }

    render(output) {
        // Create a cell
        this.input = document.createElement("INPUT");

        // setting attributes to the created input element
        this.input.setAttribute("type", "text");
        this.input.setAttribute("class", "input");
        this.input.setAttribute("id", this.j + this.i * 9);

        if (this.value !== 0) {
            this.input.setAttribute("value", this.value);
            this.input.setAttribute("disabled", true) // disabling the this.input field for no further use
        }

        // adding a event-listener for key-down event to clear previous input 
        this.input.addEventListener("keydown", this.play);
        // adding a event-listener for key-up event to check user input
        this.input.addEventListener("keyup", this.checkinput);

        // Appending created input to the output div
        output.appendChild(this.input);
        return;
    }

    play(e) {
        if (parseInt(e.key)) {
            this.value = " ";
        }
    }

    checkinput(e) {
        if (!parseInt(e.key)) {
            this.value = " ";
        } else {
            let i = Math.floor(this.id / 9);
            let j = Math.floor(this.id % 9);
            Sudoku.input(i, j, parseInt(e.key));
        }
    }
}