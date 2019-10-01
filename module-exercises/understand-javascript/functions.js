
{
  const pageTitle = 'tracing functions';
  const header = document.createElement("h2");
  header.innerHTML = pageTitle;
  document.body.appendChild(header);
  console.groupCollapsed(pageTitle);
}


/* tracing function execution
  tracing function execution is 100% necessary to becoming a confident programmer

  once you get the hang of it it's not really so hard,
  but if you don't set aside the time to practice tracing functions you will have a lot of trouble later on

  for more info check out:
    https://github.com/janke-learning/function-exercises/blob/master/tracing-functions.md
*/


function example_functionDeclaration() {

  // declaring a function makes it exist in memory
  // but does not execute the code inside

  function declaredAndUnused() {
    const variable = 'this is never executed';
  }

}
evaluate(example_functionDeclaration);


function example_functionCalling() {

  // calling a function will open a new frame in memory
  // variables declared in the function are not available outside the frame
  // the lines of code written in the function body will be executed in order

  function declaredAndUsed() {
    const variable = 'stuck in this frame';
  }
  declaredAndUsed();

  // functions can be called as may times as you like
  declaredAndUsed();
  declaredAndUsed();
  declaredAndUsed();

}
evaluate(example_functionCalling);


function example_arguments() {

  // functions can be declared with parameters
  // parameters are variables that don't exist until function execution

  // functions can take arguments when the are called
  // the values passed as arguments will be assigned to the function parameters

  function takesTwoArguments(param1, param2) {
    const variable = param2 + param1;
  }
  takesTwoArguments(3, 4);
  takesTwoArguments('4', '3');
  takesTwoArguments(true, true);

}
evaluate(example_arguments);

function example_returnValues() {

  // parameters and local variables are not available outside of a function frame
  // but functions can return values to the global frame

  function returnsAValue(param) {
    return param + param;
  }

  returnsAValue(1);

  // but the return value is lost if you don't store it in a variable
  const returnValueFor2 = returnsAValue(2);
  const returnValueFor10 = returnsAValue(10);

}
evaluate(example_returnValues);

function example_howToTraceFunctions() {

  function simpleFunction(param1, param2) {
    // simpleFunction takes two parameters

    // the body of the function performs some logic on the parameters
    const result = param2 + param1;

    // and returns the result so it is available at global scope
    return result;
  }

  // variables declared outside of the function can be used as arguments
  // the values in these variables will be assigned to the function parameters
  const arg1 = '3', arg2 = 3;

  // the return value can be captured in global scope using a variable
  const result1 = simpleFunction(arg1, arg2);

  // values can also be passed directly into function calls
  const result2 = simpleFunction(2, 1);

  // functions can be called as many times as you like
  // with whatever values you want
  const result3 = simpleFunction(null, undefined);
  const result4 = simpleFunction(true, false);
  const result5 = simpleFunction(' friend', 'hello');
  const result6 = simpleFunction(1, 1);

}
evaluate(example_howToTraceFunctions);


function example_completedTracingExercise() {

  function f(param1, param2, param3) {
    var result = param2 + param3 + param1;
    return result;
  };

  // set values in the args to pass the assert
  let arg1 = "x", arg2 = "z", arg3 = "y";
  let returnVal = f(arg1, arg2, arg3);
  console.assert(returnVal === "zyx", "returnVal should be 'zyx'");

  arg1 = "x", arg2 = "y", arg3 = "z";
  returnVal = f(arg1, arg2, arg3);
  console.assert(returnVal === "yzx", "returnVal should be 'yzx'");

}
evaluate(example_completedTracingExercise);


function tracing1() {

  function f(param1, param2, param3) {
    var result = param3 + param1 + param2;
    return result;
  };

  // set values in the args to pass the assert
  let arg1 = "", arg2 = "", arg3 = "";
  let returnval = f(arg1, arg2, arg3);
  console.assert(returnval === "zyx", "1 a");

  arg1 = "", arg2 = "", arg3 = "";
  returnval = f(arg1, arg2, arg3);
  console.assert(returnval === "yzx", "1 b");

}
evaluate(tracing1);


function tracing2() {

  function f(param1, param2, param3) {
    var result = param3 + param1 + param2;
    return result;
  };

  // set values in the args to pass the assert
  let arg1 = "", arg2 = "", arg3 = "";
  let returnVal = f(arg1, arg3, arg2);
  console.assert(returnVal === "yxz", "returnVal should be yxz");

  arg1 = "", arg2 = "", arg3 = "";
  returnVal = f(arg2, arg1, arg3);
  console.log(returnVal === "zxy", "returnVal should be zxy");

}
evaluate(tracing2);


