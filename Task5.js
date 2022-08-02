function triangleArea(side1, side2, side3) {
    //Herons formula for area: A = sqr s(s-a)(s-b)(s-c), where s = semiperimeter
    const s = 1/2 * (side1+side2+side3);
    const area = Math.round(Math.sqrt(s*(s-side1)*(s-side2)*(s-side3)));
    return area;
}

console.log(triangleArea(8,3,9));