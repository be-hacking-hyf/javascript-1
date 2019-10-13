{
  const pageTitle = 'errors';
  const header = document.createElement("h2");
  header.innerHTML = pageTitle;
  document.body.appendChild(header);
  console.groupCollapsed(pageTitle);
}
try {

  console.log(`if one of your functions throws an error, evaluate will let you know by turning red

to find the code that threw an error (directly in devtools!) expand the console output,
and click on the top or bottom line of the error readout

you an also find the code in your editor using the file name and line number in the logs
`);

  function throwsAnError() {
    throw new Error('find me with your debugger');
  }
  evaluate(throwsAnError);

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
