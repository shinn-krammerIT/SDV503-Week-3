// 1.0 Arithmetic Operators
/* 
Operator    Description
    +       Addition
    -       Subtraction
    *       Multiply
    /       Divide
    %       Modulus
    **      Power
*/

// Assigning (=) is to assign a variable
// Equivalent (==) is the comparison check of different values
// Identical / Strict equality (===) is the comparison of datatype (Datatype check)

console.log(1 == "1"); // true - Because the num 1 is EQUIVALENT to the string of 1. Values within strings can be equivalent. 
console.log(1 === "1"); // false - Because the num 1 is not IDENTICAL to the string of 1
console.log(" ");

console.log(1 == true); // true - True as a Booleen is equivalent to the value of 1
console.log(1 === true); // false - True is not identical to the value of 1
console.log(" ");

console.log(0 == false); // true - False as a Booleen is equivalent to 0
console.log(0 === false); // false - false is not identical to the value of 0
console.log(" ")


// null
console.log(null + 1);
console.log(undefined > 0);
console.log(undefined + 1);
console.log(" ");

// 4 Logical Operators
/*
OR ||
AND &&
NOT !
*/

// 4.1.0: OR ||
console.log("OR || (Booleens)");
console.log(true || true); // Output: true - True or true is true because at least one is true
console.log(true || false); // Output: true - At least one is true therefore the if is true
console.log(false || true); // Output: true - At least one is true therefore the if is true
console.log(false || false); // Output: false - There is no true for either side therefore the if is false
console.log(" ");

console.log("OR || (Values)");
console.log(1 || 1); // Output: 1 - 
console.log(1 || 0);
console.log(0 || 1);
console.log(0 || 0);
console.log(" ");

console.log(false || true && true);