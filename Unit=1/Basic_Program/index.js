// Write simple program Your name display.
// const name = "Vaghasiya Meet"
// console.log("Hello "+name);
// // console.log(`Hello ${name}`);




// (1). Check Even or Odd
// Definition: Determine if a number is even or odd.

// console.log("Check Even or Odd");

// const readline = require('node:readline');
// const eo = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout,
// });

// eo.question("Enter the number: ", n => {
//     // console.log(n);
//     // console.log(typeof(n));
//     if(n % 2)
//     {
//         console.log("number is odd");
//     }
//     else
//     {
//         console.log("number is even");
//     }
//     eo.close();
// });




// (2).Find the Maximum of Two Numbers
// Definition: Given two numbers, print the larger one.

// console.log("Find the Maximum of Two Numbers");

// const readline = require('node:readline');
// const m = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout,
// });

// m.question("Enter the number: ", n1 => {
//     m.question("Enter the number: ", n2 => {
//     const a = parseFloat(n1);
//     const b = parseFloat(n2);
//     if(a > b)
//     {
//         console.log("a is max");
//     }
//     else(b > a)
//     {
//         console.log("b is max");
//     }
//     m.close();
// });
// });




// (3). Check Leap Year
// Definition: Check if a given year is a leap year.

// console.log("Check Leap Year");

// const readline = require('node:readline');
// const l = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout,
// });

// l.question("Enter the year: ", n => {
//         // console.log(n);
//     if(n % 4 == 0)
//     {
//         console.log("leap year");
//     }
//     else
//     {
//         console.log("not leap year");
//     }
//     l.close();
// });




// (4). Sum of Natural Numbers
// Definition: Calculate the sum of the first n natural numbers.

// console.log("Sum of Natural Numbers");

// const readline = require('node:readline');
// const s = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout,
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




// (5). Factorial of a Number
// Definition: Calculate factorial of a number.

// console.log("Factorial of a Number");

// const readline = require('node:readline');
// const f = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout,
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




// (6). Print Multiplication Table 
// Definition: Display multiplication table of a number up to 10.

// console.log("Multiplication Table");

// const readline = require('node:readline');
// const m = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout,
// });

// m.question("Enter the number: ", n => {
//     // n = parseInt(n); 
//     for (let i = 1; i <= 10; i++) 
//     {
//         console.log(`${n} x ${i} = ${n * i}`);
//     }
// m.close();
// });




// (7). Reverse a Number 
// Definition: Reverse the digits of a number.

// console.log("Reverse a Number");

// const readline = require('node:readline');
// const r = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout,
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




// (8). Palindrome Check (Number) 
// Definition: Check if a number reads the same backward. 

// console.log("Palindrome Check a Number");

// const readline = require('node:readline');
// const p = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout,
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




// (9). Check Prime Number
// Definition: Check whether the input number is prime.

// console.log("Check Prime Number");

// const readline = require('node:readline');
// const p = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout,
// });

// p.question("Enter the number: ", n => {
//     // n = parseInt(n); 
//     let prime = n > 1;
// for (let i = 2; i <= Math.sqrt(n); i++) 
// {
//     if (n % i === 0) 
//     {
//         prime = false;
//         break;
//     }
// }
// if (prime) 
// {
//     console.log(`number is prime`);
// } 
// else 
// {
//     console.log(`number is not prime`);
// }
// p.close();
// });




// (10). Count Digits in a Number
// Definition: Count how many digits a number contains.

// console.log("Count Digits in a Number");

// const readline = require('node:readline');
// const c = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout,
// });

// c.question("Enter the number: ", n => {
//     // n = parseInt(n); 
//     let digits = Math.abs(parseInt(n)).toString().length;
//     console.log(`The number ${n} has ${digits} digits.`);
//     c.close();
// });




// (11). Sum of Digits
// Definition: Calculate the sum of all digits in a number.

// console.log("Sum of Digits");

// const readline = require('node:readline');
// const s = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout,
// });

// s.question("Enter a number: ", n => {
//     // n = parseInt(n); 
// n = Math.abs(parseInt(n)); 
// let sum = 0;
// while (n > 0) 
// {
//     sum += n % 10;      
//     n = Math.floor(n / 10); 
// }
// console.log(`Sum of digits = ${sum}`);
// s.close();
// });





// (12). Check Armstrong Number
// Definition: Check if the number is equal to the sum of its digits each raised to the power of the number of digits.

// console.log("Check Armstrong Number");

// const a = require('readline').createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// a.question("Enter the number: ", n => {
//     // n = parseInt(n); 
//     const strNum = n.toString();       
//     const digits = strNum.length;      
//     let sum = 0;

// for (let ch of strNum) 
// {
//     sum += Math.pow(parseInt(ch), digits);  
// }
// if (sum === parseInt(n)) 
// {
//     console.log(`number is armstrong`);
// } 
// else 
// {
//    console.log(`number is not armstrong`);
// }
// a.close();  
// });




