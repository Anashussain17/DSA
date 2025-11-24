// Write a program to Generate Even and Odd Number less than N and Generate ‘N’ Even and Odd 
// Numbers.

import rl from 'readline-sync';
const number = rl.questionInt('Enter a number: ');
console.log("Even numbers are: ");
for (let i = 0; i < number; i++) {
    if (i % 2 === 0) {
        console.log( i);
    }
    
}
console.log("Odd numbers are: ");
for (let i = 0; i < number; i++) {
    if (i % 2 !== 0) {
        console.log( i);
    }
}