function tracing3() {

  function f(param1, param2, param3) {
    let temp = param2;
    param2 = param1;
    param1 = temp;
    var result = param3 + param1 + param2;
    return result;
  };

  // set values in the args to pass the assert
  let arg1 = "", arg2 = "", arg3 = "";
  let returnVal = f(arg1, arg2, arg3);
  console.assert(returnVal === "yxz", "returnVal should be yxz");


  arg1 = "", arg2 = "", arg3 = "";
  returnVal = f(arg3, arg2, arg1);
  console.assert(returnVal === "zyx", "returnVal should be zyx");

}
evaluate(tracing3);

function tracing4() {

  function f(param1, param2, param3) {
    var result = param3 + param1 + param2;
    return result;
  };

  // pass x, y and z to the function in the right order
  // don't change their values!
  let x = "x", y = "y", z = "z";
  let returnVal = f();
  console.assert(returnVal === "yxz", "returnVal should be yxz");

  x = "x", y = "z", z = "y";
  returnVal = f();
  console.assert(returnVal === "zyx", "returnVal should be zyx");

}
evaluate(tracing4);


function tracing5() {

  function f(param1, param2, param3) {
    var result = param2 + param1 + param3;
    return result;
  };

  // pass x, y and z to the function in the right order
  // don't change their values!
  let x = "x", y = "y", z = "z";
  let returnVal = f();
  console.assert(returnVal === "xzy", "returnVal should be xzy");

  x = "y", y = "x", z = "z";
  returnVal = f();
  console.assert(returnVal === "zyx", "returnVal should be zyx");

}
evaluate(tracing5);


function tracing6() {

  // concatinate the params to pass the tests
  function f(param1, param2, param3) {
    const result = null;
    return result;
  };

  let arg1 = "z", arg2 = "y", arg3 = "x";
  let returnVal = f(arg1, arg2, arg3);
  console.assert(returnVal === "xzy", "returnVal should be xzy");

  arg1 = "z", arg2 = "x", arg3 = "y";
  returnVal = f(arg3, arg2, arg1);
  console.assert(returnVal === "zyx", "returnVal should be zyx");

}
evaluate(tracing6);


function tracing7() {

  // concatinate the params to pass the tests
  function f(param1, param2, param3) {
    const result = null;
    return result;
  };

  let arg1 = "z", arg2 = "y", arg3 = "x";
  let returnVal = f(arg1, arg2, arg3);
  console.assert(returnVal === "yxz", "returnVal should be yxz");

  arg1 = "x", arg2 = "z", arg3 = "y";
  returnVal = f(arg3, arg1, arg2);
  console.assert(returnVal === "xzy", "returnVal should be xzy");

}
evaluate(tracing7);


function tracing8() {

  // arrange the parameters to pass the asserts
  function f() {
    var result = param2 + param1 + param3;
    return result;
  };

  let arg1 = "z", arg2 = "y", arg3 = "x";
  let returnVal = f(arg1, arg2, arg3);
  console.assert(returnVal === "yxz", "returnVal should be yxz");

  arg1 = "x", arg2 = "z", arg3 = "y";
  returnVal = f(arg3, arg1, arg2);
  console.assert(returnVal === "xzy", "returnVal should be xzy");

}
evaluate(tracing8);


function tracing9() {

  // arrange the parameters to pass the asserts
  function f() {
    var result = param1 + param2 + param3;
    return result;
  };

  let arg1 = "y", arg2 = "z", arg3 = "x";
  let returnVal = f(arg1, arg2, arg3);
  console.assert(returnVal === "xyz", "returnVal should be xyz");

  arg1 = "z", arg2 = "x", arg3 = "y";
  returnVal = f(arg3, arg1, arg2);
  console.assert(returnVal === "xyz", "returnVal should be xyz");

}
evaluate(tracing9);


function tracing10() {

  // do what needs to be done!
  function f() {  // <--
    var result = param3 + param1 + param2 + param4;
    return result;
  };

  let arg1 = "", arg2 = "", arg3 = "", arg4 = ""; // <--
  let returnVal = f(arg1, arg2, arg3, arg4);
  console.assert(returnVal === "xyzw", "returnVal should be xyzw");

  arg1 = "z", arg2 = "w", arg3 = "y", arg4 = "x";
  returnVal = f(arg3, arg1, arg4, arg2);
  console.assert(returnVal === "", "returnVal should be ?"); // <--

  arg1 = "z", arg2 = "w", arg3 = "y", arg4 = "x";
  returnVal = f();                                   // <--
  console.assert(returnVal === "zywx", "returnVal should be zywx");

}
evaluate(tracing10);


// looking for more? https://github.com/janke-learning/function-exercises/blob/master/turtle-shuffle.md


{
  console.groupEnd();
  document.body.appendChild(document.createElement('hr'));
}

