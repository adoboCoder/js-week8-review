// "use strict"; // uncomment this line after the first run of the aNumber section
/**********************************/
// debugging section

let myGrades = [100, 100, 90, 73, 78, 94, 86];
let myAverage = 0;

// insert a breakpoint to the line below
for (let i = 1; i <= myGrades.length; i++) { 
    myAverage += myGrades[i];
}

myAverage = myAverage / myGrades.length;

console.log("My grade average is " + myAverage); // insert a breakpoint here


/**********************************/
// strict mode section
// uncomment the "use strict"; in line 1 after the first run

aNumber = 15; // insert a breakpoint here
console.log(aNumber + 15); // outputs 30


/**********************************/
// exceptions section

// function that adds two values that is not restricted to number values
const addNumbersUnrestricted = (first, second) => {
    return first + second;
};
  
console.log(addNumbersUnrestricted(2, 5));
console.log(addNumbersUnrestricted("some", "word"));

// function that adds two number values only, throws an exception if the arguments passed are not numbers
const addNumbersRestricted = (first, second) => {

    if (isNaN(first) || isNaN(second)) {
        throw new Error("Invalid input, must enter numbers!");
    }

    return first + second;
};

console.log(addNumbersRestricted(2, 5));
//console.log(addNumbersRestricted("some", "word")); // uncomment here, then insert breakpoint here

// create custom error
class InputError extends Error { }

// function that throws a custom error called InputError if the arguments passed are not numbers
const addNumbersRestrictedRevision2 = (first, second) => {

    if (isNaN(first) || isNaN(second)) {
        throw new InputError("Invalid input, must enter numbers!");
    }

    return parseInt(first) + parseInt(second);
};

// exception handling/recovery
// try-catch block
// run the html file to test this section
function addNumbersExceptionHandlingAndRecovery() {
    while (true) {
        let first = promptForNumber(); // prompt the user
        let second = promptForNumber(); // prompt the user
        try {
          let result = addNumbersRestrictedRevision2(first, second);
          window.alert(result);
          break; // This will break out of the infinite loop
        } catch (error) {
          console.log("Please enter only numeric values!");
          window.alert("Please enter only numeric values!");
        }
    }
   
}

function promptForNumber() {
    return window.prompt();
}

  
