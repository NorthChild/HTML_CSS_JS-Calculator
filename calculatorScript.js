let number1, number2;

// the user is required to choose two sets of numbers that are then stored as variables
function numRequest() {
  number1 = prompt('choose the first number to evaluate:');
  number2 = prompt('choose the second number to evaluate:');
  // just an external checker to see if the prompt is being saved
  console.log('first choice --> ' + number1);
  console.log('second choice --> ' + number2);
  // the numbers, stored as variables, are displayed on the calculator window
  document.getElementById('resBanner').innerHTML = ('you chose ' + number1 + ' and ' + number2);
}

// this is where the problem arises
// when i press the button that summons the function addition(), the two numbers arent
// defined for some reason
function addition() {
  var res = Number(number1) + Number(number2);
  document.getElementById('resBanner').innerHTML = res;
}


// function subtraction() {}

// function division() {}

// function multiplication() {}
