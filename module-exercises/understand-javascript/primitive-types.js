// function typeExercise1() {
//   const firstVariable = null;
//   const secondVariable = null;

//   console.assert(typeof firstVariable === 'string',
//     'first variable should be a string');
//   console.assert(typeof secondVariable === 'string',
//     'second variable should be a string');
//   console.assert(firstVariable !== secondVariable,
//     'both variables should not store the same string');
// }
// evaluate(typeExercise1);

// https://github.com/janke-learning/primitive-types

{
  const pageTitle = 'primitive types';
  const header = document.createElement("h2");
  header.innerHTML = pageTitle;
  document.body.appendChild(header);
  console.groupCollapsed(pageTitle);
}


// all primitives
const typeofTests = [
  { name: 'NaN', args: [NaN], expected: null },
  { name: 'NaN', args: [NaN], expected: null },
]
function typeofWrapper(x) {
  const typeofX = typeof x;
  return typeofX;
}
typeofWrapper.quizzing = true;
evaluate(typeofWrapper, typeofTests);


const castToStringTests = [
  { name: '', }
];
function castToString(arg) {
  const stringed = String(arg);
  return;
};


{
  console.groupEnd();
  document.body.appendChild(document.createElement('hr'));
}
