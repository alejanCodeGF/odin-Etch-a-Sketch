let SIZE = 16;
let current_color = "black";

function generate_grid(size){
    const container = document.querySelector("#grid-container");
    for (let i = 1; i <= size; i++){ // n divs (in column), and in every div n more (in row) (by default n = 16)
        const my_BigDiv = document.createElement("div");
        my_BigDiv.className = "bigGrid";
        for (let j = 1; j <= size; j++){
            const my_div = document.createElement("div");
            my_div.className = "grid";
            my_div.addEventListener("mouseover", () => {
                my_div.style["background-color"] = current_color;
            })
            my_BigDiv.appendChild(my_div);
        }
        container.appendChild(my_BigDiv);
    }
}

function remove_grid(){
    const container = document.querySelector("#grid-container");
    const my_BigDiv = document.querySelectorAll(".bigGrid");
    my_BigDiv.forEach(div => {
        container.removeChild(div);
    });
}

const color_buttons = document.querySelectorAll(".color-button");
color_buttons.forEach(button => {
    button.addEventListener("click", () => {
        current_color = button.name;
    }) 
});

const clear_button = document.querySelector(".clear");
clear_button.addEventListener("click", () => {
    remove_grid();
    generate_grid(SIZE);
});

const size_button = document.querySelector(".size");
size_button.addEventListener("click", () => {
    temp = prompt("Size of the grid (n x n)");
    if (temp == null) {}
    else if (temp < 1 || temp > 100){
        alert("Put a number between 1 and 100");
    }
    else if (temp != parseInt(temp)){
        alert("Please, put a valid number");
    }
    else {
        SIZE = temp
        remove_grid();
        generate_grid(SIZE);
    }
});

generate_grid(SIZE); // start the game