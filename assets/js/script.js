(()=>{
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
        const content= ` 
            <i class="fas fa-trash-alt trashIcon icon"></i> 
        `;
        list.appendChild(task);
    };

    btn.addEventListener('click', createTask);

    const checkcomplete = (e) => {
        const i = document.createElement('i');
        i.classList.add('far','fa-check-square','icon');
        i.addEventListener('click', completeTask);
        return i;
    }

    const completeTask = (e) => {
        const i = e.target;
        i.classList.toggle("fas");
        i.classList.toggle("completeIcon");
        i.classList.toggle("far");
    }

})();