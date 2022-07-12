// Highest and Lowest - https://www.codewars.com/kata/554b4ac871d6813a03000035/javascript

// DESCRIPTION:
// In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

// Examples
// highAndLow("1 2 3 4 5");  // return "5 1"
// highAndLow("1 2 -3 4 5"); // return "5 -3"
// highAndLow("1 9 3 4 -5"); // return "9 -5"
// Notes

// All numbers are valid Int32, no need to validate them.
// There will always be at least one number in the input string.
// Output string must be two numbers separated by a single space, and highest number is first.

// More efficient using math max and math min methods

function highAndLow(numbers){
    //   create variables // param numbers = string that we will split into an array
      const highLowArr = numbers.split(' ');
          console.log (numbers.split(' '))
          
    // variables for max and min number taken from highLowArray using math.max method etc
      let maxNum = Math.max(...highLowArr)
//       console.log(maxNum)
      
      let minNum =  Math.min(...highLowArr)
    
      console.log(maxNum + ' ' + minNum)
    //   return the maxNum, space, minNum
}

highAndLow('1 2 3 4 5')

// or another way

function highAndLow(numbers){
    //   create variables // param numbers = string that we will split into an array
      var highLowArr = numbers.split(" ");
          console.log (numbers.split(' '))
          
//        variables for max and min number taken from the highlow variable
      let maxNum = highLowArr[0]
      console.log(maxNum)
      
      let minNum = highLowArr[0]
      
    //  for of loop through the array of numbers using variables above (max and min num)
    
        for(let num of highLowArr) {
            if(Number(num) > maxNum) {
                maxNum = num
    //           if number is greater than maxNum, maxNum equals num
        }
    
            if(Number(num) < minNum) {
                minNum = num
    //           if number is less than minNum, minNum equals num
          }
        }
    
        return(maxNum + " " + minNum)
    //   return the maxNum, space, minNum from loop above
}
highAndLow("1 2 3 4 5")

