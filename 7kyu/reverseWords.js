// reverse words 
// Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

// parameter = accepts a string
// reverses each word in the string
// spaces in string should be retained

// split, reverese, join

function reverseWords(str) {
    // definte variable // creates an array
    let backwards= str.split('').reverse().join('').split(' ').reverse().join(' ')

    // space retained at end ' '
    return backwards
  
}