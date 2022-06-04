// Delete occurrences of an element if it occurs more than n times

 // given a list of numbers 
 // create new list = new arr (what are ways to create new arrs?)
 // contains each number at least n times(count and compare with n number of times
 // without reordering (loop through the arry?)

function deleteNth(arr,n){
    const count = {}
    const answer = []
    
    for(const el of arr){
      if(count[el]){
        count[el] = count [el] + 1
      }else count[el] = 1
        if(count[el] <= n){
          answer.push(el)
        }
    }
    return answer
  }