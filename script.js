const drawingZone = document.createElement("div");
drawingZone.classList.add("drawing-zone");

for(let i = 0; i < 16; i++){
    let colDiv = document.createElement("div");
    colDiv.classList.add("grid-box");
    drawingZone.appendChild("colDiv");

    for(let j = 0; j < 16; j++){
        let rowDiv = document.createElement("div");
        rowDiv.classList.add("grid-box");
        colDiv.appendChild(rowDiv);     
    }
}