const text =
  "Welcome to The show, here it is a new type of text Traveliing &hearts;";
const container = document.getElementById("container");
let index = 0;
function textWrite() {
  container.innerText = text.slice(0, index);
  index++;
  if (index > text.length) {
    index = 0;
  }
}

setInterval(() => {
  textWrite();
}, 120);
