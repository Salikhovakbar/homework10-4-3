const radiusEl = document.getElementById("border-radius");
const widthEl = document.getElementById("width-size");
const heightEl = document.getElementById("height-size");
const filterEl = document.getElementById("filter");
const photoEl = document.querySelector(".container");
const borderEL = document.getElementById("border");
function radius(){
    photoEl.style.borderRadius = radiusEl.value + "%"
}
function width(){
    photoEl.style.width = widthEl.value + "px"
}
function height(){
    photoEl.style.height = heightEl.value + "px"
}
function filterBrightness(){
    photoEl.style.filter = `brightness(${filterEl.value}%)`;
}
radiusEl.addEventListener("input", radius);
widthEl.addEventListener("input", width);
heightEl.addEventListener("input", height);
filterEl.addEventListener("input", filterBrightness);
borderEL.addEventListener("input", () => {
    photoEl.classList.toggle("containerborder")
});