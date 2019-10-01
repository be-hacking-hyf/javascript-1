// https://www.youtube.com/watch?v=9O-PCTfT6Rs&list=PLzV58Zm8FuBJFfQN5il3ujx6FDAY8Ds3u&index=3

{
  const pageTitle = 'block scope';
  const header = document.createElement("h2");
  header.innerHTML = pageTitle;
  document.body.appendChild(header);
  console.groupCollapsed(pageTitle);
}

// this page of exercises ignores 'var', hopefully you're never using it anyway ;)

function example_curlyBracesCreateANewBlock() {

  // curly braces create a block scope
  // variables declared in the block are not available outside

  const outside = 'hello from outside!';
  outside; // nothing has changed about how global variables work
  {
    outside; // variables from outside the block are availabe inside

    // as before, variables are not available before they're declared
    inside; // the name will appear in memory but is not usable. "temporal dead zone"
    const inside = 'hello from the block!';
    inside; // using this variable here throws no errors
  }
  inside; // using variables outside their block scope will error
  outside; // this variable is still available, not problems

}
evaluate(example_curlyBracesCreateANewBlock);

function example_innerVariablesOverrideOuterOnes() {
  const aString = 'outer value';
  console.assert(aString === 'outer value', 'aString should be "outer value"');
  {
    // this is not reassigning a constant variable
    // it is declaring a new one in block scope
    const aString = 'inner value';
    console.assert(aString === 'inner value', 'aString should be "inner value"');
  }
  console.assert(aString === 'outer value', 'aString should be "outer value"');

}
evaluate(example_innerVariablesOverrideOuterOnes);


function blockScopeExercise1() {
  ; // write this line
  console.assert(a === 'hi!', 'a should be "hi!"');
  {
    ; // write this line
    console.assert(a === 'hola!', 'a should be "hola!"');
  }
  console.assert(a === 'hi!', 'a should be "hi!"');
}
evaluate(blockScopeExercise1);

function blockScopeExercise2() {
  ; // write this line
  console.assert(a === 'hi!', 'a should be "hi!"');
  {
    ; // write this line
    console.assert(b === 'hola!', 'b should be "hola!"');
    console.assert(a === 'hi!', 'a should be "hi!"');
  }
  console.assert(a === 'hi!', 'a should be "hi!"');
}
evaluate(blockScopeExercise2);

function blockScopeExercise3() {
  ; // write this line
  console.assert(a === 'hi!', 'a should be "hi!"');
  {
    ; // write this line
    console.assert(b === 'hola!', 'b should be "hola!"');
    console.assert(a === 'hi!', 'a should be "hi!"');
  }
  ; // write this line
  console.assert(b === 'hola!', 'b should be "hola!"');
  console.assert(a === 'hi!', 'a should be "hi!"');
}
evaluate(blockScopeExercise3);

function blockScopeExercise4() {
  ; // write this line
  console.assert(x === 'null', 'x should be "null!"');
  {
    const a = 5;
    const b = 4;
    ; // write this line
    console.assert(x === 20, 'x should be 20');
  }
  console.assert(x === 20, 'x should be 20');
}
evaluate(blockScopeExercise4);

function blockScopeExercise5() {
  ; // write this line
  console.assert(x === 'null', 'x should be "null!"');
  {
    const a = false;
    const b = true;
    ; // write this line
    console.assert(x === 20, 'x should be true');
  }
  console.assert(x === 20, 'x should be true');
}
evaluate(blockScopeExercise5);

{
  console.groupEnd();
  document.body.appendChild(document.createElement('hr'));
}
