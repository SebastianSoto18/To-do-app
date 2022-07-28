const btn =document.querySelector('[data-form-btn]');

const createTask = (e) => {
    e.preventDefault();
    const input =document.querySelector('[data-form-input]');
    const value = input.value;
    console.log(value);

}

btn.addEventListener('click', createTask);