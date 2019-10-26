function scrambleHandler() {

  // read and process user input (this works, no need to change it!)
  const toScramble = document.getElementById('scramble-input').value;

  // pass user input through core logic (this works! no need to change it)
  const scrambled = 'write me!';

  // report result to user (this works, no need to change it!)
  const outputField = document.getElementById('scramble-output');
  outputField.innerHTML = scrambled;

  console.log('\n--- scrambleHandler ---');
  console.log('toScramble:', typeof toScramble, ',', toScramble);
  console.log('scrambled:', typeof scrambled, ',', scrambled);
};
const scrambleButton = document.getElementById('scramble-button');
scrambleButton.addEventListener('click', scrambleHandler);