// Write a program to add and subtract the given (N x N) Matrices
import rl from "readline-sync"

let op = rl.question("Enter Your Operation (Add/Subtract): ")
op = op.toLowerCase().trim()

switch (op) {

    case "add": {
        // Matrix A
        let row1 = rl.questionInt("Enter row length for Matrix A: ")
        let col1 = rl.questionInt("Enter column length for Matrix A: ")
        let matA = new Array(row1)

        for (let i = 0; i < row1; i++) {
            matA[i] = new Array(col1)
            for (let j = 0; j < col1; j++) {
                matA[i][j] = rl.questionInt(`Enter element at A[${i},${j}]: `)
            }
        }

        // Matrix B
        let row2 = rl.questionInt("Enter row length for Matrix B: ")
        let col2 = rl.questionInt("Enter column length for Matrix B: ")
        let matB = new Array(row2)

        for (let i = 0; i < row2; i++) {
            matB[i] = new Array(col2)
            for (let j = 0; j < col2; j++) {
                matB[i][j] = rl.questionInt(`Enter element at B[${i},${j}]: `)
            }
        }

        // Check if addition possible
        if (row1 !== row2 || col1 !== col2) {
            console.log("Cannot add matrices, dimensions are different.")
            break
        }

        // Result matrix
        let matC = new Array(row1)
        for (let i = 0; i < row1; i++) {
            matC[i] = new Array(col1)
            for (let j = 0; j < col1; j++) {
                matC[i][j] = matA[i][j] + matB[i][j]
            }
        }

        console.log("Result of Addition:")
        console.log(matC)
        break
    }

    case "subtract": {
        // Matrix A
        let row1 = rl.questionInt("Enter row length for Matrix A: ")
        let col1 = rl.questionInt("Enter column length for Matrix A: ")
        let matA = new Array(row1)

        for (let i = 0; i < row1; i++) {
            matA[i] = new Array(col1)
            for (let j = 0; j < col1; j++) {
                matA[i][j] = rl.questionInt(`Enter element at A[${i},${j}]: `)
            }
        }

        // Matrix B
        let row2 = rl.questionInt("Enter row length for Matrix B: ")
        let col2 = rl.questionInt("Enter column length for Matrix B: ")
        let matB = new Array(row2)

        for (let i = 0; i < row2; i++) {
            matB[i] = new Array(col2)
            for (let j = 0; j < col2; j++) {
                matB[i][j] = rl.questionInt(`Enter element at B[${i},${j}]: `)
            }
        }

        // Check if subtraction possible
        if (row1 !== row2 || col1 !== col2) {
            console.log("Cannot subtract matrices, dimensions are different.")
            break
        }

        // Result matrix
        let matC = new Array(row1)
        for (let i = 0; i < row1; i++) {
            matC[i] = new Array(col1)
            for (let j = 0; j < col1; j++) {
                matC[i][j] = matA[i][j] - matB[i][j]
            }
        }

        console.log("Result of Subtraction:")
        console.log(matC)
        break
    }

    default:
        console.log("Invalid operation. Enter Add or Subtract.")
}
