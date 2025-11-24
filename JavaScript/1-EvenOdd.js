// Write a program to given input Check whether  Even or odd.
import rl from 'readline-sync';
const number = rl.questionInt('Enter a number: ');
if (number % 2 === 0) {
    console.log('The number is even');
} else {
    console.log('The number is odd');
}