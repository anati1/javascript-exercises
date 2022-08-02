const reverseString = function(myStr) {
    myArr = myStr.split('');
    let temp
    //Switch the first half with last half of array
    for(let i = 0, j = myArr.length-1; i<=j ;i++, j-- ){
        temp = myArr[i];
        myArr[i] = myArr[j];
        myArr[j] = temp;
    }
    return myArr.join('');
};

// Do not edit below this line
module.exports = reverseString;
