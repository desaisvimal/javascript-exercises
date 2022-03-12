const reverseString = function(text) {
    let str=text;
    let reverseStr=str.split("").reverse().join("");
    return reverseStr;
};

// Do not edit below this line
module.exports = reverseString;
