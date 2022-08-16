const palindromes = function (str) {
    let checkPalindrome = str.replace(/[!,\.\s]/g, "").toLowerCase();
    let result = checkPalindrome.toLowerCase().split("").reverse().join("");
    return checkPalindrome === result ? true : false;
};

// Do not edit below this line
module.exports = palindromes;
