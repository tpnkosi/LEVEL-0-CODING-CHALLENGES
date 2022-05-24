function maxNumber(num1, num2, num3) {
    let maxNum;
    if(num1 > num2 && num1 > num3) {
        maxNum = num1;
    } else if(num2 > num1 && num2 > num3) {
        maxNum = num2;
    } else {
        maxNum = num3;
    }
    return maxNum;
}

console.log(maxNumber(19,15,20));
console.log(maxNumber(19,37,20));
console.log(maxNumber(45,15,20));