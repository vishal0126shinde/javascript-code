
/*
@ find the factorial of a number
@ approach:
    1. Initialize a variable to store the factorial result, starting with 1.
    2. Loop through the numbers from 1 to the given number.
    3. In each iteration, multiply the factorial variable by the current number.
    4. Return the factorial result.
@ example:
    num = 5
    Output: 120 (5! = 5 * 4 * 3 * 2 * 1 = 120)

*/

let num = 5;
function findFactorialNumber(num){
    let fact = 1
    if(num < 0) return 'please enter + ve number';
    if(num === 0 || num === 1){
        return 1;
    }
    
    for(let i = 2 ; i<= num ; i++){
        fact = fact * i ;
    }
    return fact;

}
console.log(findFactorialNumber(num))
// O(n) — the loop runs from 1 to n, where n is the input number, resulting in a linear time complexity.



// 2nd approach using recursion
function findFactorial(num){
    if(num < 0) return 'please enter + ve number';
    if(num === 0 || num === 1){
        return 1;
    }
    return num * findFactorial(num - 1) 
    // O(n) — the function calls itself n times until it reaches the base case, resulting in a linear time complexity.
}