function getSum( a,b ){
    // two integers a, b (can be + or -)
    //   sum of all integers between & including
    //   return 
    //   if two #'s are equal return a || b
      let min = Math.min(a, b),
    //returns the lowest-valued number passed into it
          max = Math.max(a, b);
    // returns the largest of the zero or more numbers given
       return (max - min + 1) * (min + max) / 2;
       + getSum(a+1, b)
}