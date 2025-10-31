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