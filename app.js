const projectList = [];

const text = "This is the text to be write in div";
const header = document.getElementById("buttons");
projectList.forEach((project) => {
  const newElement = document.createElement("button");
  header.appendChild(newElement);
  const id = `${project.trim().toLowerCase().replaceAll(" ", "-")}`;
  newElement.setAttribute("id", id);
  newElement.addEventListener("click", () => {
    console.log("clicked: ", id);
  });
  newElement.innerHTML = project;
});
