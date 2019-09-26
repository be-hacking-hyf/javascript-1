{
  const pageTitle = 'behavior exercises';
  const header = document.createElement("h2");
  header.innerHTML = pageTitle;
  document.body.appendChild(header);
  console.groupCollapsed(pageTitle);
}


console.log(`behavior exercises are based on test cases, and test cases are an understandable concept:
- given a question (arguments) what answer (return value) do you expect?

Test cases are a very useful way to think about and talk about functions.  They also allow you to describe your code ... with code!

Writing test cases alongside your functions will help your classmates know what you intended, and will help to know the function does what you think it does

Let's see how we can test a simple function like addition with a series of asserts:
`);

function whatAreTestCases() {

  function addition(a, b) {
    console.log('a:', typeof a, a)
    console.log('b:', typeof b, b)
    const result = a + b;
    return result;
  };

  const args0 = [4, 4], expected0 = 8;
  const returned0 = addition(...args0);
  console.assert(expected0 === returned0, 'first test case');

  const args1 = [-1, 1], expected1 = 0;
  const returned1 = addition(...args1);
  console.assert(expected1 === returned1, 'second test case');

  const args2 = [3, 4], expected2 = 6;
  const returned2 = addition(...args2);
  console.assert(expected2 === returned2, 'third test case');

}
evaluate(whatAreTestCases)

console.log(`But it will a lot of time and space to write all your tests like this!

So instead the evaluate function works with test cases in this format:
`);
console.log({ name: 'a string describing the test case', args: ['an array of arguments'], expected: 'what the function should return' })


console.log(`By writing a few test cases in in this format and passing to evaluate along with the function they test,
evaluate will let us know if our function passes the tests!

(be careful!  sometimes the test case is wrong, not the function ;)
`);

// what the function does
const additionTests = [
  { name: 'first test case', args: [4, 4], expected: 8 },
  { name: 'second test case', args: [3, 4], expected: 6 },
  { name: 'third test case', args: [-1, 1], expected: 0 },
];
// how it does it
function addition(a, b) {
  console.log('a:', typeof a, a)
  console.log('b:', typeof b, b)
  const result = a + b;
  return result;
};
evaluate(addition, additionTests)



console.log(`
the evaluate function is not magic, it just makes things prettier to read and generates the study links.

here's a way for you to test your functions in the console without using the evaluate function
(and to study your code in JS Tutor or the Parsonizer you can always copy paste it directly into the web sites):
`)


console.groupCollapsed('testing strict equality')
{
  const additionTests = [
    { name: 'first test case', args: [4, 4], expected: 8 },
    { name: 'second test case', args: [3, 4], expected: 6 },
    { name: 'third test case', args: [-1, 1], expected: 0 },
  ];

  function addition(a, b) {
    console.log('a:', typeof a, a)
    console.log('b:', typeof b, b)
    const result = a + b;
    return result;
  };

  for (let testCase of additionTests) {

    console.groupCollapsed(testCase.name);
    {
      console.log('args:', testCase.args);

      let returned;
      console.groupCollapsed('console output:');
      {
        returned = addition(...testCase.args);
      }
      console.groupEnd();

      console.log('returned:', typeof returned, returned);
      console.log('expected:', typeof testCase.expected, testCase.expected);
    }
    console.groupEnd();
  }
}
console.groupEnd();


{
  console.groupEnd();
  document.body.appendChild(document.createElement('hr'));
}

