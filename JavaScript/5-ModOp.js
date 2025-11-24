// Write a program to find remainder of two numbers without using modulus (%) operator 
import rl from 'readline-sync';
let a=rl.questionInt("Enter 1st number: ");
let b=rl.questionInt("Enter 2nd number: ");
// dividend=divisor*quotient+remainder
if(a>b){
    let quotient=Math.floor(a/b);
    let remainder=a-quotient*b;
    console.log(`Remainder: ${remainder}`);
}
else{
    let quotient=Math.floor(b/a);
    let remainder=b-quotient*a;
    console.log(`Remainder: ${remainder}`);
}