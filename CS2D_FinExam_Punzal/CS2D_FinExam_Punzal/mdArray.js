// Multi-dimensional array (2D array example)
let matrix = [
  [3, 4, 5],
  [6, 7, 8],
  [9, 10, 11]
];

// 1. Flatten the 2D array into a 1D array
let flattenedArray = matrix.flat();
console.log("Flattened Array:", flattenedArray);

// 2. Reshape the array into 2 rows of 3 columns
let reshapedArray = [];
for (let i = 0; i < flattenedArray.length; i += 3) {
  reshapedArray.push(flattenedArray.slice(i, i + 3));
}
console.log("Reshaped Array (2x3):", reshapedArray);

// 3. Group the array into smaller sub-arrays of size 2
let groupedArray = [];
for (let i = 0; i < flattenedArray.length; i += 2) {
  groupedArray.push(flattenedArray.slice(i, i + 2));
}
console.log("Grouped Array (Groups of 2):", groupedArray);
