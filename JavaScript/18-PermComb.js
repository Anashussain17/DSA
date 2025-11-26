// Write a program to Program to calculate the Combinations and Permutations! 
import rl from "readline-sync"
let num=rl.questionInt("Enter 1 for calculating combinations OR 2 for calculating Permutations: ")
function fact(n){
    let factor=1
    for(let i=n;i>0;i--){
        factor*=i
    }
    return factor;
}
switch(num){
    case 1:
        let comp=rl.question("Enter the combination nCr: ")
        comp=comp.split("C")
        let n=parseInt(comp[0])
        let r=parseInt(comp[1])
        let result1=fact(n)/((fact(n-r))*fact(r))
        console.log(`Result of ${comp}`,result1)
        break;
    case 2:
        let perm=rl.question("Enter the permutation nPr: ")
        perm=perm.split("P")
        let n1=parseInt(perm[0])
        let r1=parseInt(perm[1])
        let result2=fact(n1)/(fact(n1-r1))
        console.log(`Result of ${perm}`,result2)
        break;
    default:
        console.log("Invalid nuber");        
}