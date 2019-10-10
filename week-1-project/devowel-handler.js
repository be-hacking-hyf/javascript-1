/*

write a little javascript to:
- take in the string 'toDevowel'
- remove all of the vowels
- and assign the new string to 'devoweled'

the handler is already set up to:
- read user input to the variable 'toDevowel'
- write 'devoweled' to the output

*/

function devowelHandler() {
  // read and process user input (this works, no need to change it!)
  const toDevowel = document.getElementById("devowel-input").value;

  // pass user input through core logic (write this! it doesn't work)

  function wegvowels() {
    const vowels = ["a", "e", "o",'ø', "i", "u", "ü"];
    return toDevowel
      .split("")
      .filter(function(wv) {
        return vowels.indexOf(wv.toLowerCase()) == -1;
      })
      .join("");
  }
  const devoweled = wegvowels();
  
  // report result to user (this works, no need to change it!)
  const outputField = document.getElementById("devowel-output");
  outputField.innerHTML = devoweled;

  console.log("\n--- devowelHandler ---");
  console.log("toDevowel:", typeof toDevowel, ",", toDevowel);
  console.log("devoweled:", typeof devoweled, ",", devoweled);
}
const devowelButton = document.getElementById("devowel-button");
devowelButton.addEventListener("click", devowelHandler);
