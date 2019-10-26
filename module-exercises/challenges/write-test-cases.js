{
  const pageTitle = 'write test cases';
  const header = document.createElement("h2");
  header.innerHTML = pageTitle;
  document.body.appendChild(header);
  console.groupCollapsed(pageTitle);
}
try {


  /* on cheating

  it's very easy to cheat on these exercises,
  all you have to do is write random args and copy the return value into 'expected'!

  but don't do that.

  use these exercises as an opportunity to practice reading and understanding new code
  make your best effort at predicting what will happen and use the console to check your guesses

  you may find it helps your understanding to add in console.asserts and logs, go for it!
  */


  const mysteryOneTests = [
    // write at least 7 test cases
  ];
  function mysteryOne(value) {
    if (value !== value) return NaN

    return [
      value + value,
      Number(value) + Number(value)
    ]
  }
  mysteryOne.quizzing = true;
  evaluate(mysteryOne, mysteryOneTests);


  const mysteryTwoTests = [
    // write at least 7 test cases
  ]
  function mysteryTwo(x) {
    const newObj = {};
    for (let item of x) {
      newObj[typeof item] instanceof Array
        ? newObj[typeof item].push(item)
        : newObj[typeof item] = [item]
    }
    return newObj;
  }
  mysteryTwo.quizzing = true;
  evaluate(mysteryTwo, mysteryTwoTests)


  const mysteryThreeTests = [
    // write at least 7 test cases
  ];
  function mysteryThree(x) {
    const sum = (a, b) => a + b
    const diff = (a, b) => a - b;
    return x <= 1 ? 1 : sum(mysteryThree(diff(x, 1)), mysteryThree(diff(x, 2)));
  }
  mysteryThree.quizzing = true;
  evaluate(mysteryThree, mysteryThreeTests);


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

