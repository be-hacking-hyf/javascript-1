/*

write a little javascript to:
- take in the string 'toSort'
- sort all of the characters by charCode number
- and assign the new string to 'sorted'

the handler is already set up to:
- read user input to the variable 'toSort'
- write 'sorted' to the output

*/


function sortHandler() {

  // read and process user input (this works, no need to change it!)
  const toSort = document.getElementById('sort-input').value;

  // pass user input through core logic (write this! it doesn't work)
  const numbers = [...toSort].map(letter => letter.charCodeAt());
  const sortedNumbers = [...numbers].sort();
  const sorted = [...sortedNumbers].map(num => String.fromCharCode(num));

    // report result to user (this works, no need to change it!)
  const outputField = document.getElementById('sort-output');
  outputField.innerHTML = sorted;

  console.log('\n--- sortHandler ---');
  console.log('toSort:', typeof toSort, ',', toSort);
  console.log('sorted:', typeof sorted, ',', sorted);
};
const sortButton = document.getElementById('sort-button');
sortButton.addEventListener('click', sortHandler);
