// Write a program to check if the given string is palindrome or not
import rl from "readline-sync"
let str=rl.question("Enter any string: ")
let result=palindrome(str)
console.log(`${str}${result}`)

function palindrome(str){
    str=str.toLowerCase()
    let rev=""
    for(let i=str.length-1;i>=0;i--){
        rev+=str[i]
    }
    if(str===rev){
        return ` is Palindrome`
    }
    else{
        return ` is not a Palindrome`
    }

}
