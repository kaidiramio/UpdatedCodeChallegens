// Shortest Word -7kyu ; https://www.codewars.com/kata/57cebe1dc6fdc20c57000ac9

// DESCRIPTION:
// Simple, given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types.

function findShort(s){
    //   define variable and we can use split method w/parameter
      let arr = s.split(' ');
      
    //   now that the s is split we can target it's index (it's characters)
      let smallest = arr[0];
      
    //   loop through the legnth of each character
      for (let i = 0; i < arr.length; i++) {
        
    //     if arr's length is less than smallest the smallest = arr[i]
        if(arr[i].length < smallest.length){
          smallest = arr[i];
        }
      }
      
    //   retutn the smallest word 
      return smallest.length;
}


