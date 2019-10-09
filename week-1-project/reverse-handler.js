/*

write a little javascript to:
- take in the string 'toReverse'
- reverse the string
- and assign the new string to 'reversed'

the handler is already set up to:
- read user input to the variable 'toReverse'
- write 'reversed' to the output

*/


function reverseHandler() {

  // read and process user input (this works, no need to change it!)
  const toReverse = document.getElementById('reverse-input').value;

  // pass user input through core logic (write this! it doesn't work)

   function forReverse(){
     return toReverse.split('').reverse().join('');
     };
     const reversed = forReverse() ;
   
  
  // report result to user (this works, no need to change it!)
  const outputField = document.getElementById('reverse-output');
  outputField.innerHTML = reversed;

  console.log('\n--- reverseHandler ---');
  console.log('toReverse:', typeof toReverse, ',', toReverse);
  console.log('reversed:', typeof reversed, ',', reversed);
};
const reverseButton = document.getElementById('reverse-button');
reverseButton.addEventListener('click', reverseHandler);
