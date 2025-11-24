// Write a program to decide given N is Prime or not.
import rl from 'readline-sync';
let n=rl.questionInt("Enter a number: ");
let factors=0;
for (let i=2;i<=n;i++){
    if(n%i==0){
        factors++;
    }
}
if(factors==1){
    console.log("The number is prime");
}
else{
    console.log("The number is not prime");
}