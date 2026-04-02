
/*
@ Sort the Given array 
*/

let arr = [2, 3, 4, 5, 6, 7, 8, 4];

// Sort Given array using inbuilt method 
function sortArray(arr) {
    let result = arr.sort(); // it will sort the array in ascending order by default
    return result
}
console.log(sortArray(arr))
// O(n log n) — the time complexity of the built-in sort method is typically O(n log n) in the average and worst cases, where n is the number of elements in the array.


// sort tha aray using ascending order and decending order


function ascendingOrder(arr){
    let result = arr.sort((a,b)=>{
        return a - b  // it is ascending order 
    })
    return result
}
console.log(ascendingOrder(arr))



function decendingOrder(arr){
    return arr.sort((a,b)=>{
        return b - a
    })  // it is decending order
}
console.log(decendingOrder(arr))



/*
@ sort the array element using for loop (i.e bubble sort method)
    - Compare adjacent elements
    - Swap if they are in the wrong order
    - After each pass, the largest element moves to the end

*/

 let arr1 = [5, 3, 8, 4]
function bubbleSort(arr1){
    for(let i =0;i<arr1.length ; i++){
        for(let j = 0 ; j < arr1.length - i - 1 ; j++){
            // j = 

            if(arr1[j] > arr1[j+1]){

                let temp = arr1[j]
                arr1[j] = arr1[j+ 1];
                arr1[j+1] = temp
            }
        }
    }
    return arr1
}

console.log(bubbleSort(arr1))


/*

function bubbleSort(arr1){

    // i = 0 → first pass
    for(let i = 0; i < arr1.length; i++){

        // length = 4

        // PASS 1 → i = 0
        // j < 4 - 0 - 1 = 3 → j = 0,1,2

        for(let j = 0; j < arr1.length - i - 1; j++){

            // 👉 j = 0
            // compare arr[0] & arr[1] → 5 > 3 ✔

            // swap
            // temp = 5
            // arr[0] = 3
            // arr[1] = 5

            // array → [3, 5, 8, 4]

            // 👉 j = 1
            // compare arr[1] & arr[2] → 5 > 8 ❌ (no swap)

            // array → [3, 5, 8, 4]

            // 👉 j = 2
            // compare arr[2] & arr[3] → 8 > 4 ✔

            // swap
            // temp = 8
            // arr[2] = 4
            // arr[3] = 8

            // array → [3, 5, 4, 8]
        }

        // After PASS 1 → largest element fixed at end
        // array → [3, 5, 4, 8]


        // PASS 2 → i = 1
        // j < 4 - 1 - 1 = 2 → j = 0,1

        // 👉 j = 0
        // compare 3 > 5 ❌

        // 👉 j = 1
        // compare 5 > 4 ✔

        // swap → [3, 4, 5, 8]

        // After PASS 2
        // array → [3, 4, 5, 8]


        // PASS 3 → i = 2
        // j < 4 - 2 - 1 = 1 → j = 0

        // 👉 j = 0
        // compare 3 > 4 ❌

        // array → [3, 4, 5, 8]


        // PASS 4 → i = 3
        // j < 4 - 3 - 1 = 0 → no loop runs
    }

    return arr1
}

console.log(bubbleSort(arr1))

*/