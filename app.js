let colorBtn = document.getElementById("colorBtn");
let rainbowBtn = document.getElementById("rainbowBtn");
let eraserBtn = document.getElementById("eraserBtn");
let clearBtn = document.getElementById("clearBtn");
let sizeValue = document.querySelector(".size-value");
let sizeSlider = document.querySelector(".size-slider");
let grid = document.getElementById("#container");

//change the value shown in the DOM as you slide the slider
function updateSizeValue (value) {
    sizeValue.innerHTML = `${sizeSlider.value} x ${sizeSlider.value}`;
}

//when you change the value of the slider, change the size of the grid. It does the same as the clear button so that you don't have to change size and then press it
sizeSlider.addEventListener('input', function (e) {
    updateSizeValue();
    updateGrid();
})

function createDivs () {
    for (let i = 0; i < sizeSlider.value * sizeSlider.value; i++) {
        let grid = document.querySelector("#container");
        let div = document.createElement("div");
        div.classList.add("div");
        div.style.width = `${512 / sizeSlider.value}px`;
        div.style.height = `${512 / sizeSlider.value}px`;
        grid.appendChild(div);
    }
}

function deleteDivs () {
    let clear = Array.from(document.querySelectorAll(".div"));
    clear.forEach(wipe => wipe.remove());
}

function updateGrid () {
    deleteDivs();
    createDivs();
}

function clearBoard () {
    deleteDivs();
    createDivs();
}

function getRandomColor() {
    let red = String(Math.floor(Math.random() * 255));
    let green = String(Math.floor(Math.random() * 255));
    let blue = String(Math.floor(Math.random() * 255));
    return `rgb(${red}, ${green}, ${blue})`;
  }

function activateClassicMode () {
    container.addEventListener('mouseover', function (e) {
        e.target.style.backgroundColor = "black";
    })
}

function activateRainbowMode () {
    container.addEventListener('mouseover', function (e) {
        e.target.style.backgroundColor = getRandomColor();
})
}

function activateEraserMode () {
    container.addEventListener('mouseover', function (e) {
        e.target.style.backgroundColor = "#F5F3F5";
    })
}

clearBtn.addEventListener("click", function (e) {
    clearBoard();
    activateClassicMode();
})

colorBtn.addEventListener("click", activateClassicMode);

rainbowBtn.addEventListener("click", activateRainbowMode);

eraserBtn.addEventListener("click", activateEraserMode);

createDivs();
