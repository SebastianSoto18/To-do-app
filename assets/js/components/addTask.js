import { uniqueDates } from "../services/date.js";
import checkcomplete from "./checkcomplete.js";
import deletetaskicon from "./deleteicon.js";
import { displayTask } from "./readTask.js";
//TODO agregar alertas con sweetalert

export const addTask = (e) => {

    e.preventDefault();

    const list=document.querySelector('[data-task-list]');
    const input =document.querySelector('[data-form-input]');
    const calendar =document.querySelector('[data-form-date]');


    const value = input.value;
    const date = calendar.value;
    calendar.value='';
    input.value='';
    const dateformat = moment(date).format('DD/MM/YYYY');

    var tasklist=[];
   
    try{
          tasklist = JSON.parse(localStorage.getItem('task') || []);
    }catch(e){
         tasklist =[];
    }
    
    
    
    if( value.trim() === '' || date.trim() === '') {
        alert('Please fill in all fields');
        return;
    }

    const complete = false ;
    const taskObj ={
        value,
        dateformat,
        complete,
        id: uuid.v4(),
    };
    

    tasklist.push(taskObj);

    localStorage.setItem("task",JSON.stringify(tasklist));

    list.innerHTML="";
    displayTask();
};

    

export const createTask = ({value,dateformat,complete,id}) => {
   
    const check = checkcomplete(id);

    if(complete){
        check.classList.toggle("fas");
        check.classList.toggle("completeIcon");
        check.classList.toggle("far");
    }


    const dateElement = document.createElement('span');
        dateElement.innerHTML = dateformat;
    const taskcontainer = document.createElement('div');
        taskcontainer.classList.add('taskcontainer');
        taskcontainer.appendChild(check);
    const task=document.createElement('li');
        task.classList.add('card');
        task.appendChild(taskcontainer);
    const tittletask=document.createElement('span');
        tittletask.classList.add('task');
        tittletask.innerHTML=value;

    
    taskcontainer.appendChild(tittletask);
    task.appendChild(dateElement);
    task.appendChild(deletetaskicon(id));

    return task;
};

export default addTask;