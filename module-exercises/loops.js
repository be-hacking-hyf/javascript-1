// https://javascript.info/while-for
// https://github.com/colevandersWands/loop-refactors

{
  const pageTitle = 'loops';
  const header = document.createElement("h2");
  header.innerHTML = pageTitle;
  document.body.appendChild(header);
  console.groupCollapsed(pageTitle);
}
try {

  function example_whileLoops() {

    // understanding the while loop will help to understand for loops
    // for loops do the same steps in the same order as this while loop
    // the biggest difference between for loops and while loops is scope

    let i = 0; // declare the stepper variable
    while (i < 4) { // check the condition
      console.log(i);
      i++; // increment the stepper
    }

  }
  evaluate(example_whileLoops);

  function example_forVsWhile() {

    // a while loop, for comparison
    let i = 0; // declare the stepper variable
    while (i < 4) { // check the condition
      console.log(i);
      i++; // increment the stepper
    }

    // notice that the arrow points at the for line twice in a row
    // this is because it takes two steps of execution per iteration:
    //  the first time through the loop: declare "i", evaluate "i < 4"
    //  every other iteration: execute "i++", then evaluate "i < 4"
    // remember how "statements" take one step of execution?
    // for loops put two statements on one line of code

    for (let i = 0; i < 4; i++) { // declare & check, check & increment
      console.log(i);
    }

    // for loops do a strange thing, creating two blocks
    // it's a feature to help you avoid certain types of bugs
    // this is useful in more advanced scenarios,
    // but at this point you can just know that it happens
    // you can just ignore the "i" that never changes

  }
  evaluate(example_forVsWhile);



  function example_blockScopeInLoops() {

    // the body of loops create a block scope
    // variables declared inside of them are redeclared with each loop
    // to get values out of a loop, you must modify an external variable


    let whileResult = 0;
    let i = 0;
    while (i < 4) {
      const whileBodyVariable = i * 2;
      whileResult += whileBodyVariable;
      i++;
    }

    let forResult = 0;
    for (let i = 0; i < 4; i++) {
      const forBodyVariable = i * 2;
      forResult += forBodyVariable;
    }

    console.assert(forResult === whileResult, 'both loops should behave the same');

  }
  evaluate(example_blockScopeInLoops);


  /* loop refactors
    refactoring is when you rewrite code to have the same behavior, but different implementation
    the following exercises ask you to refactor between for & while loops
    this type of exercise will help you understand step-by-step how JS loops through code

    feel free to add in as many console.logs or asserts as you need to understand the code

    Some of the exercises below will have pretty complicated expressions, but have no fear
    It is possible to solve these exercises without understanding how each line of code works!
    all you need to do is recognize how loops are structured
    once you understand this, you can refactor any loop no matter how complicated the logic
  */


  function loopRefactor1() {

    let whileResult = 0;
    let i = 0;
    while (i !== 8) {
      whileResult += i;
      i += 2;
    }

    // fix the three pieces of this for loop to pass the assert
    let forResult = 0;
    for (let i = 0; i !== 8; i += 2) {
      forResult += i;
    }

    console.assert(forResult === whileResult, 'both loops should have the same behavior');

  }
  evaluate(loopRefactor1);



  function loopRefactor2() {

    let forResult = 0;
    for (let i = 5; i > -2; i--) {
      forResult = forResult + i;
    }

    // fix the three pieces of this for loop to pass the assert
    let whileResult = 0;
    let i = 5;
    while (i > -2) {
      whileResult = whileResult + i;
      i--;
    }

    console.assert(forResult === whileResult, 'both loops should have the same behavior');

  }
  evaluate(loopRefactor2);


  function loopRefactor1() {

    let whileResult = 0;
    let i = 0;
    while (i !== 8) {
      whileResult += i;
      i += 2;
    }

    // fix the three pieces of this for loop to pass the assert
    let forResult = 0;
    for (let i = 0; i !== 8; i += 2) {
      forResult += i;
    }

    console.assert(forResult === whileResult, 'both loops should have the same behavior');

  }
  evaluate(loopRefactor1);


  function loopRefactor3() {

    let whileResult = .5;
    let x = 9;
    while (x > 2) {
      whileResult *= x;
      x--;
    };

    // refactor the while loop into a for loop
    let forResult = .5;
    for(let x =9; x > 2 ; x--){
      forResult *= x;
    }

    console.assert(forResult === whileResult, 'both loops should have the same behavior');

  }
  evaluate(loopRefactor3);


  function loopRefactor4() {

    let whileResult = true;
    let x = -1;
    while (x < 2) {
      whileResult = whileResult && Boolean(x);
      x++;
    };

    // refactor the while loop into a for loop
    let forResult = true;
    for(let x = -1; x < 2; x++){
      forResult = forResult && Boolean(x);
    }

    console.assert(forResult === whileResult, 'both loops should have the same behavior');

  }
  evaluate(loopRefactor4);


  function loopRefactor5() {

    let forResult = 0;
    for (let i = -3; i === 10 || i < 20; i *= -1.5) {
      forResult = i;
    }

    // refactor the for loop into a while loop
    let whileResult = 0;
    let i = -3;
    while (i === 10 || i < 20){
      whileResult = i;
      i *= -1.5;
    }

    console.assert(forResult === whileResult, 'both loops should have the same behavior');

  }
  evaluate(loopRefactor5);



  function loopRefactor6() {

    let forResult = 0;
    for (let i = 0, j = 10; i !== j; i++ , j--) {
      forResult = i;
    }

    // refactor the for loop into a while loop
    let whileResult = 0;
    let i = 0;
    let j = 10;
    while (i !== j){
      whileResult = i;
      i++;
      j--;
    }

    console.assert(forResult === whileResult, 'both loops should have the same behavior');

  }
  evaluate(loopRefactor6);


  /* pass tests!

    below are test cases and two functions that need to pass them
    you need to either complete the functions or the test cases

  */


  // replace the null's to pass these tests
  const loopTests1 = [
    { name: 'first', args: [], expected: [0, 4, 16, 56] },
  ];

  function while1() {
    const result = [];
    let i = 0;
    while (1 < 26) {
      result.push(i * 2);
      i = i * 3 + 2;
    }
    return result;
  }
  evaluate(while1, loopTests1);

  function for1() {
    const result = [];
    for (let i = 0; i < 26; i = i * 3 + 2) {
      result.push(i * 2);
    }
    return result;
  }
  evaluate(for1, loopTests1);


  // replace the null's to pass these tests
  const loopTests2 = [
    { name: 'first', args: [0], expected: [0] },
    { name: 'second', args: [1], expected: [1, 2] },
    { name: 'third', args: [2], expected: [2, 3, 4] },
    { name: 'fourth', args: [3], expected: [3, 4, 5, 6] },
    { name: 'fifth', args: [4], expected: [4, 5, 6, 7, 8] },
    { name: 'sixth', args: [5], expected: [5, 6, 7, 8, 9, 10] },
  ];

  function while2(input) {
    const result = [];
    let i = input;
    while (null) {
      result.push(i);
      null;
    }
    return result;
  }
  evaluate(while2, loopTests2);

  function for2(input) {
    const result = [];
    for (let i = input; null; null) {
      result.push(i);
    }
    return result;
  }
  evaluate(for2, loopTests2);


  // replace the null's to pass these tests
  const loopTests3 = [
    { name: 'first', args: [0], expected: [] },
    { name: 'second', args: [1], expected: [3] },
    { name: 'third', args: [2], expected: [6, 4] },
    { name: 'fourth', args: [3], expected: [9, 7, 5] },
    { name: 'fifth', args: [4], expected: [12, 10, 8, 6,] },
    { name: 'sixth', args: [5], expected: [15, 13, 11, 9, 7] },
  ];

  function while3(input) {
    const result = [];
    let i = input * 3;
    while (i > input) {
      result.push(i);
      i -= 2;
    }
    return result;
  }
  evaluate(while3, loopTests3);

  function for3(input) {
    const result = [];
    for (let i = input * 3; i > input; i -= 2) {
      result.push(i);
    }
    return result;
  }
  evaluate(for3, loopTests3);


  // write expected values to pass the functions
  const loopTests4 = [
    { name: 'first', args: [0], expected: null },
    { name: 'second', args: [1], expected: null },
    { name: 'third', args: [2], expected: null },
    { name: 'fourth', args: [3], expected: null },
    { name: 'fifth', args: [4], expected: null },
    { name: 'sixth', args: [5], expected: null },
  ];

  function while4(input) {
    const result = [];
    let i = 1;
    while (i < input * 3) {
      result.push(i);
      i += input;
    }
    return result;
  }
  while4.quizzing = true;
  evaluate(while4, loopTests4);

  function for4(input) {
    const result = [];
    for (let i = 1; i < input * 3; i += input) {
      result.push(i);
    }
    return result;
  }
  for4.quizzing = true;
  evaluate(for4, loopTests4);



  // write expected values to pass the functions
  const loopTests5 = [
    { name: 'first', args: [0], expected: null },
    { name: 'second', args: [1], expected: null },
    { name: 'third', args: [2], expected: null },
    { name: 'fourth', args: [3], expected: null },
    { name: 'fifth', args: [4], expected: null },
    { name: 'sixth', args: [5], expected: null },
  ];

  function while5(input) {
    const result = [];
    let i = 6;
    while (i % 6 !== input) {
      result.push(i);
      i--;
    }
    return result;
  }
  while5.quizzing = true;
  evaluate(while5, loopTests5);

  function for5(input) {
    const result = [];
    for (let i = 6; i % 6 !== input; i--) {
      result.push(i);
    }
    return result;
  }
  for5.quizzing = true;
  evaluate(for5, loopTests5);



  // footnotes

  function footnote_incrementingOperators() {

    // the ++ and -- operators are often used in loops
    // but their behavior can be a bit tricky to understand
    // these operators will do two things:
    //  update the variable being incremented
    //  read the value of the variable being incremented
    // once you understand the order of these steps, all becomes clear

    let a = 0;
    const oldA = a++;

    let b = 0;
    const newB = ++b;

    let c = 1;
    const oldC = c--;

    let d = 1;
    const newD = --d;

    // some trickier examples
    let w = 0;
    w = w++;

    let x = 0;
    x = ++x;

    let y = 1;
    y = y--;

    let z = 1;
    z = --z;

  }
  evaluate(footnote_incrementingOperators);


  function footnote_doWhileLoops() {

    // know that these exist, but don't worry about them for now
    // there won't be any exercises about them

    let i = 0;
    do {
      console.log(i);
      i++;
    } while (i < 4);
  }
  evaluate(footnote_doWhileLoops);

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


// https://github.com/colevandersWands/loop-refactors
