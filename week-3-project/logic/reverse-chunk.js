/* reverse a string

  reverse the order of words in a string.
  a word is anything with spaces on either side of it

  the spaces, tabs and newlines stay put

*/


const reverseChunkTests = [
  { name: 'first', args: [' plug (play!)'], expected: ' (play!) plug' },
  { name: 'second', args: [' --   - '], expected: ' -   -- ' },
  { name: 'third', args: ['12 34 '], expected: '34 12 ' },
  { name: 'fourth', args: ['const x = null; '], expected: 'null = x const ' },
  { name: 'fifth', args: ['   e e '], expected: '   e e ' },
];
function reverseChunk(str) {
  // write me!
}
evaluate(reverseChunk, reverseChunkTests);
