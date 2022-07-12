// Descending Order -  https://www.codewars.com/kata/5467e4d82edf8bbf40000155

// DESCRIPTION:
// Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

// Examples:
// Input: 42145 Output: 54421

// Input: 145263 Output: 654321

// Input: 123456789 Output: 987654321

// non-negative integer = n as argument and n is param
// using methods parseInt (parses a string argument and returns an integer) split(Converts string into an array of strings), sort(sorts the elements of an array), reverse(reverses the order of the elements in an array), and join(creates and returns a new string by concatenating all of the elements in an array) we can accomplish this
// return the integer with digits in decending order
// example input 42145 output 54421, input 64582 output 86542

function descendingOrder(n){
    return (parseInt(String(n).split('').sort().reverse().join('')))

    // or (n + '')

    // parseInt string returns a string of n " 42145" takes string of (n)
    // split splits into array ["4", "2", "1", "4", "5"]
    
    // -> sort the array -> ["1", "2", "4", "4", "5"]

    // reverse -> ["5", "4", "4", "2", "1"]
    
    // join array together like 1234 (no space) "54421"
}

