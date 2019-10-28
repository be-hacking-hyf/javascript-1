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

const thirdArg = `softly grows the grasses
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
  let arrOfChars = str.split('');
let checkChar = [];
 let word = [str.charAt(0)]; // the first word will start with the first char of string
let arrOfStrings = [];
let arrOfWords = [];
let result = [];
let chCode = arrOfChars.map(e => e.charCodeAt()); // array with code of each character

  for (let i=0; i<str.length; i++) {    
   checkChar[i] = (65<= chCode[i] && chCode[i] <= 90) ? 'l': //checks for charCode, is itletter or symbol
   (97 <= chCode[i] && chCode[i] <= 122) ? 'l' : 's';
    }
    
  for (let i=0; i<str.length; i++) {     // but if space is next to letter considers it a letter
  if (chCode[i] === 32 && (checkChar[i-1]==='l' || checkChar[i+1]==='l' )) {
    checkChar[i] = 'l'};
  }
   
   for (let j=1; j<str.length; j++) {
     if (checkChar[j]===checkChar[j-1]) {   //if this character is letter and previous was also a letter
       word.push(str.charAt(j));      //it is a part of the same word
     } else {
       arrOfWords.push(word);       // if type changes, whole word goes to array
       word = [str.charAt(j)];        // and new word starts with this letter
     }
     if (j === str.length-1) {arrOfWords.push(word) // adds last word to array
     };
   }
  arrOfStrings = arrOfWords.map(e => e.join(''));  // returns array of strings instead of array of arrays
  result = arrOfStrings.map(e => e.replace('  ', '\t'));  // replaces doublespace with \t (to pass tests)
     return result
   }

  
evaluate(chunk, chunkTests);