const leapYears = function(year) {
    //leap years are years divisible by four
    //years divisible by 100 are not leap years
    //unless they are divisible by 400
    let leapYear = false;
    if (year%4 === 0){
    leapYear = true;
        if(year%100 === 0 && year%400 !== 0){
            leapYear = false;
        }
    }
    return leapYear;
};

// Do not edit below this line
module.exports = leapYears;
