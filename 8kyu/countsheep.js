// <!-- If you can't sleep, just count sheep!! 
// https://www.codewars.com/kata/5b077ebdaf15be5c7f000077/train/javascript -->

// Task:
// Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers.

// loop 
const countSheep = function (num){
    // result = emtpy string
    let result = '';

    // iterate and increament 
    for (let i = 1; i <= num; i++){

        // make a string and concat to include sheep so for each incriment it's '1 sheep... 2 sheep...' etc. 
        result += i.toString() + ' sheep...'
    }

    // return in empty string 
    return result
}