// Write a program to find GCD (Greatest Common Divisor) or HCF (Highest Common Factor) of two numbers is the largest number that divides both of them using recursion. 
import rl from "readline-sync"
let a=rl.questionInt("Enter 1st number: ")
let b=rl.questionInt("Enter 2nd number: ")
function GCD(a,b){
    if(b==0){
        return a
    }
    return GCD(b,a%b)
}
let Result=GCD(a,b)
console.log("Result:",Result)