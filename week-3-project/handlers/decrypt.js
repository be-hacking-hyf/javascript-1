function decryptHandler() {

  // read and process user input (this works, no need to change it!)
  const strToDecrypt = document.getElementById('encrypted-string-output').value;

  const rawNumInput = document.getElementById('decryption-key-input').value;
  const shiftNumber = Number(rawNumInput);
  if (isNaN(shiftNumber)) {
    throw new TypeError('decryption key must be a number');
  }


  // pass user input through core logic (this works!  no need to change it)
  const decrypted = 'write me!';

  // report result to user (this works, no need to change it!)
  const outputField = document.getElementById('decrypted-string-output');
  outputField.innerHTML = decrypted;

  console.log('\n--- decryptHandler ---');
  console.log('strToDecrypt:', typeof strToDecrypt, ',', strToDecrypt);
  console.log('shiftNumber:', typeof shiftNumber, ',', shiftNumber);
  console.log('decrypted:', typeof decrypted, ',', decrypted);
};
const decryptButton = document.getElementById('decrypt-button');
decryptButton.addEventListener('click', decryptHandler);
