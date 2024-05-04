const getNewArray = function (arrStr) {
    return arrStr.filter( str => str.length >= 5 && str.startsWith("a"));

}

let testArr = ['apple', 'banana', 'pineapple', 'umbrella', 'amanatsu']

let result = getNewArray(testArr);

console.log(result)