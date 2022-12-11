const red = document.getElementById("red");
const green = document.getElementById("green");
const blue = document.getElementById("blue");
const selectedColorElement = document.getElementById("selected-color");
const body = document.getElementsByTagName("body")[0];
const header = document.getElementById("colors-header");
console.log(body);

// Changing Color Events
red.addEventListener("change", function (e) {
  color();
});

green.addEventListener("change", function (e) {
  color();
});

blue.addEventListener("change", function (e) {
  color();
});

// Changing Color Function
function color() {
  let selectedColor = `RGB(${red.value} , ${green.value} , ${blue.value})`;
  selectedColorElement.innerHTML = selectedColor;
  body.style.backgroundColor = selectedColor;
  header.style.color = `RGB(${parseInt(red.value) + 50} , ${
    parseInt(green.value) + 50
  } , ${parseInt(blue.value) + 50})`;
}

color();
