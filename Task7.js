function celsiusToFarenheit(temperature) {
    return (temperature * 1.8) + 32;
}

function farenheitToCelsius(temperature) {
    return (temperature - 32) * 5/9;
}

console.log(celsiusToFarenheit(200));
console.log(farenheitToCelsius(392));