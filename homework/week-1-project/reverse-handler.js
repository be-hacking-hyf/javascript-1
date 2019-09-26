function reverseHandler() {

  // read and process user input (this works, no need to change it!)
  const toReverse = document.getElementById('reverse-input').value;

  // pass user input through core logic (write this! it doesn't work)

  const reversed = `write a little javascript to:
- take in the string 'toReverse'
- reverse the string
- and assign the new string to 'reversed'

the handler is already set up to:
- read user input to the variable 'toReverse'
- write 'reversed' to the output`;

  // report result to user (this works, no need to change it!)
  const outputField = document.getElementById('reverse-output');
  outputField.innerHTML = reversed;
};
const reverseButton = document.getElementById('reverse-button');
reverseButton.addEventListener('click', reverseHandler);
