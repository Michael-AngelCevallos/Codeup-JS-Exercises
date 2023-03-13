/** Type Conversion - Change the value type of datatype to another
 *                          (strings,numbers, booleans)     */




// returns 291 because that is what happens when add a number to string
let age = window.prompt("How old are you?");

/** ADD This Number to convert age to a Number, Now age will return 30 <---------*/
// use Typeof to return the type of variable of age// returns number now because this wqs console logged after the string age has been changed

console.log(typeof age);// returns String
age = Number(age);
console.log(typeof age);// returns Number because it has been changed by above statement

age = age + 1;
console.log("Happy Birthday! You are " + age + " old")


console.log(typeof age);

let x;
let y;
let z;

//turn String Data type to Number
x = Number("3.14");
console.log(x, typeof x);// returns 3.14 'number'

//to Number data type to String

y = String(3.14);
console.log(y, typeof y);

//

z = Boolean("");
console.log(z, typeof z);// returns false 'boolean'  because "" is not a boolean of true

z = Boolean("pizza");
console.log(z, typeof z);// returns true, because it changed the statement to true when you added characters to the value

z = Boolean(5);
console.log(z, typeof z);// also returns true because you now have a character in the value field