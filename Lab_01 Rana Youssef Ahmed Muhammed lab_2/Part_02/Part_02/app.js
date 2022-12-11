const line = document.getElementsByTagName("line")[0];
// const body = document.getElementsByTagName("body")[0];
const svgElement = document.getElementsByTagName("svg")[0];
let x1 = parseInt(line.getAttribute("x1"));
let y1 = parseInt(line.getAttribute("y1"));
let x2 = parseInt(line.getAttribute("x2"));
let y2 = parseInt(line.getAttribute("y2"));
let animation;

function startAnimation() {
  animation = setInterval(() => {
    line.setAttribute("x2", `${(x2 += 53.75)}`);
    line.setAttribute("y2", `${(y2 += 25)}`);
    if (
      x2 > svgElement.width.animVal.value &&
      y2 > svgElement.height.animVal.value
    ) {
      clearInterval(animation);
      alert("Animation Ended");
    }
  }, 200);
}

startAnimation();
