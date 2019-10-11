// https://github.com/janke-learning/operator-precedence

{
  const pageTitle = 'operator precedence';
  const header = document.createElement("h2");
  header.innerHTML = pageTitle;
  document.body.appendChild(header);
  console.groupCollapsed(pageTitle);
}


// like '===' but it passes when both values are NaN
function areTheSame(a, b) {
  if (a !== a) {
    return b !== b;
  } else if (b !== b) {
    return false;
  } else {
    return a === b;
  }
}


{
  console.groupEnd();
  document.body.appendChild(document.createElement('hr'));
}
