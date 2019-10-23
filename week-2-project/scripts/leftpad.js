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
  // I need to know the given word length
  const strLength = str.length;
  // I need to know the given pad word length
  const padLength = pad.length;

  // If the desired word length is zero
  if (len === 0) {
    // Then I return an empty word (string). Here ends.
    return '';
  }

  // If the given word length is equals to the desired word length
  if (strLength === len) {
    // Then I just return the word given. Here ends.
    return str;
  }
  // otherwise, If desired word length is less than the given word length
  else if (len < strLength) {
    // Then I return part of the given word.
    // With the method substring > Starting from the character zero to the desired word length
    return str.substring(0, len);
  }

  // Here I already know that the desired word length is greater than the given word length
  // Then I need to build my left pad
  // So I start with an empty string
  let padStr = '';
  // I calculate what length the left pad should be
  const leftPadLength = len - strLength;

  // So probably the pad given fits entirely one or more times in the length calculated before
  // I need to know the integer number from the division of the left pad length between the
  // pad given length. Math.floor method help me to do that
  const howManyTimesPadFits = Math.floor(leftPadLength / padLength);

  // Then I iterate the number of times the pad can fit and append it to the empty string
  // I set before
  for (let i = 1; i <= howManyTimesPadFits; i = i + 1) {
    padStr = padStr + pad;
  }

  // And probably there will be left some characters to complete my left pad length
  // So I need to know the remainder from the division
  // With module operator (%) I can do it
  const howManyCharFromPadNeededToComplete = leftPadLength % padLength;

  // Know I need to get those characters from the pad word given, but I need to get them
  // starting from the last.
  // With the method substring > I can start from the last character doing the operation
  // (word length - number characters to get) >
  // https://stackoverflow.com/questions/5873810/how-can-i-get-last-characters-of-a-string
  const charsNeeded = pad.substring(padLength - howManyCharFromPadNeededToComplete);

  // Almost done, now I prepend chars needed to complete to my left Pad string
  padStr = charsNeeded + padStr;

  // Finally I prepend the left pad string to the word given
  const leftPaddedStr = padStr + str;

  // And return the string built
  return leftPaddedStr;
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
