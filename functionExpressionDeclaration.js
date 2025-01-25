
function simpleCalculate(num1, num2, operation){
    console.log(operation(num1, num2))
}

const calcSum = function(num1, num2) {
    return num1 + num2;
}
const calcDifference = function(num1, num2) {
    return num1 - num2;
}
const calcProduct = function(num1, num2) {
    return num1 * num2;
}
const calcQuotient = function(num1, num2) {
    return num1 / num2;
}

const operations = {
    addition: calcSum,
    subtraction: calcDifference,
    multiplication: calcProduct,
    division: calcQuotient
}

simpleCalculate(6, 3, operations.addition)
simpleCalculate(6, 3, operations.subtraction)
simpleCalculate(6, 3, operations.multiplication)
simpleCalculate(6, 3, operations.division)