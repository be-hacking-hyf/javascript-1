
// https://github.com/janke-learning/error-exercises

{
  const pageTitle = 'errors and program life cycle';
  const header = document.createElement("h2");
  header.innerHTML = pageTitle;
  document.body.appendChild(header);
  console.groupCollapsed(pageTitle);
}
try {

  /* make the errors go away!

  at the beginning it will be very difficult to recognize errors in your code before they show up
  and after years of programming it still will be!

  you aren't expected to learn every error and learn to always avoid them
  what you should learn from these exercises is how to
  - find the line of code that threw the error from the console
  - click the links in the console to find code in your debugger (callstack and log links)
  - duckduck search your error messages to find out what they mean
  - recognize when in program execution an error occured

  In these exercises there are both syntax and sematic errors:
  - the syntax errors will all appear before anything renders
  and will stop the page from evaluating your code.
  - the semantic errors won't stop the code from starting
  but will stop it part way through execution
  - for more info: https://github.com/janke-learning/errors-and-life-cycle


  gotcha!  different browsers will print different messages for the same errors

  -----

  for runtime errors the evaluate function will generate a search link for you,
  but it's not always perfect!  you know more about the code than evaluate does
  if a search is not helpful try adding more information about the code you're studying

  when you find the solutions for these errors
  comment out the erroring code instead of replacing it
  this way you can come back later to study the errors and solutions
  */


  // --- syntax errors ---
  // these are detected at creation phase and will stop the page from loading

  function missingVariableName() {
    const a = null;
  }
  evaluate(missingVariableName);

  function missingInConst() {
    const x;
  }
  evaluate(missingInConst)

  function unexpectedToken1() {
    const a = 1;
  }
  evaluate(unexpectedToken1);

  function unexpectedToken2() {
    const x = 3;
  }
  evaluate(unexpectedToken2);

  function unexpectedToken3() {
    let a = { b: 3 };
    let b = a[b];
  }
  evaluate(unexpectedToken3);

  function unexpectedToken4() {
    const str = "he told me 'run!' the horse arrives!";
  }
  evaluate(unexpectedToken4);

  function missingAfterElement1() {
    const myArray = [1, 2, 3];
  }
  evaluate(missingAfterElement1)

  function missingAfterElement1() {
    const myArray = [1, 2, 3];
  }
  evaluate(missingAfterElement1)

  function missingBeforeformal() {
    function getNine() {
      const x = 6, y = 3;
      return x + y;
    }
  }
  evaluate(missingBeforeformal);

  function unEscapedLineBreak() {
    const a = 'this is two lines';
  }
  evaluate(unEscapedLineBreak);


  // --- semantic errors ---
  // these are detected at runtime and will throw an error after the page has loaded

  function invalidAssignment() {
    const x = 1;
    x++;
  }
  evaluate(invalidAssignment);

  function notAFunction1() {
    const x = 1;
    x();
  }
  evaluate(notAFunction1);

  function notAFunction2() {
    let array = [];
    array.length()
  }
  evaluate(notAFunction2);

  function isUndefined() {
    const x = undefined;
    x.e;
  }
  evaluate(isUndefined);

  function isNotDefined() {
    const x = { b: 'e' };
    const y = b.e;
  }
  evaluate(isNotDefined)

  function xIsNull() {
    const x = null;
    x.e;
  }
  evaluate(xIsNull);

  function bracketIsUndefined() {
    const myArray = [
      [1, 2, 3]
      [4, 5, 6]
      [7, 8, 9]
    ];
  }
  evaluate(bracketIsUndefined);


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

