// (15). Simple Calculator
// Definition: Perform +, -, *, / between two numbers.

console.log("Simple Calculator");

const c = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

c.question("Enter first number: ", (n1) => {
    c.question("Enter second number: ", (n2) => {
        c.question("Enter operator (+, -, *, /): ", (op) => {
            let a = parseFloat(n1);
            let b = parseFloat(n2);
            let result;
            if (op === '+') result = a + b;
            else if (op === '-') result = a - b;
            else if (op === '*') result = a * b;
            else if (op === '/') result = b !== 0 ? a / b : "Cannot divide by zero!";
            else result = "Invalid operator";
            console.log("ans is: " + result);
            c.close();
        });
    });
});