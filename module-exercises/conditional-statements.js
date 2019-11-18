// https://www.youtube.com/watch?v=9O-PCTfT6Rs&list=PLzV58Zm8FuBJFfQN5il3ujx6FDAY8Ds3u&index=3

{
  const pageTitle = 'conditional statements';
  const header = document.createElement("h2");
  header.innerHTML = pageTitle;
  document.body.appendChild(header);
  console.groupCollapsed(pageTitle);
}
try {

  function example_conditionalExecution() {
    // conditional statements execute different lines of code
    // which line of code is determined by the 'truthiness' of a value
    // each possible path is in what's called a 'block'
    const valuesToStudy = [
      true, false, 1, 0, "", " ", NaN, undefined, null,
      "got it?", "add some of your own values to study"
    ];
    valuesToStudy.forEach(value => {
      const truthiness = Boolean(value) + 'y';
      let path;
      if (value) {
        path = 'if';
      } else {
        path = 'else'
      }
      return path;
    })
  }
  evaluate(example_conditionalExecution);


  function example_ifElseIfElse() {
    // you can have more than one path using 'else if' statements
    // there are three 'blocks', or 3 paths in this snippet
    const valuesToStudy = [
      true, false, 1, 0, "", " ", NaN, undefined, null,
      "got it?", "add some of your own values to study"
    ];
    valuesToStudy.forEach(value => {
      const type = typeof value;
      const truthiness = Boolean(value) + 'y';
      let path;
      if (typeof value === 'string') {
        path = 'if';
      } else if (value) {
        path = 'else if';
      } else {
        path = 'else';
      }
      return path;
    })
  }
  evaluate(example_ifElseIfElse);



  function example_unreachableCode() {

    // when writing conditionals, beware of unreachable code!
    // it's possible to conditional blocks that can never be executed
    // while this won't break your code, it will make it much harder to understand
    const valuesToStudy = [
      true, false, 1, 0, "", " ", NaN, undefined, null,
      "got it?", "add some of your own values to study"
    ];
    valuesToStudy.forEach(value => {
      const type = typeof value;
      const truthiness = Boolean(value) + 'y';
      let path;
      if (typeof value === 'string') {
        path = 'if';
      } else if (typeof value !== 'string') {
        path = 'else if';
      } else {
        path = 'unreachable!';
      }
      return path;
    });
    // this example is pretty basic because the conditions are simple
    // the more complicated the conditions, the harder to spot unreachable blocks

  }
  evaluate(example_unreachableCode);

  // complete the args array to pass each test case
  const conditionalTestCases1 = [
    { name: 'if 1', args: ['5', 5], expected: 'if' },
    { name: 'if 2', args: ['0',0], expected: 'if' },
    { name: 'if 3', args: ['',0], expected: 'if' },
    { name: 'if 4', args: [5, 5], expected: 'if' },
    { name: 'if 5', args: ['2', 2], expected: 'if' },
    { name: 'else 1', args: [true, 0], expected: 'else' },
    { name: 'else 2', args: [1, 0], expected: 'else' },
    { name: 'else 3', args: ['9','ll'], expected: 'else' },
    { name: 'else 4', args: ['9',0], expected: 'else' },
    { name: 'else 5', args: [9, 7], expected: 'else' },
  ];
  function conditionalToPass1(a, b) {
    if (Number(a) === b) {
      return 'if';
    } else {
      return 'else';
    }
  }
  conditionalToPass1.quizzing = true;
  evaluate(conditionalToPass1, conditionalTestCases1);

  // complete the args array to pass each test case
  const conditionalTestCases2 = [
    { name: 'if  1', args: ['happy', 'day'], expected: 'if' },
    { name: 'if  2', args: ['true','false'], expected: 'if' },
    { name: 'if  3', args: [false, true], expected: 'if' },
    { name: 'if  4', args: [null,null], expected: 'if' },
    { name: 'if  5', args: [0,1], expected: 'if' },
    { name: 'else if  1', args: [1, ''], expected: 'else if' },
    { name: 'else if  2', args: [false, 1], expected: 'else if' },
    { name: 'else if  3', args: ['true',false], expected: 'else if' },
    { name: 'else if  4', args: ["1",0], expected: 'else if' },
    { name: 'else if  5', args: [true,0], expected: 'else if' },
    { name: 'else  1', args: [true, 1], expected: 'else' },
    { name: 'else  2', args: [null,0], expected: 'else' },
    { name: 'else  3', args: ["1",1], expected: 'else' },
    { name: 'else  4', args: ['',NaN], expected: 'else' },
    { name: 'else  5', args: [false,0], expected: 'else' },
  ];
  function conditionalToPass2(a, b) {
    if (typeof a === typeof b) {
      return 'if';
    } else if (Boolean(a) !== Boolean(b)) {
      return 'else if';
    } else {
      return 'else';
    }
  }
  conditionalToPass2.quizzing = true;
  evaluate(conditionalToPass2, conditionalTestCases2);



  const testsToPass1 = [
    { name: 'if 1', args: [true, 9], expected: 'if' },
    { name: 'if 2', args: [true, 'hello'], expected: 'if' },
    { name: 'if 3', args: [undefined, null], expected: 'if' },
    { name: 'if 4', args: ['', 0], expected: 'if' },
    { name: 'if 5', args: ['false', 'NaN'], expected: 'if' },
    { name: 'else 1', args: [true, ''], expected: 'else' },
    { name: 'else 2', args: [100, NaN], expected: 'else' },
    { name: 'else 3', args: ['true', false], expected: 'else' },
    { name: 'else 4', args: [true, false], expected: 'else' },
    { name: 'else 5', args: [0, '0'], expected: 'else' },
  ];
  // careful of unreachable blocks! are any of yours unreachable?
  function passTests1(a, b) {
    if (Boolean(a) === Boolean(b)) {
      return 'if';
    }else {
      return 'else';
    }// conditional an if/else conditional statement to pass these tests
    // you can pass the tests using only
    //  primitive values
    //  Number, String, Boolean
    //  typeof, ===, !==
  }
  passTests1.quizzing = true;
  evaluate(passTests1, testsToPass1);


  const testsToPass2 = [
    { name: 'if  1', args: [9, 9], expected: 'if' },
    { name: 'if  2', args: [true, true], expected: 'if' },
    { name: 'if  3', args: [undefined, undefined], expected: 'if' },
    { name: 'if  4', args: ["hi!", 'hi!'], expected: 'if' },
    { name: 'if  5', args: [1000.0, 1000], expected: 'if' },
    { name: 'else if  1', args: ['3', '4'], expected: 'else if' },
    { name: 'else if  2', args: ['hello', NaN], expected: 'else if' },
    { name: 'else if  3', args: [4, 5], expected: 'else if' },
    { name: 'else if  4', args: ['true', 'false'], expected: 'else if' },
    { name: 'else if  5', args: [NaN, NaN], expected: 'else if' },
    { name: 'else  1', args: [5, '5'], expected: 'else' },
    { name: 'else  2', args: ['1000', 1000], expected: 'else' },
    { name: 'else  3', args: ['0', 0], expected: 'else' },
    { name: 'else  4', args: [true, 1], expected: 'else' },
    { name: 'else  5', args: [false, '0'], expected: 'else' },
  ];
  // careful of unreachable blocks! are any of yours unreachable?
  function passTests2(a, b) {
    if ( a === b ) {
      return 'if';
    } else if ( Number(a) !== Number(b)){
      return 'else if';
    } else {
      return 'else';
    }// conditional an if/elseif/else conditional statement to pass these tests
    // you can pass the tests using only
    //  primitive values
    //  Number, String, Boolean
    //  typeof, ===, !==
  }
  evaluate(passTests2, testsToPass2);


  function example_blockScopeInConditionals() {

    // variables declared in a conditional block
    // stay in the conditional block

    // variables declared outside, are available inside

    // values can be removed from blocks using let variables

    const valuestoStudy = [true, false, 1, 0, NaN, "hi!", "", undefined, null];

    valuestoStudy.forEach(value => {
      const truthiness = Boolean(value) + 'y';
      let path = 'path: ';
      if (value) {
        const ifBlock = ' if';
        path = path + ifBlock;
      } else {
        const elseBlock = ' else';
        path = path + elseBlock;
      }
      console.log(value, path);
    })

  }
  evaluate(example_blockScopeInConditionals);


  const conditionalTests1 = [
    // write test cases to pass this function
    { name: 'first', args: [true,true], expected: true },
    { name: 'second', args: [1,1], expected: true },
    { name: 'third', args: ["2",1], expected: false },
    { name: 'fourth', args: [true,0], expected: true  },
    { name: 'fifth', args: [NaN,NaN], expected: false },
    { name: 'sixth', args: ["1", 1], expected: false },
    { name: 'seventh', args: ["",""], expected: false },
    { name: 'eighth', args: [false, true], expected: true },
    { name: 'ninth', args: [1, 2], expected: true },
    { name: 'tenth', args: ["r", true], expected: false },
  ];
  function conditionalFunction1(a, b) {
    let result = null;
    if (a && b) {
      result = typeof a === typeof b;
    } else if (!a && !b) {
      result = typeof a !== typeof b;
    } else {
      result = a ? a : b;
    }
    return result;
  }
  conditionalFunction1.quizzing = true;
  evaluate(conditionalFunction1, conditionalTests1);


  const conditionalTests2 = [
    // write test cases to pass this function
    { name: 'first', args: [1,1], expected: 1 },
    { name: 'second', args: [true,false], expected: true },
    { name: 'third', args: [true, 1], expected: false },
    { name: 'fourth', args: [true, 0], expected: false },
    { name: 'fifth', args: [2, 1], expected: 1 },
    { name: 'sixth', args: [false,true], expected: true },
    { name: 'seventh', args: [1, true], expected: false },
    { name: 'eighth', args: ["otur","kalk"], expected: "kalk"},
    { name: 'ninth', args: ["oreo","peanut"], expected: "peanut" },
    { name: 'tenth', args: ["str", 1], expected: null },
  ];
  function conditionalFunction2(a, b) {
    let result = null;
    if (typeof a === typeof b) {
      result = b || a;
    } else if (typeof a === 'boolean') {
      result = b === Boolean(a);
    } else if (typeof b === 'boolean') {
      result = a === Boolean(b);
    }
    return result;
  }
  conditionalFunction2.quizzing = true;
  evaluate(conditionalFunction2, conditionalTests2);


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

