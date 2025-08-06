// (9). Check Prime Number
// Definition: Check whether the input number is prime.

console.log("Check Prime Number");

const readline = require('node:readline');
const p = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

p.question("Enter the number: ", n => {
    n = parseInt(n); 
    let prime = n > 1;
    for (let i = 2; i <= Math.sqrt(n); i++) 
    {
        if (n % i === 0) 
        {
            prime = false;
            break;
        }
    }
    if (prime) 
    {
        console.log("number is prime");
    } 
    else 
    {
        console.log("number is not prime");
    }
    p.close();
    });