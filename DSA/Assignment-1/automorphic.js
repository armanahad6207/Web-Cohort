function isAutomorphic(n) {
    // Write your logic here
    let lastDigit= 0;
    if(n>=1 && n<10){
        let num = Math.pow(n,2);
         lastDigit = num%10;
        

    }
    else if(n>=10 && n<100){
        let num = Math.pow(n,2);
        lastDigit = num%100;

    }
    else if(n>=100 && n<1000){
        let num = Math.pow(n,2);
        lastDigit = num%100;

    }
    else{
        console.log(`${n} grater than 1000`)
    }
   if(n === lastDigit) return "Yes"
   else return "No"
}

console.log(isAutomorphic(9999))