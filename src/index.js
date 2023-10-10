import "./styles.css";

const dialog = document.querySelector("#dialog");
const addBtn = document.querySelector("#add");

addBtn.addEventListener("click", () => dialog.showModal());