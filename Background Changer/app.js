const hexColor = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btnHex = document.getElementById("btn");
const btnRgb = document.getElementById("btn-rgb");
const btnRgba = document.getElementById("btn-rgba");
const btnHsl = document.getElementById("btn-hsl");
const colorName = document.getElementById("color-name");

function hexColorGenerator() {
  let hexColorIdx = Math.floor(Math.random() * hexColor.length);
  let backgroundColor = "#";
  for (let i = 0; i < 6; i++) {
    let hexColorIdx = Math.floor(Math.random() * hexColor.length);
    backgroundColor += hexColor[hexColorIdx];
  }
  return backgroundColor;
}

function colorRangeGenerator() {
  return Math.floor(Math.random() * 256);
}
function hueRangeGenerator() {
  return Math.floor(Math.random() * 360);
}
function percentageGenerator() {
  return Math.floor(Math.random() * 100);
}

btnHex.addEventListener("click", () => {
  colorName.innerHTML = hexColorGenerator();
  document.body.style.backgroundColor = hexColorGenerator();
});

btnRgb.addEventListener("click", () => {
  let rgbColorName = `rgb(${colorRangeGenerator()},${colorRangeGenerator()},${colorRangeGenerator()})`;

  colorName.innerHTML = rgbColorName;
  document.body.style.backgroundColor = rgbColorName;
});

btnRgba.addEventListener("click", () => {
  let rgbColorName = `rgba(${colorRangeGenerator()},${colorRangeGenerator()},${colorRangeGenerator()},${Math.random()})`;

  colorName.innerHTML = rgbColorName;
  document.body.style.backgroundColor = rgbColorName;
});
btnHsl.addEventListener("click", () => {
  let hslColorName = `hsl(${hueRangeGenerator()},${
    percentageGenerator() + "%"
  },${percentageGenerator() + "%"})`;
  colorName.innerHTML = hslColorName;
  document.body.style.backgroundColor = hslColorName;
});
