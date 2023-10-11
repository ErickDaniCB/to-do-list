import { tasks, submitTask } from "./form";

export { domUpdate };

const contentDiv = document.querySelector("#task-content");

function domUpdate() {
  submitTask();
  contentDiv.innerHTML = "";
  tasks.forEach((task) => {
    const div = document.createElement("div");
    const taskName = document.createElement("p");
    const taskDate = document.createElement("p");

    taskName.textContent = task.task;
    div.appendChild(taskName);

    taskDate.textContent = `Date: ${task.date}`;
    div.appendChild(taskDate);

    if (task.details !== "") {
      const taskDesc = document.createElement("p");
      taskDesc.textContent = `Details: ${task.details}`;
      div.appendChild(taskDesc);
    }
    contentDiv.appendChild(div);
  });
}
