// (8). Palindrome Check (Number) 
// Definition: Check if a number reads the same backward. 

console.log("Palindrome Check (Number)");

const readline = require('node:readline');
const p = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

p.question("Enter the number: ", n => {
    n = parseInt(n); 
    let original = n.toString();
    let reversed = original.split("").reverse().join("");;
    if (original === reversed) 
    {
        console.log("number is palindrome");
    }
    else
    {
        console.log("number is not palindrome");
    }
    p.close();
});