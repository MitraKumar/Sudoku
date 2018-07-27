class Box {
    constructor(index, values) {
        this.index = index;
        this.data = values;
    }

    render(output) {
        // Create a box
        let box = document.createElement("DIV");

        // setting attributes to the created div element
        box.setAttribute("class", "box");

        let x = Math.floor(this.index / 3);
        let y = Math.floor(this.index % 3);

        for (let i = 0; i < this.data.length; i++) {

            let index_i = x * 3 + Math.floor(i / 3);
            let index_j = y * 3 + Math.floor(i % 3);


            let cell = new Cell(index_i, index_j, this.data[i]);
            cell.render(box);
        }

        // Appending to the output div
        output.appendChild(box);
    }
}