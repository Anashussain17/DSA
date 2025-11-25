// Write a program  to find Mean of given Array Elements? 
import rl from "readline-sync"
let len=rl.questionInt("Enter the length of array: ")
let arr=new Array(len)
for(let i=0;i<arr.length;i++){
    arr[i]=rl.questionInt(`Enter a number at arr${i} position: `)
}

let result=Mean(arr)
console.log(`Mean of [${arr}] is: `,result)
function Mean(arr){
    let sum=0
    for(let i=0;i<arr.length;i++){
        sum+=arr[i]
    }
    return sum/arr.length;
}