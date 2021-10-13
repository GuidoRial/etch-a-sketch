let colorPicker = document.getElementById("#colorPicker");
let colorBtn = document.getElementById("#colorBtn");
let rainbowBtn = document.getElementById("#rainbowBtn");
let eraserBtn = document.getElementById("#eraserBtn");
let clearBtn = document.getElementById("clearBtn");
let sizeValue = document.querySelector(".size-value");
let sizeSlider = document.querySelector(".size-slider");

function updateSizeValue (value) {
    sizeValue.innerHTML = `${sizeSlider.value} x ${sizeSlider.value}`;
}

sizeSlider.addEventListener('input', function (e) {
    updateSizeValue();
})





const container = document.querySelector("#div-container");
const div = document.createElement("div");
div.classList.add("div");
div.style.backgroundColor = "black";
div.style.border = "16px solid";
container.appendChild(div);

