const grid = document.querySelector(".grid");
let gridSize = 16;
createGrid();
const resize = document.querySelector(".grid-size");
resize.addEventListener("click", () => changeGridSize());
const clean = document.querySelector(".clean-screen");
clean.addEventListener("click", () => cleanScreen());

function createGrid(){
    for(let i = 0; i < gridSize; i++){
        const boxSize = (500-gridSize*2)/gridSize;
        let colDiv = document.createElement("div");
        colDiv.classList.add("grid-column");
        grid.appendChild(colDiv);
    
        for(let j = 0; j < gridSize; j++){
            let rowDiv = document.createElement("div");
            rowDiv.classList.add("grid-box");
            rowDiv.setAttribute("style", `width: ${boxSize}px; height: ${boxSize}px`);
            colDiv.appendChild(rowDiv);
            rowDiv.addEventListener("mouseover", () => paintBox(rowDiv, boxSize));
        }
    }    
}

function destroyGrid(){
    const destroy = document.querySelectorAll(".grid-column");
    for(let i = 0; i < destroy.length; i++){
        destroy[i].remove();
    }
}

function paintBox(box, boxSize){
    box.setAttribute("style", `width: ${boxSize}px; height: ${boxSize}px ;
                      background-color:black;`);
}

function changeGridSize(){
    const currentSize = gridSize;
    gridSize = 0;
    while(gridSize < 2 || gridSize > 32){
        gridSize = parseInt(prompt("Enter the new size (2 - 32)", currentSize));
    }
    
    destroyGrid();
    createGrid();
}

function cleanScreen(){
    const boxSize = (500-gridSize*2)/gridSize;
    const box = document.querySelectorAll(".grid-box");
    for(let i = 0; i < gridSize*gridSize; i++){
        box[i].setAttribute("style", `width: ${boxSize}px; height: ${boxSize}px;
                             background-color: white;`);
    }
}