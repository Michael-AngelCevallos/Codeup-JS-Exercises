// aMath keyword is an inrtinisic object that provides basic mathmateic functionality and constants

let x = 3.14;

// same as
console.log("Use Math.round for 3.14")
x = Math.round(x);
console.log(x);
/*

x = Math.round(x)- rounds number
x = Math.floor(x)-always rounds down
x = Math.ceil(x) - always rounds up
x = Math.pow(x, 2) - takes a number to a power of whatever number is enetered( this would be x to the power of 2)
x = Math.sqrt(x) - square roots the number
x = Math.abs(x) - absolute value - returns the distance away from zero
x = Math.PI(x)
 */

//find max and minimum
console.log("Find Maximum with Math.max");
let y = 5;
let z = 9;
let maximum;
let minimum;

maximum = Math.max(x, y ,z );
console.log(maximum);


console.log("Find Minimum with Math.min")
minimum = Math.min(x,y,z);
console.log(minimum)

console.log("Return Bigger PI number with Math.PI")
console.log(Math.PI)
