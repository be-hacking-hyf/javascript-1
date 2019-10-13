{
  const pageTitle = 'quizzing mode';
  const header = document.createElement("h2");
  header.innerHTML = pageTitle;
  document.body.appendChild(header);
  console.groupCollapsed(pageTitle);
}
try {


  console.log(`If you want to really push yourself and test your understanding of a function's behavior,
activate quiz mode!

add a property called 'quizzing' to a function, set it true, and the return value is hidden until you pass
`);

  const addTests = [
    { name: 'first test case', args: [4, 4], expected: 8 },
    { name: 'second test case', args: [3, 4], expected: 6 },
    { name: 'third test case', args: [-1, 1], expected: 0 },
    // write a few more tests!
  ];
  function add(a, b) {
    console.log('a:', typeof a, a)
    console.log('b:', typeof b, b)
    const result = a + b;
    return result;
  };
  add.quizzing = true;
  evaluate(add, addTests)


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

