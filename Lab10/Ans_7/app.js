const {getFullname} = require('./pattern1');

getFullname();


// ==== Explanation ====
// There wont be any error here, output will be "Josh Edward"
// because here getFullname destructed as object property which
// is a function of module.export return from pattern1.js