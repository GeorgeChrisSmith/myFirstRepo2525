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
  debugger; // <- code will pause here
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }
  return -1;
}