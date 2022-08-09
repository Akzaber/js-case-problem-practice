// how to get the square 

console.log(Math.pow(2, 2))


// abs(Absolute value) using Math.abs its dont count the negative value


const boyAge = 25;
const girlAge = 35;

const gap = Math.abs(boyAge - girlAge);
console.log(gap)

if(gap <= 5){
  console.log('You guys will be friends togather');
}
else{
  console.log('Keep distance each other')
}

//--------Math.ceil(ceiling) it means a float number convert to the next integer. 
const number = 5.005;
const ceilingNum = Math.ceil(number);
console.log(ceilingNum);

// ------Math.floor means it takes a float number to converts previous integer.

const num = 5.99990;
const flooring = Math.floor(num);
console.log(flooring);

// Math.round it means a float number convert a integer number but it will be .5 up or down if a float number is gretter than .5 or =.5 then it convert into the next integer, and similarly convert into the previous int number.

const number1 = 5.50;
const number2 = 5.4;
const rounded2 = Math.round(number2);
const rounded = Math.round(number1);
console.log(rounded);
console.log(rounded2)
console.log(Math.round(Math.random(number1)*100))