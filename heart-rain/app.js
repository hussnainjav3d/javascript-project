const heartContainer = document.querySelector(".heart-container");

function heartRain() {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.innerHTML = "&#10084;";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = Math.random() * 3 + 3 + "s";
  heartContainer.appendChild(heart);
  setTimeout(() => {
    heart.remove();
  }, 5000);
}

setInterval(() => {
  heartRain();
}, 300);
