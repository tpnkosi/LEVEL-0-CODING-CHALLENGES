function convertToHoursAndMinutes(minutes) {
    
    const hour = Math.floor(minutes / 60);
    let stringHour;
    switch(hour) {
        case 1:
            stringHour = "hour";
            break;
        default:
            stringHour = "hours";
            break;
    }

    const min = minutes % 60;
    let stringMinutes;
    switch(minutes) {
        case 1:
            stringMinutes = "minute";
            break;
        default:
            stringMinutes = "minutes";
            break;
    }

    return `${hour} ${stringHour}, ${min} ${stringMinutes}`;
}

console.log(convertToHoursAndMinutes(71));
console.log(convertToHoursAndMinutes(264));
console.log(convertToHoursAndMinutes(241));
console.log(convertToHoursAndMinutes(15));