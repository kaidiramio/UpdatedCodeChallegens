// Shortest Word -7kyu

function findShort(s){
    //   define variable and we can use split method w/parameter
      let arr = s.split(' ');
      
    //   now that the s is split we can target it's index (it's characters)
      let smallest = arr[0];
      
    //   loop through the legnth of each character
      for (var i = 0; i < arr.length; i++) {
        
    //     if arr's length is less than smallest the smallest = arr[i]
        if(arr[i].length < smallest.length){
          smallest = arr[i];
        }
      }
      
    //   retutn the smallest word 
      return smallest.length;
}