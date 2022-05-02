// <!-- If you can't sleep, just count sheep!! 
// https://www.codewars.com/kata/5b077ebdaf15be5c7f000077/train/javascript -->

// loop 
const countSheep = function (num){
    let result = '';
    for (let i = 1; i <= num; i++){
        result += i.toString() + ' sheep...'
    }
    return result
  }