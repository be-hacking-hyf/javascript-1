function encryptHandler() {

  // read and process user input (this works, no need to change it!)
  const encryptArea = document.getElementById('encrypted-text-area')
  const strToEncrypt = encryptArea.value;

  const keyInput = document.getElementById('encryption-key-input');
  const rawNumInput = keyInput.value;
  const shiftNumber = Number(rawNumInput);
  if (isNaN(shiftNumber)) {
    throw new TypeError('encryption key must be a number');
  }


  // pass user input through core logic
  const encrypted = 'write me!';

  // report result to user (this works, no need to change it!)
  keyInput.value = '';
  encryptArea.value = encrypted;

  console.log('\n--- encryptHandler ---');
  console.log('strToEncrypt:', typeof strToEncrypt, ',', strToEncrypt);
  console.log('shiftNumber:', typeof shiftNumber, ',', shiftNumber);
  console.log('encrypted:', typeof encrypted, ',', encrypted);
};
const encryptButton = document.getElementById('encrypt-button');
encryptButton.addEventListener('click', encryptHandler);