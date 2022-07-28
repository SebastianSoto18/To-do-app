
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

export default checkcomplete;