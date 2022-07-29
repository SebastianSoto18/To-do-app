
const checkcomplete = (id) => {
    const i = document.createElement('i');
    i.classList.add('far','fa-check-square','icon');
    i.addEventListener('click',(e)=> completeTask(e,id));
    return i;
}

const completeTask = (e, id) => {
    const i = e.target;
    i.classList.toggle("fas");
    i.classList.toggle("completeIcon");
    i.classList.toggle("far");

    const taskList = JSON.parse(localStorage.getItem('task') || []);
    const index = taskList.findIndex(task => task.id === id);
    console.log(index);
    taskList[index]["complete"]= !taskList[index]["complete"];
    localStorage.setItem("task",JSON.stringify(taskList));
}

export default checkcomplete;