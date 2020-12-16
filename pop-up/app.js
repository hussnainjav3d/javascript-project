const menuOpen = document.getElementById("open-btn");
const menuClose = document.getElementById("close-btn");
const headerToggle = document.getElementById("container");
menuOpen.addEventListener("click", () => {
  headerToggle.classList.add("show");
});
menuClose.addEventListener("click", () => {
  headerToggle.classList.remove("show");
});
