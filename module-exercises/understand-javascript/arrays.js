{
  const pageTitle = 'arrays';
  const header = document.createElement("h2");
  header.innerHTML = pageTitle;
  document.body.appendChild(header);
  console.groupCollapsed(pageTitle);
}

function example_comparingArrays() {
  // comment out the incorrect assertions
  let a = [0, 1];
  let b = [0, 1];
  console.assert(a !== b, 'a should not strictly equal b');

  b = a;
  console.assert(a === b, 'a should strictly equal b');

  // it's not about the contents of the array
  // it's about the array the variable points to
}
evaluate(example_comparingArrays);


function example_swappingArrayReferences() {
  let a = ["b"], b = ["a"], temp = null;

  // swap the arrays to which each variable points
  temp = a;
  a = b;
  b = temp;

  console.assert(a[0] === 'a', 'a[0] should store "a"');
  console.assert(b[0] === 'b', 'b[0] should store "b"');
}
evaluate(example_swappingArrayReferences);

function example_swappingArrayValues() {
  let a = ["b"], b = ["a"], temp = null;

  // swap the arrays to which each variable points
  temp = a[0];
  a[0] = b[0];
  b[0] = temp;

  console.assert(a[0] === 'a', 'a[0] should store "a"');
  console.assert(b[0] === 'b', 'b[0] should store "b"');
}
evaluate(example_swappingArrayValues);

function example_garbageCollectingArrays() {
  // if no variables reference an array, it disappears

  let pointer1 = ['hi!'];
  let pointer2 = pointer1;

  pointer1 = null;
  pointer2 = null;

  // never to come back again
  // this is the only way to truly delete an array
}
evaluate(example_garbageCollectingArrays);


{
  console.groupEnd();
  document.body.appendChild(document.createElement('hr'));
}
