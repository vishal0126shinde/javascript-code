
/*
# Find missing number from array ?
*/

let arr = [1, 3, 4, 5, 6, 8, 9];

function findMissingNumber(arr) {
    let min = Math.min(...arr);
    let max = Math.max(...arr);
    const missingNumber = []
    console.log('max & min ', min, max);

    // Runs roughly n times (if array size is n)
    for (let i = min; i < max; i++) {

        //  Inner Operation → arr.includes(i)
        // includes() checks each element one by one
        // / In worst case, it scans the entire array
        //  This makes your solution O(n²) in worst case.
        // O(n)  *  O(n)  =  O(n²)
        if (!arr.includes(i)) {
            missingNumber.push(i)
        }
    }
    return missingNumber;

}
console.log(findMissingNumber(arr))



// using set()


function findMissingNumber1(arr) {
    const min = Math.min(...arr);
    const max = Math.max(...arr);
    const missing = []

    let set = new Set(arr);
    for (let i = min; i < max; i++) {
        if (!set.has(i)) {
            missing.push(i)
        } else {
            set.add(i)
        }
    }
    return missing;
}
console.log(findMissingNumber1(arr))



// using normal for loop 

function findMissingNumberInArray(arr) {

    let missingNumber = [];
    for (let i = 0; i < arr.length; i++) {
        // current element and next element
        let current = arr[i]  
        // if current is 1 then next will be 3
        // if current is 3 then next will be 4
        // if current is 4 then next will be 5
        // if current is 5 then next will be 6
        // if current is 6 then next will be 8
        // if current is 8 then next will be 9
        // if current is 9 then next will be undefined
        // if current is 9 then next will be undefined but we will not push undefined in missing number because it is not in the array
        let next = arr[i + 1] // 3

        // let arr = [1, 3, 4, 5, 6, 8, 9];

        for (let j = current + 1; j < next; j++) {
            // if current is 1 and next is 3 then j will be 2
            // if current is 3 and next is 4 then j will be 4
            // if current is 4 and next is 5 then j will be 5
            // if current is 5 and next is 6 then j will be 6
            // if current is 6 and next is 8 then j will be 7
            // if current is 8 and next is 9 then j will be 9
            // if current is 9 and next is undefined then j will be 10
            // if current is 9 and next is undefined then j will be 10 but we will not push 10 in missing number because it is not in the array
            missingNumber.push(j)
        }

    }
    return missingNumber;

}
console.log(findMissingNumberInArray(arr))




// using total sum  and expected sum

function findMissingNumberUsingSum(arr) {
    const n = arr.length + 1;
    const expectedSum = n * (n + 1) / 2;
    const totalSum = arr.reduce((acc, curEle) => {
        return acc + curEle;
    }, 0);   // ✅ initial value added

    return expectedSum - totalSum;
}

console.log(findMissingNumberUsingSum([1, 2, 3, 5]));


// ================================================
// # find missing number using indexOf() method
// ====================================================

function findMissingNumberUsingIndexOf(arr) {
    const min = Math.min(...arr);
    const max = Math.max(...arr);
    const missing = []
    for (let i = min; i < max; i++) {
        if (arr.indexOf(i) === -1) {
            missing.push(i)
        }   
    }
    return missing;
}   
console.log(findMissingNumberUsingIndexOf(arr))