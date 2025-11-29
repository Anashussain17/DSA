// Write a program to remove duplicate element in an array 
import rl from "readline-sync"
let len=rl.questionInt("Enter the length of array: ")
let arr=new Array(len)
for(let i=0;i<arr.length;i++){
    arr[i]=rl.questionInt(`Enter the element ar arr[${i}]: `)
}

let result=duplicate(arr)
console.log("Result: ",result)
function duplicate(arr){
    let result=[]
    for(let i=0;i<arr.length;i++){
        if(!result.includes(arr[i])){
            result.push(arr[i])
        }
    }
    return result;
}