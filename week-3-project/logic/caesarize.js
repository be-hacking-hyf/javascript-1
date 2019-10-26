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
  { name: 'seventh', args: ["#@&&^F*(#", 7], expected: '#@&&^L*(#' },
];
function caesarize(str, shiftNum) {
  // write me!

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
