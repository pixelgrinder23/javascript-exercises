const sumAll = function(start, end) {

    let summed = 0;

    if ((start > -1 && end > -1) && (typeof(start) != 'string' && typeof(end) != 'string')) {
        if (end < start ) {
            for (let i = end; i <= start; i++) {
                summed += i;
            };
        } else {
            for (let i = start; i <= end; i++) {
                summed += i;
            };
        };
        return summed;
    } else {
        return 'ERROR';
    };
    
};

// Do not edit below this line
module.exports = sumAll;
 