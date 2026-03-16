
/*
# find the occurrences of each & every element of the given array ? 
*/

const arr = [1, 2, 2, 3, 3, 3, 4];

function findOccurrences(arr){
    let occ = {};
    for(let i= 0 ; i < arr.length ; i++){
        let ele = arr[i];
        occ[ele] = (occ[ele] || 0) + 1
    }
    return occ;
}

console.log('occurrences of given array :', findOccurrences(arr))
// O(n) = You loop through the array once (n elements).


// 2nd appraoch using reduce method 


const result = arr.reduce((acc, curEle)=>{
    acc[curEle] = acc[curEle] ? acc[curEle] + 1 : 1
    return acc; 
}, {})
console.log("occurrences result :", result) 
// O(n) — the array is processed once.



// 3. using Map method 
// function used to find the occurrences of each element of the given array using Map data structure
function findOccurrencesMap (arr){
    // create a new Map to store the occurrences of each element
    let map = new Map();
    // loop through each element of the array
    for(let ele of arr){
        // check if the element already exists in the Map
        if(map.has(ele)){
            // if it exists, increment the count by 1
            map.set(ele, map.get(ele)+ 1)
        }else{
            // if it does not exist, add the element to the Map with a count of 1
            map.set(ele,1)
        }
    }
    return map;
}

console.log('using Map :', findOccurrencesMap(arr));
// O(n) — the array is processed once. 