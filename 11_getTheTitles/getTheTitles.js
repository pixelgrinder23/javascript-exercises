const getTheTitles = function(books) {
    // creates a new array by going through the given array & returning the title from each object
    return books.map(book => `${book.title}`);
};

// Do not edit below this line
module.exports = getTheTitles;
