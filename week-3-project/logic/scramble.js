/* scramble!

Write a function that does these things to a string:
- sort each word (anything with only numbers or letters, separated by spaces)
- reverse chunks (anything between two punctuation marks, a new line or the beginning/end of the string)
- preserve formatting (leave tabs and newlines in place);

*/

const thirdScrambleArg = `a list of drinks:
  - milk
  - sugar free coke
  - soy sauce`;
const thirdScrambleExpected = `diknrs fo ilst a:
  - iklm
  - ceko eefr agrsu
  - acesu osy`;

const scrambleTests = [
  { name: 'first', args: ['the road works.'], expected: 'korsw ador eht.' },
  { name: 'second', args: ["name: 'second'"], expected: "aemn: 'cednos'" },
  { name: 'third', args: [thirdScrambleArg], expected: thirdScrambleExpected },
];
function scramble(str) {
  /*
    write a new implementation of scramble, passing the same tests as last week
    this time you will use the functions "backwards", "sort", and "chunk"
    each of these functions is one step along the way to a scrambled string
    this is a nice exercise in using smaller functions to solve larger problems
  */
}
evaluate(scramble, scrambleTests);
