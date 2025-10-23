// Step 1: Create a movie object with initial properties Title and Year
let myMovie = {
    Title: "The longest day",
    Year: 1964
};
console.log("Step 1 – Initial object:", myMovie);

// Step 2: Add new properties 'rating' and 'Summary' to the object
myMovie.rating = 5;
myMovie.Summary = "World War II movie about the Normandy landings";
console.log("Step 2 – Added properties:", myMovie);

// Step 3: Update the 'rating' property and confirm 'Year' is correct
myMovie.rating = 4; // Update rating from 5 to 4
myMovie.Year = 1964; // Confirm the year (no change in this case)
console.log("Step 3 – Updated properties:", myMovie);

// Step 4: Remove the 'Summary' property from the object
delete myMovie.Summary;
console.log("Step 4 – Removed Summary:", myMovie);