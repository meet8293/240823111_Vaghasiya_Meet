// (20). Find Power (Exponentiation)
// Definition: Compute a raised to the power b (a^b).

console.log("Find Power (Exponentiation)");

const p = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

p.question("Enter base: ", a => {
    p.question("Enter exponent: ", b => {
        let result = Math.pow(a, b);
        console.log(`${a} ^ ${b} = ${result}`);
        p.close();
    });
});