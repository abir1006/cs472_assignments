function sum(arr) {
    return arr.filter( v => v > 20).reduce( (curr, prev) => curr + prev )
}

let result = sum([8, 30,40,15,10,50]);

console.log(result)