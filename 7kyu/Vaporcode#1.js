DESCRIPTION:
// V A P O R C O D E - https://www.codewars.com/kata/5966eeb31b229e44eb00007a/javascript


// ASC Week 1 Challenge 4 (Medium #1)

// Write a function that converts any sentence into a V A P O R W A V E sentence. a V A P O R W A V E sentence converts all the letters into uppercase, and adds 2 spaces between each letter (or special character) to create this V A P O R W A V E effect.

// Note that spaces should be ignored in this case.

// Examples
// "Lets go to the movies"       -->  "L  E  T  S  G  O  T  O  T  H  E  M  O  V  I  E  S"
// "Why isn't my code working?"  -->  "W  H  Y  I  S  N  '  T  M  Y  C  O  D  E  W  O  R  K  I  N  G  ?

function vaporcode(string) {

    // toUpperCase () -> 'HELLO' capitalizes all letters

    // .split(' ') -> ['HELLO'] makes HELLO into an array with lenght = 1

    // .join('') -> HELLO to make new string

    // .split ('') -> 'H', 'E', 'L', 'L', 'O' makes array with each letter as an index (length 5; index 0-4)

    // .join('  ') -> two spaces = H E L L O 

    return string.toUpperCase().split(' ').join('').split('').join('  ');
}

vaporcode('hello') // 'H  E  L  L  O" 