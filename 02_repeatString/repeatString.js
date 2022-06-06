const repeatString = function(string, num) {
    let stringRepped = '';
    if (num < 0) {
        return 'ERROR';
    } else {
        for(let i = 1; i <= num; i++) {
            stringRepped = stringRepped + string;
        };
    };
return stringRepped;
};

// Do not edit below this line
module.exports = repeatString;
