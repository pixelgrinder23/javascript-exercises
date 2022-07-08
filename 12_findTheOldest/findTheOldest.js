const findTheOldest = function(people) {

    const currentYear = (new Date()).getFullYear();

    //checks for missing yearOfDeath & replaces with curremt year
    for (i = 0; i < people.length; i++){
        if (people[i].yearOfDeath === undefined) { people[i].yearOfDeath = currentYear };
    };

    //sorts people into oldest first
    people.sort(function(peepA, peepB) {
        return (peepA.yearOfDeath - peepA.yearOfBirth) > (peepB.yearOfDeath - peepB.yearOfBirth) ? -1 : 1
    });

    //returns top object
    return people[0];
};

// Do not edit below this line
module.exports = findTheOldest;
