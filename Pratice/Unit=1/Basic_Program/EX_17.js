// (17). Check Perfect Number
// Definition: A number whose sum of divisors equals itself.

console.log("Check Perfect Number");

const p = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

p.question("Enter a number: ", (num) => {
    const  n = parseInt(num);
    let sum = 0;
    for (let i = 1; i < n; i++) 
    {
        if (n % i === 0) 
        {
            sum += i;
        }
    }
    if (sum === n) 
    {
        console.log(`number is a perfect Number`);
    } 
    else 
    {
        console.log(`number is not perfect number`);
    }
    p.close();
});