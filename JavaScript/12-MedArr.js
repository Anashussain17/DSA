// Write a program to find Median of the given Array?
import rl from "readline-sync"
let len=rl.questionInt("Enter the length of array: ")
let arr=new Array(len)
for(let i=0;i<arr.length;i++){
    arr[i]=rl.questionInt(`Enter a number at arr${i} position: `)
}
let result=Median(arr)
console.log(`Median of [${arr}] is:`,result)
function Median(arr){
    if(arr.length%2==0){
        return (arr[Math.floor(arr.length/2)]+arr[Math.floor((arr.length/2))-1])/2;
    }
    else{
        return arr[Math.floor(arr.length/2)];
    }
}