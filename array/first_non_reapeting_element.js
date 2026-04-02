/*
@ description: Given an array of integers, find the first non-repeating element in it and return its index. If it doesn't exist, return -1.
@ example:
     arr = [2, 3, 4, 2, 3, 5];
    Output: 2 (the first non-repeating element is 4, which is at index 2)
@ approach:
    1. Create a frequency map to count the occurrences of each element in the array.
    2. Iterate through the array again and check the frequency of each element in the map.
    3. Return the index of the first element that has a frequency of 1 (non-repeating).
    4. If no such element is found, return -1.
*/


let arr = [1,3,4,5,3,4,1];

// using for loop 
function findNonReapetingElement(arr){
    let occ = {};
    for(let i= 0;i<arr.length;i++){
        let ele = arr[i];
        occ[ele] = (occ[ele] || 0) + 1 ;
    }
    for(let num of arr){
        if(occ[num] === 1){
            // return num
            console.log('first non-repeating element :', num);
            break
        }
    }

}
findNonReapetingElement(arr)
// O(n) = You loop through the array twice (n elements each time).


// using reduce method

function findNonReapeting(arr){
    let occ = arr.reduce((acc, curEle)=>{
        acc[curEle] = (acc[curEle] || 0) + 1
        return acc;
    }, {})
    for(let num of arr){
        if(occ[num] === 1){
            // return num
            console.log('first non-repeating element :', num);
            break
        }
    }
}
findNonReapeting(arr)
// O(n) = You loop through the array twice (n elements each time).