function sortHandler() {

  // read and process user input (this works, no need to change it!)
  const toSort = document.getElementById('sort-input').value;

  // pass user input through core logic (write this! it doesn't work)

  const sorted = `write a little javascript to:
- take in the string 'toSort'
- sort all of the characters
- and assign the new string to 'sorted'

the handler is already set up to:
- read user input to the variable 'toSort'
- write 'sorted' to the output`;

  // report result to user (this works, no need to change it!)
  const outputField = document.getElementById('sort-output');
  outputField.innerHTML = sorted;
};
const sortButton = document.getElementById('sort-button');
sortButton.addEventListener('click', sortHandler);
