{
  const pageTitle = 'primitive operators';
  const header = document.createElement("h2");
  header.innerHTML = pageTitle;
  document.body.appendChild(header);
  console.groupCollapsed(pageTitle);
}
try {

  /*

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
    { name: 'NaN, anything else', args: [NaN, 'anything else!'], expected: NaN },
    // fill in the rest of these test cases
    { name: null, args: null, expected: null },
    { name: null, args: null, expected: null },
    { name: null, args: null, expected: null },
    { name: null, args: null, expected: null },
    { name: null, args: null, expected: null },
    { name: null, args: null, expected: null },
    { name: null, args: null, expected: null },
    { name: null, args: null, expected: null },
  ];
  function plus(a, b) {
    return a + b;
  }
  plus.quizzing = true;
  evaluate(plus, plusTests);

  /*
    the function below will pass all the tests as the function above
    the + operator can be correctly understood as a series of type-based rules
    this is true for all JS operators, you'll study more operators in the next exercises

    this function replicates '+' for primitive types only
    things get much stranger when you try adding non-primitives
      ie. anything that isn't null, undefined, a number, boolean or string
  */
  function plusReplication(x, y) {
    if (typeof x === "string" || typeof y === "string") {
      var xCoerced = String(x);
      var yCoerced = String(y);
    } else {
      var xCoerced = Number(x);
      var yCoerced = Number(y);
    }

    const added = xCoerced + yCoerced;

    return added;
  }
  plusReplication.quizzing = true;
  evaluate(plusReplication, plusTests);



  const looseEqualityTests = [
    { name: 'null, undefined', args: [null, undefined], expected: true },
    { name: 'undefined, null', args: [undefined, null], expected: true },
    { name: 'null, null', args: [null, null], expected: true },
    { name: 'undefined, undefined', args: [undefined, undefined], expected: true },
    { name: 'null, "anything else"', args: [null, "anything else"], expected: false },
    { name: 'undefined, "anything else"', args: [undefined, "anything else"], expected: false },
    { name: 'true, false', args: [true, false], expected: false },
    { name: 'false, false', args: [false, false], expected: true },
    { name: '3, 3', args: [3, 3], expected: true },
    { name: '3.0, 3', args: [3.0, 3], expected: true },
    { name: '+0, -0', args: [+0, -0], expected: true },
    { name: '"\t", "\t"', args: ["\t", '\t'], expected: true },
    { name: '-3, +3', args: [-3, +3], expected: false },
    { name: '3, "3"', args: [3, "3"], expected: true },
    { name: '"3", 3', args: ["3", 3], expected: true },
    { name: '"3", "3"', args: ["3", "3"], expected: true },
    { name: 'true, 1', args: [true, 1], expected: true },
    { name: 'false, 0', args: [false, 0], expected: true },
    { name: 'false, ""', args: [false, ""], expected: true },
    { name: '0, ""', args: [0, ""], expected: true },
    { name: '"e", true', args: ["e", true], expected: false },
    { name: 'undefined, ""', args: [undefined, ""], expected: false },
    // fill in the rest of these test cases
    { name: null, args: null, expected: null },
    { name: null, args: null, expected: null },
    { name: null, args: null, expected: null },
    { name: null, args: null, expected: null },
    { name: null, args: null, expected: null },
    { name: null, args: null, expected: null },
    { name: null, args: null, expected: null },
    { name: null, args: null, expected: null },
  ];

  function looseEquality(a, b) {
    return a == b;
  }
  looseEquality.quizzing = true;
  evaluate(looseEquality, looseEqualityTests);

  /*
    the function below will pass all the tests as the function above
    the '==' operator can be correctly understood as a series of type-based rules
    this is true for all JS operators, you'll study more operators in the next exercises

    this function replicates '==' for primitive types only
    things get much stranger when you try adding non-primitives
      ie. anything that isn't null, undefined, a number, boolean or string
  */
  function looseEqualityReplication(a, b) {
    let result;
    if (a === null || a === undefined) {
      result = b === null || b === undefined;
    } else if (typeof a === typeof b) {
      result = a === b;
    } else {
      const castA = Number(a);
      const castB = Number(b);
      result = castA === castB;
    };
    return result;
  }
  looseEqualityReplication.quizzing = true;
  evaluate(looseEqualityReplication, looseEqualityTests);



  const multiplicationTests = [
    { name: 'true, 0', args: [true, 0], expected: 0 },
    { name: 'true, 1', args: [true, 1], expected: 1 },
    { name: 'false, 0', args: [false, 0], expected: 0 },
    { name: 'false, 1', args: [false, 1], expected: 0 },
    // finish these test cases
    { name: null, args: null, expected: null },
    { name: null, args: null, expected: null },
    { name: null, args: null, expected: null },
    { name: null, args: null, expected: null },
    { name: null, args: null, expected: null },
    { name: null, args: null, expected: null },
  ];

  function multiplication(a, b) {
    return a * b;
  }
  multiplication.quizzing = true;
  evaluate(multiplication, multiplicationTests)

  function multiplicationReplication(a, b) {
    const numberA = Number(a);
    const numberB = Number(b);
    const multiplied = numberA * numberB;
    return multiplied;
  }
  multiplicationReplication.quizzing = true;
  evaluate(multiplicationReplication, multiplicationTests);


  const moduloTests = [
    { name: 'true, 0', args: [true, 0], expected: NaN },
    { name: 'true, 1', args: [true, 1], expected: 0 },
    { name: 'false, 0', args: [false, 0], expected: NaN },
    { name: 'false, 1', args: [false, 1], expected: 0 },
    { name: '"3", "12', args: ["3", "12"], expected: 3 },
    { name: '3, 12', args: [3, 12], expected: 3 },
    { name: '"15", "12', args: ["3", "12"], expected: 3 },
    { name: '15, 12', args: [3, 12], expected: 3 },
    // finish these test cases
    { name: null, args: null, expected: null },
    { name: null, args: null, expected: null },
    { name: null, args: null, expected: null },
    { name: null, args: null, expected: null },
    { name: null, args: null, expected: null },
    { name: null, args: null, expected: null },
  ];

  function modulo(a, b) {
    return a % b;
  }
  modulo.quizzing = true;
  evaluate(modulo, moduloTests)

  function moduloReplication(a, b) {
    const numberA = Number(a);
    const numberB = Number(b);
    const moduloed = numberA % numberB;
    return moduloed;
  }
  moduloReplication.quizzing = true;
  evaluate(moduloReplication, moduloTests);


  const unaryMinusTests = [
    { name: 'true', args: [true], expected: -1 },
    { name: 'false', args: [false], expected: -0 },
    { name: '"3"', args: ["3"], expected: -3 },
    { name: '12', args: [12], expected: -12 },
    { name: 'undefined', args: [undefined], expected: NaN },
    { name: 'null', args: [null], expected: -0 },
    // finish these test cases
    { name: null, args: null, expected: null },
    { name: null, args: null, expected: null },
    { name: null, args: null, expected: null },
    { name: null, args: null, expected: null },
    { name: null, args: null, expected: null },
    { name: null, args: null, expected: null },
  ]

  function unaryMinus(a) {
    return -a;
  }
  unaryMinus.quizzing = true;
  evaluate(unaryMinus, unaryMinusTests);

  function unaryMinusReplication(a) {
    const numberA = Number(a);
    const minusA = numberA * -1;
    return minusA;
  }
  unaryMinusReplication.quizzing = true;
  evaluate(unaryMinusReplication, unaryMinusTests);


  const notNotTests = [
    { name: null, args: [], expected: null },
    { name: null, args: [], expected: null },
    { name: null, args: [], expected: null },
    { name: null, args: [], expected: null },
    { name: null, args: [], expected: null },
    { name: null, args: [], expected: null },
    { name: null, args: [], expected: null },
    { name: null, args: [], expected: null },
    { name: null, args: [], expected: null },
    { name: null, args: [], expected: null },
    { name: null, args: [], expected: null },
  ];

  function notNot(a) {
    return !!a;
  }
  notNot.quizzing = true;
  evaluate(notNot, notNotTests);

  function notNotReplication(a) {
    const booleanA = Boolean(a);
    const notBooleanA = !booleanA;
    const notNotBooleanA = !notBooleanA;
    return notNotBooleanA;
  }
  notNotReplication.quizzing = true;
  evaluate(notNotReplication, notNotTests);


  /*
  les for implicit coercion:

      If both operands are numbers, perform a numeric comparison.
      If both operands are strings, compare the character codes for each. sort of like alphabetical order.
      If one operand is a number, convert the other operand to a number and perform a numeric comparison.
      careful of NaN and values that convert to NaN.

  {*/
  const greaterThanTests = [
    { name: null, args: [], expected: null },
    { name: null, args: [], expected: null },
    { name: null, args: [], expected: null },
    { name: null, args: [], expected: null },
    { name: null, args: [], expected: null },
    { name: null, args: [], expected: null },
    { name: null, args: [], expected: null },
    { name: null, args: [], expected: null },
    { name: null, args: [], expected: null },
    { name: null, args: [], expected: null },
    { name: null, args: [], expected: null },
  ];

  function greaterThan(a, b) {
    return a > b;
  }
  greaterThan.quizzing = true;
  evaluate(greaterThan, greaterThanTests);

  function greaterThanReplication(a, b) {
    let result;
    if (typeof a === 'string' && typeof b === 'string') {
      const charCodeA = a.charCodeAt();
      const charCodeB = b.charCodeAt();
      result = charCodeA > charCodeB;
    } else {
      const numberA = Number(a);
      const numberB = Number(b);
      result = numberA > numberB;
    }
    return result;
  }
  greaterThanReplication.quizzing = true;
  evaluate(greaterThanReplication, greaterThanTests);




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
