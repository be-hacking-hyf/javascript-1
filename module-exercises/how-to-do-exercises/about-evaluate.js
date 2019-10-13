{
  const pageTitle = 'about evaluate()';
  const header = document.createElement("h2");
  header.innerHTML = pageTitle;
  document.body.appendChild(header);
  console.groupCollapsed(pageTitle);
}
try {

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
