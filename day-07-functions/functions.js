function squareArea(side) {
    return(side * side);
}

let squareResult = squareArea(5);
console.log(squareResult);

function circleArea(radius) {
    return(Math.PI * radius * radius);
}

let circleResult = circleArea(5);
console.log(circleResult.toFixed(2));

function triangleArea(base, height) {
    return(base * height / 2);
}

let triangleResult = triangleArea(10, 5);
console.log(triangleResult);