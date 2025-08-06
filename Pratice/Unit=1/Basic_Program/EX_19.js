// (19). Number is Positive, Negative or Zero
// Definition: Check if number is +ve, -ve, or zero.

// console.log("Number is Positive, Negative or Zero");

const p = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

p.question("Enter a number: ", (num) => {
    let n = parseFloat(num);
    if (n > 0) 
    {
        console.log(`number is positive`);
    }
    else if (n < 0) 
    {
        console.log(`number is negative`);
    }
    else 
    {
        console.log(`number is zero`);
    }
    p.close();
});