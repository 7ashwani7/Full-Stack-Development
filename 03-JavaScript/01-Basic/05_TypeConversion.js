// 1. String to Number
let stringNumber = "100";

let convertedNumber = Number(stringNumber);

console.log(convertedNumber);
console.log(typeof convertedNumber);


// 2. Decimal String to Number
let decimalString = "95.5";

let convertedDecimal = Number(decimalString);

console.log(convertedDecimal);
console.log(typeof convertedDecimal);


// 3. Number to String
let numberValue = 100;

let convertedString = String(numberValue);

console.log(convertedString);
console.log(typeof convertedString);


// 4. Boolean to Number
console.log(Number(true));
console.log(Number(false));


// 5. Number to Boolean
console.log(Boolean(1));
console.log(Boolean(0));


// 6. String to Boolean
console.log(Boolean("Hello"));
console.log(Boolean(""));


// 7. Non-Empty String "false"
console.log(Boolean("false"));


// 8. Empty String to Number
console.log(Number(""));


// 9. Whitespace String to Number
console.log(Number("   "));


// 10. Invalid String to Number
console.log(Number("Hello"));


// 11. null to Number
console.log(Number(null));


// 12. undefined to Number
console.log(Number(undefined));


// 13. parseInt
let integerString = "100";

console.log(parseInt(integerString));


// 14. parseInt with Decimal
let decimalValue = "95.75";

console.log(parseInt(decimalValue));


// 15. parseFloat
console.log(parseFloat(decimalValue));


// 16. parseInt with Text
let pixelValue = "100px";

console.log(parseInt(pixelValue));


// 17. Number with Text
console.log(Number("100px"));


// 18. parseFloat with Text
let fontSize = "95.5px";

console.log(parseFloat(fontSize));


// 19. String Plus Number
console.log("10" + 5);


// 20. String Minus Number
console.log("10" - 5);


// 21. String Multiply Number
console.log("10" * 5);


// 22. String Divide Number
console.log("20" / 5);


// 23. String Modulus Number
console.log("17" % 5);


// 24. Boolean in Arithmetic
console.log(true + 5);
console.log(false + 5);


// 25. null in Arithmetic
console.log(null + 5);


// 26. undefined in Arithmetic
console.log(undefined + 5);


// 27. Boolean Conversion
console.log(Boolean(0));
console.log(Boolean(1));
console.log(Boolean(""));
console.log(Boolean("Hello"));


// 28. Falsy Values
console.log(Boolean(false));
console.log(Boolean(0));
console.log(Boolean(-0));
console.log(Boolean(0n));
console.log(Boolean(""));
console.log(Boolean(null));
console.log(Boolean(undefined));
console.log(Boolean(NaN));


// 29. Truthy Values
console.log(Boolean("0"));
console.log(Boolean("false"));
console.log(Boolean([]));
console.log(Boolean({}));


// 30. String Conversion
console.log(String(100));
console.log(String(true));
console.log(String(false));
console.log(String(null));
console.log(String(undefined));


// 31. Unary Plus
let unaryValue = "100";

console.log(+unaryValue);
console.log(typeof +unaryValue);


// 32. Unary Minus
let negativeValue = "100";

console.log(-negativeValue);


// 33. isNaN
console.log(isNaN("100"));
console.log(isNaN("Hello"));


// 34. Number.isNaN
console.log(Number.isNaN(NaN));
console.log(Number.isNaN("Hello"));


// 35. Checking Conversion Result
let input = "250";

let result = Number(input);

console.log(result);
console.log(typeof result);