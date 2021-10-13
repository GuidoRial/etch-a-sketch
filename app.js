let colorPicker = document.getElementById("#colorPicker");
let colorBtn = document.getElementById("#colorBtn");
let rainbowBtn = document.getElementById("#rainbowBtn");
let eraserBtn = document.getElementById("#eraserBtn");
let clearBtn = document.getElementById("clearBtn");
let sizeValue = document.querySelector(".size-value");
let sizeSlider = document.querySelector(".size-slider");
let grid = document.getElementById("#div-container");


function updateSizeValue (value) {
    sizeValue.innerHTML = `${sizeSlider.value} x ${sizeSlider.value}`;
}

sizeSlider.addEventListener('input', function (e) {
    updateSizeValue();
    updateGrid();
})

function createDiv () {
    let grid = document.querySelector("#div-container");
    const div = document.createElement("div");
    div.classList.add("div");
    div.style.border = "50px solid";
    grid.appendChild(div);
}

function reloadGrid () {
    clearGrid();
    updateGrid(currentSize);
}


function clearGrid() {
    grid.innerHTML = ''
  }



function updateGrid () {
    for (let i = 0; i < sizeSlider.value * sizeSlider.value; i++) {
        createDiv();
    }
}





