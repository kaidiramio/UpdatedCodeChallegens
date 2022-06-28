// write a funtion determining whether a string is a palindrome

let isPal = function (string){

    // condition if string = string in reverese = alert it's a pal 
    if(string === string.split('').reverse().join('')){
        alert(string + 'is a Palindrome')
    // if string is not else runs and alerts
    }else{
        alert(string + 'is not a Palindrome')
    }
}