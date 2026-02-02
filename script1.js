/**
 * Console Log Examples Script
 * 
 * A simple demonstration of various console methods and browser APIs
 * 
 * @author Allan Morales
 * @author GitHub Copilot (AI pair programming)
 * @version 1.0.0
 * @date 2026-02-02
 */

// Simple console script with messages
console.log("Hello, World!");
console.log("This is a simple console script");
console.log("Welcome to the console app");

// You can also log variables
let name = "JavaScript";
const version = "ES6+";
console.warn("'name' is deprecated.");
console.log(`Learning ${name} - ${version}`);

// Log numbers and calculations
console.log("2 + 3 =", 2 + 3);
console.log("Hello".length, "characters");

// Log objects and arrays
console.log({ message: "This is an object", active: true });
console.log(["apple", "banana", "orange"]);

// Console error example
console.error("An error occurred!");
console.error("Error code:", 404);

// Console table example
const users = [
  { id: 1, name: "Alice", age: 25 },
  { id: 2, name: "Bob", age: 30 },
  { id: 3, name: "Charlie", age: 28 }
];
console.table(users);

// Prompt example (uncomment to use in browser)
const userInput = prompt("Enter your name:");
console.log("User entered:", userInput);

// Alert example (uncomment to use in browser)
alert("This is an alert message!");

// Final message
console.log("Script execution complete!");

//User input value assignation example
/** @type {string} */
let numberValue1;
/** @type {string} */
let numberValue2;

// Division with error handling for division by zero
const num1 = parseInt(numberValue1);
const num2 = parseInt(numberValue2);

// Switch block for operation selection
const operation = prompt("Select operation: 'add', 'subtract', 'multiply', 'divide':");

switch (operation) {
  case "add":
    console.log(`Result: ${num1} + ${num2} = ${num1 + num2}`);
    break;
  case "subtract":
    console.log(`Result: ${num1} - ${num2} = ${num1 - num2}`);
    break;
  case "multiply":
    console.log(`Result: ${num1} × ${num2} = ${num1 * num2}`);
    break;
  case "divide":
    if (num2 !== 0) {
      console.log(`Result: ${num1} ÷ ${num2} = ${num1 / num2}`);
    } else {
      console.error("Cannot divide by zero!");
    }
    break;
  default:
    console.warn("Invalid operation selected!");
}

// Array and loops examples
const arr = ["apple", "banana", "orange"];

console.log("for block");
for (let i = 0; i < arr.length; i++) {
    console.log(`Item ${i}: ${arr[i]}`);
}
console.log("for loop completed\n");

console.log("for-of loop");
for (const item of arr) {
    console.log(item);
}
console.log("for-of loop completed\n");

console.log("for-in loop");
for (const index in arr) {
    console.log(`Index ${index}: ${arr[index]}`);
}
console.log("for-in loop completed\n");

console.log("while loop");
let i = 0;
while (i < arr.length) {
    console.log(`Item ${i}: ${arr[i]}`);
    i++;
}
console.log("while loop completed\n");

console.log("do-while loop");
let j = 0;
do {
    console.log(`Item ${j}: ${arr[j]}`);
    j++;
}while (j < arr.length);
console.log("do-while loop completed\n");

// Array filter example
console.log("Array filter example");
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Filter for even numbers
const evenNumbers = numbers.filter((num) => num % 2 === 0);
console.log("Even numbers:", evenNumbers);

// Filter for numbers greater than 5
const greaterThanFive = numbers.filter((num) => num > 5);
console.log("Numbers greater than 5:", greaterThanFive);

// Filter for fruit names with length > 5
const fruits = ["apple", "banana", "orange", "kiwi", "mango"];
const longFruitNames = fruits.filter((fruit) => fruit.length > 5);
console.log("Fruits with name length > 5:", longFruitNames);
console.log("Array filter example completed\n");

// functions example
function sum(a, b) {
  return a + b;
}
console.log("Sum of 5 and 3:", sum(5, 3));

const difference = function(a, b) {
    return a - b;
}
console.log("Difference of 5 and 3:", difference(5, 3));

const product = (a, b) => a * b;
console.log("Product of 5 and 3:", product(5, 3));

const divide = (a, b) => {
  if (b === 0) {
    console.error("Cannot divide by zero!");
    return null;
  }
  return a / b;
};
console.log("Division of 5 and 3:", divide(5, 3));

const codeInfo = {
    authors: [
        {
            name: "Allan",
            role: "Front-end Developer"
        },
        {
            name: "GitHub Copilot",
            role: "AI Assistant"
        }
    ],
    version: "1.0",
    description: "A simple JavaScript console application"
}

// forEach example with codeInfo
console.log("forEach example with codeInfo");
codeInfo.authors.forEach((author, index) => {
    console.log(`Author ${index + 1}: ${author.name} - ${author.role}`);
});
console.log("forEach example completed\n");

// map example with codeInfo
console.log("map example with codeInfo");
const authorNames = codeInfo.authors.map((author) => author.name);
console.log("Author names:", authorNames);

const authorRoles = codeInfo.authors.map((author) => ({
    name: author.name,
    role: author.role.toUpperCase()
}));
console.log("Author roles (uppercase):");
console.table(authorRoles);
console.log("map example completed\n");