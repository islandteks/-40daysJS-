/*
 Variables can be used to store values 

 let and const are used
 var -- not needed even though available
 
 let fruit = "mango";
 let fruit = carrots;

 let - variable names can be reassinged
 const - constant cannot be reassigned

 Rules
 The name must have digits or letters
 Variable names can have $ _
 First char must not be a digit
 No Reserved Keywords

 **Primitive Data Types
 -String
 -Number
 -Boolean
 -Undefined
 -BigInt
 -Symbol

 Non-Primitive Data Tyoes
 -Object - Collection of key-value pairs
 -Array - Ordered list of values
 -Function -  Code that can be executed


 */

let firstName = 'John';
const age = 34;
let isStudent = false;
let language = 'Php';

console.log(firstName, age, isStudent, language);

let age = 35;

/* redeclare errors using let and const */
const car = {
  model: 'BMW',
  year: 2024,
  make: 'Euro',
  color: 'midnight black',
};

const colors = ['red', 'yellow', 'blue'];
