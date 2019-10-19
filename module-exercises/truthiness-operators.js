// https://github.com/janke-learning/truthiness/blob/master/operators-of-truthiness.md


{
  const pageTitle = 'truthiness operators';
  const header = document.createElement("h2");
  header.innerHTML = pageTitle;
  document.body.appendChild(header);
  console.groupCollapsed(pageTitle);
}


// careful!  this isn't quite like the 'or' you use in conversation
const orTests = [
  { name: '1, 1', args: [1, 1], expected: 1 },
  { name: '0, 1', args: [0, 1], expected: 1 },
  { name: '1, 0', args: [1, 0], expected: 1 },
  { name: '0, 0', args: [0, 0], expected: 0 },
  { name: 'NaN, "true"', args: [NaN, "true"], expected: "true" },
  { name: '"true", NaN', args: ["true", NaN], expected: "true" },
  { name: 'NaN, NaN', args: [NaN, NaN], expected: NaN },
  // complete these test cases
  { name: '5,0', args: [5,0], expected: 5 },
  { name: '1,0', args: [1,0], expected: 1 },
  { name: '0,-10', args: [0,-10], expected: -10 },
  { name: '"Infinite", NaN', args: ['Infinite', NaN], expected: 'Infinite' },
  { name: '1,1', args: [1,1], expected: 1 },
  { name: '0,1', args: [0,1], expected: 1 },
  { name: '"Infinite",0', args: ["Infinite",0], expected: 'Infinite' },
  { name: '"null",1', args: ["null",1], expected: 'null' },
];
function or(a, b) {
  return a || b;
}
or.quizzing = true;
evaluate(or, orTests);


// careful!  this isn't quite like the 'and' you use in conversation
const andTests = [
  { name: '1, 1', args: [1, 1], expected: 1 },
  { name: '0, 1', args: [0, 1], expected: 0 },
  { name: '1, 0', args: [1, 0], expected: 0 },
  { name: '0, 0', args: [0, 0], expected: 0 },
  { name: 'NaN, "true"', args: [NaN, "true"], expected: NaN },
  { name: '"true", NaN', args: ["true", NaN], expected: NaN },
  { name: 'NaN, NaN', args: [NaN, NaN], expected: NaN },
  // complete these test cases
  { name: 'NaN, 0', args: [NaN, 0], expected: NaN },
  { name: 'NaN, undefined', args: [NaN, undefined], expected: NaN },
  { name: 'Undefined, NaN', args: [undefined, NaN], expected: undefined},
  { name: 'NaN, 0', args: [NaN, 0], expected: NaN },
  { name: '0, NaN', args: [0, NaN], expected: 0 },
  { name: 'NaN, null', args: [NaN, null], expected: NaN },
  { name: 'null, NaN', args: [null, NaN], expected: null },
  { name: 'NaN, "false"', args: [NaN, "true"], expected: NaN },
];
function and(a, b) {
  return a && b;
}
and.quizzing = true;
evaluate(and, andTests);



const notTests = [
  { name: '1', args: [1], expected: false },
  { name: '0', args: [0], expected: true },
  { name: 'NaN', args: [NaN], expected: true },
  { name: '"hi!"', args: ['hi!'], expected: false },
  // complete these test cases
  { name: '2', args: [2], expected: false },
  { name: '-4', args: [-4], expected: false },
  { name: 'NaN', args: [NaN], expected: true },
  { name: 'undefined', args: [undefined], expected: true },
  { name: 'null', args: [null], expected: true },
  { name: '0.3', args: [0.3], expected: false },
  { name: '150', args: [150], expected: false },
  { name: 'How?', args: ['How?'], expected: false },
];
function not(a) {
  return !a;
}
not.quizzing = true;
evaluate(not, notTests);


const ternaryTests = [
  { name: 'true', args: [true, 'true', 'false'], expected: 'true' },
  { name: 'false', args: [false, 'true', 'false'], expected: 'false' },
  { name: 'NaN', args: [NaN, 'first', 'second'], expected: 'second' },
  { name: '"hi!"', args: ['hi!', '?', ':'], expected: '?' },
  { name: '0', args: [0, 'truthy', 'falsey'], expected: 'falsey' },
  // complete these test cases
  { name: 'mert', args: [null, 'mert', 'asena'], expected: 'asena' },
  { name: '?', args: [1, '?','!'], expected: '?' },
  { name: 'minus', args: [-10, 'negative', 'positive' ], expected: 'negative' },
  { name: '3.5', args: [-0, '3.5','null'], expected: 'null' },
  { name: 'hi()', args: ['hi()', 'hello','bye'], expected: 'hello' },
  { name: 'undefined', args: [undefined, 'yes','no'], expected: 'no' },
  { name: '100', args: [100, 'hunderd','none'], expected: 'hunderd' },
  { name: '-0', args: [-0,'zero','null'], expected: 'null' },
];
function ternary(a, b, c) {
  return a ? b : c;
}
ternary.quizzing = true;
evaluate(ternary, ternaryTests);


{
  console.groupEnd();
  document.body.appendChild(document.createElement('hr'));
}
