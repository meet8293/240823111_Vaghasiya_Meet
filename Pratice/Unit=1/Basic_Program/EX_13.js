// (13). Generate Fibonacci Series
// Definition: Generate the first n Fibonacci numbers.

console.log("Generate Fibonacci Series");

const f = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

f.question("Enter the number: ", (n) => {
    n = parseInt(n);
    if (isNaN(n) || n <= 0) 
    {
        console.log("Please enter a valid positive number");
    } 
    else 
    {
        let a = 0, b = 1;
        console.log("Fibonacci Series: ");
        for (let i = 0; i < n; i++) 
        {
            console.log(a);
            let next = a + b;
            a = b;
            b = next;
        }
    }
    f.close();
});