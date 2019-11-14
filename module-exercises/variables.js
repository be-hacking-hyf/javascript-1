// https://www.youtube.com/watch?v=pHt_tKYUgbo&list=PLzV58Zm8FuBJFfQN5il3ujx6FDAY8Ds3u&index=2
// https://github.com/janke-learning/variable-exercises

{
  const pageTitle = 'variables';
  const header = document.createElement("h2");
  header.innerHTML = pageTitle;
  document.body.appendChild(header);
  console.groupCollapsed(pageTitle);
}
try {

  // this example covers only let & const
  function example_declarationAndAssignment() {

    // declaring a new "let" variable opens a new labeled slot in memory
    // if no value is assigned, the default value is 'undefined'
    let declaredLetWithoutAssignment;

    // setting or resetting the value stored in the slot is "assignment"
    declaredLetWithoutAssignment = 'assigned after declaration';

    // accessing a const/let variable before it is declared will error
    declaredLetWithAssignment; // comment this line to remove the error!

    // you will generally do both declaration and assignment at once
    // notice how this slot is only created when this line is reached?
    let declaredLetWithAssignment = 'assigned at declaration';

    // variables declared with 'let' can have their values reassigned later on
    declaredLetWithoutAssignment = 'new value';
    declaredLetWithAssignment = 'another new value';


    // const variables cannot be declared without an assignment
    const constantVariable = 'forever!';
    // const errorTime; // uncomment this line to throw error!

    // const variables cannot be reassigned later in the program
    constantVariable = 'error time';

  }
  evaluate(example_declarationAndAssignment);


  function example_twoVariableSwap() {

    // swapping the values stored in two variables is a key skill
    // once you get it, it's quite simple
    // if you don't get it, programming will be very confusing
    // so take some time now to understand how variables work
    //  how they store values in memory
    //  that the "=" sign does not work like in math
    //  what happens when one variable is assigned to another
    //  that variable assignments go from right to left
    //  that program memory changes over time
    //  what is written in source code will not be true forever

    let a = 2, b = 1;
    let temp = '';

    temp = a;
    a = b;
    b = temp;

    console.assert(a === 1, 'a should store 1');
    console.assert(b === 2, 'b should store 2');

  }
  evaluate(example_twoVariableSwap);


  /* variable exercises

    the remainder of these exercises are all variations of the swap above
  */

  function threeVariableSwap1() {

    let a = 3, b = 1, c = 2;
    let temp = '';

    // can be done in 4 lines
    temp = a;
    a = b;
    b = c;
    c = temp;

    console.assert(a === 1, "a should store 1");
    console.assert(b === 2, "b should store 2");
    console.assert(c === 3, "c should store 3");
  }
  evaluate(threeVariableSwap1);

  function threeVariableSwap2() {

    let a = 2, b = 3, c = 1;
    let temp = '';

    // can be done in 4 lines
    temp = a;
    a = c;
    c = b;
    b = temp;
    
    console.assert(a === 1, "a should store 1");
    console.assert(b === 2, "b should store 2");
    console.assert(c === 3, "c should store 3");
  }
  evaluate(threeVariableSwap2);

  function fourVariableSwap1() {

    let a = 4, b = 1, c = 2, d = 3;
    let temp = '';

    // can be done in 5 lines
    temp = a;
    a = b;
    b = c;
    c = d;
    d = temp;

    console.assert(a === 1, "a should store 1");
    console.assert(b === 2, "b should store 2");
    console.assert(c === 3, "c should store 3");
    console.assert(d === 4, "d should store 4");
  }
  evaluate(fourVariableSwap1);

  function fourVariableSwap2() {

    let a = "z", b = "y", c = "x", d = "w";
    let temp = '';

    // can be done in 6 lines
    temp = a;
    a = d;
    d = temp;
    temp = b;
    b = c;
    c = temp;

    console.assert(a === "w", "a should store 'w'");
    console.assert(b === "x", "b should store 'x'");
    console.assert(c === "y", "c should store 'y'");
    console.assert(d === "z", "d should store 'z'");
  }
  evaluate(fourVariableSwap2);

  function fiveVariableSwap() {

    let a = "z", b = "y", c = "x", d = "w", e = "v";
    let temp = ' ';

    // can be done in 6 lines
    temp = a;
    a = e;
    e = temp;
    temp = b;
    b = d;
    d = temp;

    console.assert(a === "v", "a should store 'v'");
    console.assert(b === "w", "b should store 'w'");
    console.assert(c === "x", "c should store 'x'");
    console.assert(d === "y", "d should store 'y'");
    console.assert(e === "z", "e should store 'z'");
  }
  evaluate(fiveVariableSwap);


  function example1_multipleAssignments() {

    // it is possible to assign multiple variables on one line
    // these assignments are executed from left to right

    let a = 2, b = 1, temp = '';

    temp = a, a = b, b = temp;

    console.assert(a === 1, 'a should store 1');
    console.assert(b === 2, 'b should store 2');
  }
  evaluate(example1_multipleAssignments);



  function example2_multipleAssignments() {

    // using multiple assignments is largely a style choice
    // if you find it easier to read and understand, go for it!

    let a = 3, b = 1, c = 2, temp = '';

    temp = a, a = b, b = c, c = temp;

    console.assert(a === 1, 'a should store 1');
    console.assert(b === 2, 'b should store 2');
    console.assert(c === 3, 'c should store 3');
  }
  evaluate(example2_multipleAssignments);


  function multipleAssignments1() {

    let a = 3, b = 1, c = 2;
    let temp = '';

    // can be done in 1 line

    temp = a, a = b, b = c, c = temp;
    console.assert(a === 1, "a should store 1");
    console.assert(b === 2, "b should store 2");
    console.assert(c === 3, "c should store 3");
  }
  evaluate(multipleAssignments1);

  function multipleAssignments2() {

    let a = 2, b = 3, c = 1;
    let temp = '';

    // can be done in 1 line
    temp = a, a = c, c = b, b = temp;

    console.assert(a === 1, "a should store 1");
    console.assert(b === 2, "b should store 2");
    console.assert(c === 3, "c should store 3");
  }
  evaluate(multipleAssignments2);

  function multipleAssignments3() {

    let a = 4, b = 1, c = 2, d = 3;
    let temp = '';

    // can be done in 1 line

    temp = a, a = b, b = c, c = d, d = temp;

    console.assert(a === 1, "a should store 1");
    console.assert(b === 2, "b should store 2");
    console.assert(c === 3, "c should store 3");
    console.assert(d === 4, "d should store 4");
  }
  evaluate(multipleAssignments3);

  function multipleAssignments4() {

    let a = "z", b = "y", c = "x", d = "w";
    let temp = '';

    // can be done in 1 line

    temp = a, a = d, d = temp, temp = b, b = c, c = temp;

    console.assert(a === "w", "a should store 'w'");
    console.assert(b === "x", "b should store 'x'");
    console.assert(c === "y", "c should store 'y'");
    console.assert(d === "z", "d should store 'z'");
  }
  evaluate(multipleAssignments4);



  function example_chainedAssignments() {

    // you can assign the same value to multiple variables at once
    // chained assignments are read right to left
    // using chained or single assignments depends on what you understand better

    let a = 2, b1 = b2 = 1;
    let temp = '';

    temp = a;
    a = b1;
    b1 = b2 = temp;

    console.assert(a === 1, 'a should store 1');
    console.assert(b1 === 2, 'b1 should store 2');
    console.assert(b1 === b2, 'b1 should store the same value as b2');
  }
  evaluate(example_chainedAssignments);


  function chainedAssignments1() {

    let a1 = a2 = 2, b = 1;
    let temp = '';

    // can be done in 3 lines or less
    temp = a1;
    a1 = a2 = b;
    b = temp;

    console.assert(a1 === 1, 'a1 should store 1');
    console.assert(a1 === a2, 'a1 should store the same value as a2');
    console.assert(b === 2, 'b should store 2');
  }
  evaluate(chainedAssignments1);



  function chainedAssignments2() {
    let a = 3;
    let b1 = b2 = 1;
    let c1 = c2 = c3 = 2;
    let temp = '';

    // can be done in 4 lines or less
    temp = a;
    a = b1;
    b1 = b2 = c1;
    c1 = c2 = c3 = temp;


    console.assert(a === 1, 'a should store 1');
    console.assert(b1 === 2, 'b1 should store 2');
    console.assert(b1 === b2, 'b1 should store the same as b2');
    console.assert(c1 === 3, 'c1 should store 3');
    console.assert(c1 === c2, 'c1 should store the same as c2');
    console.assert(c2 === c3, 'c2 should store the same as c3');
  }
  evaluate(chainedAssignments2);


  function footnote_var() {

    // in JS you can also declare variables using 'var'
    // 'var' is like 'let' in that variables can be reassigned
    // 'var' variables are different in two main ways
    //    this type of variable is "hoisted"
    //    they have no block scope, only lexical
    // don't worry about "var" or these differences for now
    // just know that this exists since you will find it online
    // always use 'let' and 'const' in your programs to avoid "var" bugs

    var varVariable = 'the slot is created before the declaration is reached (hoisting)';

    varVariable = 'reassignment is possible';

  }
  evaluate(footnote_var);

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
