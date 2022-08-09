// You can use split for spliting string.

const lyrics = 'Allah Tumi doyar shagor. Rahmanur rahim. tomar doyai purno amar shara nishi din.';

const part = lyrics.split(' ');
console.log(part)
const part2 = lyrics.split('.')
console.log(part2)
const singleOne = lyrics.split('');
console.log(singleOne)

// .slice using

const sliceIs = lyrics.slice(0, 10);
console.log(sliceIs)

// .subString using and similar to slice.

console.log(lyrics.slice(0, 10));

// .concut apply for joining the line also you can use join;;

const lines = [
  'Allah Tumi doyar shagor',
  'Rahmanur rahim',
  'Tomar doyai purno amar shara nishi din.'
];

const addLine = lines.join('. ')
console.log(addLine)