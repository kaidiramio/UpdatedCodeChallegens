// https://www.codewars.com/kata/53369039d7ab3ac506000467

// DESCRIPTION:
// Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.

// conditional 

function boolToWord(bool){

  // pass parameter => conditional if boolean =
  if (bool) {
    // if bool return 'Yes'
    return 'Yes';
     // if NOT bool return 'No'
  } else {
    return 'No';
  }
}

// OR 

function boolToWord( bool ){
    return bool ? 'Yes':'No';
}

  // ternary syntax condition ? exprIfTrue : exprIfFalse 