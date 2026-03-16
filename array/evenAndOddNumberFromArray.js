/*
# Find even odd number from array ?
*/

let arr = [10, 20, 3, 5, 9, 12, 6];

function evenOdd(arr){
    const even = [];
    const odd = []
    for(let i =0;i<arr.length;i++){
        let ele = arr[i];
        if(ele % 2 === 0){
            even.push(ele)
        }else{
            odd.push(ele)
        }
    }
    return {
        odd,
        even
    }
}
console.log('evenOdd no :', evenOdd(arr));



// using filter() method 

const even = arr.filter((ele, index)=>{
    return ele % 2 === 0;
})
console.log('even no :', even)


const odd  = arr.filter((ele, index)=>{
    return ele % 2 !== 0;
})
console.log('odd no :', odd)