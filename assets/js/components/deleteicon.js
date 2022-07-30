import { displayTask } from "./readTask.js";
import { createTask } from "./addTask.js";

const deletetaskicon = (id) => {
    const i = document.createElement('i');
    i.classList.add("fas" ,"fa-trash-alt" ,"trashIcon" ,"icon")
    i.addEventListener('click', () => deletetask(id));
    return i;
}

const deletetask = (id) => {
    Swal.fire({
        title: '¿Estas seguro de eliminar esa tarea?',
        showDenyButton: true,
        confirmButtonText: 'Eliminar',
        denyButtonText: `Calcelar`,
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
            const li =document.querySelector("[data-task-list]");
            const tasklist = JSON.parse(localStorage.getItem('task'));
            const index = tasklist.findIndex(task => task.id === id);
            const task = createTask(tasklist[index]);
            task.classList.remove("animate__bounceIn");
            task.classList.remove("animate__bounceOut");
            tasklist.splice(index, 1);
            li.innerHTML="";
            localStorage.setItem("task",JSON.stringify(tasklist));
            displayTask();
            Swal.fire('Tarea eliminada con exito!', '', 'success')
        } 
      })
}

export default deletetaskicon;