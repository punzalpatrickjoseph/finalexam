function bubbleSort(arr) {
  let swapped;
  do {
    swapped = false;
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        swapped = true;
      }
    }
  } while (swapped);
  return arr;
}

// Example usage:
let numbers = [60, 15, 11, 23, 13];
console.log("Original Array:", numbers);
console.log("Sorted Array:", bubbleSort(numbers));
