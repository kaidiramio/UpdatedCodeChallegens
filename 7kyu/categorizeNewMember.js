// https://www.codewars.com/kata/5502c9e7b3216ec63c0001aa/javascript

// Categorize New Member - DESCRIPTION:
// The Western Suburbs Croquet Club has two categories of membership, Senior and Open. They would like your help with an application form that will tell prospective members which category they will be placed.

// To be a senior, a member must be at least 55 years old and have a handicap greater than 7. In this croquet club, handicaps range from -2 to +26; the better the player the lower the handicap.

// Input
// Input will consist of a list of pairs. Each pair contains information for a single potential member. Information consists of an integer for the person's age and an integer for the person's handicap.

// Output
// Output will consist of a list of string values (in Haskell and C: Open or Senior) stating whether the respective member is to be placed in the senior or open category.

// Example
// input =  [[18, 20], [45, 2], [61, 12], [37, 6], [21, 21], [78, 9]]
// output = ["Open", "Open", "Senior", "Open", "Open", "Senior"] 

// KAI //
// Example
// input =  [[18, 20], [45, 2], [61, 12], [37, 6], [21, 21], [78, 9]]
// output = ["Open", "Open", "Senior", "Open", "Open", "Senior"]

// psuedo - Goal: create application form with certain conditions

// param can be data or n for age
// we have two categories senior and open resulting in array of strings 
// example: input = openOrSenior ([[1, 2], [3, 4], [5, 6], [65, 8], [55, 8]])

// output = ["Open", "Open", "Open", "Senior", "Senior"]

  
function openOrSenior (data) {
  // result = open or senior string / new array
  let result = [];

  // loop through data.length
  for(i=0; i<data.length; i++){
      // target index [0] of data // i.e 18 && target index [1] of data i.e 20
    if(data[i][0]>=55 && data[i][1]>7){
      //  if data >= 55 and handicap > 7 = Senior
      result.push("Senior");
    }else{
      //   ELSE (if not)
      result.push("Open");
    }
  }

  // return result 
  return result;
}

// Senior = 55+ and 7+
//   loop
//   conditional if 55 or > and handicap > 7 = Senior else OPEN
//   push result