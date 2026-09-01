// 1. String
let name = "Ashwani";
let city = "Ghaziabad";

console.log(name);
console.log(city);


// 2. Number
let age = 20;
let marks = 95.5;
let temperature = -10;

console.log(age);
console.log(marks);
console.log(temperature);


// 3. Boolean
let isStudent = true;
let isLoggedIn = false;

console.log(isStudent);
console.log(isLoggedIn);


// 4. Undefined
let undefinedValue;

console.log(undefinedValue);


// 5. Null
let selectedUser = null;

console.log(selectedUser);


// 6. BigInt
let bigNumber = 123456789012345678901234567890n;

console.log(bigNumber);
console.log(typeof bigNumber);


// 7. Symbol
let id1 = Symbol("id");
let id2 = Symbol("id");

console.log(id1 === id2);


// 8. Object
let student = {
    name: "Ashwani",
    age: 20,
    marks: 90
};

console.log(student);
console.log(student.name);
console.log(student.age);
console.log(student.marks);


// 9. Array
let numbers = [10, 20, 30, 40];

console.log(numbers);
console.log(numbers[0]);
console.log(numbers[1]);


// 10. typeof String
console.log(typeof name);


// 11. typeof Number
console.log(typeof age);


// 12. typeof Boolean
console.log(typeof isStudent);


// 13. typeof Undefined
console.log(typeof undefinedValue);


// 14. typeof Null
console.log(typeof selectedUser);


// 15. typeof Object
console.log(typeof student);


// 16. typeof Array
console.log(typeof numbers);


// 17. Checking an Array
console.log(Array.isArray(numbers));


// 18. Primitive Value Copy
let firstValue = 10;
let secondValue = firstValue;

secondValue = 20;

console.log(firstValue);
console.log(secondValue);


// 19. Object Reference
let student1 = {
    name: "Ashwani"
};

let student2 = student1;

student2.name = "Rahul";

console.log(student1.name);
console.log(student2.name);


// 20. Dynamic Typing
let value = 10;

console.log(typeof value);

value = "Hello";

console.log(typeof value);

value = true;

console.log(typeof value);


// 21. NaN
let result = "Hello" * 5;

console.log(result);
console.log(typeof result);


// 22. Infinity
console.log(1 / 0);
console.log(-1 / 0);