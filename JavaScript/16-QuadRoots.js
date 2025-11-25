// Write a program to find the roots of a quadratic equation
import rl from "readline-sync"
console.log("Quadratic Equation: ax^2 + bx + c= 0")
let a=rl.questionInt("Enter the number for a: ")
let b=rl.questionInt("Enter the number for b: ")
let c=rl.questionInt("Enter the number for c: ")


if(b**2-(4*a*c)==0){
    console.log("Root is: ",-b/(2*a))
    
}else if(b**2-(4*a*c)>0){
    let root1=(-b+Math.sqrt(b**2- 4*a*c))/(2*a)
    let root2=(-b-Math.sqrt(b**2- 4*a*c))/(2*a)
    console.log(`Roots are: ${root1} , ${root2}`)
}else{
    console.log("No real roots")
}