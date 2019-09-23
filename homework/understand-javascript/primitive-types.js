function typeExercise1() {
  const firstVariable = null;
  const secondVariable = null;

  console.assert(typeof firstVariable === 'string',
    'first variable should be a string');
  console.assert(typeof secondVariable === 'string',
    'second variable should be a string');
  console.assert(firstVariable !== secondVariable,
    'both variables should not store the same string');
}
evaluate(typeExercise1);
