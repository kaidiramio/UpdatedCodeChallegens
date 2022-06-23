// Is it a palindrome? - https://www.codewars.com/kata/57a1fd2ce298a731b20006a4/javascript

// DESCRIPTION:
// Write a function that checks if a given string (case insensitive) is a palindrome.


function isPalindrome(x) {
    // condition if string = string in reverese = alert it's a pal 
    if(x.toLowerCase() === x.toLowerCase().split('').reverse().join('')){
        return(true)
    }else{
        return (false)
    }
}