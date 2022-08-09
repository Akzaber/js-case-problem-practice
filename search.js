// .includes(), .indexof('string'), .startswith(''), endswith('').

const song = 'Ami bondhu kala pakhi tumi jeno ki boshonto kale tomai bolte parini.';

console.log(song.includes('pakhi'));

// here .includes('string'), if it is true or false

const isPakhi = 'pakhi';
const isPakhiLowerCase = isPakhi.toLowerCase();
const songLowerCase = song.toLowerCase();
console.log(songLowerCase)

console.log(songLowerCase.includes(isPakhiLowerCase));


// Here .indexOf is check specifiq strings is in the string or not. 
// and when it is dosent find then it is call the output is false and find is true.

console.log(song.indexOf('Ami'))
const isKala = 'alala';

if(song.indexOf(isKala) !== -1){
  console.log('Exist in this String')
}
else{
  console.log('Dosenot find it')
}


// Check startswith or endsWith in this string. its will be true or false. 

console.log(song.startsWith('Ami'))
console.log(song.endsWith('kala'))