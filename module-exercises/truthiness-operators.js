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
  { name: '0,1', args: [0,1], expected: 1 },
  { name: 'null,null', args: [null,null], expected: null },
  { name: 'true,null', args: [true,null], expected: true },
  { name: 'null,true', args: [null,true], expected: true },
  { name: 'true,false', args: [true,false], expected: true },
  { name: 'false,true', args: [false,true], expected: true },
  { name: 'false,false', args: [false,false], expected: false },
  { name: 'NaN,false', args: [NaN,false], expected: false },
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
  { name: 'null,null', args: [null,null], expected: null },
  { name: '-0,+0', args: [-0,+0], expected: 0 },
  { name: '-1,1', args: [-1,1], expected: 1 },
  { name: '1,-1', args: [1,-1], expected: -1 },
  { name: 'false,false', args: [false,false], expected: false },
  { name: 'true,false', args: [true,false], expected: false },
  { name: 'false,true', args: [false,true], expected: false },
  { name: 'null,true', args: [null,true], expected: null },
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
  { name: null, args: null, expected: false },
  { name: null, args: null, expected: null },
  { name: null, args: null, expected: null },
  { name: null, args: null, expected: null },
  { name: null, args: null, expected: null },
  { name: null, args: null, expected: null },
  { name: null, args: null, expected: null },
  { name: null, args: null, expected: null },
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
  { name: null, args: null, expected: null },
  { name: null, args: null, expected: null },
  { name: null, args: null, expected: null },
  { name: null, args: null, expected: null },
  { name: null, args: null, expected: null },
  { name: null, args: null, expected: null },
  { name: null, args: null, expected: null },
  { name: null, args: null, expected: null },
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
