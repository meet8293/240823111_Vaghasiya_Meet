// (5). Factorial of a Number
// Definition: Calculate factorial of a number.

console.log("Factorial of a Number");

const readline = require('node:readline');
const f = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

f.question("Enter the number: ", n => {
    n = parseInt(n); 
    let fact = 1;
    for (let i = 1; i <= n; i++) 
    {
        fact *= i;   
    }
    console.log(`Factorial numbers is: ${fact}`);
    f.close();
});