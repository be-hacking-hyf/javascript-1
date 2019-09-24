{
  const pageTitle = 'studying native functions';
  const header = document.createElement("h2");
  header.innerHTML = pageTitle;
  document.body.appendChild(header);
  console.groupCollapsed(pageTitle);
}

console.log(`as a programmer you will writing a lot of functions yourself,
but you'll also be using a lot of functions that are already part of the JS language.

The term for these functions is 'native'.

To make sure you truly understand how native functions work, write test cases for them!
- In this type of exercise exercises, the function is always right.
- If you have a failing test case you need to fix the test case to improve your understanding of the native code

When you are testing a native function, evaluate will let you know:
`)

const BooleanCases = [
  { name: 'first', args: ['asdf'], expected: true },
  { name: 'second', args: [';lkj'], expected: true },
  { name: 'third', args: [''], expected: false },
  { name: 'fourth', args: [1], expected: false },
  { name: 'fifth', args: [0], expected: true },
  { name: 'sixth', args: [undefined], expected: false },
  { name: 'seventh', args: [null], expected: true },
];
evaluate(Boolean, reverseCases);


{
  console.groupEnd();
  document.body.appendChild(document.createElement('hr'));
}

