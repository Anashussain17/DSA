// Write a program to find the maximum number in an array using function 
import rl from "readline-sync"
let len=rl.questionInt("Enter the length of array: ")
let arr=new Array(len)
for(let i=0;i<arr.length;i++){
    arr[i]=rl.questionInt(`Enter a number at arr${i} position: `)
}
max(arr)

function max(arr){
    let max=arr[0]
    for(let i=1;i<arr.length;i++){
        if(max<arr[i]){
            max=arr[i]
        }
    }
    console.log("Max number in the array is: ",max)
}