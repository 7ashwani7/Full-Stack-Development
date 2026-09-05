// 1. Basic Template Literal
let message = `Hello World`;

console.log(message);


// 2. Variable Inside Template Literal
let name = "Ashwani";

console.log(`Hello ${name}`);


// 3. Multiple Variables
let firstName = "Ashwani";
let lastName = "Chauhan";

console.log(`My name is ${firstName} ${lastName}`);


// 4. Expression Inside Template Literal
let a = 10;
let b = 20;

console.log(`Sum = ${a + b}`);


// 5. Multiplication Expression
let price = 100;
let quantity = 5;

console.log(`Total = ${price * quantity}`);


// 6. Method Inside Template Literal
let language = "javascript";

console.log(`Language = ${language.toUpperCase()}`);


// 7. Ternary Expression
let age = 20;

console.log(`Status = ${age >= 18 ? "Adult" : "Minor"}`);


// 8. Multiline String
let multilineMessage = `Hello Ashwani
Welcome to JavaScript
Keep Learning`;

console.log(multilineMessage);


// 9. Address
let studentName = "Ashwani";
let city = "Ghaziabad";
let country = "India";

let address = `Name: ${studentName}
City: ${city}
Country: ${country}`;

console.log(address);


// 10. Traditional Concatenation
let userName = "Ashwani";
let userAge = 20;

console.log("My name is " + userName + " and I am " + userAge + " years old.");


// 11. Template Literal Instead of Concatenation
console.log(`My name is ${userName} and I am ${userAge} years old.`);


// 12. Area Calculation
let length = 10;
let width = 5;

console.log(`Area = ${length * width}`);


// 13. Multiple Expressions
let numberA = 10;
let numberB = 5;

console.log(`Addition = ${numberA + numberB}, Multiplication = ${numberA * numberB}`);


// 14. Object Property
let student = {
    name: "Ashwani",
    age: 20
};

console.log(`Name: ${student.name}`);
console.log(`Age: ${student.age}`);


// 15. Array Value
let marks = [90, 85, 95];

console.log(`First Mark = ${marks[0]}`);
console.log(`Second Mark = ${marks[1]}`);


// 16. Average Calculation
let mark1 = 10;
let mark2 = 20;
let mark3 = 30;

console.log(`Average = ${(mark1 + mark2 + mark3) / 3}`);


// 17. Escaping Backtick
let backtickMessage = `This is a \`backtick\` character`;

console.log(backtickMessage);


// 18. New Line Escape Sequence
let newLineMessage = `Hello\nWorld`;

console.log(newLineMessage);


// 19. Tab Escape Sequence
let tabMessage = `Name:\tAshwani`;

console.log(tabMessage);


// 20. String Interpolation
let interpolationName = "Ashwani";
let interpolationAge = 20;

console.log(`My name is ${interpolationName} and my age is ${interpolationAge}.`);


// 21. String Length
let text = "Hello World";

console.log(`Length = ${text.length}`);


// 22. Boolean Expression
let eligibleAge = 20;

console.log(`Eligible = ${eligibleAge >= 18}`);


// 23. Ternary Result
let studentMarks = 75;

console.log(`Result = ${studentMarks >= 40 ? "Pass" : "Fail"}`);


// 24. Student Information
let nameOfStudent = "Ashwani";
let ageOfStudent = 20;
let marksOfStudent = 85;

console.log(`
Student Information
Name: ${nameOfStudent}
Age: ${ageOfStudent}
Marks: ${marksOfStudent}
Result: ${marksOfStudent >= 40 ? "Pass" : "Fail"}
`);


// 25. Bill Calculation
let product = "Laptop";
let productPrice = 50000;
let productQuantity = 2;

let total = productPrice * productQuantity;

console.log(`
Product: ${product}
Price: ₹${productPrice}
Quantity: ${productQuantity}
Total: ₹${total}
`);


// 26. Function with Template Literal
function greet(name) {
    return `Hello ${name}`;
}

console.log(greet("Ashwani"));