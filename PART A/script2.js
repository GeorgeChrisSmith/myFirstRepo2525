/* ------------------------------
   Sequential Search with debugger
   ------------------------------ */
function sequentialSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    debugger; // Pause here for step-by-step debugging
    console.log("Step", i + 1, "i =", i, "arr[i] =", arr[i], "target =", target);
    if (arr[i] === target) {
      return i;
    }
  }
  return -1;
}

// Example call
console.log("Sequential search result:", sequentialSearch(numberArray, 19));


/* ------------------------------
   Binary Search with debugger
   ------------------------------ */
function binarySearch(arr, target) {
  let low = 0;
  let high = arr.length - 1;
  let step = 1;

  while (low <= high) {
    debugger; // Pause here for step-by-step debugging
    let mid = Math.floor((low + high) / 2);
    console.log("Step", step, "low =", low, "high =", high, "mid =", mid, "arr[mid] =", arr[mid], "target =", target);
    step++;

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

// Example call
console.log("Binary search result:", binarySearch(numberArray, 23));