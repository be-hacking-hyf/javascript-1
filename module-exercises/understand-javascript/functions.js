
{
  const pageTitle = 'tracing functions';
  const header = document.createElement("h2");
  header.innerHTML = pageTitle;
  document.body.appendChild(header);
  console.groupCollapsed(pageTitle);
}



function exampleTracingFunctions() {

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
evaluate(exampleTracingFunctions);


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