// (13). Generate Fibonacci Series
// Definition: Generate the first n Fibonacci numbers.

// console.log("Generate Fibonacci Series");

// const f = require('readline').createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// f.question("Enter the number: ", (n) => {
//     // n = parseInt(n);
// if (isNaN(n) || n <= 0) 
// {
//     console.log("Please enter a valid positive number");
// } 
// else 
// {
//     let a = 0, b = 1;
//     console.log("Fibonacci Series: ");
//     for (let i = 0; i < n; i++) 
//     {
//         console.log(a);
//         let next = a + b;
//         a = b;
//         b = next;
//     }
// }
// f.close();
// });




// (14). Check Vowel or Consonant
// Definition: Determine if a given character is a vowel.

// console.log("Check Vowel or Consonant");

// const v = require('readline').createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// v.question("Enter a single character: ", (char) => {
//     // n = parseInt(n);
// if (char.length !== 1 || !/[a-zA-Z]/.test(char)) 
// {
//     console.log("Please enter a valid single alphabet character");
// } 
// else 
// {
//     const lowerChar = char.toLowerCase();
//     if (["a", "e", "i", "o", "u"].includes(lowerChar)) 
//     {
//         console.log(`character a vowel`);
//     } 
//     else 
//     {
//         console.log(`character a consonant`);
//     }
// }
// v.close();
// });




// (15). Simple Calculator
// Definition: Perform +, -, *, / between two numbers.

// console.log("Simple Calculator");

// const c = require('readline').createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// c.question("Enter first number: ", (n1) => {
//     c.question("Enter second number: ", (n2) => {
//         c.question("Enter operator (+, -, *, /): ", (op) => {
//             // n = parseInt(n);
//             let a = parseFloat(n1);
//             let b = parseFloat(n2);
//             let result;
//                 if (op === '+') result = a + b;
//                 else if (op === '-') result = a - b;
//                 else if (op === '*') result = a * b;
//                 else if (op === '/') result = b !== 0 ? a / b : "Cannot divide by zero!";
//                 else result = "Invalid operator";
//                 console.log("ans is: " + result);
// c.close();
//         });
//     });
// });




// (16). Find GCD (HCF)
// Definition: Calculate the greatest common divisor of two numbers.

// console.log("Find GCD (HCF)");

// const g = require('readline').createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// g.question("Enter first number: ", (a) => {
//     g.question("Enter second number: ", (b) => {
//         // n = parseInt(n);
//         let x = parseInt(a);
//         let y = parseInt(b);
//             while (y !== 0) 
//             {
//                 let temp = y;
//                 y = x % y;
//                 x = temp;
//             }
//             console.log("GCD (HCF) is: ", x);
// g.close();
//     });
// });




// (17). Check Perfect Number
// Definition: A number whose sum of divisors equals itself.

// console.log("Check Perfect Number");

// const p = require('readline').createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// p.question("Enter a number: ", (num) => {
//     // n = parseInt(n);
//     let n = parseInt(num);
//     let sum = 0;
// for (let i = 1; i < n; i++) 
// {
//     if (n % i === 0) 
//     {
//         sum += i;
//     }
// }
// if (sum === n) 
// {
//     console.log(`number is a perfect Number`);
// } 
// else 
// {
//     console.log(`number is not perfect number`);
// }
// p.close();
// });




// (18). Print All Divisors
// Definition: Display all positive divisors of a number.

// console.log("Print All Divisors");

// const d = require('readline').createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// d.question("Enter the number: ", (num) => {
//     // n = parseInt(n);
//     let n = parseInt(num);
//     console.log("Divisors of " + n + " are:");
//     for (let i = 1; i <= n; i++) 
//     {
//         if (n % i === 0) 
//         {
//             console.log(i);
//         }
//     }
// d.close();
// });




// (19). Number is Positive, Negative or Zero
// Definition: Check if number is +ve, -ve, or zero.

// console.log("Number is Positive, Negative or Zero");

// const p = require('readline').createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// p.question("Enter a number: ", (num) => {
//     // n = parseInt(n);
//     let n = parseFloat(num);
//     if (n > 0) 
//     {
//         console.log(`number is positive`);
//     }
//     else if (n < 0) 
//     {
//         console.log(`number is negative`);
//     }
//     else 
//     {
//         console.log(`number is zero`);
//     }
// p.close();
// });




// (20). Find Power (Exponentiation)
// Definition: Compute a raised to the power b (a^b).

// console.log("Find Power (Exponentiation)");

// const p = require('readline').createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// p.question("Enter base (a): ", (a) => {
//     p.question("Enter exponent (b): ", (b) => {
//         //  n = parseInt(n);
//         let base = parseFloat(a);
//         let exponent = parseFloat(b);
//         let result = Math.pow(base, exponent);  // or: base ** exponent
//         console.log(`${base} ^ ${exponent} = ${result}`);
// p.close();
//     });
// });