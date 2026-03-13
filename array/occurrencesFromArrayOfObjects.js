
/*
Q. find the occurrences of each and every element from array of Objects ?

*/

const users = [
    {
        fileName: "rahul.txt",
        age: 25,
        gender: "Male"
    },
    {
        fileName: "priya.doc",
        age: 28,
        gender: "Female"
    },
    {
        fileName: "amit.pdf",
        age: 30,
        gender: "Male"
    },
    {
        fileName: "sneha.jpg",
        age: 24,
        gender: "Female"
    }
];


function findOccurencesFromObject(arr) {
    let occurrences = {}
    for (let i = 0; i < arr.length; i++) {
        let ele = arr[i].gender;

        // Here are not used if condition because if you check like if occurrences[ele] --> initially it return undefined 
        // because in occurrences object does not have any element so it return "undefined"  & condition are false and it return empty object
        // if(occurrences[ele]{
        //    occurrences[ele] = (occurrences[ele] || 0) + 1; 
        // })

        console.log(ele);
        console.log('occurrences[ele]', occurrences[ele])
        console.log('called')
        occurrences[ele] = (occurrences[ele] || 0) + 1;

    }
    return occurrences;

}
console.log(findOccurencesFromObject(users))




// 2nd approach using reduce() method 


let result = users.reduce((acc, curEle) => {
    console.log(acc);
    // console.log(curEle)
    acc[curEle.gender] = acc[curEle.gender] ? acc[curEle.gender] + 1 : 1
    return acc;
}, {})

console.log('result', result);