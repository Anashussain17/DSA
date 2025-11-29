// Write a program check whether given character is an alphabet or not
import rl from "readline-sync"
let char=rl.question("Enter any character: ")
if((char.charCodeAt(0)<=122&&char.charCodeAt(0)>=97)||(char.charCodeAt(0)>=65&&char.charCodeAt(0)<=90)){
    console.log("The character is an alphabet")
}
else{
    console.log("Its not an alphabet")
}