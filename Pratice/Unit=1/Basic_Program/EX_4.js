// (4). Sum of Natural Numbers
// Definition: Calculate the sum of the first n natural numbers.

console.log("Sum of Natural Numbers");

const readline = require('node:readline');
const s = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

s.question("Enter the number: ", n => {
    n = parseInt(n);
    let sum = 0;    
    for (let i = 1; i <= n; i++) 
    {
        sum += i;   
    }
    console.log(`Sum of natural numbers is: ${sum}`);
    s.close();
});