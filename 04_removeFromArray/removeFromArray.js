const removeFromArray = function(myArr,...theArgs) {
    let lastIndex = myArr.length;
    let lastIndexOfArgs = theArgs.length;
    for(let i = 0; i < lastIndex; i++){
        for(let j = 0; j < lastIndexOfArgs; j++){
            if (myArr[i] === theArgs[j]){
                myArr.splice(i,1);
                i--;
                lastIndex = myArr.length;
            }
        }
    }
    return myArr;
};

// Do not edit below this line
module.exports = removeFromArray;