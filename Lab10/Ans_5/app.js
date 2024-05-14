const {getFullname} = require('./pattern1');

getFullname();

// ==== Explanation ====
// It will show error - because getName is an object but here it is calling like function.
// Actually "getName" is a property of object "getName". To fix this we have to call like this getName.getName()