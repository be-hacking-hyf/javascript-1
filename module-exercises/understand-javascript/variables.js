// https://github.com/janke-learning/variables-and-hoisting
// https://github.com/janke-learning/variable-exercises

{
  const pageTitle = 'variables';
  const header = document.createElement("h2");
  header.innerHTML = pageTitle;
  document.body.appendChild(header);
  console.groupCollapsed(pageTitle);
}


// this example covers only let & const
function example_declarationAndAssignment() {

  // declaring a new "let" variable opens a new labeled slot in memory
  // if no value is assigned, the default value is 'undefined'
  let declaredLetWithoutAssignment;

  // setting or resetting the value stored in the slot is "assignment"
  declaredLetWithoutAssignment = 'assigned after declaration';

  // accessing a const/let variable before it is declared will error
  // declaredLetWithAssignment; // uncomment his line for an error!

  // you will generally do both declaration and assignment at once
  // notice how this slot is only created when this line is reached?
  let declaredLetWithAssignment = 'assigned at declaration';

  // variables declared with 'let' can have their values reassigned later on
  declaredLetNoAssignment = 'new value';
  declaredLetWithAssignment = 'another new value';


  // const variables cannot be declared without an assignment
  const constantVariable = 'forever!';
  // const errorTime; // uncomment this for an error!

  // const variables cannot be reassigned later in the program
  constantVariable = 'error time';

}
evaluate(example_declarationAndAssignment);



{
  console.groupEnd();
  document.body.appendChild(document.createElement('hr'));
}
