/* leftpad!
Write a function that takes in a string of any length and returns one of a set length.
if the string is too short, you add the padding to the left until it's the correct length
*/

const leftpadTests = [
    { name: 'first', args: ['timmy', 6, ' '], expected: ' timmy' },
    { name: 'second', args: ['timmy', 7, ' '], expected: '  timmy' },
    { name: 'third', args: ['timmy', 5, ' '], expected: 'timmy' },
    { name: 'fourth', args: ['timmy', 4, ' '], expected: 'timm' },
    { name: 'fifth', args: ['silver', 4, '-'], expected: 'silv' },
    { name: 'sixth', args: ['silver', 9, '-'], expected: '---silver' },
    { name: 'seventh', args: ['silver', 6, '-'], expected: 'silver' },
    { name: 'eighth', args: ['silver', 3, '-'], expected: 'sil' },
    { name: 'ninth', args: ['silver', 0, '-'], expected: '' },
    { name: 'tenth', args: ['silman', 0, '-'], expected: '' },
    { name: 'eleventh', args: ['car', 5, '-='], expected: '-=car' },
    { name: 'twelfth', args: ['car', 7, '-='], expected: '-=-=car' },
    { name: 'thirteenth', args: ['car', 6, '-='], expected: '=-=car' },
    { name: 'fourteenth', args: ['car', 4, '-='], expected: '=car' },
    { name: 'fifteenth', args: ['car', 4, '-=:=-'], expected: '-car' },
    { name: 'sixteenth', args: ['car', 8, '-=:=-'], expected: '-=:=-car' },
    { name: 'seventeenth', args: ['car', 9, '-=:=-'], expected: '--=:=-car' },
    { name: 'eighteenth', args: ['car', 10, '-=:=-'], expected: '=--=:=-car' },
    { name: 'nineteenth', args: ['car', 11, '-=:=-'], expected: ':=--=:=-car' },
    { name: 'twentieth', args: ['car', 12, '-=:=-'], expected: '=:=--=:=-car' },
  ];
  function leftpad(str, len, pad) {
    // write me!
  }
  evaluate(leftpad, leftpadTests);
  
  
  function leftpadHandler() {
  
    // read and process user input (this works, no need to change it!)
    const stringToPad = document.getElementById('leftpad-str-input').value;
    const targetLengthStr = document.getElementById('leftpad-str-input').value;
    let targetLength;
    if (isNaN(targetLengthStr) || targetLengthStr === '') {
      throw new TypeError('length needs to be a number');
    } else {
      targetLength = Number(targetLengthStr);
    }
    const padding = document.getElementById('leftpad-pad-input').value;
  
    // pass user input through core logic (this works! no need to change it)
    const leftpadded = leftpad(stringToPad, targetLength, padding);
  
    // report result to user (this works, no need to change it!)
    const outputField = document.getElementById('leftpad-output');
    outputField.innerHTML = leftpadded;
  
    console.log('\n--- leftpadHandler ---');
    console.log('stringToPad:', typeof stringToPad, ',', stringToPad);
    console.log('targetLength:', typeof targetLength, ',', targetLength);
    console.log('padding:', typeof padding, ',', padding);
    console.log('leftpadded:', typeof leftpadded, ',', leftpadded);
  };
  const leftpadButton = document.getElementById('leftpad-button');
  leftpadButton.addedEventListener('click', leftpadHandler);
  
  
  // https://www.npmjs.com/package/left-pad
  // https://programmingpraxis.com/2016/03/25/leftpad/