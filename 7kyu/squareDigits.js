// square digits 

function squareDigits(num){
    return Number(('' + num).split('').map(function (val) { 
        return val * val;}).join(''))
}

// 1.  .split takes a string and splits it into an array based on the character(s) passed to it so '' --> ("9119").split('') === ["9", "1", "1", "9"]

// 2. .map can work like a for loop but takes a function as an argument. That function is applied to every member of the array. --> 
// so ["9", "1", "1", "9"].map(function(val) { return val * val;}) === ["81", "1", "1", "81"]

// 3. .join does the opposite of .split. It takes an Array and concatenates it into a string based on the character(s) passed to it --> ["81", "1", "1", "81"].join('') === "811181"