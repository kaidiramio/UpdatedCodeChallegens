// codewar 05/15 String repeat

function repeatStr (n, s) {
    let newString = []
    for(let i=0; i < n; i++){
      newString.push(s)
  //     adds one or more elements to end of array https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push
    }
    return newString.join('');
    
  //   The join() method creates and returns a new string by concatenating all of the elements in an array
  }