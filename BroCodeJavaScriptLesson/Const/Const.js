/** Const - A variable that cant be changed*/


// constant variables use ALL CAPS in the variable name
const PI = 3.14;


// let pi = 3.14;
let radius;
let circumfrence;

radius = window.prompt("Enter  the radius of a circle")
radius = Number(radius);

circumfrence = 2 + pi * radius;

console.log("The circumference is " + circumfrence);