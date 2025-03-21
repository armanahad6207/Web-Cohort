const prompt = require('prompt-sync')(); 
let a = prompt("enter first larger number. ")
let b =prompt("enter second largest number. ")

function findGCD(a,b){
    while(b!==0){
        let temp = b;
        let r = a%b;
        a = b;
        b = r;
       
    }
    return a;
}

let gcd = findGCD(a , b);
console.log(` GCD  of ${a} and ${b} is ${gcd}`)