// (12). Check Armstrong Number
// Definition: Check if the number is equal to the sum of its digits each raised to the power of the number of digits.

console.log("Check Armstrong Number");

const a = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

a.question("Enter the number: ", n => {
    n = parseInt(n); 
    const strNum = n.toString();       
    const digits = strNum.length;      
    let sum = 0;
    for (let ch of strNum) 
    {
        sum += Math.pow(parseInt(ch), digits);  
    }
    if (sum === parseInt(n)) 
    {
        console.log(`number is armstrong`);
    } 
    else 
    {
    console.log(`number is not armstrong`);
    }
    a.close();  
});