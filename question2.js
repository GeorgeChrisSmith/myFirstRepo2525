/* ------------------------------
   Step 2: Sort the array ascending
   ------------------------------ */
// Sort in ascending order using a compare function
numberArray.sort(function (a, b) {
  return a - b;
});
console.log("Step 2 - Sorted array:", numberArray);