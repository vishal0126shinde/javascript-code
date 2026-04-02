/*
@  find the given number is armstrong number or not ?
    - An Armstrong number is a number that is equal to the sum of its own digits each raised to the power of the number of digits. 
    - For example, 153 is an Armstrong number because 1^3 + 5^3 + 3^3 = 153.

    ex. - 153 → 1^3 + 5^3 + 3^3 = 153
         - 370 → 3^3 + 7^3 + 0^3 = 370
         - 371 → 3^3 + 7^3 + 1^3 = 371
         - 9474 → 9^4 + 4^4 + 7^4 + 4^4 = 9474
         - 9475 → 9^4 + 4^4 + 7^4 + 5^4 = 9475 (not an Armstrong number)

    - To determine if a number is an Armstrong number, you can follow these steps:
        1. Convert the number to a string to easily access each digit.
        2. Calculate the number of digits in the number.
        3. For each digit, raise it to the power of the number of digits and sum these values.
        4. Compare the sum to the original number. If they are equal, then the number is an Armstrong number.   
 
*/


let num = 153
function armStrongNumber(num){
    let length = num.toString().length;
    let sum = 0;
    let temp = num;

    while(temp > 0 ){
        let rem = num % 10 ;
        sum =  sum + rem ** length;
        temp = Math.floor(temp/10);
    }
    if(sum = num){
        console.log('Given num is armStrong Number...', sum , num)
    }else{
        console.log('Given number is not armStrong number..' ,sum, num)
    }
}

armStrongNumber(num);





/*
@ 2nd approach using for loop
@ approach:
*/


function armStrongNumber2(num){
    let length = num.toString().length;
    let sum = 0;    
    for(let temp = num; temp > 0 ; temp = Math.floor(temp/10)){
        let rem = temp % 10 ;
        sum =  sum + rem ** length;
    }
    if(sum === num){
        console.log('Given num is armStrong Number...', sum , num)
    }else{
        console.log('Given number is not armStrong number..' ,sum, num)
    }
}



/*

@ find the armstrong number in the given range
@ approach:
    1. Loop through the range of numbers.
    2. For each number, check if it is an Armstrong number using the previously defined function.
    3. If it is an Armstrong number, add it to a list of Armstrong numbers.
    4. Return the list of Armstrong numbers found in the range.
*/

function findArmStrongNumberInRange(start, end){
    let armStrongNumbers = [];
    for(let i = start; i <= end; i++){
        let length = i.toString().length;
        let sum = 0;
        for(let temp = i; temp > 0 ; temp = Math.floor(temp/10)){
            let rem = temp % 10 ;
            sum =  sum + rem ** length;
        }
        if(sum === i){
            armStrongNumbers.push(i)
        }
    }
    return armStrongNumbers;
}
console.log('ArmStrong numbers in the given range :', findArmStrongNumberInRange(1, 1000))
// O(n * m) — where n is the number of integers in the range 
// and m is the number of digits in the largest number in the range (since we need to calculate the sum of the digits raised to the power of the number of digits for each integer).