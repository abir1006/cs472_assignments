// ===Output and explanation ===
// setImmediate is prioritize callback then timer & IO:
// 1. Immediate

// timeout cb has higher priority than IO, so now output will be this:
// 2. timeout

// Finally
// 3. readFile....

const fs = require('fs');


fs.readFile('hello.txt', () => {

    console.log('readFile....');

});

setTimeout(() => console.log('timeout'), 0);

setImmediate(() => console.log('Immediate'));