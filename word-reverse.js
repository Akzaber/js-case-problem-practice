// word reversed and join again in an array

function wordReverese(string){
  const strArr = [];
  const strings = string.split(' ')
  for(let i = strings.length-1; i>=0; i--){
    const element = strings[i];
    strArr.push(element);
  }
  const newArr = strArr.join(' ')
  return newArr;
}

const myString = 'I am a worst man in the world';
const reversed = wordReverese(myString)
console.log(reversed)

Add korte hobe git hub e