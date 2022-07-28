const btn =document.querySelector('[data-form-btn]');

const createTask = (e) => {
    e.preventDefault();
    const input =document.querySelector('[data-form-input]');
    const value = input.value;
    input.value='';
    const task=document.querySelector('[data-task-list]');
    const content= ` 
    <li class="card">
        <div>
        <i class="far fa-check-square icon"></i>
            <span class="task">${value}</span>
        </div>
        <i class="fas fa-trash-alt trashIcon icon"></i> 
    </li>`;
    task.innerHTML+=content;

}

btn.addEventListener('click', createTask);