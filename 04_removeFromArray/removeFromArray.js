let toRemoveIndex = 0;
let slimArray = [];
let checkArray = [];

const removeFromArray = function(arrayIn) {
    for (let i = 1; i < arguments.length; i++ ) {
        toRemoveIndex = arrayIn.indexOf(arguments[i]);
        if (toRemoveIndex > -1) {
            slimArray = arrayIn.splice(toRemoveIndex, 1);
        };
    };
    return arrayIn;
};

removeFromArray(["hey", 2, 3, "ho"], "hey", 3);

// Do not edit below this line
module.exports = removeFromArray;
 