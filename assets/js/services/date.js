export const uniqueDates = (taskList) => {
    const unique = [];

    taskList.forEach(task => {
        if (!unique.includes(task.dateformat)) {
            unique.push(task.dateformat);
        }
    });

    return unique;
}


export const orderDates = (dates) => {
    return dates.sort((a, b) => {
            const fristDate = moment(a, 'DD/MM/YYYY');
            const secondDate = moment(b, 'DD/MM/YYYY');
            return fristDate.diff(secondDate);
    });
};