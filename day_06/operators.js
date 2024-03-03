/**
 * JavaScript also has a Math module which contains more advanced functions:

    Math.abs calculates the absolute value of a number
    Math.exp calculates e to the power of a number
    Math.pow(x,y) calculates the result of x to the power of y
    Math.floor removes the fraction part from a number
    Math.random() will give a random number x where 0<=x<1
 */

// Example usage of Math module
const number = -5;
const absoluteValue = Math.abs(number);
console.log(`Absolute value of ${number} is ${absoluteValue}`);

const powerResult = Math.pow(2, 3);
console.log(`2 raised to the power of 3 is ${powerResult}`);

const randomNumber = Math.random();
console.log(`Random number between 0 and 1: ${randomNumber}`);