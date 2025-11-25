// Write a program to Check Whether the given year is a leap year or not 

import rl from "readline-sync"
let year=rl.questionInt("Enter any year: ")
if((year%4==0 && year%100!=0 )|| year%400==0){
    console.log("Its a leap year")
}
else{
    console.log("Its not a leap year")
}