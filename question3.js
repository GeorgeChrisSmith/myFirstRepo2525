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