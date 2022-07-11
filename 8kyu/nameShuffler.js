// Name Shuffler
// https://www.codewars.com/kata/559ac78160f0be07c200005a

// DESCRIPTION:
// Write a function that returns a string in which firstname is swapped with last name.

// Example(Input --> Output)

// "john McClane" --> "McClane john"


function nameShuffler(str){
    // reverses and then joins/ concats elements ; reverses and then joins/ concats elements
    return str.split(' ').reverse().join(" ");
}
  