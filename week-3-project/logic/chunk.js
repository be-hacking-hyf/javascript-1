/* chunk a string

  break a string into an array of strings according to punctuation and tabs/newlines

  any continuous series of numbers, letters and spaces will stay together
  and any continuous series of punctuation or tabs/newlines will stay together

*/


const secondArg = `list of things:
  - cows
  - bush
  - neither`;
const secondExpected = [
  'list of things',
  ':\n\t-',
  ' cows',
  '\n\t-',
  ' bush',
  '\n\t-',
  ' neither'];

const thirdArg = `softly grows the grasses.
   under -- trees?
it's really hard to say`;
const thirdExpected = [
  'softly grows the grasses',
  '\n\t',
  ' under ',
  '--',
  ' trees',
  '?\n',
  'it',
  "'",
  's really hard to say'
];


const chunkTests = [
  { name: 'first', args: ['const x = null;'], expected: ['const x ', '=', ' null', ';'] },
  { name: 'second', args: [secondArg], expected: secondExpected },
  { name: 'second', args: [thirdArg], expected: thirdExpected },
];
function chunk(str) {
  // write me!

  
}
evaluate(chunk, chunkTests);
