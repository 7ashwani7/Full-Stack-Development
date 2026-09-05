// 1. Browser Prompt
let browserName = prompt("Enter your name:");

console.log(`Hello ${browserName}`);


// 2. Node.js Readline
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter your name: ", function(name) {
    console.log(`Your name is ${name}`);
    rl.close();
});


// 3. Number Input Using Readline
const readline2 = require("readline");

const rl2 = readline2.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl2.question("Enter your age: ", function(input) {

    let age = Number(input);

    console.log(age);
    console.log(typeof age);

    rl2.close();
});


// 4. Two Number Inputs
const readline3 = require("readline");

const rl3 = readline3.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl3.question("Enter first number: ", function(first) {

    rl3.question("Enter second number: ", function(second) {

        let a = Number(first);
        let b = Number(second);

        console.log(`Sum = ${a + b}`);

        rl3.close();
    });
});


// 5. Reading Complete Input
const fs = require("fs");

const input = fs.readFileSync(0, "utf8").trim();

console.log(input);


// 6. Splitting Input
const input2 = fs.readFileSync(0, "utf8").trim();

let values = input2.split(" ");

console.log(values);


// 7. Converting Input to Numbers
const input3 = fs.readFileSync(0, "utf8").trim();

let numbers = input3.split(" ").map(Number);

console.log(numbers);


// 8. Destructuring Input
const input4 = fs.readFileSync(0, "utf8").trim();

let [a, b] = input4.split(" ").map(Number);

console.log(a);
console.log(b);


// 9. Multiple Line Input
const input5 = fs.readFileSync(0, "utf8").trim();

let values2 = input5.split(/\s+/).map(Number);

console.log(values2);


// 10. Reading an Array
const input6 = fs.readFileSync(0, "utf8").trim().split(/\s+/).map(Number);

let n = input6[0];

let arr = input6.slice(1, n + 1);

console.log(n);
console.log(arr);


// 11. Array Sum
const input7 = fs.readFileSync(0, "utf8").trim().split(/\s+/).map(Number);

let size = input7[0];

let array = input7.slice(1, size + 1);

let sum = 0;

for (let i = 0; i < size; i++) {
    sum += array[i];
}

console.log(sum);


// 12. Reading a String
const input8 = fs.readFileSync(0, "utf8").trim();

console.log(input8);


// 13. Reading a String with Spaces
const input9 = fs.readFileSync(0, "utf8").trim();

console.log(input9);


// 14. Reading Two Strings
const input10 = fs.readFileSync(0, "utf8").trim();

let [firstName, lastName] = input10.split(/\s+/);

console.log(firstName);
console.log(lastName);


// 15. Reading a Matrix
const input11 = fs.readFileSync(0, "utf8").trim().split(/\s+/).map(Number);

let index = 0;

let rows = input11[index++];
let cols = input11[index++];

let matrix = [];

for (let i = 0; i < rows; i++) {

    let row = [];

    for (let j = 0; j < cols; j++) {
        row.push(input11[index++]);
    }

    matrix.push(row);
}

console.log(matrix);


// 16. Competitive Programming Input Template
const input12 = fs.readFileSync(0, "utf8").trim().split(/\s+/).map(Number);

let position = 0;

let length = input12[position++];

let values3 = [];

for (let i = 0; i < length; i++) {
    values3.push(input12[position++]);
}

console.log(values3);