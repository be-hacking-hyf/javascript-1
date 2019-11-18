// https://en.hexlet.io/courses/intro_to_programming/lessons/expressions/theory_unit
// https://dev.to/promhize/javascript-in-depth-all-you-need-to-know-about-expressions-statements-and-expression-statements-5k2


{
  const pageTitle = 'statements vs. expressions';
  const header = document.createElement("h2");
  header.innerHTML = pageTitle;
  document.body.appendChild(header);
  console.groupCollapsed(pageTitle);
}
try {

  /* statements vs expressions:

    Most simply:
      1. if something takes one step in python tutor, it's a statement.
      2. If it changes or creates a value in memory, it's an expression.
      3. A line of code can be both a statement and an expression
      (semicolons can also be a helpful indicator, one semicolon per statement)

    ternaries operators & conditional statements are good for getting a first basic understanding
    understanding statements vs. expressions in depth is beyond JavaScript 1
  */


  function example_ternaryVsConditional() {

    const a = true;
    const b = false;

    // 3 steps (statements) to assign the value
    let byConditional;
    if (a || b) {
      byConditional = 'truthy';
    } else {
      byConditional = 'falsey';
    }

    // 1 step (statement) to assign the value
    const byTernary = a || b ? 'truthy' : 'falsey';

  }
  evaluate(example_ternaryVsConditional);



  /*
    A statement and an expression can have the same BEHAVIOR but different IMPLEMENTATION
      both the functions below will pass the same tests
      one assigns the value to a variable in one step using a ternary expression
      the other assigns the value to a variable in 3 steps using a conditional statement

    at this point in your programming life, use whichever strategy is easiest to read and understand
  */

  const sharedTests = [
    { name: 'first', args: [0, 1], expected: 'truthy' },
    { name: 'second', args: [false, false], expected: 'falsey' },
    { name: 'third', args: [" ", " "], expected: 'truthy' },
    { name: 'fourth', args: [0, ""], expected: 'falsey' },
    { name: 'fifth', args: [" ", 1], expected: 'truthy' },
    // write a few more tests
    { name: 'sixth', args: [NaN, true], expected: "truthy" },
    { name: 'seventh', args: [1,0], expected: "truthy" },
    { name: 'eighth', args: [NaN,NaN], expected: "falsey" },
    { name: 'ninth', args: ["",''], expected: "falsey" },
    { name: 'tenth', args: [false,false], expected:"falsey" },
  ];

  function ternaryExpression(a, b) {
    const result = a || b ? 'truthy' : 'falsey';
    return result;
  }
  ternaryExpression.quizzing = true;
  evaluate(ternaryExpression, sharedTests);

  function conditionalStatement(a, b) {
    let result;
    if (a || b) {
      result = 'truthy';
    } else {
      result = 'falsey';
    }
    return result;
  }
  conditionalStatement.quizzing = true;
  evaluate(conditionalStatement, sharedTests);


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

