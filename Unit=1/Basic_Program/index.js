// Write simple program Your name display.
// const name = "Vaghasiya Meet"
// console.log("Hello "+name)
// console.log(`Hello ${name}`)




// (1).Check Even or Odd
// Definition: Determine if a number is even or odd.

// console.log("Check Even or Odd")
// const readline = require('node:readline');
// const eo = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });
// eo.question("Enter the number: ", n => {
//     // console.log(n);
//     // console.log(typeof(n));
//     if(n % 2)
//     {
//         console.log("number is odd")
//     }
//     else
//     {
//         console.log("number is even")
//     }
//     eo.close();
// });




// (2).Find the Maximum of Two Numbers
// Definition: Given two numbers, print the larger one.

// console.log("Find the Maximum of Two Numbers")
// const readline = require('node:readline');
// const m = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });
// m.question("Enter the number: ", n1 => {
//     m.question("Enter the number: ", n2 => {
//     const a = parseFloat(n1);
//     const b = parseFloat(n2);
//     if(a > b)
//     {
//         console.log("a is max")
//     }
//     else(b > a)
//     {
//         console.log("b is max")
//     }
//     m.close();
// });
// });




// (3).Check Leap Year
// Definition: Check if a given year is a leap year.

// console.log("Check Leap Year")
// const readline = require('node:readline');
// const l = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });
// l.question("Enter the year: ", n => {
//         // console.log(n);
//     if(n % 4 == 0)
//     {
//         console.log("leap year")
//     }
//     else
//     {
//         console.log("not leap year")
//     }
//     l.close();
// });




// (4).Sum of Natural Numbers
// Definition: Calculate the sum of the first n natural numbers.

// console.log("Sum of Natural Numbers")
// const readline = require('node:readline');
// const s = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });
// s.question("Enter the number: ", n => {
//     // n = parseInt(n); 
//     let sum = 0;    
//     for (let i = 1; i <= n; i++) 
//     {
//         sum += i;   
//     }
//     console.log(`Sum of natural numbers is: ${sum}`);
// s.close();
// });




// (5).Factorial of a Number
// Definition: Calculate factorial of a number.

// console.log("Factorial of a Number")
// const readline = require('node:readline');
// const f = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });
// f.question("Enter the number: ", n => {
//     // n = parseInt(n); 
//     let fact = 1;
//     for (let i = 1; i <= n; i++) 
//     {
//         fact *= i;   
//     }
//     console.log(`Factorial numbers is: ${fact}`);
// f.close();
// });




// (6).Print Multiplication Table 
// Definition: Display multiplication table of a number up to 10.

// console.log("Multiplication Table")
// const readline = require('node:readline');
// const m = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });
// m.question("Enter the number: ", n => {
//     // n = parseInt(n); 
//     for (let i = 1; i <= 10; i++) 
//     {
//         console.log(`${n} x ${i} = ${n * i}`);
//     }
// m.close();
// });




// (7).Reverse a Number 
// Definition: Reverse the digits of a number.

// console.log("Reverse a Number")
// const readline = require('node:readline');
// const r = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });
// r.question("Enter the number: ", n => {
//     // n = parseInt(n); 
//     let original = n;
//     let reversed = 0;
//     while (n > 0)
//     {
//         let digit = n % 10;  
//         reversed = reversed * 10 + digit;
//         n = Math.floor(n / 10);
//     }
//     console.log(`Reverse number is: ${reversed}`);
// r.close();
// });




// (8).Palindrome Check (Number) 
// Definition: Check if a number reads the same backward. 

// console.log("Palindrome Check a Number")
// const readline = require('node:readline');
// const p = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });
// p.question("Enter the number: ", n => {
//     // n = parseInt(n); 
//     let original = n.toString();
//     let reversed = original.split("").reverse().join("");;
//     if (original === reversed) 
//     {
//         console.log("number is palindrome");
//     }
//     else
//     {
//         console.log("number is not palindrome");
//     }
// p.close();
// });