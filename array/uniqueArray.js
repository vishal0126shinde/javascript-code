
// ==========================================
//  # Return unique element from an array ?
// ==========================================

let arr = [1, 2, 3, 4, 5, 1, 2, 3];

function uniqueArray(arr){
    let unique = [];
    for(let i=0;i<arr.length ; i++){
        if(!unique.includes(arr[i])){
            unique.push(arr[i])
        }
    }
    return unique;
}
console.log(uniqueArray(arr));
// it having complexity is O(n^2) because 
// the includes() method has a time complexity of O(n) 
// and it is called for each element in the array,
//  resulting in a total time complexity of O(n^2).




// =======================================================================
//  # Return unique element from an array  form using set data structure ?
// ========================================================================

function uniqueElement(arr){
    let set = new Set();
    for(let i = 0 ; i < arr.length ; i++){
        if(!set.has(arr[i])){
            set.add(arr[i])
        }
    }
    // return [...set];
    // also used
    return Array.from(set);
}
console.log(uniqueElement(arr))
// complexity of this approach is O(n) because we are iterating through the array once to check for unique elements 
// and add them to the Set. The operations of adding and checking for elements in a Set have an average time complexity of O(1), so the overall time complexity is O(n).




