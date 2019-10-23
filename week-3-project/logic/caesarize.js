/* Caesar Cipher
  this is a simple encoding algorithm that replaces letters in a message with a new letter
  the new letter is determined by shifting N spaces across the alphabet
  for example, caesarize("A", 3) will return : "D"
  because "D" is three letters past "A".
  (yes, this is the same function you wrote last week)
*/

const caesarizeTests = [
  { name: 'first', args: ["aBcD", 3], expected: 'dEfG' },
  { name: 'second', args: ["aBcD", -3], expected: 'xYzA' },
  { name: 'third', args: ["heLLo worLd!", 0], expected: 'heLLo worLd!' },
  { name: 'fourth', args: ["heLLo worLd!", 1], expected: 'ifMMp xpsMe!' },
  { name: 'fifth', args: ["", 5], expected: '' },
  { name: 'sixth', args: ["mnOpQr", 26], expected: 'mnOpQr' },
  { name: 'seventh', args: ["#@&&^F*(#", 7], expected: '#@&&^M*(#' },
];
function caesarize(str, shiftNum) {
  // write me!
  var splittedStr = str.split("");
  var caesarized = str.split("");
  for (let i = 0; i < str.length; i++) {
    splittedStr[i] = str[i].charCodeAt();
    if (splittedStr[i] >= 97 && splittedStr[i] <= 122) {
      splittedStr[i] += shiftNum;
      if (splittedStr[i] > 122) {
        splittedStr[i] = splittedStr[i] - 26;
      } else if (splittedStr[i] < 97) {
        splittedStr[i] = splittedStr[i] + 26;
      }
      caesarized[i] = String.fromCharCode(splittedStr[i]);
    } else if (splittedStr[i] >= 65 && splittedStr[i] <= 90) {
      splittedStr[i] += shiftNum;
      if (splittedStr[i] > 90) {
        splittedStr[i] = splittedStr[i] - 26;
      } else if (splittedStr[i] < 65) {
        splittedStr[i] = splittedStr[i] + 26;
      }
      caesarized[i] = String.fromCharCode(splittedStr[i]);
    }
  }
  return caesarized.join("");


}
evaluate(caesarize, caesarizeTests);
