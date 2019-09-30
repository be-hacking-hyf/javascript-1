{
  const pageTitle = 'objects';
  const header = document.createElement("h2");
  header.innerHTML = pageTitle;
  document.body.appendChild(header);
  console.groupCollapsed(pageTitle);
}

function example_comparingObjects() {
  // comment out the incorrect assertions
  let a = { x: 0, y: 1 };
  let b = { x: 0, y: 1 };
  console.assert(a !== b, 'a should not strictly equal b');

  b = a;
  console.assert(a === b, 'a should strictly equal b');

  // it's not about the contents of the array
  // it's about the array the variable points to
}
evaluate(example_comparingObjects);

function example_swappingObjectReferences() {
  let a = { x: 'b' }, b = { x: 'a' }, temp = null;

  // swap the arrays to which each variable points
  temp = a;
  a = b;
  b = temp;

  console.assert(a.x === 'a', 'a.x should store "a"');
  console.assert(b.x === 'b', 'b.x should store "b"');
}
evaluate(example_swappingObjectReferences);

function example_swappingValuesWithDot() {
  let a = { x: 'b' }, b = { x: 'a' }, temp = null;

  // swap the arrays to which each variable points
  temp = a.x;
  a.x = b.x;
  b.x = temp;

  console.assert(a.x === 'a', 'a.x should store "a"');
  console.assert(b.x === 'b', 'b.x should store "b"');
}
evaluate(example_swappingValuesWithDot);

function example_swappingValuesWithBrackets() {
  let a = { x: 'b' }, b = { x: 'a' }, temp = null;

  // swap the arrays to which each variable points
  temp = a['x'];
  a['x'] = b['x'];
  b['x'] = temp;

  console.assert(a['x'] === 'a', "a['x'] should store 'a'");
  console.assert(b['x'] === 'b', "b['x'] should store 'b'");
}
evaluate(example_swappingValuesWithBrackets);

function example_garbageCollectingObjects() {
  // if no variables reference an object, it disappears

  let pointer1 = { x: 'hi!' };
  let pointer2 = pointer1;

  pointer1 = null;
  pointer2 = null;

  // never to come back again
  // this is the only way to truly delete an object
}
evaluate(example_garbageCollectingObjects);


{
  console.groupEnd();
  document.body.appendChild(document.createElement('hr'));
}
