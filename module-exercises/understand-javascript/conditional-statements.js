{
  const pageTitle = 'conditional statements';
  const header = document.createElement("h2");
  header.innerHTML = pageTitle;
  document.body.appendChild(header);
  console.groupCollapsed(pageTitle);
}


function example_conditionalExecution() {
  // conditional statements execute different lines of code
  // which line of code is determined by the 'truthiness' of a value
  // each possible path is in what's called a 'block'
  const valuesToStudy = [
    true, false, 1, 0, "", " ", NaN, undefined, null,
    "got it?", "add some of your own values to study"
  ];
  valuesToStudy.forEach(value => {
    const truthiness = Boolean(value) + 'y';
    let path;
    if (value) {
      path = 'if';
    } else {
      path = 'else'
    }
  })
}
evaluate(example_conditionalExecution);


function example_ifElseIfElse() {
  // you can have more than one path using 'else if' statements
  // there are three 'blocks', or 3 paths in this snippet
  const valuesToStudy = [
    true, false, 1, 0, "", " ", NaN, undefined, null,
    "got it?", "add some of your own values to study"
  ];
  valuesToStudy.forEach(value => {
    const type = typeof value;
    const truthiness = Boolean(value) + 'y';
    let path;
    if (typeof value === 'string') {
      path = 'if';
    } else if (value) {
      path = 'else if';
    } else {
      path = 'else';
    }
  })
}
evaluate(example_ifElseIfElse);



function example_unreachableCode() {

  // when writing conditionals, beware of unreachable code!
  // it's possible to write blocks that can never be executed
  // while this won't break your code, it will make it much harder to understand
  const valuesToStudy = [
    true, false, 1, 0, "", " ", NaN, undefined, null,
    "got it?", "add some of your own values to study"
  ];
  valuesToStudy.forEach(value => {
    const type = typeof value;
    const truthiness = Boolean(value) + 'y';
    let path;
    if (typeof value === 'string') {
      path = 'if';
    } else if (typeof value !== 'string') {
      path = 'else if';
    } else {
      path = 'unreachable!';
    }
  });
  // this example is pretty basic because the conditions are simple
  // the more complicated the conditions, the harder to spot unreachable blocks

}
evaluate(example_unreachableCode);

// complete the args array to pass each test case
const writeTestCases1 = [
  { name: 'if 1', args: ['5', 5], expected: 'if' },
  { name: 'if 2', args: null, expected: 'if' },
  { name: 'if 3', args: null, expected: 'if' },
  { name: 'if 4', args: null, expected: 'if' },
  { name: 'if 5', args: null, expected: 'if' },
  { name: 'else 1', args: [true, 0], expected: 'else' },
  { name: 'else 2', args: null, expected: 'else' },
  { name: 'else 3', args: null, expected: 'else' },
  { name: 'else 4', args: null, expected: 'else' },
  { name: 'else 5', args: null, expected: 'else' },
];
function functionToPass1(a, b) {
  if (Number(a) === b) {
    return 'if';
  } else {
    return 'else';
  }
}
functionToPass1.quizzing = true;
evaluate(functionToPass1, writeTestCases1);

// complete the args array to pass each test case
const writeTestCases2 = [
  { name: 'if  1', args: ['happy', 'day'], expected: 'if' },
  { name: 'if  2', args: null, expected: 'if' },
  { name: 'if  3', args: null, expected: 'if' },
  { name: 'if  4', args: null, expected: 'if' },
  { name: 'if  5', args: null, expected: 'if' },
  { name: 'else if  1', args: [1, ''], expected: 'else if' },
  { name: 'else if  2', args: null, expected: 'else if' },
  { name: 'else if  3', args: null, expected: 'else if' },
  { name: 'else if  4', args: null, expected: 'else if' },
  { name: 'else if  5', args: null, expected: 'else if' },
  { name: 'else  1', args: [true, 1], expected: 'else' },
  { name: 'else  2', args: null, expected: 'else' },
  { name: 'else  3', args: null, expected: 'else' },
  { name: 'else  4', args: null, expected: 'else' },
  { name: 'else  5', args: null, expected: 'else' },
];
function functionToPass2(a, b) {
  if (typeof a === typeof b) {
    return 'if';
  } else if (Boolean(a) !== Boolean(b)) {
    return 'else if';
  } else {
    return 'else';
  }
}
functionToPass2.quizzing = true;
evaluate(functionToPass2, writeTestCases2);



const testsToPass1 = [
  { name: 'if 1', args: [true, 9], expected: 'if' },
  { name: 'if 2', args: [true, 'hello'], expected: 'if' },
  { name: 'if 3', args: [undefined, null], expected: 'if' },
  { name: 'if 4', args: ['', 0], expected: 'if' },
  { name: 'if 5', args: ['false', 'NaN'], expected: 'if' },
  { name: 'else 1', args: [true, ''], expected: 'else' },
  { name: 'else 2', args: [100, NaN], expected: 'else' },
  { name: 'else 3', args: ['true', false], expected: 'else' },
  { name: 'else 4', args: [true, false], expected: 'else' },
  { name: 'else 5', args: [0, '0'], expected: 'else' },
];
// careful of unreachable blocks! are any of yours unreachable?
function passTests1(a, b) {
  // write an if/else conditional statement to pass these tests
  // you can pass the tests using only
  //  primitive values
  //  Number, String, Boolean, void
  //  typeof, ===, !==
}
passTests1.quizzing = true;
evaluate(passTests1, testsToPass1);


const testsToPass2 = [
  { name: 'if  1', args: [9, 9], expected: 'if' },
  { name: 'if  2', args: [true, true], expected: 'if' },
  { name: 'if  3', args: [undefined, undefined], expected: 'if' },
  { name: 'if  4', args: ["hi!", 'hi!'], expected: 'if' },
  { name: 'if  5', args: [1000.0, 1000], expected: 'if' },
  { name: 'else if  1', args: ['3', '4'], expected: 'else if' },
  { name: 'else if  2', args: ['hello', NaN], expected: 'else if' },
  { name: 'else if  3', args: [4, 5], expected: 'else if' },
  { name: 'else if  4', args: ['true', 'false'], expected: 'else if' },
  { name: 'else if  5', args: [NaN, NaN], expected: 'else if' },
  { name: 'else  1', args: [5, '5'], expected: 'else' },
  { name: 'else  2', args: ['1000', 1000], expected: 'else' },
  { name: 'else  3', args: ['0', 0], expected: 'else' },
  { name: 'else  4', args: [true, 1], expected: 'else' },
  { name: 'else  5', args: [false, '0'], expected: 'else' },
];
// careful of unreachable blocks! are any of yours unreachable?
function passTests2(a, b) {
  // write an if/elseif/else conditional statement to pass these tests
  // you can pass the tests using only
  //  primitive values
  //  Number, String, Boolean, void
  //  typeof, ===, !==
}
evaluate(passTests2, testsToPass2);





{
  console.groupEnd();
  document.body.appendChild(document.createElement('hr'));
}

