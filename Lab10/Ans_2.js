// ====== Output Explanation=====
//As per Synchronous code first will show these two lines

// 1. start
// 2. end

// As per priority of call back queues, next will print nextTick callbacks

// 3. nextTick 1
// 4. nextTick 2

// As per priority of call back queues, next will print Promise callbacks

// 5. Promise...1
// 6. Promise...2

// Now it will show output from timer cb queues

// 7. timeout 1
// 8. timeout 2

// At per periodic check nextTick will found a cb here and show output

// 9. nextTick 3

// Finally last callback from timer will execute

// 10. timeout 3

// ====================

console.log('start');

setTimeout(() => console.log('timeout 1'), 0);

setTimeout(() => {

    console.log('timeout 2')

    process.nextTick(() => console.log('nextTick 3'));

}, 0);

setTimeout(() => console.log('timeout 3'), 0);

new Promise((resolve, reject) => resolve('Hello')).then(() => console.log('Promise...1'));

new Promise((resolve, reject) => resolve('Hello')).then(() => console.log('Promise...2'));

process.nextTick(() =>  console.log('nextTick 1'));

process.nextTick(() =>  console.log('nextTick 2'));

console.log('end');