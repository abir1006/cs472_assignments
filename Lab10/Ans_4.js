// === Explanation ===
// In nodejs - it will give output "undefined"
// Because this.message inside logMessage doesn't refer to the global message,
// in this case this only refer to the function context and there are no message property inside function
// But in browser it will show "Hello World" because var message will be added as global window property


var message = 'Hello World';

function logMessage() {

    console.log(this.message);

}

logMessage();