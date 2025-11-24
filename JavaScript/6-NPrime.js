import rl from 'readline-sync';
let n=rl.questionInt("Enter a number: ");
let primArr=[]
for(let i=1;i<=n;i++){
    let factors=0;
    for(let j=1;j<=i;j++){
        if(i%j==0){
            factors++
        }
    }
    if(factors==2){
        primArr.push(i)
    }

}
console.log(`Prime numbers are:`,primArr)