import "./styles.css";
import { domUpdate } from "./dom";

const addBtn = document.querySelector("#add");
const submitBtn = document.querySelector("#submit");
const taskDialog = document.querySelector("#dialog");
const form = document.querySelector("#form");

addBtn.addEventListener("click", () => {
  form.reset();
  taskDialog.showModal();
});

submitBtn.addEventListener("click", domUpdate);
