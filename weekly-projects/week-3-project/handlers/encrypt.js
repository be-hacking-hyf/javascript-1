function encryptHandler() {

  // read and process user input (this works, no need to change it!)
  const strToEncrypt = document.getElementById('unencrypted-string-input').value;

  const rawNumInput = document.getElementById('encryption-key-input').value;
  const shiftNumber = Number(rawNumInput);
  if (isNaN(shiftNumber)) {
    throw new TypeError('encryption key must be a number');
  }


  // pass user input through core logic (this works!  no need to change it)
  const encrypted = caesarize(strToEncrypt);

  // report result to user (this works, no need to change it!)
  const outputField = document.getElementById('encrypted-string-output');
  outputField.innerHTML = encrypted;

  console.log('\n--- encryptHandler ---');
  console.log('strToEncrypt:', typeof strToEncrypt, ',', strToEncrypt);
  console.log('shiftNumber:', typeof shiftNumber, ',', shiftNumber);
  console.log('encrypted:', typeof encrypted, ',', encrypted);
};
const encryptButton = document.getElementById('encrypt-button');
encryptButton.addEventListener('click', encryptHandler);
