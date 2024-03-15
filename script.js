const SIZE = 10;
// const SIZEX = 10; en un futuro poder hacer rectangulo el grid, no cuadrados como está ahora simetrico
// const SIZEY = 10;
const container = document.querySelector("#grid-container")

for (let i = 1; i <= SIZE; i++){ // creo 16 divs (en columna), con cada div 16 mas (en fila)
    const my_BigDiv = document.createElement("div");
    my_BigDiv.className = "bigGrid "+ i;
    for (let j = 1; j <= SIZE; j++){
        const my_div = document.createElement("div")
        my_div.className = "grid "+ j;
        my_div.addEventListener("mouseover", () => {
            my_div.style["background-color"] = "blue";
        })
        my_BigDiv.appendChild(my_div);
    }
    container.appendChild(my_BigDiv)
}