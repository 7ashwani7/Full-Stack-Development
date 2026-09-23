// 1. Creating an Object
let student1 = {
    name: "Ashwani",
    age: 20,
    branch: "CSE"
};

console.log(student1);

// 2. Accessing Properties
console.log(student1.name);
console.log(student1.age);

// 3. Bracket Notation
console.log(student1["name"]);
console.log(student1["age"]);

// 4. Dynamic Property Access
let key = "name";

console.log(student1[key]);

// 5. Adding Properties
student1.city = "Ghaziabad";

console.log(student1);

// 6. Updating Properties
student1.age = 21;

console.log(student1.age);

// 7. Deleting Properties
delete student1.branch;

console.log(student1);

// 8. Different Data Types
let student2 = {
    name: "Ashwani",
    age: 20,
    isStudent: true,
    marks: [80, 85, 90]
};

console.log(student2);

// 9. Object with Array
console.log(student2.marks);
console.log(student2.marks[0]);

// 10. Nested Object
let student3 = {
    name: "Ashwani",
    address: {
        city: "Ghaziabad",
        state: "Uttar Pradesh",
        pincode: 201001
    }
};

console.log(student3.address.city);
console.log(student3.address.state);

// 11. Object with Array and Object
let student4 = {
    name: "Ashwani",
    skills: ["C++", "Java", "JavaScript"],
    address: {
        city: "Ghaziabad",
        country: "India"
    }
};

console.log(student4.skills[0]);
console.log(student4.address.city);

// 12. Object Method
let person1 = {
    name: "Ashwani",

    greet: function() {
        console.log("Hello");
    }
};

person1.greet();

// 13. this Keyword
let person2 = {
    name: "Ashwani",

    greet: function() {
        console.log("Hello " + this.name);
    }
};

person2.greet();

// 14. Multiple Methods
let calculator = {
    add: function(a, b) {
        return a + b;
    },

    subtract: function(a, b) {
        return a - b;
    }
};

console.log(calculator.add(10, 5));
console.log(calculator.subtract(10, 5));

// 15. Shorthand Method
let person3 = {
    greet() {
        console.log("Hello");
    }
};

person3.greet();

// 16. Property Shorthand
let name = "Ashwani";
let age = 20;
let branch = "CSE";

let student5 = {
    name,
    age,
    branch
};

console.log(student5);

// 17. Dynamic Property Name
let property = "name";

let student6 = {
    [property]: "Ashwani"
};

console.log(student6);

// 18. Checking Property
let student7 = {
    name: "Ashwani",
    age: 20
};

console.log("name" in student7);
console.log("marks" in student7);

// 19. Undefined Property
console.log(student7.marks);

// 20. Object Reference
let student8 = {
    name: "Ashwani"
};

let student9 = student8;

student9.name = "Rahul";

console.log(student8.name);
console.log(student9.name);

// 21. Copying Object with Spread
let student10 = {
    name: "Ashwani",
    age: 20
};

let student11 = {
    ...student10
};

student11.name = "Rahul";

console.log(student10.name);
console.log(student11.name);

// 22. Object Comparison
let a = {
    x: 10
};

let b = {
    x: 10
};

console.log(a === b);

// 23. Same Object Reference
let c = {
    x: 10
};

let d = c;

console.log(c === d);

// 24. Array of Objects
let students = [
    {
        name: "Ashwani",
        age: 20
    },
    {
        name: "Rahul",
        age: 21
    },
    {
        name: "Aman",
        age: 19
    }
];

console.log(students[0].name);
console.log(students[1].age);

// 25. Traversing Array of Objects
for (let student of students) {
    console.log(student.name);
}

// 26. Object with Boolean
let user = {
    name: "Ashwani",
    isLoggedIn: true
};

if (user.isLoggedIn) {
    console.log("User is logged in");
}

// 27. Object Destructuring
let student12 = {
    name: "Ashwani",
    age: 20
};

let {name: studentName, age: studentAge} = student12;

console.log(studentName);
console.log(studentAge);

// 28. Frequency Counting
let arr = [1, 2, 2, 3, 1, 2];

let frequency = {};

for (let x of arr) {
    if (frequency[x] === undefined) {
        frequency[x] = 1;
    } else {
        frequency[x]++;
    }
}

console.log(frequency);