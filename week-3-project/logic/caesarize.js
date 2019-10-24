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
function caesarize(str, shiftNum, method) {
  // write me!
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
    }else if ((code[i]>=65)&&(code[i]<=90)){
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
function decaesarize(str, shiftNum) {
  // write me!
  var input=str;
  var str=input.split('');
  var code=input.split('');
  var ceasared=input.split('');
  for (var i = 0; i < str.length; i++) {
    code[i] = str[i].charCodeAt();
    if ((code[i]>=97)&&(code[i]<=122)){ 
      code[i]-=shiftNum;
      if (code[i]>122){
        code[i]=code[i]+26;
        }
        else if (code[i]<97){
        code[i]=code[i]-26;
        }
      ceasared[i] = String.fromCharCode(code[i]);
    }else if ((code[i]>=65)&&(code[i]<=90)){
    code[i]-=shiftNum;
      if (code[i]>90){
      code[i]=code[i]+26;
      }
        else if (code[i]<65){
      code[i]=code[i]+26;
      }
    ceasared[i] = String.fromCharCode(code[i]);
    }    
  }
  return ceasared.join('');
}
evaluate(caesarize, caesarizeTests);