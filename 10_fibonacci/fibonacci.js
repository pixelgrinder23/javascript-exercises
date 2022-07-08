// each number is the sum of the 2 preceeding numbers

// create sequence to the nth instance in an array
// return that number

const fibonacci = function(a) {
    if (a < 0) {
        return 'OOPS';
    } else {
        //creates the fibonachi sequence up to the required position in an array
        const seq = [1,1];
        for (i = 2; i < a; i++) {
            seq.push(seq[i-1]+seq[i-2]);
        }
        //returns the last element in the array
        return seq[a-1];
    }
};

// Do not edit below this line
module.exports = fibonacci;
 