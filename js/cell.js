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
        this.input.addEventListener("keydown", (e) => this.play(e));
        // adding a event-listener for key-up event to check user input
        this.input.addEventListener("keyup", (e) => this.checkinput(e));

        // Appending created input to the output div
        output.appendChild(this.input);
        return;
    }

    play(e) {
        if (parseInt(e.key)) {
            e.target.value = " ";
        }
    }

    checkinput(e) {
        if (!parseInt(e.key)) {
            e.target.value = " ";
        } else {
            input(this.i, this.j, parseInt(e.key));
        }
    }
}