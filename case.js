let firstName = 'ZabeR'
let lastName = 'Zaber'

if(firstName.toUpperCase() === lastName.toUpperCase()){
  console.log('Valid Name')
}
else if(firstName.toLowerCase() === lastName.toLowerCase()){
  console.log('Valid Name')
}
else{
  console.log('Invalid Name')
}

const myName = 'Hello Everyone And My honarable teacher My name is Abul Kashem Zaber';

// console.log(myName.indexOf(2))
// console.log(myName.slice(0, 5))
console.log(myName.split())
const nameSplit = myName.split();
let nameIs = [];
for(let i=0; i<nameSplit.length; i++){
  const element = nameSplit[i];
  nameIs.push(element);
  console.log(nameIs);
}
