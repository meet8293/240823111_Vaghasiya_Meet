// (3). Check Leap Year
// Definition: Check if a given year is a leap year.

console.log("Check Leap Year");

const readline = require('node:readline');
const l = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

l.question("Enter the year: ", n => {
    n = parseInt(n); 
    if(n % 4 == 0)
    {
        console.log("leap year");
    }
    else
    {
        console.log("not leap year");
    }
    l.close();
});