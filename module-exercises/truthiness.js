// https://github.com/janke-learning/truthiness

{
  const pageTitle = 'truthiness';
  const header = document.createElement("h2");
  header.innerHTML = pageTitle;
  document.body.appendChild(header);
  console.groupCollapsed(pageTitle);
}
try {

  function example_truthinessIsCastingToBoolean() {
    const valuesToStudy = [
      true, false, 1, 0, "", " ", NaN, undefined, null,
      "got it?", "add some of your own values to study"
    ];
    valuesToStudy.forEach(value => {
      const type = typeof value;
      const castToBoolean = Boolean(value);
      const newType = typeof castToBoolean;
      const truthiness = castToBoolean + 'y';
    })
  }
  evaluate(example_truthinessIsCastingToBoolean);


  const truthinessTests = [
    // flasey values, everything else is truthy!
    { name: 'false', args: [false], expected: 'falsey' },
    { name: 'null', args: [null], expected: 'falsey' },
    { name: 'undefined', args: [undefined], expected: 'falsey' },
    { name: '""', args: [""], expected: 'falsey' },
    { name: "''", args: [''], expected: 'falsey' },
    { name: '``', args: [``], expected: 'falsey' },
    { name: '0', args: [0], expected: 'falsey' },
    { name: '0.0', args: [0.0], expected: 'falsey' },
    { name: '+0', args: [+0], expected: 'falsey' },
    { name: '-0', args: [-0], expected: 'falsey' },
    { name: 'NaN', args: [NaN], expected: 'falsey' },
    // try it yourself! write some more test cases
    { name: '', args: null, expected: null },
    { name: '', args: null, expected: null },
    { name: '', args: null, expected: null },
    { name: '', args: null, expected: null },
    { name: '', args: null, expected: null },
    { name: '', args: null, expected: null },
  ];
  function truthinessByTestCase(x) {
    const coercedToBool = Boolean(x);
    const truthiness = coercedToBool + 'y';
    return truthiness;
  }
  truthinessByTestCase.quizzing = true;
  evaluate(truthinessByTestCase, truthinessTests);


  // change the expected values from null to true or false
  // and come on. don't just use trial and error, think a bit harder!
  const testsToPass = [
    { name: 'first', args: [0.0], expected: null },
    { name: 'second', args: [null], expected: null },
    { name: 'third', args: ['hacking your future!'], expected: null },
    { name: "fourth", args: [''], expected: null },
    { name: 'fifth', args: ["--<(*)>--"], expected: null },
    { name: 'sixth', args: [undefined], expected: null },
    { name: 'seventh', args: [""], expected: null },
    { name: 'eighth', args: [Symbol('hello')], expected: null },
    { name: 'ninth', args: [``], expected: null },
    { name: 'tenth', args: [true], expected: null },
    { name: 'eleventh', args: [1e3], expected: null },
    { name: 'twelfth', args: [0], expected: null },
    { name: 'thirteenth', args: [Symbol()], expected: null },
    { name: 'fourteenth', args: [-0], expected: null },
    { name: 'fifteenth', args: [NaN], expected: null },
    { name: 'sixteenth', args: [Infinity], expected: null },
    { name: 'seventeenth', args: [Symbol(false)], expected: null },
    { name: 'eighteenth', args: [+0], expected: null },
    { name: 'nineteenth', args: [false], expected: null },
  ];
  Boolean.quizzing = true;
  evaluate(Boolean, testsToPass);
  delete Boolean.quizzing;


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
