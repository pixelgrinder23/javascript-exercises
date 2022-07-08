// Remove punctuation & white space
// Xmake lower case
// Xfind length - if even remove the middle letter 
// split in half 
// put the second half into an array
// reverse the array & change back to a string .reverse.toString()
// compare the arrays with one another to see if they match



const palindromes = function (isIt) {

    //makes lower case & removes unwanted characters
    let stripped = isIt.replace(/[^a-zA-Z]/g, '').toLowerCase(); 
    
    //gets half length & removes decimal places
    const half = Math.trunc(stripped.length / 2);

    //compares reversed first half & second half of the string & returns true or false;
    return (stripped.split('', half).reverse().join('') === stripped.substr(-half));

};

// Do not edit below this line
module.exports = palindromes;
