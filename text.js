

// string doing it reverse way

function reverseWay(text){
  let reverseString = '';
  for(let i=text.length-1; i >= 0; i--){
    const element = text[i];
    reverseString = reverseString + element;
    console.log(element, reverseString)
  }
  return reverseString;
}

const myString = 'I am a bad boy';
const reversed = reverseWay(myString)
console.log(reversed)


