import rl from "readline-sync"
let len=rl.questionInt("Enter the length of array: ")
let arr=new Array(len)
for(let i=0;i<arr.length;i++){
    arr[i]=rl.questionInt(`Enter a number at arr${[i]}: `)
}
let result=arr[0]
for(let i=1;i<arr.length;i++){
    result=lcm(result,arr[i])
}
console.log("Result: ",result)
function lcm(a,b){
    return Math.abs(a*b)/gcd(a,b)

}
function gcd(a,b){
    if(b==0){
        return a;
    }
    return gcd(b,a%b);
}