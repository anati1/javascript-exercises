const fibonacci = function(num) {
    num = Number.parseInt(num);
    if (Number.isNaN(num) || num < 1){
        return "OOPS"
    }
    if (num === 1 ||  num === 2)
        return 1; //first and second fibonacci sequence numbers
    else
    {
        first = 1;
        second = 1;
        current = 1;
        for(let i = 3; i <= num ; i++){
            current = first + second;
            first = second;
            second = current;
        }
    }
    return current;
};

// Do not edit below this line
module.exports = fibonacci;
