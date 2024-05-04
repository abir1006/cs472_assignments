const concat = (...rest) => {
   const [a, b, c] = rest;
   return [...a, ...b, ...c]
}

let result = concat('hi', [1,2,3], ['Hello','world'])

console.log(result)