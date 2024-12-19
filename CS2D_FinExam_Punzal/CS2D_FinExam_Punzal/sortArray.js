// Initial arrays
let numbers = [23, 75, 23, 7, 11, 30, 40, 81, 50];
let names = ["Andeea", "Gail", "Jordan", "Claire", "Jean"];

// Merge arrays, sort numbers in reverse order, and sort names alphabetically
let merged = [...numbers, ...names].sort((a, b) => (typeof a === 'number' && typeof b === 'number') ? b - a : a > b ? 1 : -1);

console.log(merged);
