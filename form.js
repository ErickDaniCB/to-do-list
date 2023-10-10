const taskInp = document.querySelector("#task");
const dateInp = document.querySelector("#date");
const detailInp = document.querySelector("#details");
const submitBtn = document.querySelector("#submit");

const tasks = [];

function createTask() {
  const taskInfo = {
    task: taskInp.value,
    date: dateInp.value,
    detailInp: detailInp.value,
  };

  return taskInfo;
}

function submitTask(event) {
  const task = createTask();
  tasks.push(task);
  console.log(tasks);
}

submitBtn.addEventListener("click", submitTask);
