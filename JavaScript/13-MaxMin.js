// Write a program to find the highest and the lowest number in array 
import rl from "readline-sync"
let len=rl.questionInt("Enter the length of array: ")
let arr=new Array(len)
for(let i=0;i<arr.length;i++){
    arr[i]=rl.questionInt(`Enter a number at arr${i} position: `)
}

let result=MaxMin(arr)
console.log("Result:",result)

function MaxMin(arr){
    let max=arr[0]
    let min=arr[0]
    if(arr.length<2){
        return "Invalid array length"
    }else{
        for(let i=2;i<arr.length;i++){
            if(max<arr[i]){
                max=arr[i]
            }
            if(min>arr[i]){
                min=arr[i]
            }
        }
    }
    return `Max num:${max}, Min num:${min}`
}