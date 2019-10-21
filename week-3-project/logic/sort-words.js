/* sort characters
  sort the characters in a word, words are substrings separated by spaces
*/

const sortTests = [
  { name: 'first', args: ['4321 cde'], expected: '1234 cde' },
  { name: 'second', args: ['abcd 153'], expected: 'abcd 135' },
  { name: 'third', args: ['howdy doody time'], expected: 'dhowy ddooy eimt' },
];
function sort(str) {
  // write me!
}
evaluate(sort, sortTests);