

function checkISBN(num) {
  if (num.length !== 10) {
    return "enter valid isbn number ";
  }
  let n = Number(num);
  let count = 10;
  let sum = 0;
  while (n > 0) {
  
    sum = sum + (n % 10) * count;
   


    n = Math.floor(n / 10);
    count--;
  }
  if (sum % 11 === 0) return "isbn number";
  else return " not isbn number";
}

console.log(checkISBN("0471958697"))
