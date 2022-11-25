/* Simple */

// global variables
var who = "wooden shoe";
var joke = "Wooden shoe like to know!";
var expected = who + " who?";

function knock() {
  prompt("Knock Knock!");
  prompt(who);
  alert(joke);
}

/* Better */

function knockCheck() {
  prompt("Knock Knock!");
  var answer = prompt(who);
  var expected = who + " who?";
  if (answer == expected) {
    alert(joke);
  }
  else {
    alert("Huh?");
  }
}

/* Best */

function knockAgain() {
  prompt("Knock Knock!");
  var answer = prompt(who);
  var expected = who + " who?";
  if (answer == expected) {
    alert(joke);
  }
  else {
    askAgain(expected);
  }
}

function askAgain(expected) {
  alert("Huh?");
  var newAnswer = prompt(who);
  if (newAnswer == expected) {
    alert(joke);
  }
  else {
    askAgain();
  }
}