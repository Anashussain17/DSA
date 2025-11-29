// Write a program to find power of a number using recursion 
import rl from "readline-sync"

function power(base,exponent){
    if(exponent==0){
        return base;
    }
   return base*power(base,exponent-1)
}

let base=rl.questionInt("Enter the base number: ")
let exponent= rl.questionInt("Enter the exponent: ")

let Result=power(base,exponent)

console.log(`${base}^${exponent}=`,Result)