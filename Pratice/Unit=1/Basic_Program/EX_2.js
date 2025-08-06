// (2).Find the Maximum of Two Numbers
// Definition: Given two numbers, print the larger one.

console.log("Find the Maximum of Two Numbers");

const readline = require('node:readline');
const m = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

m.question("Enter the number: ", n1 => {
    m.question("Enter the number: ", n2 => {
    const a = parseFloat(n1);
    const b = parseFloat(n2);
    if(a > b)
    {
        console.log("a is max");
    }
    else if(b > a)
    {
        console.log("b is max");
    }
    else
    {
        console.log("Both numbers are equal");
    }
    m.close();
});
});
