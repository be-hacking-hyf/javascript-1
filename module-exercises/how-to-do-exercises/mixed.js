{
  const pageTitle = 'mixed exercises';
  const header = document.createElement("h2");
  header.innerHTML = pageTitle;
  document.body.appendChild(header);
  console.groupCollapsed(pageTitle);
}
try {

  console.log(`some exercises will ask you to pass both asserts and test cases,
this type of exercise is more challenging and there won't be as many of them.

here's an example:`)

  const reverseCases = [
    { name: 'first', args: ['asdf'], expected: 'fdsa' },
    { name: 'second', args: [';lkj'], expected: 'jkl;' },
    { name: 'third', args: ['racecar'], expected: 'racecar' },
  ];
  function reverseString(str) {
    const arrayed = ''; // fix this line!
    console.assert(arrayed instanceof Array, 'should be an array');

    const reversed = ''; // fix this line!
    console.assert(reversed.length === arrayed.length, 'should have the same length');

    const reStringed = null; // fix this line!
    console.assert(typeof reStringed === 'string', 'should be a string');

    return reStringed;
  };
  evaluate(reverseString, reverseCases);


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
