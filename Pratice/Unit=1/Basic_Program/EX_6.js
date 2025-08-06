// (6). Print Multiplication Table 
// Definition: Display multiplication table of a number up to 10.

console.log("Multiplication Table");

const readline = require('node:readline');
const m = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

m.question("Enter the number: ", n => {
    n = parseInt(n); 
    for (let i = 1; i <= 10; i++) 
    {
        console.log(`${n} x ${i} = ${n * i}`);
    }
    m.close();
});