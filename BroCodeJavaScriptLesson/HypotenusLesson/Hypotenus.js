// find the hypotenuse of a triangle

let a;
let b;
let c;

a = window.prompt("Enter Side A");

/** when you except user input it is automatically a string so we need to convert it to a number*/
// declares the answer of a as a number
a = Number(a);

// do the same thing for side B

b= window.prompt("Enter Side B");
b = Number(b);


// enter formula for Hypotenuse( C squared = A squared + b squared // use Math.pow to square a number)
c = Math.pow(a, 2) + Math.pow(b, 2);

// now we have to square variable c,  since hypotenuse ask  for c(the answer) to be squared
c = Math.sqrt(c)

console.log(c);

