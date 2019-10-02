{
  const pageTitle = 'live study links';
  const header = document.createElement("h2");
  header.innerHTML = pageTitle;
  document.body.appendChild(header);
  console.groupCollapsed(pageTitle);
}





console.log(`along with a helpful console log, the evaluate function will automatically generate live links.
These links are designed to help you get the most out of studying each and every exercise:

- Implementation: exercises without test cases will automatically generate a link to JS Tutor with the code you submitted for evaluation

- Behavior: exercises with test cases will have links that open to Parsonizer so you can reconstruct the logic without worring about errors
`)

function studyMeInJSTutor() {
  let a = 'b', b = 'a', temp = ' ';

  temp = a;
  b = a;
  b = temp;

  console.assert(a === 'a', 'variable a should store string a');
  console.assert(b === 'b', 'variable b should store string b');
}
evaluate(studyMeInJSTutor);

const reverseTests = [
  { name: 'first reverse', args: ['asdf'], expected: 'fdsa' },
  { name: 'second reverse', args: ['jkl;'], expected: '; lkj' },
]
function studyMeInParsonizer(str) {
  const arrayed = str.split('');
  const reversed = arrayed.reverse();
  const reStringed = reversed.join('');
  return reStringed;
};
evaluate(studyMeInParsonizer, reverseTests)


{
  console.groupEnd();
  document.body.appendChild(document.createElement('hr'));
}
