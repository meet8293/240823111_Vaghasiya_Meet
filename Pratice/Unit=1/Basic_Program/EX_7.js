// (7). Reverse a Number 
// Definition: Reverse the digits of a number.

console.log("Reverse a Number");

const readline = require('node:readline');
const r = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

r.question("Enter the number: ", n => {
    n = parseInt(n); 
    let original = n;
    let reversed = 0;
    while (n > 0)
    {
        let digit = n % 10;  
        reversed = reversed * 10 + digit;
        n = Math.floor(n / 10);
    }
    console.log(`Reverse number is: ${reversed}`);
    r.close();
});