/* ------------------------------
   Step 4: Remove two numbers
   ------------------------------ */
// Numbers to remove
let removeNumbers = [8, 31];

removeNumbers.forEach(function (num) {
  removeValue(numberArray, num);
});
console.log("Step 4 - After removal:", numberArray);