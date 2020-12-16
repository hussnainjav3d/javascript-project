const toggle = document.getElementById("toggle");
toggle.addEventListener("change", (e) => {
  // console.log("cliked", body);
  document.body.classList.toggle("dark", e.target.checked);
});
