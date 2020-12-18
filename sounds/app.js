const sounds = ["applause", "boo", "gasp", "tada", "victory", "wrong"];
const soundsContainer = document.querySelector(".sounds-container");
sounds.forEach((sound) => {
  const btn = document.createElement("button");
  btn.innerText = sound.toUpperCase();
  btn.classList.add("btn");
  btn.addEventListener("click", () => {
    stopSound();
    document.getElementById(sound).play();
  });
  soundsContainer.appendChild(btn);
});
function stopSound() {
  sounds.forEach((sound) => {
    const track = document.getElementById(sound);
    track.pause();
    track.currentTime = 0;
  });
}
