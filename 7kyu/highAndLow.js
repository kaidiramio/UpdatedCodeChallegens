function highAndLow(numbers){
    //   create variables
      var highLow = numbers.split(" ");
      let maxNum = highLow[0]
      let minNum = highLow[0]
      
    //   loop through numbers using variables above (max and min num)
    
        for(let num of highLow) {
            if(Number(num) > maxNum) {
                maxNum = num
    //           if number is greater than maxNum, maxNum equals num
        }
    
            if(Number(num) < minNum) {
                minNum = num
    //           if number is less than minNum, minNum equals num
          }
        }
    
        return maxNum + " " + minNum
    //   return the maxNum, space, minNum from loop above
}