

function myFilter(array, callback) {
    const result = [];
    array.forEach((elem, index, arr) => {
        if(callback(elem, index, arr)) {
            result.push(elem)
        }
    })
    return result;
}

const numbers = [1, 2, 3, 4, 5];

const evenNums = myFilter(numbers, function(num) {
    return num % 2 === 0;
})

console.log(evenNums)

const biggerThenThree = myFilter(numbers, function(num) {
    return num < 4;
})

console.log(biggerThenThree)