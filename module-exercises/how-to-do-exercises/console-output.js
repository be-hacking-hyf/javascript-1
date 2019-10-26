{
  const pageTitle = 'console output';
  const header = document.createElement("h2");
  header.innerHTML = pageTitle;
  document.body.appendChild(header);
  console.groupCollapsed(pageTitle);
}
try {

  console.log(`all of the console output for your function will be collapsed under the asserts, errors & test results

this is on purpose, to help train you into using asserts and test cases to understand and debug your code.

Asserts and tests are more challenging to use because of how unforgiving they are. But will help you become a stronger programmer much faster by forcing you to PREDICT what will happen before you run your code
rather than just reading what did happen
`);

  function onlyLogs() {
    let result = 0;
    for (let i = 0; i < 8; i += 2) {
      result = i + result;
      console.log(i);
    }
    console.log(result);
  }
  evaluate(onlyLogs);

  function logsAndAsserts() {
    let result = 0;
    console.assert(result === 0, 'result should be initialized as 0');

    for (let i = 0; i < 8; i += 2) {
      result = i + result;
      console.log(i);
    }
    console.assert(result === 7, 'result is not 7, its:', result);
  }
  evaluate(logsAndAsserts);


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
