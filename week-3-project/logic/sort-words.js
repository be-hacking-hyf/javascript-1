/* sort characters
  sort the characters in a word, words are substrings separated by spaces
*/

const sortTests = [
  { name: 'first', args: ['4321 cde'], expected: '1234 cde' },
  { name: 'second', args: ['abcd 153'], expected: 'abcd 135' },
  { name: 'third', args: ['howdy doody time'], expected: 'dhowy ddooy eimt' },
];
function sort(str) {
  const rawArr = str.split(` `)  // array of words
  const sortedArr = rawArr.map(word => { // returns for every word
     let letters = word.split(``);       // array of letters
     letters.sort().sort( function(a, b) {return a-b}); //sorts array
     word = letters.join(``); 
     return word;                   // makes word out of array of letters
  } )

  const sortedStr = sortedArr.join(` `);     //makes string out of array of words
  return sortedStr;

  // write me!
}
evaluate(sort, sortTests);