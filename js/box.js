class Box {
    constructor(values) {
        this.data = values;
    }

    render(output) {
        // Create a box
        let box = document.createElement("DIV");

        // setting attributes to the created div element
        box.setAttribute("class", "box");

        for (let value of this.data) {
            let cell = new Cell(value);
            cell.render(box);
        }

        // Appending to the output div
        output.appendChild(box);
    }
}