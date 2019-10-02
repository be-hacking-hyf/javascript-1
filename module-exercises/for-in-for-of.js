// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in
// https://alligator.io/js/for-of-for-in-loops/

{
  const pageTitle = 'for in, for of';
  const header = document.createElement("h2");
  header.innerHTML = pageTitle;
  document.body.appendChild(header);
  console.groupCollapsed(pageTitle);
}

/* for...in and for...of

  JavaScript has some very convenient syntax for looping over arrays and objects
  (and even strings!)

*/

function example_forInArray() {

  const arr = ['a', 'b', 'c', 'd'];
  console.log(arr);

  for (let index in arr) {
    console.log(index);
  }

}
evaluate(example_forInArray);

function example_forInString() {

  const str = 'abcd';
  console.log(str);

  for (let index in str) {
    console.log(index);
  }

}
evaluate(example_forInString);

function example_forInObject() {

  const obj = { a: 0, b: 1, c: 2, d: 3 };
  console.log(obj);

  for (let key in obj) {
    console.log(key);
  }

}
evaluate(example_forInObject);



function example_forOfArray() {

  const arr = ['a', 'b', 'c', 'd'];
  console.log(arr);

  for (let value of arr) {
    console.log(value);
  }

}
evaluate(example_forOfArray);

function example_forOfString() {

  const str = 'abcd';
  console.log(str);

  for (let letter of str) {
    console.log(letter);
  }

}
evaluate(example_forOfString);

function example_forOfObject() {

  // you cannot for...of an object, they're not "iterable"
  // but what does "iterable" mean?
  // it means objects don't have an "order" to their items

  // strings and arrays have a first, second, third, ... entry
  // objects have keys, but no 'first' or 'second' entry.
  // order doesn't matter in an object!

  const obj = { a: 0, b: 1, c: 2, d: 3 };
  console.log(obj);

  for (let value of obj) {
    console.log(value);
  }

}
evaluate(example_forOfObject);


/* exercises coming soon */


{
  console.groupEnd();
  document.body.appendChild(document.createElement('hr'));
}

