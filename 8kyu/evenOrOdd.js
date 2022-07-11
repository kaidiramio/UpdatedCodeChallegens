// Even or Odd - https://www.codewars.com/kata/53da3dbb4a5168369a0000fe

// DESCRIPTION:
// Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

function evenOrOdd(number) {

  // coniditonal using modulus (even = 0 or else odd)

  if (number % 2 == 0){
    return 'Even'
  } else{
    return 'Odd'
  }
    
}

// OR using ternary (if comfortable)

// ternary syntax condition ? exprIfTrue : exprIfFalse 
function even_or_odd(number) {
  return number % 2 ? "Even" : "Odd"
}

