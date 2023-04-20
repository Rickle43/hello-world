
// Is Truthy

// Pseudocode:

// Set variable value to "I am a string"
// Check if value is truthy using an if statement
// If value is truthy, print "true"
// If value is falsy, check its value using a series of else if statements:
// a. If value is false, print "The boolean value false is falsy"
// b. If value is null, print "The null value is falsy"
// c. If value is undefined, print "undefined is falsy"
// d. If value is 0, print "The number 0 is falsy (the only falsy number)"
// e. If value is "", print "The empty string is falsy (the only falsy string)"

      let value = "I am a string";
      if (value) {
        console.log(true);
      } else if (value === false) {
        console.log("The boolean value false is falsy");
      } else if (value === null) {
        console.log("The null value is falsy");
      } else if (value === undefined) {
        console.log("undefined is falsy");
      } else if (value === 0) {
        console.log("The number 0 is falsy (the only falsy number)");
      } else if (value === "") {
        console.log("The empty string is falsy (the only falsy string)");
      }


     
// -----------------------------------------------------------------------------------------------------------------------------------    
     
//  Number Line

      
// Pseudocode:

// Declare variables num1, num2, and sum
// Assign values to num1 and num2
// Calculate sum by adding num1 and num2
// Check if sum is less than -1000
// If true, print sum + " is less than -1000"
// If false, check if sum is less than 0
// If true, print sum + " is a negative number"
// If false, check if sum is equal to 0
// If true, print sum + " is equal to 0"
// If false, check if sum is larger than 0 and less than or equal to 100
// If true, print sum + " is larger than 0"
// If false, check if sum is greater than 100
// If true, print sum + " is greater than 100"


      let num1 = -1000;
      let num2 = 0;
      let sum = num1 + num2;
      
      if (sum < -1000) {
        console.log(sum + " is less than -1000");
      } else if (sum < 0) {
        console.log(sum + " is a negative number");
      } else if (sum === 0) {
        console.log(sum + " is equal to 0");
      } else if (sum > 0 && sum <= 100) {
        console.log(sum + " is larger than 0");
      } else if (sum > 100) {
        console.log(sum + " is greater than 100");
      }


//  -----------------------------------------------------------------------------------------------------------------------------------

//       Greater than 5

//       Pseudocode:

    //   Declare variables a and b and assign them the values 5 and 6, respectively.
    //   Check if both a and b are greater than or equal to 5.
    //   If both a and b are greater than or equal to 5, print "true".
    //   If either a or b is less than 5, print "false".

      
      let a = 5;
      let b = 6;
      
      if (a >= 5 && b >= 5) {
        console.log(true);
      } else {
        console.log(false);
      }
   

// -----------------------------------------------------------------------------------------------------------------------------------

// Pair and Compare

// Pseudocode:

// Initialize variables param1A, param1B, param2A, and param2B with appropriate values.
// Check if either param1A is strictly equal to param1B OR param2A is strictly equal to the integer conversion of param2B.
// If true, print true. Otherwise, print false.


let param1A = "cat";
let param1B = "cat";
let param2A = 6;
let param2B = "6";

if (param1A === param1B || param2A === param2B) {
  console.log(true);
} else {
  console.log(false);
}
