let n = Number("1234567899");

let count = 10;
let sum = 0;
while (n > 0) {
  sum = sum + (n % 10) * count;

  n = Math.floor(n / 10);
  count--;
}

if (sum % 11 === 0) console.log("isbn number");
else console.log(" not isbn number");
