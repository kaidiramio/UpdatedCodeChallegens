  
// Senior = 55+ and 7+
//   loop
//   conditional if 55 or > and handicap > 7 = Senior else OPEN
//   push result
  
function openOrSenior (data) {
    // result = open or senior string / new array
    let result = [];

    // loop through data.length
    for(i=0; i<data.length; i++){
        // target index [0] of data // i.e 18 && target index [1] of data i.e 20
      if(data[i][0]>=55 && data[i][1]>7){
        //  if data >= 55 and handicap > 7 = Senior
        result.push("Senior");
      }else{
        //   ELSE (if not)
        result.push("Open");
      }
    }

    // return result 
    return result;
}