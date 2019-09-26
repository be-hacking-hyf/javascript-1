// https://github.com/janke-learning/errors-and-life-cycle
// https://github.com/janke-learning/error-exercises

{
  const pageTitle = 'errors and program life cycle';
  const header = document.createElement("h2");
  header.innerHTML = pageTitle;
  document.body.appendChild(header);
  console.groupCollapsed(pageTitle);
}


function variableError1() {
  const x = 1;
  x++;
}
evaluate(variableError1);



{
  console.groupEnd();
  document.body.appendChild(document.createElement('hr'));
}

