/*
    Write a program that prints the numbers from 1 to n. But for 
    multiples of three print “Fizz” instead of the number and for 
    the multiples of five print “Buzz”. For numbers which are 
    multiples of both three and five print “FizzBuzz”.
*/

function fizzBuzz(n) {
    for (let i = 1; i <= n; i++) {
        // Is a multiple of 3 and 5?
        if (i % 15 === 0) {
            console.log('fizzbuzz')
        } else if (i % 3 === 0) {
            // Is a multiple of 3?
            console.log('fizz')
        } else if (i % 5 === 0) {
            // Is a multiple of 5?
            console.log('buzz')
        } else {
            // Is neither of the above?
            console.log(i)
        }
    }
}

// example fizzBuzz(20)
// 1
// 2
// Fizz
// 4
// Buzz
// Fizz
// 7
// 8
// Fizz
// Buzz
// 11
// Fizz
// 13
// 14
// FizzBuzz
// 16
// 17
// Fizz
// 19
// Buzz

module.exports = fizzBuzz

// we want to use modulus and remember 0 = even 

function fizzBuzz2(){
    // loop/iterate over i and increase up to 100
    for(i = 1; i <= 101; i++){

    // if multiple of 3 & 5 (divisible by 15) print fizzbuzz
        if(i % 15 === 0){
            console.log('fizzBuzz')
        }

        // if it's a multiple of 3 print buzz
        
        else if(i % 3 === 0){
            console.log('fizz')
        }

        // if it's a multiple of 5 print fizz
        else if(i % 5 === 0){
            console.log('buzz')
        }

       else{
           console.log(i)
       }

    }

}

fizzBuzz2()