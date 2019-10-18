/* repeat charecters

write a function that repeats the charecters in a string according to these rules:
- letters are doubled
- numbers are tripled
- anything else is quadrupled

*/

const repeatCharsTests = [
  { name: 'first', args: ['abc'], expected: 'aabbcc' },
  { name: 'second', args: ['123'], expected: '111222333' },
  { name: 'third', args: ['%-*>'], expected: '%%%%----****>>>>' },
  { name: 'fourth', args: ['h3LL0 W@r!|)'], expected: 'hh333LLLL000    WW@@@@rr!!!!||||))))' },
  { name: 'fifth', args: ['{:-<*>-:}'], expected: '{{{{::::----<<<<****>>>>----::::}}}}' },
  { name: 'seventh', args: [' '], expected: '    ' },
  { name: 'sixth', args: [''], expected: '' },
 
];
function repeatChars(stringInput) {
  
var strArray = stringInput.split('');
var codeArray = strArray.map(function(code){ 
  code=code.charCodeAt();
  return code;
  });

console.log(codeArray);
var newArray = codeArray.map(function(num) {
 if (num<=90 && num>=65){
    num = String.fromCharCode(num)+String.fromCharCode(num);
    return num;
 }
  else if (num<=122 && num>=97) {
          num = String.fromCharCode(num)+String.fromCharCode(num);
          return num;
  } 
  else if (num<=57 && num>=48 ) {
           num = String.fromCharCode(num)+String.fromCharCode(num)+String.fromCharCode(num);
           return num;
          }
   else {
        num = String.fromCharCode(num)+String.fromCharCode(num)+String.fromCharCode(num)+String.fromCharCode(num);
        return num;
  }
});
return newArray.join('');
}
evaluate(repeatChars, repeatCharsTests);



function repeatCharsHandler() {

  // read and process user input (this works, no need to change it!)
  const stringInput = document.getElementById('repeatChars-input').value;

  // pass user input through core logic (this works!  no need to change it)
  const repeatCharsed = repeatChars(stringInput);

  // report result to user (this works, no need to change it!)
  const outputField = document.getElementById('repeatChars-output');
  outputField.innerHTML = repeatCharsed;

  console.log('\n--- repeatCharsHandler ---');
  console.log('stringInput:', typeof stringInput, ',', stringInput);
  console.log('repeatCharsed:', typeof repeatCharsed, ',', repeatCharsed);
};
const repeatCharsButton = document.getElementById('repeatChars-button');
repeatCharsButton.addEventListener('click', repeatCharsHandler);
