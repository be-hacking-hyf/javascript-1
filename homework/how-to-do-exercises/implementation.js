{
  const pageTitle = 'implementation exercises';
  const header = document.createElement("h2");
  header.innerHTML = pageTitle;
  document.body.appendChild(header);
  console.groupCollapsed(pageTitle);
}

console.log(`Implemention exercises are based on asserting, asserting simply means predicting.

console.assert is a method that allows you to make and check predictions about values in your program,

- if your prediction is correct (the first argument is truthy), nothing will print in the console
- if your prediction is incorrect (the first argument is truthy), there will be a nasty red log in the console output

for more info on console.assert: https://developer.mozilla.org/en-US/docs/Web/API/Console/assert


the evaluate function helps you understand your function's implementation in a bit more detail by logging and color-coding all asserts, including passing ones

In Implementation exercises you will have to pass console.assert statements by either:
1. writing code that passes existing console.asserts
2. writing console.asserts to predict what the code will do
3. both!

let's see some examples:
`)

function asserting() {
  console.assert(false, 'this assert will show up in console output');
  console.assert(true, 'this assert will not show up in console output');

  console.assert(1 === 1, 'this assert will not show up');
  console.assert(1 === 0, 'this assert will also show up');

}
evaluate(asserting)

function writeCodeForAsserts() {
  const a = null; // fix this line of code!
  console.assert(a === 5, 'variable a should store the number 5');

  const b = null; // fix this line of code!
  console.assert(b === '5', 'variable b should store the string 5');
}
evaluate(writeCodeForAsserts);

function writeAssertsForCode() {
  const a = 5 + '5';
  console.assert(a === null, 'variable a should store ___');// replace null with your guess!

  const b = '5' + '5';
  console.assert(b === null, 'variable b should store ___');// replace null with your guess!
}
evaluate(writeAssertsForCode);

function passAndWriteAsserts() {
  const a = null; // fix this line of code!
  console.assert(a === 5, 'variable a should store the number 5');

  const b = null; // fix this line of code!
  console.assert(b === '5', 'variable b should store the string 5');

  const c = a + b;
  console.assert(c === null, 'variable c should store ____'); // complete the assert!
}
evaluate(passAndWriteAsserts);


console.log(`
the evaluate function is not magic, it just makes things prettier to read and generates the study links.

here's a simple way for you to check your work in the console without using the evaluate function,
(to study your code in JS Tutor or the Parsonizer you can always copy paste it directly into the web sites):
`)


console.groupCollapsed(passAndWriteAsserts.name + ': implementation');
{
  passAndWriteAsserts();
}
console.groupEnd();




{
  console.groupEnd();
  document.body.appendChild(document.createElement('hr'));
}
