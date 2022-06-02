// odd or Even? 

function oddOrEven(array){
    // definte variable sum = result
    let result = 0;
    // loop through the array.length 
    for(let i = 0; i < array.length; i++){
        // assigns result to array[i]
        result += array[i];
    }
    // coniditonal using modulus (even = 0 or else odd)
    if(result %2 === 0){
        return 'even'
    }else{
        return 'odd'
    }
}