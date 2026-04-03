/*
 @ find the median of a list of numbers
 @ approach:
    1. Sort the list of numbers in ascending order.
    2. If the number of elements is odd, the median is the middle element.
    3. If the number of elements is even, the median is the average of the two middle elements.
    @ example:
        -  Input: [1, 3, 5]
        - Output: 3
        - Input: [1, 2, 3, 4]
        - Output: 2.5

median is the middle value in a sorted list of numbers.

*/

let arr = [1,2,3,4,5]

function findMedian(arr){
    if(arr.length === 0 ) return null; // if the array is empty, return null
    if(arr.length === 1) return arr[0] // if the array has only one element, return that element as the median

    // sort the array or make copy of the array to mutating the origional array
    // sort the array in ascending order to find the median
    let data = [...arr].sort((a,b)=>{
     return   a - b
    })

    // data = [1,2,3,4,5] (sorted array)
    // find the length of the array and the middle index
    let length = data.length ; // length of the array is 5
    // find the middle index of the array
    // if the length of the array is even, the median is the average of the two middle elements
    // if the length of the array is odd, the median is the middle element
    // ex.  if the length of the array is 5, the middle index is 2 (0-based index) and the median is the element at index 2
    // ex. if the length of the array is 4, the middle index is 2 (0-based index) and the median is the average of the elements at index 1 and index 2
    let mid =  Math.floor(length / 2); // mid = 2 

    // 5 % 2 === 1 (odd) => median is the element at index 2 (3)
    if(length % 2 === 0){
        // if the length of the array is even, the median is the average of the two middle elements
        return (data[mid] + data[mid -1]) / 2
    }else{
        // if the length of the array is odd, the median is the middle element
        // return element at index 2 (3)
        return data[mid]
    }
}
console.log(findMedian(arr));