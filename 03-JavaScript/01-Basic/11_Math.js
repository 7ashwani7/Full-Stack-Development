// 1. Math.PI
console.log(Math.PI);


// 2. Math.E
console.log(Math.E);


// 3. Absolute Value
console.log(Math.abs(10));
console.log(Math.abs(-10));
console.log(Math.abs(0));


// 4. Maximum
console.log(Math.max(10, 20, 30, 5));


// 5. Minimum
console.log(Math.min(10, 20, 30, 5));


// 6. Maximum in Array
let arr6 = [10, 20, 50, 5];

console.log(Math.max(...arr6));


// 7. Minimum in Array
console.log(Math.min(...arr6));


// 8. Power Using Math.pow()
console.log(Math.pow(2, 3));


// 9. Power Using **
console.log(2 ** 3);


// 10. Square Root
console.log(Math.sqrt(25));


// 11. Cube Root
console.log(Math.cbrt(27));


// 12. Math.round()
console.log(Math.round(4.4));
console.log(Math.round(4.6));


// 13. Math.floor()
console.log(Math.floor(4.9));
console.log(Math.floor(4.1));


// 14. Math.ceil()
console.log(Math.ceil(4.1));
console.log(Math.ceil(4.9));


// 15. Math.trunc()
console.log(Math.trunc(4.9));
console.log(Math.trunc(-4.9));


// 16. Rounding Comparison
console.log(Math.round(4.7));
console.log(Math.floor(4.7));
console.log(Math.ceil(4.7));
console.log(Math.trunc(4.7));


// 17. Negative Rounding Comparison
console.log(Math.round(-4.7));
console.log(Math.floor(-4.7));
console.log(Math.ceil(-4.7));
console.log(Math.trunc(-4.7));


// 18. Math.sign()
console.log(Math.sign(10));
console.log(Math.sign(-10));
console.log(Math.sign(0));


// 19. Math.random()
console.log(Math.random());


// 20. Random Number 0 to 9
let random20 = Math.floor(Math.random() * 10);

console.log(random20);


// 21. Random Number 1 to 10
let random21 = Math.floor(Math.random() * 10) + 1;

console.log(random21);


// 22. Random Number Between 10 and 20
let min22 = 10;
let max22 = 20;

let random22 =
    Math.floor(Math.random() * (max22 - min22 + 1)) + min22;

console.log(random22);


// 23. Random Integer Function
function randomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(randomInteger(1, 100));


// 24. Natural Logarithm
console.log(Math.log(Math.E));


// 25. Log Base 10
console.log(Math.log10(100));


// 26. Log Base 2
console.log(Math.log2(8));


// 27. Sine
console.log(Math.sin(0));


// 28. Cosine
console.log(Math.cos(0));


// 29. Tangent
console.log(Math.tan(0));


// 30. Degrees to Radians
let degrees30 = 180;

let radians30 = degrees30 * Math.PI / 180;

console.log(radians30);


// 31. Radians to Degrees
let radians31 = Math.PI;

let degrees31 = radians31 * 180 / Math.PI;

console.log(degrees31);


// 32. Find Maximum Using Loop
let arr32 = [10, 50, 20, 80, 30];

let maximum32 = arr32[0];

for (let i = 1; i < arr32.length; i++) {

    if (arr32[i] > maximum32) {
        maximum32 = arr32[i];
    }
}

console.log(maximum32);


// 33. Find Minimum Using Loop
let arr33 = [10, 50, 20, 80, 30];

let minimum33 = arr33[0];

for (let i = 1; i < arr33.length; i++) {

    if (arr33[i] < minimum33) {
        minimum33 = arr33[i];
    }
}

console.log(minimum33);


// 34. Absolute Difference
let a34 = 15;
let b34 = 40;

let difference34 = Math.abs(a34 - b34);

console.log(difference34);


// 35. Square
let number35 = 5;

let square35 = number35 ** 2;

console.log(square35);


// 36. Cube
let number36 = 3;

let cube36 = number36 ** 3;

console.log(cube36);


// 37. Perfect Square
let number37 = 25;

let root37 = Math.sqrt(number37);

if (Number.isInteger(root37)) {
    console.log("Perfect Square");
}
else {
    console.log("Not Perfect Square");
}


// 38. Ceiling Division
let a38 = 10;
let b38 = 3;

let result38 = Math.ceil(a38 / b38);

console.log(result38);


// 39. Integer Ceiling Division
let result39 = Math.floor((a38 + b38 - 1) / b38);

console.log(result39);


// 40. Dice Roll
let dice40 = Math.floor(Math.random() * 6) + 1;

console.log(dice40);


// 41. Distance Between Two Numbers
let x41 = 10;
let y41 = 25;

let distance41 = Math.abs(x41 - y41);

console.log(distance41);


// 42. Distance Between Two Points
let x1 = 0;
let y1 = 0;

let x2 = 3;
let y2 = 4;

let distance42 = Math.sqrt(
    (x2 - x1) ** 2 +
    (y2 - y1) ** 2
);

console.log(distance42);


// 43. Maximum of Three Numbers
let a43 = 10;
let b43 = 50;
let c43 = 30;

console.log(Math.max(a43, b43, c43));


// 44. Minimum of Three Numbers
console.log(Math.min(a43, b43, c43));


// 45. Chain Math Operations
let number45 = -25;

let result45 = Math.sqrt(Math.abs(number45));

console.log(result45);