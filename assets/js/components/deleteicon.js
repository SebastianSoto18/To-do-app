import { displayTask } from "./readTask.js";

const deletetaskicon = (id) => {
    const i = document.createElement('i');
    i.classList.add("fas" ,"fa-trash-alt" ,"trashIcon" ,"icon")
    i.addEventListener('click', () => deletetask(id));
    return i;
}

const deletetask = (id) => {
    const li =document.querySelector("[data-task-list]");
    const tasklist = JSON.parse(localStorage.getItem('task'));
    const index = tasklist.findIndex(task => task.id === id);
    tasklist.splice(index, 1);
    li.innerHTML="";
    localStorage.setItem("task",JSON.stringify(tasklist));
    displayTask();
}

export default deletetaskicon;