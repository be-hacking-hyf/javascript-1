/* reverse a string

  reverse the characters in a string.
  numbers, letters, punctuation, all the same

*/


const reverseCases = [
  { name: 'first', args: ['  plug (play!)'], expected: '(!yalp) gulp  ' },
  { name: 'second', args: [':/|\:'], expected: '\:|/:' },
  { name: 'third', args: ['1234'], expected: '4321' },
  { name: 'fourth', args: ['const x = null;'], expected: ';llun = x = tsnoc' },
  { name: 'fifth', args: [''], expected: '' },
];
function reverse(str) {
  // write me!
}
evaluate(reverse, reverseCases);
