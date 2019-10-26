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

function caesarize(strToCaesarize, shiftNumber) {
  let checkChar;
  let shiftedChCode;
  let shiftedStr = ``;

  let arrFromStr = strToCaesarize.split(``); // array of symbols

  //map changes every element of array and returns array with shifted chars
  let shiftedArr = arrFromStr.map(e => { 

    let chCode = e.charCodeAt(); //charCode of element

    checkChar = (65<= chCode && chCode <= 90) ? `upLetter`: //checking for charCode
   (97 <= chCode && chCode <= 122) ? `lowLetter` :
    `symbol`;

    let newChCode = shiftNumber + chCode;               // new Char Code for letters

   switch (checkChar) {                                 // switch between different types of chars
     case `upLetter`:
      shiftedChCode = (newChCode > 90) ? newChCode - 26:
     newChCode < 65 ?  newChCode + 26 : newChCode;
     break;
      
     case `lowLetter`:
     shiftedChCode = (newChCode > 122) ? newChCode - 26:
     newChCode < 97 ?  newChCode + 26 : newChCode;
     break;
   
     default:
        shiftedChCode = chCode;
      }
      shiftedCh = String.fromCharCode(shiftedChCode);   // returns shifted char as a string
      return e = shiftedCh;
    });

    return shiftedStr = shiftedArr.join(``);     // makes a string out of array
 }

evaluate(caesarize, caesarizeTests);