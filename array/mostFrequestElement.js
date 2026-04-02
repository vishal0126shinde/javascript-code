/*
 * @Author: vishal shinde Vishalshinde@novaklickglobal.com
 * @Date: 2026-03-27 22:07:09
 * @LastEditors: vishal shinde Vishalshinde@novaklickglobal.com
 * @LastEditTime: 2026-03-27 22:12:36
 * @FilePath: \javascript-code\array\mostFrequestElement.js
 */

// ================================================================================
// # Find the mode in the given array , (Find the frequent element From the array)
// ================================================================================


let arr = [1, 2, 4, 5, 4, 3, 3, 6, 7, 7, 4, 4, 4, 4, 5]

function findFrequentElement(arr) {
    let frequent = null;
    let maxValue = 0;
    occurrences = {}

    for (let i = 0; i < arr.length; i++) {
        let ele = arr[i];
        occurrences[ele] = (occurrences[ele] || 0) + 1;
        if (occurrences[ele] > maxValue) {
            maxValue = occurrences[ele]
            frequent = ele
        }
    }

    return frequent;
}

console.log(findFrequentElement(arr))

// Time complexity of this approach is O(n) because we are iterating through the array once 
// to count the occurrences of each element and then iterating through the occurrences object to find the most frequent element.