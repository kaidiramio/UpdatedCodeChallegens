// Sort Numbers

// Finish the solution so that it sorts the passed in array of numbers. If the function passes in an empty array or null/nil value then it should return an empty array.

// For example:

// solution([1, 2, 10, 50, 5]); // should return [1,2,5,10,50]
// solution(null); // should return []

function solution(nums){
    // if empty array //null return empty array
    if(nums===null){
        return []
    
    // else return // sort => the function sortNums 
    }else return nums.sort(sortNums)


    // function sortNums takes two paramaters num1 & num2 and returns them subtracted 
    // this then gets passed through and returned above in nums.sort(sortNums)
    function sortNums(num1, num2){
        return num1 - num2;
    }
}