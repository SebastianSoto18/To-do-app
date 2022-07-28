const deletetaskicon = (e) => {
    const i = document.createElement('i');
    i.classList.add("fas" ,"fa-trash-alt" ,"trashIcon" ,"icon")
    i.addEventListener('click', deletetask);
    return i;
}

const deletetask = (e) => {
    const padre = e.target.parentElement;
    padre.remove();
}

export default deletetaskicon;