/*

write a little javascript to:
- take in the string 'strToRepeat' and a number 'numOfRepetitions'
- repeat the string that number of times
- put a new line after each repetition
- and assign the new string to 'repeated'

the handler is already set up to:
- read user input to variables 'strToRepeat' & 'numOfRepetitions'
- write 'repeated' to the output

*/

function repeatHandler() {

  // read and process user input (this works, no need to change it!)
  const strToRepeat = document.getElementById('repeat-string-input').value;

  const rawNumInput = document.getElementById('repeat-number-input').value;
  const numOfRepetitions = Number(rawNumInput);
  if (numOfRepetitions !== numOfRepetitions) {
    throw new TypeError('second input to "repeat it" must be a number');
  }


  // pass user input through core logic (write this! it doesn't work)
  // const repeated = `repeat ${strToRepeat} ${numOfRepetitions} times`;

  function repeat (numOfRepetitions){
    output="";
    for (i=1;i<=numOfRepetitions;i++){
        output=output+ " " +strToRepeat;
    }
    return output;
} 


  // report result to user (this works, no need to change it!)
  const outputField = document.getElementById('repeat-output');
  outputField.innerHTML = repeat(numOfRepetitions);

  console.log('\n--- repeatHandler ---');
  console.log('strToRepeat:', typeof strToRepeat, ',', strToRepeat);
  console.log('repeated:', typeof repeated, ',', repeated);
};
const repeatButton = document.getElementById('repeat-button');
repeatButton.addEventListener('click', repeatHandler);
