function decryptHandler() {

  // read and process user input (this works, no need to change it!)
  const encryptedArea = document.getElementById('encrypted-text-area');
  const strToDecrypt = encryptedArea.value;

  const keyInput = document.getElementById('encryption-key-input');
  const rawNumInput = keyInput.value;
  const shiftNumber = Number(rawNumInput);
  if (isNaN(shiftNumber)) {
    throw new TypeError('decryption key must be a number');
  }


  // pass user input through core logic
  const decrypted = 'write me!';

  // report result to user (this works, no need to change it!)
  keyInput.value = '';
  const decryptedArea = document.getElementById('decrypted-text-area');
  decryptedArea.value = decrypted;

  console.log('\n--- decryptHandler ---');
  console.log('strToDecrypt:', typeof strToDecrypt, ',', strToDecrypt);
  console.log('shiftNumber:', typeof shiftNumber, ',', shiftNumber);
  console.log('decrypted:', typeof decrypted, ',', decrypted);
};
const decryptButton = document.getElementById('decrypt-button');
decryptButton.addEventListener('click', decryptHandler);