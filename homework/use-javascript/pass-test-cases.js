{
  const pageTitle = 'pass test cases';
  const header = document.createElement("h2");
  header.innerHTML = pageTitle;
  document.body.appendChild(header);
  console.groupCollapsed(pageTitle);
}

const typeTesterTests = [
  { name: 'first', args: [4], expected: '4 is a number' },
  { name: 'second', args: [NaN], expected: 'NaN is a number' },
  { name: 'third', args: ['4'], expected: '4 is a string' },
  { name: 'fourth', args: [undefined], expected: 'undefined is undefined' },
  { name: 'fifth', args: [null], expected: 'null is null' },
  { name: 'sixth', args: [true], expected: 'true is a boolean' },
  { name: 'seventh', args: [null], expected: 'Infinity is a number' },
];
function typeTester(value) {
  // write this!
}
evaluate(typeTester, typeTesterTests);


const sortedNumbersTests = [
  { name: 'first', args: [["3", null, 0, 'words', false, -1]], expected: [-1, 0] },
  { name: 'second', args: [["3", null, 'words', false]], expected: [null] },
  { name: 'third', args: [[4, Infinity, NaN, 0.0, null]], expected: [0, NaN, 4, Infinity] },
  { name: 'fourth', args: [[]], expected: [undefined] },
  { name: 'fifth', args: [[4, 9, .5, 100, 1e3]], expected: [.5, 4, 9, 100, 1000] },
  { name: 'sixth', args: [[4, Infinity, 0.0, NaN, null]], expected: [NaN, 0, 4, Infinity] },
]
function sortedNumbers(arrOfThings) {
  // write this!
}
evaluate(sortedNumbers, sortedNumbersTests)


const compareValuesTests = [
  { name: 'null, undefined', args: [null, undefined], expected: true },
  { name: 'null, null', args: [null, null], expected: true },
  { name: 'undefined, undefined', args: [undefined, undefined], expected: true },
  { name: 'null, ""', args: [null, ""], expected: false },
  { name: 'null, 0', args: [null, 0], expected: false },
  { name: 'null, false', args: [null, false], expected: false },
  { name: 'undefined, ""', args: [undefined, ""], expected: false },
  { name: 'undefined, 0', args: [undefined, 0], expected: false },
  { name: 'undefined, false', args: [undefined, false], expected: false },
  { name: 'true, false', args: [true, false], expected: false },
  { name: 'true, true', args: [true, true], expected: true },
  { name: 'false, false', args: [false, false], expected: true },
  { name: '3, "3"', args: [3, "3"], expected: true },
  { name: 'true, 1', args: [true, 1], expected: true },
  { name: 'false, 0', args: [false, 0], expected: true },
  { name: 'true, " "', args: [true, " "], expected: false },
  { name: 'false, "', args: [false, ""], expected: true },
  { name: '0, ""', args: [0, ""], expected: true }
];
function compareValues(a, b) {
  // write this!
}
evaluate(compareValues, compareValuesTests);


{
  console.groupEnd();
  document.body.appendChild(document.createElement('hr'));
}

