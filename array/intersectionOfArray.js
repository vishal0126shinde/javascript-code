
// ===================================================================
// # Find Out the intersection of the given array ?
//          - Intersection measn comman element bewteen the both array 

// Note :

// if the if you have 2 array then time complexity will be O(n * m) because you have to loop through both array and compare each element of the first array with each element of the second array.
// if you have 3 array then time complexity will be O(n * m * p) because you have to loop through all three array and compare each element of the first array with each element of the second array and each element of the third array.


// ====================================================================


let arr1 = [1, 2, 3, 4, 5];
let arr2 = [4, 5, 6, 7, 8];

function intersectionOfArray(arr1,arr2){
    let intersection = arr1.filter((ele,index)=>{
        return arr2.includes(ele)
    })
    return [... new Set(intersection)]
}
console.log(intersectionOfArray(arr1, arr2)) // Time complexity: O(n * m)


// 2nd appraoch 


function intersectionArray(arr1, arr2){
    let map = {};
    let result = []

    console.log(map);
    console.log(result)

    for(let ele of arr1){
        map[ele] = (map[ele] || 0) + 1
    }
    for(let ele of arr2){
        if(map[ele] > 0){
            result.push(ele)
            map[ele] --
        }
         console.log(map);
    console.log(result)
    }
    return result
}

console.log(intersectionArray(arr1, arr2))
// Time complexity: O(n + m) 
// where n and m are the lengths of arr1 and arr2 respectively. This is because we iterate through both arrays once.


// 3rd approach using Set data structure
function intersectionUsingSet(arr1, arr2){
    let set = new Set(arr1);
    let result = [];
    for(let ele of arr2){
        if(set.has(ele)){
            result.push(ele)
        }   
    }
    return result;
}   

// Time complexity: O(n + m)