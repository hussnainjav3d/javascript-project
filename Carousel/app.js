const imgs = document.getElementById("imgs");
const img = document.querySelectorAll("#imgs img");
const img2 = document.getElementById("imgs2");
let idx = 0;
let index = 0;
function imgSliderVertical() {
  idx++;
  if (idx > img.length - 1) {
    idx = 0;
  }
  imgs.style.flexDirection = "column";
  imgs.style.transform = `translateY(${-idx * 500}px)`;
}

function imgSliderHorizental() {
  index++;
  if (index > img.length - 1) {
    index = 0;
  }
  img2.style.transform = `translateX(${-index * 500}px)`;
}

setInterval(() => {
  imgSliderVertical();
  imgSliderHorizental();
}, 2000);
