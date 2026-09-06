// 1. Double Quote String
let name = "Ashwani";

console.log(name);


// 2. Single Quote String
let language = 'JavaScript';

console.log(language);


// 3. Backtick String
let message = `Hello World`;

console.log(message);


// 4. Check String Type
console.log(typeof name);


// 5. String Containing Number
let numberString = "100";

console.log(numberString);
console.log(typeof numberString);


// 6. Empty String
let emptyString = "";

console.log(emptyString);
console.log(typeof emptyString);


// 7. String Length
let studentName = "Ashwani";

console.log(studentName.length);


// 8. String Indexing
console.log(studentName[0]);
console.log(studentName[1]);
console.log(studentName[2]);


// 9. Last Character
console.log(studentName[studentName.length - 1]);


// 10. Character Using at()
console.log(studentName.at(0));
console.log(studentName.at(6));


// 11. Negative Index Using at()
console.log(studentName.at(-1));
console.log(studentName.at(-2));


// 12. Invalid Index
console.log(studentName[100]);
console.log(studentName.at(100));


// 13. Another String Index Example
let word = "HELLO";

console.log(word[0]);
console.log(word[4]);


// 14. String Concatenation
let firstName = "Ashwani";
let lastName = "Chauhan";

let fullName = firstName + " " + lastName;

console.log(fullName);


// 15. String and Number Concatenation
let age = 20;

console.log("Age: " + age);


// 16. String Plus String
let first = "Hello";
let second = "World";

console.log(first + " " + second);


// 17. String Repetition
let hi = "Hi ";

console.log(hi.repeat(3));


// 18. New Line
let newLine = "Hello\nWorld";

console.log(newLine);


// 19. Tab
let tab = "Hello\tWorld";

console.log(tab);


// 20. Single Quote Inside String
let quote1 = "He said 'Hello'";

console.log(quote1);


// 21. Double Quote Inside String
let quote2 = 'He said "Hello"';

console.log(quote2);


// 22. Escaping Double Quotes
let quote3 = "He said \"Hello\"";

console.log(quote3);


// 23. Backslash
let path = "C:\\Users\\Ashwani";

console.log(path);


// 24. String Comparison
console.log("apple" === "apple");
console.log("apple" === "Apple");


// 25. Compare String Length
let smallWord = "Hello";
let largeWord = "JavaScript";

console.log(smallWord.length > largeWord.length);


// 26. Strings Are Immutable
let immutableName = "Ashwani";

immutableName[0] = "X";

console.log(immutableName);


// 27. Creating a New String
let changedName = "Ashwani";

changedName = "X" + changedName.slice(1);

console.log(changedName);


// 28. Number to String
let number = 100;

let convertedString = String(number);

console.log(convertedString);
console.log(typeof convertedString);


// 29. String to Number
let numericString = "100";

let convertedNumber = Number(numericString);

console.log(convertedNumber);
console.log(typeof convertedNumber);


// 30. Array to String
let fruits = ["Apple", "Banana", "Mango"];

console.log(String(fruits));


// 31. Multiline String
let multiline = `Hello
Welcome
to
JavaScript`;

console.log(multiline);


// 32. String Traversal
let traverseName = "Ashwani";

for (let i = 0; i < traverseName.length; i++) {
    console.log(traverseName[i]);
}


// 33. Reverse Traversal
let reverseName = "Ashwani";

for (let i = reverseName.length - 1; i >= 0; i--) {
    console.log(reverseName[i]);
}


// 34. Count Characters
let countWord = "banana";

let count = 0;

for (let i = 0; i < countWord.length; i++) {
    count++;
}

console.log(count);


// 35. Count Specific Character
let characterWord = "banana";

let characterCount = 0;

for (let i = 0; i < characterWord.length; i++) {

    if (characterWord[i] === "a") {
        characterCount++;
    }
}

console.log(characterCount);


// 36. Character Access
let javascriptWord = "JavaScript";

console.log(javascriptWord[4]);


// 37. for...of with String
let loopWord = "Hello";

for (let character of loopWord) {
    console.log(character);
}


// 38. Template Literal with String
let userName = "Ashwani";
let programmingLanguage = "JavaScript";

console.log(`My name is ${userName} and I am learning ${programmingLanguage}.`);