// (18). Print All Divisors
// Definition: Display all positive divisors of a number.

console.log("Print All Divisors");

const d = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

d.question("Enter the number: ", (num) => {
    let n = parseInt(num);
    console.log("Divisors of " + n + " are:");
    for (let i = 1; i <= n; i++) 
    {
        if (n % i === 0) 
        {
            console.log(i);
        }
    }
    d.close();
});