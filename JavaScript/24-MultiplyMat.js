// Program to find the product of two matrices
import rl from "readline-sync"

// Input Matrix A
let row1 = rl.questionInt("Enter number of rows for Matrix A: ")
let col1 = rl.questionInt("Enter number of columns for Matrix A: ")
let matA = new Array(row1)

for (let i = 0; i < row1; i++) {
    matA[i] = new Array(col1)
    for (let j = 0; j < col1; j++) {
        matA[i][j] = rl.questionInt(`Enter element A[${i},${j}]: `)
    }
}

console.log("Matrix A:", matA)


// Input Matrix B
let row2 = rl.questionInt("Enter number of rows for Matrix B: ")
let col2 = rl.questionInt("Enter number of columns for Matrix B: ")
let matB = new Array(row2)

for (let i = 0; i < row2; i++) {
    matB[i] = new Array(col2)
    for (let j = 0; j < col2; j++) {
        matB[i][j] = rl.questionInt(`Enter element B[${i},${j}]: `)
    }
}

console.log("Matrix B:", matB)


// Check if multiplication is possible
if (col1 !== row2) {
    console.log("Matrix multiplication not possible! Columns of A must equal rows of B.")
    process.exit()
}


// Create Result Matrix C (row1 × col2)
let matC = new Array(row1)
for (let i = 0; i < row1; i++) {
    matC[i] = new Array(col2).fill(0)
}


// Matrix Multiplication Logic
for (let i = 0; i < row1; i++) {
    for (let j = 0; j < col2; j++) {
        for (let k = 0; k < col1; k++) {
            matC[i][j] += matA[i][k] * matB[k][j]
        }
    }
}


// Output
console.log("Product of Matrix A and B:")
console.log(matC)
