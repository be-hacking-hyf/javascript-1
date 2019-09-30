/* chunk a string

  break a string into an array of strings according to punctuation and formatting

*/


const secondArg = 'list of things:\n\t- cows\n\t- bush\n\t- neither';
const secondExpected = ['list of things', ':\n\t-', ' cows', '\n\t-', ' bush', '\n\t-', ' neither'];

const chunkTests = [
  { name: 'first', args: ['const x = null;'], expected: ['const x ', '=', ' null', ';'] },
  { name: 'second', args: [secondArg], expected: secondExpected },
];
function chunk(str) {
  // write me!
}
evaluate(chunk, chunkTests);
