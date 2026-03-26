/*
 * @Author: vishal shinde Vishalshinde@novaklickglobal.com
 * @Date: 2026-03-16 16:38:25
 * @LastEditors: vishal shinde Vishalshinde@novaklickglobal.com
 * @LastEditTime: 2026-03-18 10:13:44
 * @FilePath: \javascript-code\array\minAndMaxValue.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

/*
# Find minimum and maximum value from array ?
*/

let arr = [10, 20, 3, 5, 9, 12, 6];

function minAndMax(arr) {
    let max = arr[0]
    let min = arr[0]
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i]
        }
        if (arr[i] < min) {
            min = arr[i]
        }
    }
    return {
        max, min
    }
}
console.log(minAndMax(arr))




// 2nd approach 
function minAndMaxValue(arr) {
    const min = Math.min(...arr);
    const max = Math.max(...arr)
    return {
        max,
        min
    }
}
console.log(minAndMaxValue(arr));



// 3 using reduce method 

let min = arr.reduce((acc, curEle)=>{
    return acc < curEle ? acc : curEle
})
console.log('min', min);


let max = arr.reduce((acc, curEle)=>{
    return acc > curEle ? acc : curEle
})
console.log('max', max)




// 4. using sort method

let result = arr.sort((a, b)=>{
  return  a - b  // acending order.
})
let maxValue = result[0];
let minValue = arr.sort((a,b)=>{
    return b - a   // decending order 
})
console.log('maxValue', maxValue);
console.log('result', result);
console.log('minValue[o]', minValue[0])

//  O(n log n) — due to the sorting step, which is typically O(n log n) in time complexity.
// also used at() method

resultMax = result.at(0)
console.log('result', result);

resultMin = result.at(-1)
console.log('resultMin', resultMin) 






