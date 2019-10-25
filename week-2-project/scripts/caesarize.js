/* Caesar Cipher

  this is a simple encoding algorithm that replaces letters in a message with a new letter

  the new letter is determined by shifting N spaces across the alphabet

  for example, caesarize("A", 3) will return : "D"
  because "D" is three letters past "A".
*/

const caesarizeTests = [
  { name: "first", args: ["aBcD", 3], expected: "dEfG" },
  { name: "second", args: ["aBcD", -3], expected: "xYzA" },
  { name: "third", args: ["heLLo worLd!", 0], expected: "heLLo worLd!" },
  { name: "fourth", args: ["heLLo worLd!", 1], expected: "ifMMp xpsMe!" },
  { name: "fifth", args: ["", 5], expected: "" },
  { name: "sixth", args: ["mnOpQr", 26], expected: "mnOpQr" },
  { name: "seventh", args: ["#@&&^F*(#", 7], expected: "#@&&^M*(#" }
];

function caesarize(str, shiftNum) {
   
  //my array to split
  let array = a.split('');
  
  //my array for splitted strings 
  let NEWarray = array.map(x =>{

    let letternumber = x.charcodeAt();
    
    
    //for the letters a-z
    if (letternumber >= 97 && letternumber <= 122){
      
       letternumber += shiftNum;
       if (letternumber > 122) {letternumber -= 26;}
       else if (letternumber < 97) {letternumber += 26;}
      
       myCode = String.fromCharCode(letternumber);}

    // for the letters A-Z
    else if (letternumber <= 90 && letternumber >= 65){
        
       letternumber += shiftNum;
       if (letternumber > 90) {letternumber -= 26}
       else if (letternumber < 65) {letternumber += 26}
      
       myCode = String.fromCharCode(letternumber);}
    
    // for special characters and numbers
    else {myCode = x;}
    return myCode;
    
  });

  return NEWarray.join('');
}



evaluate(caesarize, caesarizeTests);

function caesarizeHandler() {
  // read and process user input (this works, no need to change it!)
  const strToCaesarize = document.getElementById("caesarize-string-input")
    .value;

  const rawNumInput = document.getElementById("caesarize-number-input").value;
  const shiftNumber = Number(rawNumInput);
  if (isNaN(shiftNumber)) {
    throw new TypeError('second input to "caesarize it" must be a number');
  }

  // pass user input through core logic (this works!  no need to change it)
  const caesarized = caesarize(strToCaesarize);

  // report result to user (this works, no need to change it!)
  const outputField = document.getElementById("caesarize-output");
  outputField.innerHTML = caesarized;

  console.log('\n--- caesarizeHandler ---');
  console.log('strToCaesarize:', typeof strToCaesarize, ',', strToCaesarize);
  console.log('shiftNumber:', typeof shiftNumber, ',', shiftNumber);
  console.log('caesarized:', typeof caesarized, ',', caesarized);
};
const caesarizeButton = document.getElementById('caesarize-button');
caesarizeButton.addEventListener('click', caesarizeHandler);