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
  let word = '';
  let symbols = '';
  let arr = [];
  for (i=0; i<str.length; i++) {
    let chCode = str[i].charCodeAt()
   let checkChar = (chCode >65 && chCode<90)|| (chCode >97 && chCode<122)||chCode===32 ? 'letter': 'symbol';
    if (checkChar ==='letter') {word = word + str[i];
    } else { arr.push(word);
       word = '';
        }
    if (checkChar ==='symbol') {symbols = symbols + str[i];
     } { arr.push(symbols);
      symbols = ''; 
    }
  }

  // write me!
}
evaluate(chunk, chunkTests);