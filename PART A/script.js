/* ==========================================================
   Array Operations with Sequential and Binary Search
   ==========================================================
   This script demonstrates:
   1. Building an array
   2. Sorting the array
   3. Inserting numbers while keeping it sorted
   4. Removing numbers while keeping it sorted
   5. Sequential Search function
   6. Binary Search function
   All functions and variables follow W3Schools JS style guide.
   ========================================================== */

/* ------------------------------
   Step 1: Build an array
   ------------------------------ */
// Initial array of numbers
let numberArray = [11, 5, 8, 3, 25, 16, 31, 45, 14, 20];

/* ------------------------------
   Step 2: Sort the array ascending
   ------------------------------ */
// Sort in ascending order using a compare function
numberArray.sort(function (a, b) {
  return a - b;
});
console.log("Step 2 - Sorted array:", numberArray);

/* ------------------------------
   Step 3: Insert three numbers
   ------------------------------ */
// Numbers to insert
let insertNumbers = [19, 23, 30];

// Insert each number into the correct sorted position
insertNumbers.forEach(function (num) {
  insertSorted(numberArray, num);
});
console.log("Step 3 - After insertion:", numberArray);

/**
 * insertSorted inserts a value into a sorted array
 * @param {Array} arr - The sorted array
 * @param {number} value - The number to insert
 */
function insertSorted(arr, value) {
  // Find correct position to insert
  let index = 0;
  while (index < arr.length && arr[index] < value) {
    index++;
  }
  arr.splice(index, 0, value); // Insert value at position
}

/* ------------------------------
   Step 4: Remove two numbers
   ------------------------------ */
// Numbers to remove
let removeNumbers = [8, 31];

removeNumbers.forEach(function (num) {
  removeValue(numberArray, num);
});
console.log("Step 4 - After removal:", numberArray);

/**
 * removeValue removes a specific value from an array
 * @param {Array} arr - The array to remove from
 * @param {number} value - The value to remove
 */
function removeValue(arr, value) {
  let index = arr.indexOf(value);
  if (index !== -1) {
    arr.splice(index, 1);
  }
}

/* ------------------------------
   Step 5: Sequential Search
   ------------------------------ */
/**
 * sequentialSearch searches for a value in an array by checking each element.
 * @param {Array} arr - The array to search
 * @param {number} target - The value to find
 * @returns {number} - Index of the value if found, -1 otherwise
 */
function sequentialSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }
  return -1;
}

// Example test for sequentialSearch
console.log("Sequential search for 19:", sequentialSearch(numberArray, 19));

/* ------------------------------
   Step 6: Binary Search
   ------------------------------ */
/**
 * binarySearch searches for a value in a sorted array using the binary search algorithm.
 * @param {Array} arr - The sorted array to search
 * @param {number} target - The value to find
 * @returns {number} - Index of the value if found, -1 otherwise
 */
function binarySearch(arr, target) {
  let low = 0;              // Start index
  let high = arr.length - 1; // End index

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] < target) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return -1;
}

// Example test for binarySearch
console.log("Binary search for 31:", binarySearch(numberArray, 31)); // Should return -1

<<<<<<< Updated upstream
sequentialSearch(numberArray, 19);

function sequentialSearch(arr, target) {
  debugger; // <- code will pause here
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }
  return -1;
=======
function insertSorted(arr, value) {
  let index = 0;
  while (index < arr.length && arr[index] < value) {
    index++;
  }
  arr.splice(index, 0, value); // <-- Best line for breakpoint
>>>>>>> Stashed changes
}