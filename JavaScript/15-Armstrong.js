// Write a program to find whether given number is an Armstrong number or not? ** (Narcissistic number or Pluperfect digital invariant (PPDI) or a Plus perfect number) 
import rl from "readline-sync";
let num = rl.question("Enter a number: ");

function isArmstrong(num) {
    let digits = num.split("");
    let sum = 0;
    for (let i = 0; i < digits.length; i++) {
        sum += parseInt(digits[i]) ** digits.length;
    }
    if (sum === parseInt(num)) {
        console.log(num, "is an Armstrong number");
    } else {
        console.log(num, "is NOT an Armstrong number");
    }
}

isArmstrong(num);
