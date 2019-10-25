/* sort characters

  sort the words in a string, words are substrings separated by spaces

*/

const sortTests = [
  { name: 'first', args: ['4321 cde'], expected: '1234 cde' },
  { name: 'second', args: ['abcd 153'], expected: 'abcd 135' },
  { name: 'third', args: ['howdy doody time'], expected: 'dhowy ddooy eimt' },
];
function sort(str) {
  // write me!

  let word = str;
  let wordSplit = word.split('');
  let wordSort = wordSplit.sort(function (a,b) {return a-b});
  let sortedWord = wordSort.join('');
  return sortedWord;
}
evaluate(sort, sortTests);
