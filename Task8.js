function convertToHoursAndMinutes(minutes) {
    let hour = Math.floor(minutes / 60);
    let min = minutes % 60;
    return (hour + " hours, " + min + " minutes.")
}

console.log(convertToHoursAndMinutes(71));