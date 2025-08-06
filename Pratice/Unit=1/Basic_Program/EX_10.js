// (10). Count Digits in a Number
// Definition: Count how many digits a number contains.

console.log("Count Digits in a Number");

const readline = require('node:readline');
const c = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

c.question("Enter the number: ", n => {
    n = parseInt(n); 
    let digits = Math.abs(parseInt(n)).toString().length;
    console.log(`The number ${n} has ${digits} digits`);
    c.close();
});