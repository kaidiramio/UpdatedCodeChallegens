// Convert a string to an array => https://www.codewars.com/kata/57e76bc428d6fbc2d500036d/javascript

// DESCRIPTION:
// Write a function to split a string and convert it into an array of words.

// Examples (Input ==> Output):
// "Robin Singh" ==> ["Robin", "Singh"]

// "I love arrays they are my favorite" ==> ["I", "love", "arrays", "they", "are", "my", "favorite"]


function stringToArray(string){

  // use split method since it creates array

	let strArray = string.split(' ')
//   ('') = split characters in words 
//   (' ') = split words in string
  
  return strArray

} 