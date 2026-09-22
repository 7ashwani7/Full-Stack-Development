// 1. Callback Function
function print(x) {
    console.log(x);
}

print(10);

// 2. forEach()
let arr1 = [10, 20, 30, 40];

arr1.forEach((value) => {
    console.log(value);
});

arr1.forEach((value, index) => {
    console.log(index, value);
});

// 3. map()
let arr2 = [1, 2, 3, 4];

let result2 = arr2.map(value => value * 2);

console.log(result2);

// 4. map() with Square
let arr3 = [2, 4, 6, 8];

let squares = arr3.map(x => x * x);

console.log(squares);

// 5. filter()
let arr4 = [1, 2, 3, 4, 5, 6];

let even = arr4.filter(x => x % 2 === 0);

console.log(even);

// 6. filter() with Condition
let arr5 = [5, 12, 8, 20, 15];

let greater = arr5.filter(x => x > 10);

console.log(greater);

// 7. reduce() for Sum
let arr6 = [10, 20, 30, 40];

let sum = arr6.reduce((total, value) => {
    return total + value;
}, 0);

console.log(sum);

// 8. reduce() for Product
let arr7 = [1, 2, 3, 4];

let product = arr7.reduce((result, value) => {
    return result * value;
}, 1);

console.log(product);

// 9. reduce() for Maximum
let arr8 = [10, 50, 20, 80, 30];

let maximum = arr8.reduce((max, value) => {
    return Math.max(max, value);
}, arr8[0]);

console.log(maximum);

// 10. find()
let arr9 = [5, 12, 8, 20, 15];

let found = arr9.find(x => x > 10);

console.log(found);

// 11. findIndex()
let index = arr9.findIndex(x => x > 10);

console.log(index);

// 12. some()
let arr10 = [2, 4, 7, 8];

let hasOdd = arr10.some(x => x % 2 !== 0);

console.log(hasOdd);

// 13. every()
let arr11 = [2, 4, 6, 8];

let allEven = arr11.every(x => x % 2 === 0);

console.log(allEven);

// 14. sort() Strings
let names = ["Rahul", "Aman", "Zoya", "Karan"];

names.sort();

console.log(names);

// 15. sort() Numbers
let arr12 = [10, 2, 30, 4];

arr12.sort((a, b) => a - b);

console.log(arr12);

// 16. sort() Descending
arr12.sort((a, b) => b - a);

console.log(arr12);

// 17. flat()
let arr13 = [1, [2, 3], [4, 5]];

let flatArray = arr13.flat();

console.log(flatArray);

// 18. flat() with Depth
let arr14 = [1, [2, [3, 4]]];

console.log(arr14.flat(2));

// 19. Method Chaining
let arr15 = [1, 2, 3, 4, 5, 6];

let result15 = arr15
    .filter(x => x % 2 === 0)
    .map(x => x * x);

console.log(result15);

// 20. DSA Example
let arr16 = [5, 10, -3, 8];

console.log(arr16.some(x => x < 0));

// 21. DSA Example
let arr17 = [5, 10, 3, 8];

console.log(arr17.every(x => x > 0));