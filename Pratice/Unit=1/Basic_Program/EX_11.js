// (11). Sum of Digits
// Definition: Calculate the sum of all digits in a number.

console.log("Sum of Digits");

const readline = require('node:readline');
const s = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

s.question("Enter a number: ", n => {
    n = Math.abs(parseInt(n)); 
    let sum = 0;
    while (n > 0) 
    {
        sum += n % 10;      
        n = Math.floor(n / 10); 
    }
    console.log(`Sum of digits = ${sum}`);
    s.close();
});
