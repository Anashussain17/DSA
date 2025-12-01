// Write a Program to add  all Elements in Matrix
import rl from "readline-sync"
let row=rl.questionInt("Enter the number of rows: ")
let col=rl.questionInt("Enter the number of columns: ")
let matrix1=new Array(row)
for(let i=0;i<matrix1.length;i++){
    matrix1[i]=new Array(col)
    for(let j=0;j<matrix1[i].length;j++){
        matrix1[i][j]=rl.questionInt(`Enter the element at [${i}${j}]: `)
    }
}
console.log(matrix1)

function sum(matrix){
    let sum=0;
    for(let i=0;i<matrix.length;i++){
        for(let j=0;j<matrix[i].length;j++){
            sum+=matrix[i][j];
        }
    }
    return sum;
}
let result=sum(matrix1)
console.log("Sum of the matrix elements: ",result)