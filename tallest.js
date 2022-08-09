// find the tallestst person in an array.

function tallInArray(numbers) {
  let tallPerson = [];
  for (let i = 0; i < numbers.length; i++) {
    element = numbers[i];
    if (element > tallPerson) {
      tallPerson = element;
    }
  }
  return tallPerson;
}
const inNumbers = [120, 179, 333, 150, 144, 156, 201];
const findTallest = tallInArray(inNumbers);
console.log(findTallest);


// similarly find the smallest person from an array

function findSmallest(numbers) {
  let smallestPerson = numbers[0];
  for (let i = 0; i < numbers.length; i++) {
    element = numbers[i];
    if (smallestPerson > element) {
      smallestPerson = element;
    }
  }
  return smallestPerson;
}

const setNumbers = [120, 179, 333, 150, 144, 156, 201, 5];
const findSmallestPerson = findSmallest(setNumbers);
console.log('The smallest person is: ', findSmallestPerson)