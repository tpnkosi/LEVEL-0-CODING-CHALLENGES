function triangleArea(side1, side2, side3) {
    //For a right triangle, the hypotenuse is the longest side

    const parameters = [side1, side2, side3];
    const hypotenuse = Math.max(side1, side2, side3);
    const othersides = [];

    for(let i = 0; i < 3; i++) {
        if(parameters[i] != hypotenuse) {
            othersides.push(parameters[i]);
        }
    }

    //formula for area: A = 1/2bh
    const area = 1/2*(othersides[0]*othersides[1]);

    //Herons formula for area: A = sqr s(s-a)(s-b)(s-c), where s = semiperimeter
    const s = 1/2 * (side1+side2+side3);
    const area2 = Math.round(Math.sqrt(s*(s-side1)*(s-side2)*(s-side3)));

    //can return area OR area2
    return area;
}

console.log(triangleArea(8,3,9));