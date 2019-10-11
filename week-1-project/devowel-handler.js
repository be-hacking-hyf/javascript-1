/*

write a little javascript to:
- take in the string 'toDevowel'
- remove all of the vowels
- and assign the new string to 'devoweled'

the handler is already set up to:
- read user input to the variable 'toDevowel'
- write 'devoweled' to the output

*/

function devowelHandler() {

  // read and process user input (this works, no need to change it!)
  const toDevowel = document.getElementById('devowel-input').value;

  // pass user input through core logic (write this! it doesn't work)
  let vowels = ['a', 'A', 'e', 'E', 'y', 'Y', 'o', 'O', 'u', 'U', 'i', 'I'];
  let devoweled = [...toDevowel].filter(x => !vowels.includes(x));


  //const vowels = [65, 69, 73, 79, 85, 89, 97, 101, 105, 111, 117, 121];
  //const numbers = [...toDevowel].map(letter => letter.charCodeAt());
  //const reducedNumbers = [...numbers].filter(x => !vowels.includes(x));
  //const devoweled = [...reducedNumbers].map(num => String.fromCharCode(num));

  
  // report result to user (this works, no need to change it!)
  const outputField = document.getElementById('devowel-output');
  outputField.innerHTML = devoweled;

  console.log('\n--- devowelHandler ---');
  console.log('toDevowel:', typeof toDevowel, ',', toDevowel);
  console.log('devoweled:', typeof devoweled, ',', devoweled);
};
const devowelButton = document.getElementById('devowel-button');
devowelButton.addEventListener('click', devowelHandler);
