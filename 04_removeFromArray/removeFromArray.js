let toRemoveIndex = 0;
let slimArray = [];

const removeFromArray = function(arrayIn) {
    for (let i = 1; i < arguments.length; i++ ) {
        toRemoveIndex = arrayIn.indexOf(arguments[i]);
        if (toRemoveIndex > -1) {
            slimArray = arrayIn.splice(toRemoveIndex, 1);
        };
    };
    return arrayIn;
};

// Do not edit below this line
module.exports = removeFromArray;
 