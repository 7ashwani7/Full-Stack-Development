// 1. Convert to Uppercase
let str1 = "javascript";

console.log(str1.toUpperCase());


// 2. Convert to Lowercase
let str2 = "JAVASCRIPT";

console.log(str2.toLowerCase());


// 3. Remove Spaces Using trim()
let str3 = "   Hello World   ";

console.log(str3.trim());


// 4. Remove Starting Spaces
let str4 = "   Hello";

console.log(str4.trimStart());


// 5. Remove Ending Spaces
let str5 = "Hello   ";

console.log(str5.trimEnd());


// 6. Check Using includes()
let str6 = "JavaScript Programming";

console.log(str6.includes("Script"));
console.log(str6.includes("Python"));


// 7. Check Using startsWith()
let str7 = "JavaScript";

console.log(str7.startsWith("Java"));
console.log(str7.startsWith("Script"));


// 8. Check Using endsWith()
let str8 = "JavaScript";

console.log(str8.endsWith("Script"));
console.log(str8.endsWith("Java"));


// 9. Find First Index
let str9 = "banana";

console.log(str9.indexOf("a"));


// 10. Find Last Index
let str10 = "banana";

console.log(str10.lastIndexOf("a"));


// 11. Character Not Found
let str11 = "banana";

console.log(str11.indexOf("x"));


// 12. Get Character Using charAt()
let str12 = "JavaScript";

console.log(str12.charAt(0));
console.log(str12.charAt(4));


// 13. Get Character Code
let str13 = "ABC";

console.log(str13.charCodeAt(0));
console.log(str13.charCodeAt(1));
console.log(str13.charCodeAt(2));


// 14. Extract Using slice()
let str14 = "JavaScript";

console.log(str14.slice(0, 4));


// 15. slice() With One Argument
let str15 = "JavaScript";

console.log(str15.slice(4));


// 16. Negative slice()
let str16 = "JavaScript";

console.log(str16.slice(-6));


// 17. substring()
let str17 = "JavaScript";

console.log(str17.substring(0, 4));


// 18. Difference Between slice() and substring()
let str18 = "JavaScript";

console.log(str18.slice(-6));
console.log(str18.substring(-6));


// 19. Replace First Occurrence
let str19 = "I like Java. Java is powerful.";

console.log(str19.replace("Java", "JavaScript"));


// 20. Replace All Occurrences
let str20 = "Java Java Java";

console.log(str20.replaceAll("Java", "Python"));


// 21. Split by Space
let str21 = "Apple Banana Mango";

let fruits = str21.split(" ");

console.log(fruits);


// 22. Split Every Character
let str22 = "Hello";

console.log(str22.split(""));


// 23. Split by Comma
let str23 = "Apple,Banana,Mango";

console.log(str23.split(","));


// 24. Concatenate Using concat()
let first1 = "Hello";
let second1 = "World";

console.log(first1.concat(" ", second1));


// 25. Repeat String
let str25 = "Hi ";

console.log(str25.repeat(3));


// 26. Add Characters at Start
let number26 = "5";

console.log(number26.padStart(3, "0"));


// 27. Add Characters at End
let number27 = "5";

console.log(number27.padEnd(3, "0"));


// 28. Search Using match()
let str28 = "I have 25 apples";

console.log(str28.match(/\d+/));


// 29. Search Using search()
let str29 = "Hello JavaScript";

console.log(str29.search("Java"));


// 30. Convert Code to Character
console.log(String.fromCharCode(65));
console.log(String.fromCharCode(66));
console.log(String.fromCharCode(67));


// 31. Chain Multiple Methods
let str31 = "   javascript   ";

let result31 = str31.trim().toUpperCase();

console.log(result31);


// 32. Case-Insensitive Comparison
let input32 = "JavaScript";

console.log(input32.toLowerCase() === "javascript");


// 33. Check Whether Character Exists
let str33 = "javascript";

if (str33.includes("a")) {
    console.log("Character exists");
}


// 34. Check Prefix
let file34 = "image.jpg";

if (file34.startsWith("image")) {
    console.log("Image file");
}


// 35. Check File Extension
let file35 = "photo.jpg";

if (file35.endsWith(".jpg")) {
    console.log("JPEG image");
}


// 36. Remove Extra Spaces
let input36 = "   Ashwani   ";

console.log(input36.trim());


// 37. Convert Sentence to Words
let sentence37 = "JavaScript is powerful";

let words37 = sentence37.split(" ");

console.log(words37);


// 38. Convert Words to Sentence
let words38 = ["JavaScript", "is", "powerful"];

let sentence38 = words38.join(" ");

console.log(sentence38);


// 39. Reverse a String
let str39 = "hello";

let reversed39 = str39.split("").reverse().join("");

console.log(reversed39);


// 40. Count Specific Character
let str40 = "banana";

let count40 = 0;

for (let i = 0; i < str40.length; i++) {

    if (str40[i] === "a") {
        count40++;
    }
}

console.log(count40);


// 41. Find Character Position
let str41 = "programming";

console.log(str41.indexOf("g"));


// 42. Find Last Character Position
let str42 = "programming";

console.log(str42.lastIndexOf("g"));


// 43. Check Multiple Conditions
let username43 = "Ashwani";

if (username43.length >= 5 && username43.includes("A")) {
    console.log("Valid username");
}


// 44. Convert to Lowercase and Check
let language44 = "JavaScript";

if (language44.toLowerCase() === "javascript") {
    console.log("Correct language");
}


// 45. String Traversal
let str45 = "Hello";

for (let i = 0; i < str45.length; i++) {
    console.log(str45[i]);
}