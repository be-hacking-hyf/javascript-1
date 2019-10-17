/* constant variable names
  in JS there is a convention to name constant values with upper cases and underscores
  for example the speed of light in a vacuum is always the same,
  so if you needed to assign that value to a variable you would do it at the top of your code
  with a name like:
  const SPEED_OF_LIGHT_IN_VACUUM = 'very fast';

  in addition, JS doesn't allow certain charecters to be used in variable names
  if a string includes any unallowed charecters, just remove them:
  MILK_&_CEREAL -> MILK__CEREAL

  for consistency, and so it's easier to remember variable names,
  make sure there is only ever one underscore in a row
  MILK__CEREAL -> MILK_CEREAL
*/

const constantizeTests = [
  { name: 'first', args: ['hello world!'], expected: 'HELLO_WORLD' },
  { name: 'second', args: ['milk & cereal'], expected: 'MILK_CEREAL' },
  { name: 'third', args: ['_ speed of light'], expected: '_SPEED_OF_LIGHT' },
  { name: 'fourth', args: ['+ # ! &&'], expected: '_' },
  { name: 'fifth', args: ['Mandy+Tom = <3'], expected: 'MANDYTOM_' },
  { name: 'sixth', args: ['ALREADY_A_CONSTANT'], expected: 'ALREADY_A_CONSTANT' },
];
function constantize(str) {
 
  let splittedArr = str.split("");
  
  let mapArr = splittedArr.map(function(char) {
   
    let charCode = char.charCodeAt(0);
   
    if ((65 > charCode || charCode > 90) && (97 > charCode || charCode > 122)) {char =
        
      char === " " || char === "_" ? " " : char.replace(char, "");
    }
    return char;
  });
  
  let finalStr = mapArr.join("");
  
  finalStr = finalStr.replace(/\s{2,}/g, " "); 
  
  finalStr = finalStr.replace(/\ /g, "_");
 
  finalStr = finalStr.toUpperCase();
  
 return finalStr;
   
}
evaluate(constantize, constantizeTests);


function constantizeHandler() {

  // read and process user input (this works, no need to change it!)
  const toConstantize = document.getElementById('constantize-input').value;

  // pass user input through core logic (this works, no need to change it!)
  const constantized = constantize(toConstantize);

  // report result to user (this works, no need to change it!)
  const outputField = document.getElementById('constantize-output');
  outputField.innerHTML = constantized;

  console.log('toConstantize:', typeof toConstantize, ',', toConstantize);
  console.log('constantized:', typeof constantized, ',', constantized);
};
const constantizeButton = document.getElementById('constantize-button');
constantizeButton.addEventListener('click', constantizeHandler);
