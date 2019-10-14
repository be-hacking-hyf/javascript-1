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
  const strToRepeat = document.getElementById("repeat-string-input").value;

  const rawNumInput = document.getElementById("repeat-number-input").value;
  const numOfRepetitions = Number(rawNumInput);
  if (numOfRepetitions !== numOfRepetitions) {
    throw new TypeError('second input to "repeat it" must be a number');
  }

  // pass user input through core logic (write this! it doesn't work)

  function toRepeat(strToRepeat, numOfRepetitions) {
    if (numOfRepetitions < 0) return "";
    if (numOfRepetitions === 1) return strToRepeat;
    else return strToRepeat + toRepeat(strToRepeat, numOfRepetitions - 1);
  }
  

  const repeated = strToRepeat.repeat(numOfRepetitions);

  // report result to user (this works, no need to change it!)
  const outputField = document.getElementById("repeat-output");
  outputField.innerHTML = repeated;

  console.log("\n--- repeatHandler ---");
  console.log("strToRepeat:", typeof strToRepeat, ",", strToRepeat);
  console.log("repeated:", typeof repeated, ",", repeated);
}
const repeatButton = document.getElementById("repeat-button");
repeatButton.addEventListener("click", repeatHandler);
