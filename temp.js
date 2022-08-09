// Exchange value first way.

let number1 = 2;
let number2 = 3;

console.log(number1, number2);
let temp = number1;

number1 = number2;
number2 = temp;
console.log(number1, number2);

// second way

[number1, number2] = [number2, number1]

console.log(number1, number2)