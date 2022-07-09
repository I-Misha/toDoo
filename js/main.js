const form = document.querySelector("#form");
const taskInput = document.querySelector("#taskInput");
const tasksList = document.querySelector("#tasksList");
const emptyList = document.querySelector("#emptyList");

form.addEventListener("submit", addTask);

// Видалення задач
tasksList.addEventListener("click", deleteTask);

// відмічаємо задачу завершено
tasksList.addEventListener("click", doneTask);

function addTask(event) {
  // відміняємо відправку форми
  event.preventDefault();
  // достаємо тест задачі з поля вводу
  const taskText = taskInput.value;

  //   формуємо розмітку для нової задачі
  const taskHTML = ` <li class="list-group-item d-flex justify-content-between task-item">
<span class="task-title">${taskText}</span>
<div class="task-item__buttons">
  <button type="button" data-action="done" class="btn-action">
    <img src="./img/tick.svg" alt="Done" width="18" height="18" />
  </button>
  <button type="button" data-action="delete" class="btn-action">
    <img src="./img/cross.svg" alt="Done" width="18" height="18" />
  </button>
</div>
</li>`;
  //   добавляємо задачу на сторінку
  tasksList.insertAdjacentHTML("beforeend", taskHTML);

  //    Очишчаємо поле вводу в відновлюємо на него фокус
  taskInput.value = "";
  taskInput.focus();
  // Провірка якщо у  списку задач більше 1-го елемента то ми скриваємо блок список задач
  if (emptyList.children.length > 1) {
    emptyList.classList.add("none");
  }
}
function deleteTask(event) {
  // провіряємо что клік по кнопці "видалити кнопку" був
  if (event.target.dataset.action === "delete") {
    const perenNode = event.target.closest(`li`);
    perenNode.remove();
  }
  //   якщо в списку задач 1 лемент показуємо блок список справ пустий
  if (tasksList.children.length === 1) {
    emptyList.classList.remove("none");
  }
}
function doneTask(event) {
  // провіряємо що був клік по кнопці 'задача виповнена'
  if (event.target.dataset.action === "done") {
    const parentNode = event.target.closest(".lisy-grouo-item");
    const taskTitle = parentNode.querySelector(".task - title");

    taskTitle.classList.toggle("task-title--done");
  }
}
