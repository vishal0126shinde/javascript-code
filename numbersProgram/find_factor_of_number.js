/*
@ find the factor of a number
@ approach:
    1. Initialize an empty array to store the factors.
    2. Loop through the numbers from 1 to the given number.
    3. In each iteration, check if the current number is a factor of the given number.
    4. If it is a factor, add it to the array.
    5. Return the array of factors.
@ example:
    num = 12
    Output: [1, 2, 3, 4, 6, 12] (the factors of 12 are 1, 2, 3, 4, 6, and 12)

@ factors of a number means the numbers that divide the given number completely without leaving a remainder. 
For example, the factors of 12 are 1, 2, 3, 4, 6, and 12 because they divide 12 evenly.

*/

let num = 12
function findFactorOfNumber(num){
    let factor = []
    for(let i = 0 ;i <= num ; i++){
        if(num % i === 0){
            factor.push(i)
        }
    }
    return factor
}

console.log(findFactorOfNumber(num))