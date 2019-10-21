/* reverse a string

  reverse the order of words in a string.
  a word is anything with spaces on either side of it

  the spaces stay put

*/


const backwardsCases = [
{ name: 'first', args: [' plug (play!)'], expected: ")!yalp( gulp " },
{ name: 'second', args: [' --   - '], expected: " -   -- " },
{ name: 'third', args: ['12 34 '], expected: " 43 21" },
{ name: 'fourth', args: ['const x = null; '], expected: " ;llun = x tsnoc" },
{ name: 'fifth', args: [" e e "], expected: " e e " },
];
function backwards(str) {
// write me!
var words = [];
        words = str.split("\s+");
        var result = "";
        for (var i = 0; i < words.length; i++) {
            return result += words[i].split('').reverse().join('');
        }
    }
evaluate(backwards, backwardsCases);
