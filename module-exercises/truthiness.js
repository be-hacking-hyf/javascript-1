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
    { name: '""', args: [""], expected: 'falsey' },
    { name: '1', args: ['1'], expected: 'truey' },
    { name: 'NaN', args: [NaN], expected: 'falsey' },
    { name: '"serhat', args: ['serhat'], expected: 'truey' },
    { name: '0', args: [0], expected: 'falsey' },
    { name: 'null', args: [null], expected: 'falsey' },
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
    { name: 'first', args: [0.0], expected: false },
    { name: 'second', args: [null], expected: false },
    { name: 'third', args: ['hacking your future!'], expected: true },
    { name: "fourth", args: [''], expected: false },
    { name: 'fifth', args: ["--<(*)>--"], expected: true },
    { name: 'sixth', args: [undefined], expected: false },
    { name: 'seventh', args: [""], expected: false },
    { name: 'eighth', args: [Symbol('hello')], expected: true },
    { name: 'ninth', args: [``], expected: false },
    { name: 'tenth', args: [true], expected: true },
    { name: 'eleventh', args: [1e3], expected: true },
    { name: 'twelfth', args: [0], expected: false },
    { name: 'thirteenth', args: [Symbol()], expected: true },
    { name: 'fourteenth', args: [-0], expected: false },
    { name: 'fifteenth', args: [NaN], expected: false },
    { name: 'sixteenth', args: [Infinity], expected: true },
    { name: 'seventeenth', args: [Symbol(false)], expected: true },
    { name: 'eighteenth', args: [+0], expected: false },
    { name: 'nineteenth', args: [false], expected: false },
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
