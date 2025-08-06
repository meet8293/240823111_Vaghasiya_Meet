// (16). Find GCD (HCF)
// Definition: Calculate the greatest common divisor of two numbers.

console.log("Find GCD (HCF)");

const g = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

g.question("Enter first number: ", (a) => {
    g.question("Enter second number: ", (b) => {
        let x = parseInt(a);
        let y = parseInt(b);
        while (y !== 0) 
        {
            let temp = y;
            y =x % y;
                x = temp;
        }
        console.log("GCD (HCF) is: ", x);
        g.close();
    });
});