/* Caesar Cipher
  this is a simple encoding algorithm that replaces letters in a message with a new letter
  the new letter is determined by shifting N spaces across the alphabet
  for example, caesarize("A", 3) will return : "D"
  because "D" is three letters past "A".
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
 //write me!
var input=str;

var str=input.split('');

var code=input.split('');

var ceasared=input.split('');

for (var i = 0; i < str.length; i++) {
code[i] = str[i].charCodeAt();
if ((code[i]>=97)&&(code[i]<=122)){
  code[i]+=shiftNum;
  if (code[i]>122){
    code[i]=code[i]-26;
    }
    else if (code[i]<97){
    code[i]=code[i]+26;
    }
  ceasared[i] = String.fromCharCode(code[i]);
  }
else if ((code[i]>=65)&&(code[i]<=90)){
  code[i]+=shiftNum;
    if (code[i]>90){
    code[i]=code[i]-26;
    }
      else if (code[i]<65){
    code[i]=code[i]+26;
    }
  ceasared[i] = String.fromCharCode(code[i]);
  }    
}
return ceasared.join('');
}
    
    // console.log(caesarize('aBcD',-3));	
 
  // write me!

evaluate(caesarize, caesarizeTests);


function caesarizeHandler() {

  // read and process user input (this works, no need to change it!)
  const strToCaesarize = document.getElementById('caesarize-string-input').value;

  const rawNumInput = document.getElementById('caesarize-number-input').value;
  const shiftNumber = Number(rawNumInput);
  if (isNaN(shiftNumber)) {
    throw new TypeError('second input to "caesarize it" must be a number');
  }


  // pass user input through core logic (this works!  no need to change it)
  const caesarized = caesarize(strToCaesarize, shiftNumber);

  // report result to user (this works, no need to change it!)
  const outputField = document.getElementById('caesarize-output');
  outputField.innerHTML = caesarized;

  console.log('\n--- caesarizeHandler ---');
  console.log('strToCaesarize:', typeof strToCaesarize, ',', strToCaesarize);
  console.log('shiftNumber:', typeof shiftNumber, ',', shiftNumber);
  console.log('caesarized:', typeof caesarized, ',', caesarized);
};
const caesarizeButton = document.getElementById('caesarize-button');
caesarizeButton.addEventListener('click', caesarizeHandler);