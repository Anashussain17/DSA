// Write a program  find GCD of the array elements given an array of numbers, 
import rl from "readline-sync"
let len=rl.questionInt("Enter the length of array: ")
let arr=new Array(len)
for(let i=0;i<len;i++){
    let num=rl.questionInt(`Enter the element at arr${i}: `)
    arr[i]=num
}
let result=arr[0]
for(let i=1;i<arr.length;i++){
    result=gcd(result,arr[i])
    
}
console.log("GCD of array elements:",result)
function gcd(a,b){
    if(b==0){
        return a;
    }
    return gcd(b,a%b);
}


