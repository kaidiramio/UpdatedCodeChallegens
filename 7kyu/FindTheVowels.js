// param - takes in word (string) // empty array // loop through array and target character index
// return - a list of index of vowels in a given word
// example - given a string "super", we should return a list of [2,4]
// psuedo 

function vowelIndices(word){
    // variables 
    word = word.toLowerCase()
    var newAns = [];
    var vowels = ['a', 'e', 'i', 'o', 'u', 'y'];
    // loop through the word 
    for(i=0; i<word.length; i++){
      if(vowels.indexOf(word[i])>=0){
          // GOT TO HERE on own -->
        newAns.push(i+1)}
    }// return newArray
    return newAns
}