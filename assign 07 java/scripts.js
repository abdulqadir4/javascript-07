// 1. Declare an empty array using JS literal notation to store student names in future.
let studentNamesLiteral = [];

// 2. Declare an empty array using JS object notation to store student names in future.
let studentNamesObject = new Array();

// 3. Declare and initialize a strings array.
let stringsArray = ["apple", "banana", "cherry"];

// 4. Declare and initialize a numbers array.
let numbersArray = [1, 2, 3, 4, 5];

// 5. Declare and initialize a boolean array.
let booleanArray = [true, false, true];

// 6. Declare and initialize a mixed array.
let mixedArray = ["apple", 5, true];

// 7. Declare and Initialize an array and store available education qualifications in Pakistan.
let qualificationsArray = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];

// 8. Write a program to store 3 student names in an array. Take another array to store score of these three students.
// Assume that total marks are 500 for each student, display the scores & percentages of students.
let studentNames = ["John", "Alice", "Bob"];
let scores = [400, 450, 480];

// Calculate percentages
let percentages = [];
for (let i = 0; i < scores.length; i++) {
  percentages.push((scores[i] / 500) * 100);
}

// Display scores and percentages
let output = document.getElementById("output");
output.innerHTML += "<h2>Student Scores and Percentages</h2>";
for (let i = 0; i < studentNames.length; i++) {
  output.innerHTML += "<p>" + studentNames[i] + " scored " + scores[i] + " out of 500. Percentage: " + percentages[i] + "%</p>";
}
