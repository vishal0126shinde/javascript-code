
/*
# Find sencond largest number from array ?

*/

let arr = [10, 20, 3, 5, 9, 12, 6];

function findSecondLargest(arr) {
    let largest = 0;
    let secondLargest = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > largest) {
            secondLargest = largest
            largest = arr[i]
        } else if (arr[i] > secondLargest && arr[i] !== largest) {
            secondLargest = arr[i]
        }
    }
    return secondLargest;
}

console.log(findSecondLargest(arr))
// O(n) = You loop through the array once (n elements).


// 2nd approach using slice method and sort method
function findSecondLargest1(arr) {
    let sortedArr = arr.slice().sort((a, b) => b - a);
    return sortedArr[1]
}
console.log(findSecondLargest1(arr))
// O(n log n) = The sort() method has a time complexity of O(n log n) due to the underlying sorting algorithm used, and slicing the array has a time complexity of O(n). Therefore, the overall time complexity is O(n log n) + O(n), which simplifies to O(n log n).




// 
function sendcondLargestElement(arr){
    let max = Math.max(...arr);
    let index = arr.indexOf(max);
     arr.splice(index, 1);
    console.log(arr)
    let secondLargest = Math.max(...arr)
    console.log(secondLargest);
}
console.log(sendcondLargestElement(arr));






