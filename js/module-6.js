"use strict";
let input;
const numbers = [];
let total = 0;

const add = function (number) {
  for (let number of numbers) {
    total += number;
  }
  return total;
};

do {
  input = prompt("Please,enter a number");

  if (input !== null) {
    let numInput = Number(input);
    numbers.push(numInput);
  }
} while (input !== null);
{
  if (numbers.length) {
    console.log("The total amount of numbers is" + " " + add(numbers));
  }
}
