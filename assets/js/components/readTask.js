import { createTask } from "./addTask.js";
import { uniqueDates, orderDates } from "../services/date.js";
import dateElement from "./dateElement.js";

export const displayTask = () => {
    const tasklist= JSON.parse(localStorage.getItem('task') || []);
    const list = document.querySelector('[data-task-list]');

    const dates = uniqueDates(tasklist);
    const orderedDates = orderDates(dates);
    dates.forEach(date => {
        const dateMoment = moment(date, 'DD/MM/YYYY');
        list.appendChild(dateElement(date));
        tasklist.forEach(task => {
                const taskDate = moment(task.dateformat, 'DD/MM/YYYY');
                const diff=dateMoment.diff(taskDate);
                if(diff===0){
                list.appendChild(createTask(task));
                }
        });

    });

    
    
}