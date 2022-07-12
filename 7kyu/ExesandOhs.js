// Exes and Ohs

// https://www.codewars.com/kata/55908aad6620c066bc00002a

// DESCRIPTION:
// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

// Examples input/output:

// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false

function sameAmountXO(str) {

    // variables for xcount and ocount 

    xCount = 0
    oCount = 0

     // loop through the str.length to look at every letter in the string
    for(i = 0; i < str.length; i++){
        // varable for each index of str? (the characters)
        let letter = str[i]

        // conditionals to check the character if x === X  OR o === 0 and increase the counter to continue this for each loop thru

        if (letter === 'x' || letter === 'X' ){
            xCount++
        }else if( letter === 'o' || letter === 'O'){
            oCount++
        }
    }

    // return whether or not xcount equals ocount (boolean)
    
    return xCount === oCount

    
}

// we'll have a function called XO that passes a param (str)
// comparision somehow? counter? 
// output will be a boolean // true or false
// this might look like sameAmountXO('ooxx') => true 
// sameAmountXO('oxxx') => false 


