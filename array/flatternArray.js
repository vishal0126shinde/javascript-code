/*
 * @Author: vishal shinde Vishalshinde@novaklickglobal.com
 * @Date: 2026-03-13 23:40:39
 * @LastEditors: vishal shinde Vishalshinde@novaklickglobal.com
 * @LastEditTime: 2026-03-16 11:39:22
 * @FilePath: \javascript-code\array\flatternArray.js
 * 
 */
/*
# Flatten the given nested array into a single array
*/

const arr = [1, [2, 3], [4, 5], 6];

// function used to flatten the given nested array into a single array using recursion approach

function flatternArray(arr){
    let result = [];
    // loop through each element of the array
    for(let i =0;i<arr.length ; i++){
        // get the current element
        // check if the current element is an array
        // if it is an array, recursively call the flatternArray function on that element and concatenate the result to the result array
        // if it is not an array, push the element to the result array 
        let ele = arr[i]
          console.log('current element :', ele);
        //  current element : 1  --> not an array, so it will be pushed to the result array
        // current element : [ 2, 3 ] --> it is an array, so the flatternArray function will be called recursively on this element and the result will be concatenated to the result array
        // current element : 2 --> not an array, so it will be pushed to the result array
        // current element : 3 --> not an array, so it will be pushed to the result array   
        // current element : [ 4, 5 ]   --> it is an array, so the flatternArray function will be called recursively on this element and the result will be concatenated to the result array
        // current element : 4 --> not an array, so it will be pushed to the result array
        // current element : 5 --> not an array, so it will be pushed to the result array
        // current element : 6 --> not an array, so it will be pushed to the result array
        // current element : 4
        // current element : 5
        // current element : 6
        // flattern array: [ 1, 2, 3, 4, 5, 6 ]
        // 
        if(Array.isArray(ele)){
            result = result.concat(flatternArray(ele))
        }
        else{
            result.push(ele)
        }
    }
    return result;
}

console.log('flattern array:', flatternArray(arr))
// O(n) — the array is processed once, where n is the total number of elements in the nested array (including all sub-arrays).

// // Output
// [1, 2, 3, 4, 5, 6]


// 2nd approach using reduce method

function flattern(arr){
    return arr.reduce((acc,curEle)=>{
        // check if the current element is an array
        if(Array.isArray(curEle)){
            // if it is an array, recursively call the flattern function on that element and concatenate the result to the accumulator array
            acc = acc.concat(flattern(curEle))
        }else{
            acc.push(curEle)
        }
    return acc;

    },[])
}
console.log('using reduce method :' , flattern(arr))
// O(n) — the array is processed once, where n is the total number of elements in the nested array (including all sub-arrays).


// 3rd approach using Stack Method (Iterative DFS)

function flatternStack(arr){
    const stack = []
    const result  = [];

    for(let i = arr.length - 1 ;i >= 0 ; i--){
        stack.push(arr[i])
    }

    while(stack.length > 0){
        let current = stack.pop();
        if(Array.isArray(current)){
            for(let i = current.length-1; i >= 0;i--){
                stack.push(current[i])
            }
        }else{
            result.push(current)
        }
    }
    return result;

}

console.log('stack result..',flatternStack(arr) )



// # another approach 

function flatternUsingStack(arr){
    // create a stack and initialize it with the input array
    // create an empty array to store the flattened result
    // while the stack is not empty, pop an element from the stack
    // if the popped element is an array, push its elements back onto the stack
    // if the popped element is not an array, push it to the result array
    const stack = [...arr];
    const result = [];
    while(stack.length > 0){
        let current = stack.pop();
        if(Array.isArray(current)){
            stack.push(...current)
        }else{
            result.push(current)
        }
    }   
    return result.reverse();
}

console.log('flattern using stack :', flatternUsingStack(arr))
// O(n) — the array is processed once, where n is the total number of elements in the nested array (including all sub-arrays).