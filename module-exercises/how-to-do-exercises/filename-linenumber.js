{
  const pageTitle = 'file name, line number';
  const header = document.createElement("h2");
  header.innerHTML = pageTitle;
  document.body.appendChild(header);
  console.groupCollapsed(pageTitle);
}
try {

  console.log(`at the beginning of each evaluation output, you'll find a grey message.
This message tells you where to find this evaluation in the source code.

An important skill is knowing how to connect lines of source code to console output.

you can even find the source directly from the devtools!
if you open the debugger, you can navigate through the source code of this web page a lot like you do in VSC.`);

  function findMeInTheSourceCode(str) {
    console.log('click on the link over there -->');
    // found me!
  };
  evaluate(findMeInTheSourceCode);

  console.log(`pro tip:  expand the console output, if there are any logs you can  click the link on the right side ;)`);

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
