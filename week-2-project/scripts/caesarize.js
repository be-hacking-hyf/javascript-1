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
 
    var input = str;
    var str=input.split('');
    
         
      for (var i = 0; i < str.length; i++) {
        str[i] = str[i].charCodeAt();
            if ((str[i]>=97)&&(str[i]<=122)){
              str[i]+=shiftNum;
                if (str[i]>122){
                  str[i]=str[i]-26;
                  }
                  else if(str[i]<97){
                    str[i]=str[i]+26;
                  }
                  str[i] = String.fromCharCode(str[i]);
                }
            else if((str[i]>=65)&&(str[i]<=90)){
              str[i]+=shiftNum;
                 if (str[i]>90){
                  str[i]=str[i]-26;
                  }
                   else if (str[i]<65){
                    str[i]=str[i]+26;
                  }
                  str[i] = String.fromCharCode(str[i]);
                }
          
      }
      return str.join('');
    }
    
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
