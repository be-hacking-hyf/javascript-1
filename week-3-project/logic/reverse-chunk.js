/* reverse a string

  reverse the order of words in a string.
  a word is anything with spaces on either side of it

  the spaces, tabs and newlines stay put

*/


const reverseChunkTests = [
  { name: 'first', args: [' plug (play!)'], expected: " gulp )!yalp(" },
  { name: 'second', args: [' --   - '], expected: " --   - "},
  { name: 'third', args: ['12 34 '], expected: "21 43 " },
  { name: 'fourth', args: ['const x = null; '], expected: "tsnoc x = ;llun " },
  { name: 'fifth', args: ['   e e '], expected: "   e e " },
];
function reverseChunk(str) {
  // write me!
  var wordsArr = str.split(' ');
  var reversedWordsArr = [];
  wordsArr.forEach(word => {
    var reversedWord = '';
    for(var i = word.length - 1; i >= 0; i--) {
      reversedWord += word[i];
    }
    reversedWordsArr.push(reversedWord);
  });
  return reversedWordsArr.join(' ');
}
evaluate(reverseChunk, reverseChunkTests);
