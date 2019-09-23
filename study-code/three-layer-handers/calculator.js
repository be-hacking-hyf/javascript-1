// ---- casting function ----
function to_numbers(a, b) {
  // what should happen if either one casts to NaN?
  // you decide!
  return [a, b]; 
}

// ---- add -----

function add(a, b) {
  return  "the sum of " + a + ' and ' + b;
}

function add_handler() {
  // read and process user input
  var first = document.getElementById('first-number').value;        
  var second = document.getElementById('second-number').value;        
 
  var nummed = to_numbers(first, second);
  console.assert(typeof nummed[0] === "number", 'first isn\'t a number,fix to_numbers!');
  console.assert(typeof nummed[1] === "number", 'second isn\'t a number,fix to_numbers!');

  // pass user input through core logic
  var result = add(nummed[0], nummed[1]); 

  // report result to user
  var output_field = document.getElementById('result');
  output_field.innerHTML = result;
}

// ---- subtract ----

function subtract(a, b) {
  return "the difference between " + a + ' and ' + b; 
}

function subtract_handler() {
  // read and process user input
  var first = document.getElementById('first-number').value;        
  var second = document.getElementById('second-number').value;        
  
  var nummed = to_numbers(first, second);
  console.assert(typeof nummed[0] === "number", 'first isn\'t a number,fix to_numbers!');
  console.assert(typeof nummed[1] === "number", 'second isn\'t a number,fix to_numbers!');

  // pass user input through core logic
  var result = subtract(nummed[0], nummed[1]); 

  // report result to user
  var output_field = document.getElementById('result');
  output_field.innerHTML = result; 
}

// ---- multiply ---

function multiply(a, b) {
  return "the product of " + a + ' and ' + b;
}

function multiply_handler() {
  // read and process user input
  var first = document.getElementById('first-number').value;        
  var second = document.getElementById('second-number').value;
  
  var nummed = to_numbers(first, second);
  console.assert(typeof nummed[0] === "number", 'first isn\'t a number,fix to_numbers!');
  console.assert(typeof nummed[1] === "number", 'second isn\'t a number,fix to_numbers!');

  // pass user input through core logic
  var result = multiply(nummed[0], nummed[1]); 

  // report result to user
  var output_field = document.getElementById('result');
  output_field.innerHTML = result; 
}

// --- divide ---

function divide(a, b) {
  return  "the quotient of " + a + ' and ' + b; 
}

function divide_handler() {
   // read and process user input
  var first = document.getElementById('first-number').value;        
  var second = document.getElementById('second-number').value;      
  
  var nummed = to_numbers(first, second);
  console.assert(typeof nummed[0] === "number", 'first isn\'t a number,fix to_numbers!');
  console.assert(typeof nummed[1] === "number", 'second isn\'t a number,fix to_numbers!');

  // pass user input through core logic
  var result = multiply(nummed[0], nummed[1]); 

  // report result to user
  var output_field = document.getElementById('result');
  output_field.innerHTML = result;
}
