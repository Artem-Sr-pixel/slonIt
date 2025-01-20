// Суммирование всех чисел объекта

function sumOfObjectNums(obj) {
    let result = 0;

    for (let key in obj) {
        if(typeof obj[key] === 'number'){
            result += obj[key]
        }else if( typeof obj[key] === 'object'){
            result += sumOfObjectNums(obj[key])
        }
    }
    return result

}

const data = {
    a: 10,
    b: 20,
    c: {
        d: 30,
        e: [40, 50, { f: 60 }]
    },
    g: "not a number",
    h: [70, 80, 90]
};

console.log(sumOfObjectNums(data))

// Сортировка ключей объекта по убыванию

function getSorted(obj){
    const sortedArray = []

    for(let key in obj){
        if(typeof obj[key] === 'number'){
            sortedArray.push(key)
        }
    }
    sortedArray.sort((a, b) => obj[b] - obj[a])
    return sortedArray
}

const data2 = {
    name: 'Vasya',
    friends: 5,
    likes: 1,
    projects: 7
};

console.log(getSorted(data2))