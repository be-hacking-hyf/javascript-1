// https://github.com/janke-learning/truthiness

{
  const pageTitle = 'truthiness';
  const header = document.createElement("h2");
  header.innerHTML = pageTitle;
  document.body.appendChild(header);
  console.groupCollapsed(pageTitle);
}


function truthinessIsCoersionToBoolean() {
  const valuesToStudy = [
    true, false, 1, 0, "", " ", NaN, undefined, null
  ];
  valuesToStudy.forEach(value => {
    const type = typeof value;
    const coerced = Boolean(value);
    const coercedType = typeof coerced;
    const truthiness = coerced + 'y';
  })
}
evaluate(truthinessIsCoersionToBoolean);

function truthinessByTestCase(x) {
  const coercedToBool = Boolean(x);
  const truthiness = coercedToBool + 'y';
  return truthiness;
}

const falseyValues = [
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
];
evaluate(truthinessByTestCase, falseyValues);

const truthyValues = [
  { name: 'anything else!', args: ['anything else!'], expected: 'truey' }
];
evaluate(truthinessByTestCase, truthyValues);


// change the expected values from null to true or false
// and come on, try thinking instead of just trying both till it's green!
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

{
  console.groupEnd();
  document.body.appendChild(document.createElement('hr'));
}

