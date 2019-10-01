// https://javascript.info/while-for
// https://github.com/colevandersWands/loop-refactors

{
  const pageTitle = 'loops';
  const header = document.createElement("h2");
  header.innerHTML = pageTitle;
  document.body.appendChild(header);
  console.groupCollapsed(pageTitle);
}


// very in progress

function example_forAndWhileLoops() {

  let i = 0;
  while (i < 4) {
    console.log(i);
    i++;
  }

  for (let i = 0; i < 4; i++) {
    console.log(i);
  }

}
evaluate(example_forAndWhileLoops);


{
  console.groupEnd();
  document.body.appendChild(document.createElement('hr'));
}
