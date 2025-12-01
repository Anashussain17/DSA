// Write a program to sort the matrix rows and columns  
import rl from "readline-sync"
let col=rl.questionInt("Enter the number of columns: ")
let row=rl.questionInt("Enter the number of rows: ")
let matrix=new Array(row)
for(let i=0;i<matrix.length;i++){
    matrix[i]=new Array(col)
    for(let j=0;j<matrix[i].length;j++){
    matrix[i][j]=rl.questionInt(`Enter the element at [${i}${j}]: `)
}
}

console.log(matrix)
function sort(matrix){
    let flat=[]
    for(let i=0;i<matrix.length;i++){
        for(let j=0;j<matrix[i].length;j++){
            flat.push(matrix[i][j])
        }
    }
    flat.sort((a,b)=>a-b)
    let index = 0;
for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
        matrix[i][j] = flat[index++];
    }
}
return matrix
}
let result= sort(matrix)
console.log("After Sorting: ",result)