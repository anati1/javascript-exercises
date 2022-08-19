const findTheOldest = function(people) {
   return people.reduce(function(oldest, person) {
       //In case there no yearOfDeath
       let oldestYearOfDeath = oldest.yearOfDeath === undefined ? (new Date()).getFullYear() : oldest.yearOfDeath;
       let personYearOfDeath = person.yearOfDeath === undefined ? (new Date()).getFullYear() : person.yearOfDeath;
       //Calculate age
       let oldestPersonAge = oldestYearOfDeath - oldest.yearOfBirth; 
       let currentPersonAge = personYearOfDeath - person.yearOfBirth;
       //Check who is the oldest
       if (currentPersonAge > oldestPersonAge)
           return person;
       else
           return oldest;
    },
       {
            name: "Name",
            yearOfBirth: 0,
            yearOfDeath: 0
       }
    );
};

// Do not edit below this line
module.exports = findTheOldest;
