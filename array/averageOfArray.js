
/*
Q. How to calculate average of the give array ?

*/

let arr = [10, 30, 40, 50, 5];

function averageOfArray(arr) {
    let sum = 0;
    let avg = 0
    for (let i = 0; i < arr.length; i++) {
        let ele = arr[i];
        sum = sum + ele
    }
    console.log('sum of given array of element :',sum );
    avg = sum / arr.length;
    console.log('average of array :', avg)
    return avg;
}
console.log(averageOfArray(arr))