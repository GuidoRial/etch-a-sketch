let colorPicker = document.getElementById("#colorPicker");
let colorBtn = document.getElementById("#colorBtn");
let rainbowBtn = document.getElementById("#rainbowBtn");
let eraserBtn = document.getElementById("#eraserBtn");
let clearBtn = document.getElementById("clearBtn");
let sizeValue = document.querySelector(".size-value");
let sizeSlider = document.querySelector(".size-slider");
let grid = document.getElementById("#div-container");


//change the value shown in the DOM as you slide the slider
function updateSizeValue (value) {
    sizeValue.innerHTML = `${sizeSlider.value} x ${sizeSlider.value}`;
}

//when you change the value of the slider, change the size of the grid
sizeSlider.addEventListener('input', function (e) {
    updateSizeValue();
    updateGrid();
})

function createDivs () {
    for (let i = 0; i < sizeSlider.value * sizeSlider.value; i++) {
        let grid = document.querySelector("#div-container");
        const div = document.createElement("div");
        div.classList.add("div");
        div.style.border = "0px solid";
        grid.appendChild(div);
    }
}


function updateGrid () {
    clearBoard();
    createDivs();

}

function clearBoard () {
    let clear = Array.from(document.querySelectorAll(".div"));
    clear.forEach(wipe => wipe.remove());
}

//Now it only deletes the divs, in the future I want this botton to paint everything white, but by now this is good enough as i want to be able to fit the squares where they should go
clearBtn.addEventListener("click", function (e) {
    clearBoard();
})