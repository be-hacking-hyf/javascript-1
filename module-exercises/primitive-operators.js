{
  const pageTitle = 'primitive operators';
  const header = document.createElement("h2");
  header.innerHTML = pageTitle;
  document.body.appendChild(header);
  console.groupCollapsed(pageTitle);
}

/* these exercises are a stub

  the most important thing to learn here is that while JS operators are weird
  they also follow rules that can be understood when you put in a little time
  as long as you understand the concept of changing between types
  learning the rest of the JS operators is just memorizing a lot of rules

  as long as you avoid using '==' and always use '==='
  and as long as you always cast values to numbers before doing math
  you should be fine

  because JS is such a messy language, discipline and good practice are key

  to learn more about JS operators, check out these links:
    https://javascript.info/operators
    https://javascript.info/comparison
    https://github.com/janke-learning/test-cases
    https://github.com/janke-learning/implicit-coercion
*/

const plusTests = [
  { name: 'string, number', args: ['e', 1], expected: 'e1' },
  { name: 'string, null', args: ['e', null], expected: 'enull' },
  { name: 'string, undefined', args: ['e', undefined], expected: 'eundefined' },
  { name: 'string, boolean', args: ['e', false], expected: 'efalse' },
  { name: 'number, number', args: [1, -1], expected: 0 },
  { name: 'number, boolean', args: [1, true], expected: 2 },
  { name: 'number, null', args: [1, null], expected: 1 },
  { name: 'number, undefined', args: [1, undefined], expected: NaN },
  { name: 'NaN, "anything else"', args: [NaN, "anything else"], expected: 'NaNanything else'}, //the test code was shown in orange color, that is why I had to change it
  // fill in the rest of these test cases
  { name: 'string,number', args: ['akbel',29], expected: 'akbel29' },
  { name: 'string, NaN', args: ['name',NaN], expected: 'nameNaN' },
  { name: 'number,boolean', args: [30,false], expected: 30},
  { name: 'boolean,boolean', args: [true,false], expected: 1},
  { name: 'null,boolean', args: [null,true], expected: 1},
  { name: 'NaN,number', args: [NaN,20], expected: NaN },
  { name: 'undefined,number', args: [undefined,20], expected: NaN },
  { name: 'null,null', args: [null,null], expected: 0 },
];
function plus(a, b) {
  return a + b;
}
evaluate(plus, plusTests);

/*
  the function below will pass all the tests as the function above
  the + operator can be correctly understood as a set of type-based rules
  this is true for all JS operators
  but studying them each in depth is beyond the scope of these exercises

  this function replicates '+' for primitive types only
  things get much stranger when you try adding non-primitives
*/
function plusReplication(x, y) {
  if (typeof x === "string" || typeof y === "string") {
    var xCoerced = String(x);
    var yCoerced = String(y);
  } else {
    var xCoerced = Number(x);
    var yCoerced = Number(y);
  }

  return xCoerced + yCoerced;
}
evaluate(plusReplication, plusTests);

/* stay tuned for more */


{
  console.groupEnd();
  document.body.appendChild(document.createElement('hr'));
}
