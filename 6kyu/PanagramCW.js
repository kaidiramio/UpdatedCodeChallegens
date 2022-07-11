
// Detect Pangram - https://www.codewars.com/kata/545cedaa9943f7fe7b000048/train/javascript

// A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

// Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.



function isPangram(string){
    //   str varable to denfine string and make it lowercase
      let str = string.toLowerCase()
      
    //   alphabet variable to define the aphabet + split to make an array so we can access the index later
      let alpha = 'abcdefghijklmnopqrstuvwxyz'.split('')
      
    //   for loop - loop through alpha.length then run conditionals 
      for(i = 0; i < alpha.length; i++){
      //  conditional for str to check to see if the string has all of alpha using indexOf()
        if(str.indexOf(alpha[i])<0){
          return false
        }
      }
      return true 
}