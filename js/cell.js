class Cell {
    constructor(val) {
        this.value = val;
    }

    render(output) {
        // Create a cell
        let input = document.createElement("INPUT");

        // setting attributes to the created input element
        input.setAttribute("type", "text");
        input.setAttribute("class", "input");

        if (this.value !== 0) {
            input.setAttribute("value", this.value);
            input.setAttribute("disabled", true) // disabling the input field for no further use
        }

        // Appending created input to the output div
        output.appendChild(input);
        return;
    }
}