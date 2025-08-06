// (1). Check Even or Odd
// Definition: Determine if a number is even or odd.

console.log("Check Even or Odd");

const readline = require('node:readline');
const e = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

e.question("Enter the number: ", n => {
    // console.log(n);
    // console.log(typeof(n));
    n = parseInt(n); 
    if(n % 2)
    {
        console.log("number is odd");
    }
    else
    {
        console.log("number is even");
    }
    e.close();
});