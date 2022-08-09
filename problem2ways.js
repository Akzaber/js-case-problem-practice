// write a function that will take 3 numbers will return the max number.

function maxNumber(number1, number2, number3){
  let getNumber = 0; 
  if(number1 > number2 && number1 > number3){
    getNumber = getNumber + number1
  }
  else if(number2 > number1 && number2 > number3){
    getNumber = getNumber + number2;
  }
  else{
    getNumber = getNumber + number3;
  }
  return getNumber;
}

const inputNumber = maxNumber(101, 100, 101.1);
console.log(inputNumber)

// Second Way...........

function maxiNumber(num1, num2, num3){
  const numberMax = Math.max(num1, num2, num3);
  return numberMax;
}

const inNumber = maxiNumber(101, 102, 333);
console.log(inNumber);

// for finding minimum number

function miniNumber(num1, num2, num3){
  let addNumber = 0;
  if(num1 < num2 && num1 < num3){
    addNumber = addNumber + num1;
  }
  else if(num2 < num3 && num2 < num1){
    addNumber = addNumber + num2;

  }
  else{
    addNumber = addNumber + num3;
  }
  return addNumber;
}

const userTake = miniNumber(12, 372, 59);
console.log(userTake);

// another way to get the minimum number.

function miniNumber(num1, num2, num3){
  const checkMin = Math.min(num1, num2, num3);
  return checkMin;
}

const takeUser = miniNumber(12, 3, 1);
console.log(takeUser);
