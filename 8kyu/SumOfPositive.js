//   a. trying to find the sum = + of all positive # only  
//   b. if there is nothing to sum, the sum is default to 0

function positiveSum(arr) {
    // variable is set to 0 as per b
      let sum = 0
       
    //    for loop that loops thru each array and their index
      for(let i = 0; i <arr.length; i++){
    //    checks to see if # is positive & adds the #'s'
        if (arr[i] > 0) sum += arr[i]
      }
      return (sum)
}