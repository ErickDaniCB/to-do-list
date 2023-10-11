export { tasks, submitTask };

const taskInp = document.querySelector("#task");
const dateInp = document.querySelector("#date");
const detailInp = document.querySelector("#details");

const tasks = [];

function createTask() {
  const taskInfo = {
    task: taskInp.value,
    date: dateInp.value,
    details: detailInp.value,
  };

  return taskInfo;
}

function submitTask() {
  const task = createTask();
  tasks.push(task);
}
