// IIFE exports firstname and lastname via module.exports.
// Reassignment of exports doesn't affect the final output,
// which is "John Smith" (from the getFullName call)
// followed by the exported object with the function.

const result = (function(exports, module){

    exports = module.exports;

    exports.firstname = 'John';

    module.exports.lastname = 'Smith';

    exports = {

        getFullName: function(){

            console.log('John Smith')

        }

    }

    return module.exports;

}).apply(null, [null, {exports: {}}]);

console.log(result);