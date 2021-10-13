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



function deleteDiv() {
    let grid = document.querySelector("#div-container");
    grid.removeChild(div);
}

//    let grid = document.querySelector("#div-container");
//grid.removeChild(div);

function updateGrid () {

    for (let i = 0; i < sizeSlider.value * sizeSlider.value; i++) {
        let grid = document.querySelector("#div-container");
        const div = document.createElement("div");
        div.classList.add("div");
        div.style.width = "512px";
        div.style.height = "512px";
        div.style.border = "1px solid";
        grid.appendChild(div);
    }
}

