// 1. Single-Line Comment
// This comment will not execute

console.log("Hello JavaScript");


// 2. Comment After Code
let age = 20; // Student age

console.log(age);


// 3. Multiple Single-Line Comments
// Create a variable
// Store the student's name
// Print the student's name

let name = "Ashwani";

console.log(name);


// 4. Multi-Line Comment
/*
This is a
multi-line comment.
*/

console.log("Multi-line comment example");


// 5. Multi-Line Explanation
/*
Calculate the total price
by multiplying price
and quantity.
*/

let price = 100;
let quantity = 5;

let total = price * quantity;

console.log(total);


// 6. Temporarily Disable Code
console.log("Hello");

// console.log("This will not execute");

console.log("JavaScript");


// 7. Disable Multiple Lines
/*
console.log("Line 1");
console.log("Line 2");
console.log("Line 3");
*/

console.log("Line 4");


// 8. Commented Variable
let studentName = "Ashwani";

// let studentAge = 20;

console.log(studentName);


// 9. Section Comments
// Variables

let student = "Ashwani";
let studentAge = 20;


// Calculations

let nextAge = studentAge + 1;


// Output

console.log(student);
console.log(nextAge);


// 10. Comments in DSA Code
let arr = [10, 20, 30, 40, 50];

let sum = 0;

// Traverse the complete array
for (let i = 0; i < arr.length; i++) {

    // Add current element to sum
    sum += arr[i];
}

console.log(sum);


// 11. Time Complexity Comment
// Time Complexity: O(n)
// Space Complexity: O(1)

let numbers = [1, 2, 3, 4, 5];

let totalSum = 0;

for (let i = 0; i < numbers.length; i++) {
    totalSum += numbers[i];
}

console.log(totalSum);


// 12. Comments for Sections
// Input

let number = 10;


// Processing

let square = number * number;


// Output

console.log(square);


// 13. JSDoc Comment
/**
 * Adds two numbers.
 */

function add(a, b) {
    return a + b;
}

console.log(add(10, 20));


// 14. Good Comment
let marks = 75;

// Check whether the student passed
if (marks >= 40) {
    console.log("Pass");
}


// 15. Multiple Section Comments
// Variables

let length = 10;
let width = 5;


// Calculation

let area = length * width;


// Output

console.log(`Area = ${area}`);


// 16. DSA Example
let values = [5, 10, 15, 20, 25];

let maximum = values[0];

// Traverse the array to find maximum
for (let i = 1; i < values.length; i++) {

    // Update maximum if current value is larger
    if (values[i] > maximum) {
        maximum = values[i];
    }
}

console.log(`Maximum = ${maximum}`);