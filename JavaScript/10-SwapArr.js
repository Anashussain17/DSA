import rl from "readline-sync"
let len1=rl.questionInt("Enter the length of array1: ")
let arr1=new Array(len1)
for(let i=0;i<arr1.length;i++){
    arr1[i]=rl.questionInt(`Enter a number at arr${[i]} of array1: `)
}
let len2=rl.questionInt("Enter the length of array2: ")
let arr2=new Array(len2)
for(let i=0;i<arr2.length;i++){
    arr2[i]=rl.questionInt(`Enter a number at arr${[i]} of array2: `)
}
console.log("Before swapping:")
console.log("Array1:",arr1)
console.log("Array2:",arr2)
let temp=""
temp=arr1
arr1=arr2
arr2=temp
console.log("After swapping:")
console.log("Array1:",arr1)
console.log("Array2:",arr2)