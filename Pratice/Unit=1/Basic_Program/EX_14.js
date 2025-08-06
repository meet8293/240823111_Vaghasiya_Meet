// (14). Check Vowel or Consonant
// Definition: Determine if a given character is a vowel.

console.log("Check Vowel or Consonant");

const v = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

v.question("Enter a single character: ", (char) => {
    if (char.length !== 1 || !/[a-zA-Z]/.test(char)) 
    {
        console.log("Please enter a valid single alphabet character");
    } 
    else 
    {
        const lowerChar = char.toLowerCase();
        if (["a", "e", "i", "o", "u"].includes(lowerChar)) 
        {
            console.log(`Character a vowel`);
        } 
        else 
        {
            console.log(`Character a consonant`);
        }
    }
    v.close();
});