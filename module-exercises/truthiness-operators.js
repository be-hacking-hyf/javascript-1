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
  { name: '2, 2', args: [2, 2], expected: 2 },
  { name: '0, 2', args: [0, 2], expected: 2 },
  { name: 'NaN, "1"', args: [NaN, "1"], expected: "1" }, //I tried to [Nan, false], but I could not find a correct answer
  { name: '1, NaN', args: [1, NaN], expected: 1 },
  { name: '1, "false"', args: [1, "false"], expected: 1},
  { name: '1, "true"', args: [1, "true"], expected: 1},
  { name: '"true","true"', args: ["true", "true"], expected: "true" },
  { name: '"false", "false"', args: ["false", "false"], expected: "false" },
];

try {


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
  { name: 'true, 2', args: [true,2], expected: 2 },
  { name: '"true", null', args: ["true",null], expected: null}, //i tried "true" with 1 and 2 but I could not get a correct answer
  { name: 'NaN, 1', args: [NaN, 1], expected: NaN},
  { name: 'NaN, "1"', args: [NaN, "1"], expected: NaN },
  { name: '"false",1', args: ["false",1], expected: 1 }, //i expect it to be false
  { name: 'true,0', args: [true,0], expected: 0 },
  { name: '"true",0', args: ["true",0], expected: 0 },
  { name: '"false",0', args: ["false",0], expected: 0 },
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
  { name: 'null', args: [null], expected: true },
  { name: '2', args: [2], expected: false },
  { name: 'true', args: [true], expected: false },
  { name: '"true"', args: ["true"], expected: false },
  { name: 'false', args: [false], expected: true},
  { name: '"false"', args: ["false"], expected: false }, // as I understand "false","true","astring" or whatever in a "" is a string.Doesn't matter what is written inside.
  { name: '"aString"', args: ["aString"], expected: false },
  { name: '"numberZero"', args: ["numberZero"], expected: false},
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
  { name: '1', args: [1,'true', 'false'], expected: 'true' },
  { name: 'undefined', args: ['undefined',1,2], expected: 1 },
  { name: 'null', args: [null,true,false], expected: false },
  { name: '0', args: ['0','yes','no'], expected: 'yes'},
  { name: 'wow', args: ['wow','ja','nee'], expected: 'ja'},
  { name: '"wow"', args: ['wow',1,2], expected: 1 },
  { name: 'NaN', args: ['NaN',1,2], expected: 1 },
  { name: '0', args: ['0',1,2], expected: 1 },
];
function ternary(a, b, c) {
  return a ? b : c;
}
ternary.quizzing = true;
evaluate(ternary, ternaryTests);

}
catch (err) {
  console.log(err);
  document.body.appendChild(
    evaluate.errorSearchComponent('.js file', err)
  );
}
{
  console.groupEnd();
  document.body.appendChild(document.createElement('hr'));
}
