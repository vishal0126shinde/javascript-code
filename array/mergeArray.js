

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