// 1. Creating an Array
let arr1 = [10, 20, 30, 40, 50];

console.log(arr1);


// 2. Array Index
let arr2 = [10, 20, 30, 40, 50];

console.log(arr2[0]);
console.log(arr2[2]);
console.log(arr2[4]);


// 3. Invalid Index
let arr3 = [10, 20, 30];

console.log(arr3[10]);


// 4. Updating an Element
let arr4 = [10, 20, 30];

arr4[1] = 100;

console.log(arr4);


// 5. Array Length
let arr5 = [10, 20, 30, 40, 50];

console.log(arr5.length);
console.log(arr5[arr5.length - 1]);


// 6. Empty Array
let arr6 = [];

console.log(arr6);
console.log(arr6.length);


// 7. Different Data Types
let arr7 = [10, "Hello", true, 5.5];

console.log(arr7);


// 8. Array of Strings
let arr8 = ["C++", "Java", "Python", "JavaScript"];

console.log(arr8);


// 9. Array of Numbers
let arr9 = [85, 90, 76, 95, 88];

console.log(arr9);


// 10. Traversing Using for Loop
let arr10 = [10, 20, 30, 40, 50];

for (let i = 0; i < arr10.length; i++) {
    console.log(arr10[i]);
}


// 11. Traversing Using for...of
let arr11 = [10, 20, 30, 40, 50];

for (let value of arr11) {
    console.log(value);
}


// 12. Traversing Backwards
let arr12 = [10, 20, 30, 40, 50];

for (let i = arr12.length - 1; i >= 0; i--) {
    console.log(arr12[i]);
}


// 13. Sum of Array
let arr13 = [10, 20, 30, 40];

let sum13 = 0;

for (let i = 0; i < arr13.length; i++) {
    sum13 += arr13[i];
}

console.log(sum13);


// 14. Find Maximum
let arr14 = [10, 50, 20, 80, 30];

let maximum14 = arr14[0];

for (let i = 1; i < arr14.length; i++) {
    if (arr14[i] > maximum14) {
        maximum14 = arr14[i];
    }
}

console.log(maximum14);


// 15. Find Minimum
let arr15 = [10, 50, 20, 80, 30];

let minimum15 = arr15[0];

for (let i = 1; i < arr15.length; i++) {
    if (arr15[i] < minimum15) {
        minimum15 = arr15[i];
    }
}

console.log(minimum15);


// 16. Count Even Numbers
let arr16 = [10, 15, 20, 25, 30, 35];

let count16 = 0;

for (let i = 0; i < arr16.length; i++) {
    if (arr16[i] % 2 === 0) {
        count16++;
    }
}

console.log(count16);


// 17. Count Odd Numbers
let arr17 = [10, 15, 20, 25, 30, 35];

let count17 = 0;

for (let i = 0; i < arr17.length; i++) {
    if (arr17[i] % 2 !== 0) {
        count17++;
    }
}

console.log(count17);


// 18. Modify Every Element
let arr18 = [1, 2, 3, 4, 5];

for (let i = 0; i < arr18.length; i++) {
    arr18[i] = arr18[i] * 2;
}

console.log(arr18);


// 19. push()
let arr19 = [10, 20, 30];

arr19.push(40);

console.log(arr19);


// 20. push() Multiple Elements
let arr20 = [10, 20];

arr20.push(30, 40, 50);

console.log(arr20);


// 21. pop()
let arr21 = [10, 20, 30];

let removed21 = arr21.pop();

console.log(arr21);
console.log(removed21);


// 22. unshift()
let arr22 = [20, 30, 40];

arr22.unshift(10);

console.log(arr22);


// 23. shift()
let arr23 = [10, 20, 30];

let removed23 = arr23.shift();

console.log(arr23);
console.log(removed23);


// 24. includes()
let arr24 = [10, 20, 30, 40];

console.log(arr24.includes(30));
console.log(arr24.includes(50));


// 25. indexOf()
let arr25 = [10, 20, 30, 20];

console.log(arr25.indexOf(20));
console.log(arr25.indexOf(50));


// 26. lastIndexOf()
let arr26 = [10, 20, 30, 20, 40];

console.log(arr26.lastIndexOf(20));


// 27. at()
let arr27 = [10, 20, 30, 40];

console.log(arr27.at(2));
console.log(arr27.at(-1));
console.log(arr27.at(-2));


// 28. slice()
let arr28 = [10, 20, 30, 40, 50];

let result28 = arr28.slice(1, 4);

console.log(result28);
console.log(arr28);


// 29. Copy Using slice()
let arr29 = [10, 20, 30];

let copy29 = arr29.slice();

console.log(copy29);


// 30. splice() Remove
let arr30 = [10, 20, 30, 40];

arr30.splice(1, 1);

console.log(arr30);


// 31. splice() Add
let arr31 = [10, 20, 40];

arr31.splice(2, 0, 30);

console.log(arr31);


// 32. splice() Replace
let arr32 = [10, 20, 30];

arr32.splice(1, 1, 100);

console.log(arr32);


// 33. reverse()
let arr33 = [10, 20, 30, 40];

arr33.reverse();

console.log(arr33);


// 34. join()
let arr34 = ["JavaScript", "is", "easy"];

let result34 = arr34.join(" ");

console.log(result34);


// 35. join() With Comma
let arr35 = ["Apple", "Banana", "Mango"];

console.log(arr35.join(","));


// 36. toString()
let arr36 = [10, 20, 30];

console.log(arr36.toString());


// 37. Array.isArray()
let arr37 = [10, 20, 30];

console.log(Array.isArray(arr37));
console.log(Array.isArray(10));


// 38. Nested Array
let matrix38 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

console.log(matrix38);
console.log(matrix38[0][1]);


// 39. Traverse 2D Array
let matrix39 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

for (let i = 0; i < matrix39.length; i++) {

    for (let j = 0; j < matrix39[i].length; j++) {
        console.log(matrix39[i][j]);
    }
}


// 40. Sum of 2D Array
let matrix40 = [
    [1, 2],
    [3, 4]
];

let sum40 = 0;

for (let i = 0; i < matrix40.length; i++) {

    for (let j = 0; j < matrix40[i].length; j++) {
        sum40 += matrix40[i][j];
    }
}

console.log(sum40);


// 41. Compare Arrays
let a41 = [1, 2, 3];
let b41 = [1, 2, 3];

console.log(a41 === b41);


// 42. Reference Assignment
let a42 = [10, 20, 30];

let b42 = a42;

b42[0] = 100;

console.log(a42);
console.log(b42);


// 43. Copy Using slice()
let a43 = [10, 20, 30];

let b43 = a43.slice();

b43[0] = 100;

console.log(a43);
console.log(b43);


// 44. Find Sum and Average
let arr44 = [10, 20, 30, 40, 50];

let sum44 = 0;

for (let i = 0; i < arr44.length; i++) {
    sum44 += arr44[i];
}

let average44 = sum44 / arr44.length;

console.log(sum44);
console.log(average44);


// 45. Find Positive Numbers
let arr45 = [-10, 20, -5, 30, -2, 40];

let count45 = 0;

for (let i = 0; i < arr45.length; i++) {

    if (arr45[i] > 0) {
        count45++;
    }
}

console.log(count45);