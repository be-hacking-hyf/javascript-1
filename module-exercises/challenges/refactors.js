{
  const pageTitle = 'refactors';
  const header = document.createElement("h2");
  header.innerHTML = pageTitle;
  document.body.appendChild(header);
  console.groupCollapsed(pageTitle);
}
try {

  /* refactoring exercises

  "refactoring" is when you rewrite code to pass the same tests,
  but with different implementation

  These exercises ask you to pass the same test cases using different language features

  */

  const firstTests = [
    // both are numbers
    { name: 'first', args: [4, 4], expected: true },
    { name: 'second', args: [4, 5], expected: false },
    { name: 'third', args: [NaN, NaN], expected: false },
    { name: 'fourth', args: [1000, 1e3], expected: true },
    // one is undefined
    { name: 'fifth', args: [undefined, 'd'], expected: undefined },
    { name: 'sixth', args: [undefined, false], expected: undefined },
    { name: 'seventh', args: [null, undefined], expected: undefined },
    // both are boolean
    { name: 'eighth', args: [true, false], expected: false },
    { name: 'ninth', args: [false, false], expected: true },
    { name: 'tenth', args: [true, true], expected: true },
    // different types, and not undefined
    { name: 'eleventh', args: ['4', 1], expected: '41' },
    { name: 'twelfth', args: ['4', '1'], expected: false },
    { name: 'thirteenth', args: [true, 1], expected: 2 },
    { name: 'fourteenth', args: [null, 1], expected: 1 },
    { name: 'fifteenth', args: [false, '1'], expected: 'false1' },
  ];

  function firstWithConditionals(a, b) {
    // solve the first test cases using conditionals
  }
  evaluate(firstWithConditionals, firstTests);

  function firstWithTernaries(a, b) {
    // solve the first test cases using conditionals
  }
  evaluate(firstWithTernaries, firstTests);


  const secondTests = [
    // at least one falsey value
    { name: 'first', args: [[3, false, true]], expected: false },
    { name: 'second', args: [[3, '', true]], expected: false },
    { name: 'third', args: [[0, 'false', true]], expected: false },
    { name: 'fourth', args: [[10, 'false', true, null]], expected: false },
    { name: 'fifth', args: [[false, false]], expected: false },
    // all truthy values
    { name: 'sixth', args: [[true, true]], expected: true },
    { name: 'seventh', args: [[1, true, 'false', 99]], expected: true },
    { name: 'eighth', args: [[1, "a word", "978", true]], expected: true },
  ]

  function secondWithWhile(arrOfThings) {
    // solve the second test cases with while loops
  }
  evaluate(secondWithWhile, secondTests)

  function secondWithFor(arrOfThings) {
    // solve the second test cases with for loops
  }
  evaluate(secondWithFor, secondTests)

  function secondWithArrayMethods(arrOfThings) {
    // solve the second test cases with array methods
  }
  evaluate(secondWithArrayMethods, secondTests)



  const thirdTests = [
    { name: 'first', args: [[3, true, false, 3.0, null]], expected: { first: [3, true, false, null], later: [3] } },
    { name: 'second', args: [[3, true, null]], expected: { first: [3, true, null], later: [] } },
    { name: 'third', args: [[null, NaN, NaN, 3, 3]], expected: { first: [null, NaN, 3], later: [NaN, 3] } },
    { name: 'fourth', args: [[4, 4, 4, 4, 4]], expected: { first: [4], later: [4, 4, 4, 4] } },
    { name: 'fifth', args: [[4, 5, null, 5, 3, 4, 5]], expected: { first: [4, 5, null, 3], later: [5, 4, 5] } },
  ]

  function thirdOneWay(arrOfThings) {
    // pass these test cases however you want (but not the same way as below!)
  }
  evaluate(thirdOneWay, thirdTests)

  function thirdAnotherWay(arrOfThings) {
    // pass these test cases however you want (but not the same way as above!)
  }
  evaluate(thirdAnotherWay, thirdTests)

} catch (err) {
  console.log(err);
  document.body.appendChild(
    evaluate.errorSearchComponent('.js file', err)
  );
}
{
  console.groupEnd();
  document.body.appendChild(document.createElement('hr'));
}

