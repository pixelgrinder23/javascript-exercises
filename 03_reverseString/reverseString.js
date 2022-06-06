const reverseString = function(stringIn) {
    const revArray = Array.from(stringIn);
    revArray.reverse();
    return revArray.join('');
};

// Do not edit below this line
module.exports = reverseString;
 