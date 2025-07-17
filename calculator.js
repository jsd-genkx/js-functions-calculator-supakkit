"use strict";

// Step 01: Create Functions for Addition, Subtraction, Multiplication, and Division
const add = (num1, num2) => num1 + num2;
const subtract = (num1, num2) => num1 - num2;
const multiply = (num1, num2) => num1 * num2;
const divide = (num1, num2) => num2 === 0 ? "Cannot divide by zero" : num1 / num2;
// Step 02: Create a Validation Function for Inputs
function validateInputs(num1, num2) {
    if ( typeof num1 === 'number' && !isNaN(num1) ) return null;
    if ( typeof num2 === 'number' && !isNaN(num2) ) return null;

    return "Both inputs must be numbers";
}
// Step 03: Create a Calculator Function to Combine the Above Functions
function calculator(num1, num2, operation) {
    if ( validateInputs(num1, num2) !== null )
        return "Invalid operation. Please use 'add', 'subtract', 'multiply', or 'divide'";

    switch(operation) {
        case 'add':
            return add(num1, num2);
        case 'subtract':
            return subtract(num1, num2);
        case 'multiply':
            return multiply(num1, num2);
        case 'divide':
            return divide(num1, num2);
        default:
            return 'Invalid operation. Please use "add", "subtract", "multiply", or "divide".';
    }
}

// Output:
const num1 = 10;
const num2 = 'a';    // 0, 'a'
const operationList = ['add', 'subtract', 'multiply', 'divide'];
const operation = operationList[0];

console.log( '-'.repeat(30) );
console.log( `${num1} + ${num2} = ${add(num1, num2)}` );
console.log( `${num1} - ${num2} = ${subtract(num1, num2)}` );
console.log( `${num1} * ${num2} = ${multiply(num1, num2)}` );
console.log( `${num1} / ${num2} = ${divide(num1, num2)}` );
console.log( '-'.repeat(30) );

console.log( `Validate inputs ${num1} and ${num2}: ${validateInputs(num1, num2)}` );
console.log( '-'.repeat(30) );

console.log( `Calculate ${num1} ${operation} ${num2} equals ${calculator(num1, num2, operation)}` );
console.log( '-'.repeat(30) );