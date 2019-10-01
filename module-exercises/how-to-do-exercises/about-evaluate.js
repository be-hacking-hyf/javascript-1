{
  const pageTitle = 'about evaluate()';
  const header = document.createElement("h2");
  header.innerHTML = pageTitle;
  document.body.appendChild(header);
  console.groupCollapsed(pageTitle);
}

console.groupCollapsed('evalute\'s arguments');
{
  console.log(`The evaluate function takes one required and one optional argument:
1. a function (required)
2. an array of test cases (optional)

If either argument is the wrong type, evaluate will log and return an error
`);

  evaluate();
  evaluate('1: not a function!');
  evaluate('2: not a function!', '2: not an array!');
  evaluate(function validFuncInvalidTests() { }, '3: not an array!');
  evaluate('4: not a function!', []);
}
console.groupEnd();


console.groupCollapsed('evalute\'s return value');
{
  console.log(`The evaluate function will return either
- a report on your function's behavior and implementation (if no errors)
- or an error

you can inspect the return value if you're looking for a challenge,
but you can find the same information  (except for console output!) in a more friendly format logged to the console
`);

  console.groupCollapsed('invalid arguments');
  {
    console.log('no arguments return value:', evaluate());
    console.log('invalid arguments return value:', evaluate('2: not a function!', '2: not an array!'));
  }
  console.groupEnd();

  console.groupCollapsed('implementation exercises');
  {
    function passImp() {
      console.assert(true, 'yay!')
    }
    const passImpReturned = evaluate(passImp)
    console.log('passing implementation return value:', passImpReturned);

    function failImp() {
      console.assert(false, 'huh?')
    }
    const failImpReturned = evaluate(failImp);
    console.log('failing implementation return value:', failImpReturned);
  }
  console.groupEnd();

  console.groupCollapsed('behavior exercises');
  {
    const passBehaveReturned = evaluate(
      function passTest() { },
      [{ name: 'pass test', args: [], expected: undefined }]
    )
    console.log('passing behavior return value:', passBehaveReturned);

    const failBehaveReturned = evaluate(
      function failTest() { },
      [{ name: 'fail test', args: [], expected: false }]
    )
    console.log('failing behavior return value:', failBehaveReturned);
  }
  console.groupEnd();

  console.groupCollapsed('mixed exercises');
  {
    const passingMixedReturned = evaluate(
      function passMix() { console.assert(true, 'yay!') },
      [{ name: 'pass test', args: [], expected: undefined }]
    )
    console.log('passing mixed return value:', passingMixedReturned);

    const failingMixedReturned = evaluate(
      function failMix() {
        console.assert(false, 'huh?')
      },
      [{ name: 'fail test', args: [], expected: false }]
    )
    console.log('failing mixed return value:', failingMixedReturned);
  }
  console.groupEnd();
}
console.groupEnd();


console.groupCollapsed('live study links');
{
  console.log(`along with a helpful console log, the evaluate function will automatically generate live links.
These links are designed to help you get the most out of studying each and every exercise:

- Implementation: exercises without test cases will automatically generate a link to JS Tutor with the code you submitted for evaluation

- Behavior: exercises with test cases will have links that open to Parsonizer so you can reconstruct the logic without worring about errors
`)

  function studyMeInJSTutor() {
    let a = 'b', b = 'a', temp = ' ';

    temp = a;
    b = a;
    b = temp;

    console.assert(a === 'a', 'variable a should store string a');
    console.assert(b === 'b', 'variable b should store string b');
  }
  evaluate(studyMeInJSTutor);

  const reverseCases = [
    { name: 'first reverse', args: ['asdf'], expected: 'fdsa' },
    { name: 'second reverse', args: ['jkl;'], expected: '; lkj' },
  ]
  function studyMeInParsonizer(str) {
    const arrayed = str.split('');
    const reversed = arrayed.reverse();
    const reStringed = reversed.join('');
    return reStringed;
  };
  evaluate(studyMeInParsonizer, reverseCases)
}
console.groupEnd();

console.groupCollapsed('errors');
{
  console.log(`if one of your functions throws an error, evaluate will let you know by turning red

to find the code that threw an error (directly in devtools!) expand the console output,
and click on the top or bottom line of the error readout

you an also find the code in your editor using the file name and line number in the logs
`);

  function throwsAnError() {
    throw new Error('find me with your debugger');
  }
  evaluate(throwsAnError);
}
console.groupEnd();


console.groupCollapsed('console.log');
{
  console.log(`all of the console output for your function will be collapsed under the asserts, errors & test results

this is on purpose, to help train you into using asserts and test cases to understand and debug your code.

Asserts and tests are more challenging to use because of how unforgiving they are. But will help you become a stronger programmer much faster by forcing you to PREDICT what will happen before you run your code
rather than just reading what did happen
`);

  function onlyLogs() {
    let result = 0;
    for (let i = 0; i < 8; i += 2) {
      result = i + result;
      console.log(i);
    }
    console.log(result);
  }
  evaluate(onlyLogs);

  function logsAndAsserts() {
    let result = 0;
    for (let i = 0; i < 8; i += 2) {
      result = i + result;
      console.log(i);
    }
    console.assert(result === 7, 'result is not 7, its:', result);
  }
  evaluate(logsAndAsserts);
}
console.groupEnd();


{
  console.groupEnd();
  document.body.appendChild(document.createElement('hr'));
}
