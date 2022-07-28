import checkcomplete from "./components/checkcomplete.js";
import deletetaskicon from "./components/deleteicon.js";

    const btn =document.querySelector('[data-form-btn]');

    const createTask = (e) => {
        e.preventDefault();
        const input =document.querySelector('[data-form-input]');
        const value = input.value;
        input.value='';
        const taskcontainer = document.createElement('div');
        taskcontainer.appendChild(checkcomplete());
        const task=document.createElement('li');
        const list=document.querySelector('[data-task-list]');
        task.classList.add('card');
        task.appendChild(taskcontainer);
        const tittletask=document.createElement('span');
        tittletask.classList.add('task');
        tittletask.innerHTML=value;
        taskcontainer.appendChild(tittletask);
        task.appendChild(deletetaskicon());
        list.appendChild(task);
    };

    btn.addEventListener('click', createTask);
