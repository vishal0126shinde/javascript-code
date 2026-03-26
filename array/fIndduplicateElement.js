/*
 * @Author: vishal shinde Vishalshinde@novaklickglobal.com
 * @Date: 2026-03-16 11:50:13
 * @LastEditors: vishal shinde Vishalshinde@novaklickglobal.com
 * @LastEditTime: 2026-03-18 15:22:15
 * @FilePath: \javascript-code\array\FIndduplicateElement.js
 */
/*
# find duplicate element of an Given array ?
*/


// using for loop .
let arr = [1, 2, 3, 4, 5, 2, 3, 6];

function findDuplicates(arr) {
    let duplicate = []
    for (let i = 0; i < arr.length; i++) {
        let ele = arr[i];
        for (let j = i + 1; j < arr.length; j++) {
            let ele1 = arr[j];
            if (ele === ele1 && !duplicate.includes(ele)) {
                duplicate.push(ele)
            }
        }
    }
    return duplicate;
    // complexity of this approach is O(n^2) because we are using two nested loops to compare each element with every other element in the array. 
    // The outer loop runs n times and the inner loop also runs n times in the worst case, resulting in a time complexity of O(n^2).
    // O(n)  *  O(n)  =  O(n^2) or includes() method also has a time complexity of O(n) because it needs to iterate through the array to check if the element is already present in the duplicate array.
    //  so the overall time complexity of this approach is O(n^2) because we are using two nested loops and the includes() method inside the inner loop.
}
console.log('duplicate element of given array :', findDuplicates(arr))



// 2nd apporach using filter method
// function used to find the duplicate element of the given array using filter method
// you can use the filter() method to find duplicate elements in an array. 
// The filter() method creates a new array with all elements that pass the test implemented by the provided function. 
// In this case, you can check if the index of the current element is not equal to the index of its first occurrence in the array, which indicates that it is a duplicate.
let duplicateEle = arr.filter((ele, index)=>{
    console.log('current element :', ele);
    console.log('index of current element :', index);
    // check if the index of the current element is not equal to the index of its first occurrence in the array
    return arr.indexOf(ele) !== index
})
console.log('duplicate element', duplicateEle);



// using reduce method

let duplicateElement = arr.reduce((acc, curEle)=>{
    if(!acc.includes(curEle)){
        acc.push(curEle)
    }
    return acc
},[])

console.log(duplicateEle);
// time complexity of this approach is O(n^2) because the includes() method has a time complexity of O(n) and it is called for each element in the array, resulting in a total time complexity of O(n^2).


// using For loop 

function findDuplicate(arr){
    let duplicate = [];
    for(let i =0;i<arr.length;i++){
        if(!duplicate.includes(arr[i])){
            duplicate.push(arr[i])
        }
    }
    return duplicate;
}
console.log(findDuplicate(arr));
// time complexity of this approach is O(n^2) because the includes() method has a time complexity of O(n) and it is called for each element in the array, resulting in a total time complexity of O(n^2).


// ====================================================
// # find duplicate element using Object / Hash Map (Most Common)
// ====================================================

function findDuplicateElements(arr){
    const count = {};
    const duplicate = [];
    for(let ele of arr){
        count[ele] = (count[ele] || 0 ) + 1;
        if(count[ele] > 1){
        duplicate.push(ele)
    }

    }
    
    return {
        duplicate,
        count
    }

}
console.log(findDuplicateElements(arr));
// time complexity of this approach is O(n) because we are iterating through the array once to count the occurrences of each element and then iterating through the count object to find the duplicate elements. The overall time complexity is O(n) + O(m), where n is the length of the input array and m is the number of unique elements in the array. In most cases, m will be less than n, so we can consider the time complexity to be O(n).


// ====================================================
// # find duplicate element using Set data structure
// ====================================================

function findDuplicateElementss(arr){
    // create a Set to store unique elements and another Set to store duplicate elements
    let set = new Set();
    // loop through each element of the array
    // identify if the element is already in the unique Set. If it is, add it to the duplicate Set. If it is not, add it to the unique Set.
    let duplicate = new Set();

    for(let ele of arr){
        // check if the element is already in the unique Set
        // if it is, add it to the duplicate Set
        // if it is not, add it to the unique Set
        if(set.has(ele)){
            duplicate.add(ele)
        }else{
            set.add(ele)
        }
    }
    return [...duplicate]
}
console.log(findDuplicateElementss(arr));
// time complexity of this approach is O(n) because we are iterating through the array once to check for duplicates and add elements to the Set. The operations of adding and checking for elements in a Set have an average time complexity of O(1), so the overall time complexity is O(n).