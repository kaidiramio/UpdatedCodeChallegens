// friends or foes 
function friend(friends){
    //   filter strings using loop targeting friends.length
      let output= []
      
    //   length of incoming increment
      for(let i = 0; i < friends.length; i++)
    //   if name === 4 leters push into output array
        if(friends[i].length === 4){
         output.push(friends[i])
        }return output;
    //  no? return entire output
}