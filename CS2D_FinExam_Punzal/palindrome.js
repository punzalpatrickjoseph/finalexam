// Prompt the user to input two words
let var1 = prompt("Enter the first word:");
let var2 = prompt("Enter the second word:");

// Reverse function
function reverse(str) {
    return str.split('').reverse().join('');
}

// Check if the words are palindromes
alert(var1 === reverse(var1) ? `${var1} is a palindrome` : `${var1} is not a palindrome`);
alert(var2 === reverse(var2) ? `${var2} is a palindrome` : `${var2} is not a palindrome`);
