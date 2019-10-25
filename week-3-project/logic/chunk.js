/* chunk a string

  break a string into an array of strings according to punctuation and tabs/newlines

  any continuous series of numbers, letters and spaces will stay together
  and any continuous series of punctuation or tabs/newlines will stay together

*/


const secondArg = `list of things:
  - cows
  - bush
  - neither`;
const secondExpected = [
  'list of things',
  ':\n\t-',
  ' cows',
  '\n\t-',
  ' bush',
  '\n\t-',
  ' neither'];

const thirdArg = `softly grows the grasses.
   under -- trees?
it's really hard to say`;
const thirdExpected = [
  'softly grows the grasses',
  '\n\t',
  ' under ',
  '--',
  ' trees',
  '?\n',
  'it',
  "'",
  's really hard to say'
];


const chunkTests = [
  { name: 'first', args: ['const x = null;'], expected: ['const x ', '=', ' null', ';'] },
  { name: 'second', args: [secondArg], expected: secondExpected },
  { name: 'second', args: [thirdArg], expected: thirdExpected },
];


function chunk(str) {
  function findGroup(a) {
    let groupOfCharacter;
    let nmr = a.charCodeAt(0);
    65 <= nmr && nmr <= 90
      ? (groupOfCharacter = "strGroup")
      : 97 <= nmr && nmr <= 122
      ? (groupOfCharacter = "strGroup")
      : nmr == 32
      ? (groupOfCharacter = "strGroup")
      : 48 <= nmr && nmr <= 57
      ? (groupOfCharacter = "strGroup")
      : (groupOfCharacter = "nonstrGroup");
    return groupOfCharacter;
  }
  let chunkArr = [];
  let tmpArr = str.split("");
  let strOfchunk = "";
  let strArr = tmpArr.map(function(e, i, a) {
    if (i === 0) {
      strOfchunk = e;
    } else if (findGroup(e) === findGroup(a[i - 1])) {
      strOfchunk += e;
    } else {
      chunkArr.push(strOfchunk);
      //console.log(chunkArr);
      strOfchunk = e;
    }
  });
  chunkArr.push(strOfchunk);
  return chunkArr;
}

evaluate(chunk, chunkTests);
