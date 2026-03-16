/*
 * @Author: vishal shinde Vishalshinde@novaklickglobal.com
 * @Date: 2026-03-16 11:50:13
 * @LastEditors: vishal shinde Vishalshinde@novaklickglobal.com
 * @LastEditTime: 2026-03-16 15:49:54
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



// Using an Object / Hash Map (Most Common)

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