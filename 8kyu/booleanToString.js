// DESCRIPTION:
// Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.

// https://www.codewars.com/kata/53369039d7ab3ac506000467

// params b, takes boolean value and returns yes string for true ? no string for false
// return a boolean  
// example okay => OKAY
// 


function boolToWord( bool ){
  return bool ? 'Yes':'No';
}

// OR 

function booleanToString(b){
  if(b){
    return 'true';
  }else{
    return 'false';
  }
}

function boolToWord( bool ){
  if (bool){
    return 'Yes'
  }else{
    return "No"
  }
  
  //...
}
  // takes parameter and sets a conditional that returns a string 