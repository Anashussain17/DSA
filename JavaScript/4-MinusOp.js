// Write a program to subtract two integers without using Minus (-) operator  

import rl from 'readline-sync';
let a=rl.questionInt("Enter 1st number: ");
let b=rl.questionInt("Enter 2nd number: ");
// if(a>b){
//     console.log(`Result: ${a+(~b)+1}`);
// }
// else{
//     console.log(`Result: ${b+(~a)+1}`);
// }
let steps=0
if(a>b){
    for(let i=a;i>b;i--){
        steps++;
    }
}
else{
    for(let i=b;i>a;i--){
        steps++;
    }
}
console.log(`Result: ${steps}`);

