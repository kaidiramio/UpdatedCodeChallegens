// Vowel Count

function getCount(str) {
  
    // definte variables 
      let vowelsCount = 0;
      
    //   vowels
      let vowels = ["a", "e", "i", "o", "u"]
    
    //   loop through string and see if each character is a vowel
      for(let character of str .toLowerCase()){
        if(vowels.includes(character)){
          vowelsCount++
          
    //        inside the for loop, we can look at and go over each character in the string.
    //       use includes method
    //       increased the number we stored in vowelsCount if it was
        }
      }
      
      return vowelsCount;
}