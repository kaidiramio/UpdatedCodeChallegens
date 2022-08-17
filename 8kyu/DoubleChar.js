
function doubleChar(str){
    // new empty string 

    let newWord =''

    // loop thru str and add new character

    for(let i = 0; i < str.length; i++){
        newWord += str[i] + str[i]
    }

    return newWord
}
