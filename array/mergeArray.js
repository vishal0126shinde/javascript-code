/*
 * @Author: vishal shinde Vishalshinde@novaklickglobal.com
 * @Date: 2026-03-18 17:17:41
 * @LastEditors: vishal shinde Vishalshinde@novaklickglobal.com
 * @LastEditTime: 2026-03-27 21:59:43
 * @FilePath: \javascript-code\array\mergeArray.js

 */


// =============================================================
//  # Mearge the given two arrays and return the merged array ?
// =============================================================

const arr1 = [1, 2, 3,3];
const arr2 = [4, 5, 6];

function meargedArray(arr1,arr2){
    let result = arr1.concat(arr2);
    return [...new Set(result)] ;

}
console.log(meargedArray(arr1,arr2))



//===============================================
// # Mearge two array using spread operator ?
// ============================================

let result = [...arr1, ...arr2];
console.log(result)



// Mearge the give array 

let newArray = [arr1, arr2]
console.log(newArray)

let meargeResult  = newArray.reduce((acc, curEle)=>{
    return acc.concat(curEle)
},[])
console.log(meargeResult)