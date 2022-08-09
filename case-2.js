const userName = 'blackPink'
const userInput = 'blackPinK'
console.log(userName.toLowerCase())
console.log(userName.toUpperCase())
console.log(userName.toLocaleLowerCase())

if(userName.toLowerCase() === userInput.toLowerCase()){
  console.log('Valid Information')
}
else{
  console.log('Unvalid info')
}