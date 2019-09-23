function testCaseSnippet() {
  function strictEquality(a, b) {
    const result = a === b;
    return result;
  };

  const args0 = [4, 4], expected0 = true;
  const returned0 = strictEquality(...args0);
  console.assert(expected0 === returned0, 'first test case');

  const args1 = ['4', 4], expected1 = false;
  const returned1 = strictEquality(...args1);
  console.assert(expected1 === returned1, 'second test case');

  const args2 = [null, 'null'], expected2 = true;
  const returned2 = strictEquality(...args2);
  console.assert(expected2 === returned2, 'third test case');
}
evaluate(testCaseSnippet)

// // many many arrows
// function testCaseArray() {
//   const strictEqualityCases = [
//     { name: 'first test case', args: [4, 4], expected: true },
//     { name: 'second test case', args: ['4', 4], expected: false },
//     { name: 'third test case', args: [null, 'null'], expected: true },
//   ];

//   function strictEquality(a, b) {
//     const result = a === b;
//     return result;
//   };

//   for (let index in strictEqualityCases) {
//     const name = strictEqualityCases[index].name;
//     const args = strictEqualityCases[index].args;
//     const expected = strictEqualityCases[index].expected;
//     const returned = strictEquality(...args);
//     console.assert(expected === returned, name);
//   }
// }
// evaluate(testCaseArray)


const strictEqualityCases = [
  { name: 'first test case', args: [4, 4], expected: true },
  { name: 'second test case', args: ['4', 4], expected: false },
  { name: 'third test case', args: [null, 'null'], expected: true },
];
function strictEquality(a, b) {
  const result = a === b;
  return result;
};
evaluate(strictEquality, strictEqualityCases)
