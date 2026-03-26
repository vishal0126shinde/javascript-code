
// ====================================================
// # Sum of all elements in an array
// =====================================================
let arr = [1, 2, 3, 4, 5];
function sumOfAllElements(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum = sum + arr[i]
    }
    return sum
}
console.log(sumOfAllElements(arr))




// ====================================================
// # Sum of all the element squeare in the given array 
// ====================================================

function sumSquare(arr){
    let squareSum = 0;
    for(let i =0 ; i<arr.length ; i++){
        squareSum = squareSum + arr[i] *  arr[i]
    }
    return squareSum;
}
console.log(sumSquare(arr))