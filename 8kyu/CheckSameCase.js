// Check same case -https://www.codewars.com/kata/5dd462a573ee6d0014ce715b/train/javascript

// Write a function that will check if two given characters are the same case.

// If either of the characters is not a letter, return -1
// If both characters are the same case, return 1
// If both characters are letters, but not the same case, return 0
// Examples
// 'a' and 'g' returns 1

// 'A' and 'C' returns 1

// 'b' and 'G' returns 0

//   check if two given characters are the same = comparison 
//   if/else statements & utilize toLowerCase() amd upperCase since those are the two cases
  
function sameCase(a, b){
   //   if either characters are not a letter, return -1 ; 
    if(a.toUpperCase() === a.toLowerCase() || b.toLowerCase() === b.toUpperCase()){
       return -1
  //   if both characters are the same case, return 1 
     }else if(a === a.toLowerCase() && b === b.toLowerCase() || a === a.toUpperCase() && b === b.toUpperCase()){
         return 1
  //   if both characters are letters, but not the same caser, return 0
     }else{
       return 0
     }
}