const repeatString = function(str, times) {
    result = '';
    if (times < 0)
    return'ERROR';
    for (let i = 0; i < times; i++){
        result = result.concat(str);
    }
    return result;
};

// Do not edit below this line
module.exports = repeatString;
